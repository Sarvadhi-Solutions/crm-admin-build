import{am as t,an as l,ao as n,ap as c}from"./index-7a16719d.js";import{H as p,I as u,J as U,K as g,L as D}from"./CrmService-a924234d.js";const f="crmUsers",r=t("crmUsers/data/getUsersStatistic",async()=>(await p()).data),o=t("crmUsers/data/getUsers",async()=>(await u()).data),d=t("crmRoles/data/getRoles",async()=>(await U()).data),b=t("crmUser/data/putUser",async({id:a,data:e})=>(await g(a,e)).data),R=t("crmUser/data/deleteUser",async a=>(await D(a)).data),m={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},y={status:""},w={loading:!1,statisticLoading:!1,usersList:[],statisticData:{},tableData:m,filterData:y,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add"},i=l({name:`${f}/state`,initialState:w,reducers:{setTableData:(a,e)=>{a.tableData=e.payload},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload}},extraReducers:a=>{a.addCase(o.fulfilled,(e,s)=>{e.usersList=s.payload.data,e.tableData.total=s.payload.total,e.loading=!1}).addCase(d.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(o.pending,e=>{e.loading=!0}).addCase(d.pending,e=>{e.loading=!0}).addCase(r.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(r.pending,e=>{e.statisticLoading=!0})}}),{setTableData:M,setUsersList:O,setFilterData:A,setSelectedUser:T,setDrawerOpen:x,setDrawerClose:F,setDrawerMode:G,setRolesList:I}=i.actions,L=i.reducer,h=n({data:L}),k=c;export{r as a,M as b,F as c,O as d,T as e,x as f,o as g,G as h,R as i,b as p,h as r,A as s,k as u};
