import{C as g}from"./CodeBlock-Cf09PDeH.js";import{d as u,r as a,o as h,m as C,w as o,b as n,e as s}from"./index-B3PYX6oN.js";const k=u({__name:"DataPlaneXdsConfigView",setup(x){return(R,w)=>{const c=a("RouteTitle"),d=a("XAction"),r=a("DataLoader"),i=a("KCard"),p=a("AppView"),l=a("RouteView");return h(),C(l,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:m})=>[n(c,{render:!1,title:m("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"]),s(),n(p,null,{default:o(()=>[n(i,null,{default:o(()=>[n(r,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/xds`},{default:o(({data:_,refresh:f})=>[n(g,{language:"json",code:JSON.stringify(_,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:t=>e.update({codeSearch:t}),onFilterModeChange:t=>e.update({codeFilter:t}),onRegExpModeChange:t=>e.update({codeRegExp:t})},{"primary-actions":o(()=>[n(d,{action:"refresh",appearance:"primary",onClick:f},{default:o(()=>[s(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{k as default};
