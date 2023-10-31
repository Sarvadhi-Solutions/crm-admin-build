import{y as D,m as y,z as u,A as C,B as m,q as w,r as f,s as L,t as h,v as i,c as b,w as S}from"./CrmService-d077c852.js";import{al as r,am as T,an as I,ao as E}from"./index-0ab2c514.js";const G="crmDeals",c=r("crmDeals/data/getDeals",async()=>(await D()).data),p=r("crmContact/data/getContact",async()=>(await y()).data),N=r("crmDeals/data/editDeals",async({DealsId:s,updatedData:a})=>{var e,t;try{return(await u(s,a)).data}catch(l){throw new Error((t=(e=l==null?void 0:l.response)==null?void 0:e.data)==null?void 0:t.message)}}),R=r("crmDeals/data/deleteDeals",async s=>{var a,e;try{return await C(s)}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),j=r("crmDeals/data/createDeals",async s=>{var a,e;try{return(await m(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),x=r("crmDeals/data/getProduct",async s=>{var a,e;try{const t=await w(s);return console.log({response:t}),t.data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),O=r("crmDeals/data/getSubByIdCategory",async s=>{var a,e;try{return(await f(s)).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),z=r("crmDeals/data/getCategory",async()=>{var s,a;try{return(await L()).data}catch(e){throw new Error((a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.message)}}),v=r("crmDeals/data/module",async()=>(await h()).data),_=r("tag-category",async({id:s})=>(await i(s)).data);r("crmDeals/data/fetchTag",async({id:s})=>(await i(s)).data);const q=r("crmLeads/data/getLeads",async()=>(await b()).data);r("crmDeals/data/createTag",async({masterId:s,colorName:a,tagName:e,tagCategoryId:t})=>(await S({colorName:a,tagName:e,masterId:s,tagCategoryId:t})).data);const B={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},A={status:""},P={loading:!1,statisticLoading:!1,DealsList:[],categoryList:[],productList:[],subCategoryList:[],displayedDealsList:[],statisticData:{},isDialogOpen:!1,tableData:B,filterData:A,drawerOpen:!1,selectedDeals:{},contactList:[],leadsList:[],deleteConfirmation:!1},g=T({name:`${G}/state`,initialState:P,reducers:{setTableData:(s,a)=>{const e=s.DealsList.filter(t=>{var l,o;return((l=t.contactData)==null?void 0:l.firstName.toLowerCase().includes(a.payload.query.toLowerCase()))||((o=t.contactData)==null?void 0:o.lastName.toLowerCase().includes(a.payload.query.toLowerCase()))||(t==null?void 0:t.title.toLowerCase().includes(a.payload.query.toLowerCase()))});s.tableData={...a.payload,total:e==null?void 0:e.length},s.displayedDealsList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setDealsList:(s,a)=>{s.DealsList=a.payload},setFilterData:(s,a)=>{s.filterData=a.payload},setSelectedDeals:(s,a)=>{s.selectedDeals=a.payload},setDrawerOpen:s=>{s.drawerOpen=!0},setDialogToggle:(s,a)=>{s.isDialogOpen=a.payload},setDrawerClose:s=>{s.drawerOpen=!1},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload}},extraReducers:s=>{s.addCase(c.fulfilled,(a,e)=>{var t,l,o,d,n;a.DealsList=e.payload.data,a.tableData.total=(t=e.payload.data)==null?void 0:t.length,a.displayedDealsList=e.payload.data.slice(((l=a==null?void 0:a.tableData)==null?void 0:l.pageSize)*(((o=a==null?void 0:a.tableData)==null?void 0:o.pageIndex)-1),((d=a==null?void 0:a.tableData)==null?void 0:d.pageSize)*((n=a==null?void 0:a.tableData)==null?void 0:n.pageIndex)),a.loading=!1}).addCase(c.pending,a=>{a.loading=!0}).addCase(p.fulfilled,(a,e)=>{a.contactList=e.payload.data,a.loading=!1}).addCase(p.pending,a=>{a.loading=!0}).addCase(q.fulfilled,(a,e)=>{a.leadsList=e.payload.data,a.loading=!1}).addCase(O.fulfilled,(a,e)=>{a.subCategoryList=e==null?void 0:e.payload.data}).addCase(z.fulfilled,(a,e)=>{a.categoryList=e==null?void 0:e.payload.data}).addCase(x.fulfilled,(a,e)=>{a.productList=e==null?void 0:e.payload.data})}}),{setTableData:$,setDealsList:H,setFilterData:J,setSelectedDeals:K,setDrawerOpen:Q,setDrawerClose:U,setDialogToggle:V,toggleDeleteConfirmation:W}=g.actions,k=g.reducer,X=I({data:k}),Y=E;export{$ as a,Q as b,q as c,R as d,_ as e,v as f,c as g,N as h,j as i,U as j,z as k,V as l,X as r,K as s,W as t,Y as u};
