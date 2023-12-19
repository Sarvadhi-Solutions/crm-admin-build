import{r as m,i as O,j as e,am as T,an as P,ao as _,ap as $,al as M,ah as K,aq as Y,a as G}from"./index-deb31e10.js";import{a as V,b as q,c as F}from"./CrmService-d5fba30c.js";import{C as v}from"./Card-085ac9b2.js";import{B}from"./Badge-d9ae855b.js";import{_ as J,C as x}from"./chart.constant-f9507da5.js";import{a as A,b as H,c as Q,d as U,e as X}from"./GrowShrinkTag-fa336753.js";import"./Alert-5f36c2a0.js";import"./index-c67702c1.js";import{B as I}from"./Button-c9bc60b5.js";import"./RangeCalendar-8afb665c.js";import"./index-3a77fb06.js";import"./index-3c726209.js";import"./Dialog-f52addba.js";import"./Drawer-d475ebcd.js";import"./index-23d0fcae.js";import"./FormItem-b6ea2884.js";import"./toString-e34703ad.js";import"./Input-b4f9603d.js";import"./index-f2daafea.js";import"./index-39c1c8e6.js";import"./index-700f33d8.js";import"./toast-241185e8.js";import"./Pagination-a5e381f1.js";import"./Progress-a11c2f12.js";import"./index-5baf7804.js";import"./ScrollBar-a7c63350.js";import{S as p}from"./index-e541606c.js";import"./Select-dc99a09b.js";import"./Skeleton-503ea522.js";import"./index-208bb167.js";import"./Switcher-d01b1c88.js";import"./index-5994de1d.js";import"./index-9d4e7a55.js";import"./Tag-ea07611a.js";import"./index-d4f33a77.js";import"./index-70acf077.js";import{T as Z}from"./Tooltip-97f81a61.js";import"./Upload-762c02a1.js";import{i as ee}from"./Views-5dd9e85c.js";import{D as E}from"./DataTable-1874c51c.js";import"./react-tooltip.min-7de9806e.js";import"./RichTextEditor-6a57c324.js";import"./SegmentItemOption-a6fce820.js";import"./SvgIcon-fab1c8c3.js";import{S as w}from"./StatusCapsule-6a1c7833.js";import{T as y}from"./TextTruncate-491d409f.js";import{h as se}from"./moment-fbc5633a.js";import"./index.esm-7e071777.js";import"./useTimeout-795c2b07.js";import"./CloseButton-359f8e10.js";import"./StatusIcon-b64ae86b.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-b869d145.js";import"./cloneDeep-67d59bdf.js";import"./_MapCache-e5138a4d.js";import"./_getPrototype-4373fe9f.js";import"./_baseIsEqual-9fca32a6.js";import"./get-08d776af.js";import"./useRootClose-2dd50c51.js";import"./usePopper-0c8aa062.js";import"./TimeInput-cf442084.js";import"./useUniqueId-675d2864.js";import"./useDidUpdate-14274714.js";import"./index-43dec7b5.js";import"./useUncertainRef-2aa5b3de.js";import"./isNil-6cac775c.js";import"./index-a5be5469.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-8d2f732a.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-16e47dbf.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-39911d05.js";import"./index.esm-7afe35c3.js";import"./index.esm-ca652311.js";import"./index.esm-94d88beb.js";import"./index-253040fb.js";import"./useThemeClass-be6073dc.js";const R=["line","bar","area"],z=o=>{const{series:r=[],width:l="100%",height:s=300,xAxis:n,customOptions:d,type:i="line",direction:a,donutTitle:t,donutText:c,className:g,...h}=o,D=m.useRef(null),W=m.useMemo(()=>{switch(i){case"line":return A;case"bar":return X;case"area":return U;case"donut":return Q;case"radialBar":return H;default:return A}},[i]);let f=JSON.parse(JSON.stringify(W));const L=window.innerWidth<768,S=m.useCallback(()=>{if(D.current){const b=D.current.querySelectorAll("div.apexcharts-legend")[0];a===O&&(b.style.right="auto",b.style.left="0"),L&&(b.style.position="relative",b.style.top="0",b.style.justifyContent="start",b.style.padding="0")}},[a,L]);return m.useEffect(()=>{R.includes(i)&&S()},[i,S]),R.includes(i)&&(f.xaxis.categories=n),d&&(f={...f,...d}),i==="donut"&&(t&&(f.plotOptions.pie.donut.labels.total.label=t),c&&(f.plotOptions.pie.donut.labels.total.formatter=()=>c)),e.jsx("div",{ref:D,style:a===O?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(J,{options:f,type:i,series:r,width:l,height:s,className:g,...h})})},te={totalLeads:0,leadsCreated:{day:0,week:0,month:0},convertedInDeal:{day:0,week:0,month:0},convertedPercentage:{day:"0.00 %",week:"00.00 %",month:"00.00 %"}},ae="crmDashboard",C=T("crmDashboard/data/dashboard",async()=>(await V()).data),k=T("crmDashboard/data/dashboard/tasks",async()=>(await q()).data),N=T("crmDashboard/data/getLeadsAndDealChart",async()=>(await F()).data),re={loading:!0,dashboardData:{},tasksChartData:{},convertedLeadDeal:te},oe=P({name:`${ae}/state`,initialState:re,reducers:{},extraReducers:o=>{o.addCase(C.fulfilled,(r,l)=>{r.dashboardData=l.payload.crmDashboardData,r.loading=!1}).addCase(C.pending,r=>{r.loading=!0}).addCase(k.fulfilled,(r,l)=>{r.loading=!1,r.tasksChartData.chart=l.payload.data}).addCase(k.pending,r=>{r.loading=!0}).addCase(N.fulfilled,(r,l)=>{r.convertedLeadDeal=l.payload.data,r.loading=!1}).addCase(N.pending,(r,l)=>{r.loading=!0})}}),ie=oe.reducer,ne=_({data:ie}),u=$,le=({data:o={leadsCreated:{},convertedInDeal:{}}})=>{var n,d;const[r,l]=m.useState("week"),s=m.useMemo(()=>{if(o!=null&&o.leadsCreated)return{series:[o==null?void 0:o.leadsCreated[r],o==null?void 0:o.convertedInDeal[r]],labels:["Leads","Converted Deal"]}},[o,r]);return e.jsxs(v,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(p,{value:r,size:"sm",onChange:i=>l(i),children:[e.jsx(p.Item,{value:"month",children:"Monthly"}),e.jsx(p.Item,{value:"week",children:"Weekly"}),e.jsx(p.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(z,{donutTitle:`${s==null?void 0:s.series.reduce((i,a)=>i+a,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:x,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:x[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:x[0],formatter:function(i){return i+""}},total:{show:!0,label:"Total",formatter:function(i){var a;return((a=i==null?void 0:i.globals)==null?void 0:a.seriesTotals[0])||0}}}}}},type:"radialBar"}),((n=s==null?void 0:s.series)==null?void 0:n.length)===((d=s==null?void 0:s.labels)==null?void 0:d.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((i,a)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(B,{badgeStyle:{backgroundColor:x[a]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:i})]},i))})]})})]})},ce=({data:o=[],className:r})=>{const l=M(),s=()=>{l("/app/crm/leads")},n=u(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:a=>{var g;const t=(g=a.row.original)==null?void 0:g.contactData;return t?t.firstName+" "+t.lastName:"-"}},{header:"Title",accessorKey:"title",cell:a=>{const t=a.row.original;return e.jsx(y,{text:t.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:a=>a.row.original.budget},{header:"status",accessorKey:"status",cell:a=>{const t=a.row.original;return e.jsx(w,{status:t.status})}}],[]);return console.log({data:o}),e.jsxs(v,{className:r,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(I,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(E,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:n,isPagination:!1})]})},j=({label:o,value:r,badgeClass:l,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(B,{className:"mt-2.5",innerClass:l}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:r}),e.jsx("p",{children:o})]})]}),de=({className:o})=>{const[r,l]=m.useState(["weekly"]),s=u(a=>a.crmDashboard.data.tasksChartData),[n,d]=m.useState(!1),i=u(a=>a.theme.layout.sideNavCollapse);return m.useEffect(()=>{d(!0);const a=setTimeout(()=>d(!1),300);return()=>{clearTimeout(a)}},[s,i]),e.jsxs(v,{className:o,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(p,{value:r,size:"sm",onChange:a=>l(a),children:[e.jsx(p.Item,{value:"monthly",children:"Monthly"}),e.jsx(p.Item,{value:"weekly",children:"Weekly"}),e.jsx(p.Item,{value:"daily",children:"Daily"})]})]}),!ee(s)&&!n&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[r[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[r[0]].series[0].name,value:s==null?void 0:s.chart[r[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[r[0]].series[1].name,value:s==null?void 0:s.chart[r[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[r[0]].series[2].name,value:s==null?void 0:s.chart[r[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(z,{series:s==null?void 0:s.chart[r[0]].series,xAxis:s==null?void 0:s.chart[r[0]].range,type:"bar",customOptions:{colors:[x[2],x[0],x[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:r[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(K,{loading:n,type:"cover",children:n&&e.jsx("div",{className:"h-[300px]"})})]})},me=({data:o=[],className:r})=>{const l=M(),s=()=>{l("/app/crm/tasks")},n=u(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Title",accessorKey:"title",cell:a=>{const t=a.row.original.title;return e.jsx(Z,{title:t,children:e.jsx(y,{text:t,maxLength:20})},t)}},{header:"Due Date",accessorKey:"dueDate",cell:a=>{var t;return se((t=a.row.original)==null?void 0:t.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:a=>{const t=a.row.original.priority;return e.jsx(w,{status:t})}},{header:"module",accessorKey:"module",cell:a=>{var c;const t=(c=a.row.original)==null?void 0:c.module;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:a=>{var c;const t=(c=a.row.original)==null?void 0:c.type;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:a=>{const{firstName:t,lastName:c}=a.row.original.assignedToData||{};return t&&c?`${t} ${c}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:a=>{var c;const t=a.row.original||{};return t!=null&&t.leadModel?`${(c=t==null?void 0:t.leadModel)==null?void 0:c.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:a=>{const t=a.row.original.completionStatus;return e.jsx(w,{status:t})}}],[]);return e.jsxs(v,{className:r,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Today's Tasks"}),e.jsx(I,{size:"sm",onClick:s,children:"View All Tasks"})]}),e.jsx(E,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:n,isPagination:!1})]})};Y("crmDashboard",ne);const pe=()=>{const o=G(),{statisticData:r,recentLeadsData:l,todayTask:s}=u(t=>t.crmDashboard.data.dashboardData),n=u(t=>t.crmDashboard.data.leadsList),d=u(t=>t.crmDashboard.data.convertedLeadDeal),i=u(t=>t.crmDashboard.data.loading);m.useEffect(()=>{a()},[o]);const a=()=>{o(C()),o(k()),o(N())};return m.useMemo(()=>{const t=(n==null?void 0:n.filter(h=>h.status==="open").length)||0,c=(n==null?void 0:n.filter(h=>h.status==="closed_lost").length)||0,g=(n==null?void 0:n.filter(h=>h.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[t,c,g]}},[n]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(K,{loading:i,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(de,{className:"col-span-2"}),e.jsx(le,{data:d})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(me,{data:s}),e.jsx(ce,{data:l})]})]})})},Es=pe;export{Es as default};
