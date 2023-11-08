import{O as k,r as S,j as e,u as n,a as d,c as m,P as N,Q as T,R as D,T as L,V as w,W as E,X as _,Y as M,Z as P,$ as O,a0 as v,N as h,a1 as R,a2 as Y,M as x}from"./index-afeb99dd.js";import{D as A}from"./Drawer-6021c63b.js";import{L as I,d as U,j as B}from"./index.esm-f4f10cf9.js";import{S as H}from"./Switcher-83e7e292.js";import{S as g}from"./index-b82cade4.js";import{S as G}from"./SegmentItemOption-666cf094.js";import{D as V}from"./DoubleSidedImage-576ed11c.js";import{u as $}from"./useThemeClass-a6e6a15d.js";import{S as j,c as z}from"./Select-2984c046.js";import{B as K}from"./Badge-57260147.js";import{B as f}from"./Button-5e9321cd.js";import{I as F}from"./index-ed8cb66a.js";import{R as p}from"./index-fde04e31.js";import{t as q,N as J}from"./toast-b57ee67d.js";import{w as Q}from"./withHeaderItem-16f228d3.js";const W=()=>{const[s,t]=k(),r=S.useCallback(a=>{t(a?"dark":"light")},[t]);return e.jsx("div",{children:e.jsx(H,{defaultChecked:s,onChange:a=>r(a)})})},X=[{value:N,label:"Classic",src:"/img/thumbs/layouts/classic.jpg",srcDark:"/img/thumbs/layouts/classic-dark.jpg"},{value:T,label:"Mordern",src:"/img/thumbs/layouts/modern.jpg",srcDark:"/img/thumbs/layouts/modern-dark.jpg"},{value:D,label:"Stacked Side",src:"/img/thumbs/layouts/stackedSide.jpg",srcDark:"/img/thumbs/layouts/stackedSide-dark.jpg"},{value:L,label:"Simple",src:"/img/thumbs/layouts/simple.jpg",srcDark:"/img/thumbs/layouts/simple-dark.jpg"},{value:w,label:"Decked",src:"/img/thumbs/layouts/decked.jpg",srcDark:"/img/thumbs/layouts/decked-dark.jpg"},{value:E,label:"Blank",src:"/img/thumbs/layouts/blank.jpg",srcDark:"/img/thumbs/layouts/blank-dark.jpg"}],Z=()=>{const s=n(l=>l.theme.layout.type),t=d(),r=l=>{t(_(l))},{textTheme:a}=$();return e.jsx("div",{children:e.jsx(g,{className:"w-full",value:[s],onChange:l=>r(l[0]),children:e.jsx("div",{className:"grid grid-cols-3 gap-4 w-full",children:X.map(l=>e.jsx(g.Item,{value:l.value,children:({active:o,onSegmentItemClick:u,disabled:c})=>e.jsxs("div",{className:"text-center",children:[e.jsx(G,{hoverable:!0,active:o,disabled:c,defaultGutter:!1,className:"relative min-h-[80px] w-full",customCheck:e.jsx(I,{className:m(a,"absolute top-2 right-2 text-lg")}),onSegmentItemClick:u,children:e.jsx(V,{className:"rounded-md",src:l.src,darkModeSrc:l.srcDark,alt:""})}),e.jsx("div",{className:m(o&&a,"mt-2 font-semibold"),children:l.label})]})},l.value))})})})},{Control:ee}=z,b=[{label:"Red",value:"red"},{label:"Orange",value:"orange"},{label:"Amber",value:"amber"},{label:"Yellow",value:"yellow"},{label:"Lime",value:"lime"},{label:"Green",value:"green"},{label:"Emerald",value:"emerald"},{label:"Teal",value:"teal"},{label:"Cyan",value:"cyan"},{label:"Sky",value:"sky"},{label:"Blue",value:"blue"},{label:"Indigo",value:"indigo"},{label:"Violet",value:"violet"},{label:"Purple",value:"purple"},{label:"Fuchsia",value:"fuchsia"},{label:"Pink",value:"pink"},{label:"Rose",value:"rose"}],C=[{label:"400",value:400},{label:"500",value:500},{label:"600",value:600},{label:"700",value:700},{label:"800",value:800},{label:"900",value:900}],y=({className:s,themeColor:t})=>{const r=n(a=>a.theme.primaryColorLevel);return e.jsx(K,{className:s,innerClass:m(`bg-${t}-${r}`)})},se=({innerProps:s,label:t,data:r,isSelected:a})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${a?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{themeColor:r.value}),e.jsx("span",{children:t})]}),a&&e.jsx(U,{className:"text-emerald-500 text-xl"})]}),le=({children:s,...t})=>{const r=t.getValue()[0],a=n(l=>l.theme.themeColor);return e.jsxs(ee,{...t,children:[r&&e.jsx(y,{themeColor:a,className:"ltr:ml-4 rtl:mr-4"}),s]})},ae=()=>{const s=d(),t=n(o=>o.theme.themeColor),r=n(o=>o.theme.primaryColorLevel),a=({value:o})=>{s(M(o))},l=({value:o})=>{s(P(o))};return e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(j,{size:"sm",options:b,components:{Option:se,Control:le},value:b.filter(o=>o.value===t),onChange:o=>a(o)}),e.jsx(j,{size:"sm",options:C,value:C.filter(o=>o.value===r),onChange:o=>l(o)})]})},te=[{value:v.DIR_LTR,label:"LTR"},{value:v.DIR_RTL,label:"RTL"}],re=({callBackClose:s})=>{const[t,r]=O(),a=l=>{r(l),s==null||s()};return e.jsx(F,{size:"sm",children:te.map(l=>e.jsx(f,{active:t===l.value,onClick:()=>a(l.value),children:l.label},l.value))})},oe=()=>{const s=n(a=>a.theme.navMode),t=d(),r=a=>{t(R(a))};return e.jsxs(p.Group,{value:s===h?h:"default",onChange:r,children:[e.jsx(p,{value:"default",children:"Default"}),e.jsx(p,{value:h,children:"Themed"})]})},ne=()=>{const s=n(r=>r.theme),t=()=>{const r={...Y,...s,layout:{type:s.layout.type,sideNavCollapse:s.layout.sideNavCollapse},panelExpand:!1};navigator.clipboard.writeText(JSON.stringify(r,null,2)),q.push(e.jsx(J,{title:"Copy Success",type:"success",children:"Please replace themeConfig in 'src/configs/themeConfig.js'"}),{placement:"top-center"})};return e.jsx(f,{block:!0,variant:"solid",onClick:t,children:"Copy config"})},ie=({callBackClose:s})=>e.jsxs("div",{className:"flex flex-col h-full justify-between",children:[e.jsxs("div",{className:"flex flex-col gap-y-10 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h6",{children:"Dark Mode"}),e.jsx("span",{children:"Switch theme to dark mode"})]}),e.jsx(W,{})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h6",{children:"Direction"}),e.jsx("span",{children:"Select a direction"})]}),e.jsx(re,{callBackClose:s})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-3",children:"Nav Mode"}),e.jsx(oe,{})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-3",children:"Theme"}),e.jsx(ae,{})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-3",children:"Layout"}),e.jsx(Z,{})]})]}),e.jsx(ne,{})]}),ce=s=>e.jsx(ie,{...s}),me=s=>{const t=d(),{className:r,...a}=s,l=n(i=>i.theme.panelExpand),o=n(i=>i.theme.direction),u=()=>{t(x(!0))},c=()=>{t(x(!1));const i=document.body.classList;i.contains("drawer-lock-scroll")&&i.remove("drawer-lock-scroll","drawer-open")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:m("text-2xl",r),onClick:u,...a,children:e.jsx(B,{})}),e.jsx(A,{title:"Theme Config",isOpen:l,placement:o==="rtl"?"left":"right",width:375,onClose:c,onRequestClose:c,children:e.jsx(ce,{callBackClose:c})})]})},Te=Q(me);export{Te as S};
