"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9104],{17043:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(74848),s=i(28453);const a={id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},r=void 0,o={id:"guide-auth",title:"Authentication Guide",description:"BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first create a BuildBuddy account.",source:"@site/../docs/guide-auth.md",sourceDirName:".",slug:"/guide-auth",permalink:"/docs/guide-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-auth.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1728425952e3,frontMatter:{id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},sidebar:"someSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"}},d={},l=[{value:"Setup",id:"setup",level:2},{value:"Separate auth file",id:"separate-auth-file",level:2},{value:"Command line",id:"command-line",level:2},{value:"Managing keys",id:"managing-keys",level:2},{value:"Read only keys",id:"read-only-keys",level:3},{value:"Executor keys",id:"executor-keys",level:3},{value:"Personal API keys",id:"personal-api-keys",level:2},{value:"Authenticating with user-owned keys",id:"authenticating-with-user-owned-keys",level:3},{value:"User roles",id:"user-roles",level:2},{value:"Managing users within an organization",id:"managing-users-within-an-organization",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first ",(0,t.jsx)(n.a,{href:"https://app.buildbuddy.io/",children:"create a BuildBuddy account"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"An API key should be passed along with all gRPCs requests that you'd like to be associated with your BuildBuddy organization. This key can be used by anyone in your organization, as it ties builds to your org - not your individual user."}),"\n",(0,t.jsxs)(n.p,{children:["You can find your API key on your ",(0,t.jsx)(n.a,{href:"https://app.buildbuddy.io/docs/setup/",children:"Quickstart page"})," once you've ",(0,t.jsx)(n.a,{href:"https://app.buildbuddy.io/",children:"created an account"})," and logged in. You can also create multiple API keys for use in different contexts."]}),"\n",(0,t.jsxs)(n.p,{children:["Your API key can be added directly to your ",(0,t.jsx)(n.code,{children:".bazelrc"})," as long as no one outside of your organization has access to your source code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n"})}),"\n",(0,t.jsx)(n.p,{children:"If people outside of your organization have access to your source code (open source projects, etc) - you'll want to pull your credentials into a separate file that is only accessible by members of your organization and/or your CI machines."}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you can store your API key in an environment variable / secret and pass these flags in manually or with a wrapper script."}),"\n",(0,t.jsx)(n.h2,{id:"separate-auth-file",children:"Separate auth file"}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"try-import"})," directive in your ",(0,t.jsx)(n.code,{children:".bazelrc"})," - you can direct bazel to pull in additional bazel configuration flags from a different file if the file exists (if the file does not exist, this directive will be ignored)."]}),"\n",(0,t.jsxs)(n.p,{children:["You can then place a second ",(0,t.jsx)(n.code,{children:"auth.bazelrc"})," file in a location that's only accessible to members of your organization:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="auth.bazelrc"',children:"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And add a ",(0,t.jsx)(n.code,{children:"try-import"})," to your main ",(0,t.jsx)(n.code,{children:".bazelrc"})," file at the root of your ",(0,t.jsx)(n.code,{children:"WORKSPACE"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"try-import /path/to/your/auth.bazelrc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"command-line",children:"Command line"}),"\n",(0,t.jsx)(n.p,{children:"The command line method allows you to store your API key in an environment variable or Github secret, and then pass authenticated flags in either manually or with a wrapper script."}),"\n",(0,t.jsxs)(n.p,{children:["If using Github secrets - you can create a secret called ",(0,t.jsx)(n.code,{children:"BUILDBUDDY_API_KEY"})," containing your API key, then use that in your actions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bazel build --config=remote --remote_header=x-buildbuddy-api-key=${BUILDBUDDY_API_KEY}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"managing-keys",children:"Managing keys"}),"\n",(0,t.jsxs)(n.p,{children:["You can create multiple API keys on your ",(0,t.jsx)(n.a,{href:"https://app.buildbuddy.dev/settings/org/api-keys",children:"organization settings page"}),". These keys can be used in different contexts (i.e. one for CI, one for developers) and cycled independently. Here you can also edit and delete existing API keys."]}),"\n",(0,t.jsx)(n.p,{children:"When creating multiple keys, we recommending labeling your API keys with descriptive names to describe how they will be used."}),"\n",(0,t.jsx)(n.p,{children:"When keys are deleted, it can take up to 5 minutes for the change to take\neffect."}),"\n",(0,t.jsx)(n.h3,{id:"read-only-keys",children:"Read only keys"}),"\n",(0,t.jsxs)(n.p,{children:["When creating new API keys, you can check the box that says ",(0,t.jsx)(n.strong,{children:"Read-only key (disable remote cache uploads)"}),". This will allow users of these keys to download from the remote cache, but not upload artifacts into the cache."]}),"\n",(0,t.jsx)(n.h3,{id:"executor-keys",children:"Executor keys"}),"\n",(0,t.jsxs)(n.p,{children:["When creating API keys to link your self-hosted executors to your organization (if using ",(0,t.jsx)(n.strong,{children:"Bring Your Own Runners"}),"), you'll need to check the box that says ",(0,t.jsx)(n.strong,{children:"Executor key (for self-hosted executors)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"personal-api-keys",children:"Personal API keys"}),"\n",(0,t.jsx)(n.p,{children:"In addition to organization-level API keys, BuildBuddy also supports\nuser-owned API keys, which associate builds with both the user that owns\nthe key, as well as the organization in which the key was created."}),"\n",(0,t.jsx)(n.p,{children:"Authentication and authorization for user-owned keys works mostly the same\nas organization-level keys, with the following differences:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The permissions that can be assigned to personal API keys are restricted\naccording to the user's role within the associated organization. API\nkeys cannot be assigned permissions that are not granted to the user\nbased on their role. If a user's role changes, any existing personal API\nkeys are updated to remove any permissions that are no longer allowed by\ntheir new role. See ",(0,t.jsx)(n.a,{href:"#user-roles",children:"User roles"})," for a list of available\nroles and associated permissions."]}),"\n",(0,t.jsx)(n.li,{children:"User-level keys are deleted automatically when a user is removed from\nthe organization. It may take up to 5 minutes for the API key deletion\nto take effect."}),"\n",(0,t.jsx)(n.li,{children:'User-owned keys can be enabled by an org Admin under "Settings > Org\ndetails > Enable user-owned API keys". If this setting is later\ndisabled, any user-owned keys will be disabled (but not deleted). Once\nthe setting is disabled, it may take up to 5 minutes for all user-owned\nkeys to become disabled.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"authenticating-with-user-owned-keys",children:"Authenticating with user-owned keys"}),"\n",(0,t.jsxs)(n.p,{children:["If using the ",(0,t.jsx)(n.a,{href:"/docs/cli",children:"BuildBuddy CLI"}),", you can use the ",(0,t.jsx)(n.code,{children:"login"})," command\nwithin a Bazel repository to associate a user-owned API key with your git\nrepository. The CLI will then authorize all Bazel builds within the\nrepository using that API key. The API key is stored in ",(0,t.jsx)(n.code,{children:".git/config"}),", and\nyou can retrieve its current value using the command ",(0,t.jsx)(n.code,{children:"git config --local buildbuddy.api-key"}),"\nand delete it using ",(0,t.jsx)(n.code,{children:"git config --local --unset buildbuddy.api-key"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, users within the organization can add their API key to a\nuser-specific ",(0,t.jsx)(n.code,{children:".bazelrc"})," within the workspace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"try-import %workspace%/user.bazelrc\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".gitignore"',children:"/user.bazelrc # ignore user-specific bazel settings\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="user.bazelrc"',children:"build --remote_header=x-buildbuddy-api-key=<USER_API_KEY>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user-roles",children:"User roles"}),"\n",(0,t.jsxs)(n.p,{children:["Users within a BuildBuddy organization are assigned a ",(0,t.jsx)(n.strong,{children:"role"})," which\nrestricts their permissions within the organization."]}),"\n",(0,t.jsx)(n.p,{children:"The available roles and permissions are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Admin"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Manage organization users, organization settings, workflows, and usage data"}),"\n",(0,t.jsx)(n.li,{children:"Read and write to Content-Addressable Storage (CAS)"}),"\n",(0,t.jsx)(n.li,{children:"Read and write to Action Cache (AC)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Writer"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Read and write to Content-Addressable Storage (CAS)"}),"\n",(0,t.jsx)(n.li,{children:"Read and write to Action Cache (AC)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Developer"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Read and write to Content-Addressable Storage (CAS)"}),"\n",(0,t.jsx)(n.li,{children:"Read from Action Cache (AC)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reader"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Read from Content-Addressable Storage (CAS)"}),"\n",(0,t.jsx)(n.li,{children:"Read from Action Cache (AC)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-users-within-an-organization",children:"Managing users within an organization"}),"\n",(0,t.jsx)(n.p,{children:"To remove users from an organization or change a user's role within the\norganization:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Select your desired organization using the organization picker in the\nsidebar."}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Settings"})," item in the sidebar."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Members"})," tab in settings."]}),"\n",(0,t.jsx)(n.li,{children:"Use the available controls to edit or remove users."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);