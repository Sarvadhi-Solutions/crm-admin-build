import{v as A,r as g,j as a}from"./index-4675262e.js";import{F as M,a as m}from"./FormItem-f0a568d5.js";import{I as c}from"./Input-b6f85393.js";import{B as O}from"./Button-0b68e0a2.js";import{A as I}from"./Alert-e71f6da7.js";import{P as E}from"./PasswordInput-ac1309a6.js";import{A as $}from"./ActionLink-bff13862.js";import{u as U}from"./useTimeOutMessage-22127de5.js";import{F as L,a as k,b as l}from"./formik.esm-be6a51d3.js";import{c as x,a as p}from"./index.esm-b46f51f2.js";import{t as j,N}from"./toast-3dd25308.js";import"./index-32f51c8f.js";import"./Badge-8de88fc8.js";import"./RangeCalendar-7055646c.js";import"./Card-1a4ea392.js";import"./index-b0ec1b4c.js";import"./index-40ee1fcd.js";import"./Dialog-2674822d.js";import"./Drawer-4463e2fa.js";import"./index-395f0e43.js";import"./toString-5a26993f.js";import"./index-799960ed.js";import"./index-567c5b37.js";import"./index-29fb88aa.js";import"./Pagination-2e203a3f.js";import"./Progress-163e7627.js";import"./index-ac935edf.js";import"./ScrollBar-c918a49a.js";import"./index-befed326.js";import{S as B}from"./Select-ecee390b.js";import"./Skeleton-5516a2a7.js";import"./index-819658e8.js";import"./Switcher-abd8f95e.js";import"./index-dc5daab9.js";import"./index-aa614f08.js";import"./Tag-613d51b1.js";import"./index-bcfe7745.js";import"./index-9a848025.js";import"./Tooltip-2d93a4c5.js";import"./Upload-e8a604f5.js";import{b as Z}from"./SuperAdminServices-055ad6c6.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=b=>{const{disableSubmit:w=!1,className:v,signInUrl:z="/sign-in"}=b,{signUp:y}=A(),[u,q]=U(),[C,F]=g.useState([]),S=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:f,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:f};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const f=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));F(f)}};return g.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[u&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:u}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{w?e(!1):S(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{isClearable:!0,autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:C,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:c})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:c})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:c})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
