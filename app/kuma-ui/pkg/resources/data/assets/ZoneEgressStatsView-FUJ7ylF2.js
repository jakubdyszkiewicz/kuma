import{C as u}from"./CodeBlock-Cf09PDeH.js";import{d as f,r as o,o as h,m as C,w as a,b as t,e as s}from"./index-B3PYX6oN.js";const y=f({__name:"ZoneEgressStatsView",setup(x){return(R,w)=>{const r=o("RouteTitle"),c=o("XAction"),d=o("DataLoader"),i=o("KCard"),p=o("AppView"),l=o("RouteView");return h(),C(l,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:m})=>[t(r,{render:!1,title:m("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"]),s(),t(p,null,{default:a(()=>[t(i,null,{default:a(()=>[t(d,{src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`},{default:a(({data:_,refresh:g})=>[t(u,{language:"json",code:_,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":a(()=>[t(c,{action:"refresh",appearance:"primary",onClick:g},{default:a(()=>[s(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{y as default};
