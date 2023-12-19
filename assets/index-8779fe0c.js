import{al as E,am as z,an as M,ao as $,a as f,j as s,r as c,aq as q}from"./index-9bc8ff5f.js";import{E as B,F as K}from"./CrmService-9a7ea8f7.js";import{D as P}from"./DataTable-59b3bbba.js";import{u as k}from"./useThemeClass-ff7aa3c0.js";import"./Alert-7014a5a7.js";import"./index-2949a7c8.js";import{B as F}from"./Badge-f912401f.js";import"./Button-0656771e.js";import"./RangeCalendar-b0660c39.js";import"./Card-d62a742e.js";import{C as H}from"./index-913ac9eb.js";import"./index-bb1899de.js";import"./Dialog-9c0a8ca3.js";import"./Drawer-34c712fe.js";import"./index-747645f6.js";import"./FormItem-cb878918.js";import"./toString-0fe6d881.js";import"./Input-87dd5f52.js";import"./index-7b2faf23.js";import"./index-6657ac06.js";import"./index-a514ef4b.js";import{t as w,N as S}from"./toast-fc8f3d37.js";import"./Pagination-c79970da.js";import"./Progress-d84af474.js";import"./index-4b3ecacd.js";import"./ScrollBar-c454ac27.js";import"./index-14854959.js";import"./Select-7a37953f.js";import"./Skeleton-dae4b943.js";import"./index-c8e1d4bf.js";import"./Switcher-69418dd6.js";import"./index-fe4d885a.js";import"./index-c58200b2.js";import"./Tag-8c20b4ad.js";import"./index-cee5027b.js";import"./index-6d3b4cc2.js";import"./Tooltip-c62f62f0.js";import"./Upload-77748ca9.js";import{T as O}from"./TextTruncate-cfc7e88e.js";import{u as b}from"./checkEditUpdate-b9057d3b.js";import{c as C}from"./cloneDeep-2bc60bb0.js";import{C as W}from"./ConfirmDialog-9b886e68.js";import"./index-6eee240b.js";import"./useTimeout-1f69dd99.js";import"./index.esm-022f21f4.js";import"./CloseButton-8f91face.js";import"./StatusIcon-d84be5ba.js";import"./Views-f23c0524.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-0698e55e.js";import"./_baseIsEqual-75947cbf.js";import"./_MapCache-011fd77e.js";import"./get-4c9a6acd.js";import"./useRootClose-378cbccb.js";import"./usePopper-e8c1fe06.js";import"./TimeInput-fc9aceed.js";import"./useUniqueId-64d4794a.js";import"./useDidUpdate-79b4d052.js";import"./index-297486ca.js";import"./useUncertainRef-869801ae.js";import"./isNil-f55a9f9f.js";import"./index-c69bc431.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-e7cae6dc.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-2e5ad46e.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-ff8297c4.js";import"./index.esm-4632f909.js";import"./index.esm-6f9dbd5a.js";import"./index.esm-995fda35.js";import"./_getPrototype-400d6e78.js";const d=E("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),_=E("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:Dt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(n=>n.crmTags.data.deleteConfirmation),o=h(n=>n.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const n=await e(_(o.id));(p=n==null?void 0:n.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=n==null?void 0:n.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=n==null?void 0:n.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(W,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(H,{ref:r,onChange:(l,n)=>t(n),...o})}const Z=({row:e})=>{const{textTheme:t}=k();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=k(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(i=>i.crmTags.data.tagsList),o=h(i=>i.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:n,query:p,total:g}=h(i=>i.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,n]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:n,query:p,total:g}),[r,l,n,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const i=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(O,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(F,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&i.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&i.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),i},[j,D]),L=i=>{const a=C(m);a.pageIndex=i,e(x(a))},R=i=>{const a=C(m);a.pageSize=Number(i),a.pageIndex=1,e(x(a))},v=i=>{const a=C(m);a.sort=i,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},jt=ae;export{jt as default};
