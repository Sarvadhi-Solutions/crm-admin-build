import{am as w,an as X,ao as Y,ap as Z,a as S,j as s,r as x,aq as ee}from"./index-01836369.js";import{T as te}from"./index-bf1aff49.js";import"./Alert-d402928e.js";import"./index-a2edb971.js";import"./Badge-a322da11.js";import{B as I}from"./Button-a46452f7.js";import"./RangeCalendar-90d0a69e.js";import"./Card-2dc07d7d.js";import"./index-d8fc78ac.js";import"./index-61590567.js";import{D as ae}from"./Dialog-4fd81af0.js";import"./Drawer-b1603852.js";import"./index-3b5b12e0.js";import{F as se,a as q}from"./FormItem-8bd92bc5.js";import"./toString-dfdb4974.js";import{I as O}from"./Input-de9bab6e.js";import"./index-d1a1662d.js";import"./index-035dac1c.js";import"./index-0ef1a83d.js";import{N as R,t as A}from"./toast-923c10a7.js";import"./Pagination-c8e6fde5.js";import"./Progress-5c62251c.js";import"./index-4a72f1ca.js";import"./ScrollBar-cc8c4864.js";import"./index-5c080796.js";import{S as Te}from"./Select-c320d599.js";import"./Skeleton-743f8ad2.js";import"./index-d83ef631.js";import"./Switcher-3a0c2c62.js";import"./index-9a90023d.js";import"./Tag-b2e6ee28.js";import"./index-c396e082.js";import"./index-9bafd396.js";import"./Tooltip-2ee5bf6e.js";import"./Upload-f2b9b624.js";import{C as oe}from"./ConfirmDialog-bbf84914.js";import{ar as Ie,as as Ae,at as ie,au as Me,av as ve,aw as Ee,ax as Le,ay as ze}from"./CrmService-5df22f1e.js";import"./Views-e7196e20.js";import"./chart.constant-d16ea559.js";import"./GrowShrinkTag-c64d92ad.js";import{D as ne}from"./DataTable-a7013519.js";import"./react-tooltip.min-9096483d.js";import"./RichTextEditor-6ee29ff1.js";import"./SegmentItemOption-a5df08eb.js";import{S as le}from"./StickyFooter-18ccdafd.js";import"./SvgIcon-fb1c74f5.js";import{F as re,a as ce,b as $}from"./formik.esm-0b8089c1.js";import{A as de}from"./index.esm-4c0a85b7.js";import{a as P}from"./index.esm-170824bf.js";import{c as B,a as me}from"./index.esm-e4a4a14e.js";import{u as F}from"./checkEditUpdate-a0ee37f3.js";import{u as pe}from"./useThemeClass-ce525309.js";import{c as N}from"./cloneDeep-2911bc06.js";import{O as ge,P as ye,b as ue}from"./index.esm-64f3e5ec.js";import{d as he}from"./debounce-706ad38e.js";const ke="crmCity",Fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Oe={loading:!1,tableData:Fe,displayedCityList:[],cityList:[],stateList:[],isDialogOpen:!1,dialogMode:"Add",selectedCity:null,deleteConfirmation:!1},W=w("crmCity/data/createCity",async a=>{var e,t;try{return(await Ie(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),M=w("crmCity/data/getCity",async()=>{var a,e;try{return(await Ae()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),fe=w("crmCity/data/getState",async()=>{var a,e;try{return(await ie()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Re=w("crmCity/data/editCity",async({id:a,updatedData:e})=>{var t,o;try{return(await Me(a,e)).data}catch(n){throw new Error((o=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:o.message)}}),qe=w("crmCity/data/deleteCity",async a=>{var e,t;try{return await ve(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),xe=X({name:`${ke}/state`,initialState:Oe,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.cityList.filter(o=>{var n,l,i;return((n=o.cityName)==null?void 0:n.toLowerCase().includes(e.payload.query.toLowerCase()))||((i=(l=o==null?void 0:o.state)==null?void 0:l.stateName)==null?void 0:i.toLowerCase().includes(e.payload.query.toLowerCase()))});a.tableData.total=t.length,a.displayedCityList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedCity:(a,e)=>{a.selectedCity=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(W.fulfilled,(e,t)=>{e.loading=!1}).addCase(W.pending,e=>{e.loading=!0}).addCase(M.fulfilled,(e,t)=>{var o,n,l,i,p;e.loading=!1,e.cityList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedCityList=t==null?void 0:t.payload.data.slice(((n=e==null?void 0:e.tableData)==null?void 0:n.pageSize)*(((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex)-1),((i=e==null?void 0:e.tableData)==null?void 0:i.pageSize)*((p=e==null?void 0:e.tableData)==null?void 0:p.pageIndex))}).addCase(fe.fulfilled,(e,t)=>{e.stateList=t==null?void 0:t.payload.data}).addCase(M.pending,e=>{e.loading=!0})}}),{setTableData:z,setSelectedCity:U,setDialogToggle:E,setDialogMode:Ce,toggleDeleteConfirmation:_}=xe.actions,$e=xe.reducer,Pe=Y({data:$e}),b=Z,Be=()=>{const a=S(),e=b(i=>i.crmCity.data.deleteConfirmation),t=b(i=>i.crmCity.data.selectedCity),o=()=>{a(_(!1))},n=(i,p,u,m)=>{var y,g,h;const d=(y=i==null?void 0:i.payload)==null?void 0:y.success;p.push(s.jsx(R,{title:d?u:m,type:d?"success":"danger",duration:2500,children:d?(g=i==null?void 0:i.payload)==null?void 0:g.message:(h=i==null?void 0:i.error)==null?void 0:h.message}),{placement:"top-end"})},l=async()=>{a(_(!1));const i=await a(qe(t==null?void 0:t.id));n(i,A,"Successfully Deleted","Something Went Wrong !!!"),await a(M())};return s.jsx(oe,{isOpen:e,type:"danger",title:"Delete City",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this City? All record related to this City will be deleted as well. This action cannot be undone."})})},We=B().shape({stateId:B().required("State is required"),cityName:me().required("City is required")}),Se=x.forwardRef((a,e)=>{const t=S(),o=b(m=>m.crmCity.data.dialogMode),n=b(m=>m.crmCity.data.selectedCity),l=b(m=>m.crmCity.data.stateList),i=x.useMemo(()=>(console.log({stateList:l}),l.map(d=>({label:d.stateName,value:d.id}))),[l]),p=()=>{t(E(!1))},u=async(m,d,y,g,h)=>{var T,V,G;const D={cityName:d.cityName,stateId:d.stateId.value},f=await g(m==="Add"?W(D):Re({id:y==null?void 0:y.id,updatedData:D}));let c="",r="",C="danger";(T=f==null?void 0:f.payload)!=null&&T.success?(c="Successfully Added",r=(V=f==null?void 0:f.payload)==null?void 0:V.message,C="success"):(c="Something went wrong !!!",r=(G=f==null?void 0:f.error)==null?void 0:G.message),h.push(s.jsx(R,{title:c,type:C,duration:2500,children:r}),{placement:"top-end"}),g(E(!1)),await g(M())};return console.log({selectedCity:n}),s.jsx(re,{innerRef:e,initialValues:{cityName:o==="Edit"?n==null?void 0:n.cityName:"",stateId:o==="Edit"?i.find(m=>m.value===(n==null?void 0:n.stateId)):""},validationSchema:We,onSubmit:async(m,{setSubmitting:d})=>{console.log({values:m}),o==="Add"?await u("Add",m,null,t,A):await u("Edit",m,n,t,A),d(!1)},children:({touched:m,errors:d,values:y,setFieldValue:g})=>s.jsxs(ce,{children:[s.jsxs(se,{children:[s.jsx(q,{label:"State",invalid:d.stateId&&m.stateId,errorMessage:d.stateId,children:s.jsx($,{type:"text",autoComplete:"off",name:"stateId",placeholder:"State",options:i,component:Te,prefix:s.jsx(P,{className:"text-xl"}),onChange:h=>{g("stateId",h)}})}),s.jsx(q,{label:"City",invalid:d.cityName&&m.cityName,errorMessage:d.cityName,children:s.jsx($,{type:"text",autoComplete:"off",name:"cityName",placeholder:"City",component:O,prefix:s.jsx(P,{className:"text-xl"})})})]}),s.jsx(le,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:p,children:"Cancel"}),s.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(de,{}),children:"Save"})]})})]})})});Se.displayName="CityForm";const _e=()=>{const a=S(),e=b(c=>c.crmCity.data.loading),t=b(c=>c.crmCity.data.displayedCityList),o=F("roles","canModify"),n=F("roles","canDelete"),{pageIndex:l,pageSize:i,sort:p,query:u,total:m}=b(c=>c.crmCity.data.tableData),d=x.useMemo(()=>({pageIndex:l,pageSize:i,sort:p,query:u,total:m}),[l,i,p,u,m]),y=({row:c})=>{const r=S();pe();const C=()=>{r(U(c)),r(E(!0)),r(Ce("Edit"))},T=async()=>{await r(U(c)),r(_(!0))};return s.jsxs("div",{className:"flex justify-start text-base",children:[s.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:C,children:s.jsx(ge,{})}),s.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:T,children:s.jsx(ye,{})})]})},g=x.useMemo(()=>[{header:"Action",id:"action",cell:r=>s.jsx(y,{row:r.row.original})},{header:"City",accessorKey:"cityName",cell:r=>r.row.original.cityName},{header:"State",accessorKey:"state",cell:r=>{var C;return(C=r.row.original.state)==null?void 0:C.stateName}}],[o,n]),h=c=>{console.log({page:c});const r=N(d);r.pageIndex=c,a(z(r))},D=c=>{const r=N(d);r.pageSize=Number(c),r.pageIndex=1,a(z(r))},f=c=>{const r=N(d);r.sort=c,a(z(r))};return s.jsx("div",{children:s.jsx(ne,{columns:g,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:h,onSelectChange:D,onSort:f})})},be=x.forwardRef((a,e)=>{const{onInputChange:t}=a,o=he(n,500);function n(i){t==null||t(i)}const l=i=>{o(i.target.value)};return s.jsx(O,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(ue,{className:"text-lg"}),onChange:l})});be.displayName="SubCategoryTableSearch";const He=()=>{const a=S(),e=x.useRef(null),t=b(l=>l.crmCity.data.tableData),o=l=>{const i=N(t);i.query=l,i.pageIndex=1,typeof l=="string"&&l.length>1&&n(i),typeof l=="string"&&l.length===0&&n(i)},n=l=>{a(l?z(l):M())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(be,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(I,{size:"sm",onClick:()=>{a(E(!0)),a(Ce("Add"))},children:"Add New"})})]})};ee("crmCity",Pe);const Ke=()=>{const a=S(),e=b(n=>n.crmCity.data.isDialogOpen),t=b(n=>n.crmCity.data.dialogMode),o=()=>{a(E(!1))};return x.useEffect(()=>{a(M()),a(fe())},[]),s.jsxs(s.Fragment,{children:[s.jsx(He,{}),s.jsx(_e,{}),s.jsxs(ae,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," City"]}),s.jsx(Se,{})]}),s.jsx(Be,{})]})},Ve="crmState",H=w("crmState/data/createState",async a=>{var e,t;try{return(await Ee(a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),v=w("crmState/data/getState",async()=>{var a,e;try{return(await ie()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),Ge=w("crmState/data/editState",async({id:a,updatedData:e})=>{var t,o;try{return(await Le(a,e)).data}catch(n){throw new Error((o=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:o.message)}}),Ue=w("crmLeads/data/deleteState",async a=>{var e,t;try{return await ze(a)}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),Je={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Qe={loading:!1,tableData:Je,displayedStateList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedState:null,deleteConfirmation:!1},De=X({name:`${Ve}/state`,initialState:Qe,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.categoryList.filter(o=>o.stateName.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=t.length,a.displayedStateList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedState=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(H.fulfilled,(e,t)=>{e.loading=!1}).addCase(H.pending,e=>{e.loading=!0}).addCase(v.fulfilled,(e,t)=>{var o,n,l,i,p;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(o=t.payload.data)==null?void 0:o.length,e.displayedStateList=t==null?void 0:t.payload.data.slice(((n=e==null?void 0:e.tableData)==null?void 0:n.pageSize)*(((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex)-1),((i=e==null?void 0:e.tableData)==null?void 0:i.pageSize)*((p=e==null?void 0:e.tableData)==null?void 0:p.pageIndex))}).addCase(v.pending,e=>{e.loading=!0})}}),{setTableData:k,setDialogToggle:L,setDialogMode:je,setSelectedState:J,toggleDeleteConfirmation:K}=De.actions,Xe=De.reducer,Ye=Y({data:Xe}),j=Z,we=x.forwardRef((a,e)=>{const{onInputChange:t}=a,o=he(n,500);function n(i){t==null||t(i)}const l=i=>{o(i.target.value)};return s.jsx(O,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:s.jsx(ue,{className:"text-lg"}),onChange:l})});we.displayName="StateTableSearch";const Ze=()=>{const a=S(),e=x.useRef(null),t=j(l=>l.crmState.data.tableData),o=l=>{const i=N(t);i.query=l,i.pageIndex=1,typeof l=="string"&&l.length>1&&n(i),typeof l=="string"&&l.length===0&&n(i)},n=l=>{a(l?k(l):v())};return s.jsxs("div",{className:"md:flex items-center justify-between",children:[s.jsx("div",{className:"md:flex items-center gap-4",children:s.jsx(we,{ref:e,onInputChange:o})}),s.jsx("div",{className:"mb-4",children:s.jsx(I,{size:"sm",onClick:()=>{a(L(!0)),a(je("Add"))},children:"Add New"})})]})},et=()=>{const a=S(),e=j(c=>c.crmState.data.loading),t=F("roles","canModify"),o=F("roles","canDelete"),{pageIndex:n,pageSize:l,sort:i,query:p,total:u}=j(c=>c.crmState.data.tableData),m=j(c=>c.crmState.data.displayedStateList);console.log({data:m});const d=({row:c})=>{const r=S();pe();const C=()=>{r(J(c)),r(L(!0)),r(je("Edit"))},T=async()=>{await r(J(c)),r(K(!0))};return s.jsxs("div",{className:"flex justify-start text-base",children:[s.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:C,children:s.jsx(ge,{})}),s.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:T,children:s.jsx(ye,{})})]})},y=x.useMemo(()=>({pageIndex:n,pageSize:l,sort:i,query:p,total:u}),[n,l,i,p,u]),g=x.useMemo(()=>[{header:"Action",id:"action",cell:r=>s.jsx(d,{row:r.row.original})},{header:"State",accessorKey:"name",cell:r=>r.row.original.stateName}],[t,o]),h=c=>{const r=N(y);r.pageIndex=c,a(k(r))},D=c=>{const r=N(y);r.pageSize=Number(c),r.pageIndex=1,a(k(r))},f=c=>{const r=N(y);r.sort=c,a(k(r))};return s.jsx("div",{children:s.jsx(ne,{columns:g,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:y.total,pageIndex:y.pageIndex,pageSize:y.pageSize},onPaginationChange:h,onSelectChange:D,onSort:f})})},tt=B().shape({stateName:me().required("State name is required")}),Ne=x.forwardRef((a,e)=>{const t=S(),o=j(p=>p.crmState.data.dialogMode),n=j(p=>p.crmState.data.selectedState),l=()=>{t(L(!1))};console.log(o);const i=async(p,u,m,d,y)=>{var c,r,C;const g=await d(p==="Add"?H(u):Ge({id:m==null?void 0:m.id,updatedData:u}));let h="",D="",f="danger";(c=g==null?void 0:g.payload)!=null&&c.success?(h="Successfully Added",D=(r=g==null?void 0:g.payload)==null?void 0:r.message,f="success"):(h="Something went wrong !!!",D=(C=g==null?void 0:g.error)==null?void 0:C.message),y.push(s.jsx(R,{title:h,type:f,duration:2500,children:D}),{placement:"top-end"}),d(L(!1)),await d(v())};return s.jsx(re,{innerRef:e,initialValues:{stateName:o==="Edit"?n==null?void 0:n.stateName:""},validationSchema:tt,onSubmit:async(p,{setSubmitting:u})=>{o==="Add"?await i("Add",p,null,t,A):await i("Edit",p,n,t,A),u(!1)},children:({touched:p,errors:u,values:m,setFieldValue:d})=>s.jsxs(ce,{children:[s.jsx(se,{children:s.jsx(q,{label:"State Name",invalid:u.stateName&&p.stateName,errorMessage:u.stateName,children:s.jsx($,{type:"text",autoComplete:"off",name:"stateName",placeholder:"State Name",component:O,prefix:s.jsx(P,{className:"text-xl"})})})}),s.jsx(le,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:s.jsxs("div",{className:"md:flex items-center",children:[s.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:l,children:"Cancel"}),s.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:s.jsx(de,{}),children:"Save"})]})})]})})});Ne.displayName="StateForm";const at=()=>{const a=S(),e=j(i=>i.crmState.data.deleteConfirmation),t=j(i=>i.crmState.data.selectedState),o=()=>{a(K(!1))},n=(i,p,u,m)=>{var y,g,h;const d=(y=i==null?void 0:i.payload)==null?void 0:y.success;p.push(s.jsx(R,{title:d?u:m,type:d?"success":"danger",duration:2500,children:d?(g=i==null?void 0:i.payload)==null?void 0:g.message:(h=i==null?void 0:i.error)==null?void 0:h.message}),{placement:"top-end"})},l=async()=>{a(K(!1));const i=await a(Ue(t==null?void 0:t.id));n(i,A,"Successfully Deleted","Something Went Wrong !!!"),await a(v())};return s.jsx(oe,{isOpen:e,type:"danger",title:"Delete State",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:l,children:s.jsx("p",{children:"Are you sure you want to delete this State? All record related to this State will be deleted as well. This action cannot be undone."})})};ee("crmState",Ye);const st=()=>{const a=S(),e=j(n=>n.crmState.data.isDialogOpen),t=j(n=>n.crmState.data.dialogMode),o=()=>{a(L(!1))};return x.useEffect(()=>{a(v())},[]),s.jsxs(s.Fragment,{children:[s.jsx(Ze,{}),s.jsx(et,{}),s.jsxs(ae,{isOpen:e,onClose:o,children:[s.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," State"]}),s.jsx(Ne,{})]}),s.jsx(at,{})]})},{TabNav:ot,TabList:it}=te,Q={state:{label:"State",path:"state"},city:{label:"City",path:"city"}},nt=()=>{const[a,e]=x.useState("state"),t=o=>{e(o)};return s.jsxs(s.Fragment,{children:[s.jsx(te,{value:a,variant:"pill",onChange:o=>t(o),children:s.jsx(it,{children:Object.keys(Q).map(o=>s.jsx(ot,{value:o,children:Q[o].label},o))})}),s.jsx("div",{className:"py-4",children:s.jsxs(x.Suspense,{fallback:s.jsx(s.Fragment,{children:"loading..."}),children:[a==="state"&&s.jsx(st,{}),a==="city"&&s.jsx(Ke,{})]})})]})},ra=nt;export{ra as S};
