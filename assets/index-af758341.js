import{y as g,m as y,z as u,A as C,B as m,r as w,s as f,t as L,v as i,l as b,w as h}from"./CrmService-ac08cdaf.js";import{am as r,an as S,ao as T,ap as I}from"./index-4675262e.js";const x="crmDeals",c=r("crmDeals/data/getDeals",async()=>(await g()).data),p=r("crmContact/data/getContact",async()=>(await y()).data),F=r("crmDeals/data/editDeals",async({DealsId:e,updatedData:a})=>{var s,t;try{return(await u(e,a)).data}catch(l){throw new Error((t=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:t.message)}}),M=r("crmDeals/data/deleteDeals",async e=>{var a,s;try{return await C(e)}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),N=r("crmDeals/data/createDeals",async e=>{var a,s;try{return(await m(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),E=r("crmDeals/data/getProduct",async e=>{var a,s;try{return(await w(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),G=r("crmDeals/data/getSubByIdCategory",async e=>{var a,s;try{return(await f(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),R=r("crmDeals/data/module",async()=>(await L()).data),j=r("tag-category",async({id:e})=>(await i(e)).data);r("crmDeals/data/fetchTag",async({id:e})=>(await i(e)).data);const O=r("crmLeads/data/getLeads",async()=>(await b()).data);r("crmDeals/data/createTag",async({masterId:e,colorName:a,tagName:s,tagCategoryId:t})=>(await h({colorName:a,tagName:s,masterId:e,tagCategoryId:t})).data);const z={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},B={status:""},q={loading:!1,statisticLoading:!1,DealsList:[],categoryList:[],productList:[],subCategoryList:[],displayedDealsList:[],statisticData:{},isDialogOpen:!1,tableData:z,filterData:B,drawerOpen:!1,selectedDeals:{},contactList:[],leadsList:[],deleteConfirmation:!1},D=S({name:`${x}/state`,initialState:q,reducers:{setTableData:(e,a)=>{const s=e.DealsList.filter(t=>{var l,o;return((l=t.contactData)==null?void 0:l.firstName.toLowerCase().includes(a.payload.query.toLowerCase()))||((o=t.contactData)==null?void 0:o.lastName.toLowerCase().includes(a.payload.query.toLowerCase()))||(t==null?void 0:t.title.toLowerCase().includes(a.payload.query.toLowerCase()))});e.tableData={...a.payload,total:s==null?void 0:s.length},e.displayedDealsList=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setDealsList:(e,a)=>{e.DealsList=a.payload},setFilterData:(e,a)=>{e.filterData=a.payload},setSelectedDeals:(e,a)=>{e.selectedDeals=a.payload},setDrawerOpen:e=>{e.drawerOpen=!0},setDialogToggle:(e,a)=>{e.isDialogOpen=a.payload},setDrawerClose:e=>{e.drawerOpen=!1},toggleDeleteConfirmation:(e,a)=>{e.deleteConfirmation=a.payload}},extraReducers:e=>{e.addCase(c.fulfilled,(a,s)=>{var t,l,o,d,n;a.DealsList=s.payload.data,a.tableData.total=(t=s.payload.data)==null?void 0:t.length,a.displayedDealsList=s.payload.data.slice(((l=a==null?void 0:a.tableData)==null?void 0:l.pageSize)*(((o=a==null?void 0:a.tableData)==null?void 0:o.pageIndex)-1),((d=a==null?void 0:a.tableData)==null?void 0:d.pageSize)*((n=a==null?void 0:a.tableData)==null?void 0:n.pageIndex)),a.loading=!1}).addCase(c.pending,a=>{a.loading=!0}).addCase(p.fulfilled,(a,s)=>{a.contactList=s.payload.data,a.loading=!1}).addCase(p.pending,a=>{a.loading=!0}).addCase(O.fulfilled,(a,s)=>{a.leadsList=s.payload.data,a.loading=!1}).addCase(G.fulfilled,(a,s)=>{a.subCategoryList=s==null?void 0:s.payload.data}).addCase(E.fulfilled,(a,s)=>{a.productList=s==null?void 0:s.payload.data})}}),{setTableData:v,setDealsList:_,setFilterData:$,setSelectedDeals:H,setDrawerOpen:J,setDrawerClose:K,setDialogToggle:Q,toggleDeleteConfirmation:U}=D.actions,A=D.reducer,V=T({data:A}),W=I;export{v as a,J as b,O as c,M as d,j as e,R as f,c as g,F as h,N as i,K as j,Q as k,V as r,H as s,U as t,W as u};
