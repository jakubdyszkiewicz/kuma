import{K as B}from"./index-9dd3e7d3.js";import{d as $,l as I,E,a as d,o,c as P,e as r,w as a,F as V,B as L,n as N,q as l,f as i,t as m,p as y,b as n,s as f,V as K,_ as A,G as q}from"./index-57969804.js";import{D as F,A as D}from"./AppCollection-a51c3abc.js";import{E as x}from"./ErrorBlock-4916afd1.js";import{P as O}from"./PolicyTypeTag-1eaf2bc8.js";import{_ as G}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-1df62ed5.js";import{_ as M}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-724f73d8.js";import{S as U}from"./SummaryView-63a46d0e.js";import"./TextWithCopyButton-d6fe657f.js";import"./CopyButton-6b38cf98.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0a3eaa51.js";const Z={class:"policy-list-content"},j={class:"policy-count"},H={class:"policy-list"},J={class:"stack"},Q={class:"description"},W={class:"description-content"},X={class:"description-actions"},Y={class:"visually-hidden"},ee={key:0},te=$({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{},isSelectedRow:{type:[Function,null],default:null}},emits:["change"],setup(R,{emit:T}){const{t:p}=I(),b=E(),e=R,_=T;return(S,v)=>{const h=d("RouterLink"),t=d("KCard"),g=d("KBadge");return o(),P("div",Z,[r(t,{class:"policy-type-list","data-testid":"policy-type-list"},{body:a(()=>[(o(!0),P(V,null,L(e.policyTypes,(c,u)=>{var s,w,C;return o(),P("div",{key:u,class:N(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":c.path===e.currentPolicyType.path}])},[r(h,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:l(b).params.mesh,policyPath:c.path}},"data-testid":`policy-type-link-${c.name}`},{default:a(()=>[i(m(c.name),1)]),_:2},1032,["to","data-testid"]),i(),y("div",j,m(((C=(w=(s=e.meshInsight)==null?void 0:s.policies)==null?void 0:w[c.name])==null?void 0:C.total)??0),1)],2)}),128))]),_:1}),i(),y("div",H,[y("div",J,[r(t,null,{body:a(()=>[y("div",Q,[y("div",W,[y("h3",null,[r(O,{"policy-type":e.currentPolicyType.name},{default:a(()=>[i(m(l(p)("policies.collection.title",{name:e.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),i(),y("p",null,m(l(p)(`policies.type.${e.currentPolicyType.name}.description`,void 0,{defaultMessage:l(p)("policies.collection.description")})),1)]),i(),y("div",X,[e.currentPolicyType.isExperimental?(o(),n(g,{key:0,appearance:"warning"},{default:a(()=>[i(m(l(p)("policies.collection.beta")),1)]),_:1})):f("",!0),i(),e.currentPolicyType.isInbound?(o(),n(g,{key:1,appearance:"neutral"},{default:a(()=>[i(m(l(p)("policies.collection.inbound")),1)]),_:1})):f("",!0),i(),e.currentPolicyType.isOutbound?(o(),n(g,{key:2,appearance:"neutral"},{default:a(()=>[i(m(l(p)("policies.collection.outbound")),1)]),_:1})):f("",!0),i(),r(F,{href:l(p)("policies.href.docs",{name:e.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:a(()=>[y("span",Y,m(l(p)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),i(),r(t,null,{body:a(()=>{var c,u;return[e.policyError!==void 0?(o(),n(x,{key:0,error:e.policyError},null,8,["error"])):(o(),n(D,{key:1,class:"policy-collection","data-testid":"policy-collection","empty-state-message":l(p)("common.emptyState.message",{type:`${e.currentPolicyType.name} policies`}),"empty-state-cta-to":l(p)("policies.href.docs",{name:e.currentPolicyType.name}),"empty-state-cta-text":l(p)("common.documentation"),headers:[{label:"Name",key:"name"},...e.currentPolicyType.isTargetRefBased?[{label:"Target ref",key:"targetRef"}]:[],{label:"Details",key:"details",hideLabel:!0}],"page-number":e.pageNumber,"page-size":e.pageSize,total:(c=e.policyCollection)==null?void 0:c.total,items:(u=e.policyCollection)==null?void 0:u.items,error:e.policyError,"is-selected-row":e.isSelectedRow,onChange:v[0]||(v[0]=s=>_("change",s))},{name:a(({rowValue:s})=>[r(h,{to:{name:"policy-summary-view",params:{mesh:l(b).params.mesh,policyPath:e.currentPolicyType.path,policy:s},query:{page:e.pageNumber,size:e.pageSize}}},{default:a(()=>[i(m(s),1)]),_:2},1032,["to"])]),targetRef:a(({row:s})=>[e.currentPolicyType.isTargetRefBased?(o(),n(g,{key:0,appearance:"neutral"},{default:a(()=>[i(m(s.spec.targetRef.kind),1),s.spec.targetRef.name?(o(),P("span",ee,[i(":"),y("b",null,m(s.spec.targetRef.name),1)])):f("",!0)]),_:2},1024)):(o(),P(V,{key:1},[i(m(l(p)("common.detail.none")),1)],64))]),details:a(({row:s})=>[r(h,{class:"details-link","data-testid":"details-link",to:{name:"policy-detail-view",params:{mesh:s.mesh,policyPath:e.currentPolicyType.path,policy:s.name}}},{default:a(()=>[i(m(l(p)("common.collection.details_link"))+" ",1),r(l(K),{display:"inline-block",decorative:"",size:l(B)},null,8,["size"])]),_:2},1032,["to"])]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","is-selected-row"]))]}),_:1})])])])}}});const ae=A(te,[["__scopeId","data-v-949a9abb"]]),ue=$({__name:"PolicyListView",setup(R){return(T,p)=>{const b=d("RouteTitle"),e=d("RouterView"),_=d("DataSource"),S=d("AppView"),v=d("RouteView");return o(),n(_,{src:"/me"},{default:a(({data:h})=>[h?(o(),n(v,{key:0,name:"policy-list-view",params:{page:1,size:h.pageSize,mesh:"",policyPath:"",policy:""}},{default:a(({route:t,t:g})=>[r(S,null,{title:a(()=>[y("h2",null,[r(b,{title:g("policies.routes.items.title")},null,8,["title"])])]),default:a(()=>[i(),r(_,{src:"/*/policy-types"},{default:a(({data:c,error:u})=>[u?(o(),n(x,{key:0,error:u},null,8,["error"])):c===void 0?(o(),n(M,{key:1})):c.policies.length===0?(o(),n(G,{key:2})):(o(),n(_,{key:3,src:`/meshes/${t.params.mesh}/policy-path/${t.params.policyPath}?page=${t.params.page}&size=${t.params.size}`},{default:a(({data:s,error:w})=>[r(_,{src:`/mesh-insights/${t.params.mesh}`},{default:a(({data:C})=>[(o(),n(ae,{key:t.params.policyPath,"page-number":parseInt(t.params.page),"page-size":parseInt(t.params.size),"current-policy-type":c.policies.find(k=>k.path===t.params.policyPath)??c.policies[0],"policy-types":c.policies,"mesh-insight":C,"policy-collection":s,"policy-error":w,"is-selected-row":k=>k.name===t.params.policy,onChange:t.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","is-selected-row","onChange"])),i(),t.params.policy?(o(),n(e,{key:0},{default:a(k=>[r(U,{onClose:z=>t.replace({name:"policy-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath},query:{page:t.params.page,size:t.params.size}})},{default:a(()=>[(o(),n(q(k.Component),{name:t.params.policy,policy:s==null?void 0:s.items.find(z=>z.name===t.params.policy),"policy-type":c.policies.find(z=>z.path===t.params.policyPath)},null,8,["name","policy","policy-type"]))]),_:2},1032,["onClose"])]),_:2},1024)):f("",!0)]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["params"])):f("",!0)]),_:1})}}});export{ue as default};
