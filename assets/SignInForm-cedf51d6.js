import{v as g,j as e}from"./index-de229e0f.js";import{I as w}from"./Input-0edbc257.js";import{B as b}from"./Button-b15cd132.js";import{C as F}from"./index-5d48ec0d.js";import{F as v,a as t}from"./FormItem-babd9538.js";import{A as y}from"./Alert-6c1fb93d.js";import{P as I}from"./PasswordInput-2e03be2e.js";import{A as m}from"./ActionLink-89495218.js";import{u as N}from"./useTimeOutMessage-10f5820a.js";import{F as M,a as P,b as n}from"./formik.esm-db3e081d.js";import{c as S,a as l,f as A}from"./index.esm-863c1a13.js";import{t as C,N as U}from"./toast-2a495ac5.js";const k=S().shape({email:l().required("Please enter your user name"),password:l().required("Please enter your password"),rememberMe:A()}),J=d=>{const{disableSubmit:c=!1,className:p,forgotPasswordUrl:f="/forgot-password",signUpUrl:u="/sign-up"}=d,[i,$]=N(),{signIn:x}=g(),h=async(a,s)=>{const{email:o,password:j}=a;s(!0);const r=await x({email:o,password:j});(r==null?void 0:r.status)==="failed"&&C.push(e.jsx(U,{title:"Sign in failed",type:"danger",duration:2500,children:r==null?void 0:r.message}),{placement:"top-end"}),s(!1)};return e.jsxs("div",{className:p,children:[i&&e.jsx(y,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:i})}),e.jsx(M,{initialValues:{email:"",password:"",rememberMe:!0},validationSchema:k,onSubmit:(a,{setSubmitting:s})=>{c?s(!1):h(a,s)},children:({touched:a,errors:s,isSubmitting:o})=>e.jsx(P,{children:e.jsxs(v,{children:[e.jsx(t,{label:"User Name",invalid:s.email&&a.email,errorMessage:s.email,children:e.jsx(n,{type:"text",autoComplete:"off",name:"email",placeholder:"User Name",component:w})}),e.jsx(t,{label:"Password",invalid:s.password&&a.password,errorMessage:s.password,children:e.jsx(n,{autoComplete:"off",name:"password",placeholder:"Password",component:I})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(n,{className:"mb-0",name:"rememberMe",component:F,children:"Remember Me"}),e.jsx(m,{to:f,children:"Forgot Password?"})]}),e.jsx(b,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(m,{to:u,children:"Sign up"})]})]})})})]})};export{J as S};
