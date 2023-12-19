import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-9ca3e01c.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-ddb53374.js";import{S as W}from"./SidePanel-d812bad2.js";import{S as Y,L as z,N as q}from"./Notification-e34671e0.js";import{L as J}from"./Logo-b35cc6e7.js";import{M as k}from"./index-774679c3.js";import{S as I}from"./ScrollBar-cac6bbf2.js";import{u as Q,V as X}from"./VerticalMenuContent-4b944b97.js";import{i as A,V as Z}from"./Views-42612634.js";import{B as ee}from"./Button-da045d3b.js";import{H as te,a as se}from"./index.esm-6b1f01ae.js";import{u as re}from"./useResponsive-31c623d8.js";import"./slicedToArray-c0178fc0.js";import"./Drawer-5ebdae63.js";import"./index-1a0b7dc8.js";import"./CloseButton-6b9b0cd5.js";import"./withHeaderItem-bee90f4b.js";import"./index-494119d6.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-07d43494.js";import"./usePopper-17a543ac.js";import"./index.esm-b4bc7f1b.js";import"./index-cfbd213c.js";import"./index-82b50102.js";import"./useUncertainRef-9f46c49d.js";import"./isNil-86adf5c4.js";import"./useUniqueId-6324d8a0.js";import"./toString-8635ec69.js";import"./chainedFunction-070f832c.js";import"./index-bc261936.js";import"./useRootClose-c82559b3.js";import"./Switcher-2d0cc416.js";import"./index-6d5fd88b.js";import"./useControllableState-b48849fb.js";import"./SegmentItemOption-5201e7ab.js";import"./useThemeClass-7969df0f.js";import"./DoubleSidedImage-d0ea17a3.js";import"./Select-36a3bae0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-11b6685e.js";import"./floating-ui.dom-bef9cea3.js";import"./get-a0df1ab5.js";import"./_MapCache-f937324f.js";import"./Badge-85dac0e9.js";import"./index-c083248d.js";import"./index-c6c028e4.js";import"./toast-de05ed0a.js";import"./useTimeout-d0655f05.js";import"./StatusIcon-f3e19ac0.js";import"./Dialog-cdd3831f.js";import"./debounce-d66885fb.js";import"./isLastChild-83eb4c23.js";import"./acronym-62d8acbf.js";import"./_getPrototype-8ba892ec.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),mt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{mt as default};
