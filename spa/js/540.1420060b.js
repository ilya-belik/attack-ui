"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[540],{695:(t,e,o)=>{o.d(e,{Z:()=>p});var s=o(536),l=o(9676),n=o(6902);const a={class:"text-h6"},r={props:{title:String,actionsAlign:{type:String,default:"right"}},setup(t){const e=t,o=(0,s.Rr)(),r=(0,s.Fl)((()=>e.title||o.title));return(e,o)=>{const c=(0,s.up)("q-card-section"),u=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(u,{flat:"",bordered:"",class:"my-card"},{default:(0,s.w5)((()=>[t.title||this.$slots.title?((0,s.wg)(),(0,s.j4)(c,{key:0},{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s.WI)(e.$slots,"title",{},(()=>[(0,s.Uk)((0,l.zw)(t.title),1)]))])])),_:3})):(0,s.kq)("",!0),this.$slots.body?((0,s.wg)(),(0,s.j4)(c,{key:1,class:(0,l.C_)({"q-pt-none":(0,n.SU)(r)})},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"body")])),_:3},8,["class"])):(0,s.kq)("",!0),this.$slots.actions?((0,s.wg)(),(0,s.j4)(c,{key:2,align:t.actionsAlign},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"actions")])),_:3},8,["align"])):(0,s.kq)("",!0)])),_:3})}}};var c=o(3316),u=o(1007),d=o(2417),i=o.n(d);const m=r,p=m;i()(r,"components",{QCard:c.Z,QCardSection:u.Z})},1540:(t,e,o)=>{o.r(e),o.d(e,{default:()=>x});var s=o(536),l=o(6902),n=o(695),a=o(3721);const r={setup(t){const e=(0,a.oR)(),o=()=>{e.commit("ddos/removeAllTargets")};return(t,e)=>{const l=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)(l,{label:"Remove All Targets",color:"red",flat:"",onClick:o})}}};var c=o(2235),u=o(2417),d=o.n(u);const i=r,m=i;d()(r,"components",{QBtn:c.Z});var p=o(9676);const g={class:"row q-gutter-xs q-mt-lg"},w=(0,s.Uk)(" Click to open in a new tab "),q=["href"],C={setup(t){const e=(0,a.oR)();(0,s.wF)((()=>{e.dispatch("ddos/setDefaultTargets")}));const o=t=>{e.commit("ddos/removeTarget",t)},n=(0,s.Fl)((()=>e.getters["ddos/getTargetsList"]));return(t,e)=>{const a=(0,s.up)("q-tooltip"),r=(0,s.up)("q-chip");return(0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,l.SU)(n),((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e+t,class:"q-gutter-xs"},[(0,s.Wm)(r,{removable:"",outline:"",color:"primary",onRemove:t=>o(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(a,null,{default:(0,s.w5)((()=>[w])),_:1}),(0,s._)("a",{href:t,target:"_blank"},(0,p.zw)(t),9,q)])),_:2},1032,["onRemove"])])))),128))])}}};var b=o(1607),f=o(2951);const k=C,v=k;d()(C,"components",{QChip:b.Z,QTooltip:f.Z});const S={setup(t){const e=(0,a.oR)(),o=(0,l.iH)(),n=()=>{e.commit("ddos/setTarget",{target:o.value,callback(){o.value=""}})};return(t,e)=>{const l=(0,s.up)("q-input"),a=(0,s.up)("q-btn"),r=(0,s.up)("q-form");return(0,s.wg)(),(0,s.j4)(r,{onSubmit:n,class:"row items-baseline full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),label:"Link/ip to target",autofocus:"","stack-label":"",class:"col-8 col-md-4"},null,8,["modelValue"]),(0,s.Wm)(a,{label:"Add",color:"primary",class:"q-ml-lg",type:"submit"})])),_:1})}}};var U=o(4445),W=o(7409);const _=S,Z=_;d()(S,"components",{QForm:U.Z,QInput:W.Z,QBtn:c.Z});const h={setup(t){return(t,e)=>((0,s.wg)(),(0,s.j4)((0,l.SU)(n.Z),{title:"Targets",class:"col-12"},{body:(0,s.w5)((()=>[(0,s.Wm)((0,l.SU)(Z)),(0,s.Wm)((0,l.SU)(v))])),actions:(0,s.w5)((()=>[(0,s.Wm)((0,l.SU)(m))])),_:1}))}},y=h,Q=y,D={setup(t){const e=(0,a.oR)(),o=(0,l.qj)({reqCount:0,streamsCount:0}),r=()=>{const{user:t,default:s}=e.getters["ddos/getDdosConfig"];o.reqCount=t.reqCount||s.reqCount,o.streamsCount=t.streamsCount||s.streamsCount};(0,s.wF)(r),(0,s.YP)(o,(({reqCount:t,streamsCount:o})=>{t&&o&&e.commit("ddos/setDdosConfig",{reqCount:t,streamsCount:o})}));const c=()=>{e.commit("ddos/resetDdosConfig"),r()};return(t,e)=>{const a=(0,s.up)("q-input"),r=(0,s.up)("q-form"),u=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)((0,l.SU)(n.Z),{title:"Connections",class:"col-12"},{body:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"row ddos-config-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:(0,l.SU)(o).reqCount,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,l.SU)(o).reqCount=t),label:"Site requests per second",type:"number",class:"col-12 col-md-6 q-pr-md"},null,8,["modelValue"]),(0,s.Wm)(a,{modelValue:(0,l.SU)(o).streamsCount,"onUpdate:modelValue":e[1]||(e[1]=t=>(0,l.SU)(o).streamsCount=t),label:"Streams count",type:"number",class:"col-12 col-md-6 q-pl-md",disable:"",hint:"In development"},null,8,["modelValue"])])),_:1})])),actions:(0,s.w5)((()=>[(0,s.Wm)(u,{onClick:c,label:"Reset",color:"red",flat:""})])),_:1})}}};var j=o(5586);const R=D,V=R;d()(D,"components",{QForm:U.Z,QInput:W.Z,QBtn:c.Z,QField:j.Z});var A=o(8597);const T={setup(t){const e=(0,a.oR)(),o=(0,A.tv)(),r=()=>{e.dispatch("ddos/destroyBrowserAttack"),e.commit("ddos/setBrowserAttackStatus",!0),o.push({name:"DdosAttack"})};return(t,e)=>{const o=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)((0,l.SU)(n.Z),{class:"col-12"},{actions:(0,s.w5)((()=>[(0,s.Wm)(o,{label:"start attack",onClick:r,color:"primary"})])),_:1})}}},F=T,B=F;d()(T,"components",{QBtn:c.Z});const I={setup(t){return(t,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)((0,l.SU)(n.Z),{class:"col-12",title:"DDOS Configuration"}),(0,s.Wm)((0,l.SU)(Q)),(0,s.Wm)((0,l.SU)(V)),(0,s.Wm)((0,l.SU)(B))],64))}},$=I,x=$}}]);