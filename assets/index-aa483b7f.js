import{al as C,a as y,j as e,p as F}from"./index-01b42c77.js";import{B as S}from"./Button-a5544b15.js";import{D as q}from"./index-a9a60eee.js";import{F as I,a as p}from"./FormItem-4a386e6f.js";import{I as c}from"./Input-b0748b3e.js";import{I as M}from"./index-2bfb9d4e.js";import{S as N,c as V}from"./Select-2cf95561.js";import{c as b}from"./countries.constant-5369f7df.js";import{c as P}from"./index-99289558.js";import{F as D,a as w,b as n}from"./formik.esm-a8cc53a4.js";import{c as A,a as l}from"./index.esm-d51743a0.js";import{N as E}from"./react-number-format.es-0ae6a7fe.js";import"./Alert-ba84ad42.js";import"./index-b609fa7a.js";import"./Badge-6cc907e6.js";import"./RangeCalendar-7e850f6c.js";import"./Card-039a9ed6.js";import"./index-dab07eaf.js";import"./Dialog-b7c1600d.js";import"./Drawer-a351bd90.js";import"./index-71de6292.js";import"./toString-228d794c.js";import"./index-ca28e0d9.js";import"./index-a6a0da8c.js";import{t as R,N as $}from"./toast-9d39500f.js";import"./Pagination-d57e7c83.js";import"./Progress-613f4d7f.js";import"./index-8ad179bb.js";import"./ScrollBar-349c0130.js";import"./index-92468997.js";import"./Skeleton-cf28f7d5.js";import"./index-b9cef8bb.js";import"./Switcher-cf39306f.js";import"./index-f7318691.js";import"./index-0fe1020b.js";import"./Tag-989e3abd.js";import"./index-8359d520.js";import"./index-3b362267.js";import"./Tooltip-06c83e8f.js";import"./Upload-b982e753.js";import"./useControllableState-6df01025.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-25e3e193.js";import"./usePopper-f47dd5aa.js";import"./index.esm-587e89d5.js";import"./CloseButton-f0093569.js";import"./TimeInput-1e7df44b.js";import"./useUniqueId-3c39e5d6.js";import"./useDidUpdate-172f95a0.js";import"./index-5bdc2e1d.js";import"./Views-0a1f8861.js";import"./isNil-93830b79.js";import"./get-4bda1c07.js";import"./_MapCache-466adbaa.js";import"./slicedToArray-0eb2b673.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-f54b4040.js";import"./floating-ui.dom-4bc0055b.js";import"./CrmService-fb54ad5b.js";import"./useTimeout-459c0c98.js";import"./StatusIcon-f4c9b6a3.js";import"./cloneDeep-29f2aae8.js";import"./_getPrototype-583e3aad.js";import"./_baseIsEqual-e4dc226f.js";import"./index-07bde89e.js";import"./useUncertainRef-9e1ddaf5.js";import"./chainedFunction-070f832c.js";import"./mapCloneElement-830eb65c.js";import"./index.esm-30f67dfd.js";import"./index.esm-b7456581.js";import"./index.esm-68702517.js";const{SingleValue:k}=V,j=[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Others",value:"other"}],B=a=>e.jsx(c,{...a,value:a.field.value}),L=({onValueChange:a,...m})=>e.jsx(E,{customInput:c,type:"text",autoComplete:"off",onValueChange:a,...m}),O=({innerProps:a,data:m,isSelected:h})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${h?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...a,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",m.value,") ",m.dialCode]})})}),Y=a=>{const m=a.getValue()[0];return e.jsx(k,{...a,children:m&&e.jsx("span",{children:m.dialCode})})},G=A().shape({firstName:l().required("First Name Required"),lastName:l().required("Last Name Required"),email:l().email("Invalid email").required("Email Required"),phoneNumber:l().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",a=>!isNaN(a)).test("is-ten-digits","Contact must be exactly 10 digits",a=>{if(a){const m=Number(a);return/^\d{10}$/.test(m.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",a=>a?!a.startsWith("0"):!0),dob:l().required("Please enter your date of birth"),gender:l().required("Please enter your gender"),dialCode:l().required("Please select dial code")}),U=({data:a={firstName:"",lastName:"",email:"",dialCode:"",phoneNumber:"",dob:"",gender:""},onNextChange:m,currentStepStatus:h})=>{const f=C(),v=y();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Personal Information"}),e.jsx("p",{children:"Basic information for an account opening"})]}),e.jsx(D,{initialValues:a,enableReinitialize:!0,validationSchema:G,onSubmit:async(u,{setSubmitting:s})=>{var i,g,x;s(!0);const t=await v(P(u));let d="",r="",o="danger";(i=t==null?void 0:t.payload)!=null&&i.success?(d="Successfully Added",r=(g=t==null?void 0:t.payload)==null?void 0:g.message,o="success",f("/welcome")):(d="Something went wrong !!!",r=(x=t==null?void 0:t.error)==null?void 0:x.message),R.push(e.jsx($,{title:d,type:o,duration:2500,children:r}),{placement:"top-end"})},children:({values:u,touched:s,errors:t,isSubmitting:d})=>e.jsx(w,{children:e.jsxs(I,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"First Name",invalid:t.firstName&&s.firstName,errorMessage:t.firstName,children:e.jsx(n,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:c})}),e.jsx(p,{label:"Last Name",invalid:t.lastName&&s.lastName,errorMessage:t.lastName,children:e.jsx(n,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:c})})]}),e.jsx(p,{label:"Email",invalid:t.email&&s.email,errorMessage:t.email,children:e.jsx(n,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),e.jsx("div",{className:"md:grid grid-cols-2 gap-4",children:e.jsx(p,{label:"Gender",invalid:t.gender&&s.gender,errorMessage:t.gender,children:e.jsx(n,{name:"gender",children:({field:r,form:o})=>e.jsx(N,{placeholder:"Gender",field:r,form:o,options:j,value:j.filter(i=>i.value===u.gender),onChange:i=>o.setFieldValue(r.name,i==null?void 0:i.value)})})})}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&s.dialCode||t.phoneNumber&&s.phoneNumber,errorMessage:t.phoneNumber,children:e.jsxs(M,{children:[e.jsx(n,{name:"dialCode",children:({field:r,form:o})=>e.jsx(N,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:O,SingleValue:Y},field:r,form:o,options:b,value:b.filter(i=>i.value===u.dialCode),onChange:i=>o.setFieldValue(r.name,i==null?void 0:i.value)})}),e.jsx(n,{name:"phoneNumber",children:({field:r,form:o})=>e.jsx(L,{form:o,field:r,customInput:B,placeholder:"Phone Number",onValueChange:i=>{o.setFieldValue(r.name,i.value)}})})]})}),e.jsx(p,{label:"Date of Birth",invalid:t.dob&&s.dob,errorMessage:t.dob,children:e.jsx(n,{name:"dob",placeholder:"Date",children:({field:r,form:o})=>e.jsx(q,{field:r,form:o,value:r.value,onChange:i=>{o.setFieldValue(r.name,F(i).format("YYYY-MM-DD"))}})})})]}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(S,{loading:d,variant:"solid",type:"submit",children:h==="complete"?"Save":"Submit"})})]})})})]})},st=U;export{st as default};
