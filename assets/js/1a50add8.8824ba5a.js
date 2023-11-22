"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[129],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",sidebar_label:"RBE with MicroVMs"},c=void 0,l={unversionedId:"rbe-microvms",id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",description:"BuildBuddy Cloud has experimental support for running remote build actions",source:"@site/../docs/rbe-microvms.md",sourceDirName:".",slug:"/rbe-microvms",permalink:"/docs/rbe-microvms",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-microvms.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1700683804,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",sidebar_label:"RBE with MicroVMs"},sidebar:"someSidebar",previous:{title:"RBE Secrets",permalink:"/docs/secrets"},next:{title:"RBE with GitHub Actions",permalink:"/docs/rbe-github-actions"}},u={},d=[{value:"BUILD configuration",id:"build-configuration",level:2},{value:"Preserving microVM state across actions",id:"preserving-microvm-state-across-actions",level:2},{value:"Using custom images",id:"using-custom-images",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BuildBuddy Cloud has experimental support for running remote build actions\nwithin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firecracker-microvm/firecracker"},"Firecracker microVMs"),",\nwhich are lightweight VMs that are optimized for fast startup time."),(0,o.kt)("p",null,"MicroVMs remove some of the restrictions imposed by the default Docker\ncontainer-based Linux execution environment. In particular, microVMs can\nbe used to run Docker, which means that actions run on BuildBuddy can\nspawn Docker containers in order to easily run apps that require lots of\nsystem dependencies, such as MySQL server."),(0,o.kt)("h2",{id:"build-configuration"},"BUILD configuration"),(0,o.kt)("p",null,"Let's say we have a BUILD file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n)\n')),(0,o.kt)("p",null,"And an executable shell script ",(0,o.kt)("inlineCode",{parentName:"p"},"docker_test.sh")," that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm ubuntu:20.04 echo 'PASS' || exit 1\n")),(0,o.kt)("p",null,"This test would normally fail when run using BuildBuddy's shared Linux\nexecutors, since running Docker inside RBE actions is only supported when\nusing self-hosted executors."),(0,o.kt)("p",null,"But we can instead run this test using ",(0,o.kt)("strong",{parentName:"p"},"Docker-in-Firecracker")," by\nadding a few ",(0,o.kt)("inlineCode",{parentName:"p"},"exec_properties")," to the test runner action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        # Tell BuildBuddy to run this test using a Firecracker microVM.\n        "test.workload-isolation-type": "firecracker",\n        # Tell BuildBuddy to ensure that the Docker daemon is started\n        # inside the microVM before the test starts, so that we don\'t\n        # have to worry about starting it ourselves.\n        "test.init-dockerd": "true",\n    },\n)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"test.")," prefix on the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec_properties")," keys ensures that the\nproperties are only applied to the action that actually runs the test,\nand not the actions which are building the test code. See\n",(0,o.kt)("a",{parentName:"p",href:"https://bazel.build/extending/exec-groups"},"execution groups")," for more\ninfo.")),(0,o.kt)("p",null,"And that's it! This test now works on BuildBuddy's shared Linux executors."),(0,o.kt)("p",null,"However, it's a bit slow. On each action, a fresh microVM is created. This\nis normally fine, because microVMs start up quickly. But the Docker daemon\nalso has to be re-initialized, which takes a few seconds. Worse yet, it\nwill be started from an empty Docker image cache, meaning that any images\nused in the action will need to be downloaded and unpacked from scratch\neach time this action is executed."),(0,o.kt)("p",null,"Fortunately, we can mitigate both of these issues using runner recyling."),(0,o.kt)("h2",{id:"preserving-microvm-state-across-actions"},"Preserving microVM state across actions"),(0,o.kt)("p",null,"MicroVM state can be preserved across action runs by enabling the\n",(0,o.kt)("inlineCode",{parentName:"p"},"recycle-runner")," exec property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        "test.workload-isolation-type": "firecracker",\n        "test.init-dockerd": "true",\n        # Tell BuildBuddy to preserve the microVM state across test runs.\n        "test.recycle-runner": "true",\n    },\n)\n')),(0,o.kt)("p",null,"Then, subsequent runs of this test should be able to take advantage of a\nwarm microVM, with Docker already up and running, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu:20.04"),"\nimage already cached from when we ran the previous action."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'When using runner recycling, the entire microVM state is preserved\u2014not\njust the disk contents. You can think of it as being put into "sleep mode"\nbetween actions.'),(0,o.kt)("p",{parentName:"admonition"},"This means that you can leave Docker containers and other processes\nrunning to be reused by subsequent actions, which is helpful for\neliminating startup costs associated with heavyweight processes."),(0,o.kt)("p",{parentName:"admonition"},"For example, instead of starting MySQL server with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run mysql")," on\neach test action (which is quite slow), you can leave MySQL server running\nat the end of each test, and instead re-connect to that server during test\nsetup of the next test. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container inspect")," to see if\nit the server is already running, and SQL queries like ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP DATABASE IF EXISTS"),"\nfollowed by ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," to get a clean DB instance."),(0,o.kt)("p",{parentName:"admonition"},"See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/server/testutil/testmysql/testmysql.go"},"BuildBuddy's test MySQL implementation"),"\nfor an example in Golang.")),(0,o.kt)("h2",{id:"using-custom-images"},"Using custom images"),(0,o.kt)("p",null,"If you are using a custom RBE image, you do not need to do anything\nspecial to make it work with Firecracker. BuildBuddy will automatically\nconvert your Docker image to a disk image compatible with Firecracker. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"container-image")," execution property is specified using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"docker://"),"\nprefix, like: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker://some-registry.io/foo/bar"),"."),(0,o.kt)("p",null,"To run Docker containers in your microVM (Docker-in-Firecracker), you will\nneed to make sure your container image has Docker installed. BuildBuddy's\ndefault RBE image already has Docker installed, but when using a custom\nimage, you may need to install Docker yourself."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine")," for\nthe commands that you'll need to add to your Dockerfile in order to\ninstall Docker."),(0,o.kt)("p",null,"Once you've built your custom image, test that Docker is properly\ninstalled by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it --privileged --name=docker-test your-image.io/foo dockerd --storage-driver=vfs\n")),(0,o.kt)("p",null,'Then, once Docker is finished booting up, run the following command\nfrom another terminal. You should see "Hello world!" printed if Docker\nis properly installed:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -it docker-test docker run busybox echo "Hello world!"\n')))}h.isMDXComponent=!0}}]);