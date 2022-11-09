import{D as N,cl as x,cm as K,R as F,e as H,M,P,cn as R,co as q,k as p,cp as S,s as G,cq as J,cr as j,o as l,j as m,c as h,w as o,a as u,b as z,z as _,l as f,t as E,F as C,n as D,i as r}from"./index.08f62f25.js";import{g as Y}from"./tableDataUtils.c68a3657.js";import{_ as U}from"./CodeBlock.vue_vue_type_style_index_0_lang.511f1454.js";import{D as Q}from"./DataOverview.4235c7a0.js";import{F as X}from"./FrameSkeleton.8231b93c.js";import{_ as $}from"./LabelList.vue_vue_type_style_index_0_lang.4ef830dc.js";import{M as ee}from"./MultizoneInfo.0d81f8e1.js";import{S as te,a as se}from"./SubscriptionHeader.234f64ae.js";import{T as ne}from"./TabsWidget.d4543219.js";import{W as ie}from"./WarningsWidget.6f0f5eea.js";import"./_commonjsHelpers.f037b798.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.07a221ac.js";import"./ErrorBlock.76c3bcf7.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.5c7147d0.js";import"./TagList.9cda0a7b.js";const oe={name:"ZonesView",components:{AccordionItem:x,AccordionList:K,CodeBlock:U,DataOverview:Q,FrameSkeleton:X,LabelList:$,MultizoneInfo:ee,SubscriptionDetails:te,SubscriptionHeader:se,TabsWidget:ne,WarningsWidget:ie,KBadge:F,KButton:H,KCard:M},data(){return{isLoading:!0,isEmpty:!1,error:null,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Zones present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{key:"warnings",hideLabel:!0}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#config",title:"Config"},{hash:"#warnings",title:"Warnings"}],entity:{},pageSize:P,next:null,warnings:[],subscriptionsReversed:[],codeOutput:null,zonesWithIngress:new Set}},computed:{...R({multicluster:"config/getMulticlusterStatus",globalCpVersion:"config/getVersion"})},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,this.tableDataIsEmpty=!1,this.init()}},beforeMount(){this.init()},methods:{init(){this.multicluster&&this.loadData()},filterTabs(){return this.warnings.length?this.tabs:this.tabs.filter(s=>s.hash!=="#warnings")},tableAction(s){const t=s;this.getEntity(t)},parseData(s){const{zoneInsight:t={},name:n}=s;let g="-",e="",a=!0;return t.subscriptions&&t.subscriptions.length&&t.subscriptions.forEach(i=>{if(i.version&&i.version.kumaCp){g=i.version.kumaCp.version;const{kumaCpGlobalCompatible:d=!0}=i.version.kumaCp;a=d,i.config&&(e=JSON.parse(i.config).store.type)}}),{...s,status:q(t).status,zoneCpVersion:g,storeType:e,hasIngress:this.zonesWithIngress.has(n)?"Yes":"No",hasEgress:this.zonesWithEgress.has(n)?"Yes":"No",withWarnings:!a}},calculateZonesWithIngress(s){const t=new Set;s.forEach(({zoneIngress:{zone:n}})=>{t.add(n)}),this.zonesWithIngress=t},calculateZonesWithEgress(s){const t=new Set;s.forEach(({zoneEgress:{zone:n}})=>{t.add(n)}),this.zonesWithEgress=t},async loadData(s="0"){this.isLoading=!0,this.isEmpty=!1;const t=this.$route.query.ns||null;try{const[{data:n,next:g},{items:e},{items:a}]=await Promise.all([Y({getSingleEntity:p.getZoneOverview.bind(p),getAllEntities:p.getAllZoneOverviews.bind(p),size:this.pageSize,offset:s,query:t}),S({callEndpoint:p.getAllZoneIngressOverviews.bind(p)}),S({callEndpoint:p.getAllZoneEgressOverviews.bind(p)})]);this.next=g,n.length?(this.calculateZonesWithIngress(e),this.calculateZonesWithEgress(a),this.tableData.data=n.map(this.parseData),this.tableDataIsEmpty=!1,this.isEmpty=!1,this.getEntity({name:n[0].name})):(this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0,this.entityIsEmpty=!0)}catch(n){n instanceof Error?error.value=n:console.error(n),this.isEmpty=!0}finally{this.isLoading=!1}},async getEntity(s){var g,e;this.entityIsLoading=!0,this.entityIsEmpty=!0;const t=["type","name"],n=setTimeout(()=>{this.entityIsEmpty=!0,this.entityIsLoading=!1},"500");if(s){this.entityIsEmpty=!1,this.warnings=[];try{const a=await p.getZoneOverview({name:s.name}),i=(e=(g=a.zoneInsight)==null?void 0:g.subscriptions)!=null?e:[];if(this.entity={...G(a,t),"Authentication Type":J(a)},this.subscriptionsReversed=Array.from(i).reverse(),i.length){const{version:d={}}=i[i.length-1],{kumaCp:b={}}=d,I=b.version||"-",{kumaCpGlobalCompatible:v=!0}=b;v||this.warnings.push({kind:j,payload:{zoneCpVersion:I,globalCpVersion:this.globalCpVersion}}),i[i.length-1].config&&(this.codeOutput=JSON.stringify(JSON.parse(i[i.length-1].config),null,2))}}catch(a){console.error(a),this.entity={},this.entityHasError=!0,this.entityIsEmpty=!0}finally{clearTimeout(n)}}this.entityIsLoading=!1}}},ae={class:"zones"},re=f("span",{class:"custom-control-icon"}," \u2190 ",-1),le={key:0},ce={key:1},pe={key:2};function ue(s,t,n,g,e,a){const i=r("MultizoneInfo"),d=r("KButton"),b=r("DataOverview"),I=r("KBadge"),v=r("LabelList"),L=r("SubscriptionHeader"),A=r("SubscriptionDetails"),W=r("AccordionItem"),O=r("AccordionList"),w=r("KCard"),T=r("CodeBlock"),Z=r("WarningsWidget"),B=r("TabsWidget"),V=r("FrameSkeleton");return l(),m("div",ae,[s.multicluster===!1?(l(),h(i,{key:0})):(l(),h(V,{key:1},{default:o(()=>{var k;return[u(b,{"selected-entity-name":(k=e.entity)==null?void 0:k.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.tableDataIsEmpty,"show-warnings":e.tableData.data.some(c=>c.withWarnings),next:e.next,onTableAction:a.tableAction,onLoadData:t[0]||(t[0]=c=>a.loadData(c))},{additionalControls:o(()=>[s.$route.query.ns?(l(),h(d,{key:0,class:"back-button",appearance:"primary",to:{name:"zones"}},{default:o(()=>[re,z(" View All ")]),_:1})):_("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","show-warnings","next","onTableAction"]),e.isEmpty===!1?(l(),h(B,{key:0,"has-error":e.error,"is-loading":e.isLoading,tabs:a.filterTabs(),"initial-tab-override":"overview"},{tabHeader:o(()=>[f("div",null,[f("h3",null," Zone: "+E(e.entity.name),1)])]),overview:o(()=>[u(v,{"has-error":e.entityHasError,"is-loading":e.entityIsLoading,"is-empty":e.entityIsEmpty},{default:o(()=>[f("div",null,[f("ul",null,[(l(!0),m(C,null,D(e.entity,(c,y)=>(l(),m("li",{key:y},[c?(l(),m("h4",le,E(y),1)):_("",!0),y==="status"?(l(),m("p",ce,[u(I,{appearance:c==="Offline"?"danger":"success"},{default:o(()=>[z(E(c),1)]),_:2},1032,["appearance"])])):(l(),m("p",pe,E(c),1))]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])]),insights:o(()=>[u(w,{"border-variant":"noBorder"},{body:o(()=>[u(O,{"initially-open":0},{default:o(()=>[(l(!0),m(C,null,D(e.subscriptionsReversed,(c,y)=>(l(),h(W,{key:y},{"accordion-header":o(()=>[u(L,{details:c},null,8,["details"])]),"accordion-content":o(()=>[u(A,{details:c},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),config:o(()=>[e.codeOutput?(l(),h(w,{key:0,"border-variant":"noBorder"},{body:o(()=>[u(T,{id:"code-block-zone-config",language:"json",code:e.codeOutput,"is-searchable":"","query-key":"zone-config"},null,8,["code"])]),_:1})):_("",!0)]),warnings:o(()=>[u(Z,{warnings:e.warnings},null,8,["warnings"])]),_:1},8,["has-error","is-loading","tabs"])):_("",!0)]}),_:1}))])}const Ce=N(oe,[["render",ue]]);export{Ce as default};
