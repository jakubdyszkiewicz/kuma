var Y=Object.defineProperty;var Z=(t,l,n)=>l in t?Y(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n;var w=(t,l,n)=>(Z(t,typeof l!="symbol"?l+"":l,n),n);import{d as G,ad as X,C as y,M as T,a7 as I,o as v,c as m,m as f,f as d,e as q,q as k,K as A,ap as ee,r as te,t as S,aq as ne,ar as ie,n as B,F as se,H as le,p as M,as as oe,at as re,au as ue,av as ae,x as ce,y as de,_ as fe}from"./index-FFDA7vTv.js";function ge(t,l,n){return Math.max(l,Math.min(t,n))}const pe=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class ve{constructor(l,n){w(this,"commands");w(this,"keyMap");w(this,"boundTriggerShortcuts");this.commands=n,this.keyMap=Object.fromEntries(Object.entries(l).map(([h,u])=>[h.toLowerCase(),u])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(l){me(l,this.keyMap,this.commands)}}function me(t,l,n){const h=he(t.code),u=[t.ctrlKey?"ctrl":"",t.shiftKey?"shift":"",t.altKey?"alt":"",h].filter(b=>b!=="").join("+"),s=l[u];if(!s)return;const i=n[s];i.isAllowedContext&&!i.isAllowedContext(t)||(i.shouldPreventDefaultAction&&t.preventDefault(),!(i.isDisabled&&i.isDisabled())&&i.trigger(t))}function he(t){return pe.includes(t)?"":t.replace(/^Key/,"").toLowerCase()}function be(t,l){const n=" "+t,h=n.matchAll(/ ([-\s\w]+):\s*/g),u=[];for(const s of Array.from(h)){if(s.index===void 0)continue;const i=ye(s[1]);if(l.length>0&&!l.includes(i))throw new Error(`Unknown field “${i}”. Known fields: ${l.join(", ")}`);const b=s.index+s[0].length,a=n.substring(b);let c;if(/^\s*["']/.test(a)){const g=a.match(/['"](.*?)['"]/);if(g!==null)c=g[1];else throw new Error(`Quote mismatch for field “${i}”.`)}else{const g=a.indexOf(" "),_=g===-1?a.length:g;c=a.substring(0,_)}c!==""&&u.push([i,c])}return u}function ye(t){return t.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(l,n)=>n===0?l:l.substring(1).toUpperCase())}const j=t=>(ce("data-v-f8c4e95f"),t=t(),de(),t),ke=j(()=>f("span",{class:"visually-hidden"},"Focus filter",-1)),Se={class:"k-filter-icon"},_e=["for"],Ce=["id","placeholder"],xe={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},we={class:"k-suggestion-list"},Te={key:0,class:"k-filter-bar-error"},Fe={key:0},Ie=["title","data-filter-field"],qe={class:"visually-hidden"},Ae=j(()=>f("span",{class:"visually-hidden"},"Clear query",-1)),Me=G({__name:"FilterBar",props:{id:{type:String,required:!1,default:()=>X("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(t,{emit:l}){const n=t,h=l,u=y(null),s=y(null),i=y(n.query),b=y([]),a=y(null),c=y(!1),p=y(-1),g=T(()=>Object.keys(n.fields)),_=T(()=>Object.entries(n.fields).slice(0,5).map(([e,o])=>({fieldName:e,...o}))),N=T(()=>g.value.length>0?`Filter by ${g.value.join(", ")}`:"Filter"),O=T(()=>n.placeholder??N.value);I(()=>b.value,function(e,o){W(e,o)||(a.value=null,h("fields-change",{fields:e,query:i.value}))}),I(()=>n.query,()=>{i.value=n.query,C(i.value)},{immediate:!0}),I(()=>i.value,function(){i.value===""&&(a.value=null)});const D={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},z={submitQuery:{trigger:E,isAllowedContext(e){return s.value!==null&&e.composedPath().includes(s.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:K,isAllowedContext(e){return s.value!==null&&e.composedPath().includes(s.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:V,isAllowedContext(e){return s.value!==null&&e.composedPath().includes(s.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:F,isAllowedContext(e){return u.value!==null&&e.composedPath().includes(u.value)}}};function Q(){const e=new ve(D,z);ue(function(){e.registerListener()}),ae(function(){e.unRegisterListener()}),C(i.value)}Q();function $(e){const o=e.target;C(o.value)}function E(){if(s.value instanceof HTMLInputElement)if(p.value===-1)C(s.value.value),c.value=!1;else{const e=_.value[p.value].fieldName;e&&P(s.value,e)}}function K(){L(1)}function V(){L(-1)}function L(e){p.value=ge(p.value+e,-1,_.value.length-1)}function H(){s.value instanceof HTMLInputElement&&s.value.focus()}function U(e){const r=e.currentTarget.getAttribute("data-filter-field");r&&s.value instanceof HTMLInputElement&&P(s.value,r)}function P(e,o){const r=i.value===""||i.value.endsWith(" ")?"":" ";i.value+=r+o+":",e.focus(),p.value=-1}function R(){i.value="",s.value instanceof HTMLInputElement&&(s.value.value="",s.value.focus(),C(""))}function J(e){e.relatedTarget===null&&F(),u.value instanceof HTMLElement&&e.relatedTarget instanceof Node&&!u.value.contains(e.relatedTarget)&&F()}function F(){c.value=!1}function C(e){a.value=null;try{const o=be(e,g.value);o.sort((r,x)=>r[0].localeCompare(x[0])),b.value=o}catch(o){if(o instanceof Error)a.value=o,c.value=!0;else throw o}}function W(e,o){return JSON.stringify(e)===JSON.stringify(o)}return(e,o)=>(v(),m("div",{ref_key:"filterBar",ref:u,class:"k-filter-bar","data-testid":"k-filter-bar"},[f("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:H},[ke,d(),f("span",Se,[q(k(ee),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:k(A)},null,8,["size"])])]),d(),f("label",{for:`${n.id}-filter-bar-input`,class:"visually-hidden"},[te(e.$slots,"default",{},()=>[d(S(N.value),1)],!0)],8,_e),d(),ne(f("input",{id:`${n.id}-filter-bar-input`,ref_key:"filterInput",ref:s,"onUpdate:modelValue":o[0]||(o[0]=r=>i.value=r),class:"k-filter-bar-input",type:"text",placeholder:O.value,"data-testid":"k-filter-bar-filter-input",onFocus:o[1]||(o[1]=r=>c.value=!0),onBlur:J,onChange:$},null,40,Ce),[[ie,i.value]]),d(),c.value?(v(),m("div",xe,[f("div",we,[a.value!==null?(v(),m("p",Te,S(a.value.message),1)):(v(),m("button",{key:1,class:B(["k-submit-query-button",{"k-submit-query-button-is-selected":p.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:E},`
          Submit `+S(i.value),3)),d(),(v(!0),m(se,null,le(_.value,(r,x)=>(v(),m("div",{key:`${n.id}-${x}`,class:B(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":p.value===x}])},[f("b",null,S(r.fieldName),1),r.description!==""?(v(),m("span",Fe,": "+S(r.description),1)):M("",!0),d(),f("button",{class:"k-apply-suggestion-button",title:`Add ${r.fieldName}:`,type:"button","data-filter-field":r.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:U},[f("span",qe,"Add "+S(r.fieldName)+":",1),d(),q(k(oe),{decorative:"","hide-title":"",size:k(A)},null,8,["size"])],8,Ie)],2))),128))])])):M("",!0),d(),i.value!==""?(v(),m("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:R},[Ae,d(),q(k(re),{decorative:"","hide-title":"",size:k(A)},null,8,["size"])])):M("",!0)],512))}}),Le=fe(Me,[["__scopeId","data-v-f8c4e95f"]]);export{Le as F};
