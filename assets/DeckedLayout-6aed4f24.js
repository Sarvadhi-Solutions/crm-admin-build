import{u as o,j as e,c as s,N as x}from"./index-4fc5ac15.js";import{H as u,M as h,U as j}from"./AuthorityCheck-29768af5.js";import{H as f,a as v,S as N}from"./Setting-abcb1c70.js";import{u as y}from"./useResponsive-248d05f8.js";import{V as H}from"./Views-63244708.js";import"./slicedToArray-a75daa7f.js";import"./index.esm-4a8db888.js";import"./Drawer-8dc2fd43.js";import"./index-c0cd6553.js";import"./CloseButton-f8a68d34.js";import"./withHeaderItem-4b1b11b3.js";import"./index-ade064c2.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-56ad0384.js";import"./usePopper-eba58dea.js";import"./index.esm-e8f8cad7.js";import"./index-e53d26a4.js";import"./index-3903fc17.js";import"./useUncertainRef-41ed3c8c.js";import"./isNil-fa9ab935.js";import"./useUniqueId-f42ae95b.js";import"./toString-73aeebea.js";import"./chainedFunction-070f832c.js";import"./index-8ced4f1f.js";import"./useRootClose-4eeaabec.js";import"./index.esm-10421fc2.js";import"./Logo-dc3f3ab2.js";const g=a=>{const{className:i,contained:n}=a,t=o(r=>r.theme.navMode),m=o(r=>r.theme.themeColor),l=o(r=>r.theme.primaryColorLevel),c=o(r=>r.auth.user.authority),{larger:p}=y(),d=()=>t===x?`bg-${m}-${l} secondary-header-${t}`:`secondary-header-${t}`;return e.jsx(e.Fragment,{children:p.md&&e.jsx("div",{className:s("h-16 flex items-center",d(),i),children:e.jsx("div",{className:s("flex items-center px-4",n&&"container mx-auto"),children:e.jsx(f,{manuVariant:t,userAuthority:c})})})})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(h,{})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(j,{hoverable:!1})]}),Y=()=>e.jsx("div",{className:"app-layout-simple flex flex-auto flex-col min-h-screen",children:e.jsx("div",{className:"flex flex-auto min-w-0",children:e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(u,{container:!0,className:"shadow dark:shadow-2xl",headerStart:e.jsx(w,{}),headerEnd:e.jsx(C,{})}),e.jsx(g,{contained:!0}),e.jsx(H,{pageContainerType:"contained"})]})})});export{Y as default};
