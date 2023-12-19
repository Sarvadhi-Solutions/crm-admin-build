import{am as S,an as R,ao as M,ap as I,j as e,r as o,ai as k,aq as f,c as d,ar as P,a as E}from"./index-21d7ce34.js";import{a as L}from"./ProjectService-b45c4249.js";import{C as m}from"./Card-c016d7e4.js";import{S as x}from"./index-97d1b97f.js";import{B as C}from"./Badge-0547788a.js";import{C as V}from"./Chart-2e4afe01.js";import{C as v}from"./chart.constant-06b1f9d0.js";import{i as T}from"./Views-aa9d3067.js";import{B as b}from"./Button-6c3081fd.js";import{T as A}from"./index-83ec9673.js";import{T as u}from"./Tag-49702b6e.js";import{U as H}from"./UsersAvatarGroup-978dde52.js";import{A as B}from"./ActionLink-a7494843.js";import{u as O,f as y,g as z}from"./index-dfd66886.js";import{L as K}from"./ListItem-2a13bc34.js";import{C as F}from"./Calendar-d76733e5.js";import{u as G}from"./useThemeClass-103b190c.js";import{L as Y,M as U,N as $}from"./index.esm-3f5f076a.js";import{T as h}from"./index-c82bc72a.js";import{T as q,E as W}from"./TimeLineAvatar-eb170bbd.js";import"./useControllableState-3f0dec55.js";import"./context-ff20449e.js";import"./chart.config-213c7bdd.js";import"./index.esm-b042e3c5.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index-60ecab9e.js";import"./useMergeRef-788c4cb0.js";import"./acronym-edf87d4f.js";import"./index-cbaf419c.js";import"./useUncertainRef-1f87b20a.js";import"./isNil-e652d611.js";import"./useUniqueId-18384f8e.js";import"./toString-839cbc0d.js";import"./chainedFunction-070f832c.js";import"./index-a936af3e.js";import"./useRootClose-aa5c19cb.js";import"./EllipsisButton-1e35dd80.js";import"./index.esm-4dac136d.js";import"./Progress-1f726e4f.js";import"./mapCloneElement-18ca430e.js";import"./index-d93ff48a.js";import"./isLastChild-83eb4c23.js";const D="projectDashboard",p=S(D+"/getProjectDashboardData",async()=>(await L()).data),_={loading:!0,dashboardData:{}},J=R({name:`${D}/state`,initialState:_,reducers:{},extraReducers:r=>{r.addCase(p.fulfilled,(s,a)=>{s.dashboardData=a.payload,s.loading=!1}).addCase(p.pending,s=>{s.loading=!0})}}),Q=J.reducer,X=M({data:Q}),g=I,Z=({userName:r,taskCount:s})=>e.jsxs("div",{children:[e.jsxs("h4",{className:"mb-1",children:["Hello, ",r,"!"]}),e.jsxs("p",{children:["You have ",s," tasks on hand."]})]}),j=({label:r,value:s,badgeClass:a,showBadge:c=!0})=>e.jsxs("div",{className:"flex gap-2",children:[c&&e.jsx(C,{className:"mt-2.5",innerClass:a}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:s}),e.jsx("p",{children:r})]})]}),ee=({data:r={},className:s})=>{const[a,c]=o.useState(["weekly"]),[t,i]=o.useState(!1),l=g(n=>n.theme.layout.sideNavCollapse);return o.useEffect(()=>{i(!0);const n=setTimeout(()=>i(!1),300);return()=>{clearTimeout(n)}},[r,l]),e.jsxs(m,{className:s,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Task Overview"}),e.jsxs(x,{value:a,size:"sm",onChange:n=>c(n),children:[e.jsx(x.Item,{value:"monthly",children:"Monthly"}),e.jsx(x.Item,{value:"weekly",children:"Weekly"}),e.jsx(x.Item,{value:"daily",children:"Daily"})]})]}),!T(r)&&!t&&r.chart&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:r.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-indigo-600",label:r.chart[a[0]].series[0].name,value:r.chart[a[0]].onGoing}),e.jsx(j,{badgeClass:"bg-emerald-500",label:r.chart[a[0]].series[1].name,value:r.chart[a[0]].finished})]})]}),e.jsx("div",{children:e.jsx(V,{series:r.chart[a[0]].series,xAxis:r.chart[a[0]].range,type:"bar",customOptions:{colors:[v[0],v[2]],legend:{show:!1}}})})]}),e.jsx(k,{loading:t,type:"cover",children:t&&e.jsx("div",{className:"h-[300px]"})})]})},{Tr:N,Th:se,Td:re,THead:te,TBody:ae}=A,ie=({priority:r})=>{switch(r){case 0:return e.jsx(u,{className:"text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0",children:"High"});case 1:return e.jsx(u,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0",children:"Medium"});case 2:return e.jsx(u,{className:"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0",children:"Low"});default:return null}},le=({data:r=[]})=>{const s=f(),a=o.useMemo(()=>[{header:"Task ID",accessorKey:"taskId",cell:i=>{const{taskId:l}=i.row.original;return e.jsx(B,{themeColor:!1,className:"font-semibold",to:"/app/project/scrum-board",children:l})}},{header:"Subject",accessorKey:"taskSubject"},{header:"Priority",accessorKey:"priority",cell:i=>{const{priority:l}=i.row.original;return e.jsx(ie,{priority:l})}},{header:"Assignees",accessorKey:"Assignees",cell:i=>{const{assignees:l}=i.row.original;return e.jsx(H,{users:l})}}],[]),c=O({data:r,columns:a,getCoreRowModel:z()}),t=()=>{s("/app/project/issue")};return e.jsxs(m,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h4",{children:"My Tasks"}),e.jsx(b,{size:"sm",onClick:t,children:"View All"})]}),e.jsxs(A,{children:[e.jsx(te,{children:c.getHeaderGroups().map(i=>e.jsx(N,{children:i.headers.map(l=>e.jsx(se,{colSpan:l.colSpan,children:y(l.column.columnDef.header,l.getContext())},l.id))},i.id))}),e.jsx(ae,{children:c.getRowModel().rows.map(i=>e.jsx(N,{children:i.getVisibleCells().map(l=>e.jsx(re,{children:y(l.column.columnDef.cell,l.getContext())},l.id))},i.id))})]})]})},ce=({data:r=[]})=>{const s=f(),a=()=>{s("/app/project/project-list")};return e.jsxs(m,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h4",{children:"Projects"}),e.jsx(b,{size:"sm",onClick:a,children:"View All"})]}),r.map(c=>e.jsx(K,{cardBorder:!0,data:c},c.id))]})},w=r=>{const s=new Date;return r.getDate()===s.getDate()&&r.getMonth()===s.getMonth()&&r.getFullYear()===s.getFullYear()},oe=({type:r})=>{const s="rounded-lg h-10 w-10 text-lg flex items-center justify-center";switch(r){case"meeting":return e.jsx("div",{className:d(s,"text-indigo-600 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500/20"),children:e.jsx($,{})});case"task":return e.jsx("div",{className:d(s,"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100"),children:e.jsx(U,{})});case"workshop":return e.jsx("div",{className:d(s,"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20"),children:e.jsx(Y,{})});default:return null}},ne=({data:r=[]})=>{const[s,a]=o.useState(),{textTheme:c}=G();return e.jsxs(m,{className:"mb-4",children:[e.jsx("div",{className:"mx-auto max-w-[420px]",children:e.jsx(F,{value:s,dayClassName:(t,{selected:i})=>{const l="text-base";return w(t)&&!i?d(l,c):i?d(l,"text-white"):l},dayStyle:()=>({height:48}),renderDay:t=>{const i=t.getDate();return w(t)?e.jsxs("span",{className:"relative flex justify-center items-center w-full h-full",children:[i,e.jsx(C,{className:"absolute bottom-1",innerClass:"h-1 w-1"})]}):e.jsx("span",{children:i})},onChange:t=>{a(t)}})}),e.jsx("hr",{className:"my-6"}),e.jsx("h5",{className:"mb-4",children:"Schedule"}),r.map(t=>e.jsxs("div",{className:"flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(oe,{type:t.type}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm font-bold",children:t.eventName}),e.jsx("p",{children:t.desciption})]})]}),e.jsx("span",{children:t.time})]},t.id))]})},de=({data:r=[]})=>{const s=f(),a=()=>{s("/app/account/activity-log")};return e.jsxs(m,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h4",{children:"Activitiess"}),e.jsx(b,{size:"sm",onClick:a,children:"View All"})]}),e.jsx("div",{className:"mt-6",children:e.jsx(h,{children:T(r)?e.jsx(h.Item,{children:"No Activities"}):r.map((c,t)=>e.jsx(h.Item,{media:e.jsx(q,{data:c}),children:e.jsx(W,{compact:!0,data:c})},c.type+t))})})]})};P("projectDashboard",X);const me=()=>{const r=E(),s=g(t=>t.projectDashboard.data.dashboardData),a=g(t=>t.projectDashboard.data.loading);o.useEffect(()=>{c()},[]);const c=()=>{r(p())};return e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(k,{loading:a,children:[e.jsx(Z,{userName:s==null?void 0:s.userName,taskCount:s==null?void 0:s.taskCount}),e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-4 flex-auto",children:[e.jsx(ee,{data:s==null?void 0:s.projectOverviewData}),e.jsx(le,{data:s==null?void 0:s.myTasksData}),e.jsx(ce,{data:s==null?void 0:s.projectsData})]}),e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"xl:w-[380px]",children:[e.jsx(ne,{data:s==null?void 0:s.scheduleData}),e.jsx(de,{data:s==null?void 0:s.activitiesData})]})})]})]})})},ts=me;export{ts as default};
