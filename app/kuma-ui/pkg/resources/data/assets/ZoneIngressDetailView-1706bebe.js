import{d as g,u as k,q as n,o as e,a as t,w as m,h as i,b as c,g as w,k as z,e as b}from"./index-f0e2f93b.js";import{_ as h}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-88a342d8.js";import{g as y,i as I,h as x,A as B,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-0ac8938c.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-cccbfca9.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-fd5f25bc.js";import{E}from"./ErrorBlock-3bc373a3.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-b0190284.js";import"./kongponents.es-d49ba82d.js";import"./DefinitionListItem-8aa6d45d.js";import"./EnvoyData-aca02a9a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-58df6732.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-8302aaa3.js";import"./TabsWidget-444de6c7.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-c830f326.js";const N={class:"zone-details"},C={key:3,class:"kcard-border","data-testid":"detail-view-details"},S=g({__name:"ZoneIngressDetailView",setup(D){const _=y(),p=k(),{t:l}=I(),s=n(null),o=n(!0),r=n(null);d();function d(){f()}async function f(){o.value=!0,r.value=null;const u=p.params.zoneIngress;try{s.value=await _.getZoneIngressOverview({name:u})}catch(a){s.value=null,a instanceof Error?r.value=a:console.error(a)}finally{o.value=!1}}return(u,a)=>(e(),t(V,null,{default:m(({route:v})=>[i($,{title:c(l)("zone-ingresses.routes.item.title",{name:v.params.zoneIngress})},null,8,["title"]),w(),i(B,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:c(l)("zone-ingresses.routes.item.breadcrumbs")}]},{default:m(()=>[z("div",N,[o.value?(e(),t(x,{key:0})):r.value!==null?(e(),t(E,{key:1,error:r.value},null,8,["error"])):s.value===null?(e(),t(A,{key:2})):(e(),b("div",C,[i(h,{"zone-ingress-overview":s.value},null,8,["zone-ingress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{S as default};