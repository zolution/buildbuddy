package api

import (
	"context"
	"flag"
	"net/http"
	"net/url"
	"strings"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/backends/prom"
	"github.com/buildbuddy-io/buildbuddy/proto/workflow"
	"github.com/buildbuddy-io/buildbuddy/server/build_event_protocol/build_event_handler"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/eventlog"
	"github.com/buildbuddy-io/buildbuddy/server/http/protolet"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/real_environment"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/tables"
	"github.com/buildbuddy-io/buildbuddy/server/util/capabilities"
	"github.com/buildbuddy-io/buildbuddy/server/util/db"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/perms"
	"github.com/buildbuddy-io/buildbuddy/server/util/prefix"
	"github.com/buildbuddy-io/buildbuddy/server/util/proto"
	"github.com/buildbuddy-io/buildbuddy/server/util/query_builder"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/prometheus/client_golang/prometheus/promhttp"

	api_common "github.com/buildbuddy-io/buildbuddy/server/api/common"
	requestcontext "github.com/buildbuddy-io/buildbuddy/server/util/request_context"

	apipb "github.com/buildbuddy-io/buildbuddy/proto/api/v1"
	akpb "github.com/buildbuddy-io/buildbuddy/proto/api_key"
	bespb "github.com/buildbuddy-io/buildbuddy/proto/build_event_stream"
	elpb "github.com/buildbuddy-io/buildbuddy/proto/eventlog"
	rspb "github.com/buildbuddy-io/buildbuddy/proto/resource"
)

var (
	enableAPI            = flag.Bool("api.enable_api", true, "Whether or not to enable the BuildBuddy API.")
	enableCache          = flag.Bool("api.enable_cache", false, "Whether or not to enable the API cache.")
	enableCacheDeleteAPI = flag.Bool("enable_cache_delete_api", false, "If true, enable access to cache delete API.")
	enableMetricsAPI     = flag.Bool("api.enable_metrics_api", false, "If true, enable access to metrics API.")
)

type APIServer struct {
	env environment.Env
}

func Register(env *real_environment.RealEnv) error {
	if *enableAPI {
		env.SetAPIService(NewAPIServer(env))
	}
	return nil
}

func NewAPIServer(env environment.Env) *APIServer {
	return &APIServer{
		env: env,
	}
}

func (s *APIServer) authorizeWrites(ctx context.Context) error {
	canWrite, err := capabilities.IsGranted(ctx, s.env, akpb.ApiKey_CACHE_WRITE_CAPABILITY)
	if err != nil {
		return err
	}
	if !canWrite {
		return status.PermissionDeniedError("You do not have permission to perform this action.")
	}
	return nil
}

func (s *APIServer) GetInvocation(ctx context.Context, req *apipb.GetInvocationRequest) (*apipb.GetInvocationResponse, error) {
	user, err := s.env.GetAuthenticator().AuthenticatedUser(ctx)
	if err != nil {
		return nil, err
	}

	if req.GetSelector().GetInvocationId() == "" && req.GetSelector().GetCommitSha() == "" {
		return nil, status.InvalidArgumentErrorf("InvocationSelector must contain a valid invocation_id or commit_sha")
	}

	q := query_builder.NewQuery(`SELECT * FROM "Invocations"`)
	q = q.AddWhereClause(`group_id = ?`, user.GetGroupID())
	if req.GetSelector().GetInvocationId() != "" {
		q = q.AddWhereClause(`invocation_id = ?`, req.GetSelector().GetInvocationId())
	}
	if req.GetSelector().GetCommitSha() != "" {
		q = q.AddWhereClause(`commit_sha = ?`, req.GetSelector().GetCommitSha())
	}
	if err := perms.AddPermissionsCheckToQuery(ctx, s.env, q); err != nil {
		return nil, err
	}
	queryStr, args := q.Build()

	rq := s.env.GetDBHandle().NewQuery(ctx, "api_server_get_invocations").Raw(queryStr, args...)

	invocations := []*apipb.Invocation{}
	err = db.ScanEach(rq, func(ctx context.Context, ti *tables.Invocation) error {
		apiInvocation := &apipb.Invocation{
			Id: &apipb.Invocation_Id{
				InvocationId: ti.InvocationID,
			},
			Success:       ti.Success,
			User:          ti.User,
			DurationUsec:  ti.DurationUsec,
			Host:          ti.Host,
			Command:       ti.Command,
			Pattern:       ti.Pattern,
			ActionCount:   ti.ActionCount,
			CreatedAtUsec: ti.CreatedAtUsec,
			UpdatedAtUsec: ti.UpdatedAtUsec,
			RepoUrl:       ti.RepoURL,
			BranchName:    ti.BranchName,
			CommitSha:     ti.CommitSHA,
			Role:          ti.Role,
			BazelExitCode: ti.BazelExitCode,
		}

		invocations = append(invocations, apiInvocation)
		return nil
	})
	if err != nil {
		return nil, err
	}

	if req.IncludeMetadata {
		for _, i := range invocations {
			inv, err := build_event_handler.LookupInvocation(s.env, ctx, i.Id.InvocationId)
			if err != nil {
				return nil, err
			}
			for _, event := range inv.GetEvent() {
				switch p := event.BuildEvent.Payload.(type) {
				case *bespb.BuildEvent_BuildMetadata:
					{
						for k, v := range p.BuildMetadata.Metadata {
							i.BuildMetadata = append(i.BuildMetadata, &apipb.InvocationMetadata{
								Key:   k,
								Value: v,
							})
						}
					}
				case *bespb.BuildEvent_WorkspaceStatus:
					{
						for _, item := range p.WorkspaceStatus.Item {
							i.WorkspaceStatus = append(i.WorkspaceStatus, &apipb.InvocationMetadata{
								Key:   item.Key,
								Value: item.Value,
							})
						}
					}
				}
			}
		}
	}

	return &apipb.GetInvocationResponse{
		Invocation: invocations,
	}, nil
}

func (s *APIServer) CacheEnabled() bool {
	return *enableCache
}

func (s *APIServer) redisCachedTarget(ctx context.Context, userInfo interfaces.UserInfo, iid, targetLabel string) (*apipb.Target, error) {
	if !s.CacheEnabled() || s.env.GetMetricsCollector() == nil {
		return nil, nil
	}

	if targetLabel == "" {
		return nil, nil
	}
	key := api_common.TargetLabelKey(userInfo.GetGroupID(), iid, targetLabel)
	blobs, err := s.env.GetMetricsCollector().GetAll(ctx, key)
	if err != nil {
		return nil, err
	}
	if len(blobs) != 1 {
		return nil, nil
	}

	t := &apipb.Target{}
	if err := proto.Unmarshal([]byte(blobs[0]), t); err != nil {
		return nil, err
	}
	return t, nil
}

func (s *APIServer) GetTarget(ctx context.Context, req *apipb.GetTargetRequest) (*apipb.GetTargetResponse, error) {
	userInfo, err := s.env.GetAuthenticator().AuthenticatedUser(ctx)
	if err != nil {
		return nil, err
	}
	if req.GetSelector().GetInvocationId() == "" {
		return nil, status.InvalidArgumentErrorf("TargetSelector must contain a valid invocation_id")
	}
	iid := req.GetSelector().GetInvocationId()

	rsp := &apipb.GetTargetResponse{
		Target: make([]*apipb.Target, 0),
	}

	cacheKey := req.GetSelector().GetLabel()
	// Target ID is equal to the target label, so either can be used as a cache key.
	if targetId := req.GetSelector().GetTargetId(); targetId != "" {
		cacheKey = targetId
	}

	cachedTarget, err := s.redisCachedTarget(ctx, userInfo, iid, cacheKey)
	if err != nil {
		log.Debugf("redisCachedTarget err: %s", err)
	} else if cachedTarget != nil {
		if targetMatchesTargetSelector(cachedTarget, req.GetSelector()) {
			rsp.Target = append(rsp.Target, cachedTarget)
		}
	}
	if len(rsp.Target) > 0 {
		return rsp, nil
	}

	inv, err := build_event_handler.LookupInvocation(s.env, ctx, req.GetSelector().GetInvocationId())
	if err != nil {
		return nil, err
	}
	targetMap := api_common.TargetMapFromInvocation(inv)

	// Filter to only selected targets.
	targets := []*apipb.Target{}
	for _, target := range targetMap {
		if targetMatchesTargetSelector(target, req.GetSelector()) {
			targets = append(targets, target)
		}
	}

	return &apipb.GetTargetResponse{
		Target: targets,
	}, nil
}

func (s *APIServer) redisCachedActions(ctx context.Context, userInfo interfaces.UserInfo, iid, targetLabel string) ([]*apipb.Action, error) {
	if !s.CacheEnabled() || s.env.GetMetricsCollector() == nil {
		return nil, nil
	}

	if targetLabel == "" {
		return nil, nil
	}

	const limit = 100_000
	key := api_common.ActionLabelKey(userInfo.GetGroupID(), iid, targetLabel)
	serializedResults, err := s.env.GetMetricsCollector().ListRange(ctx, key, 0, limit-1)
	if err != nil {
		return nil, err
	}
	a := &apipb.Action{}
	actions := make([]*apipb.Action, 0)
	for _, serializedResult := range serializedResults {
		if err := proto.Unmarshal([]byte(serializedResult), a); err != nil {
			return nil, err
		}
		actions = append(actions, a)
	}
	return actions, nil
}

func (s *APIServer) GetAction(ctx context.Context, req *apipb.GetActionRequest) (*apipb.GetActionResponse, error) {
	userInfo, err := s.env.GetAuthenticator().AuthenticatedUser(ctx)
	if err != nil {
		return nil, err
	}

	if req.GetSelector().GetInvocationId() == "" {
		return nil, status.InvalidArgumentErrorf("ActionSelector must contain a valid invocation_id")
	}
	iid := req.GetSelector().GetInvocationId()
	rsp := &apipb.GetActionResponse{
		Action: make([]*apipb.Action, 0),
	}

	cacheKey := req.GetSelector().GetTargetLabel()
	// Target ID is equal to the target label, so either can be used as a cache key.
	if targetId := req.GetSelector().GetTargetId(); targetId != "" {
		cacheKey = targetId
	}

	cachedActions, err := s.redisCachedActions(ctx, userInfo, iid, cacheKey)
	if err != nil {
		log.Debugf("redisCachedAction err: %s", err)
	}
	for _, action := range cachedActions {
		if action != nil && actionMatchesActionSelector(action, req.GetSelector()) {
			rsp.Action = append(rsp.Action, action)
		}
	}
	if len(rsp.Action) > 0 {
		return rsp, nil
	}

	inv, err := build_event_handler.LookupInvocation(s.env, ctx, iid)
	if err != nil {
		return nil, err
	}

	for _, event := range inv.GetEvent() {
		action := &apipb.Action{
			Id: &apipb.Action_Id{
				InvocationId: inv.InvocationId,
			},
		}
		action = api_common.FillActionFromBuildEvent(event.BuildEvent, action)

		// Filter to only selected actions.
		if action != nil && actionMatchesActionSelector(action, req.GetSelector()) {
			action = api_common.FillActionOutputFilesFromBuildEvent(event.BuildEvent, action)
			rsp.Action = append(rsp.Action, action)
		}
	}

	return rsp, nil
}

func (s *APIServer) GetLog(ctx context.Context, req *apipb.GetLogRequest) (*apipb.GetLogResponse, error) {
	// Check whether the user is authenticated. No need for the returned user
	// here, because user filters will be applied by LookupInvocation.
	if _, err := s.env.GetAuthenticator().AuthenticatedUser(ctx); err != nil {
		return nil, err
	}

	if req.GetSelector().GetInvocationId() == "" {
		return nil, status.InvalidArgumentErrorf("LogSelector must contain a valid invocation_id")
	}

	chunkReq := &elpb.GetEventLogChunkRequest{
		InvocationId: req.GetSelector().GetInvocationId(),
		ChunkId:      req.GetPageToken(),
	}

	resp, err := eventlog.GetEventLogChunk(ctx, s.env, chunkReq)
	if err != nil {
		log.Errorf("Encountered error getting event log chunk: %s\nRequest: %s", err, chunkReq)
		return nil, err
	}

	return &apipb.GetLogResponse{
		Log: &apipb.Log{
			Contents: string(resp.GetBuffer()),
		},
		NextPageToken: resp.GetNextChunkId(),
	}, nil
}

type getFileWriter struct {
	s apipb.ApiService_GetFileServer
}

func (gfs *getFileWriter) Write(data []byte) (int, error) {
	err := gfs.s.Send(&apipb.GetFileResponse{
		Data: data,
	})
	return len(data), err
}

func (s *APIServer) GetFile(req *apipb.GetFileRequest, server apipb.ApiService_GetFileServer) error {
	ctx := server.Context()
	if _, err := s.env.GetAuthenticator().AuthenticatedUser(ctx); err != nil {
		return err
	}

	parsedURL, err := url.Parse(req.GetUri())
	if err != nil {
		return status.InvalidArgumentErrorf("Invalid URL")
	}

	writer := &getFileWriter{s: server}

	return s.env.GetPooledByteStreamClient().StreamBytestreamFile(ctx, parsedURL, writer)
}

func (s *APIServer) DeleteFile(ctx context.Context, req *apipb.DeleteFileRequest) (*apipb.DeleteFileResponse, error) {
	if !*enableCacheDeleteAPI {
		return nil, status.PermissionDeniedError("DeleteFile API not enabled")
	}

	ctx, err := prefix.AttachUserPrefixToContext(ctx, s.env)
	if err != nil {
		return nil, err
	}

	if _, err = s.env.GetAuthenticator().AuthenticatedUser(ctx); err != nil {
		return nil, err
	}
	if err = s.authorizeWrites(ctx); err != nil {
		return nil, err
	}

	parsedURL, err := url.Parse(req.GetUri())
	if err != nil {
		return nil, status.InvalidArgumentErrorf("Invalid URL")
	}
	urlStr := strings.TrimPrefix(parsedURL.RequestURI(), "/")

	var resourceName *rspb.ResourceName
	if digest.IsActionCacheResourceName(urlStr) {
		parsedRN, err := digest.ParseActionCacheResourceName(urlStr)
		if err != nil {
			return nil, status.InvalidArgumentErrorf("Invalid URL. Does not match expected actioncache URI pattern: %s", err)
		}
		resourceName = digest.NewResourceName(parsedRN.GetDigest(), parsedRN.GetInstanceName(), rspb.CacheType_AC, parsedRN.GetDigestFunction()).ToProto()
	} else if digest.IsDownloadResourceName(urlStr) {
		parsedRN, err := digest.ParseDownloadResourceName(urlStr)
		if err != nil {
			return nil, status.InvalidArgumentErrorf("Invalid URL. Does not match expected CAS URI pattern: %s", err)
		}
		resourceName = digest.NewResourceName(parsedRN.GetDigest(), parsedRN.GetInstanceName(), rspb.CacheType_CAS, parsedRN.GetDigestFunction()).ToProto()
	} else {
		return nil, status.InvalidArgumentErrorf("Invalid URL. Only actioncache and CAS URIs supported.")
	}

	err = s.env.GetCache().Delete(ctx, resourceName)
	if err != nil && !status.IsNotFoundError(err) {
		return nil, err
	}

	return &apipb.DeleteFileResponse{}, nil
}

func (s *APIServer) GetFileHandler() http.Handler {
	return http.HandlerFunc(s.handleGetFileRequest)
}

// Handle streaming http GetFile request since protolet doesn't handle streaming rpcs yet.
func (s *APIServer) handleGetFileRequest(w http.ResponseWriter, r *http.Request) {
	if _, err := s.env.GetAuthenticator().AuthenticatedUser(r.Context()); err != nil {
		http.Error(w, "Invalid API key", http.StatusUnauthorized)
		return
	}

	req := apipb.GetFileRequest{}
	protolet.ReadRequestToProto(r, &req)

	parsedURL, err := url.Parse(req.GetUri())
	if err != nil {
		http.Error(w, "Invalid URI", http.StatusBadRequest)
		return
	}

	err = s.env.GetPooledByteStreamClient().StreamBytestreamFile(r.Context(), parsedURL, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func (s *APIServer) GetMetricsHandler() http.Handler {
	return http.HandlerFunc(s.handleGetMetricsRequest)
}

func (s *APIServer) handleGetMetricsRequest(w http.ResponseWriter, r *http.Request) {
	if !*enableMetricsAPI {
		http.Error(w, "API not enabled", http.StatusNotImplemented)
		return
	}
	userInfo, err := s.env.GetAuthenticator().AuthenticatedUser(r.Context())
	if err != nil {
		http.Error(w, "Invalid API key", http.StatusUnauthorized)
		return
	}
	if userInfo.GetGroupID() == "" {
		http.Error(w, "Invalid API key", http.StatusUnauthorized)
		return
	}
	// query prometheus
	reg, err := prom.NewRegistry(s.env, userInfo.GetGroupID())
	if err != nil {
		http.Error(w, "unable to get registry", http.StatusInternalServerError)
		return
	}
	opts := promhttp.HandlerOpts{
		ErrorHandling: promhttp.ContinueOnError,
		Registry:      reg,
		// Gzip is handlered by intercepters already.
		DisableCompression: true,
	}
	handler := promhttp.HandlerFor(reg, opts)
	handler.ServeHTTP(w, r)
}

// Returns true if a selector has an empty target ID or matches the target's ID or tag
func targetMatchesTargetSelector(target *apipb.Target, selector *apipb.TargetSelector) bool {
	if selector.Label != "" {
		return selector.Label == target.Label
	}

	if selector.Tag != "" {
		for _, tag := range target.GetTag() {
			if tag == selector.Tag {
				return true
			}
		}
		return false
	}
	return selector.TargetId == "" || selector.TargetId == target.GetId().TargetId
}

// Returns true if a selector doesn't specify a particular id or matches the target's ID
func actionMatchesActionSelector(action *apipb.Action, selector *apipb.ActionSelector) bool {
	return (selector.TargetId == "" || selector.TargetId == action.GetId().TargetId) &&
		(selector.TargetLabel == "" || selector.TargetLabel == action.GetTargetLabel()) &&
		(selector.ConfigurationId == "" || selector.ConfigurationId == action.GetId().ConfigurationId) &&
		(selector.ActionId == "" || selector.ActionId == action.GetId().ActionId)
}

func (s *APIServer) ExecuteWorkflow(ctx context.Context, req *apipb.ExecuteWorkflowRequest) (*apipb.ExecuteWorkflowResponse, error) {
	user, err := s.env.GetAuthenticator().AuthenticatedUser(ctx)
	if err != nil {
		return nil, err
	}
	if user.GetGroupID() == "" {
		return nil, status.InternalErrorf("authenticated user's group ID is empty")
	}

	wfs := s.env.GetWorkflowService()
	requestCtx := requestcontext.ProtoRequestContextFromContext(ctx)

	wfID := wfs.GetLegacyWorkflowIDForGitRepository(user.GetGroupID(), req.GetRepoUrl())
	r := &workflow.ExecuteWorkflowRequest{
		RequestContext: requestCtx,
		WorkflowId:     wfID,
		ActionNames:    req.GetActionNames(),
		PushedRepoUrl:  req.GetRepoUrl(),
		PushedBranch:   req.GetRef(),
		TargetRepoUrl:  req.GetRepoUrl(),
		TargetBranch:   req.GetRef(),
		Clean:          req.GetClean(),
		Visibility:     req.GetVisibility(),
		Async:          req.GetAsync(),
		Env:            req.GetEnv(),
	}
	rsp, err := wfs.ExecuteWorkflow(ctx, r)
	if err != nil {
		if status.IsNotFoundError(err) {
			return nil, status.NotFoundErrorf("Workflow for repo %s not found. Note that the legacy Workflow product"+
				" is not supported for this API. See https://www.buildbuddy.io/docs/workflows-setup/ for more information"+
				" on how to correctly setup Workflows.", req.GetRepoUrl())
		}
		return nil, err
	}

	actionStatuses := make([]*apipb.ExecuteWorkflowResponse_ActionStatus, len(rsp.GetActionStatuses()))
	for i, as := range rsp.GetActionStatuses() {
		actionStatuses[i] = &apipb.ExecuteWorkflowResponse_ActionStatus{
			ActionName:   as.ActionName,
			InvocationId: as.InvocationId,
			Status:       as.Status,
		}
	}
	return &apipb.ExecuteWorkflowResponse{
		ActionStatuses: actionStatuses,
	}, nil
}
