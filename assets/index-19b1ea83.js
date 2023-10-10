import{P as i,Q as c,R as p,S as R,T as u,o as y}from"./CrmService-d79e797c.js";import{al as o,am as m,an as g,ao as w}from"./index-f4ad2487.js";const D="crmRoles",l=o("crmRoles/data/getRolesStatistic",async()=>(await i()).data),d=o("crmRoles/data/getRoles",async()=>(await c()).data),M=o("crmRoles/data/putRoles",async({id:a,data:e})=>{var s,t;try{return(await p(a,e)).data}catch(r){throw new Error((t=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:t.message)}}),x=o("crmRoles/data/deleteRoles",async a=>{var e,s;try{return(await R(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),E=o("crmRoles/data/createRoles",async a=>{var e,s;try{return(await u(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),O=o("crmRoles/data/module",async()=>(await y()).data),f={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},C={status:""},S={loading:!1,statisticLoading:!1,deleteConfirmation:!1,rolesList:[],displayedRolesList:[],statisticData:{},tableData:f,filterData:C,drawerOpen:!1,selectedRole:{},drawerMode:"Add"},n=m({name:`${D}/state`,initialState:S,reducers:{setTableData:(a,e)=>{var s;a.tableData=e.payload,a.displayedRolesList=(s=a.rolesList)==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setRolesList:(a,e)=>{a.rolesList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedRole:(a,e)=>{a.selectedRole=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(d.fulfilled,(e,s)=>{var t;e.rolesList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedRolesList=s.payload.data.slice(0,10),e.loading=!1}).addCase(d.pending,e=>{e.loading=!0}).addCase(l.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(l.pending,e=>{e.statisticLoading=!0})}}),{setTableData:T,setRolesList:A,setFilterData:I,setSelectedRole:z,toggleDeleteConfirmation:F,setDrawerOpen:G,setDrawerClose:k,setDrawerMode:P}=n.actions,L=n.reducer,j=g({data:L}),q=w;export{A as a,z as b,E as c,x as d,T as e,O as f,d as g,G as h,P as i,I as j,M as p,j as r,k as s,F as t,q as u};
