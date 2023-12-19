import{j as a}from"./index-3e880d58.js";import{B as l}from"./Button-2946c768.js";import{F as d,a as r}from"./FormItem-2c1e6567.js";import{S as g}from"./Select-76acedff.js";import{I as x}from"./Input-cc5b259f.js";import{F as b,a as h,b as s}from"./formik.esm-b6fc01f9.js";import{a$ as j}from"./index.esm-72033000.js";import{c as S,a as p}from"./index.esm-ef8817a5.js";import"./index-f502ce4c.js";import"./Views-075eae35.js";import"./slicedToArray-a34215eb.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-4b935cb5.js";import"./floating-ui.dom-bef9cea3.js";import"./get-4c4ae8d7.js";import"./toString-5649af70.js";import"./_MapCache-7f2c37e9.js";import"./isNil-4c059865.js";const v=S().shape({organizationName:p().required("Organization name is required"),organizationSize:p().required("Please select your organization size")}),c=[{label:"Solo",value:"solo"},{label:"2 ~ 10 members",value:"2~10"},{label:"11 ~ 50 members",value:"11~50"},{label:"51 ~ 200 members",value:"51~200"},{label:"201 ~ 500 members",value:"201~500"}],P=({onNext:o,onBack:u})=>a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"mb-2",children:"Tell us about your organization"}),a.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:a.jsx(b,{initialValues:{organizationName:"",organizationSize:""},validationSchema:v,onSubmit:()=>{o==null||o()},children:({values:z,touched:n,errors:e})=>a.jsx(h,{children:a.jsxs(d,{children:[a.jsx(r,{label:"Name of your organization",invalid:e.organizationName&&n.organizationName,errorMessage:e.organizationName,children:a.jsx(s,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name...",component:x})}),a.jsx(r,{label:"Size of your organization",invalid:e.organizationSize&&n.organizationSize,errorMessage:e.organizationSize,children:a.jsx(s,{name:"organizationSize",children:({field:t,form:m})=>a.jsx(g,{placeholder:"Organization Size...",field:t,form:m,options:c,value:c.filter(i=>i.value===z.organizationSize),onChange:i=>m.setFieldValue(t.name,i==null?void 0:i.value)})})}),a.jsxs(r,{children:[a.jsx(l,{block:!0,variant:"solid",type:"submit",children:"Continue"}),a.jsx(l,{block:!0,className:"mt-4",variant:"plain",type:"button",icon:a.jsx(j,{}),onClick:u,children:"Back"})]})]})})})})]});export{P as default};
