import{a as E,r as x,j as e}from"./index-deb31e10.js";import"./Alert-5f36c2a0.js";import"./index-c67702c1.js";import"./Badge-d9ae855b.js";import{B as F}from"./Button-c9bc60b5.js";import"./RangeCalendar-8afb665c.js";import"./Card-085ac9b2.js";import"./index-3a77fb06.js";import"./index-3c726209.js";import"./Dialog-f52addba.js";import"./Drawer-d475ebcd.js";import"./index-23d0fcae.js";import{F as S,a as p}from"./FormItem-b6ea2884.js";import"./toString-e34703ad.js";import{I as f}from"./Input-b4f9603d.js";import{I as w}from"./index-f2daafea.js";import"./index-39c1c8e6.js";import"./index-700f33d8.js";import{t as q,N as V}from"./toast-241185e8.js";import"./Pagination-a5e381f1.js";import"./Progress-a11c2f12.js";import"./index-5baf7804.js";import"./ScrollBar-a7c63350.js";import"./index-e541606c.js";import{S as h,c as A}from"./Select-dc99a09b.js";import"./Skeleton-503ea522.js";import"./index-208bb167.js";import"./Switcher-d01b1c88.js";import"./index-5994de1d.js";import"./index-9d4e7a55.js";import"./Tag-ea07611a.js";import"./index-d4f33a77.js";import"./index-70acf077.js";import"./Tooltip-97f81a61.js";import"./Upload-762c02a1.js";import{c as I}from"./countries.constant-5369f7df.js";import{F as M,a as P,b as l}from"./formik.esm-2d8f8c6a.js";import{N as k}from"./react-number-format.es-9347f38a.js";import{c as R,a as c}from"./index.esm-a41489ce.js";import{k as $}from"./index-6567491d.js";import{C as D}from"./react-select-creatable.esm-b32ca5f7.js";import{u as B,g as W}from"./index-a9b6fcda.js";import"./useTimeout-795c2b07.js";import"./index.esm-7e071777.js";import"./CloseButton-359f8e10.js";import"./StatusIcon-b64ae86b.js";import"./Views-5dd9e85c.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-b869d145.js";import"./cloneDeep-67d59bdf.js";import"./_MapCache-e5138a4d.js";import"./_getPrototype-4373fe9f.js";import"./_baseIsEqual-9fca32a6.js";import"./get-08d776af.js";import"./useRootClose-2dd50c51.js";import"./usePopper-0c8aa062.js";import"./TimeInput-cf442084.js";import"./useUniqueId-675d2864.js";import"./useDidUpdate-14274714.js";import"./index-43dec7b5.js";import"./useUncertainRef-2aa5b3de.js";import"./isNil-6cac775c.js";import"./index-a5be5469.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-8d2f732a.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-16e47dbf.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-39911d05.js";import"./index.esm-7afe35c3.js";import"./index.esm-ca652311.js";import"./index.esm-94d88beb.js";import"./CrmService-d5fba30c.js";import"./AdaptableCard-007746c5.js";import"./useThemeClass-be6073dc.js";import"./AccountServices-3c4126d5.js";const z=[{label:"01 ~ 09 members",value:"01~09"},{label:"10 ~ 29 members",value:"10~29"},{label:"30 ~ 49 members",value:"30~49"},{label:"50 ~ 99 members",value:"50~99"},{label:"100+",value:"100+"}],{SingleValue:G}=A,L=i=>e.jsx(f,{...i,value:i.field.value}),T=({onValueChange:i,...o})=>e.jsx(k,{customInput:f,type:"text",autoComplete:"off",onValueChange:i,...o}),H=({innerProps:i,data:o,isSelected:g})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${g?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...i,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",o.value,") ",o.dialCode]})})}),J=i=>{const o=i.getValue()[0];return e.jsx(G,{...i,children:o&&e.jsx("span",{children:o.dialCode})})},K=R().shape({organizationName:c().required("Name is Required"),email:c().email("Invalid email").required("Email Required"),industry:c().required("Industry is Required"),contact:c().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits","Contact must be exactly 10 digits",i=>{if(i){const o=Number(i);return/^\d{10}$/.test(o.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",i=>i?!i.startsWith("0"):!0),numberOfEmployees:c().required("Please select your organization size"),dialCode:c().required("Please select dialCode")}),gt=({data:i={logo:"",industry:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",numberOfEmployees:""},onNextChange:o,currentStepStatus:g})=>{const b=B(n=>{var r,t;return(t=(r=n.crmAccountDetailForm)==null?void 0:r.data)==null?void 0:t.industryList}),y=E(),j=x.useCallback(async()=>{await y(W())},[y]),v=x.useMemo(()=>b==null?void 0:b.map(r=>({label:r.industryName,value:r.id})),[b]);x.useEffect(()=>{j()},[j]);const O=async(n,r)=>{var s,m,N,C;const t=await y($(n));let d="",u="",a="danger";(s=t==null?void 0:t.payload)!=null&&s.success?(d="Successfully Added",u=(m=t==null?void 0:t.payload)==null?void 0:m.message,a="success",o==null||o(n,"personalInformation",r)):(d="Something went wrong !!!",u=(N=t==null?void 0:t.error)==null?void 0:N.message),(C=t==null?void 0:t.payload)!=null&&C.success&&(o==null||o(n,"personalInformation",r)),q.push(e.jsx(V,{title:d,type:a,duration:2500,children:u}),{placement:"top-end"}),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Organization Information"}),e.jsx("p",{children:"Basic information for opening an organization"})]}),e.jsx(M,{initialValues:i,enableReinitialize:!0,validationSchema:K,onSubmit:(n,{setSubmitting:r})=>{r(!0),setTimeout(()=>{O(n,r)},1e3)},children:({values:n,touched:r,errors:t,isSubmitting:d,setFieldValue:u})=>e.jsx(P,{children:e.jsxs(S,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Name of Organization",invalid:t.organizationName&&r.organizationName,errorMessage:t.organizationName,children:e.jsx(l,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:f})}),e.jsx(p,{label:"Industry",invalid:t.industry&&r.industry,errorMessage:t.industry,children:e.jsx(l,{isClearable:!0,type:"text",autoComplete:"off",name:"industry",placeholder:"industry",value:v.find(a=>(a==null?void 0:a.value)===(n==null?void 0:n.industry)),component:h,componentAs:D,options:v,onChange:a=>{u("industry",a.value||"")}})})]}),e.jsx(p,{label:"Website",children:e.jsx(l,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:f})}),e.jsx(p,{label:"Size of your organization",invalid:t.numberOfEmployees&&r.numberOfEmployees,errorMessage:t.numberOfEmployees,children:e.jsx(l,{name:"numberOfEmployees",children:({field:a,form:s})=>e.jsx(h,{placeholder:"Organization Size...",field:a,form:s,options:z,value:z.filter(m=>m.value===n.numberOfEmployees),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})})}),e.jsx(p,{label:"Email",invalid:t.email&&r.email,errorMessage:t.email,children:e.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:f})}),e.jsx("div",{className:"md:grid grid-cols-2 gap-4",children:e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&r.dialCode||t.contact&&r.contact,errorMessage:t.contact,children:e.jsxs(w,{children:[e.jsx(l,{name:"dialCode",children:({field:a,form:s})=>e.jsx(h,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:H,SingleValue:J},field:a,form:s,options:I,value:I.filter(m=>m.value===n.dialCode),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})}),e.jsx(l,{name:"contact",children:({field:a,form:s})=>e.jsx(T,{form:s,field:a,customInput:L,placeholder:"Phone Number",onValueChange:m=>{s.setFieldValue(a.name,m.value)}})})]})})}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(F,{loading:d,variant:"solid",type:"submit",children:g==="complete"?"Save":"Next"})})]})})})]})};export{gt as default};
