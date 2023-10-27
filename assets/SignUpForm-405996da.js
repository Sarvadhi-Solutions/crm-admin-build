import{v as A,r as u,j as a}from"./index-3e8ea6f8.js";import{F as M,a as m}from"./FormItem-cd2f592d.js";import{I as f}from"./Input-fcdfcb5e.js";import{B as O}from"./Button-76f1570d.js";import{A as I}from"./Alert-7c38cc47.js";import{P as E}from"./PasswordInput-fb89afda.js";import{A as $}from"./ActionLink-55abf58f.js";import{u as U}from"./useTimeOutMessage-0ca1eff4.js";import{F as L,a as k,b as l}from"./formik.esm-07b32d21.js";import{c as x,a as p}from"./index.esm-f87d0251.js";import{t as j,N}from"./toast-7ff9f8c4.js";import"./index-1d299906.js";import"./Badge-eeedee10.js";import"./RangeCalendar-39ffd35c.js";import"./Card-f647d961.js";import"./index-0e62fb49.js";import"./index-82e9f824.js";import"./Dialog-52f96620.js";import"./Drawer-0605b25d.js";import"./index-644264f8.js";import"./toString-11f799aa.js";import"./index-d5aa1b1d.js";import"./index-8027bcf5.js";import"./index-8a954033.js";import"./Pagination-96c1f0d2.js";import"./Progress-11481b60.js";import"./index-c8dfa8be.js";import"./ScrollBar-080eb132.js";import"./index-bf896e9f.js";import{S as B}from"./Select-3f8173b3.js";import"./Skeleton-32fefde5.js";import"./index-132323ef.js";import"./Switcher-0d6c2ebf.js";import"./index-6e2d0c70.js";import"./index-6ac68218.js";import"./Tag-d66306a5.js";import"./index-8dfb88a1.js";import"./index-195fe53b.js";import"./Tooltip-cd4efb66.js";import"./Upload-73ca2c13.js";import{b as Z}from"./SuperAdminServices-e9b60d08.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=w=>{const{disableSubmit:b=!1,className:v,signInUrl:z="/sign-in"}=w,{signUp:y}=A(),[g,q]=U(),[F,S]=u.useState([]),C=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:c,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:c};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);console.log(i),(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const c=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));console.log(c),S(c)}};return u.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[g&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:g}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{b?e(!1):C(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:F,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:f})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:f})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:f})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:f})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
