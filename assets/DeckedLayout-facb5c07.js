import{u as o,j as e,c as s,N as x}from"./index-8f180057.js";import{H as u,M as h,U as j}from"./AuthorityCheck-c8664ba0.js";import{H as f,a as v,S as N}from"./Setting-8d0d9734.js";import{u as y}from"./useResponsive-7e75417c.js";import{V as H}from"./Views-0f0dd1b0.js";import"./slicedToArray-4e770983.js";import"./index.esm-d559b7a8.js";import"./Drawer-9e2f40a2.js";import"./index-21bd03ca.js";import"./CloseButton-f457d2a5.js";import"./withHeaderItem-808829d1.js";import"./index-50da1f05.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-c46cdf61.js";import"./usePopper-4f231cdc.js";import"./index.esm-047fe164.js";import"./index-56b40026.js";import"./index-57f971c2.js";import"./useUncertainRef-cd8eb299.js";import"./isNil-7f5c5bc3.js";import"./useUniqueId-b6b18158.js";import"./toString-6546c1f5.js";import"./chainedFunction-070f832c.js";import"./index-8db80fc8.js";import"./useRootClose-849d9b9c.js";import"./Logo-20ac1a51.js";const g=a=>{const{className:n,contained:i}=a,t=o(r=>r.theme.navMode),m=o(r=>r.theme.themeColor),l=o(r=>r.theme.primaryColorLevel),c=o(r=>r.auth.user.authority),{larger:d}=y(),p=()=>t===x?`bg-${m}-${l} secondary-header-${t}`:`secondary-header-${t}`;return e.jsx(e.Fragment,{children:d.md&&e.jsx("div",{className:s("h-16 flex items-center",p(),n),children:e.jsx("div",{className:s("flex items-center px-4",i&&"container mx-auto"),children:e.jsx(f,{manuVariant:t,userAuthority:c})})})})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(h,{})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(j,{hoverable:!1})]}),X=()=>e.jsx("div",{className:"app-layout-simple flex flex-auto flex-col min-h-screen",children:e.jsx("div",{className:"flex flex-auto min-w-0",children:e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(u,{container:!0,className:"shadow dark:shadow-2xl",headerStart:e.jsx(w,{}),headerEnd:e.jsx(C,{})}),e.jsx(g,{contained:!0}),e.jsx(H,{pageContainerType:"contained"})]})})});export{X as default};
