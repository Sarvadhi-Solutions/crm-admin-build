import{r as y,j as e,v as A}from"./index-0504f3e5.js";import{I as n}from"./Input-b101ae80.js";import{B as N}from"./Button-895a686e.js";import{C as k}from"./index-1ec4e0d7.js";import{F as M,a as o}from"./FormItem-f81129d8.js";import{A as q}from"./Alert-7d2f3d15.js";import{P as D}from"./PasswordInput-32e2d942.js";import{A as P}from"./ActionLink-2cc1d958.js";import{u as R}from"./useTimeOutMessage-34e84adb.js";import{F as S,a as F,b as r}from"./formik.esm-0c1c749e.js";import{c as E,a as u,d as z,f as V}from"./index.esm-2c9047c6.js";import{t as v,N as w}from"./toast-fca74249.js";import"./index-48126d05.js";import"./Badge-f7a2a6cd.js";import"./RangeCalendar-24e6362b.js";import"./Card-74cd14d0.js";import"./index-ebf37477.js";import{D as $}from"./Dialog-7d21bbc0.js";import"./Drawer-f1a47725.js";import"./index-97244f45.js";import"./toString-d84b2ed4.js";import"./index-e5a431cb.js";import"./index-391881a7.js";import"./index-ce935429.js";import"./Pagination-029cde77.js";import"./Progress-4044e341.js";import"./index-4f4f10ff.js";import"./ScrollBar-50f49651.js";import"./index-2378ff43.js";import"./Select-20a44aea.js";import"./Skeleton-d9265fba.js";import"./index-cefe9214.js";import"./Switcher-28efe701.js";import"./index-58094b57.js";import"./index-80febe26.js";import"./Tag-d2997001.js";import"./index-fba9cebf.js";import"./index-b6bc4a2a.js";import"./Tooltip-8ef6fa0f.js";import"./Upload-873f41fa.js";import{c as U,A as T}from"./index.esm-328a03b9.js";import{a as B}from"./index.esm-23d1fff1.js";import{a as Z}from"./index.esm-ee201180.js";import{N as L}from"./index.esm-25dc1721.js";import{b as W}from"./index.esm-c090bf2a.js";import{T as G}from"./index.esm-270ff3fe.js";import"./Views-3281299b.js";import"./chart.constant-fdaa2e35.js";import"./GrowShrinkTag-761749d9.js";import"./DataTable-9e0c0540.js";import"./react-tooltip.min-65370a0a.js";import"./RichTextEditor-1e7bc001.js";import"./SegmentItemOption-f1881317.js";import{S as H}from"./StickyFooter-cd6fbd09.js";import"./SvgIcon-b0904d60.js";import{a as Y}from"./SuperAdminServices-04ad8f2d.js";const _=E().shape({organizationName:u().required("Organization Name Required"),industry:u().required("Industry Required"),contact:z().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",t=>!isNaN(t)).test("is-ten-digits"," Contact must be exactly 10 digits",t=>{if(t){const m=Number(t);return/^\d{10}$/.test(m.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",t=>t?Number(t).toString().length<=10:!0),email:u().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),numberOfEmployees:z().typeError("Must be a number").positive("Must be a non-negative number")}),I=y.forwardRef((t,m)=>{const{closeDialog:x}=t,[h,b]=y.useState(!1),g=async s=>{var l,p,f;b(!0);const a=await Y(s);((l=a==null?void 0:a.data)==null?void 0:l.status)!=="failed"?v.push(e.jsx(w,{title:"Successfuly added",type:"success",duration:2500,children:(p=a==null?void 0:a.data)==null?void 0:p.message}),{placement:"top-end"}):v.push(e.jsx(w,{title:"Something went wrong!!!",type:"danger",duration:2500,children:(f=a==null?void 0:a.data)==null?void 0:f.message}),{placement:"top-end"}),console.log({result:a}),b(!1),x()};return e.jsx(S,{innerRef:m,initialValues:{organizationName:"",industry:"",contact:null,website:"",numberOfEmployees:null,notes:"",email:""},validationSchema:_,onSubmit:async(s,{setSubmitting:a})=>{await g(s),a(!1)},children:({touched:s,errors:a,values:l,setFieldValue:p})=>e.jsxs(F,{children:[e.jsx(M,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Organization Name*",invalid:a.organizationName&&s.organizationName,errorMessage:a.organizationName,children:e.jsx(r,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:n,prefix:e.jsx(Z,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Industry*",invalid:a.industry&&s.industry,errorMessage:a.industry,children:e.jsx(r,{type:"text",autoComplete:"off",name:"industry",value:l.industry,placeholder:"Organization Industry",component:n,prefix:e.jsx(B,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Contact*",invalid:a.contact&&s.contact,errorMessage:a.contact,children:e.jsx(r,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:n,prefix:e.jsx(G,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Email*",invalid:a.email&&s.email,errorMessage:a.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:n,prefix:e.jsx(L,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Website",invalid:a.website&&s.website,errorMessage:a.website,children:e.jsx(r,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:n,prefix:e.jsx(W,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Number Of Employees",invalid:a.numberOfEmployees&&s.numberOfEmployees,errorMessage:a.numberOfEmployees,children:e.jsx(r,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:n,prefix:e.jsx(U,{className:"text-xl"})})})})]}),e.jsx(o,{label:"Description",labelClass:"!justify-start",invalid:a.notes&&s.notes,errorMessage:a.notes,children:e.jsx(r,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Description",component:n})})]})})}),e.jsx(H,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(N,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:x,children:"Cancel"}),e.jsx(N,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(T,{}),loading:h,children:"Save"})]})})]})})});I.displayName="OrganizationForm";const J=E().shape({email:u().required("Please enter your user name"),password:u().required("Please enter your password"),rememberMe:V()}),ea=t=>{const{disableSubmit:m=!1,className:x,forgotPasswordUrl:h="/forgot-password",signUpUrl:b="/sign-up"}=t,[g,s]=R(),[a,l]=y.useState(!1),{signIn:p}=A(),f=async(c,i)=>{const{email:j,password:O}=c;i(!0);const d=await p({email:j,password:O});(d==null?void 0:d.status)==="failed"&&v.push(e.jsx(w,{title:"Sign in failed",type:"danger",duration:2500,children:d==null?void 0:d.message}),{placement:"top-end"}),i(!1)},C=()=>{l(!1)};return e.jsxs("div",{className:x,children:[g&&e.jsx(q,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:g})}),e.jsx(S,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:J,onSubmit:(c,{setSubmitting:i})=>{m?i(!1):f(c,i)},children:({touched:c,errors:i,isSubmitting:j,setFieldValue:O})=>e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(o,{label:"User Name",invalid:i.email&&c.email,errorMessage:i.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:n})}),e.jsx(o,{label:"Password",invalid:i.password&&c.password,errorMessage:i.password,children:e.jsx(r,{autoComplete:"off",name:"password",placeholder:"Password",component:D})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(r,{className:"mb-0",name:"rememberMe",component:k,children:"Remember Me"}),e.jsx(P,{to:h,children:"Forgot Password?"})]}),e.jsx(N,{block:!0,loading:j,variant:"solid",type:"submit",children:j?"Signing in...":"Sign In"})]})})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Onboard your organization"," "]}),e.jsx("button",{onClick:()=>{l(!0)},children:e.jsx("span",{className:"text-indigo-700",children:"Onboarding..."})})]}),e.jsxs($,{isOpen:a,onClose:C,children:[e.jsx("h5",{className:"mb-4",children:"Register Your Organization"}),e.jsx(I,{closeDialog:C})]})]})};export{ea as S};
