import{r as p,j as e,a as v,ap as Z,aq as ee}from"./index-ba91c0fd.js";import{A as te}from"./AdaptableCard-3bfc48fe.js";import"./Views-e9280400.js";import"./Badge-ff5c7dc3.js";import"./chart.constant-9aef5f29.js";import"./GrowShrinkTag-ff05a215.js";import"./index-e15db965.js";import{B as V}from"./Button-4d442f63.js";import{D as ae}from"./Dialog-c161d2fe.js";import{D as se}from"./DataTable-e5657712.js";import{I as R}from"./Input-529114bc.js";import"./Skeleton-83cb992f.js";import"./react-tooltip.min-f0729f09.js";import"./RichTextEditor-49d25ea9.js";import"./SegmentItemOption-d89e5f60.js";import"./SvgIcon-c2eb96e6.js";import{T as H}from"./Tooltip-d4e69970.js";import{F as oe}from"./FormDesription-4fcee828.js";import{u as k}from"./checkEditUpdate-c80a1265.js";import{c as z}from"./cloneDeep-641ee2c7.js";import{s as re}from"./index-a42a902c.js";import{g as ie}from"./index-31aa494d.js";import{u as x,a as q,g as L,b as G,s as F,t as W,d as ne,c as le,f as ce,e as de,h as me,i as pe,j as _,k as ue,l as ge,r as fe}from"./index-6e2d35d1.js";import{b as he,Q as xe,O as De,P as je}from"./index.esm-55e99400.js";import{d as be}from"./debounce-97eb29be.js";import{T as we}from"./TagsList-93c3b92a.js";import{T as E}from"./TextTruncate-c2f805d1.js";import{u as Ce}from"./useThemeClass-06f59d25.js";import{t as $,N as K}from"./toast-b9105828.js";import{C as ye}from"./ConfirmDialog-22f316d7.js";import{a as Te}from"./index.esm-7ccba11f.js";import"./Alert-5d4fd2a9.js";import"./RangeCalendar-d6aa435b.js";import"./Card-b0a5a7d6.js";import"./index-170572b2.js";import"./index-68178362.js";import{D as Se}from"./Drawer-f1cc950e.js";import"./index-b648c4d1.js";import{a as A,F as Ne}from"./FormItem-01999f29.js";import"./toString-727d28b4.js";import"./index-1c2b060b.js";import"./index-0bf35a02.js";import"./index-ccd97808.js";import"./Pagination-f4c26df7.js";import"./Progress-ab444eaf.js";import"./index-75ffb2be.js";import"./ScrollBar-1f3fb77b.js";import"./index-d176cad0.js";import{S as U}from"./Select-73b9b11b.js";import"./index-2c4fd68d.js";import"./Switcher-49168a68.js";import"./index-fe0659a6.js";import{T as Q}from"./index-af9b375a.js";import"./Tag-b9db9ffe.js";import"./index-60bed537.js";import"./index-a469d783.js";import"./Upload-bbbb3749.js";import{u as Ie,b as M,F as ve,a as Fe}from"./formik.esm-e5286689.js";import{c as Ae,a as B,d as Le,e as Ee}from"./index.esm-34e21a5e.js";import{T as Me}from"./index.esm-d714fba5.js";/* empty css              */import{t as Oe}from"./tagAndCategory-228f57e7.js";import{a as Re}from"./index.esm-5fbbd29b.js";import{G as ke}from"./index.esm-c6afaa9b.js";import"./useMergeRef-788c4cb0.js";import"./index-9a9b01aa.js";import"./CloseButton-7e3ca34d.js";import"./index-31253325.js";import"./isNil-5f65db87.js";import"./get-86e63167.js";import"./_MapCache-52b86039.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-ea007e01.js";import"./usePopper-549b69fd.js";import"./index-8ea85167.js";import"./_getPrototype-17f2df3f.js";import"./CrmService-46d16590.js";import"./index-0b6a2ffd.js";import"./index-74a4255b.js";import"./useTimeout-80ea9231.js";import"./StatusIcon-721e0795.js";import"./chainedFunction-070f832c.js";import"./useControllableState-f5082273.js";import"./useRootClose-8f322f83.js";import"./TimeInput-6aa1e7b6.js";import"./useUniqueId-018c2565.js";import"./useDidUpdate-855f950c.js";import"./useUncertainRef-41d92c6b.js";import"./slicedToArray-558a0a0c.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5585411f.js";import"./mapCloneElement-db46c91a.js";import"./index.esm-1fe268c9.js";import"./index.esm-e7d17c5f.js";const J=p.forwardRef((a,c)=>{const{onInputChange:t}=a,u=be(i,500);function i(h){t==null||t(h)}const o=h=>{u(h.target.value)};return e.jsx(R,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by title",prefix:e.jsx(he,{className:"text-lg"}),onChange:o})});J.displayName="DealTableSearch";const ze=()=>{const a=v(),c=p.useRef(null),t=x(n=>{var d,s;return(s=(d=n.crmDeals)==null?void 0:d.data)==null?void 0:s.tableData}),u=k("Deal","canCreate"),i=n=>{const d=z(t);d.query=n,d.pageIndex=1,typeof n=="string"&&n.length>1&&o(d),typeof n=="string"&&n.length===0&&o(d)},o=n=>{a(n?q(n):L())},h=()=>{a(G()),a(F([])),a(re("Add")),a(F({}))};return p.useEffect(()=>{async function n(){await a(ie())}n()},[a]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:c,onInputChange:i})}),e.jsx("div",{className:"mb-4",children:u&&e.jsx(V,{size:"sm",onClick:h,children:"Add New"})})]})},qe=()=>{const a=v(),c=x(o=>o.crmDeals.data.deleteConfirmation),t=x(o=>o.crmDeals.data.selectedDeals),u=()=>{a(W(!1))},i=async()=>{var h,n,d,s,g;a(W(!1));const o=await a(ne(t.id));await a(L()),(n=(h=o==null?void 0:o.payload)==null?void 0:h.data)!=null&&n.success?$.push(e.jsx(K,{title:"Successfuly Deleted",type:"success",duration:2500,children:(s=(d=o==null?void 0:o.payload)==null?void 0:d.data)==null?void 0:s.message}),{placement:"top-end"}):$.push(e.jsx(K,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=o==null?void 0:o.error)==null?void 0:g.message}),{placement:"top-end"}),await a(L())};return e.jsx(ye,{isOpen:c,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})},O=[],Be=a=>{const{touched:c,errors:t,setFieldValue:u,values:i}=a,o=v();p.useState(!1),p.useState(!1);const[h,n]=p.useState([]);p.useState([]);const[d,s]=p.useState("");p.useEffect(()=>{const m=async()=>{var N,j;try{const{payload:w}=await o(ce()),I=(N=w==null?void 0:w.data)==null?void 0:N.find(T=>(T==null?void 0:T.moduleName)==="clients");if(s(I.id),I){const{payload:T}=await o(de({id:(j=I==null?void 0:I.id)==null?void 0:j.toString()})),l=Oe(T.data);n(l)}}catch(w){console.error("Error fetching module data:",w)}};o(le()),m()},[o]);const g=x(m=>m.crmDeals.data.selectedDeals);p.useState(g?g.tags||[]:[]);const b=Ie(),D=m=>{b.setFieldValue("tagId",m)},S=x(m=>m.crmDeals.data.leadsList);return O.length=0,S==null||S.forEach(m=>{O.push({value:m.id,label:m.title})}),e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Title *",invalid:t.title&&c.title,errorMessage:t.title,children:e.jsx(M,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:R,prefix:e.jsx(xe,{className:"text-xl"})})}),e.jsx(A,{label:"Budget *",invalid:t.budget&&c.budget,errorMessage:t.budget,children:e.jsx(M,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:R,prefix:e.jsx(Re,{className:"text-xl"})})}),e.jsx(A,{label:"Tag",children:e.jsx(M,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:U,options:h,prefix:e.jsx(ke,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:D})}),e.jsx(A,{label:"Connected Lead",invalid:t.leadId&&c.leadId,errorMessage:t.leadId,children:e.jsx(U,{name:"leadId",id:"leadId",value:O.find(m=>(m==null?void 0:m.value)===(i==null?void 0:i.leadId)),options:O,onChange:m=>{u("leadId",m.value||"")}})}),e.jsx(A,{label:"Notes",invalid:t.description&&c.description,errorMessage:t.description,children:e.jsx(M,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:R,prefix:e.jsx(Me,{className:"text-xl"})})})]})},Ve=Ae().shape({title:B().required("Title is required"),description:B(),leadId:B(),budget:Le().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Ee()}),{TabNav:We,TabList:$e,TabContent:Ke}=Q,P=p.forwardRef((a,c)=>{var n,d;const t=x(s=>s.crmDeals.data.selectedDeals),u=!!t.id,i=v(),o=async(s,g,b)=>{var m,N,j,w;const D=(m=s==null?void 0:s.payload)!=null&&m.success?g:"Something went wrong !!!",S=(N=s==null?void 0:s.payload)!=null&&N.success?(j=s==null?void 0:s.payload)==null?void 0:j.message:b;$.push(e.jsx(K,{title:D,type:(w=s==null?void 0:s.payload)!=null&&w.success?"success":"danger",duration:2500,children:S}),{placement:"top-end"})},h=async(s,{setSubmitting:g})=>{var b;try{const D={title:s.title,leadId:s.leadId,budget:s.budget.toString(),description:s.description,tagId:s==null?void 0:s.tagId.map(T=>T.value)},{name:S,tagName:m,...N}=s,j=u?await i(me({DealsId:(t==null?void 0:t.id)||"",updatedData:D})):await i(pe(D));await o(j,u?"Successfully Updated":"Successfully Added","An error occurred."),(b=j==null?void 0:j.payload)!=null&&b.success&&i(_()),await Promise.all([i(L())])}catch(D){console.error("An error occurred:",D)}finally{g(!1)}};return e.jsx(ve,{innerRef:c,initialValues:{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",tagId:((n=t==null?void 0:t.tags)==null?void 0:n.map(s=>({label:s.tagName,value:s.id})))||[],budget:(t==null?void 0:t.budget)||"",leadId:((d=t==null?void 0:t.leadModel)==null?void 0:d.id)||""},validationSchema:Ve,onSubmit:h,children:({touched:s,errors:g,values:b,setFieldValue:D})=>e.jsx(Fe,{children:e.jsx(Ne,{children:e.jsxs(Q,{defaultValue:"dealsInfo",children:[e.jsx($e,{children:e.jsx(We,{value:"dealsInfo",children:"Deals Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ke,{value:"dealsInfo",children:e.jsx(Be,{touched:s,errors:g,setFieldValue:D,values:b})})})]})})})})});P.displayName="DealsForm";const X=p.forwardRef((a,c)=>{v();const t=x(i=>i.crmDeals.data.selectedDeals);x(i=>i.crmDeals.data.dealList);const u=async i=>{};return e.jsx(P,{ref:c,deal:t,onFormSubmit:u})});X.displayName="DealEditContent";const Pe=({onSaveClick:a,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),He=()=>{const a=v(),c=x(d=>d.crmDeals.data.drawerOpen),[t,u]=p.useState(window.innerWidth/2),i=()=>{a(_()),a(F({}))},o=p.useRef(null),h=()=>{var d;(d=o.current)==null||d.submitForm()};p.useEffect(()=>(window.addEventListener("resize",n),a(ue()),()=>{window.removeEventListener("resize",n)}),[]);const n=()=>{u(window.innerWidth/2)};return e.jsx(Se,{isOpen:c,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(Pe,{onCancel:i,onSaveClick:h}),onClose:i,onRequestClose:i,children:e.jsx(X,{ref:o})})},Ue=()=>{const a=v(),c=x(l=>l.crmDeals.data.displayedDealsList),t=x(l=>l.crmDeals.data.loading),u=x(l=>l.crmDeals.data.isDialogOpen),{pageIndex:i,pageSize:o,sort:h,query:n,total:d}=x(l=>l.crmDeals.data.tableData),s=p.useCallback(()=>{a(L())},[a]);p.useEffect(()=>{s()},[s]);const g=p.useMemo(()=>({pageIndex:i,pageSize:o,sort:h,query:n,total:d}),[i,o,h,n,d]);x(l=>l.crmDeals.data.selectedDeals);const b=k("Deal","canDelete"),D=k("Deal","canModify"),S=k("Deal","canView"),m=Z(),N=({row:l})=>{const r=v();Ce();const f=()=>{r(G()),r(F(l))},C=async()=>{await r(F(l)),r(W(!0))},y=()=>{r(F(l));const Y=`/app/crm/deal-details/${l.id}`;m(Y)};return e.jsxs("div",{className:"flex text-base items-center",children:[D&&e.jsx("button",{className:"circle items-center",onClick:f,children:e.jsx(De,{})}),b&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:C,children:e.jsx(je,{})}),S&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle items-center text-lg",onClick:y,children:e.jsx(Te,{})})]})},j=p.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(N,{row:r.row.original})},{header:"Title",accessorKey:"title",cell:r=>{const f=r.row.original.title;return e.jsx(H,{title:f,children:e.jsx(E,{text:f,maxLength:20})},f)}},{header:"Budget",accessorKey:"budget",cell:r=>{var C,y;const f=(C=r.row.original)!=null&&C.budget?(y=r.row.original)==null?void 0:y.budget:"-";return e.jsx(E,{text:f,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const f=r.row.original.tags;return f!=null&&f.length>0?e.jsx(we,{tags:f}):"-"}},{header:"Notes",accessorKey:"notes",cell:r=>{var C,y;const f=(C=r.row.original)!=null&&C.description?(y=r.row.original)==null?void 0:y.description:"-";return e.jsx(H,{title:f,children:e.jsx(E,{text:f,maxLength:20})},f)}},{header:"Connected Lead",accessorKey:"Connected Lead",cell:r=>{var C,y;const f=(C=r.row.original)!=null&&C.leadModel?(y=r.row.original)==null?void 0:y.leadModel.title:"-";return e.jsx(E,{text:f,maxLength:20})}}],[D,b]),w=l=>{const r=z(g);r.pageIndex=l,a(q(r))},I=l=>{const r=z(g);r.pageSize=Number(l),r.pageIndex=1,a(q(r))},T=l=>{const r=z(g);r.sort=l,a(q(r))};return e.jsxs("div",{children:[e.jsx(se,{columns:j,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:w,onSelectChange:I,onSort:T}),e.jsx(He,{}),e.jsx(qe,{}),e.jsxs(ae,{isOpen:u,onClose:()=>a(ge(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(P,{})]})]})};ee("crmDeals",fe);const Ge=()=>{const a=x(c=>c.crmDeals.data.DealsList);return e.jsxs(te,{bodyClass:"h-full",children:[e.jsx(oe,{title:`Deals (${(a==null?void 0:a.length)||0})`,desc:"",className:"mb-2"}),e.jsx(ze,{}),e.jsx(Ue,{})]})},Oa=Ge;export{Oa as default};
