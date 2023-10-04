import{am as v,an as C,ao as A,ap as N,r as l,j as a,a as y,ab as w,ai as h,aq as L,c as S,ar as z,at as B}from"./index-b09faefa.js";import{C as E}from"./Views-57e82c67.js";import{A as T}from"./AdaptableCard-9a87f3ff.js";import{c as R,d as q}from"./KnowledgeBaseService-99b66490.js";import{U as H}from"./UsersAvatarGroup-47fd9ba7.js";import{M as O}from"./MediaSkeleton-c8e82dc6.js";import{T as d}from"./TextBlockSkeleton-44f5533a.js";import{C as Y}from"./Card-33431fc8.js";import{B as u}from"./Button-3bdf4581.js";import{I as D}from"./Input-8c731b0c.js";import{aU as I,aV as M}from"./index.esm-2c67faf2.js";import{H as P}from"./index-abb4ede3.js";import{T as U}from"./TextEllipsis-0afaf943.js";import{i as j}from"./isLastChild-83eb4c23.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index-2f1f758f.js";import"./useMergeRef-788c4cb0.js";import"./acronym-32cf8e6a.js";import"./Skeleton-5bf82d8e.js";import"./context-80e77f1b.js";import"./isNil-f81aee01.js";import"./get-263a9377.js";import"./toString-9cef9a7f.js";import"./_MapCache-a97510fd.js";const x="knowledgeBaseArticle",f=v(x+"/getArticle",async r=>(await R(r)).data),g=v(x+"/getOthersArticle",async r=>(await q(r)).data),F={loading:!1,otherLoading:!1,article:{},othersArticle:{relatedArticle:[],popularArticle:[]}},G=C({name:`${x}/state`,initialState:F,reducers:{},extraReducers:r=>{r.addCase(f.fulfilled,(e,s)=>{e.loading=!1,e.article=s.payload}).addCase(f.pending,e=>{e.loading=!0}).addCase(g.fulfilled,(e,s)=>{e.otherLoading=!1,e.othersArticle=s.payload}).addCase(g.pending,e=>{e.otherLoading=!0})}}),$=G.reducer,_=A({data:$}),p=N,J=()=>{const r=l.useRef(null),[e,s]=l.useState(""),i=l.useCallback(n=>{s(n)},[]),t=()=>{r.current&&(r.current.value="")};return a.jsxs(a.Fragment,{children:[a.jsxs(Y,{bordered:!0,className:"mt-8",bodyClass:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h5",{children:"Was this article helpful?"}),a.jsxs("p",{children:[e==="Y"?"1":"0"," out of"," ",e==="Y"?"1":"0"," found this helpful"]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(u,{icon:e==="Y"&&a.jsx(I,{}),variant:e==="Y"?"solid":"default",onClick:()=>i("Y"),children:a.jsx("span",{children:"Yes"})}),a.jsx(u,{icon:e==="N"&&a.jsx(M,{}),variant:e==="N"?"solid":"default",onClick:()=>i("N"),children:a.jsx("span",{children:"No"})})]})]}),a.jsxs("div",{className:"mt-12",children:[a.jsx("h3",{className:"mb-4",children:"Comments"}),a.jsx(D,{ref:r,textArea:!0,placeholder:"Enter your comment here..."}),a.jsx("div",{className:"mt-3 flex justify-end",children:a.jsx(u,{variant:"solid",onClick:t,children:"Submit"})})]})]})},K=({articleId:r})=>{const e=y(),s=p(c=>c.knowledgeBaseArticle.data.article),i=p(c=>c.knowledgeBaseArticle.data.loading),{search:t}=w();l.useEffect(()=>{n()},[t]);const n=()=>{r&&e(f({id:r}))};return a.jsxs(h,{loading:i,customLoader:a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsx(O,{}),a.jsx(d,{rowCount:6}),a.jsx(d,{rowCount:4}),a.jsx(d,{rowCount:8})]}),children:[a.jsx("h3",{children:s.title}),a.jsxs("div",{className:"flex items-center mt-4 gap-4",children:[a.jsx(H,{avatarProps:{size:40},users:s.authors||[]}),a.jsxs("div",{className:"text-xs",children:[a.jsxs("div",{className:"mb-1",children:["Created by:",a.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:s.createdBy})]}),a.jsxs("div",{children:[a.jsxs("span",{children:["Last updated: ",s.updateTime]}),a.jsx("span",{className:"mx-2",children:"•"}),a.jsxs("span",{children:[s.timeToRead," min read"]}),a.jsx("span",{className:"mx-2",children:"•"}),a.jsxs("span",{children:[s.viewCount," viewed"]})]})]})]}),a.jsxs("div",{className:"mt-8 prose dark:prose-invert max-w-none",children:[a.jsx("p",{children:P(s.content||"")}),a.jsx("p",{children:"Kopi-luwak, seasonal breve strong caffeine medium lungo grinder. Espresso filter, café au lait turkish, sweet, single shot half and half americano variety mocha extraction. Skinny to go, a brewed, mocha single origin, plunger pot cup strong white dripper. Single origin pumpkin spice, instant, cultivar americano crema aromatic bar café au lait."}),a.jsx("p",{children:"Acerbic frappuccino acerbic, flavour, in carajillo bar percolator aroma trifecta half and half et extraction barista, coffee affogato organic est latte wings breve lungo. Percolator, caramelization, foam organic, coffee frappuccino ristretto chicory seasonal cappuccino steamed grinder half and half foam mazagran fair trade, foam carajillo a in carajillo. Spoon medium ristretto irish dripper steamed, single shot, viennese, sit filter, flavour java cinnamon breve milk irish americano. Java doppio con panna, aged qui trifecta redeye beans, coffee trifecta dripper, bar variety saucer, a instant grinder wings flavour. Froth filter instant strong grinder saucer medium id that medium blue mountain, in, extra , aged lungo siphon, instant, strong, dripper siphon affogato seasonal mocha. Coffee qui so eu mocha decaffeinated, organic mazagran affogato, as seasonal kopi-luwak doppio con panna."}),a.jsx("p",{children:"Roast, breve, french press extraction and acerbic, con panna, cup skinny doppio aroma seasonal. Strong, coffee, milk, caffeine aftertaste body mazagran pumpkin spice irish affogato."}),a.jsx("p",{children:"Est java mug milk a cortado saucer so aroma con panna froth sweet con panna. Dripper single origin turkish shop in as froth black robusta doppio so roast medium cortado, variety con panna, barista carajillo café au lait so cortado pumpkin spice. Cappuccino qui organic doppio trifecta redeye rich, viennese, dark eu at as sit caramelization as, cortado to go bar mug coffee macchiato iced whipped. Siphon a breve chicory, dark, chicory, barista cup froth, caramelization whipped, caramelization siphon crema sugar, doppio cream turkish siphon a americano rich. Bar , macchiato roast, seasonal lungo milk, robusta, white milk, cup to go, flavour, spoon siphon est, froth, french press so, kopi-luwak mug foam sit sweet. Foam, caramelization dark cortado, brewed pumpkin spice turkish frappuccino single origin body turkish, macchiato, espresso variety macchiato, froth seasonal, crema robust con panna decaffeinated turkish organic medium. Barista et extraction, so organic aftertaste beans at, grounds as iced cinnamon, aged, spoon fair trade so shop mazagran."}),a.jsxs("p",{children:["Cappuccino, percolator latte viennese as, caffeine, sweet, a and, affogato, beans spoon and crema, body, to go sit chicory coffee robust dark. Et, to go java filter doppio single shot cup qui kopi-luwak, arabica aftertaste café au lait grounds arabica at medium americano iced siphon as saucer organic barista. Spoon aromatic latte filter, mazagran percolator siphon kopi-luwak, grounds at kopi-luwak frappuccino mazagran beans strong french press brewed."," "]}),a.jsxs("p",{children:[" ","Americano wings grinder variety id irish aftertaste iced, doppio mazagran, instant irish robust percolator sit foam latte viennese milk. Doppio chicory grounds to go steamed skinny mocha aged, robust skinny caramelization trifecta plunger pot single origin. Sweet cup cappuccino viennese lungo, spoon java white aftertaste frappuccino spoon froth fair trade flavour affogato pumpkin spice. Bar caffeine froth, coffee cinnamon coffee, in pumpkin spice, espresso, carajillo espresso seasonal café au lait sit carajillo. Extra skinny, wings dripper, froth plunger pot rich variety, single shot siphon frappuccino rich, and shop skinny cinnamon filter, grounds seasonal cup decaffeinated foam. Eu, rich arabica irish instant, lungo half and half seasonal, bar siphon cup espresso caramelization."," "]})]}),a.jsx(J,{})]})},b=({counts:r=2})=>a.jsx("div",{className:"flex flex-col mt-6",children:Array.from(new Array(r),(e,s)=>s+1).map((e,s)=>a.jsxs("div",{children:[a.jsx(d,{rowCount:2}),s!==r-1&&a.jsx("hr",{className:"my-6"})]},e))}),k=({data:r={},isLastChild:e})=>{const s=L(),i=(t="")=>{s(`/app/knowledge-base/article?id=${t}`)};return a.jsxs("div",{className:S("py-6 group cursor-pointer",!e&&"border-b border-gray-200 dark:border-gray-600"),onClick:()=>i(r.id),children:[a.jsx("h6",{className:"mb-1 group-hover:underline !text-sm",children:r.title}),a.jsx("p",{className:"mb-1",children:a.jsx(U,{text:r.content,maxTextCount:40})}),a.jsxs("span",{className:"text-xs",children:["Updated ",r.updateTime]})]})},Q=({articleId:r})=>{const e=y(),{popularArticle:s,relatedArticle:i}=p(o=>o.knowledgeBaseArticle.data.othersArticle),t=p(o=>o.knowledgeBaseArticle.data.otherLoading),{search:n}=w();l.useEffect(()=>{c()},[n]);const c=()=>{r&&e(g({id:r}))};return a.jsxs("div",{className:"lg:w-[400px] mt-6 ltr:lg:border-l rtl:lg:border-r border-gray-200 dark:border-gray-600 md:px-8",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h4",{children:"Related Topics"}),a.jsx(h,{customLoader:a.jsx(b,{}),loading:t,children:i==null?void 0:i.map((o,m)=>a.jsx(k,{data:o,isLastChild:j(i,m)},o.id))})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"Popular Topics"}),a.jsx(h,{customLoader:a.jsx(b,{counts:4}),loading:t,children:s==null?void 0:s.map((o,m)=>a.jsx(k,{data:o,isLastChild:j(s,m)},o.id))})]})]})};z("knowledgeBaseArticle",_);const V=()=>{const e=B().get("id");return a.jsx(E,{children:a.jsxs(T,{bodyClass:"lg:flex gap-4",children:[a.jsx("div",{className:"my-6 max-w-[800px] w-full mx-auto",children:a.jsx(K,{articleId:e})}),a.jsx(Q,{articleId:e})]})})},Ca=V;export{Ca as default};
