import{j as e,p as J,r as I,c as w}from"./index-01836369.js";import{T as O}from"./Tag-b2e6ee28.js";import{B as j}from"./Button-a46452f7.js";import{t as W,N as L}from"./toast-923c10a7.js";import{F as Y,a as g}from"./FormItem-8bd92bc5.js";import{D as _}from"./Dialog-4fd81af0.js";import{F as H}from"./FormDesription-36fc2b54.js";import{F as D}from"./FormRow-4b090125.js";import{I as v}from"./Input-de9bab6e.js";import{T as G}from"./Tooltip-2ee5bf6e.js";import{C as Z}from"./index-d8fc78ac.js";import{h as K}from"./index-8f86eb06.js";import{F as q,a as $,b}from"./formik.esm-0b8089c1.js";import{aZ as Q,T as X,Y as ee,ad as re}from"./index.esm-64f3e5ec.js";import{a as te,P as se,N as ae}from"./react-number-format.es-8b750faf.js";import{c as ie,a as F,f as ne}from"./index.esm-e4a4a14e.js";import{T as U}from"./index-9a90023d.js";import{B as oe}from"./Badge-a322da11.js";import{h as le,u as de,f as S,g as me}from"./index-cf0b9425.js";import{i as B}from"./isLastChild-83eb4c23.js";import{f as ce}from"./AccountServices-9dad5e53.js";import"./useTimeout-4c6d789e.js";import"./CloseButton-d0908078.js";import"./StatusIcon-3d3af75a.js";import"./chainedFunction-070f832c.js";import"./Views-e7196e20.js";import"./index-7edeacc6.js";import"./index-683fb0e7.js";import"./isNil-558c9391.js";import"./get-a00c8c4f.js";import"./toString-dfdb4974.js";import"./_MapCache-cb5691fa.js";import"./usePopper-7484d105.js";import"./index.esm-336981ff.js";import"./cloneDeep-2911bc06.js";import"./_getPrototype-66b22aa1.js";import"./_baseIsEqual-f710d97d.js";import"./useControllableState-1186edc6.js";import"./useDidUpdate-24f30fc5.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-4147e0bc.js";import"./useUncertainRef-f37cb99b.js";import"./useUniqueId-99a7922f.js";import"./index.esm-a7f707ee.js";function V(r){return!!(r||"").match(/\d/)}function pe(r){const t=Array.from({length:r.length+1}).map(()=>!0);for(let s=0,i=t.length;s<i;s++)t[s]=!!(V(r[s])||V(r[s-1]));return t}function ue(r){return r.replace(/[^0-9]/g,"")}const xe=({inputSuffix:r,inputPrefix:t,...s})=>e.jsx(v,{...s,value:s.value,suffix:r,prefix:t}),he=({onValueChange:r,form:t,field:s,...i})=>e.jsx(te,{customInput:xe,form:t,field:s,onBlur:s==null?void 0:s.onBlur,onValueChange:r,...i}),ge=({form:r,field:t,inputSuffix:s,inputPrefix:i,onValueChange:o,format:m=h=>h,getCaretBoundary:l=pe,removeFormatting:c=ue,...n})=>e.jsx(he,{form:r,field:t,inputPrefix:i,inputSuffix:s,format:m,getCaretBoundary:l,removeFormatting:c,onValueChange:o,...n}),je=({inputSuffix:r,inputPrefix:t,...s})=>e.jsx(v,{...s,value:s.value,suffix:r,prefix:t}),be=({onValueChange:r,form:t,field:s,...i})=>e.jsx(se,{customInput:je,form:t,field:s,onBlur:s==null?void 0:s.onBlur,onValueChange:r,...i}),R=({form:r,field:t,inputSuffix:s,inputPrefix:i,onValueChange:o,...m})=>e.jsx(be,{form:r,field:t,inputPrefix:i,inputSuffix:s,onValueChange:o,...m}),{useUniqueId:fe}=K,ye=ie().shape({cardHolderName:F().required("Card holder name required"),ccNumber:F().required("Credit card number required").matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,"Invalid credit card number"),cardExpiry:F().required("Card holder name required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,"Invalid Date"),code:F().required().matches(/^[0-9]{3}$/,"Invalid CVV"),primary:ne()});function A(r,t){return r.length===1&&r[0]>t[0]&&(r="0"+r),r.length===2&&(Number(r)===0?r="01":r>t&&(r=t)),r}function Ne(r){const t=A(r.substring(0,2),"12"),s=A(r.substring(2,4),"31");return t+(s.length?"/"+s:"")}const Ce=({card:r,type:t,onUpdate:s})=>{const i=fe("cc-"),o=m=>{const{cardHolderName:l,ccNumber:c,cardExpiry:n,primary:h}=m;if(r){const{cardType:T,cardId:M}=r;let a={cardId:"",cardType:"",last4Number:c.substr(c.length-4),expYear:n.substr(n.length-2),expMonth:n.substring(0,2),cardHolderName:l,primary:h};t==="EDIT"&&(a={...a,cardId:M,cardType:T}),t==="NEW"&&(a={...a,cardId:i,cardType:"VISA"}),console.log("updatedCard",a),s(a)}};return e.jsx(q,{initialValues:{cardHolderName:(r==null?void 0:r.cardHolderName)||"",ccNumber:"",cardExpiry:(r==null?void 0:r.expMonth)+(r==null?void 0:r.expYear)||"",code:"",primary:(r==null?void 0:r.primary)||!1},validationSchema:ye,onSubmit:(m,{setSubmitting:l})=>{o(m),l(!1)},children:({touched:m,errors:l})=>e.jsx($,{children:e.jsxs(Y,{children:[e.jsx(g,{label:"Card holder name",invalid:l.cardHolderName&&m.cardHolderName,errorMessage:l.cardHolderName,children:e.jsx(b,{type:"text",autoComplete:"off",name:"cardHolderName",component:v})}),e.jsx(g,{label:"Credit Card Number",invalid:l.ccNumber&&m.ccNumber,errorMessage:l.ccNumber,children:e.jsx(b,{name:"ccNumber",children:({field:c,form:n})=>e.jsx(R,{form:n,field:c,placeholder:"•••• •••• •••• ••••",format:"#### #### #### ####",inputSuffix:e.jsx(Q,{className:"text-lg"}),onValueChange:h=>{n.setFieldValue(c.name,h.value)}})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(g,{label:"Expiration date",invalid:l.cardExpiry&&m.cardExpiry,errorMessage:l.cardExpiry,children:e.jsx(b,{name:"cardExpiry",children:({field:c,form:n})=>e.jsx(ge,{form:n,field:c,placeholder:"••/••",inputSuffix:e.jsx(X,{className:"text-lg"}),format:Ne,defaultValue:n.values.cardExpiry,onValueChange:h=>{n.setFieldValue(c.name,h.value)}})})}),e.jsx(g,{label:"CVV",invalid:l.code&&m.code,errorMessage:l.code,children:e.jsx(b,{name:"code",children:({field:c,form:n})=>e.jsx(R,{form:n,field:c,placeholder:"•••",format:"###",inputPrefix:e.jsx(G,{title:"The CVV/CVC code is located on the back of your credit/debit card on the right side of the white signature strip",children:e.jsx(ee,{className:"cursor-pointer text-lg"})}),onValueChange:h=>{n.setFieldValue(c.name,h.value)}})})})]}),e.jsx(g,{children:e.jsx(b,{name:"primary",component:Z,children:"Set this card as primary"})}),e.jsx(g,{className:"mb-0 text-right",children:e.jsx(j,{block:!0,variant:"solid",type:"submit",children:"Update"})})]})})})},{Tr:P,Th:Ie,Td:Fe,THead:Te,TBody:Me}=U,ve={paid:"bg-emerald-500",pending:"bg-amber-400"},y=le(),Ee=[y.accessor("id",{header:"Reference",cell:r=>{const t=r.row.original;return e.jsx("div",{children:e.jsx("span",{className:"cursor-pointer",children:t.id})})}}),y.accessor("item",{header:"Product"}),y.accessor("status",{header:"Status",cell:r=>{const t=r.row.original;return e.jsxs("div",{className:"flex items-center",children:[e.jsx(oe,{className:ve[t.status]}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:t.status})]})}}),y.accessor("date",{header:"Date",cell:r=>{const t=r.row.original;return e.jsx("div",{className:"flex items-center",children:J.unix(t.date).format("MM/DD/YYYY")})}}),y.accessor("amount",{header:"Amount",cell:r=>{const t=r.row.original;return e.jsx("div",{className:"flex items-center",children:e.jsx(ae,{displayType:"text",value:(Math.round(t.amount*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})}})],ke=({data:r=[],...t})=>{const s=de({data:r,columns:Ee,getCoreRowModel:me()});return e.jsx("div",{...t,children:e.jsxs(U,{children:[e.jsx(Te,{className:"!bg-transparent",children:s.getHeaderGroups().map(i=>e.jsx(P,{children:i.headers.map(o=>e.jsx(Ie,{colSpan:o.colSpan,children:S(o.column.columnDef.header,o.getContext())},o.id))},i.id))}),e.jsx(Me,{children:s.getRowModel().rows.map(i=>e.jsx(P,{children:i.getVisibleCells().map(o=>e.jsx(Fe,{children:S(o.column.columnDef.cell,o.getContext())},o.id))},i.id))})]})})},we=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Nr=()=>{const[r,t]=I.useState({paymentMethods:[],otherMethod:[],billingHistory:[]}),[s,i]=I.useState({}),[o,m]=I.useState(""),l=async()=>{const a=await ce();t(a.data)},c=(a,p)=>{W.push(e.jsx(L,{title:"Billing information updated",type:"success"}),{placement:"top-center"}),p(!1)},n=()=>{m(""),i({})},h=(a,p)=>{m(p),i(a)},T=(a,p,N)=>{let x=p.values[N.name];a.primary&&x.forEach(u=>{u.primary=!1}),x.some(u=>u.cardId===a.cardId)||x.push(a),x=x.map(u=>(u.cardId===a.cardId&&(u={...u,...a}),u));let C={};x=x.filter(u=>(u.primary&&(C=u),!u.primary)),x=[C,...x],p.setFieldValue(N.name,x),n()},M=a=>{const p=window.open(a,"_blank");p==null||p.focus()};return I.useEffect(()=>{l()},[]),e.jsx(q,{enableReinitialize:!0,initialValues:r,onSubmit:(a,{setSubmitting:p})=>{p(!0),setTimeout(()=>{c(a,p)},1e3)},children:({values:a,touched:p,errors:N,isSubmitting:x,resetForm:C})=>{var E,k;const u={touched:p,errors:N};return e.jsx($,{children:e.jsxs(Y,{children:[e.jsx(H,{title:"Payment Method",desc:"You can update your cards information here"}),e.jsxs(D,{name:"paymentMethods",alignCenter:!1,label:"Credit Cards",...u,children:[e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:(E=a==null?void 0:a.paymentMethods)==null?void 0:E.map((d,f)=>e.jsxs("div",{className:w("flex items-center justify-between p-4",!B(a.paymentMethods,f)&&"border-b border-gray-200 dark:border-gray-600"),children:[e.jsxs("div",{className:"flex items-center",children:[d.cardType==="VISA"&&e.jsx("img",{src:"/img/others/img-8.png",alt:"visa"}),d.cardType==="MASTER"&&e.jsx("img",{src:"/img/others/img-9.png",alt:"master"}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:[d.cardHolderName," ","••••"," ",d.last4Number]}),d.primary&&e.jsx(O,{className:"bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Primary"," "]})})]}),e.jsxs("span",{children:["Expired"," ",we[parseInt(d.expMonth)-1]," ","20",d.expYear]})]})]}),e.jsx("div",{className:"flex",children:e.jsx(j,{size:"sm",type:"button",onClick:()=>h(d,"EDIT"),children:"Edit"})})]},d.cardId))}),e.jsx("div",{className:"mt-2",children:e.jsx(j,{type:"button",variant:"plain",size:"sm",icon:e.jsx(re,{className:"text-lg"}),onClick:()=>h({},"NEW"),children:e.jsx("span",{className:"font-semibold",children:"Add new card"})})})]}),e.jsx(D,{border:!1,name:"otherMethod",alignCenter:!1,label:"Other payment methods",...u,children:e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:(k=a==null?void 0:a.otherMethod)==null?void 0:k.map((d,f)=>e.jsxs("div",{className:w("flex items-center justify-between p-4",!B(a.otherMethod,f)&&"border-b border-gray-200 dark:border-gray-600"),children:[e.jsxs("div",{className:"flex items-center",children:[d.type==="PAYPAL"&&e.jsx("img",{src:"/img/others/img-10.png",alt:"visa"}),e.jsx("div",{className:"ml-3 rtl:mr-3 font-semibold",children:d.identifier})]}),e.jsx("div",{className:"flex",children:e.jsx(j,{size:"sm",type:"button",onClick:()=>M(d.redirect),children:"Edit"})})]},d.id))})}),e.jsxs(_,{isOpen:o==="NEW"||o==="EDIT",onClose:n,onRequestClose:n,children:[e.jsx("h5",{className:"mb-4",children:"Edit Credit Card"}),e.jsx(b,{name:"paymentMethods",children:({field:d,form:f})=>e.jsx(Ce,{type:o,card:s,onUpdate:z=>T(z,f,d)})})]}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(j,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>C(),children:"Reset"}),e.jsx(j,{variant:"solid",loading:x,type:"submit",children:x?"Updating":"Update"})]}),e.jsx(H,{className:"mt-6",title:"Billing History",desc:"View your previos billing"}),e.jsx(ke,{className:"mt-4 rounded-lg border border-gray-200 dark:border-gray-600",data:r.billingHistory})]})})}})};export{Nr as default};
