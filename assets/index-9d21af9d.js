import{j as e,r as c,w as v,u as g,ah as T,p as C}from"./index-814886c9.js";import{i as w,C as y}from"./Views-fed2ee34.js";import{B as S}from"./Button-3b704f3e.js";import{L as D}from"./Logo-e02794bd.js";import{T as p}from"./index-d9751af2.js";import{h as M,u as F,g as I,f as u}from"./index-e8e6816d.js";import{N as P}from"./react-number-format.es-38f310cf.js";import{i as R}from"./isLastChild-83eb4c23.js";import{b as H}from"./AccountServices-ab810756.js";import{S as L,R as E}from"./index.esm-d47a8d30.js";import{u as Y}from"./useThemeClass-4e25280b.js";import{C as $}from"./Card-dd06927c.js";import"./index.esm-6517337b.js";const{Tr:d,Th:A,Td:n,THead:B,TBody:G,TFoot:O}=p,x=({label:t,value:a})=>e.jsxs(d,{children:[e.jsx(n,{className:"!border-t-0",colSpan:2}),e.jsx(n,{className:"font-semibold !border-t-0",children:t}),e.jsx(n,{className:"!py-5 !border-t-0",children:e.jsx(m,{amount:a})})]}),q=({row:t})=>e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("h6",{className:"mb-2",children:t.name}),Object.keys(t.details).map((a,o)=>e.jsxs("div",{className:"mb-1",children:[e.jsxs("span",{className:"capitalize",children:[a,": "]}),t.details[a].map((r,s)=>e.jsxs(c.Fragment,{children:[e.jsx("span",{className:"font-semibold",children:r}),!R(t.details[a],s)&&e.jsx("span",{children:", "})]},r+s))]},a+o))]})}),m=({amount:t=0})=>e.jsx(P,{displayType:"text",value:(Math.round(t*100)/100).toFixed(2),prefix:"$",thousandSeparator:!0}),i=M(),z=[i.accessor("name",{header:"Product",cell:t=>{const a=t.row.original;return e.jsx(q,{row:a})}}),i.accessor("price",{header:"Price",cell:t=>{const a=t.row.original;return e.jsx(m,{amount:a.price})}}),i.accessor("quantity",{header:"Quantity"}),i.accessor("total",{header:"Total",cell:t=>{const a=t.row.original;return e.jsx(m,{amount:a.price})}})],Q=({products:t=[],summary:a={}})=>{const o=F({data:t,columns:z,getCoreRowModel:I()});return e.jsxs(p,{children:[e.jsx(B,{children:o.getHeaderGroups().map(r=>e.jsx(d,{children:r.headers.map(s=>e.jsx(A,{colSpan:s.colSpan,children:u(s.column.columnDef.header,s.getContext())},s.id))},r.id))}),e.jsx(G,{children:o.getRowModel().rows.map(r=>e.jsx(d,{children:r.getVisibleCells().map(s=>e.jsx(n,{children:u(s.column.columnDef.cell,s.getContext())},s.id))},r.id))}),e.jsxs(O,{children:[e.jsx(x,{label:"Subtotal",value:a.subTotal}),e.jsx(x,{label:"Delivery fee",value:a.deliveryFees}),e.jsx(x,{label:"Tax(6%)",value:a.tax}),e.jsxs(d,{children:[e.jsx(n,{className:"!border-t-0",colSpan:2}),e.jsx(n,{className:"font-semibold text-base",children:"Grand Total"}),e.jsx(n,{className:"font-semibold text-base !py-5",children:e.jsx(m,{amount:a.total})})]})]})]})},V=()=>{var h;const{textTheme:t}=Y(),a=v(),[o,r]=c.useState(!1),[s,f]=c.useState({}),b=g(l=>l.theme.mode);c.useEffect(()=>{N()},[]);const N=async()=>{const l=a.pathname.substring(a.pathname.lastIndexOf("/")+1);if(l){r(!0);const j=await H({id:l});j&&(r(!1),f(j.data))}};return e.jsx(T,{loading:o,children:!w(s)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4 mb-10",children:[e.jsxs("div",{children:[e.jsx(D,{className:"mb-3",mode:b}),e.jsx("address",{className:"not-italic",children:e.jsxs("div",{children:[e.jsx("h5",{children:"Elstar, Inc."}),e.jsx("br",{}),e.jsx("span",{children:"9498 Harvard Street"}),e.jsx("br",{}),e.jsx("span",{children:"Fairfield, Chicago Town 06824"}),e.jsx("br",{}),e.jsx("abbr",{title:"Phone",children:"Phone:"}),e.jsx("span",{children:"(123) 456-7890"})]})})]}),e.jsxs("div",{className:"my-4",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs("h4",{children:["Invoice #",s==null?void 0:s.id]}),e.jsxs("span",{children:["Date:"," ",C.unix(s.dateTime).format("dddd, DD MMMM, YYYY")]})]}),e.jsx("h6",{children:s.recipient}),e.jsxs("div",{className:"mt-4 flex",children:[e.jsx(L,{className:`text-xl ${t}`}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:(h=s==null?void 0:s.address)==null?void 0:h.map(l=>e.jsx("div",{className:"mb-1",children:l},l))})]}),e.jsxs("div",{className:"mt-4 flex",children:[e.jsx(E,{className:`text-xl ${t}`}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:s.phoneNumber})]})]})]}),e.jsx(Q,{products:s==null?void 0:s.product,summary:s.paymentSummary}),e.jsxs("div",{className:"print:hidden mt-6 flex items-center justify-between",children:[e.jsx("small",{className:"italic",children:"Invoice was created on a computer and is valid without the signature and seal."}),e.jsx(S,{variant:"solid",onClick:()=>window.print(),children:"Print"})]})]})})},k=()=>e.jsx(y,{className:"h-full",children:e.jsx($,{className:"h-full",bodyClass:"h-full",children:e.jsx(V,{})})}),ne=k;export{ne as default};
