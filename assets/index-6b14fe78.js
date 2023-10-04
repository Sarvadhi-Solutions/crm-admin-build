import{am as k,an as z,ao as M,ap as $,a as f,j as s,r as c,ar as P}from"./index-b09faefa.js";import{a6 as q,P as B}from"./CrmService-5f2f53bd.js";import{D as K}from"./DataTable-ca158282.js";import{u as E}from"./useThemeClass-ee0e86a7.js";import"./Alert-a515d81f.js";import"./index-2f1f758f.js";import{B as H}from"./Badge-d1515062.js";import"./Button-3bdf4581.js";import"./Calendar-6959847d.js";import"./Card-33431fc8.js";import{C as O}from"./index-c173cf47.js";import"./index-82bb2b50.js";import"./Dialog-a2bd00be.js";import"./Drawer-1ea16c4a.js";import"./index-96409d01.js";import"./FormItem-cdcc11d5.js";import"./toString-9cef9a7f.js";import"./Input-8c731b0c.js";import"./index-c886a512.js";import"./index-056a1440.js";import"./index-ae319e32.js";import{t as w,N as S}from"./toast-2c9f9fcf.js";import"./Pagination-d71ebe95.js";import"./Progress-a1e68dcb.js";import"./index-bc0f434c.js";import"./RangeCalendar-b4e9e88f.js";import"./ScrollBar-a256ec53.js";import"./index-d106a35e.js";import"./Select-71db8857.js";import"./Skeleton-5bf82d8e.js";import"./index-975733af.js";import"./Switcher-e643b9c6.js";import"./index-a157bc37.js";import"./index-addd5e63.js";import"./Tag-0d544e3b.js";import"./index-ba770d43.js";import"./index-dd0b5a15.js";import"./Tooltip-5b8c5fcd.js";import"./Upload-8f332031.js";import{T as W}from"./TextTruncate-222d0204.js";import{u as b}from"./checkEditUpdate-cffc7ae3.js";import{c as C}from"./cloneDeep-de9ec659.js";import{C as _}from"./ConfirmDialog-1096cdd6.js";import"./TableRowSkeleton-a83d3c9d.js";import"./index-e08096fb.js";import"./useTimeout-68d097ea.js";import"./index.esm-2c67faf2.js";import"./CloseButton-13cd4a8c.js";import"./StatusIcon-b02f9bab.js";import"./Views-57e82c67.js";import"./useMergeRef-788c4cb0.js";import"./context-80e77f1b.js";import"./useControllableState-5d01e6b9.js";import"./_Uint8Array-b1a93c95.js";import"./_MapCache-a97510fd.js";import"./_baseIsEqual-77ddc906.js";import"./get-263a9377.js";import"./useRootClose-3c97a09c.js";import"./usePopper-29fe3cd5.js";import"./TimeInput-23ce06d7.js";import"./useUniqueId-6d806f5c.js";import"./useDidUpdate-ec3bfb81.js";import"./index-8c214619.js";import"./useUncertainRef-b762bd82.js";import"./isNil-f81aee01.js";import"./index-62df96f3.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-00fbfd7c.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-f69b773e.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-ef910f8e.js";import"./index.esm-dbc068f5.js";import"./index.esm-7a963ea9.js";import"./index.esm-a78f5b32.js";import"./_getPrototype-3540f1e6.js";const d=k("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await q()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=k("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await B(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:kt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(F(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=E();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=E(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(K,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};P("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},Et=ae;export{Et as default};
