import{r as F,aq as C,j as s,aS as y}from"./index-a9c93031.js";import{F as N,a as c}from"./FormItem-493c2060.js";import{B as m}from"./Button-47bf58f7.js";import{A as S}from"./Alert-5526c2c4.js";import{P as l}from"./PasswordInput-0ff5ff5d.js";import{A as k}from"./ActionLink-1f553042.js";import{u as R}from"./useTimeOutMessage-07e9dbb2.js";import{F as A,a as I,b as p}from"./formik.esm-4acf00de.js";import{c as M,a as w,g as B}from"./index.esm-e5cd3259.js";const Y=M().shape({password:w().required("Please enter your password"),confirmPassword:w().oneOf([B("password")],"Your passwords do not match")}),z=f=>{const{disableSubmit:h=!1,className:u,signInUrl:x="/sign-in"}=f,[n,j]=F.useState(!1),[t,g]=R(),P=C(),b=async(a,e)=>{var i,d;const{password:o}=a;e(!0);try{(await y({password:o})).data&&(e(!1),j(!0))}catch(r){g(((d=(i=r==null?void 0:r.response)==null?void 0:i.data)==null?void 0:d.message)||r.toString()),e(!1)}},v=()=>{P("/sign-in")};return s.jsxs("div",{className:u,children:[s.jsx("div",{className:"mb-6",children:n?s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Reset done"}),s.jsx("p",{children:"Your password has been successfully reset"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Set new password"}),s.jsx("p",{children:"Your new password must different to previos password"})]})}),t&&s.jsx(S,{showIcon:!0,className:"mb-4",type:"danger",children:t}),s.jsx(A,{initialValues:{password:"123Qwe1",confirmPassword:"123Qwe1"},validationSchema:Y,onSubmit:(a,{setSubmitting:e})=>{h?e(!1):b(a,e)},children:({touched:a,errors:e,isSubmitting:o})=>s.jsx(I,{children:s.jsxs(N,{children:[n?s.jsx(m,{block:!0,variant:"solid",type:"button",onClick:v,children:"Continue"}):s.jsxs(s.Fragment,{children:[s.jsx(c,{label:"Password",invalid:e.password&&a.password,errorMessage:e.password,children:s.jsx(p,{autoComplete:"off",name:"password",placeholder:"Password",component:l})}),s.jsx(c,{label:"Confirm Password",invalid:e.confirmPassword&&a.confirmPassword,errorMessage:e.confirmPassword,children:s.jsx(p,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:l})}),s.jsx(m,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Submiting...":"Submit"})]}),s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("span",{children:"Back to "}),s.jsx(k,{to:x,children:"Sign in"})]})]})})})]})};export{z as R};
