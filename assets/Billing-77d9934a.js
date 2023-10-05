import{j as e,p as $,r as M,c as v}from"./index-3b75abce.js";import{T as z}from"./Tag-06e42a81.js";import{B as j}from"./Button-aa548732.js";import{t as _,N as J}from"./toast-0c52027e.js";import{F as B,a as g}from"./FormItem-e74ad77d.js";import{D as O}from"./Dialog-908cc387.js";import{F as H}from"./FormDesription-477af013.js";import{F as w}from"./FormRow-3b199d62.js";import{I as W}from"./Input-5296713b.js";import{T as L}from"./Tooltip-d837fb36.js";import{C as G}from"./index-c6e7df82.js";import{h as K}from"./index-ad25f2a6.js";import{F as q,a as P,b as f}from"./formik.esm-18b59c85.js";import{a_ as Q,V as X,ah as Z,_ as ee}from"./index.esm-93048f5c.js";import{F as D,a as re}from"./FormPatternInput-7cfa49e9.js";import{c as te,a as T,f as se}from"./index.esm-4ebd7616.js";import{T as Y}from"./index-3a8e913d.js";import{B as ae}from"./Badge-066e767d.js";import{c as ie,u as oe,f as V,g as ne}from"./index-6f1ae4a2.js";import{N as de}from"./react-number-format.es-1729d857.js";import{i as S}from"./isLastChild-83eb4c23.js";import{f as le}from"./AccountServices-cdc03f5e.js";import"./useTimeout-c5d76f6b.js";import"./CloseButton-fa51e0e0.js";import"./StatusIcon-31729652.js";import"./chainedFunction-070f832c.js";import"./Views-6fb03b81.js";import"./index-45df90b8.js";import"./index-38427021.js";import"./isNil-c598595d.js";import"./get-e1e547eb.js";import"./toString-0e65f0bb.js";import"./_MapCache-e81eccfb.js";import"./usePopper-a53aa304.js";import"./index.esm-ee280f6e.js";import"./cloneDeep-ab0a474e.js";import"./_getPrototype-dba6d9d5.js";import"./_baseIsEqual-7db55527.js";import"./useControllableState-9304705b.js";import"./useDidUpdate-16764a11.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-b763db89.js";import"./useUncertainRef-a63c0b8a.js";import"./useUniqueId-c6f2310d.js";import"./index.esm-48f23c6d.js";const{useUniqueId:me}=K,ce=te().shape({cardHolderName:T().required("Card holder name required"),ccNumber:T().required("Credit card number required").matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,"Invalid credit card number"),cardExpiry:T().required("Card holder name required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,"Invalid Date"),code:T().required().matches(/^[0-9]{3}$/,"Invalid CVV"),primary:se()});function R(r,s){return r.length===1&&r[0]>s[0]&&(r="0"+r),r.length===2&&(Number(r)===0?r="01":r>s&&(r=s)),r}function pe(r){const s=R(r.substring(0,2),"12"),u=R(r.substring(2,4),"31");return s+(u.length?"/"+u:"")}const xe=({card:r,type:s,onUpdate:u})=>{const x=me("cc-"),d=p=>{const{cardHolderName:l,ccNumber:m,cardExpiry:a,primary:h}=p;if(r){const{cardType:E,cardId:F}=r;let t={cardId:"",cardType:"",last4Number:m.substr(m.length-4),expYear:a.substr(a.length-2),expMonth:a.substring(0,2),cardHolderName:l,primary:h};s==="EDIT"&&(t={...t,cardId:F,cardType:E}),s==="NEW"&&(t={...t,cardId:x,cardType:"VISA"}),console.log("updatedCard",t),u(t)}};return e.jsx(q,{initialValues:{cardHolderName:(r==null?void 0:r.cardHolderName)||"",ccNumber:"",cardExpiry:(r==null?void 0:r.expMonth)+(r==null?void 0:r.expYear)||"",code:"",primary:(r==null?void 0:r.primary)||!1},validationSchema:ce,onSubmit:(p,{setSubmitting:l})=>{d(p),l(!1)},children:({touched:p,errors:l})=>e.jsx(P,{children:e.jsxs(B,{children:[e.jsx(g,{label:"Card holder name",invalid:l.cardHolderName&&p.cardHolderName,errorMessage:l.cardHolderName,children:e.jsx(f,{type:"text",autoComplete:"off",name:"cardHolderName",component:W})}),e.jsx(g,{label:"Credit Card Number",invalid:l.ccNumber&&p.ccNumber,errorMessage:l.ccNumber,children:e.jsx(f,{name:"ccNumber",children:({field:m,form:a})=>e.jsx(D,{form:a,field:m,placeholder:"•••• •••• •••• ••••",format:"#### #### #### ####",inputSuffix:e.jsx(Q,{className:"text-lg"}),onValueChange:h=>{a.setFieldValue(m.name,h.value)}})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(g,{label:"Expiration date",invalid:l.cardExpiry&&p.cardExpiry,errorMessage:l.cardExpiry,children:e.jsx(f,{name:"cardExpiry",children:({field:m,form:a})=>e.jsx(re,{form:a,field:m,placeholder:"••/••",inputSuffix:e.jsx(X,{className:"text-lg"}),format:pe,defaultValue:a.values.cardExpiry,onValueChange:h=>{a.setFieldValue(m.name,h.value)}})})}),e.jsx(g,{label:"CVV",invalid:l.code&&p.code,errorMessage:l.code,children:e.jsx(f,{name:"code",children:({field:m,form:a})=>e.jsx(D,{form:a,field:m,placeholder:"•••",format:"###",inputPrefix:e.jsx(L,{title:"The CVV/CVC code is located on the back of your credit/debit card on the right side of the white signature strip",children:e.jsx(Z,{className:"cursor-pointer text-lg"})}),onValueChange:h=>{a.setFieldValue(m.name,h.value)}})})})]}),e.jsx(g,{children:e.jsx(f,{name:"primary",component:G,children:"Set this card as primary"})}),e.jsx(g,{className:"mb-0 text-right",children:e.jsx(j,{block:!0,variant:"solid",type:"submit",children:"Update"})})]})})})},{Tr:A,Th:he,Td:ue,THead:ge,TBody:je}=Y,fe={paid:"bg-emerald-500",pending:"bg-amber-400"},y=ie(),be=[y.accessor("id",{header:"Reference",cell:r=>{const s=r.row.original;return e.jsx("div",{children:e.jsx("span",{className:"cursor-pointer",children:s.id})})}}),y.accessor("item",{header:"Product"}),y.accessor("status",{header:"Status",cell:r=>{const s=r.row.original;return e.jsxs("div",{className:"flex items-center",children:[e.jsx(ae,{className:fe[s.status]}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:s.status})]})}}),y.accessor("date",{header:"Date",cell:r=>{const s=r.row.original;return e.jsx("div",{className:"flex items-center",children:$.unix(s.date).format("MM/DD/YYYY")})}}),y.accessor("amount",{header:"Amount",cell:r=>{const s=r.row.original;return e.jsx("div",{className:"flex items-center",children:e.jsx(de,{displayType:"text",value:(Math.round(s.amount*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})}})],ye=({data:r=[],...s})=>{const u=oe({data:r,columns:be,getCoreRowModel:ne()});return e.jsx("div",{...s,children:e.jsxs(Y,{children:[e.jsx(ge,{className:"!bg-transparent",children:u.getHeaderGroups().map(x=>e.jsx(A,{children:x.headers.map(d=>e.jsx(he,{colSpan:d.colSpan,children:V(d.column.columnDef.header,d.getContext())},d.id))},x.id))}),e.jsx(je,{children:u.getRowModel().rows.map(x=>e.jsx(A,{children:x.getVisibleCells().map(d=>e.jsx(ue,{children:V(d.column.columnDef.cell,d.getContext())},d.id))},x.id))})]})})},Ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xr=()=>{const[r,s]=M.useState({paymentMethods:[],otherMethod:[],billingHistory:[]}),[u,x]=M.useState({}),[d,p]=M.useState(""),l=async()=>{const t=await le();s(t.data)},m=(t,o)=>{_.push(e.jsx(J,{title:"Billing information updated",type:"success"}),{placement:"top-center"}),o(!1)},a=()=>{p(""),x({})},h=(t,o)=>{p(o),x(t)},E=(t,o,N)=>{let c=o.values[N.name];t.primary&&c.forEach(n=>{n.primary=!1}),c.some(n=>n.cardId===t.cardId)||c.push(t),c=c.map(n=>(n.cardId===t.cardId&&(n={...n,...t}),n));let C={};c=c.filter(n=>(n.primary&&(C=n),!n.primary)),c=[C,...c],o.setFieldValue(N.name,c),a()},F=t=>{const o=window.open(t,"_blank");o==null||o.focus()};return M.useEffect(()=>{l()},[]),e.jsx(q,{enableReinitialize:!0,initialValues:r,onSubmit:(t,{setSubmitting:o})=>{o(!0),setTimeout(()=>{m(t,o)},1e3)},children:({values:t,touched:o,errors:N,isSubmitting:c,resetForm:C})=>{var I,k;const n={touched:o,errors:N};return e.jsx(P,{children:e.jsxs(B,{children:[e.jsx(H,{title:"Payment Method",desc:"You can update your cards information here"}),e.jsxs(w,{name:"paymentMethods",alignCenter:!1,label:"Credit Cards",...n,children:[e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:(I=t==null?void 0:t.paymentMethods)==null?void 0:I.map((i,b)=>e.jsxs("div",{className:v("flex items-center justify-between p-4",!S(t.paymentMethods,b)&&"border-b border-gray-200 dark:border-gray-600"),children:[e.jsxs("div",{className:"flex items-center",children:[i.cardType==="VISA"&&e.jsx("img",{src:"/img/others/img-8.png",alt:"visa"}),i.cardType==="MASTER"&&e.jsx("img",{src:"/img/others/img-9.png",alt:"master"}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:[i.cardHolderName," ","••••"," ",i.last4Number]}),i.primary&&e.jsx(z,{className:"bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Primary"," "]})})]}),e.jsxs("span",{children:["Expired"," ",Ne[parseInt(i.expMonth)-1]," ","20",i.expYear]})]})]}),e.jsx("div",{className:"flex",children:e.jsx(j,{size:"sm",type:"button",onClick:()=>h(i,"EDIT"),children:"Edit"})})]},i.cardId))}),e.jsx("div",{className:"mt-2",children:e.jsx(j,{type:"button",variant:"plain",size:"sm",icon:e.jsx(ee,{className:"text-lg"}),onClick:()=>h({},"NEW"),children:e.jsx("span",{className:"font-semibold",children:"Add new card"})})})]}),e.jsx(w,{border:!1,name:"otherMethod",alignCenter:!1,label:"Other payment methods",...n,children:e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:(k=t==null?void 0:t.otherMethod)==null?void 0:k.map((i,b)=>e.jsxs("div",{className:v("flex items-center justify-between p-4",!S(t.otherMethod,b)&&"border-b border-gray-200 dark:border-gray-600"),children:[e.jsxs("div",{className:"flex items-center",children:[i.type==="PAYPAL"&&e.jsx("img",{src:"/img/others/img-10.png",alt:"visa"}),e.jsx("div",{className:"ml-3 rtl:mr-3 font-semibold",children:i.identifier})]}),e.jsx("div",{className:"flex",children:e.jsx(j,{size:"sm",type:"button",onClick:()=>F(i.redirect),children:"Edit"})})]},i.id))})}),e.jsxs(O,{isOpen:d==="NEW"||d==="EDIT",onClose:a,onRequestClose:a,children:[e.jsx("h5",{className:"mb-4",children:"Edit Credit Card"}),e.jsx(f,{name:"paymentMethods",children:({field:i,form:b})=>e.jsx(xe,{type:d,card:u,onUpdate:U=>E(U,b,i)})})]}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(j,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>C(),children:"Reset"}),e.jsx(j,{variant:"solid",loading:c,type:"submit",children:c?"Updating":"Update"})]}),e.jsx(H,{className:"mt-6",title:"Billing History",desc:"View your previos billing"}),e.jsx(ye,{className:"mt-4 rounded-lg border border-gray-200 dark:border-gray-600",data:r.billingHistory})]})})}})};export{xr as default};
