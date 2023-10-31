import{al as E,am as z,an as M,ao as $,a as f,j as s,r as c,aq as q}from"./index-349191dc.js";import{aE as B,a5 as K}from"./CrmService-b4c86536.js";import{D as P}from"./DataTable-0bfcdf38.js";import{u as k}from"./useThemeClass-f9532959.js";import"./Alert-126231d9.js";import"./index-a4111542.js";import{B as H}from"./Badge-225dc15b.js";import"./Button-3a7fe992.js";import"./RangeCalendar-816f5a4f.js";import"./Card-28c96ca5.js";import{C as O}from"./index-eacc5424.js";import"./index-637053ed.js";import"./Dialog-a838aabb.js";import"./Drawer-7ce7fbf1.js";import"./index-6e1d0772.js";import"./FormItem-ada43054.js";import"./toString-35a63a87.js";import"./Input-afbe9815.js";import"./index-d55a343a.js";import"./index-af467029.js";import"./index-453239c5.js";import{t as w,N as S}from"./toast-22e26df2.js";import"./Pagination-23f3c5b5.js";import"./Progress-1ed9a6b3.js";import"./index-917384b7.js";import"./ScrollBar-8904d44c.js";import"./index-3cbb8aa8.js";import"./Select-458bca4a.js";import"./Skeleton-f03c4bda.js";import"./index-9c7facbb.js";import"./Switcher-22f53fed.js";import"./index-47f4c906.js";import"./index-369a3f9a.js";import"./Tag-328b5d04.js";import"./index-7ba3168f.js";import"./index-e6396df9.js";import"./Tooltip-23ad192d.js";import"./Upload-65222499.js";import{T as W}from"./TextTruncate-02b9540a.js";import{u as b}from"./checkEditUpdate-e45bc255.js";import{c as C}from"./cloneDeep-0ea42d87.js";import{C as _}from"./ConfirmDialog-39fce23c.js";import"./index-6e08045b.js";import"./useTimeout-347d1b2d.js";import"./index.esm-cb282f8a.js";import"./CloseButton-1ed6055a.js";import"./StatusIcon-e5b5845a.js";import"./Views-868e2d5a.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-ee8d0ef8.js";import"./_baseIsEqual-ed7cd79a.js";import"./_MapCache-42d00265.js";import"./get-22ee623a.js";import"./useRootClose-dd4766ca.js";import"./usePopper-d4c6aba4.js";import"./TimeInput-9e1c7587.js";import"./useUniqueId-f14775f3.js";import"./useDidUpdate-24428a30.js";import"./index-0d45b98c.js";import"./useUncertainRef-623d138e.js";import"./isNil-56876d1f.js";import"./index-c4329762.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-5444e40d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8479c0f8.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-4a1493ed.js";import"./index.esm-a1ed04fe.js";import"./index.esm-aca805d3.js";import"./index.esm-6c1eb267.js";import"./moment-fbc5633a.js";import"./_getPrototype-b4480593.js";const d=E("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=E("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:jt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(F(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=k();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=k(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},wt=ae;export{wt as default};
