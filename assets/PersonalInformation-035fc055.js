import{j as e,p as N}from"./index-03c04ff8.js";import{I as u}from"./Input-a694346c.js";import{I as f}from"./index-e73ce215.js";import{B as y}from"./Button-43b0b556.js";import{D as F}from"./index-564117fd.js";import{S as c,c as C}from"./Select-f865911a.js";import{F as S,a as p}from"./FormItem-e51bc525.js";import{F as M,a as P,b as o}from"./formik.esm-7069ec7e.js";import{N as I}from"./react-number-format.es-2fa40838.js";import{c as h}from"./countries.constant-5369f7df.js";import{s as j}from"./constants-ca202644.js";import{c as q,a as m}from"./index.esm-22b7b6b8.js";import"./Views-6cf30eea.js";import"./isNil-b5e08138.js";import"./get-b8650fa5.js";import"./toString-6216203c.js";import"./_MapCache-a07a3963.js";import"./useControllableState-a86a8835.js";import"./useMergeRef-788c4cb0.js";import"./RangeCalendar-fd86ac0e.js";import"./index.esm-0ab06d90.js";import"./useRootClose-70ca7828.js";import"./usePopper-63a1f788.js";import"./CloseButton-a5f0795d.js";import"./TimeInput-c79520af.js";import"./useUniqueId-9d592829.js";import"./useDidUpdate-4e1a0ded.js";import"./slicedToArray-0d7757b0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-381032b8.js";import"./floating-ui.dom-4bc0055b.js";import"./index-ca954fc1.js";const{SingleValue:V}=C,g=[{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Others",value:"O"}],D=n=>e.jsx(u,{...n,value:n.field.value}),O=({onValueChange:n,...s})=>e.jsx(I,{customInput:u,type:"text",autoComplete:"off",onValueChange:n,...s}),R=({innerProps:n,data:s,isSelected:x})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${x?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...n,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",s.value,") ",s.dialCode]})})}),k=n=>{const s=n.getValue()[0];return e.jsx(V,{...n,children:s&&e.jsx("span",{children:s.dialCode})})},B=q().shape({firstName:m().required("First Name Required"),lastName:m().required("Last Name Required"),email:m().email("Invalid email").required("Email Required"),nationality:m().required("Please select your nationality"),phoneNumber:m().required("Please enter your phone number"),dob:m().required("Please enter your date of birth"),gender:m().required("Please enter your gender"),maritalStatus:m().required("Please enter your marital status"),dialCode:m().required("Please select dial code")}),he=({data:n={firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},onNextChange:s,currentStepStatus:x})=>{const v=(d,r)=>{s==null||s(d,"personalInformation",r)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Personal Information"}),e.jsx("p",{children:"Basic information for an account opening"})]}),e.jsx(M,{initialValues:n,enableReinitialize:!0,validationSchema:B,onSubmit:(d,{setSubmitting:r})=>{r(!0),setTimeout(()=>{v(d,r)},1e3)},children:({values:d,touched:r,errors:t,isSubmitting:b})=>e.jsx(P,{children:e.jsxs(S,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"First Name",invalid:t.firstName&&r.firstName,errorMessage:t.firstName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:u})}),e.jsx(p,{label:"Last Name",invalid:t.lastName&&r.lastName,errorMessage:t.lastName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:u})})]}),e.jsx(p,{label:"Email",invalid:t.email&&r.email,errorMessage:t.email,children:e.jsx(o,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:u})}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Gender",invalid:t.gender&&r.gender,errorMessage:t.gender,children:e.jsx(o,{name:"gender",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Gender",field:i,form:l,options:g,value:g.filter(a=>a.value===d.gender),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})}),e.jsx(p,{label:"Marital Status",invalid:t.maritalStatus&&r.maritalStatus,errorMessage:t.maritalStatus,children:e.jsx(o,{name:"maritalStatus",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Marital Status",field:i,form:l,options:j,value:j.filter(a=>a.value===d.maritalStatus),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})})]}),e.jsx(p,{label:"Nationality",invalid:t.nationality&&r.nationality,errorMessage:t.nationality,children:e.jsx(o,{name:"nationality",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Nationality",field:i,form:l,options:h,value:h.filter(a=>a.value===d.nationality),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&r.dialCode||t.phoneNumber&&r.phoneNumber,errorMessage:"Please enter your phone number",children:e.jsxs(f,{children:[e.jsx(o,{name:"dialCode",children:({field:i,form:l})=>e.jsx(c,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:R,SingleValue:k},field:i,form:l,options:h,value:h.filter(a=>a.value===d.dialCode),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})}),e.jsx(o,{name:"phoneNumber",children:({field:i,form:l})=>e.jsx(O,{form:l,field:i,customInput:D,placeholder:"Phone Number",onValueChange:a=>{l.setFieldValue(i.name,a.value)}})})]})}),e.jsx(p,{label:"Date of Birth",invalid:t.dob&&r.dob,errorMessage:t.dob,children:e.jsx(o,{name:"dob",placeholder:"Date",children:({field:i,form:l})=>e.jsx(F,{field:i,form:l,value:i.value,onChange:a=>{l.setFieldValue(i.name,N(a).format("YYYY-MM-DD"))}})})})]}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(y,{loading:b,variant:"solid",type:"submit",children:x==="complete"?"Save":"Next"})})]})})})]})};export{he as default};
