import{d as V,j as B,r as l,o as g,c as D,b as e,w as s,A as T,l as i,e as t,t as c,x as P,y as X,m as y,k as a,z as L,B as R,p as S,C as N,q as x}from"./index-D32LqI0w.js";const I=V({__name:"MeshInsightsList",props:{items:{default:void 0},storage:{default:()=>({get:()=>({}),set:()=>{}})}},setup(w){const{t:r}=B(),p=w;return(d,h)=>{const u=l("XAction"),m=l("DataCollection");return g(),D("div",null,[e(m,{items:p.items??[void 0],type:"meshes"},{default:s(()=>[e(T,{headers:[{...d.storage.get("mesh.headers.name"),label:i(r)("meshes.components.mesh-insights-list.name"),key:"name"},{...d.storage.get("mesh.headers.services"),label:i(r)("meshes.components.mesh-insights-list.services"),key:"services"},{...d.storage.get("mesh.headers.dataplanes"),label:i(r)("meshes.components.mesh-insights-list.dataplanes"),key:"dataplanes"}],items:p.items,onResize:h[0]||(h[0]=o=>{d.storage.set({mesh:o})})},{name:s(({row:o})=>[e(u,{to:{name:"mesh-detail-view",params:{mesh:o.name}}},{default:s(()=>[t(c(o.name),1)]),_:2},1032,["to"])]),services:s(({row:o})=>[t(c(o.services.internal),1)]),dataplanes:s(({row:o})=>[t(c(o.dataplanesByType.standard.online)+" / "+c(o.dataplanesByType.standard.total),1)]),_:1},8,["headers","items"])]),_:1},8,["items"])])}}}),$={class:"stack"},K={class:"columns"},Z={class:"card-header"},j={class:"card-title"},q={class:"card-actions"},E={class:"card-header"},M={class:"card-title"},F=V({__name:"ControlPlaneDetailView",setup(w){const r=P(),p=X();return(d,h)=>{const u=l("RouteTitle"),m=l("DataLoader"),o=l("XAction"),b=l("XTeleportSlot"),f=l("KCard"),k=l("AppView"),A=l("RouteView");return g(),y(A,{name:"home"},{default:s(({can:C,t:_,uri:v,me:z})=>[e(k,null,{title:s(()=>[a("h1",null,[e(u,{title:_("main-overview.routes.item.title")},null,8,["title"])])]),default:s(()=>[t(),a("div",$,[e(m,{src:v(i(L),"/global-insight",{})},{default:s(({data:n})=>[e(i(r),{"can-use-zones":C("use zones"),"global-insight":n},null,8,["can-use-zones","global-insight"])]),_:2},1032,["src"]),t(),a("div",K,[C("use zones")?(g(),y(f,{key:0},{default:s(()=>[e(m,{src:v(i(R),"/zone-cps",{},{page:1,size:10})},{loadable:s(({data:n})=>[a("div",Z,[a("div",j,[a("h2",null,c(_("main-overview.detail.zone_control_planes.title")),1),t(),e(o,{to:{name:"zone-cp-list-view"}},{default:s(()=>[t(c(_("main-overview.detail.health.view_all")),1)]),_:2},1024)]),t(),a("div",q,[e(b,{name:"control-plane-detail-view-zone-actions"})])]),t(),e(i(p),{"data-testid":"zone-control-planes-details",items:n==null?void 0:n.items,storage:z},null,8,["items","storage"])]),_:2},1032,["src"])]),_:2},1024)):S("",!0),t(),e(f,null,{default:s(()=>[e(m,{src:v(i(N),"/mesh-insights",{},{page:1,size:10})},{loadable:s(({data:n})=>[a("div",E,[a("div",M,[a("h2",null,c(_("main-overview.detail.meshes.title")),1),t(),e(o,{to:{name:"mesh-list-view"}},{default:s(()=>[t(c(_("main-overview.detail.health.view_all")),1)]),_:2},1024)])]),t(),e(I,{"data-testid":"meshes-details",items:n==null?void 0:n.items,storage:z},null,8,["items","storage"])]),_:2},1032,["src"])]),_:2},1024)])])]),_:2},1024)]),_:1})}}}),H=x(F,[["__scopeId","data-v-ad94766d"]]);export{H as default};
