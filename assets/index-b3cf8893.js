import{am as k,an as z,ao as M,ap as $,a as f,j as s,r as c,aq as q}from"./index-fbc41bca.js";import{aF as B,a6 as K}from"./CrmService-e168621d.js";import{D as P}from"./DataTable-81da75d2.js";import{u as E}from"./useThemeClass-5e964515.js";import"./Alert-dec0f5a9.js";import"./index-93d69c00.js";import{B as F}from"./Badge-c4738e93.js";import"./Button-b2784eff.js";import"./RangeCalendar-50b42c63.js";import"./Card-a984a9d2.js";import{C as H}from"./index-d1bc18ac.js";import"./index-b851f1b1.js";import"./Dialog-698d3c27.js";import"./Drawer-2fab53f7.js";import"./index-07c5cb44.js";import"./FormItem-c1e0aacf.js";import"./toString-c87cf3c7.js";import"./Input-152b7d8e.js";import"./index-51c649a4.js";import"./index-f693cd27.js";import"./index-ac4b27b3.js";import{t as w,N as S}from"./toast-6fd95cf6.js";import"./Pagination-c4a67f5b.js";import"./Progress-6196de97.js";import"./index-5c598bd5.js";import"./ScrollBar-6e830de1.js";import"./index-4c96de49.js";import"./Select-9a27bfb3.js";import"./Skeleton-e4ab4cd4.js";import"./index-9d9f773a.js";import"./Switcher-944850e3.js";import"./index-0f02b5a2.js";import"./index-a48c7a7d.js";import"./Tag-9a7f4253.js";import"./index-1581cc49.js";import"./index-2e495e14.js";import"./Tooltip-3c083409.js";import"./Upload-993d0ac6.js";import{T as O}from"./TextTruncate-e5f88508.js";import{u as b}from"./checkEditUpdate-cc27538c.js";import{c as C}from"./cloneDeep-f5c45100.js";import{C as W}from"./ConfirmDialog-f881e0b1.js";import"./index-14973a88.js";import"./useTimeout-d537f082.js";import"./index.esm-249f55e6.js";import"./CloseButton-ac314900.js";import"./StatusIcon-a0cbbea1.js";import"./Views-74c35fff.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-dc7686ff.js";import"./_baseIsEqual-37801c64.js";import"./_MapCache-700a4bdb.js";import"./get-6a80729e.js";import"./useRootClose-77f885d6.js";import"./usePopper-a0de98a6.js";import"./TimeInput-7ea8f489.js";import"./useUniqueId-b35fc9d9.js";import"./useDidUpdate-5fac86c3.js";import"./index-0cc150e7.js";import"./useUncertainRef-729c814d.js";import"./isNil-9affc463.js";import"./index-38ec51a4.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-f82ce810.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-41c1fa9e.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-2d4a612f.js";import"./index.esm-158add56.js";import"./index.esm-1c18013e.js";import"./index.esm-79cc9987.js";import"./moment-fbc5633a.js";import"./_getPrototype-3d319840.js";const d=k("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),_=k("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:jt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(_(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(W,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(H,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=E();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=E(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(O,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(F,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},wt=ae;export{wt as default};
