import{j as n,r as l,ah as O,c as L}from"./index-bbbc5aef.js";import{T as C}from"./index-b158199e.js";import{P as V}from"./Pagination-7ecff04b.js";import{S as W}from"./Select-839ea91c.js";import{C as q}from"./index-f008017f.js";import{S as M}from"./Skeleton-b410f7be.js";import{u as J,f as k,g as K,a as Q,b as U,c as X,d as Y}from"./index-6bf7b9b2.js";const{Tr:Z,Td:ee,TBody:te}=C,ne=m=>{const{columns:i=1,rows:u=10,avatarInColumns:r=[],avatarProps:a}=m;return n.jsx(te,{children:Array.from(new Array(u),(s,o)=>o+0).map(s=>n.jsx(Z,{children:Array.from(new Array(i),(o,d)=>d+0).map(o=>n.jsx(ee,{children:n.jsxs("div",{className:"flex flex-auto items-center gap-2",children:[r.includes(o)&&n.jsx("div",{children:n.jsx(M,{variant:"circle",...a})}),n.jsx(M,{})]})},`col-${o}`))},`row-${s}`))})},{Tr:w,Th:se,Td:oe,THead:ae,TBody:le,Sorter:re}=C,P=m=>{const{indeterminate:i,onChange:u,onCheckBoxChange:r,onIndeterminateCheckBoxChange:a,...s}=m,o=l.useRef(null);l.useEffect(()=>{typeof i=="boolean"&&o.current&&(o.current.indeterminate=!s.checked&&i)},[o,i]);const d=c=>{u(c),r==null||r(c),a==null||a(c)};return n.jsx(q,{ref:o,className:"mb-0",onChange:(c,p)=>d(p),...s})};function ce(m,i){const{skeletonAvatarColumns:u,columns:r=[],data:a=[],loading:s=!1,isPagination:o=!0,onCheckBoxChange:d,onIndeterminateCheckBoxChange:c,onPaginationChange:p,onSelectChange:x,onSort:f,pageSizes:R=[10,25,50,100],selectable:T=!1,skeletonAvatarProps:A,pagingData:v={total:0,pageIndex:1,pageSize:10}}=m,{pageSize:S,pageIndex:I,total:N}=v,[g,z]=l.useState(null),b=l.useMemo(()=>R.map(t=>({value:t,label:`${t} / page`})),[R]),D=(t,e)=>{s||d==null||d(t,e)},H=(t,e)=>{s||c==null||c(t,e)},$=t=>{s||p==null||p(t)},E=t=>{s||x==null||x(Number(t))};l.useEffect(()=>{if(Array.isArray(g)){const t=g.length>0?g[0].desc?"desc":"asc":"",e=g.length>0?g[0].id:"";f==null||f({order:t,key:e})}},[g]);const[G,_]=l.useState([]),y=l.useMemo(()=>{const t=r;return T?[{id:"select",header:({table:e})=>n.jsx(P,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),onIndeterminateCheckBoxChange:j=>{H(j.target.checked,e.getRowModel().rows)}}),cell:({row:e})=>n.jsx(P,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),onCheckBoxChange:j=>D(j.target.checked,e.original)})},...t]:t},[r,T]),h=J({data:a,columns:y,getCoreRowModel:K(),getFilteredRowModel:Q(),getPaginationRowModel:U(),getGroupedRowModel:X(),getSortedRowModel:Y(),manualPagination:!0,manualSorting:!0,onGroupingChange:_,onSortingChange:t=>{z(t)},state:{sorting:g,grouping:G}}),B=()=>{h.resetSorting()},F=()=>{h.toggleAllRowsSelected(!1)};return l.useImperativeHandle(i,()=>({resetSorting:B,resetSelected:F})),n.jsxs(O,{loading:s&&a.length!==0,type:"cover",children:[n.jsxs(C,{children:[n.jsx(ae,{children:h.getHeaderGroups().map(t=>n.jsx(w,{children:t.headers.map(e=>n.jsx(se,{colSpan:e.colSpan,className:"!py-3 !px-3 whitespace-nowrap items-center",children:e.isPlaceholder?null:n.jsxs("div",{className:L(e.column.getCanSort()&&"cursor-pointer select-none point",s&&"pointer-events-none"),onClick:e.column.getToggleSortingHandler(),children:[k(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&n.jsx(re,{sort:e.column.getIsSorted()})]})},e.id))},t.id))}),s&&a.length===0?n.jsx(ne,{columns:y.length,rows:v.pageSize,avatarInColumns:u,avatarProps:A}):n.jsx(le,{children:h.getRowModel().rows.length>0?h.getRowModel().rows.slice(0,S).map(t=>n.jsx(w,{children:t.getVisibleCells().map(e=>n.jsx(oe,{className:"!py-2 !px-3 whitespace-nowrap",children:k(e.column.columnDef.cell,e.getContext())},e.id))},t.id)):n.jsx(w,{children:n.jsx("td",{colSpan:16,className:"text-center",children:n.jsx("span",{className:"block py-3 px-6 text-base font-semibold",children:"No records found."})})})})]}),o?n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[n.jsx(V,{pageSize:S,currentPage:I,total:N,onChange:$}),n.jsx("div",{style:{minWidth:130},children:n.jsx(W,{size:"sm",menuPlacement:"top",isSearchable:!1,value:b.filter(t=>t.value===S),options:b,onChange:t=>E(t==null?void 0:t.value)})})]}):null]})}const xe=l.forwardRef(ce);export{xe as D,ne as T};
