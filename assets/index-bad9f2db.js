import{r as m,i as A,j as e,am as v,an as $,ao as P,ap as G,al as K,ah as B,aq as Y,a as J}from"./index-8f180057.js";import{a as V,b as q,c as F,d as H}from"./CrmService-4ead0dba.js";import{C as D}from"./Card-c08b3dc7.js";import{B as I}from"./Badge-da9b4bac.js";import{_ as Q,C as p}from"./chart.constant-9b9fa33b.js";import{a as R,b as U,c as X,d as Z,e as ee}from"./GrowShrinkTag-a0071cd9.js";import"./Alert-26b93c15.js";import"./index-50da1f05.js";import{B as E}from"./Button-9a124664.js";import"./RangeCalendar-4f882c48.js";import"./index-467c57d1.js";import"./index-f90d0a46.js";import"./Dialog-00762d81.js";import"./Drawer-9e2f40a2.js";import"./index-57f971c2.js";import"./FormItem-6da989b2.js";import"./toString-6546c1f5.js";import"./Input-80948cc5.js";import"./index-c14dd8b2.js";import"./index-7419ce87.js";import"./index-8db80fc8.js";import"./toast-d4a23693.js";import"./Pagination-02ddc899.js";import"./Progress-4aad2981.js";import"./index-f1c49e5c.js";import"./ScrollBar-cc732ada.js";import{S as u}from"./index-5c4aebcf.js";import"./Select-b8e32f8a.js";import"./Skeleton-a652bf9f.js";import"./index-3ad4fd06.js";import"./Switcher-b15fc15a.js";import"./index-68091566.js";import"./index-19730294.js";import"./Tag-f078f978.js";import"./index-04594492.js";import"./index-f2e93cf2.js";import{T as se}from"./Tooltip-c46cdf61.js";import"./Upload-5d1aec4a.js";import{i as te}from"./Views-0f0dd1b0.js";import{D as z}from"./DataTable-3741aea2.js";import"./react-tooltip.min-4facd0ed.js";import"./RichTextEditor-233df5d8.js";import"./SegmentItemOption-79a4fade.js";import"./SvgIcon-70b4e497.js";import{S as w}from"./StatusCapsule-47c6b497.js";import{T as y}from"./TextTruncate-eb23fc19.js";import{h as ae}from"./moment-fbc5633a.js";import"./index.esm-d559b7a8.js";import"./useTimeout-6ce9cc18.js";import"./CloseButton-f457d2a5.js";import"./StatusIcon-af9b884d.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-a20a08a7.js";import"./cloneDeep-1f39f070.js";import"./_MapCache-c801105a.js";import"./_getPrototype-6ef2344b.js";import"./_baseIsEqual-f757163a.js";import"./get-49349d76.js";import"./useRootClose-849d9b9c.js";import"./usePopper-4f231cdc.js";import"./TimeInput-a4c2e8c8.js";import"./useUniqueId-b6b18158.js";import"./useDidUpdate-6bcd31b9.js";import"./index-21bd03ca.js";import"./useUncertainRef-cd8eb299.js";import"./isNil-7f5c5bc3.js";import"./index-56b40026.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-4e770983.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-10fd47e9.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-4d24a9a7.js";import"./index.esm-7da1e9bd.js";import"./index.esm-047fe164.js";import"./index.esm-e628df3b.js";import"./index-9a956df5.js";import"./useThemeClass-fedd2393.js";const M=["line","bar","area"],W=o=>{const{series:a=[],width:n="100%",height:s=300,xAxis:l,customOptions:d,type:i="line",direction:r,donutTitle:t,donutText:c,className:x,...g}=o,C=m.useRef(null),_=m.useMemo(()=>{switch(i){case"line":return R;case"bar":return ee;case"area":return Z;case"donut":return X;case"radialBar":return U;default:return R}},[i]);let f=JSON.parse(JSON.stringify(_));const S=window.innerWidth<768,O=m.useCallback(()=>{if(C.current){const b=C.current.querySelectorAll("div.apexcharts-legend")[0];r===A&&(b.style.right="auto",b.style.left="0"),S&&(b.style.position="relative",b.style.top="0",b.style.justifyContent="start",b.style.padding="0")}},[r,S]);return m.useEffect(()=>{M.includes(i)&&O()},[i,O]),M.includes(i)&&(f.xaxis.categories=l),d&&(f={...f,...d}),i==="donut"&&(t&&(f.plotOptions.pie.donut.labels.total.label=t),c&&(f.plotOptions.pie.donut.labels.total.formatter=()=>c)),e.jsx("div",{ref:C,style:r===A?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(Q,{options:f,type:i,series:a,width:n,height:s,className:x,...g})})},re="crmDashboard",L=v("crmDashboard/data/dashboard",async()=>(await V()).data),N=v("crmDashboard/data/dashboard/tasks",async()=>(await q()).data),T=v("crmDashboard/data/getLeads",async()=>(await F()).data),k=v("crmDashboard/data/getLeadsAndDealChart",async()=>(await H()).data),oe={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[],convertedLeadDeal:{}},ie=$({name:`${re}/state`,initialState:oe,reducers:{},extraReducers:o=>{o.addCase(L.fulfilled,(a,n)=>{a.dashboardData=n.payload.crmDashboardData,a.loading=!1}).addCase(L.pending,a=>{a.loading=!0}).addCase(N.fulfilled,(a,n)=>{a.loading=!1,a.tasksChartData.chart=n.payload.data}).addCase(N.pending,a=>{a.loading=!0}).addCase(T.fulfilled,(a,n)=>{a.leadsList=n.payload.data,a.loading=!1}).addCase(T.pending,(a,n)=>{a.loading=!0}).addCase(k.fulfilled,(a,n)=>{a.convertedLeadDeal=n.payload.data,a.loading=!1}).addCase(k.pending,(a,n)=>{a.loading=!0})}}),ne=ie.reducer,le=P({data:ne}),h=G,ce=({data:o={leadsCreated:{},convertedInDeal:{}}})=>{var l,d;const[a,n]=m.useState("week"),s=m.useMemo(()=>{if(console.log(JSON.stringify(o)),o!=null&&o.leadsCreated)return{series:[o==null?void 0:o.leadsCreated[a],o==null?void 0:o.convertedInDeal[a]],labels:["Leads","Converted Deal"]}},[o,a]);return e.jsxs(D,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:i=>{n(i)},children:[e.jsx(u.Item,{value:"month",children:"Monthly"}),e.jsx(u.Item,{value:"week",children:"Weekly"}),e.jsx(u.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(W,{donutTitle:`${s==null?void 0:s.series.reduce((i,r)=>i+r,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:p,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:p[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:p[0],formatter:function(i){return i+""}},total:{show:!0,label:"Total",formatter:function(i){var r;return((r=i==null?void 0:i.globals)==null?void 0:r.seriesTotals[0])||0}}}}}},type:"radialBar"}),((l=s==null?void 0:s.series)==null?void 0:l.length)===((d=s==null?void 0:s.labels)==null?void 0:d.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((i,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(I,{badgeStyle:{backgroundColor:p[r]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:i})]},i))})]})})]})},de=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/leads")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:r=>{var x;const t=(x=r.row.original)==null?void 0:x.contactData;return t?t.firstName+" "+t.lastName:"-"}},{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original;return e.jsx(y,{text:t.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:r=>r.row.original.budget},{header:"status",accessorKey:"status",cell:r=>{const t=r.row.original;return e.jsx(w,{status:t.status})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})},j=({label:o,value:a,badgeClass:n,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(I,{className:"mt-2.5",innerClass:n}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:a}),e.jsx("p",{children:o})]})]}),me=({className:o})=>{const[a,n]=m.useState(["weekly"]),s=h(r=>r.crmDashboard.data.tasksChartData),[l,d]=m.useState(!1),i=h(r=>r.theme.layout.sideNavCollapse);return m.useEffect(()=>{d(!0);const r=setTimeout(()=>d(!1),300);return console.log(p[0],p[2],p[1]),()=>{clearTimeout(r)}},[s,i]),e.jsxs(D,{className:o,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:r=>n(r),children:[e.jsx(u.Item,{value:"monthly",children:"Monthly"}),e.jsx(u.Item,{value:"weekly",children:"Weekly"}),e.jsx(u.Item,{value:"daily",children:"Daily"})]})]}),!te(s)&&!l&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[a[0]].series[0].name,value:s==null?void 0:s.chart[a[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[a[0]].series[1].name,value:s==null?void 0:s.chart[a[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[a[0]].series[2].name,value:s==null?void 0:s.chart[a[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(W,{series:s==null?void 0:s.chart[a[0]].series,xAxis:s==null?void 0:s.chart[a[0]].range,type:"bar",customOptions:{colors:[p[2],p[0],p[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:a[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(B,{loading:l,type:"cover",children:l&&e.jsx("div",{className:"h-[300px]"})})]})},pe=({data:o=[],className:a})=>{const n=K(),s=()=>{n("/app/crm/tasks")},l=h(i=>{i.crmDashboard.data.loading}),d=m.useMemo(()=>[{header:"Title",accessorKey:"title",cell:r=>{const t=r.row.original.title;return e.jsx(se,{title:t,children:e.jsx(y,{text:t,maxLength:20})},t)}},{header:"Due Date",accessorKey:"dueDate",cell:r=>{var t;return ae((t=r.row.original)==null?void 0:t.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:r=>{const t=r.row.original.priority;return e.jsx(w,{status:t})}},{header:"module",accessorKey:"module",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.module;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:r=>{var c;const t=(c=r.row.original)==null?void 0:c.type;return t?e.jsx(y,{text:t,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:r=>{const{firstName:t,lastName:c}=r.row.original.assignedToData||{};return t&&c?`${t} ${c}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:r=>{var c;const t=r.row.original||{};return t!=null&&t.leadModel?`${(c=t==null?void 0:t.leadModel)==null?void 0:c.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:r=>{const t=r.row.original.completionStatus;return e.jsx(w,{status:t})}}],[]);return e.jsxs(D,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Today's Tasks"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Tasks"})]}),e.jsx(z,{columns:d,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,isPagination:!1})]})};Y("crmDashboard",le);const ue=()=>{const o=J(),{statisticData:a,recentLeadsData:n,todayTask:s}=h(t=>t.crmDashboard.data.dashboardData),l=h(t=>t.crmDashboard.data.leadsList),d=h(t=>t.crmDashboard.data.convertedLeadDeal),i=h(t=>t.crmDashboard.data.loading);m.useEffect(()=>{r()},[]);const r=()=>{o(L()),o(N()),o(k()),o(T())};return m.useMemo(()=>{const t=(l==null?void 0:l.filter(g=>g.status==="open").length)||0,c=(l==null?void 0:l.filter(g=>g.status==="closed_lost").length)||0,x=(l==null?void 0:l.filter(g=>g.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[t,c,x]}},[l]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(B,{loading:i,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(me,{className:"col-span-2"}),e.jsx(ce,{data:d})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(pe,{data:s}),e.jsx(de,{data:n})]})]})})},zs=ue;export{zs as default};
