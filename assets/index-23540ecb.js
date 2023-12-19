import{am as r,an as S,ao as b,ap as h}from"./index-f0c7b593.js";import{k as I,l as F,m as T,n as q,o as x,p as E,q as G,r as O,s as z,t as N,u as k,v as f,w as B}from"./CrmService-dbe6e33f.js";const P="crmLeads",C=r("crmLeads/data/getLeadsStatistic",async()=>(await I()).data),w=r("crmLeads/data/getLeads",async()=>(await F()).data),m=r("crmContact/data/getContact",async()=>(await T()).data),K=r("crmStatus/data/getStatus",async e=>(await q(e)).data),Q=r("crmLeads/data/editLeads",async({leadsId:e,updatedData:a})=>{var s,t;try{return(await x(e,a)).data}catch(d){throw new Error((t=(s=d==null?void 0:d.response)==null?void 0:s.data)==null?void 0:t.message)}}),U=r("crmLeads/data/deleteLeads",async e=>{var a,s;try{return await E(e)}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),V=r("crmLeads/data/createLeads",async e=>{var a,s;try{return(await G(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),R=r("crmLeads/data/getProduct",async e=>{var a,s;try{return(await O(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),A=r("crmLeads/data/getSubByIdCategory",async e=>{var a,s;try{return(await z(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),W=r("crmLeads/data/module",async()=>(await N()).data),M=r("crmContact/data/getCustomField",async e=>(await k(e)).data),X=r("tag-category",async({id:e})=>(await f(e)).data);r("crmLeads/data/fetchTag",async({id:e})=>(await f(e)).data);r("crmLeads/data/createTag",async({masterId:e,colorName:a,tagName:s,tagCategoryId:t})=>(await B({colorName:a,tagName:s,masterId:e,tagCategoryId:t})).data);const j={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},v={status:""},_={loading:!1,statisticLoading:!1,leadsList:[],categoryList:[],productList:[],subCategoryList:[],displayedLeadsList:[],statisticData:{},isDialogOpen:!1,tableData:j,filterData:v,drawerOpen:!1,selectedLeads:{},contactList:[],customField:[],deleteConfirmation:!1},D=S({name:`${P}/state`,initialState:_,reducers:{setTableData:(e,a)=>{var t;const s=(t=e.leadsList)==null?void 0:t.filter(d=>{var o,n;return((o=d.contactData)==null?void 0:o.firstName.toLowerCase().includes(a.payload.query.toLowerCase()))||((n=d.contactData)==null?void 0:n.lastName.toLowerCase().includes(a.payload.query.toLowerCase()))||(d==null?void 0:d.title.toLowerCase().includes(a.payload.query.toLowerCase()))});e.tableData={...a.payload,total:s==null?void 0:s.length},e.displayedLeadsList=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setLeadsList:(e,a)=>{e.leadsList=a.payload},setRowLeadId:(e,a)=>{e.rowwithId=a.payload},setFilterData:(e,a)=>{e.filterData=a.payload},setSelectedLeads:(e,a)=>{e.selectedLeads=a.payload},setDrawerOpen:e=>{e.drawerOpen=!0},setDialogToggle:(e,a)=>{e.isDialogOpen=a.payload},setDrawerClose:e=>{e.drawerOpen=!1},toggleDeleteConfirmation:(e,a)=>{e.deleteConfirmation=a.payload}},extraReducers:e=>{e.addCase(w.fulfilled,(a,s)=>{var d,o,n,c,i,p,u,g;a.leadsList=s.payload.data,a.tableData.total=(o=(d=s.payload)==null?void 0:d.data)==null?void 0:o.length;const t=(c=(n=s.payload)==null?void 0:n.data)==null?void 0:c.filter(l=>{var L,y;return((L=l.contactData)==null?void 0:L.firstName.toLowerCase().includes(a.tableData.query||"".toLowerCase()))||((y=l.contactData)==null?void 0:y.lastName.toLowerCase().includes(a.tableData.query||"".toLowerCase()))||(l==null?void 0:l.title.toLowerCase().includes(a.tableData.query||"".toLowerCase()))});a.displayedLeadsList=t.slice(((i=a==null?void 0:a.tableData)==null?void 0:i.pageSize)*(((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)-1),((u=a==null?void 0:a.tableData)==null?void 0:u.pageSize)*((g=a==null?void 0:a.tableData)==null?void 0:g.pageIndex)),a.loading=!1}).addCase(w.pending,a=>{a.loading=!0}).addCase(C.fulfilled,(a,s)=>{a.statisticData=s.payload,a.statisticLoading=!1}).addCase(C.pending,a=>{a.statisticLoading=!0}).addCase(m.fulfilled,(a,s)=>{a.contactList=s.payload.data,a.loading=!1}).addCase(m.pending,a=>{a.loading=!0}).addCase(A.fulfilled,(a,s)=>{a.subCategoryList=s==null?void 0:s.payload.data}).addCase(M.fulfilled,(a,s)=>{a.customField=s.payload,console.log(a.customField,"customField"),a.loading=!1}).addCase(R.fulfilled,(a,s)=>{a.productList=s==null?void 0:s.payload.data})}}),{setRowLeadId:Y,setTableData:Z,setLeadsList:aa,setFilterData:ea,setSelectedLeads:sa,setDrawerOpen:ta,setDrawerClose:da,setDialogToggle:ra,toggleDeleteConfirmation:oa}=D.actions,$=D.reducer,na=b({data:$}),la=h;export{w as a,m as b,M as c,U as d,X as e,W as f,C as g,Q as h,V as i,sa as j,ra as k,Y as l,Z as m,K as n,ta as o,na as r,da as s,oa as t,la as u};
