import{j as e}from"./index-f4ad2487.js";import{D as r}from"./DemoLayout-741e19de.js";import{A as s}from"./index-8e154752.js";import{B as o}from"./Badge-01af7993.js";import{L as n}from"./index.esm-5602f0ea.js";import"./AdaptableCard-637542cf.js";import"./Card-d1b10438.js";import"./Views-292f6930.js";import"./Affix-502dc121.js";import"./Button-69f10cac.js";import"./Tooltip-40c5d8b6.js";import"./usePopper-66c961e9.js";import"./index.esm-78ab0775.js";import"./index-15314bfe.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c6dd217f.js";import"./index-017782f2.js";import"./index-d6bfe39b.js";import"./index.esm-c02266ee.js";import"./useMergeRef-788c4cb0.js";const c=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",content:9,children:e.jsx(s,{icon:e.jsx(n,{})})}),e.jsx(o,{className:"mr-4",content:"New",children:e.jsx(s,{icon:e.jsx(n,{})})})]}),a=()=>e.jsxs("div",{className:"flex",children:[e.jsx(o,{className:"mr-5",content:10,maxCount:9,children:e.jsx(s,{icon:e.jsx(n,{})})}),e.jsx(o,{className:"mr-4",content:100,children:e.jsx(s,{icon:e.jsx(n,{})})})]}),d=()=>e.jsx("div",{className:"flex",children:e.jsx(o,{className:"mr-4",children:e.jsx(s,{icon:e.jsx(n,{})})})}),m=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4"}),e.jsx(o,{className:"mr-4",content:9}),e.jsx(o,{className:"mr-4",content:99}),e.jsx(o,{content:"New"})]}),i=()=>e.jsx("div",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mr-4",innerClass:"bg-blue-500"}),e.jsx(o,{className:"mr-4",content:9,innerClass:"bg-emerald-500"}),e.jsx(o,{className:"mr-4 font-semibold",content:99,innerClass:"bg-red-50 text-red-500"}),e.jsx(o,{className:"mr-4 border border-gray-400",content:"New",innerClass:"bg-white text-gray-500"})]})}),t="Badge",l={title:"Badge",desc:"Badges often used to highlight an item's status to notify the user."},p=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Badge <code>content</code> prop accept both <code>string</code> & <code>number</code> type.",component:e.jsx(c,{})},{mdName:"CountOverflow",mdPath:t,title:"Count Overflow",desc:"Badge will display the <code>maxCount</code> prop number, if the content number is larger than the <code>maxCount</code> prop number.",component:e.jsx(a,{})},{mdName:"Dot",mdPath:t,title:"Dot",desc:"Badge will display as dot if without <code>content</code> prop.",component:e.jsx(d,{})},{mdName:"Inline",mdPath:t,title:"Inline",desc:"Display Badge inline by leaving <code>children</code> empty.",component:e.jsx(m,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Badge can have different color by setting color value via <code>backgroundColor</code> & <code>textColor</code>.",component:e.jsx(i,{})}],x=[{component:"Badge",api:[{propName:"content",type:"<code>string</code> | <code>number</code>",default:"-",desc:"Content to show in badge"},{propName:"maxCount",type:"<code>number</code>",default:"<code>99</code>",desc:"Max number to show"},{propName:"innerClass",type:"<code>string</code>",default:"-",desc:"Class for badge inner"},{propName:"badgeStyle",type:"<code>object</code>",default:"-",desc:"Custom styling for Badge"}]}],M=()=>e.jsx(r,{header:l,demos:p,api:x});export{M as default};
