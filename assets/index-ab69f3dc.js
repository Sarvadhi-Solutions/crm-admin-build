import{r as a,j as e,ai as n}from"./index-c3e9fa7c.js";import{D as d}from"./DemoLayout-64fb2366.js";import{S as r}from"./Switcher-b542533c.js";import{A as c}from"./Alert-1e0e8bff.js";import"./AdaptableCard-8cba0fc7.js";import"./Card-f5c778fb.js";import"./Views-4498dec6.js";import"./Affix-de39c7a8.js";import"./Button-d0ef02c0.js";import"./context-c2e517f5.js";import"./Tooltip-0d302304.js";import"./usePopper-26945918.js";import"./index.esm-fe639564.js";import"./index-203bcdc0.js";import"./index.esm-291b3c8a.js";import"./SyntaxHighlighter-dfe70d12.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";import"./index-6f0be7c6.js";import"./DemoComponentApi-e808b075.js";import"./index-b1456952.js";import"./index.esm-e2831cf6.js";import"./useTimeout-d6c2414e.js";import"./CloseButton-b3d6dc71.js";import"./StatusIcon-9d0bc889.js";const m=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,children:e.jsx("div",{className:"text-center",children:"Finish loading"})})]})},l=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,type:"cover",children:e.jsx(c,{showIcon:!0,type:"info",title:"Alert!",children:"Additional description and information about copywriting."})})]})},p=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,customLoader:e.jsx("div",{className:"flex items-center justify-center p-5",children:e.jsxs("div",{className:"flex space-x-2 animate-pulse",children:[e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"})]})}),children:e.jsx("div",{className:"text-center",children:"Finish loading"})})]})},i="LoadingDoc",g={title:"Loading",desc:"A component that provides state during loading."},u=[{mdName:"Basic",mdPath:i,title:"Basic",desc:"Basic usage.",component:e.jsx(m,{})},{mdName:"Cover",mdPath:i,title:"Cover",desc:'You can overlay an element with <code>type="cover"</code>',component:e.jsx(l,{})},{mdName:"Custom",mdPath:i,title:"Custom",desc:"You can use any other custom element as loader by setting <code>customLoader</code> prop",component:e.jsx(p,{})}],x=[{component:"Loading",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'div'</code>",desc:"Render element"},{propName:"customLoader",type:"<code>ReactNode</code>",default:"-",desc:"Custom loader"},{propName:"loading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether is loading state"},{propName:"spinnerClass",type:"<code>string</code>",default:"-",desc:"Extra class for default spinner"}]}],K=()=>e.jsx(d,{innerFrame:!1,header:g,demos:u,api:x,mdPrefixPath:"shared"});export{K as default};
