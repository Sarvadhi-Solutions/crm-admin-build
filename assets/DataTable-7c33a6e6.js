import{r as l,j as n,ai as O,c as _}from"./index-6767ac81.js";import{T as M}from"./index-d5eb49a4.js";import{P as B}from"./Pagination-3af44538.js";import{S as L}from"./Select-3d321c37.js";import{C as V}from"./index-5c02b9f9.js";import{T as W}from"./TableRowSkeleton-6125f39f.js";import{u as $,f as T,g as q,b as G,d as J,a as K}from"./index-43da21b1.js";const{Tr:v,Th:Q,Td:U,THead:X,TBody:Y,Sorter:Z}=M,k=f=>{const{indeterminate:d,onChange:h,onCheckBoxChange:i,onIndeterminateCheckBoxChange:r,...s}=f,o=l.useRef(null);l.useEffect(()=>{typeof d=="boolean"&&o.current&&(o.current.indeterminate=!s.checked&&d)},[o,d]);const g=a=>{h(a),i==null||i(a),r==null||r(a)};return n.jsx(V,{ref:o,className:"mb-0",onChange:(a,m)=>g(m),...s})};function ee(f,d){const{skeletonAvatarColumns:h,columns:i=[],data:r=[],loading:s=!1,onCheckBoxChange:o,onIndeterminateCheckBoxChange:g,onPaginationChange:a,onSelectChange:m,onSort:p,pageSizes:C=[10,25,50,100],selectable:j=!1,skeletonAvatarProps:P,pagingData:R={total:0,pageIndex:1,pageSize:10}}=f,{pageSize:S,pageIndex:I,total:y}=R,[c,A]=l.useState(null),b=l.useMemo(()=>C.map(t=>({value:t,label:`${t} / page`})),[C]),z=(t,e)=>{s||o==null||o(t,e)},D=(t,e)=>{s||g==null||g(t,e)},H=t=>{s||a==null||a(t)},N=t=>{s||m==null||m(Number(t))};l.useEffect(()=>{if(Array.isArray(c)){const t=c.length>0?c[0].desc?"desc":"asc":"",e=c.length>0?c[0].id:"";p==null||p({order:t,key:e})}},[c]);const w=l.useMemo(()=>{const t=i;return j?[{id:"select",header:({table:e})=>n.jsx(k,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),onIndeterminateCheckBoxChange:x=>{D(x.target.checked,e.getRowModel().rows)}}),cell:({row:e})=>n.jsx(k,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),onCheckBoxChange:x=>z(x.target.checked,e.original)})},...t]:t},[i,j]),u=$({data:r,columns:w,getCoreRowModel:q(),getFilteredRowModel:G(),getPaginationRowModel:J(),getSortedRowModel:K(),manualPagination:!0,manualSorting:!0,onSortingChange:t=>{A(t)},state:{sorting:c}}),E=()=>{u.resetSorting()},F=()=>{u.toggleAllRowsSelected(!1)};return l.useImperativeHandle(d,()=>({resetSorting:E,resetSelected:F})),n.jsxs(O,{loading:s&&r.length!==0,type:"cover",children:[n.jsxs(M,{children:[n.jsx(X,{children:u.getHeaderGroups().map(t=>n.jsx(v,{children:t.headers.map(e=>n.jsx(Q,{colSpan:e.colSpan,children:e.isPlaceholder?null:n.jsxs("div",{className:_(e.column.getCanSort()&&"cursor-pointer select-none point",s&&"pointer-events-none"),onClick:e.column.getToggleSortingHandler(),children:[T(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&n.jsx(Z,{sort:e.column.getIsSorted()})]})},e.id))},t.id))}),s&&r.length===0?n.jsx(W,{columns:w.length,rows:R.pageSize,avatarInColumns:h,avatarProps:P}):n.jsx(Y,{children:u.getRowModel().rows.slice(0,S).map(t=>n.jsx(v,{children:t.getVisibleCells().map(e=>n.jsx(U,{children:T(e.column.columnDef.cell,e.getContext())},e.id))},t.id))})]}),n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[n.jsx(B,{pageSize:S,currentPage:I,total:y,onChange:H}),n.jsx("div",{style:{minWidth:130},children:n.jsx(L,{size:"sm",menuPlacement:"top",isSearchable:!1,value:b.filter(t=>t.value===S),options:b,onChange:t=>N(t==null?void 0:t.value)})})]})]})}const ce=l.forwardRef(ee);export{ce as D};
