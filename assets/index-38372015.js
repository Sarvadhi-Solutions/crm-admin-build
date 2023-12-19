import{al as o,am as D,an as L,ao as S}from"./index-bbbc5aef.js";import{I as h,m as b,J as E,K as F,L as G,M as T,N as q,O as x,P as I,Q as N,t as O,v as w,R as z,w as M}from"./CrmService-ce1a8be4.js";const k="crmContact",y=o("crmContact/data/getContactStatistic",async()=>(await h()).data),m=o("crmContact/data/getContact",async()=>(await b()).data),A=o("crmContact/data/getSource",async()=>{const t=await E();return console.log({response:t}),t.data}),R=o("crmContact/data/getStates",async()=>{const t=await F();return console.log({response:t}),t.data}),P=o("crmContact/data/getCities",async()=>{const t=await G();return console.log({response:t}),t.data}),B=o("crmContact/data/createSource",async t=>{var a,e;try{return(await T(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),g=o("crmCompany/data/getCompany",async()=>(await q()).data),H=o("crmContact/data/editContact",async({contactId:t,updatedData:a})=>{var e,s;try{return(await x(t,a)).data}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),U=o("crmContact/data/deleteContact",async t=>{var a,e;try{return await I(t)}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),V=o("crmContact/data/createContact",async t=>{var a,e;try{return(await N(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),W=o("crmContact/data/module",async()=>{var t,a;try{return(await O()).data}catch(e){throw new Error((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)}}),X=o("tag-category",async({id:t})=>{var a,e;try{return(await w(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),j=o("crmContact/data/getCustomField",async()=>{const t=await z();return console.log({response:t}),t.data});o("crmContact/data/fetchTag",async({id:t})=>{var a,e;try{return(await w(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}});o("crmContact/data/createTag",async({masterId:t,colorName:a,tagName:e,tagCategoryId:s})=>(await M({colorName:a,tagName:e,masterId:t,tagCategoryId:s})).data);const v={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},J={status:""},K={loading:!1,sources:[],statisticLoading:!1,contactList:[],displayedContactList:[],companyList:[],customField:[],states:[],cities:[],statisticData:{},tableData:v,filterData:J,drawerOpen:!1,selectedContact:{},deleteConfirmation:!1},f=D({name:`${k}/state`,initialState:K,reducers:{setTableData:(t,a)=>{var s;t.tableData=a.payload;const e=(s=t.contactList)==null?void 0:s.filter(n=>n.firstName.toLowerCase().includes(a.payload.query.toLowerCase())||n.lastName.toLowerCase().includes(a.payload.query.toLowerCase())||n.email.toLowerCase().includes(a.payload.query.toLowerCase()));t.tableData={...a.payload,total:e==null?void 0:e.length},t.displayedContactList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setContactList:(t,a)=>{t.contactList=a.payload},setFilterData:(t,a)=>{t.filterData=a.payload},setSelectedContact:(t,a)=>{t.selectedContact=a.payload},setDrawerOpen:t=>{t.drawerOpen=!0},setDrawerClose:t=>{t.drawerOpen=!1},toggleDeleteConfirmation:(t,a)=>{t.deleteConfirmation=a.payload}},extraReducers:t=>{t.addCase(m.fulfilled,(a,e)=>{var n,c,d,l,i,p,C,u;a.contactList=e.payload.data,a.tableData.total=(c=(n=e.payload)==null?void 0:n.data)==null?void 0:c.length;const s=(l=(d=e.payload)==null?void 0:d.data)==null?void 0:l.filter(r=>r.firstName.toLowerCase().includes(a.tableData.query||"".toLowerCase())||r.lastName.toLowerCase().includes(a.tableData.query||"".toLowerCase())||r.email.toLowerCase().includes(a.tableData.query||"".toLowerCase()));a.displayedContactList=s.slice(((i=a==null?void 0:a.tableData)==null?void 0:i.pageSize)*(((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)-1),((C=a==null?void 0:a.tableData)==null?void 0:C.pageSize)*((u=a==null?void 0:a.tableData)==null?void 0:u.pageIndex)),a.loading=!1}).addCase(m.pending,a=>{a.loading=!0}).addCase(y.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(j.fulfilled,(a,e)=>{a.customField=e.payload.data,a.loading=!1}).addCase(y.pending,a=>{a.statisticLoading=!0}).addCase(g.fulfilled,(a,e)=>{a.companyList=e.payload.data,a.loading=!1}).addCase(g.pending,a=>{a.loading=!0}).addCase(A.fulfilled,(a,e)=>{a.sources=e.payload.data}).addCase(R.fulfilled,(a,e)=>{a.states=e.payload.data}).addCase(P.fulfilled,(a,e)=>{a.cities=e.payload.data})}}),{setTableData:Y,setContactList:Z,setFilterData:aa,setSelectedContact:ta,setDrawerOpen:ea,setDrawerClose:sa,toggleDeleteConfirmation:oa}=f.actions,Q=f.reducer,na=L({data:Q}),ra=S;export{y as a,g as b,R as c,U as d,j as e,P as f,m as g,W as h,X as i,B as j,A as k,H as l,V as m,sa as n,Y as o,ea as p,na as r,ta as s,oa as t,ra as u};
