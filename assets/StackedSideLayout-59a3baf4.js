import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-ba91c0fd.js";import{n as g,A as P,a as _,u as F,H as B,M as U,U as G}from"./AuthorityCheck-0fb1da88.js";import{S as W}from"./SidePanel-b1a63d01.js";import{S as Y,L as z,N as q}from"./Notification-4827f947.js";import{L as J}from"./Logo-0e79bf89.js";import{M as k}from"./index-0bf35a02.js";import{S as I}from"./ScrollBar-1f3fb77b.js";import{u as Q,V as X}from"./VerticalMenuContent-9a39335f.js";import{i as A,V as Z}from"./Views-e9280400.js";import{B as ee}from"./Button-4d442f63.js";import{H as te,a as se}from"./index.esm-55e99400.js";import{u as re}from"./useResponsive-a87fa9b5.js";import"./slicedToArray-558a0a0c.js";import"./Drawer-f1cc950e.js";import"./index-9a9b01aa.js";import"./CloseButton-7e3ca34d.js";import"./withHeaderItem-2e7a853a.js";import"./index-e15db965.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-d4e69970.js";import"./usePopper-549b69fd.js";import"./index.esm-5fbbd29b.js";import"./index-8ea85167.js";import"./index-b648c4d1.js";import"./useUncertainRef-41d92c6b.js";import"./isNil-5f65db87.js";import"./useUniqueId-018c2565.js";import"./toString-727d28b4.js";import"./chainedFunction-070f832c.js";import"./index-ccd97808.js";import"./useRootClose-8f322f83.js";import"./Switcher-49168a68.js";import"./index-d176cad0.js";import"./useControllableState-f5082273.js";import"./SegmentItemOption-d89e5f60.js";import"./useThemeClass-06f59d25.js";import"./DoubleSidedImage-f56761c0.js";import"./Select-73b9b11b.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5585411f.js";import"./floating-ui.dom-bef9cea3.js";import"./get-86e63167.js";import"./_MapCache-52b86039.js";import"./Badge-ff5c7dc3.js";import"./index-1c2b060b.js";import"./index-75ffb2be.js";import"./toast-b9105828.js";import"./useTimeout-80ea9231.js";import"./StatusIcon-721e0795.js";import"./Dialog-c161d2fe.js";import"./debounce-97eb29be.js";import"./isLastChild-83eb4c23.js";import"./acronym-aef8c32c.js";import"./_getPrototype-17f2df3f.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:c,onSetActiveKey:m,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),m([s])},f=({key:s})=>{o({}),m([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(J,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:c||[r.key],children:g.map(s=>e.jsx(P,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:c,onCollapse:m,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{m()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:c,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=F(),[i,o]=M.useState({}),[h,c]=M.useState([]),m=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${m}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),c([])},N=t=>{c(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(Y,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(G,{hoverable:!1})]}),mt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(B,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{mt as default};
