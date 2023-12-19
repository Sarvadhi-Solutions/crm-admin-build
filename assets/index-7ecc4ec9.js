import{j as e,r}from"./index-82a4cdcd.js";import{D as l}from"./DemoLayout-df6b5aa4.js";import{P as o}from"./Pagination-7722c7db.js";import{S as c}from"./Select-eb8671ae.js";import"./AdaptableCard-f3359e05.js";import"./Card-6707ff6e.js";import"./Views-5e6cd1d6.js";import"./Affix-5eefb417.js";import"./Button-0e96ba54.js";import"./Tooltip-5f04ccef.js";import"./usePopper-150e7e1f.js";import"./index.esm-e60cf8ff.js";import"./index-dff75ec8.js";import"./index.esm-9eb3698a.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-26dffdfb.js";import"./index-e4ab5da1.js";import"./index-4baab89c.js";import"./index.esm-4533a1af.js";import"./slicedToArray-d75d4238.js";import"./floating-ui.dom-4bc0055b.js";import"./get-71f6a308.js";import"./toString-b2e07e9a.js";import"./_MapCache-54b9aafe.js";const p=()=>{const t=a=>{console.log("onPaginationChange",a)};return e.jsx("div",{children:e.jsx(o,{onChange:t})})},m=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:50})}),e.jsx("div",{className:"mb-4",children:e.jsx(o,{total:100})})]}),g=()=>e.jsx("div",{children:e.jsx(o,{displayTotal:!0,total:50})}),d=[{value:5,label:"5 / page"},{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:50,label:"50 / page"}],u=()=>{const[t,a]=r.useState(d[0].value),s=({value:i})=>{a(i)};return e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{displayTotal:!0,pageSize:t,total:100}),e.jsx("div",{style:{minWidth:120},children:e.jsx(c,{size:"sm",isSearchable:!1,defaultValue:d[0],options:d,onChange:i=>s(i)})})]})},x=()=>{const[t,a]=r.useState(60),s=i=>{a(i)};return e.jsx("div",{children:e.jsx(o,{total:100,currentPage:t,onChange:s})})},n="Pagination",h={title:"Pagination",desc:"Pagination divided content into several pages and allows users to navigate in between."},f=[{mdName:"Basic",mdPath:n,title:"Basic",desc:"Basic usage of Pagination.",component:e.jsx(p,{})},{mdName:"More",mdPath:n,title:"More",desc:"Pagination will diaplay ellipsis for indicating previous or continuing results when the page amount is overflow.",component:e.jsx(m,{})},{mdName:"Total",mdPath:n,title:"Total",desc:"Display total number of data by setting <code>displayTotal</code> to true.",component:e.jsx(g,{})},{mdName:"PageSize",mdPath:n,title:"Page sizes",desc:"Displaying the pagination count divided by <code>total</code> & <code>pageSize</code>, often used on displaying numbers of data in a page. ",component:e.jsx(u,{})},{mdName:"Controlled",mdPath:n,title:"Controlled",desc:"Example of controlled pagination.",component:e.jsx(x,{})}],j=[{component:"Pagination",api:[{propName:"currentPage",type:"<code>number</code>",default:"<code>1</code>",desc:"Current page number"},{propName:"displayTotal",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display total of data items"},{propName:"onChange",type:"<code>(pageNumber: number) => void</code>",default:"<code>-</code>",desc:"Callback when Pagination index was clicked"},{propName:"pageSize",type:"<code>number</code>",default:"<code>1</code>",desc:"Number of data items per page"},{propName:"total",type:"<code>number</code>",default:"<code>5</code>",desc:"Total number of data items"}]}],G=()=>e.jsx(l,{header:h,demos:f,api:j});export{G as default};
