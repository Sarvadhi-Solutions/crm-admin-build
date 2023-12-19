import{r as m,i as A,j as e,am as v,an as $,ao as P,ap as G,al as K,ah as B,aq as Y,a as J}from"./index-01836369.js";import{a as V,b as q,c as F,d as H}from"./CrmService-5df22f1e.js";import{C as D}from"./Card-2dc07d7d.js";import{B as I}from"./Badge-a322da11.js";import{_ as Q,C as p}from"./chart.constant-d16ea559.js";import{a as R,b as U,c as X,d as Z,e as ee}from"./GrowShrinkTag-c64d92ad.js";import"./Alert-d402928e.js";import"./index-a2edb971.js";import{B as E}from"./Button-a46452f7.js";import"./RangeCalendar-90d0a69e.js";import"./index-d8fc78ac.js";import"./index-61590567.js";import"./Dialog-4fd81af0.js";import"./Drawer-b1603852.js";import"./index-3b5b12e0.js";import"./FormItem-8bd92bc5.js";import"./toString-dfdb4974.js";import"./Input-de9bab6e.js";import"./index-d1a1662d.js";import"./index-035dac1c.js";import"./index-0ef1a83d.js";import"./toast-923c10a7.js";import"./Pagination-c8e6fde5.js";import"./Progress-5c62251c.js";import"./index-4a72f1ca.js";import"./ScrollBar-cc8c4864.js";import{S as u}from"./index-5c080796.js";import"./Select-c320d599.js";import"./Skeleton-743f8ad2.js";import"./index-d83ef631.js";import"./Switcher-3a0c2c62.js";import"./index-9a90023d.js";import"./index-bf1aff49.js";import"./Tag-b2e6ee28.js";import"./index-c396e082.js";import"./index-9bafd396.js";import{T as se}from"./Tooltip-2ee5bf6e.js";import"./Upload-f2b9b624.js";import{i as te}from"./Views-e7196e20.js";import{D as z}from"./DataTable-a7013519.js";import"./react-tooltip.min-9096483d.js";import"./RichTextEditor-6ee29ff1.js";import"./SegmentItemOption-a5df08eb.js";import"./SvgIcon-fb1c74f5.js";import{S as w}from"./StatusCapsule-ec874026.js";import{T as y}from"./TextTruncate-88153955.js";import{h as ae}from"./moment-fbc5633a.js";import"./index.esm-64f3e5ec.js";import"./useTimeout-4c6d789e.js";import"./CloseButton-d0908078.js";import"./StatusIcon-3d3af75a.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-1186edc6.js";import"./cloneDeep-2911bc06.js";import"./_MapCache-cb5691fa.js";import"./_getPrototype-66b22aa1.js";import"./_baseIsEqual-f710d97d.js";import"./get-a00c8c4f.js";import"./useRootClose-4147e0bc.js";import"./usePopper-7484d105.js";import"./TimeInput-cd11d823.js";import"./useUniqueId-99a7922f.js";import"./useDidUpdate-24f30fc5.js";import"./index-683fb0e7.js";import"./useUncertainRef-f37cb99b.js";import"./isNil-558c9391.js";import"./index-7edeacc6.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-5d2142ab.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-bc2226dd.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-8b2c829b.js";import"./index.esm-a7f707ee.js";import"./index.esm-336981ff.js";import"./index.esm-f919373e.js";import"./index-cf0b9425.js";import"./useThemeClass-ce525309.js";const M=["line","bar","area"],W=o=>{const{series:a=[],width:n="100%",height:s=300,xAxis:l,customOptions:d,type:i="line",direction:r,donutTitle:t,donutText:c,className:x,...g}=o,C=m.useRef(null),_=m.useMemo(()=>{switch(i){case"line":return R;case"bar":return ee;case"area":return Z;case"donut":return X;case"radialBar":return U;default:return R}},[i]);let f=JSON.parse(JSON.stringify(_));const S=window.innerWidth<768,O=m.useCallback(()=>{if(C.current){const b=C.current.querySelectorAll("div.apexcharts-legend")[0];r===A&&(b.style.right="auto",b.style.left="0"),S&&(b.style.position="relative",b.style.top="0",b.style.justifyContent="start",b.style.padding="0")}},[r,S]);return m.useEffect(()=>{M.includes(i)&&O()},[i,O]),M.includes(i)&&(f.xaxis.categories=l),d&&(f={...f,...d}),i==="donut"&&(t&&(f.plotOptions.pie.donut.labels.total.label=t),c&&(f.plotOptions.pie.donut.labels.total.formatter=()=>c)),e.jsx("div",{ref:C,style:r===A?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(Q,{options:f,type:i,series:a,width:n,height:s,className:x,...g})})},re="crmDashboard",L=v("crmDashboard/data/dashboard",async()=>(await V()).data),N=v("crmDashboard/data/dashboard/tasks",async()=>(await q()).data),T=v("crmDashboard/data/getLeads",async()=>(await F()).data),k=v("crmDashboard/data/getLeadsAndDealChart",async()=>(await H()).data),oe={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[],convertedLeadDeal:{}},ie=$({name:`${re}/state`,initialState:oe,reducers:{},extraReducers:o=>{o.addCase(L.fulfilled,(a,n)=>{a.dashboardData=n.payload.crmDashboardData,a.loading=!1}).addCase(L.pending,a=>{a.loading=!0}).addCase(N.fulfilled,(a,n)=>{a.loading=!1,a.tasksChartData.chart=n.payload.data}).addCase(N.pending,a=>{a.loading=!0}).addCase(T.fulfilled,(a,n)=>{a.leadsList=n.payload.data,a.loading=!1}).addCase(T.pending,(a,n)=>{a.loading=!0}).addCase(k.fulfilled,(a,n)=>{a.convertedLeadDeal=n.payload.data,a.loading=!1}).addCase(k.pending,(a,n)=>{a.loading=!0})}}),ne=ie.reducer,le=P({data:ne}),h=G,ce=({data:o={leadsCreated:{},convertedInDeal:{}}})=>{var l,d;const[a,n]=m.useState("week"),s=m.useMemo(()=>{if(console.log(JSON.stringify(o)),o!=null&&o.leadsCreated)return{series:[o==null?void 0:o.leadsCreated[a],o==null?void 0:o.convertedInDeal[a]],labels:["Leads","Converted Deal"]}},[o,a]);return e.jsxs(D,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:i=>{n(i)},children:[e.jsx(u.Item,{value:"month",children:"Monthly"}),e.jsx(u.Item,{value:"week",children:"Weekly"}),e.jsx(u.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(W,{donutTitle:`${s==null?void 0:s.series.reduce((i,r)=>i+r,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:p,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:p[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:p[0],formatter:function(i){return i+""}},total:{show:!0,label:"Total",formatter:function(i){var r;return((r=i==null?void 0:i.globals)==null?void 0:r.seriesTotals[0])||0}}}}}},type:"radialBar"}),((l=s==null?void 0:s.series)==null?void 0:l.length)===((d=s==null?void 0:s.labels)==null?void 0:d.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((i,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(I,{badgeStyle:{backgroundColor:p[r]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:i})]},i))})]})})]})},de=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/leads")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:r=>{var x;const t=(x=r.row.original)==null?void 0:x.contactData;return t?t.firstName+" "+t.lastName:"-"}},{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original;return e.jsx(y,{text:t.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:r=>r.row.original.budget},{header:"status",accessorKey:"status",cell:r=>{const t=r.row.original;return e.jsx(w,{status:t.status})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})},j=({label:o,value:a,badgeClass:n,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(I,{className:"mt-2.5",innerClass:n}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:a}),e.jsx("p",{children:o})]})]}),me=({className:o})=>{const[a,n]=m.useState(["weekly"]),s=h(r=>r.crmDashboard.data.tasksChartData),[l,d]=m.useState(!1),i=h(r=>r.theme.layout.sideNavCollapse);return m.useEffect(()=>{d(!0);const r=setTimeout(()=>d(!1),300);return console.log(p[0],p[2],p[1]),()=>{clearTimeout(r)}},[s,i]),e.jsxs(D,{className:o,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:r=>n(r),children:[e.jsx(u.Item,{value:"monthly",children:"Monthly"}),e.jsx(u.Item,{value:"weekly",children:"Weekly"}),e.jsx(u.Item,{value:"daily",children:"Daily"})]})]}),!te(s)&&!l&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[a[0]].series[0].name,value:s==null?void 0:s.chart[a[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[a[0]].series[1].name,value:s==null?void 0:s.chart[a[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[a[0]].series[2].name,value:s==null?void 0:s.chart[a[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(W,{series:s==null?void 0:s.chart[a[0]].series,xAxis:s==null?void 0:s.chart[a[0]].range,type:"bar",customOptions:{colors:[p[2],p[0],p[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:a[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(B,{loading:l,type:"cover",children:l&&e.jsx("div",{className:"h-[300px]"})})]})},pe=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/tasks")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original.title;return e.jsx(se,{title:t,children:e.jsx(y,{text:t,maxLength:20})},t)}},{header:"Due Date",accessorKey:"dueDate",cell:r=>{var t;return ae((t=r.row.original)==null?void 0:t.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:r=>{const t=r.row.original.priority;return e.jsx(w,{status:t})}},{header:"module",accessorKey:"module",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.module;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.type;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:r=>{const{firstName:t,lastName:c}=r.row.original.assignedToData||{};return t&&c?`${t} ${c}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:r=>{var c;const t=r.row.original||{};return t!=null&&t.leadModel?`${(c=t==null?void 0:t.leadModel)==null?void 0:c.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:r=>{const t=r.row.original.completionStatus;return e.jsx(w,{status:t})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Today's Tasks"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Tasks"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})};Y("crmDashboard",le);const ue=()=>{const o=J(),{statisticData:a,recentLeadsData:n,todayTask:s}=h(t=>t.crmDashboard.data.dashboardData),l=h(t=>t.crmDashboard.data.leadsList),d=h(t=>t.crmDashboard.data.convertedLeadDeal),i=h(t=>t.crmDashboard.data.loading);m.useEffect(()=>{r()},[]);const r=()=>{o(L()),o(N()),o(k()),o(T())};return m.useMemo(()=>{const t=(l==null?void 0:l.filter(g=>g.status==="open").length)||0,c=(l==null?void 0:l.filter(g=>g.status==="closed_lost").length)||0,x=(l==null?void 0:l.filter(g=>g.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[t,c,x]}},[l]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(B,{loading:i,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(me,{className:"col-span-2"}),e.jsx(ce,{data:d})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(pe,{data:s}),e.jsx(de,{data:n})]})]})})},zs=ue;export{zs as default};
