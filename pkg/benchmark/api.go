package benchmark

import core_model "github.com/kumahq/kuma/pkg/core/resources/model"

type XDSResourceID struct {
	Name string
	Type string
}

type XDSResource struct {
	ID       XDSResourceID
	Origin   string
	Resource []byte
}

type Policy struct {
	Name string
	Mesh string
	Type string
	Spec []byte
}

type XDSHookData struct {
	Resources []XDSResource
	Policies  []Policy
	// Dataplane
	// Mesh
}

type XDSHookModifications struct {
	Add    []XDSResource
	Update []XDSResource
	Remove []XDSResourceID
}

type XDSHook interface {
	// todo Filters()
	PolicyDescriptor() (core_model.ResourceTypeDescriptor, error)
	Modifications(XDSHookData) (XDSHookModifications, error)
}
