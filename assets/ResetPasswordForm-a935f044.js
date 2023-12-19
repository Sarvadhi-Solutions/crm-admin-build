import{r as F,ap as C,j as s,aT as y}from"./index-fbeb73e8.js";import{F as N,a as c}from"./FormItem-be8e2cb8.js";import{B as m}from"./Button-fa703339.js";import{A as k}from"./Alert-9eeb3e1b.js";import{P as l}from"./PasswordInput-1f15a2a5.js";import{A as R}from"./ActionLink-9c561e27.js";import{u as S}from"./useTimeOutMessage-ccdc0e31.js";import{F as A,a as I,b as p}from"./formik.esm-23ee2cb1.js";import{c as M,a as w,g as B}from"./index.esm-3c9a3967.js";const Y=M().shape({password:w().required("Please enter your password"),confirmPassword:w().oneOf([B("password")],"Your passwords do not match")}),z=f=>{const{disableSubmit:h=!1,className:u,signInUrl:x="/sign-in"}=f,[n,j]=F.useState(!1),[t,g]=S(),P=C(),b=async(a,e)=>{var i,d;const{password:o}=a;e(!0);try{(await y({password:o})).data&&(e(!1),j(!0))}catch(r){g(((d=(i=r==null?void 0:r.response)==null?void 0:i.data)==null?void 0:d.message)||r.toString()),e(!1)}},v=()=>{P("/sign-in")};return s.jsxs("div",{className:u,children:[s.jsx("div",{className:"mb-6",children:n?s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Reset done"}),s.jsx("p",{children:"Your password has been successfully reset"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Set new password"}),s.jsx("p",{children:"Your new password must different to previos password"})]})}),t&&s.jsx(k,{showIcon:!0,className:"mb-4",type:"danger",children:t}),s.jsx(A,{initialValues:{password:"123Qwe1",confirmPassword:"123Qwe1"},validationSchema:Y,onSubmit:(a,{setSubmitting:e})=>{h?e(!1):b(a,e)},children:({touched:a,errors:e,isSubmitting:o})=>s.jsx(I,{children:s.jsxs(N,{children:[n?s.jsx(m,{block:!0,variant:"solid",type:"button",onClick:v,children:"Continue"}):s.jsxs(s.Fragment,{children:[s.jsx(c,{label:"Password",invalid:e.password&&a.password,errorMessage:e.password,children:s.jsx(p,{autoComplete:"off",name:"password",placeholder:"Password",component:l})}),s.jsx(c,{label:"Confirm Password",invalid:e.confirmPassword&&a.confirmPassword,errorMessage:e.confirmPassword,children:s.jsx(p,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:l})}),s.jsx(m,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Submiting...":"Submit"})]}),s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("span",{children:"Back to "}),s.jsx(R,{to:x,children:"Sign in"})]})]})})})]})};export{z as R};
