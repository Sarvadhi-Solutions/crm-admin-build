import{am as M,an as J,ao as Q,ap as Z,a as T,r as w,j as t,al as ee,aq as V,at as te,ah as se}from"./index-c2c71b67.js";import{C as oe,i as K}from"./Views-3e469d6a.js";import{k as ie,h as re,i as ae,j as le}from"./CrmService-15d11bcd.js";import{A as B}from"./AdaptableCard-6d79530e.js";import"./Badge-71fe7402.js";import"./chart.constant-d85b92fc.js";import"./GrowShrinkTag-45e3cf24.js";import"./index-5345338d.js";import{B as Y}from"./Button-9c5fa51c.js";import{D as ne}from"./Dialog-8f81a119.js";import{D as ce}from"./DataTable-4690dba1.js";import{D as de}from"./DoubleSidedImage-febab13f.js";import{I as me}from"./Input-a6235faa.js";import"./Skeleton-39c0e07a.js";import"./react-tooltip.min-90a97092.js";import"./RichTextEditor-7aef3904.js";import"./SegmentItemOption-841378e4.js";import"./SvgIcon-426e05f5.js";import{T as pe}from"./Tooltip-008854ca.js";import{N as ue}from"./NoteTimeline-fe65c934.js";import"./Alert-94df1fc7.js";import"./RangeCalendar-06da6a52.js";import{C as ge}from"./Card-641c7c13.js";import"./index-0f7a857e.js";import"./index-bbb04099.js";import"./Drawer-0edf5e5c.js";import"./index-fda7dfb7.js";import{F as he,a as xe}from"./FormItem-78a020e3.js";import"./toString-ac4075ef.js";import"./index-ca17498b.js";import"./index-947dfc66.js";import"./index-a0374824.js";import{t as S,N as A}from"./toast-1c7e88ac.js";import"./Pagination-6dddef69.js";import"./Progress-81b53781.js";import"./index-72a612d1.js";import"./ScrollBar-d6546e5a.js";import"./index-d0a572c6.js";import"./Select-dd041f61.js";import"./index-e001e4a3.js";import"./Switcher-9ef30d94.js";import"./index-e96a00fb.js";import"./index-fc3c3276.js";import"./Tag-869b174a.js";import"./index-5c6007d6.js";import"./index-7308ebe4.js";import"./Upload-0425926a.js";import{a as fe}from"./index.esm-c38f034a.js";import{I as je}from"./index.esm-9bcee528.js";import{F as ye,a as De,b as Ne,c as we}from"./formik.esm-25f04447.js";import{c as Le,a as ve}from"./index.esm-3f39c77b.js";import{u as $,m as W}from"./TagCategoryDetailsForm-f23ddd2f.js";import{C as X}from"./ConfirmDialog-59dfb946.js";import{S as P}from"./StatusCapsule-aa0c9105.js";import{T as Ce}from"./TagsList-adcae7d4.js";import{P as be}from"./index.esm-854b309f.js";import{u as Se,d as Ae,a as _,k as Te,g as ke}from"./index-45ad7363.js";import{L as Ee}from"./LeadActivity-1b1dbefe.js";import{T as z}from"./TextTruncate-489ee756.js";import{c as O}from"./cloneDeep-a5d9ba9c.js";import{r as Ie,u as E,g as Fe,a as I}from"./index-a6e0ae3c.js";import{h as Me}from"./moment-fbc5633a.js";import{u as q}from"./checkEditUpdate-2ca4f052.js";import"./useMergeRef-788c4cb0.js";import"./index-6f0a636b.js";import"./CloseButton-3657ddf2.js";import"./index-9c27e09f.js";import"./isNil-d22b3e6c.js";import"./get-bbcb2570.js";import"./_MapCache-2e280b6f.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-10de66da.js";import"./useThemeClass-ae6a3c06.js";import"./usePopper-2b474c15.js";import"./index.esm-95d05b2b.js";import"./index-ccd45f27.js";import"./useTimeout-a89b02a4.js";import"./StatusIcon-5eed5f69.js";import"./useControllableState-a30d7084.js";import"./useRootClose-29c37326.js";import"./TimeInput-b943a20d.js";import"./useUniqueId-63f75720.js";import"./useDidUpdate-787bd063.js";import"./useUncertainRef-be3b54b9.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-3c0066d1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./mapCloneElement-a58d49ea.js";import"./index.esm-ab028e22.js";import"./index.esm-c710ec86.js";/* empty css              */import"./_getPrototype-6c543eab.js";import"./index-68c1908e.js";import"./index-9b4d3b80.js";const k="crmLeadDetails",Be={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},$e={loading:!0,lead:{},addForm:!1,dialogMode:"",selectedNote:{},deleteConfirmation:!1,tableData:Be,firstTimeLoad:!0},v=M(`${k}/getLeadById`,async e=>{var s,l;try{return await ie(e)}catch(o){throw new Error((l=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:l.message)}}),ze=M(`${k}/getNotes`,async e=>{var s,l;try{return(await re(e)).data}catch(o){throw new Error((l=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:l.message)}}),Oe=M(`${k}/editNotes`,async({id:e,formData:s})=>{var l,o;try{return console.log("data",s),(await ae(e,s)).data}catch(p){throw new Error((o=(l=p==null?void 0:p.response)==null?void 0:l.data)==null?void 0:o.message)}}),qe=M(`${k}/deleteNote`,async e=>{var s,l;try{return(await le(e)).data}catch(o){throw new Error((l=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:l.message)}}),U=J({name:`${k}/state`,initialState:$e,reducers:{toggleAddForm:(e,s)=>{e.addForm=s.payload},setSelectedNote:(e,s)=>{e.selectedNote=s.payload},setDialogMode:(e,s)=>{e.dialogMode=s.payload},toggleDeleteConfirmation:(e,s)=>{e.deleteConfirmation=s.payload},setFirstTimeLoad:(e,s)=>{e.firstTimeLoad=s.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(s,l)=>{var o,p,h,a;s.loading=!1,s.lead=l==null?void 0:l.payload.data,s.tableData.total=(a=(h=(p=(o=l.payload)==null?void 0:o.data)==null?void 0:p.data)==null?void 0:h.relatedTaskList)==null?void 0:a.length,s.firstTimeLoad=!1}).addCase(v.pending,s=>{s.firstTimeLoad&&(s.loading=!0)})}}),{toggleAddForm:F,setSelectedNote:H,setDialogMode:G,toggleDeleteConfirmation:R,setFirstTimeLoad:Pe}=U.actions,Re=U.reducer,Ye=Q({data:Re}),b=Z,Ke=Le({notes:ve().required("Notes is required")}),We=()=>{var n;const e=T(),s=$(c=>{var r;return(r=c==null?void 0:c.crmLeadDetails)==null?void 0:r.data}),[l,o]=w.useState([]),p=$(c=>{var r,d,u;return(u=(d=(r=c.crmLeadDetails)==null?void 0:r.data)==null?void 0:d.lead)==null?void 0:u.data}),h=$(c=>c.crmLeadDetails.data.addForm);W.length=0,l==null||l.forEach(c=>{W.push({value:c.id,label:c.moduleName})});const a=()=>{e(F(!1))};return t.jsx("div",{children:t.jsx(ne,{isOpen:h,onClose:a,children:t.jsx(ye,{validationSchema:Ke,initialValues:{notes:(s==null?void 0:s.dialogMode)==="Edit"?(n=s.selectedNote)==null?void 0:n.notes:""},onSubmit:async c=>{var L,x,g,i,m,j,C;let r="",d="",u="";const f={notes:c.notes,masterId:"4",modelDataId:p==null?void 0:p.id};if((s==null?void 0:s.dialogMode)==="Edit"&&s.selectedNote){const y=(L=s==null?void 0:s.selectedNote)==null?void 0:L.id,N=await e(Oe({id:y,formData:f}));(x=N==null?void 0:N.payload)!=null&&x.success?(r="Successfully Edited",d=(g=N==null?void 0:N.payload)==null?void 0:g.message,u="success"):(r="Something went wrong !!!",d=(i=N==null?void 0:N.error)==null?void 0:i.message,u="danger")}else{const y=await e(ze(f));(m=y==null?void 0:y.payload)!=null&&m.success?(r="Successfully Added",d=(j=y==null?void 0:y.payload)==null?void 0:j.message,u="success"):(r="Something went wrong !!!",d=(C=y==null?void 0:y.error)==null?void 0:C.message,u="danger")}S.push(t.jsx(A,{title:r,type:u,duration:2500,children:d}),{placement:"top-end"}),e(F(!1)),e(v(p==null?void 0:p.id))},children:({touched:c,errors:r,values:d,setFieldValue:u})=>t.jsx(De,{children:t.jsx(he,{layout:"inline",children:t.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[t.jsxs("div",{className:"mb-10",children:[t.jsxs("h5",{className:"mb-4",children:[" ",(s==null?void 0:s.dialogMode)==="Add"?"Add Notes":"Edit Notes"]}),t.jsx(xe,{layout:"vertical",label:"Notes",invalid:r.notes&&c.notes,errorMessage:r.notes,children:t.jsx(Ne,{textArea:!0,placeholder:"Notes",name:"notes",component:me})})]}),t.jsx(we,{name:"tags",children:({form:f,remove:L,push:x})=>t.jsx("div",{children:t.jsx("div",{children:t.jsx(Y,{type:"submit",variant:"solid",children:(s==null?void 0:s.dialogMode)==="Add"?"Add":"Edit"})})})})]})})})})})})},D=({title:e,value:s})=>{const o=(h,a)=>h.length>a?`${h.slice(0,a)}
${o(h.slice(a),a)}`:h,p=s.length>80?o(s,80):s;return t.jsxs("div",{children:[t.jsx("span",{children:e}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold mb-4",style:{maxWidth:"500px",wordWrap:"break-word"},children:p})]})},_e=e=>{const s=T(),[l,o]=w.useState(!1),p=ee(),h=()=>{o(!1)},a=()=>{o(!0)},n=Se(r=>{var d,u;return(u=(d=r.crmLeads)==null?void 0:d.data)==null?void 0:u.selectedLeads}),c=async()=>{var d,u,f;o(!1);const r=await s(Ae(n.id));await s(_()),(d=r==null?void 0:r.payload)!=null&&d.success?(S.push(t.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=r==null?void 0:r.payload)==null?void 0:u.message}),{placement:"top-end"}),p("/app/crm/leads"),s(Te({}))):S.push(t.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=r==null?void 0:r.error)==null?void 0:f.message}),{placement:"top-end"}),await s(_()),await s(ke())};return t.jsxs(t.Fragment,{children:[t.jsx(Y,{size:"xs",onClick:a,block:!0,variant:"solid",children:t.jsx(be,{className:"text-sm"})}),t.jsx(X,{isOpen:l,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:h,onRequestClose:h,onCancel:h,onConfirm:c,children:t.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},He=e=>{var l,o;const s=[e.address,(l=e.cityData)==null?void 0:l.cityName,(o=e.stateData)==null?void 0:o.stateName,e.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},Ge=({data:e={}})=>{var s,l,o,p,h,a,n,c,r;return t.jsx(ge,{className:"h-full",children:t.jsxs("div",{className:"flex flex-col xl:flex-row ",children:[t.jsxs("div",{className:"grid grid-cols-3  wrap-data w-full",children:[(e==null?void 0:e.title)&&t.jsx("div",{children:t.jsx(D,{title:"Title",value:e==null?void 0:e.title})}),e.budget&&t.jsx("div",{children:t.jsx(D,{title:"Budget",value:e.budget})}),((s=e==null?void 0:e.contactData)==null?void 0:s.firstName)&&t.jsx("div",{children:t.jsx(D,{title:"Contact Name",value:(l=e==null?void 0:e.contactData)==null?void 0:l.firstName})}),(e==null?void 0:e.email)&&t.jsx("div",{children:t.jsx(D,{title:"Email",value:e==null?void 0:e.email})}),((o=e==null?void 0:e.contactData)==null?void 0:o.email)&&t.jsx("div",{children:t.jsx(D,{title:"Contact Email",value:e.contactData.email})}),(e==null?void 0:e.contactNumber)&&t.jsx("div",{children:t.jsx(D,{title:"Contact Number",value:e.contactNumber})}),(((p=e==null?void 0:e.contactData)==null?void 0:p.address)||((h=e==null?void 0:e.contactData)==null?void 0:h.cityData)||((a=e==null?void 0:e.contactData)==null?void 0:a.stateData)||((n=e==null?void 0:e.contactData)==null?void 0:n.zipcode))&&t.jsx("div",{children:t.jsx(D,{title:"Contact Address",value:He(e==null?void 0:e.contactData)})}),(e==null?void 0:e.status)&&t.jsx("div",{children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("span",{className:"font-semibold",children:"Status:"}),t.jsx("div",{className:"ml-2",children:t.jsx(P,{status:e==null?void 0:e.status})})]})}),(e==null?void 0:e.reason)&&t.jsx("div",{children:t.jsx(D,{title:"Reason",value:e==null?void 0:e.reason})}),((c=e==null?void 0:e.tags)==null?void 0:c.length)>0&&t.jsxs("div",{children:[t.jsx(D,{title:"Tags",value:""}),t.jsx(Ce,{fullDisplay:!0,tags:e==null?void 0:e.tags})]}),((r=e==null?void 0:e.leadFields)==null?void 0:r.length)>0&&e.leadFields.map((d,u)=>{var f;return d.value?t.jsx("div",{children:t.jsx(D,{title:(f=d==null?void 0:d.customKey)==null?void 0:f.label,value:d.value})},u):null})]}),t.jsx("div",{className:"w-10",children:t.jsx(_e,{data:e})})]})})},Ve=()=>{const e=T(),s=b(a=>{var n,c,r;return(r=(c=(n=a.crmLeadDetails)==null?void 0:n.data)==null?void 0:c.lead)==null?void 0:r.data}),l=b(a=>{var n,c;return(c=(n=a.crmLeadDetails)==null?void 0:n.data)==null?void 0:c.deleteConfirmation}),o=b(a=>{var n;return(n=a==null?void 0:a.crmLeadDetails)==null?void 0:n.data}),p=()=>{e(R(!1))},h=async()=>{var n,c,r,d,u;e(R(!1)),console.log("jh===d",(n=o==null?void 0:o.selectedNote)==null?void 0:n.id);const a=await e(qe((c=o==null?void 0:o.selectedNote)==null?void 0:c.id));await e(v(s==null?void 0:s.id)),console.log("wdwd",a),(r=a==null?void 0:a.payload)!=null&&r.success?S.push(t.jsx(A,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=a==null?void 0:a.payload)==null?void 0:d.message}),{placement:"top-end"}):S.push(t.jsx(A,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=a==null?void 0:a.error)==null?void 0:u.message}),{placement:"top-end"}),await e(v(s==null?void 0:s.id))};return t.jsx(X,{isOpen:l,type:"danger",title:"Delete Note",confirmButtonColor:"red-600",onClose:p,onRequestClose:p,onCancel:p,onConfirm:h,children:t.jsx("p",{children:"Are you sure you want to delete this Note? This action cannot be undone."})})};V("crmTasks",Ie);const Xe=()=>{const e=T(),s=E(g=>{var i,m,j,C;return(C=(j=(m=(i=g.crmLeadDetails)==null?void 0:i.data)==null?void 0:m.lead)==null?void 0:j.data)==null?void 0:C.relatedTaskList}),l=E(g=>{var i,m;return(m=(i=g.crmLeadDetails)==null?void 0:i.data)==null?void 0:m.loading}),o=E(g=>{var i,m;return(m=(i=g.crmLeadDetails)==null?void 0:i.data)==null?void 0:m.tableData}),{pageIndex:p,pageSize:h,sort:a,query:n,total:c}=E(g=>{var i,m;return(m=(i=g.crmLeadDetails)==null?void 0:i.data)==null?void 0:m.tableData}),r=w.useCallback(()=>{e(Fe())},[e]);w.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||e(I({...o,query:""}))}),[r]);const d=w.useMemo(()=>({pageIndex:p,pageSize:h,sort:a,query:n,total:c}),[p,h,a,n,c]),u=w.useMemo(()=>[{header:"Title",accessorKey:"title",cell:i=>{const m=i.row.original.title;return t.jsx(pe,{title:m,children:t.jsx(z,{text:m,maxLength:20})},m)}},{header:"Due Date",accessorKey:"dueDate",cell:i=>{var m;return Me((m=i.row.original)==null?void 0:m.dueDate).format("DD MMMM YYYY")}},{header:"priority",accessorKey:"priority",cell:i=>{const m=i.row.original.priority;return t.jsx(P,{status:m})}},{header:"module",accessorKey:"module",cell:i=>{var j;const m=(j=i.row.original)==null?void 0:j.module;return m?t.jsx(z,{text:m,maxLength:20}):"-"}},{header:"type",accessorKey:"type",cell:i=>{var j;const m=(j=i.row.original)==null?void 0:j.type;return m?t.jsx(z,{text:m,maxLength:20}):"-"}},{header:"Status",accessorKey:"completionStatus",cell:i=>{const m=i.row.original.completionStatus;return t.jsx(P,{status:m})}}],[]),f=g=>{const i=O(d);i.pageIndex=g,e(I(i))},L=g=>{const i=O(d);i.pageSize=Number(g),i.pageIndex=1,e(I(i))},x=g=>{const i=O(d);i.sort=g,e(I(i))};return t.jsx("div",{children:t.jsx(ce,{columns:u,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:f,onSelectChange:L,onSort:x})})};V("crmLeadDetails",Ye);const zs=()=>{const e=T(),s=te(),{id:l}=s,o=b(x=>{var g,i;return(i=(g=x==null?void 0:x.crmLeadDetails)==null?void 0:g.data)==null?void 0:i.lead}),[p,h]=w.useState([]),a=()=>{e(F(!0)),e(G("Add"))},n=o==null?void 0:o.data,c=b(x=>{var g;return(g=x==null?void 0:x.crmLeadDetails)==null?void 0:g.data.loading});w.useEffect(()=>{if(n!=null&&n.leadNotes){const x=[...n==null?void 0:n.leadNotes];x==null||x.sort((g,i)=>new Date(i.createdAt).getTime()-new Date(g.createdAt).getTime()),h(x)}},[n]),w.useEffect(()=>(r(),()=>{e(Pe(!0))}),[]);const r=async()=>{l&&e(v(l))},d=()=>{window.history.back()},u=q("leads","canModify");q("leads","canDelete"),q("leads","canCreate");const f=x=>{e(F(!0)),e(H(x)),e(G("Edit"))},L=x=>{e(H(x)),e(R(!0))};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[t.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:d,children:t.jsx(je,{})}),t.jsx("h3",{children:"Lead Details"})]}),t.jsxs(oe,{className:"h-full",children:[t.jsxs(se,{loading:c,children:[!K(n)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-4 gap-4 mt-2",children:[t.jsx("div",{className:"col-span-3",children:t.jsx(Ge,{data:n})}),t.jsxs(B,{className:"col-span-1",children:[t.jsx("h5",{children:"Lead Activity"}),t.jsx(Ee,{activity:(n==null?void 0:n.leadsActivity)||[]})]})]}),t.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-3 gap-4 mt-2",children:[t.jsxs(B,{className:"col-span-1",children:[t.jsxs("div",{className:"flex justify-between mb-2",children:[t.jsx("h5",{children:"Notes"}),u&&t.jsx(Y,{size:"xs",type:"button",className:"!px-2 !text-lg",onClick:a,children:t.jsx(fe,{})})]}),t.jsx(ue,{notes:p||[],canEdit:u,onEdit:f,onDelete:L})]}),t.jsxs(B,{className:"col-span-2",children:[t.jsx("h4",{className:"mb-3",children:"Connected Tasks"}),t.jsx(Xe,{})]})]})]}),t.jsx(We,{}),t.jsx(Ve,{})]}),!c&&K(n)&&t.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[t.jsx(de,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),t.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{zs as default};
