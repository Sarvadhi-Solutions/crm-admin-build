import{al as A,am as C,an as I,ao as v,j as e,a as b,r as w,ap as E,aq as L,at as M,ah as F}from"./index-3da8ab78.js";import{C as B,i as j}from"./Views-ac495012.js";import{u as P}from"./CrmService-0c8f2380.js";import{A as _}from"./AdaptableCard-3b27054d.js";import"./Badge-f2e142b8.js";import"./chart.constant-8b4828b9.js";import"./chart.config-97bb4020.js";import"./index-74cf1be4.js";import{B as Y}from"./Button-8579f7ca.js";import"./Dialog-f71c0e0d.js";import"./DataTable-9f0fb930.js";import{D as $}from"./DoubleSidedImage-f7552a61.js";import"./Input-50869ece.js";import"./GrowShrinkTag-c55d1769.js";import"./Skeleton-a9909653.js";import"./react-tooltip.min-bd173d61.js";import"./RichTextEditor-2673e8da.js";import"./SegmentItemOption-5098e875.js";import"./SvgIcon-2300e574.js";import"./Tooltip-d01527b7.js";import{C as R}from"./Card-7380f9b9.js";import{t as k,N as T}from"./toast-3574e37c.js";import{C as G}from"./ConfirmDialog-f45f9705.js";import{P as H}from"./index.esm-4107b49d.js";import{u as O,a as D,t as X,d as W,g as y,b as q}from"./index-e41bcbd7.js";import{h as z}from"./moment-fbc5633a.js";import{I as K}from"./index.esm-6ca7f0b0.js";import{T as J}from"./TagsList-2a8659ca.js";import"./useMergeRef-788c4cb0.js";import"./index-ebe83277.js";import"./CloseButton-180dbba2.js";import"./index-2f843102.js";import"./index.esm-e2737c3c.js";import"./Pagination-423791d4.js";import"./Select-5300a5e5.js";import"./slicedToArray-c2eadced.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-74a7d2b0.js";import"./floating-ui.dom-bef9cea3.js";import"./get-a9ebd7b5.js";import"./toString-9fd50606.js";import"./_MapCache-99cd0bb5.js";import"./index-58062901.js";import"./cloneDeep-df62328b.js";import"./_getPrototype-cf8d7a10.js";import"./_baseIsEqual-21b96bbd.js";import"./index-cf1d0ab0.js";import"./isNil-90add0e7.js";import"./Tag-ef060f80.js";import"./useThemeClass-a75d86d3.js";import"./usePopper-2e195c60.js";import"./index.esm-ddf990fb.js";import"./index-34bf7828.js";import"./useTimeout-318d80bf.js";import"./StatusIcon-fc07f312.js";import"./chainedFunction-070f832c.js";import"./index-704fb33d.js";import"./index-ef8a38e1.js";import"./Alert-ceb6abb1.js";import"./RangeCalendar-ef5337d8.js";import"./useControllableState-6098f537.js";import"./index-36e58418.js";import"./useRootClose-288f7513.js";import"./TimeInput-187ac456.js";import"./useUniqueId-89e6e85c.js";import"./useDidUpdate-30b7bde9.js";import"./Drawer-e8e52de5.js";import"./index-2a18aa2a.js";import"./useUncertainRef-737e18d2.js";import"./index-01299703.js";import"./FormItem-7755f9c3.js";import"./index-a1237748.js";import"./index-2b7cf886.js";import"./Progress-547ea6f2.js";import"./index-4de279b6.js";import"./ScrollBar-72517c7e.js";import"./index-7b99a021.js";import"./index-d17a46fb.js";import"./mapCloneElement-5b23fbb8.js";import"./Switcher-a110a9cd.js";import"./index-d1a7ee08.js";import"./index-52e3c01e.js";import"./index-2e6281ce.js";import"./Upload-b8cdff70.js";import"./index.esm-de3ac0d2.js";const S="crmTaskDetails",Q={loading:!0,task:{}},h=A(`${S}/getTaskById`,async s=>{var i,r;try{return await P(s)}catch(n){throw new Error((r=(i=n==null?void 0:n.response)==null?void 0:i.data)==null?void 0:r.message)}}),U=C({name:`${S}/state`,initialState:Q,reducers:{},extraReducers:s=>{s.addCase(h.fulfilled,(i,r)=>{i.loading=!1,i.task=r==null?void 0:r.payload.data}).addCase(h.pending,i=>{i.loading=!0})}}),V=U.reducer,Z=I({data:V}),N=v,g=({title:s,value:i})=>e.jsxs("div",{children:[e.jsx("span",{children:s}),e.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(i==null?void 0:i.length)>50?"overflow-y-auto max-h-20":""}`,children:(i==null?void 0:i.length)>50?`${i==null?void 0:i.substring(0,50)}...`:i})]}),ee=s=>{const i=O(o=>o.crmTasks.data.selectedTask),r=b(),[n,t]=w.useState(!1),u=E(),c=()=>{t(!1)},a=()=>{t(!0)},f=async()=>{var p,d,l;await r(D(s)),r(X(!1));const o=await r(W(i.id));await r(y()),(p=o==null?void 0:o.payload)!=null&&p.success?(k.push(e.jsx(T,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=o==null?void 0:o.payload)==null?void 0:d.message}),{placement:"top-end"}),u("/app/crm/tasks"),r(D({}))):k.push(e.jsx(T,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(l=o==null?void 0:o.error)==null?void 0:l.message}),{placement:"top-end"}),await r(y()),await r(q())};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{block:!0,icon:e.jsx(H,{}),variant:"solid",onClick:a,children:"Delete"}),e.jsx(G,{isOpen:n,type:"danger",title:"Delete Task",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:f,children:e.jsx("p",{children:"Are you sure you want to delete this Task? All record related to this Task will be deleted as well. This action cannot be undone."})})]})},te=({data:s={}})=>e.jsx(R,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-3",children:[e.jsx(g,{title:"Priority",value:s.priority}),e.jsx(g,{title:"Status",value:s.completionStatus}),s!=null&&s.dueDate?e.jsx(g,{title:"Due Date",value:z(s==null?void 0:s.dueDate).format("DD MMMM YYYY")}):null,e.jsx(g,{title:"Title",value:s==null?void 0:s.title})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(ee,{data:s})})]})});L("crmTaskDetails",Z);const Mt=()=>{var o,p,d;const s=b(),i=M(),{id:r}=i,n=N(l=>{var m,x;return(x=(m=l==null?void 0:l.crmTaskDetails)==null?void 0:m.data)==null?void 0:x.task}),t=n==null?void 0:n.data,u=N(l=>l.crmTaskDetails.data.loading);w.useEffect(()=>{c()},[]);const c=()=>{r&&s(h(r))},a=({title:l,value:m})=>e.jsxs("div",{children:[e.jsx("span",{children:l}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:m})]}),f=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:f,children:e.jsx(K,{})}),e.jsx("h3",{children:"Task Details"})]}),e.jsxs(B,{className:"h-full",children:[e.jsx(F,{loading:u,children:!j(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(te,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(a,{title:"Title",value:t==null?void 0:t.title}),e.jsx("br",{}),e.jsx(a,{title:"Description",value:t==null?void 0:t.descriptions}),e.jsx("br",{}),t!=null&&t.assignedToData?e.jsx(a,{title:"Assigned To",value:`${(o=t==null?void 0:t.assignedToData)==null?void 0:o.firstName}  ${(p=t==null?void 0:t.assignedToData)==null?void 0:p.lastName}`}):null,t!=null&&t.module?e.jsx(a,{title:"Module",value:t==null?void 0:t.module}):null,e.jsx("br",{}),t!=null&&t.type?e.jsx(a,{title:"Type",value:t==null?void 0:t.type}):null,e.jsx("br",{}),t!=null&&t.nextDateTime?e.jsx(a,{title:"Date Time",value:t==null?void 0:t.nextDateTime}):null,e.jsx("br",{}),t.tags.length>0?e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tags",value:""}),e.jsx(J,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null,e.jsx("br",{}),t.taskFields.length>0?e.jsx(e.Fragment,{children:(d=t.taskFields)==null?void 0:d.map((l,m)=>{var x;return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:(x=l.customKey)==null?void 0:x.name,value:l.value}),m<t.taskFields.length-1&&e.jsx("br",{})]})})}):null,e.jsx("br",{})]})})})]})}),!u&&j(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx($,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Mt as default};
