import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-3b75abce.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-4e472f86.js";import{S as W}from"./SidePanel-c044d2da.js";import{S as Y,L as z,N as q}from"./Notification-cb039c3b.js";import{L as J}from"./Logo-b643edd8.js";import{M as k}from"./index-45f3422c.js";import{S as I}from"./ScrollBar-3c5f8283.js";import{u as Q,V as X}from"./VerticalMenuContent-c937a84a.js";import{i as A,V as Z}from"./Views-6fb03b81.js";import{B as ee}from"./Button-aa548732.js";import{H as te,a as se}from"./index.esm-93048f5c.js";import{u as re}from"./useResponsive-17c5716b.js";import"./slicedToArray-f197f283.js";import"./Drawer-15ac5d62.js";import"./index-38427021.js";import"./CloseButton-fa51e0e0.js";import"./withHeaderItem-a39374bf.js";import"./index-77bdb034.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-d837fb36.js";import"./usePopper-a53aa304.js";import"./index.esm-ee280f6e.js";import"./index-45df90b8.js";import"./index-3c0f9d3a.js";import"./useUncertainRef-a63c0b8a.js";import"./isNil-c598595d.js";import"./useUniqueId-c6f2310d.js";import"./toString-0e65f0bb.js";import"./chainedFunction-070f832c.js";import"./index-3d5f382b.js";import"./useRootClose-b763db89.js";import"./index.esm-939ff81e.js";import"./Switcher-1ba3538d.js";import"./index-8c67ce72.js";import"./useControllableState-9304705b.js";import"./SegmentItemOption-8cff1a7c.js";import"./useThemeClass-18b89493.js";import"./DoubleSidedImage-01b4cc1c.js";import"./Select-ae2a684c.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c8be4fca.js";import"./floating-ui.dom-bef9cea3.js";import"./get-e1e547eb.js";import"./_MapCache-e81eccfb.js";import"./Badge-066e767d.js";import"./index-43a15a3c.js";import"./index-f38d0e6d.js";import"./toast-0c52027e.js";import"./useTimeout-c5d76f6b.js";import"./StatusIcon-31729652.js";import"./Dialog-908cc387.js";import"./debounce-5741995d.js";import"./isLastChild-83eb4c23.js";import"./acronym-badfe9db.js";import"./_getPrototype-dba6d9d5.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),dt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{dt as default};
