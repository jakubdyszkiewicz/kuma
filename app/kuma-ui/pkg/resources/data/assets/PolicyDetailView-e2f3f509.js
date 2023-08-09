import{d as f,j as x,r as q,o as s,e as u,g as y,X as S,Z as B,q as v,h as l,w as r,a as i,F as k,s as C,t as V,b as _}from"./index-fd0688ab.js";import{r as P,E as w,s as $,p as b,m as A,g as L,e as N,A as T,_ as D}from"./RouteView.vue_vue_type_script_setup_true_lang-b0370148.js";import{_ as E}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-34c00500.js";import{T as F}from"./TabsWidget-9d1f7c85.js";import{_ as j}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0a897f5f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4bbdcb3f.js";import"./CopyButton-ce689fe8.js";const I=v("h2",null,"Dataplanes",-1),O=f({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(d){const t=d,o=x("");return(h,c)=>{const e=q("RouterLink");return s(),u(k,null,[I,y(),S(v("input",{id:"dataplane-search","onUpdate:modelValue":c[0]||(c[0]=a=>o.value=a),type:"text",class:"k-input mt-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[B,o.value]]),y(),l(b,{src:`/meshes/${t.mesh}/policy-path/${t.policyPath}/policy/${t.policyName}/dataplanes`},{default:r(({data:a,isLoading:n,error:p})=>[n?(s(),i(P,{key:0})):p?(s(),i(w,{key:1,error:p},null,8,["error"])):a===void 0||a.items.length===0?(s(),i($,{key:2})):(s(!0),u(k,{key:3},C(a.items.filter(m=>m.dataplane.name.toLowerCase().includes(o.value.toLowerCase())),(m,g)=>(s(),u("p",{key:g,class:"mt-2","data-testid":"dataplane-name"},[l(e,{to:{name:"data-plane-detail-view",params:{mesh:m.dataplane.mesh,dataPlane:m.dataplane.name}}},{default:r(()=>[y(V(m.dataplane.name),1)]),_:2},1032,["to"])]))),128))]),_:1},8,["src"])],64)}}}),R={class:"policy-details kcard-border"},K=f({__name:"PolicyDetails",props:{policy:{type:Object,required:!0},path:{type:String,required:!0}},setup(d){const t=d,o=A(),h=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}];async function c(e){const{name:a,mesh:n}=t.policy,p=t.path;return await o.getSinglePolicyEntity({name:a,mesh:n,path:p},e)}return(e,a)=>(s(),u("div",R,[l(F,{tabs:h},{overview:r(()=>[l(E,{id:"code-block-policy",resource:t.policy,"resource-fetcher":c,"is-searchable":""},null,8,["resource"])]),"affected-dpps":r(()=>[l(O,{mesh:t.policy.mesh,"policy-name":t.policy.name,"policy-path":t.path},null,8,["mesh","policy-name","policy-path"])]),_:1})]))}}),H=f({__name:"PolicyDetailView",setup(d){const{t}=L(),o=N();return(h,c)=>(s(),i(D,{name:"policy-detail-view","data-testid":"policy-detail-view"},{default:r(({route:e})=>[l(T,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:_(t)("policies.routes.item.breadcrumbs")}]},{title:r(()=>{var a;return[v("h2",null,[l(j,{title:_(t)("policies.routes.item.title",{name:e.params.policy,type:((a=_(o).state.policyTypesByPath[e.params.policyPath])==null?void 0:a.name)??e.params.policyPath}),render:!0},null,8,["title"])])]}),default:r(()=>[y(),l(b,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}`},{default:r(({data:a,isLoading:n,error:p})=>[n?(s(),i(P,{key:0})):p?(s(),i(w,{key:1,error:p},null,8,["error"])):a===void 0?(s(),i($,{key:2})):(s(),i(K,{key:3,policy:a,path:e.params.policyPath,"data-testid":"detail-view-details"},null,8,["policy","path"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{H as default};