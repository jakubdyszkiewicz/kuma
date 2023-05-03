import{a as O}from"./kongponents.es-076ee2b0.js";import{L as B}from"./LoadingBox-35efa824.js";import{O as S,a as T,b as F}from"./OnboardingPage-322217cb.js";import{S as N}from"./StatusBadge-7bc6b4c1.js";import{u as E}from"./index-1b3a7be4.js";import{d as I,r as b,c as w,a1 as H,A as L,e as y,w as t,o as s,g as n,H as C,b as o,i as l,t as u,j as d,h as k,F as M}from"./index-488801fa.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./store-a000df5c.js";const V={key:0,class:"status-loading-box mb-4"},j={key:1},z={class:"mb-4"},J=I({__name:"DataplanesOverview",setup(K){const p=E(),x=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=b({total:0,data:[]}),i=b(null),D=w(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),m=w(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);H(function(){f()}),v();function f(){i.value!==null&&window.clearTimeout(i.value)}async function v(){let r=!1;const c=[];try{const{items:a}=await p.getAllDataplanes({size:10});if(Array.isArray(a))for(const P of a){const{name:_,mesh:g}=P,A=await p.getDataplaneOverviewFromMesh({mesh:g,name:_}),h=L(A.dataplaneInsight);h==="offline"&&(r=!0),c.push({status:h,name:_,mesh:g})}}catch(a){console.error(a)}e.value.data=c,e.value.total=e.value.data.length,r&&(f(),i.value=window.setTimeout(v,1e3))}return(r,c)=>(s(),y(S,null,{header:t(()=>[n(T,null,C({title:t(()=>[l("p",null,u(o(D)),1)]),_:2},[o(m)!==null?{name:"description",fn:t(()=>[l("p",null,u(o(m)),1)]),key:"0"}:void 0]),1024)]),content:t(()=>[e.value.data.length===0?(s(),d("div",V,[n(B)])):(s(),d("div",j,[l("p",z,[l("b",null,"Found "+u(e.value.data.length)+" DPPs:",1)]),k(),n(o(O),{class:"mb-4",fetcher:()=>e.value,headers:x,"disable-pagination":""},{status:t(({rowValue:a})=>[a?(s(),y(N,{key:0,status:a},null,8,["status"])):(s(),d(M,{key:1},[k(`
              —
            `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[n(F,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1}))}});const $=R(J,[["__scopeId","data-v-9ed5a755"]]);export{$ as default};