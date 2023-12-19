import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-c4854441.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-d7e32898.js";import{S as W}from"./SidePanel-6571a0a6.js";import{S as Y,L as z,N as q}from"./Notification-0f7a185e.js";import{L as J}from"./Logo-bb62ffc2.js";import{M as k}from"./index-69125dab.js";import{S as I}from"./ScrollBar-7a627a75.js";import{u as Q,V as X}from"./VerticalMenuContent-bb766265.js";import{i as A,V as Z}from"./Views-a7a22f5b.js";import{B as ee}from"./Button-01aee70f.js";import{H as te,a as se}from"./index.esm-600eab3e.js";import{u as re}from"./useResponsive-9c4c1865.js";import"./slicedToArray-5b2b8266.js";import"./Drawer-459fd2f8.js";import"./index-12fb9f3c.js";import"./CloseButton-481ca768.js";import"./withHeaderItem-0aa5d122.js";import"./index-7f0011a9.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-ff9677e2.js";import"./usePopper-36d997d0.js";import"./index.esm-40a48121.js";import"./index-611f00f8.js";import"./index-516e2d91.js";import"./useUncertainRef-3dcc2864.js";import"./isNil-c3c7dc62.js";import"./useUniqueId-ef880a97.js";import"./toString-9f124ebf.js";import"./chainedFunction-070f832c.js";import"./index-337c98e1.js";import"./useRootClose-7d26ea3b.js";import"./index.esm-39ca8e65.js";import"./Switcher-9b266edd.js";import"./index-fee22201.js";import"./useControllableState-f590672a.js";import"./SegmentItemOption-e39e8725.js";import"./useThemeClass-58ccaa98.js";import"./DoubleSidedImage-b7d8a391.js";import"./Select-a3dcfbd9.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./floating-ui.dom-bef9cea3.js";import"./get-1a41de3d.js";import"./_MapCache-cce6ed45.js";import"./Badge-ab812656.js";import"./index-b9e48651.js";import"./index-6afc7114.js";import"./toast-f5971c5e.js";import"./useTimeout-52e2a342.js";import"./StatusIcon-9c6ff3de.js";import"./Dialog-1a78eb06.js";import"./debounce-af9b1df5.js";import"./isLastChild-83eb4c23.js";import"./acronym-1e3301b9.js";import"./_getPrototype-37ec97c4.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),dt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{dt as default};
