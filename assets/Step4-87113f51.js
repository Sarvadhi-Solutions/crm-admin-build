import{j as e}from"./index-fbc41bca.js";import{F as d,a as x}from"./FormItem-c1e0aacf.js";import{S as i}from"./index-4c96de49.js";import{B as h}from"./Button-b2784eff.js";import{F as j,a as p,b}from"./formik.esm-398239d1.js";import{S as v}from"./SegmentItemOption-0494f468.js";import{a_ as f,r as g,a4 as k,b1 as w,aw as S}from"./index.esm-249f55e6.js";import"./index-38ec51a4.js";import"./Views-74c35fff.js";import"./useControllableState-dc7686ff.js";import"./useThemeClass-5e964515.js";const F=[{value:"0",label:"Start project from scratch",icon:e.jsx(g,{})},{value:"1",label:"Automate time consuming tasks",icon:e.jsx(k,{})},{value:"2",label:"Enhance current workflow",icon:e.jsx(w,{})},{value:"3",label:"Others",icon:e.jsx(S,{})}],M=({onNext:s,onBack:t})=>e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-2",children:"What is your main objective with Elstar?"}),e.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:e.jsx(j,{initialValues:{role:""},onSubmit:()=>{console.log()},children:({touched:o,errors:l})=>e.jsx(p,{children:e.jsxs(d,{children:[e.jsx(x,{invalid:l.role&&o.role,errorMessage:l.role,children:e.jsx(b,{name:"role",children:({field:r,form:n})=>e.jsx(i,{value:[r.value],onChange:a=>{n.setFieldValue(r.name,a[0]),s==null||s()},children:e.jsx("div",{className:"w-full",children:F.map(a=>e.jsx(i.Item,{value:a.value,disabled:a.disabled,children:({active:m,onSegmentItemClick:c,disabled:u})=>e.jsx(v,{hoverable:!0,active:m,disabled:u,className:"mb-4 bg-white dark:bg-gray-800",onSegmentItemClick:c,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:a.icon}),e.jsx("h6",{children:a.label})]})})},a.value))})})})}),e.jsx(h,{block:!0,variant:"plain",type:"button",icon:e.jsx(f,{}),onClick:t,children:"Back"})]})})})})]});export{M as default};
