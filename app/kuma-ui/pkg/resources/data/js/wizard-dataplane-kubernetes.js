"use strict";(self["webpackChunkkuma_gui"]=self["webpackChunkkuma_gui"]||[]).push([[137],{88523:function(e,a,n){var t=n(73570),s=n.n(t);a["Z"]={methods:{formatForCLI(e,a='" | kumactl apply -f -'){const n='echo "',t=s()(e);return`${n}${t}${a}`}}}},89938:function(e){e.exports={apiVersion:"v1",kind:"Namespace",metadata:{name:null,namespace:null,annotations:{"kuma.io/sidecar-injection":"enabled","kuma.io/mesh":null}}}},59812:function(e,a,n){n.d(a,{Z:function(){return W}});var t=n(70821);const s={class:"wizard-switcher"},l=(0,t.Uk)(" Running on "),i={class:"capitalize"},o={key:0},r={key:0},d=(0,t._)("p",null,[(0,t.Uk)(" We have detected that you are running on a "),(0,t._)("strong",null,"Kubernetes environment"),(0,t.Uk)(", and we are going to be showing you instructions for Kubernetes unless you decide to visualize the instructions for Universal. ")],-1),u=(0,t.Uk)(" Switch to Universal instructions "),c={key:1},p=(0,t._)("p",null,[(0,t.Uk)(" We have detected that you are running on a "),(0,t._)("strong",null,"Kubernetes environment"),(0,t.Uk)(", but you are viewing instructions for Universal. ")],-1),m=(0,t.Uk)(" Switch back to Kubernetes instructions "),h={key:1},v={key:0},k=(0,t._)("p",null,[(0,t.Uk)(" We have detected that you are running on a "),(0,t._)("strong",null,"Universal environment"),(0,t.Uk)(", but you are viewing instructions for Kubernetes. ")],-1),w=(0,t.Uk)(" Switch back to Universal instructions "),y={key:1},g=(0,t._)("p",null,[(0,t.Uk)(" We have detected that you are running on a "),(0,t._)("strong",null,"Universal environment"),(0,t.Uk)(", and we are going to be showing you instructions for Universal unless you decide to visualize the instructions for Kubernetes. ")],-1),b=(0,t.Uk)(" Switch to Kubernetes instructions ");function _(e,a,n,_,f,S){const D=(0,t.up)("KButton"),U=(0,t.up)("KEmptyState");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(U,{ref:"emptyState","cta-is-hidden":"","is-error":!e.environment,class:"my-6 wizard-empty-state"},(0,t.Nv)({message:(0,t.w5)((()=>["kubernetes"===e.environment?((0,t.wg)(),(0,t.iD)("div",o,[e.$route.name===f.wizardRoutes.kubernetes?((0,t.wg)(),(0,t.iD)("div",r,[d,(0,t._)("p",null,[(0,t.Wm)(D,{to:{name:f.wizardRoutes.universal},appearance:"secondary"},{default:(0,t.w5)((()=>[u])),_:1},8,["to"])])])):e.$route.name===f.wizardRoutes.universal?((0,t.wg)(),(0,t.iD)("div",c,[p,(0,t._)("p",null,[(0,t.Wm)(D,{to:{name:f.wizardRoutes.kubernetes},appearance:"secondary"},{default:(0,t.w5)((()=>[m])),_:1},8,["to"])])])):(0,t.kq)("",!0)])):"universal"===e.environment?((0,t.wg)(),(0,t.iD)("div",h,[e.$route.name===f.wizardRoutes.kubernetes?((0,t.wg)(),(0,t.iD)("div",v,[k,(0,t._)("p",null,[(0,t.Wm)(D,{to:{name:f.wizardRoutes.universal},appearance:"secondary"},{default:(0,t.w5)((()=>[w])),_:1},8,["to"])])])):e.$route.name===f.wizardRoutes.universal?((0,t.wg)(),(0,t.iD)("div",y,[g,(0,t._)("p",null,[(0,t.Wm)(D,{to:{name:f.wizardRoutes.kubernetes},appearance:"secondary"},{default:(0,t.w5)((()=>[b])),_:1},8,["to"])])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])),_:2},["kubernetes"===e.environment||"universal"===e.environment?{name:"title",fn:(0,t.w5)((()=>[l,(0,t._)("span",i,(0,t.zw)(e.environment),1)]))}:void 0]),1032,["is-error"])])}var f=n(33907),S={name:"EnvironmentSwitcher",data(){return{wizardRoutes:{kubernetes:"kubernetes-dataplane",universal:"universal-dataplane"}}},computed:{...(0,f.Se)({environment:"config/getEnvironment"}),instructionsCtaText(){return"universal"===this.environment?"Switch to Kubernetes instructions":"Switch to Universal instructions"},instructionsCtaRoute(){return"kubernetes"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}}}},D=n(83744);const U=(0,D.Z)(S,[["render",_]]);var W=U},71470:function(e,a,n){n.r(a),n.d(a,{default:function(){return ve}});var t=n(70821);const s=e=>((0,t.dD)("data-v-15724751"),e=e(),(0,t.Cn)(),e),l={class:"wizard"},i={class:"wizard__content"},o=s((()=>(0,t._)("h3",null," Create Kubernetes Dataplane ",-1))),r=s((()=>(0,t._)("h3",null," To get started, please select on what Mesh you would like to add the Dataplane: ",-1))),d=s((()=>(0,t._)("p",null," If you've got an existing Mesh that you would like to associate with your Dataplane, you can select it below, or create a new one using our Mesh Wizard. ",-1))),u=s((()=>(0,t._)("small",null,"Would you like to see instructions for Universal? Use sidebar to change wizard!",-1))),c=s((()=>(0,t._)("option",{disabled:"",value:""}," Select an existing Mesh… ",-1))),p=["value"],m=s((()=>(0,t._)("label",{class:"k-input-label mr-4"}," or ",-1))),h=(0,t.Uk)(" Create a new Mesh "),v=s((()=>(0,t._)("h3",null," Setup Dataplane Mode ",-1))),k=s((()=>(0,t._)("p",null," You can create a data plane for a service or a data plane for a Gateway. ",-1))),w={for:"service-dataplane"},y=s((()=>(0,t._)("span",null," Service Dataplane ",-1))),g={for:"ingress-dataplane"},b=s((()=>(0,t._)("span",null," Ingress Dataplane ",-1))),_={key:0},f=s((()=>(0,t._)("p",null," Should the data plane be added for an entire Namespace and all of its services, or for specific individual services in any namespace? ",-1))),S={for:"k8s-services-all"},D=s((()=>(0,t._)("span",null," All Services in Namespace ",-1))),U={for:"k8s-services-individual"},W=s((()=>(0,t._)("span",null," Individual Services ",-1))),N={key:1},z={for:"k8s-ingress-kong"},I=s((()=>(0,t._)("span",null," Kong Ingress ",-1))),x={for:"k8s-ingress-other"},C=s((()=>(0,t._)("span",null," Other Ingress ",-1))),K=s((()=>(0,t._)("p",null,' Please go ahead and deploy the Ingress first, then restart this wizard and select "Existing Ingress". ',-1))),q={key:0},E={key:0},M=s((()=>(0,t._)("h3",null," Auto-Inject DPP ",-1))),V=s((()=>(0,t._)("p",null," You can now execute the following commands to automatically inject the sidecar proxy in every Pod, and by doing so creating the Dataplane. ",-1))),T=s((()=>(0,t._)("h3",null,"Searching…",-1))),$=s((()=>(0,t._)("p",null,"We are looking for your dataplane.",-1))),F=s((()=>(0,t._)("h3",null,"Done!",-1))),R=(0,t.Uk)(" Your Dataplane "),G={key:0},Z=(0,t.Uk)(" was found! "),j=s((()=>(0,t._)("p",null," Proceed to the next step where we will show you your new Dataplane. ",-1))),B=(0,t.Uk)(" View Your Dataplane "),P=s((()=>(0,t._)("h3",null,"Mesh not found",-1))),Y=s((()=>(0,t._)("p",null,"We were unable to find your mesh.",-1))),A=s((()=>(0,t._)("p",null," Please return to the first step and make sure to select an existing Mesh, or create a new one. ",-1))),L=s((()=>(0,t._)("h3",null,"Dataplane",-1))),O=s((()=>(0,t._)("h3",null,"Example",-1))),H=s((()=>(0,t._)("p",null," Below is an example of a Dataplane resource output: ",-1))),J=s((()=>(0,t._)("code",{class:"block"},[(0,t._)("pre",null,"apiVersion: 'kuma.io/v1alpha1'\nkind: Dataplane\nmesh: default\nmetadata:\n  name: dp-echo-1\n  annotations:\n    kuma.io/sidecar-injection: enabled\n    kuma.io/mesh: default\nnetworking:\n  address: 10.0.0.1\n  inbound:\n  - port: 10000\n    servicePort: 9000\n    tags:\n      kuma.io/service: echo")],-1)));function Q(e,a,n,s,Q,X){const ee=(0,t.up)("KButton"),ae=(0,t.up)("FormFragment"),ne=(0,t.up)("KCard"),te=(0,t.up)("KAlert"),se=(0,t.up)("CodeView"),le=(0,t.up)("TabsWidget"),ie=(0,t.up)("EntityScanner"),oe=(0,t.up)("EnvironmentSwitcher"),re=(0,t.up)("StepSkeleton");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",i,[(0,t.Wm)(re,{steps:Q.steps,"sidebar-content":Q.sidebarContent,"footer-enabled":!1===Q.hideScannerSiblings,"next-disabled":X.nextDisabled},{general:(0,t.w5)((()=>[o,(0,t._)("p",null," Welcome to the wizard to create a new Dataplane resource in "+(0,t.zw)(e.title)+". We will be providing you with a few steps that will get you started. ",1),(0,t._)("p",null," As you know, the "+(0,t.zw)(Q.productName)+" GUI is read-only. ",1),r,d,u,(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.wy)((0,t._)("select",{id:"dp-mesh","onUpdate:modelValue":a[0]||(a[0]=e=>Q.validate.meshName=e),class:"k-input w-100"},[c,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.meshes.items,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.name,value:e.name},(0,t.zw)(e.name),9,p)))),128))],512),[[t.bM,Q.validate.meshName]])]),(0,t._)("div",null,[m,(0,t.Wm)(ee,{to:{name:"create-mesh"},appearance:"outline"},{default:(0,t.w5)((()=>[h])),_:1})])])),_:1})])),_:1})])),"scope-settings":(0,t.w5)((()=>[v,k,(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:(0,t.w5)((()=>[(0,t._)("label",w,[(0,t.wy)((0,t._)("input",{id:"service-dataplane","onUpdate:modelValue":a[1]||(a[1]=e=>Q.validate.k8sDataplaneType=e),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},null,512),[[t.G2,Q.validate.k8sDataplaneType]]),y]),(0,t._)("label",g,[(0,t.wy)((0,t._)("input",{id:"ingress-dataplane","onUpdate:modelValue":a[2]||(a[2]=e=>Q.validate.k8sDataplaneType=e),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-ingress",disabled:""},null,512),[[t.G2,Q.validate.k8sDataplaneType]]),b])])),_:1})])),_:1}),"dataplane-type-service"===Q.validate.k8sDataplaneType?((0,t.wg)(),(0,t.iD)("div",_,[f,(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:(0,t.w5)((()=>[(0,t._)("label",S,[(0,t.wy)((0,t._)("input",{id:"k8s-services-all","onUpdate:modelValue":a[3]||(a[3]=e=>Q.validate.k8sServices=e),class:"k-input",type:"radio",name:"k8s-services",value:"all-services",checked:""},null,512),[[t.G2,Q.validate.k8sServices]]),D]),(0,t._)("label",U,[(0,t.wy)((0,t._)("input",{id:"k8s-services-individual","onUpdate:modelValue":a[4]||(a[4]=e=>Q.validate.k8sServices=e),class:"k-input",type:"radio",name:"k8s-services",value:"individual-services",disabled:""},null,512),[[t.G2,Q.validate.k8sServices]]),W])])),_:1})])),_:1}),"individual-services"===Q.validate.k8sServices?((0,t.wg)(),(0,t.j4)(ne,{key:0,class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{title:"Deployments","for-attr":"k8s-deployment-selection"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("input",{id:"k8s-service-deployment-new","onUpdate:modelValue":a[5]||(a[5]=e=>Q.validate.k8sServiceDeploymentSelection=e),type:"text",class:"k-input w-100",placeholder:"your-new-deployment",required:""},null,512),[[t.nr,Q.validate.k8sServiceDeploymentSelection]])])),_:1})])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{title:"Namespace","for-attr":"k8s-namespace-selection"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("input",{id:"k8s-namespace-new","onUpdate:modelValue":a[6]||(a[6]=e=>Q.validate.k8sNamespaceSelection=e),type:"text",class:"k-input w-100",placeholder:"your-namespace",required:""},null,512),[[t.nr,Q.validate.k8sNamespaceSelection]])])),_:1})])),_:1})])):(0,t.kq)("",!0),"dataplane-type-ingress"===Q.validate.k8sDataplaneType?((0,t.wg)(),(0,t.iD)("div",N,[(0,t._)("p",null,(0,t.zw)(e.title)+" natively supports the Kong Ingress. Do you want to deploy Kong or another Ingress? ",1),(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{"all-inline":"","equal-cols":"","hide-label-col":""},{default:(0,t.w5)((()=>[(0,t._)("label",z,[(0,t.wy)((0,t._)("input",{id:"k8s-ingress-kong","onUpdate:modelValue":a[7]||(a[7]=e=>Q.validate.k8sIngressBrand=e),class:"k-input",type:"radio",name:"k8s-ingress-brand",value:"kong-ingress",checked:""},null,512),[[t.G2,Q.validate.k8sIngressBrand]]),I]),(0,t._)("label",x,[(0,t.wy)((0,t._)("input",{id:"k8s-ingress-other","onUpdate:modelValue":a[8]||(a[8]=e=>Q.validate.k8sIngressBrand=e),class:"k-input",type:"radio",name:"k8s-ingress-brand",value:"other-ingress"},null,512),[[t.G2,Q.validate.k8sIngressBrand]]),C])])),_:1})])),_:1}),(0,t.Wm)(ne,{class:"my-6","has-shadow":""},{body:(0,t.w5)((()=>[(0,t.Wm)(ae,{title:"Deployments","for-attr":"k8s-deployment-selection"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("input",{id:"k8s-ingress-deployment-new","onUpdate:modelValue":a[9]||(a[9]=e=>Q.validate.k8sIngressDeployment=e),type:"text",class:"k-input w-100",placeholder:"your-deployment",required:""},null,512),[[t.nr,Q.validate.k8sIngressDeployment]])])),_:1})])),_:1}),"other-ingress"===Q.validate.k8sIngressBrand?((0,t.wg)(),(0,t.j4)(te,{key:0,appearance:"info"},{alertMessage:(0,t.w5)((()=>[K])),_:1})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])),complete:(0,t.w5)((()=>[Q.validate.meshName?((0,t.wg)(),(0,t.iD)("div",q,[!1===Q.hideScannerSiblings?((0,t.wg)(),(0,t.iD)("div",E,[M,V,(0,t.Wm)(le,{loaders:!1,tabs:Q.tabs,"initial-tab-override":"kubernetes"},{kubernetes:(0,t.w5)((()=>[(0,t.Wm)(se,{title:"Kubernetes","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:X.codeOutput},null,8,["content"])])),_:1},8,["tabs"])])):(0,t.kq)("",!0),(0,t.Wm)(ie,{"loader-function":X.scanForEntity,"should-start":!0,"has-error":Q.scanError,"can-complete":Q.scanFound,onHideSiblings:X.hideSiblings},{"loading-title":(0,t.w5)((()=>[T])),"loading-content":(0,t.w5)((()=>[$])),"complete-title":(0,t.w5)((()=>[F])),"complete-content":(0,t.w5)((()=>[(0,t._)("p",null,[R,Q.validate.k8sNamespaceSelection?((0,t.wg)(),(0,t.iD)("strong",G,(0,t.zw)(Q.validate.k8sNamespaceSelection),1)):(0,t.kq)("",!0),Z]),j,(0,t._)("p",null,[(0,t.Wm)(ee,{appearance:"primary",onClick:X.compeleteDataPlaneSetup},{default:(0,t.w5)((()=>[B])),_:1},8,["onClick"])])])),"error-title":(0,t.w5)((()=>[P])),"error-content":(0,t.w5)((()=>[Y])),_:1},8,["loader-function","has-error","can-complete","onHideSiblings"])])):((0,t.wg)(),(0,t.j4)(te,{key:1,appearance:"danger"},{alertMessage:(0,t.w5)((()=>[A])),_:1}))])),dataplane:(0,t.w5)((()=>[L,(0,t._)("p",null," In "+(0,t.zw)(e.title)+", a Dataplane resource represents a data plane proxy running alongside one of your services. Data plane proxies can be added in any Mesh that you may have created, and in Kubernetes, they will be auto-injected by "+(0,t.zw)(e.title)+". ",1)])),example:(0,t.w5)((()=>[O,H,J])),switch:(0,t.w5)((()=>[(0,t.Wm)(oe)])),_:1},8,["steps","sidebar-content","footer-enabled","next-disabled"])])])}var X=n(33907),ee=n(21180),ae=n(53419),ne=n(88523),te=n(93897),se=n(34707),le=n(76262),ie=n(59812),oe=n(71551),re=n(5129),de=n(89938),ue=n.n(de),ce=n(45689),pe={name:"DataplaneWizardKubernetes",components:{FormFragment:te.Z,TabsWidget:se.Z,StepSkeleton:le.Z,EnvironmentSwitcher:ie.Z,CodeView:oe.Z,EntityScanner:re.Z},mixins:[ne.Z],data(){return{productName:ce.sG,schema:ue(),steps:[{label:"General",slug:"general"},{label:"Scope Settings",slug:"scope-settings"},{label:"Install",slug:"complete"}],tabs:[{hash:"#kubernetes",title:"Kubernetes"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",k8sDataplaneType:"dataplane-type-service",k8sServices:"all-services",k8sNamespace:"",k8sNamespaceSelection:"",k8sServiceDeployment:"",k8sServiceDeploymentSelection:"",k8sIngressDeployment:"",k8sIngressDeploymentSelection:"",k8sIngressType:"",k8sIngressBrand:"kong-ingress",k8sIngressSelection:""}}},computed:{...(0,X.Se)({title:"config/getTagline",version:"config/getVersion",environment:"config/getEnvironment",meshes:"getMeshList"}),dataplaneUrl(){const e=this.validate;return!(!e.meshName||!e.k8sNamespaceSelection)&&{name:"dataplanes",params:{mesh:e.meshName}}},codeOutput(){const e=Object.assign({},this.schema),a=this.validate.k8sNamespaceSelection;if(!a)return;e.metadata.name=a,e.metadata.namespace=a,e.metadata.annotations["kuma.io/mesh"]=this.validate.meshName;const n=`" | kubectl apply -f - && kubectl delete pod --all -n ${a}`,t=this.formatForCLI(e,n);return t},nextDisabled(){const{k8sNamespaceSelection:e,meshName:a}=this.validate;return!a.length||"1"===this.$route.query.step&&!e}},watch:{"validate.k8sNamespaceSelection"(e){this.validate.k8sNamespaceSelection=(0,ae.GL)(e)},$route(){const e=this.$route.query.step;1===e&&(this.validate.k8sNamespaceSelection?this.nextDisabled=!1:this.nextDisabled=!0)}},methods:{hideSiblings(){this.hideScannerSiblings=!0},scanForEntity(){const e=this.validate,a=e.meshName,n=this.validate.k8sNamespaceSelection;this.scanComplete=!1,this.scanError=!1,a&&n&&ee["default"].getDataplaneFromMesh({mesh:a,name:n}).then((e=>{e&&e.name.length>0?(this.isRunning=!0,this.scanFound=!0):this.scanError=!0})).catch((e=>{this.scanError=!0,console.error(e)})).finally((()=>{this.scanComplete=!0}))},compeleteDataPlaneSetup(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),this.$router.push({name:"dataplanes",params:{mesh:this.validate.meshName}})}}},me=n(83744);const he=(0,me.Z)(pe,[["render",Q],["__scopeId","data-v-15724751"]]);var ve=he}}]);