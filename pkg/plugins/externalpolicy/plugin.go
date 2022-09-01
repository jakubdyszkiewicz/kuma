package externalpolicy

import (
	"os"
	"os/exec"

	"github.com/hashicorp/go-hclog"
	"github.com/hashicorp/go-plugin"

	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/xds/hooks"
)

type ExternalPolicyPlugin interface {
	Descriptor() (core_model.ResourceTypeDescriptor, error)
	hooks.ModificationsHook
}

var handshakeConfig = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "BASIC_PLUGIN",
	MagicCookieValue: "hello",
}

var pluginMap = map[string]plugin.Plugin{
	"externalPolicyPlugin": &ExternalPolicyGoPlugin{},
}

func NewExternalPolicyPlugin(path string) (ExternalPolicyPlugin, error) {
	logger := hclog.New(&hclog.LoggerOptions{
		Name:   "plugin",
		Output: os.Stdout,
		Level:  hclog.Debug,
	})
	client := plugin.NewClient(&plugin.ClientConfig{
		HandshakeConfig: handshakeConfig,
		Plugins:         pluginMap,
		Cmd:             exec.Command(path),
		Logger:          logger,
	})
	rpcClient, err := client.Client()
	if err != nil {
		return nil, err
	}
	raw, err := rpcClient.Dispense("externalPolicyPlugin")
	if err != nil {
		return nil, err
	}
	return raw.(ExternalPolicyPlugin), nil
}
