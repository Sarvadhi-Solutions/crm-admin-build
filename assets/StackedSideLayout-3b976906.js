import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-c77e9099.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-43a052d3.js";import{S as W}from"./SidePanel-9bef0915.js";import{S as Y,L as z,N as q}from"./Notification-5a1b4539.js";import{L as J}from"./Logo-775b4772.js";import{M as k}from"./index-e5464857.js";import{S as I}from"./ScrollBar-d87413db.js";import{u as Q,V as X}from"./VerticalMenuContent-0a522d78.js";import{i as A,V as Z}from"./Views-be916da3.js";import{B as ee}from"./Button-8951ba48.js";import{H as te,a as se}from"./index.esm-4b0bd194.js";import{u as re}from"./useResponsive-0bfcaddb.js";import"./slicedToArray-93b9542e.js";import"./Drawer-a5c13906.js";import"./index-b2cb0b76.js";import"./CloseButton-f50ce578.js";import"./withHeaderItem-92a229ac.js";import"./index-334a58a8.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-83166a48.js";import"./usePopper-69d78754.js";import"./index.esm-79eb7ede.js";import"./index-6651b5a0.js";import"./index-d00b8073.js";import"./useUncertainRef-dd8a1351.js";import"./isNil-04bb82de.js";import"./useUniqueId-3d091906.js";import"./toString-6e4e2442.js";import"./chainedFunction-070f832c.js";import"./index-862fd306.js";import"./useRootClose-7bb7783f.js";import"./Switcher-ef699af1.js";import"./index-60a5479c.js";import"./useControllableState-4f25de13.js";import"./SegmentItemOption-f9b7a45e.js";import"./useThemeClass-3d925ead.js";import"./DoubleSidedImage-3c96b4ef.js";import"./Select-f0211447.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-fcd8b891.js";import"./floating-ui.dom-bef9cea3.js";import"./get-633bd519.js";import"./_MapCache-91949216.js";import"./Badge-fee63923.js";import"./index-a0745529.js";import"./index-6c291714.js";import"./toast-66b29920.js";import"./useTimeout-21f2437b.js";import"./StatusIcon-5c4e4482.js";import"./Dialog-07ba3ada.js";import"./debounce-597d60f6.js";import"./isLastChild-83eb4c23.js";import"./acronym-b21ecd73.js";import"./_getPrototype-d7da50fb.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),mt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{mt as default};
