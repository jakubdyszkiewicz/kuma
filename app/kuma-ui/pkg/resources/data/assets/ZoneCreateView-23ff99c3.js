import{d as K,t as _,v as ce,V as ue,o as c,j as v,m as t,h as i,w as r,g as h,i as e,H as x,aw as de,at as O,aA as me,aB as j,l as n,U as S,a3 as pe,L as P,e as W,f as I,D as o,z as J,B as Q,q as Y,R as fe,aa as _e,aC as T,r as R,A as ve,C as be,a1 as V,k,F as D,G as ze,aD as ge,aE as ke,E as he,X as ye,N as M,aF as H,aG as Ee,_ as Ce}from"./index-c16f1f82.js";import{_ as y}from"./CodeBlock.vue_vue_type_style_index_0_lang-081c9a90.js";import{g as Ie}from"./dataplane-30467516.js";const we=["data-test-state"],$e={class:"scanner-content"},Se={class:"mr-1"},Ne=K({__name:"EntityScanner",props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},emits:["hide-siblings"],setup(p,{emit:s}){const a=p,g=_(0),z=_(!1),E=_(!1),d=_(null);ce(function(){C()}),ue(function(){w()});function C(){z.value=!0,E.value=!1,w(),d.value=window.setInterval(async()=>{g.value++,await a.loaderFunction(),(g.value===a.retries||a.canComplete===!0)&&(w(),z.value=!1,E.value=!0,s("hide-siblings",!0))},a.interval)}function w(){d.value!==null&&window.clearInterval(d.value)}return(m,N)=>(c(),v("div",{class:"scanner","data-test-state":z.value?"waiting":p.hasError?"error":"success"},[t("div",$e,[i(e(pe),{"cta-is-hidden":""},{title:r(()=>[t("span",Se,[z.value?(c(),h(e(x),{key:0,icon:"spinner",color:e(de),size:e(O)},null,8,["color","size"])):p.hasError?(c(),h(e(x),{key:1,icon:"errorFilled",color:e(me),size:e(O)},null,8,["color","size"])):(c(),h(e(x),{key:2,icon:"circleCheck",color:e(j),size:e(O)},null,8,["color","size"]))]),n(),z.value?S(m.$slots,"loading-title",{key:0}):p.hasError?S(m.$slots,"error-title",{key:1}):S(m.$slots,"complete-title",{key:2})]),message:r(()=>[z.value?S(m.$slots,"loading-content",{key:0}):p.hasError?S(m.$slots,"error-content",{key:1}):S(m.$slots,"complete-content",{key:2})]),_:3})])],8,we))}}),q=p=>(J("data-v-c508bc46"),p=p(),Q(),p),Ze=q(()=>t("span",{class:"step-number"},"1",-1)),Ve={href:"https://helm.sh/docs/intro/install/"},qe=q(()=>t("span",{class:"step-number"},"2",-1)),Ae=q(()=>t("p",null,"On your local machine, create a namespace in your Kubernetes cluster and pull down the kong Helm repo.",-1)),Te=q(()=>t("span",{class:"step-number"},"3",-1)),De=q(()=>t("span",{class:"step-number"},"4",-1)),Ke={class:"k-input-label mt-4"},Le={class:"mt-4"},Be=K({__name:"ZoneCreateKubernetesInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},zoneIngressEnabled:{type:Boolean,required:!0},zoneEgressEnabled:{type:Boolean,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(p){const s=p,a=P(),g=W(),z=I(()=>a.t("zones.form.kubernetes.secret.createSecretCommand",{token:s.base64EncodedToken}).trim()),E=I(()=>{const d={zoneName:s.zoneName,globalKdsAddress:s.globalKdsAddress,zoneIngressEnabled:String(s.zoneIngressEnabled),zoneEgressEnabled:String(s.zoneEgressEnabled)};return typeof g.params.virtualControlPlaneId=="string"&&(d.controlPlaneId=g.params.virtualControlPlaneId),a.t("zones.form.kubernetes.connectZone.config",d).trim()});return(d,C)=>(c(),v("div",null,[t("h3",null,[Ze,n(" "+o(e(a).t("zones.form.kubernetes.prerequisites.title")),1)]),n(),t("ul",null,[t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.prerequisites.step1Label"))+o(s.zoneIngressEnabled?" "+e(a).t("zones.form.kubernetes.prerequisites.step1LabelAddendum"):""),1),n(`:
        `+o(e(a).t("zones.form.kubernetes.prerequisites.step1Description",{productName:e(a).t("common.product.name")})),1)]),n(),t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.prerequisites.step2Label")),1),n(`:
        `+o(e(a).t("zones.form.kubernetes.prerequisites.step2Description")),1)]),n(),t("li",null,[t("a",Ve,o(e(a).t("zones.form.kubernetes.prerequisites.step3LinkTitle")),1),n(" "+o(e(a).t("zones.form.kubernetes.prerequisites.step3Tail")),1)])]),n(),t("h3",null,[qe,n(" "+o(e(a).t("zones.form.kubernetes.helm.title")),1)]),n(),Ae,n(),t("ol",null,[t("li",null,[n(o(e(a).t("zones.form.kubernetes.helm.step1Description"))+" ",1),i(y,{id:"zone-kubernetes-create-namespace",class:"mt-4",code:e(a).t("zones.form.kubernetes.helm.step1Command"),language:"bash"},null,8,["code"])]),n(),t("li",null,[n(o(e(a).t("zones.form.kubernetes.helm.step2Description"))+" ",1),i(y,{id:"zone-kubernetes-add-charts-repo",class:"mt-4",code:e(a).t("zones.form.kubernetes.helm.step2Command"),language:"bash"},null,8,["code"])]),n(),t("li",null,[n(o(e(a).t("zones.form.kubernetes.helm.step3Description"))+" ",1),i(y,{id:"zone-kubernetes-repo-update",class:"mt-4",code:e(a).t("zones.form.kubernetes.helm.step3Command"),language:"bash"},null,8,["code"])])]),n(),t("h3",null,[Te,n(" "+o(e(a).t("zones.form.kubernetes.secret.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.kubernetes.secret.createSecretDescription")),1),n(),i(y,{id:"zone-kubernetes-create-secret",class:"mt-4",code:z.value,language:"bash"},null,8,["code"]),n(),t("h3",null,[De,n(" "+o(e(a).t("zones.form.kubernetes.connectZone.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.kubernetes.connectZone.configDescription")),1),n(),t("span",Ke,o(e(a).t("zones.form.kubernetes.connectZone.configFileName")),1),n(),i(y,{id:"zone-kubernetes-config-code-block","data-testid":"zone-kubernetes-config",code:E.value,language:"yaml"},null,8,["code"]),n(),t("p",Le,o(e(a).t("zones.form.kubernetes.connectZone.connectDescription")),1),n(),i(y,{id:"zone-kubernetes-command-code-block",class:"mt-4",code:e(a).t("zones.form.kubernetes.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}});const Ue=Y(Be,[["__scopeId","data-v-c508bc46"]]),ee=p=>(J("data-v-7b3b73f1"),p=p(),Q(),p),Fe=ee(()=>t("span",{class:"step-number"},"1",-1)),xe=ee(()=>t("span",{class:"step-number"},"2",-1)),Oe={class:"k-input-label mt-4"},Re={class:"mt-4"},Pe=K({__name:"ZoneCreateUniversalInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},token:{type:String,required:!0}},setup(p){const s=p,a=P(),g=W(),z=I(()=>a.t("zones.form.universal.saveToken.saveTokenCommand",{token:s.token}).trim()),E=I(()=>{const d={zoneName:s.zoneName,globalKdsAddress:s.globalKdsAddress};return typeof g.params.virtualControlPlaneId=="string"&&(d.controlPlaneId=g.params.virtualControlPlaneId),a.t("zones.form.universal.connectZone.config",d).trim()});return(d,C)=>(c(),v("div",null,[t("h3",null,[Fe,n(" "+o(e(a).t("zones.form.universal.saveToken.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.universal.saveToken.saveTokenDescription")),1),n(),i(y,{id:"zone-kubernetes-token",class:"mt-4",code:z.value,language:"bash"},null,8,["code"]),n(),t("h3",null,[xe,n(" "+o(e(a).t("zones.form.universal.connectZone.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.universal.connectZone.configDescription")),1),n(),t("span",Oe,o(e(a).t("zones.form.universal.connectZone.configFileName")),1),n(),i(y,{id:"zone-universal-config-code-block","data-testid":"zone-universal-config",class:"mt-4",code:E.value,language:"yaml"},null,8,["code"]),n(),t("p",Re,o(e(a).t("zones.form.universal.connectZone.connectDescription")),1),n(),i(y,{id:"zone-universal-connect-command-code-block",class:"mt-4",code:e(a).t("zones.form.universal.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}});const Xe=Y(Pe,[["__scopeId","data-v-7b3b73f1"]]),Ge={class:"form-wrapper"},Me={class:"form"},He={class:"form-header"},je={class:"form-title"},We={class:"text-gradient"},Je={key:0},Qe={key:0},Ye={class:"fact-list"},en={class:"form-section"},nn={class:"form-section__header"},tn={class:"form-section-title"},on={key:0},sn={class:"form-section__content"},an={class:"form-section","data-testid":"connect-zone-instructions"},rn={class:"form-section__header"},ln={class:"form-section-title"},cn={key:0},un={class:"form-section__content"},dn={class:"k-input-label"},mn={class:"radio-button-group"},pn={class:"mt-4"},fn={class:"k-input-label"},_n={class:"radio-button-group"},vn={class:"mt-4"},bn={class:"k-input-label"},zn={class:"radio-button-group"},gn={class:"form-section"},kn={class:"form-section__header"},hn={class:"form-section-title"},yn={key:0},En={class:"form-section__content"},Cn={class:"form-section"},In={class:"form-section__header"},wn={class:"form-section-title"},$n={key:0},Sn={class:"form-section__content"},Nn={class:"mt-2"},An=K({__name:"ZoneCreateView",setup(p){const{t:s,tm:a}=P(),g=fe(),z=_e(),E=/^(?![-0-9])[a-z0-9-]{1,63}$/,d=_(null),C=_(!1),w=_(!1),m=_({error:null,title:null,icon:"warning",badgeAppearance:"warning"}),N=_(null),A=_(!1),L=_(null),b=_(""),$=_("kubernetes"),B=_(!0),U=_(!0),Z=I(()=>d.value!==null&&d.value.token?d.value.token:""),ne=I(()=>Z.value!==""?window.btoa(Z.value):""),te=I(()=>b.value===""||C.value||d.value!==null),F=I(()=>{if(N.value!==null)return N.value;if(m.value.error instanceof T){const l=m.value.error.invalidParameters.find(u=>u.field==="name");if(l!==void 0)return l.reason}return null});async function oe(){C.value=!0,m.value={error:null,title:null,icon:"warning",badgeAppearance:"warning"};try{if(!X(b.value))return;d.value=await g.createZone({name:b.value})}catch(l){l instanceof T&&[409,500].includes(l.status)?m.value={error:l,title:s(`zones.create.statusError.${l.status}.title`,{zoneName:b.value}),description:s(`zones.create.statusError.${l.status}.description`).trim(),icon:l.status===500?"warning":"errorFilled",badgeAppearance:l.status===500?"warning":"danger"}:l instanceof Error?m.value={error:l,title:l instanceof T?l.title:s("zones.create.generalError.title"),description:l instanceof T&&l.detail?l.detail:void 0,icon:"errorFilled",badgeAppearance:"danger"}:console.error(l)}finally{C.value=!1}}function X(l){const u=E.test(l);return u?N.value=null:N.value=s("zones.create.invalidNameError"),u}async function se(){A.value=!1,L.value=null;try{const l=await g.getZoneOverview({name:b.value}),u=Ie(l.zoneInsight);A.value=u==="online"}catch(l){l instanceof Error?L.value=l:console.error(l)}}function G(){w.value=!w.value}return(l,u)=>{const ae=R("KIcon"),re=R("DataSource"),le=R("KCard");return c(),h(Ce,{attrs:{class:"is-fullscreen"}},{default:r(()=>[i(ve,{fullscreen:!0,breadcrumbs:[]},{title:r(()=>[t("h1",null,[i(be,{title:e(s)("zones.routes.create.title"),render:!0},null,8,["title"])])]),actions:r(()=>[Z.value===""||A.value?(c(),h(e(V),{key:0,appearance:"outline","data-testid":"exit-button",to:{name:"zone-cp-list-view"}},{default:r(()=>[n(o(e(s)("zones.form.exit")),1)]),_:1})):(c(),h(e(V),{key:1,appearance:"outline","data-testid":"exit-button",onClick:G},{default:r(()=>[n(o(e(s)("zones.form.exit")),1)]),_:1}))]),default:r(()=>[n(),n(),t("div",Ge,[i(le,null,{body:r(()=>[t("div",Me,[t("div",He,[t("div",null,[t("h1",je,[t("span",We,o(e(s)("zones.form.title")),1)]),n(),e(s)("zones.form.description")!==" "?(c(),v("p",Je,o(e(s)("zones.form.description")),1)):k("",!0)]),n(),e(a)("zones.form.facts").length>0?(c(),v("div",Qe,[t("ul",Ye,[(c(!0),v(D,null,ze(e(a)("zones.form.facts"),(f,ie)=>(c(),v("li",{key:ie,class:"fact-list__item"},[i(ae,{icon:"check",color:e(j)},null,8,["color"]),n(" "+o(f),1)]))),128))])])):k("",!0)]),n(),t("div",en,[t("div",nn,[t("h2",tn,o(e(s)("zones.form.section.name.title")),1),n(),e(s)("zones.form.section.name.description")!==" "?(c(),v("p",on,o(e(s)("zones.form.section.name.description")),1)):k("",!0)]),n(),t("div",sn,[t("div",null,[i(e(ge),{for:"zone-name",required:"","tooltip-attributes":{placement:"right"}},{tooltip:r(()=>[n(o(e(s)("zones.form.name_tooltip")),1)]),default:r(()=>[n(o(e(s)("zones.form.nameLabel"))+" ",1)]),_:1}),n(),i(e(ke),{id:"zone-name",modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=f=>b.value=f),type:"text",name:"zone-name","data-testid":"name-input","data-test-error-type":F.value!==null?"invalid-dns-name":void 0,"has-error":F.value!==null,"error-message":F.value??void 0,disabled:d.value!==null,onBlur:u[1]||(u[1]=f=>X(b.value))},null,8,["modelValue","data-test-error-type","has-error","error-message","disabled"])]),n(),i(e(V),{appearance:"primary",class:"mt-4",icon:C.value?"spinner":"plus",disabled:te.value,"data-testid":"create-zone-button",onClick:oe},{default:r(()=>[n(o(e(s)("zones.form.createZoneButtonLabel")),1)]),_:1},8,["icon","disabled"]),n(),m.value.error!==null?(c(),h(he,{key:0,class:"mt-4",error:m.value.error,"badge-appearance":m.value.badgeAppearance,icon:m.value.icon,"data-testid":"create-zone-error"},ye({default:r(()=>[t("p",null,o(m.value.title),1),n()]),_:2},[m.value.description?{name:"message",fn:r(()=>[t("p",null,o(m.value.description),1)]),key:"0"}:void 0]),1032,["error","badge-appearance","icon"])):k("",!0)])]),n(),d.value!==null?(c(),v(D,{key:0},[t("div",an,[t("div",rn,[t("h2",ln,o(e(s)("zones.form.section.configuration.title")),1),n(),e(s)("zones.form.section.configuration.description")!==" "?(c(),v("p",cn,o(e(s)("zones.form.section.configuration.description")),1)):k("",!0)]),n(),t("div",un,[t("div",null,[t("span",dn,o(e(s)("zones.form.environmentLabel"))+` *
                      `,1),n(),t("div",mn,[i(e(M),{id:"zone-environment-universal",modelValue:$.value,"onUpdate:modelValue":u[2]||(u[2]=f=>$.value=f),"selected-value":"universal",name:"zone-environment","data-testid":"environment-universal-radio-button"},{default:r(()=>[n(o(e(s)("zones.form.universalLabel")),1)]),_:1},8,["modelValue"]),n(),i(e(M),{id:"zone-environment-kubernetes",modelValue:$.value,"onUpdate:modelValue":u[3]||(u[3]=f=>$.value=f),"selected-value":"kubernetes",name:"zone-environment","data-testid":"environment-kubernetes-radio-button"},{default:r(()=>[n(o(e(s)("zones.form.kubernetesLabel")),1)]),_:1},8,["modelValue"])])]),n(),$.value==="kubernetes"?(c(),v(D,{key:0},[t("div",pn,[t("span",fn,o(e(s)("zones.form.zoneIngressLabel"))+` *
                        `,1),n(),t("div",_n,[i(e(H),{id:"zone-ingress-enabled",modelValue:B.value,"onUpdate:modelValue":u[4]||(u[4]=f=>B.value=f),"data-testid":"ingress-input-switch"},{label:r(()=>[n(o(e(s)("zones.form.zoneIngressEnabledLabel")),1)]),_:1},8,["modelValue"])])]),n(),t("div",vn,[t("span",bn,o(e(s)("zones.form.zoneEgressLabel"))+` *
                        `,1),n(),t("div",zn,[i(e(H),{id:"zone-egress-enabled",modelValue:U.value,"onUpdate:modelValue":u[5]||(u[5]=f=>U.value=f),"data-testid":"egress-input-switch"},{label:r(()=>[n(o(e(s)("zones.form.zoneEgressEnabledLabel")),1)]),_:1},8,["modelValue"])])])],64)):k("",!0)])]),n(),t("div",gn,[t("div",kn,[t("h2",hn,o(e(s)("zones.form.section.connect_zone.title")),1),n(),e(s)("zones.form.section.connect_zone.description")!==" "?(c(),v("p",yn,o(e(s)("zones.form.section.connect_zone.description")),1)):k("",!0)]),n(),t("div",En,[i(re,{src:"/control-plane/addresses"},{default:r(({data:f})=>[typeof f<"u"?(c(),v(D,{key:0},[$.value==="universal"?(c(),h(Xe,{key:0,"zone-name":b.value,token:Z.value,"global-kds-address":f.kds},null,8,["zone-name","token","global-kds-address"])):(c(),h(Ue,{key:1,"zone-name":b.value,"zone-ingress-enabled":B.value,"zone-egress-enabled":U.value,token:Z.value,"base64-encoded-token":ne.value,"global-kds-address":f.kds},null,8,["zone-name","zone-ingress-enabled","zone-egress-enabled","token","base64-encoded-token","global-kds-address"]))],64)):k("",!0)]),_:1})])]),n(),t("div",Cn,[t("div",In,[t("h2",wn,o(e(s)("zones.form.section.scanner.title")),1),n(),e(s)("zones.form.section.scanner.description")!==" "?(c(),v("p",$n,o(e(s)("zones.form.section.scanner.description")),1)):k("",!0)]),n(),t("div",Sn,[i(Ne,{"loader-function":se,"has-error":L.value!==null,"can-complete":A.value,"data-testid":"zone-connected-scanner"},{"loading-title":r(()=>[n(o(e(s)("zones.form.scan.waitTitle")),1)]),"complete-title":r(()=>[n(o(e(s)("zones.form.scan.completeTitle")),1)]),"complete-content":r(()=>[t("p",null,o(e(s)("zones.form.scan.completeDescription",{name:b.value})),1),n(),t("p",Nn,[i(e(V),{appearance:"primary",to:{name:"zone-cp-detail-view",params:{zone:b.value}}},{default:r(()=>[n(o(e(s)("zones.form.scan.completeButtonLabel",{name:b.value})),1)]),_:1},8,["to"])])]),"error-title":r(()=>[t("h3",null,o(e(s)("zones.form.scan.errorTitle")),1)]),"error-content":r(()=>[t("p",null,o(e(s)("zones.form.scan.errorDescription")),1)]),_:1},8,["has-error","can-complete"])])])],64)):k("",!0)])]),_:1})]),n(),i(e(Ee),{"is-visible":w.value,title:e(s)("zones.form.confirm_modal.title"),"data-testid":"confirm-exit-modal",onCanceled:G,onProceed:u[6]||(u[6]=f=>e(z).push({name:"zone-cp-list-view"}))},{"header-content":r(()=>[n(o(e(s)("zones.form.confirm_modal.title")),1)]),"body-content":r(()=>[n(o(e(s)("zones.form.confirm_modal.body")),1)]),"action-buttons":r(()=>[i(e(V),{appearance:"primary",to:{name:"zone-cp-list-view"},"data-testid":"confirm-exit-button"},{default:r(()=>[n(o(e(s)("zones.form.confirm_modal.action_button")),1)]),_:1})]),_:1},8,["is-visible","title"])]),_:1})]),_:1})}}});export{An as default};