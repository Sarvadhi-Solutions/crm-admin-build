import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-f40e4d75.js";import{n as g,a as _,u as P,H as F,M as B,U}from"./UserDropdown-88233dd5.js";import{S as G}from"./SidePanel-342c6de7.js";import{S as W,L as Y,N as z}from"./Notification-5fcfb415.js";import{L as q}from"./Logo-5549f6ac.js";import{M as k}from"./index-b8391898.js";import{S as I}from"./ScrollBar-96d4eb77.js";import{A as J}from"./AuthorityCheck-5314aa83.js";import{u as Q,V as X}from"./VerticalMenuContent-841a9346.js";import{i as A,V as Z}from"./Views-4f4cfc12.js";import{B as ee}from"./Button-50d583fa.js";import{H as te,a as se}from"./index.esm-0d86f991.js";import{u as re}from"./useResponsive-2bcc876b.js";import"./slicedToArray-ed1b3644.js";import"./Drawer-4f8a2134.js";import"./index-abc0a377.js";import"./CloseButton-579d2861.js";import"./withHeaderItem-d14a707b.js";import"./NavToggle-f9cc257a.js";import"./index-3d26675f.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./index-89133a2f.js";import"./useUncertainRef-8f47aa92.js";import"./isNil-867ba5c2.js";import"./useUniqueId-e478c472.js";import"./toString-1320cce2.js";import"./chainedFunction-070f832c.js";import"./index-1ec1c1e6.js";import"./useRootClose-e34f1b82.js";import"./index.esm-aae0d437.js";import"./Switcher-5c6f9f0a.js";import"./index-e26259ee.js";import"./useControllableState-a88821e3.js";import"./context-51e9908c.js";import"./SegmentItemOption-cb520f30.js";import"./useThemeClass-faaaa3eb.js";import"./DoubleSidedImage-7a2d0423.js";import"./Select-1c5bed57.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-b6817789.js";import"./floating-ui.dom-bef9cea3.js";import"./get-8208bc30.js";import"./_MapCache-11f94205.js";import"./Badge-6fa7c653.js";import"./index-05e52686.js";import"./index-0b72efdb.js";import"./toast-a13e90a2.js";import"./useTimeout-e87eb97a.js";import"./StatusIcon-e5b0e9d4.js";import"./Dialog-7705a764.js";import"./debounce-8b6b031e.js";import"./isLastChild-83eb4c23.js";import"./acronym-c904e67f.js";import"./_getPrototype-fd20deb2.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:m,onSetActiveKey:c,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),c([s])},f=({key:s})=>{o({}),c([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(q,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:m||[r.key],children:g.map(s=>e.jsx(J,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:m,onCollapse:c,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{c()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:m,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=P(),[i,o]=M.useState({}),[h,m]=M.useState([]),c=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${c}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),m([])},N=t=>{m(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(W,{})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(z,{}),e.jsx(G,{}),e.jsx(U,{hoverable:!1})]}),yt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(F,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(me,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{yt as default};
