import{al as T,am as G,an as V,ao as W,r as c,i as S,j as e,ap as $,ah as M,aq as q,a as J}from"./index-de229e0f.js";import{a as K,b as P,c as Q}from"./CrmService-3972df40.js";import{C as D}from"./Card-a97e4c2f.js";import{B as F}from"./Badge-1c9640f8.js";import{_ as U,C as m}from"./chart.constant-14f0e72f.js";import{a as R,b as X,c as Y,d as Z}from"./chart.config-882b5369.js";import{B as ee}from"./Button-b15cd132.js";import{T as z}from"./index-a5a888d3.js";import{S as se}from"./StatusCapsule-96583ef0.js";import{T as O}from"./TextTruncate-b6fa38c4.js";import{c as te,u as ae,f as A,g as re}from"./index-bcf5a82e.js";import{S as f}from"./index-da4e4b17.js";import{i as oe}from"./Views-e5666688.js";import{A as j}from"./index-014db2f3.js";import{F as ie,a as ne,b as le,c as ce}from"./index.esm-a7a16178.js";import"./index.esm-181c8c38.js";import"./Alert-6c1fb93d.js";import"./useTimeout-73ec5f9b.js";import"./index.esm-aee8ac7d.js";import"./CloseButton-a4aa9973.js";import"./StatusIcon-6f48f0ae.js";import"./RangeCalendar-a7904a79.js";import"./useControllableState-c13b1cb7.js";import"./index-5d48ec0d.js";import"./cloneDeep-e3592be4.js";import"./_MapCache-af06afb7.js";import"./_getPrototype-3735b5b3.js";import"./_baseIsEqual-e27983a5.js";import"./get-9c32eaa8.js";import"./toString-99f06a6f.js";import"./index-c1fa956a.js";import"./useMergeRef-788c4cb0.js";import"./Input-0edbc257.js";import"./isNil-8888295d.js";import"./useRootClose-2530cd3e.js";import"./usePopper-beea1819.js";import"./TimeInput-d14a467e.js";import"./useUniqueId-c7e0bf5f.js";import"./useDidUpdate-be9907f8.js";import"./Dialog-8e46cfc1.js";import"./index-ea6d121c.js";import"./Drawer-f0faeb9e.js";import"./index-3edcad3a.js";import"./useUncertainRef-4abf232b.js";import"./index-95f7d6b8.js";import"./chainedFunction-070f832c.js";import"./index-6be331b1.js";import"./FormItem-babd9538.js";import"./index-5c089da4.js";import"./index-a531e03b.js";import"./toast-2a495ac5.js";import"./Pagination-eeb66415.js";import"./Progress-3fcd9e67.js";import"./index-8cb693c7.js";import"./ScrollBar-19fef748.js";import"./Select-7b8d032a.js";import"./slicedToArray-dce459c5.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-ccf7c0d4.js";import"./floating-ui.dom-bef9cea3.js";import"./Skeleton-fe9c87f9.js";import"./index-2cc6f2e5.js";import"./mapCloneElement-03a07d0b.js";import"./Switcher-a81d65e1.js";import"./index-c847ee3d.js";import"./Tag-416f4bd5.js";import"./index-f77eb852.js";import"./index-3ec890d7.js";import"./Tooltip-f07ebc4b.js";import"./index.esm-9e33621c.js";import"./Upload-bc5be741.js";import"./index.esm-7525e498.js";const de="crmDashboard",v=T("crmDashboard/data/dashboard",async()=>(await K()).data),N=T("crmDashboard/data/dashboard/tasks",async()=>(await P()).data),w=T("crmDashboard/data/getLeads",async()=>(await Q()).data),me={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[]},pe=G({name:`${de}/state`,initialState:me,reducers:{},extraReducers:a=>{a.addCase(v.fulfilled,(t,r)=>{t.dashboardData=r.payload.crmDashboardData,t.loading=!1}).addCase(v.pending,t=>{t.loading=!0}).addCase(N.fulfilled,(t,r)=>{t.loading=!1,t.tasksChartData.chart=r.payload.data}).addCase(N.pending,t=>{t.loading=!0}).addCase(w.fulfilled,(t,r)=>{t.leadsList=r.payload.data,t.loading=!1}).addCase(w.pending,(t,r)=>{t.loading=!0})}}),ue=pe.reducer,he=V({data:ue}),h=W,B=["line","bar","area"],I=a=>{const{series:t=[],width:r="100%",height:s=300,xAxis:l,customOptions:n,type:o="line",direction:i,donutTitle:x,donutText:g,className:d,..._}=a,y=c.useRef(null),H=c.useMemo(()=>{switch(o){case"line":return R;case"bar":return Z;case"area":return Y;case"donut":return X;default:return R}},[o]);let p=JSON.parse(JSON.stringify(H));const k=window.innerWidth<768,L=c.useCallback(()=>{if(y.current){const u=y.current.querySelectorAll("div.apexcharts-legend")[0];i===S&&(u.style.right="auto",u.style.left="0"),k&&(u.style.position="relative",u.style.top="0",u.style.justifyContent="start",u.style.padding="0")}},[i,k]);return c.useEffect(()=>{B.includes(o)&&L()},[o,L]),B.includes(o)&&(p.xaxis.categories=l),n&&(p={...p,...n}),o==="donut"&&(x&&(p.plotOptions.pie.donut.labels.total.label=x),g&&(p.plotOptions.pie.donut.labels.total.formatter=()=>g)),e.jsx("div",{ref:y,style:i===S?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(U,{options:p,type:o,series:t,width:r,height:s,className:d,..._})})},xe=({data:a={labels:[],data:[]}})=>e.jsxs(D,{children:[e.jsx("h4",{children:"Leads"}),e.jsx("div",{className:"mt-6",children:a.data.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(I,{donutTitle:`${a.data.reduce((t,r)=>t+r,0)}`,donutText:"Leads",series:a.data,customOptions:{labels:a.labels},type:"donut"}),a.data.length===a.labels.length&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 max-w-[180px] mx-auto",children:a.labels.map((t,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(F,{badgeStyle:{backgroundColor:m[r]}}),e.jsx("span",{className:"font-semibold",children:t})]},t))})]})})]}),{Tr:E,Td:ge,TBody:fe,THead:je,Th:be}=z,b=te(),Ce=[b.accessor("associatedContact",{header:"Associated Contact",cell:a=>{var s;const t=(s=a.row.original)==null?void 0:s.contactData;return t?t.firstName+" "+t.lastName:"-"}}),b.accessor("title",{header:"Title",cell:a=>{const t=a.row.original;return e.jsx(O,{text:t.title,maxLength:30})}}),b.accessor("budget",{header:"Budget",cell:a=>{const t=a.row.original;return e.jsx(O,{text:t.budget,maxLength:20})}}),b.accessor("status",{header:"Status",cell:a=>{const t=a.row.original;return e.jsx(se,{status:t.status})}})],De=({data:a=[],className:t})=>{const r=$(),s=ae({data:a,columns:Ce,getCoreRowModel:re()}),l=()=>{r("/app/crm/leads")};return e.jsxs(D,{className:t,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(ee,{size:"sm",onClick:l,children:"View All Leads"})]}),e.jsxs(z,{children:[e.jsx(je,{children:s.getHeaderGroups().map(n=>e.jsx(E,{children:n.headers.map(o=>e.jsx(be,{colSpan:o.colSpan,children:A(o.column.columnDef.header,o.getContext())},o.id))},n.id))}),e.jsx(fe,{children:s.getRowModel().rows.map(n=>e.jsx(E,{children:n.getVisibleCells().map(o=>e.jsx(ge,{children:A(o.column.columnDef.cell,o.getContext())},o.id))},n.id))})]})]})},C=({label:a,value:t,badgeClass:r,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(F,{className:"mt-2.5",innerClass:r}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:t}),e.jsx("p",{children:a})]})]}),ye=({className:a})=>{const[t,r]=c.useState(["weekly"]),s=h(i=>i.crmDashboard.data.tasksChartData),[l,n]=c.useState(!1),o=h(i=>i.theme.layout.sideNavCollapse);return c.useEffect(()=>{n(!0);const i=setTimeout(()=>n(!1),300);return console.log(m[0],m[2],m[1]),()=>{clearTimeout(i)}},[s,o]),e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(f,{value:t,size:"sm",onChange:i=>r(i),children:[e.jsx(f.Item,{value:"monthly",children:"Monthly"}),e.jsx(f.Item,{value:"weekly",children:"Weekly"}),e.jsx(f.Item,{value:"daily",children:"Daily"})]})]}),!oe(s)&&!l&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(C,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[t[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(C,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[t[0]].series[0].name,value:s==null?void 0:s.chart[t[0]].completed}),e.jsx(C,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[t[0]].series[1].name,value:s==null?void 0:s.chart[t[0]].pending}),e.jsx(C,{badgeClass:"bg-red-500",label:s==null?void 0:s.chart[t[0]].series[2].name,value:s==null?void 0:s.chart[t[0]].rejected})]})]}),e.jsxs("div",{children:[e.jsx(I,{series:s==null?void 0:s.chart[t[0]].series,xAxis:s==null?void 0:s.chart[t[0]].range,type:"bar",customOptions:{colors:[m[2],m[0],m[4]],legend:{show:!1}}}),e.jsx("div",{className:""})]})]}),e.jsx(M,{loading:l,type:"cover",children:l&&e.jsx("div",{className:"h-[300px]"})})]})},ve=({type:a})=>{switch(a){case"newLeads":return e.jsx(j,{size:55,className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(ce,{})});case"company":return e.jsx(j,{size:55,className:"bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100",icon:e.jsx(le,{})});case"clients":return e.jsx(j,{size:55,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(ne,{})});case"task":return e.jsx(j,{size:55,className:"bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100",icon:e.jsx(ie,{})});default:return e.jsx("div",{})}},Ne=({data:a={}})=>e.jsx(D,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(ve,{type:a.key}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-1.5 items-end mb-2",children:[e.jsx("h3",{className:"font-bold leading-none",children:a.value}),e.jsx("p",{className:"font-semibold",children:a.label})]})})]})}),we=({data:a=[]})=>e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4",children:a.map(t=>e.jsx(Ne,{data:t},t.key))});q("crmDashboard",he);const Te=()=>{const a=J(),{statisticData:t,recentLeadsData:r}=h(i=>i.crmDashboard.data.dashboardData),s=h(i=>i.crmDashboard.data.leadsList),l=h(i=>i.crmDashboard.data.loading);c.useEffect(()=>{n()},[]);const n=()=>{a(v()),a(N()),a(w())},o=c.useMemo(()=>{const i=(s==null?void 0:s.filter(d=>d.status==="open").length)||0,x=(s==null?void 0:s.filter(d=>d.status==="closed_lost").length)||0,g=(s==null?void 0:s.filter(d=>d.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[i,x,g]}},[s]);return e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(M,{loading:l,children:[e.jsx(we,{data:t}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(ye,{className:"col-span-2"}),e.jsx(xe,{data:o})]}),e.jsx(De,{data:r})]})})},qs=Te;export{qs as default};
