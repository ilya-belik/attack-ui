"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[930],{695:(t,e,l)=>{l.d(e,{Z:()=>m});var a=l(536),n=l(6902),o=l(9676);const s={class:"text-h6"},r={props:{title:String,actionsAlign:{type:String,default:"right"}},setup(t){const e=t,l=(0,a.Rr)(),r=(0,a.Fl)((()=>e.title||l.title));return(e,i)=>{const c=(0,a.up)("q-card-section"),u=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(u,{flat:"",bordered:"",class:"my-card"},{default:(0,a.w5)((()=>[t.title||(0,n.SU)(l).title?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.WI)(e.$slots,"title",{},(()=>[(0,a.Uk)((0,o.zw)(t.title),1)]))])])),_:3})):(0,a.kq)("",!0),(0,n.SU)(l).body?((0,a.wg)(),(0,a.j4)(c,{key:1,class:(0,o.C_)({"q-pt-none":(0,n.SU)(r)})},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"body")])),_:3},8,["class"])):(0,a.kq)("",!0),(0,n.SU)(l).actions?((0,a.wg)(),(0,a.j4)(c,{key:2,align:t.actionsAlign},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"actions")])),_:3},8,["align"])):(0,a.kq)("",!0)])),_:3})}}};var i=l(3316),c=l(1007),u=l(2417),d=l.n(u);const g=r,m=g;d()(r,"components",{QCard:i.Z,QCardSection:c.Z})},3930:(t,e,l)=>{l.r(e),l.d(e,{default:()=>G});var a=l(536),n=l(6902),o=l(2496),s=l(695),r=l(3721);const i={setup(t){const{t:e}=(0,o.QT)(),l=(0,r.oR)(),s=()=>{l.commit("ddos/removeAllTargets")};return(t,l)=>{const o=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.j4)(o,{label:(0,n.SU)(e)("attackConfigPage.removeAllTargetsBtnLabel"),color:"red",flat:"",onClick:s},null,8,["label"])}}};var c=l(2235),u=l(2417),d=l.n(u);const g=i,m=g;d()(i,"components",{QBtn:c.Z});var p=l(9676);const w={class:"row q-gutter-xs q-mt-lg"},b=["href"],f={setup(t){const{t:e}=(0,o.QT)(),l=(0,r.oR)();(0,a.wF)((()=>{l.dispatch("ddos/setDefaultTargets")}));const s=t=>{l.commit("ddos/removeTarget",t)},i=(0,a.Fl)((()=>l.getters["ddos/getTargetsList"]));return(t,l)=>{const o=(0,a.up)("q-tooltip"),r=(0,a.up)("q-chip");return(0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(i),((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l+t,class:"q-gutter-xs"},[(0,a.Wm)(r,{removable:"",outline:"",color:"primary",onRemove:t=>s(l)},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)((0,n.SU)(e)("attackConfigPage.targetTooltipText")),1)])),_:1}),(0,a._)("a",{href:t,target:"_blank"},(0,p.zw)(t),9,b)])),_:2},1032,["onRemove"])])))),128))])}}};var v=l(1607),k=l(2951);const U=f,C=U;d()(f,"components",{QChip:v.Z,QTooltip:k.Z});const S={setup(t){const{t:e}=(0,o.QT)(),l=(0,r.oR)(),s=(0,n.iH)(),i=()=>{l.commit("ddos/setTarget",{target:s.value,callback(){s.value=""}})};return(t,l)=>{const o=(0,a.up)("q-input"),r=(0,a.up)("q-btn"),c=(0,a.up)("q-form");return(0,a.wg)(),(0,a.j4)(c,{onSubmit:i,class:"new-taget-form row items-center full-width"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=t=>s.value=t),label:(0,n.SU)(e)("attackConfigPage.addTargetFieldLabel"),autofocus:"","stack-label":"",class:"col-xs-12 col-md-4"},null,8,["modelValue","label"]),(0,a.Wm)(r,{label:(0,n.SU)(e)("attackConfigPage.addTargetBtnLabel"),color:"primary",class:"q-ml-lg add-btn",type:"submit"},null,8,["label"])])),_:1})}}};var q=l(4445),y=l(7409);const h=S,T=h;d()(S,"components",{QForm:q.Z,QInput:y.Z,QBtn:c.Z});const _={setup(t){const{t:e}=(0,o.QT)();return(t,l)=>((0,a.wg)(),(0,a.j4)((0,n.SU)(s.Z),{title:(0,n.SU)(e)("attackConfigPage.targetsCardTitle"),class:"col-12"},{body:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(T)),(0,a.Wm)((0,n.SU)(C))])),actions:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(m))])),_:1},8,["title"]))}},Q=_,W=Q,L={setup(t){const{t:e}=(0,o.QT)(),l=(0,r.oR)(),i=(0,n.qj)({reqCount:0,intervalLength:0}),c=()=>{const{user:t,default:e}=l.getters["ddos/getDdosConfig"];i.reqCount=t.reqCount||e.reqCount,i.intervalLength=t.intervalLength||e.intervalLength};(0,a.wF)(c),(0,a.YP)(i,(({reqCount:t,intervalLength:e})=>{t&&e&&l.commit("ddos/setDdosConfig",{reqCount:t,intervalLength:e})}));const u=()=>{l.commit("ddos/resetDdosConfig"),c()};return(t,l)=>{const o=(0,a.up)("q-input"),r=(0,a.up)("q-form"),c=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.j4)((0,n.SU)(s.Z),{title:(0,n.SU)(e)("attackConfigPage.connectionsTitle"),class:"col-12"},{body:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"row ddos-config-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:(0,n.SU)(i).reqCount,"onUpdate:modelValue":l[0]||(l[0]=t=>(0,n.SU)(i).reqCount=t),label:(0,n.SU)(e)("attackConfigPage.reqCountFieldLabel"),type:"number",class:"col-12 col-md-6 q-pr-md",hint:(0,n.SU)(e)("attackConfigPage.reqCountFieldHint")},null,8,["modelValue","label","hint"]),(0,a.Wm)(o,{modelValue:(0,n.SU)(i).intervalLength,"onUpdate:modelValue":l[1]||(l[1]=t=>(0,n.SU)(i).intervalLength=t),label:(0,n.SU)(e)("attackConfigPage.intervalTimeFieldLabel"),type:"number",class:"col-12 col-md-6 q-pl-md",hint:(0,n.SU)(e)("attackConfigPage.intervalTimeFieldHint")},null,8,["modelValue","label","hint"])])),_:1})])),actions:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:u,label:(0,n.SU)(e)("attackConfigPage.resetConfigBtnLabel"),color:"red",flat:""},null,8,["label"])])),_:1},8,["title"])}}};var Z=l(5586);const P=L,B=P;d()(L,"components",{QForm:q.Z,QInput:y.Z,QBtn:c.Z,QField:Z.Z});var D=l(8597);const j={setup(t){const{t:e}=(0,o.QT)(),l=(0,r.oR)(),i=(0,D.tv)(),c=()=>{l.dispatch("ddos/destroyBrowserAttack"),l.commit("ddos/setBrowserAttackStatus",!0),i.push({name:"DdosAttack"})};return(t,l)=>{const o=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.j4)((0,n.SU)(s.Z),{class:"col-12"},{actions:(0,a.w5)((()=>[(0,a.Wm)(o,{label:(0,n.SU)(e)("attackConfigPage.startAttackBtnLabel"),onClick:c,color:"primary"},null,8,["label"])])),_:1})}}},F=j,A=F;d()(j,"components",{QBtn:c.Z});l(6509);const H=async()=>{try{const t=await fetch("https://api.db-ip.com/v2/free/self"),e=await t.json();return e}catch(t){return console.error(t),{}}},x={key:0,class:"text-red text-bold"},R={class:"ul-reset"},V={class:"flex column items-end"},z={key:0,class:"text-grey"},I={setup(t){const{t:e}=(0,o.QT)(),l=(0,n.qj)([]),s=(0,n.iH)(!1),r=(0,n.iH)(),i=(0,n.iH)(!1),c=(0,n.iH)(!1),u=async()=>{s.value=!0;const t=await H();if(l.splice(0,l.length),!t.countryCode)return i.value=!1,void(s.value=!1);i.value=!0,c.value="RU"!==t.countryCode&&"BY"!==t.countryCode,l.push({label:e("ipNotify.ipLabel"),info:t.ipAddress},{label:"IP Country",info:`${t.continentName} ${t.countryName}, ${t.city}`}),r.value=(new Date).toLocaleTimeString(),s.value=!1};return(0,a.wF)((()=>{u()})),(t,o)=>{const d=(0,a.up)("q-btn"),g=(0,a.up)("q-banner");return i.value?((0,a.wg)(),(0,a.j4)(g,{key:0,rounded:"",class:(0,p.C_)({"bg-red-1":c.value,"bg-grey-3":!c.value})},{action:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a.Wm)(d,{onClick:u,label:(0,n.SU)(e)("ipNotify.reloadBtnLabel"),flat:"",loading:s.value},null,8,["label","loading"]),r.value?((0,a.wg)(),(0,a.iD)("div",z,(0,p.zw)((0,n.SU)(e)("ipNotify.updatedAtLabel"))+": "+(0,p.zw)(r.value),1)):(0,a.kq)("",!0)])])),default:(0,a.w5)((()=>[c.value?((0,a.wg)(),(0,a.iD)("p",x,(0,p.zw)((0,n.SU)(e)("ipNotify.title")),1)):(0,a.kq)("",!0),(0,a._)("ul",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(l),(({label:t,info:e},l)=>((0,a.wg)(),(0,a.iD)("li",null,[(0,a._)("b",null,(0,p.zw)(t)+":",1),(0,a.Uk)(" "+(0,p.zw)(e),1)])))),256))])])),_:1},8,["class"])):(0,a.kq)("",!0)}}};var N=l(4327);const $=I,Y=$;d()(I,"components",{QBanner:N.Z,QBtn:c.Z});const K={setup(t){const{t:e}=(0,o.QT)();return(t,l)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,n.SU)(s.Z),{class:"col-12",title:(0,n.SU)(e)("attackConfigPage.pageTitle")},{body:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(Y))])),_:1},8,["title"]),(0,a.Wm)((0,n.SU)(W)),(0,a.Wm)((0,n.SU)(B)),(0,a.Wm)((0,n.SU)(A))],64))}},E=K,G=E}}]);