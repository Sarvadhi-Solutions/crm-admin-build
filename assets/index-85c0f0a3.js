import{am as y,an as re,ao as ne,ap as ie,a as j,r as u,j as e,ai as ce,ar as le}from"./index-6767ac81.js";import{A as de}from"./AdaptableCard-1cecc9da.js";import{D as me}from"./DataTable-7c33a6e6.js";import{p as pe,q as ue,r as xe,s as Ce,t as he,m as ge,n as K,o as fe}from"./CrmService-e70a4be4.js";import{u as V}from"./useThemeClass-a62e85dc.js";import{B as O}from"./Button-edcd26d9.js";import{D as je}from"./Drawer-95c21b15.js";import{T as G}from"./index-149a53e8.js";import{u as be,c as m,d as p,F as we,a as ye,b as Ne}from"./formik.esm-35003a33.js";import{c as ve,a as w,f as De,b as Se}from"./index.esm-a1939a1a.js";import{I as x}from"./Input-736c9e0d.js";import{A as _}from"./index-688b9e70.js";import{U as ke}from"./Upload-1c01a3b3.js";import{I as Te,a6 as Ie,aa as Fe,ab as U,z as Le,B as Oe,d as Ae,a7 as Re,r as qe}from"./index.esm-107f547f.js";import{A as Me}from"./index.esm-a61e2fe0.js";import{a as Ee,T as Pe,b as F}from"./index.esm-da94fd5f.js";import{D as Be,A as ze,t as Ue,j as $e}from"./AdditionalTag-8d9009b8.js";/* empty css              */import{u as W,f as He,a as Ke,e as Ve,g as Ge,s as E,c as _e}from"./index-767be9bf.js";import{B as We,a as Je,b as Qe,c as Xe}from"./index.esm-52ddd804.js";import{c as k}from"./cloneDeep-028f7085.js";import{d as Ye}from"./debounce-7fa991f6.js";import{S as Ze,c as et}from"./Select-3d321c37.js";import{B as J}from"./Badge-1f68c9c2.js";import{C as tt}from"./Card-da872ceb.js";import{M as at}from"./MediaSkeleton-4528ed7e.js";import{N as st}from"./react-number-format.es-3a1aae10.js";import"./index-d5eb49a4.js";import"./index.esm-ad20eb15.js";import"./Pagination-3af44538.js";import"./index-5c02b9f9.js";import"./_Uint8Array-81109713.js";import"./_MapCache-5db605d8.js";import"./Views-e5205a91.js";import"./_baseIsEqual-98c979d7.js";import"./get-582c28e3.js";import"./toString-5f976032.js";import"./TableRowSkeleton-6125f39f.js";import"./Skeleton-f6501194.js";import"./index-43da21b1.js";import"./context-cdfa92ed.js";import"./index-1bb56c96.js";import"./CloseButton-5ef937e0.js";import"./useControllableState-dba48cec.js";import"./index-fb02f18d.js";import"./isNil-1a1387e3.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-3da06225.js";import"./toast-33e99923.js";import"./useTimeout-395cc71e.js";import"./StatusIcon-33312305.js";import"./chainedFunction-070f832c.js";import"./Alert-c9b22c70.js";import"./Calendar-defcfa74.js";import"./index-6bf19af2.js";import"./useRootClose-6563c421.js";import"./RangeCalendar-2da4f4e1.js";import"./TimeInput-030e16c6.js";import"./useUniqueId-1387b982.js";import"./useDidUpdate-c5cefb65.js";import"./Dialog-b04dbbb3.js";import"./index-787c9736.js";import"./useUncertainRef-e1544d29.js";import"./index-9fee79d2.js";import"./index-5e02ae30.js";import"./index-375da5f6.js";import"./Progress-b13c43d8.js";import"./index-18c6d586.js";import"./ScrollBar-e8750282.js";import"./index-bf30d0ca.js";import"./index-8c6f1de1.js";import"./mapCloneElement-3589bfd8.js";import"./Switcher-becc3d78.js";import"./Tag-28e3c136.js";import"./index-d9614e75.js";import"./index-70261eaf.js";import"./_getPrototype-48c0ebaa.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";const ot="crmContact",B=y("crmContact/data/getContactStatistic",async()=>(await pe()).data),A=y("crmCustomers/data/getCustomers",async()=>(await ue()).data);y("crmContact/data/editContact",async({contactId:s,updatedData:a})=>(await xe(s,a)).data);const rt=y("crmContact/data/deleteContact",async s=>await Ce(s));y("crmContact/data/createContact",async s=>(await he(s)).data);y("crmContact/data/module",async()=>{const s=await ge();return console.log(s.data,"response"),s.data});y("tag-category",async({id:s})=>{const a=await K(s);return console.log(a.data,"Getting Data"),a.data});y("crmContact/data/fetchTag",async({id:s})=>(await K(s)).data);y("crmContact/data/createTag",async({masterId:s,colorName:a,tagName:t,tagCategoryId:o})=>(await fe({colorName:a,tagName:t,masterId:s,tagCategoryId:o})).data);const nt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},it={status:""},ct={loading:!1,statisticLoading:!1,contactList:[],statisticData:{},tableData:nt,filterData:it,drawerOpen:!1,selectedContact:{}},Q=re({name:`${ot}/state`,initialState:ct,reducers:{setTableData:(s,a)=>{s.tableData=a.payload},setContactList:(s,a)=>{s.contactList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedContact:(s,a)=>{s.selectedContact=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1}},extraReducers:s=>{s.addCase(A.fulfilled,(a,t)=>{a.contactList=t.payload.data,a.loading=!1}).addCase(A.pending,a=>{a.loading=!0}).addCase(B.fulfilled,(a,t)=>{a.statisticData=t.payload,a.statisticLoading=!1}).addCase(B.pending,a=>{a.statisticLoading=!0})}}),{setTableData:L,setContactList:ss,setFilterData:X,setSelectedContact:Y,setDrawerOpen:Z,setDrawerClose:lt}=Q.actions,dt=Q.reducer,mt=ne({data:dt}),f=ie,pt=s=>{const{touched:a,errors:t}=s,o=j(),[i,c]=u.useState(!1),[n,l]=u.useState(!1),[g,N]=u.useState([]),[v,R]=u.useState([]),q=()=>{c(!i),l(!1)};u.useEffect(()=>{(async()=>{var h,D;try{const{payload:b}=await o(He()),I=(h=b==null?void 0:b.data)==null?void 0:h.find(S=>(S==null?void 0:S.moduleName)==="company");if(I){const{payload:S}=await o(Ke({id:(D=I==null?void 0:I.id)==null?void 0:D.toString()})),se=Ue(S.data),oe=$e(S.data);R(oe),N(se)}}catch(b){console.error("Error fetching module data:",b)}})()},[o]);const T=W(d=>d.crmCompany.data.selectedCompany),[z,r]=u.useState(T?T.tags||[]:[]),C=be(),M=d=>{r(d);const h=[d.value];C.setFieldValue("tagId",h)};return e.jsxs(e.Fragment,{children:[e.jsx(m,{invalid:t.upload&&a.upload,errorMessage:t.upload,children:e.jsx(p,{name:"img",children:({field:d,form:h})=>{const D=d.value?{src:d.value}:{};return e.jsx("div",{className:"flex justify-center",children:e.jsx(ke,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:b=>h.setFieldValue(d.name,URL.createObjectURL(b[0])),onFileRemove:b=>h.setFieldValue(d.name,URL.createObjectURL(b[0])),children:e.jsx(_,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:100,shape:"circle",icon:e.jsx(Te,{}),...D})})})}})}),e.jsx(m,{label:"Company Name",invalid:t.companyName&&a.companyName,errorMessage:t.companyName,children:e.jsx(p,{type:"text",autoComplete:"off",name:"companyName",placeholder:"Company Name",component:x,prefix:e.jsx(Ie,{className:"text-xl"})})}),e.jsx(m,{label:"Contact Number",invalid:t.phone&&a.phone,errorMessage:t.phone,children:e.jsx(p,{type:"text",autoComplete:"off",name:"phone",placeholder:"Phone",component:x,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(m,{label:"Website",invalid:t.website&&a.website,errorMessage:t.website,children:e.jsx(p,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:x,prefix:e.jsx(U,{className:"text-xl"})})}),e.jsx(m,{label:"Company Owner",invalid:t.companyOwner&&a.companyOwner,errorMessage:t.companyOwner,children:e.jsx(p,{type:"text",autoComplete:"off",name:"companyOwner",placeholder:"Company Owner",component:x,prefix:e.jsx(U,{className:"text-xl"})})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(m,{label:"TagId",children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(p,{name:"tagId",component:Be,options:g,placeholder:"Select a Tag",onChange:M}),e.jsx(Ee,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{q(),l(!0)}})]})}),e.jsx(ze,{isOpen:i,categoryList:v,onOpenChange:d=>c(d)})]}),e.jsx(m,{label:"Description",invalid:t.description&&a.description,errorMessage:t.description,children:e.jsx(p,{type:"text",autoComplete:"off",name:"description",placeholder:"Description",component:x,prefix:e.jsx(Pe,{className:"text-xl"})})}),e.jsx(m,{label:"street",invalid:t.street&&a.street,errorMessage:t.street,children:e.jsx(p,{type:"text",autoComplete:"off",name:"street",placeholder:"Street",component:x,prefix:e.jsx(Me,{className:"text-xl"})})}),e.jsx(m,{label:"City",invalid:t.city&&a.city,errorMessage:t.city,children:e.jsx(p,{type:"text",autoComplete:"off",name:"city",placeholder:"City",component:x,prefix:e.jsx(F,{className:"text-xl"})})}),e.jsx(m,{label:"State",invalid:t.state&&a.state,errorMessage:t.state,children:e.jsx(p,{type:"text",autoComplete:"off",name:"state",placeholder:"State",component:x,prefix:e.jsx(F,{className:"text-xl"})})}),e.jsx(m,{label:"Country",invalid:t.country&&a.country,errorMessage:t.country,children:e.jsx(p,{type:"text",autoComplete:"off",name:"country",placeholder:"Country",component:x,prefix:e.jsx(F,{className:"text-xl"})})}),e.jsx(m,{label:"Pin Code",invalid:t.pinCode&&a.pinCode,errorMessage:t.pinCode,children:e.jsx(p,{type:"text",autoComplete:"off",name:"pinCode",placeholder:"Pin Code",component:x,prefix:e.jsx(F,{className:"text-xl"})})})]})},ut=s=>{const{touched:a,errors:t}=s;return e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"Facebook link",invalid:t.facebook&&a.facebook,errorMessage:t.facebook,children:e.jsx(p,{type:"text",autoComplete:"off",name:"facebook",placeholder:"URL",component:x,prefix:e.jsx(We,{className:"text-xl text-[#1773ea]"})})}),e.jsx(m,{label:"Twitter link",invalid:t.twitter&&a.twitter,errorMessage:t.twitter,children:e.jsx(p,{type:"text",autoComplete:"off",name:"twitter",placeholder:"URL",component:x,prefix:e.jsx(Je,{className:"text-xl text-[#1da1f3]"})})}),e.jsx(m,{label:"Pinterest link",invalid:t.pinterest&&a.pinterest,errorMessage:t.pinterest,children:e.jsx(p,{type:"text",autoComplete:"off",name:"pinterest",placeholder:"URL",component:x,prefix:e.jsx(Qe,{className:"text-xl text-[#df0018]"})})}),e.jsx(m,{label:"LinkedIn link",invalid:t.linkedIn&&a.linkedIn,errorMessage:t.linkedIn,children:e.jsx(p,{type:"text",autoComplete:"off",name:"linkedIn",placeholder:"URL",component:x,prefix:e.jsx(Xe,{className:"text-xl text-[#0077b5]"})})})]})},xt=ve().shape({companyName:w().required("Name is required"),phone:w().required("Phone Number Required"),website:w().required("First Name is required"),companyOwner:w().required("Last Name is required"),description:w().required("Description Is Required"),street:w().required("Street is required"),city:w().required("City is required"),state:w().required("State is required"),country:w().required("Country is required"),pinCode:De().required("Pin Code is required").test("is-number","Pin Code must be a number",s=>/^\d+$/.test(s)).test("is-six-digits","Pin Code must be exactly 6 digits",s=>s&&s.length===6),tagId:Se()}),{TabNav:Ct,TabList:ht,TabContent:$}=G,ee=u.forwardRef((s,a)=>{var c;const t=W(n=>n.crmCompany.data.selectedCompany),o=!!t.id;console.log(o,"Editing Done");const i=j();return e.jsx(we,{innerRef:a,initialValues:{companyName:(t==null?void 0:t.companyName)||"",phone:(t==null?void 0:t.phone)||"",website:(t==null?void 0:t.website)||"",companyOwner:(t==null?void 0:t.companyOwner)||"",description:(t==null?void 0:t.description)||"",street:(t==null?void 0:t.street)||"",city:(t==null?void 0:t.city)||"",state:(t==null?void 0:t.state)||"",country:(t==null?void 0:t.country)||"",pinCode:(t==null?void 0:t.pinCode)||0,tagId:((c=t==null?void 0:t.tags)==null?void 0:c.map(n=>n.id))||[],colorName:t!=null&&t.tags&&(t==null?void 0:t.tags.length)>0?t==null?void 0:t.tags[0].colorName:""},validationSchema:xt,onSubmit:async(n,{setSubmitting:l})=>{const{colorName:g,...N}=n;console.log(g),o===!0?(console.log(n,"Bhai testing kar"),await i(Ve({companyId:(t==null?void 0:t.id)||"",updatedData:N})),await i(Ge()),await i(E())):(console.log(N,"Maat Aa"),await i(_e(N)),await i(E()),await i(E())),console.log("on submit called "),l(!1)},children:({touched:n,errors:l})=>e.jsx(ye,{children:e.jsx(Ne,{children:e.jsxs(G,{defaultValue:"personalInfo",children:[e.jsx(ht,{children:e.jsx(Ct,{value:"personalInfo",children:"Custometer Detail"})}),e.jsxs("div",{className:"p-6",children:[e.jsx($,{value:"personalInfo",children:e.jsx(pt,{touched:n,errors:l})}),e.jsx($,{value:"social",children:e.jsx(ut,{touched:n,errors:l})})]})]})})})})});ee.displayName="CompanyForm";const te=u.forwardRef((s,a)=>{j();const t=f(c=>c.crmContact.data.selectedContact),o=f(c=>c.crmContact.data.contactList);console.log(o,"Here Is The Data");const i=async c=>{try{console.log("Edited Content Change")}catch(n){console.error("Error updating contact:",n)}};return e.jsx(ee,{ref:a,contact:t,onFormSubmit:i})});te.displayName="ContactEditContent";const gt=({onSaveClick:s,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(O,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(O,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),ft=()=>{const s=j(),a=f(c=>c.crmContact.data.drawerOpen),t=()=>{s(lt()),s(Y({}))},o=u.useRef(null),i=()=>{var c,n;console.log("formSubmit function called",(c=o.current)==null?void 0:c.values),(n=o.current)==null||n.submitForm()};return e.jsx(je,{isOpen:a,closable:!1,bodyClass:"p-0",footer:e.jsx(gt,{onCancel:t,onSaveClick:i}),onClose:t,onRequestClose:t,children:e.jsx(te,{ref:o})})},jt=({row:s})=>{const{textTheme:a}=V(),t=j(),o=()=>{t(Z()),t(Y(s))};return e.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},bt=({row:s})=>{const{textTheme:a}=V(),t=j(),o=()=>{console.log(s,"Bhai Agaya"),t(rt(s.id))};return e.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:o,children:"Delete"})},wt=()=>{const s=j(),a=f(r=>r.crmContact.data.contactList);console.log(a,"Araha hai bhai ");const t=f(r=>r.crmContact.data.loading),o=f(r=>r.crmContact.data.filterData),{pageIndex:i,pageSize:c,sort:n,query:l,total:g}=f(r=>r.crmContact.data.tableData),N=u.useCallback(()=>{s(A())},[s]);u.useEffect(()=>{N()},[N,i,c,n,o]);const v=u.useMemo(()=>({pageIndex:i,pageSize:c,sort:n,query:l,total:g}),[i,c,n,l,g]),R=u.useMemo(()=>[{header:"Name",accessorKey:"name",cell:r=>r.row.original.name,width:"200px !important"},{header:"firstName",accessorKey:"firstName",cell:r=>r.row.original.firstName,width:300},{header:"lastName",accessorKey:"lastName",cell:r=>r.row.original.lastName,width:200},{header:"email",accessorKey:"email",cell:r=>r.row.original.email,width:200},{header:"address",accessorKey:"address",cell:r=>r.row.original.address,width:200},{header:"Notes",accessorKey:"notes",cell:r=>r.row.original.notes,width:200},{header:"Tag Name",accessorKey:"tagName",width:200,cell:r=>{const M=(r.row.original.tags||[]).map(d=>{const h=d.colorName||"#000000",D={backgroundColor:`rgba(${parseInt(h.slice(1,3),16)}, ${parseInt(h.slice(3,5),16)}, ${parseInt(h.slice(5,7),16)}, 0.2)`,color:h,padding:"4px 4px",borderRadius:"4px",marginRight:"4px",marginBottom:"4px"};return e.jsx("div",{style:D,children:d.tagName},d.id)});return e.jsx("div",{children:M})}},{header:"Edit",id:"action",cell:r=>e.jsx(jt,{row:r.row.original})},{header:"Delete",id:"action",cell:r=>e.jsx(bt,{row:r.row.original})}],[]),q=r=>{const C=k(v);C.pageIndex=r,s(L(C))},T=r=>{const C=k(v);C.pageSize=Number(r),C.pageIndex=1,s(L(C))},z=r=>{const C=k(v);C.sort=r,s(L(C))};return e.jsxs("div",{children:[e.jsx(me,{columns:R,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:v.total,pageIndex:v.pageIndex,pageSize:v.pageSize},onPaginationChange:q,onSelectChange:T,onSort:z}),e.jsx(ft,{})]})},ae=u.forwardRef((s,a)=>{const{onInputChange:t}=s,o=Ye(i,500);function i(n){t==null||t(n)}const c=n=>{o(n.target.value)};return e.jsx(x,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Le,{className:"text-lg"}),onChange:c})});ae.displayName="ContactTableSearch";const{Control:yt}=et,H=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],Nt=({innerProps:s,label:a,data:t,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(J,{innerClass:t.color}),e.jsx("span",{children:a})]}),o&&e.jsx(Oe,{className:"text-emerald-500 text-xl"})]}),vt=({children:s,...a})=>{const t=a.getValue()[0];return e.jsxs(yt,{...a,children:[t&&e.jsx(J,{className:"ltr:ml-4 rtl:mr-4",innerClass:t.color}),s]})},Dt=()=>{const s=j(),{status:a}=f(o=>o.crmContact.data.filterData),t=o=>{s(X({status:o==null?void 0:o.value}))};return e.jsx(Ze,{options:H,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:Nt,Control:vt},value:H.filter(o=>o.value===a),onChange:t})},St=()=>{const s=j(),a=u.useRef(null),t=f(l=>l.crmContact.data.tableData),o=l=>{const g=k(t);g.query=l,g.pageIndex=1,typeof l=="string"&&l.length>1&&i(g),typeof l=="string"&&l.length===0&&i(g)},i=l=>{s(L(l)),s(A())},c=()=>{const l=k(t);l.query="",a.current&&(a.current.value=""),s(X({status:""})),i(l)},n=()=>{s(Z())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(ae,{ref:a,onInputChange:o}),e.jsx(Dt,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(O,{size:"sm",className:"me-2",onClick:c,children:"Clear All"}),e.jsx(O,{size:"sm",onClick:n,children:"Add New"})]})]})},P=s=>{const{icon:a,avatarClass:t,label:o,value:i,loading:c}=s,n=55;return e.jsx(tt,{bordered:!0,children:e.jsx(ce,{loading:c,customLoader:e.jsx(at,{avatarProps:{className:"rounded",width:n,height:n}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(_,{className:t,size:n,icon:a}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(st,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},kt=()=>{const s=j(),a=f(o=>o.crmContact.data.statisticData);console.log(a.totalContact,"Nahi araha hai Hai Bhai");const t=f(o=>o.crmContact.data.statisticLoading);return u.useEffect(()=>{s(B())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(P,{icon:e.jsx(Ae,{}),avatarClass:"!bg-indigo-600",label:"Total ComcrmContact",value:a.totalContacts,growthRate:a==null?void 0:a.totalContacts,loading:t}),e.jsx(P,{icon:e.jsx(Re,{}),avatarClass:"!bg-blue-500",label:"Active ComcrmContact",value:a.newContacts,growthRate:a.newContacts,loading:t}),e.jsx(P,{icon:e.jsx(qe,{}),avatarClass:"!bg-emerald-500",label:"New ComcrmContact",value:a==null?void 0:a.newContact,growthRate:a==null?void 0:a.newContact,loading:t})]})};le("crmContact",mt);const Tt=()=>e.jsxs(e.Fragment,{children:[e.jsx(kt,{}),e.jsxs(de,{bodyClass:"h-full",children:[e.jsx(St,{}),e.jsx(wt,{})]})]}),os=Tt;export{os as default};
