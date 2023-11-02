import{am as F,an as J,ao as Q,ap as Z,a as T,r as v,j as s,al as ee,aq as V,at as se,ah as te}from"./index-fbc41bca.js";import{C as oe,i as K}from"./Views-74c35fff.js";import{k as ie,h as re,i as ae,j as le}from"./CrmService-e168621d.js";import{A as B}from"./AdaptableCard-6148e59c.js";import"./Badge-c4738e93.js";import"./chart.constant-45b26ac6.js";import"./GrowShrinkTag-3901d0dd.js";import"./index-93d69c00.js";import{B as Y}from"./Button-b2784eff.js";import{D as ne}from"./Dialog-698d3c27.js";import{D as ce}from"./DataTable-81da75d2.js";import{D as de}from"./DoubleSidedImage-57c4b3b5.js";import{I as me}from"./Input-152b7d8e.js";import"./Skeleton-e4ab4cd4.js";import"./react-tooltip.min-7c63beba.js";import"./RichTextEditor-04904e71.js";import"./SegmentItemOption-0494f468.js";import"./SvgIcon-fc4d5dc0.js";import{T as pe}from"./Tooltip-3c083409.js";import{N as ue}from"./NoteTimeline-21de75e1.js";import"./Alert-dec0f5a9.js";import"./RangeCalendar-50b42c63.js";import{C as ge}from"./Card-a984a9d2.js";import"./index-d1bc18ac.js";import"./index-b851f1b1.js";import"./Drawer-2fab53f7.js";import"./index-07c5cb44.js";import{F as he,a as xe}from"./FormItem-c1e0aacf.js";import"./toString-c87cf3c7.js";import"./index-51c649a4.js";import"./index-f693cd27.js";import"./index-ac4b27b3.js";import{t as S,N as A}from"./toast-6fd95cf6.js";import"./Pagination-c4a67f5b.js";import"./Progress-6196de97.js";import"./index-5c598bd5.js";import"./ScrollBar-6e830de1.js";import"./index-4c96de49.js";import"./Select-9a27bfb3.js";import"./index-9d9f773a.js";import"./Switcher-944850e3.js";import"./index-0f02b5a2.js";import"./index-a48c7a7d.js";import"./Tag-9a7f4253.js";import"./index-1581cc49.js";import"./index-2e495e14.js";import"./Upload-993d0ac6.js";import{a as fe}from"./index.esm-e005b017.js";import{I as je}from"./index.esm-19fc59c8.js";import{F as ye,a as De,b as Ne,c as we}from"./formik.esm-398239d1.js";import{c as ve,a as Ce}from"./index.esm-bb7c93ab.js";import{u as $,m as W}from"./TagCategoryDetailsForm-82253df6.js";import{C as X}from"./ConfirmDialog-f881e0b1.js";import{S as P}from"./StatusCapsule-9124920e.js";import{T as Le}from"./TagsList-9e165575.js";import{P as be}from"./index.esm-249f55e6.js";import{u as Se,d as Ae,a as _,k as Te,g as ke}from"./index-6d2637d2.js";import{L as Ee}from"./LeadActivity-35d3dff6.js";import{T as z}from"./TextTruncate-e5f88508.js";import{c as O}from"./cloneDeep-f5c45100.js";import{r as Ie,u as E,g as Me,a as I}from"./index-8e41595c.js";import{h as Fe}from"./moment-fbc5633a.js";import{u as q}from"./checkEditUpdate-cc27538c.js";import"./useMergeRef-788c4cb0.js";import"./index-0cc150e7.js";import"./CloseButton-ac314900.js";import"./index-14973a88.js";import"./isNil-9affc463.js";import"./get-6a80729e.js";import"./_MapCache-700a4bdb.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-37801c64.js";import"./useThemeClass-5e964515.js";import"./usePopper-a0de98a6.js";import"./index.esm-1c18013e.js";import"./index-38ec51a4.js";import"./useTimeout-d537f082.js";import"./StatusIcon-a0cbbea1.js";import"./useControllableState-dc7686ff.js";import"./useRootClose-77f885d6.js";import"./TimeInput-7ea8f489.js";import"./useUniqueId-b35fc9d9.js";import"./useDidUpdate-5fac86c3.js";import"./useUncertainRef-729c814d.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-f82ce810.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-41c1fa9e.js";import"./mapCloneElement-2d4a612f.js";import"./index.esm-158add56.js";import"./index.esm-79cc9987.js";/* empty css              */import"./_getPrototype-3d319840.js";import"./index-861021eb.js";import"./index-a3e277fd.js";const k="crmLeadDetails",Be={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},$e={loading:!0,lead:{},addForm:!1,dialogMode:"",selectedNote:{},deleteConfirmation:!1,tableData:Be},C=F(`${k}/getLeadById`,async e=>{var t,a;try{return await ie(e)}catch(o){throw new Error((a=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:a.message)}}),ze=F(`${k}/getNotes`,async e=>{var t,a;try{return(await re(e)).data}catch(o){throw new Error((a=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:a.message)}}),Oe=F(`${k}/editNotes`,async({id:e,formData:t})=>{var a,o;try{return console.log("data",t),(await ae(e,t)).data}catch(p){throw new Error((o=(a=p==null?void 0:p.response)==null?void 0:a.data)==null?void 0:o.message)}}),qe=F(`${k}/deleteNote`,async e=>{var t,a;try{return(await le(e)).data}catch(o){throw new Error((a=(t=o==null?void 0:o.response)==null?void 0:t.data)==null?void 0:a.message)}}),U=J({name:`${k}/state`,initialState:$e,reducers:{toggleAddForm:(e,t)=>{e.addForm=t.payload},setSelectedNote:(e,t)=>{e.selectedNote=t.payload},setDialogMode:(e,t)=>{e.dialogMode=t.payload},toggleDeleteConfirmation:(e,t)=>{e.deleteConfirmation=t.payload}},extraReducers:e=>{e.addCase(C.fulfilled,(t,a)=>{var o,p,d,r;t.loading=!1,t.lead=a==null?void 0:a.payload.data,t.tableData.total=(r=(d=(p=(o=a.payload)==null?void 0:o.data)==null?void 0:p.data)==null?void 0:d.relatedTaskList)==null?void 0:r.length}).addCase(C.pending,t=>{t.loading=!0})}}),{toggleAddForm:M,setSelectedNote:H,setDialogMode:G,toggleDeleteConfirmation:R}=U.actions,Pe=U.reducer,Re=Q({data:Pe}),b=Z,Ye=ve({notes:Ce().required("Notes is required")}),Ke=()=>{var u;const e=T(),t=$(n=>{var i;return(i=n==null?void 0:n.crmLeadDetails)==null?void 0:i.data}),[a,o]=v.useState([]),p=$(n=>{var i,c,g;return(g=(c=(i=n.crmLeadDetails)==null?void 0:i.data)==null?void 0:c.lead)==null?void 0:g.data}),d=$(n=>n.crmLeadDetails.data.addForm);W.length=0,a==null||a.forEach(n=>{W.push({value:n.id,label:n.moduleName})});const r=()=>{e(M(!1))};return s.jsx("div",{children:s.jsx(ne,{isOpen:d,onClose:r,children:s.jsx(ye,{validationSchema:Ye,initialValues:{notes:(t==null?void 0:t.dialogMode)==="Edit"?(u=t.selectedNote)==null?void 0:u.notes:""},onSubmit:async n=>{var f,w,x,l,m,j,L;let i="",c="",g="";const h={notes:n.notes,masterId:"4",modelDataId:p==null?void 0:p.id};if((t==null?void 0:t.dialogMode)==="Edit"&&t.selectedNote){const y=(f=t==null?void 0:t.selectedNote)==null?void 0:f.id,N=await e(Oe({id:y,formData:h}));(w=N==null?void 0:N.payload)!=null&&w.success?(i="Successfully Edited",c=(x=N==null?void 0:N.payload)==null?void 0:x.message,g="success"):(i="Something went wrong !!!",c=(l=N==null?void 0:N.error)==null?void 0:l.message,g="danger")}else{const y=await e(ze(h));(m=y==null?void 0:y.payload)!=null&&m.success?(i="Successfully Added",c=(j=y==null?void 0:y.payload)==null?void 0:j.message,g="success"):(i="Something went wrong !!!",c=(L=y==null?void 0:y.error)==null?void 0:L.message,g="danger")}S.push(s.jsx(A,{title:i,type:g,duration:2500,children:c}),{placement:"top-end"}),e(M(!1)),e(C(p==null?void 0:p.id))},children:({touched:n,errors:i,values:c,setFieldValue:g})=>s.jsx(De,{children:s.jsx(he,{layout:"inline",children:s.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[s.jsxs("div",{className:"mb-10",children:[s.jsxs("h5",{className:"mb-4",children:[" ",(t==null?void 0:t.dialogMode)==="Add"?"Add Notes":"Edit Notes"]}),s.jsx(xe,{layout:"vertical",label:"Notes",invalid:i.notes&&n.notes,errorMessage:i.notes,children:s.jsx(Ne,{textArea:!0,placeholder:"Notes",name:"notes",component:me})})]}),s.jsx(we,{name:"tags",children:({form:h,remove:f,push:w})=>s.jsx("div",{children:s.jsx("div",{children:s.jsx(Y,{type:"submit",variant:"solid",children:(t==null?void 0:t.dialogMode)==="Add"?"Add":"Edit"})})})})]})})})})})})},D=({title:e,value:t})=>{const o=(d,r)=>d.length>r?`${d.slice(0,r)}
${o(d.slice(r),r)}`:d,p=t.length>80?o(t,80):t;return s.jsxs("div",{children:[s.jsx("span",{children:e}),s.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold mb-4",style:{maxWidth:"500px",wordWrap:"break-word"},children:p})]})},We=e=>{const t=T(),[a,o]=v.useState(!1),p=ee(),d=()=>{o(!1)},r=()=>{o(!0)},u=Se(i=>{var c,g;return(g=(c=i.crmLeads)==null?void 0:c.data)==null?void 0:g.selectedLeads}),n=async()=>{var c,g,h;o(!1);const i=await t(Ae(u.id));await t(_()),(c=i==null?void 0:i.payload)!=null&&c.success?(S.push(s.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}),p("/app/crm/leads"),t(Te({}))):S.push(s.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(h=i==null?void 0:i.error)==null?void 0:h.message}),{placement:"top-end"}),await t(_()),await t(ke())};return s.jsxs(s.Fragment,{children:[s.jsx(Y,{size:"xs",onClick:r,block:!0,variant:"solid",children:s.jsx(be,{className:"text-sm"})}),s.jsx(X,{isOpen:a,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:n,children:s.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},_e=e=>{var a,o;const t=[e.address,(a=e.cityData)==null?void 0:a.cityName,(o=e.stateData)==null?void 0:o.stateName,e.zipcode].filter(Boolean).join(", ");return t.length>0?t:"Location not provided"},He=({data:e={}})=>{var t,a,o,p,d,r,u,n,i;return s.jsx(ge,{className:"h-full",children:s.jsxs("div",{className:"flex flex-col xl:flex-row ",children:[s.jsxs("div",{className:"grid grid-cols-3  wrap-data w-full",children:[(e==null?void 0:e.title)&&s.jsx("div",{children:s.jsx(D,{title:"Title",value:e==null?void 0:e.title})}),e.budget&&s.jsx("div",{children:s.jsx(D,{title:"Budget",value:e.budget})}),((t=e==null?void 0:e.contactData)==null?void 0:t.firstName)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Name",value:(a=e==null?void 0:e.contactData)==null?void 0:a.firstName})}),(e==null?void 0:e.email)&&s.jsx("div",{children:s.jsx(D,{title:"Email",value:e==null?void 0:e.email})}),((o=e==null?void 0:e.contactData)==null?void 0:o.email)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Email",value:e.contactData.email})}),(e==null?void 0:e.contactNumber)&&s.jsx("div",{children:s.jsx(D,{title:"Contact Number",value:e.contactNumber})}),(((p=e==null?void 0:e.contactData)==null?void 0:p.address)||((d=e==null?void 0:e.contactData)==null?void 0:d.cityData)||((r=e==null?void 0:e.contactData)==null?void 0:r.stateData)||((u=e==null?void 0:e.contactData)==null?void 0:u.zipcode))&&s.jsx("div",{children:s.jsx(D,{title:"Contact Address",value:_e(e==null?void 0:e.contactData)})}),(e==null?void 0:e.status)&&s.jsx("div",{children:s.jsxs("div",{className:"flex items-center",children:[s.jsx("span",{className:"font-semibold",children:"Status:"}),s.jsx("div",{className:"ml-2",children:s.jsx(P,{status:e==null?void 0:e.status})})]})}),(e==null?void 0:e.reason)&&s.jsx("div",{children:s.jsx(D,{title:"Reason",value:e==null?void 0:e.reason})}),((n=e==null?void 0:e.tags)==null?void 0:n.length)>0&&s.jsxs("div",{children:[s.jsx(D,{title:"Tags",value:""}),s.jsx(Le,{fullDisplay:!0,tags:e==null?void 0:e.tags})]}),((i=e==null?void 0:e.leadFields)==null?void 0:i.length)>0&&e.leadFields.map((c,g)=>{var h;return c.value?s.jsx("div",{children:s.jsx(D,{title:(h=c==null?void 0:c.customKey)==null?void 0:h.label,value:c.value})},g):null})]}),s.jsx("div",{className:"w-10",children:s.jsx(We,{data:e})})]})})},Ge=()=>{const e=T(),t=b(r=>{var u,n,i;return(i=(n=(u=r.crmLeadDetails)==null?void 0:u.data)==null?void 0:n.lead)==null?void 0:i.data}),a=b(r=>{var u,n;return(n=(u=r.crmLeadDetails)==null?void 0:u.data)==null?void 0:n.deleteConfirmation}),o=b(r=>{var u;return(u=r==null?void 0:r.crmLeadDetails)==null?void 0:u.data}),p=()=>{e(R(!1))},d=async()=>{var u,n,i,c,g;e(R(!1)),console.log("jh===d",(u=o==null?void 0:o.selectedNote)==null?void 0:u.id);const r=await e(qe((n=o==null?void 0:o.selectedNote)==null?void 0:n.id));await e(C(t==null?void 0:t.id)),console.log("wdwd",r),(i=r==null?void 0:r.payload)!=null&&i.success?S.push(s.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(c=r==null?void 0:r.payload)==null?void 0:c.message}),{placement:"top-end"}):S.push(s.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await e(C(t==null?void 0:t.id))};return s.jsx(X,{isOpen:a,type:"danger",title:"Delete Note",confirmButtonColor:"red-600",onClose:p,onRequestClose:p,onCancel:p,onConfirm:d,children:s.jsx("p",{children:"Are you sure you want to delete this Note? This action cannot be undone."})})};V("crmTasks",Ie);const Ve=()=>{const e=T(),t=E(x=>{var l,m,j,L;return(L=(j=(m=(l=x.crmLeadDetails)==null?void 0:l.data)==null?void 0:m.lead)==null?void 0:j.data)==null?void 0:L.relatedTaskList}),a=E(x=>{var l,m;return(m=(l=x.crmLeadDetails)==null?void 0:l.data)==null?void 0:m.loading}),o=E(x=>{var l,m;return(m=(l=x.crmLeadDetails)==null?void 0:l.data)==null?void 0:m.tableData}),{pageIndex:p,pageSize:d,sort:r,query:u,total:n}=E(x=>{var l,m;return(m=(l=x.crmLeadDetails)==null?void 0:l.data)==null?void 0:m.tableData}),i=v.useCallback(()=>{e(Me())},[e]);v.useEffect(()=>(i(),()=>{window.location.pathname.includes("lead")||e(I({...o,query:""}))}),[i]);const c=v.useMemo(()=>({pageIndex:p,pageSize:d,sort:r,query:u,total:n}),[p,d,r,u,n]),g=v.useMemo(()=>[{header:"Title",accessorKey:"title",cell:l=>{const m=l.row.original.title;return s.jsx(pe,{title:m,children:s.jsx(z,{text:m,maxLength:20})},m)}},{header:"Due Date",accessorKey:"dueDate",cell:l=>{var m;return Fe((m=l.row.original)==null?void 0:m.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:l=>{const m=l.row.original.priority;return s.jsx(P,{status:m})}},{header:"module",accessorKey:"module",cell:l=>{var j;const m=(j=l.row.original)==null?void 0:j.module;return m?s.jsx(z,{text:m,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:l=>{var j;const m=(j=l.row.original)==null?void 0:j.type;return m?s.jsx(z,{text:m,maxLength:20}):"-"}},{header:"Status",accessorKey:"completionStatus",cell:l=>{const m=l.row.original.completionStatus;return s.jsx(P,{status:m})}}],[]),h=x=>{const l=O(c);l.pageIndex=x,e(I(l))},f=x=>{const l=O(c);l.pageSize=Number(x),l.pageIndex=1,e(I(l))},w=x=>{const l=O(c);l.sort=x,e(I(l))};return s.jsx("div",{children:s.jsx(ce,{columns:g,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:c.total,pageIndex:c.pageIndex,pageSize:c.pageSize},onPaginationChange:h,onSelectChange:f,onSort:w})})};V("crmLeadDetails",Re);const $t=()=>{const e=T(),t=se(),{id:a}=t,o=b(h=>{var f,w;return(w=(f=h==null?void 0:h.crmLeadDetails)==null?void 0:f.data)==null?void 0:w.lead}),p=()=>{e(M(!0)),e(G("Add"))},d=o==null?void 0:o.data,r=b(h=>{var f;return(f=h==null?void 0:h.crmLeadDetails)==null?void 0:f.data.loading});v.useEffect(()=>{u()},[]);const u=async()=>{a&&e(C(a))},n=()=>{window.history.back()},i=q("leads","canModify");q("leads","canDelete"),q("leads","canCreate");const c=h=>{e(M(!0)),e(H(h)),e(G("Edit"))},g=h=>{e(H(h)),e(R(!0))};return console.log("leads data",{data:d}),s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[s.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:n,children:s.jsx(je,{})}),s.jsx("h3",{children:"Lead Details"})]}),s.jsxs(oe,{className:"h-full",children:[s.jsxs(te,{loading:r,children:[!K(d)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-4 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-3",children:s.jsx(He,{data:d})}),s.jsxs(B,{className:"col-span-1",children:[s.jsx("h5",{children:"Lead Activity"}),s.jsx(Ee,{activity:(d==null?void 0:d.leadsActivity)||[]})]})]}),s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-3 gap-4 mt-2",children:[s.jsxs(B,{className:"col-span-1",children:[s.jsxs("div",{className:"flex justify-between mb-2",children:[s.jsx("h5",{children:"Notes"}),i&&s.jsx(Y,{size:"xs",type:"button",className:"!px-2 !text-lg",onClick:p,children:s.jsx(fe,{})})]}),s.jsx(ue,{notes:(d==null?void 0:d.leadNotes)||[],canEdit:i,onEdit:c,onDelete:g})]}),s.jsxs(B,{className:"col-span-2",children:[s.jsx("h4",{className:"mb-3",children:"Connected Tasks"}),s.jsx(Ve,{})]})]})]}),s.jsx(Ke,{}),s.jsx(Ge,{})]}),!r&&K(d)&&s.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[s.jsx(de,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),s.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{$t as default};
