import{a as T,r as d,j as t}from"./index-21d7ce34.js";import{T as L}from"./index-cfa1d7b1.js";import{u as O,c as o,d as i,F as P,a as V,b as E}from"./formik.esm-b31c216f.js";import{c as $,a as b,f as z,b as _}from"./index.esm-078c9db1.js";import{I as l}from"./Input-b18c5be2.js";import{A as G}from"./index-60ecab9e.js";import{U as J}from"./Upload-a60754e4.js";import{I as K,a6 as Q,a7 as W,a8 as X}from"./index.esm-3f5f076a.js";import{A as Y}from"./index.esm-74216463.js";import{a as Z,T as ee,b as te}from"./index.esm-1004ce28.js";import{u as M,D as ae,A as se,i as oe,j as ie,t as re,c as ne,k as le,g as D,s as w,l as ce}from"./AdditionalTag-ee745a24.js";/* empty css              */import{B as de,a as me,b as pe,c as xe}from"./index.esm-a8cf6609.js";const fe=m=>{const{touched:a,errors:e}=m,h=T(),[c,g]=d.useState(!1);d.useState("#808080");const[y,u]=d.useState(!1),[r,x]=d.useState([]),[I,C]=d.useState([]),S=()=>{g(!c),u(!1)},[A,R]=d.useState("");d.useEffect(()=>{(async()=>{var p,N;try{const{payload:n}=await h(oe());console.log(n,"send Me The Id And The Payload");const j=(p=n==null?void 0:n.data)==null?void 0:p.find(f=>(f==null?void 0:f.moduleName)==="clients");if(R(j.id),j){const{payload:f}=await h(ie({id:(N=j==null?void 0:j.id)==null?void 0:N.toString()})),q=re(f.data),H=ne(f.data);C(H),x(q)}}catch(n){console.error("Error fetching module data:",n)}})()},[h]);const v=M(s=>s.crmCustomers.data.selectedCustomer),[Ce,U]=d.useState(v?v.tags||[]:[]),k=O(),B=s=>{console.log(s),U(s);const p=[s.value];k.setFieldValue("tagId",p)};return t.jsxs(t.Fragment,{children:[t.jsx(o,{invalid:e.upload&&a.upload,errorMessage:e.upload,children:t.jsx(i,{name:"img",children:({field:s,form:p})=>{const N=s.value?{src:s.value}:{};return t.jsx("div",{className:"flex justify-center",children:t.jsx(J,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:n=>p.setFieldValue(s.name,URL.createObjectURL(n[0])),onFileRemove:n=>p.setFieldValue(s.name,URL.createObjectURL(n[0])),children:t.jsx(G,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:100,shape:"circle",icon:t.jsx(K,{}),...N})})})}})}),t.jsx(o,{label:"Customer Name",invalid:e.clientName&&a.clientName,errorMessage:e.clientName,children:t.jsx(i,{type:"text",autoComplete:"off",name:"clientName",placeholder:"Customer Name",component:l,prefix:t.jsx(Q,{className:"text-xl"})})}),t.jsx(o,{label:"Contact Number",invalid:e.contactInfo&&a.contactInfo,errorMessage:e.contactInfo,children:t.jsx(i,{type:"text",autoComplete:"off",name:"contactInfo",placeholder:"contactInfo",component:l,prefix:t.jsx(W,{className:"text-xl"})})}),t.jsx(o,{label:"Address",invalid:e.address&&a.address,errorMessage:e.address,children:t.jsx(i,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:l,prefix:t.jsx(X,{className:"text-xl"})})}),t.jsx(o,{label:"Billing Details",invalid:e.billingDetails&&a.billingDetails,errorMessage:e.billingDetails,children:t.jsx(i,{type:"text",autoComplete:"off",name:"billingDetails",placeholder:"Billing Details",component:l,prefix:t.jsx(Z,{className:"text-xl"})})}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(o,{label:"TagId",invalid:e.history&&a.history,errorMessage:e.history,children:t.jsxs("div",{style:{position:"relative"},children:[t.jsx(i,{name:"Tag",component:ae,options:r,placeholder:"Select a Tag",value:k.initialValues.tagName,onChange:B}),t.jsx(ee,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{S(),u(!0)}})]})}),t.jsx(se,{isOpen:c,moduleName:A,categoryList:I,onOpenChange:s=>g(s)})]}),t.jsx(o,{label:"History",invalid:e.history&&a.history,errorMessage:e.history,children:t.jsx(i,{type:"text",autoComplete:"off",name:"history",placeholder:"History",component:l,prefix:t.jsx(Y,{className:"text-xl"})})}),t.jsx(o,{label:"Notes",invalid:e.notes&&a.notes,errorMessage:e.notes,children:t.jsx(i,{type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:l,prefix:t.jsx(te,{className:"text-xl"})})})]})},he=m=>{const{touched:a,errors:e}=m;return t.jsxs(t.Fragment,{children:[t.jsx(o,{label:"Facebook link",invalid:e.facebook&&a.facebook,errorMessage:e.facebook,children:t.jsx(i,{type:"text",autoComplete:"off",name:"facebook",placeholder:"URL",component:l,prefix:t.jsx(de,{className:"text-xl text-[#1773ea]"})})}),t.jsx(o,{label:"Twitter link",invalid:e.twitter&&a.twitter,errorMessage:e.twitter,children:t.jsx(i,{type:"text",autoComplete:"off",name:"twitter",placeholder:"URL",component:l,prefix:t.jsx(me,{className:"text-xl text-[#1da1f3]"})})}),t.jsx(o,{label:"Pinterest link",invalid:e.pinterest&&a.pinterest,errorMessage:e.pinterest,children:t.jsx(i,{type:"text",autoComplete:"off",name:"pinterest",placeholder:"URL",component:l,prefix:t.jsx(pe,{className:"text-xl text-[#df0018]"})})}),t.jsx(o,{label:"LinkedIn link",invalid:e.linkedIn&&a.linkedIn,errorMessage:e.linkedIn,children:t.jsx(i,{type:"text",autoComplete:"off",name:"linkedIn",placeholder:"URL",component:l,prefix:t.jsx(xe,{className:"text-xl text-[#0077b5]"})})})]})},ge=$().shape({clientName:b().required("Customer Name is required"),contactInfo:z().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",m=>!isNaN(m)).test("is-ten-digits","Contact must be exactly 10 digits",m=>/^\d{10}$/.test(m)),address:b().required("Address is required"),billingDetails:b().required("Billing Details is required"),history:b(),notes:b(),tagId:_()}),{TabNav:ue,TabList:je,TabContent:F}=L,be=d.forwardRef((m,a)=>{var g,y,u;const e=M(r=>r.crmCustomers.data.selectedCustomer),h=!!e.id,c=T();return t.jsx(P,{innerRef:a,initialValues:{clientName:(e==null?void 0:e.clientName)||"",contactInfo:(e==null?void 0:e.contactInfo)||"",address:(e==null?void 0:e.address)||"",billingDetails:(e==null?void 0:e.billingDetails)||"",history:(e==null?void 0:e.history)||"",notes:(e==null?void 0:e.notes)||"",tagName:((y=(g=e==null?void 0:e.tags)==null?void 0:g[0])==null?void 0:y.tagName)||"",tagId:((u=e==null?void 0:e.tags)==null?void 0:u.map(r=>r.id))||[],colorName:e!=null&&e.tags&&(e==null?void 0:e.tags.length)>0?e==null?void 0:e.tags[0].colorName:""},validationSchema:ge,onSubmit:async(r,{setSubmitting:x})=>{const{colorName:I,...C}=r;h?(await c(le({customerId:(e==null?void 0:e.id)||"",updatedData:C})),await c(D()),await c(w())):(await c(ce(C)),await c(D()),await c(w())),x(!1)},children:({touched:r,errors:x})=>t.jsx(V,{children:t.jsx(E,{children:t.jsxs(L,{defaultValue:"personalInfo",children:[t.jsx(je,{children:t.jsx(ue,{value:"personalInfo",children:"Custometer Detail"})}),t.jsxs("div",{className:"p-6",children:[t.jsx(F,{value:"personalInfo",children:t.jsx(fe,{touched:r,errors:x})}),t.jsx(F,{value:"social",children:t.jsx(he,{touched:r,errors:x})})]})]})})})})});be.displayName="CustomerForm";export{be as C};
