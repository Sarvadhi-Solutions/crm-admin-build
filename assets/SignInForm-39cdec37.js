import{v as g,j as e}from"./index-c6cd2f1f.js";import{I as w}from"./Input-6c0ef453.js";import{B as b}from"./Button-6fab1b0a.js";import{C as F}from"./index-bfed9162.js";import{F as v,a as t}from"./FormItem-6dd4daa4.js";import{A as y}from"./Alert-b89c58d4.js";import{P as I}from"./PasswordInput-9a406d70.js";import{A as m}from"./ActionLink-ec49023c.js";import{u as N}from"./useTimeOutMessage-7d0f1e00.js";import{F as M,a as P,b as n}from"./formik.esm-d0f2dcaf.js";import{c as S,a as l,f as A}from"./index.esm-1205adb2.js";import{t as C,N as U}from"./toast-0cbca45a.js";const k=S().shape({email:l().required("Please enter your user name"),password:l().required("Please enter your password"),rememberMe:A()}),J=d=>{const{disableSubmit:c=!1,className:p,forgotPasswordUrl:f="/forgot-password",signUpUrl:u="/sign-up"}=d,[i,$]=N(),{signIn:x}=g(),h=async(a,s)=>{const{email:o,password:j}=a;s(!0);const r=await x({email:o,password:j});(r==null?void 0:r.status)==="failed"&&C.push(e.jsx(U,{title:"Sign in failed",type:"danger",duration:2500,children:r==null?void 0:r.message}),{placement:"top-end"}),s(!1)};return e.jsxs("div",{className:p,children:[i&&e.jsx(y,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:i})}),e.jsx(M,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:k,onSubmit:(a,{setSubmitting:s})=>{c?s(!1):h(a,s)},children:({touched:a,errors:s,isSubmitting:o})=>e.jsx(P,{children:e.jsxs(v,{children:[e.jsx(t,{label:"User Name",invalid:s.email&&a.email,errorMessage:s.email,children:e.jsx(n,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:w})}),e.jsx(t,{label:"Password",invalid:s.password&&a.password,errorMessage:s.password,children:e.jsx(n,{autoComplete:"off",name:"password",placeholder:"Password",component:I})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(n,{className:"mb-0",name:"rememberMe",component:F,children:"Remember Me"}),e.jsx(m,{to:f,children:"Forgot Password?"})]}),e.jsx(b,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(m,{to:u,children:"Sign up"})]})]})})})]})};export{J as S};
