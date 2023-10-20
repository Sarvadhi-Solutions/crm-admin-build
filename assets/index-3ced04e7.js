import{j as s,p as O,c as R,r as L,al as w,am as U,aX as q,an as X,ao as z,a as P,ah as J,aq as Q}from"./index-c4854441.js";import{A as V}from"./AdaptableCard-c03e443e.js";import{i as W,C as Y}from"./Views-a7a22f5b.js";import{T as b}from"./index-b126a36b.js";import{B as Z}from"./Button-01aee70f.js";import{B as E}from"./Badge-ab812656.js";import{C as k}from"./Card-694d2290.js";import{T as M}from"./Tag-ca3c125e.js";import{H as S}from"./index-c102084f.js";import{i as D}from"./isLastChild-83eb4c23.js";import{A as F}from"./index-7f0011a9.js";import{u as ss,a as es}from"./acronym-1e3301b9.js";import{R as ls,aq as as,$ as cs,ar as rs,as as ts}from"./index.esm-600eab3e.js";import{c as H}from"./AccountServices-2ed102a8.js";import{C}from"./index-199241b3.js";import{A as is}from"./Affix-41e1ab93.js";import"./mapCloneElement-7f5ffe17.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-ff9677e2.js";import"./usePopper-36d997d0.js";import"./index.esm-40a48121.js";import"./index-611f00f8.js";import"./cloneDeep-57418006.js";import"./_MapCache-cce6ed45.js";import"./_getPrototype-37ec97c4.js";import"./_baseIsEqual-7cb4339e.js";import"./get-1a41de3d.js";import"./toString-9f124ebf.js";const h="UPDATE-TICKET",y="COMMENT",u="ADD-TAGS-TO-TICKET",p="ADD-FILES-TO-TICKET",f="COMMENT-MENTION",T="ASSIGN-TICKET",N="CREATE-TICKET",ns=[h,y,f,T],ms=[u,p,N],g={0:{label:"Completed",bgClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"In Dev",bgClass:"bg-blue-500",textClass:"text-blue-500"},2:{label:"Ready to test",bgClass:"bg-amber-500",textClass:"text-amber-500"}},_={"Live Issue":"bg-rose-500",Backend:"bg-blue-500",Bug:"bg-amber-400","Low priority":"bg-indigo-500"},n=({value:e})=>s.jsx(s.Fragment,{children:O.unix(e).format("hh:mm A")}),c=({children:e,className:l})=>s.jsx("span",{className:R("font-semibold text-gray-900 dark:text-gray-100",l),children:e}),os=({data:e,compact:l})=>{var m,t,d,j;const i={replace:r=>{var a,x;return r.type==="tag"&&(r==null?void 0:r.name)==="strong"?s.jsx(c,{children:(a=r==null?void 0:r.children[0])==null?void 0:a.data},(x=r==null?void 0:r.children[0])==null?void 0:x.data):r.data}};switch(e.type){case h:return l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"has change "}),s.jsx(c,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:" status to "}),s.jsx(E,{className:g[e.status||0].bgClass}),s.jsx(c,{className:"ml-1 rtl:mr-1",children:g[e.status||0].label})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"has change "}),s.jsx(c,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:" status to "}),s.jsx(E,{className:g[e.status||0].bgClass}),s.jsx(c,{className:"ml-1 rtl:mr-1",children:g[e.status||0].label}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]});case y:return s.jsxs(s.Fragment,{children:[l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"comment on your"}),s.jsx(c,{children:"Post"})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"comment on your"}),s.jsx(c,{children:"Post"}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]}),s.jsx(k,{bordered:!0,className:"mt-4",children:S(e.comment||"",i)})]});case f:return s.jsxs(s.Fragment,{children:[l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"mentioned you in a comment"}),s.jsx(c,{children:"Post"})]})]}):s.jsxs("p",{className:"my-1 flex items-center",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"mx-1",children:"mentioned you in a comment"}),s.jsx(c,{children:"Post"}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]}),s.jsx(k,{bordered:!0,className:"mt-4",children:S(e.comment||"",i)})]});case u:return l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"added tags "}),(m=e==null?void 0:e.tags)==null?void 0:m.map((r,a)=>s.jsx(M,{prefix:!0,className:"mx-1",prefixClass:`${_[r]}`,children:r},r+a))]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(c,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"added tags "}),(t=e==null?void 0:e.tags)==null?void 0:t.map((r,a)=>s.jsx(M,{prefix:!0,className:"mx-1",prefixClass:`${_[r]}`,children:r},r+a)),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]});case p:return l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"added"}),(d=e==null?void 0:e.files)==null?void 0:d.map((r,a)=>s.jsxs(c,{children:[r,!D((e==null?void 0:e.files)||[],a)&&s.jsxs("span",{className:"ltr:mr-1 rtl:ml-1",children:[","," "]})]},r+a))]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(c,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"added"}),(j=e==null?void 0:e.files)==null?void 0:j.map((r,a)=>s.jsxs(c,{children:[r,!D((e==null?void 0:e.files)||[],a)&&s.jsx("span",{className:"ltr:mr-1 rtl:ml-1",children:", "})]},r+a)),s.jsx("span",{className:"mx-1",children:"to ticket"}),s.jsxs(c,{children:[e.ticket," "]}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]});case T:return l?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-y-0.5",children:[s.jsx(c,{children:e.userName}),s.jsx("span",{className:"text-xs",children:s.jsx(n,{value:e.dateTime})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mx-1",children:"assigned ticket"}),s.jsx(c,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:"to"}),s.jsxs(c,{children:[e==null?void 0:e.assignee," "]})]})]}):s.jsxs("div",{className:"flex items-center",children:[s.jsxs(c,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"assigned ticket"}),s.jsx(c,{children:e.ticket}),s.jsx("span",{className:"mx-1",children:"to"}),s.jsxs(c,{children:[e.assignee," "]}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]});case N:return s.jsxs("div",{className:"flex items-center",children:[s.jsxs(c,{children:[e.userName," "]}),s.jsx("span",{className:"mx-1",children:"has created ticket"}),s.jsx(c,{children:e.ticket}),s.jsx("span",{className:"ml-3 rtl:mr-3",children:s.jsx(n,{value:e.dateTime})})]});default:return null}},xs=({type:e})=>{switch(e){case u:return s.jsx(ts,{});case p:return s.jsx(rs,{});case h:return s.jsx(cs,{});case N:return s.jsx(as,{});default:return s.jsx(ls,{})}},ds=({data:e})=>{const l=ss(),i=L.useMemo(()=>({size:30,shape:"circle"}),[]);if(e&&ns.includes(e.type)){const m=e.userImg?{src:e.userImg}:{className:`${l(e.userName||"")}`};return s.jsx(F,{...m,...i,children:es(e.userName||"")})}return e&&ms.includes(e.type)?s.jsx(F,{className:"text-gray-700 bg-gray-200 dark:text-gray-100",icon:s.jsx(xs,{type:e.type}),...i}):null},I="accountActivityLog",A=w(I+"/getLogs",async e=>(await H(e)).data),v=w(I+"/filterLogs",async e=>(await H(e)).data),js={loading:!1,loadMoreLoading:!1,loadable:!1,activityIndex:1,logs:[],selectedType:[h,y,f,T,u,p,N]},B=U({name:`${I}/state`,initialState:js,reducers:{setActivityIndex:(e,l)=>{e.activityIndex=l.payload},setSelected:(e,l)=>{e.selectedType=l.payload}},extraReducers:e=>{e.addCase(A.fulfilled,(l,i)=>{const m=q(l);l.logs=[...m.logs,...i.payload.data],l.loadMoreLoading=!1,l.loadable=i.payload.loadable}).addCase(A.pending,l=>{l.loadMoreLoading=!0}).addCase(v.fulfilled,(l,i)=>{l.logs=i.payload.data,l.loading=!1,l.loadable=i.payload.loadable}).addCase(v.pending,l=>{l.loading=!0})}}),{setActivityIndex:G,setSelected:hs}=B.actions,us=B.reducer,ps=X({data:us}),o=z,Ns=()=>{const e=P(),l=o(a=>a.accountActivityLog.data.logs),i=o(a=>a.accountActivityLog.data.loading),m=o(a=>a.accountActivityLog.data.loadMoreLoading),t=o(a=>a.accountActivityLog.data.loadable),d=o(a=>a.accountActivityLog.data.selectedType),j=o(a=>a.accountActivityLog.data.activityIndex);L.useEffect(()=>{e(v({filter:d,activityIndex:j}))},[]);const r=()=>{const a=j+1;e(G(a)),e(A({filter:d,activityIndex:a}))};return s.jsx(J,{loading:i,children:s.jsxs("div",{className:"max-w-[900px]",children:[l.map(a=>s.jsxs("div",{className:"mb-8",children:[s.jsx("div",{className:"mb-4 font-semibold uppercase",children:O.unix(a.date).format("dddd, DD MMMM")}),s.jsx(b,{children:W(a.events)?s.jsx(b.Item,{children:"No Activities"}):a.events.map((x,$)=>s.jsx(b.Item,{media:s.jsx(ds,{data:x}),children:s.jsx("div",{className:"mt-1",children:s.jsx(os,{data:x})})},x.type+$))})]},a.id)),s.jsx("div",{className:"text-center",children:t?s.jsx(Z,{loading:m,onClick:r,children:"Load More"}):"No more activity to load"})]})})},gs=[{label:"Comment on post",value:y},{label:"Mentioned you",value:f}],vs=[{label:"Ticket status",value:h},{label:"Assign ticket",value:T},{label:"New ticket",value:N},{label:"Add tags",value:u},{label:"Add files",value:p}],K=({children:e,className:l})=>s.jsx("h6",{className:R("text-gray-900 uppercase tracking-wide font-semibold text-sm lg:text-xs",l),children:e}),ys=()=>{const e=P(),l=o(t=>t.accountActivityLog.data.selectedType),i=o(t=>t.accountActivityLog.data.activityIndex),m=L.useCallback(t=>{e(v({filter:t,activityIndex:1})),i!==1&&e(G(1)),e(hs(t))},[e,i]);return s.jsx("div",{children:s.jsxs(is,{className:"hidden lg:block",offset:80,children:[s.jsx("h5",{className:"mb-4",children:"Filter Activity"}),s.jsxs(C.Group,{vertical:!0,value:l,onChange:t=>{m(t)},children:[s.jsx(K,{className:"mb-3",children:"Ticket"}),vs.map(t=>s.jsx(C,{className:"mb-4",value:t.value,children:t.label},t.value)),s.jsx(K,{className:"mt-4 mb-3",children:"Comment"}),gs.map(t=>s.jsx(C,{className:"mb-4",value:t.value,children:t.label},t.value))]})]})})};Q("accountActivityLog",ps);const fs=()=>s.jsx(Y,{children:s.jsx(V,{children:s.jsxs("div",{className:"grid lg:grid-cols-5 gap-8",children:[s.jsxs("div",{className:"col-span-4",children:[s.jsx("h3",{className:"mb-6",children:"Activity Log"}),s.jsx(Ns,{})]}),s.jsx(ys,{})]})})}),Vs=fs;export{Vs as default};
