import{al as A,am as C,an as I,ao as v,j as e,a as N,r as b,ap as E,aq as L,at as M,ah as F}from"./index-fbeb73e8.js";import{C as B,i as k}from"./Views-e8d5fb02.js";import{u as P}from"./CrmService-0260fe15.js";import{A as _}from"./AdaptableCard-61c677ae.js";import"./Badge-67aa5111.js";import"./chart.constant-80226332.js";import"./chart.config-61f234bb.js";import"./index-193266b4.js";import{B as Y}from"./Button-fa703339.js";import"./Dialog-04fb7b63.js";import"./DataTable-2ef1b7c2.js";import{D as $}from"./DoubleSidedImage-323d8154.js";import"./Input-ea43c704.js";import"./GrowShrinkTag-6bf7fae1.js";import"./Skeleton-e59059fb.js";import"./react-tooltip.min-6d896212.js";import"./RichTextEditor-554e9538.js";import"./SegmentItemOption-43e428e6.js";import"./SvgIcon-6b6efa8a.js";import"./Tooltip-56eb9eeb.js";import{C as R}from"./Card-2611bbf0.js";import{t as T,N as D}from"./toast-8910f630.js";import{C as G}from"./ConfirmDialog-081bd52e.js";import{P as H}from"./index.esm-966eae5b.js";import{u as O,a as y,t as X,d as W,g as h,b as q}from"./index-0cacb5cf.js";import{h as z}from"./moment-fbc5633a.js";import{I as K}from"./index.esm-d8891037.js";import{T as J}from"./TagsList-05bce126.js";import"./useMergeRef-788c4cb0.js";import"./index-c9deba3f.js";import"./CloseButton-b1b46c4f.js";import"./index-af747e82.js";import"./index.esm-033a5667.js";import"./Pagination-70a157e9.js";import"./Select-d04732be.js";import"./slicedToArray-318d0ae0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-93a37066.js";import"./floating-ui.dom-bef9cea3.js";import"./get-b03197f1.js";import"./toString-e7e32846.js";import"./_MapCache-1a6e7e5d.js";import"./index-fa7b3b75.js";import"./cloneDeep-2449545a.js";import"./_getPrototype-d70ea966.js";import"./_baseIsEqual-c8746f9d.js";import"./index-0df708a1.js";import"./isNil-3e369377.js";import"./Tag-a8ec6a60.js";import"./useThemeClass-33f9a415.js";import"./usePopper-fdc6d8d1.js";import"./index.esm-00218edb.js";import"./index-18a42b76.js";import"./useTimeout-7f68915d.js";import"./StatusIcon-c2e1b9b5.js";import"./chainedFunction-070f832c.js";import"./index-82df8baa.js";import"./index-27d9e70a.js";import"./Alert-9eeb3e1b.js";import"./RangeCalendar-07e95539.js";import"./useControllableState-2f7f72e9.js";import"./index-197628eb.js";import"./useRootClose-97cd3002.js";import"./TimeInput-409b41c6.js";import"./useUniqueId-2e15deca.js";import"./useDidUpdate-6e166d72.js";import"./Drawer-383b2f06.js";import"./index-91e30e73.js";import"./useUncertainRef-558dbe5b.js";import"./index-9afb8437.js";import"./FormItem-be8e2cb8.js";import"./index-2090c75d.js";import"./index-e5cf4612.js";import"./Progress-d00a7ee9.js";import"./index-5fefc1aa.js";import"./ScrollBar-f7d5b71e.js";import"./index-4aafab9b.js";import"./index-dcf21671.js";import"./mapCloneElement-4a372efe.js";import"./Switcher-0771dd88.js";import"./index-b84a5e6c.js";import"./index-f04e83aa.js";import"./index-df93595f.js";import"./Upload-e917b755.js";import"./index.esm-d08d587a.js";const S="crmTaskDetails",Q={loading:!0,task:{}},j=A(`${S}/getTaskById`,async s=>{var i,r;try{return await P(s)}catch(n){throw new Error((r=(i=n==null?void 0:n.response)==null?void 0:i.data)==null?void 0:r.message)}}),U=C({name:`${S}/state`,initialState:Q,reducers:{},extraReducers:s=>{s.addCase(j.fulfilled,(i,r)=>{i.loading=!1,i.task=r==null?void 0:r.payload.data}).addCase(j.pending,i=>{i.loading=!0})}}),V=U.reducer,Z=I({data:V}),w=v,g=({title:s,value:i})=>e.jsxs("div",{children:[e.jsx("span",{children:s}),e.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(i==null?void 0:i.length)>50?"overflow-y-auto max-h-20":""}`,children:(i==null?void 0:i.length)>50?`${i==null?void 0:i.substring(0,50)}...`:i})]}),ee=s=>{const i=O(o=>{var m,c;return(c=(m=o.crmTasks)==null?void 0:m.data)==null?void 0:c.selectedTask}),r=N(),[n,t]=b.useState(!1),u=E(),d=()=>{t(!1)},a=()=>{t(!0)},f=async()=>{var m,c,l;await r(y(s)),r(X(!1));const o=await r(W(i.id));await r(h()),(m=o==null?void 0:o.payload)!=null&&m.success?(T.push(e.jsx(D,{title:"Successfuly Deleted",type:"success",duration:2500,children:(c=o==null?void 0:o.payload)==null?void 0:c.message}),{placement:"top-end"}),u("/app/crm/tasks"),r(y({}))):T.push(e.jsx(D,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(l=o==null?void 0:o.error)==null?void 0:l.message}),{placement:"top-end"}),await r(h()),await r(q())};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{block:!0,icon:e.jsx(H,{}),variant:"solid",onClick:a,children:"Delete"}),e.jsx(G,{isOpen:n,type:"danger",title:"Delete Task",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:f,children:e.jsx("p",{children:"Are you sure you want to delete this Task? All record related to this Task will be deleted as well. This action cannot be undone."})})]})},te=({data:s={}})=>e.jsx(R,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-3",children:[e.jsx(g,{title:"Priority",value:s.priority}),e.jsx(g,{title:"Status",value:s.completionStatus}),s!=null&&s.dueDate?e.jsx(g,{title:"Due Date",value:z(s==null?void 0:s.dueDate).format("DD MMMM YYYY")}):null,e.jsx(g,{title:"Title",value:s==null?void 0:s.title})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(ee,{data:s})})]})});L("crmTaskDetails",Z);const Mt=()=>{var o,m,c;const s=N(),i=M(),{id:r}=i,n=w(l=>{var p,x;return(x=(p=l==null?void 0:l.crmTaskDetails)==null?void 0:p.data)==null?void 0:x.task}),t=n==null?void 0:n.data,u=w(l=>l.crmTaskDetails.data.loading);b.useEffect(()=>{d()},[]);const d=async()=>{r&&s(j(r)),await s(h())},a=({title:l,value:p})=>e.jsxs("div",{children:[e.jsx("span",{children:l}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:p})]}),f=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:f,children:e.jsx(K,{})}),e.jsx("h3",{children:"Task Details"})]}),e.jsxs(B,{className:"h-full",children:[e.jsx(F,{loading:u,children:!k(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(te,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(a,{title:"Title",value:t==null?void 0:t.title}),e.jsx("br",{}),e.jsx(a,{title:"Description",value:t==null?void 0:t.descriptions}),e.jsx("br",{}),t!=null&&t.assignedToData?e.jsx(a,{title:"Assigned To",value:`${(o=t==null?void 0:t.assignedToData)==null?void 0:o.firstName}  ${(m=t==null?void 0:t.assignedToData)==null?void 0:m.lastName}`}):null,t!=null&&t.module?e.jsx(a,{title:"Module",value:t==null?void 0:t.module}):null,e.jsx("br",{}),t!=null&&t.type?e.jsx(a,{title:"Type",value:t==null?void 0:t.type}):null,e.jsx("br",{}),t!=null&&t.nextDateTime?e.jsx(a,{title:"Date Time",value:t==null?void 0:t.nextDateTime}):null,e.jsx("br",{}),t.tags.length>0?e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tags",value:""}),e.jsx(J,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null,e.jsx("br",{}),t.taskFields.length>0?e.jsx(e.Fragment,{children:(c=t.taskFields)==null?void 0:c.map((l,p)=>{var x;return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:(x=l.customKey)==null?void 0:x.name,value:l.value}),p<t.taskFields.length-1&&e.jsx("br",{})]})})}):null,e.jsx("br",{})]})})})]})}),!u&&k(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx($,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Mt as default};
