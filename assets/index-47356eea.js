import{j as e,n as o}from"./index-9ca3e01c.js";import{D as i}from"./DemoLayout-30b7f18e.js";import{i as n}from"./index.esm-e744f6b3.js";import"./AdaptableCard-058cf2b7.js";import"./Card-c0916875.js";import"./Views-42612634.js";import"./Affix-fa4c2b70.js";import"./Button-da045d3b.js";import"./Tooltip-07d43494.js";import"./usePopper-17a543ac.js";import"./index.esm-b4bc7f1b.js";import"./index-cfbd213c.js";import"./index.esm-6b1f01ae.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-11b6685e.js";import"./index-125b367d.js";import"./index-318debb8.js";import"./index.esm-adadbc61.js";const r=()=>e.jsx("div",{children:e.jsx(o,{})}),s=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",size:30}),e.jsx(o,{className:"mr-4",size:"40px"}),e.jsx(o,{size:"3.25rem"})]}),c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",color:"yellow-500",size:"40px"}),e.jsx(o,{className:"mr-4",color:"green-500",size:"40px"})]}),a=()=>e.jsx("div",{children:e.jsx(o,{size:40,indicator:n})}),d=()=>e.jsx("div",{children:e.jsx(o,{isSpining:!1,size:"40px"})}),t="Spinner",p={title:"Spinner",desc:"Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing."},m=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"We can configure the Spinner size on <code>size</code> prop. ",component:e.jsx(s,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Spinner offer <code>color</code> prop like some others component, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(c,{})},{mdName:"CustomIndicator",mdPath:t,title:"Custom Indicator",desc:"If you don't fancy the default spinner, you can replace it with your own spinner instead.",component:e.jsx(a,{})},{mdName:"Static",mdPath:t,title:"Static",desc:"Stop the spining animation by setting <code>isSpining</code> to false.",component:e.jsx(d,{})}],l=[{component:"Spinner",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Spinner, available colors option based on tailwind <code>theme.colors</code>"},{propName:"enableTheme",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner inherit theme color"},{propName:"indicator",type:"<code>ReactNode</code>",default:"<code>CgSpinner</code>",desc:"Spinner indicator"},{propName:"isSpining",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner is spinning"},{propName:"size",type:"<code>string</code> | <code>number</code>",default:"<code>20</code>",desc:"Size of Spinner"}]}],R=()=>e.jsx(i,{header:p,demos:m,api:l});export{R as default};
