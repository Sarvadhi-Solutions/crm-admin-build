import{al as o,am as L,an as D,ao as S}from"./index-4fc5ac15.js";import{z as b,A as h,B as C,c as F,C as x,D as M,E as U,q,s as k,t as z}from"./CrmService-81e45160.js";import{g as E}from"./index-c501e7f3.js";import{g as A}from"./index-184022f2.js";const G="crmTasks",f=o("crmTasks/data/getTasksStatistic",async()=>(await b()).data),m=o("crmTasks/data/getTasks",async()=>(await h()).data);o("crmTasks/data/editTask",async({taskId:s,updatedData:a})=>(await C(s,a)).data);const O=o("crmLeads/data/getLeads",async()=>(await F()).data),v=o("crmTasks/data/deleteTask",async s=>{var a,e;try{return(await x(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),y=o("crmTasks/data/putTasks",async({taskId:s,data:a})=>{var e,t;try{return(await C(s,a)).data}catch(r){throw new Error((t=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:t.message)}}),P=o("crmContact/data/getCustomField",async()=>{const s=await M();return console.log({response:s}),s.data}),H=o("crmTasks/data/createTasks",async s=>{var a,e;try{return(await U(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),J=o("crmTasks/data/module",async()=>(await q()).data),K=o("tag-category",async({id:s})=>(await k(s)).data);o("crmTasks/data/fetchTag",async({id:s})=>(await k(s)).data);o("crmTasks/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await z({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const I={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Q={status:""},R={loading:!1,statisticLoading:!1,tasksList:[],displayedTasksList:[],statisticData:{},tableData:I,filterData:Q,drawerOpen:!1,selectedTask:{},usersList:[],contactsList:[],customField:[],leadsList:[],drawerMode:"Add",deleteConfirmation:!1,followUPConfirmation:!1,quotationConfirmation:!1},T=L({name:`${G}/state`,initialState:R,reducers:{setTableData:(s,a)=>{var t;s.tableData=a.payload;const e=(t=s.tasksList)==null?void 0:t.filter(r=>r.title.toLowerCase().includes(a.payload.query.toLowerCase()));s.tableData={...a.payload,total:e==null?void 0:e.length},s.displayedTasksList=e==null?void 0:e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setTasksList:(s,a)=>{s.tasksList=a.payload},setUsersList:(s,a)=>{s.usersList=a.payload},setContactsList:(s,a)=>{s.usersList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedTask:(s,a)=>{s.selectedTask=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},setDrawerMode:(s,a)=>{s.drawerMode=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload},toggleFollowUPConfirmation:(s,a)=>{s.followUPConfirmation=a.payload},toggleQuotationConfirmation:(s,a)=>{s.quotationConfirmation=a.payload}},extraReducers:s=>{s.addCase(m.fulfilled,(a,e)=>{var r,n,d,i,l,c,p,g,u;a.tasksList=(r=e.payload)==null?void 0:r.data,a.tableData.total=(d=(n=e.payload)==null?void 0:n.data)==null?void 0:d.length;const t=(l=(i=e.payload)==null?void 0:i.data)==null?void 0:l.filter(w=>w.title.toLowerCase().includes(a.tableData.query||"".toLowerCase()));a.displayedTasksList=t.slice(((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*(((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)-1),((g=a==null?void 0:a.tableData)==null?void 0:g.pageSize)*((u=a==null?void 0:a.tableData)==null?void 0:u.pageIndex)),a.loading=!1}).addCase(A.fulfilled,(a,e)=>{a.usersList=e.payload.data,a.loading=!1}).addCase(P.fulfilled,(a,e)=>{a.customField=e.payload,a.loading=!1}).addCase(E.fulfilled,(a,e)=>{a.contactsList=e.payload.data,a.loading=!1}).addCase(m.pending,a=>{a.loading=!0}).addCase(f.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(O.fulfilled,(a,e)=>{a.leadsList=e.payload.data,a.loading=!1}).addCase(f.pending,a=>{a.statisticLoading=!0}).addCase(y.fulfilled,(a,e)=>{a.loading=!1}).addCase(y.pending,a=>{a.statisticLoading=!0})}}),{setTableData:V,setTasksList:W,setFilterData:X,setSelectedTask:Y,setDrawerOpen:Z,setDrawerClose:aa,setContactsList:sa,setDrawerMode:ea,setUsersList:ta,toggleDeleteConfirmation:oa,toggleFollowUPConfirmation:ra,toggleQuotationConfirmation:na}=T.actions,j=T.reducer,da=D({data:j}),ia=S;export{Y as a,f as b,V as c,v as d,Z as e,O as f,m as g,P as h,J as i,K as j,H as k,aa as l,W as m,ra as n,na as o,y as p,da as r,ea as s,oa as t,ia as u};
