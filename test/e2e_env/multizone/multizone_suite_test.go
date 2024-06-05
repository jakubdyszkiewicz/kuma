package multizone_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"

	"github.com/kumahq/kuma/pkg/test"
	"github.com/kumahq/kuma/test/e2e_env/multizone/connectivity"
	"github.com/kumahq/kuma/test/e2e_env/multizone/defaults"
	"github.com/kumahq/kuma/test/e2e_env/multizone/externalservices"
	"github.com/kumahq/kuma/test/e2e_env/multizone/gateway"
	"github.com/kumahq/kuma/test/e2e_env/multizone/healthcheck"
	"github.com/kumahq/kuma/test/e2e_env/multizone/inbound_communication"
	"github.com/kumahq/kuma/test/e2e_env/multizone/inspect"
	"github.com/kumahq/kuma/test/e2e_env/multizone/localityawarelb"
	"github.com/kumahq/kuma/test/e2e_env/multizone/meshhttproute"
	"github.com/kumahq/kuma/test/e2e_env/multizone/meshservice"
	"github.com/kumahq/kuma/test/e2e_env/multizone/meshtcproute"
	"github.com/kumahq/kuma/test/e2e_env/multizone/meshtimeout"
	"github.com/kumahq/kuma/test/e2e_env/multizone/meshtrafficpermission"
	"github.com/kumahq/kuma/test/e2e_env/multizone/ownership"
	"github.com/kumahq/kuma/test/e2e_env/multizone/resilience"
	multizone_sync "github.com/kumahq/kuma/test/e2e_env/multizone/sync"
	"github.com/kumahq/kuma/test/e2e_env/multizone/trafficpermission"
	"github.com/kumahq/kuma/test/e2e_env/multizone/trafficroute"
	"github.com/kumahq/kuma/test/e2e_env/multizone/virtualoutbound"
	"github.com/kumahq/kuma/test/e2e_env/multizone/zonedisable"
	"github.com/kumahq/kuma/test/e2e_env/multizone/zoneegress"
	. "github.com/kumahq/kuma/test/framework"
	"github.com/kumahq/kuma/test/framework/envs/multizone"
	"github.com/kumahq/kuma/test/framework/universal_logs"
)

func TestE2E(t *testing.T) {
	test.RunE2ESpecs(t, "E2E Multizone Suite")
}

var (
	_ = E2ESynchronizedBeforeSuite(multizone.SetupAndGetState, multizone.RestoreState)
	_ = SynchronizedAfterSuite(func() {}, multizone.ExpectCpsToNotCrash)
	_ = ReportAfterSuite("cleanup", func(report Report) {
		if Config.CleanupLogsOnSuccess {
			universal_logs.CleanupIfSuccess(Config.UniversalE2ELogsPath, report)
		}
	})
	_ = ReportAfterSuite("cp logs", multizone.PrintCPLogsOnFailure)
	_ = ReportAfterSuite("kube state", multizone.PrintKubeState)
)

var (
	_ = PDescribe("Gateway", gateway.GatewayHybrid, Ordered)
	_ = PDescribe("Cross-mesh Gateways", gateway.CrossMeshGatewayOnMultizone, Ordered)
	_ = PDescribe("External Service locality aware", localityawarelb.ExternalServicesWithLocalityAwareLb, Ordered)
	_ = PDescribe("Healthcheck", healthcheck.ApplicationOnUniversalClientOnK8s, Ordered)
	_ = PDescribe("Inspect", inspect.Inspect, Ordered)
	_ = PDescribe("TrafficPermission", trafficpermission.TrafficPermission, Ordered)
	_ = PDescribe("TrafficRoute", trafficroute.TrafficRoute, Ordered)
	_ = PDescribe("MeshHTTPRoute", meshhttproute.Test, Ordered)
	_ = PDescribe("MeshTCPRoute", meshtcproute.Test, Ordered)
	_ = PDescribe("InboundPassthrough", inbound_communication.InboundPassthrough, Ordered)
	_ = PDescribe("InboundPassthroughDisabled", inbound_communication.InboundPassthroughDisabled, Ordered)
	_ = PDescribe("ZoneEgress Internal Services", zoneegress.InternalServices, Ordered)
	_ = PDescribe("Connectivity", connectivity.Connectivity, Ordered)
	_ = PDescribe("Connectivity Gateway IPV6 CNI V2", connectivity.GatewayIPV6CNIV2, Ordered)
	_ = PDescribe("Sync", multizone_sync.Sync, Ordered)
	_ = PDescribe("Sync V2", multizone_sync.SyncLegacy, Ordered)
	_ = PDescribe("MeshTrafficPermission", meshtrafficpermission.MeshTrafficPermission, Ordered)
	_ = PDescribe("Zone Disable", zonedisable.ZoneDisable, Ordered)
	_ = PDescribe("External Services", externalservices.ExternalServicesOnMultizoneUniversal, Ordered)
	_ = PDescribe("Ownership", ownership.MultizoneUniversal, Ordered)
	_ = PDescribe("Resilience", resilience.ResilienceMultizoneUniversal, Ordered)
	_ = PDescribe("Resilience Postgres", resilience.ResilienceMultizoneUniversalPostgres, Ordered)
	_ = PDescribe("Virtual Outbounds", virtualoutbound.VirtualOutbound, Ordered)
	_ = PDescribe("MeshTimeout", meshtimeout.MeshTimeout, Ordered)
	_ = PDescribe("LocalityAwareness with MeshLoadBalancingStrategy", localityawarelb.LocalityAwarenessWithMeshLoadBalancingStrategy, Ordered)
	_ = PDescribe("Advanced LocalityAwareness with MeshLoadBalancingStrategy", localityawarelb.LocalityAwareLB, Ordered)
	_ = PDescribe("Advanced LocalityAwareness with MeshLoadBalancingStrategy with Gateway", localityawarelb.LocalityAwareLBGateway, Ordered)
	_ = PDescribe("Advanced LocalityAwareness with MeshLoadBalancingStrategy and Enabled Egress", localityawarelb.LocalityAwareLBEgress, Ordered)
	_ = PDescribe("Defaults", defaults.Defaults, Ordered)
	_ = Describe("MeshService", meshservice.MeshService, Ordered)
)
