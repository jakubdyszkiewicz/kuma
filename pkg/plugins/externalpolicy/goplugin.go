package externalpolicy

import (
	"net/rpc"

	"github.com/hashicorp/go-plugin"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	xds_hooks "github.com/kumahq/kuma/pkg/xds/hooks"
)

type ExternalPolicyRPC struct{ client *rpc.Client }

var _ ExternalPolicyPlugin = &ExternalPolicyRPC{}

func (g *ExternalPolicyRPC) Descriptor() (core_model.ResourceTypeDescriptor, error) {
	var resp core_model.ResourceTypeDescriptor
	err := g.client.Call("Plugin.Descriptor", new(interface{}), &resp) // data: reference?
	if err != nil {
		return core_model.ResourceTypeDescriptor{}, err
	}
	return resp, nil
}

func (g *ExternalPolicyRPC) Filters() (xds_hooks.Filters, error) {
	var resp xds_hooks.Filters
	err := g.client.Call("Plugin.Filters", new(interface{}), &resp) // data: reference?
	if err != nil {
		return xds_hooks.Filters{}, nil
	}
	return resp, nil
}

func (g *ExternalPolicyRPC) Modifications(data xds_hooks.XDSHookData) (xds_hooks.XDSHookModifications, error) {
	var resp xds_hooks.XDSHookModifications
	err := g.client.Call("Plugin.Modifications", data, &resp) // data: reference?
	if err != nil {
		return xds_hooks.XDSHookModifications{}, err
	}
	return resp, nil
}

type ExternalPolicyServer struct {
	Impl ExternalPolicyPlugin
}

func (s *ExternalPolicyServer) Descriptor(args interface{}, resp *core_model.ResourceTypeDescriptor) error {
	var err error
	*resp, err = s.Impl.Descriptor()
	if err != nil {
		return err
	}
	return nil
}

func (s *ExternalPolicyServer) Filters(args interface{}, resp *xds_hooks.Filters) error {
	var err error
	*resp, err = s.Impl.Filters()
	if err != nil {
		return err
	}
	return nil
}

func (s *ExternalPolicyServer) Modifications(args xds_hooks.XDSHookData, resp *xds_hooks.XDSHookModifications) error {
	var err error
	*resp, err = s.Impl.Modifications(args)
	if err != nil {
		return err
	}
	return nil
}

type ExternalPolicyGoPlugin struct {
	Impl ExternalPolicyPlugin
}

func (ExternalPolicyGoPlugin) Client(b *plugin.MuxBroker, c *rpc.Client) (interface{}, error) {
	return &ExternalPolicyRPC{client: c}, nil
}

func (p *ExternalPolicyGoPlugin) Server(*plugin.MuxBroker) (interface{}, error) {
	return &ExternalPolicyServer{Impl: p.Impl}, nil
}
