import{j as e,r}from"./index-dc23d4d5.js";import{D as l}from"./DemoLayout-5f69916d.js";import{P as o}from"./Pagination-b6c8442e.js";import{S as c}from"./Select-d8ee6a0d.js";import"./AdaptableCard-4ed8675a.js";import"./Card-53030d97.js";import"./Views-6bb03ba3.js";import"./Affix-ceb08ee6.js";import"./Button-2503e753.js";import"./Tooltip-3f2f3d9e.js";import"./usePopper-72f5cea7.js";import"./index.esm-4e1e8bcb.js";import"./index-67754ed7.js";import"./index.esm-915a2267.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-81fff5a8.js";import"./index-d528e336.js";import"./index-40cae662.js";import"./index.esm-ad4339c6.js";import"./slicedToArray-dc1d019d.js";import"./floating-ui.dom-bef9cea3.js";import"./get-a9e0dd90.js";import"./toString-812aacee.js";import"./_MapCache-2a76a3cc.js";const p=()=>{const t=a=>{console.log("onPaginationChange",a)};return e.jsx("div",{children:e.jsx(o,{onChange:t})})},m=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:50})}),e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:100})})]}),g=()=>e.jsx("div",{children:e.jsx(o,{displayTotal:!0,total:50})}),d=[{value:5,label:"5 / page"},{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:50,label:"50 / page"}],u=()=>{const[t,a]=r.useState(d[0].value),s=({value:i})=>{a(i)};return e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{displayTotal:!0,pageSize:t,total:100}),e.jsx("div",{style:{minWidth:120},children:e.jsx(c,{size:"sm",isSearchable:!1,defaultValue:d[0],options:d,onChange:i=>s(i)})})]})},x=()=>{const[t,a]=r.useState(60),s=i=>{a(i)};return e.jsx("div",{children:e.jsx(o,{total:100,currentPage:t,onChange:s})})},n="Pagination",h={title:"Pagination",desc:"Pagination divided content into several pages and allows users to navigate in between."},f=[{mdName:"Basic",mdPath:n,title:"Basic",desc:"Basic usage of Pagination.",component:e.jsx(p,{})},{mdName:"More",mdPath:n,title:"More",desc:"Pagination will diaplay ellipsis for indicating previous or continuing results when the page amount is overflow.",component:e.jsx(m,{})},{mdName:"Total",mdPath:n,title:"Total",desc:"Display total number of data by setting <code>displayTotal</code> to true.",component:e.jsx(g,{})},{mdName:"PageSize",mdPath:n,title:"Page sizes",desc:"Displaying the pagination count divided by <code>total</code> & <code>pageSize</code>, often used on displaying numbers of data in a page. ",component:e.jsx(u,{})},{mdName:"Controlled",mdPath:n,title:"Controlled",desc:"Example of controlled pagination.",component:e.jsx(x,{})}],j=[{component:"Pagination",api:[{propName:"currentPage",type:"<code>number</code>",default:"<code>1</code>",desc:"Current page number"},{propName:"displayTotal",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display total of data items"},{propName:"onChange",type:"<code>(pageNumber: number) => void</code>",default:"<code>-</code>",desc:"Callback when Pagination index was clicked"},{propName:"pageSize",type:"<code>number</code>",default:"<code>1</code>",desc:"Number of data items per page"},{propName:"total",type:"<code>number</code>",default:"<code>5</code>",desc:"Total number of data items"}]}],G=()=>e.jsx(l,{header:h,demos:f,api:j});export{G as default};
