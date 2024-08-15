#!/bin/bash
if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi

# Call with --gcr to use images from GCR (slow and subject to rate-limit)
if [[ $* == *--gcr* ]]; then
    podman pull gcr.io/flame-public/executor-docker-default:enterprise-v1.6.0
    podman tag gcr.io/flame-public/executor-docker-default:enterprise-v1.6.0 localhost:8080/flame-public/executor-docker-default:enterprise-v1.6.0

    podman pull gcr.io/flame-public/rbe-ubuntu20-04@sha256:09261f2019e9baa7482f7742cdee8e9972a3971b08af27363a61816b2968f622
    podman tag gcr.io/flame-public/rbe-ubuntu20-04@sha256:09261f2019e9baa7482f7742cdee8e9972a3971b08af27363a61816b2968f622 localhost:8080/flame-public/rbe-ubuntu20-04:latest
else
    podman pull --tls-verify=false localhost:5000/flame-public/executor-docker-default:enterprise-v1.6.0
    podman tag localhost:5000/flame-public/executor-docker-default:enterprise-v1.6.0 localhost:8080/flame-public/executor-docker-default:enterprise-v1.6.0

    podman pull --tls-verify=false localhost:5000/flame-public/rbe-ubuntu20-04:latest
    podman tag localhost:5000/flame-public/rbe-ubuntu20-04:latest localhost:8080/flame-public/rbe-ubuntu20-04:latest
fi

podman push --tls-verify=false localhost:8080/flame-public/executor-docker-default:enterprise-v1.6.0
podman push --tls-verify=false localhost:8080/flame-public/rbe-ubuntu20-04:latest
