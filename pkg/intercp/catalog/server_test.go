package catalog_test

import (
	"context"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	system_proto "github.com/kumahq/kuma/api/system/v1alpha1"
	"github.com/kumahq/kuma/pkg/intercp/catalog"
)

var _ = Describe("Server", func() {

	var heartbeats *catalog.Heartbeats
	var leaderInfo *staticLeaderInfo
	var server system_proto.InterCpPingServiceServer

	BeforeEach(func() {
		heartbeats = catalog.NewHeartbeats()
		leaderInfo = &staticLeaderInfo{}
		server = catalog.NewServer(heartbeats, leaderInfo)
	})

	request := &system_proto.PingRequest{
		InstanceId:  "instance-1",
		Address:     "192.168.0.1",
		InterCpPort: 1234,
	}

	It("should add instance to heartbeats", func() {
		// when
		_, err := server.Ping(context.Background(), request)

		// then
		Expect(err).ToNot(HaveOccurred())
		instances := heartbeats.Collect()
		Expect(instances).To(HaveLen(1))
		Expect(instances[0].Id).To(Equal(request.InstanceId))
		Expect(instances[0].Address).To(Equal(request.Address))
		Expect(instances[0].InterCpPort).To(Equal(request.InterCpPort))
		Expect(instances[0].Leader).To(BeFalse())
	})

	It("should respond with leader when instance is a leader", func() {
		// when
		leader, err := server.Ping(context.Background(), request)

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(leader.Leader).To(BeFalse())
	})

	It("should respond with non-leader when instance is a follower", func() {
		// given
		leaderInfo.leader = true

		// when
		leader, err := server.Ping(context.Background(), request)

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(leader.Leader).To(BeTrue())
	})
})

type staticLeaderInfo struct {
	leader bool
}

func (s *staticLeaderInfo) IsLeader() bool {
	return s.leader
}
