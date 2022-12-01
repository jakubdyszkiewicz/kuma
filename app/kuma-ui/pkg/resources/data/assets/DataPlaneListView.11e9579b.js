import{d as _e,e as P,cz as he,cu as me,cA as ge,cB as Se,cC as Oe,o as i,i as m,j as e,a as K,w as V,b as q,t as h,A as Ke,u as d,z as x,F as A,n as M,v as $e,h as Le,B as ke,C as be,D as De,p as Ne,r as T,f as Re,R as ve,k as xe,c as B,l as Me,cD as ze,cE as je,cF as He,M as ye,q as Be,E as qe,G as Ge,cs as fe,cG as Ye,cH as Ze,cI as Fe,cw as Je,cx as Qe,cJ as We,cv as Xe}from"./index.b0409b43.js";import{C as et}from"./ContentWrapper.84ef6907.js";import{p as ee,D as tt}from"./patchQueryParam.cab76542.js";import{T as at}from"./TagList.94a6fc3d.js";import{Y as nt}from"./YamlView.ea929241.js";import{_ as st}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.6093e09e.js";import"./ErrorBlock.2d64b0cd.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.5ea0e82e.js";import"./index.58caa11d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.b9ac744a.js";import"./_commonjsHelpers.f037b798.js";const U=s=>(ke("data-v-49299a0f"),s=s(),be(),s),lt={class:"entity-summary entity-section-list"},ot={class:"entity-title","data-testid":"data-plane-proxy-title"},it=U(()=>e("span",{class:"kutil-sr-only"},"Data plane proxy:",-1)),rt={class:"definition"},dt=U(()=>e("span",null,"Mesh:",-1)),ct={key:0},ut=U(()=>e("h4",null,"Tags",-1)),pt={key:1},mt=U(()=>e("h4",null,"Dependencies",-1)),vt={class:"mt-2 heading-with-icon"},yt=U(()=>e("h4",null,"Insights",-1)),ft={class:"entity-section-list"},_t=["data-testid"],ht=U(()=>e("span",null,"Connect time:",-1)),gt=["data-testid"],kt=U(()=>e("span",null,"Disconnect time:",-1)),bt={class:"definition"},Dt=U(()=>e("span",null,"Control plane instance ID:",-1)),Tt={key:0},Ct=U(()=>e("summary",null," Responses (acknowledged / sent) ",-1)),wt=["data-testid"],Pt=_e({__name:"DataPlaneEntitySummary",props:{dataPlaneOverview:{type:Object,required:!0}},setup(s){const f=s,E={"Partially degraded":"partially_degraded",Offline:"offline",Online:"online"},F=P(()=>{const{name:p,mesh:r,dataplane:v}=f.dataPlaneOverview;return{type:"Dataplane",name:p,mesh:r,networking:v.networking}}),I=P(()=>he(f.dataPlaneOverview.dataplane)),z=P(()=>{const p=Array.from(f.dataPlaneOverview.dataplaneInsight.subscriptions);return p.reverse(),p.map(r=>{const v=r.connectTime!==void 0?me(r.connectTime):"\u2014",l=r.disconnectTime!==void 0?me(r.disconnectTime):"\u2014",c=Object.entries(r.status).filter(([g])=>!["total","lastUpdateTime"].includes(g)).map(([g,k])=>{var L,G,Y,Z,j;const b=`${(L=k.responsesAcknowledged)!=null?L:0} / ${(G=k.responsesSent)!=null?G:0}`;return{type:g.toUpperCase(),ratio:b,responsesSent:(Y=k.responsesSent)!=null?Y:0,responsesAcknowledged:(Z=k.responsesAcknowledged)!=null?Z:0,responsesRejected:(j=k.responsesRejected)!=null?j:0}});return{subscription:r,formattedConnectDate:v,formattedDisconnectDate:l,statuses:c}})}),C=P(()=>{const{status:p}=ge(f.dataPlaneOverview.dataplane,f.dataPlaneOverview.dataplaneInsight);return Se[E[p]]}),$=P(()=>{const p=Oe(f.dataPlaneOverview.dataplaneInsight);return p!==null?Object.entries(p).map(([r,v])=>({name:r,version:v})):[]}),S=P(()=>{const{subscriptions:p}=f.dataPlaneOverview.dataplaneInsight;if(p.length===0)return[];const r=p[p.length-1];if(!r.version)return[];const v=[],l=r.version.envoy,c=r.version.kumaDp;if(!(l.kumaDpCompatible!==void 0?l.kumaDpCompatible:!0)){const b=`Envoy ${l.version} is not supported by Kuma DP ${c.version}.`;v.push(b)}if(!(c.kumaCpCompatible!==void 0?c.kumaCpCompatible:!0)){const b=`Kuma DP ${c.version} is not supported by this Kuma control plane.`;v.push(b)}return v});return(p,r)=>{const v=Le("router-link");return i(),m("div",lt,[e("section",null,[e("h3",ot,[it,K(v,{to:{name:"data-plane-detail-view",params:{mesh:s.dataPlaneOverview.mesh,dataPlane:s.dataPlaneOverview.name}}},{default:V(()=>[q(h(s.dataPlaneOverview.name),1)]),_:1},8,["to"]),e("div",{class:Ke(`status status--${d(C).appearance}`),"data-testid":"data-plane-status-badge"},h(d(C).title.toLowerCase()),3)]),e("div",rt,[dt,e("span",null,h(s.dataPlaneOverview.mesh),1)])]),d(I).length>0?(i(),m("section",ct,[ut,K(at,{tags:d(I)},null,8,["tags"])])):x("",!0),d($).length>0?(i(),m("section",pt,[mt,(i(!0),m(A,null,M(d($),(l,c)=>(i(),m("div",{key:c,class:"definition"},[e("span",null,h(l.name)+":",1),e("span",null,h(l.version),1)]))),128)),d(S).length>0?(i(),m(A,{key:0},[e("h5",vt,[q(" Warnings "),K(d($e),{class:"ml-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"20"})]),(i(!0),m(A,null,M(d(S),(l,c)=>(i(),m("p",{key:c},h(l),1))),128))],64)):x("",!0)])):x("",!0),d(z).length>0?(i(),m(A,{key:2},[e("section",null,[yt,e("div",ft,[(i(!0),m(A,null,M(d(z),(l,c)=>(i(),m("div",{key:c},[e("div",{class:"definition","data-testid":`data-plane-connect-time-${c}`},[ht,e("span",null,h(l.formattedConnectDate),1)],8,_t),e("div",{class:"definition","data-testid":`data-plane-disconnect-time-${c}`},[kt,e("span",null,h(l.formattedDisconnectDate),1)],8,gt),e("div",bt,[Dt,e("span",null,h(l.subscription.controlPlaneInstanceId),1)]),l.statuses.length>0?(i(),m("details",Tt,[Ct,(i(!0),m(A,null,M(l.statuses,(g,k)=>(i(),m("div",{key:`${c}-${k}`,class:"definition","data-testid":`data-plane-subscription-status-${c}-${k}`},[e("span",null,h(g.type)+":",1),e("span",null,h(g.ratio),1)],8,wt))),128))])):x("",!0)]))),128))])]),e("section",null,[K(nt,{id:"code-block-data-plane-summary",content:d(F),"code-max-height":"250px"},null,8,["content"])])],64)):x("",!0)])}}});const Ut=De(Pt,[["__scopeId","data-v-49299a0f"]]),Te=[{key:"status",label:"Status"},{key:"name",label:"Name"},{key:"type",label:"Type"},{key:"service",label:"Service"},{key:"protocol",label:"Protocol"},{key:"zone",label:"Zone"},{key:"lastConnected",label:"Last Connected"},{key:"lastUpdated",label:"Last Updated"},{key:"totalUpdates",label:"Total Updates"},{key:"dpVersion",label:"Kuma DP version"},{key:"envoyVersion",label:"Envoy version"},{key:"details",label:"Details",hideLabel:!0}],Vt=["name","details"],At=Te.filter(s=>!Vt.includes(s.key)).map(s=>({tableHeaderKey:s.key,label:s.label,isChecked:!1})),Ce=["status","name","type","service","protocol","zone","lastUpdated","dpVersion","details"];function Et(s,f=Ce){return Te.filter(E=>f.includes(E.key)?s?!0:E.key!=="zone":!1)}const te=s=>(ke("data-v-50525674"),s=s(),be(),s),It=te(()=>e("label",{for:"data-planes-type-filter",class:"mr-2"}," Type: ",-1)),St=["value"],Ot=["for"],Kt=["id","checked","onChange"],$t=te(()=>e("span",{class:"custom-control-icon"}," + ",-1)),Lt=te(()=>e("span",{class:"custom-control-icon"}," \u2190 ",-1)),Nt=_e({__name:"DataPlaneListView",props:{name:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(s){const f=s,E=50,F=["All","Standard","Gateway (builtin)","Gateway (delegated)"],I=Ne(),z=Be(),C=T(Ce),$=T(!0),S=T(!1),p=T(null),r=T(!1),v=T({headers:[],data:[]}),l=T([]),c=T(null),g=T("All"),k=T(f.offset),b=T(null),L=P(()=>z.getters["config/getMulticlusterStatus"]),G=P(()=>({name:z.getters["config/getEnvironment"]==="universal"?"universal-dataplane":"kubernetes-dataplane"})),Y=P(()=>{const t=v.value.data.filter(y=>g.value==="All"?!0:y.type.toLowerCase()===g.value.toLowerCase()),n=Et(L.value,C.value);return{data:t,headers:n}}),Z=P(()=>At.filter(t=>L.value?!0:t.tableHeaderKey!=="zone").map(t=>{const n=C.value.includes(t.tableHeaderKey);return{...t,isChecked:n}}));Re(()=>I.params.mesh,function(){I.name==="data-plane-list-view"&&(S.value=!1,p.value=null,r.value=!1,J(0))});const j=ve.get("dpVisibleTableHeaderKeys");Array.isArray(j)&&(C.value=j),J(f.offset);function we(t){t.stopPropagation()}function Pe(t,n){const y=t.target,o=C.value.findIndex(u=>u===n);y.checked&&o===-1?C.value.push(n):!y.checked&&o>-1&&C.value.splice(o,1),ve.set("dpVisibleTableHeaderKeys",Array.from(new Set(C.value)))}function Ue(){qe.logger.info(Ge.CREATE_DATA_PLANE_PROXY_CLICKED)}function Ve(){return{title:"No Data",message:"There are no data plane proxies present."}}async function Ae(t){var ne,se,le,oe,ie;const n=t.mesh,y=t.name,o={name:"data-plane-detail-view",params:{mesh:n,dataPlane:y}},u={name:"mesh-detail-view",params:{mesh:n}},H=["kuma.io/protocol","kuma.io/service","kuma.io/zone"],N=he(t.dataplane).filter(a=>H.includes(a.label)),D=(ne=N.find(a=>a.label==="kuma.io/service"))==null?void 0:ne.value,O=(se=N.find(a=>a.label==="kuma.io/protocol"))==null?void 0:se.value,W=(le=N.find(a=>a.label==="kuma.io/zone"))==null?void 0:le.value;let ae;D!==void 0&&(ae={name:"service-insight-detail-view",params:{mesh:n,service:D}});const{status:Ee}=ge(t.dataplane,t.dataplaneInsight),Ie={totalUpdates:0,totalRejectedUpdates:0,dpVersion:null,envoyVersion:null,selectedTime:NaN,selectedUpdateTime:NaN,version:null},_=t.dataplaneInsight.subscriptions.reduce((a,w)=>{var re,de,ce,ue;if(w.connectTime){const pe=Date.parse(w.connectTime);(!a.selectedTime||pe>a.selectedTime)&&(a.selectedTime=pe)}const X=Date.parse(w.status.lastUpdateTime);return X&&(!a.selectedUpdateTime||X>a.selectedUpdateTime)&&(a.selectedUpdateTime=X),{totalUpdates:a.totalUpdates+parseInt((re=w.status.total.responsesSent)!=null?re:"0",10),totalRejectedUpdates:a.totalRejectedUpdates+parseInt((de=w.status.total.responsesRejected)!=null?de:"0",10),dpVersion:((ce=w.version)==null?void 0:ce.kumaDp.version)||a.dpVersion,envoyVersion:((ue=w.version)==null?void 0:ue.envoy.version)||a.envoyVersion,selectedTime:a.selectedTime,selectedUpdateTime:a.selectedUpdateTime,version:w.version||a.version}},Ie),R={name:y,nameRoute:o,mesh:n,meshRoute:u,zone:W!=null?W:"\u2014",service:D!=null?D:"\u2014",serviceInsightRoute:ae,protocol:O!=null?O:"\u2014",status:Ee,totalUpdates:_.totalUpdates,totalRejectedUpdates:_.totalRejectedUpdates,dpVersion:(oe=_.dpVersion)!=null?oe:"\u2014",envoyVersion:(ie=_.envoyVersion)!=null?ie:"\u2014",warnings:[],unsupportedEnvoyVersion:!1,unsupportedKumaDPVersion:!1,kumaDpAndKumaCpMismatch:!1,lastUpdated:_.selectedUpdateTime?fe(new Date(_.selectedUpdateTime).toUTCString()):"\u2014",lastConnected:_.selectedTime?fe(new Date(_.selectedTime).toUTCString()):"\u2014",type:Ye(t.dataplane)};if(_.version){const{kind:a}=Ze(_.version);switch(a!==Fe&&R.warnings.push(a),a){case Qe:R.unsupportedEnvoyVersion=!0;break;case Je:R.unsupportedKumaDPVersion=!0;break}}return L.value&&_.dpVersion&&N.find(w=>w.label===We)&&typeof _.version.kumaDp.kumaCpCompatible=="boolean"&&!_.version.kumaDp.kumaCpCompatible&&(R.warnings.push(Xe),R.kumaDpAndKumaCpMismatch=!0),R}async function J(t){var o;k.value=t,ee("offset",t>0?t:null),$.value=!0;const n=I.params.mesh,y=E;try{const{items:u,next:H}=await xe.getAllDataplaneOverviewsFromMesh({mesh:n},{size:y,offset:t});if(Array.isArray(u)&&u.length>0){u.sort(function(D,O){return D.name===O.name?D.mesh>O.mesh?1:-1:D.name.localeCompare(O.name)}),c.value=H,l.value=u,Q((o=f.name)!=null?o:u[0].name);const N=await Promise.all(l.value.map(D=>Ae(D)));v.value.data=N,r.value=!1,S.value=!1}else Q(null),v.value.data=[],r.value=!0,S.value=!0}catch(u){u instanceof Error?p.value=u:console.error(u),S.value=!0}finally{$.value=!1}}function Q(t){var n;t&&l.value.length>0?(b.value=(n=l.value.find(y=>y.name===t))!=null?n:l.value[0],ee("name",b.value.name)):(b.value=null,ee("name",null))}return(t,n)=>(i(),B(et,null,{content:V(()=>{var y;return[K(tt,{"selected-entity-name":(y=b.value)==null?void 0:y.name,"page-size":E,"is-loading":$.value,error:p.value,"empty-state":Ve(),"table-data":d(Y),"table-data-is-empty":r.value,"show-details":"",next:c.value!==null,"page-offset":k.value,onTableAction:n[1]||(n[1]=o=>Q(o.name)),onLoadData:n[2]||(n[2]=o=>J(o))},{additionalControls:V(()=>[e("div",null,[It,Me(e("select",{id:"data-planes-type-filter","onUpdate:modelValue":n[0]||(n[0]=o=>g.value=o),"data-testid":"data-planes-type-filter"},[(i(),m(A,null,M(F,(o,u)=>e("option",{key:u,value:o},h(o),9,St)),64))],512),[[ze,g.value]])]),K(d(je),{label:"Columns",icon:"cogwheel","button-appearance":"outline"},{items:V(()=>[e("div",{onClick:we},[(i(!0),m(A,null,M(d(Z),(o,u)=>(i(),B(d(He),{key:u,class:"table-header-selector-item",item:o},{default:V(()=>[e("label",{for:`data-plane-table-header-checkbox-${u}`,class:"k-checkbox table-header-selector-item-checkbox"},[e("input",{id:`data-plane-table-header-checkbox-${u}`,checked:o.isChecked,type:"checkbox",class:"k-input",onChange:H=>Pe(H,o.tableHeaderKey)},null,40,Kt),q(" "+h(o.label),1)],8,Ot)]),_:2},1032,["item"]))),128))])]),_:1}),K(d(ye),{class:"add-dp-button",appearance:"primary",to:d(G),"data-testid":"data-plane-create-data-plane-button",onClick:Ue},{default:V(()=>[$t,q(" Create data plane proxy ")]),_:1},8,["to"]),d(I).query.ns?(i(),B(d(ye),{key:0,appearance:"primary",to:{name:"data-plane-list-view"},"data-testid":"data-plane-ns-back-button"},{default:V(()=>[Lt,q(" View All ")]),_:1})):x("",!0)]),_:1},8,["selected-entity-name","is-loading","error","empty-state","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:V(()=>[b.value!==null?(i(),B(Ut,{key:0,"data-plane-overview":b.value},null,8,["data-plane-overview"])):(i(),B(st,{key:1}))]),_:1}))}});const Ft=De(Nt,[["__scopeId","data-v-50525674"]]);export{Ft as default};
