import{u as T,j as e,h as L,c as u,v as _,r as M,w as A,x as H,y as N,g as w}from"./index-349191dc.js";import{L as C}from"./Logo-b29410b0.js";import{u as d,a as z,A as p}from"./AuthorityCheck-a8986fa2.js";import{D as j}from"./index-6e1d0772.js";import{M as k}from"./index-453239c5.js";import{j as K}from"./index.esm-cb282f8a.js";const V=()=>{const r=T(s=>s.theme.mode);return e.jsx(C,{mode:r,className:"hidden md:block"})},y=({path:r,children:s,isExternalLink:i,className:n})=>e.jsx(L,{className:u("h-full w-full flex items-center",n),to:r,target:i?"_blank":"",children:e.jsx("span",{children:s})}),E=({nav:r})=>{const{title:s,translateKey:i,path:n,key:x,isExternalLink:a}=r,{t:m}=d(),l=m(i,s);return e.jsx(j.Item,{eventKey:x,className:u(n&&"px-0"),children:n?e.jsx(y,{path:n,className:u(n&&"px-2"),isExternalLink:a,children:l}):e.jsx("span",{children:l})})},I=({nav:r,isLink:s,menuVariant:i,index:n,activeMenu:x,onClick:a})=>{const{title:m,translateKey:l,icon:t,path:c,isExternalLink:o}=r,{t:h}=d(),f=h(l,m),g=t&&e.jsx("span",{className:"text-2xl",children:z[t]});return e.jsx(e.Fragment,{children:c&&s?e.jsx(y,{path:c,isExternalLink:o,children:e.jsx(k,{variant:i,isActive:n===x,onSelect:()=>{a&&a(n)},children:e.jsxs("span",{className:"flex items-center gap-2",children:[g,f]})})}):e.jsxs(k,{variant:i,children:[g,e.jsx("span",{children:f})]})})},$=({menuVariant:r,userAuthority:s=[]})=>{const{t:i}=d(),{navigationConfig:n}=_(),[x,a]=M.useState(0),m=A();M.useEffect(()=>{const t=n.findIndex(c=>c.path===m.pathname);a(t)},[]);const l=t=>{a(t)};return e.jsx("span",{className:"flex items-center",children:n.map((t,c)=>t.type===H||t.type===N?e.jsx(p,{authority:t.authority,userAuthority:s,children:e.jsx(j,{trigger:"hover",renderTitle:e.jsx(I,{menuVariant:r,nav:t}),children:t.subMenu.map(o=>e.jsx(p,{authority:o.authority,userAuthority:s,children:o.subMenu.length>0?e.jsx(j.Menu,{title:i(o.translateKey,o.title),children:o.subMenu.map(h=>e.jsx(p,{authority:h.authority,userAuthority:s,children:e.jsx(E,{nav:h})},h.key))}):e.jsx(E,{nav:o},o.key)},o.key))})},t.key):t.type===w?e.jsx(p,{authority:t.authority,userAuthority:s,children:e.jsx(I,{isLink:!0,nav:t,menuVariant:r,index:c,activeMenu:x,onClick:l})},t.key):e.jsx(e.Fragment,{}))})},q=r=>{T(n=>n.theme.mode);const{className:s,...i}=r;return e.jsx("div",{className:`${u("text-2xl",s)} cursor-pointer`,...i,children:e.jsx(L,{className:"flex h-full w-full px-2",to:"/app/crm/setting",children:e.jsx(K,{})})})};export{$ as H,q as S,V as a};
