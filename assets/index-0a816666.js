import{r as p,j as e}from"./index-c3e9fa7c.js";import{D as n}from"./DemoLayout-64fb2366.js";import{S as d}from"./SegmentItemOption-7c7b7611.js";import{S as t}from"./index-ae673476.js";import{G as u,bq as h,W as x}from"./index.esm-291b3c8a.js";import"./AdaptableCard-8cba0fc7.js";import"./Card-f5c778fb.js";import"./Views-4498dec6.js";import"./Affix-de39c7a8.js";import"./Button-d0ef02c0.js";import"./context-c2e517f5.js";import"./Tooltip-0d302304.js";import"./usePopper-26945918.js";import"./index.esm-fe639564.js";import"./index-203bcdc0.js";import"./SyntaxHighlighter-dfe70d12.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";import"./index-6f0be7c6.js";import"./DemoComponentApi-e808b075.js";import"./index-b1456952.js";import"./index.esm-e2831cf6.js";import"./useThemeClass-9aa299d0.js";import"./useControllableState-a53f6e69.js";const a=[{value:"softwareEngineer",label:"Developer",icon:e.jsx(u,{})},{value:"productManager",label:"Manager",icon:e.jsx(h,{})},{value:"designer",label:"Designer",icon:e.jsx(x,{})}],f=()=>{const[r,i]=p.useState([a[0].value]),s=o=>{console.log("val",o),i(o)};return e.jsx(t,{value:r,onChange:o=>s(o),children:e.jsx("div",{className:"flex flex-col xl:flex-row items-center gap-4",children:a.map(o=>e.jsx(t.Item,{value:o.value,disabled:o.disabled,children:({active:c,onSegmentItemClick:l,disabled:m})=>e.jsx(d,{hoverable:!0,active:c,disabled:m,className:"bg-white dark:bg-gray-800 w-[250px]",onSegmentItemClick:l,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsx("h6",{children:o.label})]})})},o.value))})})},g="SegmentItemOptionDoc",b={title:"SegmentItemOption",desc:"A premade custom option use for Segment component."},v=[{mdName:"Example",mdPath:g,title:"Example",desc:"Example usage",component:e.jsx(f,{})}],j=[{component:"SegmentItemOption",api:[{propName:"active",type:"<code>boolean</code>",default:"-",desc:"Whether this option is active"},{propName:"customCheck",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Display a custom check when active is true"},{propName:"defaultGutter",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to use default spacer"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disabled this option"},{propName:"hoverable",type:"<code>boolean</code>",default:"-",desc:"Whether to disabled hover effect"},{propName:"onSegmentItemClick",type:"<code>() => void</code>",default:"-",desc:"Callback when this option clicked"}]}],T=()=>e.jsx(n,{innerFrame:!1,header:b,demos:v,api:j,mdPrefixPath:"shared"});export{T as default};
