import{am as y,an as k,a_ as D,ao as R,ap as w,a as A,r as f,j as a,ai as K,B as O,c as F,ar as G}from"./index-04de45f1.js";import{A as B}from"./AdaptableCard-b66d711f.js";import{i as U,C as $}from"./Views-9d427d6f.js";import{T as r}from"./index-b1e5b8b7.js";import{B as P}from"./Button-c014eb4a.js";import{U as h,C as j,a as T,A as L,b,c as C,d as N,T as q,E as z}from"./TimeLineAvatar-1c90e9d0.js";import{c as I}from"./AccountServices-cd01543c.js";import{C as m}from"./index-746fa18b.js";import{A as H}from"./Affix-efc50e98.js";import"./Card-5dadf163.js";import"./mapCloneElement-022773c2.js";import"./context-3f43d22b.js";import"./Badge-fd219ce7.js";import"./Tag-b89b8728.js";import"./index-5ffe062f.js";import"./isLastChild-83eb4c23.js";import"./index-d960fe16.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./acronym-91ff8fec.js";import"./index.esm-dece01db.js";import"./cloneDeep-9e3b0d5b.js";import"./_Uint8Array-51fedccd.js";import"./_MapCache-593c8f28.js";import"./_getPrototype-c53c6c29.js";import"./_baseIsEqual-aab3701d.js";import"./get-e02c019e.js";import"./toString-85ae3482.js";const u="accountActivityLog",p=y(u+"/getLogs",async t=>(await I(t)).data),d=y(u+"/filterLogs",async t=>(await I(t)).data),J={loading:!1,loadMoreLoading:!1,loadable:!1,activityIndex:1,logs:[],selectedType:[h,j,T,L,b,C,N]},E=k({name:`${u}/state`,initialState:J,reducers:{setActivityIndex:(t,e)=>{t.activityIndex=e.payload},setSelected:(t,e)=>{t.selectedType=e.payload}},extraReducers:t=>{t.addCase(p.fulfilled,(e,o)=>{const l=D(e);e.logs=[...l.logs,...o.payload.data],e.loadMoreLoading=!1,e.loadable=o.payload.loadable}).addCase(p.pending,e=>{e.loadMoreLoading=!0}).addCase(d.fulfilled,(e,o)=>{e.logs=o.payload.data,e.loading=!1,e.loadable=o.payload.loadable}).addCase(d.pending,e=>{e.loading=!0})}}),{setActivityIndex:M,setSelected:Q}=E.actions,V=E.reducer,W=R({data:V}),c=w,X=()=>{const t=A(),e=c(s=>s.accountActivityLog.data.logs),o=c(s=>s.accountActivityLog.data.loading),l=c(s=>s.accountActivityLog.data.loadMoreLoading),i=c(s=>s.accountActivityLog.data.loadable),g=c(s=>s.accountActivityLog.data.selectedType),x=c(s=>s.accountActivityLog.data.activityIndex);f.useEffect(()=>{t(d({filter:g,activityIndex:x}))},[]);const S=()=>{const s=x+1;t(M(s)),t(p({filter:g,activityIndex:s}))};return a.jsx(K,{loading:o,children:a.jsxs("div",{className:"max-w-[900px]",children:[e.map(s=>a.jsxs("div",{className:"mb-8",children:[a.jsx("div",{className:"mb-4 font-semibold uppercase",children:O.unix(s.date).format("dddd, DD MMMM")}),a.jsx(r,{children:U(s.events)?a.jsx(r.Item,{children:"No Activities"}):s.events.map((n,_)=>a.jsx(r.Item,{media:a.jsx(q,{data:n}),children:a.jsx("div",{className:"mt-1",children:a.jsx(z,{data:n})})},n.type+_))})]},s.id)),a.jsx("div",{className:"text-center",children:i?a.jsx(P,{loading:l,onClick:S,children:"Load More"}):"No more activity to load"})]})})},Y=[{label:"Comment on post",value:j},{label:"Mentioned you",value:T}],Z=[{label:"Ticket status",value:h},{label:"Assign ticket",value:L},{label:"New ticket",value:N},{label:"Add tags",value:b},{label:"Add files",value:C}],v=({children:t,className:e})=>a.jsx("h6",{className:F("text-gray-900 uppercase tracking-wide font-semibold text-sm lg:text-xs",e),children:t}),aa=()=>{const t=A(),e=c(i=>i.accountActivityLog.data.selectedType),o=c(i=>i.accountActivityLog.data.activityIndex),l=f.useCallback(i=>{t(d({filter:i,activityIndex:1})),o!==1&&t(M(1)),t(Q(i))},[t,o]);return a.jsx("div",{children:a.jsxs(H,{className:"hidden lg:block",offset:80,children:[a.jsx("h5",{className:"mb-4",children:"Filter Activity"}),a.jsxs(m.Group,{vertical:!0,value:e,onChange:i=>{l(i)},children:[a.jsx(v,{className:"mb-3",children:"Ticket"}),Z.map(i=>a.jsx(m,{className:"mb-4",value:i.value,children:i.label},i.value)),a.jsx(v,{className:"mt-4 mb-3",children:"Comment"}),Y.map(i=>a.jsx(m,{className:"mb-4",value:i.value,children:i.label},i.value))]})]})})};G("accountActivityLog",W);const ea=()=>a.jsx($,{children:a.jsx(B,{children:a.jsxs("div",{className:"grid lg:grid-cols-5 gap-8",children:[a.jsxs("div",{className:"col-span-4",children:[a.jsx("h3",{className:"mb-6",children:"Activity Log"}),a.jsx(X,{})]}),a.jsx(aa,{})]})})}),Da=ea;export{Da as default};
