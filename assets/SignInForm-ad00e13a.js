import{r as b,al as A,j as e,v as k}from"./index-01836369.js";import{I as n}from"./Input-de9bab6e.js";import{B as y}from"./Button-a46452f7.js";import{C as q}from"./index-d8fc78ac.js";import{F as S,a as o}from"./FormItem-8bd92bc5.js";import{A as P}from"./Alert-d402928e.js";import{P as R}from"./PasswordInput-b7b078cb.js";import{A as V}from"./ActionLink-7467618c.js";import{u as $}from"./useTimeOutMessage-7e223c2c.js";import{F as M,a as F,b as r}from"./formik.esm-0b8089c1.js";import{c as E,a as g,d as z,f as D}from"./index.esm-e4a4a14e.js";import{t as N,N as v}from"./toast-923c10a7.js";import"./index-a2edb971.js";import"./Badge-a322da11.js";import"./RangeCalendar-90d0a69e.js";import"./Card-2dc07d7d.js";import"./index-61590567.js";import{D as U}from"./Dialog-4fd81af0.js";import"./Drawer-b1603852.js";import"./index-3b5b12e0.js";import"./toString-dfdb4974.js";import"./index-d1a1662d.js";import"./index-035dac1c.js";import"./index-0ef1a83d.js";import"./Pagination-c8e6fde5.js";import"./Progress-5c62251c.js";import"./index-4a72f1ca.js";import"./ScrollBar-cc8c4864.js";import"./index-5c080796.js";import"./Select-c320d599.js";import"./Skeleton-743f8ad2.js";import"./index-d83ef631.js";import"./Switcher-3a0c2c62.js";import"./index-9a90023d.js";import"./index-bf1aff49.js";import"./Tag-b2e6ee28.js";import"./index-c396e082.js";import"./index-9bafd396.js";import"./Tooltip-2ee5bf6e.js";import"./Upload-f2b9b624.js";import{c as T,A as B}from"./index.esm-4c0a85b7.js";import{a as Z}from"./index.esm-a7f707ee.js";import{a as L}from"./index.esm-6569b1d4.js";import{N as W}from"./index.esm-64f3e5ec.js";import{b as G}from"./index.esm-60bbf07c.js";import{T as H}from"./index.esm-8bd9161a.js";import"./Views-e7196e20.js";import"./chart.constant-d16ea559.js";import"./GrowShrinkTag-c64d92ad.js";import"./DataTable-a7013519.js";import"./react-tooltip.min-9096483d.js";import"./RichTextEditor-6ee29ff1.js";import"./SegmentItemOption-a5df08eb.js";import{S as Y}from"./StickyFooter-18ccdafd.js";import"./SvgIcon-fb1c74f5.js";import{a as _}from"./SuperAdminServices-05f733bb.js";const J=E().shape({organizationName:g().required("Organization Name Required"),industry:g().required("Industry Required"),contact:z().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits"," Contact must be exactly 10 digits",i=>{if(i){const m=Number(i);return/^\d{10}$/.test(m.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",i=>i?Number(i).toString().length<=10:!0),email:g().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),numberOfEmployees:z().typeError("Must be a number").positive("Must be a non-negative number")}),I=b.forwardRef((i,m)=>{const j=A(),{closeDialog:f}=i,[w,p]=b.useState(!1),O=async s=>{var l,u,x;p(!0);const a=await _(s);((l=a==null?void 0:a.data)==null?void 0:l.status)!=="failed"?(N.push(e.jsx(v,{title:"Successfuly added",type:"success",duration:2500,children:(u=a==null?void 0:a.data)==null?void 0:u.message}),{placement:"top-end"}),j("/welcome")):N.push(e.jsx(v,{title:"Something went wrong!!!",type:"danger",duration:2500,children:(x=a==null?void 0:a.data)==null?void 0:x.message}),{placement:"top-end"}),p(!1),f()};return e.jsx(M,{innerRef:m,initialValues:{organizationName:"",industry:"",contact:null,website:"",numberOfEmployees:null,notes:"",email:""},validationSchema:J,onSubmit:async(s,{setSubmitting:a})=>{await O(s),a(!1)},children:({touched:s,errors:a,values:l,setFieldValue:u})=>e.jsxs(F,{children:[e.jsx(S,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Organization Name*",invalid:a.organizationName&&s.organizationName,errorMessage:a.organizationName,children:e.jsx(r,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:n,prefix:e.jsx(L,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Industry*",invalid:a.industry&&s.industry,errorMessage:a.industry,children:e.jsx(r,{type:"text",autoComplete:"off",name:"industry",value:l.industry,placeholder:"Organization Industry",component:n,prefix:e.jsx(Z,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Contact*",invalid:a.contact&&s.contact,errorMessage:a.contact,children:e.jsx(r,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:n,prefix:e.jsx(H,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Email*",invalid:a.email&&s.email,errorMessage:a.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:n,prefix:e.jsx(W,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Website",invalid:a.website&&s.website,errorMessage:a.website,children:e.jsx(r,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:n,prefix:e.jsx(G,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(o,{label:"Number Of Employees",invalid:a.numberOfEmployees&&s.numberOfEmployees,errorMessage:a.numberOfEmployees,children:e.jsx(r,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:n,prefix:e.jsx(T,{className:"text-xl"})})})})]})]})})}),e.jsx(Y,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(y,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:f,children:"Cancel"}),e.jsx(y,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(B,{}),loading:w,children:"Save"})]})})]})})});I.displayName="OrganizationForm";const K=E().shape({email:g().required("Please enter your user name"),password:g().required("Please enter your password"),rememberMe:D()}),aa=i=>{const{disableSubmit:m=!1,className:j,forgotPasswordUrl:f="/forgot-password",signUpUrl:w="/sign-up"}=i,[p,O]=$(),[s,a]=b.useState(!1),{signIn:l}=k(),u=async(c,t)=>{const{email:h,password:C}=c;t(!0);const d=await l({email:h,password:C});(d==null?void 0:d.status)==="failed"&&N.push(e.jsx(v,{title:"Sign in failed",type:"danger",duration:2500,children:d==null?void 0:d.message}),{placement:"top-end"}),t(!1)},x=()=>{a(!1)};return e.jsxs("div",{className:j,children:[p&&e.jsx(P,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:p})}),e.jsx(M,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:K,onSubmit:(c,{setSubmitting:t})=>{m?t(!1):u(c,t)},children:({touched:c,errors:t,isSubmitting:h,setFieldValue:C})=>e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(o,{label:"User Name",invalid:t.email&&c.email,errorMessage:t.email,children:e.jsx(r,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:n})}),e.jsx(o,{label:"Password",invalid:t.password&&c.password,errorMessage:t.password,children:e.jsx(r,{autoComplete:"off",name:"password",placeholder:"Password",component:R})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(r,{className:"mb-0",name:"rememberMe",component:q,children:"Remember Me"}),e.jsx(V,{to:f,children:"Forgot Password?"})]}),e.jsx(y,{block:!0,loading:h,variant:"solid",type:"submit",children:h?"Signing in...":"Sign In"})]})})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Onboard your organization"," "]}),e.jsx("button",{onClick:()=>{a(!0)},children:e.jsx("span",{className:"text-indigo-700",children:"Onboarding..."})})]}),e.jsxs(U,{isOpen:s,onClose:x,children:[e.jsx("h5",{className:"mb-4",children:"Register Your Organization"}),e.jsx(I,{closeDialog:x})]})]})};export{aa as S};
