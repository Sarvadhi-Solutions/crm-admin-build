import{ac as g,ad as p,ae as h,af as m,ag as u,ah as f,ai as y,T as z}from"./CrmService-adaf9185.js";import{am as r,an as C,ao as w,ap as O}from"./index-23438ae7.js";const B="crmOrganizations",o=r("crmOrganizations/data/organization",async()=>{const e=await g();return console.log("wqdqwdqwdq",e),e.data}),i=r("crmOrganizations/data/editOrganization",async({organizationId:e,updatedData:a})=>{var s,t;try{return(await p(e,a)).data}catch(n){throw new Error((t=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:t.message)}}),d=r("crmOrganizations/data/organization-branches",async()=>(await h()).data),c=r("crmOrganizations/data/editBranch",async({branchId:e,updatedData:a})=>{var s,t;try{return(await m(e,a)).data}catch(n){throw new Error((t=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:t.message)}}),M=r("crmOrganizations/data/deleteBranch",async e=>{var a,s;try{return await u(e)}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),U=r("crmOrganizations/data/createBranch",async e=>{var a,s;try{return(await f(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),q=r("crmOrganizations/data/organization",async e=>{var a,s;try{return(await y(e)).data}catch(t){throw new Error((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)}}),L=r("crmOrganizations/data/getUsers",async()=>{var e,a;try{return(await z()).data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),D={organizationData:[],loading:!1,statisticLoading:!1,branchList:[],isDialogOpen:!1,selectedBranch:{},deleteConfirmation:!1,usersList:[],dialogMode:"Add"},l=C({name:`${B}/state`,initialState:D,reducers:{setBranchList:(e,a)=>{e.branchList=a.payload},setSelectedBranch:(e,a)=>{e.selectedBranch=a.payload},setDialogToggle:(e,a)=>{e.isDialogOpen=a.payload},toggleDeleteConfirmation:(e,a)=>{e.deleteConfirmation=a.payload},setUsersList:(e,a)=>{e.usersList=a.payload},setDialogMode:(e,a)=>{e.dialogMode=a.payload}},extraReducers:e=>{e.addCase(o.fulfilled,(a,s)=>{a.organizationData=s.payload.data,a.loading=!1}).addCase(o.pending,a=>{a.loading=!0}).addCase(L.fulfilled,(a,s)=>{a.usersList=s.payload.data,a.loading=!1}).addCase(d.fulfilled,(a,s)=>{a.branchList=s.payload.data,a.loading=!1}).addCase(d.pending,a=>{a.statisticLoading=!0}).addCase(c.fulfilled,(a,s)=>{a.loading=!1}).addCase(c.pending,a=>{a.loading=!0}).addCase(i.fulfilled,(a,s)=>{a.loading=!1}).addCase(i.pending,a=>{a.loading=!0})}}),{setBranchList:A,setSelectedBranch:T,setDialogToggle:G,setUsersList:k,setDialogMode:x,toggleDeleteConfirmation:P}=l.actions,E=l.reducer,R=w({data:E}),j=O;export{o as a,d as b,U as c,M as d,c as e,i as f,L as g,A as h,x as i,T as j,q as k,R as r,G as s,P as t,j as u};
