import{r as p,j as e,a as I,al as Y,aq as Z}from"./index-82a4cdcd.js";import{A as ee}from"./AdaptableCard-f3359e05.js";import"./Views-5e6cd1d6.js";import"./Badge-df87bdc2.js";import"./chart.constant-af606830.js";import"./GrowShrinkTag-eea444bd.js";import"./index-c281b544.js";import{B as V}from"./Button-0e96ba54.js";import{D as te}from"./Dialog-992e1d56.js";import{D as ae}from"./DataTable-a2b72651.js";import{I as O}from"./Input-8b535fd4.js";import"./Skeleton-d36fd097.js";import"./react-tooltip.min-b828bcbe.js";import"./RichTextEditor-ac808d95.js";import"./SegmentItemOption-4c0660d9.js";import"./SvgIcon-d14f51e5.js";import{T as se}from"./Tooltip-5f04ccef.js";import{F as oe}from"./FormDesription-b818f051.js";import{u as R}from"./checkEditUpdate-b8787a18.js";import{c as k}from"./cloneDeep-914ca532.js";import{s as re}from"./index-8774c694.js";import{g as ie}from"./index-1e8f0773.js";import{u as h,a as z,g as E,b as U,s as F,t as W,d as ne,c as le,f as ce,e as de,h as me,i as pe,j as G,k as ue,l as ge,r as fe}from"./index-3acf8562.js";import{b as he,Q as xe,O as De,P as je}from"./index.esm-9eb3698a.js";import{d as be}from"./debounce-2ded1513.js";import{T as Ce}from"./TagsList-4f2913f5.js";import{T as q}from"./TextTruncate-c40fceb4.js";import{u as we}from"./useThemeClass-38f80a2c.js";import{t as $,N as P}from"./toast-4eea8663.js";import{C as ye}from"./ConfirmDialog-4e779e5f.js";import{a as Te}from"./index.esm-c1a3c0a2.js";import"./Alert-62262f10.js";import"./RangeCalendar-823e8aaa.js";import"./Card-6707ff6e.js";import"./index-c91d029f.js";import"./index-320abfaa.js";import{D as Se}from"./Drawer-4bb376d7.js";import"./index-0428064e.js";import{a as A,F as Ie}from"./FormItem-f5087afb.js";import"./toString-b2e07e9a.js";import"./index-c11d92d4.js";import"./index-d64ec43f.js";import"./index-971eae45.js";import"./Pagination-7722c7db.js";import"./Progress-7d1211e0.js";import"./index-7a0e0b9f.js";import"./ScrollBar-b2904e17.js";import"./index-7b9d9e5f.js";import{S as K}from"./Select-eb8671ae.js";import"./index-04da13bb.js";import"./Switcher-a7e522ef.js";import"./index-4baab89c.js";import{T as _}from"./index-b111a719.js";import"./Tag-d5568307.js";import"./index-c63c62bb.js";import"./index-30e041a1.js";import"./Upload-341a9a0e.js";import{u as Ne,b as L,F as ve,a as Fe}from"./formik.esm-fbd7cbeb.js";import{c as Ae,a as B,d as Ee,e as Le}from"./index.esm-f6409e84.js";import{T as Me}from"./index.esm-f3449157.js";/* empty css              */import{t as Oe}from"./tagAndCategory-228f57e7.js";import{a as Re}from"./index.esm-e60cf8ff.js";import{G as ke}from"./index.esm-325e1aa4.js";import"./useMergeRef-788c4cb0.js";import"./index-5ca2f98c.js";import"./CloseButton-d6bfe260.js";import"./index-6801b2e9.js";import"./isNil-ad4b9ef6.js";import"./get-71f6a308.js";import"./_MapCache-54b9aafe.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-2b2683ef.js";import"./usePopper-150e7e1f.js";import"./index-dff75ec8.js";import"./moment-fbc5633a.js";import"./_getPrototype-b764c861.js";import"./CrmService-a7ee7c84.js";import"./index-180294c4.js";import"./index-7e7c2465.js";import"./useTimeout-da6ce9b0.js";import"./StatusIcon-5a72f149.js";import"./chainedFunction-070f832c.js";import"./useControllableState-3caf27a6.js";import"./useRootClose-ca0d0d80.js";import"./TimeInput-10fd264b.js";import"./useUniqueId-cc8af61f.js";import"./useDidUpdate-f06e2487.js";import"./useUncertainRef-0553f5d8.js";import"./slicedToArray-d75d4238.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-26dffdfb.js";import"./mapCloneElement-c79fb68e.js";import"./index.esm-4533a1af.js";import"./index.esm-bb858611.js";const Q=p.forwardRef((a,c)=>{const{onInputChange:t}=a,u=be(i,500);function i(f){t==null||t(f)}const o=f=>{u(f.target.value)};return e.jsx(O,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by title",prefix:e.jsx(he,{className:"text-lg"}),onChange:o})});Q.displayName="DealTableSearch";const ze=()=>{const a=I(),c=p.useRef(null),t=h(n=>{var d,s;return(s=(d=n.crmDeals)==null?void 0:d.data)==null?void 0:s.tableData}),u=R("Deal","canCreate"),i=n=>{const d=k(t);d.query=n,d.pageIndex=1,typeof n=="string"&&n.length>1&&o(d),typeof n=="string"&&n.length===0&&o(d)},o=n=>{a(n?z(n):E())},f=()=>{a(U()),a(F([])),a(re("Add")),a(F({}))};return p.useEffect(()=>{async function n(){await a(ie())}n()},[a]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Q,{ref:c,onInputChange:i})}),e.jsx("div",{className:"mb-4",children:u&&e.jsx(V,{size:"sm",onClick:f,children:"Add New"})})]})},qe=()=>{const a=I(),c=h(o=>o.crmDeals.data.deleteConfirmation),t=h(o=>o.crmDeals.data.selectedDeals),u=()=>{a(W(!1))},i=async()=>{var f,n,d,s,g;a(W(!1));const o=await a(ne(t.id));await a(E()),(n=(f=o==null?void 0:o.payload)==null?void 0:f.data)!=null&&n.success?$.push(e.jsx(P,{title:"Successfuly Deleted",type:"success",duration:2500,children:(s=(d=o==null?void 0:o.payload)==null?void 0:d.data)==null?void 0:s.message}),{placement:"top-end"}):$.push(e.jsx(P,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=o==null?void 0:o.error)==null?void 0:g.message}),{placement:"top-end"}),await a(E())};return e.jsx(ye,{isOpen:c,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})},M=[],Be=a=>{const{touched:c,errors:t,setFieldValue:u,values:i}=a,o=I();p.useState(!1),p.useState(!1);const[f,n]=p.useState([]);p.useState([]);const[d,s]=p.useState("");p.useEffect(()=>{const m=async()=>{var T,j;try{const{payload:C}=await o(ce()),S=(T=C==null?void 0:C.data)==null?void 0:T.find(w=>(w==null?void 0:w.moduleName)==="clients");if(s(S.id),S){const{payload:w}=await o(de({id:(j=S==null?void 0:S.id)==null?void 0:j.toString()})),l=Oe(w.data);n(l)}}catch(C){console.error("Error fetching module data:",C)}};o(le()),m()},[o]);const g=h(m=>m.crmDeals.data.selectedDeals);p.useState(g?g.tags||[]:[]);const b=Ne(),D=m=>{b.setFieldValue("tagId",m)},y=h(m=>m.crmDeals.data.leadsList);return M.length=0,y==null||y.forEach(m=>{M.push({value:m.id,label:m.title})}),e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Title *",invalid:t.title&&c.title,errorMessage:t.title,children:e.jsx(L,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:O,prefix:e.jsx(xe,{className:"text-xl"})})}),e.jsx(A,{label:"Budget *",invalid:t.budget&&c.budget,errorMessage:t.budget,children:e.jsx(L,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:O,prefix:e.jsx(Re,{className:"text-xl"})})}),e.jsx(A,{label:"Tag",children:e.jsx(L,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:K,options:f,prefix:e.jsx(ke,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:D})}),e.jsx(A,{label:"Connected Lead",invalid:t.leadId&&c.leadId,errorMessage:t.leadId,children:e.jsx(K,{name:"leadId",id:"leadId",value:M.find(m=>(m==null?void 0:m.value)===(i==null?void 0:i.leadId)),options:M,onChange:m=>{u("leadId",m.value||"")}})}),e.jsx(A,{label:"Notes",invalid:t.description&&c.description,errorMessage:t.description,children:e.jsx(L,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:O,prefix:e.jsx(Me,{className:"text-xl"})})})]})},Ve=Ae().shape({title:B().required("Title is required"),description:B(),leadId:B(),budget:Ee().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Le()}),{TabNav:We,TabList:$e,TabContent:Pe}=_,H=p.forwardRef((a,c)=>{var n,d;const t=h(s=>s.crmDeals.data.selectedDeals),u=!!t.id,i=I(),o=async(s,g,b)=>{var m,T,j,C;const D=(m=s==null?void 0:s.payload)!=null&&m.success?g:"Something went wrong !!!",y=(T=s==null?void 0:s.payload)!=null&&T.success?(j=s==null?void 0:s.payload)==null?void 0:j.message:b;$.push(e.jsx(P,{title:D,type:(C=s==null?void 0:s.payload)!=null&&C.success?"success":"danger",duration:2500,children:y}),{placement:"top-end"})},f=async(s,{setSubmitting:g})=>{var b;try{const D={title:s.title,leadId:s.leadId,budget:s.budget.toString(),description:s.description,tagId:s==null?void 0:s.tagId.map(w=>w.value)},{name:y,tagName:m,...T}=s,j=u?await i(me({DealsId:(t==null?void 0:t.id)||"",updatedData:D})):await i(pe(D));await o(j,u?"Successfully Updated":"Successfully Added","An error occurred."),(b=j==null?void 0:j.payload)!=null&&b.success&&i(G()),await Promise.all([i(E())])}catch(D){console.error("An error occurred:",D)}finally{g(!1)}};return e.jsx(ve,{innerRef:c,initialValues:{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",tagId:((n=t==null?void 0:t.tags)==null?void 0:n.map(s=>({label:s.tagName,value:s.id})))||[],budget:(t==null?void 0:t.budget)||"",leadId:((d=t==null?void 0:t.leadModel)==null?void 0:d.id)||""},validationSchema:Ve,onSubmit:f,children:({touched:s,errors:g,values:b,setFieldValue:D})=>e.jsx(Fe,{children:e.jsx(Ie,{children:e.jsxs(_,{defaultValue:"dealsInfo",children:[e.jsx($e,{children:e.jsx(We,{value:"dealsInfo",children:"Deals Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(Pe,{value:"dealsInfo",children:e.jsx(Be,{touched:s,errors:g,setFieldValue:D,values:b})})})]})})})})});H.displayName="DealsForm";const J=p.forwardRef((a,c)=>{I();const t=h(i=>i.crmDeals.data.selectedDeals);h(i=>i.crmDeals.data.dealList);const u=async i=>{};return e.jsx(H,{ref:c,deal:t,onFormSubmit:u})});J.displayName="DealEditContent";const He=({onSaveClick:a,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ke=()=>{const a=I(),c=h(d=>d.crmDeals.data.drawerOpen),[t,u]=p.useState(window.innerWidth/2),i=()=>{a(G()),a(F({}))},o=p.useRef(null),f=()=>{var d;(d=o.current)==null||d.submitForm()};p.useEffect(()=>(window.addEventListener("resize",n),a(ue()),()=>{window.removeEventListener("resize",n)}),[]);const n=()=>{u(window.innerWidth/2)};return e.jsx(Se,{isOpen:c,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(He,{onCancel:i,onSaveClick:f}),onClose:i,onRequestClose:i,children:e.jsx(J,{ref:o})})},Ue=()=>{const a=I(),c=h(l=>l.crmDeals.data.displayedDealsList),t=h(l=>l.crmDeals.data.loading),u=h(l=>l.crmDeals.data.isDialogOpen),{pageIndex:i,pageSize:o,sort:f,query:n,total:d}=h(l=>l.crmDeals.data.tableData),s=p.useCallback(()=>{a(E())},[a]);p.useEffect(()=>{s()},[s]);const g=p.useMemo(()=>({pageIndex:i,pageSize:o,sort:f,query:n,total:d}),[i,o,f,n,d]);h(l=>l.crmDeals.data.selectedDeals);const b=R("Deal","canDelete"),D=R("Deal","canModify"),y=R("Deal","canView"),m=Y(),T=({row:l})=>{const r=I();we();const x=()=>{r(U()),r(F(l))},N=async()=>{await r(F(l)),r(W(!0))},v=()=>{r(F(l));const X=`/app/crm/deal-details/${l.id}`;m(X)};return e.jsxs("div",{className:"flex text-base items-center",children:[D&&e.jsx("button",{className:"circle items-center",onClick:x,children:e.jsx(De,{})}),b&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:N,children:e.jsx(je,{})}),y&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle items-center text-lg",onClick:v,children:e.jsx(Te,{})})]})},j=p.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(T,{row:r.row.original})},{header:"Title",accessorKey:"title",cell:r=>{const x=r.row.original.title;return e.jsx(se,{title:x,children:e.jsx(q,{text:x,maxLength:20})},x)}},{header:"Budget",accessorKey:"budget",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.budget?(v=r.row.original)==null?void 0:v.budget:"-";return e.jsx(q,{text:x,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const x=r.row.original.tags;return x!=null&&x.length>0?e.jsx(Ce,{tags:x}):"-"}},{header:"Connected Lead",accessorKey:"Connected Lead",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.leadModel?(v=r.row.original)==null?void 0:v.leadModel.title:"-";return e.jsx(q,{text:x,maxLength:20})}}],[D,b]),C=l=>{const r=k(g);r.pageIndex=l,a(z(r))},S=l=>{const r=k(g);r.pageSize=Number(l),r.pageIndex=1,a(z(r))},w=l=>{const r=k(g);r.sort=l,a(z(r))};return e.jsxs("div",{children:[e.jsx(ae,{columns:j,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:C,onSelectChange:S,onSort:w}),e.jsx(Ke,{}),e.jsx(qe,{}),e.jsxs(te,{isOpen:u,onClose:()=>a(ge(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(H,{})]})]})};Z("crmDeals",fe);const Ge=()=>{const a=h(c=>c.crmDeals.data.DealsList);return e.jsxs(ee,{bodyClass:"h-full",children:[e.jsx(oe,{title:`Deals (${(a==null?void 0:a.length)||0})`,desc:"",className:"mb-2"}),e.jsx(ze,{}),e.jsx(Ue,{})]})},Ra=Ge;export{Ra as default};
