package perms

import (
	"context"
	"fmt"
	"strings"

	"github.com/buildbuddy-io/buildbuddy/proto/acl"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/query_builder"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"

	aclpb "github.com/buildbuddy-io/buildbuddy/proto/acl"
	ctxpb "github.com/buildbuddy-io/buildbuddy/proto/context"
	grpb "github.com/buildbuddy-io/buildbuddy/proto/group"
	uidpb "github.com/buildbuddy-io/buildbuddy/proto/user_id"
)

const (
	NONE         = 0o0
	OWNER_READ   = 0o0400
	OWNER_WRITE  = 0o0200
	OWNER_EXEC   = 0o0100
	GROUP_READ   = 0o040
	GROUP_WRITE  = 0o020
	GROUP_EXEC   = 0o010
	OTHERS_READ  = 0o04
	OTHERS_WRITE = 0o02
	OTHERS_EXEC  = 0o01
	ALL          = 0o0777
)

// Constants for UserGroup.Role. These are powers of 2 so that we can allow
// assigning multiple roles to users and use these as bitmasks to check
// role membership.
const (
	// DeveloperRole means a user cannot perform certain privileged actions such
	// as creating API keys and viewing usage data, but can perform most other
	// common actions such as viewing invocation history.
	DeveloperRole Role = 1 << 0
	// AdminRole means a user has unrestricted access within a group.
	AdminRole Role = 1 << 1

	// DefaultRole is the role assigned to users when joining a group they did
	// not create.
	// TODO(bduffany): Change this to DeveloperRole once we have a way to manage
	// roles via the UI (otherwise, there would be no easy way to promote new
	// users to admins in the meantime).
	DefaultRole = AdminRole
)

var (
	// RolePermissionsConfig defines a mapping from resource types to the
	// permissions granted per role. Permissions must be explicitly granted
	// per-role.
	ResourceRolePermissions = []*acl.ResourceRolePermissions{
		{
			ResourceType:    acl.ResourceType_API_KEYS,
			RolePermissions: developerReadAdminReadWritePermissions,
		},
		// TODO(bduffany): define RolePermissions for all ResourceTypes
		// {
		// 	ResourceType:    acl.ResourceType_ORG_DETAILS,
		// 	RolePermissions: developerReadAdminReadWritePermissions,
		// },
		// {
		// 	ResourceType:    acl.ResourceType_ORG_MEMBERS,
		// 	RolePermissions: adminOnlyPermissions,
		// },
	}

	rolePermissionsByResource = rolePermissionsToMap(ResourceRolePermissions)

	adminOnlyPermissions = []*acl.RolePermissions{
		{Role: grpb.Group_ADMIN_ROLE, Permissions: readWritePermissions},
	}
	developerReadAdminReadWritePermissions = []*acl.RolePermissions{
		{Role: grpb.Group_DEVELOPER_ROLE, Permissions: readOnlyPermissions},
		{Role: grpb.Group_ADMIN_ROLE, Permissions: readWritePermissions},
	}
	readWritePermissions = &acl.ACL_Permissions{Read: true, Write: true}
	readOnlyPermissions  = &acl.ACL_Permissions{Read: true, Write: false}
)

// Role represents a value stored in the UserGroup.Role field.
type Role uint32

type UserGroupPerm struct {
	UserID  string
	GroupID string
	Perms   int
}

func AnonymousUserPermissions() *UserGroupPerm {
	return &UserGroupPerm{
		UserID:  "",
		GroupID: "",
		Perms:   OTHERS_READ,
	}
}

func GroupAuthPermissions(groupID string) *UserGroupPerm {
	return &UserGroupPerm{
		UserID:  groupID,
		GroupID: groupID,
		Perms:   GROUP_READ | GROUP_WRITE,
	}
}

func ToACLProto(userID *uidpb.UserId, groupID string, perms int) *aclpb.ACL {
	return &aclpb.ACL{
		UserId:  userID,
		GroupId: groupID,
		OwnerPermissions: &aclpb.ACL_Permissions{
			Read:  perms&OWNER_READ != 0,
			Write: perms&OWNER_WRITE != 0,
		},
		GroupPermissions: &aclpb.ACL_Permissions{
			Read:  perms&GROUP_READ != 0,
			Write: perms&GROUP_WRITE != 0,
		},
		OthersPermissions: &aclpb.ACL_Permissions{
			Read:  perms&OTHERS_READ != 0,
			Write: perms&OTHERS_WRITE != 0,
		},
	}
}

func FromACL(acl *aclpb.ACL) (int, error) {
	if acl == nil {
		return 0, status.InvalidArgumentError("ACL is nil.")
	}
	p := 0
	if acl.GetOwnerPermissions().GetRead() {
		p |= OWNER_READ
	}
	if acl.GetOwnerPermissions().GetWrite() {
		p |= OWNER_WRITE
	}
	if acl.GetGroupPermissions().GetRead() {
		p |= GROUP_READ
	}
	if acl.GetGroupPermissions().GetWrite() {
		p |= GROUP_WRITE
	}
	if acl.GetOthersPermissions().GetRead() {
		p |= OTHERS_READ
	}
	if acl.GetOthersPermissions().GetWrite() {
		p |= OTHERS_WRITE
	}
	return p, nil
}

// ACLForGroupResourceType returns an ACL representing the permissions granted
// to users who are a member of the given group and are trying to access the
// given resource type.
func ACLForGroupResourceType(groupID string, resourceType aclpb.ResourceType) *aclpb.ACL {
	return &aclpb.ACL{
		GroupId:         groupID,
		RolePermissions: rolePermissionsByResource[resourceType],
	}
}

func RoleToProto(role Role) grpb.Group_Role {
	if role&AdminRole == AdminRole {
		return grpb.Group_ADMIN_ROLE
	}
	return grpb.Group_DEVELOPER_ROLE
}

func RoleFromProto(role grpb.Group_Role) Role {
	if role == grpb.Group_ADMIN_ROLE {
		return AdminRole
	}
	return DeveloperRole
}

func rolePermissionsToMap(rrps []*aclpb.ResourceRolePermissions) map[aclpb.ResourceType][]*aclpb.RolePermissions {
	m := make(map[aclpb.ResourceType][]*aclpb.RolePermissions, len(rrps))
	for _, rrp := range rrps {
		m[rrp.ResourceType] = rrp.RolePermissions
	}
	return m
}

func AuthenticatedUser(ctx context.Context, env environment.Env) (interfaces.UserInfo, error) {
	auth := env.GetAuthenticator()
	if auth == nil {
		return nil, status.UnimplementedError("Not implemented")
	}
	return auth.AuthenticatedUser(ctx)
}

func AuthorizeRead(authenticatedUser *interfaces.UserInfo, acl *aclpb.ACL) error {
	if authenticatedUser == nil {
		return status.InvalidArgumentError("authenticatedUser cannot be nil.")
	}
	u := *authenticatedUser
	if acl == nil {
		return status.InvalidArgumentError("acl cannot be nil.")
	}

	perms, err := FromACL(acl)
	if err != nil {
		return err
	}

	if perms&OTHERS_READ != 0 || u.IsAdmin() {
		return nil
	}
	isOwner := u.GetUserID() == acl.GetUserId().GetId()
	if isOwner && perms&OWNER_READ != 0 {
		return nil
	}
	if perms&GROUP_READ != 0 {
		for _, groupID := range u.GetAllowedGroups() {
			if groupID == acl.GetGroupId() {
				return nil
			}
		}
	}

	if acl.GroupId != "" {
		userRoleBits := u.GetGroupRoles()[acl.GroupId]
		for _, rolePerms := range acl.GetRolePermissions() {
			requiredRoleBits := uint32(RoleFromProto(rolePerms.Role))
			userHasRole := userRoleBits&requiredRoleBits == requiredRoleBits
			if userHasRole && rolePerms.Permissions.Read {
				return nil
			}
		}
	}

	return status.PermissionDeniedError("You do not have permission to perform this action.")
}

func AuthorizeWrite(authenticatedUser *interfaces.UserInfo, acl *aclpb.ACL) error {
	if authenticatedUser == nil {
		return status.InvalidArgumentError("authenticatedUser cannot be nil.")
	}
	u := *authenticatedUser
	if acl == nil {
		return status.InvalidArgumentError("acl cannot be nil.")
	}

	perms, err := FromACL(acl)
	if err != nil {
		return err
	}

	if perms&OTHERS_WRITE != 0 {
		log.Warning("Ignoring request to allow OTHERS_WRITE. This should not happen!")
	}
	isOwner := u.GetUserID() == acl.GetUserId().GetId()
	if isOwner && perms&OWNER_WRITE != 0 {
		return nil
	}
	if perms&GROUP_WRITE != 0 {
		for _, groupID := range u.GetAllowedGroups() {
			if groupID == acl.GetGroupId() {
				return nil
			}
		}
	}

	if acl.GroupId != "" {
		userRoleBits := u.GetGroupRoles()[acl.GroupId]
		for _, rolePerms := range acl.GetRolePermissions() {
			requiredRoleBits := uint32(RoleFromProto(rolePerms.Role))
			userHasRole := userRoleBits&requiredRoleBits == requiredRoleBits
			if userHasRole && rolePerms.Permissions.Write {
				return nil
			}
		}
	}

	return status.PermissionDeniedError("You do not have permission to perform this action.")
}

func AddPermissionsCheckToQuery(ctx context.Context, env environment.Env, q *query_builder.Query) error {
	return AddPermissionsCheckToQueryWithTableAlias(ctx, env, q, "")
}

func AddPermissionsCheckToQueryWithTableAlias(ctx context.Context, env environment.Env, q *query_builder.Query, tableAlias string) error {
	tablePrefix := ""
	if tableAlias != "" {
		tablePrefix = tableAlias + "."
	}
	o := query_builder.OrClauses{}
	o.AddOr(fmt.Sprintf("(%sperms & ? != 0)", tablePrefix), OTHERS_READ)

	hasUser := false
	if auth := env.GetAuthenticator(); auth != nil {
		if u, err := auth.AuthenticatedUser(ctx); err == nil {
			hasUser = true
			if u.GetGroupID() != "" {
				groupArgs := []interface{}{
					GROUP_READ,
					u.GetGroupID(),
				}
				o.AddOr(fmt.Sprintf("(%sperms & ? != 0 AND %sgroup_id = ?)", tablePrefix, tablePrefix), groupArgs...)
			} else if u.GetUserID() != "" {
				groupArgs := []interface{}{
					GROUP_READ,
				}
				groupParams := make([]string, 0)
				for _, groupID := range u.GetAllowedGroups() {
					groupArgs = append(groupArgs, groupID)
					groupParams = append(groupParams, "?")
				}
				groupParamString := "(" + strings.Join(groupParams, ", ") + ")"
				groupQueryStr := fmt.Sprintf("(%sperms & ? != 0 AND %sgroup_id IN %s)", tablePrefix, tablePrefix, groupParamString)
				o.AddOr(groupQueryStr, groupArgs...)
				o.AddOr(fmt.Sprintf("(%sperms & ? != 0 AND %suser_id = ?)", tablePrefix, tablePrefix), OWNER_READ, u.GetUserID())
			}
			if u.IsAdmin() {
				o.AddOr(fmt.Sprintf("(%sperms & ? != 0)", tablePrefix), ALL)
			}
		}
	}

	if !hasUser && !env.GetConfigurator().GetAnonymousUsageEnabled() {
		return status.PermissionDeniedErrorf("Anonymous access disabled, permission denied.")
	}

	orQuery, orArgs := o.Build()
	q = q.AddWhereClause("("+orQuery+")", orArgs...)
	return nil
}

func AuthorizeGroupAccess(ctx context.Context, env environment.Env, groupID string) error {
	if groupID == "" {
		return status.InvalidArgumentError("group ID is required")
	}
	user, err := AuthenticatedUser(ctx, env)
	if err != nil {
		return err
	}
	for _, allowedGroupID := range user.GetAllowedGroups() {
		if allowedGroupID == groupID {
			return nil
		}
	}
	return status.PermissionDeniedError("You do not have access to the requested group")
}

// AuthenticateSelectedGroupID returns the group ID selected by the user in the
// UI (determined via the proto request context), returning an error if the user
// does not have access to the selected group.
func AuthenticateSelectedGroupID(ctx context.Context, env environment.Env, protoCtx *ctxpb.RequestContext) (string, error) {
	if protoCtx == nil {
		return "", status.InvalidArgumentError("request_context field is required")
	}
	groupID := protoCtx.GetGroupId()
	if groupID == "" {
		return "", status.InvalidArgumentError("request_context.group_id field is required")
	}
	if err := AuthorizeGroupAccess(ctx, env, groupID); err != nil {
		return "", err
	}
	return groupID, nil
}

// AuthenticatedGroupID returns the authenticated group ID from the given
// context. This is preferred for API requests, since the group ID can be
// determined directly from the API key. UI requests should instead use
// `AuthenticateSelectedGroupID`, since the API key is not available, and the
// user's selected group ID needs to be taken into account.
func AuthenticatedGroupID(ctx context.Context, env environment.Env) (string, error) {
	u, err := AuthenticatedUser(ctx, env)
	if err != nil {
		return "", err
	}
	groupID := u.GetGroupID()
	if groupID == "" {
		return "", status.FailedPreconditionError("Authenticated user does not have an associated group ID")
	}
	return groupID, nil
}

// IsAnonymousUserError can be used to check whether an error returned by
// functions which return the authenticated user (such as AuthenticatedUser or
// AuthenticateSelectedGroupID) is due to an anonymous user accessing the
// service. This is useful for allowing anonymous users to proceed, in cases
// where anonymous usage is explicitly enabled in the app config, and we support
// anonymous usage for the part of the service where this is used.
func IsAnonymousUserError(err error) bool {
	return status.IsUnauthenticatedError(err) || status.IsPermissionDeniedError(err) || status.IsUnimplementedError(err)
}
