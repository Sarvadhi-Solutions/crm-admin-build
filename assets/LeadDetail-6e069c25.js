import{al as F,am as J,an as Q,ao as U,a as T,r as w,j as t,ap as Z,aq as G,at as ee,ah as te}from"./index-bbbc5aef.js";import{C as se,i as R}from"./Views-461d6d23.js";import{h as oe,i as ie,j as re,k as le}from"./CrmService-ce1a8be4.js";import{A as $}from"./AdaptableCard-f95aa827.js";import"./Badge-084d6baa.js";import"./chart.constant-6e2db076.js";import"./GrowShrinkTag-aecc96e2.js";import"./index-a63cc66f.js";import{B as P}from"./Button-2283a1ae.js";import{D as ae}from"./Dialog-826b1acc.js";import{D as ne}from"./DataTable-5ad7b293.js";import{D as ce}from"./DoubleSidedImage-1b6aa50c.js";import{I as me}from"./Input-b87675b9.js";import"./Skeleton-b410f7be.js";import"./react-tooltip.min-18d94bea.js";import"./RichTextEditor-39e96d93.js";import"./SegmentItemOption-2d55cc81.js";import"./SvgIcon-48ccf1ad.js";import{T as de}from"./Tooltip-4497b1a4.js";import{N as pe,L as ue}from"./LeadActivity-d4d20921.js";import"./Alert-6f7f8624.js";import"./RangeCalendar-bbe83f42.js";import{C as ge}from"./Card-88f9c8ec.js";import"./index-f008017f.js";import"./index-b754fb37.js";import"./Drawer-df90174f.js";import"./index-a99fb528.js";import{F as he,a as xe}from"./FormItem-ad188291.js";import"./toString-63639ad5.js";import"./index-45df0f5a.js";import"./index-68d7d285.js";import"./index-af162539.js";import{t as S,N as A}from"./toast-54f598af.js";import"./Pagination-7ecff04b.js";import"./Progress-ff35253e.js";import"./index-3059edce.js";import"./ScrollBar-4ef3413f.js";import"./index-8a7d23d7.js";import"./Select-839ea91c.js";import"./index-24fc2a26.js";import"./Switcher-b3a1e5e3.js";import"./index-b158199e.js";import"./index-beb1224c.js";import"./Tag-e7b0072c.js";import"./index-03b003b1.js";import"./index-d683415a.js";import"./Upload-97f36fe4.js";import{a as fe}from"./index.esm-b9fbb07e.js";import{I as je}from"./index.esm-14ef56e3.js";import{F as ye,a as De,b as Ne,c as we}from"./formik.esm-cb4bee85.js";import{c as be,a as Le}from"./index.esm-18b61514.js";import{u as B,m as Y}from"./TagCategoryDetailsForm-ce19a08b.js";import{C as V}from"./ConfirmDialog-762dffb6.js";import{S as z}from"./StatusCapsule-c8c24c06.js";import{T as Ce}from"./TagsList-fe4feb97.js";import{P as ve}from"./index.esm-0cfcd98b.js";import{u as Se,d as Ae,a as W,k as Te,g as ke}from"./index-07dd0f63.js";import{T as O}from"./TextTruncate-cf10d90c.js";import{c as q}from"./cloneDeep-03ae2b77.js";import{r as Ee,u as E,g as Ie,a as I}from"./index-0826182b.js";import{h as Me}from"./moment-fbc5633a.js";import"./useMergeRef-788c4cb0.js";import"./index-090932fb.js";import"./CloseButton-9253ead7.js";import"./index-6bf7b9b2.js";import"./isNil-7ec1f898.js";import"./get-62892753.js";import"./_MapCache-e561c792.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-3d61d740.js";import"./useThemeClass-3a8cacfd.js";import"./usePopper-0ae032d9.js";import"./index.esm-41a7091c.js";import"./index-2b158e9a.js";import"./checkEditUpdate-8f773330.js";import"./useTimeout-9da66979.js";import"./StatusIcon-add507ab.js";import"./useControllableState-42b7aa2f.js";import"./useRootClose-d827e4e3.js";import"./TimeInput-24926dd1.js";import"./useUniqueId-f46514d1.js";import"./useDidUpdate-9d5103f9.js";import"./useUncertainRef-ee625e1d.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-05284d27.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9c5111bd.js";import"./mapCloneElement-b6bcae2b.js";import"./index.esm-80d7eae5.js";import"./index.esm-a957648f.js";/* empty css              */import"./_getPrototype-2e29ca85.js";import"./index-38372015.js";import"./index-b68751f3.js";const k="crmLeadDetails",Fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},$e={loading:!0,lead:{},addForm:!1,dialogMode:"",selectedNote:{},deleteConfirmation:!1,tableData:Fe},b=F(`${k}/getLeadById`,async e=>{var s,c;try{return await oe(e)}catch(o){throw new Error((c=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:c.message)}}),Be=F(`${k}/getNotes`,async e=>{var s,c;try{return(await ie(e)).data}catch(o){throw new Error((c=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:c.message)}}),Oe=F(`${k}/editNotes`,async({id:e,formData:s})=>{var c,o;try{return console.log("data",s),(await re(e,s)).data}catch(p){throw new Error((o=(c=p==null?void 0:p.response)==null?void 0:c.data)==null?void 0:o.message)}}),qe=F(`${k}/deleteNote`,async e=>{var s,c;try{return(await le(e)).data}catch(o){throw new Error((c=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:c.message)}}),X=J({name:`${k}/state`,initialState:$e,reducers:{toggleAddForm:(e,s)=>{e.addForm=s.payload},setSelectedNote:(e,s)=>{e.selectedNote=s.payload},setDialogMode:(e,s)=>{e.dialogMode=s.payload},toggleDeleteConfirmation:(e,s)=>{e.deleteConfirmation=s.payload}},extraReducers:e=>{e.addCase(b.fulfilled,(s,c)=>{var o,p,d,a;s.loading=!1,s.lead=c==null?void 0:c.payload.data,s.tableData.total=(a=(d=(p=(o=c.payload)==null?void 0:o.data)==null?void 0:p.data)==null?void 0:d.relatedTaskList)==null?void 0:a.length}).addCase(b.pending,s=>{s.loading=!0})}}),{toggleAddForm:M,setSelectedNote:_,setDialogMode:H,toggleDeleteConfirmation:K}=X.actions,ze=X.reducer,Ke=Q({data:ze}),v=U,Pe=be({notes:Le().required("Notes is required")}),Re=()=>{var g;const e=T(),s=B(m=>{var r;return(r=m==null?void 0:m.crmLeadDetails)==null?void 0:r.data}),[c,o]=w.useState([]),p=B(m=>{var r,u,n;return(n=(u=(r=m.crmLeadDetails)==null?void 0:r.data)==null?void 0:u.lead)==null?void 0:n.data}),d=B(m=>m.crmLeadDetails.data.addForm);Y.length=0,c==null||c.forEach(m=>{Y.push({value:m.id,label:m.moduleName})});const a=()=>{e(M(!1))};return t.jsx("div",{children:t.jsx(ae,{isOpen:d,onClose:a,children:t.jsx(ye,{validationSchema:Pe,initialValues:{notes:(s==null?void 0:s.dialogMode)==="Edit"?(g=s.selectedNote)==null?void 0:g.notes:""},onSubmit:async m=>{var j,L,h,l,i,x,C;let r="",u="",n="";const f={notes:m.notes,masterId:"4",modelDataId:p==null?void 0:p.id};if((s==null?void 0:s.dialogMode)==="Edit"&&s.selectedNote){const y=(j=s==null?void 0:s.selectedNote)==null?void 0:j.id,N=await e(Oe({id:y,formData:f}));(L=N==null?void 0:N.payload)!=null&&L.success?(r="Successfully Edited",u=(h=N==null?void 0:N.payload)==null?void 0:h.message,n="success"):(r="Something went wrong !!!",u=(l=N==null?void 0:N.error)==null?void 0:l.message,n="danger")}else{const y=await e(Be(f));(i=y==null?void 0:y.payload)!=null&&i.success?(r="Successfully Added",u=(x=y==null?void 0:y.payload)==null?void 0:x.message,n="success"):(r="Something went wrong !!!",u=(C=y==null?void 0:y.error)==null?void 0:C.message,n="danger")}S.push(t.jsx(A,{title:r,type:n,duration:2500,children:u}),{placement:"top-end"}),e(M(!1)),e(b(p==null?void 0:p.id))},children:({touched:m,errors:r,values:u,setFieldValue:n})=>t.jsx(De,{children:t.jsx(he,{layout:"inline",children:t.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[t.jsxs("div",{className:"mb-10",children:[t.jsxs("h5",{className:"mb-4",children:[" ",(s==null?void 0:s.dialogMode)==="Add"?"Add Notes":"Edit Notes"]}),t.jsx(xe,{layout:"vertical",label:"Notes",invalid:r.notes&&m.notes,errorMessage:r.notes,children:t.jsx(Ne,{textArea:!0,placeholder:"Notes",name:"notes",component:me})})]}),t.jsx(we,{name:"tags",children:({form:f,remove:j,push:L})=>t.jsx("div",{children:t.jsx("div",{children:t.jsx(P,{type:"submit",variant:"solid",children:(s==null?void 0:s.dialogMode)==="Add"?"Add":"Edit"})})})})]})})})})})})},D=({title:e,value:s})=>{const o=(d,a)=>d.length>a?`${d.slice(0,a)}
${o(d.slice(a),a)}`:d,p=s.length>80?o(s,80):s;return t.jsxs("div",{children:[t.jsx("span",{children:e}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold mb-4",style:{maxWidth:"500px",wordWrap:"break-word"},children:p})]})},Ye=e=>{const s=T(),[c,o]=w.useState(!1),p=Z(),d=()=>{o(!1)},a=()=>{o(!0)},g=Se(r=>{var u,n;return(n=(u=r.crmLeads)==null?void 0:u.data)==null?void 0:n.selectedLeads}),m=async()=>{var u,n,f;o(!1);const r=await s(Ae(g.id));await s(W()),(u=r==null?void 0:r.payload)!=null&&u.success?(S.push(t.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(n=r==null?void 0:r.payload)==null?void 0:n.message}),{placement:"top-end"}),p("/app/crm/leads"),s(Te({}))):S.push(t.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=r==null?void 0:r.error)==null?void 0:f.message}),{placement:"top-end"}),await s(W()),await s(ke())};return t.jsxs(t.Fragment,{children:[t.jsx(P,{block:!0,icon:t.jsx(ve,{}),variant:"solid",onClick:a,children:"Delete"}),t.jsx(V,{isOpen:c,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:m,children:t.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},We=e=>{var c,o;const s=[e.address,(c=e.cityData)==null?void 0:c.cityName,(o=e.stateData)==null?void 0:o.stateName,e.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},_e=({data:e={}})=>{var s,c,o,p,d,a,g,m,r,u;return t.jsx(ge,{className:"w-1/3 h-fit max-h-fit",children:t.jsxs("div",{className:"flex flex-col xl:justify-between",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mt-3",children:[(e==null?void 0:e.title)&&t.jsx(D,{title:"Title",value:e==null?void 0:e.title}),e.budget&&t.jsx(D,{title:"Budget",value:e.budget}),((s=e==null?void 0:e.contactData)==null?void 0:s.firstName)&&t.jsx(D,{title:"Contact Name",value:(c=e==null?void 0:e.contactData)==null?void 0:c.firstName}),(e==null?void 0:e.email)&&t.jsx(D,{title:"Email",value:e==null?void 0:e.email}),((o=e==null?void 0:e.contactData)==null?void 0:o.email)&&t.jsx(D,{title:"Contact Email",value:e.contactData.email}),(e==null?void 0:e.contactNumber)&&t.jsx(D,{title:"Contact Number",value:e.contactNumber}),(p=e==null?void 0:e.contactData)!=null&&p.address||(d=e==null?void 0:e.contactData)!=null&&d.cityData||(a=e==null?void 0:e.contactData)!=null&&a.stateData||(g=e==null?void 0:e.contactData)!=null&&g.zipcode?t.jsx(D,{title:"Contact Address",value:We(e==null?void 0:e.contactData)}):null,(e==null?void 0:e.status)&&t.jsxs("div",{className:"flex items-center",children:[t.jsx("span",{className:"font-semibold mb-4",children:"Status:"}),t.jsx("div",{className:"ml-2 mb-4",children:t.jsx(z,{status:e==null?void 0:e.status})})]}),(e==null?void 0:e.reason)&&t.jsx(D,{title:"Reason",value:e==null?void 0:e.reason}),(e==null?void 0:e.description)&&t.jsx(D,{title:"Description",value:e==null?void 0:e.description}),((m=e==null?void 0:e.tags)==null?void 0:m.length)>0?t.jsxs("div",{className:"col-span-1",children:[t.jsx(D,{title:"Tags",value:""}),t.jsx(Ce,{fullDisplay:!0,tags:e==null?void 0:e.tags})]}):null,((r=e==null?void 0:e.leadFields)==null?void 0:r.length)>0?t.jsx(t.Fragment,{children:(u=e.leadFields)==null?void 0:u.map((n,f)=>{var j;return t.jsxs("div",{className:"col-span-1",children:[n.value&&t.jsx(D,{title:(j=n.customKey)==null?void 0:j.name,value:n.value}),f<e.leadFields.length-1&&n.value&&t.jsx("br",{})]})})}):null]}),t.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:t.jsx(Ye,{data:e})})]})})},He=()=>{const e=T(),s=v(a=>{var g,m,r;return(r=(m=(g=a.crmLeadDetails)==null?void 0:g.data)==null?void 0:m.lead)==null?void 0:r.data}),c=v(a=>{var g,m;return(m=(g=a.crmLeadDetails)==null?void 0:g.data)==null?void 0:m.deleteConfirmation}),o=v(a=>{var g;return(g=a==null?void 0:a.crmLeadDetails)==null?void 0:g.data}),p=()=>{e(K(!1))},d=async()=>{var g,m,r,u,n;e(K(!1)),console.log("jh===d",(g=o==null?void 0:o.selectedNote)==null?void 0:g.id);const a=await e(qe((m=o==null?void 0:o.selectedNote)==null?void 0:m.id));await e(b(s==null?void 0:s.id)),console.log("wdwd",a),(r=a==null?void 0:a.payload)!=null&&r.success?S.push(t.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=a==null?void 0:a.payload)==null?void 0:u.message}),{placement:"top-end"}):S.push(t.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(n=a==null?void 0:a.error)==null?void 0:n.message}),{placement:"top-end"}),await e(b(s==null?void 0:s.id))};return t.jsx(V,{isOpen:c,type:"danger",title:"Delete Note",confirmButtonColor:"red-600",onClose:p,onRequestClose:p,onCancel:p,onConfirm:d,children:t.jsx("p",{children:"Are you sure you want to delete this Note? This action cannot be undone."})})};G("crmTasks",Ee);const Ge=()=>{const e=T(),s=E(h=>{var l,i,x,C;return(C=(x=(i=(l=h.crmLeadDetails)==null?void 0:l.data)==null?void 0:i.lead)==null?void 0:x.data)==null?void 0:C.relatedTaskList}),c=E(h=>{var l,i;return(i=(l=h.crmLeadDetails)==null?void 0:l.data)==null?void 0:i.loading}),o=E(h=>{var l,i;return(i=(l=h.crmLeadDetails)==null?void 0:l.data)==null?void 0:i.tableData}),{pageIndex:p,pageSize:d,sort:a,query:g,total:m}=E(h=>{var l,i;return(i=(l=h.crmLeadDetails)==null?void 0:l.data)==null?void 0:i.tableData}),r=w.useCallback(()=>{e(Ie())},[e]);w.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||e(I({...o,query:""}))}),[r]);const u=w.useMemo(()=>({pageIndex:p,pageSize:d,sort:a,query:g,total:m}),[p,d,a,g,m]),n=w.useMemo(()=>[{header:"Title",accessorKey:"title",cell:l=>{const i=l.row.original.title;return t.jsx(de,{title:i,children:t.jsx(O,{text:i,maxLength:20})},i)}},{header:"Due Date",accessorKey:"dueDate",cell:l=>{var i;return Me((i=l.row.original)==null?void 0:i.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:l=>{const i=l.row.original.priority;return t.jsx(z,{status:i})}},{header:"module",accessorKey:"module",cell:l=>{var x;const i=(x=l.row.original)==null?void 0:x.module;return i?t.jsx(O,{text:i,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:l=>{var x;const i=(x=l.row.original)==null?void 0:x.type;return i?t.jsx(O,{text:i,maxLength:20}):"-"}},{header:"Assigned to",accessorKey:"assignedTo",cell:l=>{const{firstName:i,lastName:x}=l.row.original.assignedToData||{};return i&&x?`${i} ${x}`:"-"}},{header:"Connected lead",accessorKey:"connectedLead",cell:l=>{var x;const i=l.row.original||{};return i!=null&&i.leadModel?`${(x=i==null?void 0:i.leadModel)==null?void 0:x.title}`:"-"}},{header:"Status",accessorKey:"completionStatus",cell:l=>{const i=l.row.original.completionStatus;return t.jsx(z,{status:i})}}],[]),f=h=>{const l=q(u);l.pageIndex=h,e(I(l))},j=h=>{const l=q(u);l.pageSize=Number(h),l.pageIndex=1,e(I(l))},L=h=>{const l=q(u);l.sort=h,e(I(l))};return t.jsx("div",{children:t.jsx(ne,{columns:n,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:c,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:f,onSelectChange:j,onSort:L})})};G("crmLeadDetails",Ke);const Fs=()=>{const e=T(),s=ee(),{id:c}=s,o=v(n=>{var f,j;return(j=(f=n==null?void 0:n.crmLeadDetails)==null?void 0:f.data)==null?void 0:j.lead}),p=()=>{e(M(!0)),e(H("Add"))},d=o==null?void 0:o.data,a=v(n=>{var f;return(f=n==null?void 0:n.crmLeadDetails)==null?void 0:f.data.loading});w.useEffect(()=>{g()},[]);const g=async()=>{c&&e(b(c))},m=()=>{window.history.back()},r=n=>{e(M(!0)),e(_(n)),e(H("Edit"))},u=n=>{e(_(n)),e(K(!0))};return console.log("leads data",{data:d}),t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[t.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:m,children:t.jsx(je,{})}),t.jsx("h3",{children:"Lead Details"})]}),t.jsxs(se,{className:"h-full",children:[t.jsxs(te,{loading:a,children:[!R(d)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[t.jsx(_e,{data:d}),t.jsxs($,{className:"w-1/3",children:[t.jsxs("div",{className:"flex justify-between mb-2",children:[t.jsx("h5",{children:"Notes"}),t.jsx(P,{size:"xs",type:"button",className:"!px-2 !text-lg",onClick:p,children:t.jsx(fe,{})})]}),t.jsx(pe,{notes:(d==null?void 0:d.leadNotes)||[],onEdit:r,onDelete:u})]}),t.jsxs($,{className:"w-1/2",children:[t.jsx("h5",{children:"Lead Activity"}),t.jsx(ue,{activity:(d==null?void 0:d.leadsActivity)||[]})]})]}),t.jsxs($,{className:"mt-4",children:[t.jsx("h4",{className:"mb-3",children:"Connected Tasks"}),t.jsx(Ge,{})]})]}),t.jsx(Re,{}),t.jsx(He,{})]}),!a&&R(d)&&t.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[t.jsx(ce,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),t.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Fs as default};
