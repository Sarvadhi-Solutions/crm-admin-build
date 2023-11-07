import{am as v,an as z,ao as H,ap as V,j as e,a as b,r as E,al as G,aq as U,at as Y,ah as _}from"./index-c2c71b67.js";import{C as J,i as T}from"./Views-3e469d6a.js";import{g as K,h as Q,i as X,j as Z}from"./CrmService-15d11bcd.js";import{C as L}from"./ConfirmDialog-59dfb946.js";import{B as F}from"./Button-9c5fa51c.js";import{C as ee}from"./Card-641c7c13.js";import{t as N,N as y}from"./toast-1c7e88ac.js";import{P as se}from"./index.esm-854b309f.js";import{u as te,d as oe,g as $,s as ie}from"./index-6ef39cf2.js";import{T as le}from"./TagsList-adcae7d4.js";import{A as re}from"./AdaptableCard-6d79530e.js";import"./Badge-71fe7402.js";import"./chart.constant-d85b92fc.js";import"./GrowShrinkTag-45e3cf24.js";import"./index-5345338d.js";import{D as ae}from"./Dialog-8f81a119.js";import"./DataTable-4690dba1.js";import{D as ne}from"./DoubleSidedImage-febab13f.js";import{I as ce}from"./Input-a6235faa.js";import"./Skeleton-39c0e07a.js";import"./react-tooltip.min-90a97092.js";import"./RichTextEditor-7aef3904.js";import"./SegmentItemOption-841378e4.js";import"./SvgIcon-426e05f5.js";import"./Tooltip-008854ca.js";import{I as de}from"./index.esm-9bcee528.js";import{u as me}from"./checkEditUpdate-2ca4f052.js";import"./Alert-94df1fc7.js";import"./RangeCalendar-06da6a52.js";import"./index-0f7a857e.js";import"./index-bbb04099.js";import"./Drawer-0edf5e5c.js";import"./index-fda7dfb7.js";import{F as pe,a as ue}from"./FormItem-78a020e3.js";import"./toString-ac4075ef.js";import"./index-ca17498b.js";import"./index-947dfc66.js";import"./index-a0374824.js";import"./Pagination-6dddef69.js";import"./Progress-81b53781.js";import"./index-72a612d1.js";import"./ScrollBar-d6546e5a.js";import"./index-d0a572c6.js";import"./Select-dd041f61.js";import"./index-e001e4a3.js";import"./Switcher-9ef30d94.js";import"./index-e96a00fb.js";import"./index-fc3c3276.js";import"./Tag-869b174a.js";import"./index-5c6007d6.js";import"./index-7308ebe4.js";import"./Upload-0425926a.js";import{a as he}from"./index.esm-c38f034a.js";import{N as ge}from"./NoteTimeline-fe65c934.js";import{F as xe,a as fe,b as je,c as De}from"./formik.esm-25f04447.js";import{c as Ne,a as ye}from"./index.esm-3f39c77b.js";import{u as S,m as R}from"./TagCategoryDetailsForm-f23ddd2f.js";import"./useTimeout-a89b02a4.js";import"./CloseButton-3657ddf2.js";import"./StatusIcon-5eed5f69.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";import"./index-6f0a636b.js";import"./index-9c27e09f.js";import"./isNil-d22b3e6c.js";import"./get-bbcb2570.js";import"./_MapCache-2e280b6f.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-10de66da.js";import"./cloneDeep-a5d9ba9c.js";import"./_getPrototype-6c543eab.js";import"./useThemeClass-ae6a3c06.js";import"./usePopper-2b474c15.js";import"./index.esm-95d05b2b.js";import"./index-ccd45f27.js";import"./moment-fbc5633a.js";import"./useControllableState-a30d7084.js";import"./useRootClose-29c37326.js";import"./TimeInput-b943a20d.js";import"./useUniqueId-63f75720.js";import"./useDidUpdate-787bd063.js";import"./useUncertainRef-be3b54b9.js";import"./slicedToArray-3c0066d1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./mapCloneElement-a58d49ea.js";import"./index.esm-ab028e22.js";import"./index.esm-c710ec86.js";/* empty css              */const C="crmDealDetails",Ce={loading:!0,deal:{},addForm:!1,dialogMode:"",selectedNote:{},deleteConfirmation:!1},j=v(`${C}/getDealById`,async s=>{var t,i;try{return await K(s)}catch(l){throw new Error((i=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:i.message)}}),we=v(`${C}/getNotes`,async s=>{var t,i;try{return(await Q(s)).data}catch(l){throw new Error((i=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:i.message)}}),ve=v(`${C}/editNotes`,async({id:s,formData:t})=>{var i,l;try{return(await X(s,t)).data}catch(a){throw new Error((l=(i=a==null?void 0:a.response)==null?void 0:i.data)==null?void 0:l.message)}}),be=v(`${C}/deleteNote`,async s=>{var t,i;try{return(await Z(s)).data}catch(l){throw new Error((i=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:i.message)}}),P=z({name:`${C}/state`,initialState:Ce,reducers:{toggleAddForm:(s,t)=>{s.addForm=t.payload},setSelectedNote:(s,t)=>{s.selectedNote=t.payload},setDialogMode:(s,t)=>{s.dialogMode=t.payload},toggleDeleteConfirmation:(s,t)=>{s.deleteConfirmation=t.payload}},extraReducers:s=>{s.addCase(j.fulfilled,(t,i)=>{t.loading=!1,t.deal=i==null?void 0:i.payload.data}).addCase(j.pending,t=>{t.loading=!0})}}),{toggleAddForm:w,setSelectedNote:q,setDialogMode:W,toggleDeleteConfirmation:A}=P.actions,Se=P.reducer,Ae=H({data:Se}),D=V,Ee=s=>{const t=te(o=>{var c,m;return(m=(c=o.crmDeals)==null?void 0:c.data)==null?void 0:m.selectedDeals}),i=b(),[l,a]=E.useState(!1),f=G(),n=()=>{a(!1)},d=()=>{a(!0)},r=async()=>{var c,m,p,h,g;a(!1);const o=await i(oe(t.id));await i($()),(m=(c=o==null?void 0:o.payload)==null?void 0:c.data)!=null&&m.success?(N.push(e.jsx(y,{title:"Successfuly Deleted",type:"success",duration:2500,children:(h=(p=o==null?void 0:o.payload)==null?void 0:p.data)==null?void 0:h.message}),{placement:"top-end"}),f("/app/crm/deals"),i(ie({}))):N.push(e.jsx(y,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=o==null?void 0:o.error)==null?void 0:g.message}),{placement:"top-end"}),await i($())};return e.jsxs(e.Fragment,{children:[e.jsx(F,{block:!0,icon:e.jsx(se,{}),variant:"solid",size:"xs",onClick:d,children:"Delete"}),e.jsx(L,{isOpen:l,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:n,onRequestClose:n,onCancel:n,onConfirm:r,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})]})},Fe=({data:s={}})=>{var t,i;return e.jsx(ee,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 ",children:[(s==null?void 0:s.title)&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold",children:"Title:"}),e.jsx("div",{className:"ml-2",children:s==null?void 0:s.title})]}),(s==null?void 0:s.budget)&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold",children:"Budget:"}),e.jsx("div",{className:"ml-2",children:s==null?void 0:s.budget})]}),(s==null?void 0:s.description)&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold",children:"Description:"}),e.jsx("div",{className:"ml-2",children:s==null?void 0:s.description})]}),((t=s==null?void 0:s.tags)==null?void 0:t.length)>0&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold",children:"Tags:"}),e.jsx("div",{className:"ml-2",children:e.jsx(le,{fullDisplay:!0,tags:s==null?void 0:s.tags})})]}),(s==null?void 0:s.leadModel)&&e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold",children:"Connected Lead:"}),e.jsx("div",{className:"ml-2",children:(i=s==null?void 0:s.leadModel)==null?void 0:i.title})]})]}),e.jsx("div",{className:"mt-5 flex flex-col xl:flex-row gap-2 w-1/4 float-left",children:e.jsx(Ee,{data:s})})]})})},Me=()=>{const s=b(),t=D(n=>{var d,r,o;return(o=(r=(d=n.crmDealDetails)==null?void 0:d.data)==null?void 0:r.deal)==null?void 0:o.data}),i=D(n=>{var d,r;return(r=(d=n.crmDealDetails)==null?void 0:d.data)==null?void 0:r.deleteConfirmation}),l=D(n=>{var d;return(d=n==null?void 0:n.crmDealDetails)==null?void 0:d.data}),a=()=>{s(A(!1))},f=async()=>{var d,r,o,c;s(A(!1));const n=await s(be((d=l==null?void 0:l.selectedNote)==null?void 0:d.id));await s(j(t==null?void 0:t.id)),(r=n==null?void 0:n.payload)!=null&&r.success?N.push(e.jsx(y,{title:"Successfuly Deleted",type:"success",duration:2500,children:(o=n==null?void 0:n.payload)==null?void 0:o.message}),{placement:"top-end"}):N.push(e.jsx(y,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=n==null?void 0:n.error)==null?void 0:c.message}),{placement:"top-end"}),await s(j(t==null?void 0:t.id))};return e.jsx(L,{isOpen:i,type:"danger",title:"Delete Note",confirmButtonColor:"red-600",onClose:a,onRequestClose:a,onCancel:a,onConfirm:f,children:e.jsx("p",{children:"Are you sure you want to delete this Note? This action cannot be undone."})})},Ie=Ne({notes:ye().required("Notes is required")}),ke=()=>{var d;const s=b(),t=S(r=>{var o;return(o=r==null?void 0:r.crmDealDetails)==null?void 0:o.data}),[i,l]=E.useState([]),a=S(r=>{var o,c,m;return(m=(c=(o=r.crmDealDetails)==null?void 0:o.data)==null?void 0:c.deal)==null?void 0:m.data}),f=S(r=>r.crmDealDetails.data.addForm);R.length=0,i==null||i.forEach(r=>{R.push({value:r.id,label:r.moduleName})});const n=()=>{s(w(!1))};return e.jsx("div",{children:e.jsx(ae,{isOpen:f,onClose:n,children:e.jsx(xe,{validationSchema:Ie,initialValues:{notes:(t==null?void 0:t.dialogMode)==="Edit"?(d=t.selectedNote)==null?void 0:d.notes:""},onSubmit:async r=>{var h,g,M,I,k,B,O;let o="",c="",m="";const p={notes:r.notes,masterId:"6",modelDataId:a==null?void 0:a.id};if((t==null?void 0:t.dialogMode)==="Edit"&&t.selectedNote){const u=(h=t==null?void 0:t.selectedNote)==null?void 0:h.id,x=await s(ve({id:u,formData:p}));(g=x==null?void 0:x.payload)!=null&&g.success?(o="Successfully Edited",c=(M=x==null?void 0:x.payload)==null?void 0:M.message,m="success"):(o="Something went wrong !!!",c=(I=x==null?void 0:x.error)==null?void 0:I.message,m="danger")}else{const u=await s(we(p));(k=u==null?void 0:u.payload)!=null&&k.success?(o="Successfully Added",c=(B=u==null?void 0:u.payload)==null?void 0:B.message,m="success"):(o="Something went wrong !!!",c=(O=u==null?void 0:u.error)==null?void 0:O.message,m="danger")}N.push(e.jsx(y,{title:o,type:m,duration:2500,children:c}),{placement:"top-end"}),s(w(!1)),s(j(a==null?void 0:a.id))},children:({touched:r,errors:o,values:c,setFieldValue:m})=>e.jsx(fe,{children:e.jsx(pe,{layout:"inline",children:e.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[e.jsxs("div",{className:"mb-10",children:[e.jsxs("h5",{className:"mb-4",children:[" ",(t==null?void 0:t.dialogMode)==="Add"?"Add Notes":"Edit Notes"]}),e.jsx(ue,{layout:"vertical",label:"Notes",invalid:o.notes&&r.notes,errorMessage:o.notes,children:e.jsx(je,{textArea:!0,placeholder:"Notes",name:"notes",component:ce})})]}),e.jsx(De,{name:"tags",children:({form:p,remove:h,push:g})=>e.jsx("div",{children:e.jsx("div",{children:e.jsx(F,{type:"submit",variant:"solid",children:(t==null?void 0:t.dialogMode)==="Add"?"Add":"Edit"})})})})]})})})})})})};U("crmDealDetails",Ae);const ht=()=>{const s=b(),t=Y(),{id:i}=t,l=D(p=>{var h,g;return(g=(h=p==null?void 0:p.crmDealDetails)==null?void 0:h.data)==null?void 0:g.deal}),a=l==null?void 0:l.data,f=D(p=>p.crmDealDetails.data.loading);E.useEffect(()=>{n()},[]);const n=()=>{i&&s(j(i))},d=()=>{s(w(!0)),s(W("Add"))},r=p=>{s(w(!0)),s(q(p)),s(W("Edit"))},o=p=>{s(q(p)),s(A(!0))},c=()=>{window.history.back()},m=me("Deal","canModify");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:c,children:e.jsx(de,{})}),e.jsx("h3",{children:"Deal Details"})]}),e.jsxs(J,{className:"h-full",children:[e.jsx(_,{loading:f,children:!T(a)&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-4 gap-4 mt-2",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(Fe,{data:a})}),e.jsxs(re,{className:"col-span-2",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("h5",{children:"Notes"}),m&&e.jsx(F,{size:"xs",type:"button",className:"!px-2 !text-lg",onClick:d,children:e.jsx(he,{})})]}),e.jsx(ge,{notes:(a==null?void 0:a.dealNotes)||[],canEdit:m,onEdit:r,onDelete:o})]})]})})}),!f&&T(a)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(ne,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]}),e.jsx(ke,{}),e.jsx(Me,{})]})]})};export{ht as default};
