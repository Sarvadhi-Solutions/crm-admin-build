import{am as i,an as s,ao as g,ap as c}from"./index-7a16719d.js";import{e as n}from"./KnowledgeBaseService-6646d327.js";const o="knowledgeBaseManageArticles",t=i(o+"/getCategorizedArticles",async()=>(await n()).data),d={loading:!1,categorizedArticles:[],articleDeleteConfirmation:!1,categoryDeleteConfirmation:!1,categoryRenameDialog:!1,categoryAddDialog:!1,selected:{id:"",categoryValue:""}},r=s({name:`${o}/state`,initialState:d,reducers:{setCategorizedArticles:(a,e)=>{a.categorizedArticles=e.payload},toggleArticleDeleteConfirmation:(a,e)=>{a.articleDeleteConfirmation=e.payload},toggleCategoryDeleteConfirmation:(a,e)=>{a.categoryDeleteConfirmation=e.payload},toggleCategoryRenameDialog:(a,e)=>{a.categoryRenameDialog=e.payload},toggleAddCategoryDialog:(a,e)=>{a.categoryAddDialog=e.payload},setSelected:(a,e)=>{a.selected=e.payload}},extraReducers:a=>{a.addCase(t.fulfilled,(e,l)=>{e.loading=!1,e.categorizedArticles=l.payload}).addCase(t.pending,e=>{e.loading=!0})}}),{toggleArticleDeleteConfirmation:A,toggleCategoryDeleteConfirmation:f,toggleCategoryRenameDialog:p,toggleAddCategoryDialog:D,setSelected:u,setCategorizedArticles:z}=r.actions,y=r.reducer,S=g({data:y}),R=c;export{p as a,f as b,D as c,u as d,t as g,S as r,z as s,A as t,R as u};
