import{al as i,am as D,an as j,ao as S,r as b,a as T,j as s}from"./index-3b75abce.js";import{F as v,a as L,b as c}from"./formik.esm-18b59c85.js";import"./Alert-6a4990df.js";import"./index-77bdb034.js";import"./Badge-066e767d.js";import{B as u}from"./Button-aa548732.js";import"./RangeCalendar-f8aa8a0c.js";import"./Card-afa367db.js";import"./index-c6e7df82.js";import"./index-4b3de645.js";import"./Dialog-908cc387.js";import"./Drawer-15ac5d62.js";import"./index-3c0f9d3a.js";import{a as d}from"./FormItem-e74ad77d.js";import"./toString-0e65f0bb.js";import{I}from"./Input-5296713b.js";import"./index-43a15a3c.js";import"./index-45f3422c.js";import"./index-3d5f382b.js";import"./toast-0c52027e.js";import"./Pagination-86b6bc82.js";import"./Progress-2318e05c.js";import"./index-f38d0e6d.js";import"./ScrollBar-3c5f8283.js";import"./index-8c67ce72.js";import{S as N}from"./Select-ae2a684c.js";import"./Skeleton-52e293f4.js";import"./index-0057d9cc.js";import"./Switcher-1ba3538d.js";import"./index-3a8e913d.js";import"./index-f6e9ee71.js";import"./Tag-06e42a81.js";import"./index-264eb58a.js";import"./index-556ea58d.js";import"./Tooltip-d837fb36.js";import"./Upload-372713be.js";import{T as F,d as k}from"./index.esm-918f76fb.js";import{I as A,J as E,r as z,q as R,K as G,m as M,n as f,o as O}from"./CrmService-8fcfc3ee.js";const q="crmCustomers",C=i("crmCustomers/data/getCustomerStatistic",async()=>(await A()).data),g=i("crmCustomers/data/getCustomers",async()=>(await E()).data),Fe=i("crmCustomers/data/editCustomer",async({customerId:t,updatedData:e})=>{var a,r;try{return(await z(t,e)).data}catch(o){throw new Error((r=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:r.message)}}),ke=i("crmCustomers/data/deleteCustomer",async t=>{var e,a;try{return await R(t)}catch(r){throw new Error((a=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:a.message)}}),Ae=i("crmCustomers/data/createCustomer",async t=>{var e,a;try{return(await G(t)).data}catch(r){throw new Error((a=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:a.message)}}),Ee=i("crmCustomers/data/module",async()=>{const t=await M();return console.log(t.data,"response"),t.data}),ze=i("tag-category",async({id:t})=>{const e=await f(t);return console.log(e.data,"Getting Data"),e.data});i("crmCustomers/data/fetchTag",async({id:t})=>(await f(t)).data);const B=i("crmCustomers/data/createTag",async({masterId:t,colorName:e,tagName:a,tagCategoryId:r})=>(await O({colorName:e,tagName:a,masterId:t,tagCategoryId:r})).data),P={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},V={status:""},$={loading:!1,statisticLoading:!1,customerList:[],displayedCustomersList:[],statisticData:{},tableData:P,filterData:V,drawerOpen:!1,selectedCustomer:{},deleteConfirmation:!1},y=D({name:`${q}/state`,initialState:$,reducers:{setTableData:(t,e)=>{t.tableData=e.payload,t.displayedCustomersList=t.customerList.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setCustomerList:(t,e)=>{t.customerList=e.payload},setFilterData:(t,e)=>{t.filterData=e.payload},setSelectedCustomer:(t,e)=>{t.selectedCustomer=e.payload},setDrawerOpen:t=>{t.drawerOpen=!0},setDrawerClose:t=>{t.drawerOpen=!1},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload}},extraReducers:t=>{t.addCase(g.fulfilled,(e,a)=>{e.customerList=a.payload.data,e.tableData.total=a.payload.data.length,e.displayedCustomersList=a.payload.data.slice(0,10),e.loading=!1}).addCase(g.pending,e=>{e.loading=!0}).addCase(C.fulfilled,(e,a)=>{e.statisticData=a.payload,e.statisticLoading=!1}).addCase(C.pending,e=>{e.statisticLoading=!0})}}),{setTableData:Re,setCustomerList:Ge,setFilterData:Me,setSelectedCustomer:Oe,setDrawerOpen:qe,setDrawerClose:Be,toggleDeleteConfirmation:Pe}=y.actions,H=y.reducer,Ve=j({data:H}),$e=S,J=({onCancel:t,onSave:e})=>s.jsxs("div",{className:"text-right w-full",children:[s.jsx(u,{size:"sm",className:"mr-2",onClick:t,children:"Cancel"}),s.jsx(u,{size:"sm",variant:"solid",type:"button",onClick:e,children:"Save"})]}),He=({isOpen:t,onOpenChange:e,categoryList:a,moduleName:r})=>{const o=b.useRef(null),x=T(),h=async()=>{var n,l,m,p;if(r){const w=r.toString();await x(B({masterId:w,tagName:(n=o.current)==null?void 0:n.values.tag,colorName:(l=o.current)==null?void 0:l.values.tagColor,tagCategoryId:(m=o.current)==null?void 0:m.values.category.value})),e(!1),console.log((p=o.current)==null?void 0:p.values)}};return s.jsx("div",{className:`${t?"flex":"hidden"} justify-center items-center top-16 left-0 z-10 bg-white p-4 border border-gray-300 w-full absolute rounded-8`,children:t&&s.jsx(v,{innerRef:o,initialValues:{category:"",tag:"",tagColor:"#808080"},onSubmit:n=>{console.log("values",n," ==== > Here The Value Is Prinitng")},children:({values:n,setFieldValue:l})=>s.jsxs(L,{children:[s.jsx(s.Fragment,{children:s.jsx(d,{label:"Category",children:s.jsx(c,{type:"text",autoComplete:"off",name:"category",placeholder:"Category",options:a,component:N,prefix:s.jsx(F,{className:"text-xl"}),onChange:m=>{l("category",m)}})})}),s.jsxs("div",{className:"flex items-center justify-center",children:[s.jsx(d,{label:"Tag Name",children:s.jsx(c,{type:"text",autoComplete:"off",name:"tag",placeholder:"Additional Tag Name",component:I,prefix:s.jsx(k,{className:"text-xl"})})}),s.jsx(d,{children:s.jsx(c,{type:"color",name:"tagColor",className:"w-8 ml-2 p-2 rounded-full h-8 mt-6"})})]}),s.jsx(J,{onCancel:()=>e(!1),onSave:h})]})})})};export{He as A,Oe as a,C as b,Re as c,ke as d,qe as e,Me as f,g,Ee as h,ze as i,Fe as j,Ae as k,Ve as r,Be as s,Pe as t,$e as u};
