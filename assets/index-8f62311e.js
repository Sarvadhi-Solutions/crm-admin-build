import{r as p,j as e,a as I,ap as Z,aq as ee}from"./index-c4854441.js";import{A as te}from"./AdaptableCard-c03e443e.js";import"./Views-a7a22f5b.js";import"./Badge-ab812656.js";import"./chart.constant-33f94cf9.js";import"./chart.config-3e4495ec.js";import"./index-7f0011a9.js";import{B as V}from"./Button-01aee70f.js";import{D as ae}from"./Dialog-1a78eb06.js";import{D as se}from"./DataTable-c212c69f.js";import{I as O}from"./Input-6e1fc018.js";import"./GrowShrinkTag-b6ec35ba.js";import"./Skeleton-7820a1d7.js";import"./react-tooltip.min-5a60ee3f.js";import"./RichTextEditor-a1431fa0.js";import"./SegmentItemOption-e39e8725.js";import"./SvgIcon-7439607c.js";import{T as H}from"./Tooltip-ff9677e2.js";import{F as oe}from"./FormDesription-6bc517f8.js";import{u as k}from"./checkEditUpdate-648010e4.js";import{c as z}from"./cloneDeep-57418006.js";import{s as re}from"./index-99a7ca48.js";import{g as ie}from"./index-d2403a8a.js";import{u as x,a as q,g as L,b as G,s as F,t as W,d as ne,c as le,f as ce,e as de,h as me,i as pe,j as _,k as ue,l as ge,r as he}from"./index-d55013a8.js";import{b as fe,R as xe,P as De,Q as je}from"./index.esm-600eab3e.js";import{d as be}from"./debounce-af9b1df5.js";import{T as we}from"./TagsList-07470663.js";import{T as E}from"./TextTruncate-2bfa3d6a.js";import{u as Ce}from"./useThemeClass-58ccaa98.js";import{t as $,N as K}from"./toast-f5971c5e.js";import{C as ye}from"./ConfirmDialog-2a50d9e0.js";import{a as Te}from"./index.esm-f9d2499d.js";import"./Alert-c43b1341.js";import"./RangeCalendar-60cea8df.js";import"./Card-694d2290.js";import"./index-199241b3.js";import"./index-4960ea6a.js";import{D as Se}from"./Drawer-459fd2f8.js";import"./index-516e2d91.js";import{a as A,F as Ne}from"./FormItem-f088ddbb.js";import"./toString-9f124ebf.js";import"./index-b9e48651.js";import"./index-69125dab.js";import"./index-337c98e1.js";import"./Pagination-91f29835.js";import"./Progress-1eb48ff9.js";import"./index-6afc7114.js";import"./ScrollBar-7a627a75.js";import"./index-fee22201.js";import{S as U}from"./Select-a3dcfbd9.js";import"./index-1b4d8032.js";import"./Switcher-9b266edd.js";import"./index-2a967f86.js";import{T as Q}from"./index-2020af5b.js";import"./Tag-ca3c125e.js";import"./index-954fdf33.js";import"./index-b126a36b.js";import"./Upload-1e5004d3.js";import{u as Ie,b as R,F as ve,a as Fe}from"./formik.esm-20e607de.js";import{c as Ae,a as B,d as Le,e as Ee}from"./index.esm-6307d99d.js";import{T as Re}from"./index.esm-c20a7424.js";/* empty css              */import{t as Me}from"./tagAndCategory-228f57e7.js";import{a as Oe}from"./index.esm-40a48121.js";import{G as ke}from"./index.esm-f80fcb5d.js";import"./useMergeRef-788c4cb0.js";import"./index-12fb9f3c.js";import"./CloseButton-481ca768.js";import"./index-706b8eda.js";import"./isNil-c3c7dc62.js";import"./get-1a41de3d.js";import"./_MapCache-cce6ed45.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-7cb4339e.js";import"./usePopper-36d997d0.js";import"./index-611f00f8.js";import"./_getPrototype-37ec97c4.js";import"./CrmService-2767e679.js";import"./index-0d06fcfb.js";import"./index-ded1b8d8.js";import"./useTimeout-52e2a342.js";import"./StatusIcon-9c6ff3de.js";import"./chainedFunction-070f832c.js";import"./useControllableState-f590672a.js";import"./useRootClose-7d26ea3b.js";import"./TimeInput-028532aa.js";import"./useUniqueId-ef880a97.js";import"./useDidUpdate-d042343d.js";import"./useUncertainRef-3dcc2864.js";import"./slicedToArray-5b2b8266.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./mapCloneElement-7f5ffe17.js";import"./index.esm-626783fa.js";import"./index.esm-e743b778.js";const J=p.forwardRef((a,c)=>{const{onInputChange:t}=a,u=be(i,500);function i(f){t==null||t(f)}const o=f=>{u(f.target.value)};return e.jsx(O,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(fe,{className:"text-lg"}),onChange:o})});J.displayName="DealTableSearch";const ze=()=>{const a=I(),c=p.useRef(null),t=x(n=>{var d,s;return(s=(d=n.crmDeals)==null?void 0:d.data)==null?void 0:s.tableData}),u=k("Deal","canCreate"),i=n=>{const d=z(t);d.query=n,d.pageIndex=1,typeof n=="string"&&n.length>1&&o(d),typeof n=="string"&&n.length===0&&o(d)},o=n=>{a(n?q(n):L())},f=()=>{a(G()),a(F([])),a(re("Add")),a(F({}))};return p.useEffect(()=>{async function n(){await a(ie())}n()},[a]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:c,onInputChange:i})}),e.jsx("div",{className:"mb-4",children:u&&e.jsx(V,{size:"sm",onClick:f,children:"Add New"})})]})},qe=()=>{const a=I(),c=x(o=>o.crmDeals.data.deleteConfirmation),t=x(o=>o.crmDeals.data.selectedDeals),u=()=>{a(W(!1))},i=async()=>{var f,n,d,s,g;a(W(!1));const o=await a(ne(t.id));await a(L()),(n=(f=o==null?void 0:o.payload)==null?void 0:f.data)!=null&&n.success?$.push(e.jsx(K,{title:"Successfuly Deleted",type:"success",duration:2500,children:(s=(d=o==null?void 0:o.payload)==null?void 0:d.data)==null?void 0:s.message}),{placement:"top-end"}):$.push(e.jsx(K,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=o==null?void 0:o.error)==null?void 0:g.message}),{placement:"top-end"}),await a(L())};return e.jsx(ye,{isOpen:c,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})},M=[],Be=a=>{const{touched:c,errors:t,setFieldValue:u,values:i}=a,o=I();p.useState(!1),p.useState(!1);const[f,n]=p.useState([]);p.useState([]);const[d,s]=p.useState("");p.useEffect(()=>{const m=async()=>{var y,N;try{const{payload:j}=await o(ce()),T=(y=j==null?void 0:j.data)==null?void 0:y.find(v=>(v==null?void 0:v.moduleName)==="clients");if(s(T.id),T){const{payload:v}=await o(de({id:(N=T==null?void 0:T.id)==null?void 0:N.toString()})),l=Me(v.data);n(l)}}catch(j){console.error("Error fetching module data:",j)}};o(le()),m()},[o]);const g=x(m=>m.crmDeals.data.selectedDeals);p.useState(g?g.tags||[]:[]);const D=Ie(),C=m=>{D.setFieldValue("tagId",m)},S=x(m=>m.crmDeals.data.leadsList);return M.length=0,S==null||S.forEach(m=>{M.push({value:m.id,label:m.title})}),e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Title *",invalid:t.title&&c.title,errorMessage:t.title,children:e.jsx(R,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:O,prefix:e.jsx(xe,{className:"text-xl"})})}),e.jsx(A,{label:"Budget *",invalid:t.budget&&c.budget,errorMessage:t.budget,children:e.jsx(R,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:O,prefix:e.jsx(Oe,{className:"text-xl"})})}),e.jsx(A,{label:"Tag",children:e.jsx(R,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:U,options:f,prefix:e.jsx(ke,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:C})}),e.jsx(A,{label:"Connected Lead",invalid:t.leadId&&c.leadId,errorMessage:t.leadId,children:e.jsx(U,{name:"leadId",id:"leadId",value:M.find(m=>(m==null?void 0:m.value)===(i==null?void 0:i.leadId)),options:M,onChange:m=>{u("leadId",m.value||"")}})}),e.jsx(A,{label:"Notes",invalid:t.description&&c.description,errorMessage:t.description,children:e.jsx(R,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:O,prefix:e.jsx(Re,{className:"text-xl"})})})]})},Ve=Ae().shape({title:B().required("Title is required"),description:B(),leadId:B(),budget:Le().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Ee()}),{TabNav:We,TabList:$e,TabContent:Ke}=Q,P=p.forwardRef((a,c)=>{var n,d;const t=x(s=>s.crmDeals.data.selectedDeals),u=!!t.id,i=I(),o=async(s,g,D)=>{var m,y,N,j;const C=(m=s==null?void 0:s.payload)!=null&&m.success?g:"Something went wrong !!!",S=(y=s==null?void 0:s.payload)!=null&&y.success?(N=s==null?void 0:s.payload)==null?void 0:N.message:D;$.push(e.jsx(K,{title:C,type:(j=s==null?void 0:s.payload)!=null&&j.success?"success":"danger",duration:2500,children:S}),{placement:"top-end"})},f=async(s,{setSubmitting:g})=>{try{const D={title:s.title,leadId:s.leadId,budget:s.budget.toString(),description:s.description,tagId:s==null?void 0:s.tagId.map(T=>T.value)},{name:C,tagName:S,...m}=s,y=u?await i(me({DealsId:(t==null?void 0:t.id)||"",updatedData:D})):await i(pe(D));await o(y,u?"Successfully Updated":"Successfully Added","An error occurred."),i(_()),await Promise.all([i(L())])}catch(D){console.error("An error occurred:",D)}finally{g(!1)}};return e.jsx(ve,{innerRef:c,initialValues:{title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",tagId:((n=t==null?void 0:t.tags)==null?void 0:n.map(s=>({label:s.tagName,value:s.id})))||[],budget:(t==null?void 0:t.budget)||"",leadId:((d=t==null?void 0:t.leadModel)==null?void 0:d.id)||""},validationSchema:Ve,onSubmit:f,children:({touched:s,errors:g,values:D,setFieldValue:C})=>e.jsx(Fe,{children:e.jsx(Ne,{children:e.jsxs(Q,{defaultValue:"dealsInfo",children:[e.jsx($e,{children:e.jsx(We,{value:"dealsInfo",children:"Deals Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ke,{value:"dealsInfo",children:e.jsx(Be,{touched:s,errors:g,setFieldValue:C,values:D})})})]})})})})});P.displayName="DealsForm";const X=p.forwardRef((a,c)=>{I();const t=x(i=>i.crmDeals.data.selectedDeals);x(i=>i.crmDeals.data.dealList);const u=async i=>{};return e.jsx(P,{ref:c,deal:t,onFormSubmit:u})});X.displayName="DealEditContent";const Pe=({onSaveClick:a,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),He=()=>{const a=I(),c=x(d=>d.crmDeals.data.drawerOpen),[t,u]=p.useState(window.innerWidth/2),i=()=>{a(_()),a(F({}))},o=p.useRef(null),f=()=>{var d;(d=o.current)==null||d.submitForm()};p.useEffect(()=>(window.addEventListener("resize",n),a(ue()),()=>{window.removeEventListener("resize",n)}),[]);const n=()=>{u(window.innerWidth/2)};return e.jsx(Se,{isOpen:c,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(Pe,{onCancel:i,onSaveClick:f}),onClose:i,onRequestClose:i,children:e.jsx(X,{ref:o})})},Ue=()=>{const a=I(),c=x(l=>l.crmDeals.data.displayedDealsList),t=x(l=>l.crmDeals.data.loading),u=x(l=>l.crmDeals.data.isDialogOpen),{pageIndex:i,pageSize:o,sort:f,query:n,total:d}=x(l=>l.crmDeals.data.tableData),s=p.useCallback(()=>{a(L())},[a]);p.useEffect(()=>{s()},[s]);const g=p.useMemo(()=>({pageIndex:i,pageSize:o,sort:f,query:n,total:d}),[i,o,f,n,d]);x(l=>l.crmDeals.data.selectedDeals);const D=k("Deal","canDelete"),C=k("Deal","canModify"),S=k("Deal","canView"),m=Z(),y=({row:l})=>{const r=I();Ce();const h=()=>{r(G()),r(F(l))},b=async()=>{await r(F(l)),r(W(!0))},w=()=>{r(F(l));const Y=`/app/crm/deal-details/${l.id}`;m(Y)};return e.jsxs("div",{className:"flex text-base items-center",children:[C&&e.jsx("button",{className:"circle items-center",onClick:h,children:e.jsx(De,{})}),D&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:b,children:e.jsx(je,{})}),S&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle items-center text-lg",onClick:w,children:e.jsx(Te,{})})]})},N=p.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(y,{row:r.row.original})},{header:"Title",accessorKey:"title",cell:r=>{const h=r.row.original.title;return e.jsx(H,{title:h,children:e.jsx(E,{text:h,maxLength:20})},h)}},{header:"Budget",accessorKey:"budget",cell:r=>{var b,w;const h=(b=r.row.original)!=null&&b.budget?(w=r.row.original)==null?void 0:w.budget:"-";return e.jsx(E,{text:h,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:r=>{const h=r.row.original.tags;return h!=null&&h.length>0?e.jsx(we,{tags:h}):"-"}},{header:"Notes",accessorKey:"notes",cell:r=>{var b,w;const h=(b=r.row.original)!=null&&b.description?(w=r.row.original)==null?void 0:w.description:"-";return e.jsx(H,{title:h,children:e.jsx(E,{text:h,maxLength:20})},h)}},{header:"Connected Lead",accessorKey:"Connected Lead",cell:r=>{var b,w;const h=(b=r.row.original)!=null&&b.leadModel?(w=r.row.original)==null?void 0:w.leadModel.title:"-";return e.jsx(E,{text:h,maxLength:20})}}],[C,D]),j=l=>{const r=z(g);r.pageIndex=l,a(q(r))},T=l=>{const r=z(g);r.pageSize=Number(l),r.pageIndex=1,a(q(r))},v=l=>{const r=z(g);r.sort=l,a(q(r))};return e.jsxs("div",{children:[e.jsx(se,{columns:N,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:j,onSelectChange:T,onSort:v}),e.jsx(He,{}),e.jsx(qe,{}),e.jsxs(ae,{isOpen:u,onClose:()=>a(ge(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(P,{})]})]})};ee("crmDeals",he);const Ge=()=>{const a=x(c=>c.crmDeals.data.DealsList);return e.jsxs(te,{bodyClass:"h-full",children:[e.jsx(oe,{title:`Deals (${(a==null?void 0:a.length)||0})`,desc:"",className:"mb-2"}),e.jsx(ze,{}),e.jsx(Ue,{})]})},Oa=Ge;export{Oa as default};
