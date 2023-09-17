import{am as P,an as H,a_ as L,ao as Y,ap as V,r as m,a as x,j as s,B as _,aq as I,h as G,ar as X}from"./index-5b083722.js";import{g as J,h as Q}from"./SalesService-3af4a444.js";import{A as U}from"./AdaptableCard-96bc8e59.js";import{B as W}from"./Badge-3cabc902.js";import{T as N}from"./Tooltip-25cec1e2.js";import{D as Z}from"./DataTable-3a401118.js";import{aw as ee,X as k,z as te,aE as se}from"./index.esm-577c3d7b.js";import{N as ae}from"./react-number-format.es-918493e5.js";import{u as v}from"./useThemeClass-a72d650b.js";import{c as b}from"./cloneDeep-966052d2.js";import{B as M}from"./Button-f1066bd7.js";import{I as oe}from"./Input-48a3f72c.js";import{d as re}from"./debounce-f64d09e7.js";import{t as le,N as ne}from"./toast-6a0b7cb5.js";import{C as ce}from"./ConfirmDialog-3d827848.js";import"./Card-90f8ec69.js";import"./usePopper-a11bdbe9.js";import"./Views-2896b481.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./Pagination-a6fcbfa4.js";import"./Select-356b8b96.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-752f7dea.js";import"./toString-981652f6.js";import"./_MapCache-79b01de9.js";import"./context-6fe9373e.js";import"./index-f0eb9061.js";import"./_Uint8Array-3568a2c8.js";import"./_baseIsEqual-ce991c11.js";import"./TableRowSkeleton-4018ceb2.js";import"./Skeleton-cb576037.js";import"./index-c70c47e8.js";import"./_getPrototype-6d07ecf6.js";import"./isNil-416a1774.js";import"./useTimeout-e6d0b381.js";import"./CloseButton-d9cd3bbc.js";import"./StatusIcon-e0b5cde3.js";import"./chainedFunction-070f832c.js";import"./index-4c1fa5e5.js";import"./useMergeRef-788c4cb0.js";import"./Dialog-5dd7ece1.js";import"./index-f8748c0d.js";const A="salesOrderList",g=P(A+"/getOrders",async t=>(await J(t)).data),T=async t=>(await Q(t)).data,ie={loading:!1,orderList:[],tableData:{total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},selectedRows:[],selectedRow:"",deleteMode:""},B=H({name:`${A}/state`,initialState:ie,reducers:{setOrderList:(t,e)=>{t.orderList=e.payload},setTableData:(t,e)=>{t.tableData=e.payload},setSelectedRows:(t,e)=>{t.selectedRows=e.payload},setSelectedRow:(t,e)=>{t.selectedRow=e.payload},addRowItem:(t,{payload:e})=>{const o=L(t);o.selectedRows.includes(e)||(t.selectedRows=[...o.selectedRows,...e])},removeRowItem:(t,{payload:e})=>{const o=L(t);o.selectedRows.includes(e)&&(t.selectedRows=o.selectedRows.filter(l=>l!==e))},setDeleteMode:(t,e)=>{t.deleteMode=e.payload}},extraReducers:t=>{t.addCase(g.fulfilled,(e,o)=>{e.orderList=o.payload.data,e.tableData.total=o.payload.total,e.loading=!1}).addCase(g.pending,e=>{e.loading=!0})}}),{setOrderList:xt,setTableData:w,setSelectedRows:j,setSelectedRow:S,addRowItem:de,removeRowItem:me,setDeleteMode:C}=B.actions,pe=B.reducer,ue=Y({data:pe}),p=V,R={0:{label:"Paid",dotClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"Pending",dotClass:"bg-amber-500",textClass:"text-amber-500"},2:{label:"Failed",dotClass:"bg-red-500",textClass:"text-red-500"}},he=({paymentMehod:t,className:e})=>{switch(t){case"visa":return s.jsx("img",{className:e,src:"/img/others/img-8.png",alt:t});case"master":return s.jsx("img",{className:e,src:"/img/others/img-9.png",alt:t});case"paypal":return s.jsx("img",{className:e,src:"/img/others/img-10.png",alt:t});default:return s.jsx(s.Fragment,{})}},ge=({row:t})=>{const{textTheme:e}=v(),o=I(),l=m.useCallback(()=>{o(`/app/sales/order-details/${t.id}`)},[o,t]);return s.jsxs("span",{className:`cursor-pointer select-none font-semibold hover:${e}`,onClick:l,children:["#",t.id]})},xe=({row:t})=>{const e=x(),{textTheme:o}=v(),l=I(),d=()=>{e(C("single")),e(S([t.id]))},i=m.useCallback(()=>{l(`/app/sales/order-details/${t.id}`)},[l,t]);return s.jsxs("div",{className:"flex justify-end text-lg",children:[s.jsx(N,{title:"View",children:s.jsx("span",{className:`cursor-pointer p-2 hover:${o}`,onClick:i,children:s.jsx(ee,{})})}),s.jsx(N,{title:"Delete",children:s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:d,children:s.jsx(k,{})})})]})},fe=()=>{const t=m.useRef(null),e=x(),{pageIndex:o,pageSize:l,sort:d,query:i,total:u}=p(a=>a.salesOrderList.data.tableData),c=p(a=>a.salesOrderList.data.loading),n=p(a=>a.salesOrderList.data.orderList),f=m.useCallback(()=>{console.log("{ pageIndex, pageSize, sort, query }",{pageIndex:o,pageSize:l,sort:d,query:i}),e(g({pageIndex:o,pageSize:l,sort:d,query:i}))},[e,o,l,d,i]);m.useEffect(()=>{e(j([])),f()},[e,f,o,l,d]),m.useEffect(()=>{var a;t&&((a=t.current)==null||a.resetSelected())},[n]);const h=m.useMemo(()=>({pageIndex:o,pageSize:l,sort:d,query:i,total:u}),[o,l,d,i,u]),z=m.useMemo(()=>[{header:"Order",accessorKey:"id",cell:a=>s.jsx(ge,{row:a.row.original})},{header:"Date",accessorKey:"date",cell:a=>{const r=a.row.original;return s.jsx("span",{children:_.unix(r.date).format("DD/MM/YYYY")})}},{header:"Customer",accessorKey:"customer"},{header:"Status",accessorKey:"status",cell:a=>{const{status:r}=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(W,{className:R[r].dotClass}),s.jsx("span",{className:`ml-2 rtl:mr-2 capitalize font-semibold ${R[r].textClass}`,children:R[r].label})]})}},{header:"Payment Method",accessorKey:"paymentMehod",cell:a=>{const{paymentMehod:r,paymentIdendifier:D}=a.row.original;return s.jsxs("span",{className:"flex items-center",children:[s.jsx(he,{className:"max-h-[20px]",paymentMehod:r}),s.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:D})]})}},{header:"Total",accessorKey:"totalAmount",cell:a=>{const{totalAmount:r}=a.row.original;return s.jsx(ae,{displayType:"text",value:(Math.round(r*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})}},{header:"",id:"action",cell:a=>s.jsx(xe,{row:a.row.original})}],[]),E=a=>{const r=b(h);r.pageIndex=a,e(w(r))},$=a=>{const r=b(h);r.pageSize=Number(a),r.pageIndex=1,e(w(r))},q=a=>{const r=b(h);r.sort=a,e(w(r))},F=(a,r)=>{e(a?de([r.id]):me(r.id))},K=m.useCallback((a,r)=>{if(a){const D=r.map(y=>y.original),O=[];D.forEach(y=>{O.push(y.id)}),e(j(O))}else e(j([]))},[e]);return s.jsx(Z,{ref:t,selectable:!0,columns:z,data:n,loading:c,pagingData:{total:h.total,pageIndex:h.pageIndex,pageSize:h.pageSize},onPaginationChange:E,onSelectChange:$,onSort:q,onCheckBoxChange:F,onIndeterminateCheckBoxChange:K})},be=()=>{const t=x(),e=m.useRef(null),o=p(c=>c.salesOrderList.data.tableData),l=re(d,500);function d(c){const n=b(o);n.query=c,n.pageIndex=1,typeof c=="string"&&c.length>1&&i(n),typeof c=="string"&&c.length===0&&i(n)}const i=c=>{t(w(c)),t(g(c))},u=c=>{l(c.target.value)};return s.jsx(oe,{ref:e,className:"lg:w-52",size:"sm",placeholder:"Search",prefix:s.jsx(te,{className:"text-lg"}),onChange:u})},we=()=>{const t=x(),e=()=>{t(C("batch"))};return s.jsx(M,{variant:"solid",color:"red-600",size:"sm",icon:s.jsx(k,{}),onClick:e,children:"Batch Delete"})},je=()=>{const t=p(e=>e.salesOrderList.data.selectedRows);return s.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[t.length>0&&s.jsx(we,{}),s.jsx(G,{download:!0,to:"/data/order-list.csv",target:"_blank",children:s.jsx(M,{block:!0,size:"sm",icon:s.jsx(se,{}),children:"Export"})}),s.jsx(be,{})]})},Ce=()=>{const t=x(),e=p(n=>n.salesOrderList.data.selectedRows),o=p(n=>n.salesOrderList.data.selectedRow),l=p(n=>n.salesOrderList.data.deleteMode),d=p(n=>n.salesOrderList.data.tableData),i=()=>{t(C("")),l==="single"&&t(S([]))},u=async()=>{if(t(C("")),l==="single"){const n=await T({id:o});c(n),t(S([]))}if(l==="batch"){const n=await T({id:e});c(n,e.length),t(j([]))}},c=(n,f=0)=>{n&&(t(g(d)),le.push(s.jsxs(ne,{title:"Successfuly Deleted",type:"success",duration:2500,children:[l==="single"&&"Order ",l==="batch"&&`${f} orders `,"successfuly deleted"]}),{placement:"top-center"}))};return s.jsx(ce,{isOpen:l==="single"||l==="batch",type:"danger",title:"Delete product",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:u,children:s.jsx("p",{children:"Are you sure you want to delete this order? All record related to this order will be deleted as well. This action cannot be undone."})})};X("salesOrderList",ue);const De=()=>s.jsxs(U,{className:"h-full",bodyClass:"h-full",children:[s.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"mb-4 lg:mb-0",children:"Orders"}),s.jsx(je,{})]}),s.jsx(fe,{}),s.jsx(Ce,{})]}),ft=De;export{ft as default};
