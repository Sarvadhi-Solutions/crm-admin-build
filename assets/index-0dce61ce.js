import{am as O,an as $,ao as V,ap as A,a as N,j as e,p,ar as L,r as M}from"./index-7c10d2a3.js";import{C as P}from"./CalendarView-7dbc751f.js";import{C as B}from"./Views-5cb69e9a.js";import{I as z}from"./Input-81114df0.js";import{B as T}from"./Button-208b5861.js";import{S as W,c as U}from"./Select-013d671c.js";import{D as f}from"./index-dbc56270.js";import{D as G}from"./Dialog-ab50fc44.js";import{F as H,a as u}from"./FormItem-dcfd8ab9.js";import{B as w}from"./Badge-96f53043.js";import{h as _}from"./index-1d4cf12e.js";import{b as J}from"./CrmService-d5e8e120.js";import{F as K,a as Q,b as g}from"./formik.esm-9efe14ff.js";import{d as X}from"./index.esm-d9298b40.js";import{c as Y,a as C,e as D}from"./index.esm-a61d5a6d.js";import{c as j}from"./cloneDeep-b9fa1e05.js";import"./context-0e2e9d1c.js";import"./isNil-d3ca72b8.js";import"./get-5a481960.js";import"./toString-18e1007d.js";import"./_MapCache-e75dc2ce.js";import"./slicedToArray-afe06b21.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-2133173c.js";import"./floating-ui.dom-bef9cea3.js";import"./useControllableState-8172e3e5.js";import"./useMergeRef-788c4cb0.js";import"./Calendar-0d3223b7.js";import"./useRootClose-06442b2e.js";import"./usePopper-80f33697.js";import"./CloseButton-7345a4c9.js";import"./RangeCalendar-e91d83a1.js";import"./TimeInput-2304b736.js";import"./useUniqueId-ade48d2a.js";import"./useDidUpdate-048f50b6.js";import"./index-72e63a8f.js";import"./index-be56d80d.js";import"./useTimeout-6476564d.js";import"./useUncertainRef-4da6c90d.js";import"./_Uint8Array-be229bd0.js";import"./_getPrototype-2f204ca7.js";const F="crmCalendar",R=O(F+"/getEvents",async()=>(await J()).data),Z={loading:!1,eventList:[],dialogOpen:!1,selected:{type:""}},q=$({name:`${F}/state`,initialState:Z,reducers:{updateEvent:(t,o)=>{t.eventList=o.payload},openDialog:t=>{t.dialogOpen=!0},closeDialog:t=>{t.dialogOpen=!1},setSelected:(t,o)=>{t.selected=o.payload}},extraReducers:t=>{t.addCase(R.fulfilled,(o,m)=>{o.eventList=m.payload})}}),{updateEvent:y,openDialog:E,closeDialog:S,setSelected:k}=q.actions,ee=q.reducer,te=V({data:ee}),x=A,{Control:ae}=U,{useUniqueId:le}=_,h=[{value:"red",label:"red",color:"bg-red-500"},{value:"orange",label:"orange",color:"bg-orange-500"},{value:"amber",label:"amber",color:"bg-amber-500"},{value:"yellow",label:"yellow",color:"bg-yellow-500"},{value:"lime",label:"lime",color:"bg-lime-500"},{value:"green",label:"green",color:"bg-green-500"},{value:"emerald",label:"emerald",color:"bg-emerald-500"},{value:"teal",label:"teal",color:"bg-teal-500"},{value:"cyan",label:"cyan",color:"bg-cyan-500"},{value:"sky",label:"sky",color:"bg-sky-500"},{value:"blue",label:"blue",color:"bg-blue-500"},{value:"indigo",label:"indigo",color:"bg-indigo-500"},{value:"purple",label:"purple",color:"bg-purple-500"},{value:"fuchsia",label:"fuchsia",color:"bg-fuchsia-500"},{value:"pink",label:"pink",color:"bg-pink-500"},{value:"rose",label:"rose",color:"bg-rose-500"}],re=({innerProps:t,label:o,data:m,isSelected:s})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${s?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...t,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(w,{className:m.color}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:o})]}),s&&e.jsx(X,{className:"text-emerald-500 text-xl"})]}),oe=({children:t,...o})=>{const m=o.getValue()[0];return e.jsxs(ae,{className:"capitalize",...o,children:[m&&e.jsx(w,{className:`${m.color} ltr:ml-4 rtl:mr-4`}),t]})},se=Y().shape({title:C().required("Event title Required"),startDate:D().required("Start Date Required"),endDate:D(),color:C().required("Color Required")}),ne=({submit:t})=>{const o=N(),m=x(a=>a.crmCalendar.data.dialogOpen),s=x(a=>a.crmCalendar.data.selected),v=le("event-"),b=()=>{o(S())},n=(a,l)=>{l(!1);const r={id:s.id||v,title:a.title,start:p(a.startDate).format(),eventColor:a.color};a.endDate&&(r.end=p(a.endDate).format()),t==null||t(r,s.type),o(S())};return e.jsxs(G,{isOpen:m,onClose:b,onRequestClose:b,children:[e.jsx("h5",{className:"mb-4",children:s.type==="NEW"?"Add New Event":"Edit Event"}),e.jsx("div",{children:e.jsx(K,{enableReinitialize:!0,initialValues:{title:s.title||"",startDate:s.start?p(s.start).toDate():"",endDate:s.end?p(s.end).toDate():"",color:s.eventColor||h[0].value},validationSchema:se,onSubmit:(a,{setSubmitting:l})=>{n(a,l)},children:({values:a,touched:l,errors:r})=>e.jsx(Q,{children:e.jsxs(H,{children:[e.jsx(u,{label:"User Name",invalid:r.title&&l.title,errorMessage:r.title,children:e.jsx(g,{type:"text",autoComplete:"off",name:"title",placeholder:"Please enter title",component:z})}),e.jsx(u,{label:"Start Date",invalid:r.startDate&&l.startDate,errorMessage:r.startDate,children:e.jsx(g,{name:"startDate",placeholder:"Date",children:({field:i,form:c})=>e.jsx(f,{field:i,form:c,value:i.value,onChange:d=>{c.setFieldValue(i.name,d)}})})}),e.jsx(u,{label:"End Date",invalid:r.endDate&&l.endDate,errorMessage:r.endDate,children:e.jsx(g,{name:"endDate",placeholder:"Date",children:({field:i,form:c})=>e.jsx(f,{field:i,form:c,value:i.value,onChange:d=>{c.setFieldValue(i.name,d)}})})}),e.jsx(u,{label:"Prefered",asterisk:!0,invalid:r.color&&l.color,errorMessage:r.color,children:e.jsx(g,{name:"color",children:({field:i,form:c})=>e.jsx(W,{field:i,form:c,options:h,value:h.filter(d=>d.value===a.color),components:{Option:re,Control:oe},onChange:d=>c.setFieldValue(i.name,d==null?void 0:d.value)})})}),e.jsx(u,{className:"mb-0 text-right rtl:text-left",children:e.jsx(T,{variant:"solid",type:"submit",children:"Submit"})})]})})})})]})};L("crmCalendar",te);const ie=()=>{const t=N(),o=x(n=>n.crmCalendar.data.eventList);M.useEffect(()=>{t(R())},[]);const m=n=>{const{start:a,end:l}=n;t(k({type:"NEW",start:p(a).format(),end:p(l).format()})),t(E())},s=n=>{const{start:a,end:l,id:r,title:i,extendedProps:c}=n.event;t(k({type:"EDIT",eventColor:c.eventColor,title:i,start:a,end:l,id:r})),t(E())},v=(n,a)=>{let l=j(o);a==="NEW"&&l.push(n),a==="EDIT"&&(l=l.map(r=>(n.id===r.id&&(r=n),r))),t(y(l))},b=n=>{const a=j(o).map(l=>{if(n.event.id===l.id){const{id:r,extendedProps:i,start:c,end:d,title:I}=n.event;l={id:r,start:p(c).format(),end:p(d).format(),title:I,eventColor:i.eventColor}}return l});t(y(a))};return e.jsxs(B,{className:"h-full",children:[e.jsx(P,{editable:!0,selectable:!0,events:o,eventClick:s,select:m,eventDrop:b}),e.jsx(ne,{submit:v})]})},Ye=ie;export{Ye as default};
