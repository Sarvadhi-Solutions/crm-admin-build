import{am as P,an as ee,ao as te,ap as se,a as f,r as h,j as e,p as S,aq as ae,c as re,ar as oe,at as ie,ai as le}from"./index-4bd6b7b3.js";import{A as ne}from"./AdaptableCard-4c3d12d7.js";import{C as ce,i as F}from"./Views-d9a5bf10.js";import{D as me}from"./DoubleSidedImage-d3ba7318.js";import{C as Y}from"./Card-526fc8df.js";import{A as z}from"./index-875ce0f2.js";import{B as p}from"./Button-39d85f08.js";import{t as de,N as pe}from"./toast-88ff7e3e.js";import{C as O}from"./ConfirmDialog-5a804371.js";import{F as ue,a as xe,b as he,c as ge}from"./index.esm-9d1f44b1.js";import{X as fe,aa as V,ab as je}from"./index.esm-0cdca32a.js";import{l as Ce,m as De,n as ye}from"./CrmService-6ced694a.js";import{D as be}from"./Drawer-71237173.js";import{C as Ne}from"./CustomerForm-dd2141c7.js";import{c as w}from"./cloneDeep-9b3959e9.js";import{T as q}from"./index-2d18d6c2.js";import{B as ve}from"./Badge-80e10abc.js";import{c as Me,u as Pe,f as E,g as Se,a as we}from"./index-030d990e.js";import{N as $}from"./react-number-format.es-61c35378.js";import{T as B}from"./Tag-bcb5cf48.js";import{I as ke}from"./Input-1462fe73.js";import{D as Fe}from"./Dialog-974a1028.js";import{F as Ee,a as j}from"./FormItem-e2a22149.js";import{F as Ie,a as He,b as y}from"./formik.esm-a048d78e.js";import{F as Te}from"./FormCustomFormatInput-ef3a12f2.js";import{F as I}from"./FormPatternInput-ed9fe7df.js";import{c as Re,a as b}from"./index.esm-3518a165.js";import{i as Ae}from"./isLastChild-83eb4c23.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./context-a8cf3940.js";import"./useTimeout-f676b9da.js";import"./CloseButton-6e2e0ec5.js";import"./StatusIcon-8490d43a.js";import"./chainedFunction-070f832c.js";import"./index-8b930c29.js";import"./index-00b89123.js";import"./useControllableState-259714d7.js";import"./AdditionalTag-1f0b69bf.js";import"./Alert-7657f3d7.js";import"./Calendar-c92b9cfd.js";import"./index-e9ce1b4a.js";import"./_Uint8Array-04aa9e28.js";import"./_MapCache-9c7f01dc.js";import"./_baseIsEqual-a094f75a.js";import"./get-2d6f452a.js";import"./toString-a7228545.js";import"./index-20aa5a1a.js";import"./useRootClose-5ed82cf8.js";import"./RangeCalendar-0a16d493.js";import"./TimeInput-05c24087.js";import"./useUniqueId-a782b7b3.js";import"./useDidUpdate-f7d2ff2b.js";import"./index-10374e44.js";import"./useUncertainRef-4756ae3b.js";import"./isNil-ae028dac.js";import"./index-5ed9ba61.js";import"./index-f24b5e4f.js";import"./index-6ca15321.js";import"./Pagination-22ec60b1.js";import"./Progress-4167b7c4.js";import"./index-b212dc1a.js";import"./ScrollBar-c9c4e4cf.js";import"./index-5de84849.js";import"./Select-938bf375.js";import"./slicedToArray-e2770cb7.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-3723ed4f.js";import"./floating-ui.dom-bef9cea3.js";import"./Skeleton-e8e73738.js";import"./index-6080bacd.js";import"./mapCloneElement-bf192649.js";import"./Switcher-83573e00.js";import"./index-b945cf70.js";import"./index-f4634923.js";import"./Upload-a4e0db34.js";import"./index.esm-4ed14753.js";import"./index.esm-54d5fc4e.js";import"./index.esm-24d8aaa0.js";/* empty css              */import"./_getPrototype-715b1198.js";const N="crmCustomerDetails",M=P(N+"/getCustomer",async t=>(await Ce(t)).data),Ye=P(N+"/deleteCustomer",async t=>(await De(t)).data),ze=P(N+"/putCustomer",async t=>(await ye(t)).data),Oe={loading:!0,profileData:{},subscriptionData:[],paymentHistoryData:[],paymentMethodData:[],deletePaymentMethodDialog:!1,editPaymentMethodDialog:!1,editCustomerDetailDialog:!1,selectedCard:{}},L=ee({name:`${N}/state`,initialState:Oe,reducers:{updatePaymentMethodData:(t,s)=>{t.paymentMethodData=s.payload},updateProfileData:(t,s)=>{t.profileData=s.payload},openDeletePaymentMethodDialog:t=>{t.deletePaymentMethodDialog=!0},closeDeletePaymentMethodDialog:t=>{t.deletePaymentMethodDialog=!1},openEditPaymentMethodDialog:t=>{t.editPaymentMethodDialog=!0},closeEditPaymentMethodDialog:t=>{t.editPaymentMethodDialog=!1},openEditCustomerDetailDialog:t=>{t.editCustomerDetailDialog=!0},closeEditCustomerDetailDialog:t=>{t.editCustomerDetailDialog=!1},updateSelectedCard:(t,s)=>{t.selectedCard=s.payload}},extraReducers:t=>{t.addCase(M.fulfilled,(s,i)=>{var l,a,r;s.loading=!1,s.profileData=i.payload,s.subscriptionData=((l=i.payload)==null?void 0:l.subscription)||[],s.paymentHistoryData=((a=i.payload)==null?void 0:a.orderHistory)||[],s.paymentMethodData=((r=i.payload)==null?void 0:r.paymentMethod)||[]}).addCase(M.pending,s=>{s.loading=!0})}}),{updatePaymentMethodData:J,updateProfileData:Ve,openDeletePaymentMethodDialog:qe,closeDeletePaymentMethodDialog:H,openEditPaymentMethodDialog:$e,closeEditPaymentMethodDialog:Be,openEditCustomerDetailDialog:Le,closeEditCustomerDetailDialog:Je,updateSelectedCard:T}=L.actions,Ue=L.reducer,Ge=te({data:Ue}),d=se,Qe=({onSaveClick:t,onCancel:s})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(p,{size:"sm",className:"mr-2",onClick:s,children:"Cancel"}),e.jsx(p,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),Xe=()=>{const t=f(),s=h.useRef(null),i=d(o=>o.crmCustomerDetails.data.editCustomerDetailDialog),l=d(o=>o.crmCustomerDetails.data.profileData),a=()=>{t(Je())},r=()=>{var o;(o=s.current)==null||o.submitForm()},c=o=>{const n=w(l),{name:u,birthday:m,email:x,img:v,location:g,title:U,phoneNumber:G,facebook:Q,twitter:X,pinterest:_,linkedIn:K}=o,W={name:u,email:x,img:v},Z={location:g,title:U,birthday:S(m).format("DD/MM/YYYY"),phoneNumber:G,facebook:Q,twitter:X,pinterest:_,linkedIn:K};n.personalInfo={...n.personalInfo,...Z};const k={...n,...W};t(Ve(k)),t(ze(k)),a()};return e.jsx(be,{isOpen:i,closable:!1,bodyClass:"p-0",footer:e.jsx(Qe,{onCancel:a,onSaveClick:r}),onClose:a,onRequestClose:a,children:e.jsx(Ne,{ref:s,customer:l,onFormSubmit:c})})},C=({title:t,value:s})=>e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:s})]}),_e=({id:t})=>{const s=f(),[i,l]=h.useState(!1),a=ae(),r=()=>{l(!1)},c=()=>{l(!0)},o=()=>{l(!1),t&&s(Ye({id:t})),a("/app/crm/customers"),de.push(e.jsx(pe,{title:"Successfuly Deleted",type:"success",children:"Customer successfuly deleted"}))},n=()=>{s(Le())};return e.jsxs(e.Fragment,{children:[e.jsx(p,{block:!0,icon:e.jsx(fe,{}),onClick:c,children:"Delete"}),e.jsx(p,{block:!0,icon:e.jsx(V,{}),variant:"solid",onClick:n,children:"Edit"}),e.jsx(O,{isOpen:i,type:"danger",title:"Delete customer",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:o,children:e.jsx("p",{children:"Are you sure you want to delete this customer? All record related to this customer will be deleted as well. This action cannot be undone."})}),e.jsx(Xe,{})]})},Ke=({data:t={}})=>{var s,i,l,a;return e.jsx(Y,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsxs("div",{className:"flex xl:flex-col items-center gap-4",children:[e.jsx(z,{size:90,shape:"circle",src:t.img}),e.jsx("h4",{className:"font-bold",children:t.name})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[e.jsx(C,{title:"Email",value:t.email}),e.jsx(C,{title:"Phone",value:(s=t.personalInfo)==null?void 0:s.phoneNumber}),e.jsx(C,{title:"Location",value:(i=t.personalInfo)==null?void 0:i.location}),e.jsx(C,{title:"Date of birth",value:(l=t.personalInfo)==null?void 0:l.birthday}),e.jsx(C,{title:"Title",value:(a=t.personalInfo)==null?void 0:a.title}),e.jsxs("div",{className:"mb-7",children:[e.jsx("span",{children:"Social"}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx(p,{className:"mr-2",shape:"circle",size:"sm",icon:e.jsx(ue,{className:"text-[#1773ea]"})}),e.jsx(p,{className:"mr-2",shape:"circle",size:"sm",icon:e.jsx(xe,{className:"text-[#1da1f3]"})}),e.jsx(p,{className:"mr-2",shape:"circle",size:"sm",icon:e.jsx(he,{className:"text-[#0077b5]"})}),e.jsx(p,{className:"mr-2",shape:"circle",size:"sm",icon:e.jsx(ge,{className:"text-[#df0018]"})})]})]})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(_e,{id:t.id})})]})})},{Tr:R,Th:We,Td:Ze,THead:et,TBody:tt,Sorter:st}=q,at={paid:"bg-emerald-500",pending:"bg-amber-400"},D=Me(),rt=[D.accessor("id",{header:"Reference",cell:t=>{const s=t.row.original;return e.jsx("div",{children:e.jsx("span",{className:"cursor-pointer",children:s.id})})}}),D.accessor("item",{header:"Product"}),D.accessor("status",{header:"Status",cell:t=>{const s=t.row.original;return e.jsxs("div",{className:"flex items-center",children:[e.jsx(ve,{className:at[s.status]}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:s.status})]})}}),D.accessor("date",{header:"Date",cell:t=>{const s=t.row.original;return e.jsx("div",{className:"flex items-center",children:S.unix(s.date).format("MM/DD/YYYY")})}}),D.accessor("amount",{header:"Amount",cell:t=>{const s=t.row.original;return e.jsx("div",{className:"flex items-center",children:e.jsx($,{displayType:"text",value:(Math.round(s.amount*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})}})],ot=()=>{const t=d(a=>a.crmCustomerDetails.data.paymentHistoryData),[s,i]=h.useState([]),l=Pe({data:t,columns:rt,state:{sorting:s},onSortingChange:i,getCoreRowModel:Se(),getSortedRowModel:we()});return e.jsxs("div",{className:"mb-8",children:[e.jsx("h6",{className:"mb-4",children:"Payment History"}),e.jsxs(q,{children:[e.jsx(et,{children:l.getHeaderGroups().map(a=>e.jsx(R,{children:a.headers.map(r=>e.jsx(We,{colSpan:r.colSpan,children:r.isPlaceholder?null:e.jsxs("div",{className:r.column.getCanSort()?"cursor-pointer select-none":"",onClick:r.column.getToggleSortingHandler(),children:[E(r.column.columnDef.header,r.getContext()),e.jsx(st,{sort:r.column.getIsSorted()})]})},r.id))},a.id))}),e.jsx(tt,{children:l.getRowModel().rows.slice(0,10).map(a=>e.jsx(R,{children:a.getVisibleCells().map(r=>e.jsx(Ze,{children:E(r.column.columnDef.cell,r.getContext())},r.id))},a.id))})]})]})},it=()=>{const[t,s]=h.useState(!0),i=d(r=>r.crmCustomerDetails.data.subscriptionData),l=h.useCallback(()=>{s(!1)},[]),a=h.useCallback(()=>{s(!0)},[]);return e.jsxs("div",{className:"mb-8",children:[e.jsx("h6",{className:"mb-4",children:"Subscription"}),i.map(r=>e.jsx(Y,{bordered:!0,className:"mb-4",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{children:e.jsx(z,{className:"bg-emerald-500",shape:"circle",icon:e.jsx(je,{})})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{children:r.plan}),e.jsx(B,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2",children:e.jsx("span",{className:"capitalize",children:r.status})})]}),e.jsxs("div",{children:[e.jsxs("span",{children:["Billing ",r.billing]}),e.jsx("span",{children:" | "}),e.jsxs("span",{children:["Next payment on"," ",S.unix(r.nextPaymentDate).format("MM/DD/YYYY")]}),e.jsxs("span",{children:[e.jsx("span",{className:"mx-1",children:"for"}),e.jsx($,{className:"font-semibold text-gray-900 dark:text-gray-100",displayType:"text",value:(Math.round(r.amount*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})]})]})]})]}),e.jsxs("div",{className:"flex",children:[t&&e.jsx(p,{size:"sm",variant:"plain",onClick:l,children:"Cancel plan"}),e.jsxs(p,{size:"sm",className:"ml-2 rtl:mr-2",onClick:a,children:[t?"Update":"Subscribe"," Plan"]})]})]})},r.plan))]})},lt=Re().shape({cardHolderName:b().required("Card holder name required"),ccNumber:b().required("Credit card number required").matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,"Invalid credit card number"),cardExpiry:b().required("Card holder name required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,"Invalid Date"),code:b().required().matches(/^[0-9]{3}$/,"Invalid CVV")});function A(t,s){return t.length===1&&t[0]>s[0]&&(t="0"+t),t.length===2&&(Number(t)===0?t="01":t>s&&(t=s)),t}function nt(t){const s=A(t.substring(0,2),"12"),i=A(t.substring(2,4),"31");return s+(i.length?"/"+i:"")}const ct=()=>{const t=f(),s=d(o=>o.crmCustomerDetails.data.selectedCard),i=d(o=>o.crmCustomerDetails.data.paymentMethodData),l=d(o=>o.crmCustomerDetails.data.editPaymentMethodDialog),a=d(o=>o.crmCustomerDetails.data.selectedCard),r=o=>{let n=w(i)||[];const{cardHolderName:u,ccNumber:m,cardExpiry:x}=o,v={cardHolderName:u,last4Number:m.substr(m.length-4),expYear:x.substr(x.length-2),expMonth:x.substring(0,2)};n=n.map(g=>(g.last4Number===a.last4Number&&(g={...g,...v}),g)),c(),t(J(n))},c=()=>{t(Be())};return e.jsxs(Fe,{isOpen:l,onClose:c,onRequestClose:c,children:[e.jsx("h4",{children:"Edit Credit Card"}),e.jsx("div",{className:"mt-6",children:e.jsx(Ie,{initialValues:{cardHolderName:s.cardHolderName||"",ccNumber:"",cardExpiry:(s==null?void 0:s.expMonth)+s.expYear||"",code:""},validationSchema:lt,onSubmit:(o,{setSubmitting:n})=>{r(o),n(!1)},children:({touched:o,errors:n})=>e.jsx(He,{children:e.jsxs(Ee,{children:[e.jsx(j,{label:"Card holder name",invalid:n.cardHolderName&&o.cardHolderName,errorMessage:n.cardHolderName,children:e.jsx(y,{type:"text",autoComplete:"off",name:"cardHolderName",component:ke})}),e.jsx(j,{label:"Credit Card Number",invalid:n.ccNumber&&o.ccNumber,errorMessage:n.ccNumber,children:e.jsx(y,{name:"ccNumber",children:({field:u,form:m})=>e.jsx(I,{form:m,field:u,placeholder:"•••• •••• •••• ••••",format:"#### #### #### ####",onValueChange:x=>{m.setFieldValue(u.name,x.value)}})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(j,{label:"Expiration date",invalid:n.cardExpiry&&o.cardExpiry,errorMessage:n.cardExpiry,children:e.jsx(y,{name:"cardExpiry",children:({field:u,form:m})=>e.jsx(Te,{form:m,field:u,placeholder:"••/••",format:nt,defaultValue:m.values.cardExpiry,onValueChange:x=>{m.setFieldValue(u.name,x.value)}})})}),e.jsx(j,{label:"CVV",invalid:n.code&&o.code,errorMessage:n.code,children:e.jsx(y,{name:"code",children:({field:u,form:m})=>e.jsx(I,{form:m,field:u,placeholder:"•••",format:"###",onValueChange:x=>{m.setFieldValue(u.name,x.value)}})})})]}),e.jsx(j,{className:"mb-0 text-right",children:e.jsx(p,{block:!0,variant:"solid",type:"submit",children:"Update"})})]})})})})]})},mt=()=>{const t=f(),s=d(c=>c.crmCustomerDetails.data.paymentMethodData),i=d(c=>c.crmCustomerDetails.data.deletePaymentMethodDialog),l=d(c=>c.crmCustomerDetails.data.selectedCard),a=()=>{let c=w(s)||[];c=c.filter(o=>o.last4Number!==l.last4Number),t(H()),t(J(c))},r=()=>{t(H())};return e.jsx(O,{isOpen:i,type:"danger",title:"Remove payment method",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:a,children:e.jsx("p",{children:" Are you sure you want to remove this payment method? "})})},dt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pt=()=>{const t=f(),s=d(a=>a.crmCustomerDetails.data.paymentMethodData),i=a=>{t(T(a)),t($e())},l=a=>{t(T(a)),t(qe())};return e.jsxs(e.Fragment,{children:[s.length>0&&e.jsxs("div",{children:[e.jsx("h6",{className:"mb-4",children:"Payment Methods"}),e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:s.map((a,r)=>e.jsxs("div",{className:re("flex flex-col lg:flex-row lg:items-center justify-between gap-3 p-4",!Ae(s,r)&&"border-b border-gray-200 dark:border-gray-600"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[a.cardType==="VISA"&&e.jsx("img",{src:"/img/others/img-8.png",alt:"visa"}),a.cardType==="MASTER"&&e.jsx("img",{src:"/img/others/img-9.png",alt:"master"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:[a.cardHolderName," ••••"," ",a.last4Number]}),a.primary&&e.jsx(B,{className:"bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Primary"," "]})})]}),e.jsxs("span",{children:["Expired"," ",dt[parseInt(a.expMonth)-1]," ","20",a.expYear]})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx(p,{className:"mr-2 rtl:ml-2",variant:"plain",size:"sm",onClick:()=>l(a),children:"Delete"}),e.jsx(p,{icon:e.jsx(V,{}),size:"sm",onClick:()=>i(a),children:"Edit"})]})]},a.last4Number))})]}),e.jsx(ct,{}),e.jsx(mt,{})]})};oe("crmCustomerDetails",Ge);const ut=()=>{const t=f(),s=ie(),i=d(r=>r.crmCustomerDetails.data.profileData),l=d(r=>r.crmCustomerDetails.data.loading);h.useEffect(()=>{a()},[]);const a=()=>{const r=s.get("id");r&&t(M({id:r}))};return e.jsxs(ce,{className:"h-full",children:[e.jsx(le,{loading:l,children:!F(i)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(Ke,{data:i})}),e.jsx("div",{className:"w-full",children:e.jsxs(ne,{children:[e.jsx(it,{}),e.jsx(ot,{}),e.jsx(pt,{})]})})]})}),!l&&F(i)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(me,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})},Us=ut;export{Us as default};
