import{al as o,am as w,an as f,ao as D}from"./index-2cac4aa9.js";import{x as S,h,y as L,z as b,A as E,B as x,C as G,D as T,E as z,F as q,o as I,p as u,q as O}from"./CrmService-945fbe7f.js";const A="crmContact",C=o("crmContact/data/getContactStatistic",async()=>(await S()).data),y=o("crmContact/data/getContact",async()=>(await h()).data),F=o("crmContact/data/getSource",async()=>{const t=await L();return console.log({response:t}),t.data}),k=o("crmContact/data/getStates",async()=>{const t=await b();return console.log({response:t}),t.data}),M=o("crmContact/data/getCities",async()=>{const t=await E();return console.log({response:t}),t.data}),$=o("crmContact/data/createSource",async t=>{var a,e;try{return(await x(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),g=o("crmCompany/data/getCompany",async()=>(await G()).data),v=o("crmContact/data/editContact",async({contactId:t,updatedData:a})=>{var e,s;try{return(await T(t,a)).data}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),H=o("crmContact/data/deleteContact",async t=>{var a,e;try{return await z(t)}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),J=o("crmContact/data/createContact",async t=>{var a,e;try{return(await q(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),K=o("crmContact/data/module",async()=>{var t,a;try{return(await I()).data}catch(e){throw new Error((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)}}),Q=o("tag-category",async({id:t})=>{var a,e;try{return(await u(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}});o("crmContact/data/fetchTag",async({id:t})=>{var a,e;try{return(await u(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}});o("crmContact/data/createTag",async({masterId:t,colorName:a,tagName:e,tagCategoryId:s})=>(await O({colorName:a,tagName:e,masterId:t,tagCategoryId:s})).data);const N={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},R={status:""},j={loading:!1,sources:[],statisticLoading:!1,contactList:[],displayedContactList:[],companyList:[],states:[],cities:[],statisticData:{},tableData:N,filterData:R,drawerOpen:!1,selectedContact:{},deleteConfirmation:!1},m=w({name:`${A}/state`,initialState:j,reducers:{setTableData:(t,a)=>{var s;t.tableData=a.payload;const e=(s=t.contactList)==null?void 0:s.filter(n=>n.firstName.toLowerCase().includes(a.payload.query.toLowerCase())||n.lastName.toLowerCase().includes(a.payload.query.toLowerCase())||n.email.toLowerCase().includes(a.payload.query.toLowerCase()));t.tableData={...a.payload,total:e==null?void 0:e.length},t.displayedContactList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setContactList:(t,a)=>{t.contactList=a.payload},setFilterData:(t,a)=>{t.filterData=a.payload},setSelectedContact:(t,a)=>{t.selectedContact=a.payload},setDrawerOpen:t=>{t.drawerOpen=!0},setDrawerClose:t=>{t.drawerOpen=!1},toggleDeleteConfirmation:(t,a)=>{t.deleteConfirmation=a.payload}},extraReducers:t=>{t.addCase(y.fulfilled,(a,e)=>{var s,n,r,c,d,l,i,p;a.contactList=e.payload.data,a.tableData.total=(n=(s=e.payload)==null?void 0:s.data)==null?void 0:n.length,a.displayedContactList=(p=(r=e.payload)==null?void 0:r.data)==null?void 0:p.slice(((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*(((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)-1),((l=a==null?void 0:a.tableData)==null?void 0:l.pageSize)*((i=a==null?void 0:a.tableData)==null?void 0:i.pageIndex)),a.loading=!1}).addCase(y.pending,a=>{a.loading=!0}).addCase(C.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(C.pending,a=>{a.statisticLoading=!0}).addCase(g.fulfilled,(a,e)=>{a.companyList=e.payload.data,a.loading=!1}).addCase(g.pending,a=>{a.loading=!0}).addCase(F.fulfilled,(a,e)=>{a.sources=e.payload.data}).addCase(k.fulfilled,(a,e)=>{a.states=e.payload.data}).addCase(M.fulfilled,(a,e)=>{a.cities=e.payload.data})}}),{setTableData:U,setContactList:V,setFilterData:W,setSelectedContact:X,setDrawerOpen:Y,setDrawerClose:Z,toggleDeleteConfirmation:aa}=m.actions,B=m.reducer,ta=f({data:B}),ea=D;export{C as a,g as b,k as c,H as d,M as e,K as f,y as g,Q as h,$ as i,F as j,v as k,J as l,Z as m,U as n,Y as o,ta as r,X as s,aa as t,ea as u};
