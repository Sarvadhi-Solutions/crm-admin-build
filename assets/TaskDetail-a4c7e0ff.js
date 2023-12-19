import{al as k,am as T,an as y,ao as D,j as s,a as h,r as g,ap as N,aq as C,at as A,ah as S}from"./index-94b34292.js";import{C as w,i as f}from"./Views-fb5a8bd1.js";import{r as b}from"./CrmService-6dcb2527.js";import{A as E}from"./AdaptableCard-c182e7e7.js";import"./Badge-c7bdde2a.js";import"./chart.constant-2dd137d6.js";import"./chart.config-cda50660.js";import"./index-08dd991c.js";import{B as I}from"./Button-f4db3022.js";import"./Dialog-ab93e4a9.js";import"./DataTable-900992cf.js";import{D as L}from"./DoubleSidedImage-4b9d4a37.js";import"./Input-491bb23c.js";import"./GrowShrinkTag-aafe1d85.js";import"./Skeleton-231b2f52.js";import"./react-tooltip.min-9247ebae.js";import"./RichTextEditor-8461bb69.js";import"./SegmentItemOption-3072d404.js";import"./SvgIcon-09bc072d.js";import"./Tooltip-19d421b7.js";import{C as _}from"./Card-d6f50812.js";import{t as P,N as B}from"./toast-b11869d4.js";import{C as M}from"./ConfirmDialog-c6b5ec1f.js";import{O}from"./index.esm-782de75a.js";import{d as G}from"./index-984c7b79.js";import"./useMergeRef-788c4cb0.js";import"./index-4621c1d2.js";import"./CloseButton-ad08b636.js";import"./index-fae7cee7.js";import"./index.esm-b797afb7.js";import"./Pagination-3cfac0ee.js";import"./Select-b869f907.js";import"./slicedToArray-9d1e6790.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9b4d83b8.js";import"./floating-ui.dom-bef9cea3.js";import"./get-3061b6cb.js";import"./toString-47802c78.js";import"./_MapCache-4a7692d4.js";import"./index-4c98a578.js";import"./cloneDeep-9ce65ca1.js";import"./_getPrototype-9297296f.js";import"./_baseIsEqual-09386f4e.js";import"./index-2a44d335.js";import"./isNil-dc3379e0.js";import"./Tag-2875bb96.js";import"./useThemeClass-67552e9c.js";import"./usePopper-bc958b31.js";import"./index.esm-39aa8af5.js";import"./index-6d87b72d.js";import"./useTimeout-cb45d6dc.js";import"./StatusIcon-24504981.js";import"./chainedFunction-070f832c.js";import"./index-892bfaa2.js";import"./index-96776320.js";const j="crmTaskDetails",H={loading:!0,task:{}},d=k(`${j}/getTaskById`,async t=>{var e,r;try{return await b(t)}catch(i){throw new Error((r=(e=i==null?void 0:i.response)==null?void 0:e.data)==null?void 0:r.message)}}),R=T({name:`${j}/state`,initialState:H,reducers:{},extraReducers:t=>{t.addCase(d.fulfilled,(e,r)=>{e.loading=!1,e.task=r==null?void 0:r.payload.data}).addCase(d.pending,e=>{e.loading=!0})}}),v=R.reducer,X=y({data:v}),u=D,p=({title:t,value:e})=>s.jsxs("div",{children:[s.jsx("span",{children:t}),s.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(e==null?void 0:e.length)>50?"overflow-y-auto max-h-20":""}`,children:(e==null?void 0:e.length)>50?`${e==null?void 0:e.substring(0,50)}...`:e})]}),Y=t=>{const e=h(),[r,i]=g.useState(!1),o=N(),l=()=>{i(!1)},m=()=>{i(!0)},n=()=>{i(!1),t.id&&e(G(t.id)),o("/app/crm/Tasks"),P.push(s.jsx(B,{title:"Successfuly Deleted",type:"success",children:"Task successfuly deleted"}))};return s.jsxs(s.Fragment,{children:[s.jsx(I,{block:!0,icon:s.jsx(O,{}),variant:"solid",onClick:m,children:"Delete"}),s.jsx(M,{isOpen:r,type:"danger",title:"Delete Task",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:n,children:s.jsx("p",{children:"Are you sure you want to delete this Task? All record related to this Task will be deleted as well. This action cannot be undone."})})]})},$=({data:t={}})=>s.jsx(_,{children:s.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[s.jsx(p,{title:"Priority",value:t.priority}),s.jsx(p,{title:"Status",value:t.completionStatus}),s.jsx(p,{title:"Title",value:t==null?void 0:t.title})]}),s.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:s.jsx(Y,{data:t})})]})});C("crmTaskDetails",X);const qs=()=>{const t=h(),e=A(),{id:r}=e,i=u(a=>{var c,x;return(x=(c=a==null?void 0:a.crmTaskDetails)==null?void 0:c.data)==null?void 0:x.task}),o=i==null?void 0:i.data,l=u(a=>a.crmTaskDetails.data.loading);g.useEffect(()=>{m()},[]);const m=()=>{r&&t(d(r))},n=({title:a,value:c})=>s.jsxs("div",{children:[s.jsx("span",{children:a}),s.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:c})]});return s.jsxs(w,{className:"h-full",children:[s.jsx(S,{loading:l,children:!f(o)&&s.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[s.jsx("div",{children:s.jsx($,{data:o})}),s.jsx("div",{className:"w-full",children:s.jsx(E,{children:s.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[s.jsx(n,{title:"Title",value:o==null?void 0:o.title}),s.jsx("br",{}),s.jsx(n,{title:"Description",value:o==null?void 0:o.descriptions})]})})})]})}),!l&&f(o)&&s.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[s.jsx(L,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),s.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})};export{qs as default};
