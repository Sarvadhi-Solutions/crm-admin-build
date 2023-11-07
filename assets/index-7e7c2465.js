import{am as r,an as c,ao as p,ap as y}from"./index-82a4cdcd.js";import{S as u,T as w,U as g,V as m,W as U,X as C,Y as f}from"./CrmService-a7ee7c84.js";const L="crmUsers",d=r("crmUsers/data/getUsersStatistic",async()=>{var a,e;try{return(await u()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),n=r("crmUsers/data/getUsers",async()=>{var a,e;try{return(await w()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),A=r("crmUsers/data/createAdminUser",async a=>{var e,s;try{return(await g(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),x=r("crmUsers/data/createUsers",async a=>{var e,s;try{return(await m(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),l=r("crmRoles/data/getRoles",async()=>{var a,e;try{return(await U()).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),M=r("crmUser/data/putUser",async({id:a,data:e})=>{var s,t;try{return(await C(a,e)).data}catch(o){throw new Error((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)}}),O=r("crmUser/data/deleteUser",async a=>{var e,s;try{return(await f(a)).data}catch(t){throw new Error((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)}}),D={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},h={status:""},S={loading:!1,statisticLoading:!1,usersList:[],displayedUsersList:[],statisticData:{},tableData:D,filterData:h,drawerOpen:!1,selectedUser:{},rolesList:[],drawerMode:"Add",deleteConfirmation:!1},i=c({name:`${L}/state`,initialState:S,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const s=a.usersList.filter(t=>t.firstName.toLowerCase().includes(e.payload.query.toLowerCase())||t.lastName.toLowerCase().includes(e.payload.query.toLowerCase())||t.email.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=s.length,a.displayedUsersList=s==null?void 0:s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setUsersList:(a,e)=>{a.usersList=e.payload},setFilterData:(a,e)=>{a.filterData=e.payload},setSelectedUser:(a,e)=>{a.selectedUser=e.payload},setDrawerOpen:a=>{a.drawerOpen=!0},setRolesList:(a,e)=>{a.rolesList=e.payload},setDrawerClose:a=>{a.drawerOpen=!1},setDrawerMode:(a,e)=>{a.drawerMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(n.fulfilled,(e,s)=>{var t;e.usersList=s.payload.data,e.tableData.total=(t=s.payload.data)==null?void 0:t.length,e.displayedUsersList=s.payload.data.slice(0,10),e.loading=!1}).addCase(l.fulfilled,(e,s)=>{e.rolesList=s.payload.data,e.loading=!1}).addCase(n.pending,e=>{e.loading=!0}).addCase(l.pending,e=>{e.loading=!0}).addCase(d.fulfilled,(e,s)=>{e.statisticData=s.payload,e.statisticLoading=!1}).addCase(d.pending,e=>{e.statisticLoading=!0})}}),{setTableData:T,setUsersList:q,setFilterData:z,setSelectedUser:F,setDrawerOpen:G,setDrawerClose:I,toggleDeleteConfirmation:N,setDrawerMode:k,setRolesList:P}=i.actions,b=i.reducer,V=p({data:b}),W=y;export{x as a,q as b,A as c,O as d,F as e,T as f,n as g,G as h,k as i,M as p,V as r,I as s,N as t,W as u};
