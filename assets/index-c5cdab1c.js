import{j as e}from"./index-8f180057.js";import{D as c}from"./DemoLayout-b2751f86.js";import{A as a}from"./index-50da1f05.js";import{ae as o}from"./index.esm-d559b7a8.js";import{B as s}from"./Badge-da9b4bac.js";import"./AdaptableCard-4ed28de0.js";import"./Card-c08b3dc7.js";import"./Views-0f0dd1b0.js";import"./Affix-dbce7622.js";import"./Button-9a124664.js";import"./Tooltip-c46cdf61.js";import"./usePopper-4f231cdc.js";import"./index.esm-047fe164.js";import"./index-56b40026.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-10fd47e9.js";import"./index-b4dfb5fc.js";import"./index-68091566.js";import"./index.esm-7da1e9bd.js";import"./useMergeRef-788c4cb0.js";const r=()=>e.jsxs("div",{className:"flex",children:[e.jsx(a,{shape:"square",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{shape:"circle",className:"mr-4",icon:e.jsx(o,{})})]}),d=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{size:"sm",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{size:"lg",className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{size:60,className:"mr-4",icon:e.jsx(o,{})})]}),i=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{className:"mr-4",children:"AT"}),e.jsx(a,{className:"mr-4",icon:e.jsx(o,{})}),e.jsx(a,{className:"mr-4",src:"/img/avatars/thumb-1.jpg"})]}),m=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{className:"mr-4 bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",children:"A"}),e.jsx(a,{className:"mr-4 bg-emerald-500",icon:e.jsx(o,{})})]}),p=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(s,{className:"mr-4 rounded-full",badgeStyle:{top:"7px",right:"5px"},children:e.jsx(a,{shape:"circle",icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",children:e.jsx(a,{icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",innerClass:"bg-emerald-500",children:e.jsx(a,{icon:e.jsx(o,{})})}),e.jsx(s,{className:"mr-4",content:99,children:e.jsx(a,{icon:e.jsx(o,{})})})]}),n=()=>e.jsxs(a.Group,{chained:!0,omittedAvatarTooltip:!0,maxCount:4,omittedAvatarProps:{shape:"circle"},onOmittedAvatarClick:()=>console.log("Omitted Avatar Clicked"),children:[e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-1.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-2.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-3.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-4.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-5.jpg"}),e.jsx(a,{shape:"circle",src:"/img/avatars/thumb-6.jpg"})]}),t="Avatar",l={title:"Avatar",desc:"Avatar component is used to represent a user or product brand, it can display text, icons, or images."},x=[{mdName:"Shape",mdPath:t,title:"Shape",desc:"Avatar <code>shape</code> can be a <code>circle</code>, <code>rounded</code> or <code>square</code>.",component:e.jsx(r,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"Avatar component comes in 3 sizes <code>sm</code>, <code>md</code> and <code>lg</code>, it also allow to to set custom size.",component:e.jsx(d,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Avatar can display in text, icons, or images",component:e.jsx(i,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"Colors can be apply to text & icons avatar via props <code>backgroundColor</code> & <code>textColor</code>",component:e.jsx(m,{})},{mdName:"Status",mdPath:t,title:"Status",desc:"Avatar can also have status badge along with <code>Badge</code> component.",component:e.jsx(p,{})},{mdName:"Group",mdPath:t,title:"Avatar Group",desc:"Chain multiple Avatar in a row",component:e.jsx(n,{})}],u=[{component:"Avatar",api:[{propName:"shape",type:"<code>'rounded'</code> | <code>'square'</code> | <code>'circle'</code>",default:"<code>'rounded'</code>",desc:"Shape of Avatar"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code> | <code>number</code>",default:"<code>'md'</code>",desc:"Size of Avatar"},{propName:"icon",type:"<code>ReactNode</code>",default:"-",desc:"Avatar Icon"},{propName:"src",type:"<code>string</code>",default:"-",desc:"Image url of Avatar image"},{propName:"srcSet",type:"<code>string</code>",default:"-",desc:"srcset attribute for Avatar image"},{propName:"alt",type:"<code>string</code>",default:"-",desc:"alt attribute for Avatar image"}]},{component:"Avatar.Group",api:[{propName:"chained",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to stack avatars within group"},{propName:"maxCount",type:"<code>number</code>",default:"<code>4</code>",desc:"Limited avatars to display & append an ommited avatar"},{propName:"omittedAvatarContent",type:"<code>string</code> | <code>ReactNode</code>",default:"",desc:"Custom omitted avatar content"},{propName:"omittedAvatarProps",type:"<code>Object</code> (Refer to Avatar props above)",default:"-",desc:"Omitted avatar props"},{propName:"omittedAvatarTooltip",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to enable tooltip for omitted avatar"},{propName:"onOmittedAvatarClick",type:"<code>() => void</code>",default:"-",desc:"Callback when omitted avatar clicked"}]}],P=()=>e.jsx(c,{header:l,demos:x,api:u});export{P as default};
