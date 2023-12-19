import{r as o,ax as y,c as C,j as e}from"./index-94b34292.js";import{M as P}from"./index-3085a00b.js";import{X as D}from"./index.esm-782de75a.js";import{m as M}from"./Views-fb5a8bd1.js";import{u as S}from"./useUniqueId-ed6d8ed2.js";const x=o.createContext({}),b=x.Provider,w=x.Consumer,N=o.forwardRef((a,s)=>{const{children:l,className:t,defaultActiveKeys:r=[],defaultExpandedKeys:c=[],menuItemHeight:u=40,onSelect:n,sideCollapsed:i=!1,variant:m="light",...f}=a,d="menu",{themeColor:p,primaryColorLevel:h}=y(),v=C(d,(()=>m==="themed"?`bg-${p}-${h} ${d}-${m}`:`${d}-${m}`)(),t);return e.jsx("nav",{ref:s,className:v,...f,children:e.jsx(b,{value:{onSelect:n,menuItemHeight:u,variant:m,sideCollapsed:i,defaultExpandedKeys:c,defaultActiveKeys:r},children:l})})});N.displayName="Menu";const I=o.createContext(null),A=I.Provider,R=I.Consumer,$=o.createContext(!1),k=$.Provider,q=$.Consumer,G=a=>{const{eventKey:s,...l}=a;return e.jsx(w,{children:t=>e.jsx(R,{children:()=>e.jsx(q,{children:()=>e.jsx(P,{menuItemHeight:t.menuItemHeight,variant:t.variant,isActive:t.defaultActiveKeys.includes(s),eventKey:s,onSelect:t.onSelect,...l})})})})};G.displayName="MenuItem";const E=a=>{const{children:s,className:l,eventKey:t,expanded:r=!1,label:c=null,onToggle:u}=a,[n,i]=o.useState(r),{menuItemHeight:m,variant:f,sideCollapsed:d,defaultExpandedKeys:p}=o.useContext(x),{direction:h}=y();o.useEffect(()=>{p.includes(t)&&i(!0),r!==n&&i(!0)},[r,u,t,p]);const g=K=>{typeof u=="function"&&u(!n,K),i(!n)},v=C("menu-collapse-item",`menu-collapse-item-${f}`,l);return e.jsxs("div",{className:"menu-collapse",children:[e.jsxs("div",{className:v,role:"presentation",onClick:g,children:[e.jsx("span",{className:"flex items-center",children:c}),e.jsx(M.span,{className:"text-lg mt-1",initial:{transform:"rotate(0deg)"},animate:{transform:n?"rotate(-180deg)":"rotate(0deg)"},transition:{duration:.15},children:d?null:e.jsx(D,{})})]}),e.jsx(k,{value:n,children:e.jsx(M.ul,{className:h==="rtl"?"mr-5":"ml-5",initial:{opacity:0,height:0,overflow:"hidden"},animate:{opacity:n?1:0,height:n?"auto":0},transition:{duration:.15},children:s})})]})};E.displayName="MenuCollapse";const H=a=>{const{label:s,children:l,className:t}=a,{variant:r,sideCollapsed:c}=o.useContext(x),n=C("menu-group",t),i=S("entity-header-");return e.jsxs("div",{className:n,children:[s&&!c&&e.jsx("div",{className:C("menu-title",`menu-title-${r}`),id:i,children:s}),e.jsx(A,{value:null,children:e.jsx("ul",{children:l})})]})};H.displayName="MenuGroup";const j=N;j.MenuItem=G;j.MenuCollapse=E;j.MenuGroup=H;export{j as M};
