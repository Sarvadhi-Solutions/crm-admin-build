import{a as q,r as F,j as e,aq as oe,ah as ce}from"./index-01b42c77.js";import{S as K}from"./StickyFooter-db68b1b0.js";import"./Alert-ba84ad42.js";import"./index-b609fa7a.js";import"./Badge-6cc907e6.js";import{B as z}from"./Button-a5544b15.js";import"./RangeCalendar-7e850f6c.js";import{C as le}from"./Card-039a9ed6.js";import"./index-dab07eaf.js";import"./index-a9a60eee.js";import{D as de}from"./Dialog-b7c1600d.js";import"./Drawer-a351bd90.js";import"./index-71de6292.js";import{a as E,F as Z}from"./FormItem-4a386e6f.js";import"./toString-228d794c.js";import{I as V}from"./Input-b0748b3e.js";import"./index-2bfb9d4e.js";import"./index-ca28e0d9.js";import"./index-a6a0da8c.js";import{t as A,N as M}from"./toast-9d39500f.js";import"./Pagination-d57e7c83.js";import"./Progress-613f4d7f.js";import"./index-8ad179bb.js";import"./ScrollBar-349c0130.js";import"./index-92468997.js";import{S as me}from"./Select-2cf95561.js";import"./Skeleton-cf28f7d5.js";import"./index-b9cef8bb.js";import{S as ue}from"./Switcher-cf39306f.js";import"./index-f7318691.js";import"./index-0fe1020b.js";import{T as pe}from"./Tag-989e3abd.js";import"./index-8359d520.js";import"./index-3b362267.js";import"./Tooltip-06c83e8f.js";import"./Upload-b982e753.js";import{F as ge}from"./FormDesription-3c60f0a2.js";import{F as he}from"./FormRow-b8fcc223.js";import{u as xe,b as R,F as U,a as ee}from"./formik.esm-a8cc53a4.js";import{c as fe}from"./cloneDeep-29f2aae8.js";import{A as te}from"./index.esm-44ca1025.js";import{S as je,ad as be}from"./index.esm-587e89d5.js";import{R as ae}from"./index.esm-b52970b0.js";import{c as re,a as D,d as ye}from"./index.esm-d51743a0.js";import{u as p,g as se,s as S,c as Ne,a as B,b as $,e as we,t as Q,d as Oe,f as Ce,h as ze,i as X,j as J,r as De}from"./index-1aec1fe3.js";/* empty css              */import{B as Ie}from"./index.esm-b7456581.js";import{C as Se}from"./ConfirmDialog-a691c410.js";import"./Views-0a1f8861.js";import"./chart.constant-8991471a.js";import"./GrowShrinkTag-a3ea01ed.js";import"./DataTable-2544ad05.js";import"./react-tooltip.min-cd40762f.js";import"./RichTextEditor-d17e3214.js";import"./SegmentItemOption-b31b5145.js";import"./SvgIcon-dc305fe7.js";const w=[],ve=i=>{const{touched:t,errors:a,setFieldValue:n,values:s}=i,r=q();F.useEffect(()=>{(async()=>{await r(se())})()},[r]);const c=p(o=>{var y,C;return(C=(y=o.crmOrganizations)==null?void 0:y.data)==null?void 0:C.usersList});w.length=0,c==null||c.forEach(o=>{w==null||w.push({label:`${o==null?void 0:o.firstName} ${o==null?void 0:o.lastName}`,value:o.id})});const m=()=>{r(S(!1))},g=xe();return e.jsxs(e.Fragment,{children:[e.jsx(E,{label:"Branch Name",invalid:a.branchName&&t.branchName,errorMessage:a.branchName,children:e.jsx(R,{type:"text",autoComplete:"off",name:"branchName",placeholder:"Branch Name",component:V,prefix:e.jsx(ae,{className:"text-xl"})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(E,{label:"Branch Owner",invalid:a.branchOwnerId&&t.branchOwnerId,errorMessage:a.branchOwnerId,children:e.jsx(me,{name:"branchOwnerId",placeholder:"Branch Owner",options:w,id:"branchOwnerId",value:w==null?void 0:w.find(o=>(o==null?void 0:o.value)===(s==null?void 0:s.branchOwnerId)),onChange:o=>{const y=o==null?void 0:o.value;n("branchOwnerId",y)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(E,{label:"Contact Number",invalid:a.contact&&t.contact,errorMessage:a.contact,children:e.jsx(R,{type:"text",autoComplete:"off",name:"contact",placeholder:"Contact",component:V,prefix:e.jsx(Ie,{className:"text-xl"})})})})]}),e.jsx(E,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"Head Quarter"}),e.jsx(R,{autoComplete:"off",name:"isHeadQuarter",component:ue,checked:g.values.isHeadQuarter})]})}),e.jsx(E,{label:"Address",invalid:a.addressInformation&&t.addressInformation,errorMessage:a.addressInformation,children:e.jsx(R,{type:"text",autoComplete:"off",name:"addressInformation",placeholder:"Address",component:V,prefix:e.jsx(je,{className:"text-xl"})})}),e.jsx(K,{className:" px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(z,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:m,children:"Cancel"}),e.jsx(z,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(te,{}),children:"Save"})]})})]})},ke=re().shape({branchName:D().required("Details are required"),contact:D().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits"," Contact must be exactly 10 digits",i=>{if(i){const t=Number(i);return/^\d{10}$/.test(t.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",i=>i?Number(i).toString().length<=10:!0),addressInformation:D(),isHeadQuarter:D(),branchOwnerId:D().required("This field is required").test("is-valid-contact","Invalid contact selected",i=>!!w.find(t=>t.value==i))}),ie=F.forwardRef((i,t)=>{const a=q(),n=p(r=>r.crmOrganizations.data.dialogMode),s=p(r=>{var c,m;return(m=(c=r.crmOrganizations)==null?void 0:c.data)==null?void 0:m.selectedBranch});return e.jsx(U,{innerRef:t,initialValues:{branchName:n==="Edit"?s==null?void 0:s.branchName:"",branchOwnerId:n==="Edit"?s==null?void 0:s.branchOwnerId:"",addressInformation:n==="Edit"?s==null?void 0:s.addressInformation:"",contact:n==="Edit"?s==null?void 0:s.contact:null,isHeadQuarter:n==="Edit"?s==null?void 0:s.isHeadQuarter:!1},validationSchema:ke,onSubmit:async(r,{setSubmitting:c})=>{var m,g,o,y,C,H;if(n==="Add"){const l=await a(Ne(r));let N="",j="",b="";(m=l==null?void 0:l.payload)!=null&&m.success?(N="Successfully Added",j=(g=l==null?void 0:l.payload)==null?void 0:g.message,b="success"):(N="Something went wrong !!!",j=(o=l==null?void 0:l.error)==null?void 0:o.message,b="danger"),A.push(e.jsx(M,{title:N,type:b,duration:2500,children:j}),{placement:"top-end"}),a(S(!1)),await a(B()),await a($()),c(!1)}else{const l=await a(we({branchId:s==null?void 0:s.id,updatedData:r}));let N="",j="",b="";(y=l==null?void 0:l.payload)!=null&&y.success?(N="Successfully Added",j=(C=l==null?void 0:l.payload)==null?void 0:C.message,b="success"):(N="Something went wrong !!!",j=(H=l==null?void 0:l.error)==null?void 0:H.message,b="danger"),A.push(e.jsx(M,{title:N,type:b,duration:2500,children:j}),{placement:"top-end"}),a(S(!1)),await a(B()),await a($()),c(!1)}},children:({touched:r,errors:c,values:m,setFieldValue:g})=>e.jsx(ee,{children:e.jsx(Z,{children:e.jsx(ve,{touched:r,errors:c,setFieldValue:g,values:m})})})})});ie.displayName="BranchesMainForm";const I=({title:i,value:t})=>{const n=(r,c)=>(r==null?void 0:r.length)>c?`${r.slice(0,c)}
${n(r.slice(c),c)}`:r,s=(t==null?void 0:t.length)>80?n(t,80):t;return e.jsxs("div",{children:[e.jsx("span",{children:i}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold mb-5",style:{wordWrap:"break-word"},children:s})]})},Ee=i=>{var a;const t=p(n=>{var s,r;return(r=(s=n.crmOrganizations)==null?void 0:s.data)==null?void 0:r.organizationData});return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Organizations"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(I,{title:"Organization Name",value:t.organizationName})}),e.jsx("div",{children:e.jsx(I,{title:"Industry",value:(a=t.industryData)==null?void 0:a.industryName})}),t.website&&e.jsx("div",{children:e.jsx(I,{title:"Website",value:t.website})}),t.contact&&e.jsx(I,{title:"Contact Number",value:t.contact}),(t==null?void 0:t.contactNumber)&&e.jsx(I,{title:"Phone",value:t==null?void 0:t.contactNumber}),(t==null?void 0:t.numberOfEmployees)&&e.jsx(I,{title:"Number of Employees",value:t==null?void 0:t.numberOfEmployees}),e.jsx("br",{})]})]})},Fe=()=>{const i=q(),t=p(r=>r.crmOrganizations.data.deleteConfirmation),a=p(r=>r.crmOrganizations.data.selectedBranch),n=()=>{i(Q(!1))},s=async()=>{var c,m,g;i(Q(!1));const r=await i(Oe(a.id));(c=r==null?void 0:r.payload)!=null&&c.success?A.push(e.jsx(M,{title:"Successfuly Deleted",type:"success",duration:2500,children:(m=r==null?void 0:r.payload)==null?void 0:m.message}),{placement:"top-end"}):A.push(e.jsx(M,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await i(B())};return e.jsx(Se,{isOpen:t,type:"danger",title:"Delete Branch",confirmButtonColor:"red-600",onClose:n,onRequestClose:n,onCancel:n,onConfirm:s,children:e.jsx("p",{children:"Are you sure you want to delete this Branch? All record related to this branch will be deleted as well. This action cannot be undone."})})},Ae=re().shape({organizationName:D().required("Organization Name Required"),industry:D().required("Industry Required"),contact:ye().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",i=>!isNaN(i)).test("is-ten-digits"," Contact must be exactly 10 digits",i=>{if(i){const t=Number(i);return/^\d{10}$/.test(t.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",i=>i?Number(i).toString().length<=10:!0)}),ne=F.forwardRef((i,t)=>{var j,b,T,L,P,_;const a=q(),n=p(d=>{var h,x;return(x=(h=d.crmOrganizations)==null?void 0:h.data)==null?void 0:x.organizationData});F.useEffect(()=>{(async()=>{var x;const h=await a($());a(ze((x=h==null?void 0:h.payload)==null?void 0:x.data)),await a(se()),await a($())})()},[]);const s=p(d=>d.crmOrganizations.data.usersList),{type:r,onFormSubmit:c,onDiscard:m}=i,g=p(d=>d.crmOrganizations.data.isDialogOpen),o=p(d=>d.crmOrganizations.data.branchList),y=p(d=>d.crmOrganizations.data.dialogMode),C=()=>{a(S(!1))},H=()=>{a(S(!0)),a(X("Add"))},l=d=>{a(S(!0)),a(J(d)),a(X("Edit"))},N=d=>{a(Q(!0)),a(J(d))};return e.jsxs(e.Fragment,{children:[e.jsx(U,{innerRef:t,initialValues:{organizationName:((j=n[0])==null?void 0:j.organizationName)||"",industry:((b=n[0])==null?void 0:b.industry)||"",contact:((T=n[0])==null?void 0:T.contact)||null,website:((L=n[0])==null?void 0:L.website)||"",numberOfEmployees:((P=n[0])==null?void 0:P.numberOfEmployees)||null,notes:((_=n[0])==null?void 0:_.notes)||""},validationSchema:Ae,onSubmit:async(d,{setSubmitting:h})=>{var O,W,Y,G;const x=fe(d),f=await a(Ce({organizationId:(O=n[0])==null?void 0:O.id,updatedData:x}));let v="",u="",k="";(W=f==null?void 0:f.payload)!=null&&W.success?(v="Successfully Added",u=(Y=f==null?void 0:f.payload)==null?void 0:Y.message,k="success"):(v="Something went wrong !!!",u=(G=f==null?void 0:f.error)==null?void 0:G.message,k="danger"),A.push(e.jsx(M,{title:v,type:k,duration:2500,children:u}),{placement:"top-end"}),await a(B()),c==null||c(x,h)},children:({values:d,touched:h,errors:x,isSubmitting:f})=>{const v={touched:h,errors:x};return e.jsx(ee,{children:e.jsxs(Z,{children:[e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.jsx("div",{className:"lg:col-span-4",children:e.jsx(Ee,{touched:h,errors:x,values:d})})}),e.jsx(ge,{title:" Branches",desc:"You can update your branches information here"}),e.jsxs(he,{name:"branches",alignCenter:!0,label:"",...v,children:[e.jsx("div",{className:"grid lg:grid-cols-4 gap-1",children:o==null?void 0:o.map((u,k)=>e.jsx(le,{footer:e.jsxs("div",{className:"float-right mb-2",children:[e.jsx(z,{size:"xs",type:"button",onClick:()=>l(u),children:"Edit"}),e.jsx(z,{className:"ml-3 w-1/2",size:"xs",type:"button",variant:"solid",onClick:()=>N(u),children:"Delete"})]}),children:e.jsx("div",{children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(ae,{}),e.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx("h6",{children:u.branchName})})]})}),e.jsxs("p",{className:"mt-2",style:{display:"flex",flexDirection:"row"},children:[s!=null&&s.find(O=>O.id===u.branchOwnerId)?`${s.find(O=>O.id===u.branchOwnerId).firstName} ${s.find(O=>O.id===u.branchOwnerId).lastName}`:"",e.jsx("p",{className:"ml-2",children:u.isHeadQuarter&&e.jsx(pe,{className:"bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 ",children:e.jsx("span",{className:"capitalize",children:"Head Quarter"})})})]}),e.jsx("p",{className:"mt-2",children:u.contact&&u.contact})]})},u.id)},k))}),e.jsx("div",{className:"mt-2",children:e.jsx(z,{type:"button",variant:"plain",size:"sm",icon:e.jsx(be,{className:"text-lg"}),onClick:()=>H(),children:e.jsx("span",{className:"font-semibold",children:"Add new branch"})})})]}),e.jsx(K,{className:"-mx-8 px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(z,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:()=>m==null?void 0:m(),children:"Discard"}),e.jsx(z,{size:"sm",variant:"solid",loading:f,icon:e.jsx(te,{}),type:"submit",children:"Save"})]})})]})})}}),e.jsxs(de,{isOpen:g,onClose:C,children:[e.jsxs("h5",{className:"mb-4",children:[y==="Edit"?"Edit":"Add New"," Branch"]}),e.jsx(ie,{})]}),e.jsx(Fe,{})]})});ne.displayName="OrganizationForm";oe("crmOrganizations",De);const Me=()=>{const i=q(),t=p(a=>a.crmOrganizations.data.loading);return F.useEffect(()=>{i(B())},[]),e.jsx(e.Fragment,{children:e.jsx(ce,{loading:t,children:e.jsx(ne,{type:"edit",onFormSubmit:function(a,n){n(!1)}})})})},Ht=Me;export{Ht as O};
