import{r as c,j as s}from"./index-dc23d4d5.js";import{B as o}from"./Button-2503e753.js";import{D}from"./Dialog-cf49f15b.js";import{t as V,N as E}from"./toast-f63a7bff.js";import{S as z}from"./Switcher-7ee0d497.js";import{A as g}from"./index-cd4f30c5.js";import{C as b}from"./Card-53030d97.js";import{i as F}from"./Views-6bb03ba3.js";import{e as T}from"./AccountServices-518563e1.js";import{c as v}from"./cloneDeep-9e6994f4.js";import"./index-45967eae.js";import"./CloseButton-0edfd0bd.js";import"./index.esm-915a2267.js";import"./useTimeout-5d92632c.js";import"./StatusIcon-2a070c6b.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-3f2f3d9e.js";import"./usePopper-72f5cea7.js";import"./index.esm-4e1e8bcb.js";import"./index-67754ed7.js";import"./_MapCache-2a76a3cc.js";import"./_getPrototype-4696ace3.js";const ts=()=>{var p,N;const[l,x]=c.useState({}),[C,f]=c.useState(!1),[t,k]=c.useState({}),[y,j]=c.useState(!1),I=async()=>{const e=await T();x(e.data)};c.useEffect(()=>{F(l)&&I()},[]);const w=(e,a,i)=>{x(d=>{const n=v(d),h=d[i].map(r=>((r==null?void 0:r.name)===a&&(r.active=!e),r));return n[i]=h,n})},u=(e,a)=>{f(!0),k({...e,installed:a})},m=()=>{f(!1)},A=e=>{j(!0),setTimeout(()=>{x(a=>{var n,h;const i=v(a),d=(n=a==null?void 0:a.available)==null?void 0:n.filter(r=>r.name!==e.name);return i.available=d,(h=i==null?void 0:i.installed)==null||h.push(e),i}),j(!1),m(),V.push(s.jsx(E,{title:"App installed",type:"success"}),{placement:"top-center"})},1e3)};return s.jsxs(s.Fragment,{children:[s.jsx("h5",{children:"Installed"}),s.jsx("div",{className:"grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4",children:(p=l==null?void 0:l.installed)==null?void 0:p.map(e=>s.jsx(b,{bodyClass:"p-0",footerClass:"flex justify-end p-2",footer:s.jsx(o,{variant:"plain",size:"sm",onClick:()=>u(e,!0),children:"View Intergration"}),children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(g,{className:"bg-transparent dark:bg-transparent",src:e.img}),s.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:s.jsx("h6",{children:e.name})})]}),s.jsx(z,{checked:e.active,onChange:a=>w(a,e.name,"installed")})]}),s.jsx("p",{className:"mt-6",children:e.desc})]})},e.name))}),s.jsxs("div",{className:"mt-10",children:[s.jsx("h5",{children:"Available"}),s.jsx("div",{className:"grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4",children:(N=l==null?void 0:l.available)==null?void 0:N.map(e=>s.jsx(b,{bodyClass:"p-0",footerClass:"flex justify-end p-2",footer:s.jsx(o,{variant:"plain",size:"sm",onClick:()=>u(e,!1),children:"View Intergration"}),children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(g,{className:"bg-transparent dark:bg-transparent",src:e.img}),s.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:s.jsx("h6",{children:e.name})})]}),s.jsx("p",{className:"mt-6",children:e.desc})]})},e.name))})]}),s.jsxs(D,{width:650,isOpen:C,onClose:m,onRequestClose:m,children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(g,{className:"bg-transparent dark:bg-transparent",src:t.img}),s.jsxs("div",{className:"ltr:ml-3 rtl:mr-3",children:[s.jsx("h6",{children:t.name}),s.jsx("span",{children:t.type})]})]}),s.jsxs("div",{className:"mt-6",children:[s.jsxs("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:["About ",t.name]}),s.jsx("p",{className:"mt-2 mb-4",children:"Wings medium plunger pot, redeye doppio siphon froth iced. Latte, and, barista cultivar fair trade grinder caramelization spoon. Whipped, grinder to go brewed est single shot half and half. Plunger pot blue mountain et blue mountain grinder carajillo, saucer half and half milk instant strong."}),s.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"Key Features"}),s.jsxs("ul",{className:"list-disc mt-2 ltr:ml-4 rtl:mr-4",children:[s.jsxs("li",{className:"mb-1",children:["Fair trade, cortado con panna, crema foam cinnamon aged."," "]}),s.jsxs("li",{className:"mb-1",children:["Mug saucer acerbic, caffeine organic kopi-luwak galão siphon."," "]}),s.jsxs("li",{className:"mb-1",children:["To go half and half cultivar single origin ut, french press."," "]}),s.jsxs("li",{className:"mb-1",children:["Mocha latte flavour cortado cup kopi-luwak."," "]})]})]}),s.jsxs("div",{className:"text-right mt-6",children:[s.jsx(o,{className:"ltr:mr-2 rtl:ml-2",variant:"plain",onClick:m,children:"Cancel"}),t!=null&&t.installed?s.jsx(o,{disabled:!0,variant:"solid",children:"Installed"}):s.jsx(o,{variant:"solid",loading:y,onClick:()=>A(t),children:"Install"})]})]})]})};export{ts as default};
