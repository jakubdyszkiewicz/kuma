import{d as x,a as l,o as a,b as i,w as e,e as r,Y as V,f as t,t as n,m as p,c as m,F as u,C,U as d,q as v,T as _,_ as b}from"./index-IotYe1KN.js";import{S as A}from"./StatusBadge-CbARFMK9.js";const S={class:"stack-with-borders"},B=x({__name:"ZoneIngressSummaryView",props:{items:{}},setup(y){const g=y;return(R,T)=>{const z=l("RouteTitle"),h=l("RouterLink"),k=l("AppView"),f=l("DataCollection"),I=l("RouteView");return a(),i(I,{name:"zone-ingress-summary-view",params:{zoneIngress:""}},{default:e(({route:w,t:o})=>[r(f,{items:g.items,predicate:c=>c.id===w.params.zoneIngress,find:!0},{empty:e(()=>[r(V,null,{title:e(()=>[t(n(o("common.collection.summary.empty_title",{type:"ZoneIngress"})),1)]),default:e(()=>[t(),p("p",null,n(o("common.collection.summary.empty_message",{type:"ZoneIngress"})),1)]),_:2},1024)]),default:e(({items:c})=>[(a(!0),m(u,null,C([c[0]],s=>(a(),i(k,{key:s.id},{title:e(()=>[p("h2",null,[r(h,{to:{name:"zone-ingress-detail-view",params:{zone:s.zoneIngress.zone,zoneIngress:s.id}}},{default:e(()=>[r(z,{title:o("zone-ingresses.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:e(()=>[t(),p("div",S,[r(d,{layout:"horizontal"},{title:e(()=>[t(n(o("http.api.property.status")),1)]),body:e(()=>[r(A,{status:s.state},null,8,["status"])]),_:2},1024),t(),s.namespace.length>0?(a(),i(d,{key:0,layout:"horizontal"},{title:e(()=>[t(n(o("data-planes.routes.item.namespace")),1)]),body:e(()=>[t(n(s.namespace),1)]),_:2},1024)):v("",!0),t(),r(d,{layout:"horizontal"},{title:e(()=>[t(n(o("http.api.property.address")),1)]),body:e(()=>[s.zoneIngress.socketAddress.length>0?(a(),i(_,{key:0,text:s.zoneIngress.socketAddress},null,8,["text"])):(a(),m(u,{key:1},[t(n(o("common.detail.none")),1)],64))]),_:2},1024),t(),r(d,{layout:"horizontal"},{title:e(()=>[t(n(o("http.api.property.advertisedAddress")),1)]),body:e(()=>[s.zoneIngress.advertisedSocketAddress.length>0?(a(),i(_,{key:0,text:s.zoneIngress.advertisedSocketAddress},null,8,["text"])):(a(),m(u,{key:1},[t(n(o("common.detail.none")),1)],64))]),_:2},1024)])]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),Z=b(B,[["__scopeId","data-v-b43ed833"]]);export{Z as default};
