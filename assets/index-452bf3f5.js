import{j as e,n as o}from"./index-a75c2214.js";import{D as i}from"./DemoLayout-2a08f2a3.js";import{i as n}from"./index.esm-42bf9154.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./SyntaxHighlighter-39525d8f.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";import"./index-129cb3d5.js";import"./DemoComponentApi-81a65b6e.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";const r=()=>e.jsx("div",{children:e.jsx(o,{})}),s=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",size:30}),e.jsx(o,{className:"mr-4",size:"40px"}),e.jsx(o,{size:"3.25rem"})]}),c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",color:"yellow-500",size:"40px"}),e.jsx(o,{className:"mr-4",color:"green-500",size:"40px"})]}),a=()=>e.jsx("div",{children:e.jsx(o,{size:40,indicator:n})}),p=()=>e.jsx("div",{children:e.jsx(o,{isSpining:!1,size:"40px"})}),t="Spinner",d={title:"Spinner",desc:"Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing."},m=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"We can configure the Spinner size on <code>size</code> prop. ",component:e.jsx(s,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Spinner offer <code>color</code> prop like some others component, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(c,{})},{mdName:"CustomIndicator",mdPath:t,title:"Custom Indicator",desc:"If you don't fancy the default spinner, you can replace it with your own spinner instead.",component:e.jsx(a,{})},{mdName:"Static",mdPath:t,title:"Static",desc:"Stop the spining animation by setting <code>isSpining</code> to false.",component:e.jsx(p,{})}],l=[{component:"Spinner",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Spinner, available colors option based on tailwind <code>theme.colors</code>"},{propName:"enableTheme",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner inherit theme color"},{propName:"indicator",type:"<code>ReactNode</code>",default:"<code>CgSpinner</code>",desc:"Spinner indicator"},{propName:"isSpining",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner is spinning"},{propName:"size",type:"<code>string</code> | <code>number</code>",default:"<code>20</code>",desc:"Size of Spinner"}]}],L=()=>e.jsx(i,{header:d,demos:m,api:l});export{L as default};
