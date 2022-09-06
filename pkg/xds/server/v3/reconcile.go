package v3

import (
	"context"

	envoy_core "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_listener_v3 "github.com/envoyproxy/go-control-plane/envoy/config/listener/v3"
	envoy_types "github.com/envoyproxy/go-control-plane/pkg/cache/types"
	envoy_cache "github.com/envoyproxy/go-control-plane/pkg/cache/v3"
	envoy_resource "github.com/envoyproxy/go-control-plane/pkg/resource/v3"
	protov1 "github.com/golang/protobuf/proto"
	"github.com/pkg/errors"
	"google.golang.org/protobuf/proto"

	"github.com/kumahq/kuma/pkg/core"
	model "github.com/kumahq/kuma/pkg/core/xds"
	util_xds "github.com/kumahq/kuma/pkg/util/xds"
	xds_context "github.com/kumahq/kuma/pkg/xds/context"
	"github.com/kumahq/kuma/pkg/xds/generator"
	"github.com/kumahq/kuma/pkg/xds/generator/modifications"
	xds_hooks "github.com/kumahq/kuma/pkg/xds/hooks"
	xds_sync "github.com/kumahq/kuma/pkg/xds/sync"
	xds_template "github.com/kumahq/kuma/pkg/xds/template"
)

var (
	reconcileLog = core.Log.WithName("xds-server").WithName("reconcile")
)

var _ xds_sync.SnapshotReconciler = &reconciler{}

type reconciler struct {
	generator      snapshotGenerator
	cacher         snapshotCacher
	statsCallbacks util_xds.StatsCallbacks
}

func (r *reconciler) Clear(proxyId *model.ProxyId) error {
	nodeId := &envoy_core.Node{Id: proxyId.String()}
	r.clearUndeliveredConfigStats(nodeId)
	r.cacher.Clear(nodeId)
	return nil
}

func (r *reconciler) clearUndeliveredConfigStats(nodeId *envoy_core.Node) {
	snap, err := r.cacher.Get(nodeId)
	if err != nil {
		return // already cleared
	}
	for _, res := range snap.Resources {
		if res.Version != "" {
			r.statsCallbacks.DiscardConfig(res.Version)
		}
	}
}

func (r *reconciler) Reconcile(ctx xds_context.Context, proxy *model.Proxy) error {
	node := &envoy_core.Node{Id: proxy.Id.String()}
	snapshot, err := r.generator.GenerateSnapshot(ctx, proxy)
	if err != nil {
		return errors.Wrapf(err, "failed to generate a snapshot")
	}

	// To avoid assigning a new version every time, compare with
	// the previous snapshot and reuse its version whenever possible,
	// fallback to UUID otherwise
	previous, err := r.cacher.Get(node)
	if err != nil {
		previous = envoy_cache.Snapshot{}
	}

	snapshot, changed := autoVersion(previous, snapshot)

	resKey := proxy.Id.ToResourceKey()
	log := reconcileLog.WithValues("proxyName", resKey.Name, "mesh", resKey.Mesh)

	// Validate the resources we reconciled before sending them
	// to Envoy. This ensures that we have as much in-band error
	// information as possible, which is especially useful for tests
	// that don't actually program an Envoy instance.
	if len(changed) > 0 {
		for _, resources := range snapshot.Resources {
			for name, resource := range resources.Items {
				if err := validateResource(resource.Resource); err != nil {
					return errors.Wrapf(err, "invalid resource %q", name)
				}
			}
		}

		if err := snapshot.Consistent(); err != nil {
			log.Error(err, "inconsistent snapshot", "snapshot", snapshot, "proxy", proxy)
			return errors.Wrap(err, "inconsistent snapshot")
		}
		log.Info("config has changed", "versions", changed)
	} else {
		log.V(1).Info("config is the same")
	}

	if err := r.cacher.Cache(node, snapshot); err != nil {
		return errors.Wrap(err, "failed to store snapshot")
	}

	for _, version := range changed {
		r.statsCallbacks.ConfigReadyForDelivery(version)
	}

	return nil
}

func validateResource(r envoy_types.Resource) error {
	switch v := r.(type) {
	// Newer go-control-plane versions have `ValidateAll()` method, that accumulates as many validation errors as possible.
	case interface{ ValidateAll() error }:
		return v.ValidateAll()
	// Older go-control-plane stops validation at the first error.
	case interface{ Validate() error }:
		return v.Validate()
	default:
		return nil
	}
}

func autoVersion(old envoy_cache.Snapshot, new envoy_cache.Snapshot) (envoy_cache.Snapshot, []string) {
	for resourceType, resources := range old.Resources {
		switch envoy_types.ResponseType(resourceType) {
		case envoy_types.Listener:
			new.Resources[resourceType] = reuseVersionListener(resources, new.Resources[resourceType])
		case envoy_types.Cluster:
			new.Resources[resourceType] = reuseVersionCluster(resources, new.Resources[resourceType])
		case envoy_types.Endpoint:
			new.Resources[resourceType] = reuseVersionEndpoint(resources, new.Resources[resourceType])
		default:
			new.Resources[resourceType] = reuseVersion(resources, new.Resources[resourceType])
		}
	}

	var changed []string
	for resourceType, resource := range new.Resources {
		if old.Resources[resourceType].Version != resource.Version {
			changed = append(changed, resource.Version)
		}
	}

	return new, changed
}

func reuseVersionCluster(old, new envoy_cache.Resources) envoy_cache.Resources {
	new.Version = old.Version
	if !equalSnapshots(old.Items, new.Items) {
		new.Version = core.NewUUID()
	}
	return new
}

func reuseVersionListener(old, new envoy_cache.Resources) envoy_cache.Resources {
	new.Version = old.Version
	if !equalSnapshots(old.Items, new.Items) {
		new.Version = core.NewUUID()
	}
	return new
}

func reuseVersionEndpoint(old, new envoy_cache.Resources) envoy_cache.Resources {
	new.Version = old.Version
	if !equalSnapshots(old.Items, new.Items) {
		new.Version = core.NewUUID()
	}
	return new
}

func reuseVersion(old, new envoy_cache.Resources) envoy_cache.Resources {
	new.Version = old.Version
	if !equalSnapshots(old.Items, new.Items) {
		new.Version = core.NewUUID()
	}
	return new
}

func equalSnapshots(old, new map[string]envoy_types.ResourceWithTTL) bool {
	if len(new) != len(old) {
		return false
	}
	for key, newValue := range new {
		if oldValue, hasOldValue := old[key]; !hasOldValue || !protov1.Equal(newValue.Resource, oldValue.Resource) {
			return false
		}
	}
	return true
}

type snapshotGenerator interface {
	GenerateSnapshot(ctx xds_context.Context, proxy *model.Proxy) (envoy_cache.Snapshot, error)
}

type templateSnapshotGenerator struct {
	ProxyTemplateResolver xds_template.ProxyTemplateResolver
	ResourceSetHooks      []xds_hooks.ResourceSetHook
	ModificationsHooks    []xds_hooks.ModificationsHook
}

func (s *templateSnapshotGenerator) GenerateSnapshot(ctx xds_context.Context, proxy *model.Proxy) (envoy_cache.Snapshot, error) {
	template := s.ProxyTemplateResolver.GetTemplate(proxy)

	gen := generator.ProxyTemplateGenerator{ProxyTemplate: template}

	rs, err := gen.Generate(ctx, proxy)
	if err != nil {
		reconcileLog.Error(err, "failed to generate a snapshot", "proxy", proxy, "template", template)
		return envoy_cache.Snapshot{}, err
	}

	for _, hook := range s.ResourceSetHooks {
		if err := hook.Modify(rs, ctx, proxy); err != nil {
			return envoy_cache.Snapshot{}, errors.Wrapf(err, "could not apply hook %T", hook)
		}
	}

	for _, hook := range s.ModificationsHooks {
		data := xds_hooks.XDSHookData{}
		for _, res := range rs.List() {
			if _, ok := res.Resource.(*envoy_listener_v3.Listener); !ok {
				continue
			}

			resBytes, err := proto.Marshal(protov1.MessageV2(res.Resource))
			if err != nil {
				return envoy_cache.Snapshot{}, err
			}
			data.Resources = append(data.Resources, xds_hooks.XDSResource{
				ID: xds_hooks.XDSResourceID{
					Name: res.Name,
					Type: string(protov1.MessageV2(res.Resource).ProtoReflect().Descriptor().FullName()),
				},
				Origin:   res.Origin,
				Resource: resBytes,
			})
		}

		resBytes, err := proto.Marshal(proxy.Dataplane.Spec)
		if err != nil {
			return envoy_cache.Snapshot{}, err
		}
		data.Dataplane = xds_hooks.Policy{
			Name: proxy.Dataplane.Meta.GetName(),
			Mesh: proxy.Dataplane.Meta.GetMesh(),
			Type: string(proxy.Dataplane.Descriptor().Name),
			Spec: resBytes,
		}

		for _, res := range ctx.Mesh.Resources.ListOrEmpty("Tap").GetItems() {
			resBytes, err := proto.Marshal(res.GetSpec())
			if err != nil {
				return envoy_cache.Snapshot{}, err
			}
			data.Policies = append(data.Policies, xds_hooks.Policy{
				Name: res.GetMeta().GetName(),
				Mesh: res.GetMeta().GetMesh(),
				Type: string(res.Descriptor().Name),
				Spec: resBytes,
			})
		}

		// policies
		mods, err := hook.Modifications(data)
		if err != nil {
			return envoy_cache.Snapshot{}, errors.Wrap(err, "error from plugin")
		}
		for _, res := range mods.Update {
			// todo all types
			l := envoy_listener_v3.Listener{}
			if err := proto.Unmarshal(res.Resource, &l); err != nil {
				return envoy_cache.Snapshot{}, err
			}
			rs.Add(&model.Resource{
				Name:     res.ID.Name,
				Origin:   res.Origin,
				Resource: &l,
			})
		}
	}
	if err := modifications.Apply(rs, template.GetConf().GetModifications(), proxy.APIVersion); err != nil {
		return envoy_cache.Snapshot{}, errors.Wrap(err, "could not apply modifications")
	}

	version := "" // empty value is a sign to other components to generate the version automatically
	resources := map[envoy_resource.Type][]envoy_types.Resource{}

	for _, resourceType := range rs.ResourceTypes() {
		resources[resourceType] = append(resources[resourceType], rs.ListOf(resourceType).Payloads()...)
	}

	return envoy_cache.NewSnapshot(version, resources)
}

type snapshotCacher interface {
	Get(*envoy_core.Node) (envoy_cache.Snapshot, error)
	Cache(*envoy_core.Node, envoy_cache.Snapshot) error
	Clear(*envoy_core.Node)
}

type simpleSnapshotCacher struct {
	hasher envoy_cache.NodeHash
	store  envoy_cache.SnapshotCache
}

func (s *simpleSnapshotCacher) Get(node *envoy_core.Node) (envoy_cache.Snapshot, error) {
	return s.store.GetSnapshot(s.hasher.ID(node))
}

func (s *simpleSnapshotCacher) Cache(node *envoy_core.Node, snapshot envoy_cache.Snapshot) error {
	return s.store.SetSnapshot(context.TODO(), s.hasher.ID(node), snapshot)
}

func (s *simpleSnapshotCacher) Clear(node *envoy_core.Node) {
	s.store.ClearSnapshot(s.hasher.ID(node))
}
