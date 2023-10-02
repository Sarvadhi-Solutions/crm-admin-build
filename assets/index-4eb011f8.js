import{am as v,an as me,ao as de,ap as pe,a as b,r as u,j as t,ai as ue,ar as ye}from"./index-a9c93031.js";import{A as xe}from"./AdaptableCard-cf701c87.js";import{D as Ce}from"./DataTable-a2373ee3.js";import{u as Y}from"./useThemeClass-297687ff.js";import{c as P}from"./cloneDeep-fd7929db.js";import{W as ge,v as he,X as fe,Y as je,Z as be,j as we,k as Z,l as Ne}from"./CrmService-dbb90e89.js";import{B as $}from"./Button-47bf58f7.js";import{D as De}from"./Drawer-0a33fe5a.js";import{T as Q}from"./index-cbfb4a92.js";import{a as h,F as Se}from"./FormItem-493c2060.js";import{u as ve,b as f,F as Te,a as Le}from"./formik.esm-4acf00de.js";import{c as Oe,a as w,b as Ae}from"./index.esm-e5cd3259.js";import{t as q,N as R}from"./toast-53c71514.js";import{I as j}from"./Input-b2bc5b3e.js";import{A as ee}from"./index-7cf9b27e.js";import{U as Fe}from"./Upload-1dc8ae7e.js";import{J as ke,a6 as Ie,ab as qe,a7 as _,b as Re,d as Me,m as Ee,A as ze}from"./index.esm-37c3564c.js";import{A as Pe}from"./index.esm-a6162b89.js";import{T as Ke,a as Ue,b as U}from"./index.esm-6aa89ade.js";import{D as Ve,t as $e,c as He}from"./tagAndCategory-5a004efc.js";/* empty css              */import{A as We}from"./AdditionalTag-3601d97f.js";import{T as Be}from"./TagsList-fa5ab452.js";import{T as S}from"./TextTruncate-5e1b0616.js";import{u as H}from"./checkEditUpdate-5e081b43.js";import{C as Ge}from"./ConfirmDialog-9363383a.js";import{d as _e}from"./debounce-da8ee35d.js";import{S as Je,c as Xe}from"./Select-90b6020d.js";import{B as te}from"./Badge-c9ada007.js";import{M as Ye}from"./MediaSkeleton-d0490e4a.js";import{C as Ze}from"./Card-6b8166bd.js";import{N as Qe}from"./react-number-format.es-59b8879d.js";import"./index-10dbbba6.js";import"./index.esm-556fe943.js";import"./Pagination-acf3b7e4.js";import"./index-f4f34168.js";import"./_Uint8Array-64cf78a6.js";import"./_MapCache-83d2f18f.js";import"./Views-0c5423a6.js";import"./_baseIsEqual-5cfefaa3.js";import"./get-0157bd52.js";import"./toString-60f65c59.js";import"./TableRowSkeleton-dd368555.js";import"./Skeleton-772a6f71.js";import"./index-b8d32cfc.js";import"./_getPrototype-71e29649.js";import"./context-6d5d8fe5.js";import"./index-0569d7d3.js";import"./CloseButton-ef1c868b.js";import"./useControllableState-0bc3ffd1.js";import"./index-0b68a97f.js";import"./useTimeout-3babeb43.js";import"./StatusIcon-b453f46b.js";import"./chainedFunction-070f832c.js";import"./isNil-f7d4f3b6.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index.esm-c8841de1.js";import"./Alert-5526c2c4.js";import"./Calendar-163be9bf.js";import"./index-998e4641.js";import"./useRootClose-6d54f280.js";import"./RangeCalendar-6b212005.js";import"./TimeInput-e8071d5e.js";import"./useUniqueId-b18fc966.js";import"./useDidUpdate-578d5c1c.js";import"./Dialog-5ef978d2.js";import"./index-137f6e4f.js";import"./useUncertainRef-762e062e.js";import"./index-4104c7c5.js";import"./index-34c577ad.js";import"./index-9de29f90.js";import"./Progress-065bbc0b.js";import"./index-803b614c.js";import"./ScrollBar-ad1c4e83.js";import"./index-34112b0a.js";import"./index-cfb9e54d.js";import"./mapCloneElement-d91bf257.js";import"./Switcher-631d0666.js";import"./Tag-624637b7.js";import"./index-2600a77d.js";import"./index-4aad4bac.js";import"./slicedToArray-be8619ee.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-ccb51e40.js";import"./floating-ui.dom-bef9cea3.js";const et="crmCompany",M=v("crmCompany/data/getCompanyStatistic",async()=>(await ge()).data),O=v("crmCustomers/data/getCustomers",async()=>(await he()).data),tt=v("crmCompany/data/editCompany",async({companyId:s,updatedData:a})=>{var e,o;try{return(await fe(s,a)).data}catch(i){throw new Error((o=(e=i==null?void 0:i.response)==null?void 0:e.data)==null?void 0:o.message)}}),at=v("crmCompany/data/deleteCompany",async s=>{var a,e;try{return await je(s)}catch(o){throw new Error((e=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:e.message)}}),st=v("crmCompany/data/createCompany",async s=>{var a,e;try{return(await be(s)).data}catch(o){throw new Error((e=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:e.message)}}),ot=v("crmCompany/data/module",async()=>(await we()).data),rt=v("tag-category",async({id:s})=>(await Z(s)).data);v("crmCompany/data/fetchTag",async({id:s})=>(await Z(s)).data);v("crmCompany/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:o})=>(await Ne({colorName:a,tagName:e,masterId:s,tagCategoryId:o})).data);const nt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},it={status:""},ct={loading:!1,statisticLoading:!1,companyList:[],displayedCompanyList:[],statisticData:{},tableData:nt,filterData:it,drawerOpen:!1,selectedCompany:{},deleteConfirmation:!1},ae=me({name:`${et}/state`,initialState:ct,reducers:{setTableData:(s,a)=>{s.tableData=a.payload,s.displayedCompanyList=s.companyList.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setCompanyList:(s,a)=>{s.companyList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedCompany:(s,a)=>{s.selectedCompany=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(O.fulfilled,(a,e)=>{a.companyList=e.payload.data,a.tableData.total=e.payload.data.length,a.displayedCompanyList=e.payload.data.slice(0,10),a.loading=!1}).addCase(O.pending,a=>{a.loading=!0}).addCase(M.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(M.pending,a=>{a.statisticLoading=!0})}}),{setTableData:V,setCompanyList:ds,setFilterData:se,setSelectedCompany:G,setDrawerOpen:oe,setDrawerClose:W,toggleDeleteConfirmation:B}=ae.actions,lt=ae.reducer,mt=de({data:lt}),y=pe,dt=s=>{const{touched:a,errors:e}=s,o=b(),[i,n]=u.useState(!1),[m,x]=u.useState(!1),[c,C]=u.useState([]),[E,N]=u.useState([]),A=()=>{n(!i),x(!1)},[F,k]=u.useState("");u.useEffect(()=>{(async()=>{var L,K;try{const{payload:D}=await o(ot()),z=(L=D==null?void 0:D.data)==null?void 0:L.find(I=>(I==null?void 0:I.moduleName)==="company");if(k(z.id),z){const{payload:I}=await o(rt({id:(K=z==null?void 0:z.id)==null?void 0:K.toString()})),ce=$e(I.data),le=He(I.data);N(le),C(ce)}}catch(D){console.error("Error fetching module data:",D)}})()},[o]);const T=y(g=>g.crmCompany.data.selectedCompany),[d,r]=u.useState(T?T.tags||[]:[]),l=ve(),p=g=>{r(g);const L=[g.value];l.setFieldValue("tagId",L)};return t.jsxs(t.Fragment,{children:[t.jsx(h,{invalid:e.upload&&a.upload,errorMessage:e.upload,children:t.jsx(f,{name:"img",children:({field:g,form:L})=>{const K=g.value?{src:g.value}:{};return t.jsx("div",{className:"flex justify-center",children:t.jsx(Fe,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:D=>L.setFieldValue(g.name,URL.createObjectURL(D[0])),onFileRemove:D=>L.setFieldValue(g.name,URL.createObjectURL(D[0])),children:t.jsx(ee,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:100,shape:"circle",icon:t.jsx(ke,{}),...K})})})}})}),t.jsx(h,{label:"Company Name",invalid:e.companyName&&a.companyName,errorMessage:e.companyName,children:t.jsx(f,{type:"text",autoComplete:"off",name:"companyName",placeholder:"Company Name",component:j,prefix:t.jsx(Ie,{className:"text-xl"})})}),t.jsx(h,{label:"Contact Number",invalid:e.phone&&a.phone,errorMessage:e.phone,children:t.jsx(f,{type:"text",autoComplete:"off",name:"phone",placeholder:"phone",component:j,prefix:t.jsx(qe,{className:"text-xl"})})}),t.jsx(h,{label:"Website",invalid:e.website&&a.website,errorMessage:e.website,children:t.jsx(f,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:j,prefix:t.jsx(_,{className:"text-xl"})})}),t.jsx(h,{label:"Company Owner",invalid:e.companyOwner&&a.companyOwner,errorMessage:e.companyOwner,children:t.jsx(f,{type:"text",autoComplete:"off",name:"companyOwner",placeholder:"Company Owner",component:j,prefix:t.jsx(_,{className:"text-xl"})})}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(h,{label:"Tag",children:t.jsxs("div",{style:{position:"relative"},children:[t.jsx(f,{name:"Tag",component:Ve,options:c,placeholder:"Select a Tag",value:l.initialValues.tagName,onChange:p}),t.jsx(Ke,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{A(),x(!0)}})]})}),t.jsx(We,{isOpen:i,categoryList:E,moduleName:F,onOpenChange:g=>n(g)})]}),t.jsx(h,{label:"Description",invalid:e.description&&a.description,errorMessage:e.description,children:t.jsx(f,{type:"text",autoComplete:"off",name:"description",placeholder:"Description",component:j,prefix:t.jsx(Ue,{className:"text-xl"})})}),t.jsx(h,{label:"street",invalid:e.street&&a.street,errorMessage:e.street,children:t.jsx(f,{type:"text",autoComplete:"off",name:"street",placeholder:"Street",component:j,prefix:t.jsx(Pe,{className:"text-xl"})})}),t.jsx(h,{label:"City",invalid:e.city&&a.city,errorMessage:e.city,children:t.jsx(f,{type:"text",autoComplete:"off",name:"city",placeholder:"City",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"State",invalid:e.state&&a.state,errorMessage:e.state,children:t.jsx(f,{type:"text",autoComplete:"off",name:"state",placeholder:"State",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"Country",invalid:e.country&&a.country,errorMessage:e.country,children:t.jsx(f,{type:"text",autoComplete:"off",name:"country",placeholder:"Country",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"Pin Code",invalid:e.pinCode&&a.pinCode,errorMessage:e.pinCode,children:t.jsx(f,{type:"text",autoComplete:"off",name:"pinCode",placeholder:"Pin Code",component:j,prefix:t.jsx(U,{className:"text-xl"})})})]})},pt=Oe().shape({companyName:w().required("Company Name is required"),phone:w().typeError("Phone Number must be a number").required("Phone Number is required").test("is-number","Company must be a number",s=>!isNaN(s)).test("is-ten-digits"," Company must be exactly 10 digits",s=>{if(s){const a=Number(s);return/^\d{10}$/.test(a.toString())}return!0}).test("is-not-more-than-ten-digits","Company must not exceed 10 digits",s=>s?Number(s).toString().length<=10:!0),website:w().required("Website Name is required"),companyOwner:w().required("Company owner is required"),description:w().required("Description Is Required"),street:w().required("Street is required"),city:w().required("City is required"),state:w().required("State is required"),country:w().required("Country is required"),pinCode:w().required("Pin Code is required").test("is-number","Pin Code must be a number",s=>/^\d+$/.test(s)).test("is-six-digits","Pin Code must be exactly 6 digits",s=>s&&s.length===6),tagId:Ae()}),{TabNav:ut,TabList:yt,TabContent:xt}=Q,re=u.forwardRef((s,a)=>{var n,m,x;const e=y(c=>c.crmCompany.data.selectedCompany),o=!!e.id,i=b();return t.jsx(Te,{innerRef:a,initialValues:{companyName:(e==null?void 0:e.companyName)||"",phone:(e==null?void 0:e.phone)||"",website:(e==null?void 0:e.website)||"",companyOwner:(e==null?void 0:e.companyOwner)||"",description:(e==null?void 0:e.description)||"",street:(e==null?void 0:e.street)||"",city:(e==null?void 0:e.city)||"",state:(e==null?void 0:e.state)||"",country:(e==null?void 0:e.country)||"",tagName:((m=(n=e==null?void 0:e.tags)==null?void 0:n[0])==null?void 0:m.tagName)||"",pinCode:(e==null?void 0:e.pinCode)||0,tagId:((x=e==null?void 0:e.tags)==null?void 0:x.map(c=>c.id))||[],colorName:e!=null&&e.tags&&(e==null?void 0:e.tags.length)>0?e==null?void 0:e.tags[0].colorName:""},validationSchema:pt,onSubmit:async(c,{setSubmitting:C})=>{var F,k,T,d,r,l;const{colorName:E,tagName:N,...A}=c;if(o===!0){const p=await i(tt({companyId:(e==null?void 0:e.id)||"",updatedData:A}));(F=p==null?void 0:p.payload)!=null&&F.success?q.push(t.jsx(R,{title:"Successfully Added",type:"success",duration:2500,children:(k=p==null?void 0:p.payload)==null?void 0:k.message}),{placement:"top-end"}):q.push(t.jsx(R,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(T=p==null?void 0:p.error)==null?void 0:T.message}),{placement:"top-end"}),i(W()),await i(O()),await i(M())}else{const p=await i(st(A));(d=p==null?void 0:p.payload)!=null&&d.success?q.push(t.jsx(R,{title:"Successfully Added",type:"success",duration:2500,children:(r=p==null?void 0:p.payload)==null?void 0:r.message}),{placement:"top-end"}):q.push(t.jsx(R,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(l=p==null?void 0:p.error)==null?void 0:l.message}),{placement:"top-end"}),i(W()),await i(O()),await i(M())}C(!1)},children:({touched:c,errors:C})=>t.jsx(Le,{children:t.jsx(Se,{children:t.jsxs(Q,{defaultValue:"personalInfo",children:[t.jsx(yt,{children:t.jsx(ut,{value:"personalInfo",children:"Company Details"})}),t.jsx("div",{className:"p-6",children:t.jsx(xt,{value:"personalInfo",children:t.jsx(dt,{touched:c,errors:C})})})]})})})})});re.displayName="CompanyForm";const ne=u.forwardRef((s,a)=>{b();const e=y(i=>i.crmCompany.data.selectedCompany);y(i=>i.crmCompany.data.companyList);const o=async i=>{};return t.jsx(re,{ref:a,company:e,onFormSubmit:o})});ne.displayName="CompanyEditContent";const Ct=({onSaveClick:s,onCancel:a})=>t.jsxs("div",{className:"text-right w-full",children:[t.jsx($,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),t.jsx($,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),gt=()=>{const s=b(),a=y(n=>n.crmCompany.data.drawerOpen),e=()=>{s(W()),s(G({}))},o=u.useRef(null),i=()=>{var n,m;console.log("formSubmit function called",(n=o.current)==null?void 0:n.values),(m=o.current)==null||m.submitForm()};return t.jsx(De,{isOpen:a,closable:!1,bodyClass:"p-0",footer:t.jsx(Ct,{onCancel:e,onSaveClick:i}),onClose:e,onRequestClose:e,children:t.jsx(ne,{ref:o})})},ht=()=>{const s=b(),a=y(n=>n.crmCompany.data.deleteConfirmation),e=y(n=>n.crmCompany.data.selectedCompany),o=()=>{s(B(!1))},i=async()=>{var m,x,c;s(B(!1));const n=await s(at(e.id));(m=n==null?void 0:n.payload)!=null&&m.success?q.push(t.jsx(R,{title:"Successfuly Deleted",type:"success",duration:2500,children:(x=n==null?void 0:n.payload)==null?void 0:x.message}),{placement:"top-end"}):q.push(t.jsx(R,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=n==null?void 0:n.error)==null?void 0:c.message}),{placement:"top-end"}),await s(O()),await s(M())};return t.jsx(Ge,{isOpen:a,type:"danger",title:"Delete Company",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:t.jsx("p",{children:"Are you sure you want to delete this Company? All record related to this company will be deleted as well. This action cannot be undone."})})},ft=({row:s})=>{const{textTheme:a}=Y(),e=b(),o=()=>{e(oe()),e(G(s))};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},jt=({row:s})=>{const{textTheme:a}=Y(),e=b(),o=async()=>{await e(G(s)),e(B(!0))};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},bt=()=>{const s=b(),a=y(d=>d.crmCompany.data.displayedCompanyList),e=H("company","canModify"),o=H("company","canDelete"),i=y(d=>d.crmCompany.data.loading);y(d=>d.crmCompany.data.filterData);const{pageIndex:n,pageSize:m,sort:x,query:c,total:C}=y(d=>d.crmCompany.data.tableData),E=u.useCallback(()=>{s(O())},[s]);u.useEffect(()=>{E()},[E]);const N=u.useMemo(()=>({pageIndex:n,pageSize:m,sort:x,query:c,total:C}),[n,m,x,c,C]),A=u.useMemo(()=>{const d=[{header:"Company Name",accessorKey:"companyName",cell:r=>{const l=r.row.original.companyName;return t.jsx(S,{text:l,maxLength:20})}},{header:"Contact Number",accessorKey:"phone",cell:r=>r.row.original.phone},{header:"Website",accessorKey:"website",cell:r=>{const l=r.row.original.website;return t.jsx(S,{text:l,maxLength:20})}},{header:"Company Owner",accessorKey:"companyOwner",cell:r=>{const l=r.row.original.companyOwner;return t.jsx(S,{text:l,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const l=r.row.original.tags||[];return t.jsx(Be,{tags:l})}},{header:"Description",accessorKey:"description",cell:r=>{const l=r.row.original.description;return t.jsx(S,{text:l,maxLength:20})}},{header:"Street",accessorKey:"street",cell:r=>{const l=r.row.original.street;return t.jsx(S,{text:l,maxLength:20})}},{header:"City",accessorKey:"city",cell:r=>{const l=r.row.original.city;return t.jsx(S,{text:l,maxLength:20})}},{header:"State",accessorKey:"state",cell:r=>{const l=r.row.original.state;return t.jsx(S,{text:l,maxLength:20})}},{header:"Country",accessorKey:"country",cell:r=>{const l=r.row.original.country;return t.jsx(S,{text:l,maxLength:20})}},{header:"Pincode",accessorKey:"pinCode",cell:r=>{const l=r.row.original.pinCode;return t.jsx(S,{text:l,maxLength:20})}}];return o&&d.unshift({header:"Delete",id:"action",cell:r=>t.jsx(jt,{row:r.row.original})}),e&&d.unshift({header:"Edit",id:"action",cell:r=>t.jsx(ft,{row:r.row.original})}),d},[e,o]),F=d=>{const r=P(N);r.pageIndex=d,s(V(r))},k=d=>{const r=P(N);r.pageSize=Number(d),r.pageIndex=1,s(V(r))},T=d=>{const r=P(N);r.sort=d,s(V(r))};return t.jsxs("div",{children:[t.jsx(Ce,{columns:A,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:i,pagingData:{total:N.total,pageIndex:N.pageIndex,pageSize:N.pageSize},onPaginationChange:F,onSelectChange:k,onSort:T}),t.jsx(gt,{}),t.jsx(ht,{})]})},ie=u.forwardRef((s,a)=>{const{onInputChange:e}=s,o=_e(i,500);function i(m){e==null||e(m)}const n=m=>{o(m.target.value)};return t.jsx(j,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:t.jsx(Re,{className:"text-lg"}),onChange:n})});ie.displayName="CompanyTableSearch";const{Control:wt}=Xe,J=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],Nt=({innerProps:s,label:a,data:e,isSelected:o})=>t.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(te,{innerClass:e.color}),t.jsx("span",{children:a})]}),o&&t.jsx(Me,{className:"text-emerald-500 text-xl"})]}),Dt=({children:s,...a})=>{const e=a.getValue()[0];return t.jsxs(wt,{...a,children:[e&&t.jsx(te,{className:"ltr:ml-4 rtl:mr-4",innerClass:e.color}),s]})},St=()=>{const s=b(),{status:a}=y(o=>o.crmCompany.data.filterData),e=o=>{s(se({status:o==null?void 0:o.value}))};return t.jsx(Je,{options:J,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:Nt,Control:Dt},value:J.filter(o=>o.value===a),onChange:e})},vt=()=>{const s=b(),a=u.useRef(null),e=y(c=>c.crmCompany.data.tableData),o=H("company","canCreate"),i=c=>{const C=P(e);C.query=c,C.pageIndex=1,typeof c=="string"&&c.length>1&&n(C),typeof c=="string"&&c.length===0&&n(C)},n=c=>{s(V(c)),s(O())},m=()=>{const c=P(e);c.query="",a.current&&(a.current.value=""),s(se({status:""})),n(c)},x=()=>{s(oe())};return t.jsxs("div",{className:"md:flex items-center justify-between",children:[t.jsxs("div",{className:"md:flex items-center gap-4",children:[t.jsx(ie,{ref:a,onInputChange:i}),t.jsx(St,{})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx($,{size:"sm",className:"me-2",onClick:m,children:"Clear All"}),o&&t.jsx($,{size:"sm",onClick:x,children:"Add New"})]})]})},X=s=>{const{icon:a,avatarClass:e,label:o,value:i,loading:n}=s,m=55;return t.jsx(Ze,{bordered:!0,children:t.jsx(ue,{loading:n,customLoader:t.jsx(Ye,{avatarProps:{className:"rounded",width:m,height:m}}),children:t.jsx("div",{className:"flex justify-between items-center",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(ee,{className:e,size:m,icon:a}),t.jsxs("div",{children:[t.jsx("span",{children:o}),t.jsx("h3",{children:t.jsx(Qe,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},Tt=()=>{const s=b(),a=y(o=>o.crmCompany.data.statisticData),e=y(o=>o.crmCompany.data.statisticLoading);return u.useEffect(()=>{s(M())},[]),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[t.jsx(X,{icon:t.jsx(Ee,{}),avatarClass:"!bg-indigo-600",label:"Total Companies",value:a.totalCompany,growthRate:a==null?void 0:a.totalCompany,loading:e}),t.jsx(X,{icon:t.jsx(ze,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Companies",value:a==null?void 0:a.newCompany,growthRate:a==null?void 0:a.newCompany,loading:e})]})};ye("crmCompany",mt);const Lt=()=>t.jsxs(t.Fragment,{children:[t.jsx(Tt,{}),t.jsxs(xe,{bodyClass:"h-full",children:[t.jsx(vt,{}),t.jsx(bt,{})]})]}),ps=Lt;export{ps as default};
