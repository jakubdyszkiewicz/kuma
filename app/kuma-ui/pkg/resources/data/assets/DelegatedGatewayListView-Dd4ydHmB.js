import{d as C,r as n,o as i,m as g,w as a,b as s,l as x,ay as b,A as D,a2 as _,e as r,t as c,c as d,L as m,S as L}from"./index-B3PYX6oN.js";const S=C({__name:"DelegatedGatewayListView",setup(V){return(P,R)=>{const u=n("RouterLink"),y=n("XAction"),h=n("XActionGroup"),w=n("DataCollection"),f=n("DataLoader"),k=n("KCard"),v=n("AppView"),z=n("RouteView");return i(),g(z,{name:"delegated-gateway-list-view",params:{page:1,size:50,mesh:""}},{default:a(({route:o,t:p,me:l,uri:A})=>[s(v,{docs:p("delegated-gateways.href.docs")},{default:a(()=>[s(k,null,{default:a(()=>[s(f,{src:A(x(b),"/meshes/:mesh/service-insights/of/:serviceType",{mesh:o.params.mesh,serviceType:"gateway_delegated"},{page:o.params.page,size:o.params.size})},{loadable:a(({data:t})=>[s(w,{type:"gateways",items:(t==null?void 0:t.items)??[void 0],page:o.params.page,"page-size":o.params.size,total:t==null?void 0:t.total,onChange:o.update},{default:a(()=>[s(D,{class:"delegated-gateway-collection","data-testid":"delegated-gateway-collection",headers:[{...l.get("headers.name"),label:"Name",key:"name"},{...l.get("headers.addressPort"),label:"Address",key:"addressPort"},{...l.get("headers.dataplanes"),label:"DP proxies (online / total)",key:"dataplanes"},{...l.get("headers.status"),label:"Status",key:"status"},{...l.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,onResize:l.set},{name:a(({row:e})=>[s(_,{text:e.name},{default:a(()=>[s(u,{to:{name:"delegated-gateway-detail-view",params:{mesh:e.mesh,service:e.name},query:{page:o.params.page,size:o.params.size}}},{default:a(()=>[r(c(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),addressPort:a(({row:e})=>[e.addressPort?(i(),g(_,{key:0,text:e.addressPort},null,8,["text"])):(i(),d(m,{key:1},[r(c(p("common.collection.none")),1)],64))]),dataplanes:a(({row:e})=>[e.dataplanes?(i(),d(m,{key:0},[r(c(e.dataplanes.online||0)+" / "+c(e.dataplanes.total||0),1)],64)):(i(),d(m,{key:1},[r(c(p("common.collection.none")),1)],64))]),status:a(({row:e})=>[s(L,{status:e.status},null,8,["status"])]),actions:a(({row:e})=>[s(h,null,{default:a(()=>[s(y,{to:{name:"delegated-gateway-detail-view",params:{mesh:e.mesh,service:e.name}}},{default:a(()=>[r(c(p("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{S as default};
