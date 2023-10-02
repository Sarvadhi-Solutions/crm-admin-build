import{j as a}from"./index-f40e4d75.js";import{B as l}from"./Button-50d583fa.js";import{F as d,a as r}from"./FormItem-e9df506f.js";import{S as g}from"./Select-1c5bed57.js";import{I as b}from"./Input-a28838c6.js";import{F as x,a as h,b as s}from"./formik.esm-a717025a.js";import{bp as j}from"./index.esm-0d86f991.js";import{c as S,a as p}from"./index.esm-6a659974.js";import"./context-51e9908c.js";import"./index-ae89c783.js";import"./Views-4f4cfc12.js";import"./slicedToArray-ed1b3644.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-b6817789.js";import"./floating-ui.dom-bef9cea3.js";import"./get-8208bc30.js";import"./toString-1320cce2.js";import"./_MapCache-11f94205.js";import"./isNil-867ba5c2.js";const v=S().shape({organizationName:p().required("Organization name is required"),organizationSize:p().required("Please select your organization size")}),c=[{label:"Solo",value:"solo"},{label:"2 ~ 10 members",value:"2~10"},{label:"11 ~ 50 members",value:"11~50"},{label:"51 ~ 200 members",value:"51~200"},{label:"201 ~ 500 members",value:"201~500"}],D=({onNext:o,onBack:u})=>a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"mb-2",children:"Tell us about your organization"}),a.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:a.jsx(x,{initialValues:{organizationName:"",organizationSize:""},validationSchema:v,onSubmit:()=>{o==null||o()},children:({values:z,touched:t,errors:e})=>a.jsx(h,{children:a.jsxs(d,{children:[a.jsx(r,{label:"Name of your organization",invalid:e.organizationName&&t.organizationName,errorMessage:e.organizationName,children:a.jsx(s,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name...",component:b})}),a.jsx(r,{label:"Size of your organization",invalid:e.organizationSize&&t.organizationSize,errorMessage:e.organizationSize,children:a.jsx(s,{name:"organizationSize",children:({field:n,form:m})=>a.jsx(g,{placeholder:"Organization Size...",field:n,form:m,options:c,value:c.filter(i=>i.value===z.organizationSize),onChange:i=>m.setFieldValue(n.name,i==null?void 0:i.value)})})}),a.jsxs(r,{children:[a.jsx(l,{block:!0,variant:"solid",type:"submit",children:"Continue"}),a.jsx(l,{block:!0,className:"mt-4",variant:"plain",type:"button",icon:a.jsx(j,{}),onClick:u,children:"Back"})]})]})})})})]});export{D as default};
