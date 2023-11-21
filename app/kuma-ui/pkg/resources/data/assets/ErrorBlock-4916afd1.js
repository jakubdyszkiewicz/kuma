import{a as h}from"./index-9dd3e7d3.js";import{d as b,l as B,N as E,a5 as _,o as a,c as o,e as i,w as l,p as n,q as t,f as r,r as k,a6 as m,t as s,b as g,s as c,F as x,B as N,a7 as C,_ as I}from"./index-57969804.js";import{T as S}from"./TextWithCopyButton-d6fe657f.js";import{_ as V}from"./WarningIcon.vue_vue_type_script_setup_true_lang-0a3eaa51.js";const $={"data-testid":"error-state",class:"error-block"},q={class:"error-block-header"},w={class:"error-block-title"},A={key:0,class:"badge-list"},T={class:"error-block-message"},z={key:1},F={key:2,"data-testid":"error-invalid-parameters"},P=b({__name:"ErrorBlock",props:{error:{type:Error,required:!0},badgeAppearance:{type:String,required:!1,default:"warning"}},setup(e){const{t:p}=B(),d=e,f=E(()=>d.error instanceof _?d.error.invalidParameters:[]);return(u,D)=>(a(),o("div",$,[i(t(C),{"cta-is-hidden":""},{title:l(()=>[n("div",q,[n("div",w,[i(V,{display:"inline-block",size:t(h)},null,8,["size"]),r(),k(u.$slots,"default",{},()=>[n("p",null,s(e.error instanceof t(_)?e.error.detail:t(p)("common.error_state.title")),1)],!0)]),r(),e.error instanceof t(_)?(a(),o("span",A,[i(t(m),{appearance:d.badgeAppearance,"data-testid":"error-status"},{default:l(()=>[r(s(e.error.status),1)]),_:1},8,["appearance"]),r(),e.error.type?(a(),g(t(m),{key:0,appearance:"neutral","data-testid":"error-type"},{default:l(()=>[r(`
              type: `+s(e.error.type),1)]),_:1})):c("",!0),r(),e.error.instance?(a(),g(t(m),{key:1,appearance:"neutral","data-testid":"error-trace"},{default:l(()=>[r(`
              trace: `),i(S,{text:e.error.instance},null,8,["text"])]),_:1})):c("",!0)])):c("",!0)])]),message:l(()=>[n("div",T,[u.$slots.message?k(u.$slots,"message",{key:0},void 0,!0):(a(),o("p",z,s(e.error.message),1)),r(),f.value.length>0?(a(),o("ul",F,[(a(!0),o(x,null,N(f.value,(y,v)=>(a(),o("li",{key:v},[r(s(t(p)("common.error_state.field"))+" ",1),n("b",null,[n("code",null,s(y.field),1)]),r(": "+s(y.reason),1)]))),128))])):c("",!0)])]),_:3})]))}});const W=I(P,[["__scopeId","data-v-3aafad7e"]]);export{W as E};
