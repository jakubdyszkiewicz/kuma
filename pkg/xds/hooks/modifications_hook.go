package hooks

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
	Dataplane Policy
	// Mesh
}

type XDSHookModifications struct {
	Add    []XDSResource
	Update []XDSResource
	Remove []XDSResourceID
}

type ResourceFilter struct {
	Origin string
	Type   string
}

type PolicyFilter struct {
	Type string
}

type Filters struct {
	ResourceFilters []ResourceFilter
	PolicyFilters   []PolicyFilter
}

type ModificationsHook interface {
	Filters() (Filters, error)
	Modifications(XDSHookData) (XDSHookModifications, error)
}
