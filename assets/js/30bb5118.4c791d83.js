"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2992],{19183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=i(85893),t=i(11151);const l={id:"rbe-setup",title:"RBE Setup",sidebar_label:"Remote Build Execution Setup"},a=void 0,s={id:"rbe-setup",title:"RBE Setup",description:"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood.",source:"@site/../docs/rbe-setup.md",sourceDirName:".",slug:"/rbe-setup",permalink:"/docs/rbe-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-setup.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1714742542,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{id:"rbe-setup",title:"RBE Setup",sidebar_label:"Remote Build Execution Setup"},sidebar:"someSidebar",previous:{title:"Remote Build Execution",permalink:"/docs/remote-build-execution"},next:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"}},r={},d=[{value:"The basics",id:"the-basics",level:2},{value:"Configuring your workspace",id:"configuring-your-workspace",level:2},{value:"Platforms",id:"platforms",level:2},{value:"Toolchains",id:"toolchains",level:2},{value:"C toolchain",id:"c-toolchain",level:3},{value:"Java toolchain",id:"java-toolchain",level:3},{value:"Java toolchain for older Bazel versions",id:"java-toolchain-for-older-bazel-versions",level:4},{value:"Attributes",id:"attributes",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"--jobs",id:"--jobs",level:3},{value:"--remote_timeout",id:"--remote_timeout",level:3},{value:"--remote_download_minimal",id:"--remote_download_minimal",level:3},{value:"--remote_instance_name",id:"--remote_instance_name",level:3},{value:"--disk_cache",id:"--disk_cache",level:3},{value:"--incompatible_strict_action_env",id:"--incompatible_strict_action_env",level:3},{value:"--action_env",id:"--action_env",level:3},{value:"--define",id:"--define",level:3},{value:"--spawn_strategy",id:"--spawn_strategy",level:3},{value:"--strategy",id:"--strategy",level:3},{value:"--experimental_inmemory_dotd_files",id:"--experimental_inmemory_dotd_files",level:3},{value:"--experimental_inmemory_jdeps_files",id:"--experimental_inmemory_jdeps_files",level:3},{value:"Examples",id:"examples",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood."}),"\n",(0,o.jsxs)(n.p,{children:["This guide assumes you're using ",(0,o.jsx)(n.a,{href:"/docs/cloud",children:"BuildBuddy Cloud"})," or ",(0,o.jsx)(n.a,{href:"/docs/enterprise",children:"BuildBuddy Enterprise on-prem"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"the-basics",children:"The basics"}),"\n",(0,o.jsx)(n.p,{children:"The very simplest Bazel command needed to enable RBE is the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bazel build //... --remote_executor=grpcs://remote.buildbuddy.io\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This points Bazel at BuildBuddy Cloud as a remote executor. A simple repo that has no C/C++/CGO or Java dependencies will build just fine like this. Most interesting repos have some dependencies on C/C++/CGO or Java - so we'll need to tell our remote executors where to find tools like gcc or the JRE. We do this with ",(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/platforms.html",children:"platforms"})," and ",(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/toolchains.html",children:"toolchains"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-your-workspace",children:"Configuring your workspace"}),"\n",(0,o.jsxs)(n.p,{children:["There are several options for configuring your platforms and toolchains, the most fully features of which being ",(0,o.jsx)(n.a,{href:"https://releases.bazel.build/bazel-toolchains.html",children:"bazel-toolchains"}),". It comes with an ",(0,o.jsx)(n.code,{children:"rbe_autoconfig"})," rule that works nicely with BuildBuddy."]}),"\n",(0,o.jsxs)(n.p,{children:["Unfortunately, bazel-toolchains has a dependency on Docker and can take quite some time to start up in a clean workspace, so we provide a simple and easy-to-use ",(0,o.jsx)(n.a,{href:"https://github.com/buildbuddy-io/toolchain",children:"BuildBuddy toolchain"})," that enables you to get up and running quickly, and works for most use cases."]}),"\n",(0,o.jsxs)(n.p,{children:["To get started with the BuildBuddy Toolchain, add the following lines to your ",(0,o.jsx)(n.code,{children:"WORKSPACE"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'http_archive(\n    name = "io_buildbuddy_buildbuddy_toolchain",\n    sha256 = "a3492ce5357425eedd4ba0af0571f6b7e70d9c343319fe49f98ef24291e62649",\n    strip_prefix = "buildbuddy-toolchain-5b47b1252d6bff48d1087c3ebebc798247ea2635",\n    urls = ["https://github.com/buildbuddy-io/buildbuddy-toolchain/archive/5b47b1252d6bff48d1087c3ebebc798247ea2635.tar.gz"],\n)\n\nload("@io_buildbuddy_buildbuddy_toolchain//:deps.bzl", "buildbuddy_deps")\n\nbuildbuddy_deps()\n\nload("@io_buildbuddy_buildbuddy_toolchain//:rules.bzl", "buildbuddy")\n\nbuildbuddy(name = "buildbuddy_toolchain")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"platforms",children:"Platforms"}),"\n",(0,o.jsxs)(n.p,{children:["The first thing you'll want to do is tell BuildBuddy RBE in what environment you'll want to run your build actions. This is tools can be found in different locations on different platforms. This is done with the ",(0,o.jsx)(n.code,{children:"--host_platform"}),", ",(0,o.jsx)(n.code,{children:"--platforms"}),", and ",(0,o.jsx)(n.code,{children:"--extra_execution_platforms"})," flags."]}),"\n",(0,o.jsxs)(n.p,{children:["BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. We can specify this platform with the ",(0,o.jsx)(n.code,{children:"--host_platform"}),", ",(0,o.jsx)(n.code,{children:"--platforms"}),", and ",(0,o.jsx)(n.code,{children:"--extra_execution_platforms"})," flags:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--host_platform=@buildbuddy_toolchain//:platform\n--platforms=@buildbuddy_toolchain//:platform\n--extra_execution_platforms=@buildbuddy_toolchain//:platform\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you want to use a different environment, you can specify a custom Docker container image to use. More information on how to do this can be found in our ",(0,o.jsx)(n.a,{href:"/docs/rbe-platforms",children:"platforms documentation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"toolchains",children:"Toolchains"}),"\n",(0,o.jsx)(n.p,{children:"Toolchains sound complicated (and they can be) - but the concept is simple. We're telling our remote executors where to find tools that are needed to build our code."}),"\n",(0,o.jsx)(n.h3,{id:"c-toolchain",children:"C toolchain"}),"\n",(0,o.jsxs)(n.p,{children:["The first toolchain you'll likely run into the need for is a C/C++ compiler. Even if your code isn't written in one of these languages, it's likely that one of your dependencies is - or calls some C code with something like ",(0,o.jsx)(n.a,{href:"https://golang.org/cmd/cgo/",children:"cgo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You'll know you need a C toolchain when you see an error for a missing gcc or clang that looks like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'exec: "/usr/bin/gcc": stat /usr/bin/gcc: no such file or directory\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To use BuildBuddy's default C toolchain, we can use the ",(0,o.jsx)(n.code,{children:"--crosstool_top"})," and ",(0,o.jsx)(n.code,{children:"--extra_toolchains"})," flag:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--crosstool_top=@buildbuddy_toolchain//:toolchain\n--extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're looking for an llvm based toolchain instead, take a look at ",(0,o.jsx)(n.a,{href:"https://github.com/grailbio/bazel-toolchain",children:"this project"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"java-toolchain",children:"Java toolchain"}),"\n",(0,o.jsx)(n.p,{children:"If your project depends on Java code, you'll need to set the following flags:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--java_language_version=11\n--tool_java_language_version=11\n--java_runtime_version=remotejdk_11\n--tool_java_runtime_version=remotejdk_11\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Available versions are listed in ",(0,o.jsx)(n.a,{href:"https://bazel.build/docs/user-manual#java-language-version",children:"Bazel's User Manual"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need a custom Java toolchain, see Bazel's docs on ",(0,o.jsx)(n.a,{href:"https://bazel.build/docs/bazel-and-java#config-java-toolchains",children:"Java toolchain configuration"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"java-toolchain-for-older-bazel-versions",children:"Java toolchain for older Bazel versions"}),"\n",(0,o.jsx)(n.p,{children:"If your project is using a Bazel version before 6.0.0, you will need the following 4 flags instead.\nThey will tell the executors where to look for Java tools."}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"Setting both the old flags and the new flags will result in an error and may result in incorrect toolchain selection."}),(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/issues/7849",children:"https://github.com/bazelbuild/bazel/issues/7849"})," for more information."]})]}),"\n",(0,o.jsx)(n.p,{children:"Using BuildBuddy's default Java 8 config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--javabase=@buildbuddy_toolchain//:javabase_jdk8\n--host_javabase=@buildbuddy_toolchain//:javabase_jdk8\n--java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n--host_java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you need a different version of Java, we recommend using ",(0,o.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel-toolchains",children:"bazel-toolchains"})," for now."]}),"\n",(0,o.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,o.jsxs)(n.p,{children:["Some tools like Bazel's zipper (@bazel_tools//tools/zip",":zipper",") use an attribute to determine whether or not they're being run remotely or not. For tools like these to work properly, you'll need to define an attribute called ",(0,o.jsx)(n.code,{children:"EXECUTOR"})," and set it to the value ",(0,o.jsx)(n.code,{children:"remote"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--define=EXECUTOR=remote\n"})}),"\n",(0,o.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,o.jsxs)(n.p,{children:["This can be a lot of flags to tack onto each bazel build, so instead you can move these to your ",(0,o.jsx)(n.code,{children:".bazelrc"})," file under the ",(0,o.jsx)(n.code,{children:"remote"})," config block:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build:remote --remote_executor=grpcs://remote.buildbuddy.io\nbuild:remote --host_platform=@buildbuddy_toolchain//:platform\nbuild:remote --platforms=@buildbuddy_toolchain//:platform\nbuild:remote --extra_execution_platforms=@buildbuddy_toolchain//:platform\nbuild:remote --crosstool_top=@buildbuddy_toolchain//:toolchain\nbuild:remote --extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\nbuild:remote --java_language_version=11\nbuild:remote --tool_java_language_version=11\nbuild:remote --java_runtime_version=remotejdk_11\nbuild:remote --tool_java_runtime_version=remotejdk_11\nbuild:remote --define=EXECUTOR=remote\n"})}),"\n",(0,o.jsx)(n.p,{children:"And running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bazel build //... --config=remote\n"})}),"\n",(0,o.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["You'll want to authenticate your RBE builds with either API key or certificate based auth. For more info on how to set this up, see our ",(0,o.jsx)(n.a,{href:"/docs/guide-auth",children:"authentication guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,o.jsx)(n.h3,{id:"--jobs",children:"--jobs"}),"\n",(0,o.jsxs)(n.p,{children:["This determines the number of parallel actions Bazel will remotely execute at once. If this flag is not set, Bazel will use a heuristic based on the number of cores on your local machine. Your builds & tests can likely be parallelized much more aggressively when executing remotely. We recommend starting with ",(0,o.jsx)(n.code,{children:"50"})," and working your way up."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--jobs=50\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--jobs",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--remote_timeout",children:"--remote_timeout"}),"\n",(0,o.jsx)(n.p,{children:"This determines the maximum time Bazel will spend on any single remote call, including cache writes. The default value is 60s. We recommend setting this high to avoid timeouts when uploading large cache artifacts."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--remote_download_minimal",children:"--remote_download_minimal"}),"\n",(0,o.jsx)(n.p,{children:"By default, bazel will download intermediate results of remote executions - so in case an artifact isn't found in the remote cache, it can be re-uploaded. This can slow down builds in networks constrained environments."}),"\n",(0,o.jsx)(n.p,{children:"This can be turned off with the flag:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--remote_download_minimal\n"})}),"\n",(0,o.jsx)(n.p,{children:"While this flag can speed up your build, it makes them more sensitive to caching issues - and likely shouldn't be used in production yet."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_download_minimal",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--remote_instance_name",children:"--remote_instance_name"}),"\n",(0,o.jsxs)(n.p,{children:["If you'd like separate remote caches, whether it's for CI builds vs local builds or other reasons, you can use the ",(0,o.jsx)(n.code,{children:"remote_instance_name"})," flag to namespace your cache artifacts:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--remote_instance_name=buildbuddy-io/buildbuddy/ci\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_instance_name",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--disk_cache",children:"--disk_cache"}),"\n",(0,o.jsx)(n.p,{children:"While setting a local disk cache can speed up your builds, when used in conjunction with remote execution - your local and remote state has the opportunity to get out of sync. If you suspect you're running into this problem, you can disable your local disk cache by setting this to an empty value."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--disk_cache=\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--disk_cache",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--incompatible_strict_action_env",children:"--incompatible_strict_action_env"}),"\n",(0,o.jsxs)(n.p,{children:["Some rules (like protobuf) are particularly sensitive to changes in environment variables and will frequently be rebuilt due to resulting cache misses. To mitigate this, you can use the ",(0,o.jsx)(n.code,{children:"incompatible_strict_action_env"})," which sets a static value for ",(0,o.jsx)(n.code,{children:"PATH"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--incompatible_strict_action_env\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--incompatible_strict_action_env",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--action_env",children:"--action_env"}),"\n",(0,o.jsxs)(n.p,{children:["You can set environment variables that are available to actions with the ",(0,o.jsx)(n.code,{children:"--action_env"})," flag. This is commonly used to set ",(0,o.jsx)(n.code,{children:"BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN"})," which tells bazel not to auto-detect the C++ toolchain."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--define",children:"--define"}),"\n",(0,o.jsxs)(n.p,{children:["Define allows you to assign build variables. This is commonly use to set ",(0,o.jsx)(n.code,{children:"EXECUTOR"})," to ",(0,o.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/issues/7254",children:"compile singlejar and ijar from source"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--define=EXECUTOR=remote\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--spawn_strategy",children:"--spawn_strategy"}),"\n",(0,o.jsxs)(n.p,{children:["Sets the list of strategies in priority order from highest to lowest. Each action picks the highest priority strategy that it can execute. The default value is ",(0,o.jsx)(n.code,{children:"remote,worker,sandboxed,local"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--strategy=remote,local\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--spawn_strategy",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--strategy",children:"--strategy"}),"\n",(0,o.jsxs)(n.p,{children:["Explicitly setting strategies should ",(0,o.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/issues/7480",children:"no longer be needed"})," for Bazel versions post 0.27.0. It can be used to force certain bazel mnemonics to be build remotely."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--strategy=Scalac=remote\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--strategy",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--experimental_inmemory_dotd_files",children:"--experimental_inmemory_dotd_files"}),"\n",(0,o.jsxs)(n.p,{children:["If enabled, C++ .d files will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",(0,o.jsx)(n.code,{children:"--remote_download_minimal"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--experimental_inmemory_dotd_files\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_dotd_files",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h3,{id:"--experimental_inmemory_jdeps_files",children:"--experimental_inmemory_jdeps_files"}),"\n",(0,o.jsxs)(n.p,{children:["If enabled, .jdeps files generated from Java compilations will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",(0,o.jsx)(n.code,{children:"--remote_download_minimal"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--experimental_inmemory_jdeps_files\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_jdeps_files",children:"Bazel docs"})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelrc#L23",children:"buildbuddy-io/buildbuddy .bazelrc --config=remote"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/graknlabs/grakn/blob/master/.bazelrc#L6",children:"graknlabs/grakn .bazelrc --config=rbe"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/wix/exodus/blob/master/.bazelrc.remote#L8",children:"wix/exodus .bazlerc.remote"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,o.jsxs)(n.p,{children:["If you need a more advanced configuration than provided by the basic BuildBuddy toolchain, we recommend exploring Bazel's ",(0,o.jsx)(n.a,{href:"https://releases.bazel.build/bazel-toolchains.html",children:"bazel-toolchains"})," repo. Its ",(0,o.jsx)(n.code,{children:"rbe_autoconfig"})," rule is highly configurable and works nicely with BuildBuddy."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's a quick snippet you can add to your ",(0,o.jsx)(n.code,{children:"WORKSPACE"})," file if using bazel 3.6.0:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:'title="WORKSPACE"',children:'load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")\n\nhttp_archive(\n    name = "bazel_toolchains",\n    sha256 = "4fb3ceea08101ec41208e3df9e56ec72b69f3d11c56629d6477c0ff88d711cf7",\n    strip_prefix = "bazel-toolchains-3.6.0",\n    urls = [\n        "https://github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n        "https://mirror.bazel.build/github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n    ],\n)\n\nload("@bazel_toolchains//rules:rbe_repo.bzl", "rbe_autoconfig")\n\n# Creates a default toolchain config for RBE.\n# Use this as is if you are using the rbe_ubuntu16_04 container,\n# otherwise refer to RBE docs.\nrbe_autoconfig(name = "rbe_default")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["And to your ",(0,o.jsx)(n.code,{children:".bazelrc"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=".bazelrc"',children:'# Depending on how many machines are in the remote execution instance, setting\n# this higher can make builds faster by allowing more jobs to run in parallel.\n# Setting it too high can result in jobs that timeout, however, while waiting\n# for a remote machine to execute them.\nbuild:remote --jobs=50\n\n# Set several flags related to specifying the platform, toolchain and java\n# properties.\n# These flags should only be used as is for the rbe-ubuntu16-04 container\n# and need to be adapted to work with other toolchain containers.\nbuild:remote --java_language_version=11\nbuild:remote --tool_java_language_version=11\nbuild:remote --java_runtime_version=remotejdk_11\nbuild:remote --tool_java_runtime_version=remotejdk_11\nbuild:remote --crosstool_top=@rbe_default//cc:toolchain\nbuild:remote --action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n# Platform flags:\n# The toolchain container used for execution is defined in the target indicated\n# by "extra_execution_platforms", "host_platform" and "platforms".\n# More about platforms: https://docs.bazel.build/versions/master/platforms.html\nbuild:remote --extra_toolchains=@rbe_default//config:cc-toolchain\nbuild:remote --extra_execution_platforms=@rbe_default//config:platform\nbuild:remote --host_platform=@rbe_default//config:platform\nbuild:remote --platforms=@rbe_default//config:platform\n\n# Starting with Bazel 0.27.0 strategies do not need to be explicitly\n# defined. See https://github.com/bazelbuild/bazel/issues/7480\nbuild:remote --define=EXECUTOR=remote\n\n# Enable remote execution so actions are performed on the remote systems.\nbuild:remote --remote_executor=grpcs://remote.buildbuddy.io\n\n# Enforce stricter environment rules, which eliminates some non-hermetic\n# behavior and therefore improves both the remote cache hit rate and the\n# correctness and repeatability of the build.\nbuild:remote --incompatible_strict_action_env=true\n\n# Set a higher timeout value, just in case.\nbuild:remote --remote_timeout=3600\n'})}),"\n",(0,o.jsx)(n.p,{children:"And then run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bazel build //... --config=remote\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var o=i(67294);const t={},l=o.createContext(t);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);