import{j as e}from"./index-04de45f1.js";import{D as c}from"./DemoLayout-89a84ba0.js";import{A as a}from"./index-d960fe16.js";import{I as o}from"./index.esm-dece01db.js";import{B as s}from"./Badge-fd219ce7.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./SyntaxHighlighter-b6d1a340.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-5ffe062f.js";import"./DemoComponentApi-46ba6f54.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./useMergeRef-788c4cb0.js";const r=()=>e.jsxs("div",{className:"flex",children:[e.jsx(a,{shape:"square",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{shape:"circle",className:"mr-4",icon:e.jsx(o,{})})]}),d=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{size:"sm",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{size:"lg",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{size:60,className:"mr-4",icon:e.jsx(o,{})})]}),i=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{className:"mr-4",children:"AT"}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",src:"/img/avatars/thumb-1.jpg"})]}),m=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{className:"mr-4 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",children:"A"}),e.jsx(a,{className:"mr-4 bg-emerald-500",icon:e.jsx(o,{})})]}),p=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(s,{className:"mr-4 rounded-full",badgeStyle:{top:"7px",right:"5px"},children:e.jsx(a,{shape:"circle",icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",children:e.jsx(a,{icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",innerClass:"bg-emerald-500",children:e.jsx(a,{icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",content:99,children:e.jsx(a,{icon:e.jsx(o,{})})})]}),n=()=>e.jsxs(a.Group,{chained:!0,omittedAvatarTooltip:!0,maxCount:4,omittedAvatarProps:{shape:"circle"},onOmittedAvatarClick:()=>console.log("Omitted Avatar Clicked"),children:[e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-1.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-2.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-3.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-4.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-5.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-6.jpg"})]}),t="Avatar",l={title:"Avatar",desc:"Avatar component is used to represent a user or product brand, it can display text, icons, or images."},x=[{mdName:"Shape",mdPath:t,title:"Shape",desc:"Avatar <code>shape</code> can be a <code>circle</code>, <code>rounded</code> or <code>square</code>.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"Avatar component comes in 3 sizes <code>sm</code>, <code>md</code> and <code>lg</code>, it also allow to to set custom size.",component:e.jsx(d,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Avatar can display in text, icons, or images",component:e.jsx(i,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Colors can be apply to text & icons avatar via props <code>backgroundColor</code> & <code>textColor</code>",component:e.jsx(m,{})},{mdName:"Status",mdPath:t,title:"Status",desc:"Avatar can also have status badge along with <code>Badge</code> component.",component:e.jsx(p,{})},{mdName:"Group",mdPath:t,title:"Avatar Group",desc:"Chain multiple Avatar in a row",component:e.jsx(n,{})}],u=[{component:"Avatar",api:[{propName:"shape",type:"<code>'rounded'</code> | <code>'square'</code> | <code>'circle'</code>",default:"<code>'rounded'</code>",desc:"Shape of Avatar"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code> | <code>number</code>",default:"<code>'md'</code>",desc:"Size of Avatar"},{propName:"icon",type:"<code>ReactNode</code>",default:"-",desc:"Avatar Icon"},{propName:"src",type:"<code>string</code>",default:"-",desc:"Image url of Avatar image"},{propName:"srcSet",type:"<code>string</code>",default:"-",desc:"srcset attribute for Avatar image"},{propName:"alt",type:"<code>string</code>",default:"-",desc:"alt attribute for Avatar image"}]},{component:"Avatar.Group",api:[{propName:"chained",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to stack avatars within group"},{propName:"maxCount",type:"<code>number</code>",default:"<code>4</code>",desc:"Limited avatars to display & append an ommited avatar"},{propName:"omittedAvatarContent",type:"<code>string</code> | <code>ReactNode</code>",default:"",desc:"Custom omitted avatar content"},{propName:"omittedAvatarProps",type:"<code>Object</code> (Refer to Avatar props above)",default:"-",desc:"Omitted avatar props"},{propName:"omittedAvatarTooltip",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to enable tooltip for omitted avatar"},{propName:"onOmittedAvatarClick",type:"<code>() => void</code>",default:"-",desc:"Callback when omitted avatar clicked"}]}],H=()=>e.jsx(c,{header:l,demos:x,api:u});export{H as default};
