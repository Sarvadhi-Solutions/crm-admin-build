import{am as I,an as ke,ao as ye,ap as we,r as f,j as t,a as M,u as be,B as je,ai as Ce,ar as Se}from"./index-7a16719d.js";import{A as Ne}from"./AdaptableCard-13b794a2.js";import{o as ve,p as Ie,q as ae,r as Me,s as Le,i as $e,j as te,k as Ae}from"./CrmService-a924234d.js";import{g as se}from"./index-d54f9d4c.js";import{g as oe}from"./index-2172888d.js";import{B as K}from"./Button-796af526.js";import{c as O}from"./cloneDeep-b8051bc5.js";import{I as P}from"./Input-67ca38c6.js";import{z as Fe,B as Oe,a6 as qe,a5 as U,d as Ee,a9 as Re,r as Pe}from"./index.esm-a0bff864.js";import{d as ze}from"./debounce-581daf1a.js";import{S as He,c as Be,a as H}from"./Select-9b097dd7.js";import{B as re}from"./Badge-1281613d.js";import{D as Ke}from"./DataTable-8d28e201.js";import{u as ie}from"./useThemeClass-fd0ad3b7.js";import{D as Ye}from"./Drawer-8ba2eb60.js";import{i as Ve}from"./Views-6f74b325.js";import{T as ne}from"./index-63d9e088.js";import{u as Ge,c as $,d as R,F as _e,a as Je,b as Qe}from"./formik.esm-e41f31d6.js";import{c as le,a as v,b as ce}from"./index.esm-d14b6227.js";import{A as We}from"./index.esm-377c755d.js";import{T as Xe}from"./index.esm-a9630cba.js";import{D as Ze,A as Ue,t as ea,c as aa}from"./AdditionalTag-d9d972e5.js";/* empty css              */import{C as ta}from"./Card-1701bbfb.js";import{A as sa}from"./index-a6767bf5.js";import{M as oa}from"./MediaSkeleton-be71f6da.js";import{N as ra}from"./react-number-format.es-51238e39.js";import"./context-0b7be94f.js";import"./_Uint8Array-cc34f89d.js";import"./_MapCache-4c25b116.js";import"./_getPrototype-af9a5f7c.js";import"./isNil-e31eb1ef.js";import"./get-d062fc7e.js";import"./toString-8f2f6138.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./Pagination-48201899.js";import"./index-b0ca69aa.js";import"./_baseIsEqual-2f7f19c2.js";import"./TableRowSkeleton-7731763d.js";import"./Skeleton-37e417fd.js";import"./index-f8af83e9.js";import"./index-d79d31fc.js";import"./CloseButton-a0a179ae.js";import"./useControllableState-a386f254.js";import"./index-7ccc27ab.js";import"./Alert-30cff1b8.js";import"./useTimeout-322537e2.js";import"./StatusIcon-d7c666ad.js";import"./Calendar-d980fa99.js";import"./index-a27a5065.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-846e7f72.js";import"./usePopper-f1e01f1f.js";import"./RangeCalendar-5a8bf6cb.js";import"./TimeInput-f92c5fbf.js";import"./useUniqueId-8e6b0c76.js";import"./useDidUpdate-c40d1f95.js";import"./Dialog-6329901c.js";import"./index-c8ec40dc.js";import"./useUncertainRef-cc932849.js";import"./chainedFunction-070f832c.js";import"./index-8ce6c613.js";import"./index-4b73696b.js";import"./index-2891c22c.js";import"./toast-88b8cde7.js";import"./Progress-eccc530b.js";import"./index-ec94b59a.js";import"./ScrollBar-c40790ee.js";import"./index-f369fb39.js";import"./index-ad91be40.js";import"./mapCloneElement-cd5ba71d.js";import"./Switcher-9edb53af.js";import"./Tag-35e609cf.js";import"./index-a7fd7ac6.js";import"./index-1fd6ab15.js";import"./Tooltip-d9375ea6.js";import"./index.esm-1010dceb.js";import"./Upload-43f1cdd5.js";import"./index.esm-4e1ebe60.js";const ia="crmTasks",J=I("crmTasks/data/getTasksStatistic",async()=>(await ve()).data),A=I("crmTasks/data/getTasks",async()=>(await Ie()).data);I("crmTasks/data/editTask",async({taskId:s,updatedData:a})=>(await ae(s,a)).data);const na=I("crmTasks/data/deleteTask",async s=>await Me(s)),de=I("crmTasks/data/putTasks",async({taskId:s,data:a})=>await ae(s,a)),la=I("crmTasks/data/createTasks",async s=>(await Le(s)).data),ca=I("crmTasks/data/module",async()=>{const s=await $e();return console.log(s.data,"response"),s.data}),da=I("tag-category",async({id:s})=>{const a=await te(s);return console.log(a.data,"Getting Data"),a.data});I("crmTasks/data/fetchTag",async({id:s})=>(await te(s)).data);I("crmTasks/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:i})=>(await Ae({colorName:a,tagName:e,masterId:s,tagCategoryId:i})).data);const ma={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},pa={status:""},ua={loading:!1,statisticLoading:!1,tasksList:[],statisticData:{},tableData:ma,filterData:pa,drawerOpen:!1,selectedTask:{},usersList:[],contactsList:[],drawerMode:"Add"},me=ke({name:`${ia}/state`,initialState:ua,reducers:{setTableData:(s,a)=>{s.tableData=a.payload},setTasksList:(s,a)=>{s.tasksList=a.payload},setUsersList:(s,a)=>{s.usersList=a.payload},setContactsList:(s,a)=>{s.usersList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedTask:(s,a)=>{s.selectedTask=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},setDrawerMode:(s,a)=>{s.drawerMode=a.payload}},extraReducers:s=>{s.addCase(A.fulfilled,(a,e)=>{a.tasksList=e.payload.data,a.tableData.total=e.payload.total,a.loading=!1}).addCase(se.fulfilled,(a,e)=>{a.usersList=e.payload.data,a.loading=!1}).addCase(oe.fulfilled,(a,e)=>{a.contactsList=e.payload.data,a.loading=!1}).addCase(A.pending,a=>{a.loading=!0}).addCase(J.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(J.pending,a=>{a.statisticLoading=!0})}}),{setTableData:B,setTasksList:ga,setFilterData:pe,setSelectedTask:Q,setDrawerOpen:ue,setDrawerClose:Y,setContactsList:ms,setDrawerMode:ge,setUsersList:ps}=me.actions,Ta=me.reducer,fa=ye({data:Ta}),g=we,Te=f.forwardRef((s,a)=>{const{onInputChange:e}=s,i=ze(n,500);function n(p){e==null||e(p)}const c=p=>{i(p.target.value)};return t.jsx(P,{ref:a,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:t.jsx(Fe,{className:"text-lg"}),onChange:c})});Te.displayName="TasksTableSearch";const{Control:ha}=Be,ee=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],xa=({innerProps:s,label:a,data:e,isSelected:i})=>t.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${i?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(re,{innerClass:e.color}),t.jsx("span",{children:a})]}),i&&t.jsx(Oe,{className:"text-emerald-500 text-xl"})]}),Da=({children:s,...a})=>{const e=a.getValue()[0];return t.jsxs(ha,{...a,children:[e&&t.jsx(re,{className:"ltr:ml-4 rtl:mr-4",innerClass:e.color}),s]})},ka=()=>{const s=M(),{status:a}=g(i=>i.crmTasks.data.filterData),e=i=>{s(pe({status:i==null?void 0:i.value}))};return t.jsx(He,{options:ee,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:xa,Control:Da},value:ee.filter(i=>i.value===a),onChange:e})},ya=(s,a)=>be(n=>{var c,p;return((p=(c=n.auth.user)==null?void 0:c.role)==null?void 0:p.rolePermissions)||[]}).some(n=>n.master.moduleName.toLowerCase()===s.toLowerCase()&&n[a]),wa=()=>{const s=M(),a=f.useRef(null),e=g(d=>d.crmTasks.data.tableData),i=ya("tasks","canCreate"),n=d=>{const m=O(e);m.query=d,m.pageIndex=1,typeof d=="string"&&d.length>1&&c(m),typeof d=="string"&&d.length===0&&c(m)},c=d=>{s(B(d)),s(A())},p=()=>{const d=O(e);d.query="",a.current&&(a.current.value=""),s(pe({status:""})),c(d)},u=()=>{s(ue()),s(ge("Add"))};return t.jsxs("div",{className:"md:flex items-center justify-between",children:[t.jsxs("div",{className:"md:flex items-center gap-4",children:[t.jsx(Te,{ref:a,onInputChange:n}),t.jsx(ka,{})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx(K,{size:"sm",className:"me-2",onClick:p,children:"Clear All"}),i&&t.jsx(K,{size:"sm",onClick:u,children:"Add New"})]})]})},ba=s=>{const{touched:a,errors:e,setFieldValue:i,values:n}=s,c=M(),[p,u]=f.useState(!1);f.useState("#808080");const[d,m]=f.useState(!1),[h,x]=f.useState([]),[L,w]=f.useState([]),j=()=>{u(!p),m(!1)},[C,r]=f.useState("");f.useEffect(()=>{const o=async()=>{var N,Z;try{const{payload:q}=await c(ca()),E=(N=q==null?void 0:q.data)==null?void 0:N.find(F=>(F==null?void 0:F.moduleName)==="tasks");if(r(E.id),E){const{payload:F}=await c(da({id:(Z=E==null?void 0:E.id)==null?void 0:Z.toString()})),xe=ea(F.data),De=aa(F.data);w(De),x(xe)}}catch(q){console.error("Error fetching module data:",q)}};c(se()),c(oe()),o()},[c]);const l=g(o=>o.crmTasks.data.selectedTask),T=g(o=>o.crmTasks.data.drawerMode),[k,b]=f.useState(l?l.tags||[]:[]),y=Ge(),S=o=>{b(o);const N=[o.value];y.setFieldValue("tagId",N)},D=[{label:"None",value:"none"},{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],z=[{label:"Pending",value:"pending"},{label:"Completed",value:"completed"},{label:"Rejected",value:"rejected"}],V=g(o=>o.crmTasks.data.usersList),W=V==null?void 0:V.map(o=>({label:`${o==null?void 0:o.firstName} ${o==null?void 0:o.lastName}`,value:o.id})),G=g(o=>o.crmTasks.data.contactsList),X=G==null?void 0:G.map(o=>({label:`${o==null?void 0:o.firstName} ${o==null?void 0:o.lastName}`,value:o.id}));return t.jsxs(t.Fragment,{children:[t.jsx($,{label:"Task Name",invalid:e.tasksName&&a.tasksName,errorMessage:e.tasksName,children:t.jsx(R,{type:"text",autoComplete:"off",name:"tasksName",placeholder:"Task Name",component:P,prefix:t.jsx(qe,{className:"text-xl"})})}),t.jsx($,{label:"Due Date",invalid:e.dueDate&&a.dueDate,errorMessage:e.dueDate,children:t.jsx(R,{type:"datetime-local",autoComplete:"off",name:"dueDate",component:P,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx($,{label:"Close Date",invalid:e.closeTime&&a.closeTime,errorMessage:e.closeTime,children:t.jsx(R,{type:"datetime-local",autoComplete:"off",name:"closeTime",component:P,prefix:t.jsx(U,{className:"text-xl"})})}),t.jsx($,{label:"Priority",invalid:e.priority&&a.priority,errorMessage:e.priority,children:t.jsx(H,{name:"priority",id:"priority",value:D.find(o=>(o==null?void 0:o.value)===(n==null?void 0:n.priority)),onChange:o=>{i("priority",o.value||"")},options:D})}),t.jsx($,{label:"Completation Status",invalid:e.completionStatus&&a.completionStatus,errorMessage:e.completionStatus,children:t.jsx(H,{name:"completionStatus",id:"completionStatus",value:z.find(o=>(o==null?void 0:o.value)===(n==null?void 0:n.completionStatus)),onChange:o=>{i("completionStatus",o.value||"")},options:z,isDisabled:T==="Add"})}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx($,{label:"Tags",children:t.jsxs("div",{style:{position:"relative"},children:[t.jsx(R,{name:"tagId",component:Ze,options:h,placeholder:"Select a Tag",onChange:S}),t.jsx(Xe,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{j(),m(!0)}})]})}),t.jsx(Ue,{moduleName:C,isOpen:p,categoryList:L,onOpenChange:o=>u(o)})]}),t.jsx($,{label:"Assigned To",invalid:e.assignedTo&&a.assignedTo,errorMessage:e.assignedTo,children:t.jsx(H,{name:"assignedTo",id:"assignedTo",value:W.find(o=>{var N;return(o==null?void 0:o.value)===((N=n==null?void 0:n.assignedTo)==null?void 0:N.id)}),onChange:o=>{i("assignedTo",o.value||"")},options:W})}),t.jsx($,{label:"Related To",invalid:e.relatedTo&&a.relatedTo,errorMessage:e.relatedTo,children:t.jsx(H,{name:"relatedTo",id:"relatedTo",value:X.find(o=>{var N;return(o==null?void 0:o.value)===((N=n==null?void 0:n.relatedTo)==null?void 0:N.id)}),onChange:o=>{i("relatedTo",o.value||"")},options:X})}),t.jsx($,{label:"Description",invalid:e.descriptions&&a.descriptions,errorMessage:e.descriptions,children:t.jsx(R,{type:"text",autoComplete:"off",name:"descriptions",placeholder:"Description",component:P,prefix:t.jsx(We,{className:"text-xl"})})})]})},ja=le().shape({tasksName:v().required("Task Name is required"),closeTime:v().required("Closing Date and Time is required").test("futureDate","Closing Date and Time must be in the future",function(s){return new Date(s)>=new Date}).test("greaterThanDueDate","Closing Date must be greater than Due Date",function(s){const a=this.parent.dueDate;return new Date(s)>new Date(a)}),tagId:ce(),descriptions:v().required("Description is requied"),priority:v().oneOf(["none","low","medium","high"]).required("Priority is required"),completionStatus:v().oneOf(["rejected","pending","completed"]).required("status is required")}),Ca=le().shape({tasksName:v().required("Task Name is required"),closeTime:v(),tagId:ce(),descriptions:v().required("Description is requied"),priority:v().oneOf(["none","low","medium","high"]).required("Priority is required"),completionStatus:v().oneOf(["rejected","pending","completed"]).required("status is required")}),{TabNav:Sa,TabList:Na,TabContent:va}=ne,fe=f.forwardRef((s,a)=>{var u;const e=g(d=>d.crmTasks.data.selectedTask),i=g(d=>d.crmTasks.data.drawerMode),n=M();function c(d){if(!d)return"";const m=d.split("T");if(m.length!==2)return"";const h=m[0],x=m[1].slice(0,5);return`${h}T${x}`}const p=d=>{const m=new Date(d);if(isNaN(m.getTime()))return"";const h=m.getFullYear(),x=(m.getMonth()+1).toString().padStart(2,"0"),L=m.getDate().toString().padStart(2,"0"),w=m.getHours().toString().padStart(2,"0"),j=m.getMinutes().toString().padStart(2,"0");return`${h}-${x}-${L} ${w}:${j}`};return t.jsx(_e,{innerRef:a,initialValues:{tasksName:(e==null?void 0:e.tasksName)||"",closeTime:c(e==null?void 0:e.closeTime)||"",dueDate:c(e==null?void 0:e.dueDate)||"",descriptions:(e==null?void 0:e.descriptions)||"",tagId:((u=e==null?void 0:e.tags)==null?void 0:u.map(d=>d.id))||[],priority:(e==null?void 0:e.priority)||"",completionStatus:(e==null?void 0:e.completionStatus)||"pending",assignedTo:(e==null?void 0:e.assignedToData)||"",relatedTo:(e==null?void 0:e.relatedToData)||"",colorName:e!=null&&e.tags&&(e==null?void 0:e.tags.length)>0?e==null?void 0:e.tags[0].colorName:""},validationSchema:i==="Edit"?ja:Ca,onSubmit:async(d,{setSubmitting:m})=>{const{colorName:h,closeTime:x,dueDate:L,...w}=d,j=p(L),C=p(x);if(console.log(w,"rest"),i==="Add")await n(la({closeTime:C,dueDate:j,...w})),console.log({closeTime:C,dueDate:j,...w},"add data"),await n(Y()),await n(A());else{const{colorName:r,assignedTo:l,relatedTo:T,closeTime:k,dueDate:b,...y}=d,{id:S}=l,{id:D}=T;console.log(l,"assignedTo");const z=await n(de({taskId:e==null?void 0:e.id,data:{assignedTo:S,relatedTo:D,...y,closeTime:C}}));console.log({taskId:e==null?void 0:e.id,data:{assignedTo:S,relatedTo:D,...y,closeTime:C}},"edit data"),console.log(z,"response"),await n(Y()),await n(A())}m(!1)},children:({touched:d,errors:m,setFieldValue:h,values:x})=>t.jsx(Je,{children:t.jsx(Qe,{children:t.jsxs(ne,{defaultValue:"taskDetails",children:[t.jsx(Na,{children:t.jsx(Sa,{value:"taskDetails",children:"Tasks"})}),t.jsx("div",{className:"p-6",children:t.jsx(va,{value:"taskDetails",children:t.jsx(ba,{touched:d,errors:m,values:x,setFieldValue:h})})})]})})})})});fe.displayName="TasksForm";const he=f.forwardRef((s,a)=>{const e=M(),i=g(u=>u.crmTasks.data.selectedTask),n=g(u=>u.crmTasks.data.tasksList),{id:c}=i,p=u=>{const{name:d,birthday:m,email:h,img:x,location:L,title:w,phoneNumber:j,facebook:C,twitter:r,pinterest:l,linkedIn:T}=u,k={name:d,email:h,img:x},b={location:L,title:w,birthday:je(m).format("DD/MM/YYYY"),phoneNumber:j,facebook:C,twitter:r,pinterest:l,linkedIn:T};let y=O(n),S={};y=y.map(D=>(D.id===c&&(D={...D,...k},D.personalInfo={...D.personalInfo,...b},S=D),D)),Ve(S)||e(de(S)),e(Y()),e(ga(y))};return t.jsx(fe,{ref:a,tasks:i,onFormSubmit:p})});he.displayName="TasksEditContent";const Ia=({onSaveClick:s,onCancel:a})=>t.jsxs("div",{className:"text-right w-full",children:[t.jsx(K,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),t.jsx(K,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ma=()=>{const s=M(),a=g(c=>c.crmTasks.data.drawerOpen);g(c=>c.crmTasks.data.drawerMode),g(c=>c.crmTasks.data.selectedTask);const e=()=>{s(Y()),s(Q({}))},i=f.useRef(null),n=async()=>{var c;(c=i.current)==null||c.submitForm()};return t.jsx(Ye,{isOpen:a,closable:!1,bodyClass:"p-0",footer:t.jsx(Ia,{onCancel:e,onSaveClick:n}),onClose:e,onRequestClose:e,children:t.jsx(he,{ref:i})})},La=({row:s})=>{const{textTheme:a}=ie(),e=M(),i=()=>{e(ue()),e(Q(s)),e(ge("Edit"))};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold`,onClick:i,children:"Edit"})},$a=({row:s})=>{console.log(s);const{textTheme:a}=ie(),e=M(),i=async()=>{e(Q(s)),await e(na(s.id)),await e(A())};return t.jsx("div",{className:`${a} cursor-pointer select-none font-semibold text-red-500`,onClick:i,children:"Delete"})},Aa=()=>{const s=M(),a=g(r=>r.crmTasks.data.tasksList),e=g(r=>r.crmTasks.data.loading),i=g(r=>r.crmTasks.data.filterData),{pageIndex:n,pageSize:c,sort:p,query:u,total:d}=g(r=>r.crmTasks.data.tableData),m=f.useCallback(()=>{s(A())},[n,c,p,u,i,s]);f.useEffect(()=>{m()},[m,n,c,p,i]);const h=f.useMemo(()=>({pageIndex:n,pageSize:c,sort:p,query:u,total:d}),[n,c,p,u,d]),x=r=>{if(r){const l=new Date(r),T=l.getDate().toString().padStart(2,"0"),k=(l.getMonth()+1).toString().padStart(2,"0"),b=l.getFullYear(),y=l.getHours().toString().padStart(2,"0"),S=l.getMinutes().toString().padStart(2,"0");return`${T}/${k}/${b} ${y}:${S}`}else return"-"},L=f.useMemo(()=>[{header:"Tasks Name",accessorKey:"tasksName",cell:r=>r.row.original.tasksName,width:200},{header:"Due Date",accessorKey:"dueDate",cell:r=>x(r.row.original.dueDate),width:200},{header:"Closing Date",accessorKey:"closeTime",cell:r=>{var l;return x((l=r.row.original)==null?void 0:l.closeTime)},width:200},{header:"assignedTo",accessorKey:"assignedTo",cell:r=>{const{firstName:l,lastName:T}=r.row.original.assignedToData||{};return l&&T?`${l} ${T}`:"-"},width:200},{header:"assignedBy",accessorKey:"assignedBy",cell:r=>{const{firstName:l,lastName:T}=r.row.original.assignedByData||{};return l&&T?`${l} ${T}`:"-"},width:200},{header:"relatedTo",accessorKey:"relatedTo",cell:r=>{const{name:l,firstName:T,lastName:k}=r.row.original.relatedToData||{};return l||(T&&k?`${T} ${k}`:"-")},width:200},{header:"Tag Name",accessorKey:"tagName",width:200,cell:r=>{const l=r.row.original.tags||[];if(l.length===0)return"-";const T=l.map(k=>{const b=k.colorName||"#000000",y={backgroundColor:`rgba(${parseInt(b.slice(1,3),16)}, ${parseInt(b.slice(3,5),16)}, ${parseInt(b.slice(5,7),16)}, 0.2)`,color:b,padding:"4px 8px",borderRadius:"4px",marginRight:"4px",marginBottom:"4px"};return t.jsx("div",{style:y,children:k.tagName},k.id)});return t.jsx("div",{children:T})}},{header:"priority",accessorKey:"priority",cell:r=>r.row.original.priority,width:200},{header:"completionStatus",accessorKey:"completionStatus",cell:r=>r.row.original.completionStatus,width:200},{header:"descriptions",accessorKey:"descriptions",cell:r=>r.row.original.descriptions,width:200},{header:"Edit",id:"action",cell:r=>t.jsx(La,{row:r.row.original})},{header:"Delete",id:"action",cell:r=>t.jsx($a,{row:r.row.original})}],[]),w=r=>{const l=O(h);l.pageIndex=r,s(B(l))},j=r=>{const l=O(h);l.pageSize=Number(r),l.pageIndex=1,s(B(l))},C=r=>{const l=O(h);l.sort=r,s(B(l))};return t.jsxs("div",{children:[t.jsx(Ke,{columns:L,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:h.total,pageIndex:h.pageIndex,pageSize:h.pageSize},onPaginationChange:w,onSelectChange:j,onSort:C}),t.jsx(Ma,{})]})},_=s=>{const{icon:a,avatarClass:e,label:i,value:n,growthRate:c,loading:p}=s,u=55;return t.jsx(ta,{bordered:!0,children:t.jsx(Ce,{loading:p,customLoader:t.jsx(oa,{avatarProps:{className:"rounded",width:u,height:u}}),children:t.jsx("div",{className:"flex justify-between items-center",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(sa,{className:e,size:u,icon:a}),t.jsxs("div",{children:[t.jsx("span",{children:i}),t.jsx("h3",{children:t.jsx(ra,{thousandSeparator:!0,displayType:"text",value:n})})]})]})})})})},Fa=()=>{const s=M(),a=g(i=>i.crmTasks.data.statisticData),e=g(i=>i.crmTasks.data.statisticLoading);return f.useEffect(()=>{s(J())},[]),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[t.jsx(_,{icon:t.jsx(Ee,{}),avatarClass:"!bg-indigo-600",label:"Total Tasks",value:a==null?void 0:a.totalTasks,loading:e}),t.jsx(_,{icon:t.jsx(Re,{}),avatarClass:"!bg-blue-500",label:"Active Tasks",value:a==null?void 0:a.completedTasks,loading:e}),t.jsx(_,{icon:t.jsx(Pe,{}),avatarClass:"!bg-emerald-500",label:"New Tasks",value:a==null?void 0:a.newTasks,loading:e})]})};Se("crmTasks",fa);const Oa=()=>t.jsxs(t.Fragment,{children:[t.jsx(Fa,{}),t.jsxs(Ne,{bodyClass:"h-full",children:[t.jsx(wa,{}),t.jsx(Aa,{})]})]}),us=Oa;export{us as default};
