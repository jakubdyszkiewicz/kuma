import{i as u,o as h,A as d,p as f,q as g,K as y,_ as w,f as v}from"./RouteView.vue_vue_type_script_setup_true_lang-7aee8921.js";import{d as b,r as z,o as C,a as k,w as s,h as t,q as m,b as e,g as c,H as x,t as L,R,E as I,v as N,I as V}from"./index-1a6818f4.js";import{_ as A}from"./RouteTitle.vue_vue_type_script_setup_true_lang-957e0dce.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ac7280a6.js";const E={class:"stack"},T=b({__name:"MeshListView",props:{page:{},size:{}},setup(l){const n=l,{t:o}=u();return($,M)=>{const r=z("RouterLink");return C(),k(w,{name:"mesh-list-view"},{default:s(({route:p})=>[t(h,{src:`/meshes?page=${n.page}&size=${n.size}`},{default:s(({data:a,error:_})=>[t(d,null,{title:s(()=>[m("h1",null,[t(A,{title:e(o)("meshes.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[c(),m("div",E,[t(e(x),null,{body:s(()=>[t(f,{class:"mesh-collection","data-testid":"mesh-collection",headers:[{label:"Name",key:"name"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":n.page,"page-size":n.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:_,"empty-state-message":e(o)("common.emptyState.message",{type:"Meshes"}),"empty-state-cta-to":e(o)("meshes.href.docs"),"empty-state-cta-text":e(o)("common.documentation"),onChange:p.update},{name:s(({row:i})=>[t(r,{to:{name:"mesh-detail-view",params:{mesh:i.name}}},{default:s(()=>[c(L(i.name),1)]),_:2},1032,["to"])]),actions:s(({row:i})=>[t(e(R),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:s(()=>[t(e(I),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:s(()=>[t(e(N),{color:e(g),icon:"more",size:e(y)},null,8,["color","size"])]),_:1})]),items:s(()=>[t(e(V),{item:{to:{name:"mesh-detail-view",params:{mesh:i.name}},label:e(o)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])]),_:2},1024)])]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const U=v(T,[["__scopeId","data-v-e70cfa66"]]);export{U as default};
