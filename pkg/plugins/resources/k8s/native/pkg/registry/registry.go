package registry

import (
	"fmt"

	"github.com/pkg/errors"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
)

// UnknownTypeError is returned by NewObject and NewList when the
// requested object type has not been registered.
type UnknownTypeError struct{ name string }

var _ error = &UnknownTypeError{}

func (u *UnknownTypeError) Error() string {
	return fmt.Sprintf("unknown message type: %q", u.name)
}

func (u *UnknownTypeError) Typename() string {
	return u.name
}

func NewTypeRegistry() TypeRegistry {
	return &typeRegistry{
		objectTypes:     make(map[core_model.ResourceType]model.KubernetesObject),
		objectListTypes: make(map[core_model.ResourceType]model.KubernetesList),
	}
}

var _ TypeRegistry = &typeRegistry{}

type typeRegistry struct {
	objectTypes     map[core_model.ResourceType]model.KubernetesObject
	objectListTypes map[core_model.ResourceType]model.KubernetesList
}

func (r *typeRegistry) RegisterObjectType(typ core_model.ResourceType, obj model.KubernetesObject) error {
	if previous, ok := r.objectTypes[typ]; ok {
		return errors.Errorf("duplicate registration of KubernetesObject type under name %q: previous=%#v new=%#v", typ, previous, obj)
	}
	r.objectTypes[typ] = obj
	return nil
}

func (r *typeRegistry) RegisterObjectTypeIfAbsent(typ core_model.ResourceType, obj model.KubernetesObject) {
	if _, exists := r.objectTypes[typ]; exists {
		return
	}
	r.objectTypes[typ] = obj
}

func (r *typeRegistry) RegisterListType(typ core_model.ResourceType, obj model.KubernetesList) error {
	if previous, ok := r.objectListTypes[typ]; ok {
		return errors.Errorf("duplicate registration of KubernetesList type under name %q: previous=%#v new=%#v", typ, previous, obj)
	}
	r.objectListTypes[typ] = obj
	return nil
}

func (r *typeRegistry) RegisterListTypeIfAbsent(typ core_model.ResourceType, obj model.KubernetesList) {
	if _, exists := r.objectListTypes[typ]; exists {
		return
	}
	r.objectListTypes[typ] = obj
}

func (r *typeRegistry) NewObject(typ core_model.ResourceType) (model.KubernetesObject, error) {
	if obj, ok := r.objectTypes[typ]; ok {
		return obj.DeepCopyObject().(model.KubernetesObject), nil
	}
	return nil, &UnknownTypeError{name: string(typ)}
}

func (r *typeRegistry) NewList(typ core_model.ResourceType) (model.KubernetesList, error) {
	if obj, ok := r.objectListTypes[typ]; ok {
		return obj.DeepCopyObject().(model.KubernetesList), nil
	}
	return nil, &UnknownTypeError{name: string(typ)}
}
