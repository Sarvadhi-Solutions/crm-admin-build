import{j as e,y as o}from"./index-5b083722.js";import{D as i}from"./DemoLayout-c496ff20.js";import{i as n}from"./index.esm-cebbfdb8.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";const r=()=>e.jsx("div",{children:e.jsx(o,{})}),s=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",size:30}),e.jsx(o,{className:"mr-4",size:"40px"}),e.jsx(o,{size:"3.25rem"})]}),c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",color:"yellow-500",size:"40px"}),e.jsx(o,{className:"mr-4",color:"green-500",size:"40px"})]}),a=()=>e.jsx("div",{children:e.jsx(o,{size:40,indicator:n})}),d=()=>e.jsx("div",{children:e.jsx(o,{isSpining:!1,size:"40px"})}),t="Spinner",p={title:"Spinner",desc:"Spinner indicate the loading state of a component or page, it can help to the user aware and that the data is processing."},m=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"We can configure the Spinner size on <code>size</code> prop. ",component:e.jsx(s,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Spinner offer <code>color</code> prop like some others component, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(c,{})},{mdName:"CustomIndicator",mdPath:t,title:"Custom Indicator",desc:"If you don't fancy the default spinner, you can replace it with your own spinner instead.",component:e.jsx(a,{})},{mdName:"Static",mdPath:t,title:"Static",desc:"Stop the spining animation by setting <code>isSpining</code> to false.",component:e.jsx(d,{})}],l=[{component:"Spinner",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Spinner, available colors option based on tailwind <code>theme.colors</code>"},{propName:"enableTheme",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner inherit theme color"},{propName:"indicator",type:"<code>ReactNode</code>",default:"<code>CgSpinner</code>",desc:"Spinner indicator"},{propName:"isSpining",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Wheter the Spinner is spinning"},{propName:"size",type:"<code>string</code> | <code>number</code>",default:"<code>20</code>",desc:"Size of Spinner"}]}],E=()=>e.jsx(i,{header:p,demos:m,api:l});export{E as default};
