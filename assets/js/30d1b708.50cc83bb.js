"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7214],{51600:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(85893),t=r(11151);function o(e){const s={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h3,{id:"exported_buildbuddy_remote_execution_queue_length-gauge",children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exported_buildbuddy_remote_execution_queue_length"})})," (Gauge)"]}),"\n",(0,n.jsx)(s.p,{children:"Number of actions currently waiting in the executor queue."}),"\n",(0,n.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-promql",children:"sum(exported_buildbuddy_remote_execution_queue_length)\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"exported_buildbuddy_invocation_duration_usec-histogram",children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exported_buildbuddy_invocation_duration_usec"})})," (Histogram)"]}),"\n",(0,n.jsxs)(s.p,{children:["The total duration of each invocation, in ",(0,n.jsx)(s.strong,{children:"microseconds"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"labels",children:"Labels"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"invocation_status"})}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-promql",children:"# Median invocation duration in the past 5 minutes\nhistogram_quantile(\n0.5,\nsum(rate(exported_buildbuddy_invocation_duration_usec_bucket[5m])) by (le)\n)\n\n# Number of invocations per Second\nsum by (invocation_status) (rate(exported_buildbuddy_invocation_duration_usec_count[5m]))\n\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_num_hits-gauge",children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_num_hits"})})," (Gauge)"]}),"\n",(0,n.jsx)(s.p,{children:"Number of cache hits."}),"\n",(0,n.jsx)(s.h4,{id:"labels-1",children:"Labels"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"cache_type"})}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"examples-2",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-promql",children:"# Number of Hits as measured over the last week\nsum by (cache_type) (increase(exported_buildbuddy_remote_cache_num_hits[1w]))\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_download_size_bytes-gauge",children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_download_size_bytes"})})," (Gauge)"]}),"\n",(0,n.jsx)(s.p,{children:"Number of bytes downloaded from the remote cache."}),"\n",(0,n.jsx)(s.h4,{id:"examples-3",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-promql",children:"# Number of bytes downloaded as measured over the last week\nsum(increase(exported_buildbuddy_remote_cache_download_size_bytes[1w]))\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"exported_buildbuddy_remote_cache_upload_size_bytes-gauge",children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exported_buildbuddy_remote_cache_upload_size_bytes"})})," (Gauge)"]}),"\n",(0,n.jsx)(s.p,{children:"Number of bytes uploaded to the remote cache."}),"\n",(0,n.jsx)(s.h4,{id:"examples-4",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-promql",children:"# Number of bytes uploaded as measured over the last week\nsum(increase(exported_buildbuddy_remote_cache_upload_size_bytes[1w]))\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}const i={id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",sidebar_label:"Prometheus Metrics for Cloud"},c=void 0,u={id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",description:"For cloud users, BuildBuddy exposes Prometheus metrics",source:"@site/../docs/prometheus-metrics-for-cloud.mdx",sourceDirName:".",slug:"/prometheus-metrics-for-cloud",permalink:"/docs/prometheus-metrics-for-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/prometheus-metrics-for-cloud.mdx",tags:[],version:"current",lastUpdatedBy:"Tyler Williams",lastUpdatedAt:1702528248,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"prometheus-metrics-for-cloud",title:"Prometheus Metrics for Cloud Users",sidebar_label:"Prometheus Metrics for Cloud"},sidebar:"someSidebar",previous:{title:"Prometheus Metrics On-prem",permalink:"/docs/prometheus-metrics-on-prem"},next:{title:"Architecture Overview",permalink:"/docs/architecture-overview"}},a={},l=[];function h(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["For cloud users, BuildBuddy exposes ",(0,n.jsx)(s.a,{href:"https://prometheus.io",children:"Prometheus"})," metrics\nto monitor and alert on their usage."]}),"\n",(0,n.jsxs)(s.p,{children:["In order to fetch Prometheus metrics, you can add the following ",(0,n.jsx)(s.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",children:"scrape config"})," in\nyour Prometheus configuration:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'global:\n  scrape_interval: 30s\nscrape_configs\n  - job_name: buildbuddy\n    scheme: https\n    authorization:\n      type: "x-buildbuddy-api-key"\n      credentials: "<buildbuddy_api_key>"\n    metrics_path: "/api/v1/metrics"\n    static_configs:\n      - targets: ["app.buildbuddy.io"]\n'})}),"\n",(0,n.jsxs)(s.p,{children:["To view these metrics in a live-updating dashboard, we recommend using a tool\nlike ",(0,n.jsx)(s.a,{href:"https://grafana.com",children:"Grafana"}),"."]}),"\n",(0,n.jsx)(d,{})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>i,a:()=>d});var n=r(67294);const t={},o=n.createContext(t);function d(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);