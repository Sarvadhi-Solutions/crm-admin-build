import{r as d,i as O,j as e,al as v,am as M,an as F,ao as W,ap as _,ah as R,aq as G,a as K}from"./index-eaf52e42.js";import{a as J,b as P,c as $,d as q}from"./CrmService-6468c9e4.js";import{C as y}from"./Card-c132ef99.js";import{i as V}from"./Views-58b94d35.js";import{B}from"./Badge-386f6132.js";import{_ as H,C as p}from"./chart.constant-216bc474.js";import{a as T,b as Q,c as U,d as X,e as Y}from"./GrowShrinkTag-42fde0af.js";import{A as b}from"./index-ab2b5119.js";import{B as Z}from"./Button-fed4171f.js";import"./Dialog-cb605769.js";import{D as ee}from"./DataTable-b44d4841.js";import"./Input-85c69384.js";import"./Skeleton-5a72c339.js";import"./react-tooltip.min-10e8dc9b.js";import"./RichTextEditor-24410772.js";import"./SegmentItemOption-4de5a997.js";import"./SvgIcon-26de8e1d.js";import"./Tooltip-6b1d43dc.js";import{S as se}from"./StatusCapsule-f589c1d3.js";import{T as ae}from"./TextTruncate-d79ab145.js";import{S as u}from"./index-4d78851d.js";import{F as te,a as re,b as oe,c as ie}from"./index.esm-4c4e1b6e.js";import"./Alert-7a9d7326.js";import"./RangeCalendar-bafec6c1.js";import"./index-1ab36455.js";import"./index-1e41ea20.js";import"./Drawer-13b79dad.js";import"./index-20363d34.js";import"./FormItem-29182244.js";import"./toString-e414acd1.js";import"./index-4e0334b1.js";import"./index-025d9039.js";import"./index-ccb57c31.js";import"./toast-884670bd.js";import"./Pagination-d528edfb.js";import"./Progress-535aa38d.js";import"./index-eea1659e.js";import"./ScrollBar-5063b812.js";import"./Select-dcd56571.js";import"./index-316ee910.js";import"./Switcher-47c4cda2.js";import"./index-e6ca51e2.js";import"./index-bdee5ec8.js";import"./Tag-3d19264a.js";import"./index-081d6477.js";import"./index-f406f1f6.js";import"./Upload-39446094.js";import"./index.esm-decdb68b.js";import"./useMergeRef-788c4cb0.js";import"./index-51dad566.js";import"./CloseButton-5416c92a.js";import"./index-437fdc95.js";import"./isNil-d4a6e430.js";import"./get-ff4ee146.js";import"./_MapCache-f8fbe57f.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-c1b6b8b3.js";import"./cloneDeep-9e23e7a1.js";import"./_getPrototype-aa56c24d.js";import"./useThemeClass-62b227ea.js";import"./usePopper-c621d6e7.js";import"./index.esm-601da8bc.js";import"./index-6c9c5c4e.js";import"./useControllableState-4a07cc2b.js";import"./useTimeout-94ee575d.js";import"./StatusIcon-fd205dd6.js";import"./useRootClose-f36be9cb.js";import"./TimeInput-5424b9e7.js";import"./useUniqueId-8353f3b6.js";import"./useDidUpdate-681600b0.js";import"./useUncertainRef-3af81811.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-1b3ef329.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5085ff27.js";import"./mapCloneElement-97722dc2.js";import"./index.esm-819ab12a.js";import"./index.esm-024e78b1.js";const A=["line","bar","area"],I=t=>{const{series:a=[],width:i="100%",height:s=300,xAxis:n,customOptions:l,type:o="line",direction:r,donutTitle:c,donutText:f,className:m,...z}=t,C=d.useRef(null),E=d.useMemo(()=>{switch(o){case"line":return T;case"bar":return Y;case"area":return X;case"donut":return U;case"radialBar":return Q;default:return T}},[o]);let x=JSON.parse(JSON.stringify(E));const L=window.innerWidth<768,S=d.useCallback(()=>{if(C.current){const g=C.current.querySelectorAll("div.apexcharts-legend")[0];r===O&&(g.style.right="auto",g.style.left="0"),L&&(g.style.position="relative",g.style.top="0",g.style.justifyContent="start",g.style.padding="0")}},[r,L]);return d.useEffect(()=>{A.includes(o)&&S()},[o,S]),A.includes(o)&&(x.xaxis.categories=n),l&&(x={...x,...l}),o==="donut"&&(c&&(x.plotOptions.pie.donut.labels.total.label=c),f&&(x.plotOptions.pie.donut.labels.total.formatter=()=>f)),e.jsx("div",{ref:C,style:r===O?{direction:"ltr"}:{},className:"chartRef",children:e.jsx(H,{options:x,type:o,series:a,width:i,height:s,className:m,...z})})},ne="crmDashboard",D=v("crmDashboard/data/dashboard",async()=>(await J()).data),w=v("crmDashboard/data/dashboard/tasks",async()=>(await P()).data),N=v("crmDashboard/data/getLeads",async()=>(await $()).data),k=v("crmDashboard/data/getLeadsAndDealChart",async()=>(await q()).data),le={loading:!0,dashboardData:{},tasksChartData:{},leadsList:[],convertedLeadDeal:{}},ce=M({name:`${ne}/state`,initialState:le,reducers:{},extraReducers:t=>{t.addCase(D.fulfilled,(a,i)=>{a.dashboardData=i.payload.crmDashboardData,a.loading=!1}).addCase(D.pending,a=>{a.loading=!0}).addCase(w.fulfilled,(a,i)=>{a.loading=!1,a.tasksChartData.chart=i.payload.data}).addCase(w.pending,a=>{a.loading=!0}).addCase(N.fulfilled,(a,i)=>{a.leadsList=i.payload.data,a.loading=!1}).addCase(N.pending,(a,i)=>{a.loading=!0}).addCase(k.fulfilled,(a,i)=>{a.convertedLeadDeal=i.payload.data,a.loading=!1}).addCase(k.pending,(a,i)=>{a.loading=!0})}}),de=ce.reducer,me=F({data:de}),h=W,pe=({data:t=[],className:a})=>{const i=_(),s=()=>{i("/app/crm/leads")},n=h(o=>{o.crmDashboard.data.loading}),l=d.useMemo(()=>[{header:"Associated Contact",accessorKey:"associatedContact",cell:r=>{var m;const c=(m=r.row.original)==null?void 0:m.contactData;return c?c.firstName+" "+c.lastName:"-"}},{header:"Title",accessorKey:"title",cell:r=>{const c=r.row.original;return e.jsx(ae,{text:c.title,maxLength:30})}},{header:"Budget",accessorKey:"budget",cell:r=>r.row.original.budget},{header:"status",accessorKey:"status",cell:r=>{const c=r.row.original;return e.jsx(se,{status:c.status})}}],[]);return e.jsxs(y,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h4",{children:"Leads"}),e.jsx(Z,{size:"sm",onClick:s,children:"View All Leads"})]}),e.jsx(ee,{columns:l,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:n,isPagination:!1})]})},j=({label:t,value:a,badgeClass:i,showBadge:s=!0})=>e.jsxs("div",{className:"flex gap-2",children:[s&&e.jsx(B,{className:"mt-2.5",innerClass:i}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold",children:a}),e.jsx("p",{children:t})]})]}),ue=({className:t})=>{const[a,i]=d.useState(["weekly"]),s=h(r=>r.crmDashboard.data.tasksChartData),[n,l]=d.useState(!1),o=h(r=>r.theme.layout.sideNavCollapse);return d.useEffect(()=>{l(!0);const r=setTimeout(()=>l(!1),300);return console.log(p[0],p[2],p[1]),()=>{clearTimeout(r)}},[s,o]),e.jsxs(y,{className:t,children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Tasks Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:r=>i(r),children:[e.jsx(u.Item,{value:"monthly",children:"Monthly"}),e.jsx(u.Item,{value:"weekly",children:"Weekly"}),e.jsx(u.Item,{value:"daily",children:"Daily"})]})]}),!V(s)&&!n&&(s==null?void 0:s.chart)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{children:e.jsx(j,{showBadge:!1,label:"Total Tasks",value:s==null?void 0:s.chart[a[0]].total})}),e.jsxs("div",{className:"flex gap-x-6",children:[e.jsx(j,{badgeClass:"bg-emerald-500",label:s==null?void 0:s.chart[a[0]].series[0].name,value:s==null?void 0:s.chart[a[0]].completed}),e.jsx(j,{badgeClass:"bg-indigo-600",label:s==null?void 0:s.chart[a[0]].series[1].name,value:s==null?void 0:s.chart[a[0]].pending}),e.jsx(j,{badgeClass:"bg-amber-500",label:s==null?void 0:s.chart[a[0]].series[2].name,value:s==null?void 0:s.chart[a[0]].inProgress})]})]}),e.jsxs("div",{children:[e.jsx(I,{series:s==null?void 0:s.chart[a[0]].series,xAxis:s==null?void 0:s.chart[a[0]].range,type:"bar",customOptions:{colors:[p[2],p[0],p[3]],legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:a[0]==="monthly"?"15px":"30px",borderRadius:2}}}}),e.jsx("div",{className:""})]})]}),e.jsx(R,{loading:n,type:"cover",children:n&&e.jsx("div",{className:"h-[300px]"})})]})},he=({type:t})=>{switch(t){case"newLeads":return e.jsx(b,{size:55,className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(ie,{})});case"company":return e.jsx(b,{size:55,className:"bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100",icon:e.jsx(oe,{})});case"clients":return e.jsx(b,{size:55,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(re,{})});case"task":return e.jsx(b,{size:55,className:"bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-100",icon:e.jsx(te,{})});default:return e.jsx("div",{})}},xe=({data:t={}})=>e.jsx(y,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(he,{type:t.key}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-1.5 items-end mb-2",children:[e.jsx("h3",{className:"font-bold leading-none",children:t.value}),e.jsx("p",{className:"font-semibold",children:t.label})]})})]})}),ge=({data:t=[]})=>e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4",children:t.map(a=>e.jsx(xe,{data:a},a.key))}),fe=({data:t={leadsCreated:{},convertedInDeal:{}}})=>{var n,l;const[a,i]=d.useState("week"),s=d.useMemo(()=>{if(console.log(JSON.stringify(t)),t!=null&&t.leadsCreated)return{series:[t==null?void 0:t.leadsCreated[a],t==null?void 0:t.convertedInDeal[a]],labels:["Leads","Converted Deal"]}},[t,a]);return e.jsxs(y,{children:[e.jsxs("div",{className:"flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4",children:[e.jsx("h4",{children:"Leads Overview"}),e.jsxs(u,{value:a,size:"sm",onChange:o=>{i(o)},children:[e.jsx(u.Item,{value:"month",children:"Monthly"}),e.jsx(u.Item,{value:"week",children:"Weekly"}),e.jsx(u.Item,{value:"day",children:"Daily"})]})]}),e.jsx("div",{className:"mt-6",children:(s==null?void 0:s.series)&&e.jsxs(e.Fragment,{children:[e.jsx(I,{donutTitle:`${s==null?void 0:s.series.reduce((o,r)=>o+r,0)}`,donutText:"Leads",series:s==null?void 0:s.series,customOptions:{labels:s==null?void 0:s.labels,colors:p,stroke:{lineCap:"round"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontWeight:600,color:p[0]},value:{show:!0,fontSize:"12px",fontWeight:400,color:p[0],formatter:function(o){return o+""}},total:{show:!0,label:"Total",formatter:function(o){var r;return((r=o==null?void 0:o.globals)==null?void 0:r.seriesTotals[0])||0}}}}}},type:"radialBar"}),((n=s==null?void 0:s.series)==null?void 0:n.length)===((l=s==null?void 0:s.labels)==null?void 0:l.length)&&e.jsx("div",{className:"mt-6 grid grid-cols-2 gap-4 w-[70%] mx-auto",children:s.labels.map((o,r)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(B,{badgeStyle:{backgroundColor:p[r]}}),e.jsx("span",{className:"font-medium whitespace-nowrap",children:o})]},o))})]})})]})};G("crmDashboard",me);const be=()=>{const t=K(),{statisticData:a,recentLeadsData:i}=h(r=>r.crmDashboard.data.dashboardData),s=h(r=>r.crmDashboard.data.leadsList),n=h(r=>r.crmDashboard.data.convertedLeadDeal),l=h(r=>r.crmDashboard.data.loading);d.useEffect(()=>{o()},[]);const o=()=>{t(D()),t(w()),t(k()),t(N())};return d.useMemo(()=>{const r=(s==null?void 0:s.filter(m=>m.status==="open").length)||0,c=(s==null?void 0:s.filter(m=>m.status==="closed_lost").length)||0,f=(s==null?void 0:s.filter(m=>m.status==="closed_won").length)||0;return{labels:["Open","Lost","Won"],data:[r,c,f]}},[s]),e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(R,{loading:l,children:[e.jsx(ge,{data:a}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(ue,{className:"col-span-2"}),e.jsx(fe,{data:n})]}),e.jsx(pe,{data:i})]})})},Js=be;export{Js as default};
