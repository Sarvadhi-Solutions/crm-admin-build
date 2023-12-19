import{v as A,r as g,j as a}from"./index-f0c7b593.js";import{F as M,a as m}from"./FormItem-39c4f499.js";import{I as c}from"./Input-b0936f40.js";import{B as O}from"./Button-7f5aeb19.js";import{A as I}from"./Alert-6365923a.js";import{P as E}from"./PasswordInput-648117bc.js";import{A as $}from"./ActionLink-8892542f.js";import{u as U}from"./useTimeOutMessage-29a6ee87.js";import{F as L,a as k,b as l}from"./formik.esm-251b655f.js";import{c as x,a as p}from"./index.esm-36ab1692.js";import{t as j,N}from"./toast-98ab077b.js";import"./index-e46ae74f.js";import"./Badge-eb9394bd.js";import"./RangeCalendar-4446a681.js";import"./Card-d2bb7bb1.js";import"./index-3454c4af.js";import"./index-7fb568e6.js";import"./Dialog-863f25dc.js";import"./Drawer-3213f845.js";import"./index-096ca5d8.js";import"./toString-15315b0c.js";import"./index-cae4e5da.js";import"./index-cd4a639d.js";import"./index-e9f2e738.js";import"./Pagination-4451079e.js";import"./Progress-c215b6a7.js";import"./index-aa5943b4.js";import"./ScrollBar-af66e651.js";import"./index-2d35600c.js";import{S as B}from"./Select-20b819a9.js";import"./Skeleton-3fb87948.js";import"./index-681acbb6.js";import"./Switcher-52adaf57.js";import"./index-b0e56b87.js";import"./index-0fbd5995.js";import"./Tag-c0e1c031.js";import"./index-11547d1a.js";import"./index-ff0fc04f.js";import"./Tooltip-c002e367.js";import"./Upload-652ef9c2.js";import{b as Z}from"./SuperAdminServices-e70e3105.js";const _=x().shape({firstName:p().required("First name is required"),lastName:p().required("Last name is required"),email:p().email("Invalid email address").required("Email is required"),phone:p().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),password:p().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required"),organization:x().required("Select Your Organization")}),Pa=b=>{const{disableSubmit:w=!1,className:v,signInUrl:z="/sign-in"}=b,{signUp:y}=A(),[u,q]=U(),[C,F]=g.useState([]),S=async(t,e)=>{const{firstName:o,phone:r,lastName:n,password:d,email:f,organization:s}=t;e(!0);const h={firstName:o,phone:r,lastName:n,password:d,email:f};s!=null&&s.value&&(h.organization=s.value);const i=await y(h);(i==null?void 0:i.status)!=="failed"?j.push(a.jsx(N,{title:"Successfuly added",type:"success",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"}):(q(i==null?void 0:i.message),j.push(a.jsx(N,{title:"Something went wrong!!!",type:"danger",duration:2500,children:i==null?void 0:i.message}),{placement:"top-end"})),e(!1)},P=async()=>{var e,o,r,n,d;const t=await Z();if((e=t==null?void 0:t.data)!=null&&e.data&&((r=(o=t==null?void 0:t.data)==null?void 0:o.data)!=null&&r.length)){const f=(d=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:d.map(s=>({label:s.organizationName,value:s.id}));F(f)}};return g.useEffect(()=>{P()},[]),a.jsxs("div",{className:v,children:[u&&a.jsx(I,{showIcon:!0,className:"mb-4",type:"danger",children:u}),a.jsx(L,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",organization:""},validationSchema:_,onSubmit:(t,{setSubmitting:e})=>{w?e(!1):S(t,e)},children:({touched:t,errors:e,isSubmitting:o,setFieldValue:r})=>a.jsx(k,{children:a.jsxs(M,{children:[a.jsx(m,{label:"Organization",invalid:e.organization&&t.organization,errorMessage:e.organization,children:a.jsx(l,{isClearable:!0,autoComplete:"off",name:"organization",placeholder:"Organization",component:B,options:C,onChange:n=>{r("organization",n)}})}),a.jsx(m,{label:"First Name",invalid:e.firstName&&t.firstName,errorMessage:e.firstName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:c})}),a.jsx(m,{label:"Last Name",invalid:e.lastName&&t.lastName,errorMessage:e.lastName,children:a.jsx(l,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:c})}),a.jsx(m,{label:"Email",invalid:e.email&&t.email,errorMessage:e.email,children:a.jsx(l,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),a.jsx(m,{label:"Phone",invalid:e.phone&&t.phone,errorMessage:e.phone,children:a.jsx(l,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:c})}),a.jsx(m,{label:"Password",invalid:e.password&&t.password,errorMessage:e.password,children:a.jsx(l,{autoComplete:"off",name:"password",placeholder:"Password",component:E})}),a.jsx(O,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Creating Account...":"Sign Up"}),a.jsxs("div",{className:"mt-4 text-center",children:[a.jsx("span",{children:"Already have an account? "}),a.jsx($,{to:z,children:"Sign in"})]})]})})})]})};export{Pa as S};
