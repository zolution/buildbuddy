"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4870],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],u={id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},l=void 0,s={unversionedId:"enterprise-rbe",id:"enterprise-rbe",title:"Enterprise RBE Setup",description:"To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the BuildBuddy Enterprise Helm charts.",source:"@site/../docs/enterprise-rbe.md",sourceDirName:".",slug:"/enterprise-rbe",permalink:"/docs/enterprise-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-rbe.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1670359744,formattedLastUpdatedAt:"12/6/2022",frontMatter:{id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},sidebar:"someSidebar",previous:{title:"Enterprise Helm Charts",permalink:"/docs/enterprise-helm"},next:{title:"Enterprise Mac RBE Setup",permalink:"/docs/enterprise-mac-rbe"}},d=[{value:"Installing the chart",id:"installing-the-chart",children:[],level:2},{value:"Configuring your install",id:"configuring-your-install",children:[],level:2},{value:"Configuring resources",id:"configuring-resources",children:[],level:2},{value:"More configuration",id:"more-configuration",children:[],level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts"),"."),(0,i.kt)("h2",{id:"installing-the-chart"},"Installing the chart"),(0,i.kt)("p",null,"First add the BuildBuddy Helm repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,i.kt)("p",null,"Then you'll need to make sure kubectl is configured with access to your Kubernetes cluster. Here are instructions for ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"},"Google Cloud"),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"},"AWS"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough#connect-to-the-cluster"},"Azure"),"."),(0,i.kt)("p",null,"Finally install BuildBuddy enterprise to your Kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy-enterprise\n")),(0,i.kt)("p",null,"This will deploy a minimal BuildBuddy enterprise install to your Kubernetes cluster."),(0,i.kt)("p",null,"You can verify your install by waiting a minute or two for your deployment to complete, then running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n")),(0,i.kt)("p",null,"This will return an IP address that you can visit in a browser and verify that you install was successful. The basic deployment doesn't configure RBE, so you'll only see options for BES and Cache endpoints."),(0,i.kt)("h2",{id:"configuring-your-install"},"Configuring your install"),(0,i.kt)("p",null,"Now that you have a basic BuildBuddy Enterprise install deployed. Let's configure it to enable Remote Build Execution."),(0,i.kt)("p",null,"You can do so this by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to Helm that enables RBE. Here's a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file with RBE enabled. This will deploy RBE with 3 executors and Redis enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n")),(0,i.kt)("p",null,"This configuration with 1 app instance, 3 executors, and a Redis instance will fit on a machine/cluster with at least 5 vCPUs and 24 GB of RAM."),(0,i.kt)("p",null,"GCP's ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types#n2_standard_machine_types"},"n2-standard-8 machines")," or similar are a good place to start. For information on scaling up and down your deployments, see the ",(0,i.kt)("strong",{parentName:"p"},"Configuring resource")," section."),(0,i.kt)("p",null,"You can now upgrade your install with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade buildbuddy buildbuddy/buildbuddy-enterprise --values values.yaml\n")),(0,i.kt)("p",null,"Once your upgrade has completed (and the rollout has finished), you can reload the IP address you obtained from the kubectl command above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n")),(0,i.kt)("p",null,"You should now see a remote build execution checkbox and can try your first remote build execution. Make sure your RBE ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"toolchains and platforms")," are correctly configured."),(0,i.kt)("h2",{id:"configuring-resources"},"Configuring resources"),(0,i.kt)("p",null,"Now that you've got a working RBE deployment, you can configure resources requested by BuildBuddy app instances and executors to scale up and down your cluster."),(0,i.kt)("p",null,"By default BuildBuddy app instances request 1 CPU and 4 GB of RAM, executors request 1 CPU and 5 GB of RAM per instance, and Redis requests 1 CPU and 5GB of RAM."),(0,i.kt)("p",null,"Here's a values.yaml file that specifies the replica and resource settings you can use to scale your cluster up and down:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'replicas: 1\nresources:\n  limits:\n    cpu: "2"\n    memory: "8Gi"\n  requests:\n    cpu: "1"\n    memory: "4Gi"\nexecutor:\n  enabled: true\n  replicas: 3\n  resources:\n    limits:\n      cpu: "2"\n      memory: "10Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nredis:\n  enabled: true\n  resources:\n    limits:\n      cpu: "1"\n      memory: "6Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n')),(0,i.kt)("p",null,"Note: if you scale beyond one app replica, make sure you're using MySQL instead of SQLite, and GCS/S3 instead of disk storage. For information on how to configure these, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration guide"),". Scaling the number of executor replicas does not have these requirements."),(0,i.kt)("p",null,"The default values support both memory hungry Java tests and CPU-intensive Tensorflow builds. Fine tuning these parameters for peak performance depends a lot on your workload, and we're happy to help."),(0,i.kt)("p",null,"For a full overview of what can be configured via our enterprise Helm charts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-enterprise/values.yaml"},"buildbuddy-enterprise values.yaml file"),", and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml"},"buildbuddy-executor values.yaml file"),". Values for the executor deployment are nested in the ",(0,i.kt)("inlineCode",{parentName:"p"},"executor:")," block of the buildbuddy-enterprise yaml file."),(0,i.kt)("h2",{id:"more-configuration"},"More configuration"),(0,i.kt)("p",null,"For more configuration options beyond RBE, like authentication and storage options, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," and our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration guide"),"."),(0,i.kt)("h2",{id:"writing-deployment-to-a-file"},"Writing deployment to a file"),(0,i.kt)("p",null,"If you don't want to use Helm, you can write your Kubernetes deployment configuration to a file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm template buildbuddy buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n")),(0,i.kt)("p",null,"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl apply -f buildbuddy-deploy.yaml\n")))}p.isMDXComponent=!0}}]);