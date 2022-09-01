package externalpolicy

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/core/resources/registry"
	"github.com/kumahq/kuma/pkg/plugins/resources/k8s"
	registry2 "github.com/kumahq/kuma/pkg/plugins/resources/k8s/native/pkg/registry"
)

func RegisterExtensionResource(desc core_model.ResourceTypeDescriptor) error {
	desc.Resource = core_model.NewExtensionResource(desc.Name)
	desc.ResourceList = &core_model.ExtensionResourceList{
		Type: desc.Name,
		Desc: desc,
	}
	if err := registry.Global().RegisterType(desc); err != nil {
		return err
	}
	return nil
}

func RegisterKubernetesExtensionResource(desc core_model.ResourceTypeDescriptor) error {
	err := registry2.Global().RegisterObjectType(desc.Name, &k8s.ExtensionResource{
		TypeMeta: metav1.TypeMeta{
			APIVersion: schema.GroupVersion{Group: "kuma.io", Version: "v1alpha1"}.String(),
			Kind:       string(desc.Name),
		},
	})
	if err != nil {
		return err
	}
	registry2.RegisterListType(desc.Name, &k8s.ExtensionResourceList{
		TypeMeta: metav1.TypeMeta{
			APIVersion: schema.GroupVersion{Group: "kuma.io", Version: "v1alpha1"}.String(),
			Kind:       string(desc.Name) + "List",
		},
	})
	return nil
}
