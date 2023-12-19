import{r as N,al as R,w as S,j as s,aU as A}from"./index-73cb1959.js";import{F as I,a as m}from"./FormItem-683038f1.js";import{B as l}from"./Button-82c5fc13.js";import{A as M}from"./Alert-be53f522.js";import{P as p}from"./PasswordInput-c935fd5e.js";import{A as B}from"./ActionLink-e88c1206.js";import{u as L}from"./useTimeOutMessage-aa205bc2.js";import{F as U,a as Y,b as w}from"./formik.esm-9daa4f0b.js";import{c as $,a as f,g as z}from"./index.esm-6a9eb370.js";const E=$().shape({password:f().required("Please enter your password"),confirmPassword:f().oneOf([z("password")],"Your passwords do not match")}),W=h=>{const{disableSubmit:u=!1,className:x,signInUrl:j="/sign-in"}=h,[n,g]=N.useState(!1),[t,P]=L(),b=R(),v=S(),i=new URLSearchParams(v.search),F=i.get("organization"),C=i.get("token"),k=async(a,e)=>{var c,d;const{password:r}=a;e(!0);try{(await A({password:r,organization:F,token:C})).data&&(e(!1),g(!0))}catch(o){P(((d=(c=o==null?void 0:o.response)==null?void 0:c.data)==null?void 0:d.message)||o.toString()),e(!1)}},y=()=>{b("/sign-in")};return s.jsxs("div",{className:x,children:[s.jsx("div",{className:"mb-6",children:n?s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Reset done"}),s.jsx("p",{children:"Your password has been successfully reset"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Set new password"}),s.jsx("p",{children:"Your new password must different to previos password"})]})}),t&&s.jsx(M,{showIcon:!0,className:"mb-4",type:"danger",children:t}),s.jsx(U,{initialValues:{password:"123Qwe1",confirmPassword:"123Qwe1"},validationSchema:E,onSubmit:(a,{setSubmitting:e})=>{u?e(!1):k(a,e)},children:({touched:a,errors:e,isSubmitting:r})=>s.jsx(Y,{children:s.jsxs(I,{children:[n?s.jsx(l,{block:!0,variant:"solid",type:"button",onClick:y,children:"Continue"}):s.jsxs(s.Fragment,{children:[s.jsx(m,{label:"Password",invalid:e.password&&a.password,errorMessage:e.password,children:s.jsx(w,{autoComplete:"off",name:"password",placeholder:"Password",component:p})}),s.jsx(m,{label:"Confirm Password",invalid:e.confirmPassword&&a.confirmPassword,errorMessage:e.confirmPassword,children:s.jsx(w,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:p})}),s.jsx(l,{block:!0,loading:r,variant:"solid",type:"submit",children:r?"Submiting...":"Submit"})]}),s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("span",{children:"Back to "}),s.jsx(B,{to:j,children:"Sign in"})]})]})})})]})};export{W as R};
