package registry

import (
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
)

type TypeRegistry interface {
	RegisterObjectType(core_model.ResourceType, model.KubernetesObject) error
	RegisterObjectTypeIfAbsent(core_model.ResourceType, model.KubernetesObject)
	RegisterListType(core_model.ResourceType, model.KubernetesList) error
	RegisterListTypeIfAbsent(core_model.ResourceType, model.KubernetesList)

	NewObject(core_model.ResourceType) (model.KubernetesObject, error)
	NewList(core_model.ResourceType) (model.KubernetesList, error)
}
