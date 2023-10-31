import{r as b,al as A,j as e,v as k}from"./index-54ca42fc.js";import{I as n}from"./Input-6f6282ca.js";import{B as y}from"./Button-acf424a5.js";import{C as q}from"./index-a7ae3561.js";import{F as S,a as o}from"./FormItem-01929b19.js";import{A as P}from"./Alert-f71ef527.js";import{P as R}from"./PasswordInput-b3018fe3.js";import{A as V}from"./ActionLink-693b5699.js";import{u as $}from"./useTimeOutMessage-8eea9716.js";import{F as M,a as F,b as r}from"./formik.esm-b99e5978.js";import{c as E,a as g,d as z,f as D}from"./index.esm-8e80d5ad.js";import{t as N,N as v}from"./toast-1afc7125.js";import"./index-08c9f209.js";import"./Badge-7ea1afdb.js";import"./RangeCalendar-c9c9eebc.js";import"./Card-a23c20fb.js";import"./index-7ffe65fc.js";import{D as U}from"./Dialog-72a815cb.js";import"./Drawer-5c784020.js";import"./index-77f8daa6.js";import"./toString-f912f267.js";import"./index-1c856de8.js";import"./index-59d863f4.js";import"./index-39cde6be.js";import"./Pagination-88f4b10a.js";import"./Progress-757dfe5e.js";import"./index-3396de21.js";import"./ScrollBar-bdc4d5a9.js";import"./index-2299d96e.js";import"./Select-dcced844.js";import"./Skeleton-55912bfd.js";import"./index-fa71559d.js";import"./Switcher-d1660486.js";import"./index-d0d30922.js";import"./index-65de947e.js";import"./Tag-d6f79b22.js";import"./index-bc1b91de.js";import"./index-3c2d94f0.js";import"./Tooltip-a3ba2e51.js";import"./Upload-928853bc.js";import{c as T,A as B}from"./index.esm-779c0541.js";import{a as Z}from"./index.esm-b6692532.js";import{a as L}from"./index.esm-ccdca523.js";import{N as W}from"./index.esm-7dd42512.js";import{b as G}from"./index.esm-09b17222.js";import{T as H}from"./index.esm-16b1324c.js";import"./Views-af87b139.js";import"./chart.constant-84220a07.js";import"./GrowShrinkTag-5a5f87d0.js";import"./DataTable-141d6e94.js";import"./react-tooltip.min-98a8b674.js";import"./RichTextEditor-185e9ccc.js";import"./SegmentItemOption-e0dc151d.js";import{S as Y}from"./StickyFooter-1c5edd8a.js";import"./SvgIcon-8abb18ba.js";import{a as _}from"./SuperAdminServices-72ac62f5.js";const J=E().shape({organizationName:g().required("Organization Name Required"),industry:g().required("Industry Required"),contact:z().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits"," Contact must be exactly 10 digits",i=>{if(i){const m=Number(i);return/^\d{10}$/.test(m.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",i=>i?Number(i).toString().length<=10:!0),email:g().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),numberOfEmployees:z().typeError("Must be a number").positive("Must be a non-negative number")}),I=b.forwardRef((i,m)=>{const j=A(),{closeDialog:f}=i,[w,p]=b.useState(!1),O=async s=>{var l,u,x;p(!0);const a=await _(s);((l=a==null?void 0:a.data)==null?void 0:l.status)!=="failed"?(N.push(e.jsx(v,{title:"Successfuly added",type:"success",duration:2500,children:(u=a==null?void 0:a.data)==null?void 0:u.message}),{placement:"top-end"}),j("/welcome")):N.push(e.jsx(v,{title:"Something went wrong!!!",type:"danger",duration:2500,children:(x=a==null?void 0:a.data)==null?void 0:x.message}),{placement:"top-end"}),p(!1),f()};return e.jsx(M,{innerRef:m,initialValues:{organizationName:"",industry:"",contact:null,website:"",numberOfEmployees:null,notes:"",email:""},validationSchema:J,onSubmit:async(s,{setSubmitting:a})=>{await O(s),a(!1)},children:({touched:s,errors:a,values:l,setFieldValue:u})=>e.jsxs(F,{children:[e.jsx(S,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Organization Name*",invalid:a.organizationName&&s.organizationName,errorMessage:a.organizationName,children:e.jsx(r,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:n,prefix:e.jsx(L,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Industry*",invalid:a.industry&&s.industry,errorMessage:a.industry,children:e.jsx(r,{type:"text",autoComplete:"off",name:"industry",value:l.industry,placeholder:"Organization Industry",component:n,prefix:e.jsx(Z,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Contact*",invalid:a.contact&&s.contact,errorMessage:a.contact,children:e.jsx(r,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:n,prefix:e.jsx(H,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Email*",invalid:a.email&&s.email,errorMessage:a.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:n,prefix:e.jsx(W,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Website",invalid:a.website&&s.website,errorMessage:a.website,children:e.jsx(r,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:n,prefix:e.jsx(G,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Number Of Employees",invalid:a.numberOfEmployees&&s.numberOfEmployees,errorMessage:a.numberOfEmployees,children:e.jsx(r,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:n,prefix:e.jsx(T,{className:"text-xl"})})})})]})]})})}),e.jsx(Y,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(y,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:f,children:"Cancel"}),e.jsx(y,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(B,{}),loading:w,children:"Save"})]})})]})})});I.displayName="OrganizationForm";const K=E().shape({email:g().required("Please enter your user name"),password:g().required("Please enter your password"),rememberMe:D()}),aa=i=>{const{disableSubmit:m=!1,className:j,forgotPasswordUrl:f="/forgot-password",signUpUrl:w="/sign-up"}=i,[p,O]=$(),[s,a]=b.useState(!1),{signIn:l}=k(),u=async(c,t)=>{const{email:h,password:C}=c;t(!0);const d=await l({email:h,password:C});(d==null?void 0:d.status)==="failed"&&N.push(e.jsx(v,{title:"Sign in failed",type:"danger",duration:2500,children:d==null?void 0:d.message}),{placement:"top-end"}),t(!1)},x=()=>{a(!1)};return e.jsxs("div",{className:j,children:[p&&e.jsx(P,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:p})}),e.jsx(M,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:K,onSubmit:(c,{setSubmitting:t})=>{m?t(!1):u(c,t)},children:({touched:c,errors:t,isSubmitting:h,setFieldValue:C})=>e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(o,{label:"User Name",invalid:t.email&&c.email,errorMessage:t.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:n})}),e.jsx(o,{label:"Password",invalid:t.password&&c.password,errorMessage:t.password,children:e.jsx(r,{autoComplete:"off",name:"password",placeholder:"Password",component:R})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(r,{className:"mb-0",name:"rememberMe",component:q,children:"Remember Me"}),e.jsx(V,{to:f,children:"Forgot Password?"})]}),e.jsx(y,{block:!0,loading:h,variant:"solid",type:"submit",children:h?"Signing in...":"Sign In"})]})})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Onboard your organization"," "]}),e.jsx("button",{onClick:()=>{a(!0)},children:e.jsx("span",{className:"text-indigo-700",children:"Onboarding..."})})]}),e.jsxs(U,{isOpen:s,onClose:x,children:[e.jsx("h5",{className:"mb-4",children:"Register Your Organization"}),e.jsx(I,{closeDialog:x})]})]})};export{aa as S};
