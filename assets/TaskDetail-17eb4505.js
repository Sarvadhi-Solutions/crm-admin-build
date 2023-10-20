import{al as b,am as A,an as C,ao as I,j as e,a as N,r as w,ap as v,aq as E,at as L,ah as M}from"./index-c4854441.js";import{C as B,i as h}from"./Views-a7a22f5b.js";import{u as _}from"./CrmService-2767e679.js";import{A as P}from"./AdaptableCard-c03e443e.js";import"./Badge-ab812656.js";import"./chart.constant-33f94cf9.js";import"./chart.config-3e4495ec.js";import"./index-7f0011a9.js";import{B as Y}from"./Button-01aee70f.js";import"./Dialog-1a78eb06.js";import"./DataTable-c212c69f.js";import{D as $}from"./DoubleSidedImage-b7d8a391.js";import"./Input-6e1fc018.js";import"./GrowShrinkTag-b6ec35ba.js";import"./Skeleton-7820a1d7.js";import"./react-tooltip.min-5a60ee3f.js";import"./RichTextEditor-a1431fa0.js";import"./SegmentItemOption-e39e8725.js";import"./SvgIcon-7439607c.js";import"./Tooltip-ff9677e2.js";import{C as R}from"./Card-694d2290.js";import{t as j,N as T}from"./toast-f5971c5e.js";import{C as F}from"./ConfirmDialog-2a50d9e0.js";import{Q as G}from"./index.esm-600eab3e.js";import{u as H,a as k,t as O,d as W,g as D,b as X}from"./index-99a7ca48.js";import{h as q}from"./moment-fbc5633a.js";import{I as z}from"./index.esm-7b7148ac.js";import{T as Q}from"./TagsList-07470663.js";import"./useMergeRef-788c4cb0.js";import"./index-12fb9f3c.js";import"./CloseButton-481ca768.js";import"./index-2a967f86.js";import"./index.esm-626783fa.js";import"./Pagination-91f29835.js";import"./Select-a3dcfbd9.js";import"./slicedToArray-5b2b8266.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./floating-ui.dom-bef9cea3.js";import"./get-1a41de3d.js";import"./toString-9f124ebf.js";import"./_MapCache-cce6ed45.js";import"./index-199241b3.js";import"./cloneDeep-57418006.js";import"./_getPrototype-37ec97c4.js";import"./_baseIsEqual-7cb4339e.js";import"./index-706b8eda.js";import"./isNil-c3c7dc62.js";import"./Tag-ca3c125e.js";import"./useThemeClass-58ccaa98.js";import"./usePopper-36d997d0.js";import"./index.esm-40a48121.js";import"./index-611f00f8.js";import"./useTimeout-52e2a342.js";import"./StatusIcon-9c6ff3de.js";import"./chainedFunction-070f832c.js";import"./index-0d06fcfb.js";import"./index-ded1b8d8.js";import"./Alert-c43b1341.js";import"./RangeCalendar-60cea8df.js";import"./useControllableState-f590672a.js";import"./index-4960ea6a.js";import"./useRootClose-7d26ea3b.js";import"./TimeInput-028532aa.js";import"./useUniqueId-ef880a97.js";import"./useDidUpdate-d042343d.js";import"./Drawer-459fd2f8.js";import"./index-516e2d91.js";import"./useUncertainRef-3dcc2864.js";import"./index-337c98e1.js";import"./FormItem-f088ddbb.js";import"./index-b9e48651.js";import"./index-69125dab.js";import"./Progress-1eb48ff9.js";import"./index-6afc7114.js";import"./ScrollBar-7a627a75.js";import"./index-fee22201.js";import"./index-1b4d8032.js";import"./mapCloneElement-7f5ffe17.js";import"./Switcher-9b266edd.js";import"./index-2020af5b.js";import"./index-954fdf33.js";import"./index-b126a36b.js";import"./Upload-1e5004d3.js";import"./index.esm-e743b778.js";const S="crmTaskDetails",J={loading:!0,task:{}},f=b(`${S}/getTaskById`,async s=>{var i,o;try{return await _(s)}catch(l){throw new Error((o=(i=l==null?void 0:l.response)==null?void 0:i.data)==null?void 0:o.message)}}),K=A({name:`${S}/state`,initialState:J,reducers:{},extraReducers:s=>{s.addCase(f.fulfilled,(i,o)=>{i.loading=!1,i.task=o==null?void 0:o.payload.data}).addCase(f.pending,i=>{i.loading=!0})}}),U=K.reducer,V=C({data:U}),y=I,x=({title:s,value:i})=>e.jsxs("div",{children:[e.jsx("span",{children:s}),e.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(i==null?void 0:i.length)>50?"overflow-y-auto max-h-20":""}`,children:(i==null?void 0:i.length)>50?`${i==null?void 0:i.substring(0,50)}...`:i})]}),Z=s=>{const i=H(r=>r.crmTasks.data.selectedTask),o=N(),[l,t]=w.useState(!1),d=v(),c=()=>{t(!1)},a=()=>{t(!0)},u=async()=>{var p,n,m;await o(k(s)),o(O(!1));const r=await o(W(i.id));await o(D()),(p=r==null?void 0:r.payload)!=null&&p.success?(j.push(e.jsx(T,{title:"Successfuly Deleted",type:"success",duration:2500,children:(n=r==null?void 0:r.payload)==null?void 0:n.message}),{placement:"top-end"}),d("/app/crm/tasks"),o(k({}))):j.push(e.jsx(T,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(m=r==null?void 0:r.error)==null?void 0:m.message}),{placement:"top-end"}),await o(D()),await o(X())};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{block:!0,icon:e.jsx(G,{}),variant:"solid",onClick:a,children:"Delete"}),e.jsx(F,{isOpen:l,type:"danger",title:"Delete Task",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Task? All record related to this Task will be deleted as well. This action cannot be undone."})})]})},ee=({data:s={}})=>e.jsx(R,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-3",children:[e.jsx(x,{title:"Priority",value:s.priority}),e.jsx(x,{title:"Status",value:s.completionStatus}),s!=null&&s.dueDate?e.jsx(x,{title:"Due Date",value:q(s==null?void 0:s.dueDate).format("DD MMMM YYYY")}):null,e.jsx(x,{title:"Title",value:s==null?void 0:s.title})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Z,{data:s})})]})});E("crmTaskDetails",V);const Lt=()=>{var r,p;const s=N(),i=L(),{id:o}=i,l=y(n=>{var m,g;return(g=(m=n==null?void 0:n.crmTaskDetails)==null?void 0:m.data)==null?void 0:g.task}),t=l==null?void 0:l.data;console.log("Wrfrf",t);const d=y(n=>n.crmTaskDetails.data.loading);w.useEffect(()=>{c()},[]);const c=()=>{o&&s(f(o))},a=({title:n,value:m})=>e.jsxs("div",{children:[e.jsx("span",{children:n}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:m})]}),u=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:u,children:e.jsx(z,{})}),e.jsx("h3",{children:"Task Details"})]}),e.jsxs(B,{className:"h-full",children:[e.jsx(M,{loading:d,children:!h(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(ee,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(P,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(a,{title:"Title",value:t==null?void 0:t.title}),e.jsx("br",{}),e.jsx(a,{title:"Description",value:t==null?void 0:t.descriptions}),e.jsx("br",{}),t!=null&&t.assignedToData?e.jsx(a,{title:"Assigned To",value:`${(r=t==null?void 0:t.assignedToData)==null?void 0:r.firstName}  ${(p=t==null?void 0:t.assignedToData)==null?void 0:p.lastName}`}):null,t!=null&&t.module?e.jsx(a,{title:"Module",value:t==null?void 0:t.module}):null,e.jsx("br",{}),t!=null&&t.type?e.jsx(a,{title:"Type",value:t==null?void 0:t.type}):null,e.jsx("br",{}),t!=null&&t.nextDateTime?e.jsx(a,{title:"Date Time",value:t==null?void 0:t.nextDateTime}):null,e.jsx("br",{}),t.tags.length>0?e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tags",value:""}),e.jsx(Q,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null]})})})]})}),!d&&h(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx($,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Lt as default};
