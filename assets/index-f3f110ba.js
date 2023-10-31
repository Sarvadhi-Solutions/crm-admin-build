import{j as e}from"./index-54ca42fc.js";import{D as r}from"./DemoLayout-d9cfe38f.js";import{T as s}from"./Tag-d6f79b22.js";import{aF as i,X as t}from"./index.esm-7dd42512.js";import"./AdaptableCard-e97ca17a.js";import"./Card-a23c20fb.js";import"./Views-af87b139.js";import"./Affix-972d638b.js";import"./Button-acf424a5.js";import"./Tooltip-a3ba2e51.js";import"./usePopper-312a6569.js";import"./index.esm-7e7c8219.js";import"./index-ad0ca857.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-ed9860a8.js";import"./index-af43cf4a.js";import"./index-d0d30922.js";import"./index.esm-b6692532.js";const l=()=>e.jsx("div",{className:"flex",children:e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{children:"Basic Tag"})})}),o=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,prefixClass:"bg-emerald-500",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:e.jsx(i,{className:"text-base text-blue-500 mr-1 rtl:ml-1"}),children:"Tag 3"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:!0,suffixClass:"bg-rose-500",children:"Tag 4"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:e.jsx(t,{className:"ml-1 rtl:mr-1 cursor-pointer"}),children:"Tag 5"})})]}),d=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0",children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-white bg-indigo-600 border-0",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded",children:"Tag 3"})})]}),a="Tag",c={title:"Tag",desc:"Tag component is used for categorize content with a keyword."},m=[{mdName:"Basic",mdPath:a,title:"Basic",desc:"Basic usage of Tag.",component:e.jsx(l,{})},{mdName:"Affix",mdPath:a,title:"Affix",desc:"Tag can have prefix and suffix, both affix can be customized as well.",component:e.jsx(o,{})},{mdName:"Custom",mdPath:a,title:"Custom",desc:"We can have different Tag style by applying tailwind css class.",component:e.jsx(d,{})}],n=[{component:"Tag",api:[{propName:"prefix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag prefix"},{propName:"prefixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag prefix, only available when prefix type is boolean"},{propName:"suffix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag suffix"},{propName:"suffixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag suffix, only available when suffix type is boolean"}]}],R=()=>e.jsx(r,{header:c,demos:m,api:n});export{R as default};
