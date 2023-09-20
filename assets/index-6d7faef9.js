import{j as e,n as o}from"./index-4bd6b7b3.js";import{D as i}from"./DemoLayout-abb47ea7.js";import{i as n}from"./index.esm-29f368c2.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Button-39d85f08.js";import"./context-a8cf3940.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./SyntaxHighlighter-d5a055b8.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";import"./index-96e19bc1.js";import"./DemoComponentApi-dfdadeb6.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";const r=()=>e.jsx("div",{children:e.jsx(o,{})}),s=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",size:30}),e.jsx(o,{className:"mr-4",size:"40px"}),e.jsx(o,{size:"3.25rem"})]}),c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",color:"yellow-500",size:"40px"}),e.jsx(o,{className:"mr-4",color:"green-500",size:"40px"})]}),a=()=>e.jsx("div",{children:e.jsx(o,{size:40,indicator:n})}),p=()=>e.jsx("div",{children:e.jsx(o,{isSpining:!1,size:"40px"})}),t="Spinner",d={title:"Spinner",desc:"Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing."},m=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"We can configure the Spinner size on <code>size</code> prop. ",component:e.jsx(s,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Spinner offer <code>color</code> prop like some others component, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(c,{})},{mdName:"CustomIndicator",mdPath:t,title:"Custom Indicator",desc:"If you don't fancy the default spinner, you can replace it with your own spinner instead.",component:e.jsx(a,{})},{mdName:"Static",mdPath:t,title:"Static",desc:"Stop the spining animation by setting <code>isSpining</code> to false.",component:e.jsx(p,{})}],l=[{component:"Spinner",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Spinner, available colors option based on tailwind <code>theme.colors</code>"},{propName:"enableTheme",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner inherit theme color"},{propName:"indicator",type:"<code>ReactNode</code>",default:"<code>CgSpinner</code>",desc:"Spinner indicator"},{propName:"isSpining",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner is spinning"},{propName:"size",type:"<code>string</code> | <code>number</code>",default:"<code>20</code>",desc:"Size of Spinner"}]}],L=()=>e.jsx(i,{header:d,demos:m,api:l});export{L as default};
