import{r as p,i as A,j as e,am as L,an as _,ao as $,ap as P,al as K,ah as B,aq as Y,a as G}from"./index-4675262e.js";import{a as V,b as q,c as F}from"./CrmService-ac08cdaf.js";import{C as D}from"./Card-1a4ea392.js";import{B as I}from"./Badge-8de88fc8.js";import{_ as J,C as b}from"./chart.constant-bd4cec43.js";import{a as O,b as H,c as Q,d as U,e as X}from"./GrowShrinkTag-0b10ae79.js";import"./Alert-e71f6da7.js";import"./index-32f51c8f.js";import{B as E}from"./Button-0b68e0a2.js";import"./RangeCalendar-7055646c.js";import"./index-b0ec1b4c.js";import"./index-40ee1fcd.js";import"./Dialog-2674822d.js";import"./Drawer-4463e2fa.js";import"./index-395f0e43.js";import"./FormItem-f0a568d5.js";import"./toString-5a26993f.js";import"./Input-b6f85393.js";import"./index-799960ed.js";import"./index-567c5b37.js";import"./index-29fb88aa.js";import"./toast-3dd25308.js";import"./Pagination-2e203a3f.js";import"./Progress-163e7627.js";import"./index-ac935edf.js";import"./ScrollBar-c918a49a.js";import{S as x}from"./index-befed326.js";import"./Select-ecee390b.js";import"./Skeleton-5516a2a7.js";import"./index-819658e8.js";import"./Switcher-abd8f95e.js";import"./index-dc5daab9.js";import"./index-aa614f08.js";import"./Tag-613d51b1.js";import"./index-bcfe7745.js";import"./index-9a848025.js";import{T as Z}from"./Tooltip-2d93a4c5.js";import"./Upload-e8a604f5.js";import{i as ee}from"./Views-96bf4241.js";import{D as z}from"./DataTable-1574da48.js";import"./react-tooltip.min-a9dd25b4.js";import"./RichTextEditor-d7434d18.js";import"./SegmentItemOption-3a25415c.js";import"./SvgIcon-5be08616.js";import{S as C}from"./StatusCapsule-5d4fa3a0.js";import{T as v}from"./TextTruncate-a3cc99e4.js";import{h as se}from"./moment-fbc5633a.js";import"./index.esm-ff144046.js";import"./useTimeout-d031dca4.js";import"./CloseButton-f37e3705.js";import"./StatusIcon-69b21449.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-048d3f43.js";import"./cloneDeep-477b9741.js";import"./_MapCache-594565d2.js";import"./_getPrototype-5d191e98.js";import"./_baseIsEqual-b207db6b.js";import"./get-59654049.js";import"./useRootClose-bb6a1813.js";import"./usePopper-e9b5a625.js";import"./TimeInput-e183a601.js";import"./useUniqueId-f4a3bad2.js";import"./useDidUpdate-3fa7b336.js";import"./index-cd7de78e.js";import"./useUncertainRef-9680db51.js";import"./isNil-7c9d5aca.js";import"./index-99abface.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-24f82e16.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-92a33187.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-20d9df92.js";import"./index.esm-c132f852.js";import"./index.esm-2d8103e0.js";import"./index.esm-3440a998.js";import"./index-6e5c150b.js";import"./useThemeClass-d82dec7a.js";const R=["line","bar","area"],W=o=>{const{series:r=[],width:c="100%",height:s=300,xAxis:i,customOptions:m,type:n="line",direction:a,donutTitle:t,donutText:d,className:u,...l}=o,h=p.useRef(null),w=p.useMemo(()=>{switch(n){case"line":return O;case"bar":return X;case"area":return U;case"donut":return Q;case"radialBar":return H;default:return O}},[n]);let f=JSON.parse(JSON.stringify(w));const y=window.innerWidth<768,S=p.useCallback(()=>{if(h.current){const j=h.current.querySelectorAll("div.apexcharts-legend")[0];a===A&&(j.style.right="auto",j.style.left="0"),y&&(j.style.position="relative",j.style.top="0",j.style.justifyContent="start",j.style.padding="0")}},[a,y]);return p.useEffect(()=>{R.includes(n)&&S()},[n,S]),R.includes(n)&&(f.xaxis.categories=i),m&&(f={...f,...m}),n==="donut"&&(t&&(f.plotOptions.pie.donut.labels.total.label=t),d&&(f.plotOptions.pie.donut.labels.total.formatter=()=>d)),e.jsx("div",{ref:h,style:a===A?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(J,{options:f,type:n,series:r,width:c,height:s,className:u,...l})})},te={totalLeads:0,leadsCreated:{day:0,week:0,month:0},convertedInDeal:{day:0,week:0,month:0},convertedPercentage:{day:"0.00 %",week:"00.00 %",month:"00.00 %"}},ae="crmDashboard",k=L("crmDashboard/data/dashboard",async()=>(await V()).data),N=L("crmDashboard/data/dashboard/tasks",async()=>(await q()).data),T=L("crmDashboard/data/getLeadsAndDealChart",async()=>(await F()).data),re={loading:!0,dashboardData:{},tasksChartData:{},convertedLeadDeal:te},oe=_({name:`${ae}/state`,initialState:re,reducers:{},extraReducers:o=>{o.addCase(k.fulfilled,(r,c)=>{r.dashboardData=c.payload.crmDashboardData,r.loading=!1}).addCase(k.pending,r=>{r.loading=!0}).addCase(N.fulfilled,(r,c)=>{r.loading=!1,r.tasksChartData.chart=c.payload.data}).addCase(N.pending,r=>{r.loading=!0}).addCase(T.fulfilled,(r,c)=>{r.convertedLeadDeal=c.payload.data,r.loading=!1}).addCase(T.pending,(r,c)=>{r.loading=!0})}}),ne=oe.reducer,ie=$({data:ne}),g=P,le=({data:o={leadsCreated:{},convertedInDeal:{}}})=>{var i,m;const[r,c]=p.useState("week"),s=p.useMemo(()=>{if(o!=null&&o.leadsCreated)return{series:[o==null?void 0:o.leadsCreated[r],o==null?void 0:o.convertedInDeal[r]],labels:["Leads","Converted Deal"]}},[o,r]);return e.jsxs(D,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(x,{value:r,size:"sm",onChange:n=>c(n),children:[e.jsx(x.Item,{value:"month",children:"Monthly"}),e.jsx(x.Item,{value:"week",children:"Weekly"}),e.jsx(x.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(W,{donutTitle:`${s==null?void 0:s.series.reduce((n,a)=>n+a,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:b,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:b[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:b[0],formatter:function(n){return n+""}},total:{show:!0,label:"Total",formatter:function(n){var a;return((a=n==null?void 0:n.globals)==null?void 0:a.seriesTotals[0])||0}}}}}},type:"radialBar"}),((i=s==null?void 0:s.series)==null?void 0:i.length)===((m=s==null?void 0:s.labels)==null?void 0:m.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((n,a)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(I,{badgeStyle:{backgroundColor:b[a]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:n})]},n))})]})})]})},ce=({data:o=[],className:r})=>{const c=K(),s=()=>{c("/app/crm/leads")},i=g(n=>{n.crmDashboard.data.loading}),m=p.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:a=>{var u;const t=(u=a.row.original)==null?void 0:u.contactData;return t?t.firstName+" "+t.lastName:"-"}},{header:"Title",accessorKey:"title",cell:a=>{const t=a.row.original;return e.jsx(v,{text:t.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:a=>a.row.original.budget},{header:"status",accessorKey:"status",cell:a=>{const t=a.row.original;return e.jsx(C,{status:t.status})}}],[]);return console.log({data:o}),e.jsxs(D,{className:r,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(z,{columns:m,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:i,isPagination:!1})]})},M=({label:o,value:r,badgeClass:c,showBadge:s=!0,color:i})=>e.jsxs("div",{className:"flex gap-2 align-middle",children:[s&&e.jsx(I,{className:"mt-2.5",innerClass:c,style:{background:i}}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("h5",{className:"font-semibold",children:r}),e.jsx("p",{className:"mt-1",children:o})]})]}),de=({className:o})=>{var u;const[r,c]=p.useState(["weekly"]),s=g(l=>l.crmDashboard.data.tasksChartData),[i,m]=p.useState(!1),n=g(l=>l.theme.layout.sideNavCollapse);p.useEffect(()=>{m(!0);const l=setTimeout(()=>m(!1),300);return()=>{clearTimeout(l)}},[s,n]);const a=((u=s==null?void 0:s.chart[r[0]])==null?void 0:u.series)||[],t=a==null?void 0:a.map((l,h)=>{const w=l==null?void 0:l.name,y=(s==null?void 0:s.chart[r[0]][w])||0;return y?e.jsx(M,{badgeClass:"",label:l.name,color:b[h],value:y},h):""}),d=a==null?void 0:a.map((l,h)=>b[h]);return e.jsxs(D,{className:o,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(x,{value:r,size:"sm",onChange:l=>c(l),children:[e.jsx(x.Item,{value:"monthly",children:"Monthly"}),e.jsx(x.Item,{value:"weekly",children:"Weekly"}),e.jsx(x.Item,{value:"daily",children:"Daily"})]})]}),!ee(s)&&!i&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(M,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[r[0]].total})}),e.jsx("div",{className:"flex gap-x-6",children:t})]}),e.jsxs("div",{children:[e.jsx(W,{series:s==null?void 0:s.chart[r[0]].series,xAxis:s==null?void 0:s.chart[r[0]].range,type:"bar",customOptions:{colors:d,legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:r[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(B,{loading:i,type:"cover",children:i&&e.jsx("div",{className:"h-[300px]"})})]})},me=({data:o=[],className:r})=>{const c=K(),s=()=>{c("/app/crm/tasks")},i=g(n=>{n.crmDashboard.data.loading}),m=p.useMemo(()=>[{header:"Title",accessorKey:"title",cell:a=>{const t=a.row.original.title;return e.jsx(Z,{title:t,children:e.jsx(v,{text:t,maxLength:20})},t)}},{header:"Due Date",accessorKey:"dueDate",cell:a=>{var t;return se((t=a.row.original)==null?void 0:t.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:a=>{const t=a.row.original.priority;return e.jsx(C,{status:t})}},{header:"module",accessorKey:"module",cell:a=>{var d;const t=(d=a.row.original)==null?void 0:d.module;return t?e.jsx(v,{text:t,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:a=>{var d;const t=(d=a.row.original)==null?void 0:d.type;return t?e.jsx(v,{text:t,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:a=>{const{firstName:t,lastName:d}=a.row.original.assignedToData||{};return t&&d?`${t} ${d}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:a=>{var d;const t=a.row.original||{};return t!=null&&t.leadModel?`${(d=t==null?void 0:t.leadModel)==null?void 0:d.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:a=>{const t=a.row.original.completionStatus;return e.jsx(C,{status:t})}}],[]);return e.jsxs(D,{className:r,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Today's Tasks"}),e.jsx(E,{size:"sm",onClick:s,children:"View All Tasks"})]}),e.jsx(z,{columns:m,data:o,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:i,isPagination:!1})]})};Y("crmDashboard",ie);const pe=()=>{const o=G(),{statisticData:r,recentLeadsData:c,todayTask:s}=g(t=>t.crmDashboard.data.dashboardData),i=g(t=>t.crmDashboard.data.leadsList),m=g(t=>t.crmDashboard.data.convertedLeadDeal),n=g(t=>t.crmDashboard.data.loading);p.useEffect(()=>{a()},[o]);const a=()=>{o(k()),o(N()),o(T())};return p.useMemo(()=>{const t=(i==null?void 0:i.filter(l=>l.status==="open").length)||0,d=(i==null?void 0:i.filter(l=>l.status==="closed_lost").length)||0,u=(i==null?void 0:i.filter(l=>l.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[t,d,u]}},[i]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(B,{loading:n,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(de,{className:"col-span-2"}),e.jsx(le,{data:m})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx(me,{data:s}),e.jsx(ce,{data:c})]})]})})},Es=pe;export{Es as default};
