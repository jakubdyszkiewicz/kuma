package externalpolicy

import (
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/xds/hooks"
)

type ExternalPolicyPlugin interface {
	Descriptor() core_model.ResourceTypeDescriptor
	hooks.ModificationsHook
}

func NewExternalPolicyPlugin() ExternalPolicyPlugin {

}
