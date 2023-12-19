import{j as n,r as c,ah as B,c as F}from"./index-3e880d58.js";import{T as j}from"./index-2e6e3f8b.js";import{P as O}from"./Pagination-65d73c7a.js";import{S as L}from"./Select-76acedff.js";import{C as V}from"./index-f0b859a7.js";import{S as y}from"./Skeleton-6f0cf5d7.js";import{u as W,f as b,g as q,d as G,e as J,a as K}from"./index-de567301.js";const{Tr:Q,Td:U,TBody:X}=j,Y=m=>{const{columns:i=1,rows:u=10,avatarInColumns:l=[],avatarProps:o}=m;return n.jsx(X,{children:Array.from(new Array(u),(a,s)=>s+0).map(a=>n.jsx(Q,{children:Array.from(new Array(i),(s,d)=>d+0).map(s=>n.jsx(U,{children:n.jsxs("div",{className:"flex flex-auto items-center gap-2",children:[l.includes(s)&&n.jsx("div",{children:n.jsx(y,{variant:"circle",...o})}),n.jsx(y,{})]})},`col-${s}`))},`row-${a}`))})},{Tr:k,Th:Z,Td:ee,THead:te,TBody:ne,Sorter:se}=j,M=m=>{const{indeterminate:i,onChange:u,onCheckBoxChange:l,onIndeterminateCheckBoxChange:o,...a}=m,s=c.useRef(null);c.useEffect(()=>{typeof i=="boolean"&&s.current&&(s.current.indeterminate=!a.checked&&i)},[s,i]);const d=r=>{u(r),l==null||l(r),o==null||o(r)};return n.jsx(V,{ref:s,className:"mb-0",onChange:(r,p)=>d(p),...a})};function ae(m,i){const{skeletonAvatarColumns:u,columns:l=[],data:o=[],loading:a=!1,onCheckBoxChange:s,onIndeterminateCheckBoxChange:d,onPaginationChange:r,onSelectChange:p,onSort:f,pageSizes:C=[10,25,50,100],selectable:T=!1,skeletonAvatarProps:P,pagingData:R={total:0,pageIndex:1,pageSize:10}}=m,{pageSize:h,pageIndex:A,total:I}=R,[g,N]=c.useState(null),v=c.useMemo(()=>C.map(t=>({value:t,label:`${t} / page`})),[C]),z=(t,e)=>{a||s==null||s(t,e)},D=(t,e)=>{a||d==null||d(t,e)},H=t=>{a||r==null||r(t)},$=t=>{a||p==null||p(Number(t))};c.useEffect(()=>{if(Array.isArray(g)){const t=g.length>0?g[0].desc?"desc":"asc":"",e=g.length>0?g[0].id:"";f==null||f({order:t,key:e})}},[g]);const w=c.useMemo(()=>{const t=l;return T?[{id:"select",header:({table:e})=>n.jsx(M,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),onIndeterminateCheckBoxChange:S=>{D(S.target.checked,e.getRowModel().rows)}}),cell:({row:e})=>n.jsx(M,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),onCheckBoxChange:S=>z(S.target.checked,e.original)})},...t]:t},[l,T]),x=W({data:o,columns:w,getCoreRowModel:q(),getFilteredRowModel:G(),getPaginationRowModel:J(),getSortedRowModel:K(),manualPagination:!0,manualSorting:!0,onSortingChange:t=>{N(t)},state:{sorting:g}}),E=()=>{x.resetSorting()},_=()=>{x.toggleAllRowsSelected(!1)};return c.useImperativeHandle(i,()=>({resetSorting:E,resetSelected:_})),n.jsxs(B,{loading:a&&o.length!==0,type:"cover",children:[n.jsxs(j,{children:[n.jsx(te,{children:x.getHeaderGroups().map(t=>n.jsx(k,{children:t.headers.map(e=>n.jsx(Z,{colSpan:e.colSpan,className:"!py-3 !px-3",children:e.isPlaceholder?null:n.jsxs("div",{className:F(e.column.getCanSort()&&"cursor-pointer select-none point",a&&"pointer-events-none"),onClick:e.column.getToggleSortingHandler(),children:[b(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&n.jsx(se,{sort:e.column.getIsSorted()})]})},e.id))},t.id))}),a&&o.length===0?n.jsx(Y,{columns:w.length,rows:R.pageSize,avatarInColumns:u,avatarProps:P}):n.jsx(ne,{children:x.getRowModel().rows.slice(0,h).map(t=>n.jsx(k,{children:t.getVisibleCells().map(e=>n.jsx(ee,{className:"!py-2 !px-3",children:b(e.column.columnDef.cell,e.getContext())},e.id))},t.id))})]}),n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[n.jsx(O,{pageSize:h,currentPage:A,total:I,onChange:H}),n.jsx("div",{style:{minWidth:130},children:n.jsx(L,{size:"sm",menuPlacement:"top",isSearchable:!1,value:v.filter(t=>t.value===h),options:v,onChange:t=>$(t==null?void 0:t.value)})})]})]})}const me=c.forwardRef(ae);export{me as D,Y as T};
