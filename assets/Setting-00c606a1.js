import{u as g,j as e,h as k,c as x,v as E,w as I,x as L,g as y}from"./index-a20ba26a.js";import{L as _}from"./Logo-80ed5376.js";import{D as m}from"./index-9864d878.js";import{u as h,a as H,A as c}from"./AuthorityCheck-8c177a3d.js";import{M as u}from"./index-35476e3e.js";import{j as N}from"./index.esm-be6144e0.js";const D=()=>{const r=g(t=>t.theme.mode);return e.jsx(_,{mode:r,className:"hidden md:block"})},M=({path:r,children:t,isExternalLink:l,className:i})=>e.jsx(k,{className:x("h-full w-full flex items-center",i),to:r,target:l?"_blank":"",children:e.jsx("span",{children:t})}),d=({nav:r,isLink:t,manuVariant:l})=>{const{title:i,translateKey:s,icon:n,path:o,isExternalLink:a}=r,{t:T}=h(),p=T(s,i),j=n&&e.jsx("span",{className:"text-2xl",children:H[n]});return e.jsx(e.Fragment,{children:o&&t?e.jsx(M,{path:o,isExternalLink:a,children:e.jsx(u,{variant:l,children:e.jsxs("span",{className:"flex items-center gap-2",children:[j,p]})})}):e.jsxs(u,{variant:l,children:[j,e.jsx("span",{children:p})]})})},f=({nav:r})=>{const{title:t,translateKey:l,path:i,key:s,isExternalLink:n}=r,{t:o}=h(),a=o(l,t);return e.jsx(m.Item,{eventKey:s,className:x(i&&"px-0"),children:i?e.jsx(M,{path:i,className:x(i&&"px-2"),isExternalLink:n,children:a}):e.jsx("span",{children:a})})},Y=({manuVariant:r,userAuthority:t=[]})=>{const{t:l}=h(),{navigationConfig:i}=E();return e.jsx("span",{className:"flex items-center",children:i.map(s=>s.type===I||s.type===L?e.jsx(c,{authority:s.authority,userAuthority:t,children:e.jsx(m,{trigger:"hover",renderTitle:e.jsx(d,{manuVariant:r,nav:s}),children:s.subMenu.map(n=>e.jsx(c,{authority:n.authority,userAuthority:t,children:n.subMenu.length>0?e.jsx(m.Menu,{title:l(n.translateKey,n.title),children:n.subMenu.map(o=>e.jsx(c,{authority:o.authority,userAuthority:t,children:e.jsx(f,{nav:o})},o.key))}):e.jsx(f,{nav:n},n.key)},n.key))})},s.key):s.type===y?e.jsx(c,{authority:s.authority,userAuthority:t,children:e.jsx(d,{isLink:!0,nav:s,manuVariant:r})},s.key):e.jsx(e.Fragment,{}))})},F=r=>{g(i=>i.theme.mode);const{className:t,...l}=r;return e.jsx("div",{className:`${x("text-2xl",t)} cursor-pointer`,...l,children:e.jsx(k,{className:"flex h-full w-full px-2",to:"/app/crm/setting",children:e.jsx(N,{})})})};export{Y as H,F as S,D as a};
