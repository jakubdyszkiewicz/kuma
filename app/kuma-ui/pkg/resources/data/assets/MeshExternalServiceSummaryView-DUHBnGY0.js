import{_ as V}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-CT1lAJlI.js";import{d as D,r,o as i,m as l,w as e,b as n,k as c,e as o,Z as m,t as p,p as d}from"./index-D32LqI0w.js";import"./CodeBlock-DRh_0yHF.js";const B={class:"stack"},F={class:"stack-with-borders"},M={class:"mt-4"},$=D({__name:"MeshExternalServiceSummaryView",props:{items:{}},setup(v){const f=v;return(N,A)=>{const y=r("RouteTitle"),u=r("XAction"),C=r("KumaPort"),x=r("KBadge"),b=r("DataSource"),w=r("AppView"),k=r("DataCollection"),z=r("RouteView");return i(),l(z,{name:"mesh-external-service-summary-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:t,t:h,can:E})=>[n(k,{items:f.items,predicate:a=>a.id===t.params.service},{item:e(({item:a})=>[n(w,null,{title:e(()=>[c("h2",null,[n(u,{to:{name:"mesh-external-service-detail-view",params:{mesh:t.params.mesh,service:t.params.service}}},{default:e(()=>[n(y,{title:h("services.routes.item.title",{name:a.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:e(()=>[o(),c("div",B,[c("div",F,[a.namespace.length>0?(i(),l(m,{key:0,layout:"horizontal"},{title:e(()=>[o(`
                  Namespace
                `)]),body:e(()=>[o(p(a.namespace),1)]),_:2},1024)):d("",!0),o(),E("use zones")&&a.zone?(i(),l(m,{key:1,layout:"horizontal"},{title:e(()=>[o(`
                  Zone
                `)]),body:e(()=>[n(u,{to:{name:"zone-cp-detail-view",params:{zone:a.zone}}},{default:e(()=>[o(p(a.zone),1)]),_:2},1032,["to"])]),_:2},1024)):d("",!0),o(),a.spec.match?(i(),l(m,{key:2,layout:"horizontal"},{title:e(()=>[o(`
                  Port
                `)]),body:e(()=>[n(C,{port:a.spec.match},null,8,["port"])]),_:2},1024)):d("",!0),o(),n(m,{layout:"horizontal"},{title:e(()=>[o(`
                  TLS
                `)]),body:e(()=>[n(x,{appearance:"neutral"},{default:e(()=>{var s;return[o(p((s=a.spec.tls)!=null&&s.enabled?"Enabled":"Disabled"),1)]}),_:2},1024)]),_:2},1024)]),o(),c("div",null,[c("h3",null,p(h("services.routes.item.config")),1),o(),c("div",M,[n(V,{resource:a.config,"is-searchable":"",query:t.params.codeSearch,"is-filter-mode":t.params.codeFilter,"is-reg-exp-mode":t.params.codeRegExp,onQueryChange:s=>t.update({codeSearch:s}),onFilterModeChange:s=>t.update({codeFilter:s}),onRegExpModeChange:s=>t.update({codeRegExp:s})},{default:e(({copy:s,copying:R})=>[R?(i(),l(b,{key:0,src:`/meshes/${t.params.mesh}/mesh-service/${t.params.service}/as/kubernetes?no-store`,onChange:_=>{s(g=>g(_))},onError:_=>{s((g,S)=>S(_))}},null,8,["src","onChange","onError"])):d("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])])]),_:2},1024)]),_:2},1032,["items","predicate"])]),_:1})}}});export{$ as default};
