import{al as F,am as ra,an as ia,ao as na,a as q,r as R,j as a,c as oa,aq as ca}from"./index-dc23d4d5.js";import{S as Y}from"./StickyFooter-c7d731f7.js";import"./Alert-69392695.js";import"./index-cd4f30c5.js";import"./Badge-54fd55ab.js";import{B as I}from"./Button-2503e753.js";import"./RangeCalendar-4a1aa7d0.js";import"./Card-53030d97.js";import"./index-7387e6a3.js";import"./index-523d8345.js";import{D as da}from"./Dialog-cf49f15b.js";import"./Drawer-c45873b3.js";import"./index-470259c7.js";import{a as g,F as J}from"./FormItem-83714e3c.js";import"./toString-812aacee.js";import{I as C}from"./Input-6df97c26.js";import"./index-b2d1bd5e.js";import"./index-fbcc6caf.js";import"./index-07f71a80.js";import{t as $,N as V}from"./toast-f63a7bff.js";import"./Pagination-b6c8442e.js";import"./Progress-4fa29660.js";import"./index-18933ced.js";import"./ScrollBar-12696a62.js";import"./index-060d41dd.js";import{S as la}from"./Select-d8ee6a0d.js";import"./Skeleton-0ded8fec.js";import"./index-96415184.js";import{S as ma}from"./Switcher-7ee0d497.js";import"./index-40cae662.js";import"./index-3642908f.js";import{T as pa}from"./Tag-83d01dc5.js";import"./index-d224eaaa.js";import"./index-ad0d3fa9.js";import"./Tooltip-3f2f3d9e.js";import"./Upload-c9737ebf.js";import{F as ga}from"./FormDesription-aa76249a.js";import{F as ua}from"./FormRow-dee2d205.js";import{u as ha,b,F as K,a as X}from"./formik.esm-4cdcb068.js";import{c as xa}from"./cloneDeep-9e6994f4.js";import{b as Z,c as fa}from"./index.esm-c3cfea61.js";import{S as ba,ae as ya}from"./index.esm-915a2267.js";import{c as U,a as S,d as ja}from"./index.esm-be4aa8b1.js";import{a0 as Na,a1 as wa,a2 as Oa,a3 as Ca,a4 as za,V as va}from"./CrmService-252ce793.js";/* empty css              */import{a as Ea}from"./index.esm-4e1e8bcb.js";import{R as aa}from"./index.esm-aef4e295.js";import"./Views-6bb03ba3.js";import"./chart.constant-c6cad645.js";import"./chart.config-5bf4a2e7.js";import"./DataTable-62cc384e.js";import"./GrowShrinkTag-8276d9bc.js";import"./react-tooltip.min-98f6153b.js";import{R as Sa}from"./RichTextEditor-2e476e64.js";import"./SegmentItemOption-783c6b78.js";import"./SvgIcon-a91d458f.js";import{G as Ia,T as Da}from"./index.esm-4b0f1ee9.js";import{a as ka}from"./index.esm-99b45bad.js";import{i as Ma}from"./isLastChild-83eb4c23.js";const Fa="crmOrganizations",k=F("crmOrganizations/data/organization",async()=>(await Na()).data),M=F("crmOrganizations/data/organization-branches",async()=>(await wa()).data),Aa=F("crmOrganizations/data/editBranch",async({branchId:s,updatedData:t})=>{var e,r;try{return(await Oa(s,t)).data}catch(i){throw new Error((r=(e=i==null?void 0:i.response)==null?void 0:e.data)==null?void 0:r.message)}}),Ba=F("crmOrganizations/data/createBranch",async s=>{var t,e;try{return(await Ca(s)).data}catch(r){throw new Error((e=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:e.message)}}),Ra=F("crmOrganizations/data/organization",async s=>{var t,e;try{return(await za(s)).data}catch(r){throw new Error((e=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:e.message)}}),H=F("crmOrganizations/data/getUsers",async()=>{var s,t;try{return(await va()).data}catch(e){throw new Error((t=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:t.message)}}),La={organizationData:[],loading:!1,statisticLoading:!1,branchList:[],isDialogOpen:!1,selectedBranch:{},deleteConfirmation:!1,usersList:[],dialogMode:"Add"},ea=ra({name:`${Fa}/state`,initialState:La,reducers:{setBranchList:(s,t)=>{s.branchList=t.payload},setSelectedBranch:(s,t)=>{s.selectedBranch=t.payload},setDialogToggle:(s,t)=>{s.isDialogOpen=t.payload},toggleDeleteConfirmation:(s,t)=>{s.deleteConfirmation=t.payload},setUsersList:(s,t)=>{s.usersList=t.payload},setDialogMode:(s,t)=>{s.dialogMode=t.payload}},extraReducers:s=>{s.addCase(k.fulfilled,(t,e)=>{t.organizationData=e.payload.data,t.loading=!1}).addCase(k.pending,t=>{t.loading=!0}).addCase(H.fulfilled,(t,e)=>{t.usersList=e.payload.data,t.loading=!1}).addCase(M.fulfilled,(t,e)=>{t.branchList=e.payload.data,t.loading=!1}).addCase(M.pending,t=>{t.statisticLoading=!0})}}),{setBranchList:qa,setSelectedBranch:$a,setDialogToggle:D,setUsersList:Ze,setDialogMode:_,toggleDeleteConfirmation:Ue}=ea.actions,Va=ea.reducer,Ha=ia({data:Va}),z=na,j=[],Ta=s=>{const{touched:t,errors:e,setFieldValue:r,values:i}=s,d=q();R.useEffect(()=>{(async()=>{await d(H())})()},[d]);const l=z(n=>{var y,v;return(v=(y=n.crmOrganizations)==null?void 0:y.data)==null?void 0:v.usersList});j.length=0,l==null||l.forEach(n=>{j==null||j.push({label:`${n==null?void 0:n.firstName} ${n==null?void 0:n.lastName}`,value:n.id})});const u=()=>{d(D(!1))},N=ha();return a.jsxs(a.Fragment,{children:[a.jsx(g,{label:"Branch Name",invalid:e.branchName&&t.branchName,errorMessage:e.branchName,children:a.jsx(b,{type:"text",autoComplete:"off",name:"branchName",placeholder:"Branch Name",component:C,prefix:a.jsx(aa,{className:"text-xl"})})}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Branch Owner",invalid:e.branchOwnerId&&t.branchOwnerId,errorMessage:e.branchOwnerId,children:a.jsx(la,{name:"branchOwnerId",placeholder:"Branch Owner",options:j,id:"branchOwnerId",value:j==null?void 0:j.find(n=>(n==null?void 0:n.value)===(i==null?void 0:i.branchOwnerId)),onChange:n=>{const y=n==null?void 0:n.value;r("branchOwnerId",y)}})})}),a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Contact Number",invalid:e.contact&&t.contact,errorMessage:e.contact,children:a.jsx(b,{type:"text",autoComplete:"off",name:"contact",placeholder:"Contact",component:C,prefix:a.jsx(Ea,{className:"text-xl"})})})})]}),a.jsx(g,{children:a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"Head Quarter"}),a.jsx(b,{autoComplete:"off",name:"isHeadQuarter",component:ma,checked:N.values.isHeadQuarter})]})}),a.jsx(g,{label:"Address",invalid:e.addressInformation&&t.addressInformation,errorMessage:e.addressInformation,children:a.jsx(b,{type:"text",autoComplete:"off",name:"addressInformation",placeholder:"Address",component:C,prefix:a.jsx(ba,{className:"text-xl"})})}),a.jsx(Y,{className:" px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:u,children:"Cancel"}),a.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:a.jsx(Z,{}),children:"Save"})]})})]})},Qa=U().shape({branchName:S().required("Details are required"),contact:S().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits"," Contact must be exactly 10 digits",s=>{if(s){const t=Number(s);return/^\d{10}$/.test(t.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",s=>s?Number(s).toString().length<=10:!0),addressInformation:S(),isHeadQuarter:S(),branchOwnerId:S().required("This field is required").test("is-valid-contact","Invalid contact selected",s=>!!j.find(t=>t.value==s))}),ta=R.forwardRef((s,t)=>{const e=q(),r=z(d=>d.crmOrganizations.data.dialogMode),i=z(d=>d.crmOrganizations.data.selectedBranch);return a.jsx(K,{innerRef:t,initialValues:{branchName:r==="Edit"?i==null?void 0:i.branchName:"",branchOwnerId:r==="Edit"?i==null?void 0:i.branchOwnerId:"",addressInformation:r==="Edit"?i==null?void 0:i.addressInformation:"",contact:r==="Edit"?i==null?void 0:i.contact:null,isHeadQuarter:r==="Edit"?i==null?void 0:i.isHeadQuarter:!1},validationSchema:Qa,onSubmit:async(d,{setSubmitting:l})=>{var u,N,n,y,v,L;if(r==="Add"){const o=await e(Ba(d));let h="",x="",f="";(u=o==null?void 0:o.payload)!=null&&u.success?(h="Successfully Added",x=(N=o==null?void 0:o.payload)==null?void 0:N.message,f="success"):(h="Something went wrong !!!",x=(n=o==null?void 0:o.error)==null?void 0:n.message,f="danger"),$.push(a.jsx(V,{title:h,type:f,duration:2500,children:x}),{placement:"top-end"}),e(D(!1)),await e(k()),await e(M()),l(!1)}else{const o=await e(Aa({branchId:i==null?void 0:i.id,updatedData:d}));let h="",x="",f="";(y=o==null?void 0:o.payload)!=null&&y.success?(h="Successfully Added",x=(v=o==null?void 0:o.payload)==null?void 0:v.message,f="success"):(h="Something went wrong !!!",x=(L=o==null?void 0:o.error)==null?void 0:L.message,f="danger"),$.push(a.jsx(V,{title:h,type:f,duration:2500,children:x}),{placement:"top-end"}),e(D(!1)),await e(k()),await e(M()),l(!1)}},children:({touched:d,errors:l,values:u,setFieldValue:N})=>a.jsx(X,{children:a.jsx(J,{children:a.jsx(Ta,{touched:d,errors:l,setFieldValue:N,values:u})})})})});ta.displayName="BranchesMainForm";const Ga=s=>{const{values:t,touched:e,errors:r}=s;return a.jsxs(a.Fragment,{children:[a.jsx("h5",{children:"Organizations"}),a.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Organization Name",invalid:r.organizationName&&e.organizationName,errorMessage:r.organizationName,children:a.jsx(b,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:C,prefix:a.jsx(Ia,{className:"text-xl"})})})}),a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Industry",invalid:r.industry&&e.industry,errorMessage:r.industry,children:a.jsx(b,{type:"text",autoComplete:"off",name:"industry",value:t.industry,placeholder:"Organization Industry",component:C})})})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Contact",invalid:r.contact&&e.contact,errorMessage:r.contact,children:a.jsx(b,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:C,prefix:a.jsx(Da,{className:"text-xl"})})})}),a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Website",invalid:r.website&&e.website,errorMessage:r.website,children:a.jsx(b,{type:"test",autoComplete:"off",name:"website",placeholder:"Website",component:C,prefix:a.jsx(ka,{className:"text-xl"})})})})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.jsx("div",{className:"col-span-1",children:a.jsx(g,{label:"Number Of Employees",invalid:r.numberOfEmployees&&e.numberOfEmployees,errorMessage:r.numberOfEmployees,children:a.jsx(b,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:C,prefix:a.jsx(fa,{className:"text-xl"})})})})}),a.jsx(g,{label:"Description",labelClass:"!justify-start",invalid:r.notes&&e.notes,errorMessage:r.notes,children:a.jsx(b,{name:"notes",children:({field:i,form:d})=>a.jsx(Sa,{value:i.value,onChange:l=>d.setFieldValue(i.name,l)})})})]})},Pa=U().shape({organizationName:S().required("Organization Name Required"),industry:S().required("Industry Required"),contact:ja().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits"," Contact must be exactly 10 digits",s=>{if(s){const t=Number(s);return/^\d{10}$/.test(t.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",s=>s?Number(s).toString().length<=10:!0)}),sa=R.forwardRef((s,t)=>{var h,x,f,T,Q,G;const e=q(),r=z(c=>c.crmOrganizations.data.organizationData);R.useEffect(()=>{(async()=>{var E;const w=await e(M());e(qa((E=w==null?void 0:w.payload)==null?void 0:E.data)),await e(H()),await e(M())})()},[e]);const i=z(c=>c.crmOrganizations.data.usersList),{type:d,onFormSubmit:l,onDiscard:u}=s,N=z(c=>c.crmOrganizations.data.isDialogOpen),n=z(c=>c.crmOrganizations.data.branchList),y=z(c=>c.crmOrganizations.data.dialogMode),v=()=>{e(D(!1))},L=()=>{e(D(!0)),e(_("Add"))},o=c=>{e(D(!0)),e($a(c)),e(_("Edit"))};return a.jsxs(a.Fragment,{children:[a.jsx(K,{innerRef:t,initialValues:{organizationName:((h=r[0])==null?void 0:h.organizationName)||"",industry:((x=r[0])==null?void 0:x.industry)||"",contact:((f=r[0])==null?void 0:f.contact)||null,website:((T=r[0])==null?void 0:T.website)||"",numberOfEmployees:((Q=r[0])==null?void 0:Q.numberOfEmployees)||null,notes:((G=r[0])==null?void 0:G.notes)||""},validationSchema:Pa,onSubmit:async(c,{setSubmitting:w})=>{var O,P,W;const E=xa(c),m=await e(Ra(c));let A="",p="",B="";(O=m==null?void 0:m.payload)!=null&&O.success?(A="Successfully Added",p=(P=m==null?void 0:m.payload)==null?void 0:P.message,B="success"):(A="Something went wrong !!!",p=(W=m==null?void 0:m.error)==null?void 0:W.message,B="danger"),$.push(a.jsx(V,{title:A,type:B,duration:2500,children:p}),{placement:"top-end"}),await e(k()),l==null||l(E,w)},children:({values:c,touched:w,errors:E,isSubmitting:m})=>{const A={touched:w,errors:E};return a.jsx(X,{children:a.jsxs(J,{children:[a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:a.jsx("div",{className:"lg:col-span-4",children:a.jsx(Ga,{touched:w,errors:E,values:c})})}),a.jsx(ga,{title:" Branches",desc:"You can update your branches information here"}),a.jsxs(ua,{name:"branches",alignCenter:!0,label:"",...A,children:[a.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600",children:n==null?void 0:n.map((p,B)=>a.jsxs("div",{className:oa("flex items-center justify-between p-4",!Ma(n,B)&&"border-b border-gray-200 dark:border-gray-600"),children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx(aa,{}),a.jsx("div",{className:"ml-3 rtl:mr-3",children:a.jsxs("div",{className:"flex items-center",children:[a.jsxs("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:[p.branchName," ",i!=null&&i.find(O=>O.id===p.branchOwnerId)?`${i.find(O=>O.id===p.branchOwnerId).firstName} ${i.find(O=>O.id===p.branchOwnerId).lastName}`:""]}),p.isHeadQuarter&&a.jsx(pa,{className:"bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2",children:a.jsxs("span",{className:"capitalize",children:[" ","Head Quarter"," "]})})]})})]}),a.jsx("div",{className:"flex",children:a.jsx(I,{size:"sm",type:"button",onClick:()=>o(p),children:"Edit"})})]},p.id))}),a.jsx("div",{className:"mt-2",children:a.jsx(I,{type:"button",variant:"plain",size:"sm",icon:a.jsx(ya,{className:"text-lg"}),onClick:()=>L(),children:a.jsx("span",{className:"font-semibold",children:"Add new branch"})})})]}),a.jsx(Y,{className:"-mx-8 px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:()=>u==null?void 0:u(),children:"Discard"}),a.jsx(I,{size:"sm",variant:"solid",loading:m,icon:a.jsx(Z,{}),type:"submit",children:"Save"})]})})]})})}}),a.jsxs(da,{isOpen:N,onClose:v,children:[a.jsxs("h5",{className:"mb-4",children:[y==="Edit"?"Edit":"Add New"," Branch"]}),a.jsx(ta,{})]})]})});sa.displayName="OrganizationForm";ca("crmOrganizations",Ha);const Wa=()=>{const s=q();return R.useEffect(()=>{s(k())},[s]),a.jsx(a.Fragment,{children:a.jsx(sa,{type:"edit",onFormSubmit:function(t,e){e(!1)}})})},at=Wa;export{at as O};
