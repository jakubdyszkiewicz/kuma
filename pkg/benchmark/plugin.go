package benchmark

import (
	"net/rpc"

	"github.com/hashicorp/go-plugin"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
)

type XDSHookRPC struct{ client *rpc.Client }

var _ XDSHook = &XDSHookRPC{}

func (g *XDSHookRPC) Modifications(data XDSHookData) (XDSHookModifications, error) {
	var resp XDSHookModifications
	err := g.client.Call("Plugin.Modifications", data, &resp) // data: reference?
	if err != nil {
		return XDSHookModifications{}, err
	}
	return resp, nil
}

func (g *XDSHookRPC) PolicyDescriptor() (core_model.ResourceTypeDescriptor, error) {
	var resp core_model.ResourceTypeDescriptor
	err := g.client.Call("Plugin.PolicyDescriptor", new(interface{}), &resp) // data: reference?
	if err != nil {
		return core_model.ResourceTypeDescriptor{}, err
	}
	return resp, nil
}

type XDSHookServer struct {
	Impl XDSHook
}

func (s *XDSHookServer) Modifications(args XDSHookData, resp *XDSHookModifications) error {
	var err error
	*resp, err = s.Impl.Modifications(args)
	if err != nil {
		return err
	}
	return nil
}

func (s *XDSHookServer) PolicyDescriptor(args interface{}, resp *core_model.ResourceTypeDescriptor) error {
	var err error
	*resp, err = s.Impl.PolicyDescriptor()
	if err != nil {
		return err
	}
	return nil
}

type XDSHookPlugin struct {
	Impl XDSHook
}

func (XDSHookPlugin) Client(b *plugin.MuxBroker, c *rpc.Client) (interface{}, error) {
	return &XDSHookRPC{client: c}, nil
}

func (p *XDSHookPlugin) Server(*plugin.MuxBroker) (interface{}, error) {
	return &XDSHookServer{Impl: p.Impl}, nil
}
