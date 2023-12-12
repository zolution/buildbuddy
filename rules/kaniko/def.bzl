def _remote_kaniko_build_impl(ctx):
    archive = ctx.actions.declare_file("image.tar")
    build_script = ctx.actions.declare_file("kaniko_build.sh")
    ctx.actions.expand_template(
        template = ctx.file._build_script_template,
        output = build_script,
        substitutions = {
            "{kaniko}": ctx.executable._kaniko.path,
            "{context_directory_path}": ctx.label.package,
            "{image_name}": ctx.label.package + ":" + ctx.label.name,
            "{dockerfile}": ctx.file.dockerfile.path,
            "{archive}": archive.path,
        },
        is_executable = True,
    )

    inputs = [ctx.file.dockerfile, ctx.file._kaniko]
    for f in ctx.files.context_directory:
        inputs.append(f)

    ctx.actions.run(
        inputs = inputs,
        outputs = [archive],
        executable = build_script,
    )
    return [DefaultInfo(files = depset([archive]))]

_remote_kaniko_build = rule(
    implementation = _remote_kaniko_build_impl,
    attrs = {
        "_kaniko": attr.label(
            default = Label("@com_github_googlecontainertools_kaniko//cmd/executor"),
            allow_single_file = True,
            executable = True,
            cfg = "exec",
        ),
        "_build_script_template": attr.label(
            default = Label("//rules/kaniko:kaniko_build.sh.tpl"),
            allow_single_file = True,
        ),
        "context_directory": attr.label_list(
            allow_files = True,
        ),
        "dockerfile": attr.label(
            allow_single_file = ["Dockerfile"],
        ),
    },
)

def remote_kaniko_build(name, recycling_key = "", exec_properties = {}, **kwargs):
    """ remote_docker_build rule executes a kaniko build in RBE
    and output a tar.gz archive of the image.
    """
    recycling_key = recycling_key if recycling_key else name
    native.filegroup(
        name = name + "_context_directory",
        srcs = native.glob(["**"]),
    )
    _remote_kaniko_build(
        name = name,
        context_directory = [":" + name + "_context_directory"],
        exec_properties = {
            "dockerNetwork": "bridge",
            "EstimatedCPU": "16",
            "EstimatedMemory": "32G",
            "container-image": "docker://ghcr.io/sluongng/rbe-ubuntu16-04@sha256:5464e3e83dc656fc6e4eae6a01f5c2645f1f7e95854b3802b85e86484132d90e",
            "recycle-runner": "true",
            "runner-recycling-key": "remote_docker_build_" + recycling_key,
        } | exec_properties,
        tags = ["manual", "docker"],
        **kwargs
    )
