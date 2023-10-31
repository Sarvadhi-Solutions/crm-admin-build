import{r as d,a3 as R,j as t,ap as M,aS as $,aT as B}from"./index-847ef4f8.js";import{F as T,a as S}from"./FormItem-6caba9dc.js";import{I as V}from"./Input-07dbb44b.js";import{B as b}from"./Button-b74cc268.js";import{A as w}from"./Alert-ee5a8060.js";import{A as D}from"./ActionLink-8a0d2afa.js";import{u as K}from"./useTimeOutMessage-1b92f2bc.js";import{F as q,a as G,b as z}from"./formik.esm-bebe3698.js";import{c as L,a as U}from"./index.esm-2dd52620.js";import"./index-3c06be8e.js";import"./Badge-23f456f8.js";import"./RangeCalendar-0bcee289.js";import"./Card-7a58c886.js";import"./index-9702d4b4.js";import"./index-260f8e0a.js";import"./Dialog-c1236e17.js";import"./Drawer-7bdb186b.js";import"./index-c7f7da88.js";import"./toString-271e4441.js";import"./index-76b04bca.js";import"./index-4292c0e7.js";import"./index-938b8073.js";import"./toast-f5c3f24c.js";import"./Pagination-9c369e6e.js";import"./Progress-abdfc0bf.js";import"./index-629e5bc6.js";import"./ScrollBar-9a2baaea.js";import"./index-dbe4178c.js";import{S as W}from"./Select-ed97c876.js";import"./Skeleton-4ba1ecfc.js";import"./index-44b26318.js";import"./Switcher-71827c71.js";import"./index-c1eb621b.js";import"./index-4eb372a0.js";import"./Tag-b8e15ca0.js";import"./index-cbb9775c.js";import"./index-0ac64fa5.js";import"./Tooltip-a237a4da.js";import"./Upload-1ad29e1a.js";import{b as H}from"./SuperAdminServices-72623597.js";const J=({onInputChange:x})=>{const[s,g]=d.useState(["","","","","",""]),h=Array.from({length:6},()=>R.createRef()),f=(i,r)=>{var u;const n=r.target.value;/^\d$/.test(n)?(s[i]=n,g([...s]),i<5&&((u=h[i+1].current)==null||u.focus()),x(s.join(""))):(s[i]="",g([...s]))},y=(i,r)=>{var n;r.key==="Backspace"&&i>0&&!s[i]&&((n=h[i-1].current)==null||n.focus(),s[i-1]="",g([...s]),x(s.join("")))};return t.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:s.map((i,r)=>t.jsx("input",{type:"text",value:i,onChange:n=>f(r,n),onKeyDown:n=>y(r,n),ref:h[r],style:{width:"2em",height:"2em",textAlign:"center",fontSize:"1.2em",border:"1px solid #ccc",borderRadius:"4px",margin:"0 0.2em",outline:"none"}},r))})},Q=L().shape({email:U().required("Please enter your email")}),Bt=x=>{const{disableSubmit:s=!1,className:g,signInUrl:h="/sign-in"}=x,[f,y]=d.useState(!1),[i,r]=K(),[n,u]=d.useState(!1),[F,k]=d.useState(""),[N,C]=d.useState([]),[j,O]=d.useState([]),I=M(),E=async(a,e)=>{var m,l;e(!0);try{(await $(a)).data&&(e(!1),y(!0))}catch(o){r(((l=(m=o==null?void 0:o.response)==null?void 0:m.data)==null?void 0:l.message)||o.toString()),e(!1)}};d.useEffect(()=>{P()},[]);const P=async()=>{var e,m,l,o,c;const a=await H();if((e=a==null?void 0:a.data)!=null&&e.data&&((l=(m=a==null?void 0:a.data)==null?void 0:m.data)!=null&&l.length)){const p=(c=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:c.map(v=>({label:v.organizationName,value:v.id}));console.log(p),C(p)}};console.log("wed",j);const A=async(a,e)=>{var m,l,o;try{u(!0);const p=await B({otp:a,organization:e});console.log("ed",p),p.data&&(u(!1),y(!0),I(`/reset-password?organization=${e}&token=${(m=p==null?void 0:p.data)==null?void 0:m.token}`))}catch(c){r(((o=(l=c==null?void 0:c.response)==null?void 0:l.data)==null?void 0:o.message)||c.toString()),u(!1)}};return t.jsxs("div",{className:g,children:[t.jsx("div",{className:"mb-6",children:f?t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"mb-1",children:"Check your email"}),t.jsx("p",{children:"We have sent a password recovery instruction to your email"}),i&&t.jsx(w,{showIcon:!0,className:"mb-4 mt-4",type:"danger",children:i}),t.jsx("div",{className:"mb-6 mt-6",children:t.jsx(J,{onInputChange:a=>k(a)})}),t.jsx(b,{block:!0,loading:n,variant:"solid",onClick:()=>A(F,j==null?void 0:j.value),children:"Verify"})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"mb-1",children:"Forgot Password"}),t.jsx("p",{children:"Please enter your email address to receive a verification code"}),i&&t.jsx(w,{showIcon:!0,className:"mb-4 mt-4",type:"danger",children:i})]})}),t.jsx(q,{initialValues:{email:"",organization:""},validationSchema:Q,onSubmit:(a,{setSubmitting:e})=>{s?e(!1):E(a,e)},children:({touched:a,errors:e,isSubmitting:m,setFieldValue:l})=>t.jsx(G,{children:t.jsxs(T,{children:[t.jsxs("div",{className:f?"hidden":"",children:[t.jsx(S,{invalid:e.email&&a.email,errorMessage:e.email,children:t.jsx(z,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:V})}),t.jsx(S,{label:"Organization",invalid:e.organization&&a.organization,errorMessage:e.organization,children:t.jsx(z,{autoComplete:"off",name:"organization",placeholder:"Organization",component:W,options:N,value:j,onChange:o=>{l("organization",o.value),O(o)}})})]}),t.jsx(b,{block:!0,loading:m,variant:"solid",type:"submit",children:f?"Resend Email":"Send Email"}),t.jsxs("div",{className:"mt-4 text-center",children:[t.jsx("span",{children:"Back to "}),t.jsx(D,{to:h,children:"Sign in"})]})]})})})]})};export{Bt as F};
