"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[208],{695:(t,e,a)=>{a.d(e,{Z:()=>p});var l=a(536),n=a(6902),o=a(9676);const s={class:"text-h6"},r={props:{title:String,actionsAlign:{type:String,default:"right"}},setup(t){const e=t,a=(0,l.Rr)(),r=(0,l.Fl)((()=>e.title||a.title));return(e,i)=>{const u=(0,l.up)("q-card-section"),d=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(d,{flat:"",bordered:"",class:"my-card"},{default:(0,l.w5)((()=>[t.title||(0,n.SU)(a).title?((0,l.wg)(),(0,l.j4)(u,{key:0},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.WI)(e.$slots,"title",{},(()=>[(0,l.Uk)((0,o.zw)(t.title),1)]))])])),_:3})):(0,l.kq)("",!0),(0,n.SU)(a).body?((0,l.wg)(),(0,l.j4)(u,{key:1,class:(0,o.C_)({"q-pt-none":(0,n.SU)(r)})},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"body")])),_:3},8,["class"])):(0,l.kq)("",!0),(0,n.SU)(a).actions?((0,l.wg)(),(0,l.j4)(u,{key:2,align:t.actionsAlign},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"actions")])),_:3},8,["align"])):(0,l.kq)("",!0)])),_:3})}}};var i=a(3316),u=a(1007),d=a(2417),c=a.n(d);const g=r,p=g;c()(r,"components",{QCard:i.Z,QCardSection:u.Z})},9908:(t,e,a)=>{a.r(e),a.d(e,{default:()=>ut});var l=a(536),n=a(6902),o=a(2496),s=a(695),r=a(3721);const i={setup(t){const{t:e}=(0,o.QT)(),a=(0,r.oR)(),s=()=>{a.commit("ddos/removeAllTargets")},i=(0,l.Fl)((()=>a.getters["ddos/getTargetsList"].length));return(t,a)=>{const o=(0,l.up)("q-btn");return(0,n.SU)(i)>0?((0,l.wg)(),(0,l.j4)(o,{key:0,label:(0,n.SU)(e)("attackConfigPage.removeAllTargetsBtnLabel"),color:"red",flat:"",onClick:s},null,8,["label"])):(0,l.kq)("",!0)}}};var u=a(2235),d=a(2417),c=a.n(d);const g=i,p=g;c()(i,"components",{QBtn:u.Z});var m=a(9676);const U={class:"row q-gutter-xs q-mt-lg"},b=["href"],f={setup(t){const{t:e}=(0,o.QT)(),a=(0,r.oR)();(0,l.wF)((()=>{!i.value.length&&a.dispatch("ddos/setDefaultTargets")}));const s=t=>a.commit("ddos/removeTarget",t),i=(0,l.Fl)((()=>a.getters["ddos/getTargetsList"]));return(t,a)=>{const o=(0,l.up)("q-tooltip"),r=(0,l.up)("q-chip");return(0,l.wg)(),(0,l.iD)("div",U,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(i),((t,a)=>((0,l.wg)(),(0,l.iD)("div",{key:a+t,class:"q-gutter-xs"},[(0,l.Wm)(r,{removable:"",outline:"",color:"primary",onRemove:e=>s(t)},{default:(0,l.w5)((()=>[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,m.zw)((0,n.SU)(e)("attackConfigPage.targetTooltipText")),1)])),_:1}),(0,l._)("a",{href:t,target:"_blank"},(0,m.zw)(t),9,b)])),_:2},1032,["onRemove"])])))),128))])}}};var w=a(1607),k=a(2951);const S=f,v=S;c()(f,"components",{QChip:w.Z,QTooltip:k.Z});a(7918),a(8156);var C=a(7790),q=a.n(C),h=a(3245),y=a.n(h);const T={class:"text-bold"},A={class:"row q-gutter-xs q-mt-sm"},P={setup(t){const{t:e}=(0,o.QT)(),a=(0,r.oR)(),s=(0,n.iH)(""),i=t=>{const e=[];return t.forEach((function(t){t=t.trim(),-1===e.indexOf(t)&&e.push(t)})),e},u=(0,l.Fl)((()=>{const t=s.value.trim(),e=t.replace(/ +/g," ").replace(/\r?\n/g,",").replace(/ /g,",").split(",").map((t=>{let e=t.trim();return y()(t)&&e.indexOf("http")&&(e=`http://${e}`),e})).filter((t=>q()(t)||y()(t)));return i(e)})),d=()=>{a.commit("ddos/setTargets",{targets:u.value,callback(){s.value=""}})};return(t,a)=>{const o=(0,l.up)("q-input"),r=(0,l.up)("q-btn"),i=(0,l.up)("q-form"),c=(0,l.up)("q-chip"),g=(0,l.up)("q-banner");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i,{onSubmit:d,class:"new-taget-form row items-start full-width"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t),label:(0,n.SU)(e)("attackConfigPage.addTargetFieldLabel"),autofocus:"","stack-label":"",autogrow:"",class:"col-xs-12 col-md-10",hint:(0,n.SU)(e)("attackConfigPage.addTargetFieldHint")},null,8,["modelValue","label","hint"]),(0,l.Wm)(r,{label:(0,n.SU)(e)("attackConfigPage.addTargetBtnLabel"),class:"q-ml-lg add-btn bg-blue-1 text-primary",type:"submit"},null,8,["label"])])),_:1}),(0,n.SU)(u).length>1?((0,l.wg)(),(0,l.j4)(g,{key:0,rounded:"",class:"targets-to-add bg-blue-grey-1 q-mt-md"},{default:(0,l.w5)((()=>[(0,l._)("div",T,(0,m.zw)((0,n.SU)(e)("attackConfigPage.targetsAddListTitle"))+":",1),(0,l._)("div",A,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(u),((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e+t,class:"q-gutter-xs"},[(0,l.Wm)(c,{outline:"",color:"dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,m.zw)(t),1)])),_:2},1024)])))),128))]),(0,l.Wm)(r,{label:(0,n.SU)(e)("attackConfigPage.addTargetBtnLabel"),color:"dark",class:"q-mt-sm",onClick:d},null,8,["label"])])),_:1})):(0,l.kq)("",!0)],64)}}};var W=a(4445),_=a(7409),F=a(4327);const Q=P,L=Q;c()(P,"components",{QForm:W.Z,QInput:_.Z,QBtn:u.Z,QBanner:F.Z,QChip:w.Z});const Z={setup(t){const{t:e}=(0,o.QT)();return(t,a)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(s.Z),{title:(0,n.SU)(e)("attackConfigPage.targetsCardTitle"),class:"col-12"},{body:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(L)),(0,l.Wm)((0,n.SU)(v))])),actions:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(p))])),_:1},8,["title"]))}},V=Z,B=V,H={setup(t){const{t:e}=(0,o.QT)(),a=(0,r.oR)(),i=(0,n.qj)({reqCount:0,intervalLength:0}),u=()=>{const{user:t,default:e}=a.getters["ddos/getDdosConfig"];i.reqCount=t.reqCount||e.reqCount,i.intervalLength=t.intervalLength||e.intervalLength};(0,l.wF)(u),(0,l.YP)(i,(({reqCount:t,intervalLength:e})=>{t&&e&&a.commit("ddos/setDdosConfig",{reqCount:t,intervalLength:e})}));const d=()=>{a.commit("ddos/resetDdosConfig"),u()};return(t,a)=>{const o=(0,l.up)("q-input"),r=(0,l.up)("q-form"),u=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)((0,n.SU)(s.Z),{class:"col-12",title:(0,n.SU)(e)("attackConfigPage.connectionsTitle")},{body:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"row q-gutter-md ddos-config-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{debounce:"500",mask:"######",class:"col",modelValue:(0,n.SU)(i).reqCount,"onUpdate:modelValue":a[0]||(a[0]=t=>(0,n.SU)(i).reqCount=t),modelModifiers:{number:!0},label:(0,n.SU)(e)("attackConfigPage.reqCountFieldLabel"),hint:(0,n.SU)(e)("attackConfigPage.reqCountFieldHint"),rules:[t=>t>0||(0,n.SU)(e)("attackConfigPage.reqCountValidationHint")]},null,8,["modelValue","label","hint","rules"]),(0,l.Wm)(o,{debounce:"500",mask:"######",class:"col",modelValue:(0,n.SU)(i).intervalLength,"onUpdate:modelValue":a[1]||(a[1]=t=>(0,n.SU)(i).intervalLength=t),modelModifiers:{number:!0},label:(0,n.SU)(e)("attackConfigPage.intervalTimeFieldLabel"),hint:(0,n.SU)(e)("attackConfigPage.intervalTimeFieldHint"),rules:[t=>t>0||(0,n.SU)(e)("attackConfigPage.intervalTimeValidationHint")]},null,8,["modelValue","label","hint","rules"])])),_:1})])),actions:(0,l.w5)((()=>[(0,l.Wm)(u,{flat:"",color:"red",onClick:d,label:(0,n.SU)(e)("attackConfigPage.resetConfigBtnLabel")},null,8,["label"])])),_:1},8,["title"])}}},x=H,D=x;c()(H,"components",{QForm:W.Z,QInput:_.Z,QBtn:u.Z});var j=a(1743),I=a(9231);const z={setup(t){const{t:e}=(0,o.QT)(),a=(0,r.oR)(),i=a.getters["ddos/getIsTargetsAutoUpdateEnabled"],u=a.getters["ddos/getTargetsAutoUpdateInterval"],d=a.getters["ddos/getTargetsFileUrl"],c=(0,n.qj)({isTargetsAutoUpdateEnabled:i,targetsAutoUpdateInterval:u,targetsFileUrl:d}),g=(0,l.Fl)({get(){const t=c.targetsFileUrl;return"targets.json"===t?"https://war.apexi.tech/"+t:t},async set(t){await(0,j.s)(t)?c.targetsFileUrl=t:(0,I.cB)("Error")}});(0,l.YP)(c,(({isTargetsAutoUpdateEnabled:t,targetsAutoUpdateInterval:e,targetsFileUrl:l})=>{a.dispatch("ddos/setTargetsUpdateSettings",{isTargetsAutoUpdateEnabled:t,targetsAutoUpdateInterval:e,targetsFileUrl:l})}));const p=()=>{a.dispatch("ddos/setDefaultTargets")};return(t,a)=>{const o=(0,l.up)("q-toggle"),r=(0,l.up)("q-input"),i=(0,l.up)("q-form"),u=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)((0,n.SU)(s.Z),{class:"col-12",title:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.title")},{body:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"row q-gutter-md ddos-targets-auto-update-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{type:"boolean",color:"primary",class:"col",modelValue:(0,n.SU)(c).isTargetsAutoUpdateEnabled,"onUpdate:modelValue":a[0]||(a[0]=t=>(0,n.SU)(c).isTargetsAutoUpdateEnabled=t),label:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.isEnabledFieldLabel"),hint:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.isEnabledFieldHint")},null,8,["modelValue","label","hint"]),(0,l.Wm)(r,{class:"col",suffix:"minutes",debounce:"500",mask:"######",modelValue:(0,n.SU)(c).targetsAutoUpdateInterval,"onUpdate:modelValue":a[1]||(a[1]=t=>(0,n.SU)(c).targetsAutoUpdateInterval=t),modelModifiers:{number:!0},label:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.intervalFieldLabel"),hint:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.intervalFieldHint"),rules:[t=>t>=5||(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.intervalValidationHint")]},null,8,["modelValue","label","hint","rules"]),(0,l.Wm)(r,{type:"text",class:"col-12 q-pr-md",debounce:"500",modelValue:(0,n.SU)(g),"onUpdate:modelValue":a[2]||(a[2]=t=>(0,n.dq)(g)?g.value=t:null),label:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.targetsFileUrlLabel"),hint:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.targetsFileUrlHint")},null,8,["modelValue","label","hint"])])),_:1})])),actions:(0,l.w5)((()=>[(0,l.Wm)(u,{flat:"",color:"red",onClick:p,label:(0,n.SU)(e)("attackConfigPage.targetsAutoUpdate.forceUpdateBtnLabel")},null,8,["label"])])),_:1},8,["title"])}}};var E=a(689);const R=z,Y=R;c()(z,"components",{QForm:W.Z,QToggle:E.Z,QInput:_.Z,QBtn:u.Z});var $=a(8597);const N={props:{label:{type:String,required:!0}},setup(t){const e=(0,r.oR)(),a=(0,$.tv)(),n=()=>{e.dispatch("ddos/destroyBrowserAttack"),e.commit("ddos/setBrowserAttackStatus",!0),a.push({name:"DdosAttack"})};return(e,a)=>{const o=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)(o,{label:t.label,onClick:n,color:"primary"},null,8,["label"])}}},K=N,M=K;c()(N,"components",{QBtn:u.Z});const O={setup(t){const{t:e}=(0,o.QT)();return(t,a)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(s.Z),{class:"col-12"},{actions:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(M),{label:(0,n.SU)(e)("attackConfigPage.startAttackBtnLabel")},null,8,["label"])])),_:1}))}},G=O,J=G;a(6509);const X=async()=>{try{const t=await fetch("https://api.db-ip.com/v2/free/self"),e=await t.json();return e}catch(t){return console.error(t),{}}},tt={key:0,class:"text-red text-bold"},et={class:"ul-reset"},at={class:"flex column items-end"},lt={key:0,class:"text-grey"},nt={setup(t){const{t:e}=(0,o.QT)(),a=(0,n.qj)([]),s=(0,n.iH)(!1),r=(0,n.iH)(),i=(0,n.iH)(!1),u=(0,n.iH)(!1),d=async()=>{s.value=!0;const t=await X();if(a.splice(0,a.length),!t.countryCode)return i.value=!1,void(s.value=!1);i.value=!0,u.value="RU"!==t.countryCode&&"BY"!==t.countryCode,a.push({label:e("ipNotify.ipLabel"),info:t.ipAddress},{label:"IP Country",info:`${t.continentName} ${t.countryName}, ${t.city}`}),r.value=(new Date).toLocaleTimeString(),s.value=!1};return(0,l.wF)((()=>{d()})),(t,o)=>{const c=(0,l.up)("q-btn"),g=(0,l.up)("q-banner");return i.value?((0,l.wg)(),(0,l.j4)(g,{key:0,rounded:"",class:(0,m.C_)({"bg-red-1":u.value,"bg-grey-3":!u.value})},{action:(0,l.w5)((()=>[(0,l._)("div",at,[(0,l.Wm)(c,{onClick:d,label:(0,n.SU)(e)("ipNotify.reloadBtnLabel"),flat:"",loading:s.value},null,8,["label","loading"]),r.value?((0,l.wg)(),(0,l.iD)("div",lt,(0,m.zw)((0,n.SU)(e)("ipNotify.updatedAtLabel"))+": "+(0,m.zw)(r.value),1)):(0,l.kq)("",!0)])])),default:(0,l.w5)((()=>[u.value?((0,l.wg)(),(0,l.iD)("p",tt,(0,m.zw)((0,n.SU)(e)("ipNotify.title")),1)):(0,l.kq)("",!0),(0,l._)("ul",et,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(a),(({label:t,info:e},a)=>((0,l.wg)(),(0,l.iD)("li",null,[(0,l._)("b",null,(0,m.zw)(t)+":",1),(0,l.Uk)(" "+(0,m.zw)(e),1)])))),256))])])),_:1},8,["class"])):(0,l.kq)("",!0)}}},ot=nt,st=ot;c()(nt,"components",{QBanner:F.Z,QBtn:u.Z});const rt={setup(t){const{t:e}=(0,o.QT)();return(t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)((0,n.SU)(s.Z),{class:"col-12",title:(0,n.SU)(e)("attackConfigPage.pageTitle")},{body:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(st))])),actions:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(M),{label:(0,n.SU)(e)("attackConfigPage.startAttackBtnLabel")},null,8,["label"])])),_:1},8,["title"]),(0,l.Wm)((0,n.SU)(B)),(0,l.Wm)((0,n.SU)(D)),(0,l.Wm)((0,n.SU)(Y)),(0,l.Wm)((0,n.SU)(J))],64))}},it=rt,ut=it}}]);