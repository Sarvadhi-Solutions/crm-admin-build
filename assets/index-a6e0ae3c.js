import{am as o,an as L,ao as D,ap as S}from"./index-c2c71b67.js";import{C as b,D as h,E as C,c as F,F as x,G as M,H as U,t as E,v as k,w as G}from"./CrmService-15d11bcd.js";import{g as q}from"./index-68c1908e.js";import{g as z}from"./index-9b4d3b80.js";const O="crmTasks",f=o("crmTasks/data/getTasksStatistic",async()=>(await b()).data),m=o("crmTasks/data/getTasks",async()=>(await h()).data);o("crmTasks/data/editTask",async({taskId:s,updatedData:a})=>(await C(s,a)).data);const P=o("crmLeads/data/getLeads",async()=>(await F()).data),$=o("crmTasks/data/deleteTask",async s=>{var a,e;try{return(await x(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),y=o("crmTasks/data/putTasks",async({taskId:s,data:a})=>{var e,t;try{return(await C(s,a)).data}catch(r){throw new Error((t=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:t.message)}}),A=o("crmContact/data/getCustomField",async()=>{const s=await M();return console.log({response:s}),s.data}),B=o("crmTasks/data/createTasks",async s=>{var a,e;try{return(await U(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),J=o("crmTasks/data/module",async()=>(await E()).data),K=o("tag-category",async({id:s})=>(await k(s)).data);o("crmTasks/data/fetchTag",async({id:s})=>(await k(s)).data);o("crmTasks/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await G({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const I={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Q={status:""},R={loading:!1,statisticLoading:!1,tasksList:[],displayedTasksList:[],statisticData:{},tableData:I,filterData:Q,drawerOpen:!1,selectedTask:{},usersList:[],contactsList:[],customField:[],leadsList:[],drawerMode:"Add",deleteConfirmation:!1,followUPConfirmation:!1,quotationConfirmation:!1},T=L({name:`${O}/state`,initialState:R,reducers:{setTableData:(s,a)=>{var t;s.tableData=a.payload;const e=(t=s.tasksList)==null?void 0:t.filter(r=>r.title.toLowerCase().includes(a.payload.query.toLowerCase()));s.tableData={...a.payload,total:e==null?void 0:e.length},s.displayedTasksList=e==null?void 0:e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setTasksList:(s,a)=>{s.tasksList=a.payload},setUsersList:(s,a)=>{s.usersList=a.payload},setContactsList:(s,a)=>{s.usersList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedTask:(s,a)=>{s.selectedTask=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDrawerClose:s=>{s.drawerOpen=!1},setDrawerMode:(s,a)=>{s.drawerMode=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload},toggleFollowUPConfirmation:(s,a)=>{s.followUPConfirmation=a.payload},toggleQuotationConfirmation:(s,a)=>{s.quotationConfirmation=a.payload}},extraReducers:s=>{s.addCase(m.fulfilled,(a,e)=>{var r,n,d,i,l,c,p,g,u;a.tasksList=(r=e.payload)==null?void 0:r.data,a.tableData.total=(d=(n=e.payload)==null?void 0:n.data)==null?void 0:d.length;const t=(l=(i=e.payload)==null?void 0:i.data)==null?void 0:l.filter(w=>w.title.toLowerCase().includes(a.tableData.query||"".toLowerCase()));a.displayedTasksList=t.slice(((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*(((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)-1),((g=a==null?void 0:a.tableData)==null?void 0:g.pageSize)*((u=a==null?void 0:a.tableData)==null?void 0:u.pageIndex)),a.loading=!1}).addCase(z.fulfilled,(a,e)=>{a.usersList=e.payload.data,a.loading=!1}).addCase(A.fulfilled,(a,e)=>{a.customField=e.payload,a.loading=!1}).addCase(q.fulfilled,(a,e)=>{a.contactsList=e.payload.data,a.loading=!1}).addCase(m.pending,a=>{a.loading=!0}).addCase(f.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(P.fulfilled,(a,e)=>{a.leadsList=e.payload.data,a.loading=!1}).addCase(f.pending,a=>{a.statisticLoading=!0}).addCase(y.fulfilled,(a,e)=>{a.loading=!1}).addCase(y.pending,a=>{a.statisticLoading=!0})}}),{setTableData:V,setTasksList:W,setFilterData:X,setSelectedTask:Y,setDrawerOpen:Z,setDrawerClose:aa,setContactsList:sa,setDrawerMode:ea,setUsersList:ta,toggleDeleteConfirmation:oa,toggleFollowUPConfirmation:ra,toggleQuotationConfirmation:na}=T.actions,j=T.reducer,da=D({data:j}),ia=S;export{V as a,Y as b,f as c,$ as d,Z as e,ra as f,m as g,na as h,P as i,A as j,J as k,K as l,B as m,aa as n,W as o,y as p,da as r,ea as s,oa as t,ia as u};
