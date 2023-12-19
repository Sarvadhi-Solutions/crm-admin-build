import{am as x,an as f,ao as k,ap as C,a as m,r as p,j as e,aq as v,a$ as N,ai as S,ar as w}from"./index-04de45f1.js";import{C as h}from"./Views-9d427d6f.js";import{a as T,b as A}from"./KnowledgeBaseService-46f00752.js";import{I as H}from"./index-0dfb4b3d.js";import{I as q}from"./Input-177911dc.js";import{S as B}from"./Select-8dd681ec.js";import{B as I}from"./Button-c014eb4a.js";import{t as R,N as $}from"./toast-5c5a7d02.js";import{z as E,ag as L,al as D}from"./index.esm-dece01db.js";import{C as b}from"./Card-5dadf163.js";import{D as G}from"./DoubleSidedImage-60d51718.js";import{T as M}from"./Tag-b89b8728.js";import{U as P}from"./UsersAvatarGroup-a592a312.js";import"./context-3f43d22b.js";import"./isNil-2d09164b.js";import"./get-e02c019e.js";import"./toString-85ae3482.js";import"./_MapCache-593c8f28.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-352435f8.js";import"./CloseButton-c81f3a7a.js";import"./StatusIcon-43cda077.js";import"./chainedFunction-070f832c.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index-d960fe16.js";import"./useMergeRef-788c4cb0.js";import"./acronym-91ff8fec.js";const u="knowledgeBaseHelpCenter",d=x(u+"/getCategories",async()=>(await T()).data),c=x(u+"/queryArticles",async t=>(await A(t)).data),z={loading:!1,isSearchResult:!1,searchCategory:"",queryText:"",categories:[],articles:[]},y=f({name:`${u}/state`,initialState:z,reducers:{setSearchCategory:(t,a)=>{t.searchCategory=a.payload},setQueryText:(t,a)=>{t.queryText=a.payload},setSearch:(t,a)=>{t.isSearchResult=a.payload}},extraReducers:t=>{t.addCase(d.fulfilled,(a,s)=>{a.loading=!1,a.categories=s.payload}).addCase(d.pending,a=>{a.loading=!0}).addCase(c.fulfilled,(a,s)=>{a.loading=!1,a.articles=s.payload}).addCase(c.pending,a=>{a.loading=!0})}}),{setSearchCategory:F,setQueryText:O,setSearch:j}=y.actions,Q=y.reducer,U=k({data:Q}),i=C,g=[{label:"All",value:""},{label:"Survey",value:"survey"},{label:"Themes",value:"themes"},{label:"Security",value:"security"},{label:"Integration",value:"integration"},{label:"Media",value:"media"},{label:"Analytic",value:"analytic"},{label:"Chatbot",value:"chatbot"},{label:"Commission",value:"commission"}],W=()=>{const t=m(),a=i(n=>n.knowledgeBaseHelpCenter.data.searchCategory),s=p.useRef(null),o=()=>{if(s.current){const n=s.current.value;n?(t(c({queryText:n,category:a})),t(O(n)),t(j(!0))):R.push(e.jsx($,{title:"Please key in any text to search",type:"danger"}),{placement:"top-center"})}},r=n=>{n&&t(F(n.value))};return e.jsx("section",{className:"flex flex-col justify-center h-[200px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600",children:e.jsxs(h,{className:"flex flex-col items-center px-4",children:[e.jsx("h3",{className:"mb-6 text-center",children:"Get your question answered quickly here!"}),e.jsxs(H,{className:"mb-4 xl:min-w-[800px]",children:[e.jsx(q,{ref:s,placeholder:"Search..."}),e.jsx("div",{className:"min-w-[120px]",children:e.jsx(B,{isSearchable:!1,placeholder:"Category",options:g,value:g.filter(n=>n.value===a),onChange:r})}),e.jsx(I,{icon:e.jsx("span",{className:"mx-4",children:e.jsx(E,{})}),onClick:o})]})]})})},_=({type:t})=>{const a=p.useMemo(()=>({src:`/img/thumbs/help-center-category-${t}.png`,darkModeSrc:`/img/thumbs/help-center-category-${t}-dark.png`}),[t]);return e.jsx(G,{...a,alt:""})},J=t=>{const{data:a=[]}=t,s=m(),o=r=>{s(c({queryText:"",category:r.toLowerCase()})),s(j(!0))};return e.jsx("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-4 gap-4",children:a.map(r=>e.jsxs(b,{clickable:!0,onClick:()=>o(r.name),children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsx(_,{type:r.id})}),e.jsxs("div",{className:"text-center",children:[e.jsx("h5",{className:"mb-1",children:r.name}),e.jsxs("strong",{children:[r.articleCounts," "]}),e.jsx("span",{children:"Articles"})]})]},r.id))})},K=t=>{switch(t){case"themes":return"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100";case"survey":return"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 dark:bg-blue-500/20 dark:text-blue-100";case"security":return"text-purple-500 bg-purple-100 dark:bg-purple-500/20 dark:text-purple-100";case"integration":return"text-pink-500 bg-pink-100 dark:bg-pink-500/20 dark:text-pink-100";case"media":return"text-cyan-500 bg-cyan-100 dark:bg-cyan-500/20 dark:text-cyan-100";case"analytic":return"text-orange-500 bg-orange-100 dark:bg-orange-500/20 dark:text-orange-100";case"chatbot":return"text-indigo-500 bg-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-100";case"commission":return"text-teal-500 bg-teal-100 dark:bg-teal-500/20 dark:text-teal-100";default:return""}},V=t=>{const{data:a=[]}=t,s=v(),o=r=>{s(`/app/knowledge-base/article?${N({id:r})}`)};return e.jsx(e.Fragment,{children:a.map(r=>e.jsx("article",{children:e.jsx(b,{clickable:!0,className:"group mb-4",onClick:()=>o(r.id),children:e.jsxs("div",{className:"px-8 py-3 relative",children:[r.starred&&e.jsx("div",{className:"absolute ltr:left-0 rtl:right-0",children:e.jsx("div",{className:"text-amber-500 p-0.5 rounded-full border border-amber-500 mt-1",children:e.jsx(L,{})})}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h5",{className:"group-hover:underline",children:r.title}),e.jsx(M,{className:`border-0 rounded capitalize ${K(r.category)}`,children:r.category})]}),e.jsx("p",{children:r.content.length>230?r.content.substring(0,229)+"...":r.content}),e.jsxs("div",{className:"flex items-center justify-between mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Written by:"}),e.jsx(P,{avatarProps:{size:25},users:r.authors||[]})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(D,{className:"text-lg"}),e.jsxs("span",{children:["Updated ",r.updateTime]})]})})]})]})})},r.id))})},X=()=>{const t=m(),a=i(l=>l.knowledgeBaseHelpCenter.data.categories),s=i(l=>l.knowledgeBaseHelpCenter.data.articles),o=i(l=>l.knowledgeBaseHelpCenter.data.loading),r=i(l=>l.knowledgeBaseHelpCenter.data.queryText),n=i(l=>l.knowledgeBaseHelpCenter.data.isSearchResult);return p.useEffect(()=>{a.length===0&&t(d())},[t,a.length]),e.jsx(S,{loading:o,children:n?e.jsx("section",{className:"max-w-[1000px] mx-auto",children:s.length>0?e.jsxs(e.Fragment,{children:[r&&e.jsxs("h4",{className:"mb-6",children:[s.length," result found for ","'",r,"'"]}),e.jsx(V,{data:s})]}):e.jsxs("h4",{className:"text-center",children:["No result found for ","'",r,"'"]})}):e.jsx(J,{data:a})})};w("knowledgeBaseHelpCenter",U);const Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsx(h,{children:e.jsx("div",{className:"mt-8 px-4",children:e.jsx(X,{})})})]}),Be=Y;export{Be as default};
