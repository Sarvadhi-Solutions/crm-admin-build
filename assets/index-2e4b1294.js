import{r as p,j as e,a as I,ap as Y,aq as Z}from"./index-0504f3e5.js";import{A as ee}from"./AdaptableCard-46852138.js";import"./Views-3281299b.js";import"./Badge-f7a2a6cd.js";import"./chart.constant-fdaa2e35.js";import"./GrowShrinkTag-761749d9.js";import"./index-48126d05.js";import{B as V}from"./Button-895a686e.js";import{D as te}from"./Dialog-7d21bbc0.js";import{D as ae}from"./DataTable-9e0c0540.js";import{I as O}from"./Input-b101ae80.js";import"./Skeleton-d9265fba.js";import"./react-tooltip.min-65370a0a.js";import"./RichTextEditor-1e7bc001.js";import"./SegmentItemOption-f1881317.js";import"./SvgIcon-b0904d60.js";import{T as se}from"./Tooltip-8ef6fa0f.js";import{F as oe}from"./FormDesription-8442094c.js";import{u as R}from"./checkEditUpdate-b21811ea.js";import{c as k}from"./cloneDeep-9088825f.js";import{s as re}from"./index-24d2484d.js";import{g as ie}from"./index-0a4f0d8b.js";import{u as h,a as z,g as E,b as U,s as F,t as W,d as ne,c as le,f as ce,e as de,h as me,i as pe,j as G,k as ue,l as ge,r as fe}from"./index-117b3479.js";import{b as he,Q as xe,O as De,P as je}from"./index.esm-25dc1721.js";import{d as be}from"./debounce-79ef0415.js";import{T as Ce}from"./TagsList-76719424.js";import{T as q}from"./TextTruncate-b5256f77.js";import{u as we}from"./useThemeClass-971b53a9.js";import{t as $,N as P}from"./toast-fca74249.js";import{C as ye}from"./ConfirmDialog-a2fd1c5f.js";import{a as Te}from"./index.esm-328a03b9.js";import"./Alert-7d2f3d15.js";import"./RangeCalendar-24e6362b.js";import"./Card-74cd14d0.js";import"./index-1ec4e0d7.js";import"./index-ebf37477.js";import{D as Se}from"./Drawer-f1a47725.js";import"./index-97244f45.js";import{a as A,F as Ie}from"./FormItem-f81129d8.js";import"./toString-d84b2ed4.js";import"./index-e5a431cb.js";import"./index-391881a7.js";import"./index-ce935429.js";import"./Pagination-029cde77.js";import"./Progress-4044e341.js";import"./index-4f4f10ff.js";import"./ScrollBar-50f49651.js";import"./index-2378ff43.js";import{S as K}from"./Select-20a44aea.js";import"./index-cefe9214.js";import"./Switcher-28efe701.js";import"./index-58094b57.js";import{T as _}from"./index-80febe26.js";import"./Tag-d2997001.js";import"./index-fba9cebf.js";import"./index-b6bc4a2a.js";import"./Upload-873f41fa.js";import{u as Ne,b as L,F as ve,a as Fe}from"./formik.esm-0c1c749e.js";import{c as Ae,a as B,d as Ee,e as Le}from"./index.esm-2c9047c6.js";import{T as Me}from"./index.esm-cda4505c.js";/* empty css              */import{t as Oe}from"./tagAndCategory-228f57e7.js";import{a as Re}from"./index.esm-919eaa3b.js";import{G as ke}from"./index.esm-ee201180.js";import"./useMergeRef-788c4cb0.js";import"./index-5a12bd94.js";import"./CloseButton-3bea4048.js";import"./index-855d7752.js";import"./isNil-47784a64.js";import"./get-aa3e1505.js";import"./_MapCache-aa7eeb53.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-dffadfad.js";import"./usePopper-a37d9e71.js";import"./index-67195d75.js";import"./moment-fbc5633a.js";import"./_getPrototype-775a1663.js";import"./CrmService-bf5ebfbc.js";import"./index-53b4fdca.js";import"./index-eecb5e2b.js";import"./useTimeout-70ff9997.js";import"./StatusIcon-cfa55813.js";import"./chainedFunction-070f832c.js";import"./useControllableState-82e33d0d.js";import"./useRootClose-96153693.js";import"./TimeInput-be6447b7.js";import"./useUniqueId-af5a1030.js";import"./useDidUpdate-70853252.js";import"./useUncertainRef-7460d94f.js";import"./slicedToArray-4d298f8f.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8b708ffc.js";import"./mapCloneElement-b8bbda63.js";import"./index.esm-23d1fff1.js";import"./index.esm-7a2fa432.js";const Q=p.forwardRef((a,c)=>{const{onInputChange:t}=a,u=be(i,500);function i(f){t==null||t(f)}const o=f=>{u(f.target.value)};return e.jsx(O,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by title",prefix:e.jsx(he,{className:"text-lg"}),onChange:o})});Q.displayName="DealTableSearch";const ze=()=>{const a=I(),c=p.useRef(null),t=h(n=>{var d,s;return(s=(d=n.crmDeals)==null?void 0:d.data)==null?void 0:s.tableData}),u=R("Deal","canCreate"),i=n=>{const d=k(t);d.query=n,d.pageIndex=1,typeof n=="string"&&n.length>1&&o(d),typeof n=="string"&&n.length===0&&o(d)},o=n=>{a(n?z(n):E())},f=()=>{a(U()),a(F([])),a(re("Add")),a(F({}))};return p.useEffect(()=>{async function n(){await a(ie())}n()},[a]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Q,{ref:c,onInputChange:i})}),e.jsx("div",{className:"mb-4",children:u&&e.jsx(V,{size:"sm",onClick:f,children:"Add New"})})]})},qe=()=>{const a=I(),c=h(o=>o.crmDeals.data.deleteConfirmation),t=h(o=>o.crmDeals.data.selectedDeals),u=()=>{a(W(!1))},i=async()=>{var f,n,d,s,g;a(W(!1));const o=await a(ne(t.id));await a(E()),(n=(f=o==null?void 0:o.payload)==null?void 0:f.data)!=null&&n.success?$.push(e.jsx(P,{title:"Successfuly Deleted",type:"success",duration:2500,children:(s=(d=o==null?void 0:o.payload)==null?void 0:d.data)==null?void 0:s.message}),{placement:"top-end"}):$.push(e.jsx(P,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=o==null?void 0:o.error)==null?void 0:g.message}),{placement:"top-end"}),await a(E())};return e.jsx(ye,{isOpen:c,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})},M=[],Be=a=>{const{touched:c,errors:t,setFieldValue:u,values:i}=a,o=I();p.useState(!1),p.useState(!1);const[f,n]=p.useState([]);p.useState([]);const[d,s]=p.useState("");p.useEffect(()=>{const m=async()=>{var T,j;try{const{payload:C}=await o(ce()),S=(T=C==null?void 0:C.data)==null?void 0:T.find(w=>(w==null?void 0:w.moduleName)==="clients");if(s(S.id),S){const{payload:w}=await o(de({id:(j=S==null?void 0:S.id)==null?void 0:j.toString()})),l=Oe(w.data);n(l)}}catch(C){console.error("Error fetching module data:",C)}};o(le()),m()},[o]);const g=h(m=>m.crmDeals.data.selectedDeals);p.useState(g?g.tags||[]:[]);const b=Ne(),D=m=>{b.setFieldValue("tagId",m)},y=h(m=>m.crmDeals.data.leadsList);return M.length=0,y==null||y.forEach(m=>{M.push({value:m.id,label:m.title})}),e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Title *",invalid:t.title&&c.title,errorMessage:t.title,children:e.jsx(L,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:O,prefix:e.jsx(xe,{className:"text-xl"})})}),e.jsx(A,{label:"Budget *",invalid:t.budget&&c.budget,errorMessage:t.budget,children:e.jsx(L,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:O,prefix:e.jsx(Re,{className:"text-xl"})})}),e.jsx(A,{label:"Tag",children:e.jsx(L,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:K,options:f,prefix:e.jsx(ke,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:D})}),e.jsx(A,{label:"Connected Lead",invalid:t.leadId&&c.leadId,errorMessage:t.leadId,children:e.jsx(K,{name:"leadId",id:"leadId",value:M.find(m=>(m==null?void 0:m.value)===(i==null?void 0:i.leadId)),options:M,onChange:m=>{u("leadId",m.value||"")}})}),e.jsx(A,{label:"Notes",invalid:t.description&&c.description,errorMessage:t.description,children:e.jsx(L,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:O,prefix:e.jsx(Me,{className:"text-xl"})})})]})},Ve=Ae().shape({title:B().required("Title is required"),description:B(),leadId:B(),budget:Ee().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Le()}),{TabNav:We,TabList:$e,TabContent:Pe}=_,H=p.forwardRef((a,c)=>{var n,d;const t=h(s=>s.crmDeals.data.selectedDeals),u=!!t.id,i=I(),o=async(s,g,b)=>{var m,T,j,C;const D=(m=s==null?void 0:s.payload)!=null&&m.success?g:"Something went wrong !!!",y=(T=s==null?void 0:s.payload)!=null&&T.success?(j=s==null?void 0:s.payload)==null?void 0:j.message:b;$.push(e.jsx(P,{title:D,type:(C=s==null?void 0:s.payload)!=null&&C.success?"success":"danger",duration:2500,children:y}),{placement:"top-end"})},f=async(s,{setSubmitting:g})=>{var b;try{const D={title:s.title,leadId:s.leadId,budget:s.budget.toString(),description:s.description,tagId:s==null?void 0:s.tagId.map(w=>w.value)},{name:y,tagName:m,...T}=s,j=u?await i(me({DealsId:(t==null?void 0:t.id)||"",updatedData:D})):await i(pe(D));await o(j,u?"Successfully Updated":"Successfully Added","An error occurred."),(b=j==null?void 0:j.payload)!=null&&b.success&&i(G()),await Promise.all([i(E())])}catch(D){console.error("An error occurred:",D)}finally{g(!1)}};return e.jsx(ve,{innerRef:c,initialValues:{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",tagId:((n=t==null?void 0:t.tags)==null?void 0:n.map(s=>({label:s.tagName,value:s.id})))||[],budget:(t==null?void 0:t.budget)||"",leadId:((d=t==null?void 0:t.leadModel)==null?void 0:d.id)||""},validationSchema:Ve,onSubmit:f,children:({touched:s,errors:g,values:b,setFieldValue:D})=>e.jsx(Fe,{children:e.jsx(Ie,{children:e.jsxs(_,{defaultValue:"dealsInfo",children:[e.jsx($e,{children:e.jsx(We,{value:"dealsInfo",children:"Deals Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(Pe,{value:"dealsInfo",children:e.jsx(Be,{touched:s,errors:g,setFieldValue:D,values:b})})})]})})})})});H.displayName="DealsForm";const J=p.forwardRef((a,c)=>{I();const t=h(i=>i.crmDeals.data.selectedDeals);h(i=>i.crmDeals.data.dealList);const u=async i=>{};return e.jsx(H,{ref:c,deal:t,onFormSubmit:u})});J.displayName="DealEditContent";const He=({onSaveClick:a,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ke=()=>{const a=I(),c=h(d=>d.crmDeals.data.drawerOpen),[t,u]=p.useState(window.innerWidth/2),i=()=>{a(G()),a(F({}))},o=p.useRef(null),f=()=>{var d;(d=o.current)==null||d.submitForm()};p.useEffect(()=>(window.addEventListener("resize",n),a(ue()),()=>{window.removeEventListener("resize",n)}),[]);const n=()=>{u(window.innerWidth/2)};return e.jsx(Se,{isOpen:c,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(He,{onCancel:i,onSaveClick:f}),onClose:i,onRequestClose:i,children:e.jsx(J,{ref:o})})},Ue=()=>{const a=I(),c=h(l=>l.crmDeals.data.displayedDealsList),t=h(l=>l.crmDeals.data.loading),u=h(l=>l.crmDeals.data.isDialogOpen),{pageIndex:i,pageSize:o,sort:f,query:n,total:d}=h(l=>l.crmDeals.data.tableData),s=p.useCallback(()=>{a(E())},[a]);p.useEffect(()=>{s()},[s]);const g=p.useMemo(()=>({pageIndex:i,pageSize:o,sort:f,query:n,total:d}),[i,o,f,n,d]);h(l=>l.crmDeals.data.selectedDeals);const b=R("Deal","canDelete"),D=R("Deal","canModify"),y=R("Deal","canView"),m=Y(),T=({row:l})=>{const r=I();we();const x=()=>{r(U()),r(F(l))},N=async()=>{await r(F(l)),r(W(!0))},v=()=>{r(F(l));const X=`/app/crm/deal-details/${l.id}`;m(X)};return e.jsxs("div",{className:"flex text-base items-center",children:[D&&e.jsx("button",{className:"circle items-center",onClick:x,children:e.jsx(De,{})}),b&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:N,children:e.jsx(je,{})}),y&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle items-center text-lg",onClick:v,children:e.jsx(Te,{})})]})},j=p.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(T,{row:r.row.original})},{header:"Title",accessorKey:"title",cell:r=>{const x=r.row.original.title;return e.jsx(se,{title:x,children:e.jsx(q,{text:x,maxLength:20})},x)}},{header:"Budget",accessorKey:"budget",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.budget?(v=r.row.original)==null?void 0:v.budget:"-";return e.jsx(q,{text:x,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const x=r.row.original.tags;return x!=null&&x.length>0?e.jsx(Ce,{tags:x}):"-"}},{header:"Connected Lead",accessorKey:"Connected Lead",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.leadModel?(v=r.row.original)==null?void 0:v.leadModel.title:"-";return e.jsx(q,{text:x,maxLength:20})}}],[D,b]),C=l=>{const r=k(g);r.pageIndex=l,a(z(r))},S=l=>{const r=k(g);r.pageSize=Number(l),r.pageIndex=1,a(z(r))},w=l=>{const r=k(g);r.sort=l,a(z(r))};return e.jsxs("div",{children:[e.jsx(ae,{columns:j,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:C,onSelectChange:S,onSort:w}),e.jsx(Ke,{}),e.jsx(qe,{}),e.jsxs(te,{isOpen:u,onClose:()=>a(ge(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(H,{})]})]})};Z("crmDeals",fe);const Ge=()=>{const a=h(c=>c.crmDeals.data.DealsList);return e.jsxs(ee,{bodyClass:"h-full",children:[e.jsx(oe,{title:`Deals (${(a==null?void 0:a.length)||0})`,desc:"",className:"mb-2"}),e.jsx(ze,{}),e.jsx(Ue,{})]})},Ra=Ge;export{Ra as default};
