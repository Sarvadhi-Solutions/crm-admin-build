import{r as m,i as A,j as e,al as v,am as $,an as P,ao as G,ap as K,ah as B,aq as Y,a as J}from"./index-847ef4f8.js";import{a as V,b as q,c as F,d as H}from"./CrmService-c8ab1850.js";import{C as D}from"./Card-7a58c886.js";import{B as I}from"./Badge-23f456f8.js";import{_ as Q,C as p}from"./chart.constant-833dc4ed.js";import{a as R,b as U,c as X,d as Z,e as ee}from"./GrowShrinkTag-f7c2938c.js";import"./Alert-ee5a8060.js";import"./index-3c06be8e.js";import{B as E}from"./Button-b74cc268.js";import"./RangeCalendar-0bcee289.js";import"./index-9702d4b4.js";import"./index-260f8e0a.js";import"./Dialog-c1236e17.js";import"./Drawer-7bdb186b.js";import"./index-c7f7da88.js";import"./FormItem-6caba9dc.js";import"./toString-271e4441.js";import"./Input-07dbb44b.js";import"./index-76b04bca.js";import"./index-4292c0e7.js";import"./index-938b8073.js";import"./toast-f5c3f24c.js";import"./Pagination-9c369e6e.js";import"./Progress-abdfc0bf.js";import"./index-629e5bc6.js";import"./ScrollBar-9a2baaea.js";import{S as u}from"./index-dbe4178c.js";import"./Select-ed97c876.js";import"./Skeleton-4ba1ecfc.js";import"./index-44b26318.js";import"./Switcher-71827c71.js";import"./index-c1eb621b.js";import"./index-4eb372a0.js";import"./Tag-b8e15ca0.js";import"./index-cbb9775c.js";import"./index-0ac64fa5.js";import{T as se}from"./Tooltip-a237a4da.js";import"./Upload-1ad29e1a.js";import{i as te}from"./Views-5cd95793.js";import{D as z}from"./DataTable-bb61d519.js";import"./react-tooltip.min-58cb827d.js";import"./RichTextEditor-b314b5be.js";import"./SegmentItemOption-0ad22a42.js";import"./SvgIcon-a4dfe44e.js";import{S as w}from"./StatusCapsule-ca49e5dd.js";import{T as y}from"./TextTruncate-0d10a3b6.js";import{h as ae}from"./moment-fbc5633a.js";import"./index.esm-487b51fd.js";import"./useTimeout-7eccd8b6.js";import"./CloseButton-d22d6eb9.js";import"./StatusIcon-5a5a985f.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-d474fa8c.js";import"./cloneDeep-f66e195c.js";import"./_MapCache-9e036a1f.js";import"./_getPrototype-c37a8692.js";import"./_baseIsEqual-24c667bd.js";import"./get-263abd7f.js";import"./useRootClose-d8f8a4cc.js";import"./usePopper-efd79584.js";import"./TimeInput-81e6befe.js";import"./useUniqueId-7dc066bc.js";import"./useDidUpdate-482439ac.js";import"./index-93a3d3d0.js";import"./useUncertainRef-4977c77f.js";import"./isNil-4ae3346e.js";import"./index-5449d842.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-505afcc1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-621896fa.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-f7b6b3e0.js";import"./index.esm-f7cc78ab.js";import"./index.esm-9468e820.js";import"./index.esm-b4dcee25.js";import"./index-8ad565f1.js";import"./useThemeClass-606c5d8c.js";const M=["line","bar","area"],W=o=>{const{series:a=[],width:n="100%",height:s=300,xAxis:l,customOptions:d,type:i="line",direction:r,donutTitle:t,donutText:c,className:x,...g}=o,C=m.useRef(null),_=m.useMemo(()=>{switch(i){case"line":return R;case"bar":return ee;case"area":return Z;case"donut":return X;case"radialBar":return U;default:return R}},[i]);let f=JSON.parse(JSON.stringify(_));const S=window.innerWidth<768,O=m.useCallback(()=>{if(C.current){const b=C.current.querySelectorAll("div.apexcharts-legend")[0];r===A&&(b.style.right="auto",b.style.left="0"),S&&(b.style.position="relative",b.style.top="0",b.style.justifyContent="start",b.style.padding="0")}},[r,S]);return m.useEffect(()=>{M.includes(i)&&O()},[i,O]),M.includes(i)&&(f.xaxis.categories=l),d&&(f={...f,...d}),i==="donut"&&(t&&(f.plotOptions.pie.donut.labels.total.label=t),c&&(f.plotOptions.pie.donut.labels.total.formatter=()=>c)),e.jsx("div",{ref:C,style:r===A?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(Q,{options:f,type:i,series:a,width:n,height:s,className:x,...g})})},re="crmDashboard",L=v("crmDashboard/data/dashboard",async()=>(await V()).data),N=v("crmDashboard/data/dashboard/tasks",async()=>(await q()).data),T=v("crmDashboard/data/getLeads",async()=>(await F()).data),k=v("crmDashboard/data/getLeadsAndDealChart",async()=>(await H()).data),oe={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[],convertedLeadDeal:{}},ie=$({name:`${re}/state`,initialState:oe,reducers:{},extraReducers:o=>{o.addCase(L.fulfilled,(a,n)=>{a.dashboardData=n.payload.crmDashboardData,a.loading=!1}).addCase(L.pending,a=>{a.loading=!0}).addCase(N.fulfilled,(a,n)=>{a.loading=!1,a.tasksChartData.chart=n.payload.data}).addCase(N.pending,a=>{a.loading=!0}).addCase(T.fulfilled,(a,n)=>{a.leadsList=n.payload.data,a.loading=!1}).addCase(T.pending,(a,n)=>{a.loading=!0}).addCase(k.fulfilled,(a,n)=>{a.convertedLeadDeal=n.payload.data,a.loading=!1}).addCase(k.pending,(a,n)=>{a.loading=!0})}}),ne=ie.reducer,le=P({data:ne}),h=G,ce=({data:o={leadsCreated:{},convertedInDeal:{}}})=>{var l,d;const[a,n]=m.useState("week"),s=m.useMemo(()=>{if(console.log(JSON.stringify(o)),o!=null&&o.leadsCreated)return{series:[o==null?void 0:o.leadsCreated[a],o==null?void 0:o.convertedInDeal[a]],labels:["Leads","Converted Deal"]}},[o,a]);return e.jsxs(D,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:i=>{n(i)},children:[e.jsx(u.Item,{value:"month",children:"Monthly"}),e.jsx(u.Item,{value:"week",children:"Weekly"}),e.jsx(u.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(W,{donutTitle:`${s==null?void 0:s.series.reduce((i,r)=>i+r,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:p,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:p[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:p[0],formatter:function(i){return i+""}},total:{show:!0,label:"Total",formatter:function(i){var r;return((r=i==null?void 0:i.globals)==null?void 0:r.seriesTotals[0])||0}}}}}},type:"radialBar"}),((l=s==null?void 0:s.series)==null?void 0:l.length)===((d=s==null?void 0:s.labels)==null?void 0:d.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((i,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(I,{badgeStyle:{backgroundColor:p[r]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:i})]},i))})]})})]})},de=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/leads")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:r=>{var x;const t=(x=r.row.original)==null?void 0:x.contactData;return t?t.firstName+" "+t.lastName:"-"}},{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original;return e.jsx(y,{text:t.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:r=>r.row.original.budget},{header:"status",accessorKey:"status",cell:r=>{const t=r.row.original;return e.jsx(w,{status:t.status})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})},j=({label:o,value:a,badgeClass:n,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(I,{className:"mt-2.5",innerClass:n}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:a}),e.jsx("p",{children:o})]})]}),me=({className:o})=>{const[a,n]=m.useState(["weekly"]),s=h(r=>r.crmDashboard.data.tasksChartData),[l,d]=m.useState(!1),i=h(r=>r.theme.layout.sideNavCollapse);return m.useEffect(()=>{d(!0);const r=setTimeout(()=>d(!1),300);return console.log(p[0],p[2],p[1]),()=>{clearTimeout(r)}},[s,i]),e.jsxs(D,{className:o,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:r=>n(r),children:[e.jsx(u.Item,{value:"monthly",children:"Monthly"}),e.jsx(u.Item,{value:"weekly",children:"Weekly"}),e.jsx(u.Item,{value:"daily",children:"Daily"})]})]}),!te(s)&&!l&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[a[0]].series[0].name,value:s==null?void 0:s.chart[a[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[a[0]].series[1].name,value:s==null?void 0:s.chart[a[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[a[0]].series[2].name,value:s==null?void 0:s.chart[a[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(W,{series:s==null?void 0:s.chart[a[0]].series,xAxis:s==null?void 0:s.chart[a[0]].range,type:"bar",customOptions:{colors:[p[2],p[0],p[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:a[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(B,{loading:l,type:"cover",children:l&&e.jsx("div",{className:"h-[300px]"})})]})},pe=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/tasks")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original.title;return e.jsx(se,{title:t,children:e.jsx(y,{text:t,maxLength:20})},t)}},{header:"Due Date",accessorKey:"dueDate",cell:r=>{var t;return ae((t=r.row.original)==null?void 0:t.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:r=>{const t=r.row.original.priority;return e.jsx(w,{status:t})}},{header:"module",accessorKey:"module",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.module;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.type;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:r=>{const{firstName:t,lastName:c}=r.row.original.assignedToData||{};return t&&c?`${t} ${c}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:r=>{var c;const t=r.row.original||{};return t!=null&&t.leadModel?`${(c=t==null?void 0:t.leadModel)==null?void 0:c.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:r=>{const t=r.row.original.completionStatus;return e.jsx(w,{status:t})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Today's Tasks"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Tasks"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})};Y("crmDashboard",le);const ue=()=>{const o=J(),{statisticData:a,recentLeadsData:n,todayTask:s}=h(t=>t.crmDashboard.data.dashboardData),l=h(t=>t.crmDashboard.data.leadsList),d=h(t=>t.crmDashboard.data.convertedLeadDeal),i=h(t=>t.crmDashboard.data.loading);m.useEffect(()=>{r()},[]);const r=()=>{o(L()),o(N()),o(k()),o(T())};return m.useMemo(()=>{const t=(l==null?void 0:l.filter(g=>g.status==="open").length)||0,c=(l==null?void 0:l.filter(g=>g.status==="closed_lost").length)||0,x=(l==null?void 0:l.filter(g=>g.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[t,c,x]}},[l]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(B,{loading:i,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(me,{className:"col-span-2"}),e.jsx(ce,{data:d})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(pe,{data:s}),e.jsx(de,{data:n})]})]})})},zs=ue;export{zs as default};
