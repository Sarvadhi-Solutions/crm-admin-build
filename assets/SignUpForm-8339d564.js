import{v as A,r as u,j as a}from"./index-4fc5ac15.js";import{F as M,a as m}from"./FormItem-e8ff9726.js";import{I as f}from"./Input-3854a622.js";import{B as O}from"./Button-7cd7d853.js";import{A as I}from"./Alert-7075f24d.js";import{P as E}from"./PasswordInput-ca5adaaf.js";import{A as $}from"./ActionLink-b6d1f855.js";import{u as U}from"./useTimeOutMessage-cd4d0692.js";import{F as L,a as k,b as l}from"./formik.esm-7fc98ee2.js";import{c as x,a as p}from"./index.esm-4c38c838.js";import{t as j,N}from"./toast-b752ab56.js";import"./index-ade064c2.js";import"./Badge-19df83fb.js";import"./RangeCalendar-5dd6ce1b.js";import"./Card-a6171fd9.js";import"./index-2e6c9811.js";import"./index-f81c3042.js";import"./Dialog-5d93bc0a.js";import"./Drawer-8dc2fd43.js";import"./index-3903fc17.js";import"./toString-73aeebea.js";import"./index-d3c2681a.js";import"./index-99b428ba.js";import"./index-8ced4f1f.js";import"./Pagination-1e482b61.js";import"./Progress-352773c6.js";import"./index-5dc9acd3.js";import"./ScrollBar-abdf3e1e.js";import"./index-1ece77e8.js";import{S as B}from"./Select-9180a255.js";import"./Skeleton-cef4628a.js";import"./index-5597ebd0.js";import"./Switcher-900c0698.js";import"./index-829995d1.js";import"./index-dbee2c90.js";import"./Tag-4b3b0483.js";import"./index-e5b54797.js";import"./index-534786cf.js";import"./Tooltip-56ad0384.js";import"./Upload-fe7ae2cb.js";import{b as Z}from"./SuperAdminServices-20dca273.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=w=>{const{disableSubmit:b=!1,className:v,signInUrl:z="/sign-in"}=w,{signUp:y}=A(),[g,q]=U(),[F,S]=u.useState([]),C=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:c,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:c};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);console.log(i),(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const c=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));console.log(c),S(c)}};return u.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[g&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:g}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{b?e(!1):C(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:F,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:f})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:f})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:f})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:f})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
