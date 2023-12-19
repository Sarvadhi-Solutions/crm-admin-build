import{j as e}from"./index-94b34292.js";import{D as r}from"./DemoLayout-0cfc20fb.js";import{T as s}from"./Tag-2875bb96.js";import{aF as i,Y as t}from"./index.esm-782de75a.js";import"./AdaptableCard-c182e7e7.js";import"./Card-d6f50812.js";import"./Views-fb5a8bd1.js";import"./Affix-2cf76f51.js";import"./Button-f4db3022.js";import"./Tooltip-19d421b7.js";import"./usePopper-bc958b31.js";import"./index.esm-39aa8af5.js";import"./index-6d87b72d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9b4d83b8.js";import"./index-28603d8b.js";import"./index-fae7cee7.js";import"./index.esm-b797afb7.js";const l=()=>e.jsx("div",{className:"flex",children:e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{children:"Basic Tag"})})}),o=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:!0,prefixClass:"bg-emerald-500",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{prefix:e.jsx(i,{className:"text-base text-blue-500 mr-1 rtl:ml-1"}),children:"Tag 3"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:!0,suffixClass:"bg-rose-500",children:"Tag 4"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{suffix:e.jsx(t,{className:"ml-1 rtl:mr-1 cursor-pointer"}),children:"Tag 5"})})]}),d=()=>e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0",children:"Tag 1"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"text-white bg-indigo-600 border-0",children:"Tag 2"})}),e.jsx("div",{className:"mr-2 rtl:ml-2",children:e.jsx(s,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded",children:"Tag 3"})})]}),a="Tag",c={title:"Tag",desc:"Tag component is used for categorize content with a keyword."},m=[{mdName:"Basic",mdPath:a,title:"Basic",desc:"Basic usage of Tag.",component:e.jsx(l,{})},{mdName:"Affix",mdPath:a,title:"Affix",desc:"Tag can have prefix and suffix, both affix can be customized as well.",component:e.jsx(o,{})},{mdName:"Custom",mdPath:a,title:"Custom",desc:"We can have different Tag style by applying tailwind css class.",component:e.jsx(d,{})}],n=[{component:"Tag",api:[{propName:"prefix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag prefix"},{propName:"prefixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag prefix, only available when prefix type is boolean"},{propName:"suffix",type:"<code>boolean</code> | <code>ReactNode</code>",default:"<code>false</code>",desc:"Tag suffix"},{propName:"suffixClass",type:"<code>string</code>",default:"-",desc:"Css class for Tag suffix, only available when suffix type is boolean"}]}],R=()=>e.jsx(r,{header:c,demos:m,api:n});export{R as default};
