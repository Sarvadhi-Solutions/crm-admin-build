import{al as r,am as c,an as p,ao as g}from"./index-dc23d4d5.js";import{U as u,V as y,Q as m,W as U,X as w}from"./CrmService-252ce793.js";const f="crmUsers",o=r("crmUsers/data/getUsersStatistic",async()=>{var a,e;try{return(await u()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),l=r("crmUsers/data/getUsers",async()=>{var a,e;try{return(await y()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),i=r("crmRoles/data/getRoles",async()=>{var a,e;try{return(await m()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),R=r("crmUser/data/putUser",async({id:a,data:e})=>{var s,t;try{return(await U(a,e)).data}catch(d){throw new Error((t=(s=d==null?void 0:d.response)==null?void 0:s.data)==null?void 0:t.message)}}),E=r("crmUser/data/deleteUser",async a=>{var e,s;try{return(await w(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),D={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},C={status:""},L={loading:!1,statisticLoading:!1,usersList:[],displayedUsersList:[],statisticData:{},tableData:D,filterData:C,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add",deleteConfirmation:!1},n=c({name:`${f}/state`,initialState:L,reducers:{setTableData:(a,e)=>{var s;a.tableData=e.payload,a.displayedUsersList=(s=a.usersList)==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(l.fulfilled,(e,s)=>{var t;e.usersList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedUsersList=s.payload.data.slice(0,10),e.loading=!1}).addCase(i.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(l.pending,e=>{e.loading=!0}).addCase(i.pending,e=>{e.loading=!0}).addCase(o.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(o.pending,e=>{e.statisticLoading=!0})}}),{setTableData:x,setUsersList:M,setFilterData:O,setSelectedUser:A,setDrawerOpen:I,setDrawerClose:T,toggleDeleteConfirmation:z,setDrawerMode:F,setRolesList:G}=n.actions,S=n.reducer,k=p({data:S}),q=g;export{o as a,M as b,A as c,E as d,x as e,I as f,l as g,F as h,O as i,R as p,k as r,T as s,z as t,q as u};
