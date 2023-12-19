import{am as h,an as j,ao as f,ap as D,j as a,aq as C,ar as N,a as k,r as v,ai as y}from"./index-6767ac81.js";import{a as T}from"./CrmService-e70a4be4.js";import{C as g}from"./Card-da872ceb.js";import{A as n}from"./index-688b9e70.js";import{F as w,a as S,b as R,c as A}from"./index.esm-de6d09c0.js";import{B as L}from"./Button-edcd26d9.js";import{T as b}from"./index-d5eb49a4.js";import{T as l}from"./Tag-28e3c136.js";import{c as B,u as F,f as x,g as z}from"./index-43da21b1.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./Views-e5205a91.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./context-cdfa92ed.js";import"./index.esm-ad20eb15.js";const E="crmDashboard",m=h("crmDashboard/data/dashboard",async()=>(await T()).data),H={loading:!0,dashboardData:{}},M=j({name:`${E}/state`,initialState:H,reducers:{},extraReducers:e=>{e.addCase(m.fulfilled,(s,c)=>{s.dashboardData=c.payload.crmDashboardData,s.loading=!1}).addCase(m.pending,s=>{s.loading=!0})}}),$=M.reducer,I=f({data:$}),u=D,V=({type:e})=>{switch(e){case"newLeads":return a.jsx(n,{size:55,className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:a.jsx(A,{})});case"company":return a.jsx(n,{size:55,className:"bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100",icon:a.jsx(R,{})});case"clients":return a.jsx(n,{size:55,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:a.jsx(S,{})});case"task":return a.jsx(n,{size:55,className:"bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100",icon:a.jsx(w,{})});default:return a.jsx("div",{})}},q=({data:e={}})=>a.jsx(g,{children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(V,{type:e.key}),a.jsx("div",{children:a.jsxs("div",{className:"flex gap-1.5 items-end mb-2",children:[a.jsx("h3",{className:"font-bold leading-none",children:e.value}),a.jsx("p",{className:"font-semibold",children:e.label})]})})]})}),G=({data:e=[]})=>a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4",children:e.map(s=>a.jsx(q,{data:s},s.key))}),{Tr:p,Td:_,TBody:J,THead:K,Th:O}=b,P=({status:e})=>{switch(e){case"active":return a.jsx(l,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"deactive":return a.jsx(l,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Deactive"});default:return a.jsx(a.Fragment,{})}},Q=({tags:e})=>a.jsx("div",{children:e.map(s=>a.jsx(l,{style:{backgroundColor:`${s.colorName}1A`,color:s.colorName,padding:"5px 10px",border:"none",borderRadius:"5px",marginRight:"4px",marginBottom:"4px",display:"inline-block"},children:s.tagName},s.id))}),o=B(),U=[o.accessor("associatedContact",{header:"Associated Contact"}),o.accessor("details",{header:"Details"}),o.accessor("status",{header:"Status",cell:e=>{const s=e.row.original;return a.jsx(P,{status:s.status})}}),o.accessor("tags",{header:"Tags",cell:e=>{const s=e.row.original;return a.jsx(Q,{tags:s.tags})}}),o.accessor("notes",{header:"Notes"})],W=({data:e=[],className:s})=>{const c=C(),d=F({data:e,columns:U,getCoreRowModel:z()}),i=()=>{c("/app/crm/leads")};return a.jsxs(g,{className:s,children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h4",{children:"Leads"}),a.jsx(L,{size:"sm",onClick:i,children:"View All Leads"})]}),a.jsxs(b,{children:[a.jsx(K,{children:d.getHeaderGroups().map(r=>a.jsx(p,{children:r.headers.map(t=>a.jsx(O,{colSpan:t.colSpan,children:x(t.column.columnDef.header,t.getContext())},t.id))},r.id))}),a.jsx(J,{children:d.getRowModel().rows.map(r=>a.jsx(p,{children:r.getVisibleCells().map(t=>a.jsx(_,{children:x(t.column.columnDef.cell,t.getContext())},t.id))},r.id))})]})]})};N("crmDashboard",I);const X=()=>{const e=k(),{statisticData:s,recentLeadsData:c}=u(r=>r.crmDashboard.data.dashboardData),d=u(r=>r.crmDashboard.data.loading);v.useEffect(()=>{i()},[]);const i=()=>{e(m())};return a.jsx("div",{className:"flex flex-col gap-4 h-full",children:a.jsxs(y,{loading:d,children:[a.jsx(G,{data:s}),a.jsx(W,{data:c})]})})},ga=X;export{ga as default};
