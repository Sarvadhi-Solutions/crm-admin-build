import{r as c,j as s,ai as B}from"./index-04de45f1.js";import{B as j}from"./Button-c014eb4a.js";import{A as y}from"./index-d960fe16.js";import{T as v}from"./Tag-b89b8728.js";import{T as x}from"./index-b1e5b8b7.js";import{C as L}from"./Card-5dadf163.js";import{I as P}from"./Input-177911dc.js";import{A as b}from"./AdaptableCard-b66d711f.js";import{C as R}from"./Views-9d427d6f.js";import{R as F}from"./RichTextEditor-2eafc1a6.js";import{I as n}from"./IconText-bc2d45b5.js";import{a0 as G,a1 as z,a2 as C,a3 as O,a4 as U,a5 as $,a6 as q}from"./index.esm-dece01db.js";import{f as J}from"./ProjectService-f07f5503.js";import{H as K}from"./index-5ffe062f.js";import{i as k}from"./isLastChild-83eb4c23.js";import{d as Q}from"./debounce-72f24c40.js";import{c as V}from"./cloneDeep-9e3b0d5b.js";import"./context-3f43d22b.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./mapCloneElement-022773c2.js";import"./isNil-2d09164b.js";import"./get-e02c019e.js";import"./toString-85ae3482.js";import"./_MapCache-593c8f28.js";import"./_baseIsEqual-aab3701d.js";import"./_Uint8Array-51fedccd.js";import"./_getPrototype-c53c6c29.js";const p=({children:e,...t})=>s.jsx(y,{...t,size:30,shape:"circle",children:e}),W=({timeline:e,...t})=>{var l;return s.jsx(x.Item,{className:"w-full",media:s.jsx(p,{className:"text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-600",children:s.jsx("span",{className:"text-xl",children:s.jsx(q,{})})}),...t,children:s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsx("span",{className:"mx-2",children:"assigned "}),(l=e.assignees)==null?void 0:l.map((i,m)=>s.jsxs("span",{className:"font-semibold text-gray-900 dark:text-gray-100 mr-1 rtl:ml-1",children:[i,!k(e.assignees||[],m)&&s.jsx("span",{children:","})]},i)),s.jsx("span",{children:e.time})]})})},X=({timeline:e,...t})=>s.jsxs(x.Item,{className:"w-full",media:s.jsx(p,{src:e.img}),...t,children:[s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsx("span",{className:"mx-2",children:"added a comment "}),s.jsx("span",{children:e.time})]}),s.jsx(L,{bordered:!0,className:"mt-4",children:s.jsx("p",{children:e.comment})})]}),Y=({timeline:e,...t})=>{var l;return s.jsx(x.Item,{className:"w-full",media:s.jsx(p,{className:"text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-600",children:s.jsx("span",{className:"text-xl",children:s.jsx(C,{})})}),...t,children:s.jsxs("div",{className:"flex items-center",children:[s.jsxs("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:[e.name," "]}),s.jsx("span",{className:"mx-2",children:"added tags "}),(l=e.labels)==null?void 0:l.map(i=>s.jsx(v,{prefix:!0,className:"mr-2 rtl:ml-2 cursor-pointer",prefixClass:i.class,children:i.title},i.title)),s.jsx("span",{children:e.time})]})})},Z=()=>{var g,u,f;const[e,t]=c.useState({}),[l,i]=c.useState(!0),[m,h]=c.useState(!1),o=c.useRef(null),T=Q(I,1e3);function I(a){t(r=>({...r,description:a}))}c.useEffect(()=>{A()},[]);const A=c.useCallback(async()=>{i(!0);const a=await J();t(a.data),i(!1)},[]),E=c.useCallback(()=>{h(!0)},[]),w=c.useCallback(()=>{h(!1)},[]),H=a=>{T(a)},M=()=>{var N;const r={type:"COMMENT",name:"Carolyn Perkins",img:"/img/avatars/thumb-1.jpg",time:"now",comment:(N=o.current)==null?void 0:N.value},d=V(e.activity);d==null||d.push(r),t(S=>({...S,activity:d})),o.current&&(o.current.value="")},D=(a,r)=>{switch(a.type){case"COMMENT":return s.jsx(X,{timeline:a,isLast:r});case"ASSIGN":return s.jsx(W,{timeline:a,isLast:r});case"TAG":return s.jsx(Y,{timeline:a,isLast:r});default:return s.jsx(s.Fragment,{})}};return s.jsx(R,{className:"h-full",children:s.jsx(B,{loading:l,children:s.jsxs("div",{className:"grid md:grid-cols-1 lg:grid-cols-3 gap-4",children:[s.jsx("div",{className:"lg:col-span-2",children:s.jsxs(b,{rightSideBorder:!0,bodyClass:"p-5",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"mb-2 font-bold",children:e.title}),s.jsxs("p",{children:[e.ticketId," created by",s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100 mx-1 cursor-pointer",children:e.createdBy})]})]}),s.jsx("div",{children:m?s.jsx(j,{block:!0,variant:"solid",onClick:w,children:"Done"}):s.jsx(j,{block:!0,icon:s.jsx(G,{}),onClick:E,children:"Edit"})})]}),s.jsx("hr",{className:"my-6"}),s.jsx("div",{className:"text-base",children:m?s.jsx(F,{value:e.description,onChange:H}):s.jsx("div",{className:"prose dark:prose-invert max-w-none",children:K(e.description||"")})}),s.jsxs("div",{className:"mt-12",children:[s.jsx("h4",{children:"Activity"}),s.jsx("hr",{className:"my-6"}),s.jsx(x,{children:(g=e.activity)==null?void 0:g.map((a,r)=>s.jsx(c.Fragment,{children:D(a,k(e.activity||[],r))},a.type+r))}),s.jsxs("div",{className:"mt-6 mb-3 flex flex-auto",children:[s.jsx(p,{src:"/img/avatars/thumb-1.jpg"}),s.jsx("div",{className:"ml-4 rtl:mr-4 w-full",children:s.jsx(P,{ref:o,textArea:!0,placeholder:"Leave a comment"})})]}),s.jsx("div",{className:"text-right",children:s.jsx(j,{variant:"solid",onClick:()=>M(),children:"Comment"})})]})]})}),s.jsx("div",{children:s.jsxs(b,{bodyClass:"p-5",children:[s.jsx("h4",{className:"mb-6",children:"Details"}),s.jsx(n,{className:"mb-4 text-emerald-500",icon:s.jsx(z,{className:"text-lg"}),children:s.jsx("span",{className:"font-semibold",children:"In Progress"})}),s.jsx(n,{className:"mb-4",icon:s.jsx(C,{className:"text-lg opacity-70"}),children:s.jsx("span",{className:"font-semibold",children:e.underProject})}),s.jsx(n,{className:"mb-4",icon:s.jsx(O,{className:"text-lg opacity-70"}),children:s.jsx("span",{className:"font-semibold cursor-pointer",children:"Linked tickets"})}),s.jsx(n,{className:"mb-4",icon:s.jsx(U,{className:"text-lg opacity-70"}),children:s.jsx("span",{className:"font-semibold cursor-pointer",children:"5 story point"})}),s.jsx(n,{className:"mb-4",icon:s.jsx($,{className:"text-lg opacity-70"}),children:s.jsxs("span",{className:"font-semibold",children:["Created on ",e.date]})}),s.jsx("hr",{className:"my-6"}),s.jsx("p",{className:"font-semibold mb-4",children:"Assignees"}),(u=e.assignees)==null?void 0:u.map(a=>s.jsx(n,{className:"mb-4",icon:s.jsx(y,{size:20,shape:"circle",src:a.img}),children:s.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-100",children:a.name})},a.id)),s.jsx("p",{className:"font-semibold mb-4 mt-8",children:"Tags"}),(f=e.labels)==null?void 0:f.map(a=>s.jsx(v,{prefix:!0,className:"mr-2 rtl:ml-2 cursor-pointer",prefixClass:a.class,children:a.title},a.title))]})})]})})})},Hs=Z;export{Hs as default};
