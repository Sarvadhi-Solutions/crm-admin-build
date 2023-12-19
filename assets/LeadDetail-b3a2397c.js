import{al as F,am as J,an as Q,ao as Z,a as T,r as v,j as s,ap as ee,aq as V,at as se,ah as te}from"./index-847ef4f8.js";import{C as oe,i as K}from"./Views-5cd95793.js";import{h as ie,i as re,j as le,k as ae}from"./CrmService-c8ab1850.js";import{A as B}from"./AdaptableCard-f7b8f466.js";import"./Badge-23f456f8.js";import"./chart.constant-833dc4ed.js";import"./GrowShrinkTag-f7c2938c.js";import"./index-3c06be8e.js";import{B as Y}from"./Button-b74cc268.js";import{D as ne}from"./Dialog-c1236e17.js";import{D as ce}from"./DataTable-bb61d519.js";import{D as de}from"./DoubleSidedImage-ee9d92d5.js";import{I as me}from"./Input-07dbb44b.js";import"./Skeleton-4ba1ecfc.js";import"./react-tooltip.min-58cb827d.js";import"./RichTextEditor-b314b5be.js";import"./SegmentItemOption-0ad22a42.js";import"./SvgIcon-a4dfe44e.js";import{T as pe}from"./Tooltip-a237a4da.js";import{L as ue,N as ge}from"./LeadActivity-89cc6d81.js";import"./Alert-ee5a8060.js";import"./RangeCalendar-0bcee289.js";import{C as he}from"./Card-7a58c886.js";import"./index-9702d4b4.js";import"./index-260f8e0a.js";import"./Drawer-7bdb186b.js";import"./index-c7f7da88.js";import{F as xe,a as je}from"./FormItem-6caba9dc.js";import"./toString-271e4441.js";import"./index-76b04bca.js";import"./index-4292c0e7.js";import"./index-938b8073.js";import{t as S,N as A}from"./toast-f5c3f24c.js";import"./Pagination-9c369e6e.js";import"./Progress-abdfc0bf.js";import"./index-629e5bc6.js";import"./ScrollBar-9a2baaea.js";import"./index-dbe4178c.js";import"./Select-ed97c876.js";import"./index-44b26318.js";import"./Switcher-71827c71.js";import"./index-c1eb621b.js";import"./index-4eb372a0.js";import"./Tag-b8e15ca0.js";import"./index-cbb9775c.js";import"./index-0ac64fa5.js";import"./Upload-1ad29e1a.js";import{a as fe}from"./index.esm-99723bc7.js";import{I as ye}from"./index.esm-c6fedb04.js";import{F as De,a as Ne,b as we,c as ve}from"./formik.esm-bebe3698.js";import{c as Ce,a as Le}from"./index.esm-2dd52620.js";import{u as $,m as W}from"./TagCategoryDetailsForm-d58ef353.js";import{C as X}from"./ConfirmDialog-a1ed4092.js";import{S as P}from"./StatusCapsule-ca49e5dd.js";import{T as be}from"./TagsList-a0d374e4.js";import{P as Se}from"./index.esm-487b51fd.js";import{u as Ae,d as Te,a as _,k as ke,g as Ee}from"./index-27e7c3e2.js";import{T as z}from"./TextTruncate-0d10a3b6.js";import{c as O}from"./cloneDeep-f66e195c.js";import{r as Ie,u as E,g as Me,a as I}from"./index-9470cfa2.js";import{h as Fe}from"./moment-fbc5633a.js";import{u as q}from"./checkEditUpdate-a9898587.js";import"./useMergeRef-788c4cb0.js";import"./index-93a3d3d0.js";import"./CloseButton-d22d6eb9.js";import"./index-8ad565f1.js";import"./isNil-4ae3346e.js";import"./get-263abd7f.js";import"./_MapCache-9e036a1f.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-24c667bd.js";import"./useThemeClass-606c5d8c.js";import"./usePopper-efd79584.js";import"./index.esm-9468e820.js";import"./index-5449d842.js";import"./useTimeout-7eccd8b6.js";import"./StatusIcon-5a5a985f.js";import"./useControllableState-d474fa8c.js";import"./useRootClose-d8f8a4cc.js";import"./TimeInput-81e6befe.js";import"./useUniqueId-7dc066bc.js";import"./useDidUpdate-482439ac.js";import"./useUncertainRef-4977c77f.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-505afcc1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-621896fa.js";import"./mapCloneElement-f7b6b3e0.js";import"./index.esm-f7cc78ab.js";import"./index.esm-b4dcee25.js";/* empty css              */import"./_getPrototype-c37a8692.js";import"./index-f8f58b88.js";import"./index-a44e2a0f.js";const k="crmLeadDetails",Be={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},$e={loading:!0,lead:{},addForm:!1,dialogMode:"",selectedNote:{},deleteConfirmation:!1,tableData:Be},C=F(`${k}/getLeadById`,async e=>{var t,l;try{return await ie(e)}catch(o){throw new Error((l=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:l.message)}}),ze=F(`${k}/getNotes`,async e=>{var t,l;try{return(await re(e)).data}catch(o){throw new Error((l=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:l.message)}}),Oe=F(`${k}/editNotes`,async({id:e,formData:t})=>{var l,o;try{return console.log("data",t),(await le(e,t)).data}catch(p){throw new Error((o=(l=p==null?void 0:p.response)==null?void 0:l.data)==null?void 0:o.message)}}),qe=F(`${k}/deleteNote`,async e=>{var t,l;try{return(await ae(e)).data}catch(o){throw new Error((l=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:l.message)}}),U=J({name:`${k}/state`,initialState:$e,reducers:{toggleAddForm:(e,t)=>{e.addForm=t.payload},setSelectedNote:(e,t)=>{e.selectedNote=t.payload},setDialogMode:(e,t)=>{e.dialogMode=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload}},extraReducers:e=>{e.addCase(C.fulfilled,(t,l)=>{var o,p,c,r;t.loading=!1,t.lead=l==null?void 0:l.payload.data,t.tableData.total=(r=(c=(p=(o=l.payload)==null?void 0:o.data)==null?void 0:p.data)==null?void 0:c.relatedTaskList)==null?void 0:r.length}).addCase(C.pending,t=>{t.loading=!0})}}),{toggleAddForm:M,setSelectedNote:H,setDialogMode:G,toggleDeleteConfirmation:R}=U.actions,Pe=U.reducer,Re=Q({data:Pe}),b=Z,Ye=Ce({notes:Le().required("Notes is required")}),Ke=()=>{var u;const e=T(),t=$(n=>{var i;return(i=n==null?void 0:n.crmLeadDetails)==null?void 0:i.data}),[l,o]=v.useState([]),p=$(n=>{var i,d,g;return(g=(d=(i=n.crmLeadDetails)==null?void 0:i.data)==null?void 0:d.lead)==null?void 0:g.data}),c=$(n=>n.crmLeadDetails.data.addForm);W.length=0,l==null||l.forEach(n=>{W.push({value:n.id,label:n.moduleName})});const r=()=>{e(M(!1))};return s.jsx("div",{children:s.jsx(ne,{isOpen:c,onClose:r,children:s.jsx(De,{validationSchema:Ye,initialValues:{notes:(t==null?void 0:t.dialogMode)==="Edit"?(u=t.selectedNote)==null?void 0:u.notes:""},onSubmit:async n=>{var j,w,x,a,m,f,L;let i="",d="",g="";const h={notes:n.notes,masterId:"4",modelDataId:p==null?void 0:p.id};if((t==null?void 0:t.dialogMode)==="Edit"&&t.selectedNote){const y=(j=t==null?void 0:t.selectedNote)==null?void 0:j.id,N=await e(Oe({id:y,formData:h}));(w=N==null?void 0:N.payload)!=null&&w.success?(i="Successfully Edited",d=(x=N==null?void 0:N.payload)==null?void 0:x.message,g="success"):(i="Something went wrong !!!",d=(a=N==null?void 0:N.error)==null?void 0:a.message,g="danger")}else{const y=await e(ze(h));(m=y==null?void 0:y.payload)!=null&&m.success?(i="Successfully Added",d=(f=y==null?void 0:y.payload)==null?void 0:f.message,g="success"):(i="Something went wrong !!!",d=(L=y==null?void 0:y.error)==null?void 0:L.message,g="danger")}S.push(s.jsx(A,{title:i,type:g,duration:2500,children:d}),{placement:"top-end"}),e(M(!1)),e(C(p==null?void 0:p.id))},children:({touched:n,errors:i,values:d,setFieldValue:g})=>s.jsx(Ne,{children:s.jsx(xe,{layout:"inline",children:s.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[s.jsxs("div",{className:"mb-10",children:[s.jsxs("h5",{className:"mb-4",children:[" ",(t==null?void 0:t.dialogMode)==="Add"?"Add Notes":"Edit Notes"]}),s.jsx(je,{layout:"vertical",label:"Notes",invalid:i.notes&&n.notes,errorMessage:i.notes,children:s.jsx(we,{textArea:!0,placeholder:"Notes",name:"notes",component:me})})]}),s.jsx(ve,{name:"tags",children:({form:h,remove:j,push:w})=>s.jsx("div",{children:s.jsx("div",{children:s.jsx(Y,{type:"submit",variant:"solid",children:(t==null?void 0:t.dialogMode)==="Add"?"Add":"Edit"})})})})]})})})})})})},D=({title:e,value:t})=>{const o=(c,r)=>c.length>r?`${c.slice(0,r)}
${o(c.slice(r),r)}`:c,p=t.length>80?o(t,80):t;return s.jsxs("div",{children:[s.jsx("span",{children:e}),s.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold mb-4",style:{maxWidth:"500px",wordWrap:"break-word"},children:p})]})},We=e=>{const t=T(),[l,o]=v.useState(!1),p=ee(),c=()=>{o(!1)},r=()=>{o(!0)},u=Ae(i=>{var d,g;return(g=(d=i.crmLeads)==null?void 0:d.data)==null?void 0:g.selectedLeads}),n=async()=>{var d,g,h;o(!1);const i=await t(Te(u.id));await t(_()),(d=i==null?void 0:i.payload)!=null&&d.success?(S.push(s.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}),p("/app/crm/leads"),t(ke({}))):S.push(s.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(h=i==null?void 0:i.error)==null?void 0:h.message}),{placement:"top-end"}),await t(_()),await t(Ee())};return s.jsxs(s.Fragment,{children:[s.jsx(Y,{size:"xs",onClick:r,block:!0,variant:"solid",children:s.jsx(Se,{className:"text-sm"})}),s.jsx(X,{isOpen:l,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:n,children:s.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},_e=e=>{var l,o;const t=[e.address,(l=e.cityData)==null?void 0:l.cityName,(o=e.stateData)==null?void 0:o.stateName,e.zipcode].filter(Boolean).join(", ");return t.length>0?t:"Location not provided"},He=({data:e={}})=>{var t,l,o,p,c,r,u,n,i;return s.jsx(he,{className:"h-full",children:s.jsxs("div",{className:"flex flex-col xl:flex-row ",children:[s.jsxs("div",{className:"grid grid-cols-3  wrap-data w-full",children:[(e==null?void 0:e.title)&&s.jsx("div",{children:s.jsx(D,{title:"Title",value:e==null?void 0:e.title})}),e.budget&&s.jsx("div",{children:s.jsx(D,{title:"Budget",value:e.budget})}),((t=e==null?void 0:e.contactData)==null?void 0:t.firstName)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Name",value:(l=e==null?void 0:e.contactData)==null?void 0:l.firstName})}),(e==null?void 0:e.email)&&s.jsx("div",{children:s.jsx(D,{title:"Email",value:e==null?void 0:e.email})}),((o=e==null?void 0:e.contactData)==null?void 0:o.email)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Email",value:e.contactData.email})}),(e==null?void 0:e.contactNumber)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Number",value:e.contactNumber})}),(((p=e==null?void 0:e.contactData)==null?void 0:p.address)||((c=e==null?void 0:e.contactData)==null?void 0:c.cityData)||((r=e==null?void 0:e.contactData)==null?void 0:r.stateData)||((u=e==null?void 0:e.contactData)==null?void 0:u.zipcode))&&s.jsx("div",{children:s.jsx(D,{title:"Contact Address",value:_e(e==null?void 0:e.contactData)})}),(e==null?void 0:e.status)&&s.jsx("div",{children:s.jsxs("div",{className:"flex items-center",children:[s.jsx("span",{className:"font-semibold",children:"Status:"}),s.jsx("div",{className:"ml-2",children:s.jsx(P,{status:e==null?void 0:e.status})})]})}),(e==null?void 0:e.reason)&&s.jsx("div",{children:s.jsx(D,{title:"Reason",value:e==null?void 0:e.reason})}),(e==null?void 0:e.description)&&s.jsx("div",{children:s.jsx(D,{title:"Description",value:e==null?void 0:e.description})}),((n=e==null?void 0:e.tags)==null?void 0:n.length)>0&&s.jsxs("div",{children:[s.jsx(D,{title:"Tags",value:""}),s.jsx(be,{fullDisplay:!0,tags:e==null?void 0:e.tags})]}),((i=e==null?void 0:e.leadFields)==null?void 0:i.length)>0&&e.leadFields.map((d,g)=>{var h;return d.value?s.jsx("div",{children:s.jsx(D,{title:(h=d.customKey)==null?void 0:h.name,value:d.value})},g):null})]}),s.jsx("div",{className:"w-10",children:s.jsx(We,{data:e})})]})})},Ge=()=>{const e=T(),t=b(r=>{var u,n,i;return(i=(n=(u=r.crmLeadDetails)==null?void 0:u.data)==null?void 0:n.lead)==null?void 0:i.data}),l=b(r=>{var u,n;return(n=(u=r.crmLeadDetails)==null?void 0:u.data)==null?void 0:n.deleteConfirmation}),o=b(r=>{var u;return(u=r==null?void 0:r.crmLeadDetails)==null?void 0:u.data}),p=()=>{e(R(!1))},c=async()=>{var u,n,i,d,g;e(R(!1)),console.log("jh===d",(u=o==null?void 0:o.selectedNote)==null?void 0:u.id);const r=await e(qe((n=o==null?void 0:o.selectedNote)==null?void 0:n.id));await e(C(t==null?void 0:t.id)),console.log("wdwd",r),(i=r==null?void 0:r.payload)!=null&&i.success?S.push(s.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=r==null?void 0:r.payload)==null?void 0:d.message}),{placement:"top-end"}):S.push(s.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await e(C(t==null?void 0:t.id))};return s.jsx(X,{isOpen:l,type:"danger",title:"Delete Note",confirmButtonColor:"red-600",onClose:p,onRequestClose:p,onCancel:p,onConfirm:c,children:s.jsx("p",{children:"Are you sure you want to delete this Note? This action cannot be undone."})})};V("crmTasks",Ie);const Ve=()=>{const e=T(),t=E(x=>{var a,m,f,L;return(L=(f=(m=(a=x.crmLeadDetails)==null?void 0:a.data)==null?void 0:m.lead)==null?void 0:f.data)==null?void 0:L.relatedTaskList}),l=E(x=>{var a,m;return(m=(a=x.crmLeadDetails)==null?void 0:a.data)==null?void 0:m.loading}),o=E(x=>{var a,m;return(m=(a=x.crmLeadDetails)==null?void 0:a.data)==null?void 0:m.tableData}),{pageIndex:p,pageSize:c,sort:r,query:u,total:n}=E(x=>{var a,m;return(m=(a=x.crmLeadDetails)==null?void 0:a.data)==null?void 0:m.tableData}),i=v.useCallback(()=>{e(Me())},[e]);v.useEffect(()=>(i(),()=>{window.location.pathname.includes("lead")||e(I({...o,query:""}))}),[i]);const d=v.useMemo(()=>({pageIndex:p,pageSize:c,sort:r,query:u,total:n}),[p,c,r,u,n]),g=v.useMemo(()=>[{header:"Title",accessorKey:"title",cell:a=>{const m=a.row.original.title;return s.jsx(pe,{title:m,children:s.jsx(z,{text:m,maxLength:20})},m)}},{header:"Due Date",accessorKey:"dueDate",cell:a=>{var m;return Fe((m=a.row.original)==null?void 0:m.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:a=>{const m=a.row.original.priority;return s.jsx(P,{status:m})}},{header:"module",accessorKey:"module",cell:a=>{var f;const m=(f=a.row.original)==null?void 0:f.module;return m?s.jsx(z,{text:m,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:a=>{var f;const m=(f=a.row.original)==null?void 0:f.type;return m?s.jsx(z,{text:m,maxLength:20}):"-"}},{header:"Status",accessorKey:"completionStatus",cell:a=>{const m=a.row.original.completionStatus;return s.jsx(P,{status:m})}}],[]),h=x=>{const a=O(d);a.pageIndex=x,e(I(a))},j=x=>{const a=O(d);a.pageSize=Number(x),a.pageIndex=1,e(I(a))},w=x=>{const a=O(d);a.sort=x,e(I(a))};return s.jsx("div",{children:s.jsx(ce,{columns:g,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:h,onSelectChange:j,onSort:w})})};V("crmLeadDetails",Re);const Bt=()=>{const e=T(),t=se(),{id:l}=t,o=b(h=>{var j,w;return(w=(j=h==null?void 0:h.crmLeadDetails)==null?void 0:j.data)==null?void 0:w.lead}),p=()=>{e(M(!0)),e(G("Add"))},c=o==null?void 0:o.data,r=b(h=>{var j;return(j=h==null?void 0:h.crmLeadDetails)==null?void 0:j.data.loading});v.useEffect(()=>{u()},[]);const u=async()=>{l&&e(C(l))},n=()=>{window.history.back()},i=q("leads","canModify");q("leads","canDelete"),q("leads","canCreate");const d=h=>{e(M(!0)),e(H(h)),e(G("Edit"))},g=h=>{e(H(h)),e(R(!0))};return console.log("leads data",{data:c}),s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[s.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:n,children:s.jsx(ye,{})}),s.jsx("h3",{children:"Lead Details"})]}),s.jsxs(oe,{className:"h-full",children:[s.jsxs(te,{loading:r,children:[!K(c)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-4 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-3",children:s.jsx(He,{data:c})}),s.jsxs(B,{className:"col-span-1",children:[s.jsx("h5",{children:"Lead Activity"}),s.jsx(ue,{activity:(c==null?void 0:c.leadsActivity)||[]})]})]}),s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-3 gap-4 mt-2",children:[s.jsxs(B,{className:"col-span-1",children:[s.jsxs("div",{className:"flex justify-between mb-2",children:[s.jsx("h5",{children:"Notes"}),i&&s.jsx(Y,{size:"xs",type:"button",className:"!px-2 !text-lg",onClick:p,children:s.jsx(fe,{})})]}),s.jsx(ge,{notes:(c==null?void 0:c.leadNotes)||[],canEdit:i,onEdit:d,onDelete:g})]}),s.jsxs(B,{className:"col-span-2",children:[s.jsx("h4",{className:"mb-3",children:"Connected Tasks"}),s.jsx(Ve,{})]})]})]}),s.jsx(Ke,{}),s.jsx(Ge,{})]}),!r&&K(c)&&s.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[s.jsx(de,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),s.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Bt as default};
