import{al as v,am as me,an as de,ao as pe,a as w,r as u,j as t,ah as ue,aq as ye}from"./index-59d5b448.js";import{A as xe}from"./AdaptableCard-e9819ea9.js";import{D as Ce}from"./DataTable-75ddba9e.js";import{u as X}from"./useThemeClass-95bae207.js";import{c as P}from"./cloneDeep-aed446a8.js";import{ao as ge,C as he,ap as fe,aq as je,ar as we,o as be,p as Y,q as Ne}from"./CrmService-a82a4f3a.js";import{B as $}from"./Button-5fdc8ae1.js";import{D as De}from"./Drawer-d20ab55b.js";import{T as Z}from"./index-1356c0b5.js";import{a as h,F as Se}from"./FormItem-f6244853.js";import{u as ve,b as f,F as Te,a as Le}from"./formik.esm-b68e401a.js";import{c as Oe,a as b,e as Fe}from"./index.esm-d716c1df.js";import{t as A,N as R}from"./toast-4fb7070f.js";import{I as j}from"./Input-231e09c8.js";import{A as ee}from"./index-a89362ce.js";import{U as Ie}from"./Upload-4e96c616.js";import{L as ke,Q as qe,R as Ae,S as _,b as Re,d as Me,o as Ee,C as ze}from"./index.esm-000f222a.js";import{b as Pe}from"./index.esm-949617b0.js";import{c as Ke,b as Ue,T as U}from"./index.esm-57280789.js";import{D as Ve,A as $e}from"./AdditionalTag-defb36e6.js";/* empty css              */import{a as He,c as Be}from"./tagAndCategory-0975d9d9.js";import{T as We}from"./TagsList-f721f71b.js";import{T as S}from"./TextTruncate-f64f0cbd.js";import{u as H}from"./checkEditUpdate-547842ef.js";import{C as Ge}from"./ConfirmDialog-615c6369.js";import{d as _e}from"./debounce-973c358d.js";import{S as Qe,c as Je}from"./Select-ee1aec02.js";import{B as te}from"./Badge-e03d5da2.js";import{M as Xe}from"./MediaSkeleton-03b98fcc.js";import{C as Ye}from"./Card-5d1a5a32.js";import{N as Ze}from"./react-number-format.es-dc028596.js";import"./index-c7139f0d.js";import"./index.esm-ae78bccf.js";import"./Pagination-5e980512.js";import"./index-eb5fd987.js";import"./_baseIsEqual-ddd229ac.js";import"./_MapCache-e54d9323.js";import"./Views-64d17177.js";import"./get-7830c53c.js";import"./toString-7b1fdeb1.js";import"./Skeleton-d921a7f4.js";import"./index-ddf97715.js";import"./_getPrototype-f444968c.js";import"./index-72795205.js";import"./CloseButton-d1491053.js";import"./useControllableState-51fc22de.js";import"./index-0f07cea4.js";import"./useTimeout-8dc1031d.js";import"./StatusIcon-9fe83ab5.js";import"./chainedFunction-070f832c.js";import"./isNil-4ce6fc45.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-408dc3d5.js";import"./usePopper-6c82c939.js";import"./index.esm-5522ae29.js";import"./index.esm-ee61d82c.js";import"./Alert-93591860.js";import"./RangeCalendar-2cc8a304.js";import"./index-1e02d165.js";import"./useRootClose-c6fcb0f3.js";import"./TimeInput-5b439447.js";import"./useUniqueId-f1811c55.js";import"./useDidUpdate-1b514583.js";import"./Dialog-a750e519.js";import"./index-61ff5eee.js";import"./useUncertainRef-c82b9981.js";import"./index-f7021d30.js";import"./index-b2ad62b7.js";import"./index-eaede97f.js";import"./Progress-a64810cd.js";import"./index-1d5c9077.js";import"./ScrollBar-cea6b53e.js";import"./index-7440612f.js";import"./index-af92aa08.js";import"./mapCloneElement-34a4b3d4.js";import"./Switcher-a1c19d2c.js";import"./Tag-edd7fd18.js";import"./index-8aead059.js";import"./index-5637e944.js";import"./slicedToArray-cd867625.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-1d5803e7.js";import"./floating-ui.dom-bef9cea3.js";const et="crmCompany",M=v("crmCompany/data/getCompanyStatistic",async()=>(await ge()).data),O=v("crmCustomers/data/getCustomers",async()=>(await he()).data),tt=v("crmCompany/data/editCompany",async({companyId:s,updatedData:a})=>{var e,o;try{return(await fe(s,a)).data}catch(i){throw new Error((o=(e=i==null?void 0:i.response)==null?void 0:e.data)==null?void 0:o.message)}}),at=v("crmCompany/data/deleteCompany",async s=>{var a,e;try{return await je(s)}catch(o){throw new Error((e=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:e.message)}}),st=v("crmCompany/data/createCompany",async s=>{var a,e;try{return(await we(s)).data}catch(o){throw new Error((e=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:e.message)}}),ot=v("crmCompany/data/module",async()=>(await be()).data),rt=v("tag-category",async({id:s})=>(await Y(s)).data);v("crmCompany/data/fetchTag",async({id:s})=>(await Y(s)).data);v("crmCompany/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:o})=>(await Ne({colorName:a,tagName:e,masterId:s,tagCategoryId:o})).data);const nt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},it={status:""},ct={loading:!1,statisticLoading:!1,companyList:[],displayedCompanyList:[],statisticData:{},tableData:nt,filterData:it,drawerOpen:!1,selectedCompany:{},deleteConfirmation:!1},ae=me({name:`${et}/state`,initialState:ct,reducers:{setTableData:(s,a)=>{s.tableData=a.payload,s.displayedCompanyList=s.companyList.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setCompanyList:(s,a)=>{s.companyList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedCompany:(s,a)=>{s.selectedCompany=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(O.fulfilled,(a,e)=>{a.companyList=e.payload.data,a.tableData.total=e.payload.data.length,a.displayedCompanyList=e.payload.data.slice(0,10),a.loading=!1}).addCase(O.pending,a=>{a.loading=!0}).addCase(M.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(M.pending,a=>{a.statisticLoading=!0})}}),{setTableData:V,setCompanyList:rs,setFilterData:se,setSelectedCompany:G,setDrawerOpen:oe,setDrawerClose:B,toggleDeleteConfirmation:W}=ae.actions,lt=ae.reducer,mt=de({data:lt}),y=pe,dt=s=>{const{touched:a,errors:e}=s,o=w(),[i,n]=u.useState(!1),[m,x]=u.useState(!1),[c,C]=u.useState([]),[E,N]=u.useState([]),F=()=>{n(!i),x(!1)},[I,k]=u.useState("");u.useEffect(()=>{(async()=>{var L,K;try{const{payload:D}=await o(ot()),z=(L=D==null?void 0:D.data)==null?void 0:L.find(q=>(q==null?void 0:q.moduleName)==="company");if(k(z.id),z){const{payload:q}=await o(rt({id:(K=z==null?void 0:z.id)==null?void 0:K.toString()})),ce=He(q.data),le=Be(q.data);N(le),C(ce)}}catch(D){console.error("Error fetching module data:",D)}})()},[o]);const T=y(g=>g.crmCompany.data.selectedCompany),[d,r]=u.useState(T?T.tags||[]:[]),l=ve(),p=g=>{r(g);const L=[g.value];l.setFieldValue("tagId",L)};return t.jsxs(t.Fragment,{children:[t.jsx(h,{invalid:e.upload&&a.upload,errorMessage:e.upload,children:t.jsx(f,{name:"img",children:({field:g,form:L})=>{const K=g.value?{src:g.value}:{};return t.jsx("div",{className:"flex justify-center",children:t.jsx(Ie,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:D=>L.setFieldValue(g.name,URL.createObjectURL(D[0])),onFileRemove:D=>L.setFieldValue(g.name,URL.createObjectURL(D[0])),children:t.jsx(ee,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:100,shape:"circle",icon:t.jsx(ke,{}),...K})})})}})}),t.jsx(h,{label:"Company Name",invalid:e.companyName&&a.companyName,errorMessage:e.companyName,children:t.jsx(f,{type:"text",autoComplete:"off",name:"companyName",placeholder:"Company Name",component:j,prefix:t.jsx(qe,{className:"text-xl"})})}),t.jsx(h,{label:"Contact Number",invalid:e.phone&&a.phone,errorMessage:e.phone,children:t.jsx(f,{type:"text",autoComplete:"off",name:"phone",placeholder:"phone",component:j,prefix:t.jsx(Ae,{className:"text-xl"})})}),t.jsx(h,{label:"Website",invalid:e.website&&a.website,errorMessage:e.website,children:t.jsx(f,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:j,prefix:t.jsx(_,{className:"text-xl"})})}),t.jsx(h,{label:"Company Owner",invalid:e.companyOwner&&a.companyOwner,errorMessage:e.companyOwner,children:t.jsx(f,{type:"text",autoComplete:"off",name:"companyOwner",placeholder:"Company Owner",component:j,prefix:t.jsx(_,{className:"text-xl"})})}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(h,{label:"Tag",children:t.jsxs("div",{style:{position:"relative"},children:[t.jsx(f,{name:"Tag",component:Ve,options:c,placeholder:"Select a Tag",value:l.initialValues.tagName,onChange:p}),t.jsx(Ke,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{F(),x(!0)}})]})}),t.jsx($e,{isOpen:i,categoryList:E,moduleName:I,onOpenChange:g=>n(g)})]}),t.jsx(h,{label:"Description",invalid:e.description&&a.description,errorMessage:e.description,children:t.jsx(f,{type:"text",autoComplete:"off",name:"description",placeholder:"Description",component:j,prefix:t.jsx(Ue,{className:"text-xl"})})}),t.jsx(h,{label:"street",invalid:e.street&&a.street,errorMessage:e.street,children:t.jsx(f,{type:"text",autoComplete:"off",name:"street",placeholder:"Street",component:j,prefix:t.jsx(Pe,{className:"text-xl"})})}),t.jsx(h,{label:"City",invalid:e.city&&a.city,errorMessage:e.city,children:t.jsx(f,{type:"text",autoComplete:"off",name:"city",placeholder:"City",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"State",invalid:e.state&&a.state,errorMessage:e.state,children:t.jsx(f,{type:"text",autoComplete:"off",name:"state",placeholder:"State",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"Country",invalid:e.country&&a.country,errorMessage:e.country,children:t.jsx(f,{type:"text",autoComplete:"off",name:"country",placeholder:"Country",component:j,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx(h,{label:"Pin Code",invalid:e.pinCode&&a.pinCode,errorMessage:e.pinCode,children:t.jsx(f,{type:"text",autoComplete:"off",name:"pinCode",placeholder:"Pin Code",component:j,prefix:t.jsx(U,{className:"text-xl"})})})]})},pt=Oe().shape({companyName:b().required("Company Name is required"),phone:b().typeError("Phone Number must be a number").required("Phone Number is required").test("is-number","Company must be a number",s=>!isNaN(s)).test("is-ten-digits"," Company must be exactly 10 digits",s=>{if(s){const a=Number(s);return/^\d{10}$/.test(a.toString())}return!0}).test("is-not-more-than-ten-digits","Company must not exceed 10 digits",s=>s?Number(s).toString().length<=10:!0),website:b().required("Website Name is required"),companyOwner:b().required("Company owner is required"),description:b().required("Description Is Required"),street:b().required("Street is required"),city:b().required("City is required"),state:b().required("State is required"),country:b().required("Country is required"),pinCode:b().required("Pin Code is required").test("is-number","Pin Code must be a number",s=>/^\d+$/.test(s)).test("is-six-digits","Pin Code must be exactly 6 digits",s=>s&&s.length===6),tagId:Fe()}),{TabNav:ut,TabList:yt,TabContent:xt}=Z,re=u.forwardRef((s,a)=>{var n,m,x;const e=y(c=>c.crmCompany.data.selectedCompany),o=!!e.id,i=w();return t.jsx(Te,{innerRef:a,initialValues:{companyName:(e==null?void 0:e.companyName)||"",phone:(e==null?void 0:e.phone)||"",website:(e==null?void 0:e.website)||"",companyOwner:(e==null?void 0:e.companyOwner)||"",description:(e==null?void 0:e.description)||"",street:(e==null?void 0:e.street)||"",city:(e==null?void 0:e.city)||"",state:(e==null?void 0:e.state)||"",country:(e==null?void 0:e.country)||"",tagName:((m=(n=e==null?void 0:e.tags)==null?void 0:n[0])==null?void 0:m.tagName)||"",pinCode:(e==null?void 0:e.pinCode)||0,tagId:((x=e==null?void 0:e.tags)==null?void 0:x.map(c=>c.id))||[],colorName:e!=null&&e.tags&&(e==null?void 0:e.tags.length)>0?e==null?void 0:e.tags[0].colorName:""},validationSchema:pt,onSubmit:async(c,{setSubmitting:C})=>{var I,k,T,d,r,l;const{colorName:E,tagName:N,...F}=c;if(o===!0){const p=await i(tt({companyId:(e==null?void 0:e.id)||"",updatedData:F}));(I=p==null?void 0:p.payload)!=null&&I.success?A.push(t.jsx(R,{title:"Successfully Added",type:"success",duration:2500,children:(k=p==null?void 0:p.payload)==null?void 0:k.message}),{placement:"top-end"}):A.push(t.jsx(R,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(T=p==null?void 0:p.error)==null?void 0:T.message}),{placement:"top-end"}),i(B()),await i(O()),await i(M())}else{const p=await i(st(F));(d=p==null?void 0:p.payload)!=null&&d.success?A.push(t.jsx(R,{title:"Successfully Added",type:"success",duration:2500,children:(r=p==null?void 0:p.payload)==null?void 0:r.message}),{placement:"top-end"}):A.push(t.jsx(R,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(l=p==null?void 0:p.error)==null?void 0:l.message}),{placement:"top-end"}),i(B()),await i(O()),await i(M())}C(!1)},children:({touched:c,errors:C})=>t.jsx(Le,{children:t.jsx(Se,{children:t.jsxs(Z,{defaultValue:"personalInfo",children:[t.jsx(yt,{children:t.jsx(ut,{value:"personalInfo",children:"Company Details"})}),t.jsx("div",{className:"p-6",children:t.jsx(xt,{value:"personalInfo",children:t.jsx(dt,{touched:c,errors:C})})})]})})})})});re.displayName="CompanyForm";const ne=u.forwardRef((s,a)=>{w();const e=y(i=>i.crmCompany.data.selectedCompany);y(i=>i.crmCompany.data.companyList);const o=async i=>{};return t.jsx(re,{ref:a,company:e,onFormSubmit:o})});ne.displayName="CompanyEditContent";const Ct=({onSaveClick:s,onCancel:a})=>t.jsxs("div",{className:"text-right w-full",children:[t.jsx($,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),t.jsx($,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),gt=()=>{const s=w(),a=y(n=>n.crmCompany.data.drawerOpen),e=()=>{s(B()),s(G({}))},o=u.useRef(null),i=()=>{var n,m;console.log("formSubmit function called",(n=o.current)==null?void 0:n.values),(m=o.current)==null||m.submitForm()};return t.jsx(De,{isOpen:a,closable:!1,bodyClass:"p-0",footer:t.jsx(Ct,{onCancel:e,onSaveClick:i}),onClose:e,onRequestClose:e,children:t.jsx(ne,{ref:o})})},ht=()=>{const s=w(),a=y(n=>n.crmCompany.data.deleteConfirmation),e=y(n=>n.crmCompany.data.selectedCompany),o=()=>{s(W(!1))},i=async()=>{var m,x,c;s(W(!1));const n=await s(at(e.id));(m=n==null?void 0:n.payload)!=null&&m.success?A.push(t.jsx(R,{title:"Successfuly Deleted",type:"success",duration:2500,children:(x=n==null?void 0:n.payload)==null?void 0:x.message}),{placement:"top-end"}):A.push(t.jsx(R,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=n==null?void 0:n.error)==null?void 0:c.message}),{placement:"top-end"}),await s(O()),await s(M())};return t.jsx(Ge,{isOpen:a,type:"danger",title:"Delete Company",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:t.jsx("p",{children:"Are you sure you want to delete this Company? All record related to this company will be deleted as well. This action cannot be undone."})})},ft=({row:s})=>{const{textTheme:a}=X(),e=w(),o=()=>{e(oe()),e(G(s))};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},jt=({row:s})=>{const{textTheme:a}=X(),e=w(),o=async()=>{await e(G(s)),e(W(!0))};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},wt=()=>{const s=w(),a=y(d=>d.crmCompany.data.displayedCompanyList),e=H("company","canModify"),o=H("company","canDelete"),i=y(d=>d.crmCompany.data.loading);y(d=>d.crmCompany.data.filterData);const{pageIndex:n,pageSize:m,sort:x,query:c,total:C}=y(d=>d.crmCompany.data.tableData),E=u.useCallback(()=>{s(O())},[s]);u.useEffect(()=>{E()},[E]);const N=u.useMemo(()=>({pageIndex:n,pageSize:m,sort:x,query:c,total:C}),[n,m,x,c,C]),F=u.useMemo(()=>{const d=[{header:"Company Name",accessorKey:"companyName",cell:r=>{const l=r.row.original.companyName;return t.jsx(S,{text:l,maxLength:20})}},{header:"Contact Number",accessorKey:"phone",cell:r=>r.row.original.phone},{header:"Website",accessorKey:"website",cell:r=>{const l=r.row.original.website;return t.jsx(S,{text:l,maxLength:20})}},{header:"Company Owner",accessorKey:"companyOwner",cell:r=>{const l=r.row.original.companyOwner;return t.jsx(S,{text:l,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const l=r.row.original.tags||[];return t.jsx(We,{tags:l})}},{header:"Description",accessorKey:"description",cell:r=>{const l=r.row.original.description;return t.jsx(S,{text:l,maxLength:20})}},{header:"Street",accessorKey:"street",cell:r=>{const l=r.row.original.street;return t.jsx(S,{text:l,maxLength:20})}},{header:"City",accessorKey:"city",cell:r=>{const l=r.row.original.city;return t.jsx(S,{text:l,maxLength:20})}},{header:"State",accessorKey:"state",cell:r=>{const l=r.row.original.state;return t.jsx(S,{text:l,maxLength:20})}},{header:"Country",accessorKey:"country",cell:r=>{const l=r.row.original.country;return t.jsx(S,{text:l,maxLength:20})}},{header:"Pincode",accessorKey:"pinCode",cell:r=>{const l=r.row.original.pinCode;return t.jsx(S,{text:l,maxLength:20})}}];return o&&d.unshift({header:"Delete",id:"action",cell:r=>t.jsx(jt,{row:r.row.original})}),e&&d.unshift({header:"Edit",id:"action",cell:r=>t.jsx(ft,{row:r.row.original})}),d},[e,o]),I=d=>{const r=P(N);r.pageIndex=d,s(V(r))},k=d=>{const r=P(N);r.pageSize=Number(d),r.pageIndex=1,s(V(r))},T=d=>{const r=P(N);r.sort=d,s(V(r))};return t.jsxs("div",{children:[t.jsx(Ce,{columns:F,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:i,pagingData:{total:N.total,pageIndex:N.pageIndex,pageSize:N.pageSize},onPaginationChange:I,onSelectChange:k,onSort:T}),t.jsx(gt,{}),t.jsx(ht,{})]})},ie=u.forwardRef((s,a)=>{const{onInputChange:e}=s,o=_e(i,500);function i(m){e==null||e(m)}const n=m=>{o(m.target.value)};return t.jsx(j,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:t.jsx(Re,{className:"text-lg"}),onChange:n})});ie.displayName="CompanyTableSearch";const{Control:bt}=Je,Q=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],Nt=({innerProps:s,label:a,data:e,isSelected:o})=>t.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(te,{innerClass:e.color}),t.jsx("span",{children:a})]}),o&&t.jsx(Me,{className:"text-emerald-500 text-xl"})]}),Dt=({children:s,...a})=>{const e=a.getValue()[0];return t.jsxs(bt,{...a,children:[e&&t.jsx(te,{className:"ltr:ml-4 rtl:mr-4",innerClass:e.color}),s]})},St=()=>{const s=w(),{status:a}=y(o=>o.crmCompany.data.filterData),e=o=>{s(se({status:o==null?void 0:o.value}))};return t.jsx(Qe,{options:Q,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:Nt,Control:Dt},value:Q.filter(o=>o.value===a),onChange:e})},vt=()=>{const s=w(),a=u.useRef(null),e=y(c=>c.crmCompany.data.tableData),o=H("company","canCreate"),i=c=>{const C=P(e);C.query=c,C.pageIndex=1,typeof c=="string"&&c.length>1&&n(C),typeof c=="string"&&c.length===0&&n(C)},n=c=>{s(V(c)),s(O())},m=()=>{const c=P(e);c.query="",a.current&&(a.current.value=""),s(se({status:""})),n(c)},x=()=>{s(oe())};return t.jsxs("div",{className:"md:flex items-center justify-between",children:[t.jsxs("div",{className:"md:flex items-center gap-4",children:[t.jsx(ie,{ref:a,onInputChange:i}),t.jsx(St,{})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx($,{size:"sm",className:"me-2",onClick:m,children:"Clear All"}),o&&t.jsx($,{size:"sm",onClick:x,children:"Add New"})]})]})},J=s=>{const{icon:a,avatarClass:e,label:o,value:i,loading:n}=s,m=55;return t.jsx(Ye,{bordered:!0,children:t.jsx(ue,{loading:n,customLoader:t.jsx(Xe,{avatarProps:{className:"rounded",width:m,height:m}}),children:t.jsx("div",{className:"flex justify-between items-center",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(ee,{className:e,size:m,icon:a}),t.jsxs("div",{children:[t.jsx("span",{children:o}),t.jsx("h3",{children:t.jsx(Ze,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},Tt=()=>{const s=w(),a=y(o=>o.crmCompany.data.statisticData),e=y(o=>o.crmCompany.data.statisticLoading);return u.useEffect(()=>{s(M())},[]),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[t.jsx(J,{icon:t.jsx(Ee,{}),avatarClass:"!bg-indigo-600",label:"Total Companies",value:a.totalCompany,growthRate:a==null?void 0:a.totalCompany,loading:e}),t.jsx(J,{icon:t.jsx(ze,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Companies",value:a==null?void 0:a.newCompany,growthRate:a==null?void 0:a.newCompany,loading:e})]})};ye("crmCompany",mt);const Lt=()=>t.jsxs(t.Fragment,{children:[t.jsx(Tt,{}),t.jsxs(xe,{bodyClass:"h-full",children:[t.jsx(vt,{}),t.jsx(wt,{})]})]}),ns=Lt;export{ns as default};
