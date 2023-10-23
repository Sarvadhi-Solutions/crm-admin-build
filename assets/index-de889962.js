import{j as e}from"./index-4fc5ac15.js";import{D as r}from"./DemoLayout-c1e2db9e.js";import{T as s}from"./Tag-4b3b0483.js";import{aF as i,Y as t}from"./index.esm-4a8db888.js";import"./AdaptableCard-1a3c680d.js";import"./Card-a6171fd9.js";import"./Views-63244708.js";import"./Affix-0156fd36.js";import"./Button-7cd7d853.js";import"./Tooltip-56ad0384.js";import"./usePopper-eba58dea.js";import"./index.esm-e8f8cad7.js";import"./index-e53d26a4.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-b436f755.js";import"./index-ace60bbb.js";import"./index-829995d1.js";import"./index.esm-e8eb3d5a.js";const l=()=>e.jsx("div",{className:"flex",children:e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{children:"Basic Tag"})})}),o=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,prefixClass:"bg-emerald-500",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:e.jsx(i,{className:"text-base text-blue-500 mr-1 rtl:ml-1"}),children:"Tag 3"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:!0,suffixClass:"bg-rose-500",children:"Tag 4"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:e.jsx(t,{className:"ml-1 rtl:mr-1 cursor-pointer"}),children:"Tag 5"})})]}),d=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0",children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-white bg-indigo-600 border-0",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded",children:"Tag 3"})})]}),a="Tag",c={title:"Tag",desc:"Tag component is used for categorize content with a keyword."},m=[{mdName:"Basic",mdPath:a,title:"Basic",desc:"Basic usage of Tag.",component:e.jsx(l,{})},{mdName:"Affix",mdPath:a,title:"Affix",desc:"Tag can have prefix and suffix, both affix can be customized as well.",component:e.jsx(o,{})},{mdName:"Custom",mdPath:a,title:"Custom",desc:"We can have different Tag style by applying tailwind css class.",component:e.jsx(d,{})}],n=[{component:"Tag",api:[{propName:"prefix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag prefix"},{propName:"prefixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag prefix, only available when prefix type is boolean"},{propName:"suffix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag suffix"},{propName:"suffixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag suffix, only available when suffix type is boolean"}]}],R=()=>e.jsx(r,{header:c,demos:m,api:n});export{R as default};
