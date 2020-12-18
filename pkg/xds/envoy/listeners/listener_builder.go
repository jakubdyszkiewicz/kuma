package listeners

import (
	envoy_listener_v2 "github.com/envoyproxy/go-control-plane/envoy/api/v2"
	envoy_listener_v3 "github.com/envoyproxy/go-control-plane/envoy/config/listener/v3"
	"github.com/pkg/errors"

	"github.com/kumahq/kuma/pkg/xds/envoy"
	v2 "github.com/kumahq/kuma/pkg/xds/envoy/listeners/v2"
	v3 "github.com/kumahq/kuma/pkg/xds/envoy/listeners/v3"
)

// ListenerBuilderOpt is a configuration option for ListenerBuilder.
//
// The goal of ListenerBuilderOpt is to facilitate fluent ListenerBuilder API.
type ListenerBuilderOpt interface {
	// ApplyTo adds ListenerConfigurer(s) to the ListenerBuilder.
	ApplyTo(config *ListenerBuilderConfig)
}

func NewListenerBuilder(apiVersion envoy.APIVersion) *ListenerBuilder {
	return &ListenerBuilder{
		apiVersion: apiVersion,
	}
}

// ListenerBuilder is responsible for generating an Envoy listener
// by applying a series of ListenerConfigurers.
type ListenerBuilder struct {
	apiVersion envoy.APIVersion
	config     ListenerBuilderConfig
}

// Configure configures ListenerBuilder by adding individual ListenerConfigurers.
func (b *ListenerBuilder) Configure(opts ...ListenerBuilderOpt) *ListenerBuilder {
	for _, opt := range opts {
		opt.ApplyTo(&b.config)
	}
	return b
}

// Build generates an Envoy listener by applying a series of ListenerConfigurers.
func (b *ListenerBuilder) Build() (envoy.NamedResource, error) {
	switch b.apiVersion {
	case envoy.APIV2:
		listener := envoy_listener_v2.Listener{}
		for _, configurer := range b.config.ConfigurersV2 {
			if err := configurer.Configure(&listener); err != nil {
				return nil, err
			}
		}
		return &listener, nil
	case envoy.APIV3:
		listener := envoy_listener_v3.Listener{}
		for _, configurer := range b.config.ConfigurersV3 {
			if err := configurer.Configure(&listener); err != nil {
				return nil, err
			}
		}
		return &listener, nil
	default:
		return nil, errors.New("unknown API")
	}
}

// ListenerBuilderConfig holds configuration of a ListenerBuilder.
type ListenerBuilderConfig struct {
	// A series of ListenerConfigurers to apply to Envoy listener.
	ConfigurersV2 []v2.ListenerConfigurer
	ConfigurersV3 []v3.ListenerConfigurer
}

// Add appends a given ListenerConfigurer to the end of the chain.
func (c *ListenerBuilderConfig) AddV2(configurer v2.ListenerConfigurer) {
	c.ConfigurersV2 = append(c.ConfigurersV2, configurer)
}

// Add appends a given ListenerConfigurer to the end of the chain.
func (c *ListenerBuilderConfig) AddV3(configurer v3.ListenerConfigurer) {
	c.ConfigurersV3 = append(c.ConfigurersV3, configurer)
}

// ListenerBuilderOptFunc is a convenience type adapter.
type ListenerBuilderOptFunc func(config *ListenerBuilderConfig)

func (f ListenerBuilderOptFunc) ApplyTo(config *ListenerBuilderConfig) {
	f(config)
}
