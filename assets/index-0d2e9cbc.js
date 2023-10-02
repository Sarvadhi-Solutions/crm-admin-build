import{j as s,r as o,p as x,c as t,h as D,ab as k,ai as w}from"./index-a9c93031.js";import{T as u}from"./Tag-624637b7.js";import{C as P,i as b}from"./Views-0c5423a6.js";import{D as F}from"./DoubleSidedImage-f4b852fe.js";import{A as O}from"./AdaptableCard-cf701c87.js";import{T as A}from"./index-10dbbba6.js";import{A as d}from"./index-7cf9b27e.js";import{c as H,u as I,f,g as L}from"./index-b8d32cfc.js";import{N as h}from"./react-number-format.es-59b8879d.js";import{i as C}from"./isLastChild-83eb4c23.js";import{C as a}from"./Card-6b8166bd.js";import{B as R}from"./Button-47bf58f7.js";import{T as N}from"./index-4aad4bac.js";import{B}from"./Badge-c9ada007.js";import{I as g}from"./IconText-df53d2c5.js";import{aM as E,aN as $,ab as Y,h as z}from"./index.esm-37c3564c.js";import{i as V}from"./SalesService-db9cfcaf.js";import"./index.esm-556fe943.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index-0b68a97f.js";import"./context-6d5d8fe5.js";import"./mapCloneElement-d91bf257.js";const{Tr:v,Th:U,Td:q,THead:G,TBody:Q}=A,c=H(),J=({row:e})=>s.jsxs("div",{className:"flex",children:[s.jsx(d,{size:90,src:e.img}),s.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[s.jsx("h6",{className:"mb-2",children:e.name}),Object.keys(e.details).map((l,i)=>s.jsxs("div",{className:"mb-1",children:[s.jsxs("span",{className:"capitalize",children:[l,": "]}),e.details[l].map((r,n)=>s.jsxs(o.Fragment,{children:[s.jsx("span",{className:"font-semibold",children:r}),!C(e.details[l],n)&&s.jsx("span",{children:", "})]},r+n))]},l+i))]})]}),y=({amount:e})=>s.jsx(h,{displayType:"text",value:(Math.round(e*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0}),K=[c.accessor("name",{header:"Product",cell:e=>{const l=e.row.original;return s.jsx(J,{row:l})}}),c.accessor("price",{header:"Price",cell:e=>{const l=e.row.original;return s.jsx(y,{amount:l.price})}}),c.accessor("quantity",{header:"Quantity"}),c.accessor("total",{header:"Total",cell:e=>{const l=e.row.original;return s.jsx(y,{amount:l.price})}})],W=({data:e=[]})=>{const l=I({data:e,columns:K,getCoreRowModel:L()});return s.jsx(O,{className:"mb-4",children:s.jsxs(A,{children:[s.jsx(G,{children:l.getHeaderGroups().map(i=>s.jsx(v,{children:i.headers.map(r=>s.jsx(U,{colSpan:r.colSpan,children:f(r.column.columnDef.header,r.getContext())},r.id))},i.id))}),s.jsx(Q,{children:l.getRowModel().rows.map(i=>s.jsx(v,{children:i.getVisibleCells().map(r=>s.jsx(q,{children:f(r.column.columnDef.cell,r.getContext())},r.id))},i.id))})]})})},m=({label:e,value:l,isLast:i})=>s.jsxs("li",{className:`flex items-center justify-between${i?"":" mb-3"}`,children:[s.jsx("span",{children:e}),s.jsx("span",{className:"font-semibold",children:s.jsx(h,{displayType:"text",value:(Math.round(l*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})]}),X=({data:e})=>s.jsxs(a,{className:"mb-4",children:[s.jsx("h5",{className:"mb-4",children:"Payment Summary"}),s.jsxs("ul",{children:[s.jsx(m,{label:"Subtotal",value:e==null?void 0:e.subTotal}),s.jsx(m,{label:"Delivery fee",value:e==null?void 0:e.deliveryFees}),s.jsx(m,{label:"Tax(6%)",value:e==null?void 0:e.tax}),s.jsx("hr",{className:"mb-3"}),s.jsx(m,{isLast:!0,label:"Total",value:e==null?void 0:e.total})]})]}),Z=({data:e})=>s.jsxs(a,{className:"mb-4",children:[s.jsx("h5",{className:"mb-4",children:"Shipping"}),s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(d,{size:60,src:e==null?void 0:e.shippingLogo}),s.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[s.jsx("h6",{children:e==null?void 0:e.shippingVendor}),s.jsxs("span",{children:["Delivery in ",e==null?void 0:e.estimatedMin," ~"," ",e==null?void 0:e.estimatedMax," days"]})]})]}),s.jsx("span",{className:"font-semibold",children:s.jsx(h,{displayType:"text",value:(Math.round(((e==null?void 0:e.deliveryFees)||0)*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})]}),s.jsx(R,{block:!0,children:"View Carrier Details"})]}),_=({data:e=[]})=>s.jsxs(a,{className:"mb-4",children:[s.jsx("h5",{className:"mb-4",children:"Activity"}),e.map((l,i)=>s.jsxs("div",{className:C(e,i)?"":"mb-8",children:[s.jsx("div",{className:"mb-2 font-semibold uppercase opacity-80",children:x.unix(l.date).format("dddd, DD MMMM")}),s.jsx(N,{children:l.events.map((r,n)=>s.jsxs(N.Item,{media:s.jsx("div",{className:"flex mt-1.5",children:s.jsx(B,{innerClass:t(r.recipient?"bg-emerald-500":"bg-blue-500")})}),children:[s.jsx("div",{className:t("font-semibold mb-1 text-base",r.recipient&&"text-emerald-500"),children:r.action}),r.recipient&&s.jsxs("div",{className:"mb-1",children:["Recipient: ",r.recipient]}),s.jsx("div",{children:x.unix(r.time).format("hh:mm A")})]},r.time+n))})]},l.date))]}),ss=({data:e})=>s.jsxs(a,{children:[s.jsx("h5",{className:"mb-4",children:"Customer"}),s.jsxs(D,{className:"group flex items-center justify-between",to:"/app/crm/customer-details?id=11",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(d,{shape:"circle",src:e==null?void 0:e.img}),s.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[s.jsx("div",{className:"font-semibold group-hover:text-gray-900 group-hover:dark:text-gray-100",children:e==null?void 0:e.name}),s.jsxs("span",{children:[s.jsxs("span",{className:"font-semibold",children:[e==null?void 0:e.previousOrder," "]}),"previous orders"]})]})]}),s.jsx(E,{className:"text-xl hidden group-hover:block"})]}),s.jsx("hr",{className:"my-5"}),s.jsx(g,{className:"mb-4",icon:s.jsx($,{className:"text-xl opacity-70"}),children:s.jsx("span",{className:"font-semibold",children:e==null?void 0:e.email})}),s.jsx(g,{icon:s.jsx(Y,{className:"text-xl opacity-70"}),children:s.jsx("span",{className:"font-semibold",children:e==null?void 0:e.phone})}),s.jsx("hr",{className:"my-5"}),s.jsx("h6",{className:"mb-4",children:"Shipping Address"}),s.jsxs("address",{className:"not-italic",children:[s.jsx("div",{className:"mb-1",children:e==null?void 0:e.shippingAddress.line1}),s.jsx("div",{className:"mb-1",children:e==null?void 0:e.shippingAddress.line2}),s.jsx("div",{className:"mb-1",children:e==null?void 0:e.shippingAddress.line3}),s.jsx("div",{children:e==null?void 0:e.shippingAddress.line4})]}),s.jsx("hr",{className:"my-5"}),s.jsx("h6",{className:"mb-4",children:"Billing address"}),s.jsxs("address",{className:"not-italic",children:[s.jsx("div",{className:"mb-1",children:e==null?void 0:e.billingAddress.line1}),s.jsx("div",{className:"mb-1",children:e==null?void 0:e.billingAddress.line2}),s.jsx("div",{className:"mb-1",children:e==null?void 0:e.billingAddress.line3}),s.jsx("div",{children:e==null?void 0:e.billingAddress.line4})]})]}),S={0:{label:"Paid",class:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100"},1:{label:"Unpaid",class:"text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-500/20"}},T={0:{label:"Fulfilled",class:"bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100"},1:{label:"Unfulfilled",class:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20"}},es=()=>{const e=k(),[l,i]=o.useState(!0),[r,n]=o.useState({});o.useEffect(()=>{M()},[]);const M=async()=>{const p=e.pathname.substring(e.pathname.lastIndexOf("/")+1);if(p){i(!0);const j=await V({id:p});j&&(i(!1),n(j.data))}};return s.jsxs(P,{className:"h-full",children:[s.jsx(w,{loading:l,children:!b(r)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsxs("h3",{children:[s.jsx("span",{children:"Order"}),s.jsxs("span",{className:"ltr:ml-2 rtl:mr-2",children:["#",r.id]})]}),s.jsx(u,{className:t("border-0 rounded-md ltr:ml-2 rtl:mr-2",S[r.payementStatus||0].class),children:S[r.payementStatus||0].label}),s.jsx(u,{className:t("border-0 rounded-md ltr:ml-2 rtl:mr-2",T[r.progressStatus||0].class),children:T[r.progressStatus||0].label})]}),s.jsxs("span",{className:"flex items-center",children:[s.jsx(z,{className:"text-lg"}),s.jsx("span",{className:"ltr:ml-1 rtl:mr-1",children:x.unix(r.dateTime||0).format("ddd DD-MMM-YYYY, hh:mm A")})]})]}),s.jsxs("div",{className:"xl:flex gap-4",children:[s.jsxs("div",{className:"w-full",children:[s.jsx(W,{data:r.product}),s.jsxs("div",{className:"xl:grid grid-cols-2 gap-4",children:[s.jsx(Z,{data:r.shipping}),s.jsx(X,{data:r.paymentSummary})]}),s.jsx(_,{data:r.activity})]}),s.jsx("div",{className:"xl:max-w-[360px] w-full",children:s.jsx(ss,{data:r.customer})})]})]})}),!l&&b(r)&&s.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[s.jsx(F,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No order found!"}),s.jsx("h3",{className:"mt-8",children:"No order found!"})]})]})},Ms=es;export{Ms as default};
