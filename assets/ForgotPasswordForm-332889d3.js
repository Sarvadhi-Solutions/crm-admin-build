import{r as f,a3 as C,j as e,al as O,aS as P,aT as A}from"./index-23438ae7.js";import{F as E,a as R}from"./FormItem-81d96ba6.js";import{I as V}from"./Input-56c39592.js";import{B as y}from"./Button-6151e38d.js";import{A as v}from"./Alert-2ee7f6ed.js";import{A as $}from"./ActionLink-9073bd74.js";import{u as z}from"./useTimeOutMessage-a673bf98.js";import{F as B,a as M,b as T}from"./formik.esm-88d9cb0a.js";import{c as D,a as K}from"./index.esm-c939c475.js";const q=({onInputChange:g})=>{const[s,d]=f.useState(["","","","","",""]),u=Array.from({length:6},()=>C.createRef()),p=(a,i)=>{var c;const n=i.target.value;/^\d$/.test(n)?(s[a]=n,d([...s]),a<5&&((c=u[a+1].current)==null||c.focus()),g(s.join(""))):(s[a]="",d([...s]))},j=(a,i)=>{var n;i.key==="Backspace"&&a>0&&!s[a]&&((n=u[a-1].current)==null||n.focus(),s[a-1]="",d([...s]),g(s.join("")))};return e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:s.map((a,i)=>e.jsx("input",{type:"text",value:a,onChange:n=>p(i,n),onKeyDown:n=>j(i,n),ref:u[i],style:{width:"2em",height:"2em",textAlign:"center",fontSize:"1.2em",border:"1px solid #ccc",borderRadius:"4px",margin:"0 0.2em",outline:"none"}},i))})},L=D().shape({email:K().required("Please enter your email")}),_=g=>{const{disableSubmit:s=!1,className:d,signInUrl:u="/sign-in"}=g,[p,j]=f.useState(!1),[a,i]=z(),[n,c]=f.useState(!1),[S,b]=f.useState(""),[F,w]=f.useState(""),k=O(),N=async(o,t)=>{var l,m;t(!0);try{const r=await P(o);r.data&&(t(!1),j(!0),w(r.data.data))}catch(r){i(((m=(l=r==null?void 0:r.response)==null?void 0:l.data)==null?void 0:m.message)||r.toString()),t(!1)}},I=async(o,t)=>{var l,m,r;try{c(!0);const x=await A({otp:o,organization:t});x.data&&(c(!1),j(!0),k(`/reset-password?organization=${t}&token=${(l=x==null?void 0:x.data)==null?void 0:l.token}`))}catch(h){i(((r=(m=h==null?void 0:h.response)==null?void 0:m.data)==null?void 0:r.message)||h.toString()),c(!1)}};return e.jsxs("div",{className:d,children:[e.jsx("div",{className:"mb-6",children:p?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-1",children:"Check your email"}),e.jsx("p",{children:"We have sent a password recovery instruction to your email"}),a&&e.jsx(v,{showIcon:!0,className:"mb-4 mt-4",type:"danger",children:a}),e.jsx("div",{className:"mb-6 mt-6",children:e.jsx(q,{onInputChange:o=>b(o)})}),e.jsx(y,{block:!0,loading:n,variant:"solid",onClick:()=>I(S,F),children:"Verify"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-1",children:"Forgot Password"}),e.jsx("p",{children:"Please enter your email address to receive a verification code"}),a&&e.jsx(v,{showIcon:!0,className:"mb-4 mt-4",type:"danger",children:a})]})}),e.jsx(B,{initialValues:{email:"",organization:""},validationSchema:L,onSubmit:(o,{setSubmitting:t})=>{s?t(!1):N(o,t)},children:({touched:o,errors:t,isSubmitting:l,setFieldValue:m})=>e.jsx(M,{children:e.jsxs(E,{children:[e.jsx("div",{className:p?"hidden":"",children:e.jsx(R,{invalid:t.email&&o.email,errorMessage:t.email,children:e.jsx(T,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:V})})}),e.jsx(y,{block:!0,loading:l,variant:"solid",type:"submit",children:p?"Resend Email":"Send Email"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsx("span",{children:"Back to "}),e.jsx($,{to:u,children:"Sign in"})]})]})})})]})};export{_ as F};
