import{j as e,n as o}from"./index-f4ad2487.js";import{D as i}from"./DemoLayout-741e19de.js";import{i as n}from"./index.esm-7490673b.js";import"./AdaptableCard-637542cf.js";import"./Card-d1b10438.js";import"./Views-292f6930.js";import"./Affix-502dc121.js";import"./Button-69f10cac.js";import"./Tooltip-40c5d8b6.js";import"./usePopper-66c961e9.js";import"./index.esm-78ab0775.js";import"./index-15314bfe.js";import"./index.esm-5602f0ea.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c6dd217f.js";import"./index-017782f2.js";import"./index-d6bfe39b.js";import"./index.esm-c02266ee.js";const r=()=>e.jsx("div",{children:e.jsx(o,{})}),s=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",size:30}),e.jsx(o,{className:"mr-4",size:"40px"}),e.jsx(o,{size:"3.25rem"})]}),c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",color:"yellow-500",size:"40px"}),e.jsx(o,{className:"mr-4",color:"green-500",size:"40px"})]}),a=()=>e.jsx("div",{children:e.jsx(o,{size:40,indicator:n})}),d=()=>e.jsx("div",{children:e.jsx(o,{isSpining:!1,size:"40px"})}),t="Spinner",p={title:"Spinner",desc:"Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing."},m=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"We can configure the Spinner size on <code>size</code> prop. ",component:e.jsx(s,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Spinner offer <code>color</code> prop like some others component, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(c,{})},{mdName:"CustomIndicator",mdPath:t,title:"Custom Indicator",desc:"If you don't fancy the default spinner, you can replace it with your own spinner instead.",component:e.jsx(a,{})},{mdName:"Static",mdPath:t,title:"Static",desc:"Stop the spining animation by setting <code>isSpining</code> to false.",component:e.jsx(d,{})}],l=[{component:"Spinner",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Spinner, available colors option based on tailwind <code>theme.colors</code>"},{propName:"enableTheme",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner inherit theme color"},{propName:"indicator",type:"<code>ReactNode</code>",default:"<code>CgSpinner</code>",desc:"Spinner indicator"},{propName:"isSpining",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner is spinning"},{propName:"size",type:"<code>string</code> | <code>number</code>",default:"<code>20</code>",desc:"Size of Spinner"}]}],R=()=>e.jsx(i,{header:p,demos:m,api:l});export{R as default};
