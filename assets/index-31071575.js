import{am as E,an as z,ao as M,ap as $,a as f,j as s,r as c,aq as q}from"./index-03c04ff8.js";import{aE as B,a5 as K}from"./CrmService-429b7a33.js";import{D as P}from"./DataTable-9d817024.js";import{u as k}from"./useThemeClass-701da38c.js";import"./Alert-150a77d9.js";import"./index-b28ee968.js";import{B as H}from"./Badge-9e03359a.js";import"./Button-43b0b556.js";import"./RangeCalendar-fd86ac0e.js";import"./Card-ac72e1c3.js";import{C as O}from"./index-65a265b2.js";import"./index-564117fd.js";import"./Dialog-bdcf65b5.js";import"./Drawer-4f1dc3e9.js";import"./index-b8f5d3a3.js";import"./FormItem-e51bc525.js";import"./toString-6216203c.js";import"./Input-a694346c.js";import"./index-e73ce215.js";import"./index-f63d6955.js";import"./index-b7b7180a.js";import{t as w,N as S}from"./toast-5fc5fe7c.js";import"./Pagination-2b3f9c70.js";import"./Progress-e8ec294d.js";import"./index-dafa1633.js";import"./ScrollBar-5778a435.js";import"./index-4125dbd0.js";import"./Select-f865911a.js";import"./Skeleton-6f5440b9.js";import"./index-2aace800.js";import"./Switcher-3f72cb43.js";import"./index-0c00bbc6.js";import"./index-de17390b.js";import"./Tag-5499707e.js";import"./index-81144042.js";import"./index-e3eb4615.js";import"./Tooltip-d932d71c.js";import"./Upload-d3b407d2.js";import{T as W}from"./TextTruncate-374bcc19.js";import{u as b}from"./checkEditUpdate-e2f0b2aa.js";import{c as C}from"./cloneDeep-057bcc25.js";import{C as _}from"./ConfirmDialog-f0f4366f.js";import"./index-e5a76227.js";import"./useTimeout-c02373c8.js";import"./index.esm-0ab06d90.js";import"./CloseButton-a5f0795d.js";import"./StatusIcon-ded4acbe.js";import"./Views-6cf30eea.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-a86a8835.js";import"./_baseIsEqual-accf4f3c.js";import"./_MapCache-a07a3963.js";import"./get-b8650fa5.js";import"./useRootClose-70ca7828.js";import"./usePopper-63a1f788.js";import"./TimeInput-c79520af.js";import"./useUniqueId-9d592829.js";import"./useDidUpdate-4e1a0ded.js";import"./index-37559a98.js";import"./useUncertainRef-0cc46a5e.js";import"./isNil-b5e08138.js";import"./index-ca954fc1.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-0d7757b0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-381032b8.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-8fa230dc.js";import"./index.esm-ade8db0e.js";import"./index.esm-2c51d28d.js";import"./index.esm-f417d29a.js";import"./moment-fbc5633a.js";import"./_getPrototype-65f62f79.js";const d=E("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=E("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:jt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(F(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=k();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=k(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},wt=ae;export{wt as default};
