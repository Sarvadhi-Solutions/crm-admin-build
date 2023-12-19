import{al as w,am as X,an as Y,ao as Z,a as S,j as s,r as C,aq as ee}from"./index-bbbc5aef.js";import{T as te}from"./index-beb1224c.js";import"./Alert-6f7f8624.js";import"./index-a63cc66f.js";import"./Badge-084d6baa.js";import{B as A}from"./Button-2283a1ae.js";import"./RangeCalendar-bbe83f42.js";import"./Card-88f9c8ec.js";import"./index-f008017f.js";import"./index-b754fb37.js";import{D as ae}from"./Dialog-826b1acc.js";import"./Drawer-df90174f.js";import"./index-a99fb528.js";import{F as se,a as $}from"./FormItem-ad188291.js";import"./toString-63639ad5.js";import{I as R}from"./Input-b87675b9.js";import"./index-45df0f5a.js";import"./index-68d7d285.js";import"./index-af162539.js";import{N as q,t as M}from"./toast-54f598af.js";import"./Pagination-7ecff04b.js";import"./Progress-ff35253e.js";import"./index-3059edce.js";import"./ScrollBar-4ef3413f.js";import"./index-8a7d23d7.js";import{S as Te}from"./Select-839ea91c.js";import"./Skeleton-b410f7be.js";import"./index-24fc2a26.js";import"./Switcher-b3a1e5e3.js";import"./index-b158199e.js";import"./Tag-e7b0072c.js";import"./index-03b003b1.js";import"./index-d683415a.js";import"./Tooltip-4497b1a4.js";import"./Upload-97f36fe4.js";import{C as oe}from"./ConfirmDialog-762dffb6.js";import{aq as Ie,ar as Ae,as as ne,at as Me,au as ve,av as Ee,aw as Le,ax as ze}from"./CrmService-ce1a8be4.js";import"./Views-461d6d23.js";import"./chart.constant-6e2db076.js";import"./GrowShrinkTag-aecc96e2.js";import{D as ie}from"./DataTable-5ad7b293.js";import"./react-tooltip.min-18d94bea.js";import"./RichTextEditor-39e96d93.js";import"./SegmentItemOption-2d55cc81.js";import{S as le}from"./StickyFooter-a9e7dd45.js";import"./SvgIcon-48ccf1ad.js";import{F as re,a as ce,b as P}from"./formik.esm-cb4bee85.js";import{A as de}from"./index.esm-c743358b.js";import{a as B}from"./index.esm-e9378033.js";import{c as W,a as me}from"./index.esm-18b61514.js";import{u as O}from"./checkEditUpdate-8f773330.js";import{u as pe}from"./useThemeClass-3a8cacfd.js";import{c as N}from"./cloneDeep-03ae2b77.js";import{O as ge,P as ye,b as ue}from"./index.esm-0cfcd98b.js";import{d as he}from"./debounce-27b325af.js";const ke="crmCity",Fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Oe={loading:!1,tableData:Fe,displayedCityList:[],cityList:[],stateList:[],isDialogOpen:!1,dialogMode:"Add",selectedCity:null,deleteConfirmation:!1},_=w("crmCity/data/createCity",async a=>{var e,t;try{return(await Ie(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),v=w("crmCity/data/getCity",async()=>{var a,e;try{return(await Ae()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),fe=w("crmCity/data/getState",async()=>{var a,e;try{return(await ne()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Re=w("crmCity/data/editCity",async({id:a,updatedData:e})=>{var t,o;try{return(await Me(a,e)).data}catch(i){throw new Error((o=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:o.message)}}),qe=w("crmCity/data/deleteCity",async a=>{var e,t;try{return await ve(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),Ce=X({name:`${ke}/state`,initialState:Oe,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.cityList.filter(o=>{var i,l,n;return((i=o.cityName)==null?void 0:i.toLowerCase().includes(e.payload.query.toLowerCase()))||((n=(l=o==null?void 0:o.state)==null?void 0:l.stateName)==null?void 0:n.toLowerCase().includes(e.payload.query.toLowerCase()))});a.tableData.total=t.length,a.displayedCityList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedCity:(a,e)=>{a.selectedCity=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(_.fulfilled,(e,t)=>{e.loading=!1}).addCase(_.pending,e=>{e.loading=!0}).addCase(v.fulfilled,(e,t)=>{var o,i,l,n,p;e.loading=!1,e.cityList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedCityList=t==null?void 0:t.payload.data.slice(((i=e==null?void 0:e.tableData)==null?void 0:i.pageSize)*(((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex)-1),((n=e==null?void 0:e.tableData)==null?void 0:n.pageSize)*((p=e==null?void 0:e.tableData)==null?void 0:p.pageIndex))}).addCase(fe.fulfilled,(e,t)=>{e.stateList=t==null?void 0:t.payload.data}).addCase(v.pending,e=>{e.loading=!0})}}),{setTableData:k,setSelectedCity:U,setDialogToggle:L,setDialogMode:xe,toggleDeleteConfirmation:H}=Ce.actions,$e=Ce.reducer,Pe=Y({data:$e}),b=Z,Be=()=>{const a=S(),e=b(n=>n.crmCity.data.deleteConfirmation),t=b(n=>n.crmCity.data.selectedCity),o=()=>{a(H(!1))},i=(n,p,u,m)=>{var y,g,h;const d=(y=n==null?void 0:n.payload)==null?void 0:y.success;p.push(s.jsx(q,{title:d?u:m,type:d?"success":"danger",duration:2500,children:d?(g=n==null?void 0:n.payload)==null?void 0:g.message:(h=n==null?void 0:n.error)==null?void 0:h.message}),{placement:"top-end"})},l=async()=>{a(H(!1));const n=await a(qe(t==null?void 0:t.id));i(n,M,"Successfully Deleted","Something Went Wrong !!!"),await a(v())};return s.jsx(oe,{isOpen:e,type:"danger",title:"Delete Sub Category",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this Sub Category? All record related to this Sub Category will be deleted as well. This action cannot be undone."})})},We=W().shape({stateId:W().required("State is required"),cityName:me().required("City is required")}),Se=C.forwardRef((a,e)=>{const t=S(),o=b(m=>m.crmCity.data.dialogMode),i=b(m=>m.crmCity.data.selectedCity),l=b(m=>m.crmCity.data.stateList),n=C.useMemo(()=>(console.log({stateList:l}),l.map(d=>({label:d.stateName,value:d.id}))),[l]),p=()=>{t(L(!1))},u=async(m,d,y,g,h)=>{var T,I,G;const D={cityName:d.cityName,stateId:d.stateId.value},f=await g(m==="Add"?_(D):Re({id:y==null?void 0:y.id,updatedData:D}));let c="",r="",x="danger";(T=f==null?void 0:f.payload)!=null&&T.success?(c="Successfully Added",r=(I=f==null?void 0:f.payload)==null?void 0:I.message,x="success"):(c="Something went wrong !!!",r=(G=f==null?void 0:f.error)==null?void 0:G.message),h.push(s.jsx(q,{title:c,type:x,duration:2500,children:r}),{placement:"top-end"}),g(L(!1)),await g(v())};return console.log({selectedCity:i}),s.jsx(re,{innerRef:e,initialValues:{cityName:o==="Edit"?i==null?void 0:i.cityName:"",stateId:o==="Edit"?n.find(m=>m.value===(i==null?void 0:i.stateId)):""},validationSchema:We,onSubmit:async(m,{setSubmitting:d})=>{console.log({values:m}),o==="Add"?await u("Add",m,null,t,M):await u("Edit",m,i,t,M),d(!1)},children:({touched:m,errors:d,values:y,setFieldValue:g})=>s.jsxs(ce,{children:[s.jsxs(se,{children:[s.jsx($,{label:"State",invalid:d.stateId&&m.stateId,errorMessage:d.stateId,children:s.jsx(P,{type:"text",autoComplete:"off",name:"stateId",placeholder:"State",options:n,component:Te,prefix:s.jsx(B,{className:"text-xl"}),onChange:h=>{g("stateId",h)}})}),s.jsx($,{label:"City",invalid:d.cityName&&m.cityName,errorMessage:d.cityName,children:s.jsx(P,{type:"text",autoComplete:"off",name:"cityName",placeholder:"City",component:R,prefix:s.jsx(B,{className:"text-xl"})})})]}),s.jsx(le,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:p,children:"Cancel"}),s.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(de,{}),children:"Save"})]})})]})})});Se.displayName="CityForm";const _e=()=>{const a=S(),e=b(c=>c.crmCity.data.loading),t=b(c=>c.crmCity.data.displayedCityList),o=O("roles","canModify"),i=O("roles","canDelete"),{pageIndex:l,pageSize:n,sort:p,query:u,total:m}=b(c=>c.crmCity.data.tableData),d=C.useMemo(()=>({pageIndex:l,pageSize:n,sort:p,query:u,total:m}),[l,n,p,u,m]),y=({row:c})=>{const r=S(),{textTheme:x}=pe(),T=()=>{r(U(c)),r(L(!0)),r(xe("Edit"))},I=async()=>{await r(U(c)),r(H(!0))};return s.jsxs("div",{className:"flex justify-start text-lg",children:[s.jsx("span",{className:`cursor-pointer p-2 hover:${x}`,onClick:T,children:s.jsx(ge,{})}),s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:I,children:s.jsx(ye,{})})]})},g=C.useMemo(()=>[{header:"Action",id:"action",cell:r=>s.jsx(y,{row:r.row.original})},{header:"City",accessorKey:"cityName",cell:r=>r.row.original.cityName},{header:"State",accessorKey:"state",cell:r=>{var x;return(x=r.row.original.state)==null?void 0:x.stateName}}],[o,i]),h=c=>{console.log({page:c});const r=N(d);r.pageIndex=c,a(k(r))},D=c=>{const r=N(d);r.pageSize=Number(c),r.pageIndex=1,a(k(r))},f=c=>{const r=N(d);r.sort=c,a(k(r))};return s.jsx("div",{children:s.jsx(ie,{columns:g,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:h,onSelectChange:D,onSort:f})})},be=C.forwardRef((a,e)=>{const{onInputChange:t}=a,o=he(i,500);function i(n){t==null||t(n)}const l=n=>{o(n.target.value)};return s.jsx(R,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(ue,{className:"text-lg"}),onChange:l})});be.displayName="SubCategoryTableSearch";const He=()=>{const a=S(),e=C.useRef(null),t=b(l=>l.crmCity.data.tableData),o=l=>{const n=N(t);n.query=l,n.pageIndex=1,typeof l=="string"&&l.length>1&&i(n),typeof l=="string"&&l.length===0&&i(n)},i=l=>{a(l?k(l):v())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(be,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(A,{size:"sm",onClick:()=>{a(L(!0)),a(xe("Add"))},children:"Add New"})})]})};ee("crmCity",Pe);const Ke=()=>{const a=S(),e=b(i=>i.crmCity.data.isDialogOpen),t=b(i=>i.crmCity.data.dialogMode),o=()=>{a(L(!1))};return C.useEffect(()=>{a(v()),a(fe())},[]),s.jsxs(s.Fragment,{children:[s.jsx(He,{}),s.jsx(_e,{}),s.jsxs(ae,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," City"]}),s.jsx(Se,{})]}),s.jsx(Be,{})]})},Ve="crmState",K=w("crmState/data/createState",async a=>{var e,t;try{return(await Ee(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),E=w("crmState/data/getState",async()=>{var a,e;try{return(await ne()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Ge=w("crmState/data/editState",async({id:a,updatedData:e})=>{var t,o;try{return(await Le(a,e)).data}catch(i){throw new Error((o=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:o.message)}}),Ue=w("crmLeads/data/deleteState",async a=>{var e,t;try{return await ze(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),Je={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Qe={loading:!1,tableData:Je,displayedStateList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedState:null,deleteConfirmation:!1},De=X({name:`${Ve}/state`,initialState:Qe,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.categoryList.filter(o=>o.stateName.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=t.length,a.displayedStateList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedState=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(K.fulfilled,(e,t)=>{e.loading=!1}).addCase(K.pending,e=>{e.loading=!0}).addCase(E.fulfilled,(e,t)=>{var o,i,l,n,p;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedStateList=t==null?void 0:t.payload.data.slice(((i=e==null?void 0:e.tableData)==null?void 0:i.pageSize)*(((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex)-1),((n=e==null?void 0:e.tableData)==null?void 0:n.pageSize)*((p=e==null?void 0:e.tableData)==null?void 0:p.pageIndex))}).addCase(E.pending,e=>{e.loading=!0})}}),{setTableData:F,setDialogToggle:z,setDialogMode:je,setSelectedState:J,toggleDeleteConfirmation:V}=De.actions,Xe=De.reducer,Ye=Y({data:Xe}),j=Z,we=C.forwardRef((a,e)=>{const{onInputChange:t}=a,o=he(i,500);function i(n){t==null||t(n)}const l=n=>{o(n.target.value)};return s.jsx(R,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(ue,{className:"text-lg"}),onChange:l})});we.displayName="StateTableSearch";const Ze=()=>{const a=S(),e=C.useRef(null),t=j(l=>l.crmState.data.tableData),o=l=>{const n=N(t);n.query=l,n.pageIndex=1,typeof l=="string"&&l.length>1&&i(n),typeof l=="string"&&l.length===0&&i(n)},i=l=>{a(l?F(l):E())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(we,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(A,{size:"sm",onClick:()=>{a(z(!0)),a(je("Add"))},children:"Add New"})})]})},et=()=>{const a=S(),e=j(c=>c.crmState.data.loading),t=O("roles","canModify"),o=O("roles","canDelete"),{pageIndex:i,pageSize:l,sort:n,query:p,total:u}=j(c=>c.crmState.data.tableData),m=j(c=>c.crmState.data.displayedStateList);console.log({data:m});const d=({row:c})=>{const r=S(),{textTheme:x}=pe(),T=()=>{r(J(c)),r(z(!0)),r(je("Edit"))},I=async()=>{await r(J(c)),r(V(!0))};return s.jsxs("div",{className:"flex justify-start text-lg",children:[s.jsx("span",{className:`cursor-pointer p-2 hover:${x}`,onClick:T,children:s.jsx(ge,{})}),s.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:I,children:s.jsx(ye,{})})]})},y=C.useMemo(()=>({pageIndex:i,pageSize:l,sort:n,query:p,total:u}),[i,l,n,p,u]),g=C.useMemo(()=>[{header:"Action",id:"action",cell:r=>s.jsx(d,{row:r.row.original})},{header:"State",accessorKey:"name",cell:r=>r.row.original.stateName}],[t,o]),h=c=>{const r=N(y);r.pageIndex=c,a(F(r))},D=c=>{const r=N(y);r.pageSize=Number(c),r.pageIndex=1,a(F(r))},f=c=>{const r=N(y);r.sort=c,a(F(r))};return s.jsx("div",{children:s.jsx(ie,{columns:g,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:y.total,pageIndex:y.pageIndex,pageSize:y.pageSize},onPaginationChange:h,onSelectChange:D,onSort:f})})},tt=W().shape({stateName:me().required("State name is required")}),Ne=C.forwardRef((a,e)=>{const t=S(),o=j(p=>p.crmState.data.dialogMode),i=j(p=>p.crmState.data.selectedState),l=()=>{t(z(!1))};console.log(o);const n=async(p,u,m,d,y)=>{var c,r,x;const g=await d(p==="Add"?K(u):Ge({id:m==null?void 0:m.id,updatedData:u}));let h="",D="",f="danger";(c=g==null?void 0:g.payload)!=null&&c.success?(h="Successfully Added",D=(r=g==null?void 0:g.payload)==null?void 0:r.message,f="success"):(h="Something went wrong !!!",D=(x=g==null?void 0:g.error)==null?void 0:x.message),y.push(s.jsx(q,{title:h,type:f,duration:2500,children:D}),{placement:"top-end"}),d(z(!1)),await d(E())};return s.jsx(re,{innerRef:e,initialValues:{stateName:o==="Edit"?i==null?void 0:i.stateName:""},validationSchema:tt,onSubmit:async(p,{setSubmitting:u})=>{o==="Add"?await n("Add",p,null,t,M):await n("Edit",p,i,t,M),u(!1)},children:({touched:p,errors:u,values:m,setFieldValue:d})=>s.jsxs(ce,{children:[s.jsx(se,{children:s.jsx($,{label:"State Name",invalid:u.stateName&&p.stateName,errorMessage:u.stateName,children:s.jsx(P,{type:"text",autoComplete:"off",name:"stateName",placeholder:"State Name",component:R,prefix:s.jsx(B,{className:"text-xl"})})})}),s.jsx(le,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:l,children:"Cancel"}),s.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(de,{}),children:"Save"})]})})]})})});Ne.displayName="StateForm";const at=()=>{const a=S(),e=j(n=>n.crmState.data.deleteConfirmation),t=j(n=>n.crmState.data.selectedState),o=()=>{a(V(!1))},i=(n,p,u,m)=>{var y,g,h;const d=(y=n==null?void 0:n.payload)==null?void 0:y.success;p.push(s.jsx(q,{title:d?u:m,type:d?"success":"danger",duration:2500,children:d?(g=n==null?void 0:n.payload)==null?void 0:g.message:(h=n==null?void 0:n.error)==null?void 0:h.message}),{placement:"top-end"})},l=async()=>{a(V(!1));const n=await a(Ue(t==null?void 0:t.id));i(n,M,"Successfully Deleted","Something Went Wrong !!!"),await a(E())};return s.jsx(oe,{isOpen:e,type:"danger",title:"Delete State",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this State? All record related to this State will be deleted as well. This action cannot be undone."})})};ee("crmState",Ye);const st=()=>{const a=S(),e=j(i=>i.crmState.data.isDialogOpen),t=j(i=>i.crmState.data.dialogMode),o=()=>{a(z(!1))};return C.useEffect(()=>{a(E())},[]),s.jsxs(s.Fragment,{children:[s.jsx(Ze,{}),s.jsx(et,{}),s.jsxs(ae,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," State"]}),s.jsx(Ne,{})]}),s.jsx(at,{})]})},{TabNav:ot,TabList:nt}=te,Q={state:{label:"State",path:"state"},city:{label:"City",path:"city"}},it=()=>{const[a,e]=C.useState("state"),t=o=>{e(o)};return s.jsxs(s.Fragment,{children:[s.jsx(te,{value:a,variant:"pill",onChange:o=>t(o),children:s.jsx(nt,{children:Object.keys(Q).map(o=>s.jsx(ot,{value:o,children:Q[o].label},o))})}),s.jsx("div",{className:"py-4",children:s.jsxs(C.Suspense,{fallback:s.jsx(s.Fragment,{children:"loading..."}),children:[a==="state"&&s.jsx(st,{}),a==="city"&&s.jsx(Ke,{})]})})]})},ra=it;export{ra as S};
