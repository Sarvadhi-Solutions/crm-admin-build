import{am as S,an as F,ao as I,ap as O,a as b,r as u,j as e,h as V,c as z,y as H,ar as $}from"./index-7a16719d.js";import{B as h}from"./Button-796af526.js";import{I as f}from"./Input-67ca38c6.js";import{T as P}from"./Tooltip-d9375ea6.js";import{z as B,O as R,P as G,Q as Z,R as Q,S as U,D as _,B as J}from"./index.esm-a0bff864.js";import{b as K,c as W,d as X}from"./ProjectService-b8ef74ac.js";import{d as Y}from"./debounce-581daf1a.js";import{C as ee}from"./Card-1701bbfb.js";import{I as se,P as te,M as ae,L as re}from"./ListItem-64d83e56.js";import{D as oe}from"./Dialog-6329901c.js";import{F as ie,a as ne,b as ce,c as C,d as y}from"./formik.esm-e41f31d6.js";import{S as le,c as de}from"./Select-9b097dd7.js";import{A as M}from"./index-a6767bf5.js";import{h as me}from"./index-2857d45c.js";import{C as pe}from"./index-b0ca69aa.js";import{c as ue}from"./cloneDeep-b8051bc5.js";import{c as je,a as A,b as xe,d as he}from"./index.esm-d14b6227.js";import{C as ge}from"./Views-6f74b325.js";import"./context-0b7be94f.js";import"./isNil-e31eb1ef.js";import"./get-d062fc7e.js";import"./toString-8f2f6138.js";import"./_MapCache-4c25b116.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index-c8ec40dc.js";import"./useUncertainRef-cc932849.js";import"./useUniqueId-8e6b0c76.js";import"./chainedFunction-070f832c.js";import"./index-8ce6c613.js";import"./useRootClose-846e7f72.js";import"./EllipsisButton-587aa107.js";import"./index.esm-4e1ebe60.js";import"./UsersAvatarGroup-f04ec758.js";import"./acronym-053c2778.js";import"./Progress-eccc530b.js";import"./index-d79d31fc.js";import"./CloseButton-a0a179ae.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-a386f254.js";import"./useDidUpdate-c40d1f95.js";import"./useTimeout-322537e2.js";import"./_Uint8Array-cc34f89d.js";import"./_baseIsEqual-2f7f19c2.js";import"./_getPrototype-af9a5f7c.js";const w="projectList",L=S(w+"/getList",async t=>(await K(t)).data),D=S(w+"/getMembers",async()=>(await W()).data.allMembers.map(a=>({value:a.id,label:a.name,img:a.img}))),E=S(w+"/putProject",async t=>(await X(t)).data),fe={loading:!1,projectList:[],allMembers:[],view:"grid",query:{sort:"asc",search:""},newProjectDialog:!1},q=F({name:`${w}/state`,initialState:fe,reducers:{toggleView:(t,s)=>{t.view=s.payload},toggleSort:(t,s)=>{t.query.sort=s.payload},setSearch:(t,s)=>{t.query.search=s.payload},toggleNewProjectDialog:(t,s)=>{t.newProjectDialog=s.payload}},extraReducers:t=>{t.addCase(L.fulfilled,(s,a)=>{s.projectList=a.payload,s.loading=!1}).addCase(L.pending,s=>{s.loading=!0}).addCase(D.fulfilled,(s,a)=>{s.allMembers=a.payload}).addCase(E.fulfilled,(s,a)=>{s.projectList=a.payload})}}),{toggleView:be,toggleSort:we,toggleNewProjectDialog:T,setSearch:Ne}=q.actions,ke=q.reducer,ve=I({data:ke}),j=O,Ce=()=>{const t=b(),s=u.useRef(null),a=j(r=>r.projectList.data.view),{sort:o}=j(r=>r.projectList.data.query),p=()=>{t(be(a==="grid"?"list":"grid"))},n=()=>{t(we(o==="asc"?"desc":"asc"))},i=()=>{t(T(!0))},c=Y(l,500);function l(r){t(Ne(r))}const x=r=>{c(r.target.value)};return e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Project List"}),e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-1",children:[e.jsx(f,{ref:s,size:"sm",placeholder:"Search",prefix:e.jsx(B,{className:"text-lg"}),onChange:x}),e.jsx(P,{title:a==="grid"?"List view":"Grid view",children:e.jsx(h,{className:"hidden md:flex",variant:"plain",size:"sm",icon:a==="grid"?e.jsx(R,{}):e.jsx(G,{}),onClick:()=>p()})}),e.jsx(P,{title:`Sort: ${o==="asc"?"A-Z":"Z-A"}`,children:e.jsx(h,{className:"hidden md:flex",variant:"plain",size:"sm",icon:o==="asc"?e.jsx(Z,{}):e.jsx(Q,{}),onClick:n})}),e.jsx(h,{size:"sm",variant:"twoTone",icon:e.jsx(U,{}),onClick:i,children:"New Project"})]})]})},ye=({data:t})=>{const{name:s,totalTask:a,completedTask:o,progression:p,desc:n,member:i}=t;return e.jsx(ee,{bodyClass:"h-full",children:e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(V,{to:"/app/scrum-board",children:e.jsx("h6",{children:s})}),e.jsx(se,{})]}),e.jsx("p",{className:"mt-4",children:n}),e.jsxs("div",{className:"mt-3",children:[e.jsx(te,{progression:p}),e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[e.jsx(ae,{members:i}),e.jsx("div",{className:"flex items-center rounded-full font-semibold text-xs",children:e.jsxs("div",{className:"flex items-center px-2 py-1 border border-gray-300 rounded-full",children:[e.jsx(_,{className:"text-base"}),e.jsxs("span",{className:"ml-1 rtl:mr-1 whitespace-nowrap",children:[o," / ",a]})]})})]})]})]})})},Le=()=>{const t=b(),s=j(i=>i.projectList.data.loading),a=j(i=>i.projectList.data.projectList),o=j(i=>i.projectList.data.view),{sort:p,search:n}=j(i=>i.projectList.data.query);return u.useEffect(()=>{t(L({sort:p,search:n}))},[t,p,n]),e.jsxs("div",{className:z("mt-6 h-full flex flex-col",s&&"justify-center"),children:[s&&e.jsx("div",{className:"flex justify-center",children:e.jsx(H,{size:40})}),o==="grid"&&a.length>0&&!s&&e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:a.map(i=>e.jsx(ye,{data:i},i.id))}),o==="list"&&a.length>0&&!s&&a.map(i=>e.jsx(re,{data:i},i.id))]})},Se=({onAddNewTask:t})=>{const[s,a]=u.useState(!1),[o,p]=u.useState([]),n=u.useRef(null);u.useEffect(()=>{var r;s&&((r=n==null?void 0:n.current)==null||r.focus())},[s]);const i=u.useMemo(()=>{let r=0;const d=o.length;return o.forEach(m=>{m.checked&&(r=r+1)}),{completedTask:r,totalTask:d}},[o]);u.useEffect(()=>{t(i)},[o]);const c=()=>{a(!0)},l=()=>{var d;const r={label:(d=n==null?void 0:n.current)==null?void 0:d.value,checked:!1};p(m=>[...m,r]),a(!1)},x=(r,d)=>{p(m=>[...m.map((g,k)=>(d===k&&(g.checked=r),g))])};return e.jsxs("div",{className:"mb-7",children:[o.length>0&&e.jsx("div",{className:"flex flex-col mb-5",children:o.map((r,d)=>e.jsx(pe,{defaultChecked:r.checked,onChange:m=>x(m,d),children:r.label},d))}),s?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{ref:n,placeholder:"Add new task"}),e.jsx(h,{type:"button",onClick:l,children:"Add"})]}):e.jsx(h,{block:!0,className:"border-dashed",onClick:c,children:"Create new task"})]})},{MultiValueLabel:Te}=de,{useUniqueId:Pe}=me,Ae=({innerProps:t,label:s,data:a,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...t,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(M,{shape:"circle",size:20,src:a.img}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:s})]}),o&&e.jsx(J,{className:"text-emerald-500 text-xl"})]}),Me=({children:t,...s})=>{const{img:a}=s.data;return e.jsx(Te,{...s,children:e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx(M,{className:"mr-2 rtl:ml-2",shape:"circle",size:15,src:a}),t]})})},De=je().shape({title:A().min(3,"Too Short!").required("Title required"),content:A().required("Title required"),assignees:xe().min(1,"Assignee required"),rememberMe:he()}),Ee=()=>{const t=b(),s=j(c=>c.projectList.data.allMembers),a=Pe("project-"),[o,p]=u.useState({});u.useEffect(()=>{t(D())},[t]);const n=c=>{p(c)},i=(c,l)=>{l(!0);const{title:x,content:r,assignees:d}=c,{totalTask:m,completedTask:N}=o,g=ue(d).map(v=>(v.name=v.label,v)),k={id:a,name:x,desc:r,totalTask:m,completedTask:N,progression:N/m*100||0,member:g};t(E(k)),t(T(!1))};return e.jsx(ie,{initialValues:{title:"",content:"",assignees:[]},validationSchema:De,onSubmit:(c,{setSubmitting:l})=>{i(c,l)},children:({touched:c,errors:l,values:x})=>e.jsx(ne,{children:e.jsxs(ce,{children:[e.jsx(C,{label:"Title",invalid:l.title&&c.title,errorMessage:l.title,children:e.jsx(y,{type:"text",autoComplete:"off",name:"title",placeholder:"Enter title",component:f})}),e.jsx(C,{label:"Assignees",invalid:l.assignees&&c.assignees,errorMessage:l.assignees,children:e.jsx(y,{name:"assignees",children:({field:r,form:d})=>e.jsx(le,{isMulti:!0,className:"min-w-[120px]",components:{Option:Ae,MultiValueLabel:Me},field:r,form:d,options:s,value:x.assignees,onChange:m=>{d.setFieldValue(r.name,m)}})})}),e.jsx(C,{label:"Content",invalid:l.content&&c.content,errorMessage:l.content,children:e.jsx(y,{textArea:!0,type:"text",autoComplete:"off",name:"content",placeholder:"Enter content",component:f})}),e.jsx(Se,{onAddNewTask:n}),e.jsx(h,{block:!0,variant:"solid",type:"submit",children:"Submit"})]})})})},qe=()=>{const t=b(),s=j(o=>o.projectList.data.newProjectDialog),a=()=>{t(T(!1))};return e.jsxs(oe,{isOpen:s,onClose:a,onRequestClose:a,children:[e.jsx("h4",{children:"Add new project"}),e.jsx("div",{className:"mt-4",children:e.jsx(Ee,{})})]})};$("projectList",ve);const Fe=()=>e.jsxs(ge,{className:"h-full",children:[e.jsx(Ce,{}),e.jsx(Le,{}),e.jsx(qe,{})]}),Ms=Fe;export{Ms as default};
