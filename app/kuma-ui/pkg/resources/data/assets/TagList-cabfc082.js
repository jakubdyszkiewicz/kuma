import{P as f}from"./kongponents.es-dc2561df.js";import{d as b,u as g,D as h,c as y,o as r,e as i,F as k,j as x,a as l,w as p,i as L,g as w,t as m,k as T,b as B}from"./index-0e7fcb41.js";import{h as j}from"./RouteView.vue_vue_type_script_setup_true_lang-8a151e68.js";function z(o){return Object.entries(o??{}).map(([s,a])=>({label:s,value:a}))}const C={class:"tag-list"},D=b({__name:"TagList",props:{tags:{type:Object,required:!0}},setup(o){const s=o,a=g(),c=h(),_=y(()=>(Array.isArray(s.tags)?s.tags:z(s.tags)).map(n=>{const{label:t,value:u}=n,v=d(n);return{label:t,value:u,route:v}}));function d(e){if(e.value!=="*")try{switch(e.label){case"kuma.io/zone":return c.resolve({name:"zone-cp-detail-view",params:{zone:e.value}});case"kuma.io/service":return"mesh"in a.params?c.resolve({name:"service-detail-view",params:{mesh:a.params.mesh,service:e.value}}):void 0;default:return}}catch{return}}return(e,n)=>(r(),i("span",C,[(r(!0),i(k,null,x(_.value,(t,u)=>(r(),l(B(f),{key:u,class:"tag-badge"},{default:p(()=>[(r(),l(L(t.route?"router-link":"span"),{to:t.route},{default:p(()=>[w(m(t.label)+":",1),T("b",null,m(t.value),1)]),_:2},1032,["to"]))]),_:2},1024))),128))]))}});const N=j(D,[["__scopeId","data-v-2e356c8b"]]);export{N as T};