import{al as r,am as u,an as y,ao as k}from"./index-59d5b448.js";import{s as T,t as m,u as c,c as f,v as w,w as C,o as L,p,q as D}from"./CrmService-a82a4f3a.js";import{g as S}from"./index-8de4805b.js";import{g as b}from"./index-9e2674ee.js";const h="crmTasks",i=r("crmTasks/data/getTasksStatistic",async()=>(await T()).data),l=r("crmTasks/data/getTasks",async()=>(await m()).data);r("crmTasks/data/editTask",async({taskId:s,updatedData:a})=>(await c(s,a)).data);const x=r("crmLeads/data/getLeads",async()=>(await f()).data),F=r("crmTasks/data/deleteTask",async s=>{var a,e;try{return(await w(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),U=r("crmTasks/data/putTasks",async({taskId:s,data:a})=>{var e,t;try{return(await c(s,a)).data}catch(d){throw new Error((t=(e=d==null?void 0:d.response)==null?void 0:e.data)==null?void 0:t.message)}}),R=r("crmTasks/data/createTasks",async s=>{var a,e;try{return(await C(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),j=r("crmTasks/data/module",async()=>(await L()).data),v=r("tag-category",async({id:s})=>(await p(s)).data);r("crmTasks/data/fetchTag",async({id:s})=>(await p(s)).data);r("crmTasks/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await D({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const M={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},z={status:""},E={loading:!1,statisticLoading:!1,tasksList:[],displayedTasksList:[],statisticData:{},tableData:M,filterData:z,drawerOpen:!1,selectedTask:{},usersList:[],contactsList:[],leadsList:[],drawerMode:"Add",deleteConfirmation:!1},g=u({name:`${h}/state`,initialState:E,reducers:{setTableData:(s,a)=>{s.tableData=a.payload;const e=s.tasksList.filter(t=>t.title.toLowerCase().includes(a.payload.query.toLowerCase()));s.tableData={...a.payload,total:e==null?void 0:e.length},s.displayedTasksList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setTasksList:(s,a)=>{s.tasksList=a.payload},setUsersList:(s,a)=>{s.usersList=a.payload},setContactsList:(s,a)=>{s.usersList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedTask:(s,a)=>{s.selectedTask=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},setDrawerMode:(s,a)=>{s.drawerMode=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(l.fulfilled,(a,e)=>{var t,d,o,n;a.tasksList=e.payload.data,a.tableData.total=e.payload.data.length,a.displayedTasksList=e.payload.data.slice(((t=a==null?void 0:a.tableData)==null?void 0:t.pageSize)*(((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)-1),((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*((n=a==null?void 0:a.tableData)==null?void 0:n.pageIndex)),a.loading=!1}).addCase(b.fulfilled,(a,e)=>{a.usersList=e.payload.data,a.loading=!1}).addCase(S.fulfilled,(a,e)=>{a.contactsList=e.payload.data,a.loading=!1}).addCase(l.pending,a=>{a.loading=!0}).addCase(i.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(x.fulfilled,(a,e)=>{a.leadsList=e.payload.data,a.loading=!1}).addCase(i.pending,a=>{a.statisticLoading=!0})}}),{setTableData:N,setTasksList:P,setFilterData:_,setSelectedTask:$,setDrawerOpen:B,setDrawerClose:H,setContactsList:J,setDrawerMode:K,setUsersList:Q,toggleDeleteConfirmation:V}=g.actions,G=g.reducer,W=y({data:G}),X=k;export{N as a,B as b,i as c,F as d,x as e,j as f,l as g,v as h,R as i,H as j,P as k,$ as l,U as p,W as r,K as s,V as t,X as u};
