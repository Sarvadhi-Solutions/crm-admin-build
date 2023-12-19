import{r as d,i as O,j as e,al as v,am as M,an as F,ao as W,ap as _,ah as R,aq as G,a as K}from"./index-ba91c0fd.js";import{a as J,b as P,c as $,d as q}from"./CrmService-46d16590.js";import{C as y}from"./Card-b0a5a7d6.js";import{i as V}from"./Views-e9280400.js";import{B}from"./Badge-ff5c7dc3.js";import{_ as H,C as p}from"./chart.constant-9aef5f29.js";import{a as T,b as Q,c as U,d as X,e as Y}from"./GrowShrinkTag-ff05a215.js";import{A as b}from"./index-e15db965.js";import{B as Z}from"./Button-4d442f63.js";import"./Dialog-c161d2fe.js";import{D as ee}from"./DataTable-e5657712.js";import"./Input-529114bc.js";import"./Skeleton-83cb992f.js";import"./react-tooltip.min-f0729f09.js";import"./RichTextEditor-49d25ea9.js";import"./SegmentItemOption-d89e5f60.js";import"./SvgIcon-c2eb96e6.js";import"./Tooltip-d4e69970.js";import{S as se}from"./StatusCapsule-2ed06a7d.js";import{T as ae}from"./TextTruncate-c2f805d1.js";import{S as u}from"./index-d176cad0.js";import{F as te,a as re,b as oe,c as ie}from"./index.esm-cb97a4fc.js";import"./Alert-5d4fd2a9.js";import"./RangeCalendar-d6aa435b.js";import"./index-170572b2.js";import"./index-68178362.js";import"./Drawer-f1cc950e.js";import"./index-b648c4d1.js";import"./FormItem-01999f29.js";import"./toString-727d28b4.js";import"./index-1c2b060b.js";import"./index-0bf35a02.js";import"./index-ccd97808.js";import"./toast-b9105828.js";import"./Pagination-f4c26df7.js";import"./Progress-ab444eaf.js";import"./index-75ffb2be.js";import"./ScrollBar-1f3fb77b.js";import"./Select-73b9b11b.js";import"./index-2c4fd68d.js";import"./Switcher-49168a68.js";import"./index-fe0659a6.js";import"./index-af9b375a.js";import"./Tag-b9db9ffe.js";import"./index-60bed537.js";import"./index-a469d783.js";import"./Upload-bbbb3749.js";import"./index.esm-55e99400.js";import"./useMergeRef-788c4cb0.js";import"./index-9a9b01aa.js";import"./CloseButton-7e3ca34d.js";import"./index-31253325.js";import"./isNil-5f65db87.js";import"./get-86e63167.js";import"./_MapCache-52b86039.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-ea007e01.js";import"./cloneDeep-641ee2c7.js";import"./_getPrototype-17f2df3f.js";import"./useThemeClass-06f59d25.js";import"./usePopper-549b69fd.js";import"./index.esm-5fbbd29b.js";import"./index-8ea85167.js";import"./useControllableState-f5082273.js";import"./useTimeout-80ea9231.js";import"./StatusIcon-721e0795.js";import"./useRootClose-8f322f83.js";import"./TimeInput-6aa1e7b6.js";import"./useUniqueId-018c2565.js";import"./useDidUpdate-855f950c.js";import"./useUncertainRef-41d92c6b.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-558a0a0c.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5585411f.js";import"./mapCloneElement-db46c91a.js";import"./index.esm-1fe268c9.js";import"./index.esm-e7d17c5f.js";const A=["line","bar","area"],I=t=>{const{series:a=[],width:i="100%",height:s=300,xAxis:n,customOptions:l,type:o="line",direction:r,donutTitle:c,donutText:f,className:m,...z}=t,C=d.useRef(null),E=d.useMemo(()=>{switch(o){case"line":return T;case"bar":return Y;case"area":return X;case"donut":return U;case"radialBar":return Q;default:return T}},[o]);let x=JSON.parse(JSON.stringify(E));const L=window.innerWidth<768,S=d.useCallback(()=>{if(C.current){const g=C.current.querySelectorAll("div.apexcharts-legend")[0];r===O&&(g.style.right="auto",g.style.left="0"),L&&(g.style.position="relative",g.style.top="0",g.style.justifyContent="start",g.style.padding="0")}},[r,L]);return d.useEffect(()=>{A.includes(o)&&S()},[o,S]),A.includes(o)&&(x.xaxis.categories=n),l&&(x={...x,...l}),o==="donut"&&(c&&(x.plotOptions.pie.donut.labels.total.label=c),f&&(x.plotOptions.pie.donut.labels.total.formatter=()=>f)),e.jsx("div",{ref:C,style:r===O?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(H,{options:x,type:o,series:a,width:i,height:s,className:m,...z})})},ne="crmDashboard",D=v("crmDashboard/data/dashboard",async()=>(await J()).data),w=v("crmDashboard/data/dashboard/tasks",async()=>(await P()).data),N=v("crmDashboard/data/getLeads",async()=>(await $()).data),k=v("crmDashboard/data/getLeadsAndDealChart",async()=>(await q()).data),le={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[],convertedLeadDeal:{}},ce=M({name:`${ne}/state`,initialState:le,reducers:{},extraReducers:t=>{t.addCase(D.fulfilled,(a,i)=>{a.dashboardData=i.payload.crmDashboardData,a.loading=!1}).addCase(D.pending,a=>{a.loading=!0}).addCase(w.fulfilled,(a,i)=>{a.loading=!1,a.tasksChartData.chart=i.payload.data}).addCase(w.pending,a=>{a.loading=!0}).addCase(N.fulfilled,(a,i)=>{a.leadsList=i.payload.data,a.loading=!1}).addCase(N.pending,(a,i)=>{a.loading=!0}).addCase(k.fulfilled,(a,i)=>{a.convertedLeadDeal=i.payload.data,a.loading=!1}).addCase(k.pending,(a,i)=>{a.loading=!0})}}),de=ce.reducer,me=F({data:de}),h=W,pe=({data:t=[],className:a})=>{const i=_(),s=()=>{i("/app/crm/leads")},n=h(o=>{o.crmDashboard.data.loading}),l=d.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:r=>{var m;const c=(m=r.row.original)==null?void 0:m.contactData;return c?c.firstName+" "+c.lastName:"-"}},{header:"Title",accessorKey:"title",cell:r=>{const c=r.row.original;return e.jsx(ae,{text:c.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:r=>r.row.original.budget},{header:"status",accessorKey:"status",cell:r=>{const c=r.row.original;return e.jsx(se,{status:c.status})}}],[]);return e.jsxs(y,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(Z,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(ee,{columns:l,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:n,isPagination:!1})]})},j=({label:t,value:a,badgeClass:i,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(B,{className:"mt-2.5",innerClass:i}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:a}),e.jsx("p",{children:t})]})]}),ue=({className:t})=>{const[a,i]=d.useState(["weekly"]),s=h(r=>r.crmDashboard.data.tasksChartData),[n,l]=d.useState(!1),o=h(r=>r.theme.layout.sideNavCollapse);return d.useEffect(()=>{l(!0);const r=setTimeout(()=>l(!1),300);return console.log(p[0],p[2],p[1]),()=>{clearTimeout(r)}},[s,o]),e.jsxs(y,{className:t,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:r=>i(r),children:[e.jsx(u.Item,{value:"monthly",children:"Monthly"}),e.jsx(u.Item,{value:"weekly",children:"Weekly"}),e.jsx(u.Item,{value:"daily",children:"Daily"})]})]}),!V(s)&&!n&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[a[0]].series[0].name,value:s==null?void 0:s.chart[a[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[a[0]].series[1].name,value:s==null?void 0:s.chart[a[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[a[0]].series[2].name,value:s==null?void 0:s.chart[a[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(I,{series:s==null?void 0:s.chart[a[0]].series,xAxis:s==null?void 0:s.chart[a[0]].range,type:"bar",customOptions:{colors:[p[2],p[0],p[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:a[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(R,{loading:n,type:"cover",children:n&&e.jsx("div",{className:"h-[300px]"})})]})},he=({type:t})=>{switch(t){case"newLeads":return e.jsx(b,{size:55,className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(ie,{})});case"company":return e.jsx(b,{size:55,className:"bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100",icon:e.jsx(oe,{})});case"clients":return e.jsx(b,{size:55,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(re,{})});case"task":return e.jsx(b,{size:55,className:"bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100",icon:e.jsx(te,{})});default:return e.jsx("div",{})}},xe=({data:t={}})=>e.jsx(y,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(he,{type:t.key}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-1.5 items-end mb-2",children:[e.jsx("h3",{className:"font-bold leading-none",children:t.value}),e.jsx("p",{className:"font-semibold",children:t.label})]})})]})}),ge=({data:t=[]})=>e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4",children:t.map(a=>e.jsx(xe,{data:a},a.key))}),fe=({data:t={leadsCreated:{},convertedInDeal:{}}})=>{var n,l;const[a,i]=d.useState("week"),s=d.useMemo(()=>{if(console.log(JSON.stringify(t)),t!=null&&t.leadsCreated)return{series:[t==null?void 0:t.leadsCreated[a],t==null?void 0:t.convertedInDeal[a]],labels:["Leads","Converted Deal"]}},[t,a]);return e.jsxs(y,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:o=>{i(o)},children:[e.jsx(u.Item,{value:"month",children:"Monthly"}),e.jsx(u.Item,{value:"week",children:"Weekly"}),e.jsx(u.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(I,{donutTitle:`${s==null?void 0:s.series.reduce((o,r)=>o+r,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:p,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:p[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:p[0],formatter:function(o){return o+""}},total:{show:!0,label:"Total",formatter:function(o){var r;return((r=o==null?void 0:o.globals)==null?void 0:r.seriesTotals[0])||0}}}}}},type:"radialBar"}),((n=s==null?void 0:s.series)==null?void 0:n.length)===((l=s==null?void 0:s.labels)==null?void 0:l.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((o,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(B,{badgeStyle:{backgroundColor:p[r]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:o})]},o))})]})})]})};G("crmDashboard",me);const be=()=>{const t=K(),{statisticData:a,recentLeadsData:i}=h(r=>r.crmDashboard.data.dashboardData),s=h(r=>r.crmDashboard.data.leadsList),n=h(r=>r.crmDashboard.data.convertedLeadDeal),l=h(r=>r.crmDashboard.data.loading);d.useEffect(()=>{o()},[]);const o=()=>{t(D()),t(w()),t(k()),t(N())};return d.useMemo(()=>{const r=(s==null?void 0:s.filter(m=>m.status==="open").length)||0,c=(s==null?void 0:s.filter(m=>m.status==="closed_lost").length)||0,f=(s==null?void 0:s.filter(m=>m.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[r,c,f]}},[s]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(R,{loading:l,children:[e.jsx(ge,{data:a}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(ue,{className:"col-span-2"}),e.jsx(fe,{data:n})]}),e.jsx(pe,{data:i})]})})},Js=be;export{Js as default};
