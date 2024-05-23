import{d as B,a as p,o as s,b as c,w as e,e as i,m as f,a5 as g,f as n,c as r,F as d,G as h,t as l,q as u,p as z,aI as K,N as R,K as q,E as A,_ as F}from"./index-D0QWLHzr.js";import{A as O}from"./AppCollection-Bg0lcNpP.js";import{F as $}from"./FilterBar-DCoLx3Rl.js";import{S as M}from"./StatusBadge-BfEqsQ2K.js";import{S as X}from"./SummaryView-DC4twc1b.js";const Z={class:"stack"},j={class:"columns"},G={key:0},J={key:1},U=B({__name:"MeshServiceDetailView",props:{data:{}},setup(V){const D=V;return(_,W)=>{const y=p("KTruncate"),b=p("KBadge"),w=p("KCard"),k=p("RouterLink"),x=p("XIcon"),I=p("RouterView"),P=p("DataLoader"),T=p("AppView"),E=p("RouteView"),L=p("DataSource");return s(),c(L,{src:"/me"},{default:e(({data:C})=>[C?(s(),c(E,{key:0,name:"mesh-service-detail-view",params:{mesh:"",service:"",page:1,size:C.pageSize,s:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({can:S,route:o,t:m,uri:N})=>[i(T,null,{default:e(()=>[f("div",Z,[i(w,null,{default:e(()=>[f("div",j,[_.data.status.addresses.length>0?(s(),c(g,{key:0},{title:e(()=>[n(`
                  Addresses
                `)]),body:e(()=>[i(y,null,{default:e(()=>[(s(!0),r(d,null,h(_.data.status.addresses,t=>(s(),r("span",{key:t.hostname},l(t.hostname),1))),128))]),_:1})]),_:1})):u("",!0),n(),i(g,null,{title:e(()=>[n(`
                  Ports
                `)]),body:e(()=>[i(y,null,{default:e(()=>[(s(!0),r(d,null,h(_.data.spec.ports,t=>(s(),c(b,{key:t.port,appearance:"info"},{default:e(()=>[n(l(t.port)+":"+l(t.targetPort)+"/"+l(t.protocol),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(),i(g,null,{title:e(()=>[n(`
                  Dataplane Tags
                `)]),body:e(()=>[i(y,null,{default:e(()=>[(s(!0),r(d,null,h(_.data.spec.selector.dataplaneTags,(t,a)=>(s(),c(b,{key:`${a}:${t}`,appearance:"info"},{default:e(()=>[n(l(a)+":"+l(t),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(),_.data.status.vips.length>0?(s(),c(g,{key:1,class:"ip"},{title:e(()=>[n(`
                  VIPs
                `)]),body:e(()=>[i(y,null,{default:e(()=>[(s(!0),r(d,null,h(_.data.status.vips,t=>(s(),r("span",{key:t.ip},l(t.ip),1))),128))]),_:1})]),_:1})):u("",!0)])]),_:1}),n(),f("div",null,[f("h3",null,l(m("services.detail.data_plane_proxies")),1),n(),i(w,{class:"mt-4"},{default:e(()=>[i(P,{src:N(z(K),"/meshes/:mesh/dataplanes/for/mesh-service/:tags",{mesh:o.params.mesh,tags:JSON.stringify(D.data.spec.selector.dataplaneTags)},{page:o.params.page,size:o.params.size,search:o.params.s})},{loadable:e(({data:t})=>[i(O,{class:"data-plane-collection","data-testid":"data-plane-collection","page-number":o.params.page,"page-size":o.params.size,headers:[{label:"Name",key:"name"},{label:"Namespace",key:"namespace"},...S("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:t==null?void 0:t.items,total:t==null?void 0:t.total,"is-selected-row":a=>a.name===o.params.dataPlane,"summary-route-name":"service-data-plane-summary-view","empty-state-message":m("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":m("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":m("common.documentation"),onChange:o.update},{toolbar:e(()=>[i($,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:o.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...S("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:a=>o.update({...Object.fromEntries(a.entries())})},null,8,["query","fields","onChange"])]),name:e(({row:a})=>[i(k,{class:"name-link",to:{name:"mesh-service-data-plane-summary-view",params:{mesh:a.mesh,dataPlane:a.id},query:{page:o.params.page,size:o.params.size,s:o.params.s}}},{default:e(()=>[n(l(a.name),1)]),_:2},1032,["to"])]),namespace:e(({row:a})=>[n(l(a.namespace),1)]),zone:e(({row:a})=>[a.zone?(s(),c(k,{key:0,to:{name:"zone-cp-detail-view",params:{zone:a.zone}}},{default:e(()=>[n(l(a.zone),1)]),_:2},1032,["to"])):(s(),r(d,{key:1},[n(l(m("common.collection.none")),1)],64))]),certificate:e(({row:a})=>{var v;return[(v=a.dataplaneInsight.mTLS)!=null&&v.certificateExpirationTime?(s(),r(d,{key:0},[n(l(m("common.formats.datetime",{value:Date.parse(a.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(s(),r(d,{key:1},[n(l(m("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:e(({row:a})=>[i(M,{status:a.status},null,8,["status"])]),warnings:e(({row:a})=>[a.isCertExpired||a.warnings.length>0?(s(),c(x,{key:0,class:"mr-1",name:"warning"},{default:e(()=>[f("ul",null,[a.warnings.length>0?(s(),r("li",G,l(m("data-planes.components.data-plane-list.version_mismatch")),1)):u("",!0),n(),a.isCertExpired?(s(),r("li",J,l(m("data-planes.components.data-plane-list.cert_expired")),1)):u("",!0)])]),_:2},1024)):(s(),r(d,{key:1},[n(l(m("common.collection.none")),1)],64))]),details:e(({row:a})=>[i(k,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:a.id}}},{default:e(()=>[n(l(m("common.collection.details_link"))+" ",1),i(z(R),{decorative:"",size:z(q)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]),n(),o.params.dataPlane?(s(),c(I,{key:0},{default:e(a=>[i(X,{onClose:v=>o.replace({name:o.name,params:{mesh:o.params.mesh},query:{page:o.params.page,size:o.params.size,s:o.params.s}})},{default:e(()=>[typeof t<"u"?(s(),c(A(a.Component),{key:0,items:t.items},null,8,["items"])):u("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1032,["src"])]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["params"])):u("",!0)]),_:1})}}}),te=F(U,[["__scopeId","data-v-9181d897"]]);export{te as default};
