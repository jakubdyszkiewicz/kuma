package k8s

import (
	"context"
	"encoding/json"

	"github.com/pkg/errors"
	apiextensionsv1 "k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1"
	kube_apierrs "k8s.io/apimachinery/pkg/api/errors"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	kube_client "sigs.k8s.io/controller-runtime/pkg/client"

	"github.com/kumahq/kuma/pkg/core"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/store"
	k8s_common "github.com/kumahq/kuma/pkg/plugins/common/k8s"
)

type ExtensionResourceStore struct {
	Client    kube_client.Client
	Converter k8s_common.Converter
}

func (e *ExtensionResourceStore) Create(ctx context.Context, resource model.Resource, optionsFunc ...store.CreateOptionsFunc) error {
	//TODO implement me
	panic("implement me")
}

func (e *ExtensionResourceStore) Update(ctx context.Context, resource model.Resource, optionsFunc ...store.UpdateOptionsFunc) error {
	//TODO implement me
	panic("implement me")
}

func (e *ExtensionResourceStore) Delete(ctx context.Context, resource model.Resource, optionsFunc ...store.DeleteOptionsFunc) error {
	//TODO implement me
	panic("implement me")
}

func (e *ExtensionResourceStore) Get(ctx context.Context, r model.Resource, fs ...store.GetOptionsFunc) error {
	opts := store.NewGetOptions(fs...)
	obj, err := e.Converter.ToKubernetesObject(r)
	if err != nil {
		if typeIsUnregistered(err) {
			return store.ErrorResourceNotFound(r.Descriptor().Name, opts.Name, opts.Mesh)
		}
		return errors.Wrapf(err, "failed to convert core model of type %s into k8s counterpart", r.Descriptor().Name)
	}
	name, namespace, err := k8sNameNamespace(opts.Name, obj.Scope())
	if err != nil {
		return err
	}

	uObj := &unstructured.Unstructured{
		Object: map[string]interface{}{
			"apiVersion": "kuma.io/v1alpha1",
			"kind":       string(r.Descriptor().Name),
		},
	}

	if err := e.Client.Get(ctx, kube_client.ObjectKey{Namespace: namespace, Name: name}, uObj); err != nil {
		if kube_apierrs.IsNotFound(err) {
			return store.ErrorResourceNotFound(r.Descriptor().Name, opts.Name, opts.Mesh)
		}
		return errors.Wrap(err, "failed to get k8s resource")
	}

	er, err := unstructuredToExtensionResourceK8s(uObj)
	if err != nil {
		return err
	}

	if err := e.Converter.ToCoreResource(er, r); err != nil {
		return errors.Wrap(err, "failed to convert k8s model into core counterpart")
	}
	if opts.Version != "" && r.GetMeta().GetVersion() != opts.Version {
		return store.ErrorResourcePreconditionFailed(r.Descriptor().Name, opts.Name, opts.Mesh)
	}
	if r.GetMeta().GetMesh() != opts.Mesh {
		return store.ErrorResourceNotFound(r.Descriptor().Name, opts.Name, opts.Mesh)
	}

	return nil
}

func unstructuredToExtensionResourceK8s(u *unstructured.Unstructured) (*ExtensionResource, error) {
	metadataMap := u.Object["metadata"].(map[string]interface{})
	metaBytes, err := json.Marshal(metadataMap)
	if err != nil {
		return nil, err
	}
	core.Log.Info("metabytes", "meta", string(metaBytes))
	meta := v1.ObjectMeta{}
	if err := json.Unmarshal(metaBytes, &meta); err != nil {
		return nil, errors.Wrap(err, "could not unmarshhal meta")
	}

	specBytes, err := json.Marshal(u.Object["spec"])
	if err != nil {
		return nil, err
	}

	er := &ExtensionResource{}
	er.ObjectMeta = meta
	er.Mesh = u.Object["mesh"].(string)
	er.Spec = &apiextensionsv1.JSON{
		Raw: specBytes,
	}
	return er, nil
}

func (e *ExtensionResourceStore) List(ctx context.Context, rs model.ResourceList, fs ...store.ListOptionsFunc) error {
	opts := store.NewListOptions(fs...)

	uList := unstructured.UnstructuredList{
		Object: map[string]interface{}{
			"apiVersion": "kuma.io/v1alpha1",
			"kind":       string(rs.GetItemType()) + "List",
		},
	}
	if err := e.Client.List(ctx, &uList); err != nil {
		return errors.Wrap(err, "failed to list k8s resources")
	}

	for _, item := range uList.Items {
		er, err := unstructuredToExtensionResourceK8s(&item)
		if err != nil {
			return err
		}

		if opts.Mesh != "" && opts.Mesh != er.Mesh {
			continue
		}

		coreItem := rs.NewItem()
		if err := e.Converter.ToCoreResource(er, coreItem); err != nil {
			return errors.Wrap(err, "failed to convert k8s model into core counterpart")
		}

		if err := rs.AddItem(coreItem); err != nil {
			return err
		}
	}

	rs.GetPagination().SetTotal(uint32(len(uList.Items)))

	return nil
}

var _ store.ResourceStore = &ExtensionResourceStore{}
