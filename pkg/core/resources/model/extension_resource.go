package model

import (
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

type ExtensionResource struct {
	Meta ResourceMeta
	Spec proto.Message
	Type ResourceType
	Desc ResourceTypeDescriptor
}

var _ Resource = &ExtensionResource{}

func NewExtensionResource(typ ResourceType) *ExtensionResource { // todo and desc?
	return &ExtensionResource{
		Spec: &structpb.Struct{},
		Type: typ,
	}
}

func (e *ExtensionResource) GetMeta() ResourceMeta {
	return e.Meta
}

func (e *ExtensionResource) SetMeta(meta ResourceMeta) {
	e.Meta = meta
}

func (e *ExtensionResource) GetSpec() ResourceSpec {
	return e.Spec
}

func (e *ExtensionResource) SetSpec(spec ResourceSpec) error {
	e.Spec = spec
	return nil
}

func (e *ExtensionResource) SetType(typ ResourceType) {
	e.Type = typ
}

func (e *ExtensionResource) SetDescriptor(desc ResourceTypeDescriptor) {
	e.Desc = desc
}

func (e *ExtensionResource) Descriptor() ResourceTypeDescriptor {
	return e.Desc
}

var _ ResourceList = &ExtensionResourceList{}

type ExtensionResourceList struct {
	Items      []*ExtensionResource
	Pagination Pagination
	Type       ResourceType
	Desc       ResourceTypeDescriptor
}

func (l *ExtensionResourceList) GetItems() []Resource {
	res := make([]Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *ExtensionResourceList) GetItemType() ResourceType {
	return l.Type
}

func (l *ExtensionResourceList) NewItem() Resource {
	return &ExtensionResource{
		Spec: &structpb.Struct{},
		Type: l.Type,
		Desc: l.Desc,
	}
}

func (l *ExtensionResourceList) AddItem(r Resource) error {
	if trr, ok := r.(*ExtensionResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return ErrorInvalidItemType((*ExtensionResource)(nil), r)
	}
}

func (l *ExtensionResourceList) GetPagination() *Pagination {
	return &l.Pagination
}

func (l *ExtensionResourceList) SetType(typ ResourceType) {
	l.Type = typ
}

func (l *ExtensionResourceList) SetDescriptor(desc ResourceTypeDescriptor) {
	l.Desc = desc
}
