import{am as r,an as c,ao as p,ap as g}from"./index-b09faefa.js";import{E as u,F as y,A as m,G as w,H as U}from"./CrmService-5f2f53bd.js";const f="crmUsers",o=r("crmUsers/data/getUsersStatistic",async()=>{var a,e;try{return(await u()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),l=r("crmUsers/data/getUsers",async()=>{var a,e;try{return(await y()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),i=r("crmRoles/data/getRoles",async()=>{var a,e;try{return(await m()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),E=r("crmUser/data/putUser",async({id:a,data:e})=>{var s,t;try{return(await w(a,e)).data}catch(d){throw new Error((t=(s=d==null?void 0:d.response)==null?void 0:s.data)==null?void 0:t.message)}}),R=r("crmUser/data/deleteUser",async a=>{var e,s;try{return(await U(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),D={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},C={status:""},L={loading:!1,statisticLoading:!1,usersList:[],displayedUsersList:[],statisticData:{},tableData:D,filterData:C,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add",deleteConfirmation:!1},n=c({name:`${f}/state`,initialState:L,reducers:{setTableData:(a,e)=>{var s;a.tableData=e.payload,a.displayedUsersList=(s=a.usersList)==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(l.fulfilled,(e,s)=>{var t;e.usersList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedUsersList=s.payload.data.slice(0,10),e.loading=!1}).addCase(i.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(l.pending,e=>{e.loading=!0}).addCase(i.pending,e=>{e.loading=!0}).addCase(o.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(o.pending,e=>{e.statisticLoading=!0})}}),{setTableData:x,setUsersList:A,setFilterData:M,setSelectedUser:O,setDrawerOpen:F,setDrawerClose:G,toggleDeleteConfirmation:I,setDrawerMode:T,setRolesList:z}=n.actions,S=n.reducer,k=p({data:S}),q=g;export{o as a,A as b,O as c,R as d,x as e,F as f,l as g,T as h,M as i,E as p,k as r,G as s,I as t,q as u};
