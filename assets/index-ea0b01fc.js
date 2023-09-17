import{r as h,j as e,am as P,an as L,ao as V,ap as z,a as k,aq as j,c as F,ar as I,ai as U}from"./index-5b083722.js";import{C as x}from"./Card-90f8ec69.js";import{S as u}from"./index-b665f1fe.js";import{C as $}from"./Chart-a25b19a9.js";import{N as D}from"./react-number-format.es-918493e5.js";import{i as g}from"./Views-2896b481.js";import{D as G}from"./Dialog-5dd7ece1.js";import{T as q,P as Y}from"./ProceedTrade-dd0385be.js";import{a as W}from"./CryptoService-34381275.js";import{A as R}from"./index-4c1fa5e5.js";import{B as C}from"./Button-f1066bd7.js";import{G as _,g as J}from"./GrowShrinkTag-68dab816.js";import{R as K}from"./RecentAcivity-33fc3c68.js";import{T as A}from"./index-2563f7cd.js";import{c as Q,u as X,f as S,g as Z}from"./index-c70c47e8.js";import"./useControllableState-60589411.js";import"./context-6fe9373e.js";import"./chart.constant-f8825acf.js";import"./chart.config-67c278d4.js";import"./index-f8748c0d.js";import"./CloseButton-d9cd3bbc.js";import"./index.esm-577c3d7b.js";import"./index-e60138cc.js";import"./Select-356b8b96.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-752f7dea.js";import"./toString-981652f6.js";import"./_MapCache-79b01de9.js";import"./index-dd3cb046.js";import"./formik.esm-ca71b2a3.js";import"./index-3898d2cc.js";import"./Badge-3cabc902.js";import"./DataTable-3a401118.js";import"./Pagination-a6fcbfa4.js";import"./index-f0eb9061.js";import"./cloneDeep-966052d2.js";import"./_Uint8Array-3568a2c8.js";import"./_getPrototype-6d07ecf6.js";import"./_baseIsEqual-ce991c11.js";import"./TableRowSkeleton-4018ceb2.js";import"./Skeleton-cb576037.js";import"./Input-48a3f72c.js";import"./isNil-416a1774.js";import"./FormNumericInput-e03f553d.js";import"./react-tooltip.min-b78225a8.js";import"./RichTextEditor-8181e1b2.js";import"./SegmentItemOption-7a99ef68.js";import"./useThemeClass-a72d650b.js";import"./SvgIcon-deac4660.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index.esm-7fc76d40.js";import"./useMergeRef-788c4cb0.js";import"./Tag-ae955d4e.js";import"./index.esm-10704a6d.js";const ee=({data:s={},className:a})=>{var i,o,r,n;const[t,l]=h.useState(["month"]);return e.jsxs(x,{className:a,children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Portfolio Balance"}),e.jsx("h4",{className:"font-bold",children:!g(s)&&e.jsx(D,{thousandSeparator:!0,displayType:"text",value:(o=s[t[0]])==null?void 0:o.series[0].data[((i=s[t[0]])==null?void 0:i.series[0].data.length)-1],prefix:"$"})})]}),e.jsxs(u,{value:t,size:"sm",onChange:d=>l(d),children:[e.jsx(u.Item,{value:"week",children:"Week"}),e.jsx(u.Item,{value:"month",children:"Month"}),e.jsx(u.Item,{value:"year",children:"Year"})]})]}),!g(s)&&e.jsx($,{series:(r=s[t[0]])==null?void 0:r.series,xAxis:(n=s[t[0]])==null?void 0:n.timeRange,height:"350px",customOptions:{legend:{show:!1}}})]})},se={loading:!0,dashboardData:{},tradeDialogOpen:!1},M="cryptoDashboard",y=P(M+"/getCryptoDashboardData",async()=>(await W()).data),E=L({name:`${M}/state`,initialState:se,reducers:{toggleTradeDialog:(s,a)=>{s.tradeDialogOpen=a.payload}},extraReducers:s=>{s.addCase(y.fulfilled,(a,t)=>{a.loading=!1,a.dashboardData=t.payload}).addCase(y.pending,a=>{a.loading=!0})}}),{toggleTradeDialog:w}=E.actions,ae=E.reducer,te=V({data:ae}),b=z,re=({className:s})=>{const a=k(),t=j(),l=b(c=>c.cryptoDashboard.data.tradeDialogOpen),[i,o]=h.useState(""),[r,n]=h.useState(!1),[d,v]=h.useState({}),N=(c,m,O)=>{setTimeout(()=>{m(!1),a(w(!0)),v({...c,type:O}),n(!1),o("")},500)},f=()=>{a(w(!1)),setTimeout(()=>{v({}),n(!1),o("")},300)},B=()=>{n(!0),setTimeout(()=>{o("SUCCESS")},1e3)},H=c=>{f(),c&&t("/app/crypto/wallets")};return e.jsxs(e.Fragment,{children:[e.jsx(x,{className:s,children:e.jsx(q,{amount:29877.3,symbol:"BTC",onBuy:(c,m)=>N(c,m,"BUY"),onSell:(c,m)=>N(c,m,"SELL")})}),e.jsxs(G,{isOpen:l,width:400,onRequestClose:f,onClose:f,children:[e.jsx("h5",{className:"mb-4",children:!g(d)&&!i&&"Order preview"}),!g(d)&&e.jsx(Y,{loading:r,status:i,onConfirm:B,onDone:H,...d})]})]})},oe=({data:s={}})=>e.jsx(x,{className:"bg-gray-50 dark:bg-gray-700 border-0",children:e.jsxs("div",{className:"flex items-center justify-between my-2",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{className:"bg-transparent",src:s.icon,shape:"circle"}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-bold",children:s.symbol}),e.jsx("p",{children:s.name})]})]}),e.jsxs("div",{className:"text-right rtl:text-left",children:[e.jsx("h6",{className:"mb-2",children:e.jsx(D,{displayType:"text",value:s.fiatValue,suffix:" USD",thousandSeparator:!0})}),e.jsx(_,{value:s.growshrink,suffix:"%"})]})]})}),ie=({data:s=[]})=>{const a=j();return e.jsxs(x,{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h4",{children:"Holdings"}),e.jsx(C,{size:"sm",onClick:()=>a("/app/crypto/wallets"),children:"View All"})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4",children:s.map(t=>e.jsx(oe,{data:t},t.symbol))})]})},ne=s=>{const a=j(),t=()=>{a("/app/crypto/wallets")};return e.jsx(K,{title:"Recent Activities",extra:e.jsx(C,{size:"sm",onClick:t,children:"Details"}),...s})},{Tr:T,Td:le,TBody:ce,THead:de,Th:me}=A,p=Q(),pe=[p.accessor("name",{header:"Name",cell:s=>{const{img:a,symbol:t,name:l}=s.row.original;return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{src:a,size:"sm",className:"!bg-transparent"}),e.jsx("span",{className:"font-bold heading-text",children:t}),e.jsx("span",{children:l})]})}}),p.accessor("price",{header:"Price",cell:s=>{const a=s.row.original;return e.jsx(D,{displayType:"text",value:(Math.round(a.price*100)/100).toFixed(2),suffix:" USD",thousandSeparator:!0})}}),p.accessor("change",{header:"24h Change",cell:s=>{const{change:a}=s.row.original;return e.jsxs("span",{className:F("font-semibold",J(a,"text")),children:[a>0&&"+",a,"%"]})}}),p.accessor("volumn",{header:"24h Volumn",cell:s=>{const{volumn:a}=s.row.original;return e.jsxs("span",{children:[a,"M"]})}}),p.accessor("marketCap",{header:"Market Cap",cell:s=>{const{marketCap:a}=s.row.original;return e.jsxs("span",{children:["$",a,"M"]})}})],he=({data:s=[],className:a})=>{const t=j(),l=()=>{t("/app/crypto/market")},i=X({data:s,columns:pe,getCoreRowModel:Z()});return e.jsxs(x,{className:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h4",{children:"Market values"}),e.jsx(C,{size:"sm",onClick:l,children:"Details"})]}),e.jsxs(A,{children:[e.jsx(de,{children:i.getHeaderGroups().map(o=>e.jsx(T,{children:o.headers.map(r=>e.jsx(me,{colSpan:r.colSpan,children:S(r.column.columnDef.header,r.getContext())},r.id))},o.id))}),e.jsx(ce,{children:i.getRowModel().rows.map(o=>e.jsx(T,{children:o.getVisibleCells().map(r=>e.jsx(le,{children:S(r.column.columnDef.cell,r.getContext())},r.id))},o.id))})]})]})};I("cryptoDashboard",te);const xe=()=>{const s=k(),{portfolioStatsData:a,recentAcivityData:t,marketValueData:l,holdingsData:i}=b(n=>n.cryptoDashboard.data.dashboardData),o=b(n=>n.cryptoDashboard.data.loading);h.useEffect(()=>{r()},[]);const r=()=>{s(y())};return e.jsx("div",{className:"flex flex-col gap-4 h-full",children:e.jsxs(U,{loading:o,children:[e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4",children:[e.jsx(ee,{className:"2xl:col-span-8 xl:col-span-7",data:a}),e.jsx(re,{className:"2xl:col-span-3 xl:col-span-4"})]}),e.jsx(ie,{data:i}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4",children:[e.jsx(he,{className:"2xl:col-span-8 xl:col-span-7",data:l}),e.jsx(ne,{className:"2xl:col-span-3 xl:col-span-4",data:t})]})]})})},ys=xe;export{ys as default};
