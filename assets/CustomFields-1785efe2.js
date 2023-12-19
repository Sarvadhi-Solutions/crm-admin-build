import{am as I,an as ee,ao as te,ap as ae,r as h,j as e,a as j,aq as oe}from"./index-fbc41bca.js";import{T as Se}from"./index-a48c7a7d.js";import{aC as se,aD as ne,aE as le,R as Ke,u as Pe,G as We}from"./CrmService-e168621d.js";import{B as L}from"./Button-b2784eff.js";import{I as w}from"./Input-152b7d8e.js";import{b as ie,O as de,P as re,Q as N}from"./index.esm-249f55e6.js";import{d as ce}from"./debounce-eaa304ea.js";import{c as V}from"./cloneDeep-f5c45100.js";import{D as me}from"./DataTable-81da75d2.js";import{u as z}from"./checkEditUpdate-cc27538c.js";import{u as pe}from"./useThemeClass-5e964515.js";import{T as ue}from"./TextTruncate-e5f88508.js";import"./Alert-dec0f5a9.js";import"./index-93d69c00.js";import"./Badge-c4738e93.js";import"./RangeCalendar-50b42c63.js";import"./Card-a984a9d2.js";import"./index-d1bc18ac.js";import"./index-b851f1b1.js";import{D as ge}from"./Dialog-698d3c27.js";import"./Drawer-2fab53f7.js";import"./index-07c5cb44.js";import{a as S}from"./FormItem-c1e0aacf.js";import"./toString-c87cf3c7.js";import"./index-51c649a4.js";import"./index-f693cd27.js";import"./index-ac4b27b3.js";import{N as P,t as $}from"./toast-6fd95cf6.js";import"./Pagination-c4a67f5b.js";import"./Progress-6196de97.js";import"./index-5c598bd5.js";import"./ScrollBar-6e830de1.js";import"./index-4c96de49.js";import{S as fe}from"./Select-9a27bfb3.js";import"./Skeleton-e4ab4cd4.js";import"./index-9d9f773a.js";import"./Switcher-944850e3.js";import"./index-0f02b5a2.js";import"./Tag-9a7f4253.js";import"./index-1581cc49.js";import"./index-2e495e14.js";import"./Tooltip-3c083409.js";import"./Upload-993d0ac6.js";import"./Views-74c35fff.js";import"./chart.constant-45b26ac6.js";import"./GrowShrinkTag-3901d0dd.js";import"./react-tooltip.min-7c63beba.js";import"./RichTextEditor-04904e71.js";import"./SegmentItemOption-0494f468.js";import{S as xe}from"./StickyFooter-8e9f9eab.js";import"./SvgIcon-fc4d5dc0.js";import{F as ye,a as Ce,b as D}from"./formik.esm-398239d1.js";import{A as he}from"./index.esm-1e42ead4.js";import{c as be,a as A}from"./index.esm-bb7c93ab.js";import{I as R}from"./helper-64c17a1c.js";import{G as je}from"./index.esm-d1d64626.js";import{C as Fe}from"./ConfirmDialog-f881e0b1.js";const _e="crmCustomerFields",Q=I("crm/custom-fields",async({id:o,payload:a})=>{var s,l;try{return(await se(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),Be=I("crmCustomFields/data/editCustomFields",async({CustomFieldsId:o,updatedData:a})=>{var s,l;try{return(await ne(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),He=I("crmCustomFields/data/deleteCustomFields",async o=>{var a,s;try{return await le(o)}catch(l){throw new Error((s=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:s.message)}}),q=I("crmCustomFields/data/getcustomFields",async()=>{const o=await Ke();return console.log({response:o}),o.data}),Ge={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Ue={loading:!1,tableData:Ge,displayedCustomFields:[],customFields:[],isDialogOpen:!1,dialogMode:"Add",selectedCustomField:null,deleteConfirmation:!1},Ae=ee({name:`${_e}/state`,initialState:Ue,reducers:{setTableData:(o,a)=>{o.tableData=a.payload;const s=o.customFields.filter(l=>l.name.toLowerCase().includes(a.payload.query.toLowerCase()));o.displayedCustomFields=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedCustomField:(o,a)=>{o.selectedCustomField=a.payload},setDialogToggle:(o,a)=>{o.isDialogOpen=a.payload},setDialogMode:(o,a)=>{o.dialogMode=a.payload},toggleDeleteConfirmation:(o,a)=>{o.deleteConfirmation=a.payload}},extraReducers:o=>{o.addCase(Q.fulfilled,(a,s)=>{a.loading=!1}).addCase(Q.pending,a=>{a.loading=!0}).addCase(q.fulfilled,(a,s)=>{var l;a.customFields=s==null?void 0:s.payload.data,a.tableData.total=(l=s.payload.data)==null?void 0:l.length,a.displayedCustomFields=s==null?void 0:s.payload.data.slice(0,10),a.loading=!1}).addCase(q.pending,a=>{a.loading=!0})}}),{setTableData:H,setDialogToggle:W,setDialogMode:Ve,setSelectedCustomField:Te,toggleDeleteConfirmation:J}=Ae.actions,Qe=Ae.reducer,Je=te({data:Qe}),M=ae,Ie=h.forwardRef((o,a)=>{const{onInputChange:s}=o,l=ce(n,500);function n(i){s==null||s(i)}const c=i=>{l(i.target.value)};return e.jsx(w,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ie,{className:"text-lg"}),onChange:c})});Ie.displayName="CFContactTableSearch";const Xe=()=>{const o=j(),a=h.useRef(null),s=M(c=>c.crmCustomFields.data.tableData),l=c=>{const i=V(s);i.query=c,i.pageIndex=1,typeof c=="string"&&c.length>1&&n(i),typeof c=="string"&&c.length===0&&n(i)},n=c=>{o(c?H(c):q())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Ie,{ref:a,onInputChange:l})}),e.jsx("div",{className:"mb-4",children:e.jsx(L,{size:"sm",onClick:()=>{o(W(!0)),o(Ve("Add"))},children:"Add New"})})]})},Ye=()=>{const o=j();h.useEffect(()=>{o(q())},[o]);const a=M(m=>m.crmCustomFields.data.loading),s=z("roles","canModify"),l=z("roles","canDelete"),{pageIndex:n,pageSize:c,sort:i,query:f,total:r}=M(m=>m.crmCustomFields.data.tableData),t=M(m=>m.crmCustomFields.data.displayedCustomFields),p=({row:m})=>{const d=j();pe();const b=()=>{d(Te(m)),d(W(!0)),d(Ve("Edit"))},C=async()=>{await d(Te(m)),d(J(!0))};return e.jsxs("div",{className:"flex justify-start text-base",children:[e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:b,children:e.jsx(de,{})}),e.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:C,children:e.jsx(re,{})})]})},u=h.useMemo(()=>({pageIndex:n,pageSize:c,sort:i,query:f,total:r}),[n,c,i,f,r]),y=h.useMemo(()=>[{header:"Action",id:"action",cell:d=>e.jsx(p,{row:d.row.original})},{header:"Input Type",accessorKey:"inputType",cell:d=>d.row.original.inputType},{header:"Label",accessorKey:"label",cell:d=>d.row.original.label},{header:"Name",accessorKey:"name",cell:d=>d.row.original.name},{header:"Default Value",accessorKey:"defaultValue",cell:d=>{var C,T;const b=(C=d.row.original)!=null&&C.defaultValue?(T=d.row.original)==null?void 0:T.defaultValue:"-";return e.jsx(ue,{text:b,maxLength:15})}}],[s,l]),g=m=>{const d=V(u);d.pageIndex=m,o(H(d))},x=m=>{const d=V(u);d.pageSize=Number(m),d.pageIndex=1,o(H(d))},F=m=>{const d=V(u);d.sort=m,o(H(d))};return e.jsx("div",{children:e.jsx(me,{columns:y,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:g,onSelectChange:x,onSort:F})})},Me=h.forwardRef((o,a)=>{const s=j(),l=M(r=>r.crmCustomFields.data.dialogMode),n=M(r=>{var t;return(t=r==null?void 0:r.crmCustomFields)==null?void 0:t.data.selectedCustomField}),c=()=>{s(W(!1))},i=async(r,t,p,u,y)=>{var b,C,T;const g={inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue},x=await u(r==="Add"?Q({id:"1",payload:g}):Be({CustomFieldsId:p==null?void 0:p.id,updatedData:{inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue}}));let F="",m="",d="danger";(b=x==null?void 0:x.payload)!=null&&b.success?(F="Successfully Added",m=(C=x==null?void 0:x.payload)==null?void 0:C.message,d="success",u(W(!1))):(F="Something went wrong !!!",m=(T=x==null?void 0:x.error)==null?void 0:T.message),y.push(e.jsx(P,{title:F,type:d,duration:2500,children:m}),{placement:"top-end"}),await u(q())},f=be().shape({inputType:A().required("Input Type is required"),label:A().required("Label is required"),name:A().required("Field Name is required"),defaultValue:A()});return e.jsx(ye,{innerRef:a,initialValues:{name:l==="Edit"?n==null?void 0:n.name:"",inputType:l==="Edit"?n==null?void 0:n.inputType:"",label:l==="Edit"?n==null?void 0:n.label:"",defaultValue:l==="Edit"?n==null?void 0:n.defaultValue:""},validationSchema:f,onSubmit:async(r,{setSubmitting:t})=>{l==="Add"?await i("Add",r,null,s,$):await i("Edit",r,n,s,$),t(!1)},children:({touched:r,errors:t,values:p,setFieldValue:u})=>{var y;return e.jsxs(Ce,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Input Type *",invalid:t.inputType&&r.inputType,errorMessage:t.inputType,children:e.jsx(D,{type:"text",autoComplete:"off",name:"inputType",placeholder:"Input Type",component:fe,options:R,value:(y=R)==null?void 0:y.find(g=>(g==null?void 0:g.value)==(p==null?void 0:p.inputType)),prefix:e.jsx(je,{className:"text-xl"}),onChange:g=>{u("inputType",g==null?void 0:g.value)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Label *",invalid:t.label&&r.label,errorMessage:t.label,children:e.jsx(D,{type:"text",autoComplete:"off",name:"label",placeholder:"label",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Name *",invalid:t.name&&r.name,errorMessage:t.name,children:e.jsx(D,{type:"text",autoComplete:"off",name:"name",placeholder:"name",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"DefaultValue",invalid:t.defaultValue&&r.defaultValue,errorMessage:t.defaultValue,children:p.inputType==="textArea"?e.jsx(D,{textArea:!0,type:"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})}):e.jsx(D,{type:p.inputType==="datetime-local"?"datetime-local":p.inputType==="number"?"number":"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})})})})]}),e.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(L,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:c,children:"Cancel"}),e.jsx(L,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(he,{}),children:"Save"})]})})]})}})});Me.displayName="CFContactForm";const Ze=()=>{const o=j(),a=M(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.deleteConfirmation}),s=M(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.selectedCustomField}),l=()=>{o(J(!1))},n=(i,f,r,t)=>{var u,y,g;const p=(u=i==null?void 0:i.payload)==null?void 0:u.success;f.push(e.jsx(P,{title:p?r:t,type:p?"success":"danger",duration:2500,children:p?(y=i==null?void 0:i.payload)==null?void 0:y.message:(g=i==null?void 0:i.error)==null?void 0:g.message}),{placement:"top-end"})},c=async()=>{o(J(!1));const i=await o(He(s==null?void 0:s.id));n(i,$,"Successfully Deleted","Something Went Wrong !!!"),await o(q())};return e.jsx(Fe,{isOpen:a,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this Custom Field of Contact? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmCustomFields",Je);const ve=()=>{const o=j(),a=M(n=>n.crmCustomFields.data.isDialogOpen),s=M(n=>n.crmCustomFields.data.dialogMode),l=()=>{o(W(!1))};return h.useEffect(()=>{o(q)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx(Ye,{}),e.jsxs(ge,{isOpen:a,onClose:l,children:[e.jsxs("h5",{className:"mb-4",children:[s==="Edit"?"Edit":"Add New"," Custom Field"]}),e.jsx(Me,{})]}),e.jsx(Ze,{})]})},et="crmCustomerFields",X=I("crm/custom-fields",async({id:o,payload:a})=>{var s,l;try{return(await se(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),tt=I("crmCustomFields/data/editCustomFields",async({CustomFieldsId:o,updatedData:a})=>{var s,l;try{return(await ne(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),at=I("crmCustomFields/data/deleteCustomFields",async o=>{var a,s;try{return await le(o)}catch(l){throw new Error((s=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:s.message)}}),O=I("crmCustomFields/data/getcustomFields",async()=>{const o=await Pe();return console.log({response:o}),o.data}),ot={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},st={loading:!1,tableData:ot,displayedCustomFields:[],customFields:[],isDialogOpen:!1,dialogMode:"Add",selectedCustomField:null,deleteConfirmation:!1},Ee=ee({name:`${et}/state`,initialState:st,reducers:{setTableData:(o,a)=>{o.tableData=a.payload;const s=o.customFields.filter(l=>l.name.toLowerCase().includes(a.payload.query.toLowerCase()));o.displayedCustomFields=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedCustomField:(o,a)=>{o.selectedCustomField=a.payload},setDialogToggle:(o,a)=>{o.isDialogOpen=a.payload},setDialogMode:(o,a)=>{o.dialogMode=a.payload},toggleDeleteConfirmation:(o,a)=>{o.deleteConfirmation=a.payload}},extraReducers:o=>{o.addCase(X.fulfilled,(a,s)=>{a.loading=!1}).addCase(X.pending,a=>{a.loading=!0}).addCase(O.fulfilled,(a,s)=>{var l;a.customFields=s==null?void 0:s.payload.data,a.tableData.total=(l=s.payload.data)==null?void 0:l.length,a.displayedCustomFields=s==null?void 0:s.payload.data.slice(0,10),a.loading=!1}).addCase(O.pending,a=>{a.loading=!0})}}),{setTableData:G,setDialogToggle:_,setDialogMode:ke,setSelectedCustomField:De,toggleDeleteConfirmation:Y}=Ee.actions,nt=Ee.reducer,lt=te({data:nt}),E=ae,Le=h.forwardRef((o,a)=>{const{onInputChange:s}=o,l=ce(n,500);function n(i){s==null||s(i)}const c=i=>{l(i.target.value)};return e.jsx(w,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ie,{className:"text-lg"}),onChange:c})});Le.displayName="CFLeadTableSearch";const it=()=>{const o=j(),a=h.useRef(null),s=E(c=>c.crmCustomFields.data.tableData),l=c=>{const i=V(s);i.query=c,i.pageIndex=1,typeof c=="string"&&c.length>1&&n(i),typeof c=="string"&&c.length===0&&n(i)},n=c=>{o(c?G(c):O())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Le,{ref:a,onInputChange:l})}),e.jsx("div",{className:"mb-4",children:e.jsx(L,{size:"sm",onClick:()=>{o(_(!0)),o(ke("Add"))},children:"Add New"})})]})},dt=()=>{const o=j(),a=E(m=>m.crmCustomFields.data.loading),s=z("roles","canModify"),l=z("roles","canDelete"),{pageIndex:n,pageSize:c,sort:i,query:f,total:r}=E(m=>m.crmCustomFields.data.tableData),t=E(m=>m.crmCustomFields.data.displayedCustomFields),p=({row:m})=>{const d=j();pe();const b=()=>{d(De(m)),d(_(!0)),d(ke("Edit"))},C=async()=>{await d(De(m)),d(Y(!0))};return e.jsxs("div",{className:"flex justify-start text-base",children:[e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:b,children:e.jsx(de,{})}),e.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:C,children:e.jsx(re,{})})]})},u=h.useMemo(()=>({pageIndex:n,pageSize:c,sort:i,query:f,total:r}),[n,c,i,f,r]),y=h.useMemo(()=>[{header:"Action",id:"action",cell:d=>e.jsx(p,{row:d.row.original})},{header:"Input Type",accessorKey:"inputType",cell:d=>d.row.original.inputType},{header:"Label",accessorKey:"label",cell:d=>d.row.original.label},{header:"Name",accessorKey:"name",cell:d=>d.row.original.name},{header:"Default Value",accessorKey:"defaultValue",cell:d=>{var C,T;const b=(C=d.row.original)!=null&&C.defaultValue?(T=d.row.original)==null?void 0:T.defaultValue:"-";return e.jsx(ue,{text:b,maxLength:15})}}],[s,l]),g=m=>{const d=V(u);d.pageIndex=m,o(G(d))},x=m=>{const d=V(u);d.pageSize=Number(m),d.pageIndex=1,o(G(d))},F=m=>{const d=V(u);d.sort=m,o(G(d))};return e.jsx("div",{children:e.jsx(me,{columns:y,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:g,onSelectChange:x,onSort:F})})},$e=h.forwardRef((o,a)=>{const s=j(),l=E(r=>r.crmCustomFields.data.dialogMode),n=E(r=>r.crmCustomFields.data.selectedCustomField),c=()=>{s(_(!1))},i=async(r,t,p,u,y)=>{var b,C,T;const g={inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue},x=await u(r==="Add"?X({id:"4",payload:g}):tt({CustomFieldsId:p==null?void 0:p.id,updatedData:{inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue}}));let F="",m="",d="danger";(b=x==null?void 0:x.payload)!=null&&b.success?(F="Successfully Added",m=(C=x==null?void 0:x.payload)==null?void 0:C.message,d="success",u(_(!1))):(F="Something went wrong !!!",m=(T=x==null?void 0:x.error)==null?void 0:T.message),y.push(e.jsx(P,{title:F,type:d,duration:2500,children:m}),{placement:"top-end"}),await u(O())},f=be().shape({inputType:A().required("Input Type is required"),label:A().required("Label is required"),name:A().required("Field Name is required"),defaultValue:A()});return e.jsx(ye,{innerRef:a,initialValues:{name:l==="Edit"?n==null?void 0:n.name:"",inputType:l==="Edit"?n==null?void 0:n.inputType:"",label:l==="Edit"?n==null?void 0:n.label:"",defaultValue:l==="Edit"?n==null?void 0:n.defaultValue:""},validationSchema:f,onSubmit:async(r,{setSubmitting:t})=>{l==="Add"?await i("Add",r,null,s,$):await i("Edit",r,n,s,$),t(!1)},children:({touched:r,errors:t,values:p,setFieldValue:u})=>{var y;return e.jsxs(Ce,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Input Type *",invalid:t.inputType&&r.inputType,errorMessage:t.inputType,children:e.jsx(D,{type:"text",autoComplete:"off",name:"inputType",placeholder:"Input Type",component:fe,options:R,value:(y=R)==null?void 0:y.find(g=>(g==null?void 0:g.value)==(p==null?void 0:p.inputType)),prefix:e.jsx(je,{className:"text-xl"}),onChange:g=>{u("inputType",g==null?void 0:g.value)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Label *",invalid:t.label&&r.label,errorMessage:t.label,children:e.jsx(D,{type:"text",autoComplete:"off",name:"label",placeholder:"label",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Name *",invalid:t.name&&r.name,errorMessage:t.name,children:e.jsx(D,{type:"text",autoComplete:"off",name:"name",placeholder:"name",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"DefaultValue",invalid:t.defaultValue&&r.defaultValue,errorMessage:t.defaultValue,children:p.inputType==="textArea"?e.jsx(D,{textArea:!0,type:"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})}):e.jsx(D,{type:p.inputType==="datetime-local"?"datetime-local":p.inputType==="number"?"number":"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})})})})]}),e.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(L,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:c,children:"Cancel"}),e.jsx(L,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(he,{}),children:"Save"})]})})]})}})});$e.displayName="CFLeadForm";const rt=()=>{const o=j(),a=E(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.deleteConfirmation}),s=E(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.selectedCustomField}),l=()=>{o(Y(!1))},n=(i,f,r,t)=>{var u,y,g;const p=(u=i==null?void 0:i.payload)==null?void 0:u.success;f.push(e.jsx(P,{title:p?r:t,type:p?"success":"danger",duration:2500,children:p?(y=i==null?void 0:i.payload)==null?void 0:y.message:(g=i==null?void 0:i.error)==null?void 0:g.message}),{placement:"top-end"})},c=async()=>{o(Y(!1));const i=await o(at(s==null?void 0:s.id));n(i,$,"Successfully Deleted","Something Went Wrong !!!"),await o(O())};return e.jsx(Fe,{isOpen:a,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this Custom Field of Lead? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmCustomFields",lt);const ct=()=>{const o=j(),a=E(n=>n.crmCustomFields.data.isDialogOpen),s=E(n=>n.crmCustomFields.data.dialogMode),l=()=>{o(_(!1))};return h.useEffect(()=>{o(O())},[]),e.jsxs(e.Fragment,{children:[e.jsx(it,{}),e.jsx(dt,{}),e.jsxs(ge,{isOpen:a,onClose:l,children:[e.jsxs("h5",{className:"mb-4",children:[s==="Edit"?"Edit":"Add New"," Custom Field"]}),e.jsx($e,{})]}),e.jsx(rt,{})]})},mt="crmCustomerFields",Z=I("crm/custom-fields",async({id:o,payload:a})=>{var s,l;try{return(await se(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),pt=I("crmCustomFields/data/editCustomFields",async({CustomFieldsId:o,updatedData:a})=>{var s,l;try{return(await ne(o,a)).data}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),ut=I("crmCustomFields/data/deleteCustomFields",async o=>{var a,s;try{return await le(o)}catch(l){throw new Error((s=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:s.message)}}),K=I("crmCustomFields/data/getcustomFields",async()=>{const o=await We();return console.log({response:o}),o.data}),gt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ft={loading:!1,tableData:gt,displayedCustomFields:[],customFields:[],isDialogOpen:!1,dialogMode:"Add",selectedCustomField:null,deleteConfirmation:!1},qe=ee({name:`${mt}/state`,initialState:ft,reducers:{setTableData:(o,a)=>{o.tableData=a.payload;const s=o.customFields.filter(l=>l.name.toLowerCase().includes(a.payload.query.toLowerCase()));o.displayedCustomFields=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedCustomField:(o,a)=>{o.selectedCustomField=a.payload},setDialogToggle:(o,a)=>{o.isDialogOpen=a.payload},setDialogMode:(o,a)=>{o.dialogMode=a.payload},toggleDeleteConfirmation:(o,a)=>{o.deleteConfirmation=a.payload}},extraReducers:o=>{o.addCase(Z.fulfilled,(a,s)=>{a.loading=!1}).addCase(Z.pending,a=>{a.loading=!0}).addCase(K.fulfilled,(a,s)=>{var l;a.customFields=s==null?void 0:s.payload.data,a.tableData.total=(l=s.payload.data)==null?void 0:l.length,a.displayedCustomFields=s==null?void 0:s.payload.data.slice(0,10),a.loading=!1}).addCase(K.pending,a=>{a.loading=!0})}}),{setTableData:U,setDialogToggle:B,setDialogMode:ze,setSelectedCustomField:we,toggleDeleteConfirmation:v}=qe.actions,xt=qe.reducer,yt=te({data:xt}),k=ae,Re=h.forwardRef((o,a)=>{const{onInputChange:s}=o,l=ce(n,500);function n(i){s==null||s(i)}const c=i=>{l(i.target.value)};return e.jsx(w,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ie,{className:"text-lg"}),onChange:c})});Re.displayName="CFTaskTableSearch";const Ct=()=>{const o=j(),a=h.useRef(null),s=k(c=>c.crmCustomFields.data.tableData),l=c=>{const i=V(s);i.query=c,i.pageIndex=1,typeof c=="string"&&c.length>1&&n(i),typeof c=="string"&&c.length===0&&n(i)},n=c=>{o(c?U(c):K())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Re,{ref:a,onInputChange:l})}),e.jsx("div",{className:"mb-4",children:e.jsx(L,{size:"sm",onClick:()=>{o(B(!0)),o(ze("Add"))},children:"Add New"})})]})},ht=()=>{const o=j(),a=k(m=>m.crmCustomFields.data.loading),s=z("roles","canModify"),l=z("roles","canDelete"),{pageIndex:n,pageSize:c,sort:i,query:f,total:r}=k(m=>m.crmCustomFields.data.tableData),t=k(m=>m.crmCustomFields.data.displayedCustomFields),p=({row:m})=>{const d=j();pe();const b=()=>{d(we(m)),d(B(!0)),d(ze("Edit"))},C=async()=>{await d(we(m)),d(v(!0))};return e.jsxs("div",{className:"flex justify-start text-base",children:[e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:b,children:e.jsx(de,{})}),e.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:C,children:e.jsx(re,{})})]})},u=h.useMemo(()=>({pageIndex:n,pageSize:c,sort:i,query:f,total:r}),[n,c,i,f,r]),y=h.useMemo(()=>[{header:"Action",id:"action",cell:d=>e.jsx(p,{row:d.row.original})},{header:"Input Type",accessorKey:"inputType",cell:d=>d.row.original.inputType},{header:"Label",accessorKey:"label",cell:d=>d.row.original.label},{header:"Name",accessorKey:"name",cell:d=>d.row.original.name},{header:"Default Value",accessorKey:"defaultValue",cell:d=>{var C,T;const b=(C=d.row.original)!=null&&C.defaultValue?(T=d.row.original)==null?void 0:T.defaultValue:"-";return e.jsx(ue,{text:b,maxLength:15})}}],[s,l]),g=m=>{const d=V(u);d.pageIndex=m,o(U(d))},x=m=>{const d=V(u);d.pageSize=Number(m),d.pageIndex=1,o(U(d))},F=m=>{const d=V(u);d.sort=m,o(U(d))};return e.jsx("div",{children:e.jsx(me,{columns:y,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:g,onSelectChange:x,onSort:F})})},Oe=h.forwardRef((o,a)=>{const s=j(),l=k(r=>r.crmCustomFields.data.dialogMode),n=k(r=>r.crmCustomFields.data.selectedCustomField),c=()=>{s(B(!1))},i=async(r,t,p,u,y)=>{var b,C,T;const g={inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue},x=await u(r==="Add"?Z({id:"6",payload:g}):pt({CustomFieldsId:p==null?void 0:p.id,updatedData:{inputType:t==null?void 0:t.inputType,label:t==null?void 0:t.label,type:t==null?void 0:t.type,name:t==null?void 0:t.name,option:t==null?void 0:t.option,defaultValue:t==null?void 0:t.defaultValue}}));let F="",m="",d="danger";(b=x==null?void 0:x.payload)!=null&&b.success?(F="Successfully Added",m=(C=x==null?void 0:x.payload)==null?void 0:C.message,d="success",u(B(!1))):(F="Something went wrong !!!",m=(T=x==null?void 0:x.error)==null?void 0:T.message),y.push(e.jsx(P,{title:F,type:d,duration:2500,children:m}),{placement:"top-end"}),await u(K())},f=be().shape({inputType:A().required("Input Type is required"),label:A().required("Label is required"),name:A().required("Field Name is required"),defaultValue:A()});return e.jsx(ye,{innerRef:a,initialValues:{name:l==="Edit"?n==null?void 0:n.name:"",inputType:l==="Edit"?n==null?void 0:n.inputType:"",label:l==="Edit"?n==null?void 0:n.label:"",defaultValue:l==="Edit"?n==null?void 0:n.defaultValue:""},validationSchema:f,onSubmit:async(r,{setSubmitting:t})=>{l==="Add"?await i("Add",r,null,s,$):await i("Edit",r,n,s,$),t(!1)},children:({touched:r,errors:t,values:p,setFieldValue:u})=>{var y;return e.jsxs(Ce,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Input Type *",invalid:t.inputType&&r.inputType,errorMessage:t.inputType,children:e.jsx(D,{type:"text",autoComplete:"off",name:"inputType",placeholder:"Input Type",component:fe,options:R,value:(y=R)==null?void 0:y.find(g=>(g==null?void 0:g.value)==(p==null?void 0:p.inputType)),prefix:e.jsx(je,{className:"text-xl"}),onChange:g=>{u("inputType",g==null?void 0:g.value)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Label *",invalid:t.label&&r.label,errorMessage:t.label,children:e.jsx(D,{type:"text",autoComplete:"off",name:"label",placeholder:"label",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"Name *",invalid:t.name&&r.name,errorMessage:t.name,children:e.jsx(D,{type:"text",autoComplete:"off",name:"name",placeholder:"name",component:w,prefix:e.jsx(N,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(S,{label:"DefaultValue",invalid:t.defaultValue&&r.defaultValue,errorMessage:t.defaultValue,children:p.inputType==="textArea"?e.jsx(D,{textArea:!0,type:"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})}):e.jsx(D,{type:p.inputType==="datetime-local"?"datetime-local":p.inputType==="number"?"number":"text",autoComplete:"off",name:"defaultValue",placeholder:"defaultValue",component:w,prefix:e.jsx(N,{className:"text-xl"})})})})]}),e.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(L,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:c,children:"Cancel"}),e.jsx(L,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(he,{}),children:"Save"})]})})]})}})});Oe.displayName="CFTaskForm";const bt=()=>{const o=j(),a=k(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.deleteConfirmation}),s=k(i=>{var f,r;return(r=(f=i.crmCustomFields)==null?void 0:f.data)==null?void 0:r.selectedCustomField}),l=()=>{o(v(!1))},n=(i,f,r,t)=>{var u,y,g;const p=(u=i==null?void 0:i.payload)==null?void 0:u.success;f.push(e.jsx(P,{title:p?r:t,type:p?"success":"danger",duration:2500,children:p?(y=i==null?void 0:i.payload)==null?void 0:y.message:(g=i==null?void 0:i.error)==null?void 0:g.message}),{placement:"top-end"})},c=async()=>{o(v(!1));const i=await o(ut(s==null?void 0:s.id));n(i,$,"Successfully Deleted","Something Went Wrong !!!"),await o(K())};return e.jsx(Fe,{isOpen:a,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this Custom Field of Task? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmCustomFields",yt);const jt=()=>{const o=j(),a=k(n=>n.crmCustomFields.data.isDialogOpen),s=k(n=>n.crmCustomFields.data.dialogMode),l=()=>{o(B(!1))};return h.useEffect(()=>{o(K())},[]),e.jsxs(e.Fragment,{children:[e.jsx(Ct,{}),e.jsx(ht,{}),e.jsxs(ge,{isOpen:a,onClose:l,children:[e.jsxs("h5",{className:"mb-4",children:[s==="Edit"?"Edit":"Add New"," Custom Field"]}),e.jsx(Oe,{})]}),e.jsx(bt,{})]})},{TabNav:Ft,TabList:Tt}=Se,Ne={CFContact:{label:"Contact",path:"CFContact"},CFLead:{label:"Lead",path:"CFLead"},CFTask:{label:"Task",path:"CFTask"}},Dt=()=>{const[o,a]=h.useState("CFContact"),s=l=>{a(l)};return e.jsxs(e.Fragment,{children:[e.jsx(Se,{value:o,variant:"pill",onChange:l=>s(l),children:e.jsx(Tt,{children:Object.keys(Ne).map(l=>e.jsx(Ft,{value:l,children:Ne[l].label},l))})}),e.jsx("div",{className:"py-4",children:e.jsxs(h.Suspense,{fallback:e.jsx(e.Fragment,{children:"loading..."}),children:[o==="CFContact"&&e.jsx(ve,{}),o==="CFLead"&&e.jsx(ct,{}),o==="CFTask"&&e.jsx(jt,{})]})})]})},Aa=Dt;export{Aa as C};
