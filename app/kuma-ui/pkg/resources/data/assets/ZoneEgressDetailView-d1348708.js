import{d as g,u as k,q as n,o as e,a as t,w as c,h as i,b as m,g as w,k as z,e as E}from"./index-5fe06e34.js";import{_ as b}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-f93c148e.js";import{g as h,i as y,h as x,A as B,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-ae2f3329.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-3c1cc2cf.js";import{_ as A}from"./TextWithCopyButton-aaf3f087.js";import{E as N}from"./ErrorBlock-a6c0f23e.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-8547343d.js";import"./kongponents.es-995fd5eb.js";import"./DefinitionListItem-25b65a74.js";import"./EnvoyData-ebedfbfc.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-be3a91dc.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-0c6c691a.js";import"./TabsWidget-d76df623.js";import"./QueryParameter-70743f73.js";const C={class:"zone-details"},D={key:3,class:"kcard-border","data-testid":"detail-view-details"},Q=g({__name:"ZoneEgressDetailView",setup(O){const _=h(),p=k(),{t:l}=y(),s=n(null),o=n(!0),r=n(null);d();function d(){f()}async function f(){o.value=!0,r.value=null;const u=p.params.zoneEgress;try{s.value=await _.getZoneEgressOverview({name:u})}catch(a){s.value=null,a instanceof Error?r.value=a:console.error(a)}finally{o.value=!1}}return(u,a)=>(e(),t(V,null,{default:c(({route:v})=>[i($,{title:m(l)("zone-egresses.routes.item.title",{name:v.params.zoneEgress})},null,8,["title"]),w(),i(B,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:m(l)("zone-egresses.routes.item.breadcrumbs")}]},{default:c(()=>[z("div",C,[o.value?(e(),t(x,{key:0})):r.value!==null?(e(),t(N,{key:1,error:r.value},null,8,["error"])):s.value===null?(e(),t(A,{key:2})):(e(),E("div",D,[i(b,{"zone-egress-overview":s.value},null,8,["zone-egress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{Q as default};