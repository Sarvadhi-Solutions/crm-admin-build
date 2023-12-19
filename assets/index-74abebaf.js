import{am as k,an as z,ao as M,ap as $,a as f,j as s,r as c,ar as q}from"./index-c3e9fa7c.js";import{z as B,A as K}from"./CrmService-65bc7d18.js";import{D as P}from"./DataTable-3befe403.js";import{u as A}from"./useThemeClass-9aa299d0.js";import"./Alert-1e0e8bff.js";import"./index-7489ac47.js";import{B as H}from"./Badge-d747266e.js";import"./Button-d0ef02c0.js";import"./Calendar-3dc19a88.js";import"./Card-f5c778fb.js";import{C as O}from"./index-f23338ff.js";import"./index-d82f0d5a.js";import"./Dialog-29c1e818.js";import"./Drawer-7a9af9bc.js";import"./index-bca9904a.js";import"./FormItem-f92cf688.js";import"./toString-8d06d124.js";import"./Input-1486261f.js";import"./index-cdf7d65c.js";import"./index-299dc733.js";import"./index-bb719d81.js";import{t as w,N as S}from"./toast-1384448d.js";import"./Pagination-191f69e3.js";import"./Progress-7f6be63e.js";import"./index-96af533f.js";import"./RangeCalendar-82a1c17a.js";import"./ScrollBar-fd95dfb9.js";import"./index-ae673476.js";import"./Select-6cb5654e.js";import"./Skeleton-0356863b.js";import"./index-769df92d.js";import"./Switcher-b542533c.js";import"./index-b1456952.js";import"./index-9d0fdf21.js";import"./Tag-758ab856.js";import"./index-04bb5a46.js";import"./index-afdeca35.js";import"./Tooltip-0d302304.js";import"./Upload-462d13c7.js";import{T as W}from"./TextTruncate-6ff3213a.js";import{u as b}from"./checkEditUpdate-55a161ed.js";import{c as C}from"./cloneDeep-5b29fb06.js";import{C as _}from"./ConfirmDialog-4403793d.js";import"./TableRowSkeleton-bd2148ae.js";import"./index-ce3e799d.js";import"./useTimeout-d6c2414e.js";import"./index.esm-291b3c8a.js";import"./CloseButton-b3d6dc71.js";import"./StatusIcon-9d0bc889.js";import"./Views-4498dec6.js";import"./useMergeRef-788c4cb0.js";import"./context-c2e517f5.js";import"./useControllableState-a53f6e69.js";import"./_Uint8Array-10296907.js";import"./_MapCache-018d5ff9.js";import"./_baseIsEqual-523cf8f9.js";import"./get-b06143cc.js";import"./useRootClose-ed59e0fc.js";import"./usePopper-26945918.js";import"./TimeInput-70c59d46.js";import"./useUniqueId-5b8bcb2e.js";import"./useDidUpdate-edee1e5d.js";import"./index-7c779fd2.js";import"./useUncertainRef-ada2461c.js";import"./isNil-cc11ed44.js";import"./index-203bcdc0.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-83ee2bb3.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-ab33ca8c.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-67555f28.js";import"./index.esm-e2831cf6.js";import"./index.esm-fe639564.js";import"./index.esm-fdc3a9c5.js";import"./_getPrototype-9846d01d.js";const d=k("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=k("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},E=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:kt,toggleDeleteConfirmation:y,setSelectedTag:Q}=E.actions,V=E.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(F(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=A();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=A(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},At=ae;export{At as default};
