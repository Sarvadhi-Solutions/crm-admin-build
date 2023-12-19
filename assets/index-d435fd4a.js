import{am as b,an as ne,ao as ie,ap as le,a as f,r as m,j as e,ai as ce,ar as me}from"./index-5b083722.js";import{A as de}from"./AdaptableCard-96bc8e59.js";import{D as pe}from"./DataTable-3a401118.js";import{u as ue,v as xe,w as Ce,x as he,y as ge,m as ye,n as G,o as fe}from"./CrmService-98616c23.js";import{u as W}from"./useThemeClass-a72d650b.js";import{B as R}from"./Button-f1066bd7.js";import{D as je}from"./Drawer-a551faf1.js";import{T as _}from"./index-e60138cc.js";import{u as be,c as d,d as p,F as we,a as Ne,b as ve}from"./formik.esm-ca71b2a3.js";import{c as De,a as y,b as Se}from"./index.esm-7fc76d40.js";import{I as u}from"./Input-48a3f72c.js";import{A as J}from"./index-4c1fa5e5.js";import{U as ke}from"./Upload-3bc63f23.js";import{I as Te,a6 as Ie,aa as Fe,ab as $,z as Le,B as Oe,d as Ae,a7 as Re,r as qe}from"./index.esm-577c3d7b.js";import{A as Me}from"./index.esm-9459b8e1.js";import{a as Ee,T as Be,b as O}from"./index.esm-48411fb0.js";import{D as Pe,A as ze,t as Ue,j as He}from"./AdditionalTag-2c0a87d5.js";/* empty css              */import{B as $e,a as Ke,b as Ve,c as Ge}from"./index.esm-2966f74b.js";import{c as F}from"./cloneDeep-966052d2.js";import{d as We}from"./debounce-f64d09e7.js";import{S as _e,c as Je}from"./Select-356b8b96.js";import{B as Q}from"./Badge-3cabc902.js";import{C as Qe}from"./Card-90f8ec69.js";import{M as Xe}from"./MediaSkeleton-1dbcebc2.js";import{N as Ye}from"./react-number-format.es-918493e5.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./Pagination-a6fcbfa4.js";import"./index-f0eb9061.js";import"./_Uint8Array-3568a2c8.js";import"./_MapCache-79b01de9.js";import"./Views-2896b481.js";import"./_baseIsEqual-ce991c11.js";import"./get-752f7dea.js";import"./toString-981652f6.js";import"./TableRowSkeleton-4018ceb2.js";import"./Skeleton-cb576037.js";import"./index-c70c47e8.js";import"./context-6fe9373e.js";import"./index-f8748c0d.js";import"./CloseButton-d9cd3bbc.js";import"./useControllableState-60589411.js";import"./index-3898d2cc.js";import"./isNil-416a1774.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-28b84125.js";import"./toast-6a0b7cb5.js";import"./useTimeout-e6d0b381.js";import"./StatusIcon-e0b5cde3.js";import"./chainedFunction-070f832c.js";import"./Alert-02445582.js";import"./Calendar-ebf2d3b6.js";import"./index-15ca79f1.js";import"./useRootClose-bfd7b4dd.js";import"./RangeCalendar-baaf2850.js";import"./TimeInput-069dac51.js";import"./useUniqueId-7aeed284.js";import"./useDidUpdate-f47f5e27.js";import"./Dialog-5dd7ece1.js";import"./index-0e58897c.js";import"./useUncertainRef-a9591e46.js";import"./index-0fd37ad7.js";import"./index-dd3cb046.js";import"./index-b09fd56f.js";import"./Progress-f8bc0fe1.js";import"./index-6d78d8ac.js";import"./ScrollBar-4be37f27.js";import"./index-b665f1fe.js";import"./index-9a196290.js";import"./mapCloneElement-61eaeae6.js";import"./Switcher-93fd8b6f.js";import"./Tag-ae955d4e.js";import"./index-562c2113.js";import"./index-d72af9ba.js";import"./_getPrototype-6d07ecf6.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";const Ze="crmCompany",U=b("crmCompany/data/getCompanyStatistic",async()=>(await ue()).data),k=b("crmCustomers/data/getCustomers",async()=>(await xe()).data),et=b("crmCompany/data/editCompany",async({companyId:o,updatedData:a})=>(await Ce(o,a)).data),tt=b("crmCompany/data/deleteCompany",async o=>await he(o)),at=b("crmCompany/data/createCompany",async o=>(console.log(o,"++++"),(await ge(o)).data)),ot=b("crmCompany/data/module",async()=>{const o=await ye();return console.log(o.data,"response"),o.data}),st=b("tag-category",async({id:o})=>{const a=await G(o);return console.log(a.data,"Getting Data"),a.data});b("crmCompany/data/fetchTag",async({id:o})=>(await G(o)).data);b("crmCompany/data/createTag",async({masterId:o,colorName:a,tagName:t,tagCategoryId:r})=>(await fe({colorName:a,tagName:t,masterId:o,tagCategoryId:r})).data);const rt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},nt={status:""},it={loading:!1,statisticLoading:!1,companyList:[],statisticData:{},tableData:rt,filterData:nt,drawerOpen:!1,selectedCompany:{}},X=ne({name:`${Ze}/state`,initialState:it,reducers:{setTableData:(o,a)=>{o.tableData=a.payload},setCompanyList:(o,a)=>{o.companyList=a.payload},setFilterData:(o,a)=>{o.filterData=a.payload},setSelectedCompany:(o,a)=>{o.selectedCompany=a.payload},setDrawerOpen:o=>{o.drawerOpen=!0},setDrawerClose:o=>{o.drawerOpen=!1}},extraReducers:o=>{o.addCase(k.fulfilled,(a,t)=>{a.companyList=t.payload.data,a.loading=!1}).addCase(k.pending,a=>{a.loading=!0}).addCase(U.fulfilled,(a,t)=>{a.statisticData=t.payload,a.statisticLoading=!1}).addCase(U.pending,a=>{a.statisticLoading=!0})}}),{setTableData:A,setCompanyList:eo,setFilterData:Y,setSelectedCompany:Z,setDrawerOpen:ee,setDrawerClose:H}=X.actions,lt=X.reducer,ct=ie({data:lt}),C=le,mt=o=>{const{touched:a,errors:t}=o,r=f(),[i,l]=m.useState(!1),[n,c]=m.useState(!1),[h,w]=m.useState([]),[N,q]=m.useState([]),M=()=>{l(!i),c(!1)},[E,B]=m.useState("");m.useEffect(()=>{(async()=>{var v,L;try{const{payload:j}=await r(ot()),I=(v=j==null?void 0:j.data)==null?void 0:v.find(S=>(S==null?void 0:S.moduleName)==="company");if(B(I.id),I){const{payload:S}=await r(st({id:(L=I==null?void 0:I.id)==null?void 0:L.toString()})),se=Ue(S.data),re=He(S.data);q(re),w(se)}}catch(j){console.error("Error fetching module data:",j)}})()},[r]);const s=C(x=>x.crmCompany.data.selectedCompany),[g,P]=m.useState(s?s.tags||[]:[]),T=be(),D=x=>{P(x);const v=[x.value];T.setFieldValue("tagId",v)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{invalid:t.upload&&a.upload,errorMessage:t.upload,children:e.jsx(p,{name:"img",children:({field:x,form:v})=>{const L=x.value?{src:x.value}:{};return e.jsx("div",{className:"flex justify-center",children:e.jsx(ke,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:j=>v.setFieldValue(x.name,URL.createObjectURL(j[0])),onFileRemove:j=>v.setFieldValue(x.name,URL.createObjectURL(j[0])),children:e.jsx(J,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:100,shape:"circle",icon:e.jsx(Te,{}),...L})})})}})}),e.jsx(d,{label:"Company Name",invalid:t.companyName&&a.companyName,errorMessage:t.companyName,children:e.jsx(p,{type:"text",autoComplete:"off",name:"companyName",placeholder:"Company Name",component:u,prefix:e.jsx(Ie,{className:"text-xl"})})}),e.jsx(d,{label:"Contact Number",invalid:t.phone&&a.phone,errorMessage:t.phone,children:e.jsx(p,{type:"text",autoComplete:"off",name:"phone",placeholder:"phone",component:u,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(d,{label:"Website",invalid:t.website&&a.website,errorMessage:t.website,children:e.jsx(p,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:u,prefix:e.jsx($,{className:"text-xl"})})}),e.jsx(d,{label:"Company Owner",invalid:t.companyOwner&&a.companyOwner,errorMessage:t.companyOwner,children:e.jsx(p,{type:"text",autoComplete:"off",name:"companyOwner",placeholder:"Company Owner",component:u,prefix:e.jsx($,{className:"text-xl"})})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(d,{label:"TagId",children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(p,{name:"tagId",component:Pe,options:h,placeholder:"Select a Tag",onChange:D}),e.jsx(Ee,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{M(),c(!0)}})]})}),e.jsx(ze,{isOpen:i,categoryList:N,moduleName:E,onOpenChange:x=>l(x)})]}),e.jsx(d,{label:"Description",invalid:t.description&&a.description,errorMessage:t.description,children:e.jsx(p,{type:"text",autoComplete:"off",name:"description",placeholder:"Description",component:u,prefix:e.jsx(Be,{className:"text-xl"})})}),e.jsx(d,{label:"street",invalid:t.street&&a.street,errorMessage:t.street,children:e.jsx(p,{type:"text",autoComplete:"off",name:"street",placeholder:"Street",component:u,prefix:e.jsx(Me,{className:"text-xl"})})}),e.jsx(d,{label:"City",invalid:t.city&&a.city,errorMessage:t.city,children:e.jsx(p,{type:"text",autoComplete:"off",name:"city",placeholder:"City",component:u,prefix:e.jsx(O,{className:"text-xl"})})}),e.jsx(d,{label:"State",invalid:t.state&&a.state,errorMessage:t.state,children:e.jsx(p,{type:"text",autoComplete:"off",name:"state",placeholder:"State",component:u,prefix:e.jsx(O,{className:"text-xl"})})}),e.jsx(d,{label:"Country",invalid:t.country&&a.country,errorMessage:t.country,children:e.jsx(p,{type:"text",autoComplete:"off",name:"country",placeholder:"Country",component:u,prefix:e.jsx(O,{className:"text-xl"})})}),e.jsx(d,{label:"Pin Code",invalid:t.pinCode&&a.pinCode,errorMessage:t.pinCode,children:e.jsx(p,{type:"text",autoComplete:"off",name:"pinCode",placeholder:"Pin Code",component:u,prefix:e.jsx(O,{className:"text-xl"})})})]})},dt=o=>{const{touched:a,errors:t}=o;return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Facebook link",invalid:t.facebook&&a.facebook,errorMessage:t.facebook,children:e.jsx(p,{type:"text",autoComplete:"off",name:"facebook",placeholder:"URL",component:u,prefix:e.jsx($e,{className:"text-xl text-[#1773ea]"})})}),e.jsx(d,{label:"Twitter link",invalid:t.twitter&&a.twitter,errorMessage:t.twitter,children:e.jsx(p,{type:"text",autoComplete:"off",name:"twitter",placeholder:"URL",component:u,prefix:e.jsx(Ke,{className:"text-xl text-[#1da1f3]"})})}),e.jsx(d,{label:"Pinterest link",invalid:t.pinterest&&a.pinterest,errorMessage:t.pinterest,children:e.jsx(p,{type:"text",autoComplete:"off",name:"pinterest",placeholder:"URL",component:u,prefix:e.jsx(Ve,{className:"text-xl text-[#df0018]"})})}),e.jsx(d,{label:"LinkedIn link",invalid:t.linkedIn&&a.linkedIn,errorMessage:t.linkedIn,children:e.jsx(p,{type:"text",autoComplete:"off",name:"linkedIn",placeholder:"URL",component:u,prefix:e.jsx(Ge,{className:"text-xl text-[#0077b5]"})})})]})},pt=De().shape({companyName:y().required("Name is required"),phone:y().typeError("Company must be a number").required("Company is required"),website:y().required("First Name is required"),companyOwner:y().required("Last Name is required"),description:y().required("Description Is Required"),street:y().required("Street is required"),city:y().required("City is required"),state:y().required("State is required"),country:y().required("Country is required"),pinCode:y().required("Pin Code is required").test("is-number","Pin Code must be a number",o=>/^\d+$/.test(o)).test("is-six-digits","Pin Code must be exactly 6 digits",o=>o&&o.length===6),tagId:Se()}),{TabNav:ut,TabList:xt,TabContent:K}=_,te=m.forwardRef((o,a)=>{var l;const t=C(n=>n.crmCompany.data.selectedCompany),r=!!t.id;console.log(r,"Editing Done");const i=f();return e.jsx(we,{innerRef:a,initialValues:{companyName:(t==null?void 0:t.companyName)||"",phone:(t==null?void 0:t.phone)||"",website:(t==null?void 0:t.website)||"",companyOwner:(t==null?void 0:t.companyOwner)||"",description:(t==null?void 0:t.description)||"",street:(t==null?void 0:t.street)||"",city:(t==null?void 0:t.city)||"",state:(t==null?void 0:t.state)||"",country:(t==null?void 0:t.country)||"",pinCode:(t==null?void 0:t.pinCode)||0,tagId:((l=t==null?void 0:t.tags)==null?void 0:l.map(n=>n.id))||[],colorName:t!=null&&t.tags&&(t==null?void 0:t.tags.length)>0?t==null?void 0:t.tags[0].colorName:""},validationSchema:pt,onSubmit:async(n,{setSubmitting:c})=>{const{colorName:h,...w}=n;console.log(h),r===!0?(console.log(n,"Bhai testing kar"),await i(et({companyId:(t==null?void 0:t.id)||"",updatedData:w})),await i(k()),await i(H())):(console.log(w,"Maat Aa"),await i(at(w)),await i(k()),await i(H())),console.log("on submit called "),c(!1)},children:({touched:n,errors:c})=>e.jsx(Ne,{children:e.jsx(ve,{children:e.jsxs(_,{defaultValue:"personalInfo",children:[e.jsx(xt,{children:e.jsx(ut,{value:"personalInfo",children:"Custometer Detail"})}),e.jsxs("div",{className:"p-6",children:[e.jsx(K,{value:"personalInfo",children:e.jsx(mt,{touched:n,errors:c})}),e.jsx(K,{value:"social",children:e.jsx(dt,{touched:n,errors:c})})]})]})})})})});te.displayName="CompanyForm";const ae=m.forwardRef((o,a)=>{f();const t=C(l=>l.crmCompany.data.selectedCompany),r=C(l=>l.crmCompany.data.companyList);console.log(r,"Here Is The Data");const i=async l=>{try{console.log("Edited Content Change")}catch(n){console.error("Error updating company:",n)}};return e.jsx(te,{ref:a,company:t,onFormSubmit:i})});ae.displayName="CompanyEditContent";const Ct=({onSaveClick:o,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(R,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(R,{size:"sm",variant:"solid",onClick:o,children:"Save"})]}),ht=()=>{const o=f(),a=C(l=>l.crmCompany.data.drawerOpen),t=()=>{o(H()),o(Z({}))},r=m.useRef(null),i=()=>{var l,n;console.log("formSubmit function called",(l=r.current)==null?void 0:l.values),(n=r.current)==null||n.submitForm()};return e.jsx(je,{isOpen:a,closable:!1,bodyClass:"p-0",footer:e.jsx(Ct,{onCancel:t,onSaveClick:i}),onClose:t,onRequestClose:t,children:e.jsx(ae,{ref:r})})},gt=({row:o})=>{const{textTheme:a}=W(),t=f(),r=()=>{t(ee()),t(Z(o))};return e.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:r,children:"Edit"})},yt=({row:o})=>{const{textTheme:a}=W(),t=f(),r=()=>{console.log(o,"Bhai Agaya"),t(tt(o.id))};return e.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:r,children:"Delete"})},ft=()=>{const o=f(),a=C(s=>s.crmCompany.data.companyList),t=C(s=>s.crmCompany.data.loading),r=C(s=>s.crmCompany.data.filterData),{pageIndex:i,pageSize:l,sort:n,query:c,total:h}=C(s=>s.crmCompany.data.tableData),w=m.useCallback(()=>{o(k())},[o]);m.useEffect(()=>{w()},[w,i,l,n,r]);const N=m.useMemo(()=>({pageIndex:i,pageSize:l,sort:n,query:c,total:h}),[i,l,n,c,h]),q=m.useMemo(()=>[{header:"Company Name",accessorKey:"companyName",cell:s=>s.row.original.companyName,width:200},{header:"Contact Number",accessorKey:"phone",cell:s=>s.row.original.phone,width:200},{header:"Website",accessorKey:"website",cell:s=>s.row.original.website,width:200},{header:"Company Owner",accessorKey:"companyOwner",cell:s=>s.row.original.companyOwner,width:200},{header:"Tag Name",accessorKey:"tagName",width:200,cell:s=>{const P=(s.row.original.tags||[]).map(T=>{const D=T.colorName||"#000000",x={backgroundColor:`rgba(${parseInt(D.slice(1,3),16)}, ${parseInt(D.slice(3,5),16)}, ${parseInt(D.slice(5,7),16)}, 0.2)`,color:D,padding:"4px 8px",borderRadius:"4px",marginRight:"4px",marginBottom:"4px"};return e.jsx("div",{style:x,children:T.tagName},T.id)});return e.jsx("div",{children:P})}},{header:"Description",accessorKey:"description",cell:s=>s.row.original.description,width:200},{header:"Street",accessorKey:"street",cell:s=>s.row.original.street,width:200},{header:"City",accessorKey:"city",cell:s=>s.row.original.city,width:200},{header:"State",accessorKey:"state",cell:s=>s.row.original.state,width:200},{header:"Country",accessorKey:"country",cell:s=>s.row.original.country,width:200},{header:"Pincode",accessorKey:"pinCode",cell:s=>s.row.original.pinCode,width:200},{header:"Edit",id:"action",cell:s=>e.jsx(gt,{row:s.row.original})},{header:"Delete",id:"action",cell:s=>e.jsx(yt,{row:s.row.original})}],[]),M=s=>{const g=F(N);g.pageIndex=s,o(A(g))},E=s=>{const g=F(N);g.pageSize=Number(s),g.pageIndex=1,o(A(g))},B=s=>{const g=F(N);g.sort=s,o(A(g))};return e.jsxs("div",{children:[e.jsx(pe,{columns:q,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:N.total,pageIndex:N.pageIndex,pageSize:N.pageSize},onPaginationChange:M,onSelectChange:E,onSort:B}),e.jsx(ht,{})]})},oe=m.forwardRef((o,a)=>{const{onInputChange:t}=o,r=We(i,500);function i(n){t==null||t(n)}const l=n=>{r(n.target.value)};return e.jsx(u,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Le,{className:"text-lg"}),onChange:l})});oe.displayName="CompanyTableSearch";const{Control:jt}=Je,V=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],bt=({innerProps:o,label:a,data:t,isSelected:r})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...o,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{innerClass:t.color}),e.jsx("span",{children:a})]}),r&&e.jsx(Oe,{className:"text-emerald-500 text-xl"})]}),wt=({children:o,...a})=>{const t=a.getValue()[0];return e.jsxs(jt,{...a,children:[t&&e.jsx(Q,{className:"ltr:ml-4 rtl:mr-4",innerClass:t.color}),o]})},Nt=()=>{const o=f(),{status:a}=C(r=>r.crmCompany.data.filterData),t=r=>{o(Y({status:r==null?void 0:r.value}))};return e.jsx(_e,{options:V,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:bt,Control:wt},value:V.filter(r=>r.value===a),onChange:t})},vt=()=>{const o=f(),a=m.useRef(null),t=C(c=>c.crmCompany.data.tableData),r=c=>{const h=F(t);h.query=c,h.pageIndex=1,typeof c=="string"&&c.length>1&&i(h),typeof c=="string"&&c.length===0&&i(h)},i=c=>{o(A(c)),o(k())},l=()=>{const c=F(t);c.query="",a.current&&(a.current.value=""),o(Y({status:""})),i(c)},n=()=>{o(ee())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(oe,{ref:a,onInputChange:r}),e.jsx(Nt,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(R,{size:"sm",className:"me-2",onClick:l,children:"Clear All"}),e.jsx(R,{size:"sm",onClick:n,children:"Add New"})]})]})},z=o=>{const{icon:a,avatarClass:t,label:r,value:i,loading:l}=o,n=55;return e.jsx(Qe,{bordered:!0,children:e.jsx(ce,{loading:l,customLoader:e.jsx(Xe,{avatarProps:{className:"rounded",width:n,height:n}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(J,{className:t,size:n,icon:a}),e.jsxs("div",{children:[e.jsx("span",{children:r}),e.jsx("h3",{children:e.jsx(Ye,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},Dt=()=>{const o=f(),a=C(r=>r.crmCompany.data.statisticData);console.log(a.totalCompany,"Araha Hai Bhai");const t=C(r=>r.crmCompany.data.statisticLoading);return m.useEffect(()=>{o(U())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(z,{icon:e.jsx(Ae,{}),avatarClass:"!bg-indigo-600",label:"Total Company",value:a.totalCompany,growthRate:a==null?void 0:a.totalCompany,loading:t}),e.jsx(z,{icon:e.jsx(Re,{}),avatarClass:"!bg-blue-500",label:"Active Company",value:a.activeCompany,growthRate:a.activeCompany,loading:t}),e.jsx(z,{icon:e.jsx(qe,{}),avatarClass:"!bg-emerald-500",label:"New Company",value:a==null?void 0:a.newCompany,growthRate:a==null?void 0:a.newCompany,loading:t})]})};me("crmCompany",ct);const St=()=>e.jsxs(e.Fragment,{children:[e.jsx(Dt,{}),e.jsxs(de,{bodyClass:"h-full",children:[e.jsx(vt,{}),e.jsx(ft,{})]})]}),to=St;export{to as default};
