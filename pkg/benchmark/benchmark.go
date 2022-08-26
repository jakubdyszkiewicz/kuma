package benchmark

import (
	"fmt"
	"os"
	"os/exec"
	"time"

	envoy_listener_v3 "github.com/envoyproxy/go-control-plane/envoy/config/listener/v3"
	protov1 "github.com/golang/protobuf/proto"
	"github.com/hashicorp/go-hclog"
	"github.com/hashicorp/go-plugin"
	"google.golang.org/protobuf/proto"

	"github.com/kumahq/kuma/api/mesh/v1alpha1"
	"github.com/kumahq/kuma/pkg/core"
	"github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/registry"
	"github.com/kumahq/kuma/pkg/core/xds"
	test_model "github.com/kumahq/kuma/pkg/test/resources/model"
	"github.com/kumahq/kuma/pkg/xds/envoy"
	"github.com/kumahq/kuma/pkg/xds/envoy/listeners"
)

var handshakeConfig = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "BASIC_PLUGIN",
	MagicCookieValue: "hello",
}

var pluginMap = map[string]plugin.Plugin{
	"xdsHook": &XDSHookPlugin{},
}

func Setup() error {
	hook, err := remoteXDSHook()
	if err != nil {
		return err
	}

	//gob.Register(ExtensionResource{})
	//gob.Register(ExtensionResourceList{})
	descriptor, err := hook.PolicyDescriptor()
	if err != nil {
		return err
	}
	descriptor.Resource = NewExtensionResource(descriptor.Name)
	descriptor.ResourceList = &ExtensionResourceList{
		Type: descriptor.Name,
	}
	core.Log.Info("policydesc", "desc", descriptor)

	if err := registry.Global().RegisterType(descriptor); err != nil {
		return err
	}

	rs, err := testResourceSet()
	if err != nil {
		return err
	}
	kumaResources := testKumaResources()

	for i := 0; i < 0; i++ {
		time.Sleep(7 * time.Millisecond)
		go func() {
			for {
				now := time.Now()
				err := benchmark(hook, rs, kumaResources)
				took := time.Now().Sub(now)
				if err != nil {
					core.Log.Error(err, "test failed")
				}
				core.Log.Info("RPC done. It took", "took", took)
				time.Sleep(1 * time.Second)
			}
		}()
	}
	return nil
}

func benchmark(hook XDSHook, rs *xds.ResourceSet, kumaResources []core_model.Resource) error {
	// marshall
	data := XDSHookData{}
	for _, res := range rs.List() {
		resBytes, err := proto.Marshal(protov1.MessageV2(res.Resource))
		if err != nil {
			return err
		}
		data.Resources = append(data.Resources, XDSResource{
			ID: XDSResourceID{
				Name: res.Name,
				Type: string(protov1.MessageV2(res.Resource).ProtoReflect().Descriptor().FullName()),
			},
			Origin:   res.Origin,
			Resource: resBytes,
		})
	}

	for _, res := range kumaResources {
		resBytes, err := proto.Marshal(res.GetSpec())
		if err != nil {
			return err
		}
		data.Policies = append(data.Policies, Policy{
			Name: res.GetMeta().GetName(),
			Mesh: res.GetMeta().GetMesh(),
			Type: string(res.Descriptor().Name),
			Spec: resBytes,
		})
	}

	// send
	resp, err := hook.Modifications(XDSHookData{})
	for _, res := range resp.Update {
		l := envoy_listener_v3.Listener{}
		if err := proto.Unmarshal(res.Resource, &l); err != nil {
			return err
		}
	}

	return err
}

func testResourceSet() (*xds.ResourceSet, error) {
	rs := xds.NewResourceSet()
	for i := 0; i < 1000; i++ {
		listener, err := listeners.NewListenerBuilder(envoy.APIV3).
			Configure(listeners.InboundListener(fmt.Sprintf("listener-%d", i), "127.0.0.1", 80, 0)).
			Configure(listeners.FilterChain(
				listeners.NewFilterChainBuilder(envoy.APIV3).
					Configure(listeners.HttpConnectionManager("test", false)),
			)).
			Build()
		if err != nil {
			return nil, err
		}
		rs.Add(&xds.Resource{
			Name:     listener.GetName(),
			Origin:   "inbound",
			Resource: listener,
		})
	}
	return rs, nil
}

func testKumaResources() []core_model.Resource {
	var res []core_model.Resource
	for i := 0; i < 1000; i++ {
		tp := mesh.TrafficPermissionResource{
			Meta: &test_model.ResourceMeta{
				Mesh: fmt.Sprintf("res-%d", i),
				Name: "default",
			},
			Spec: &v1alpha1.TrafficPermission{
				Sources: []*v1alpha1.Selector{
					{
						Match: map[string]string{
							"xyz": core.NewUUID(),
						},
					},
				},
				Destinations: []*v1alpha1.Selector{
					{
						Match: map[string]string{
							"xyz": core.NewUUID(),
						},
					},
				},
			},
		}
		res = append(res, &tp)
	}
	return res
}

func remoteXDSHook() (XDSHook, error) {
	logger := hclog.New(&hclog.LoggerOptions{
		Name:   "plugin",
		Output: os.Stdout,
		Level:  hclog.Debug,
	})
	client := plugin.NewClient(&plugin.ClientConfig{
		HandshakeConfig: handshakeConfig,
		Plugins:         pluginMap,
		Cmd:             exec.Command("/Users/jakub/kong/go-plugins-new-cluster/plugin"),
		Logger:          logger,
	})
	rpcClient, err := client.Client()
	if err != nil {
		return nil, err
	}
	raw, err := rpcClient.Dispense("xdsHook")
	if err != nil {
		return nil, err
	}
	return raw.(XDSHook), nil
}
