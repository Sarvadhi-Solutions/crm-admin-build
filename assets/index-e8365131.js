import{r as a,j as e,ai as n}from"./index-f40e4d75.js";import{D as d}from"./DemoLayout-cfdcd7ef.js";import{S as r}from"./Switcher-5c6f9f0a.js";import{A as c}from"./Alert-40d5acad.js";import"./AdaptableCard-37b8494e.js";import"./Card-902c739e.js";import"./Views-4f4cfc12.js";import"./Affix-93157901.js";import"./Button-50d583fa.js";import"./context-51e9908c.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./index.esm-0d86f991.js";import"./SyntaxHighlighter-3d3333b2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-b6817789.js";import"./extends-98964cd2.js";import"./index-c3422a4c.js";import"./DemoComponentApi-710da467.js";import"./index-a0876546.js";import"./index.esm-939b12b7.js";import"./useTimeout-e87eb97a.js";import"./CloseButton-579d2861.js";import"./StatusIcon-e5b0e9d4.js";const m=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,children:e.jsx("div",{className:"text-center",children:"Finish loading"})})]})},l=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,type:"cover",children:e.jsx(c,{showIcon:!0,type:"info",title:"Alert!",children:"Additional description and information about copywriting."})})]})},p=()=>{const[t,o]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(r,{checked:t,onChange:s=>o(!s)})]}),e.jsx(n,{loading:t,customLoader:e.jsx("div",{className:"flex items-center justify-center p-5",children:e.jsxs("div",{className:"flex space-x-2 animate-pulse",children:[e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-indigo-600 rounded-full"})]})}),children:e.jsx("div",{className:"text-center",children:"Finish loading"})})]})},i="LoadingDoc",g={title:"Loading",desc:"A component that provides state during loading."},u=[{mdName:"Basic",mdPath:i,title:"Basic",desc:"Basic usage.",component:e.jsx(m,{})},{mdName:"Cover",mdPath:i,title:"Cover",desc:'You can overlay an element with <code>type="cover"</code>',component:e.jsx(l,{})},{mdName:"Custom",mdPath:i,title:"Custom",desc:"You can use any other custom element as loader by setting <code>customLoader</code> prop",component:e.jsx(p,{})}],x=[{component:"Loading",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'div'</code>",desc:"Render element"},{propName:"customLoader",type:"<code>ReactNode</code>",default:"-",desc:"Custom loader"},{propName:"loading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether is loading state"},{propName:"spinnerClass",type:"<code>string</code>",default:"-",desc:"Extra class for default spinner"}]}],K=()=>e.jsx(d,{innerFrame:!1,header:g,demos:u,api:x,mdPrefixPath:"shared"});export{K as default};
