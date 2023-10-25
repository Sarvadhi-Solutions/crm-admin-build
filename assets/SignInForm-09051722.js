import{r as j,j as e,v as $}from"./index-fbeb73e8.js";import{I as c}from"./Input-ea43c704.js";import{B as z}from"./Button-fa703339.js";import{C as U}from"./index-fa7b3b75.js";import{F as I,a as l}from"./FormItem-be8e2cb8.js";import{A as V}from"./Alert-9eeb3e1b.js";import{P as T}from"./PasswordInput-1f15a2a5.js";import{A as B}from"./ActionLink-9c561e27.js";import{u as Z}from"./useTimeOutMessage-ccdc0e31.js";import{F,a as A,b as o}from"./formik.esm-23ee2cb1.js";import{c as k,a as b,d as E,f as G}from"./index.esm-3c9a3967.js";import{t as O,N as C}from"./toast-8910f630.js";import"./index-193266b4.js";import"./Badge-67aa5111.js";import"./RangeCalendar-07e95539.js";import"./Card-2611bbf0.js";import"./index-197628eb.js";import{D as L}from"./Dialog-04fb7b63.js";import"./Drawer-383b2f06.js";import"./index-91e30e73.js";import"./toString-e7e32846.js";import"./index-2090c75d.js";import"./index-e5cf4612.js";import"./index-9afb8437.js";import"./Pagination-70a157e9.js";import"./Progress-d00a7ee9.js";import"./index-5fefc1aa.js";import"./ScrollBar-f7d5b71e.js";import"./index-4aafab9b.js";import{S as W}from"./Select-d04732be.js";import"./Skeleton-e59059fb.js";import"./index-dcf21671.js";import"./Switcher-0771dd88.js";import"./index-af747e82.js";import"./index-b84a5e6c.js";import"./Tag-a8ec6a60.js";import"./index-f04e83aa.js";import"./index-df93595f.js";import"./Tooltip-56eb9eeb.js";import"./Upload-e917b755.js";import{a as H,b as Y}from"./SuperAdminServices-0283a614.js";import{c as _,A as J}from"./index.esm-7bee018d.js";import{a as K}from"./index.esm-033a5667.js";import{a as Q}from"./index.esm-bdbf5709.js";import{N as X}from"./index.esm-966eae5b.js";import{b as ee}from"./index.esm-394c7a2d.js";import{T as ae}from"./index.esm-859698dd.js";import"./Views-e8d5fb02.js";import"./chart.constant-80226332.js";import"./chart.config-61f234bb.js";import"./DataTable-2ef1b7c2.js";import"./GrowShrinkTag-6bf7fae1.js";import"./react-tooltip.min-6d896212.js";import"./RichTextEditor-554e9538.js";import"./SegmentItemOption-43e428e6.js";import{S as te}from"./StickyFooter-1a744f3f.js";import"./SvgIcon-6b6efa8a.js";const ie=k().shape({organizationName:b().required("Organization Name Required"),industry:b().required("Industry Required"),contact:E().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",n=>!isNaN(n)).test("is-ten-digits"," Contact must be exactly 10 digits",n=>{if(n){const p=Number(n);return/^\d{10}$/.test(p.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",n=>n?Number(n).toString().length<=10:!0),email:b().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),numberOfEmployees:E().typeError("Must be a number").positive("Must be a non-negative number")}),q=j.forwardRef((n,p)=>{const{closeDialog:y}=n,[w,N]=j.useState(!1),v=async s=>{var u,x,f;N(!0);const a=await H(s);((u=a==null?void 0:a.data)==null?void 0:u.status)!=="failed"?O.push(e.jsx(C,{title:"Successfuly added",type:"success",duration:2500,children:(x=a==null?void 0:a.data)==null?void 0:x.message}),{placement:"top-end"}):O.push(e.jsx(C,{title:"Something went wrong!!!",type:"danger",duration:2500,children:(f=a==null?void 0:a.data)==null?void 0:f.message}),{placement:"top-end"}),console.log({result:a}),N(!1),y()};return e.jsx(F,{innerRef:p,initialValues:{organizationName:"",industry:"",contact:null,website:"",numberOfEmployees:null,notes:"",email:""},validationSchema:ie,onSubmit:async(s,{setSubmitting:a})=>{await v(s),a(!1)},children:({touched:s,errors:a,values:u,setFieldValue:x})=>e.jsxs(A,{children:[e.jsx(I,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Organization Name*",invalid:a.organizationName&&s.organizationName,errorMessage:a.organizationName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:c,prefix:e.jsx(Q,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Industry*",invalid:a.industry&&s.industry,errorMessage:a.industry,children:e.jsx(o,{type:"text",autoComplete:"off",name:"industry",value:u.industry,placeholder:"Organization Industry",component:c,prefix:e.jsx(K,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Contact*",invalid:a.contact&&s.contact,errorMessage:a.contact,children:e.jsx(o,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:c,prefix:e.jsx(ae,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Email*",invalid:a.email&&s.email,errorMessage:a.email,children:e.jsx(o,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:c,prefix:e.jsx(X,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Website",invalid:a.website&&s.website,errorMessage:a.website,children:e.jsx(o,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:c,prefix:e.jsx(ee,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(l,{label:"Number Of Employees",invalid:a.numberOfEmployees&&s.numberOfEmployees,errorMessage:a.numberOfEmployees,children:e.jsx(o,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:c,prefix:e.jsx(_,{className:"text-xl"})})})})]}),e.jsx(l,{label:"Description",labelClass:"!justify-start",invalid:a.notes&&s.notes,errorMessage:a.notes,children:e.jsx(o,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Description",component:c})})]})})}),e.jsx(te,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(z,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:y,children:"Cancel"}),e.jsx(z,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(J,{}),loading:w,children:"Save"})]})})]})})});q.displayName="OrganizationForm";const se=k().shape({email:b().required("Please enter your user name"),password:b().required("Please enter your password"),rememberMe:G()}),ma=n=>{const{disableSubmit:p=!1,className:y,forgotPasswordUrl:w="/forgot-password",signUpUrl:N="/sign-up"}=n,[v,s]=Z(),[a,u]=j.useState([]),[x,f]=j.useState(!1),{signIn:D}=$(),P=async(t,i)=>{const{email:d,password:g,organization:r}=t;console.log({organization:r}),i(!0);const h={email:d,password:g};r!=null&&r.value&&(h.organization=r.value);const m=await D(h);(m==null?void 0:m.status)==="failed"&&O.push(e.jsx(C,{title:"Sign in failed",type:"danger",duration:2500,children:m==null?void 0:m.message}),{placement:"top-end"}),i(!1)},R=async()=>{var i,d,g,r,h;const t=await Y();if((i=t==null?void 0:t.data)!=null&&i.data&&((g=(d=t==null?void 0:t.data)==null?void 0:d.data)!=null&&g.length)){const m=(h=(r=t==null?void 0:t.data)==null?void 0:r.data)==null?void 0:h.map(M=>({label:M.organizationName,value:M.id}));console.log(m),u(m)}};j.useEffect(()=>{R()},[]);const S=()=>{f(!1)};return e.jsxs("div",{className:y,children:[v&&e.jsx(V,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:v})}),e.jsx(F,{initialValues:{email:"",password:"",organization:"",rememberMe:!0},validationSchema:se,onSubmit:(t,{setSubmitting:i})=>{p?i(!1):P(t,i)},children:({touched:t,errors:i,isSubmitting:d,setFieldValue:g})=>e.jsx(A,{children:e.jsxs(I,{children:[e.jsx(l,{label:"User Name",invalid:i.email&&t.email,errorMessage:i.email,children:e.jsx(o,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:c})}),e.jsx(l,{label:"Password",invalid:i.password&&t.password,errorMessage:i.password,children:e.jsx(o,{autoComplete:"off",name:"password",placeholder:"Password",component:T})}),e.jsx(l,{label:"Organization",invalid:i.organization&&t.organization,errorMessage:i.organization,children:e.jsx(o,{autoComplete:"off",name:"organization",placeholder:"Organization",component:W,options:a,onChange:r=>{g("organization",r)}})}),e.jsx("div",{className:"flex justify-between mb-6",children:e.jsx(o,{className:"mb-0",name:"rememberMe",component:U,children:"Remember Me"})}),e.jsx(z,{block:!0,loading:d,variant:"solid",type:"submit",children:d?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(B,{to:N,children:"Sign up"})]})]})})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Onboard your organization"," "]}),e.jsx("button",{onClick:()=>{f(!0)},children:e.jsx("span",{className:"text-indigo-700",children:"Onboarding..."})})]}),e.jsxs(L,{isOpen:x,onClose:S,children:[e.jsx("h5",{className:"mb-4",children:"Register Your Organization"}),e.jsx(q,{closeDialog:S})]})]})};export{ma as S};
