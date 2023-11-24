import{a as f,r as p,j as e,ah as oe,aq as re}from"./index-4675262e.js";import{A as ne}from"./AdaptableCard-b129293a.js";import{D as ie}from"./DataTable-1574da48.js";import{u as g,D as le,A as ce,f as me,a as de,e as ue,s as $,g as M,b as B,c as pe,d as P,t as K,h as he,i as z,j as G,k as Q,r as ge}from"./AdditionalTag-17f4c534.js";import{u as J}from"./useThemeClass-d82dec7a.js";import{B as H}from"./Button-0b68e0a2.js";import{D as xe}from"./Drawer-4463e2fa.js";import{T as X}from"./index-aa614f08.js";import{a as y,F as fe}from"./FormItem-f0a568d5.js";import{u as Ce,b as w,F as je,a as be}from"./formik.esm-be6a51d3.js";import{c as ye,a as O,d as we,e as Ne}from"./index.esm-b46f51f2.js";import{t as I,N as A}from"./toast-3dd25308.js";import{I as N}from"./Input-b6f85393.js";import{Q as De,R as ve,S as Se,b as Te,d as Ie,o as Ae,C as ke}from"./index.esm-ff144046.js";import{b as Fe}from"./index.esm-02460da0.js";import{b as Le,c as Oe,T as Re}from"./index.esm-bc9375b3.js";/* empty css              */import{t as Ee,c as Me}from"./tagAndCategory-e3148533.js";import{c as E}from"./cloneDeep-477b9741.js";import{T as qe}from"./TagsList-02bf03ec.js";import{u as V}from"./checkEditUpdate-13f2672a.js";import{C as ze}from"./ConfirmDialog-4eaa7b26.js";import{T as R}from"./TextTruncate-a3cc99e4.js";import{d as Be}from"./debounce-7228e5e1.js";import{S as He,c as $e}from"./Select-ecee390b.js";import{B as Y}from"./Badge-8de88fc8.js";import{C as Ke}from"./Card-1a4ea392.js";import{A as Ve}from"./index-32f51c8f.js";import{M as Pe}from"./MediaSkeleton-1eb53cff.js";import{N as Ue}from"./react-number-format.es-c100091d.js";import"./index-dc5daab9.js";import"./index.esm-c132f852.js";import"./Pagination-2e203a3f.js";import"./index-b0ec1b4c.js";import"./_baseIsEqual-b207db6b.js";import"./_MapCache-594565d2.js";import"./Views-96bf4241.js";import"./get-59654049.js";import"./toString-5a26993f.js";import"./Skeleton-5516a2a7.js";import"./index-6e5c150b.js";import"./Alert-e71f6da7.js";import"./useTimeout-d031dca4.js";import"./CloseButton-f37e3705.js";import"./StatusIcon-69b21449.js";import"./RangeCalendar-7055646c.js";import"./useControllableState-048d3f43.js";import"./index-40ee1fcd.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-bb6a1813.js";import"./usePopper-e9b5a625.js";import"./TimeInput-e183a601.js";import"./useUniqueId-f4a3bad2.js";import"./useDidUpdate-3fa7b336.js";import"./Dialog-2674822d.js";import"./index-cd7de78e.js";import"./index-395f0e43.js";import"./useUncertainRef-9680db51.js";import"./isNil-7c9d5aca.js";import"./index-99abface.js";import"./chainedFunction-070f832c.js";import"./index-29fb88aa.js";import"./index-799960ed.js";import"./index-567c5b37.js";import"./Progress-163e7627.js";import"./index-ac935edf.js";import"./ScrollBar-c918a49a.js";import"./index-befed326.js";import"./index-819658e8.js";import"./mapCloneElement-20d9df92.js";import"./Switcher-abd8f95e.js";import"./Tag-613d51b1.js";import"./index-bcfe7745.js";import"./index-9a848025.js";import"./Tooltip-2d93a4c5.js";import"./index.esm-2d8103e0.js";import"./Upload-e8a604f5.js";import"./index.esm-3440a998.js";import"./CrmService-ac08cdaf.js";import"./_getPrototype-5d191e98.js";import"./moment-fbc5633a.js";import"./slicedToArray-24f82e16.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-92a33187.js";import"./floating-ui.dom-4bc0055b.js";const We=a=>{const{touched:s,errors:t}=a,o=f(),[i,n]=p.useState(!1);p.useState("#808080");const[u,m]=p.useState(!1),[c,x]=p.useState([]),[k,C]=p.useState([]),D=()=>{n(!i),m(!1)},[v,S]=p.useState("");p.useEffect(()=>{(async()=>{var q,U;try{const{payload:F}=await o(me()),L=(q=F==null?void 0:F.data)==null?void 0:q.find(T=>(T==null?void 0:T.moduleName)==="clients");if(S(L.id),L){const{payload:T}=await o(de({id:(U=L==null?void 0:L.id)==null?void 0:U.toString()})),se=Ee(T.data),ae=Me(T.data);C(ae),x(se)}}catch(F){console.error("Error fetching module data:",F)}})()},[o]);const j=g(b=>b.crmCustomers.data.selectedCustomer),[d,l]=p.useState(j?j.tags||[]:[]),h=Ce(),r=b=>{l(b);const q=[b.value];h.setFieldValue("tagId",q)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{label:"Client Name",invalid:t.clientName&&s.clientName,errorMessage:t.clientName,children:e.jsx(w,{type:"text",autoComplete:"off",name:"clientName",placeholder:"Client Name",component:N,prefix:e.jsx(De,{className:"text-xl"})})}),e.jsx(y,{label:"Contact Number",invalid:t.contactInfo&&s.contactInfo,errorMessage:t.contactInfo,children:e.jsx(w,{type:"text",autoComplete:"off",name:"contactInfo",placeholder:"Contact Number",component:N,prefix:e.jsx(ve,{className:"text-xl"})})}),e.jsx(y,{label:"Address",invalid:t.address&&s.address,errorMessage:t.address,children:e.jsx(w,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:N,prefix:e.jsx(Se,{className:"text-xl"})})}),e.jsx(y,{label:"Billing Details",invalid:t.billingDetails&&s.billingDetails,errorMessage:t.billingDetails,children:e.jsx(w,{type:"text",autoComplete:"off",name:"billingDetails",placeholder:"Billing Details",component:N,prefix:e.jsx(Le,{className:"text-xl"})})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(y,{label:"Tags",invalid:t.history&&s.history,errorMessage:t.history,children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(w,{name:"Tag",component:le,options:c,placeholder:"Select a Tag",value:h.initialValues.tagName,onChange:r}),e.jsx(Oe,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{D(),m(!0)}})]})}),e.jsx(ce,{isOpen:i,moduleName:v,categoryList:k,onOpenChange:b=>n(b)})]}),e.jsx(y,{label:"History",invalid:t.history&&s.history,errorMessage:t.history,children:e.jsx(w,{type:"text",autoComplete:"off",name:"history",placeholder:"History",component:N,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(y,{label:"Notes",invalid:t.notes&&s.notes,errorMessage:t.notes,children:e.jsx(w,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:N,prefix:e.jsx(Re,{className:"text-xl"})})})]})},_e=ye().shape({clientName:O().required("Customer Name is required"),contactInfo:we().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",a=>!isNaN(a)).test("is-ten-digits","Contact must be exactly 10 digits",a=>/^\d{10}$/.test(a)),address:O().required("Address is required"),billingDetails:O().required("Billing Details is required"),history:O(),notes:O(),tagId:Ne()}),{TabNav:Ge,TabList:Qe,TabContent:Je}=X,Z=p.forwardRef((a,s)=>{var n,u,m;const t=g(c=>c.crmCustomers.data.selectedCustomer),o=!!t.id,i=f();return e.jsx(je,{innerRef:s,initialValues:{clientName:(t==null?void 0:t.clientName)||"",contactInfo:(t==null?void 0:t.contactInfo)||"",address:(t==null?void 0:t.address)||"",billingDetails:(t==null?void 0:t.billingDetails)||"",history:(t==null?void 0:t.history)||"",notes:(t==null?void 0:t.notes)||"",tagName:((u=(n=t==null?void 0:t.tags)==null?void 0:n[0])==null?void 0:u.tagName)||"",tagId:((m=t==null?void 0:t.tags)==null?void 0:m.map(c=>c.id))||[],colorName:t!=null&&t.tags&&(t==null?void 0:t.tags.length)>0?t==null?void 0:t.tags[0].colorName:""},validationSchema:_e,onSubmit:async(c,{setSubmitting:x})=>{var v,S,j,d,l,h;const{colorName:k,tagName:C,...D}=c;if(o){const r=await i(ue({customerId:(t==null?void 0:t.id)||"",updatedData:D}));(v=r==null?void 0:r.payload)!=null&&v.success?I.push(e.jsx(A,{title:"Successfully Added",type:"success",duration:2500,children:(S=r==null?void 0:r.payload)==null?void 0:S.message}),{placement:"top-end"}):I.push(e.jsx(A,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(j=r==null?void 0:r.error)==null?void 0:j.message}),{placement:"top-end"}),i($()),await i(M()),await i(B())}else{const r=await i(pe(D));(d=r==null?void 0:r.payload)!=null&&d.success?I.push(e.jsx(A,{title:"Successfully Added",type:"success",duration:2500,children:(l=r==null?void 0:r.payload)==null?void 0:l.message}),{placement:"top-end"}):I.push(e.jsx(A,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(h=r==null?void 0:r.error)==null?void 0:h.message}),{placement:"top-end"}),await i(M()),await i($()),await i(B())}x(!1)},children:({touched:c,errors:x})=>e.jsx(be,{children:e.jsx(fe,{children:e.jsxs(X,{defaultValue:"customerInfo",children:[e.jsx(Qe,{children:e.jsx(Ge,{value:"customerInfo",children:"Client Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Je,{value:"customerInfo",children:e.jsx(We,{touched:c,errors:x})})})]})})})})});Z.displayName="CustomerForm";const ee=p.forwardRef((a,s)=>{f();const t=g(i=>i.crmCustomers.data.selectedCustomer);g(i=>i.crmCustomers.data.customerList);const o=async i=>{};return e.jsx(Z,{ref:s,customer:t,onFormSubmit:o})});ee.displayName="CustomerEditContent";const Xe=({onSaveClick:a,onCancel:s})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(H,{size:"sm",className:"mr-2",onClick:s,children:"Cancel"}),e.jsx(H,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ye=()=>{const a=f(),s=g(n=>n.crmCustomers.data.drawerOpen),t=()=>{a($()),a(P({}))},o=p.useRef(null),i=()=>{var n;(n=o.current)==null||n.submitForm()};return e.jsx(xe,{isOpen:s,closable:!1,bodyClass:"p-0",footer:e.jsx(Xe,{onCancel:t,onSaveClick:i}),onClose:t,onRequestClose:t,children:e.jsx(ee,{ref:o})})},Ze=()=>{const a=f(),s=g(n=>n.crmCustomers.data.deleteConfirmation),t=g(n=>n.crmCustomers.data.selectedCustomer),o=()=>{a(K(!1))},i=async()=>{var u,m,c;a(K(!1));const n=await a(he(t.id));(u=n==null?void 0:n.payload)!=null&&u.success?I.push(e.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(m=n==null?void 0:n.payload)==null?void 0:m.message}),{placement:"top-end"}):I.push(e.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=n==null?void 0:n.error)==null?void 0:c.message}),{placement:"top-end"}),await a(M()),await a(B())};return e.jsx(ze,{isOpen:s,type:"danger",title:"Delete Client",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this client? All record related to this client will be deleted as well. This action cannot be undone."})})},et=({row:a})=>{const{textTheme:s}=J(),t=f(),o=()=>{t(G()),t(P(a))};return e.jsx("div",{className:`${s} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},tt=({row:a})=>{const{textTheme:s}=J(),t=f(),o=async()=>{await t(P(a)),t(K(!0))};return e.jsx("div",{className:`${s} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},st=()=>{const a=f(),s=g(d=>d.crmCustomers.data.displayedCustomersList),t=g(d=>d.crmCustomers.data.loading),o=V("clients","canModify"),i=V("clients","canDelete");g(d=>d.crmCustomers.data.filterData);const{pageIndex:n,pageSize:u,sort:m,query:c,total:x}=g(d=>d.crmCustomers.data.tableData),k=p.useCallback(()=>{a(M())},[a]);p.useEffect(()=>{k()},[k]);const C=p.useMemo(()=>({pageIndex:n,pageSize:u,sort:m,query:c,total:x}),[n,u,m,c,x]),D=p.useMemo(()=>{const d=[{header:"Clients Name",accessorKey:"clientName",cell:l=>{var r;const h=(r=l.row.original)==null?void 0:r.clientName;return e.jsx(R,{text:h,maxLength:20})}},{header:"Clients Number",accessorKey:"contactInfo",cell:l=>l.row.original.contactInfo},{header:"Address",accessorKey:"address",cell:l=>{var r;const h=(r=l.row.original)==null?void 0:r.address;return e.jsx(R,{text:h,maxLength:20})}},{header:"Billing Details",accessorKey:"billingDetails",cell:l=>{var r;const h=(r=l.row.original)==null?void 0:r.billingDetails;return e.jsx(R,{text:h,maxLength:20})}},{header:"History",accessorKey:"history",cell:l=>{var r;const h=(r=l.row.original)==null?void 0:r.history;return e.jsx(R,{text:h,maxLength:20})}},{header:"Notes",accessorKey:"notes",cell:l=>{var r;const h=(r=l.row.original)==null?void 0:r.notes;return e.jsx(R,{text:h,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:l=>{var r;const h=((r=l.row.original)==null?void 0:r.tags)||[];return e.jsx(qe,{tags:h})}}];return i&&d.unshift({header:"Delete",id:"action",cell:l=>e.jsx(tt,{row:l.row.original})}),o&&d.unshift({header:"Edit",id:"action",cell:l=>e.jsx(et,{row:l.row.original})}),d},[o,i]),v=d=>{const l=E(C);l.pageIndex=d,a(z(l))},S=d=>{const l=E(C);l.pageSize=Number(d),l.pageIndex=1,a(z(l))},j=d=>{const l=E(C);l.sort=d,a(z(l))};return e.jsxs("div",{children:[e.jsx(ie,{columns:D,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:C.total,pageIndex:C.pageIndex,pageSize:C.pageSize},onPaginationChange:v,onSelectChange:S,onSort:j}),e.jsx(Ye,{}),e.jsx(Ze,{})]})},te=p.forwardRef((a,s)=>{const{onInputChange:t}=a,o=Be(i,500);function i(u){t==null||t(u)}const n=u=>{o(u.target.value)};return e.jsx(N,{ref:s,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Te,{className:"text-lg"}),onChange:n})});te.displayName="CustomerTableSearch";const{Control:at}=$e,W=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],ot=({innerProps:a,label:s,data:t,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...a,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{innerClass:t.color}),e.jsx("span",{children:s})]}),o&&e.jsx(Ie,{className:"text-emerald-500 text-xl"})]}),rt=({children:a,...s})=>{const t=s.getValue()[0];return e.jsxs(at,{...s,children:[t&&e.jsx(Y,{className:"ltr:ml-4 rtl:mr-4",innerClass:t.color}),a]})},nt=()=>{const a=f(),{status:s}=g(o=>o.crmCustomers.data.filterData),t=o=>{a(Q({status:o==null?void 0:o.value}))};return e.jsx(He,{options:W,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:ot,Control:rt},value:W.filter(o=>o.value===s),onChange:t})},it=()=>{const a=f(),s=p.useRef(null),t=g(c=>c.crmCustomers.data.tableData),o=V("clients","canCreate"),i=c=>{const x=E(t);x.query=c,x.pageIndex=1,typeof c=="string"&&c.length>1&&n(x),typeof c=="string"&&c.length===0&&n(x)},n=c=>{a(z(c)),a(M())},u=()=>{const c=E(t);c.query="",s.current&&(s.current.value=""),a(Q({status:""})),n(c)},m=()=>{a(G())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(te,{ref:s,onInputChange:i}),e.jsx(nt,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(H,{size:"sm",className:"me-2",onClick:u,children:"Clear All"}),o&&e.jsx(H,{size:"sm",onClick:m,children:"Add New"})]})]})},_=a=>{const{icon:s,avatarClass:t,label:o,value:i,growthRate:n,loading:u}=a,m=55;return e.jsx(Ke,{bordered:!0,children:e.jsx(oe,{loading:u,customLoader:e.jsx(Pe,{avatarProps:{className:"rounded",width:m,height:m}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(Ve,{className:t,size:m,icon:s}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(Ue,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},lt=()=>{var o,i,n,u;const a=f(),s=g(m=>m.crmCustomers.data.statisticData),t=g(m=>m.crmCustomers.data.statisticLoading);return p.useEffect(()=>{a(B())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(_,{icon:e.jsx(Ae,{}),avatarClass:"!bg-indigo-600",label:"Total Clients",value:(o=s==null?void 0:s.totalCustomers)==null?void 0:o.value,growthRate:(i=s==null?void 0:s.totalCustomers)==null?void 0:i.growShrink,loading:t}),e.jsx(_,{icon:e.jsx(ke,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Clients",value:(n=s==null?void 0:s.newCustomers)==null?void 0:n.value,growthRate:(u=s==null?void 0:s.newCustomers)==null?void 0:u.growShrink,loading:t})]})};re("crmCustomers",ge);const ct=()=>e.jsxs(e.Fragment,{children:[e.jsx(lt,{}),e.jsxs(ne,{bodyClass:"h-full",children:[e.jsx(it,{}),e.jsx(st,{})]})]}),$s=ct;export{$s as default};
