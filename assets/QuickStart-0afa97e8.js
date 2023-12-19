import{r as p,j as e,a9 as u,aq as h}from"./index-2a02f09f.js";import{C as f}from"./Card-de52f0bd.js";import{B as b}from"./Button-3d6c325f.js";import{u as j}from"./useThemeClass-d3572517.js";import{p as v}from"./index.esm-c61f0406.js";import"./context-ccc0a902.js";const k=[{label:"Complete your Account Information",desc:"Fill in your information to complete your account",btnText:"Fill now",id:"0",disabled:!1,navigate:"/app/account/kyc-form"},{label:"Create your first workspace",desc:"We recommend one project per workspace",btnText:"Create Workspace",id:"1",disabled:!0,callBack:()=>({})},{label:"Invite team members",desc:"Show the team what you have completed so far.",btnText:"Invite",id:"2",disabled:!0}],N=a=>{const{title:l,desc:r,btnText:t,index:c,available:s,textTheme:o="",borderTheme:d="",path:i="",callBack:n}=a,m=h(),x=()=>{s&&(n==null||n(),i&&m(i))};return e.jsx(f,{className:"mb-4",children:e.jsxs("div",{className:"md:flex items-center md:justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[s?e.jsx("span",{className:`font-semibold text-xl rounded-full border-2 min-w-[30px] h-[30px] flex items-center justify-center ${d} ${o}`,children:c+1}):e.jsx("span",{className:"text-3xl",children:e.jsx(v,{})}),e.jsxs("div",{children:[e.jsx("h5",{children:l}),e.jsx("p",{children:r})]})]}),e.jsx(b,{disabled:!s,variant:"solid",className:"mt-4 md:mt-0",size:"sm",onClick:x,children:t})]})})},B=()=>{const{textTheme:a,borderTheme:l}=j(),[r]=p.useState([{value:"0",completed:!1,current:!0},{value:"1",completed:!1,current:!1},{value:"2",completed:!1,current:!1}]);return e.jsxs("div",{children:[e.jsxs("h3",{className:"mb-2 text-center",children:[e.jsx("span",{children:"🚀 Let's get you set up with "}),e.jsx("span",{className:a,children:u})]}),e.jsx("div",{className:"mt-8 max-w-[800px] lg:min-w-[800px]",children:k.map((t,c)=>e.jsx(N,{index:c,textTheme:a,borderTheme:l,title:t.label,btnText:t.btnText,desc:t.desc,available:r.some(s=>s.value===t.id&&(s.completed||s.current)),path:t.navigate,callBack:t.callBack},t.id))})]})};export{B as default};
