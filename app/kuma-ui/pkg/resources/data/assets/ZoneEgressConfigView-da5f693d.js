import{E as g}from"./ErrorBlock-1fa583ae.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-fa4c5616.js";import{_ as w}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-1528cfbc.js";import{d as k,u as y,a as e,o as s,b as n,w as o,e as t,p as z,f as C,q as V}from"./index-079a3a85.js";import"./index-52545d1d.js";import"./TextWithCopyButton-f3080f30.js";import"./CopyButton-86a7f09c.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-b68734c9.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-e7d3cf8e.js";import"./toYaml-4e00099e.js";const D=k({__name:"ZoneEgressConfigView",setup(E){const m=y();return(v,S)=>{const p=e("RouteTitle"),u=e("DataSource"),_=e("KCard"),l=e("AppView"),d=e("RouteView");return s(),n(d,{name:"zone-egress-config-view",params:{zoneEgress:"",codeSearch:""}},{default:o(({route:r,t:f})=>[t(l,null,{title:o(()=>[z("h2",null,[t(p,{title:f("zone-egresses.routes.item.navigation.zone-egress-config-view")},null,8,["title"])])]),default:o(()=>[C(),t(_,null,{body:o(()=>[t(u,{src:`/zone-egresses/${r.params.zoneEgress}`},{default:o(({data:c,error:i})=>[i!==void 0?(s(),n(g,{key:0,error:i},null,8,["error"])):c===void 0?(s(),n(h,{key:1})):(s(),n(w,{key:2,id:"code-block-zone-egress",resource:c,"resource-fetcher":a=>V(m).getZoneEgress({name:r.params.zoneEgress},a),"is-searchable":"",query:r.params.codeSearch,onQueryChange:a=>r.update({codeSearch:a})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{D as default};