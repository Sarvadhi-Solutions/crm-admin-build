import{j as a}from"./index-04de45f1.js";import{B as m}from"./Button-c014eb4a.js";import{F as d,a as g,b,c as r,d as s}from"./formik.esm-21613a47.js";import{S as x}from"./Select-8dd681ec.js";import{I as h}from"./Input-177911dc.js";import{bp as j}from"./index.esm-dece01db.js";import{c as S,a as c}from"./index.esm-7ed3d02a.js";import"./context-3f43d22b.js";import"./index-5206a52a.js";import"./Views-9d427d6f.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-e02c019e.js";import"./toString-85ae3482.js";import"./_MapCache-593c8f28.js";import"./isNil-2d09164b.js";const v=S().shape({organizationName:c().required("Organization name is required"),organizationSize:c().required("Please select your organization size")}),p=[{label:"Solo",value:"solo"},{label:"2 ~ 10 members",value:"2~10"},{label:"11 ~ 50 members",value:"11~50"},{label:"51 ~ 200 members",value:"51~200"},{label:"201 ~ 500 members",value:"201~500"}],L=({onNext:o,onBack:u})=>a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"mb-2",children:"Tell us about your organization"}),a.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:a.jsx(d,{initialValues:{organizationName:"",organizationSize:""},validationSchema:v,onSubmit:()=>{o==null||o()},children:({values:z,touched:n,errors:e})=>a.jsx(g,{children:a.jsxs(b,{children:[a.jsx(r,{label:"Name of your organization",invalid:e.organizationName&&n.organizationName,errorMessage:e.organizationName,children:a.jsx(s,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name...",component:h})}),a.jsx(r,{label:"Size of your organization",invalid:e.organizationSize&&n.organizationSize,errorMessage:e.organizationSize,children:a.jsx(s,{name:"organizationSize",children:({field:t,form:l})=>a.jsx(x,{placeholder:"Organization Size...",field:t,form:l,options:p,value:p.filter(i=>i.value===z.organizationSize),onChange:i=>l.setFieldValue(t.name,i==null?void 0:i.value)})})}),a.jsxs(r,{children:[a.jsx(m,{block:!0,variant:"solid",type:"submit",children:"Continue"}),a.jsx(m,{block:!0,className:"mt-4",variant:"plain",type:"button",icon:a.jsx(j,{}),onClick:u,children:"Back"})]})]})})})})]});export{L as default};
