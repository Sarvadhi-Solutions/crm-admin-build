import{a as L,r as h,j as s,n as P,p as E}from"./index-a9c93031.js";import{u as g,a as U,t as O,l as Y,c as F}from"./index-b8206634.js";import{A as v}from"./index-7cf9b27e.js";import{T as y}from"./Tooltip-4f11c588.js";import{C as $}from"./Card-6b8166bd.js";import{B as m}from"./Button-47bf58f7.js";import{I as G}from"./Input-b2bc5b3e.js";import{D as j}from"./index-137f6e4f.js";import{T as z}from"./Tag-624637b7.js";import{B as K}from"./Badge-c9ada007.js";import{U as R}from"./UsersAvatarGroup-9dfab165.js";import{c as u}from"./cloneDeep-fd7929db.js";import{bg as X,bh as Q,$ as W,bi as q,X as J,t as V,ah as Z,aQ as _}from"./index.esm-37c3564c.js";import{i as ss}from"./Views-0c5423a6.js";import"./ProjectService-5f75818f.js";import"./index-cbfb4a92.js";import"./useControllableState-0bc3ffd1.js";import"./Dialog-5ef978d2.js";import"./index-0569d7d3.js";import"./CloseButton-ef1c868b.js";import"./react-beautiful-dnd.esm-5815b904.js";import"./inheritsLoose-7f1423e8.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./FormItem-493c2060.js";import"./context-6d5d8fe5.js";import"./index-0b68a97f.js";import"./EllipsisButton-52d06232.js";import"./index.esm-c8841de1.js";import"./formik.esm-4acf00de.js";import"./IconText-df53d2c5.js";import"./useMergeRef-788c4cb0.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./isNil-f7d4f3b6.js";import"./get-0157bd52.js";import"./toString-60f65c59.js";import"./_MapCache-83d2f18f.js";import"./useUncertainRef-762e062e.js";import"./useUniqueId-b18fc966.js";import"./chainedFunction-070f832c.js";import"./index-4104c7c5.js";import"./useRootClose-6d54f280.js";import"./acronym-b2505150.js";import"./_Uint8Array-64cf78a6.js";import"./_getPrototype-71e29649.js";const es=l=>({id:F(10),name:"Carolyn Perkins",src:"/img/avatars/thumb-1.jpg",message:l,date:new Date}),f=({title:l,icon:o,children:n,titleSize:c="h6",ticketClose:d})=>s.jsxs("div",{className:"flex mb-10",children:[s.jsx("div",{className:"text-2xl",children:o}),s.jsxs("div",{className:"ml-2 rtl:mr-2 w-full",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx(c,{children:l}),d&&s.jsx(m,{size:"sm",shape:"circle",variant:"plain",icon:s.jsx(Z,{className:"text-lg"}),onClick:()=>d()})]}),n]})]}),ts=()=>s.jsx(y,{title:"Add More",children:s.jsx(v,{className:"cursor-pointer",shape:"circle",size:30,children:s.jsx(_,{})})}),qs=({onTicketClose:l})=>{var w,k,A,D;const o=g(e=>e.scrumBoard.data.ticketId),n=g(e=>e.scrumBoard.data.columns),c=g(e=>e.scrumBoard.data.boardMembers),d=L(),[t,p]=h.useState({}),[M,C]=h.useState(!1),x=h.useRef(null),S=async()=>{C(!0);let e={};for(const r in n)if(Object.hasOwnProperty.call(n,r)){const a=n[r].find(b=>b.id===o);a&&(e=a)}p(e),C(!1)};h.useEffect(()=>{ss(t)?S():I()},[t,t]);const H=()=>{if(x.current){const e=x.current.value,r=es(e),i=u(t.comments);i==null||i.push(r),p(a=>({...a,comments:i})),x.current.value=""}},N=()=>{l==null||l()},I=()=>{const e=u(n);for(const r in e)Object.hasOwnProperty.call(e,r)&&e[r].forEach((a,b)=>{a.id===o&&(e[r][b]=t)});d(U(e))},T=e=>{const r=c.find(a=>a.id===e),i=u(t.members);i==null||i.push(r),p(a=>({...a,members:i}))},B=e=>{const r=u(t.labels);r==null||r.push(e),p(i=>({...i,labels:r}))};return s.jsx(s.Fragment,{children:M?s.jsx("div",{className:"flex justify-center items-center min-h-[300px]",children:s.jsx(P,{size:40})}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"max-h-[700px] overflow-y-auto",children:[s.jsx(f,{title:t.name,icon:s.jsx(X,{}),titleSize:"h5",ticketClose:N,children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("div",{className:"font-semibold mb-3 text-gray-900 dark:text-gray-100",children:"Assigned to:"}),s.jsx(R,{avatarProps:{className:"mr-1 rtl:ml-1 cursor-pointer"},avatarGroupProps:{maxCount:4},chained:!1,users:t.members}),c.length!==((w=t.members)==null?void 0:w.length)&&s.jsx(j,{renderTitle:s.jsx(ts,{}),children:c.map(e=>{var r;return!((r=t.members)!=null&&r.some(i=>i.id===e.id))&&s.jsx(j.Item,{eventKey:e.id,onSelect:T,children:s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center",children:[s.jsx(v,{shape:"circle",size:22,src:e.img}),s.jsx("span",{className:"ml-2 rtl:mr-2",children:e.name})]})})},e.name)})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("div",{className:"font-semibold mb-3 text-gray-900 dark:text-gray-100",children:"Label:"}),s.jsxs("div",{children:[(k=t.labels)==null?void 0:k.map(e=>s.jsx(z,{prefix:!0,className:"mr-2 rtl:ml-2 mb-2",prefixClass:`${O[e]}`,children:e},e)),s.jsx(j,{renderTitle:s.jsx(z,{className:"border-dashed cursor-pointer mr-2 rtl:ml-2",children:"Add Label"}),placement:"bottom-end",children:Y.map(e=>{var r;return!((r=t.labels)!=null&&r.includes(e))&&s.jsx(j.Item,{eventKey:e,onSelect:B,children:s.jsxs("div",{className:"flex items-center",children:[s.jsx(K,{innerClass:`${O[e]}`}),s.jsx("span",{className:"ml-2 rtl:mr-2",children:e})]})},e)})})]})]})]})}),t.description&&s.jsx(f,{title:"Description",icon:s.jsx(Q,{}),children:s.jsx("div",{className:"mt-2",children:s.jsx("p",{className:"mt-2",children:t.description})})}),t.attachments&&((A=t==null?void 0:t.attachments)==null?void 0:A.length)>0&&s.jsx(f,{title:"Attachments",icon:s.jsx(W,{}),children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-2",children:t.attachments.map(e=>s.jsxs($,{bodyClass:"px-2 pt-2 pb-1",children:[s.jsx("img",{className:"max-w-full rounded",alt:e.name,src:e.src}),s.jsxs("div",{className:"mt-1 flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsx("span",{className:"text-xs",children:e.size})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(y,{title:"Download",children:s.jsx(m,{className:"mr-1 rtl:ml-1",variant:"plain",size:"xs",icon:s.jsx(q,{})})}),s.jsx(y,{title:"Delete",children:s.jsx(m,{variant:"plain",size:"xs",icon:s.jsx(J,{})})})]})]})]},e.id))})}),s.jsx(f,{title:"Comments",icon:s.jsx(V,{}),children:s.jsxs("div",{className:"mt-2 w-full",children:[t.comments&&((D=t==null?void 0:t.comments)==null?void 0:D.length)>0&&s.jsx(s.Fragment,{children:t.comments.map(e=>s.jsxs("div",{className:"mb-3 flex",children:[s.jsx("div",{className:"mt-2",children:s.jsx(v,{shape:"circle",src:e.src})}),s.jsxs("div",{className:"ml-2 rtl:mr-2 p-3 rounded w-100",children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:e.name}),s.jsxs("span",{className:"mx-1",children:[" ","|"," "]}),s.jsx("span",{children:E(e.date).format("DD MMMM YYYY")})]}),s.jsx("p",{className:"mb-0",children:e.message})]})]},e.id))}),s.jsxs("div",{className:"mb-3 flex",children:[s.jsx(v,{shape:"circle",src:"/img/avatars/thumb-1.jpg"}),s.jsx("div",{className:"ml-2 rtl:mr-2 px-3 rounded w-full",children:s.jsx(G,{ref:x,placeholder:"Write comment",suffix:s.jsx("div",{className:"cursor-pointer font-weight-semibold text-primary",onClick:()=>H(),children:"Send"})})})]})]})})]}),s.jsxs("div",{className:"text-right mt-4",children:[s.jsx(m,{className:"mr-2 rtl:ml-2",size:"sm",variant:"plain",onClick:()=>N(),children:"Cancel"}),s.jsx(m,{variant:"solid",size:"sm",onClick:()=>N(),children:"Change"})]})]})})};export{qs as default};
