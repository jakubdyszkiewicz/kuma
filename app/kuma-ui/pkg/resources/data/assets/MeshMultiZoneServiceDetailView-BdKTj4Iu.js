import{_ as K}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-CT1lAJlI.js";import{d as R,r as t,o as r,m as d,w as o,b as a,k as p,Z as _,e as s,c as h,L as f,M as g,t as C,p as b,q as B}from"./index-D32LqI0w.js";import"./CodeBlock-DRh_0yHF.js";const D={class:"stack"},F={class:"columns"},$=R({__name:"MeshMultiZoneServiceDetailView",props:{data:{}},setup(v){const c=v;return(x,N)=>{const S=t("KumaPort"),u=t("KTruncate"),V=t("KBadge"),w=t("KCard"),M=t("DataSource"),k=t("AppView"),y=t("RouteView");return r(),d(y,{name:"mesh-multi-zone-service-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:n})=>[a(k,null,{default:o(()=>[p("div",D,[a(w,null,{default:o(()=>[p("div",F,[a(_,null,{title:o(()=>[s(`
                Ports
              `)]),body:o(()=>[a(u,null,{default:o(()=>[(r(!0),h(f,null,g(c.data.spec.ports,e=>(r(),d(S,{key:e.port,port:{...e,targetPort:void 0}},null,8,["port"]))),128))]),_:1})]),_:1}),s(),a(_,null,{title:o(()=>[s(`
                Selector
              `)]),body:o(()=>[a(u,null,{default:o(()=>[(r(!0),h(f,null,g(x.data.spec.selector.meshService.matchLabels,(e,l)=>(r(),d(V,{key:`${l}:${e}`,appearance:"info"},{default:o(()=>[s(C(l)+":"+C(e),1)]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1}),s(),p("div",null,[a(K,{resource:c.data.config,"is-searchable":"",query:n.params.codeSearch,"is-filter-mode":n.params.codeFilter,"is-reg-exp-mode":n.params.codeRegExp,onQueryChange:e=>n.update({codeSearch:e}),onFilterModeChange:e=>n.update({codeFilter:e}),onRegExpModeChange:e=>n.update({codeRegExp:e})},{default:o(({copy:e,copying:l})=>[l?(r(),d(M,{key:0,src:`/meshes/${c.data.mesh}/mesh-multi-zone-service/${c.data.id}/as/kubernetes?no-store`,onChange:i=>{e(m=>m(i))},onError:i=>{e((m,E)=>E(i))}},null,8,["src","onChange","onError"])):b("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])]),_:2},1024)]),_:1})}}}),T=B($,[["__scopeId","data-v-17093c82"]]);export{T as default};
