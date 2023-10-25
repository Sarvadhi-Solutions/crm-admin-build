import{al as k,am as z,an as M,ao as $,a as f,j as s,r as c,aq as q}from"./index-d1f55000.js";import{aA as B,a5 as K}from"./CrmService-3f0fa95f.js";import{D as P}from"./DataTable-6737e455.js";import{u as A}from"./useThemeClass-29fe42de.js";import"./Alert-bc2bbe67.js";import"./index-ac5acc09.js";import{B as H}from"./Badge-2e560773.js";import"./Button-d10f25dd.js";import"./RangeCalendar-d43d05d7.js";import"./Card-b6647cdf.js";import{C as O}from"./index-b157f735.js";import"./index-2f8e95cb.js";import"./Dialog-012b8945.js";import"./Drawer-0c18a381.js";import"./index-d072efef.js";import"./FormItem-4075ccd4.js";import"./toString-7b4f9ac7.js";import"./Input-40502faa.js";import"./index-6b0c2b51.js";import"./index-7c8f45e7.js";import"./index-a10acbe3.js";import{t as w,N as S}from"./toast-4a408eff.js";import"./Pagination-ee6d6f94.js";import"./Progress-f11fb579.js";import"./index-0f803cf5.js";import"./ScrollBar-d7d05f7c.js";import"./index-ce20e2d5.js";import"./Select-9e04c31f.js";import"./Skeleton-046fff23.js";import"./index-073298ad.js";import"./Switcher-ffa768b6.js";import"./index-354e9a00.js";import"./index-fdd0fce8.js";import"./Tag-68df4337.js";import"./index-2efca1fd.js";import"./index-8e63d0e1.js";import"./Tooltip-e416896b.js";import"./Upload-6df85b8e.js";import{T as W}from"./TextTruncate-b56f7760.js";import{u as b}from"./checkEditUpdate-39f4f887.js";import{c as C}from"./cloneDeep-94f873f1.js";import{C as _}from"./ConfirmDialog-de2c7ae2.js";import"./index-56369f77.js";import"./useTimeout-8ae64f40.js";import"./index.esm-a7f57555.js";import"./CloseButton-865c8503.js";import"./StatusIcon-e78efbe0.js";import"./Views-27dec28c.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-2d8f7630.js";import"./_baseIsEqual-cd9e2cb0.js";import"./_MapCache-cbdf92c8.js";import"./get-3fbe7aa4.js";import"./useRootClose-0334f01a.js";import"./usePopper-e4ac4eb1.js";import"./TimeInput-75c92f6e.js";import"./useUniqueId-68699ef9.js";import"./useDidUpdate-f8015a0a.js";import"./index-e8290e1f.js";import"./useUncertainRef-b4892a52.js";import"./isNil-a1b43ef7.js";import"./index-5744fde1.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-db6cc43d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9938cdfc.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-52c7d464.js";import"./index.esm-5c3c1ac6.js";import"./index.esm-5a580c59.js";import"./index.esm-7beb0e22.js";import"./_getPrototype-30a92b72.js";const d=k("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=k("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},E=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:Dt,toggleDeleteConfirmation:y,setSelectedTag:Q}=E.actions,V=E.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(n=>n.crmTags.data.deleteConfirmation),o=h(n=>n.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const n=await e(F(o.id));(p=n==null?void 0:n.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=n==null?void 0:n.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=n==null?void 0:n.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,n)=>t(n),...o})}const Z=({row:e})=>{const{textTheme:t}=A();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=A(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(i=>i.crmTags.data.tagsList),o=h(i=>i.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:n,query:p,total:g}=h(i=>i.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,n]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:n,query:p,total:g}),[r,l,n,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const i=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&i.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&i.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),i},[j,D]),L=i=>{const a=C(m);a.pageIndex=i,e(x(a))},R=i=>{const a=C(m);a.pageSize=Number(i),a.pageIndex=1,e(x(a))},v=i=>{const a=C(m);a.sort=i,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},jt=ae;export{jt as default};
