import{j as s,p as k,c as D,r as M}from"./index-b09faefa.js";import{B as T}from"./Badge-d1515062.js";import{C as g}from"./Card-33431fc8.js";import{T as f}from"./Tag-0d544e3b.js";import{H as v}from"./index-abb4ede3.js";import{i as C}from"./isLastChild-83eb4c23.js";import{A as y}from"./index-2f1f758f.js";import{u as F,a as K}from"./acronym-32cf8e6a.js";import{a6 as O,a3 as _,V as P,M as S,a2 as H}from"./index.esm-2c67faf2.js";const t="UPDATE-TICKET",b="COMMENT",j="ADD-TAGS-TO-TICKET",h="ADD-FILES-TO-TICKET",I="COMMENT-MENTION",A="ASSIGN-TICKET",N="CREATE-TICKET",L=[t,b,I,A],B=[j,h,N],a={0:{label:"Completed",bgClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"In Dev",bgClass:"bg-blue-500",textClass:"text-blue-500"},2:{label:"Ready to test",bgClass:"bg-amber-500",textClass:"text-amber-500"}},E={"Live Issue":"bg-rose-500",Backend:"bg-blue-500",Bug:"bg-amber-400","Low priority":"bg-indigo-500"},c=({value:e})=>s.jsx(s.Fragment,{children:k.unix(e).format("hh:mm A")}),r=({children:e,className:n})=>s.jsx("span",{className:D("font-semibold text-gray-900 dark:text-gray-100",n),children:e}),Q=({data:e,compact:n})=>{var x,u,o,p;const i={replace:l=>{var m,d;return l.type==="tag"&&(l==null?void 0:l.name)==="strong"?s.jsx(r,{children:(m=l==null?void 0:l.children[0])==null?void 0:m.data},(d=l==null?void 0:l.children[0])==null?void 0:d.data):l.data}};switch(e.type){case t:return n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"has change "}),s.jsx(r,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:" status to "}),s.jsx(T,{className:a[e.status||0].bgClass}),s.jsx(r,{className:"ml-1 rtl:mr-1",children:a[e.status||0].label})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"has change "}),s.jsx(r,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:" status to "}),s.jsx(T,{className:a[e.status||0].bgClass}),s.jsx(r,{className:"ml-1 rtl:mr-1",children:a[e.status||0].label}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]});case b:return s.jsxs(s.Fragment,{children:[n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"comment on your"}),s.jsx(r,{children:"Post"})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"comment on your"}),s.jsx(r,{children:"Post"}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]}),s.jsx(g,{bordered:!0,className:"mt-4",children:v(e.comment||"",i)})]});case I:return s.jsxs(s.Fragment,{children:[n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"mentioned you in a comment"}),s.jsx(r,{children:"Post"})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"mentioned you in a comment"}),s.jsx(r,{children:"Post"}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]}),s.jsx(g,{bordered:!0,className:"mt-4",children:v(e.comment||"",i)})]});case j:return n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"added tags "}),(x=e==null?void 0:e.tags)==null?void 0:x.map((l,m)=>s.jsx(f,{prefix:!0,className:"mx-1",prefixClass:`${E[l]}`,children:l},l+m))]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(r,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"added tags "}),(u=e==null?void 0:e.tags)==null?void 0:u.map((l,m)=>s.jsx(f,{prefix:!0,className:"mx-1",prefixClass:`${E[l]}`,children:l},l+m)),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]});case h:return n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"added"}),(o=e==null?void 0:e.files)==null?void 0:o.map((l,m)=>s.jsxs(r,{children:[l,!C((e==null?void 0:e.files)||[],m)&&s.jsxs("span",{className:"ltr:mr-1 rtl:ml-1",children:[","," "]})]},l+m))]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(r,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"added"}),(p=e==null?void 0:e.files)==null?void 0:p.map((l,m)=>s.jsxs(r,{children:[l,!C((e==null?void 0:e.files)||[],m)&&s.jsx("span",{className:"ltr:mr-1 rtl:ml-1",children:", "})]},l+m)),s.jsx("span",{className:"mx-1",children:"to ticket"}),s.jsxs(r,{children:[e.ticket," "]}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]});case A:return n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(r,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(c,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"assigned ticket"}),s.jsx(r,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:"to"}),s.jsxs(r,{children:[e==null?void 0:e.assignee," "]})]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(r,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"assigned ticket"}),s.jsx(r,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:"to"}),s.jsxs(r,{children:[e.assignee," "]}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]});case N:return s.jsxs("div",{className:"flex items-center",children:[s.jsxs(r,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"has created ticket"}),s.jsx(r,{children:e.ticket}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(c,{value:e.dateTime})})]});default:return null}},R=({type:e})=>{switch(e){case j:return s.jsx(H,{});case h:return s.jsx(S,{});case t:return s.jsx(P,{});case N:return s.jsx(_,{});default:return s.jsx(O,{})}},W=({data:e})=>{const n=F(),i=M.useMemo(()=>({size:30,shape:"circle"}),[]);if(e&&L.includes(e.type)){const x=e.userImg?{src:e.userImg}:{className:`${n(e.userName||"")}`};return s.jsx(y,{...x,...i,children:K(e.userName||"")})}return e&&B.includes(e.type)?s.jsx(y,{className:"text-gray-700 bg-gray-200 dark:text-gray-100",icon:s.jsx(R,{type:e.type}),...i}):null};export{A,b as C,Q as E,W as T,t as U,I as a,j as b,h as c,N as d};
