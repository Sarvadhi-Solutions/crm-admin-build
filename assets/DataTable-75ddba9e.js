import{j as n,r as l,ah as F,c as O}from"./index-59d5b448.js";import{T as j}from"./index-c7139f0d.js";import{P as L}from"./Pagination-5e980512.js";import{S as V}from"./Select-ee1aec02.js";import{C as W}from"./index-eb5fd987.js";import{S as y}from"./Skeleton-d921a7f4.js";import{u as q,f as b,g as J,a as K,b as Q,d as U,e as X}from"./index-ddf97715.js";const{Tr:Y,Td:Z,TBody:ee}=j,te=m=>{const{columns:i=1,rows:u=10,avatarInColumns:r=[],avatarProps:a}=m;return n.jsx(ee,{children:Array.from(new Array(u),(o,s)=>s+0).map(o=>n.jsx(Y,{children:Array.from(new Array(i),(s,d)=>d+0).map(s=>n.jsx(Z,{children:n.jsxs("div",{className:"flex flex-auto items-center gap-2",children:[r.includes(s)&&n.jsx("div",{children:n.jsx(y,{variant:"circle",...a})}),n.jsx(y,{})]})},`col-${s}`))},`row-${o}`))})},{Tr:M,Th:ne,Td:se,THead:oe,TBody:ae,Sorter:le}=j,k=m=>{const{indeterminate:i,onChange:u,onCheckBoxChange:r,onIndeterminateCheckBoxChange:a,...o}=m,s=l.useRef(null);l.useEffect(()=>{typeof i=="boolean"&&s.current&&(s.current.indeterminate=!o.checked&&i)},[s,i]);const d=c=>{u(c),r==null||r(c),a==null||a(c)};return n.jsx(W,{ref:s,className:"mb-0",onChange:(c,p)=>d(p),...o})};function re(m,i){const{skeletonAvatarColumns:u,columns:r=[],data:a=[],loading:o=!1,onCheckBoxChange:s,onIndeterminateCheckBoxChange:d,onPaginationChange:c,onSelectChange:p,onSort:x,pageSizes:w=[10,25,50,100],selectable:C=!1,skeletonAvatarProps:P,pagingData:R={total:0,pageIndex:1,pageSize:10}}=m,{pageSize:f,pageIndex:A,total:I}=R,[g,N]=l.useState(null),T=l.useMemo(()=>w.map(t=>({value:t,label:`${t} / page`})),[w]),z=(t,e)=>{o||s==null||s(t,e)},D=(t,e)=>{o||d==null||d(t,e)},H=t=>{o||c==null||c(t)},$=t=>{o||p==null||p(Number(t))};l.useEffect(()=>{if(Array.isArray(g)){const t=g.length>0?g[0].desc?"desc":"asc":"",e=g.length>0?g[0].id:"";x==null||x({order:t,key:e})}},[g]);const[E,G]=l.useState([]),v=l.useMemo(()=>{const t=r;return C?[{id:"select",header:({table:e})=>n.jsx(k,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),onIndeterminateCheckBoxChange:S=>{D(S.target.checked,e.getRowModel().rows)}}),cell:({row:e})=>n.jsx(k,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),onCheckBoxChange:S=>z(S.target.checked,e.original)})},...t]:t},[r,C]),h=q({data:a,columns:v,getCoreRowModel:J(),getFilteredRowModel:K(),getPaginationRowModel:Q(),getGroupedRowModel:U(),getSortedRowModel:X(),manualPagination:!0,manualSorting:!0,onGroupingChange:G,onSortingChange:t=>{N(t)},state:{sorting:g,grouping:E}}),_=()=>{h.resetSorting()},B=()=>{h.toggleAllRowsSelected(!1)};return l.useImperativeHandle(i,()=>({resetSorting:_,resetSelected:B})),n.jsxs(F,{loading:o&&a.length!==0,type:"cover",children:[n.jsxs(j,{children:[n.jsx(oe,{children:h.getHeaderGroups().map(t=>n.jsx(M,{children:t.headers.map(e=>n.jsx(ne,{colSpan:e.colSpan,className:"!py-3 !px-3 whitespace-nowrap items-center",children:e.isPlaceholder?null:n.jsxs("div",{className:O(e.column.getCanSort()&&"cursor-pointer select-none point",o&&"pointer-events-none"),onClick:e.column.getToggleSortingHandler(),children:[b(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&n.jsx(le,{sort:e.column.getIsSorted()})]})},e.id))},t.id))}),o&&a.length===0?n.jsx(te,{columns:v.length,rows:R.pageSize,avatarInColumns:u,avatarProps:P}):n.jsx(ae,{children:h.getRowModel().rows.slice(0,f).map(t=>n.jsx(M,{children:t.getVisibleCells().map(e=>n.jsx(se,{className:"!py-2 !px-3 whitespace-nowrap",children:b(e.column.columnDef.cell,e.getContext())},e.id))},t.id))})]}),n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[n.jsx(L,{pageSize:f,currentPage:A,total:I,onChange:H}),n.jsx("div",{style:{minWidth:130},children:n.jsx(V,{size:"sm",menuPlacement:"top",isSearchable:!1,value:T.filter(t=>t.value===f),options:T,onChange:t=>$(t==null?void 0:t.value)})})]})]})}const he=l.forwardRef(re);export{he as D,te as T};
