import{d as x,r as n,o as i,m as p,w as a,b as o,e as c,l as b,ay as R,A as D,a2 as h,t as l,c as d,L as _,S,E as P,p as L}from"./index-B3PYX6oN.js";import{S as T}from"./SummaryView-C0QSUB0v.js";const G=x({__name:"ServiceListView",setup(B){return(N,X)=>{const g=n("RouteTitle"),v=n("XAction"),f=n("XActionGroup"),w=n("RouterView"),y=n("DataCollection"),C=n("DataLoader"),k=n("KCard"),z=n("AppView"),V=n("RouteView");return i(),p(V,{name:"service-list-view",params:{page:1,size:50,mesh:"",service:""}},{default:a(({route:s,t:m,uri:A,me:r})=>[o(g,{render:!1,title:m("services.routes.items.title")},null,8,["title"]),c(),o(z,{docs:m("services.href.docs")},{default:a(()=>[o(k,null,{default:a(()=>[o(C,{src:A(b(R),"/meshes/:mesh/service-insights/of/:serviceType",{mesh:s.params.mesh,serviceType:"internal"},{page:s.params.page,size:s.params.size})},{loadable:a(({data:t})=>[o(y,{type:"services",items:(t==null?void 0:t.items)??[void 0],page:s.params.page,"page-size":s.params.size,total:t==null?void 0:t.total,onChange:s.update},{default:a(()=>[o(D,{class:"service-collection","data-testid":"service-collection",headers:[{...r.get("headers.name"),label:"Name",key:"name"},{...r.get("headers.addressPort"),label:"Address",key:"addressPort"},{...r.get("headers.online"),label:"DP proxies (online / total)",key:"online"},{...r.get("headers.status"),label:"Status",key:"status"},{...r.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":e=>e.name===s.params.service,onResize:r.set},{name:a(({row:e})=>[o(h,{text:e.name},{default:a(()=>[o(v,{"data-action":"",to:{name:"service-detail-view",params:{mesh:e.mesh,service:e.name},query:{page:s.params.page,size:s.params.size}}},{default:a(()=>[c(l(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),addressPort:a(({row:e})=>[e.addressPort?(i(),p(h,{key:0,text:e.addressPort},null,8,["text"])):(i(),d(_,{key:1},[c(l(m("common.collection.none")),1)],64))]),online:a(({row:e})=>[e.dataplanes?(i(),d(_,{key:0},[c(l(e.dataplanes.online||0)+" / "+l(e.dataplanes.total||0),1)],64)):(i(),d(_,{key:1},[c(l(m("common.collection.none")),1)],64))]),status:a(({row:e})=>[o(S,{status:e.status},null,8,["status"])]),actions:a(({row:e})=>[o(f,null,{default:a(()=>[o(v,{to:{name:"service-detail-view",params:{mesh:e.mesh,service:e.name}}},{default:a(()=>[c(l(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),c(),s.params.service?(i(),p(w,{key:0},{default:a(e=>[o(T,{onClose:u=>s.replace({name:"service-list-view",params:{mesh:s.params.mesh},query:{page:s.params.page,size:s.params.size}})},{default:a(()=>[(i(),p(P(e.Component),{name:s.params.service,service:t==null?void 0:t.items.find(u=>u.name===s.params.service)},null,8,["name","service"]))]),_:2},1032,["onClose"])]),_:2},1024)):L("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{G as default};
