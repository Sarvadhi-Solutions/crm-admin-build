import{v as A,r as g,j as a}from"./index-03c04ff8.js";import{F as M,a as m}from"./FormItem-e51bc525.js";import{I as c}from"./Input-a694346c.js";import{B as O}from"./Button-43b0b556.js";import{A as I}from"./Alert-150a77d9.js";import{P as E}from"./PasswordInput-9ed48327.js";import{A as $}from"./ActionLink-708ea5b7.js";import{u as U}from"./useTimeOutMessage-83acacfd.js";import{F as L,a as k,b as l}from"./formik.esm-7069ec7e.js";import{c as x,a as p}from"./index.esm-22b7b6b8.js";import{t as j,N}from"./toast-5fc5fe7c.js";import"./index-b28ee968.js";import"./Badge-9e03359a.js";import"./RangeCalendar-fd86ac0e.js";import"./Card-ac72e1c3.js";import"./index-65a265b2.js";import"./index-564117fd.js";import"./Dialog-bdcf65b5.js";import"./Drawer-4f1dc3e9.js";import"./index-b8f5d3a3.js";import"./toString-6216203c.js";import"./index-e73ce215.js";import"./index-f63d6955.js";import"./index-b7b7180a.js";import"./Pagination-2b3f9c70.js";import"./Progress-e8ec294d.js";import"./index-dafa1633.js";import"./ScrollBar-5778a435.js";import"./index-4125dbd0.js";import{S as B}from"./Select-f865911a.js";import"./Skeleton-6f5440b9.js";import"./index-2aace800.js";import"./Switcher-3f72cb43.js";import"./index-0c00bbc6.js";import"./index-de17390b.js";import"./Tag-5499707e.js";import"./index-81144042.js";import"./index-e3eb4615.js";import"./Tooltip-d932d71c.js";import"./Upload-d3b407d2.js";import{b as Z}from"./SuperAdminServices-6014f5e1.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=w=>{const{disableSubmit:b=!1,className:v,signInUrl:z="/sign-in"}=w,{signUp:y}=A(),[u,q]=U(),[F,S]=g.useState([]),C=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:f,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:f};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const f=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));S(f)}};return g.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[u&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:u}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{b?e(!1):C(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:F,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:c})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:c})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:c})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
