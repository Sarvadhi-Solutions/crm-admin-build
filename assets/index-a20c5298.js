import{r as g,j as e,a as I,al as Y,aq as Z}from"./index-01b42c77.js";import{A as ee}from"./AdaptableCard-74120e91.js";import"./Views-0a1f8861.js";import"./Badge-6cc907e6.js";import"./chart.constant-8991471a.js";import"./GrowShrinkTag-a3ea01ed.js";import"./index-b609fa7a.js";import{B as V}from"./Button-a5544b15.js";import{D as te}from"./Dialog-b7c1600d.js";import{D as ae}from"./DataTable-2544ad05.js";import{I as O}from"./Input-b0748b3e.js";import"./Skeleton-cf28f7d5.js";import"./react-tooltip.min-cd40762f.js";import"./RichTextEditor-d17e3214.js";import"./SegmentItemOption-b31b5145.js";import"./SvgIcon-dc305fe7.js";import{T as se}from"./Tooltip-06c83e8f.js";import{F as oe}from"./FormDesription-3c60f0a2.js";import{u as k}from"./checkEditUpdate-27f908f6.js";import{c as R}from"./cloneDeep-29f2aae8.js";import{s as re}from"./index-f1ab8068.js";import{u as f,a as z,g as E,b as U,s as F,t as W,d as ie,c as ne,f as le,e as ce,h as de,i as me,j as G,k as pe,r as ue}from"./index-922e51fc.js";import{b as ge,Q as he,O as fe,P as xe}from"./index.esm-587e89d5.js";import{d as De}from"./debounce-9cff76d4.js";import{T as je}from"./TagsList-35e036c3.js";import{T as q}from"./TextTruncate-93f99085.js";import{u as be}from"./useThemeClass-42da9995.js";import{t as $,N as P}from"./toast-9d39500f.js";import{C as Ce}from"./ConfirmDialog-a691c410.js";import{a as we}from"./index.esm-44ca1025.js";import"./Alert-ba84ad42.js";import"./RangeCalendar-7e850f6c.js";import"./Card-039a9ed6.js";import"./index-dab07eaf.js";import"./index-a9a60eee.js";import{D as ye}from"./Drawer-a351bd90.js";import"./index-71de6292.js";import{a as A,F as Te}from"./FormItem-4a386e6f.js";import"./toString-228d794c.js";import"./index-2bfb9d4e.js";import"./index-ca28e0d9.js";import"./index-a6a0da8c.js";import"./Pagination-d57e7c83.js";import"./Progress-613f4d7f.js";import"./index-8ad179bb.js";import"./ScrollBar-349c0130.js";import"./index-92468997.js";import{S as K}from"./Select-2cf95561.js";import"./index-b9cef8bb.js";import"./Switcher-cf39306f.js";import"./index-f7318691.js";import{T as _}from"./index-0fe1020b.js";import"./Tag-989e3abd.js";import"./index-8359d520.js";import"./index-3b362267.js";import"./Upload-b982e753.js";import{u as Se,b as L,F as Ie,a as Ne}from"./formik.esm-a8cc53a4.js";import{c as ve,a as B,d as Fe,e as Ae}from"./index.esm-d51743a0.js";import{T as Ee}from"./index.esm-1917add6.js";/* empty css              */import{a as Le}from"./tagAndCategory-e3148533.js";import{a as Me}from"./index.esm-b7456581.js";import{G as Oe}from"./index.esm-e0d3397a.js";import"./useMergeRef-788c4cb0.js";import"./index-07bde89e.js";import"./CloseButton-f0093569.js";import"./index-ffd8f14d.js";import"./isNil-93830b79.js";import"./get-4bda1c07.js";import"./_MapCache-466adbaa.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-e4dc226f.js";import"./usePopper-f47dd5aa.js";import"./index-5bdc2e1d.js";import"./moment-fbc5633a.js";import"./_getPrototype-583e3aad.js";import"./CrmService-fb54ad5b.js";import"./index-6cd17dbd.js";import"./index-99289558.js";import"./useTimeout-459c0c98.js";import"./StatusIcon-f4c9b6a3.js";import"./chainedFunction-070f832c.js";import"./useControllableState-6df01025.js";import"./useRootClose-25e3e193.js";import"./TimeInput-1e7df44b.js";import"./useUniqueId-3c39e5d6.js";import"./useDidUpdate-172f95a0.js";import"./useUncertainRef-9e1ddaf5.js";import"./slicedToArray-0eb2b673.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-f54b4040.js";import"./mapCloneElement-830eb65c.js";import"./index.esm-30f67dfd.js";import"./index.esm-68702517.js";const Q=g.forwardRef((s,c)=>{const{onInputChange:t}=s,p=De(i,500);function i(h){t==null||t(h)}const o=h=>{p(h.target.value)};return e.jsx(O,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by title",prefix:e.jsx(ge,{className:"text-lg"}),onChange:o})});Q.displayName="DealTableSearch";const ke=()=>{const s=I(),c=g.useRef(null),t=f(n=>{var d,a;return(a=(d=n.crmDeals)==null?void 0:d.data)==null?void 0:a.tableData}),p=k("Deal","canCreate"),i=n=>{const d=R(t);d.query=n,d.pageIndex=1,typeof n=="string"&&n.length>1&&o(d),typeof n=="string"&&n.length===0&&o(d)},o=n=>{s(n?z(n):E())},h=()=>{s(U()),s(F([])),s(re("Add")),s(F({}))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Q,{ref:c,onInputChange:i})}),e.jsx("div",{className:"mb-4",children:p&&e.jsx(V,{size:"sm",onClick:h,children:"Add New"})})]})},Re=()=>{const s=I(),c=f(o=>o.crmDeals.data.deleteConfirmation),t=f(o=>o.crmDeals.data.selectedDeals),p=()=>{s(W(!1))},i=async()=>{var h,n,d,a,u;s(W(!1));const o=await s(ie(t.id));await s(E()),(n=(h=o==null?void 0:o.payload)==null?void 0:h.data)!=null&&n.success?$.push(e.jsx(P,{title:"Successfuly Deleted",type:"success",duration:2500,children:(a=(d=o==null?void 0:o.payload)==null?void 0:d.data)==null?void 0:a.message}),{placement:"top-end"}):$.push(e.jsx(P,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=o==null?void 0:o.error)==null?void 0:u.message}),{placement:"top-end"}),await s(E())};return e.jsx(Ce,{isOpen:c,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:p,onRequestClose:p,onCancel:p,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})},M=[],ze=s=>{const{touched:c,errors:t,setFieldValue:p,values:i}=s,o=I();g.useState(!1),g.useState(!1);const[h,n]=g.useState([]);g.useState([]);const[d,a]=g.useState("");g.useEffect(()=>{const m=async()=>{var T,j;try{const{payload:C}=await o(le()),S=(T=C==null?void 0:C.data)==null?void 0:T.find(w=>(w==null?void 0:w.moduleName)==="deal");if(a(S.id),S){const{payload:w}=await o(ce({id:(j=S==null?void 0:S.id)==null?void 0:j.toString()})),l=Le(w.data);n(l)}}catch(C){console.error("Error fetching module data:",C)}};o(ne()),m()},[o]);const u=f(m=>m.crmDeals.data.selectedDeals);g.useState(u?u.tags||[]:[]);const b=Se(),D=m=>{b.setFieldValue("tagId",m)},y=f(m=>m.crmDeals.data.leadsList);return M.length=0,y==null||y.forEach(m=>{M.push({value:m.id,label:m.title})}),e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Title *",invalid:t.title&&c.title,errorMessage:t.title,children:e.jsx(L,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:O,prefix:e.jsx(he,{className:"text-xl"})})}),e.jsx(A,{label:"Budget *",invalid:t.budget&&c.budget,errorMessage:t.budget,children:e.jsx(L,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:O,prefix:e.jsx(Me,{className:"text-xl"})})}),e.jsx(A,{label:"Tag",children:e.jsx(L,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:K,options:h,prefix:e.jsx(Oe,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:D})}),e.jsx(A,{label:"Connected Lead",invalid:t.leadId&&c.leadId,errorMessage:t.leadId,children:e.jsx(K,{name:"leadId",id:"leadId",value:M.find(m=>(m==null?void 0:m.value)===(i==null?void 0:i.leadId)),options:M,onChange:m=>{p("leadId",m.value||"")}})}),e.jsx(A,{label:"Notes",invalid:t.description&&c.description,errorMessage:t.description,children:e.jsx(L,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:O,prefix:e.jsx(Ee,{className:"text-xl"})})})]})},qe=ve().shape({title:B().required("Title is required"),description:B(),leadId:B(),budget:Fe().test("greaterThanOne","Budget must be greater than 1",s=>s>0).required("Budget is required"),tagId:Ae()}),{TabNav:Be,TabList:Ve,TabContent:We}=_,H=g.forwardRef((s,c)=>{var n,d;const t=f(a=>a.crmDeals.data.selectedDeals),p=!!t.id,i=I(),o=async(a,u,b)=>{var m,T,j,C;const D=(m=a==null?void 0:a.payload)!=null&&m.success?u:"Something went wrong !!!",y=(T=a==null?void 0:a.payload)!=null&&T.success?(j=a==null?void 0:a.payload)==null?void 0:j.message:b;$.push(e.jsx(P,{title:D,type:(C=a==null?void 0:a.payload)!=null&&C.success?"success":"danger",duration:2500,children:y}),{placement:"top-end"})},h=async(a,{setSubmitting:u})=>{var b;try{const D={title:a.title,leadId:a.leadId,budget:a.budget.toString(),description:a.description,tagId:a==null?void 0:a.tagId.map(w=>w.value)},{name:y,tagName:m,...T}=a,j=p?await i(de({DealsId:(t==null?void 0:t.id)||"",updatedData:D})):await i(me(D));await o(j,p?"Successfully Updated":"Successfully Added","An error occurred."),(b=j==null?void 0:j.payload)!=null&&b.success&&i(G()),await Promise.all([i(E())])}catch(D){console.error("An error occurred:",D)}finally{u(!1)}};return e.jsx(Ie,{innerRef:c,initialValues:{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",tagId:((n=t==null?void 0:t.tags)==null?void 0:n.map(a=>({label:a.tagName,value:a.id})))||[],budget:(t==null?void 0:t.budget)||"",leadId:((d=t==null?void 0:t.leadModel)==null?void 0:d.id)||""},validationSchema:qe,onSubmit:h,children:({touched:a,errors:u,values:b,setFieldValue:D})=>e.jsx(Ne,{children:e.jsx(Te,{children:e.jsxs(_,{defaultValue:"dealsInfo",children:[e.jsx(Ve,{children:e.jsx(Be,{value:"dealsInfo",children:"Deals Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(We,{value:"dealsInfo",children:e.jsx(ze,{touched:a,errors:u,setFieldValue:D,values:b})})})]})})})})});H.displayName="DealsForm";const J=g.forwardRef((s,c)=>{I();const t=f(i=>i.crmDeals.data.selectedDeals);f(i=>i.crmDeals.data.dealList);const p=async i=>{};return e.jsx(H,{ref:c,deal:t,onFormSubmit:p})});J.displayName="DealEditContent";const $e=({onSaveClick:s,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Pe=()=>{const s=I(),c=f(d=>d.crmDeals.data.drawerOpen),[t,p]=g.useState(window.innerWidth/2),i=()=>{s(G()),s(F({}))},o=g.useRef(null),h=()=>{var d;(d=o.current)==null||d.submitForm()};g.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]);const n=()=>{p(window.innerWidth/2)};return e.jsx(ye,{isOpen:c,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx($e,{onCancel:i,onSaveClick:h}),onClose:i,onRequestClose:i,children:e.jsx(J,{ref:o})})},He=()=>{const s=I(),c=f(l=>l.crmDeals.data.displayedDealsList),t=f(l=>l.crmDeals.data.loading),p=f(l=>l.crmDeals.data.isDialogOpen),{pageIndex:i,pageSize:o,sort:h,query:n,total:d}=f(l=>l.crmDeals.data.tableData),a=g.useCallback(()=>{s(E())},[s]);g.useEffect(()=>{a()},[a]);const u=g.useMemo(()=>({pageIndex:i,pageSize:o,sort:h,query:n,total:d}),[i,o,h,n,d]);f(l=>l.crmDeals.data.selectedDeals);const b=k("Deal","canDelete"),D=k("Deal","canModify"),y=k("Deal","canView"),m=Y(),T=({row:l})=>{const r=I();be();const x=()=>{r(U()),r(F(l))},N=async()=>{await r(F(l)),r(W(!0))},v=()=>{r(F(l));const X=`/app/crm/deal-details/${l.id}`;m(X)};return e.jsxs("div",{className:"flex text-base items-center",children:[D&&e.jsx("button",{className:"circle items-center",onClick:x,children:e.jsx(fe,{})}),b&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:N,children:e.jsx(xe,{})}),y&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle items-center text-lg",onClick:v,children:e.jsx(we,{})})]})},j=g.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(T,{row:r.row.original})},{header:"Title",accessorKey:"title",cell:r=>{const x=r.row.original.title;return e.jsx(se,{title:x,children:e.jsx(q,{text:x,maxLength:20})},x)}},{header:"Budget",accessorKey:"budget",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.budget?(v=r.row.original)==null?void 0:v.budget:"-";return e.jsx(q,{text:x,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const x=r.row.original.tags;return x!=null&&x.length>0?e.jsx(je,{tags:x}):"-"}},{header:"Connected Lead",accessorKey:"Connected Lead",cell:r=>{var N,v;const x=(N=r.row.original)!=null&&N.leadModel?(v=r.row.original)==null?void 0:v.leadModel.title:"-";return e.jsx(q,{text:x,maxLength:20})}}],[D,b]),C=l=>{const r=R(u);r.pageIndex=l,s(z(r))},S=l=>{const r=R(u);r.pageSize=Number(l),r.pageIndex=1,s(z(r))},w=l=>{const r=R(u);r.sort=l,s(z(r))};return e.jsxs("div",{children:[e.jsx(ae,{columns:j,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:C,onSelectChange:S,onSort:w}),e.jsx(Pe,{}),e.jsx(Re,{}),e.jsxs(te,{isOpen:p,onClose:()=>s(pe(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(H,{})]})]})};Z("crmDeals",ue);const Ke=()=>{const s=f(c=>c.crmDeals.data.DealsList);return e.jsxs(ee,{bodyClass:"h-full",children:[e.jsx(oe,{title:`Deals (${(s==null?void 0:s.length)||0})`,desc:"",className:"mb-2"}),e.jsx(ke,{}),e.jsx(He,{})]})},La=Ke;export{La as default};
