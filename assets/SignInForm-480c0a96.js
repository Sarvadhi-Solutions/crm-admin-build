import{r as b,al as A,j as e,v as k}from"./index-b5c96d6f.js";import{I as n}from"./Input-caf25bb9.js";import{B as y}from"./Button-da51d2ac.js";import{C as q}from"./index-982187c3.js";import{F as S,a as o}from"./FormItem-37a1eee9.js";import{A as P}from"./Alert-94514008.js";import{P as R}from"./PasswordInput-5cd5547f.js";import{A as V}from"./ActionLink-347e9742.js";import{u as $}from"./useTimeOutMessage-6c4a37c8.js";import{F as M,a as F,b as r}from"./formik.esm-c273ee2f.js";import{c as E,a as g,d as z,f as D}from"./index.esm-57a69e71.js";import{t as N,N as v}from"./toast-d18b180d.js";import"./index-bcfa2e40.js";import"./Badge-1a8ca56b.js";import"./RangeCalendar-9a53402d.js";import"./Card-c42b1469.js";import"./index-20a15026.js";import{D as U}from"./Dialog-fa8d09a4.js";import"./Drawer-1133a348.js";import"./index-f6e3e571.js";import"./toString-7113ae37.js";import"./index-491f8d75.js";import"./index-086985ce.js";import"./index-3e540662.js";import"./Pagination-6b86cff6.js";import"./Progress-129ff5fc.js";import"./index-cc973a23.js";import"./ScrollBar-5b47d6b7.js";import"./index-5d71cd0c.js";import"./Select-3ec74fb5.js";import"./Skeleton-84c1526f.js";import"./index-89155a90.js";import"./Switcher-271d4057.js";import"./index-d386bcd8.js";import"./index-b228c068.js";import"./Tag-72aa2236.js";import"./index-c8d246ba.js";import"./index-f714a4bf.js";import"./Tooltip-997e0ead.js";import"./Upload-ed09c80a.js";import{c as T,A as B}from"./index.esm-9702f6b8.js";import{a as Z}from"./index.esm-bb1b8dcb.js";import{a as L}from"./index.esm-d697353e.js";import{N as W}from"./index.esm-940af124.js";import{b as G}from"./index.esm-13d2307f.js";import{T as H}from"./index.esm-601db039.js";import"./Views-d078b8aa.js";import"./chart.constant-8521dba9.js";import"./GrowShrinkTag-683b27de.js";import"./DataTable-81997107.js";import"./react-tooltip.min-fb848c7c.js";import"./RichTextEditor-9614330b.js";import"./SegmentItemOption-512ae69d.js";import{S as Y}from"./StickyFooter-92cfccef.js";import"./SvgIcon-d3a0c21b.js";import{a as _}from"./SuperAdminServices-213ff9d5.js";const J=E().shape({organizationName:g().required("Organization Name Required"),industry:g().required("Industry Required"),contact:z().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits"," Contact must be exactly 10 digits",i=>{if(i){const m=Number(i);return/^\d{10}$/.test(m.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",i=>i?Number(i).toString().length<=10:!0),email:g().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),numberOfEmployees:z().typeError("Must be a number").positive("Must be a non-negative number")}),I=b.forwardRef((i,m)=>{const j=A(),{closeDialog:f}=i,[w,p]=b.useState(!1),O=async s=>{var l,u,x;p(!0);const a=await _(s);((l=a==null?void 0:a.data)==null?void 0:l.status)!=="failed"?(N.push(e.jsx(v,{title:"Successfuly added",type:"success",duration:2500,children:(u=a==null?void 0:a.data)==null?void 0:u.message}),{placement:"top-end"}),j("/welcome")):N.push(e.jsx(v,{title:"Something went wrong!!!",type:"danger",duration:2500,children:(x=a==null?void 0:a.data)==null?void 0:x.message}),{placement:"top-end"}),p(!1),f()};return e.jsx(M,{innerRef:m,initialValues:{organizationName:"",industry:"",contact:null,website:"",numberOfEmployees:null,notes:"",email:""},validationSchema:J,onSubmit:async(s,{setSubmitting:a})=>{await O(s),a(!1)},children:({touched:s,errors:a,values:l,setFieldValue:u})=>e.jsxs(F,{children:[e.jsx(S,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Organization Name*",invalid:a.organizationName&&s.organizationName,errorMessage:a.organizationName,children:e.jsx(r,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:n,prefix:e.jsx(L,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Industry*",invalid:a.industry&&s.industry,errorMessage:a.industry,children:e.jsx(r,{type:"text",autoComplete:"off",name:"industry",value:l.industry,placeholder:"Organization Industry",component:n,prefix:e.jsx(Z,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Contact*",invalid:a.contact&&s.contact,errorMessage:a.contact,children:e.jsx(r,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:n,prefix:e.jsx(H,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Email*",invalid:a.email&&s.email,errorMessage:a.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:n,prefix:e.jsx(W,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Website",invalid:a.website&&s.website,errorMessage:a.website,children:e.jsx(r,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:n,prefix:e.jsx(G,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Number Of Employees",invalid:a.numberOfEmployees&&s.numberOfEmployees,errorMessage:a.numberOfEmployees,children:e.jsx(r,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:n,prefix:e.jsx(T,{className:"text-xl"})})})})]})]})})}),e.jsx(Y,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(y,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:f,children:"Cancel"}),e.jsx(y,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(B,{}),loading:w,children:"Save"})]})})]})})});I.displayName="OrganizationForm";const K=E().shape({email:g().required("Please enter your user name"),password:g().required("Please enter your password"),rememberMe:D()}),aa=i=>{const{disableSubmit:m=!1,className:j,forgotPasswordUrl:f="/forgot-password",signUpUrl:w="/sign-up"}=i,[p,O]=$(),[s,a]=b.useState(!1),{signIn:l}=k(),u=async(c,t)=>{const{email:h,password:C}=c;t(!0);const d=await l({email:h,password:C});(d==null?void 0:d.status)==="failed"&&N.push(e.jsx(v,{title:"Sign in failed",type:"danger",duration:2500,children:d==null?void 0:d.message}),{placement:"top-end"}),t(!1)},x=()=>{a(!1)};return e.jsxs("div",{className:j,children:[p&&e.jsx(P,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:p})}),e.jsx(M,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:K,onSubmit:(c,{setSubmitting:t})=>{m?t(!1):u(c,t)},children:({touched:c,errors:t,isSubmitting:h,setFieldValue:C})=>e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(o,{label:"User Name",invalid:t.email&&c.email,errorMessage:t.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:n})}),e.jsx(o,{label:"Password",invalid:t.password&&c.password,errorMessage:t.password,children:e.jsx(r,{autoComplete:"off",name:"password",placeholder:"Password",component:R})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(r,{className:"mb-0",name:"rememberMe",component:q,children:"Remember Me"}),e.jsx(V,{to:f,children:"Forgot Password?"})]}),e.jsx(y,{block:!0,loading:h,variant:"solid",type:"submit",children:h?"Signing in...":"Sign In"})]})})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Onboard your organization"," "]}),e.jsx("button",{onClick:()=>{a(!0)},children:e.jsx("span",{className:"text-indigo-700",children:"Onboarding..."})})]}),e.jsxs(U,{isOpen:s,onClose:x,children:[e.jsx("h5",{className:"mb-4",children:"Register Your Organization"}),e.jsx(I,{closeDialog:x})]})]})};export{aa as S};
