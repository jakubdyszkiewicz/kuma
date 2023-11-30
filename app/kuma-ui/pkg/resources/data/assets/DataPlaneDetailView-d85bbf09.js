import{a as M,K as P}from"./index-52545d1d.js";import{d as U,l as $,x as z,N,a as v,o as l,b,w as a,e as s,a0 as S,f as t,p as r,a1 as p,t as n,q as e,a2 as H,s as x,c as u,F as k,B as w,_ as F}from"./index-b149f888.js";import{g as W,a as G}from"./index-f3a1108a.js";import{S as Z}from"./StatusBadge-cda559a5.js";import{T as E}from"./TagList-8c58a129.js";import{T as A}from"./TextWithCopyButton-e76d5e92.js";import{_ as j}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-d409bd8e.js";import{c as q,C as X,I as J,d as Q}from"./dataplane-c0570285.js";import"./CopyButton-2c5a3630.js";import"./AccordionList-5aa5a225.js";const Y={"data-testid":"dataplane-warnings"},tt=["data-testid","innerHTML"],at={class:"stack","data-testid":"dataplane-details"},et={class:"columns"},st={class:"status-with-reason"},nt={key:0,"data-testid":"dataplane-inbounds"},ot={class:"inbound-list"},it={class:"mt-4 columns"},lt={"data-testid":"dataplane-mtls"},dt={class:"columns"},rt=["innerHTML"],pt={key:0,"data-testid":"dataplane-subscriptions"},ut=U({__name:"DataPlaneDetailView",props:{data:{}},setup(V){const{t:o,formatIsoDate:B}=$(),O=z(),d=V,K=N(()=>W(d.data)),L=N(()=>{var y;const g=G(((y=d.data.dataplaneInsight)==null?void 0:y.subscriptions)??[]);return g!==void 0?B(g):o("common.detail.none")}),R=N(()=>{var C,T;const g=((C=d.data.dataplaneInsight)==null?void 0:C.subscriptions)??[];if(g.length===0)return[];const y=g[g.length-1];if(!("version"in y)||!y.version)return[];const _=y.version,c=[];if(_.kumaDp&&_.envoy){const f=q(_);f.kind!==X&&f.kind!==J&&c.push(f)}const h=(T=d.data.dataplaneInsight)==null?void 0:T.mTLS;return h&&Date.now()>new Date(h==null?void 0:h.certificateExpirationTime).getTime()&&c.push({kind:"CERT_EXPIRED",payload:{}}),O("use zones")&&Q(d.data.dataplane).find(I=>I.label==="kuma.io/zone")&&typeof _.kumaDp.kumaCpCompatible=="boolean"&&!_.kumaDp.kumaCpCompatible&&c.push({kind:"INCOMPATIBLE_ZONE_CP_AND_KUMA_DP_VERSIONS",payload:{kumaDp:_.kumaDp.version}}),c});return(g,y)=>{const _=v("KTooltip"),c=v("KCard"),h=v("KBadge"),C=v("KAlert"),T=v("AppView"),f=v("RouteView");return l(),b(f,{name:"data-plane-detail-view"},{default:a(()=>[s(T,null,S({default:a(()=>{var m,I;return[t(),r("div",at,[s(c,null,{body:a(()=>[r("div",et,[s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.status")),1)]),body:a(()=>[r("div",st,[s(Z,{status:K.value.status},null,8,["status"]),t(),K.value.reason.length>0?(l(),b(_,{key:0,label:K.value.reason.join(", "),class:"reason-tooltip"},{default:a(()=>[s(e(H),{color:e(M),size:e(P),"hide-title":""},null,8,["color","size"])]),_:1},8,["label"])):x("",!0)])]),_:1}),t(),s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(n(L.value),1)]),_:1}),t(),d.data.dataplane.networking.gateway?(l(),u(k,{key:0},[s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.tags")),1)]),body:a(()=>[s(E,{tags:d.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.address")),1)]),body:a(()=>[s(A,{text:`${d.data.dataplane.networking.address}`},null,8,["text"])]),_:1})],64)):x("",!0)])]),_:1}),t(),d.data.dataplane.networking.inbound&&d.data.dataplane.networking.inbound.length>0?(l(),u("div",nt,[r("h2",null,n(e(o)("data-planes.routes.item.inbounds")),1),t(),s(c,{class:"mt-4"},{body:a(()=>[r("div",ot,[(l(!0),u(k,null,w(d.data.dataplane.networking.inbound,(i,D)=>(l(),u("div",{key:D,class:"inbound"},[r("h4",null,[s(A,{text:i.tags["kuma.io/service"]},{default:a(()=>[t(n(e(o)("data-planes.routes.item.inbound_name",{service:i.tags["kuma.io/service"]})),1)]),_:2},1032,["text"])]),t(),r("div",it,[s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.status")),1)]),body:a(()=>[!i.health||i.health.ready?(l(),b(h,{key:0,appearance:"success"},{default:a(()=>[t(n(e(o)("data-planes.routes.item.health.ready")),1)]),_:1})):(l(),b(h,{key:1,appearance:"danger"},{default:a(()=>[t(n(e(o)("data-planes.routes.item.health.not_ready")),1)]),_:1}))]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.tags")),1)]),body:a(()=>[s(E,{tags:i.tags},null,8,["tags"])]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.address")),1)]),body:a(()=>[s(A,{text:`${i.address??d.data.dataplane.networking.advertisedAddress??d.data.dataplane.networking.address}:${i.port}`},null,8,["text"])]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("http.api.property.serviceAddress")),1)]),body:a(()=>[s(A,{text:`${i.serviceAddress??i.address??d.data.dataplane.networking.address}:${i.servicePort??i.port}`},null,8,["text"])]),_:2},1024)])]))),128))])]),_:1})])):x("",!0),t(),r("div",lt,[r("h2",null,n(e(o)("data-planes.routes.item.mtls.title")),1),t(),(m=d.data.dataplaneInsight)!=null&&m.mTLS?(l(!0),u(k,{key:0},w([d.data.dataplaneInsight.mTLS],i=>(l(),b(c,{key:i,class:"mt-4"},{body:a(()=>[r("div",dt,[s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(n(e(B)(i.certificateExpirationTime)),1)]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(n(e(B)(i.lastCertificateRegeneration)),1)]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(n(e(o)("common.formats.integer",{value:i.certificateRegenerations})),1)]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(n(i.issuedBackend),1)]),_:2},1024),t(),s(p,null,{title:a(()=>[t(n(e(o)("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[r("ul",null,[(l(!0),u(k,null,w(i.supportedBackends,D=>(l(),u("li",{key:D},n(D),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(l(),b(C,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:a(()=>[r("div",{innerHTML:e(o)("data-planes.routes.item.mtls.disabled")},null,8,rt)]),_:1}))]),t(),(l(!0),u(k,null,w([((I=d.data.dataplaneInsight)==null?void 0:I.subscriptions)??[]],i=>(l(),u(k,{key:i},[i.length>0?(l(),u("div",pt,[r("h2",null,n(e(o)("data-planes.routes.item.subscriptions.title")),1),t(),s(c,{class:"mt-4"},{body:a(()=>[s(j,{subscriptions:i},null,8,["subscriptions"])]),_:2},1024)])):x("",!0)],64))),128))])]}),_:2},[R.value.length>0?{name:"notifications",fn:a(()=>[r("ul",Y,[(l(!0),u(k,null,w(R.value,m=>(l(),u("li",{key:m.kind,"data-testid":`warning-${m.kind}`,innerHTML:e(o)(`common.warnings.${m.kind}`,m.payload)},null,8,tt))),128)),t()])]),key:"0"}:void 0]),1024)]),_:1})}}});const wt=F(ut,[["__scopeId","data-v-b978721b"]]);export{wt as default};
