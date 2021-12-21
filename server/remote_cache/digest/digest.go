package digest

import (
	"bytes"
	"context"
	"crypto/sha256"
	"fmt"
	"io"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/golang/protobuf/proto"
	"google.golang.org/genproto/googleapis/rpc/errdetails"

	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	guuid "github.com/google/uuid"
	gcodes "google.golang.org/grpc/codes"
	gmetadata "google.golang.org/grpc/metadata"
	gstatus "google.golang.org/grpc/status"
)

const (
	hashKeyLength = 64
	EmptySha256   = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
	EmptyHash     = ""
)

var (
	// Cache keys must be:
	//  - lower case
	//  - ascii
	//  - a sha256 sum
	hashKeyRegex = regexp.MustCompile("^[a-f0-9]{64}$")

	// Matches:
	// - "blobs/469db13020c60f8bdf9c89aa4e9a449914db23139b53a24d064f967a51057868/39120"
	// - "blobs/ac/469db13020c60f8bdf9c89aa4e9a449914db23139b53a24d064f967a51057868/39120"
	// - "uploads/2042a8f9-eade-4271-ae58-f5f6f5a32555/blobs/8afb02ca7aace3ae5cd8748ac589e2e33022b1a4bfd22d5d234c5887e270fe9c/17997850"
	uploadRegex      = regexp.MustCompile("^(?:(?:(?P<instance_name>.*)/)?uploads/(?P<uuid>[a-f0-9-]{36})/)?(?P<blob_type>blobs|compressed-blobs/zstd)/(?P<hash>[a-f0-9]{64})/(?P<size>\\d+)")
	downloadRegex    = regexp.MustCompile("^(?:(?P<instance_name>.*)/)?(?P<blob_type>blobs|compressed-blobs/zstd)/(?P<hash>[a-f0-9]{64})/(?P<size>\\d+)")
	actionCacheRegex = regexp.MustCompile("^(?:(?P<instance_name>.*)/)?(?P<blob_type>blobs|compressed-blobs/zstd)/ac/(?P<hash>[a-f0-9]{64})/(?P<size>\\d+)")
)

type InstanceNameDigest struct {
	*repb.Digest
	instanceName string
}

func NewInstanceNameDigest(d *repb.Digest, instanceName string) *InstanceNameDigest {
	return &InstanceNameDigest{
		Digest:       d,
		instanceName: instanceName,
	}
}

func (i *InstanceNameDigest) GetInstanceName() string {
	return i.instanceName
}

// Key is a representation of a digest that can be used as a map key.
type Key struct {
	Hash      string
	SizeBytes int64
}

func NewKey(digest *repb.Digest) Key {
	return Key{Hash: digest.GetHash(), SizeBytes: digest.GetSizeBytes()}
}
func (dk Key) ToDigest() *repb.Digest {
	return &repb.Digest{Hash: dk.Hash, SizeBytes: dk.SizeBytes}
}

func Validate(d *repb.Digest) (string, error) {
	if d == nil {
		return "", status.InvalidArgumentError("Invalid (nil) Digest")
	}
	if d.SizeBytes == int64(0) {
		if d.Hash == EmptySha256 {
			return "", status.OK()
		}
		return "", status.InvalidArgumentError("Invalid (zero-length) SHA256 hash")
	}

	if len(d.Hash) != hashKeyLength {
		return "", status.InvalidArgumentError(fmt.Sprintf("Hash length was %d, expected %d", len(d.Hash), hashKeyLength))
	}

	if !hashKeyRegex.MatchString(d.Hash) {
		return "", status.InvalidArgumentError("Malformed hash")
	}
	return d.Hash, nil
}

func ComputeForMessage(in proto.Message) (*repb.Digest, error) {
	data, err := proto.Marshal(in)
	if err != nil {
		return nil, err
	}
	return Compute(bytes.NewReader(data))
}

func Compute(in io.Reader) (*repb.Digest, error) {
	h := sha256.New()
	// Read file in 32KB chunks (default)
	n, err := io.Copy(h, in)
	if err != nil {
		return nil, err
	}
	return &repb.Digest{
		Hash:      fmt.Sprintf("%x", h.Sum(nil)),
		SizeBytes: n,
	}, nil
}

func DownloadResourceName(resource *ResourceName) string {
	// Haven't found docs on what a valid instance name looks like. But generally
	// seems like a string, possibly separated by "/".

	// Ensure there is no trailing slash and path has components.
	instanceName := filepath.Join(filepath.SplitList(resource.GetInstanceName())...)
	return fmt.Sprintf(
		"%s/%s/%s/%d",
		instanceName, blobTypeSegment(resource.Compression),
		resource.GetHash(), resource.GetSizeBytes())
}

func UploadResourceName(resource *ResourceName) (string, error) {
	// Haven't found docs on what a valid instance name looks like. But generally
	// seems like a string, possibly separated by "/".

	// Ensure there is no trailing slash and path has components.
	instanceName := filepath.Join(filepath.SplitList(resource.GetInstanceName())...)

	u, err := guuid.NewRandom()
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		"%s/uploads/%s/%s/%s/%d",
		instanceName, u.String(), blobTypeSegment(resource.Compression),
		resource.GetHash(), resource.GetSizeBytes(),
	), nil
}

// ResourceName represents a valid bytestream resource name parsed into its
// component parts.
type ResourceName struct {
	// TODO(DO NOT MERGE): Don't embed InstanceNameDigest; it is not very
	// ergonomic. Include instance name and digest as separate fields.
	*InstanceNameDigest
	Compression repb.Compressor_Value
}

func parseResourceName(resourceName string, matcher *regexp.Regexp) (*ResourceName, error) {
	match := matcher.FindStringSubmatch(resourceName)
	result := make(map[string]string, len(match))
	for i, name := range matcher.SubexpNames() {
		if i != 0 && name != "" && i < len(match) {
			result[name] = match[i]
		}
	}
	hash, hashOK := result["hash"]
	sizeStr, sizeOK := result["size"]
	if !hashOK || !sizeOK {
		return nil, status.InvalidArgumentErrorf("Unparsable resource name: %s", resourceName)
	}
	if hash == "" {
		return nil, status.InvalidArgumentErrorf("Unparsable resource name (empty hash?): %s", resourceName)
	}
	sizeBytes, err := strconv.ParseInt(sizeStr, 10, 0)
	if err != nil {
		return nil, err
	}

	// Set the instance name, if one was present.
	instanceName := ""
	if in, ok := result["instance_name"]; ok {
		instanceName = in
	}

	// Determine compression level from blob type segment
	blobTypeStr, sizeOK := result["blob_type"]
	if !sizeOK {
		// Should never happen since the regex would not match otherwise.
		return nil, status.InvalidArgumentError(`Unparsable resource name: "/blobs" or "/compressed-blobs/zstd" missing or out of place`)
	}
	compressor := repb.Compressor_IDENTITY
	if blobTypeStr == "compressed-blobs/zstd" {
		compressor = repb.Compressor_ZSTD
	}

	ind := NewInstanceNameDigest(&repb.Digest{Hash: hash, SizeBytes: sizeBytes}, instanceName)
	return &ResourceName{
		InstanceNameDigest: ind,
		Compression:        compressor,
	}, nil
}

func ParseUploadResourceName(resourceName string) (*ResourceName, error) {
	return parseResourceName(resourceName, uploadRegex)
}

func ParseDownloadResourceName(resourceName string) (*ResourceName, error) {
	return parseResourceName(resourceName, downloadRegex)
}

func ParseActionCacheResourceName(resourceName string) (*ResourceName, error) {
	return parseResourceName(resourceName, actionCacheRegex)
}

func blobTypeSegment(compressor repb.Compressor_Value) string {
	if compressor == repb.Compressor_ZSTD {
		return "compressed-blobs/zstd"
	}
	return "blobs"
}

func IsCacheDebuggingEnabled(ctx context.Context) bool {
	if grpcMD, ok := gmetadata.FromIncomingContext(ctx); ok {
		debugCacheHitsValue := grpcMD["debug-cache-hits"]
		if len(debugCacheHitsValue) == 1 {
			if strings.ToLower(strings.TrimSpace(debugCacheHitsValue[0])) == "true" {
				return true
			}
		}
	}
	return false
}

func MissingDigestError(d *repb.Digest) error {
	pf := &errdetails.PreconditionFailure{}
	pf.Violations = append(pf.Violations, &errdetails.PreconditionFailure_Violation{
		Type:    "MISSING",
		Subject: fmt.Sprintf("blobs/%s/%d", d.GetHash(), d.GetSizeBytes()),
	})
	st := gstatus.Newf(gcodes.FailedPrecondition, "Digest %v not found", d)
	if st, err := st.WithDetails(pf); err != nil {
		return status.InternalErrorf("Digest %v not found.", d)
	} else {
		return st.Err()
	}
}

func Parse(str string) (*repb.Digest, error) {
	dParts := strings.SplitN(str, "/", 2)
	if len(dParts) != 2 || len(dParts[0]) != 64 {
		return nil, status.FailedPreconditionErrorf("Error parsing digest %q: should be of form 'f31e59431cdc5d631853e28151fb664f859b5f4c5dc94f0695408a6d31b84724/142'", str)
	}
	i, err := strconv.ParseInt(dParts[1], 10, 64)
	if err != nil {
		return nil, status.FailedPreconditionErrorf("Error parsing digest %q: %s", str, err)
	}
	return &repb.Digest{
		Hash:      dParts[0],
		SizeBytes: i,
	}, nil
}
