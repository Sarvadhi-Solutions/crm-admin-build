import{a6 as i,V as c,a7 as p,a8 as R,a9 as u,t as y}from"./CrmService-d077c852.js";import{al as o,am as g,an as m,ao as w}from"./index-0ab2c514.js";const D="crmRoles",r=o("crmRoles/data/getRolesStatistic",async()=>(await i()).data),d=o("crmRoles/data/getRoles",async()=>(await c()).data),M=o("crmRoles/data/putRoles",async({id:a,data:e})=>{var s,t;try{return(await p(a,e)).data}catch(l){throw new Error((t=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:t.message)}}),x=o("crmRoles/data/deleteRoles",async a=>{var e,s;try{return(await R(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),E=o("crmRoles/data/createRoles",async a=>{var e,s;try{return(await u(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),O=o("crmRoles/data/module",async()=>(await y()).data),f={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},C={status:""},L={loading:!1,statisticLoading:!1,deleteConfirmation:!1,rolesList:[],displayedRolesList:[],statisticData:{},tableData:f,filterData:C,drawerOpen:!1,selectedRole:{},drawerMode:"Add"},n=g({name:`${D}/state`,initialState:L,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const s=a.rolesList.filter(t=>t.roleName.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=s.length,a.displayedRolesList=s==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setRolesList:(a,e)=>{a.rolesList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedRole:(a,e)=>{a.selectedRole=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(d.fulfilled,(e,s)=>{var t;e.rolesList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedRolesList=s.payload.data.slice(0,10),e.loading=!1}).addCase(d.pending,e=>{e.loading=!0}).addCase(r.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(r.pending,e=>{e.statisticLoading=!0})}}),{setTableData:A,setRolesList:T,setFilterData:z,setSelectedRole:F,toggleDeleteConfirmation:G,setDrawerOpen:I,setDrawerClose:k,setDrawerMode:q}=n.actions,S=n.reducer,N=m({data:S}),P=w;export{T as a,F as b,E as c,x as d,A as e,O as f,d as g,I as h,q as i,M as p,N as r,k as s,G as t,P as u};
