import{d as V,r as t,o as c,m as l,w as e,b as o,c as v,a2 as x,p as h,e as i,T as D,M as T,t as C,E as R}from"./index-B3PYX6oN.js";const k={key:0},y=V({__name:"ZoneIngressDetailTabsView",setup(A){return(S,X)=>{const _=t("RouteTitle"),p=t("XAction"),d=t("XTabs"),u=t("RouterView"),z=t("DataLoader"),b=t("AppView"),f=t("DataSource"),w=t("RouteView");return c(),l(w,{name:"zone-ingress-detail-tabs-view",params:{zone:"",zoneIngress:""}},{default:e(({route:s,t:n})=>[o(f,{src:`/zone-ingress-overviews/${s.params.zoneIngress}`},{default:e(({data:a,error:g})=>[o(b,{docs:n("zone-ingresses.href.docs"),breadcrumbs:[{to:{name:"zone-cp-list-view"},text:n("zone-cps.routes.item.breadcrumbs")},{to:{name:"zone-cp-detail-view",params:{zone:s.params.zone}},text:s.params.zone},{to:{name:"zone-ingress-list-view",params:{zone:s.params.zone}},text:n("zone-ingresses.routes.item.breadcrumbs")}]},{title:e(()=>[a?(c(),v("h1",k,[o(x,{text:a.name},{default:e(()=>[o(_,{title:n("zone-ingresses.routes.item.title",{name:a.name})},null,8,["title"])]),_:2},1032,["text"])])):h("",!0)]),default:e(()=>[i(),o(z,{data:[a],errors:[g]},{default:e(()=>{var m;return[o(d,{selected:(m=s.child())==null?void 0:m.name,"data-testid":"zone-ingress-tabs"},D({_:2},[T(s.children,({name:r})=>({name:`${r}-tab`,fn:e(()=>[o(p,{to:{name:r}},{default:e(()=>[i(C(n(`zone-ingresses.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),i(),o(u,null,{default:e(r=>[(c(),l(R(r.Component),{data:a},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{y as default};
