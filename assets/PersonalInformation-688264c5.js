import{a as E,r as x,j as e}from"./index-e9e80fad.js";import"./Alert-4b9289a7.js";import"./index-fdab81dd.js";import"./Badge-c25ebbc3.js";import{B as F}from"./Button-227d4871.js";import"./RangeCalendar-8629c316.js";import"./Card-14c7d5e0.js";import"./index-7e05bd38.js";import"./index-034f67b7.js";import"./Dialog-78dc0140.js";import"./Drawer-6d31deda.js";import"./index-713c10b4.js";import{F as S,a as p}from"./FormItem-4bb500cc.js";import"./toString-d452c1eb.js";import{I as f}from"./Input-d4f6dd9d.js";import{I as w}from"./index-5342abc4.js";import"./index-e4774632.js";import"./index-ffd743d2.js";import{t as q,N as V}from"./toast-87b47471.js";import"./Pagination-1965e489.js";import"./Progress-d4986dc8.js";import"./index-2b35542d.js";import"./ScrollBar-21d87604.js";import"./index-ef47c85f.js";import{S as h,c as A}from"./Select-435e7909.js";import"./Skeleton-635ffbd7.js";import"./index-c9660479.js";import"./Switcher-c852a089.js";import"./index-a7d59cb4.js";import"./index-7f78caa8.js";import"./Tag-b2597221.js";import"./index-9428398a.js";import"./index-ae776672.js";import"./Tooltip-0ed58b52.js";import"./Upload-15d917f3.js";import{c as I}from"./countries.constant-5369f7df.js";import{F as M,a as P,b as l}from"./formik.esm-41cf3f17.js";import{N as k}from"./react-number-format.es-ce2dfab0.js";import{c as R,a as c}from"./index.esm-0ceb40eb.js";import{k as $}from"./index-b61495b8.js";import{C as D}from"./react-select-creatable.esm-9a05d79b.js";import{u as B,g as W}from"./index-e291318d.js";import"./useTimeout-0a987a2a.js";import"./index.esm-0e189e80.js";import"./CloseButton-59471e32.js";import"./StatusIcon-8798719a.js";import"./Views-6a6f19fc.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-97f974f1.js";import"./cloneDeep-ccfbe55a.js";import"./_MapCache-49bf6e31.js";import"./_getPrototype-64e64018.js";import"./_baseIsEqual-934e8574.js";import"./get-e7c8697a.js";import"./useRootClose-50069751.js";import"./usePopper-279cd1bc.js";import"./TimeInput-3543dad0.js";import"./useUniqueId-6815521f.js";import"./useDidUpdate-b1f63e57.js";import"./index-fc6fab3c.js";import"./useUncertainRef-07db30ec.js";import"./isNil-5d9d980a.js";import"./index-bfcd6c72.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-64904844.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-0e64d439.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-b62b3eb9.js";import"./index.esm-778bb6ce.js";import"./index.esm-a4c1c24f.js";import"./index.esm-c9613619.js";import"./CrmService-dcc529f1.js";import"./AdaptableCard-4f414664.js";import"./useThemeClass-395527ab.js";import"./AccountServices-1afd0935.js";const z=[{label:"01 ~ 09 members",value:"01~09"},{label:"10 ~ 29 members",value:"10~29"},{label:"30 ~ 49 members",value:"30~49"},{label:"50 ~ 99 members",value:"50~99"},{label:"100+",value:"100+"}],{SingleValue:G}=A,L=i=>e.jsx(f,{...i,value:i.field.value}),T=({onValueChange:i,...o})=>e.jsx(k,{customInput:f,type:"text",autoComplete:"off",onValueChange:i,...o}),H=({innerProps:i,data:o,isSelected:g})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${g?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...i,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",o.value,") ",o.dialCode]})})}),J=i=>{const o=i.getValue()[0];return e.jsx(G,{...i,children:o&&e.jsx("span",{children:o.dialCode})})},K=R().shape({organizationName:c().required("Name is Required"),email:c().email("Invalid email").required("Email Required"),industry:c().required("Industry is Required"),contact:c().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits","Contact must be exactly 10 digits",i=>{if(i){const o=Number(i);return/^\d{10}$/.test(o.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",i=>i?!i.startsWith("0"):!0),numberOfEmployees:c().required("Please select your organization size"),dialCode:c().required("Please select dialCode")}),gt=({data:i={logo:"",industry:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",numberOfEmployees:""},onNextChange:o,currentStepStatus:g})=>{const b=B(n=>{var r,t;return(t=(r=n.crmAccountDetailForm)==null?void 0:r.data)==null?void 0:t.industryList}),y=E(),j=x.useCallback(async()=>{await y(W())},[y]),v=x.useMemo(()=>b==null?void 0:b.map(r=>({label:r.industryName,value:r.id})),[b]);x.useEffect(()=>{j()},[j]);const O=async(n,r)=>{var s,m,N,C;const t=await y($(n));let d="",u="",a="danger";(s=t==null?void 0:t.payload)!=null&&s.success?(d="Successfully Added",u=(m=t==null?void 0:t.payload)==null?void 0:m.message,a="success",o==null||o(n,"personalInformation",r)):(d="Something went wrong !!!",u=(N=t==null?void 0:t.error)==null?void 0:N.message),(C=t==null?void 0:t.payload)!=null&&C.success&&(o==null||o(n,"personalInformation",r)),q.push(e.jsx(V,{title:d,type:a,duration:2500,children:u}),{placement:"top-end"}),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Organization Information"}),e.jsx("p",{children:"Basic information for opening an organization"})]}),e.jsx(M,{initialValues:i,enableReinitialize:!0,validationSchema:K,onSubmit:(n,{setSubmitting:r})=>{r(!0),setTimeout(()=>{O(n,r)},1e3)},children:({values:n,touched:r,errors:t,isSubmitting:d,setFieldValue:u})=>e.jsx(P,{children:e.jsxs(S,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Name of Organization",invalid:t.organizationName&&r.organizationName,errorMessage:t.organizationName,children:e.jsx(l,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:f})}),e.jsx(p,{label:"Industry",invalid:t.industry&&r.industry,errorMessage:t.industry,children:e.jsx(l,{isClearable:!0,type:"text",autoComplete:"off",name:"industry",placeholder:"industry",value:v.find(a=>(a==null?void 0:a.value)===(n==null?void 0:n.industry)),component:h,componentAs:D,options:v,onChange:a=>{u("industry",a.value||"")}})})]}),e.jsx(p,{label:"Website",children:e.jsx(l,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:f})}),e.jsx(p,{label:"Size of your organization",invalid:t.numberOfEmployees&&r.numberOfEmployees,errorMessage:t.numberOfEmployees,children:e.jsx(l,{name:"numberOfEmployees",children:({field:a,form:s})=>e.jsx(h,{placeholder:"Organization Size...",field:a,form:s,options:z,value:z.filter(m=>m.value===n.numberOfEmployees),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})})}),e.jsx(p,{label:"Email",invalid:t.email&&r.email,errorMessage:t.email,children:e.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:f})}),e.jsx("div",{className:"md:grid grid-cols-2 gap-4",children:e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&r.dialCode||t.contact&&r.contact,errorMessage:t.contact,children:e.jsxs(w,{children:[e.jsx(l,{name:"dialCode",children:({field:a,form:s})=>e.jsx(h,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:H,SingleValue:J},field:a,form:s,options:I,value:I.filter(m=>m.value===n.dialCode),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})}),e.jsx(l,{name:"contact",children:({field:a,form:s})=>e.jsx(T,{form:s,field:a,customInput:L,placeholder:"Phone Number",onValueChange:m=>{s.setFieldValue(a.name,m.value)}})})]})})}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(F,{loading:d,variant:"solid",type:"submit",children:g==="complete"?"Save":"Next"})})]})})})]})};export{gt as default};
