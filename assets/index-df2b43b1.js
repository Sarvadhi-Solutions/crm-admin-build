import{r as l,j as e}from"./index-a9c93031.js";import{D as j}from"./DemoLayout-29dfdcad.js";import{T as i}from"./index-10dbbba6.js";import{S as g}from"./Switcher-631d0666.js";import{T as h}from"./TableRowSkeleton-dd368555.js";import{u as x,g as f,f as n}from"./index-b8d32cfc.js";import{A as N}from"./index-7cf9b27e.js";import"./AdaptableCard-cf701c87.js";import"./Card-6b8166bd.js";import"./Views-0c5423a6.js";import"./Affix-44c84a49.js";import"./Button-47bf58f7.js";import"./context-6d5d8fe5.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index-0b68a97f.js";import"./index.esm-37c3564c.js";import"./SyntaxHighlighter-2ddb351b.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ccb51e40.js";import"./extends-98964cd2.js";import"./index-15ad1e57.js";import"./DemoComponentApi-407323db.js";import"./index.esm-556fe943.js";import"./Skeleton-772a6f71.js";import"./useMergeRef-788c4cb0.js";const T=[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"}],b=[{firstName:"Maria",lastName:"Anders",age:24},{firstName:"Francisco",lastName:"Chang",age:9},{firstName:"Roland",lastName:"Mendel",age:1},{firstName:"Helen",lastName:"Bennett",age:43},{firstName:"Yoshi ",lastName:"Tannamuri",age:37}],{Tr:d,Th:v,Td:S,THead:w,TBody:y}=i,C=()=>{const[o,m]=l.useState(!0),r=x({data:b,columns:T,getCoreRowModel:f()});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(g,{checked:o,onChange:s=>m(!s)})]}),e.jsxs(i,{children:[e.jsx(w,{children:r.getHeaderGroups().map(s=>e.jsx(d,{children:s.headers.map(a=>e.jsx(v,{colSpan:a.colSpan,children:n(a.column.columnDef.header,a.getContext())},a.id))},s.id))}),o?e.jsx(h,{columns:3,rows:5}):e.jsx(y,{children:r.getRowModel().rows.map(s=>e.jsx(d,{children:s.getVisibleCells().map(a=>e.jsx(S,{children:n(a.column.columnDef.cell,a.getContext())},a.id))},s.id))})]})]})},c=30,R=[{firstName:"Maria",lastName:"Anders",age:24,avatar:"/img/avatars/thumb-1.jpg",status:"complicated"},{firstName:"Francisco",lastName:"Chang",age:9,avatar:"/img/avatars/thumb-2.jpg",status:"single"},{firstName:"Roland",lastName:"Mendel",age:1,avatar:"/img/avatars/thumb-3.jpg",status:"single"},{firstName:"Helen",lastName:"Bennett",age:43,avatar:"/img/avatars/thumb-4.jpg",status:"married"},{firstName:"Yoshi ",lastName:"Tannamuri",age:37,avatar:"/img/avatars/thumb-5.jpg",status:"single"}],{Tr:p,Th:k,Td:A,THead:M,TBody:B}=i,D=()=>{const[o,m]=l.useState(!0),r=l.useMemo(()=>[{header:"Name",accessorKey:"firstName",cell:a=>{const t=a.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{children:e.jsx(N,{size:c,src:t.avatar,shape:"circle"})}),e.jsxs("span",{children:[t.firstName," ",t.lastName," "]})]})}},{header:"Status",accessorKey:"status"},{header:"Age",accessorKey:"age"}],[]),s=x({data:R,columns:r,getCoreRowModel:f()});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(g,{checked:o,onChange:a=>m(!a)})]}),e.jsxs(i,{children:[e.jsx(M,{children:s.getHeaderGroups().map(a=>e.jsx(p,{children:a.headers.map(t=>e.jsx(k,{colSpan:t.colSpan,children:n(t.column.columnDef.header,t.getContext())},t.id))},a.id))}),o?e.jsx(h,{avatarInColumns:[0],columns:3,rows:5,avatarProps:{width:c,height:c}}):e.jsx(B,{children:s.getRowModel().rows.map(a=>e.jsx(p,{children:a.getVisibleCells().map(t=>e.jsx(A,{children:n(t.column.columnDef.cell,t.getContext())},t.id))},a.id))})]})]})},u="TableRowSkeletonDoc",H={title:"TableRowSkeleton",desc:"TableRowSkeleton is a combination of Skeleton component for display a loading state of Table element."},L=[{mdName:"Basic",mdPath:u,title:"Basic",desc:"",component:e.jsx(C,{})},{mdName:"WithAvatar",mdPath:u,title:"With avatar",desc:"",component:e.jsx(D,{})}],P=[{component:"TableRowSkeleton",api:[{propName:"avatarInColumns",type:"<code>number[]</code>",default:"<code>[]</code>",desc:"Specify skeleton avatar display is which column"},{propName:"avatarProps",type:'<a class="text-indigo-600 underline" href="/ui-components/skeleton#api" target="_blank"><code>SkeletonProps</code></a>',default:"-",desc:"Props for avatar skeleton"},{propName:"columns",type:"<code>number</code>",default:"<code>1</code>",desc:"Count of the skeleton column"},{propName:"rows",type:"<code>number</code>",default:"<code>10</code>",desc:"Counts of the skeleton row"}]}],le=()=>e.jsx(j,{innerFrame:!1,header:H,demos:L,api:P,mdPrefixPath:"shared"});export{le as default};
