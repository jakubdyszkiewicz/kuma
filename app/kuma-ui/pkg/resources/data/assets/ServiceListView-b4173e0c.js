import{i as f,o as g,A as b,p as k,T as h,S as w,q as S,K as x,_ as C,f as T}from"./RouteView.vue_vue_type_script_setup_true_lang-7aee8921.js";import{d as z,r as L,o as r,a as _,w as s,h as a,q as R,b as t,g as i,H as A,t as l,e as m,F as p,R as E,E as I,v as N,I as B}from"./index-1a6818f4.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-957e0dce.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ac7280a6.js";const $=z({__name:"ServiceListView",props:{page:{},size:{},mesh:{}},setup(u){const c=u,{t:o}=f();return(O,D)=>{const d=L("RouterLink");return r(),_(C,{name:"services-list-view"},{default:s(({route:v})=>[a(g,{src:`/meshes/${c.mesh}/service-insights?page=${c.page}&size=${c.size}`},{default:s(({data:n,error:y})=>[a(b,null,{title:s(()=>[R("h2",null,[a(V,{title:t(o)("services.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[i(),a(t(A),null,{body:s(()=>[a(k,{class:"service-collection","data-testid":"service-collection","empty-state-message":t(o)("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"DP proxies (online / total)",key:"online"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":c.page,"page-size":c.size,total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:y,onChange:v.update},{name:s(({row:e})=>[a(d,{to:{name:"service-detail-view",params:{service:e.name}}},{default:s(()=>[i(l(e.name),1)]),_:2},1032,["to"])]),serviceType:s(({rowValue:e})=>[i(l(e||t(o)("common.collection.none")),1)]),addressPort:s(({rowValue:e})=>[e?(r(),_(h,{key:0,text:e},null,8,["text"])):(r(),m(p,{key:1},[i(l(t(o)("common.collection.none")),1)],64))]),online:s(({row:e})=>[e.dataplanes?(r(),m(p,{key:0},[i(l(e.dataplanes.online||0)+" / "+l(e.dataplanes.total||0),1)],64)):(r(),m(p,{key:1},[i(l(t(o)("common.collection.none")),1)],64))]),status:s(({row:e})=>[a(w,{status:e.status||"not_available"},null,8,["status"])]),actions:s(({row:e})=>[a(t(E),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:s(()=>[a(t(I),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:s(()=>[a(t(N),{color:t(S),icon:"more",size:t(x)},null,8,["color","size"])]),_:1})]),items:s(()=>[a(t(B),{item:{to:{name:"service-detail-view",params:{service:e.name}},label:t(o)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-message","headers","page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const F=T($,[["__scopeId","data-v-bdcacedc"]]);export{F as default};
