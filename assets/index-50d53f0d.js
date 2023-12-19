import{r as l,j as e}from"./index-04de45f1.js";import{D as j}from"./DemoLayout-89a84ba0.js";import{T as i}from"./index-f4f40370.js";import{S as g}from"./Switcher-51151d96.js";import{T as h}from"./TableRowSkeleton-b8809059.js";import{u as x,g as f,f as n}from"./index-57d63c42.js";import{A as N}from"./index-d960fe16.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index.esm-dece01db.js";import"./SyntaxHighlighter-b6d1a340.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-5ffe062f.js";import"./DemoComponentApi-46ba6f54.js";import"./index.esm-bec52084.js";import"./Skeleton-74d23b60.js";import"./useMergeRef-788c4cb0.js";const T=[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"}],b=[{firstName:"Maria",lastName:"Anders",age:24},{firstName:"Francisco",lastName:"Chang",age:9},{firstName:"Roland",lastName:"Mendel",age:1},{firstName:"Helen",lastName:"Bennett",age:43},{firstName:"Yoshi ",lastName:"Tannamuri",age:37}],{Tr:d,Th:v,Td:S,THead:w,TBody:y}=i,C=()=>{const[o,m]=l.useState(!0),r=x({data:b,columns:T,getCoreRowModel:f()});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(g,{checked:o,onChange:s=>m(!s)})]}),e.jsxs(i,{children:[e.jsx(w,{children:r.getHeaderGroups().map(s=>e.jsx(d,{children:s.headers.map(a=>e.jsx(v,{colSpan:a.colSpan,children:n(a.column.columnDef.header,a.getContext())},a.id))},s.id))}),o?e.jsx(h,{columns:3,rows:5}):e.jsx(y,{children:r.getRowModel().rows.map(s=>e.jsx(d,{children:s.getVisibleCells().map(a=>e.jsx(S,{children:n(a.column.columnDef.cell,a.getContext())},a.id))},s.id))})]})]})},c=30,R=[{firstName:"Maria",lastName:"Anders",age:24,avatar:"/img/avatars/thumb-1.jpg",status:"complicated"},{firstName:"Francisco",lastName:"Chang",age:9,avatar:"/img/avatars/thumb-2.jpg",status:"single"},{firstName:"Roland",lastName:"Mendel",age:1,avatar:"/img/avatars/thumb-3.jpg",status:"single"},{firstName:"Helen",lastName:"Bennett",age:43,avatar:"/img/avatars/thumb-4.jpg",status:"married"},{firstName:"Yoshi ",lastName:"Tannamuri",age:37,avatar:"/img/avatars/thumb-5.jpg",status:"single"}],{Tr:p,Th:k,Td:A,THead:M,TBody:B}=i,D=()=>{const[o,m]=l.useState(!0),r=l.useMemo(()=>[{header:"Name",accessorKey:"firstName",cell:a=>{const t=a.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{children:e.jsx(N,{size:c,src:t.avatar,shape:"circle"})}),e.jsxs("span",{children:[t.firstName," ",t.lastName," "]})]})}},{header:"Status",accessorKey:"status"},{header:"Age",accessorKey:"age"}],[]),s=x({data:R,columns:r,getCoreRowModel:f()});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(g,{checked:o,onChange:a=>m(!a)})]}),e.jsxs(i,{children:[e.jsx(M,{children:s.getHeaderGroups().map(a=>e.jsx(p,{children:a.headers.map(t=>e.jsx(k,{colSpan:t.colSpan,children:n(t.column.columnDef.header,t.getContext())},t.id))},a.id))}),o?e.jsx(h,{avatarInColumns:[0],columns:3,rows:5,avatarProps:{width:c,height:c}}):e.jsx(B,{children:s.getRowModel().rows.map(a=>e.jsx(p,{children:a.getVisibleCells().map(t=>e.jsx(A,{children:n(t.column.columnDef.cell,t.getContext())},t.id))},a.id))})]})]})},u="TableRowSkeletonDoc",H={title:"TableRowSkeleton",desc:"TableRowSkeleton is a combination of Skeleton component for display a loading state of Table element."},L=[{mdName:"Basic",mdPath:u,title:"Basic",desc:"",component:e.jsx(C,{})},{mdName:"WithAvatar",mdPath:u,title:"With avatar",desc:"",component:e.jsx(D,{})}],P=[{component:"TableRowSkeleton",api:[{propName:"avatarInColumns",type:"<code>number[]</code>",default:"<code>[]</code>",desc:"Specify skeleton avatar display is which column"},{propName:"avatarProps",type:'<a class="text-indigo-600 underline" href="/ui-components/skeleton#api" target="_blank"><code>SkeletonProps</code></a>',default:"-",desc:"Props for avatar skeleton"},{propName:"columns",type:"<code>number</code>",default:"<code>1</code>",desc:"Count of the skeleton column"},{propName:"rows",type:"<code>number</code>",default:"<code>10</code>",desc:"Counts of the skeleton row"}]}],me=()=>e.jsx(j,{innerFrame:!1,header:H,demos:L,api:P,mdPrefixPath:"shared"});export{me as default};
