package driver_test

import (
	"testing"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/driver"
	"github.com/hashicorp/serf/serf"
	"github.com/stretchr/testify/require"

	rfpb "github.com/buildbuddy-io/buildbuddy/proto/raft"
)

// These methods implement a sort-of-sucky builder for the usage protos that are
// typically generated by the store and ranges / replicas.
//
// They also take care of observing the generated protos in the clusterMap.
//
// Using this builder makes it easy to test how the driver responds to different
// cluster configurations quickly.
type testingState struct {
	tb testing.TB
	cm *driver.ClusterMap

	// TODO: add a mutable mock store object here that
	// the driver can mutate and tests can check.
}

func newTestingState(tb testing.TB) *testingState {
	return &testingState{
		tb: tb,
		cm: driver.NewClusterMap(),
	}
}

type testNode struct {
	state    *testingState
	nhid     string
	replicas []*testReplica
}

func (tn *testNode) flush() {
	storeUsage := &rfpb.StoreUsage{
		Node: &rfpb.NodeDescriptor{
			Nhid: tn.nhid,
		},
	}
	for _, r := range tn.replicas {
		ru := r.replicaUsage
		storeUsage.ReplicaCount += 1
		storeUsage.ReadQps += ru.GetReadQps()
		storeUsage.RaftProposeQps += ru.GetRaftProposeQps()
		storeUsage.TotalBytesUsed += ru.GetEstimatedDiskBytesUsed()

		rd := &rfpb.RangeDescriptor{
			RangeId: ru.GetReplica().GetShardId(),
		}
		require.NoError(tn.state.tb, tn.state.cm.ObserveLocalReplicaUsage(ru, rd))
	}
	require.NoError(tn.state.tb, tn.state.cm.ObserveNode(tn.nhid, storeUsage, serf.StatusAlive))
}

func (ts *testingState) AddNode(nhid string) *testNode {
	n := &testNode{
		state:    ts,
		nhid:     nhid,
		replicas: make([]*testReplica, 0),
	}
	n.flush()
	return n
}

type testReplica struct {
	node         *testNode
	replicaUsage *rfpb.ReplicaUsage
}

func (tr *testReplica) flush() {
	tr.node.flush()
}

func (tn *testNode) AddReplica(shardID, replicaID uint64) *testReplica {
	r := &testReplica{
		node: tn,
		replicaUsage: &rfpb.ReplicaUsage{
			Replica: &rfpb.ReplicaDescriptor{
				ShardId:   shardID,
				ReplicaId: replicaID,
			},
			RangeId: shardID,
		},
	}
	tn.replicas = append(tn.replicas, r)
	tn.flush()
	return r
}

func (tr *testReplica) SetSize(diskBytesUsed int64) *testReplica {
	tr.replicaUsage.EstimatedDiskBytesUsed = diskBytesUsed
	tr.node.flush()
	return tr
}

func (tr *testReplica) SetReadQPS(qps int64) *testReplica {
	tr.replicaUsage.ReadQps = qps
	tr.node.flush()
	return tr
}

func (tr *testReplica) SetRaftProposeQPS(qps int64) *testReplica {
	tr.replicaUsage.RaftProposeQps = qps
	tr.node.flush()
	return tr
}

// TESTS START HERE

func TestMeanReplicaCount(t *testing.T) {
	state := newTestingState(t)

	node1 := state.AddNode("nhid-1")
	node2 := state.AddNode("nhid-2")
	node3 := state.AddNode("nhid-3")

	node1.AddReplica(1, 1).SetSize(100).SetReadQPS(200)
	node2.AddReplica(1, 2).SetSize(100).SetReadQPS(200)
	node3.AddReplica(1, 3).SetSize(100).SetReadQPS(200)
	require.Equal(t, float64(1), state.cm.MeanReplicaCount())

	_ = state.AddNode("nhid-4")
	require.Equal(t, .75, state.cm.MeanReplicaCount())
}

func TestMeanProposeQPS(t *testing.T) {
	state := newTestingState(t)

	node1 := state.AddNode("nhid-1")
	node2 := state.AddNode("nhid-2")
	node3 := state.AddNode("nhid-3")

	node1.AddReplica(1, 1).SetSize(100).SetReadQPS(200).SetRaftProposeQPS(10)
	node2.AddReplica(1, 2).SetSize(100).SetReadQPS(200).SetRaftProposeQPS(10)
	node3.AddReplica(1, 3).SetSize(100).SetReadQPS(200).SetRaftProposeQPS(10)
	require.Equal(t, float64(10), state.cm.MeanProposeQPS())

	node4 := state.AddNode("nhid-4")
	node4.AddReplica(1, 3).SetSize(100).SetReadQPS(200).SetRaftProposeQPS(170)
	require.Equal(t, float64(50), state.cm.MeanProposeQPS())
}