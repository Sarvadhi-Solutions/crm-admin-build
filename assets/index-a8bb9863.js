import{al as k,am as z,an as M,ao as $,a as f,j as s,r as c,aq as q}from"./index-e30b2821.js";import{as as B,a1 as K}from"./CrmService-42c2fe6d.js";import{D as P}from"./DataTable-94966960.js";import{u as E}from"./useThemeClass-2717215d.js";import"./Alert-af1ef9c4.js";import"./index-0327ff47.js";import{B as H}from"./Badge-de325884.js";import"./Button-7f51b5aa.js";import"./RangeCalendar-52c9edad.js";import"./Card-99dac552.js";import{C as O}from"./index-813d88fe.js";import"./index-017925a1.js";import"./Dialog-947aeb41.js";import"./Drawer-512316c8.js";import"./index-bec78d8a.js";import"./FormItem-65da11c0.js";import"./toString-c9827e55.js";import"./Input-2c261c20.js";import"./index-96254e25.js";import"./index-b20af312.js";import"./index-a41ebc95.js";import{t as w,N as S}from"./toast-840a302f.js";import"./Pagination-7a8e4a2f.js";import"./Progress-f1b3cd0a.js";import"./index-3660cee2.js";import"./ScrollBar-8849e487.js";import"./index-376e52ed.js";import"./Select-aa8bbc1c.js";import"./Skeleton-09e40cfd.js";import"./index-be44997b.js";import"./Switcher-058a0731.js";import"./index-3bedb6be.js";import"./index-992cb74f.js";import"./Tag-f4e18e1c.js";import"./index-c12e5611.js";import"./index-8e7844cf.js";import"./Tooltip-4148a5c6.js";import"./Upload-2e677169.js";import{T as W}from"./TextTruncate-fd98ed7e.js";import{u as b}from"./checkEditUpdate-02ebf296.js";import{c as C}from"./cloneDeep-1d9827ea.js";import{C as _}from"./ConfirmDialog-d0893bcb.js";import"./index-4d6ba2a7.js";import"./useTimeout-0dbf2c49.js";import"./index.esm-8b3184d4.js";import"./CloseButton-eaa8212e.js";import"./StatusIcon-b75ecd57.js";import"./Views-64b223ad.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-610fbaba.js";import"./_baseIsEqual-435397ea.js";import"./_MapCache-e35f57ee.js";import"./get-53a32457.js";import"./useRootClose-121cd6e5.js";import"./usePopper-60810edb.js";import"./TimeInput-cb813c47.js";import"./useUniqueId-78294896.js";import"./useDidUpdate-e23da06a.js";import"./index-85ad734e.js";import"./useUncertainRef-e5b747fb.js";import"./isNil-4b53f2ef.js";import"./index-aa71065b.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-2d4e1c7e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-07c3bb38.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-85c9a3af.js";import"./index.esm-8f4487ea.js";import"./index.esm-7ff63e29.js";import"./index.esm-d088d8ae.js";import"./_getPrototype-18d03f40.js";const d=k("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=k("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:Dt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(n=>n.crmTags.data.deleteConfirmation),o=h(n=>n.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const n=await e(F(o.id));(p=n==null?void 0:n.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=n==null?void 0:n.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=n==null?void 0:n.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,n)=>t(n),...o})}const Z=({row:e})=>{const{textTheme:t}=E();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=E(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(i=>i.crmTags.data.tagsList),o=h(i=>i.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:n,query:p,total:g}=h(i=>i.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,n]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:n,query:p,total:g}),[r,l,n,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const i=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&i.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&i.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),i},[j,D]),L=i=>{const a=C(m);a.pageIndex=i,e(x(a))},R=i=>{const a=C(m);a.pageSize=Number(i),a.pageIndex=1,e(x(a))},v=i=>{const a=C(m);a.sort=i,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},jt=ae;export{jt as default};
