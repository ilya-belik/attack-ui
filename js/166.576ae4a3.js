"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[166],{2166:(e,t,l)=>{l.r(t),l.d(t,{default:()=>B});var o=l(536),a=l(6902),u=l(9676),n=l(2496);const s={props:{list:{type:Array,default:()=>[]}},emits:[],setup(e,{emit:t}){const{t:l}=(0,n.QT)();return(t,n)=>{const s=(0,o.up)("q-icon"),r=(0,o.up)("q-item-section"),d=(0,o.up)("q-item"),p=(0,o.up)("q-list"),m=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(p,{separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(({text:e,to:t,showRule:n,icon:p},c)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[!n||n()?(0,o.wy)(((0,o.wg)(),(0,o.j4)(d,{key:c+e,to:t,clickable:""},{default:(0,o.w5)((()=>[p?((0,o.wg)(),(0,o.j4)(r,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:p},null,8,["name"])])),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)((0,a.SU)(l)(e)),1)])),_:2},1024)])),_:2},1032,["to"])),[[m]]):(0,o.kq)("",!0)],64)))),256))])),_:1})}}};var r=l(2163),d=l(4823),p=l(9655),m=l(8867),c=l(2656),i=l(2417),w=l.n(i);const v=s,g=v;w()(s,"components",{QList:r.Z,QItem:d.Z,QItemSection:p.Z,QIcon:m.Z}),w()(s,"directives",{Ripple:c.Z});const b={props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u=(0,o.Fl)({get(){return l.modelValue},set(e){t("update:modelValue",e)}}),n=[{text:"nav.ddosDasboardLabel",icon:"dns",to:{name:"DdosAttack"}},{text:"nav.ddosConfigLabel",icon:"settings",to:{name:"DdosConfig"}}];return(e,t)=>{const l=(0,o.up)("q-drawer");return(0,o.wg)(),(0,o.j4)(l,{modelValue:(0,a.SU)(u),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.dq)(u)?u.value=e:null),"show-if-above":"",side:"left",width:280,bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(g),{list:n})])),_:1},8,["modelValue"])}}};var f=l(3909);const q=b,V=q;w()(b,"components",{QDrawer:f.Z});const _={setup(e){const t=(0,a.iH)("Attack UI");return(e,l)=>(0,u.zw)(t.value)}},Q=_,h=Q,k={props:{color:{type:String,default:"white"}},setup(e){const{locale:t,t:l}=(0,n.QT)({useScope:"global"}),s=[{value:"ru",label:"Русский"},{value:"en",label:"English"}];return(0,o.YP)(t,(()=>{localStorage.setItem("lang",t.value)})),(l,n)=>{const r=(0,o.up)("q-icon"),d=(0,o.up)("q-select");return(0,o.wg)(),(0,o.j4)(d,{modelValue:(0,a.SU)(t),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.dq)(t)?t.value=e:null),options:s,borderless:"","emit-value":"","map-options":"","options-dense":"",behavior:"menu","hide-dropdown-icon":"","hide-bottom-space":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"language",size:"sm",color:e.color},null,8,["color"])])),"selected-item":(0,o.w5)((({opt:t})=>[(0,o._)("span",{class:(0,u.C_)(`text-${e.color}`)},(0,u.zw)(t.label),3)])),_:1},8,["modelValue"])}}};var Z=l(3137);const U=k,W=U;w()(k,"components",{QSelect:Z.Z,QIcon:m.Z});const S={props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u=()=>{t("update:modelValue",!l.modelValue)};return(e,t)=>{const l=(0,o.up)("q-btn"),n=(0,o.up)("q-toolbar-title"),s=(0,o.up)("q-toolbar"),r=(0,o.up)("q-header");return(0,o.wg)(),(0,o.j4)(r,{reveal:"",bordered:"",class:"bg-primary text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{dense:"",flat:"",round:"",icon:"menu",onClick:u}),(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(h))])),_:1}),(0,o.Wm)((0,a.SU)(W),{color:"white"})])),_:1})])),_:1})}}};var y=l(6012),j=l(2468),C=l(2235),D=l(7900);const H=S,I=H;w()(S,"components",{QHeader:y.Z,QToolbar:j.Z,QBtn:C.Z,QToolbarTitle:D.Z});const x={setup(e){const t=(0,a.iH)(!1);return(e,l)=>{const u=(0,o.up)("router-view"),n=(0,o.up)("q-page"),s=(0,o.up)("q-page-container"),r=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(r,{view:"hHh lpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(V),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},null,8,["modelValue"]),(0,o.Wm)((0,a.SU)(I),{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e)},null,8,["modelValue"]),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"q-pl-md q-pr-md q-pb-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})])),_:1})])),_:1})}}};var T=l(6327),z=l(1036),L=l(251);const A=x,B=A;w()(x,"components",{QLayout:T.Z,QPageContainer:z.Z,QPage:L.Z})}}]);