import{u as T,D as g,F as C}from"./kongponents.es-d49ba82d.js";import{d as y,o as r,a as _,w as u,h as p,b as n,g as d,n as f,k as S,t as x,e as b,i as h}from"./index-f0e2f93b.js";import{f as m,i as B}from"./RouteView.vue_vue_type_script_setup_true_lang-0ac8938c.js";const v={class:"visually-hidden"},q=y({__name:"CopyButton",props:{text:{type:String,required:!1,default:""},getText:{type:Function,required:!1,default:null},copyText:{type:String,required:!1,default:"Copy"},tooltipSuccessText:{type:String,required:!1,default:"Copied code!"},tooltipFailText:{type:String,required:!1,default:"Failed to copy!"}},setup(l){const t=l;async function c(s,i){const e=s.currentTarget;let o=!1;try{const a=t.getText?await t.getText():t.text;o=await i(a)}catch(a){o=!1,console.error(a)}finally{const a=o?t.tooltipSuccessText:t.tooltipFailText;e instanceof HTMLButtonElement&&(e.setAttribute("data-tooltip-copy-success",String(o)),e.setAttribute("data-tooltip-text",a),window.setTimeout(function(){e instanceof HTMLButtonElement&&e.removeAttribute("data-tooltip-text")},1500))}}return(s,i)=>(r(),_(n(C),null,{default:u(({copyToClipboard:e})=>[p(n(g),{appearance:"outline",class:"copy-button non-visual-button","data-testid":"copy-button","is-rounded":!1,size:"small",title:t.copyText,type:"button",onClick:o=>c(o,e)},{default:u(()=>[p(n(T),{color:"currentColor",icon:"copy",size:"18",title:t.copyText},null,8,["title"]),d(),f(s.$slots,"default",{},()=>[S("span",v,x(t.copyText),1)],!0)]),_:2},1032,["title","onClick"])]),_:3}))}});const w=m(q,[["__scopeId","data-v-ed92fcab"]]),k={class:"copy-button-wrapper"},F=y({__name:"TextWithCopyButton",props:{text:{type:String,required:!0},tag:{type:String,required:!1,default:"span"}},setup(l){const t=l,c=B();return(s,i)=>(r(),b("div",k,[f(s.$slots,"default",{},()=>[(r(),_(h(t.tag),null,{default:u(()=>[d(x(t.text),1)]),_:1}))],!0),d(),p(w,{text:t.text,"copy-text":n(c).t("common.copyText"),"tooltip-success-text":n(c).t("common.copySuccessText")},null,8,["text","copy-text","tooltip-success-text"])]))}});const E=m(F,[["__scopeId","data-v-069e891c"]]);export{w as C,E as T};