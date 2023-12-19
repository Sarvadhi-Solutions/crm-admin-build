import{am as E,an as z,ao as M,ap as $,a as f,j as s,r as c,aq as q}from"./index-01836369.js";import{aE as B,a5 as K}from"./CrmService-5df22f1e.js";import{D as P}from"./DataTable-a7013519.js";import{u as k}from"./useThemeClass-ce525309.js";import"./Alert-d402928e.js";import"./index-a2edb971.js";import{B as H}from"./Badge-a322da11.js";import"./Button-a46452f7.js";import"./RangeCalendar-90d0a69e.js";import"./Card-2dc07d7d.js";import{C as O}from"./index-d8fc78ac.js";import"./index-61590567.js";import"./Dialog-4fd81af0.js";import"./Drawer-b1603852.js";import"./index-3b5b12e0.js";import"./FormItem-8bd92bc5.js";import"./toString-dfdb4974.js";import"./Input-de9bab6e.js";import"./index-d1a1662d.js";import"./index-035dac1c.js";import"./index-0ef1a83d.js";import{t as w,N as S}from"./toast-923c10a7.js";import"./Pagination-c8e6fde5.js";import"./Progress-5c62251c.js";import"./index-4a72f1ca.js";import"./ScrollBar-cc8c4864.js";import"./index-5c080796.js";import"./Select-c320d599.js";import"./Skeleton-743f8ad2.js";import"./index-d83ef631.js";import"./Switcher-3a0c2c62.js";import"./index-9a90023d.js";import"./index-bf1aff49.js";import"./Tag-b2e6ee28.js";import"./index-c396e082.js";import"./index-9bafd396.js";import"./Tooltip-2ee5bf6e.js";import"./Upload-f2b9b624.js";import{T as W}from"./TextTruncate-88153955.js";import{u as b}from"./checkEditUpdate-a0ee37f3.js";import{c as C}from"./cloneDeep-2911bc06.js";import{C as _}from"./ConfirmDialog-bbf84914.js";import"./index-cf0b9425.js";import"./useTimeout-4c6d789e.js";import"./index.esm-64f3e5ec.js";import"./CloseButton-d0908078.js";import"./StatusIcon-3d3af75a.js";import"./Views-e7196e20.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-1186edc6.js";import"./_baseIsEqual-f710d97d.js";import"./_MapCache-cb5691fa.js";import"./get-a00c8c4f.js";import"./useRootClose-4147e0bc.js";import"./usePopper-7484d105.js";import"./TimeInput-cd11d823.js";import"./useUniqueId-99a7922f.js";import"./useDidUpdate-24f30fc5.js";import"./index-683fb0e7.js";import"./useUncertainRef-f37cb99b.js";import"./isNil-558c9391.js";import"./index-7edeacc6.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-5d2142ab.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-bc2226dd.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-8b2c829b.js";import"./index.esm-a7f707ee.js";import"./index.esm-336981ff.js";import"./index.esm-f919373e.js";import"./moment-fbc5633a.js";import"./_getPrototype-66b22aa1.js";const d=E("crmTagCategories/data/getTags",async()=>{var e,t;try{return(await B()).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),F=E("crmTagCategories/data/deleteTag",async e=>{var t,o;try{return await K(e)}catch(r){throw new Error((o=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:o.message)}}),G={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},U="crmTags",J={loading:!1,tagsList:[],tableData:G,deleteConfirmation:!1,selectedTag:{}},A=z({name:`${U}/state`,initialState:J,reducers:{setTableData:(e,t)=>{e.tableData=t.payload},setTagsList:(e,t)=>{e.tagsList=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload},setSelectedTag:(e,t)=>{e.selectedTag=t.payload}},extraReducers:e=>{e.addCase(d.fulfilled,(t,o)=>{t.tagsList=o.payload.data,t.loading=!1}).addCase(d.pending,(t,o)=>{t.loading=!0}).addCase(d.rejected,(t,o)=>{console.log("Pending action payload:",o.payload)})}}),{setTableData:x,setTagsList:jt,toggleDeleteConfirmation:y,setSelectedTag:Q}=A.actions,V=A.reducer,X=M({data:V}),h=$,Y=()=>{const e=f(),t=h(i=>i.crmTags.data.deleteConfirmation),o=h(i=>i.crmTags.data.selectedTag),r=()=>{e(y(!1))},l=async()=>{var p,g,u;e(y(!1));const i=await e(F(o.id));(p=i==null?void 0:i.payload)!=null&&p.success?w.push(s.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}):w.push(s.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=i==null?void 0:i.error)==null?void 0:u.message}),{placement:"top-end"}),await e(d())};return s.jsx(_,{isOpen:t,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})};function N({indeterminate:e,onChange:t,...o}){const r=c.useRef(null);return c.useEffect(()=>{typeof e=="boolean"&&r.current&&(r.current.indeterminate=!o.checked&&e)},[r,e]),s.jsx(O,{ref:r,onChange:(l,i)=>t(i),...o})}const Z=({row:e})=>{const{textTheme:t}=k();f();const o=()=>{};return s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},ee=({row:e})=>{const{textTheme:t}=k(),o=f(),r=async()=>{await o(Q(e)),o(y(!0))};return s.jsx("div",{children:s.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})})},te=()=>{const e=f(),t=h(n=>n.crmTags.data.tagsList),o=h(n=>n.crmTags.data.loading),{pageIndex:r,pageSize:l,sort:i,query:p,total:g}=h(n=>n.crmTags.data.tableData),u=c.useCallback(()=>{e(d())},[e]);c.useEffect(()=>{u()},[u,r,l,i]);const m=c.useMemo(()=>({pageIndex:r,pageSize:l,sort:i,query:p,total:g}),[r,l,i,p,g]),D=b("tags","canDelete"),j=b("tags","canModify"),I=c.useMemo(()=>{const n=[{id:"select",header:({table:a})=>s.jsx(N,{checked:a.getIsAllRowsSelected(),indeterminate:a.getIsSomeRowsSelected(),onChange:a.getToggleAllRowsSelectedHandler()}),cell:({row:a})=>s.jsx("div",{className:"px-1",children:s.jsx(N,{checked:a.getIsSelected(),disabled:!a.getCanSelect(),indeterminate:a.getIsSomeSelected(),onChange:a.getToggleSelectedHandler()})})},{header:"Details",accessorKey:"tagName",cell:a=>{const T=a.row.original.tagName;return s.jsx(W,{text:T,maxLength:20})}},{header:"Color",cell:a=>{const T=a.row.original;return s.jsxs("div",{className:"flex items-center",children:[s.jsx(H,{style:{backgroundColor:`${T.colorName}`}}),s.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:T.colorName})]})}},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Category Name",accessorKey:"tagCategory.categoryName"}];return D&&n.splice(1,0,{header:"Delete",id:"action",cell:a=>s.jsx(ee,{row:a.row.original})}),j&&n.splice(1,0,{header:"Edit",id:"action",cell:a=>s.jsx(Z,{row:a.row.original})}),n},[j,D]),L=n=>{const a=C(m);a.pageIndex=n,e(x(a))},R=n=>{const a=C(m);a.pageSize=Number(n),a.pageIndex=1,e(x(a))},v=n=>{const a=C(m);a.sort=n,e(x(a))};return s.jsxs("div",{children:[s.jsx(P,{columns:I,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:L,onSelectChange:R,onSort:v}),s.jsx(Y,{})]})};q("crmTags",X);const ae=()=>{const e=f(),t=async()=>{await e(d())};return c.useEffect(()=>{t()},[e]),s.jsx(s.Fragment,{children:s.jsx(te,{})})},wt=ae;export{wt as default};
