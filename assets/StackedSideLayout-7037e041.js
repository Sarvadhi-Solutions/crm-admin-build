import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-bbbc5aef.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-9cae0ae0.js";import{S as W}from"./SidePanel-eda72b09.js";import{S as Y,L as z,N as q}from"./Notification-0f219a2a.js";import{L as J}from"./Logo-d3e6cbdb.js";import{M as k}from"./index-68d7d285.js";import{S as I}from"./ScrollBar-4ef3413f.js";import{u as Q,V as X}from"./VerticalMenuContent-5f1fd35d.js";import{i as A,V as Z}from"./Views-461d6d23.js";import{B as ee}from"./Button-2283a1ae.js";import{H as te,a as se}from"./index.esm-0cfcd98b.js";import{u as re}from"./useResponsive-a39bf3cf.js";import"./slicedToArray-05284d27.js";import"./Drawer-df90174f.js";import"./index-090932fb.js";import"./CloseButton-9253ead7.js";import"./withHeaderItem-57520448.js";import"./index-a63cc66f.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-4497b1a4.js";import"./usePopper-0ae032d9.js";import"./index.esm-41a7091c.js";import"./index-2b158e9a.js";import"./index-a99fb528.js";import"./useUncertainRef-ee625e1d.js";import"./isNil-7ec1f898.js";import"./useUniqueId-f46514d1.js";import"./toString-63639ad5.js";import"./chainedFunction-070f832c.js";import"./index-af162539.js";import"./useRootClose-d827e4e3.js";import"./Switcher-b3a1e5e3.js";import"./index-8a7d23d7.js";import"./useControllableState-42b7aa2f.js";import"./SegmentItemOption-2d55cc81.js";import"./useThemeClass-3a8cacfd.js";import"./DoubleSidedImage-1b6aa50c.js";import"./Select-839ea91c.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9c5111bd.js";import"./floating-ui.dom-bef9cea3.js";import"./get-62892753.js";import"./_MapCache-e561c792.js";import"./Badge-084d6baa.js";import"./index-45df0f5a.js";import"./index-3059edce.js";import"./toast-54f598af.js";import"./useTimeout-9da66979.js";import"./StatusIcon-add507ab.js";import"./Dialog-826b1acc.js";import"./debounce-27b325af.js";import"./isLastChild-83eb4c23.js";import"./acronym-90e1a23f.js";import"./_getPrototype-2e29ca85.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),mt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{mt as default};
