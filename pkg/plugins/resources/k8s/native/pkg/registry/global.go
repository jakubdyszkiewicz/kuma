package registry

import (
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/model"
)

var global = NewTypeRegistry()

func Global() TypeRegistry {
	return global
}

func RegisterObjectType(typ core_model.ResourceType, obj model.KubernetesObject) {
	if err := global.RegisterObjectType(typ, obj); err != nil {
		panic(err)
	}
}

func RegisterObjectTypeIfAbsent(typ core_model.ResourceType, obj model.KubernetesObject) {
	global.RegisterObjectTypeIfAbsent(typ, obj)
}

func RegisterListType(typ core_model.ResourceType, obj model.KubernetesList) {
	if err := global.RegisterListType(typ, obj); err != nil {
		panic(err)
	}
}

func RegisterListTypeIfAbsent(typ core_model.ResourceType, obj model.KubernetesList) {
	global.RegisterListTypeIfAbsent(typ, obj)
}
