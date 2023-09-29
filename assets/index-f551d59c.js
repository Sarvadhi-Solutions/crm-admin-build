import{am as r,an as p,ao as k,ap as g}from"./index-a75c2214.js";import{o as T,p as u,q as i,r as y,s as m,i as f,j as l,k as w}from"./CrmService-4f2387c5.js";import{g as C}from"./index-f4901db1.js";import{g as D}from"./index-6b251452.js";const L="crmTasks",d=r("crmTasks/data/getTasksStatistic",async()=>(await T()).data),n=r("crmTasks/data/getTasks",async()=>(await u()).data);r("crmTasks/data/editTask",async({taskId:s,updatedData:a})=>(await i(s,a)).data);const A=r("crmTasks/data/deleteTask",async s=>{var a,e;try{return(await y(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),I=r("crmTasks/data/putTasks",async({taskId:s,data:a})=>{var e,t;try{return(await i(s,a)).data}catch(o){throw new Error((t=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:t.message)}}),z=r("crmTasks/data/createTasks",async s=>{var a,e;try{return(await m(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),F=r("crmTasks/data/module",async()=>{const s=await f();return console.log(s.data,"response"),s.data}),U=r("tag-category",async({id:s})=>{const a=await l(s);return console.log(a.data,"Getting Data"),a.data});r("crmTasks/data/fetchTag",async({id:s})=>(await l(s)).data);r("crmTasks/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await w({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const S={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},h={status:""},b={loading:!1,statisticLoading:!1,tasksList:[],displayedTasksList:[],statisticData:{},tableData:S,filterData:h,drawerOpen:!1,selectedTask:{},usersList:[],contactsList:[],drawerMode:"Add",deleteConfirmation:!1},c=p({name:`${L}/state`,initialState:b,reducers:{setTableData:(s,a)=>{s.tableData=a.payload,s.displayedTasksList=s.tasksList.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setTasksList:(s,a)=>{s.tasksList=a.payload},setUsersList:(s,a)=>{s.usersList=a.payload},setContactsList:(s,a)=>{s.usersList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedTask:(s,a)=>{s.selectedTask=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},setDrawerMode:(s,a)=>{s.drawerMode=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(n.fulfilled,(a,e)=>{a.tasksList=e.payload.data,a.tableData.total=e.payload.data.length,a.displayedTasksList=e.payload.data.slice(0,10),a.loading=!1}).addCase(D.fulfilled,(a,e)=>{a.usersList=e.payload.data,a.loading=!1}).addCase(C.fulfilled,(a,e)=>{a.contactsList=e.payload.data,a.loading=!1}).addCase(n.pending,a=>{a.loading=!0}).addCase(d.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(d.pending,a=>{a.statisticLoading=!0})}}),{setTableData:j,setTasksList:q,setFilterData:R,setSelectedTask:N,setDrawerOpen:P,setDrawerClose:_,setContactsList:$,setDrawerMode:v,setUsersList:B,toggleDeleteConfirmation:H}=c.actions,M=c.reducer,J=k({data:M}),K=g;export{R as a,j as b,P as c,A as d,d as e,F as f,n as g,U as h,z as i,_ as j,q as k,N as l,I as p,J as r,v as s,H as t,K as u};
