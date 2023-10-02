import{am as k,an as Y,ao as M,ap as O,a as j,r as y,j as e,ai as E,c as P,p as W,ar as R}from"./index-f40e4d75.js";import{d as U,e as $}from"./CryptoService-a4b904e3.js";import{C as h}from"./Card-902c739e.js";import{A as u}from"./index-3d26675f.js";import{I as G}from"./Input-a28838c6.js";import{T as F}from"./Tooltip-b58b263b.js";import{t as B,N as V}from"./toast-a13e90a2.js";import{S as g}from"./Skeleton-70df546a.js";import{G as q}from"./GrowShrinkTag-95c2efdd.js";import{u as Q}from"./useThemeClass-faaaa3eb.js";import{aQ as _,aR as J,U as X,aS as Z,aT as ee}from"./index.esm-0d86f991.js";import{N as ae}from"./react-number-format.es-c65f938e.js";import{T as A}from"./index-e9a19be6.js";import{B as I}from"./Badge-6fa7c653.js";import{D as z}from"./DataTable-10580198.js";import{c as m}from"./cloneDeep-599ca6a7.js";import"./useMergeRef-788c4cb0.js";import"./context-51e9908c.js";import"./Views-4f4cfc12.js";import"./isNil-867ba5c2.js";import"./get-8208bc30.js";import"./toString-1320cce2.js";import"./_MapCache-11f94205.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./useTimeout-e87eb97a.js";import"./CloseButton-579d2861.js";import"./StatusIcon-e5b0e9d4.js";import"./chainedFunction-070f832c.js";import"./Tag-d736e0a6.js";import"./useControllableState-a88821e3.js";import"./index-a0876546.js";import"./index.esm-939b12b7.js";import"./Pagination-968bd340.js";import"./Select-1c5bed57.js";import"./slicedToArray-ed1b3644.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-b6817789.js";import"./floating-ui.dom-bef9cea3.js";import"./index-fce80fcb.js";import"./_Uint8Array-1aa2dd21.js";import"./_baseIsEqual-6ce30dc4.js";import"./TableRowSkeleton-bcefa50f.js";import"./index-04a1d3b6.js";import"./_getPrototype-fd20deb2.js";const D="cryptoWallets",N=k(D+"/getWalletData",async()=>(await U()).data),T=k(D+"/getTransctionHistoryData",async s=>(await $(s)).data),K={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},se={loading:!0,walletsData:[],transactionHistoryLoading:!0,transactionHistoryData:[],tableData:K,selectedTab:"trade"},L=Y({name:`${D}/state`,initialState:se,reducers:{setSelectedTab:(s,t)=>{s.selectedTab=t.payload},setTableData:(s,t)=>{s.tableData=t.payload},setTransactionHistoryData:(s,t)=>{s.transactionHistoryData=t.payload}},extraReducers:s=>{s.addCase(N.fulfilled,(t,o)=>{t.loading=!1,t.walletsData=o.payload}).addCase(N.pending,t=>{t.loading=!0}).addCase(T.fulfilled,(t,o)=>{t.transactionHistoryLoading=!1,t.tableData.total=o.payload.total,t.transactionHistoryData=o.payload.data}).addCase(T.pending,t=>{t.transactionHistoryLoading=!0})}}),{setSelectedTab:te,setTableData:c,setTransactionHistoryData:re}=L.actions,oe=L.reducer,ne=M({data:oe}),d=O,ie=({data:s={}})=>{const{textTheme:t}=Q(),o=(n="")=>{navigator.clipboard.writeText(n),B.push(e.jsx(V,{title:"Copied",type:"success",duration:1e3}),{placement:"top-center"})};return e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{className:"bg-transparent",src:s.icon,shape:"circle"}),e.jsx("h6",{className:"font-bold",children:s.name})]}),e.jsxs("div",{className:"text-right rtl:text-left",children:[e.jsx("h6",{className:"mb-2",children:e.jsx(ae,{displayType:"text",value:s.fiatValue,suffix:" USD",thousandSeparator:!0})}),e.jsx(q,{value:s.growshrink,suffix:"%"})]})]}),e.jsx("div",{className:"my-4",children:e.jsxs("h5",{className:"font-bold",children:[s.coinValue," ",s.symbol]})}),e.jsx(G,{readOnly:!0,value:s.address,suffix:e.jsx(F,{title:"Copy",children:e.jsx(J,{className:P("cursor-pointer text-xl",`hover:${t}`),onClick:()=>o(s.address)})})})]})},le=()=>{const s=j(),t=d(n=>n.cryptoWallets.data.walletsData),o=d(n=>n.cryptoWallets.data.loading);return y.useEffect(()=>{s(N())},[s]),e.jsxs("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-4 gap-4",children:[!o&&e.jsxs(e.Fragment,{children:[t.map(n=>e.jsx(ie,{data:n},n.symbol)),e.jsx(h,{clickable:!0,className:"border-dashed border-2 hover:border-indigo-600 hover:dark:border-gray-300 bg-transparent",children:e.jsxs("div",{className:"flex flex-col justify-center items-center py-5",children:[e.jsx("div",{className:"p-4 rounded-full bg-gray-50 dark:bg-gray-600",children:e.jsx(_,{className:"text-4xl text-gray-300"})}),e.jsx("p",{className:"mt-5 font-semibold",children:"Add Wallet"})]})})]}),t.length===0&&o&&[...Array(4).keys()].map(n=>e.jsx(h,{children:e.jsx(E,{loading:o,customLoader:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{variant:"circle"}),e.jsx(g,{width:100})]}),e.jsx(g,{className:"mt-6",width:150}),e.jsx(g,{className:"mt-6"})]})})},n))]})},p={0:{label:"Complete",dotClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"Pending",dotClass:"bg-amber-500",textClass:"text-amber-500"},2:{label:"Canceled",dotClass:"bg-red-500",textClass:"text-red-500"}},ce=({type:s})=>{switch(s){case 0:return e.jsx(u,{size:"sm",className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(ee,{style:{transform:"rotate(45deg)"}})});case 1:return e.jsx(u,{size:"sm",className:"bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100",icon:e.jsx(Z,{style:{transform:"rotate(45deg)"}})});case 2:return e.jsx(u,{size:"sm",className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(X,{})});default:return e.jsx(u,{})}},de=({data:s,loading:t,tableData:o})=>{const n=j(),l=y.useMemo(()=>[{header:"Action",accessorKey:"action",cell:r=>{const a=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{children:e.jsx(ce,{type:a.actionType})}),e.jsx("span",{className:"font-semibold heading-text whitespace-nowrap",children:a.action})]})}},{header:"Date",accessorKey:"date",cell:r=>{const a=r.row.original;return e.jsx("div",{className:"flex items-center",children:W.unix(a.date).format("MM/DD/YYYY")})}},{header:"Price",accessorKey:"price",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.price," USD"]})}},{header:"Amount",accessorKey:"amount",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.amount," ",a.symbol]})}},{header:"Status",accessorKey:"status",cell:r=>{const{status:a}=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:p[a].dotClass}),e.jsx("span",{className:`capitalize font-semibold ${p[a].textClass}`,children:p[a].label})]})}}],[]),x=r=>{const a=m(o);a.pageIndex=r,n(c(a))},i=r=>{const a=m(o);a.pageSize=Number(r),a.pageIndex=1,n(c(a))},f=r=>{const a=m(o);a.sort=r,n(c(a))};return e.jsx(z,{columns:l,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{className:"rounded-md"},loading:t,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:x,onSelectChange:i,onSort:f})},H=({data:s,loading:t,tableData:o})=>{const n=j(),l=y.useMemo(()=>[{header:"Transaction Id",accessorKey:"id",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:["TxID-",a.id]})}},{header:"Date",accessorKey:"date",cell:r=>{const a=r.row.original;return e.jsx("div",{className:"flex items-center",children:W.unix(a.date).format("MM/DD/YYYY")})}},{header:"Amount",accessorKey:"amount",cell:r=>{const a=r.row.original;return e.jsxs("span",{children:[a.amount," USD"]})}},{header:"Status",accessorKey:"status",cell:r=>{var v,C,S;const{status:a}=r.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:(v=p[a])==null?void 0:v.dotClass}),e.jsx("span",{className:`capitalize font-semibold ${(C=p[a])==null?void 0:C.textClass}`,children:(S=p[a])==null?void 0:S.label})]})}}],[]),x=r=>{const a=m(o);a.pageIndex=r,n(c(a))},i=r=>{const a=m(o);a.pageSize=Number(r),a.pageIndex=1,n(c(a))},f=r=>{const a=m(o);a.sort=r,n(c(a))};return e.jsx(z,{columns:l,data:s,loading:t,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:x,onSelectChange:i,onSort:f})},{TabNav:b,TabList:me,TabContent:w}=A,pe=()=>{const s=j(),t=d(i=>i.cryptoWallets.data.transactionHistoryData),o=d(i=>i.cryptoWallets.data.transactionHistoryLoading),n=d(i=>i.cryptoWallets.data.selectedTab),l=d(i=>i.cryptoWallets.data.tableData);y.useEffect(()=>{s(T({tab:n,...l}))},[s,n,l]);const x=i=>{s(re([])),s(te(i)),s(c(K))};return e.jsxs(h,{children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsxs(A,{value:n,variant:"pill",onChange:x,children:[e.jsxs(me,{children:[e.jsx(b,{value:"trade",children:"Trade"}),e.jsx(b,{value:"deposit",children:"Deposit"}),e.jsx(b,{value:"withdraw",children:"Withdraw"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(w,{value:"trade",children:e.jsx(de,{data:t,loading:o,tableData:l})}),e.jsx(w,{value:"deposit",children:e.jsx(H,{data:t,loading:o,tableData:l})}),e.jsx(w,{value:"withdraw",children:e.jsx(H,{data:t,loading:o,tableData:l})})]})]})]})};R("cryptoWallets",ne);const xe=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(le,{}),e.jsx(pe,{})]}),la=xe;export{la as default};
