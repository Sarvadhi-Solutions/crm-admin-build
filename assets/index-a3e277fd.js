import{am as r,an as c,ao as p,ap as y}from"./index-fbc41bca.js";import{S as u,T as g,U as w,V as U,W as m,X as C}from"./CrmService-e168621d.js";const f="crmUsers",d=r("crmUsers/data/getUsersStatistic",async()=>{var a,e;try{return(await u()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),l=r("crmUsers/data/getUsers",async()=>{var a,e;try{return(await g()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),R=r("crmUsers/data/createUsers",async a=>{var e,s;try{return(await w(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),n=r("crmRoles/data/getRoles",async()=>{var a,e;try{return(await U()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),x=r("crmUser/data/putUser",async({id:a,data:e})=>{var s,t;try{return(await m(a,e)).data}catch(o){throw new Error((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)}}),M=r("crmUser/data/deleteUser",async a=>{var e,s;try{return(await C(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),L={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},D={status:""},h={loading:!1,statisticLoading:!1,usersList:[],displayedUsersList:[],statisticData:{},tableData:L,filterData:D,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add",deleteConfirmation:!1},i=c({name:`${f}/state`,initialState:h,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const s=a.usersList.filter(t=>t.firstName.toLowerCase().includes(e.payload.query.toLowerCase())||t.lastName.toLowerCase().includes(e.payload.query.toLowerCase())||t.email.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=s.length,a.displayedUsersList=s==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(l.fulfilled,(e,s)=>{var t;e.usersList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedUsersList=s.payload.data.slice(0,10),e.loading=!1}).addCase(n.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(l.pending,e=>{e.loading=!0}).addCase(n.pending,e=>{e.loading=!0}).addCase(d.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(d.pending,e=>{e.statisticLoading=!0})}}),{setTableData:O,setUsersList:T,setFilterData:q,setSelectedUser:A,setDrawerOpen:z,setDrawerClose:F,toggleDeleteConfirmation:G,setDrawerMode:I,setRolesList:N}=i.actions,S=i.reducer,k=p({data:S}),P=y;export{T as a,A as b,R as c,M as d,O as e,z as f,l as g,I as h,x as p,k as r,F as s,G as t,P as u};
