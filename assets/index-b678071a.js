import{al as r,am as c,an as p,ao as u}from"./index-3e8ea6f8.js";import{S as y,T as g,U as w,V as m,W as U}from"./CrmService-cfe882b2.js";const f="crmUsers",d=r("crmUsers/data/getUsersStatistic",async()=>{var a,e;try{return(await y()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),l=r("crmUsers/data/getUsers",async()=>{var a,e;try{return(await g()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),n=r("crmRoles/data/getRoles",async()=>{var a,e;try{return(await w()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),R=r("crmUser/data/putUser",async({id:a,data:e})=>{var s,t;try{return(await m(a,e)).data}catch(o){throw new Error((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)}}),E=r("crmUser/data/deleteUser",async a=>{var e,s;try{return(await U(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),C={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},L={status:""},D={loading:!1,statisticLoading:!1,usersList:[],displayedUsersList:[],statisticData:{},tableData:C,filterData:L,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add",deleteConfirmation:!1},i=c({name:`${f}/state`,initialState:D,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const s=a.usersList.filter(t=>t.firstName.toLowerCase().includes(e.payload.query.toLowerCase())||t.lastName.toLowerCase().includes(e.payload.query.toLowerCase())||t.email.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=s.length,a.displayedUsersList=s==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(l.fulfilled,(e,s)=>{var t;e.usersList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedUsersList=s.payload.data.slice(0,10),e.loading=!1}).addCase(n.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(l.pending,e=>{e.loading=!0}).addCase(n.pending,e=>{e.loading=!0}).addCase(d.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(d.pending,e=>{e.statisticLoading=!0})}}),{setTableData:x,setUsersList:M,setFilterData:O,setSelectedUser:T,setDrawerOpen:q,setDrawerClose:A,toggleDeleteConfirmation:z,setDrawerMode:F,setRolesList:G}=i.actions,S=i.reducer,I=p({data:S}),N=u;export{d as a,M as b,T as c,E as d,x as e,q as f,l as g,F as h,R as p,I as r,A as s,z as t,N as u};
