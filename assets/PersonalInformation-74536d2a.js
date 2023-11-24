import{a as E,r as x,j as e}from"./index-4675262e.js";import"./Alert-e71f6da7.js";import"./index-32f51c8f.js";import"./Badge-8de88fc8.js";import{B as F}from"./Button-0b68e0a2.js";import"./RangeCalendar-7055646c.js";import"./Card-1a4ea392.js";import"./index-b0ec1b4c.js";import"./index-40ee1fcd.js";import"./Dialog-2674822d.js";import"./Drawer-4463e2fa.js";import"./index-395f0e43.js";import{F as S,a as p}from"./FormItem-f0a568d5.js";import"./toString-5a26993f.js";import{I as f}from"./Input-b6f85393.js";import{I as w}from"./index-799960ed.js";import"./index-567c5b37.js";import"./index-29fb88aa.js";import{t as q,N as V}from"./toast-3dd25308.js";import"./Pagination-2e203a3f.js";import"./Progress-163e7627.js";import"./index-ac935edf.js";import"./ScrollBar-c918a49a.js";import"./index-befed326.js";import{S as h,c as A}from"./Select-ecee390b.js";import"./Skeleton-5516a2a7.js";import"./index-819658e8.js";import"./Switcher-abd8f95e.js";import"./index-dc5daab9.js";import"./index-aa614f08.js";import"./Tag-613d51b1.js";import"./index-bcfe7745.js";import"./index-9a848025.js";import"./Tooltip-2d93a4c5.js";import"./Upload-e8a604f5.js";import{c as I}from"./countries.constant-5369f7df.js";import{F as M,a as P,b as l}from"./formik.esm-be6a51d3.js";import{N as k}from"./react-number-format.es-c100091d.js";import{c as R,a as c}from"./index.esm-b46f51f2.js";import{k as $}from"./index-a751a5cf.js";import{C as D}from"./react-select-creatable.esm-bd44bb60.js";import{u as B,g as W}from"./index-5b7d8cde.js";import"./useTimeout-d031dca4.js";import"./index.esm-ff144046.js";import"./CloseButton-f37e3705.js";import"./StatusIcon-69b21449.js";import"./Views-96bf4241.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-048d3f43.js";import"./cloneDeep-477b9741.js";import"./_MapCache-594565d2.js";import"./_getPrototype-5d191e98.js";import"./_baseIsEqual-b207db6b.js";import"./get-59654049.js";import"./useRootClose-bb6a1813.js";import"./usePopper-e9b5a625.js";import"./TimeInput-e183a601.js";import"./useUniqueId-f4a3bad2.js";import"./useDidUpdate-3fa7b336.js";import"./index-cd7de78e.js";import"./useUncertainRef-9680db51.js";import"./isNil-7c9d5aca.js";import"./index-99abface.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-24f82e16.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-92a33187.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-20d9df92.js";import"./index.esm-c132f852.js";import"./index.esm-2d8103e0.js";import"./index.esm-3440a998.js";import"./CrmService-ac08cdaf.js";import"./AdaptableCard-b129293a.js";import"./useThemeClass-d82dec7a.js";import"./AccountServices-54696d42.js";const z=[{label:"01 ~ 09 members",value:"01~09"},{label:"10 ~ 29 members",value:"10~29"},{label:"30 ~ 49 members",value:"30~49"},{label:"50 ~ 99 members",value:"50~99"},{label:"100+",value:"100+"}],{SingleValue:G}=A,L=i=>e.jsx(f,{...i,value:i.field.value}),T=({onValueChange:i,...o})=>e.jsx(k,{customInput:f,type:"text",autoComplete:"off",onValueChange:i,...o}),H=({innerProps:i,data:o,isSelected:g})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${g?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...i,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",o.value,") ",o.dialCode]})})}),J=i=>{const o=i.getValue()[0];return e.jsx(G,{...i,children:o&&e.jsx("span",{children:o.dialCode})})},K=R().shape({organizationName:c().required("Name is Required"),email:c().email("Invalid email").required("Email Required"),industry:c().required("Industry is Required"),contact:c().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits","Contact must be exactly 10 digits",i=>{if(i){const o=Number(i);return/^\d{10}$/.test(o.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",i=>i?!i.startsWith("0"):!0),numberOfEmployees:c().required("Please select your organization size"),dialCode:c().required("Please select dialCode")}),gt=({data:i={logo:"",industry:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",numberOfEmployees:""},onNextChange:o,currentStepStatus:g})=>{const b=B(n=>{var r,t;return(t=(r=n.crmAccountDetailForm)==null?void 0:r.data)==null?void 0:t.industryList}),y=E(),j=x.useCallback(async()=>{await y(W())},[y]),v=x.useMemo(()=>b==null?void 0:b.map(r=>({label:r.industryName,value:r.id})),[b]);x.useEffect(()=>{j()},[j]);const O=async(n,r)=>{var s,m,N,C;const t=await y($(n));let d="",u="",a="danger";(s=t==null?void 0:t.payload)!=null&&s.success?(d="Successfully Added",u=(m=t==null?void 0:t.payload)==null?void 0:m.message,a="success",o==null||o(n,"personalInformation",r)):(d="Something went wrong !!!",u=(N=t==null?void 0:t.error)==null?void 0:N.message),(C=t==null?void 0:t.payload)!=null&&C.success&&(o==null||o(n,"personalInformation",r)),q.push(e.jsx(V,{title:d,type:a,duration:2500,children:u}),{placement:"top-end"}),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Organization Information"}),e.jsx("p",{children:"Basic information for opening an organization"})]}),e.jsx(M,{initialValues:i,enableReinitialize:!0,validationSchema:K,onSubmit:(n,{setSubmitting:r})=>{r(!0),setTimeout(()=>{O(n,r)},1e3)},children:({values:n,touched:r,errors:t,isSubmitting:d,setFieldValue:u})=>e.jsx(P,{children:e.jsxs(S,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Name of Organization",invalid:t.organizationName&&r.organizationName,errorMessage:t.organizationName,children:e.jsx(l,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:f})}),e.jsx(p,{label:"Industry",invalid:t.industry&&r.industry,errorMessage:t.industry,children:e.jsx(l,{isClearable:!0,type:"text",autoComplete:"off",name:"industry",placeholder:"industry",value:v.find(a=>(a==null?void 0:a.value)===(n==null?void 0:n.industry)),component:h,componentAs:D,options:v,onChange:a=>{u("industry",a.value||"")}})})]}),e.jsx(p,{label:"Website",children:e.jsx(l,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:f})}),e.jsx(p,{label:"Size of your organization",invalid:t.numberOfEmployees&&r.numberOfEmployees,errorMessage:t.numberOfEmployees,children:e.jsx(l,{name:"numberOfEmployees",children:({field:a,form:s})=>e.jsx(h,{placeholder:"Organization Size...",field:a,form:s,options:z,value:z.filter(m=>m.value===n.numberOfEmployees),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})})}),e.jsx(p,{label:"Email",invalid:t.email&&r.email,errorMessage:t.email,children:e.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:f})}),e.jsx("div",{className:"md:grid grid-cols-2 gap-4",children:e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&r.dialCode||t.contact&&r.contact,errorMessage:t.contact,children:e.jsxs(w,{children:[e.jsx(l,{name:"dialCode",children:({field:a,form:s})=>e.jsx(h,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:H,SingleValue:J},field:a,form:s,options:I,value:I.filter(m=>m.value===n.dialCode),onChange:m=>s.setFieldValue(a.name,m==null?void 0:m.value)})}),e.jsx(l,{name:"contact",children:({field:a,form:s})=>e.jsx(T,{form:s,field:a,customInput:L,placeholder:"Phone Number",onValueChange:m=>{s.setFieldValue(a.name,m.value)}})})]})})}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(F,{loading:d,variant:"solid",type:"submit",children:g==="complete"?"Save":"Next"})})]})})})]})};export{gt as default};
