import{a as f,r as p,j as e,ah as oe,aq as re}from"./index-4b23f9f2.js";import{A as ne}from"./AdaptableCard-6d843750.js";import{D as ie}from"./DataTable-c4a099e3.js";import{u as h,D as le,A as ce,f as me,a as de,e as ue,s as $,g as O,b as B,c as pe,d as V,t as K,h as ge,i as z,j as G,k as Q,r as he}from"./AdditionalTag-d71929e5.js";import{u as J}from"./useThemeClass-2218883f.js";import{B as H}from"./Button-a87a2e46.js";import{D as xe}from"./Drawer-7cb84764.js";import{T as X}from"./index-61e0f5b7.js";import{a as y,F as fe}from"./FormItem-83b1322c.js";import{u as Ce,b as w,F as je,a as be}from"./formik.esm-25368bc5.js";import{c as ye,a as M,d as we,e as Ne}from"./index.esm-dc2ded9f.js";import{t as A,N as k}from"./toast-01acb463.js";import{I as N}from"./Input-6deb6f13.js";import{Q as De,R as ve,S as Se,b as Te,d as Ie,o as Ae,C as ke}from"./index.esm-e8a4d9e3.js";import{b as Fe}from"./index.esm-9b5dbb94.js";import{b as Le,c as Me,T as Re}from"./index.esm-3991c775.js";/* empty css              */import{a as Ee,c as Oe}from"./tagAndCategory-228f57e7.js";import{c as E}from"./cloneDeep-7f7711f3.js";import{T as qe}from"./TagsList-d496cf7d.js";import{u as P}from"./checkEditUpdate-dad7f0b6.js";import{C as ze}from"./ConfirmDialog-f33448c6.js";import{T as R}from"./TextTruncate-42abfbdd.js";import{d as Be}from"./debounce-4b50c32a.js";import{S as He,c as $e}from"./Select-4aee735d.js";import{B as Y}from"./Badge-84757ba5.js";import{C as Ke}from"./Card-74d89d1e.js";import{A as Pe}from"./index-e9d5fe85.js";import{M as Ve}from"./MediaSkeleton-fbba0516.js";import{N as Ue}from"./react-number-format.es-79d6a7db.js";import"./index-1a8e49e3.js";import"./index.esm-1840726c.js";import"./Pagination-b7445f7d.js";import"./index-5f058379.js";import"./_baseIsEqual-7357c66b.js";import"./_MapCache-8ec314e0.js";import"./Views-6ea63120.js";import"./get-5fd819d1.js";import"./toString-808a232b.js";import"./Skeleton-d609680e.js";import"./index-0aa0f43b.js";import"./Alert-fa9d0487.js";import"./useTimeout-13bed03b.js";import"./CloseButton-53cc5777.js";import"./StatusIcon-e1b59b5e.js";import"./RangeCalendar-208190e3.js";import"./useControllableState-7c2b4a82.js";import"./index-8d3acbcc.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-274cbb20.js";import"./usePopper-6b55e4c5.js";import"./TimeInput-3b99d073.js";import"./useUniqueId-05e6e2ef.js";import"./useDidUpdate-88eea7c0.js";import"./Dialog-3deb7f0e.js";import"./index-5589af6a.js";import"./index-61dfa989.js";import"./useUncertainRef-182c539d.js";import"./isNil-6d05c28f.js";import"./index-4fdc30db.js";import"./chainedFunction-070f832c.js";import"./index-c20d3f97.js";import"./index-f452e3c1.js";import"./index-16ecbf84.js";import"./Progress-26519a5b.js";import"./index-61b07bb6.js";import"./ScrollBar-9c634026.js";import"./index-b2764899.js";import"./index-de1abaee.js";import"./mapCloneElement-d4d7b003.js";import"./Switcher-031290dc.js";import"./Tag-31cf62c8.js";import"./index-a6566abb.js";import"./index-c6827dae.js";import"./Tooltip-7118406c.js";import"./index.esm-b757f9d5.js";import"./Upload-75447e1c.js";import"./index.esm-43ba8e56.js";import"./CrmService-4928d825.js";import"./_getPrototype-67c3ae2d.js";import"./moment-fbc5633a.js";import"./slicedToArray-41477189.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8b0e89b6.js";import"./floating-ui.dom-bef9cea3.js";const We=a=>{const{touched:s,errors:t}=a,o=f(),[i,n]=p.useState(!1);p.useState("#808080");const[m,d]=p.useState(!1),[c,x]=p.useState([]),[F,C]=p.useState([]),D=()=>{n(!i),d(!1)},[v,S]=p.useState("");p.useEffect(()=>{(async()=>{var q,U;try{const{payload:T}=await o(me());console.log(T,"send Me The Id And The Payload");const L=(q=T==null?void 0:T.data)==null?void 0:q.find(I=>(I==null?void 0:I.moduleName)==="clients");if(S(L.id),L){const{payload:I}=await o(de({id:(U=L==null?void 0:L.id)==null?void 0:U.toString()})),se=Ee(I.data),ae=Oe(I.data);C(ae),x(se)}}catch(T){console.error("Error fetching module data:",T)}})()},[o]);const b=h(j=>j.crmCustomers.data.selectedCustomer),[u,l]=p.useState(b?b.tags||[]:[]),g=Ce(),r=j=>{console.log(j),l(j);const q=[j.value];g.setFieldValue("tagId",q)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{label:"Client Name",invalid:t.clientName&&s.clientName,errorMessage:t.clientName,children:e.jsx(w,{type:"text",autoComplete:"off",name:"clientName",placeholder:"Client Name",component:N,prefix:e.jsx(De,{className:"text-xl"})})}),e.jsx(y,{label:"Contact Number",invalid:t.contactInfo&&s.contactInfo,errorMessage:t.contactInfo,children:e.jsx(w,{type:"text",autoComplete:"off",name:"contactInfo",placeholder:"Contact Number",component:N,prefix:e.jsx(ve,{className:"text-xl"})})}),e.jsx(y,{label:"Address",invalid:t.address&&s.address,errorMessage:t.address,children:e.jsx(w,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:N,prefix:e.jsx(Se,{className:"text-xl"})})}),e.jsx(y,{label:"Billing Details",invalid:t.billingDetails&&s.billingDetails,errorMessage:t.billingDetails,children:e.jsx(w,{type:"text",autoComplete:"off",name:"billingDetails",placeholder:"Billing Details",component:N,prefix:e.jsx(Le,{className:"text-xl"})})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(y,{label:"Tags",invalid:t.history&&s.history,errorMessage:t.history,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(w,{name:"Tag",component:le,options:c,placeholder:"Select a Tag",value:g.initialValues.tagName,onChange:r}),e.jsx(Me,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{D(),d(!0)}})]})}),e.jsx(ce,{isOpen:i,moduleName:v,categoryList:F,onOpenChange:j=>n(j)})]}),e.jsx(y,{label:"History",invalid:t.history&&s.history,errorMessage:t.history,children:e.jsx(w,{type:"text",autoComplete:"off",name:"history",placeholder:"History",component:N,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(y,{label:"Notes",invalid:t.notes&&s.notes,errorMessage:t.notes,children:e.jsx(w,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:N,prefix:e.jsx(Re,{className:"text-xl"})})})]})},_e=ye().shape({clientName:M().required("Customer Name is required"),contactInfo:we().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",a=>!isNaN(a)).test("is-ten-digits","Contact must be exactly 10 digits",a=>/^\d{10}$/.test(a)),address:M().required("Address is required"),billingDetails:M().required("Billing Details is required"),history:M(),notes:M(),tagId:Ne()}),{TabNav:Ge,TabList:Qe,TabContent:Je}=X,Z=p.forwardRef((a,s)=>{var n,m,d;const t=h(c=>c.crmCustomers.data.selectedCustomer),o=!!t.id,i=f();return e.jsx(je,{innerRef:s,initialValues:{clientName:(t==null?void 0:t.clientName)||"",contactInfo:(t==null?void 0:t.contactInfo)||"",address:(t==null?void 0:t.address)||"",billingDetails:(t==null?void 0:t.billingDetails)||"",history:(t==null?void 0:t.history)||"",notes:(t==null?void 0:t.notes)||"",tagName:((m=(n=t==null?void 0:t.tags)==null?void 0:n[0])==null?void 0:m.tagName)||"",tagId:((d=t==null?void 0:t.tags)==null?void 0:d.map(c=>c.id))||[],colorName:t!=null&&t.tags&&(t==null?void 0:t.tags.length)>0?t==null?void 0:t.tags[0].colorName:""},validationSchema:_e,onSubmit:async(c,{setSubmitting:x})=>{var v,S,b,u,l,g;const{colorName:F,tagName:C,...D}=c;if(o){const r=await i(ue({customerId:(t==null?void 0:t.id)||"",updatedData:D}));(v=r==null?void 0:r.payload)!=null&&v.success?A.push(e.jsx(k,{title:"Successfully Added",type:"success",duration:2500,children:(S=r==null?void 0:r.payload)==null?void 0:S.message}),{placement:"top-end"}):A.push(e.jsx(k,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(b=r==null?void 0:r.error)==null?void 0:b.message}),{placement:"top-end"}),i($()),await i(O()),await i(B())}else{const r=await i(pe(D));(u=r==null?void 0:r.payload)!=null&&u.success?A.push(e.jsx(k,{title:"Successfully Added",type:"success",duration:2500,children:(l=r==null?void 0:r.payload)==null?void 0:l.message}),{placement:"top-end"}):A.push(e.jsx(k,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await i(O()),await i($()),await i(B())}x(!1)},children:({touched:c,errors:x})=>e.jsx(be,{children:e.jsx(fe,{children:e.jsxs(X,{defaultValue:"customerInfo",children:[e.jsx(Qe,{children:e.jsx(Ge,{value:"customerInfo",children:"Client Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Je,{value:"customerInfo",children:e.jsx(We,{touched:c,errors:x})})})]})})})})});Z.displayName="CustomerForm";const ee=p.forwardRef((a,s)=>{f();const t=h(i=>i.crmCustomers.data.selectedCustomer);h(i=>i.crmCustomers.data.customerList);const o=async i=>{};return e.jsx(Z,{ref:s,customer:t,onFormSubmit:o})});ee.displayName="CustomerEditContent";const Xe=({onSaveClick:a,onCancel:s})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(H,{size:"sm",className:"mr-2",onClick:s,children:"Cancel"}),e.jsx(H,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ye=()=>{const a=f(),s=h(n=>n.crmCustomers.data.drawerOpen),t=()=>{a($()),a(V({}))},o=p.useRef(null),i=()=>{var n,m;console.log("formSubmit function called",(n=o.current)==null?void 0:n.values),(m=o.current)==null||m.submitForm()};return e.jsx(xe,{isOpen:s,closable:!1,bodyClass:"p-0",footer:e.jsx(Xe,{onCancel:t,onSaveClick:i}),onClose:t,onRequestClose:t,children:e.jsx(ee,{ref:o})})},Ze=()=>{const a=f(),s=h(n=>n.crmCustomers.data.deleteConfirmation),t=h(n=>n.crmCustomers.data.selectedCustomer),o=()=>{a(K(!1))},i=async()=>{var m,d,c;a(K(!1));const n=await a(ge(t.id));(m=n==null?void 0:n.payload)!=null&&m.success?A.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=n==null?void 0:n.payload)==null?void 0:d.message}),{placement:"top-end"}):A.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=n==null?void 0:n.error)==null?void 0:c.message}),{placement:"top-end"}),await a(O()),await a(B())};return e.jsx(ze,{isOpen:s,type:"danger",title:"Delete Client",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this client? All record related to this client will be deleted as well. This action cannot be undone."})})},et=({row:a})=>{const{textTheme:s}=J(),t=f(),o=()=>{t(G()),t(V(a))};return e.jsx("div",{className:`${s} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},tt=({row:a})=>{const{textTheme:s}=J(),t=f(),o=async()=>{await t(V(a)),t(K(!0))};return e.jsx("div",{className:`${s} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},st=()=>{const a=f(),s=h(u=>u.crmCustomers.data.displayedCustomersList),t=h(u=>u.crmCustomers.data.loading),o=P("clients","canModify"),i=P("clients","canDelete");h(u=>u.crmCustomers.data.filterData);const{pageIndex:n,pageSize:m,sort:d,query:c,total:x}=h(u=>u.crmCustomers.data.tableData),F=p.useCallback(()=>{a(O())},[a]);p.useEffect(()=>{F()},[F]);const C=p.useMemo(()=>({pageIndex:n,pageSize:m,sort:d,query:c,total:x}),[n,m,d,c,x]),D=p.useMemo(()=>{const u=[{header:"Clients Name",accessorKey:"clientName",cell:l=>{var r;const g=(r=l.row.original)==null?void 0:r.clientName;return e.jsx(R,{text:g,maxLength:20})}},{header:"Clients Number",accessorKey:"contactInfo",cell:l=>l.row.original.contactInfo},{header:"Address",accessorKey:"address",cell:l=>{var r;const g=(r=l.row.original)==null?void 0:r.address;return e.jsx(R,{text:g,maxLength:20})}},{header:"Billing Details",accessorKey:"billingDetails",cell:l=>{var r;const g=(r=l.row.original)==null?void 0:r.billingDetails;return e.jsx(R,{text:g,maxLength:20})}},{header:"History",accessorKey:"history",cell:l=>{var r;const g=(r=l.row.original)==null?void 0:r.history;return e.jsx(R,{text:g,maxLength:20})}},{header:"Notes",accessorKey:"notes",cell:l=>{var r;const g=(r=l.row.original)==null?void 0:r.notes;return e.jsx(R,{text:g,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:l=>{var r;const g=((r=l.row.original)==null?void 0:r.tags)||[];return e.jsx(qe,{tags:g})}}];return i&&u.unshift({header:"Delete",id:"action",cell:l=>e.jsx(tt,{row:l.row.original})}),o&&u.unshift({header:"Edit",id:"action",cell:l=>e.jsx(et,{row:l.row.original})}),u},[o,i]),v=u=>{const l=E(C);l.pageIndex=u,a(z(l))},S=u=>{const l=E(C);l.pageSize=Number(u),l.pageIndex=1,a(z(l))},b=u=>{const l=E(C);l.sort=u,a(z(l))};return e.jsxs("div",{children:[e.jsx(ie,{columns:D,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:C.total,pageIndex:C.pageIndex,pageSize:C.pageSize},onPaginationChange:v,onSelectChange:S,onSort:b}),e.jsx(Ye,{}),e.jsx(Ze,{})]})},te=p.forwardRef((a,s)=>{const{onInputChange:t}=a,o=Be(i,500);function i(m){t==null||t(m)}const n=m=>{o(m.target.value)};return e.jsx(N,{ref:s,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Te,{className:"text-lg"}),onChange:n})});te.displayName="CustomerTableSearch";const{Control:at}=$e,W=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],ot=({innerProps:a,label:s,data:t,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...a,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{innerClass:t.color}),e.jsx("span",{children:s})]}),o&&e.jsx(Ie,{className:"text-emerald-500 text-xl"})]}),rt=({children:a,...s})=>{const t=s.getValue()[0];return e.jsxs(at,{...s,children:[t&&e.jsx(Y,{className:"ltr:ml-4 rtl:mr-4",innerClass:t.color}),a]})},nt=()=>{const a=f(),{status:s}=h(o=>o.crmCustomers.data.filterData),t=o=>{a(Q({status:o==null?void 0:o.value}))};return e.jsx(He,{options:W,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:ot,Control:rt},value:W.filter(o=>o.value===s),onChange:t})},it=()=>{const a=f(),s=p.useRef(null),t=h(c=>c.crmCustomers.data.tableData),o=P("clients","canCreate"),i=c=>{const x=E(t);x.query=c,x.pageIndex=1,typeof c=="string"&&c.length>1&&n(x),typeof c=="string"&&c.length===0&&n(x)},n=c=>{a(z(c)),a(O())},m=()=>{const c=E(t);c.query="",s.current&&(s.current.value=""),a(Q({status:""})),n(c)},d=()=>{a(G())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(te,{ref:s,onInputChange:i}),e.jsx(nt,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(H,{size:"sm",className:"me-2",onClick:m,children:"Clear All"}),o&&e.jsx(H,{size:"sm",onClick:d,children:"Add New"})]})]})},_=a=>{const{icon:s,avatarClass:t,label:o,value:i,growthRate:n,loading:m}=a,d=55;return e.jsx(Ke,{bordered:!0,children:e.jsx(oe,{loading:m,customLoader:e.jsx(Ve,{avatarProps:{className:"rounded",width:d,height:d}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(Pe,{className:t,size:d,icon:s}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(Ue,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},lt=()=>{var o,i,n,m;const a=f(),s=h(d=>d.crmCustomers.data.statisticData);console.log(s,"statisticData");const t=h(d=>d.crmCustomers.data.statisticLoading);return p.useEffect(()=>{a(B())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(_,{icon:e.jsx(Ae,{}),avatarClass:"!bg-indigo-600",label:"Total Clients",value:(o=s==null?void 0:s.totalCustomers)==null?void 0:o.value,growthRate:(i=s==null?void 0:s.totalCustomers)==null?void 0:i.growShrink,loading:t}),e.jsx(_,{icon:e.jsx(ke,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Clients",value:(n=s==null?void 0:s.newCustomers)==null?void 0:n.value,growthRate:(m=s==null?void 0:s.newCustomers)==null?void 0:m.growShrink,loading:t})]})};re("crmCustomers",he);const ct=()=>e.jsxs(e.Fragment,{children:[e.jsx(lt,{}),e.jsxs(ne,{bodyClass:"h-full",children:[e.jsx(it,{}),e.jsx(st,{})]})]}),$s=ct;export{$s as default};
