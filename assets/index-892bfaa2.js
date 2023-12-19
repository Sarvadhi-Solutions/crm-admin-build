import{al as o,am as y,an as g,ao as u}from"./index-94b34292.js";import{x as m,h as w,y as f,z as D,A as S,B as h,C as L,D as b,E,F as x,o as G,p,q as T}from"./CrmService-6dcb2527.js";const z="crmContact",d=o("crmContact/data/getContactStatistic",async()=>(await m()).data),l=o("crmContact/data/getContact",async()=>(await w()).data),q=o("crmContact/data/getSource",async()=>{const t=await f();return console.log({response:t}),t.data}),I=o("crmContact/data/getStates",async()=>{const t=await D();return console.log({response:t}),t.data}),O=o("crmContact/data/getCities",async()=>{const t=await S();return console.log({response:t}),t.data}),j=o("crmContact/data/createSource",async t=>{var a,e;try{return(await h(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),i=o("crmCompany/data/getCompany",async()=>(await L()).data),B=o("crmContact/data/editContact",async({contactId:t,updatedData:a})=>{var e,s;try{return(await b(t,a)).data}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),P=o("crmContact/data/deleteContact",async t=>{var a,e;try{return await E(t)}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),_=o("crmContact/data/createContact",async t=>{var a,e;try{return(await x(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}}),$=o("crmContact/data/module",async()=>{var t,a;try{return(await G()).data}catch(e){throw new Error((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)}}),v=o("tag-category",async({id:t})=>{var a,e;try{return(await p(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}});o("crmContact/data/fetchTag",async({id:t})=>{var a,e;try{return(await p(t)).data}catch(s){throw new Error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)}});o("crmContact/data/createTag",async({masterId:t,colorName:a,tagName:e,tagCategoryId:s})=>(await T({colorName:a,tagName:e,masterId:t,tagCategoryId:s})).data);const A={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},F={status:""},k={loading:!1,sources:[],statisticLoading:!1,contactList:[],displayedContactList:[],companyList:[],states:[],cities:[],statisticData:{},tableData:A,filterData:F,drawerOpen:!1,selectedContact:{},deleteConfirmation:!1},C=y({name:`${z}/state`,initialState:k,reducers:{setTableData:(t,a)=>{t.tableData=a.payload;const e=t.contactList.filter(s=>s.firstName.toLowerCase().includes(a.payload.query.toLowerCase())||s.lastName.toLowerCase().includes(a.payload.query.toLowerCase())||s.email.toLowerCase().includes(a.payload.query.toLowerCase()));t.tableData={...a.payload,total:e==null?void 0:e.length},t.displayedContactList=e.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setContactList:(t,a)=>{t.contactList=a.payload},setFilterData:(t,a)=>{t.filterData=a.payload},setSelectedContact:(t,a)=>{t.selectedContact=a.payload},setDrawerOpen:t=>{t.drawerOpen=!0},setDrawerClose:t=>{t.drawerOpen=!1},toggleDeleteConfirmation:(t,a)=>{t.deleteConfirmation=a.payload}},extraReducers:t=>{t.addCase(l.fulfilled,(a,e)=>{var s,n,r,c;a.contactList=e.payload.data,a.tableData.total=e.payload.data.length,a.displayedContactList=e.payload.data.slice(((s=a==null?void 0:a.tableData)==null?void 0:s.pageSize)*(((n=a==null?void 0:a.tableData)==null?void 0:n.pageIndex)-1),((r=a==null?void 0:a.tableData)==null?void 0:r.pageSize)*((c=a==null?void 0:a.tableData)==null?void 0:c.pageIndex)),a.loading=!1}).addCase(l.pending,a=>{a.loading=!0}).addCase(d.fulfilled,(a,e)=>{a.statisticData=e.payload,a.statisticLoading=!1}).addCase(d.pending,a=>{a.statisticLoading=!0}).addCase(i.fulfilled,(a,e)=>{a.companyList=e.payload.data,a.loading=!1}).addCase(i.pending,a=>{a.loading=!0}).addCase(q.fulfilled,(a,e)=>{a.sources=e.payload.data}).addCase(I.fulfilled,(a,e)=>{a.states=e.payload.data}).addCase(O.fulfilled,(a,e)=>{a.cities=e.payload.data})}}),{setTableData:H,setContactList:J,setFilterData:K,setSelectedContact:Q,setDrawerOpen:U,setDrawerClose:V,toggleDeleteConfirmation:W}=C.actions,M=C.reducer,X=g({data:M}),Y=u;export{d as a,i as b,I as c,P as d,O as e,$ as f,l as g,v as h,j as i,q as j,B as k,_ as l,V as m,H as n,U as o,X as r,Q as s,W as t,Y as u};
