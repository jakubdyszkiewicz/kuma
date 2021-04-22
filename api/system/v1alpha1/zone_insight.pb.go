// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.14.0
// source: system/v1alpha1/zone_insight.proto

package v1alpha1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// ZoneInsight defines the observed state of a Remote Kuma CP.
type ZoneInsight struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// List of KDS subscriptions created by a given Remote Kuma CP.
	Subscriptions []*KDSSubscription `protobuf:"bytes,1,rep,name=subscriptions,proto3" json:"subscriptions,omitempty"`
}

func (x *ZoneInsight) Reset() {
	*x = ZoneInsight{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZoneInsight) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZoneInsight) ProtoMessage() {}

func (x *ZoneInsight) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZoneInsight.ProtoReflect.Descriptor instead.
func (*ZoneInsight) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{0}
}

func (x *ZoneInsight) GetSubscriptions() []*KDSSubscription {
	if x != nil {
		return x.Subscriptions
	}
	return nil
}

// KDSSubscription describes a single KDS subscription
// created by a Remote to the Global.
// Ideally, there should be only one such subscription per Remote lifecycle.
// Presence of multiple subscriptions might indicate one of the following
// events:
// - transient loss of network connection between Remote and Global Control
// Planes
// - Remote Kuma CP restarts (i.e. hot restart or crash)
// - Global Kuma CP restarts (i.e. rolling update or crash)
// - etc
type KDSSubscription struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique id per KDS subscription.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Global CP instance that handled given subscription.
	GlobalInstanceId string `protobuf:"bytes,2,opt,name=global_instance_id,json=globalInstanceId,proto3" json:"global_instance_id,omitempty"`
	// Time when a given Remote connected to the Global.
	ConnectTime *timestamp.Timestamp `protobuf:"bytes,3,opt,name=connect_time,json=connectTime,proto3" json:"connect_time,omitempty"`
	// Time when a given Remote disconnected from the Global.
	DisconnectTime *timestamp.Timestamp `protobuf:"bytes,4,opt,name=disconnect_time,json=disconnectTime,proto3" json:"disconnect_time,omitempty"`
	// Status of the KDS subscription.
	Status *KDSSubscriptionStatus `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
	// Version of Remote Kuma CP.
	Version *Version `protobuf:"bytes,6,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *KDSSubscription) Reset() {
	*x = KDSSubscription{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KDSSubscription) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KDSSubscription) ProtoMessage() {}

func (x *KDSSubscription) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KDSSubscription.ProtoReflect.Descriptor instead.
func (*KDSSubscription) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{1}
}

func (x *KDSSubscription) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *KDSSubscription) GetGlobalInstanceId() string {
	if x != nil {
		return x.GlobalInstanceId
	}
	return ""
}

func (x *KDSSubscription) GetConnectTime() *timestamp.Timestamp {
	if x != nil {
		return x.ConnectTime
	}
	return nil
}

func (x *KDSSubscription) GetDisconnectTime() *timestamp.Timestamp {
	if x != nil {
		return x.DisconnectTime
	}
	return nil
}

func (x *KDSSubscription) GetStatus() *KDSSubscriptionStatus {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *KDSSubscription) GetVersion() *Version {
	if x != nil {
		return x.Version
	}
	return nil
}

// KDSSubscriptionStatus defines status of an KDS subscription.
type KDSSubscriptionStatus struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Time when status of a given KDS subscription was most recently updated.
	LastUpdateTime *timestamp.Timestamp `protobuf:"bytes,1,opt,name=last_update_time,json=lastUpdateTime,proto3" json:"last_update_time,omitempty"`
	// Total defines an aggregate over individual KDS stats.
	Total *KDSServiceStats            `protobuf:"bytes,2,opt,name=total,proto3" json:"total,omitempty"`
	Stat  map[string]*KDSServiceStats `protobuf:"bytes,3,rep,name=stat,proto3" json:"stat,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *KDSSubscriptionStatus) Reset() {
	*x = KDSSubscriptionStatus{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KDSSubscriptionStatus) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KDSSubscriptionStatus) ProtoMessage() {}

func (x *KDSSubscriptionStatus) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KDSSubscriptionStatus.ProtoReflect.Descriptor instead.
func (*KDSSubscriptionStatus) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{2}
}

func (x *KDSSubscriptionStatus) GetLastUpdateTime() *timestamp.Timestamp {
	if x != nil {
		return x.LastUpdateTime
	}
	return nil
}

func (x *KDSSubscriptionStatus) GetTotal() *KDSServiceStats {
	if x != nil {
		return x.Total
	}
	return nil
}

func (x *KDSSubscriptionStatus) GetStat() map[string]*KDSServiceStats {
	if x != nil {
		return x.Stat
	}
	return nil
}

// DiscoveryServiceStats defines all stats over a single xDS service.
type KDSServiceStats struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Number of xDS responses sent to the Dataplane.
	ResponsesSent uint64 `protobuf:"varint,1,opt,name=responses_sent,json=responsesSent,proto3" json:"responses_sent,omitempty"`
	// Number of xDS responses ACKed by the Dataplane.
	ResponsesAcknowledged uint64 `protobuf:"varint,2,opt,name=responses_acknowledged,json=responsesAcknowledged,proto3" json:"responses_acknowledged,omitempty"`
	// Number of xDS responses NACKed by the Dataplane.
	ResponsesRejected uint64 `protobuf:"varint,3,opt,name=responses_rejected,json=responsesRejected,proto3" json:"responses_rejected,omitempty"`
}

func (x *KDSServiceStats) Reset() {
	*x = KDSServiceStats{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KDSServiceStats) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KDSServiceStats) ProtoMessage() {}

func (x *KDSServiceStats) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KDSServiceStats.ProtoReflect.Descriptor instead.
func (*KDSServiceStats) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{3}
}

func (x *KDSServiceStats) GetResponsesSent() uint64 {
	if x != nil {
		return x.ResponsesSent
	}
	return 0
}

func (x *KDSServiceStats) GetResponsesAcknowledged() uint64 {
	if x != nil {
		return x.ResponsesAcknowledged
	}
	return 0
}

func (x *KDSServiceStats) GetResponsesRejected() uint64 {
	if x != nil {
		return x.ResponsesRejected
	}
	return 0
}

// Version defines version of Kuma ControlPlane
type Version struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Version of Remote Kuma CP
	KumaCp *KumaCpVersion `protobuf:"bytes,1,opt,name=kumaCp,proto3" json:"kumaCp,omitempty"`
}

func (x *Version) Reset() {
	*x = Version{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Version) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Version) ProtoMessage() {}

func (x *Version) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Version.ProtoReflect.Descriptor instead.
func (*Version) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{4}
}

func (x *Version) GetKumaCp() *KumaCpVersion {
	if x != nil {
		return x.KumaCp
	}
	return nil
}

// KumaCpVersion describes details of Kuma ControlPlane version
type KumaCpVersion struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Version number of Kuma ControlPlane
	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	// Git tag of Kuma ControlPlane version
	GitTag string `protobuf:"bytes,2,opt,name=gitTag,proto3" json:"gitTag,omitempty"`
	// Git commit of Kuma ControlPlane version
	GitCommit string `protobuf:"bytes,3,opt,name=gitCommit,proto3" json:"gitCommit,omitempty"`
	// Build date of Kuma ControlPlane version
	BuildDate string `protobuf:"bytes,4,opt,name=buildDate,proto3" json:"buildDate,omitempty"`
}

func (x *KumaCpVersion) Reset() {
	*x = KumaCpVersion{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KumaCpVersion) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KumaCpVersion) ProtoMessage() {}

func (x *KumaCpVersion) ProtoReflect() protoreflect.Message {
	mi := &file_system_v1alpha1_zone_insight_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KumaCpVersion.ProtoReflect.Descriptor instead.
func (*KumaCpVersion) Descriptor() ([]byte, []int) {
	return file_system_v1alpha1_zone_insight_proto_rawDescGZIP(), []int{5}
}

func (x *KumaCpVersion) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *KumaCpVersion) GetGitTag() string {
	if x != nil {
		return x.GitTag
	}
	return ""
}

func (x *KumaCpVersion) GetGitCommit() string {
	if x != nil {
		return x.GitCommit
	}
	return ""
}

func (x *KumaCpVersion) GetBuildDate() string {
	if x != nil {
		return x.BuildDate
	}
	return ""
}

var File_system_v1alpha1_zone_insight_proto protoreflect.FileDescriptor

var file_system_v1alpha1_zone_insight_proto_rawDesc = []byte{
	0x0a, 0x22, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c,
	0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x5a, 0x0a, 0x0b, 0x5a, 0x6f, 0x6e, 0x65, 0x49, 0x6e, 0x73, 0x69,
	0x67, 0x68, 0x74, 0x12, 0x4b, 0x0a, 0x0d, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x6b, 0x75, 0x6d,
	0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x4b, 0x44, 0x53, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x0d, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x22, 0xf7, 0x02, 0x0a, 0x0f, 0x4b, 0x44, 0x53, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x07, 0xfa, 0x42, 0x04, 0x72, 0x02, 0x10, 0x01, 0x52, 0x02, 0x69, 0x64, 0x12, 0x35, 0x0a,
	0x12, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x72, 0x02,
	0x10, 0x01, 0x52, 0x10, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x49, 0x64, 0x12, 0x47, 0x0a, 0x0c, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x5f,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x08, 0xfa, 0x42, 0x05, 0xb2, 0x01, 0x02, 0x08, 0x01,
	0x52, 0x0b, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x43, 0x0a,
	0x0f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x0e, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x54, 0x69,
	0x6d, 0x65, 0x12, 0x4d, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4b, 0x44, 0x53, 0x53, 0x75, 0x62,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x42,
	0x08, 0xfa, 0x42, 0x05, 0x8a, 0x01, 0x02, 0x10, 0x01, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x37, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0xc5, 0x02, 0x0a, 0x15, 0x4b,
	0x44, 0x53, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x44, 0x0a, 0x10, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0e, 0x6c, 0x61, 0x73, 0x74,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x3b, 0x0a, 0x05, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x6b, 0x75, 0x6d, 0x61,
	0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x4b, 0x44, 0x53, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x73,
	0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x49, 0x0a, 0x04, 0x73, 0x74, 0x61, 0x74, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4b, 0x44, 0x53,
	0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x73, 0x74,
	0x61, 0x74, 0x1a, 0x5e, 0x0a, 0x09, 0x53, 0x74, 0x61, 0x74, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x3b, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x25, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4b, 0x44, 0x53, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x73, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0x9e, 0x01, 0x0a, 0x0f, 0x4b, 0x44, 0x53, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x53, 0x74, 0x61, 0x74, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x73, 0x5f, 0x73, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0d,
	0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x53, 0x65, 0x6e, 0x74, 0x12, 0x35, 0x0a,
	0x16, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x5f, 0x61, 0x63, 0x6b, 0x6e, 0x6f,
	0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x15, 0x72,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x41, 0x63, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65,
	0x64, 0x67, 0x65, 0x64, 0x12, 0x2d, 0x0a, 0x12, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x73, 0x5f, 0x72, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x11, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x52, 0x65, 0x6a, 0x65, 0x63,
	0x74, 0x65, 0x64, 0x22, 0x46, 0x0a, 0x07, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x3b,
	0x0a, 0x06, 0x6b, 0x75, 0x6d, 0x61, 0x43, 0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23,
	0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4b, 0x75, 0x6d, 0x61, 0x43, 0x70, 0x56, 0x65, 0x72, 0x73,
	0x69, 0x6f, 0x6e, 0x52, 0x06, 0x6b, 0x75, 0x6d, 0x61, 0x43, 0x70, 0x22, 0x7d, 0x0a, 0x0d, 0x4b,
	0x75, 0x6d, 0x61, 0x43, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a, 0x07,
	0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x67, 0x69, 0x74, 0x54, 0x61, 0x67,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x69, 0x74, 0x54, 0x61, 0x67, 0x12, 0x1c,
	0x0a, 0x09, 0x67, 0x69, 0x74, 0x43, 0x6f, 0x6d, 0x6d, 0x69, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x67, 0x69, 0x74, 0x43, 0x6f, 0x6d, 0x6d, 0x69, 0x74, 0x12, 0x1c, 0x0a, 0x09,
	0x62, 0x75, 0x69, 0x6c, 0x64, 0x44, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x44, 0x61, 0x74, 0x65, 0x42, 0x2c, 0x5a, 0x2a, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x68, 0x71, 0x2f,
	0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_system_v1alpha1_zone_insight_proto_rawDescOnce sync.Once
	file_system_v1alpha1_zone_insight_proto_rawDescData = file_system_v1alpha1_zone_insight_proto_rawDesc
)

func file_system_v1alpha1_zone_insight_proto_rawDescGZIP() []byte {
	file_system_v1alpha1_zone_insight_proto_rawDescOnce.Do(func() {
		file_system_v1alpha1_zone_insight_proto_rawDescData = protoimpl.X.CompressGZIP(file_system_v1alpha1_zone_insight_proto_rawDescData)
	})
	return file_system_v1alpha1_zone_insight_proto_rawDescData
}

var file_system_v1alpha1_zone_insight_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_system_v1alpha1_zone_insight_proto_goTypes = []interface{}{
	(*ZoneInsight)(nil),           // 0: kuma.system.v1alpha1.ZoneInsight
	(*KDSSubscription)(nil),       // 1: kuma.system.v1alpha1.KDSSubscription
	(*KDSSubscriptionStatus)(nil), // 2: kuma.system.v1alpha1.KDSSubscriptionStatus
	(*KDSServiceStats)(nil),       // 3: kuma.system.v1alpha1.KDSServiceStats
	(*Version)(nil),               // 4: kuma.system.v1alpha1.Version
	(*KumaCpVersion)(nil),         // 5: kuma.system.v1alpha1.KumaCpVersion
	nil,                           // 6: kuma.system.v1alpha1.KDSSubscriptionStatus.StatEntry
	(*timestamp.Timestamp)(nil),   // 7: google.protobuf.Timestamp
}
var file_system_v1alpha1_zone_insight_proto_depIdxs = []int32{
	1,  // 0: kuma.system.v1alpha1.ZoneInsight.subscriptions:type_name -> kuma.system.v1alpha1.KDSSubscription
	7,  // 1: kuma.system.v1alpha1.KDSSubscription.connect_time:type_name -> google.protobuf.Timestamp
	7,  // 2: kuma.system.v1alpha1.KDSSubscription.disconnect_time:type_name -> google.protobuf.Timestamp
	2,  // 3: kuma.system.v1alpha1.KDSSubscription.status:type_name -> kuma.system.v1alpha1.KDSSubscriptionStatus
	4,  // 4: kuma.system.v1alpha1.KDSSubscription.version:type_name -> kuma.system.v1alpha1.Version
	7,  // 5: kuma.system.v1alpha1.KDSSubscriptionStatus.last_update_time:type_name -> google.protobuf.Timestamp
	3,  // 6: kuma.system.v1alpha1.KDSSubscriptionStatus.total:type_name -> kuma.system.v1alpha1.KDSServiceStats
	6,  // 7: kuma.system.v1alpha1.KDSSubscriptionStatus.stat:type_name -> kuma.system.v1alpha1.KDSSubscriptionStatus.StatEntry
	5,  // 8: kuma.system.v1alpha1.Version.kumaCp:type_name -> kuma.system.v1alpha1.KumaCpVersion
	3,  // 9: kuma.system.v1alpha1.KDSSubscriptionStatus.StatEntry.value:type_name -> kuma.system.v1alpha1.KDSServiceStats
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_system_v1alpha1_zone_insight_proto_init() }
func file_system_v1alpha1_zone_insight_proto_init() {
	if File_system_v1alpha1_zone_insight_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_system_v1alpha1_zone_insight_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZoneInsight); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_system_v1alpha1_zone_insight_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KDSSubscription); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_system_v1alpha1_zone_insight_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KDSSubscriptionStatus); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_system_v1alpha1_zone_insight_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KDSServiceStats); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_system_v1alpha1_zone_insight_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Version); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_system_v1alpha1_zone_insight_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KumaCpVersion); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_system_v1alpha1_zone_insight_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_system_v1alpha1_zone_insight_proto_goTypes,
		DependencyIndexes: file_system_v1alpha1_zone_insight_proto_depIdxs,
		MessageInfos:      file_system_v1alpha1_zone_insight_proto_msgTypes,
	}.Build()
	File_system_v1alpha1_zone_insight_proto = out.File
	file_system_v1alpha1_zone_insight_proto_rawDesc = nil
	file_system_v1alpha1_zone_insight_proto_goTypes = nil
	file_system_v1alpha1_zone_insight_proto_depIdxs = nil
}
