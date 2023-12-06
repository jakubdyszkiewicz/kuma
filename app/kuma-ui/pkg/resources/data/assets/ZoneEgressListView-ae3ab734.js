import{K as b}from"./index-52545d1d.js";import{d as R,a as i,o,b as r,w as s,e as m,p as B,f as c,t as z,c as v,F as E,q as w,V as I,E as T,v as C,_ as D}from"./index-ddb38e98.js";import{A as L}from"./AppCollection-ec0160ec.js";import{E as N}from"./ErrorBlock-a5cb6d15.js";import{S as $}from"./StatusBadge-105ed2f1.js";import{S as A}from"./SummaryView-1f471623.js";import{T as Z}from"./TextWithCopyButton-7c7a35f6.js";import{g as K}from"./dataplane-7a46b268.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-a212c040.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-726b6e24.js";import"./CopyButton-769bff11.js";const q=R({__name:"ZoneEgressListView",setup(F){function V(y){return y.map(p=>{const{name:d}=p,_={name:"zone-egress-detail-view",params:{zoneEgress:d}},{networking:t}=p.zoneEgress;let u;t!=null&&t.address&&(t!=null&&t.port)&&(u=`${t.address}:${t.port}`);const g=K(p.zoneEgressInsight??{});return{detailViewRoute:_,name:d,addressPort:u,status:g}})}return(y,p)=>{const d=i("RouteTitle"),_=i("RouterLink"),t=i("KCard"),u=i("RouterView"),g=i("DataSource"),h=i("AppView"),x=i("RouteView");return o(),r(g,{src:"/me"},{default:s(({data:S})=>[S?(o(),r(x,{key:0,name:"zone-egress-list-view",params:{zone:"",zoneEgress:""}},{default:s(({route:a,t:l})=>[m(h,null,{title:s(()=>[B("h2",null,[m(d,{title:l("zone-egresses.routes.items.title")},null,8,["title"])])]),default:s(()=>[c(),m(g,{src:`/zone-cps/${a.params.zone||"*"}/egresses?page=1&size=100`},{default:s(({data:n,error:f})=>[m(t,null,{default:s(()=>[f!==void 0?(o(),r(N,{key:0,error:f},null,8,["error"])):(o(),r(L,{key:1,class:"zone-egress-collection","data-testid":"zone-egress-collection",headers:[{label:"Name",key:"name"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"Details",key:"details",hideLabel:!0}],"page-number":1,"page-size":100,total:n==null?void 0:n.total,items:n?V(n.items):void 0,error:f,"empty-state-message":l("common.emptyState.message",{type:"Zone Egresses"}),"empty-state-cta-to":l("zone-egresses.href.docs"),"empty-state-cta-text":l("common.documentation"),"is-selected-row":e=>e.name===a.params.zoneEgress,onChange:a.update},{name:s(({row:e})=>[m(_,{to:{name:"zone-egress-summary-view",params:{zone:a.params.zone,zoneEgress:e.name},query:{page:1,size:100}}},{default:s(()=>[c(z(e.name),1)]),_:2},1032,["to"])]),addressPort:s(({rowValue:e})=>[e?(o(),r(Z,{key:0,text:e},null,8,["text"])):(o(),v(E,{key:1},[c(z(l("common.collection.none")),1)],64))]),status:s(({rowValue:e})=>[e?(o(),r($,{key:0,status:e},null,8,["status"])):(o(),v(E,{key:1},[c(z(l("common.collection.none")),1)],64))]),details:s(({row:e})=>[m(_,{class:"details-link","data-testid":"details-link",to:{name:"zone-egress-detail-view",params:{zoneEgress:e.name}}},{default:s(()=>[c(z(l("common.collection.details_link"))+" ",1),m(w(I),{display:"inline-block",decorative:"",size:w(b)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"]))]),_:2},1024),c(),a.params.zoneEgress?(o(),r(u,{key:0},{default:s(e=>[m(A,{onClose:k=>a.replace({name:"zone-egress-list-view",params:{zone:a.params.zone},query:{page:1,size:100}})},{default:s(()=>[(o(),r(T(e.Component),{name:a.params.zoneEgress,"zone-egress-overview":n==null?void 0:n.items.find(k=>k.name===a.params.zoneEgress)},null,8,["name","zone-egress-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):C("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:1},8,["params"])):C("",!0)]),_:1})}}});const Y=D(q,[["__scopeId","data-v-8dededc1"]]);export{Y as default};
