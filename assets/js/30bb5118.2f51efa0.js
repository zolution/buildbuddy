"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2992],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=d(a),p=o,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3414:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(7462),o=a(3366),l=(a(7294),a(4137)),i=["components"],r={id:"rbe-setup",title:"RBE Setup",sidebar_label:"Remote Build Execution Setup"},s=void 0,d={unversionedId:"rbe-setup",id:"rbe-setup",title:"RBE Setup",description:"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood.",source:"@site/../docs/rbe-setup.md",sourceDirName:".",slug:"/rbe-setup",permalink:"/docs/rbe-setup",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-setup.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1641477681,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"rbe-setup",title:"RBE Setup",sidebar_label:"Remote Build Execution Setup"},sidebar:"someSidebar",previous:{title:"Remote Build Execution",permalink:"/docs/remote-build-execution"},next:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"}},u=[{value:"The basics",id:"the-basics",children:[],level:2},{value:"Configuring your workspace",id:"configuring-your-workspace",children:[],level:2},{value:"Platforms",id:"platforms",children:[],level:2},{value:"Toolchains",id:"toolchains",children:[{value:"C toolchain",id:"c-toolchain",children:[],level:3},{value:"Java toolchain",id:"java-toolchain",children:[],level:3},{value:"Attributes",id:"attributes",children:[],level:3}],level:2},{value:"Putting it all together",id:"putting-it-all-together",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Configuration options",id:"configuration-options",children:[{value:"--jobs",id:"--jobs",children:[],level:3},{value:"--remote_timeout",id:"--remote_timeout",children:[],level:3},{value:"--remote_download_minimal",id:"--remote_download_minimal",children:[],level:3},{value:"--remote_instance_name",id:"--remote_instance_name",children:[],level:3},{value:"--disk_cache",id:"--disk_cache",children:[],level:3},{value:"--incompatible_strict_action_env",id:"--incompatible_strict_action_env",children:[],level:3},{value:"--action_env",id:"--action_env",children:[],level:3},{value:"--define",id:"--define",children:[],level:3},{value:"--spawn_strategy",id:"--spawn_strategy",children:[],level:3},{value:"--strategy",id:"--strategy",children:[],level:3},{value:"--experimental_inmemory_dotd_files",id:"--experimental_inmemory_dotd_files",children:[],level:3},{value:"--experimental_inmemory_jdeps_files",id:"--experimental_inmemory_jdeps_files",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Advanced configuration",id:"advanced-configuration",children:[],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood."),(0,l.kt)("p",null,"This guide assumes you're using ",(0,l.kt)("a",{parentName:"p",href:"/docs/cloud"},"BuildBuddy Cloud")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/enterprise"},"BuildBuddy Enterprise on-prem"),"."),(0,l.kt)("h2",{id:"the-basics"},"The basics"),(0,l.kt)("p",null,"The very simplest Bazel command needed to enable RBE is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bazel build //... --remote_executor=grpcs://cloud.buildbuddy.io\n")),(0,l.kt)("p",null,"This points Bazel at BuildBuddy Cloud as a remote executor. A simple repo that has no C/C++/CGO or Java dependencies will build just fine like this. Most interesting repos have some dependencies on C/C++/CGO or Java - so we'll need to tell our remote executors where to find tools like gcc or the JRE. We do this with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/platforms.html"},"platforms")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/toolchains.html"},"toolchains"),"."),(0,l.kt)("h2",{id:"configuring-your-workspace"},"Configuring your workspace"),(0,l.kt)("p",null,"There are several options for configuring your platforms and toolchains, the most fully features of which being ",(0,l.kt)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains"),". It comes with an ",(0,l.kt)("inlineCode",{parentName:"p"},"rbe_autoconfig")," rule that works nicely with BuildBuddy."),(0,l.kt)("p",null,"Unfortunately, bazel-toolchains has a dependency on Docker and can take quite some time to start up in a clean workspace, so we provide a simple and easy-to-use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/toolchain"},"BuildBuddy toolchain")," that enables you to get up and running quickly, and works for most use cases."),(0,l.kt)("p",null,"To get started with the BuildBuddy Toolchain, add the following lines to your ",(0,l.kt)("inlineCode",{parentName:"p"},"WORKSPACE")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'http_archive(\n    name = "io_buildbuddy_buildbuddy_toolchain",\n    sha256 = "a2a5cccec251211e2221b1587af2ce43c36d32a42f5d881737db3b546a536510",\n    strip_prefix = "buildbuddy-toolchain-829c8a574f706de5c96c54ca310f139f4acda7dd",\n    urls = ["https://github.com/buildbuddy-io/buildbuddy-toolchain/archive/829c8a574f706de5c96c54ca310f139f4acda7dd.tar.gz"],\n)\n\nload("@io_buildbuddy_buildbuddy_toolchain//:deps.bzl", "buildbuddy_deps")\n\nbuildbuddy_deps()\n\nload("@io_buildbuddy_buildbuddy_toolchain//:rules.bzl", "buildbuddy")\n\nbuildbuddy(name = "buildbuddy_toolchain")\n')),(0,l.kt)("h2",{id:"platforms"},"Platforms"),(0,l.kt)("p",null,"The first thing you'll want to do is tell BuildBuddy RBE in what environment you'll want to run your build actions. This is tools can be found in different locations on different platforms. This is done with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--host_platform"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platforms"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"--extra_execution_platforms")," flags."),(0,l.kt)("p",null,"BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. We can specify this platform with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--host_platform"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--platforms"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"--extra_execution_platforms")," flags:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--host_platform=@buildbuddy_toolchain//:platform\n--platforms=@buildbuddy_toolchain//:platform\n--extra_execution_platforms=@buildbuddy_toolchain//:platform\n")),(0,l.kt)("p",null,"If you want to use a different environment, you can specify a custom Docker container image to use. More information on how to do this can be found in our ",(0,l.kt)("a",{parentName:"p",href:"/docs/rbe-platforms"},"platforms documentation"),"."),(0,l.kt)("h2",{id:"toolchains"},"Toolchains"),(0,l.kt)("p",null,"Toolchains sound complicated (and they can be) - but the concept is simple. We're telling our remote executors where to find tools that are needed to build our code."),(0,l.kt)("h3",{id:"c-toolchain"},"C toolchain"),(0,l.kt)("p",null,"The first toolchain you'll likely run into the need for is a C/C++ compiler. Even if your code isn't written in one of these languages, it's likely that one of your dependencies is - or calls some C code with something like ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/cmd/cgo/"},"cgo"),"."),(0,l.kt)("p",null,"You'll know you need a C toolchain when you see an error for a missing gcc or clang that looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'exec: "/usr/bin/gcc": stat /usr/bin/gcc: no such file or directory\n')),(0,l.kt)("p",null,"To use BuildBuddy's default C toolchain, we can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--crosstool_top")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--extra_toolchains")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--crosstool_top=@buildbuddy_toolchain//:toolchain\n--extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\n")),(0,l.kt)("p",null,"If you're looking for an llvm based toolchain instead, take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/grailbio/bazel-toolchain"},"this project"),"."),(0,l.kt)("h3",{id:"java-toolchain"},"Java toolchain"),(0,l.kt)("p",null,"If your project depends on Java code, you'll need 4 more flags to tell the executors where to look for Java tools."),(0,l.kt)("p",null,"Using BuildBuddy's default Java 8 config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--javabase=@buildbuddy_toolchain//:javabase_jdk8\n--host_javabase=@buildbuddy_toolchain//:javabase_jdk8\n--java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n--host_java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n")),(0,l.kt)("p",null,"If you need a different version of Java, we recommend using ",(0,l.kt)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains")," for now."),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"Some tools like Bazel's zipper (@bazel_tools//tools/zip:zipper) use an attribute to determine whether or not they're being run remotely or not. For tools like these to work properly, you'll need to define an attribute called ",(0,l.kt)("inlineCode",{parentName:"p"},"EXECUTOR")," and set it to the value ",(0,l.kt)("inlineCode",{parentName:"p"},"remote"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--define=EXECUTOR=remote\n")),(0,l.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,l.kt)("p",null,"This can be a lot of flags to tack onto each bazel build, so instead you can move these to your ",(0,l.kt)("inlineCode",{parentName:"p"},".bazelrc")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"remote")," config block:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"build:remote --remote_executor=grpcs://cloud.buildbuddy.io\nbuild:remote --host_platform=@buildbuddy_toolchain//:platform\nbuild:remote --platforms=@buildbuddy_toolchain//:platform\nbuild:remote --extra_execution_platforms=@buildbuddy_toolchain//:platform\nbuild:remote --crosstool_top=@buildbuddy_toolchain//:toolchain\nbuild:remote --extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\nbuild:remote --javabase=@buildbuddy_toolchain//:javabase_jdk8\nbuild:remote --host_javabase=@buildbuddy_toolchain//:javabase_jdk8\nbuild:remote --java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\nbuild:remote --host_java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\nbuild:remote --define=EXECUTOR=remote\n")),(0,l.kt)("p",null,"And running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bazel build //... --config=remote\n")),(0,l.kt)("h2",{id:"authentication"},"Authentication"),(0,l.kt)("p",null,"You'll want to authenticate your RBE builds with either API key or certificate based auth. For more info on how to set this up, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/guide-auth"},"authentication guide"),"."),(0,l.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,l.kt)("h3",{id:"--jobs"},"--jobs"),(0,l.kt)("p",null,"This determines the number of parallel actions Bazel will remotely execute at once. If this flag is not set, Bazel will use a heuristic based on the number of cores on your local machine. Your builds & tests can likely be parallelized much more aggressively when executing remotely. We recommend starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"50")," and working your way up."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--jobs=50\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--jobs"},"Bazel docs")),(0,l.kt)("h3",{id:"--remote_timeout"},"--remote_timeout"),(0,l.kt)("p",null,"This determines the maximum time Bazel will spend on any single remote call, including cache writes. The default value is 60s. We recommend setting this high to avoid timeouts when uploading large cache artifacts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--remote_timeout=600\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"Bazel docs")),(0,l.kt)("h3",{id:"--remote_download_minimal"},"--remote_download_minimal"),(0,l.kt)("p",null,"By default, bazel will download intermediate results of remote executions - so in case an artifact isn't found in the remote cache, it can be re-uploaded. This can slow down builds in networks constrained environments."),(0,l.kt)("p",null,"This can be turned off with the flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--remote_download_minimal\n")),(0,l.kt)("p",null,"While this flag can speed up your build, it makes them more sensitive to caching issues - and likely shouldn't be used in production yet."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_download_minimal"},"Bazel docs")),(0,l.kt)("h3",{id:"--remote_instance_name"},"--remote_instance_name"),(0,l.kt)("p",null,"If you'd like separate remote caches, whether it's for CI builds vs local builds or other reasons, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_instance_name")," flag to namespace your cache artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--remote_instance_name=buildbuddy-io/buildbuddy/ci\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_instance_name"},"Bazel docs")),(0,l.kt)("h3",{id:"--disk_cache"},"--disk_cache"),(0,l.kt)("p",null,"While setting a local disk cache can speed up your builds, when used in conjunction with remote execution - your local and remote state has the opportunity to get out of sync. If you suspect you're running into this problem, you can disable your local disk cache by setting this to an empty value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--disk_cache=\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--disk_cache"},"Bazel docs")),(0,l.kt)("h3",{id:"--incompatible_strict_action_env"},"--incompatible_strict_action_env"),(0,l.kt)("p",null,"Some rules (like protobuf) are particularly sensitive to changes in environment variables and will frequently be rebuilt due to resulting cache misses. To mitigate this, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"incompatible_strict_action_env")," which sets a static value for ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--incompatible_strict_action_env\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--incompatible_strict_action_env"},"Bazel docs")),(0,l.kt)("h3",{id:"--action_env"},"--action_env"),(0,l.kt)("p",null,"You can set environment variables that are available to actions with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--action_env")," flag. This is commonly used to set ",(0,l.kt)("inlineCode",{parentName:"p"},"BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN")," which tells bazel not to auto-detect the C++ toolchain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define"},"Bazel docs")),(0,l.kt)("h3",{id:"--define"},"--define"),(0,l.kt)("p",null,"Define allows you to assign build variables. This is commonly use to set ",(0,l.kt)("inlineCode",{parentName:"p"},"EXECUTOR")," to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazel/issues/7254"},"compile singlejar and ijar from source"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--define=EXECUTOR=remote\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define"},"Bazel docs")),(0,l.kt)("h3",{id:"--spawn_strategy"},"--spawn_strategy"),(0,l.kt)("p",null,"Sets the list of strategies in priority order from highest to lowest. Each action picks the highest priority strategy that it can execute. The default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"remote,worker,sandboxed,local"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strategy=remote,local\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--spawn_strategy"},"Bazel docs")),(0,l.kt)("h3",{id:"--strategy"},"--strategy"),(0,l.kt)("p",null,"Explicitly setting strategies should ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazel/issues/7480"},"no longer be needed")," for Bazel versions post 0.27.0. It can be used to force certain bazel mnemonics to be build remotely."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strategy=Scalac=remote\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--strategy"},"Bazel docs")),(0,l.kt)("h3",{id:"--experimental_inmemory_dotd_files"},"--experimental_inmemory_dotd_files"),(0,l.kt)("p",null,"If enabled, C++ .d files will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",(0,l.kt)("inlineCode",{parentName:"p"},"--remote_download_minimal"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--experimental_inmemory_dotd_files\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_dotd_files"},"Bazel docs")),(0,l.kt)("h3",{id:"--experimental_inmemory_jdeps_files"},"--experimental_inmemory_jdeps_files"),(0,l.kt)("p",null,"If enabled, .jdeps files generated from Java compilations will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",(0,l.kt)("inlineCode",{parentName:"p"},"--remote_download_minimal"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--experimental_inmemory_jdeps_files\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_jdeps_files"},"Bazel docs")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelrc#L23"},"buildbuddy-io/buildbuddy .bazelrc --config=remote")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/graknlabs/grakn/blob/master/.bazelrc#L6"},"graknlabs/grakn .bazelrc --config=rbe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wix/exodus/blob/master/.bazelrc.remote#L8"},"wix/exodus .bazlerc.remote"))),(0,l.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,l.kt)("p",null,"If you need a more advanced configuration than provided by the basic BuildBuddy toolchain, we recommend exploring Bazel's ",(0,l.kt)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains")," repo. Its ",(0,l.kt)("inlineCode",{parentName:"p"},"rbe_autoconfig")," rule is highly configurable and works nicely with BuildBuddy."),(0,l.kt)("p",null,"Here's a quick snippet you can add to your ",(0,l.kt)("inlineCode",{parentName:"p"},"WORKSPACE")," file if using bazel 3.6.0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")\n\nhttp_archive(\n    name = "bazel_toolchains",\n    sha256 = "4fb3ceea08101ec41208e3df9e56ec72b69f3d11c56629d6477c0ff88d711cf7",\n    strip_prefix = "bazel-toolchains-3.6.0",\n    urls = [\n        "https://github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n        "https://mirror.bazel.build/github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n    ],\n)\n\nload("@bazel_toolchains//rules:rbe_repo.bzl", "rbe_autoconfig")\n\n# Creates a default toolchain config for RBE.\n# Use this as is if you are using the rbe_ubuntu16_04 container,\n# otherwise refer to RBE docs.\nrbe_autoconfig(name = "rbe_default")\n')),(0,l.kt)("p",null,"And to your ",(0,l.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Depending on how many machines are in the remote execution instance, setting\n# this higher can make builds faster by allowing more jobs to run in parallel.\n# Setting it too high can result in jobs that timeout, however, while waiting\n# for a remote machine to execute them.\nbuild:remote --jobs=50\n\n# Set several flags related to specifying the platform, toolchain and java\n# properties.\n# These flags should only be used as is for the rbe-ubuntu16-04 container\n# and need to be adapted to work with other toolchain containers.\nbuild:remote --host_javabase=@rbe_default//java:jdk\nbuild:remote --javabase=@rbe_default//java:jdk\nbuild:remote --host_java_toolchain=@bazel_tools//tools/jdk:toolchain_hostjdk8\nbuild:remote --java_toolchain=@bazel_tools//tools/jdk:toolchain_hostjdk8\nbuild:remote --crosstool_top=@rbe_default//cc:toolchain\nbuild:remote --action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n# Platform flags:\n# The toolchain container used for execution is defined in the target indicated\n# by "extra_execution_platforms", "host_platform" and "platforms".\n# More about platforms: https://docs.bazel.build/versions/master/platforms.html\nbuild:remote --extra_toolchains=@rbe_default//config:cc-toolchain\nbuild:remote --extra_execution_platforms=@rbe_default//config:platform\nbuild:remote --host_platform=@rbe_default//config:platform\nbuild:remote --platforms=@rbe_default//config:platform\n\n# Starting with Bazel 0.27.0 strategies do not need to be explicitly\n# defined. See https://github.com/bazelbuild/bazel/issues/7480\nbuild:remote --define=EXECUTOR=remote\n\n# Enable remote execution so actions are performed on the remote systems.\nbuild:remote --remote_executor=grpcs://cloud.buildbuddy.io\n\n# Enforce stricter environment rules, which eliminates some non-hermetic\n# behavior and therefore improves both the remote cache hit rate and the\n# correctness and repeatability of the build.\nbuild:remote --incompatible_strict_action_env=true\n\n# Set a higher timeout value, just in case.\nbuild:remote --remote_timeout=3600\n')),(0,l.kt)("p",null,"And then run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bazel build //... --config=remote\n")))}m.isMDXComponent=!0}}]);