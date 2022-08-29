package benchmark

import (
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
)

type ExtensionResource struct {
	Meta core_model.ResourceMeta
	Spec proto.Message
	Type core_model.ResourceType
	Desc core_model.ResourceTypeDescriptor
}

func NewExtensionResource(typ core_model.ResourceType) *ExtensionResource {
	return &ExtensionResource{
		Spec: &structpb.Struct{},
		Type: typ,
	}
}

func (e *ExtensionResource) GetMeta() core_model.ResourceMeta {
	return e.Meta
}

func (e *ExtensionResource) SetMeta(meta core_model.ResourceMeta) {
	e.Meta = meta
}

func (e *ExtensionResource) GetSpec() core_model.ResourceSpec {
	return e.Spec
}

func (e *ExtensionResource) SetSpec(spec core_model.ResourceSpec) error {
	e.Spec = spec
	return nil
}

func (e *ExtensionResource) SetType(typ core_model.ResourceType) {
	e.Type = typ
}

func (e *ExtensionResource) SetDescriptor(desc core_model.ResourceTypeDescriptor) {
	e.Desc = desc
}

func (e *ExtensionResource) Descriptor() core_model.ResourceTypeDescriptor {
	return e.Desc
}

var _ core_model.ResourceList = &ExtensionResourceList{}

type ExtensionResourceList struct {
	Items      []*ExtensionResource
	Pagination core_model.Pagination
	Type       core_model.ResourceType
	Desc       core_model.ResourceTypeDescriptor
}

func (l *ExtensionResourceList) GetItems() []core_model.Resource {
	res := make([]core_model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *ExtensionResourceList) GetItemType() core_model.ResourceType {
	return l.Type
}

func (l *ExtensionResourceList) NewItem() core_model.Resource {
	return &ExtensionResource{
		Spec: &structpb.Struct{},
		Type: l.Type,
		Desc: l.Desc,
	}
}

func (l *ExtensionResourceList) AddItem(r core_model.Resource) error {
	if trr, ok := r.(*ExtensionResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return core_model.ErrorInvalidItemType((*ExtensionResource)(nil), r)
	}
}

func (l *ExtensionResourceList) GetPagination() *core_model.Pagination {
	return &l.Pagination
}

func (l *ExtensionResourceList) SetType(typ core_model.ResourceType) {
	l.Type = typ
}

func (l *ExtensionResourceList) SetDescriptor(desc core_model.ResourceTypeDescriptor) {
	l.Desc = desc
}

var _ core_model.Resource = &ExtensionResource{}
