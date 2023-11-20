import{a9 as g,aa as p,ab as h,ac as m,ad as u,ae as f,af as y,J as z}from"./CrmService-d5fba30c.js";import{am as r,an as C,ao as w,ap as O}from"./index-deb31e10.js";const B="crmOrganizations",o=r("crmOrganizations/data/organization",async()=>(await g()).data),i=r("crmOrganizations/data/editOrganization",async({organizationId:e,updatedData:a})=>{var s,t;try{return(await p(e,a)).data}catch(n){throw new Error((t=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:t.message)}}),c=r("crmOrganizations/data/organization-branches",async()=>(await h()).data),d=r("crmOrganizations/data/editBranch",async({branchId:e,updatedData:a})=>{var s,t;try{return(await m(e,a)).data}catch(n){throw new Error((t=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:t.message)}}),M=r("crmOrganizations/data/deleteBranch",async e=>{var a,s;try{return await u(e)}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),U=r("crmOrganizations/data/createBranch",async e=>{var a,s;try{return(await f(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),A=r("crmOrganizations/data/organization",async e=>{var a,s;try{return(await y(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),L=r("crmOrganizations/data/getUsers",async()=>{var e,a;try{return(await z()).data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),D={organizationData:[],loading:!1,statisticLoading:!1,branchList:[],isDialogOpen:!1,selectedBranch:{},deleteConfirmation:!1,usersList:[],dialogMode:"Add"},l=C({name:`${B}/state`,initialState:D,reducers:{setBranchList:(e,a)=>{e.branchList=a.payload},setSelectedBranch:(e,a)=>{e.selectedBranch=a.payload},setDialogToggle:(e,a)=>{e.isDialogOpen=a.payload},toggleDeleteConfirmation:(e,a)=>{e.deleteConfirmation=a.payload},setUsersList:(e,a)=>{e.usersList=a.payload},setDialogMode:(e,a)=>{e.dialogMode=a.payload}},extraReducers:e=>{e.addCase(o.fulfilled,(a,s)=>{a.organizationData=s.payload.data,a.loading=!1}).addCase(o.pending,a=>{a.loading=!0}).addCase(L.fulfilled,(a,s)=>{a.usersList=s.payload.data,a.loading=!1}).addCase(c.fulfilled,(a,s)=>{a.branchList=s.payload.data,a.loading=!1}).addCase(c.pending,a=>{a.statisticLoading=!0}).addCase(d.fulfilled,(a,s)=>{a.loading=!1}).addCase(d.pending,a=>{a.loading=!0}).addCase(i.fulfilled,(a,s)=>{a.loading=!1}).addCase(i.pending,a=>{a.loading=!0})}}),{setBranchList:G,setSelectedBranch:T,setDialogToggle:k,setUsersList:x,setDialogMode:P,toggleDeleteConfirmation:R}=l.actions,E=l.reducer,j=w({data:E}),I=O;export{o as a,c as b,U as c,M as d,d as e,i as f,L as g,G as h,P as i,T as j,A as k,j as r,k as s,R as t,I as u};
