import{v as A,r as g,j as a}from"./index-54ca42fc.js";import{F as M,a as m}from"./FormItem-01929b19.js";import{I as c}from"./Input-6f6282ca.js";import{B as O}from"./Button-acf424a5.js";import{A as I}from"./Alert-f71ef527.js";import{P as E}from"./PasswordInput-b3018fe3.js";import{A as $}from"./ActionLink-693b5699.js";import{u as U}from"./useTimeOutMessage-8eea9716.js";import{F as L,a as k,b as l}from"./formik.esm-b99e5978.js";import{c as x,a as p}from"./index.esm-8e80d5ad.js";import{t as j,N}from"./toast-1afc7125.js";import"./index-08c9f209.js";import"./Badge-7ea1afdb.js";import"./RangeCalendar-c9c9eebc.js";import"./Card-a23c20fb.js";import"./index-a7ae3561.js";import"./index-7ffe65fc.js";import"./Dialog-72a815cb.js";import"./Drawer-5c784020.js";import"./index-77f8daa6.js";import"./toString-f912f267.js";import"./index-1c856de8.js";import"./index-59d863f4.js";import"./index-39cde6be.js";import"./Pagination-88f4b10a.js";import"./Progress-757dfe5e.js";import"./index-3396de21.js";import"./ScrollBar-bdc4d5a9.js";import"./index-2299d96e.js";import{S as B}from"./Select-dcced844.js";import"./Skeleton-55912bfd.js";import"./index-fa71559d.js";import"./Switcher-d1660486.js";import"./index-d0d30922.js";import"./index-65de947e.js";import"./Tag-d6f79b22.js";import"./index-bc1b91de.js";import"./index-3c2d94f0.js";import"./Tooltip-a3ba2e51.js";import"./Upload-928853bc.js";import{b as Z}from"./SuperAdminServices-72ac62f5.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=w=>{const{disableSubmit:b=!1,className:v,signInUrl:z="/sign-in"}=w,{signUp:y}=A(),[u,q]=U(),[F,S]=g.useState([]),C=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:f,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:f};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const f=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));S(f)}};return g.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[u&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:u}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{b?e(!1):C(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:F,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:c})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:c})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:c})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
