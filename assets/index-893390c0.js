import{j as e,r}from"./index-5b083722.js";import{D as l}from"./DemoLayout-c496ff20.js";import{P as o}from"./Pagination-a6fcbfa4.js";import{S as c}from"./Select-356b8b96.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./floating-ui.dom-bef9cea3.js";import"./get-752f7dea.js";import"./toString-981652f6.js";import"./_MapCache-79b01de9.js";const p=()=>{const t=a=>{console.log("onPaginationChange",a)};return e.jsx("div",{children:e.jsx(o,{onChange:t})})},m=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:50})}),e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:100})})]}),g=()=>e.jsx("div",{children:e.jsx(o,{displayTotal:!0,total:50})}),d=[{value:5,label:"5 / page"},{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:50,label:"50 / page"}],u=()=>{const[t,a]=r.useState(d[0].value),s=({value:i})=>{a(i)};return e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{displayTotal:!0,pageSize:t,total:100}),e.jsx("div",{style:{minWidth:120},children:e.jsx(c,{size:"sm",isSearchable:!1,defaultValue:d[0],options:d,onChange:i=>s(i)})})]})},x=()=>{const[t,a]=r.useState(60),s=i=>{a(i)};return e.jsx("div",{children:e.jsx(o,{total:100,currentPage:t,onChange:s})})},n="Pagination",h={title:"Pagination",desc:"Pagination divided content into several pages and allows users to navigate in between."},f=[{mdName:"Basic",mdPath:n,title:"Basic",desc:"Basic usage of Pagination.",component:e.jsx(p,{})},{mdName:"More",mdPath:n,title:"More",desc:"Pagination will diaplay ellipsis for indicating previous or continuing results when the page amount is overflow.",component:e.jsx(m,{})},{mdName:"Total",mdPath:n,title:"Total",desc:"Display total number of data by setting <code>displayTotal</code> to true.",component:e.jsx(g,{})},{mdName:"PageSize",mdPath:n,title:"Page sizes",desc:"Displaying the pagination count divided by <code>total</code> & <code>pageSize</code>, often used on displaying numbers of data in a page. ",component:e.jsx(u,{})},{mdName:"Controlled",mdPath:n,title:"Controlled",desc:"Example of controlled pagination.",component:e.jsx(x,{})}],j=[{component:"Pagination",api:[{propName:"currentPage",type:"<code>number</code>",default:"<code>1</code>",desc:"Current page number"},{propName:"displayTotal",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display total of data items"},{propName:"onChange",type:"<code>(pageNumber: number) => void</code>",default:"<code>-</code>",desc:"Callback when Pagination index was clicked"},{propName:"pageSize",type:"<code>number</code>",default:"<code>1</code>",desc:"Number of data items per page"},{propName:"total",type:"<code>number</code>",default:"<code>5</code>",desc:"Total number of data items"}]}],J=()=>e.jsx(l,{header:h,demos:f,api:j});export{J as default};
