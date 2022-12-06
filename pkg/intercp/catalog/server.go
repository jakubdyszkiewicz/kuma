package catalog

import (
	"context"

	system_proto "github.com/kumahq/kuma/api/system/v1alpha1"
	"github.com/kumahq/kuma/pkg/core"
	"github.com/kumahq/kuma/pkg/core/runtime/component"
)

var serverLog = core.Log.WithName("intercp").WithName("catalog").WithName("server")

type server struct {
	heartbeats *Heartbeats
	leaderInfo component.LeaderInfo

	system_proto.UnimplementedInterCpPingServiceServer
}

var _ system_proto.InterCpPingServiceServer = &server{}

func NewServer(heartbeats *Heartbeats, leaderInfo component.LeaderInfo) system_proto.InterCpPingServiceServer {
	return &server{
		heartbeats: heartbeats,
		leaderInfo: leaderInfo,
	}
}

func (s *server) Ping(_ context.Context, request *system_proto.PingRequest) (*system_proto.PingResponse, error) {
	serverLog.Info("received ping", "instanceID", request.InstanceId, "address", request.Address)
	s.heartbeats.Add(Instance{
		Id:          request.InstanceId,
		Address:     request.Address,
		InterCpPort: request.InterCpPort,
		Leader:      false,
	})
	return &system_proto.PingResponse{
		Leader: s.leaderInfo.IsLeader(),
	}, nil
}
