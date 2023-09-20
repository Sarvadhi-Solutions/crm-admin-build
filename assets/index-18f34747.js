import{am as k,an as M,ao as O,ap as Y,a as j,r as y,j as e,ai as P,c as E,B as W,ar as U}from"./index-2a02f09f.js";import{d as $,e as G}from"./CryptoService-014ec982.js";import{C as h}from"./Card-de52f0bd.js";import{A as u}from"./index-5ca6dc5a.js";import{I as R}from"./Input-4032ba6b.js";import{T as B}from"./Tooltip-7716d794.js";import{t as F,N as V}from"./toast-66eca971.js";import{S as g}from"./Skeleton-a1c6070d.js";import{G as q}from"./GrowShrinkTag-aafc6273.js";import{u as _}from"./useThemeClass-d3572517.js";import{aM as J,aN as Q,U as X,aO as Z,aP as ee}from"./index.esm-c61f0406.js";import{N as ae}from"./react-number-format.es-b6150c61.js";import{T as A}from"./index-bb34e564.js";import{B as I}from"./Badge-ed31d9ee.js";import{D as z}from"./DataTable-76c04f2c.js";import{c as m}from"./cloneDeep-f2fd7982.js";import"./useMergeRef-788c4cb0.js";import"./context-ccc0a902.js";import"./Views-597fd265.js";import"./isNil-68e69365.js";import"./get-c92f924e.js";import"./toString-8660963f.js";import"./_MapCache-dabc1c97.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./useTimeout-90c2003f.js";import"./CloseButton-1ba6d0ce.js";import"./StatusIcon-19ebbef4.js";import"./chainedFunction-070f832c.js";import"./Tag-592deaaf.js";import"./useControllableState-1afbd3cb.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./Pagination-45470020.js";import"./Select-e6a28a89.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./index-33716023.js";import"./_Uint8Array-49dd6612.js";import"./_baseIsEqual-d37b49c3.js";import"./TableRowSkeleton-f01debf2.js";import"./index-be1c4c56.js";import"./_getPrototype-63f10215.js";const D="cryptoWallets",N=k(D+"/getWalletData",async()=>(await $()).data),T=k(D+"/getTransctionHistoryData",async s=>(await G(s)).data),K={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},se={loading:!0,walletsData:[],transactionHistoryLoading:!0,transactionHistoryData:[],tableData:K,selectedTab:"trade"},L=M({name:`${D}/state`,initialState:se,reducers:{setSelectedTab:(s,t)=>{s.selectedTab=t.payload},setTableData:(s,t)=>{s.tableData=t.payload},setTransactionHistoryData:(s,t)=>{s.transactionHistoryData=t.payload}},extraReducers:s=>{s.addCase(N.fulfilled,(t,o)=>{t.loading=!1,t.walletsData=o.payload}).addCase(N.pending,t=>{t.loading=!0}).addCase(T.fulfilled,(t,o)=>{t.transactionHistoryLoading=!1,t.tableData.total=o.payload.total,t.transactionHistoryData=o.payload.data}).addCase(T.pending,t=>{t.transactionHistoryLoading=!0})}}),{setSelectedTab:te,setTableData:c,setTransactionHistoryData:re}=L.actions,oe=L.reducer,ne=O({data:oe}),d=Y,ie=({data:s={}})=>{const{textTheme:t}=_(),o=(n="")=>{navigator.clipboard.writeText(n),F.push(e.jsx(V,{title:"Copied",type:"success",duration:1e3}),{placement:"top-center"})};return e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{className:"bg-transparent",src:s.icon,shape:"circle"}),e.jsx("h6",{className:"font-bold",children:s.name})]}),e.jsxs("div",{className:"text-right rtl:text-left",children:[e.jsx("h6",{className:"mb-2",children:e.jsx(ae,{displayType:"text",value:s.fiatValue,suffix:" USD",thousandSeparator:!0})}),e.jsx(q,{value:s.growshrink,suffix:"%"})]})]}),e.jsx("div",{className:"my-4",children:e.jsxs("h5",{className:"font-bold",children:[s.coinValue," ",s.symbol]})}),e.jsx(R,{readOnly:!0,value:s.address,suffix:e.jsx(B,{title:"Copy",children:e.jsx(Q,{className:E("cursor-pointer text-xl",`hover:${t}`),onClick:()=>o(s.address)})})})]})},le=()=>{const s=j(),t=d(n=>n.cryptoWallets.data.walletsData),o=d(n=>n.cryptoWallets.data.loading);return y.useEffect(()=>{s(N())},[s]),e.jsxs("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-4 gap-4",children:[!o&&e.jsxs(e.Fragment,{children:[t.map(n=>e.jsx(ie,{data:n},n.symbol)),e.jsx(h,{clickable:!0,className:"border-dashed border-2 hover:border-indigo-600 hover:dark:border-gray-300 bg-transparent",children:e.jsxs("div",{className:"flex flex-col justify-center items-center py-5",children:[e.jsx("div",{className:"p-4 rounded-full bg-gray-50 dark:bg-gray-600",children:e.jsx(J,{className:"text-4xl text-gray-300"})}),e.jsx("p",{className:"mt-5 font-semibold",children:"Add Wallet"})]})})]}),t.length===0&&o&&[...Array(4).keys()].map(n=>e.jsx(h,{children:e.jsx(P,{loading:o,customLoader:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{variant:"circle"}),e.jsx(g,{width:100})]}),e.jsx(g,{className:"mt-6",width:150}),e.jsx(g,{className:"mt-6"})]})})},n))]})},p={0:{label:"Complete",dotClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"Pending",dotClass:"bg-amber-500",textClass:"text-amber-500"},2:{label:"Canceled",dotClass:"bg-red-500",textClass:"text-red-500"}},ce=({type:s})=>{switch(s){case 0:return e.jsx(u,{size:"sm",className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(ee,{style:{transform:"rotate(45deg)"}})});case 1:return e.jsx(u,{size:"sm",className:"bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100",icon:e.jsx(Z,{style:{transform:"rotate(45deg)"}})});case 2:return e.jsx(u,{size:"sm",className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(X,{})});default:return e.jsx(u,{})}},de=({data:s,loading:t,tableData:o})=>{const n=j(),l=y.useMemo(()=>[{header:"Action",accessorKey:"action",cell:r=>{const a=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{children:e.jsx(ce,{type:a.actionType})}),e.jsx("span",{className:"font-semibold heading-text whitespace-nowrap",children:a.action})]})}},{header:"Date",accessorKey:"date",cell:r=>{const a=r.row.original;return e.jsx("div",{className:"flex items-center",children:W.unix(a.date).format("MM/DD/YYYY")})}},{header:"Price",accessorKey:"price",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.price," USD"]})}},{header:"Amount",accessorKey:"amount",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.amount," ",a.symbol]})}},{header:"Status",accessorKey:"status",cell:r=>{const{status:a}=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:p[a].dotClass}),e.jsx("span",{className:`capitalize font-semibold ${p[a].textClass}`,children:p[a].label})]})}}],[]),x=r=>{const a=m(o);a.pageIndex=r,n(c(a))},i=r=>{const a=m(o);a.pageSize=Number(r),a.pageIndex=1,n(c(a))},f=r=>{const a=m(o);a.sort=r,n(c(a))};return e.jsx(z,{columns:l,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{className:"rounded-md"},loading:t,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:x,onSelectChange:i,onSort:f})},H=({data:s,loading:t,tableData:o})=>{const n=j(),l=y.useMemo(()=>[{header:"Transaction Id",accessorKey:"id",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:["TxID-",a.id]})}},{header:"Date",accessorKey:"date",cell:r=>{const a=r.row.original;return e.jsx("div",{className:"flex items-center",children:W.unix(a.date).format("MM/DD/YYYY")})}},{header:"Amount",accessorKey:"amount",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.amount," USD"]})}},{header:"Status",accessorKey:"status",cell:r=>{var v,C,S;const{status:a}=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:(v=p[a])==null?void 0:v.dotClass}),e.jsx("span",{className:`capitalize font-semibold ${(C=p[a])==null?void 0:C.textClass}`,children:(S=p[a])==null?void 0:S.label})]})}}],[]),x=r=>{const a=m(o);a.pageIndex=r,n(c(a))},i=r=>{const a=m(o);a.pageSize=Number(r),a.pageIndex=1,n(c(a))},f=r=>{const a=m(o);a.sort=r,n(c(a))};return e.jsx(z,{columns:l,data:s,loading:t,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:x,onSelectChange:i,onSort:f})},{TabNav:b,TabList:me,TabContent:w}=A,pe=()=>{const s=j(),t=d(i=>i.cryptoWallets.data.transactionHistoryData),o=d(i=>i.cryptoWallets.data.transactionHistoryLoading),n=d(i=>i.cryptoWallets.data.selectedTab),l=d(i=>i.cryptoWallets.data.tableData);y.useEffect(()=>{s(T({tab:n,...l}))},[s,n,l]);const x=i=>{s(re([])),s(te(i)),s(c(K))};return e.jsxs(h,{children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsxs(A,{value:n,variant:"pill",onChange:x,children:[e.jsxs(me,{children:[e.jsx(b,{value:"trade",children:"Trade"}),e.jsx(b,{value:"deposit",children:"Deposit"}),e.jsx(b,{value:"withdraw",children:"Withdraw"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(w,{value:"trade",children:e.jsx(de,{data:t,loading:o,tableData:l})}),e.jsx(w,{value:"deposit",children:e.jsx(H,{data:t,loading:o,tableData:l})}),e.jsx(w,{value:"withdraw",children:e.jsx(H,{data:t,loading:o,tableData:l})})]})]})]})};U("cryptoWallets",ne);const xe=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(le,{}),e.jsx(pe,{})]}),oa=xe;export{oa as default};
