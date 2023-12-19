import{al as d,am as b,an as h,ao as S}from"./index-3e8ea6f8.js";import{l as I,c as T,m as q,n as E,o as F,p as G,q as x,r as O,s as z,t as N,u as B,v as f,w as P}from"./CrmService-cfe882b2.js";const k="crmLeads",C=d("crmLeads/data/getLeadsStatistic",async()=>(await I()).data),w=d("crmLeads/data/getLeads",async()=>(await T()).data),m=d("crmContact/data/getContact",async()=>(await q()).data),Q=d("crmLeads/data/editLeads",async({leadsId:s,updatedData:a})=>{var e,t;try{return(await E(s,a)).data}catch(r){throw new Error((t=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:t.message)}}),U=d("crmLeads/data/deleteLeads",async s=>{var a,e;try{return await F(s)}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),V=d("crmLeads/data/createLeads",async s=>{var a,e;try{return(await G(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),A=d("crmLeads/data/getProduct",async s=>{var a,e;try{const t=await x(s);return console.log({response:t}),t.data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),M=d("crmLeads/data/getSubByIdCategory",async s=>{var a,e;try{return(await O(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),R=d("crmLeads/data/getCategory",async()=>{var s,a;try{return(await z()).data}catch(e){throw new Error((a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.message)}}),W=d("crmLeads/data/module",async()=>(await N()).data),j=d("crmContact/data/getCustomField",async()=>{const s=await B();return console.log({response:s}),s.data}),X=d("tag-category",async({id:s})=>(await f(s)).data);d("crmLeads/data/fetchTag",async({id:s})=>(await f(s)).data);d("crmLeads/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await P({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const v={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},_={status:""},$={loading:!1,statisticLoading:!1,leadsList:[],categoryList:[],productList:[],subCategoryList:[],displayedLeadsList:[],statisticData:{},isDialogOpen:!1,tableData:v,filterData:_,drawerOpen:!1,selectedLeads:{},contactList:[],customField:[],deleteConfirmation:!1},D=b({name:`${k}/state`,initialState:$,reducers:{setTableData:(s,a)=>{var t;const e=(t=s.leadsList)==null?void 0:t.filter(r=>{var o,n;return((o=r.contactData)==null?void 0:o.firstName.toLowerCase().includes(a.payload.query.toLowerCase()))||((n=r.contactData)==null?void 0:n.lastName.toLowerCase().includes(a.payload.query.toLowerCase()))||(r==null?void 0:r.title.toLowerCase().includes(a.payload.query.toLowerCase()))});s.tableData={...a.payload,total:e==null?void 0:e.length},s.displayedLeadsList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setLeadsList:(s,a)=>{s.leadsList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedLeads:(s,a)=>{s.selectedLeads=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDialogToggle:(s,a)=>{s.isDialogOpen=a.payload},setDrawerClose:s=>{s.drawerOpen=!1},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(w.fulfilled,(a,e)=>{var r,o,n,c,i,p,g,u;a.leadsList=e.payload.data,a.tableData.total=(o=(r=e.payload)==null?void 0:r.data)==null?void 0:o.length;const t=(c=(n=e.payload)==null?void 0:n.data)==null?void 0:c.filter(l=>{var L,y;return((L=l.contactData)==null?void 0:L.firstName.toLowerCase().includes(a.tableData.query||"".toLowerCase()))||((y=l.contactData)==null?void 0:y.lastName.toLowerCase().includes(a.tableData.query||"".toLowerCase()))||(l==null?void 0:l.title.toLowerCase().includes(a.tableData.query||"".toLowerCase()))});a.displayedLeadsList=t.slice(((i=a==null?void 0:a.tableData)==null?void 0:i.pageSize)*(((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)-1),((g=a==null?void 0:a.tableData)==null?void 0:g.pageSize)*((u=a==null?void 0:a.tableData)==null?void 0:u.pageIndex)),a.loading=!1}).addCase(w.pending,a=>{a.loading=!0}).addCase(C.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(C.pending,a=>{a.statisticLoading=!0}).addCase(m.fulfilled,(a,e)=>{a.contactList=e.payload.data,a.loading=!1}).addCase(m.pending,a=>{a.loading=!0}).addCase(M.fulfilled,(a,e)=>{a.subCategoryList=e==null?void 0:e.payload.data}).addCase(R.fulfilled,(a,e)=>{a.categoryList=e==null?void 0:e.payload.data}).addCase(j.fulfilled,(a,e)=>{a.customField=e.payload,a.loading=!1}).addCase(A.fulfilled,(a,e)=>{a.productList=e==null?void 0:e.payload.data})}}),{setTableData:Y,setLeadsList:Z,setFilterData:aa,setSelectedLeads:ea,setDrawerOpen:sa,setDrawerClose:ta,setDialogToggle:ra,toggleDeleteConfirmation:da}=D.actions,H=D.reducer,oa=h({data:H}),na=S;export{w as a,m as b,j as c,U as d,X as e,W as f,C as g,Q as h,V as i,R as j,ea as k,ra as l,Y as m,sa as n,oa as r,ta as s,da as t,na as u};
