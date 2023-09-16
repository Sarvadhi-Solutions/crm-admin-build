import{a as L,r as h,j as s,y as P,B as E}from"./index-04de45f1.js";import{u as g,a as U,t as M,l as Y,c as F}from"./index-c39b3750.js";import{A as v}from"./index-d960fe16.js";import{T as y}from"./Tooltip-8263a1ca.js";import{C as $}from"./Card-5dadf163.js";import{B as m}from"./Button-c014eb4a.js";import{I as G}from"./Input-177911dc.js";import{D as j}from"./index-34afd70e.js";import{T as O}from"./Tag-b89b8728.js";import{B as K}from"./Badge-fd219ce7.js";import{U as R}from"./UsersAvatarGroup-a592a312.js";import{c as u}from"./cloneDeep-9e3b0d5b.js";import{bg as X,bh as W,$ as q,bi as J,X as Q,k as V,as as Z,aM as _}from"./index.esm-dece01db.js";import{i as ss}from"./Views-9d427d6f.js";import"./ProjectService-f07f5503.js";import"./index-d856057f.js";import"./useControllableState-517757cf.js";import"./Dialog-94528cff.js";import"./index-ce7a2c9a.js";import"./CloseButton-c81f3a7a.js";import"./react-beautiful-dnd.esm-7dc5c54a.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./formik.esm-21613a47.js";import"./context-3f43d22b.js";import"./index-5206a52a.js";import"./EllipsisButton-e365241f.js";import"./index.esm-31d11ed9.js";import"./IconText-bc2d45b5.js";import"./useMergeRef-788c4cb0.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./isNil-2d09164b.js";import"./get-e02c019e.js";import"./toString-85ae3482.js";import"./_MapCache-593c8f28.js";import"./useUncertainRef-83c88a9e.js";import"./useUniqueId-d1553e7a.js";import"./chainedFunction-070f832c.js";import"./index-18e79e75.js";import"./useRootClose-9c807e39.js";import"./acronym-91ff8fec.js";import"./_Uint8Array-51fedccd.js";import"./_getPrototype-c53c6c29.js";const es=l=>({id:F(10),name:"Carolyn Perkins",src:"/img/avatars/thumb-1.jpg",message:l,date:new Date}),f=({title:l,icon:o,children:n,titleSize:c="h6",ticketClose:d})=>s.jsxs("div",{className:"flex mb-10",children:[s.jsx("div",{className:"text-2xl",children:o}),s.jsxs("div",{className:"ml-2 rtl:mr-2 w-full",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx(c,{children:l}),d&&s.jsx(m,{size:"sm",shape:"circle",variant:"plain",icon:s.jsx(Z,{className:"text-lg"}),onClick:()=>d()})]}),n]})]}),ts=()=>s.jsx(y,{title:"Add More",children:s.jsx(v,{className:"cursor-pointer",shape:"circle",size:30,children:s.jsx(_,{})})}),Xs=({onTicketClose:l})=>{var k,w,A,D;const o=g(e=>e.scrumBoard.data.ticketId),n=g(e=>e.scrumBoard.data.columns),c=g(e=>e.scrumBoard.data.boardMembers),d=L(),[t,x]=h.useState({}),[z,C]=h.useState(!1),p=h.useRef(null),S=async()=>{C(!0);let e={};for(const r in n)if(Object.hasOwnProperty.call(n,r)){const a=n[r].find(b=>b.id===o);a&&(e=a)}x(e),C(!1)};h.useEffect(()=>{ss(t)?S():H()},[t,t]);const B=()=>{if(p.current){const e=p.current.value,r=es(e),i=u(t.comments);i==null||i.push(r),x(a=>({...a,comments:i})),p.current.value=""}},N=()=>{l==null||l()},H=()=>{const e=u(n);for(const r in e)Object.hasOwnProperty.call(e,r)&&e[r].forEach((a,b)=>{a.id===o&&(e[r][b]=t)});d(U(e))},I=e=>{const r=c.find(a=>a.id===e),i=u(t.members);i==null||i.push(r),x(a=>({...a,members:i}))},T=e=>{const r=u(t.labels);r==null||r.push(e),x(i=>({...i,labels:r}))};return s.jsx(s.Fragment,{children:z?s.jsx("div",{className:"flex justify-center items-center min-h-[300px]",children:s.jsx(P,{size:40})}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"max-h-[700px] overflow-y-auto",children:[s.jsx(f,{title:t.name,icon:s.jsx(X,{}),titleSize:"h5",ticketClose:N,children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("div",{className:"font-semibold mb-3 text-gray-900 dark:text-gray-100",children:"Assigned to:"}),s.jsx(R,{avatarProps:{className:"mr-1 rtl:ml-1 cursor-pointer"},avatarGroupProps:{maxCount:4},chained:!1,users:t.members}),c.length!==((k=t.members)==null?void 0:k.length)&&s.jsx(j,{renderTitle:s.jsx(ts,{}),children:c.map(e=>{var r;return!((r=t.members)!=null&&r.some(i=>i.id===e.id))&&s.jsx(j.Item,{eventKey:e.id,onSelect:I,children:s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center",children:[s.jsx(v,{shape:"circle",size:22,src:e.img}),s.jsx("span",{className:"ml-2 rtl:mr-2",children:e.name})]})})},e.name)})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("div",{className:"font-semibold mb-3 text-gray-900 dark:text-gray-100",children:"Label:"}),s.jsxs("div",{children:[(w=t.labels)==null?void 0:w.map(e=>s.jsx(O,{prefix:!0,className:"mr-2 rtl:ml-2 mb-2",prefixClass:`${M[e]}`,children:e},e)),s.jsx(j,{renderTitle:s.jsx(O,{className:"border-dashed cursor-pointer mr-2 rtl:ml-2",children:"Add Label"}),placement:"bottom-end",children:Y.map(e=>{var r;return!((r=t.labels)!=null&&r.includes(e))&&s.jsx(j.Item,{eventKey:e,onSelect:T,children:s.jsxs("div",{className:"flex items-center",children:[s.jsx(K,{innerClass:`${M[e]}`}),s.jsx("span",{className:"ml-2 rtl:mr-2",children:e})]})},e)})})]})]})]})}),t.description&&s.jsx(f,{title:"Description",icon:s.jsx(W,{}),children:s.jsx("div",{className:"mt-2",children:s.jsx("p",{className:"mt-2",children:t.description})})}),t.attachments&&((A=t==null?void 0:t.attachments)==null?void 0:A.length)>0&&s.jsx(f,{title:"Attachments",icon:s.jsx(q,{}),children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-2",children:t.attachments.map(e=>s.jsxs($,{bodyClass:"px-2 pt-2 pb-1",children:[s.jsx("img",{className:"max-w-full rounded",alt:e.name,src:e.src}),s.jsxs("div",{className:"mt-1 flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsx("span",{className:"text-xs",children:e.size})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(y,{title:"Download",children:s.jsx(m,{className:"mr-1 rtl:ml-1",variant:"plain",size:"xs",icon:s.jsx(J,{})})}),s.jsx(y,{title:"Delete",children:s.jsx(m,{variant:"plain",size:"xs",icon:s.jsx(Q,{})})})]})]})]},e.id))})}),s.jsx(f,{title:"Comments",icon:s.jsx(V,{}),children:s.jsxs("div",{className:"mt-2 w-full",children:[t.comments&&((D=t==null?void 0:t.comments)==null?void 0:D.length)>0&&s.jsx(s.Fragment,{children:t.comments.map(e=>s.jsxs("div",{className:"mb-3 flex",children:[s.jsx("div",{className:"mt-2",children:s.jsx(v,{shape:"circle",src:e.src})}),s.jsxs("div",{className:"ml-2 rtl:mr-2 p-3 rounded w-100",children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsxs("span",{className:"mx-1",children:[" ","|"," "]}),s.jsx("span",{children:E(e.date).format("DD MMMM YYYY")})]}),s.jsx("p",{className:"mb-0",children:e.message})]})]},e.id))}),s.jsxs("div",{className:"mb-3 flex",children:[s.jsx(v,{shape:"circle",src:"/img/avatars/thumb-1.jpg"}),s.jsx("div",{className:"ml-2 rtl:mr-2 px-3 rounded w-full",children:s.jsx(G,{ref:p,placeholder:"Write comment",suffix:s.jsx("div",{className:"cursor-pointer font-weight-semibold text-primary",onClick:()=>B(),children:"Send"})})})]})]})})]}),s.jsxs("div",{className:"text-right mt-4",children:[s.jsx(m,{className:"mr-2 rtl:ml-2",size:"sm",variant:"plain",onClick:()=>N(),children:"Cancel"}),s.jsx(m,{variant:"solid",size:"sm",onClick:()=>N(),children:"Change"})]})]})})};export{Xs as default};
