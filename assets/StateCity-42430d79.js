import{al as j,am as Z,an as ee,ao as te,r as x,j as s,a as S,aq as ae}from"./index-de229e0f.js";import{T as je}from"./index-c847ee3d.js";import{ai as Fe,aj as De,ak as Oe,al as qe,am as Pe,an as We,ao as _e,ap as Be,G as Ve,D as Ge,aq as Ke,ar as He}from"./CrmService-3972df40.js";import{B as A}from"./Button-b15cd132.js";import{I as z}from"./Input-0edbc257.js";import{b as se,P as oe,Q as ne}from"./index.esm-aee8ac7d.js";import{d as le}from"./debounce-3198f06d.js";import{c as D}from"./cloneDeep-e3592be4.js";import{D as ie}from"./DataTable-fb614c2b.js";import{u as v}from"./checkEditUpdate-2235bd5d.js";import{u as re}from"./useThemeClass-d77d5188.js";import"./Alert-6c1fb93d.js";import"./index-014db2f3.js";import"./Badge-1c9640f8.js";import"./RangeCalendar-a7904a79.js";import"./Card-a97e4c2f.js";import"./index-5d48ec0d.js";import"./index-c1fa956a.js";import{D as ce}from"./Dialog-8e46cfc1.js";import"./Drawer-f0faeb9e.js";import"./index-3edcad3a.js";import{F as de,a as B}from"./FormItem-babd9538.js";import"./toString-99f06a6f.js";import"./index-5c089da4.js";import"./index-a531e03b.js";import"./index-6be331b1.js";import{N as R,t as I}from"./toast-2a495ac5.js";import"./Pagination-eeb66415.js";import"./Progress-3fcd9e67.js";import"./index-8cb693c7.js";import"./ScrollBar-19fef748.js";import"./index-da4e4b17.js";import{S as Qe}from"./Select-7b8d032a.js";import"./Skeleton-fe9c87f9.js";import"./index-2cc6f2e5.js";import"./Switcher-a81d65e1.js";import"./index-a5a888d3.js";import"./Tag-416f4bd5.js";import"./index-f77eb852.js";import"./index-3ec890d7.js";import"./Tooltip-f07ebc4b.js";import"./Upload-bc5be741.js";import"./Views-e5666688.js";import"./chart.constant-14f0e72f.js";import"./chart.config-882b5369.js";import"./GrowShrinkTag-09430f1f.js";import"./react-tooltip.min-fe1d294b.js";import"./RichTextEditor-010ff880.js";import"./SegmentItemOption-dd1ea792.js";import{S as me}from"./StickyFooter-c8c685d1.js";import"./SvgIcon-8a149743.js";import{F as pe,a as ue,b as V}from"./formik.esm-db3e081d.js";import{A as ge}from"./index.esm-2164e7d1.js";import{a as G}from"./index.esm-079ccece.js";import{c as K,a as ye}from"./index.esm-863c1a13.js";import{C as he}from"./ConfirmDialog-3591d1f6.js";const Ue="crmState",H=j("crmState/data/createState",async a=>{var e,t;try{return(await Fe(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),L=j("crmState/data/getState",async()=>{var a,e;try{return(await De()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Je=j("crmState/data/editState",async({id:a,updatedData:e})=>{var t,o;try{return(await Oe(a,e)).data}catch(l){throw new Error((o=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:o.message)}}),Xe=j("crmLeads/data/deleteState",async a=>{var e,t;try{return await qe(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),Ye={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Ze={loading:!1,tableData:Ye,displayedStateList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedState:null,deleteConfirmation:!1},we=Z({name:`${Ue}/state`,initialState:Ze,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.categoryList.filter(o=>o.name.toLowerCase().includes(e.payload.query.toLowerCase()));a.displayedStateList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedState=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(H.fulfilled,(e,t)=>{e.loading=!1}).addCase(H.pending,e=>{e.loading=!0}).addCase(L.fulfilled,(e,t)=>{var o;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedStateList=t==null?void 0:t.payload.data.slice(0,10)}).addCase(L.pending,e=>{e.loading=!0})}}),{setTableData:P,setDialogToggle:F,setDialogMode:Ne,setSelectedState:xe,toggleDeleteConfirmation:Q}=we.actions,et=we.reducer,tt=ee({data:et}),N=te,Te=x.forwardRef((a,e)=>{const{onInputChange:t}=a,o=le(l,500);function l(n){t==null||t(n)}const r=n=>{o(n.target.value)};return s.jsx(z,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(se,{className:"text-lg"}),onChange:r})});Te.displayName="StateTableSearch";const at=()=>{const a=S(),e=x.useRef(null),t=N(r=>r.crmState.data.tableData),o=r=>{const n=D(t);n.query=r,n.pageIndex=1,typeof r=="string"&&r.length>1&&l(n),typeof r=="string"&&r.length===0&&l(n)},l=r=>{a(r?P(r):L())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(Te,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(A,{size:"sm",onClick:()=>{a(F(!0)),a(Ne("Add"))},children:"Add New"})})]})},st=()=>{const a=S(),e=N(c=>c.crmState.data.loading),t=v("roles","canModify"),o=v("roles","canDelete"),{pageIndex:l,pageSize:r,sort:n,query:u,total:g}=N(c=>c.crmState.data.tableData),m=N(c=>c.crmState.data.displayedStateList);console.log({data:m});const d=({row:c})=>{const i=S(),{textTheme:C}=re(),M=()=>{i(xe(c)),i(F(!0)),i(Ne("Edit"))},E=async()=>{await i(xe(c)),i(Q(!0))};return s.jsxs("div",{className:"flex justify-start text-lg",children:[s.jsx("span",{className:`cursor-pointer p-2 hover:${C}`,onClick:M,children:s.jsx(oe,{})}),s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:E,children:s.jsx(ne,{})})]})},y=x.useMemo(()=>({pageIndex:l,pageSize:r,sort:n,query:u,total:g}),[l,r,n,u,g]),p=x.useMemo(()=>[{header:"Action",id:"action",cell:i=>s.jsx(d,{row:i.row.original})},{header:"State",accessorKey:"name",cell:i=>i.row.original.stateName}],[t,o]),h=c=>{const i=D(y);i.pageIndex=c,a(P(i))},b=c=>{const i=D(y);i.pageSize=Number(c),i.pageIndex=1,a(P(i))},f=c=>{const i=D(y);i.sort=c,a(P(i))};return s.jsx("div",{children:s.jsx(ie,{columns:p,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:y.total,pageIndex:y.pageIndex,pageSize:y.pageSize},onPaginationChange:h,onSelectChange:b,onSort:f})})},ot=K().shape({stateName:ye().required("State name is required")}),Ae=x.forwardRef((a,e)=>{const t=S(),o=N(u=>u.crmState.data.dialogMode),l=N(u=>u.crmState.data.selectedState),r=()=>{t(F(!1))};console.log(o);const n=async(u,g,m,d,y)=>{var c,i,C;const p=await d(u==="Add"?H(g):Je({id:m==null?void 0:m.id,updatedData:{name:g.name}}));let h="",b="",f="danger";(c=p==null?void 0:p.payload)!=null&&c.success?(h="Successfully Added",b=(i=p==null?void 0:p.payload)==null?void 0:i.message,f="success"):(h="Something went wrong !!!",b=(C=p==null?void 0:p.error)==null?void 0:C.message),y.push(s.jsx(R,{title:h,type:f,duration:2500,children:b}),{placement:"top-end"}),d(F(!1)),await d(L())};return s.jsx(pe,{innerRef:e,initialValues:{stateName:o==="Edit"?l==null?void 0:l.stateName:""},validationSchema:ot,onSubmit:async(u,{setSubmitting:g})=>{o==="Add"?await n("Add",u,null,t,I):await n("Edit",u,l,t,I),g(!1)},children:({touched:u,errors:g,values:m,setFieldValue:d})=>s.jsxs(ue,{children:[s.jsx(de,{children:s.jsx(B,{label:"State Name",invalid:g.stateName&&u.stateName,errorMessage:g.stateName,children:s.jsx(V,{type:"text",autoComplete:"off",name:"stateName",placeholder:"State Name",component:z,prefix:s.jsx(G,{className:"text-xl"})})})}),s.jsx(me,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),s.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(ge,{}),children:"Save"})]})})]})})});Ae.displayName="StateForm";const nt=()=>{const a=S(),e=N(n=>n.crmState.data.deleteConfirmation),t=N(n=>n.crmState.data.selectedState),o=()=>{a(Q(!1))},l=(n,u,g,m)=>{var y,p,h;const d=(y=n==null?void 0:n.payload)==null?void 0:y.success;u.push(s.jsx(R,{title:d?g:m,type:d?"success":"danger",duration:2500,children:d?(p=n==null?void 0:n.payload)==null?void 0:p.message:(h=n==null?void 0:n.error)==null?void 0:h.message}),{placement:"top-end"})},r=async()=>{a(Q(!1));const n=await a(Xe(t==null?void 0:t.id));l(n,I,"Successfully Deleted","Something Went Wrong !!!"),await a(L())};return s.jsx(he,{isOpen:e,type:"danger",title:"Delete State",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:r,children:s.jsx("p",{children:"Are you sure you want to delete this State? All record related to this State will be deleted as well. This action cannot be undone."})})};ae("crmState",tt);const lt=()=>{const a=S(),e=N(l=>l.crmState.data.isDialogOpen),t=N(l=>l.crmState.data.dialogMode),o=()=>{a(F(!1))};return x.useEffect(()=>{a(L())},[]),s.jsxs(s.Fragment,{children:[s.jsx(at,{}),s.jsx(st,{}),s.jsxs(ce,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," State"]}),s.jsx(Ae,{})]}),s.jsx(nt,{})]})},it="crmCity",rt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ct={loading:!1,tableData:rt,displayedCityList:[],cityList:[],stateList:[],isDialogOpen:!1,dialogMode:"Add",selectedCity:null,deleteConfirmation:!1},U=j("crmCity/data/createCity",async a=>{var e,t;try{return(await Pe(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),$=j("crmCity/data/getCity",async()=>{var a,e;try{return(await We()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Ie=j("crmCity/data/getState",async()=>{var a,e;try{return(await De()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),dt=j("crmCity/data/editCity",async({id:a,updatedData:e})=>{var t,o;try{return(await _e(a,e)).data}catch(l){throw new Error((o=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:o.message)}}),mt=j("crmCity/data/deleteCity",async a=>{var e,t;try{return await Be(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),Me=Z({name:`${it}/state`,initialState:ct,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.cityList.filter(o=>o.name.toLowerCase().includes(e.payload.query.toLowerCase()));a.displayedCityList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedCity:(a,e)=>{a.selectedCity=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(U.fulfilled,(e,t)=>{e.loading=!1}).addCase(U.pending,e=>{e.loading=!0}).addCase($.fulfilled,(e,t)=>{var o;e.loading=!1,e.cityList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedCityList=t==null?void 0:t.payload.data.slice(0,10)}).addCase(Ie.fulfilled,(e,t)=>{e.stateList=t==null?void 0:t.payload.data}).addCase($.pending,e=>{e.loading=!0})}}),{setTableData:W,setSelectedCity:Se,setDialogToggle:O,setDialogMode:Ee,toggleDeleteConfirmation:J}=Me.actions,pt=Me.reducer,ut=ee({data:pt}),w=te,gt=()=>{const a=S(),e=w(n=>n.crmCity.data.deleteConfirmation),t=w(n=>n.crmCity.data.selectedCity),o=()=>{a(J(!1))},l=(n,u,g,m)=>{var y,p,h;const d=(y=n==null?void 0:n.payload)==null?void 0:y.success;u.push(s.jsx(R,{title:d?g:m,type:d?"success":"danger",duration:2500,children:d?(p=n==null?void 0:n.payload)==null?void 0:p.message:(h=n==null?void 0:n.error)==null?void 0:h.message}),{placement:"top-end"})},r=async()=>{a(J(!1));const n=await a(mt(t==null?void 0:t.id));l(n,I,"Successfully Deleted","Something Went Wrong !!!"),await a($())};return s.jsx(he,{isOpen:e,type:"danger",title:"Delete Sub Category",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:r,children:s.jsx("p",{children:"Are you sure you want to delete this Sub Category? All record related to this Sub Category will be deleted as well. This action cannot be undone."})})},yt=K().shape({stateId:K().required("State is required"),cityName:ye().required("City is required")}),ve=x.forwardRef((a,e)=>{const t=S(),o=w(m=>m.crmCity.data.dialogMode),l=w(m=>m.crmCity.data.selectedCity),r=w(m=>m.crmCity.data.stateList),n=x.useMemo(()=>(console.log({stateList:r}),r.map(d=>({label:d.stateName,value:d.id}))),[r]),u=()=>{t(O(!1))},g=async(m,d,y,p,h)=>{var M,E,fe;const b={cityName:d.cityName,stateId:d.stateId.value},f=await p(m==="Add"?U(b):dt({id:y==null?void 0:y.id,updatedData:b}));let c="",i="",C="danger";(M=f==null?void 0:f.payload)!=null&&M.success?(c="Successfully Added",i=(E=f==null?void 0:f.payload)==null?void 0:E.message,C="success"):(c="Something went wrong !!!",i=(fe=f==null?void 0:f.error)==null?void 0:fe.message),h.push(s.jsx(R,{title:c,type:C,duration:2500,children:i}),{placement:"top-end"}),p(O(!1)),await p($())};return console.log({selectedCity:l}),s.jsx(pe,{innerRef:e,initialValues:{cityName:o==="Edit"?l==null?void 0:l.cityName:"",stateId:o==="Edit"?n.find(m=>m.value===(l==null?void 0:l.stateId)):""},validationSchema:yt,onSubmit:async(m,{setSubmitting:d})=>{console.log({values:m}),o==="Add"?await g("Add",m,null,t,I):await g("Edit",m,l,t,I),d(!1)},children:({touched:m,errors:d,values:y,setFieldValue:p})=>s.jsxs(ue,{children:[s.jsxs(de,{children:[s.jsx(B,{label:"State",invalid:d.stateId&&m.stateId,errorMessage:d.stateId,children:s.jsx(V,{type:"text",autoComplete:"off",name:"stateId",placeholder:"State",options:n,component:Qe,prefix:s.jsx(G,{className:"text-xl"}),onChange:h=>{p("stateId",h)}})}),s.jsx(B,{label:"City",invalid:d.cityName&&m.cityName,errorMessage:d.cityName,children:s.jsx(V,{type:"text",autoComplete:"off",name:"cityName",placeholder:"City",component:z,prefix:s.jsx(G,{className:"text-xl"})})})]}),s.jsx(me,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:u,children:"Cancel"}),s.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(ge,{}),children:"Save"})]})})]})})});ve.displayName="CityForm";const ht=()=>{const a=S(),e=w(c=>c.crmCity.data.loading),t=w(c=>c.crmCity.data.displayedCityList),o=v("roles","canModify"),l=v("roles","canDelete"),{pageIndex:r,pageSize:n,sort:u,query:g,total:m}=w(c=>c.crmCity.data.tableData),d=x.useMemo(()=>({pageIndex:r,pageSize:n,sort:u,query:g,total:m}),[r,n,u,g,m]),y=({row:c})=>{const i=S(),{textTheme:C}=re(),M=()=>{i(Se(c)),i(O(!0)),i(Ee("Edit"))},E=async()=>{await i(Se(c)),i(J(!0))};return s.jsxs("div",{className:"flex justify-start text-lg",children:[s.jsx("span",{className:`cursor-pointer p-2 hover:${C}`,onClick:M,children:s.jsx(oe,{})}),s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:E,children:s.jsx(ne,{})})]})},p=x.useMemo(()=>[{header:"Action",id:"action",cell:i=>s.jsx(y,{row:i.row.original})},{header:"City",accessorKey:"cityName",cell:i=>i.row.original.cityName},{header:"State",accessorKey:"state",cell:i=>{var C;return(C=i.row.original.state)==null?void 0:C.stateName}}],[o,l]),h=c=>{const i=D(d);i.pageIndex=c,a(W(i))},b=c=>{const i=D(d);i.pageSize=Number(c),i.pageIndex=1,a(W(i))},f=c=>{const i=D(d);i.sort=c,a(W(i))};return s.jsx("div",{children:s.jsx(ie,{columns:p,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:h,onSelectChange:b,onSort:f})})},Le=x.forwardRef((a,e)=>{const{onInputChange:t}=a,o=le(l,500);function l(n){t==null||t(n)}const r=n=>{o(n.target.value)};return s.jsx(z,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(se,{className:"text-lg"}),onChange:r})});Le.displayName="SubCategoryTableSearch";const ft=()=>{const a=S(),e=x.useRef(null),t=w(r=>r.crmCity.data.tableData),o=r=>{const n=D(t);n.query=r,n.pageIndex=1,typeof r=="string"&&r.length>1&&l(n),typeof r=="string"&&r.length===0&&l(n)},l=r=>{a(r?W(r):$())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(Le,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(A,{size:"sm",onClick:()=>{a(O(!0)),a(Ee("Add"))},children:"Add New"})})]})};ae("crmCity",ut);const xt=()=>{const a=S(),e=w(l=>l.crmCity.data.isDialogOpen),t=w(l=>l.crmCity.data.dialogMode),o=()=>{a(O(!1))};return x.useEffect(()=>{a($()),a(Ie())},[]),s.jsxs(s.Fragment,{children:[s.jsx(ft,{}),s.jsx(ht,{}),s.jsxs(ce,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," City"]}),s.jsx(ve,{})]}),s.jsx(gt,{})]})},St="crmSource",X=j("crmSource/data/createSource",async a=>{var e,t;try{return(await Ve(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),k=j("crmSource/data/getSource",async()=>{var a,e;try{return(await Ge()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Ct=j("crmSource/data/editSource",async({id:a,updatedData:e})=>{var t,o;try{return(await Ke(a,e)).data}catch(l){throw new Error((o=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:o.message)}}),bt=j("crmLeads/data/deleteSource",async a=>{var e,t;try{return await He(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),jt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Dt={loading:!1,tableData:jt,displayedSourceList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedSource:null,deleteConfirmation:!1},$e=Z({name:`${St}/state`,initialState:Dt,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.categoryList.filter(o=>o.name.toLowerCase().includes(e.payload.query.toLowerCase()));a.displayedSourceList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedSource=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(X.fulfilled,(e,t)=>{e.loading=!1}).addCase(X.pending,e=>{e.loading=!0}).addCase(k.fulfilled,(e,t)=>{var o;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedSourceList=t==null?void 0:t.payload.data.slice(0,10)}).addCase(k.pending,e=>{e.loading=!0})}}),{setTableData:_,setDialogToggle:q,setDialogMode:ke,setSelectedState:Ce,toggleDeleteConfirmation:Y}=$e.actions,wt=$e.reducer,Nt=ee({data:wt}),T=te,ze=x.forwardRef((a,e)=>{const{onInputChange:t}=a,o=le(l,500);function l(n){t==null||t(n)}const r=n=>{o(n.target.value)};return s.jsx(z,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(se,{className:"text-lg"}),onChange:r})});ze.displayName="StateTableSearch";const Tt=()=>{const a=S(),e=x.useRef(null),t=T(r=>r.crmSource.data.tableData),o=r=>{const n=D(t);n.query=r,n.pageIndex=1,typeof r=="string"&&r.length>1&&l(n),typeof r=="string"&&r.length===0&&l(n)},l=r=>{a(r?_(r):k())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(ze,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(A,{size:"sm",onClick:()=>{a(q(!0)),a(ke("Add"))},children:"Add New"})})]})},At=()=>{const a=S(),e=T(c=>c.crmSource.data.loading),t=v("roles","canModify"),o=v("roles","canDelete"),{pageIndex:l,pageSize:r,sort:n,query:u,total:g}=T(c=>c.crmSource.data.tableData),m=T(c=>c.crmSource.data.displayedSourceList);console.log({data:m});const d=({row:c})=>{const i=S(),{textTheme:C}=re(),M=()=>{i(Ce(c)),i(q(!0)),i(ke("Edit"))},E=async()=>{await i(Ce(c)),i(Y(!0))};return s.jsxs("div",{className:"flex justify-start text-lg",children:[s.jsx("span",{className:`cursor-pointer p-2 hover:${C}`,onClick:M,children:s.jsx(oe,{})}),s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:E,children:s.jsx(ne,{})})]})},y=x.useMemo(()=>({pageIndex:l,pageSize:r,sort:n,query:u,total:g}),[l,r,n,u,g]),p=x.useMemo(()=>[{header:"Action",id:"action",cell:i=>s.jsx(d,{row:i.row.original})},{header:"Source",accessorKey:"sources",cell:i=>i.row.original.sources}],[t,o]),h=c=>{const i=D(y);i.pageIndex=c,a(_(i))},b=c=>{const i=D(y);i.pageSize=Number(c),i.pageIndex=1,a(_(i))},f=c=>{const i=D(y);i.sort=c,a(_(i))};return s.jsx("div",{children:s.jsx(ie,{columns:p,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:y.total,pageIndex:y.pageIndex,pageSize:y.pageSize},onPaginationChange:h,onSelectChange:b,onSort:f})})},It=K().shape({sources:ye().required("Source name is required")}),Re=x.forwardRef((a,e)=>{const t=S(),o=T(u=>u.crmSource.data.dialogMode),l=T(u=>u.crmSource.data.selectedSource),r=()=>{t(q(!1))};console.log(o);const n=async(u,g,m,d,y)=>{var c,i,C;const p=await d(u==="Add"?X(g):Ct({id:m==null?void 0:m.id,updatedData:{name:g.name}}));let h="",b="",f="danger";(c=p==null?void 0:p.payload)!=null&&c.success?(h="Successfully Added",b=(i=p==null?void 0:p.payload)==null?void 0:i.message,f="success"):(h="Something went wrong !!!",b=(C=p==null?void 0:p.error)==null?void 0:C.message),y.push(s.jsx(R,{title:h,type:f,duration:2500,children:b}),{placement:"top-end"}),d(q(!1)),await d(k())};return s.jsx(pe,{innerRef:e,initialValues:{sources:o==="Edit"?l==null?void 0:l.sources:""},validationSchema:It,onSubmit:async(u,{setSubmitting:g})=>{o==="Add"?await n("Add",u,null,t,I):await n("Edit",u,l,t,I),g(!1)},children:({touched:u,errors:g,values:m,setFieldValue:d})=>s.jsxs(ue,{children:[s.jsx(de,{children:s.jsx(B,{label:"Source",invalid:g.sources&&u.sources,errorMessage:g.sources,children:s.jsx(V,{type:"text",autoComplete:"off",name:"sources",placeholder:"Source",component:z,prefix:s.jsx(G,{className:"text-xl"})})})}),s.jsx(me,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),s.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(ge,{}),children:"Save"})]})})]})})});Re.displayName="SourceForm";const Mt=()=>{const a=S(),e=T(n=>n.crmSource.data.deleteConfirmation),t=T(n=>n.crmSource.data.selectedSource),o=()=>{a(Y(!1))},l=(n,u,g,m)=>{var y,p,h;const d=(y=n==null?void 0:n.payload)==null?void 0:y.success;u.push(s.jsx(R,{title:d?g:m,type:d?"success":"danger",duration:2500,children:d?(p=n==null?void 0:n.payload)==null?void 0:p.message:(h=n==null?void 0:n.error)==null?void 0:h.message}),{placement:"top-end"})},r=async()=>{a(Y(!1));const n=await a(bt(t==null?void 0:t.id));l(n,I,"Successfully Deleted","Something Went Wrong !!!"),await a(k())};return s.jsx(he,{isOpen:e,type:"danger",title:"Delete Source",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:r,children:s.jsx("p",{children:"Are you sure you want to delete this Source? All record related to this Source will be deleted as well. This action cannot be undone."})})};ae("crmSource",Nt);const Et=()=>{const a=S(),e=T(l=>l.crmSource.data.isDialogOpen),t=T(l=>l.crmSource.data.dialogMode),o=()=>{a(q(!1))};return x.useEffect(()=>{a(k())},[]),s.jsxs(s.Fragment,{children:[s.jsx(Tt,{}),s.jsx(At,{}),s.jsxs(ce,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," Source"]}),s.jsx(Re,{})]}),s.jsx(Mt,{})]})},{TabNav:vt,TabList:Lt}=je,be={state:{label:"State",path:"state"},city:{label:"City",path:"city"},source:{label:"Source",path:"source"}},$t=()=>{const[a,e]=x.useState("state"),t=o=>{e(o)};return s.jsxs(s.Fragment,{children:[s.jsx(je,{value:a,variant:"pill",onChange:o=>t(o),children:s.jsx(Lt,{children:Object.keys(be).map(o=>s.jsx(vt,{value:o,children:be[o].label},o))})}),s.jsx("div",{className:"py-4",children:s.jsxs(x.Suspense,{fallback:s.jsx(s.Fragment,{children:"loading..."}),children:[a==="state"&&s.jsx(lt,{}),a==="city"&&s.jsx(xt,{}),a==="source"&&s.jsx(Et,{})]})})]})},Ra=$t;export{Ra as S};
