import{am as g,an as N,ao as v,ap as b,j as s,ar as y,a as C,r as D,ai as A}from"./index-f40e4d75.js";import{b as S}from"./CryptoService-a4b904e3.js";import{C as d}from"./Card-902c739e.js";import{B as P}from"./Badge-6fa7c653.js";import{C as u}from"./Chart-c1cd69ed.js";import{i as V}from"./Views-4f4cfc12.js";import{C as R}from"./chart.constant-d3a29041.js";import{R as k}from"./RecentAcivity-05323973.js";import{A as h}from"./index-3d26675f.js";import{o as E,aP as O}from"./index.esm-0d86f991.js";import"./chart.config-31884a50.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";const f="cryptoPortfolio",n=g(f+"/getPortfolioData",async()=>(await S()).data),w={loading:!0,portfolioData:{}},$=N({name:`${f}/state`,initialState:w,reducers:{},extraReducers:e=>{e.addCase(n.fulfilled,(a,t)=>{a.loading=!1,a.portfolioData=t.payload}).addCase(n.pending,a=>{a.loading=!0})}}),B=$.reducer,L=v({data:B}),j=b,T=({data:e={},className:a})=>{var t,c,i,o;return s.jsxs(d,{className:a,children:[s.jsx("h4",{children:"Assets"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",children:!V(e)&&s.jsxs(s.Fragment,{children:[s.jsx(u,{donutTitle:`$${(t=e.values)==null?void 0:t.reduce((r,l)=>r+l,0)}`,donutText:"Assets",series:e.values,customOptions:{labels:e.labels},type:"donut",height:230}),s.jsx("div",{children:((c=e.values)==null?void 0:c.length)===((i=e.coinValues)==null?void 0:i.length)&&s.jsx("div",{className:"mt-6",children:(o=e.values)==null?void 0:o.map((r,l)=>{var x,m,p;return s.jsxs("div",{className:"flex justify-between mb-6",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsx(P,{className:"mt-1.5",badgeStyle:{backgroundColor:R[l]}}),s.jsxs("div",{children:[s.jsx("h6",{className:"font-bold text-sm",children:(x=e.labels)==null?void 0:x[l]}),s.jsxs("p",{children:[(m=e.coinValues)==null?void 0:m[l]," ",(p=e.coinSymbol)==null?void 0:p[l]]})]})]},r),s.jsxs("span",{className:"font-semibold self-end",children:["$",r]})]},l)})})})]})})]})},U=({data:e={},className:a})=>s.jsxs(d,{className:a,children:[s.jsx("h4",{children:"Statistic"}),s.jsx("div",{className:"mt-4",children:s.jsx(u,{series:e.series,xAxis:e.date,height:"350px"})})]}),z=({data:e={},className:a})=>s.jsxs(d,{className:a,bodyClass:"h-full flex flex-col justify-between",children:[s.jsx("h4",{children:"Account Values"}),s.jsxs("div",{children:[s.jsx("p",{className:"mb-1",children:"Net Value"}),s.jsxs("h3",{className:"font-bold flex items-end gap-1",children:[s.jsx("span",{children:e.netValue}),s.jsx("span",{className:"text-sm",children:"USD"})]})]}),s.jsxs("div",{className:"mt-4 flex flex-col gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{children:s.jsx(h,{size:45,className:"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100",icon:s.jsx(E,{className:"text-2xl"})})}),s.jsxs("div",{children:[s.jsx("p",{children:"Coins value"}),s.jsxs("h5",{className:"flex items-end gap-1",children:[s.jsx("span",{children:e.coinValue}),s.jsx("span",{className:"text-sm",children:"USD"})]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{children:s.jsx(h,{size:45,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:s.jsx(O,{className:"text-2xl"})})}),s.jsxs("div",{children:[s.jsx("p",{children:"Cash Balance"}),s.jsxs("h5",{className:"flex items-end gap-1",children:[s.jsx("span",{children:e.cashBalance}),s.jsx("span",{className:"text-sm",children:"USD"})]})]})]})]})]});y("cryptoPortfolio",L);const H=()=>{const e=C(),{assetsData:a,overviewData:t,accountValueData:c,recentAcivity:i}=j(l=>l.cryptoPortfolio.data.portfolioData),o=j(l=>l.cryptoPortfolio.data.loading);D.useEffect(()=>{r()},[]);const r=()=>{e(n())};return s.jsxs(A,{loading:o,children:[s.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4",children:[s.jsx(T,{className:"2xl:col-span-8 xl:col-span-7",data:a}),s.jsx(z,{className:"2xl:col-span-3 xl:col-span-4",data:c})]}),s.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4 mt-4",children:[s.jsx(U,{className:"2xl:col-span-8 xl:col-span-7",data:t}),s.jsx(k,{className:"2xl:col-span-3 xl:col-span-4",data:i})]})]})},ls=H;export{ls as default};
