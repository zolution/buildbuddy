"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2395],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=i,h=p["".concat(u,".").concat(y)]||p[y]||c[y]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1391:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},u=void 0,s={unversionedId:"guide-auth",id:"guide-auth",title:"Authentication Guide",description:"BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first create a BuildBuddy account.",source:"@site/../docs/guide-auth.md",sourceDirName:".",slug:"/guide-auth",permalink:"/docs/guide-auth",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-auth.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1683059633,formattedLastUpdatedAt:"5/2/2023",frontMatter:{id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},sidebar:"someSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"}},d=[{value:"Setup",id:"setup",children:[],level:2},{value:"Separate auth file",id:"separate-auth-file",children:[],level:2},{value:"Command line",id:"command-line",children:[],level:2},{value:"Managing keys",id:"managing-keys",children:[{value:"Read only keys",id:"read-only-keys",children:[],level:3},{value:"Executor keys",id:"executor-keys",children:[],level:3}],level:2},{value:"User-owned keys",id:"user-owned-keys",children:[{value:"Authenticating with user-owned keys",id:"authenticating-with-user-owned-keys",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"create a BuildBuddy account"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"An API key should be passed along with all gRPCs requests that you'd like to be associated with your BuildBuddy organization. This key can be used by anyone in your organization, as it ties builds to your org - not your individual user."),(0,r.kt)("p",null,"You can find your API key on your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/docs/setup/"},"Quickstart page")," once you've ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"created an account")," and logged in. You can also create multiple API keys for use in different contexts."),(0,r.kt)("p",null,"Your API key can be added directly to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," as long as no one outside of your organization has access to your source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n")),(0,r.kt)("p",null,"If people outside of your organization have access to your source code (open source projects, etc) - you'll want to pull your credentials into a separate file that is only accessible by members of your organization and/or your CI machines."),(0,r.kt)("p",null,"Alternatively, you can store your API key in an environment variable / secret and pass these flags in manually or with a wrapper script."),(0,r.kt)("h2",{id:"separate-auth-file"},"Separate auth file"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"try-import")," directive in your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," - you can direct bazel to pull in additional bazel configuration flags from a different file if the file exists (if the file does not exist, this directive will be ignored)."),(0,r.kt)("p",null,"You can then place a second ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.bazelrc")," file in a location that's only accessible to members of your organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n")),(0,r.kt)("p",null,"And add a ",(0,r.kt)("inlineCode",{parentName:"p"},"try-import")," to your main ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," file at the root of your ",(0,r.kt)("inlineCode",{parentName:"p"},"WORKSPACE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"try-import /path/to/your/auth.bazelrc\n")),(0,r.kt)("h2",{id:"command-line"},"Command line"),(0,r.kt)("p",null,"The command line method allows you to store your API key in an environment variable or Github secret, and then pass authenticated flags in either manually or with a wrapper script."),(0,r.kt)("p",null,"If using Github secrets - you can create a secret called ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_API_KEY")," containing your API key, then use that in your actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bazel build --config=remote --remote_header=x-buildbuddy-api-key=${BUILDBUDDY_API_KEY}\n")),(0,r.kt)("h2",{id:"managing-keys"},"Managing keys"),(0,r.kt)("p",null,"You can create multiple API keys on your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.dev/settings/org/api-keys"},"organization settings page"),". These keys can be used in different contexts (i.e. one for CI, one for developers) and cycled independently. Here you can also edit and delete existing API keys."),(0,r.kt)("p",null,"When creating multiple keys, we recommending labeling your API keys with descriptive names to describe how they will be used."),(0,r.kt)("p",null,"When keys are deleted, it can take up to 5 minutes for the change to take\neffect."),(0,r.kt)("h3",{id:"read-only-keys"},"Read only keys"),(0,r.kt)("p",null,"When creating new API keys, you can check the box that says ",(0,r.kt)("strong",{parentName:"p"},"Read-only key (disable remote cache uploads)"),". This will allow users of these keys to download from the remote cache, but not upload artifacts into the cache."),(0,r.kt)("h3",{id:"executor-keys"},"Executor keys"),(0,r.kt)("p",null,"When creating API keys to link your self-hosted executors to your organization (if using ",(0,r.kt)("strong",{parentName:"p"},"Bring Your Own Runners"),"), you'll need to check the box that says ",(0,r.kt)("strong",{parentName:"p"},"Executor key (for self-hosted executors)"),"."),(0,r.kt)("h2",{id:"user-owned-keys"},"User-owned keys"),(0,r.kt)("p",null,"In addition to organization-level API keys, BuildBuddy also supports\nuser-owned API keys, which associate builds with both the user that owns\nthe key, as well as the organization in which the key was created."),(0,r.kt)("p",null,"Authentication and authorization for user-owned keys works mostly the same\nas organization-level keys, with the following differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users with Developer role within the organization cannot customize API\nkey permissions on any user-owned keys that they create. Keys created by\nDeveloper users are granted permissions to read and write to the\ncontent-addressable store (CAS), and read-only permissions for the\naction cache (AC)."),(0,r.kt)("li",{parentName:"ul"},"User-level keys are deleted automatically when a user is removed from\nthe organization. It may take up to 5 minutes for the API key deletion\nto take effect."),(0,r.kt)("li",{parentName:"ul"},'User-owned keys can be enabled by an org Admin under "Settings > Org\ndetails > Enable user-owned API keys". If this setting is later\ndisabled, any user-owned keys will be disabled (but not deleted). Once\nthe setting is disabled, it may take up to 5 minutes for all user-owned\nkeys to become disabled.')),(0,r.kt)("h3",{id:"authenticating-with-user-owned-keys"},"Authenticating with user-owned keys"),(0,r.kt)("p",null,"If using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli"},"BuildBuddy CLI"),", you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," command\nwithin a Bazel repository to associate a user-owned API key with your git\nrepository. The CLI will then authorize all Bazel builds within the\nrepository using that API key. The API key is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},".git/config"),", and\nyou can retrieve its current value using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --local buildbuddy.api-key"),"\nand delete it using ",(0,r.kt)("inlineCode",{parentName:"p"},"git config --local --unset buildbuddy.api-key"),"."),(0,r.kt)("p",null,"Otherwise, users within the organization can add their API key to a\nuser-specific ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," within the workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# file: .bazelrc\ntry-import %workspace%/user.bazelrc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# file: .gitignore\n/user.bazelrc # ignore user-specific bazel settings\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# file: user.bazelrc\nbuild --remote_header=x-buildbuddy-api-key=<USER_API_KEY>\n")))}p.isMDXComponent=!0}}]);