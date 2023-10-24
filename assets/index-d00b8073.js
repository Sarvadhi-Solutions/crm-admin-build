import{r as e,j as n,ax as de,c as D,aB as me,aC as fe}from"./index-c77e9099.js";import{u as oe}from"./useUncertainRef-dd8a1351.js";import{i as V}from"./isNil-04bb82de.js";import{u as $}from"./useUniqueId-3d091906.js";import{A as Ce}from"./index-6651b5a0.js";import{m as pe}from"./Views-be916da3.js";import{c as K}from"./chainedFunction-070f832c.js";import{U as re,c as le,V as xe,W as ve}from"./index.esm-4b0bd194.js";import{M as te}from"./index-862fd306.js";import{u as ge}from"./useRootClose-7bb7783f.js";const Q=e.createContext(null),he=Q.Provider,q=e.createContext({}),ae=q.Provider;q.Consumer;function Z(r){const[i,b]=e.useState(!1),[o,g]=e.useState([]),[m,l]=e.useState(null),a=e.useRef(null),p=e.useCallback((t,s)=>{g(v=>[...v,{element:t,props:s}])},[]),f=e.useCallback(t=>{g(s=>s.filter(v=>{var d;return((d=v==null?void 0:v.element)==null?void 0:d.id)!==t}))},[]),x=e.useCallback(()=>{requestAnimationFrame(()=>{var t;document.activeElement!==r.current&&(a.current=document.activeElement,(t=r.current)==null||t.focus())})},[r]),u=e.useCallback(t=>{const s=o.indexOf(t);s!==-1&&(l(s),x())},[o,x]),c=e.useCallback((t,s)=>{var v;for(let d=t;d>-1&&d<o.length;d+=s)if(!((v=o[d].props)!=null&&v.disabled))return d;return null},[o]),M=e.useCallback(t=>{if(V(t))l(null),x();else{let s;t===0?s=c(0,1):t===-1&&(s=c(o.length-1,-1)),V(s)||u(o[s])}},[o,u,x,c]),w=e.useCallback(()=>{b(!0),x()},[x]),E=e.useCallback(()=>{b(!1),l(null),requestAnimationFrame(()=>{var t;(t=a.current)==null||t.focus()})},[]);return{open:i,items:o,activeItemIndex:m,registerItem:p,unregisterItem:f,focusItemAt:M,openMenu:w,closeMenu:E}}const J=e.forwardRef((r,i)=>{const{children:b,activeKey:o,onSelect:g,hidden:m,placement:l,menuClass:a,...p}=r,f=oe(i),x=$("menu-"),u=Z(f),c=t=>{const s=`rotateX(${t}deg)`;return l&&l.includes("center")?`${s} translateX(-50%)`:s},M={opacity:1,visibility:"visible",transform:c(0)},w={opacity:0,visibility:"hidden",transform:c(40)},E=w;return n.jsx(he,{value:{activeKey:o,onSelect:g},children:n.jsx(ae,{value:u,children:n.jsx(Ce,{mode:"wait",children:!m&&n.jsx(pe.ul,{ref:f,id:x,initial:E,animate:M,exit:w,transition:{duration:.15,type:"tween"},className:a,...p,children:b})})})})});J.displayName="DropdownInnerMenu";const X=e.createContext(null);X.Provider;X.Consumer;const{DEFAULT:be,DIVIDER:se,HEADER:Y,CUSTOM:z}=me,ee=e.forwardRef((r,i)=>{const{asElement:b="li",children:o,active:g,disabled:m,className:l,submenu:a,style:p,eventKey:f,onClick:x,onSelect:u,variant:c=be,...M}=r,{mode:w,direction:E}=de(),t=oe(i),s=$("menu-item-"),v=e.useRef(null),d=e.useContext(X),C=e.useContext(Q),_=e.useContext(q),h=Z(v),F=h.open,y=g||!V(C==null?void 0:C.activeKey)&&(C==null?void 0:C.activeKey)===f||!V(d==null?void 0:d.activeKey)&&(d==null?void 0:d.activeKey)===f,N=e.useCallback(()=>{a&&(h.openMenu(),h.focusItemAt(0))},[a,h]),H=e.useCallback(A=>{var U;u==null||u(f,A),(U=C==null?void 0:C.onSelect)==null||U.call(C,f,A)},[f,u,C]),B=e.useCallback(A=>{m||(a?N():H(A))},[m,a,N,H]),j=e.useCallback(()=>{a&&h.openMenu()},[a,h]),L=e.useCallback(()=>{a&&h.closeMenu()},[a,h]),I={onClick:K(B,x)},{registerItem:R,unregisterItem:T}=_??{};if(a&&(I.onMouseOver=j,I.onMouseOut=L),e.useEffect(()=>(c!==se&&c!==Y&&(R==null||R(t.current,{disabled:m})),()=>{T==null||T(s)}),[R,T,t,s,m,c]),c===se||c===Y||c===z)return n.jsx(b,{ref:t,id:s,style:p,className:D(`menu-item-${c}`,l),...c===z?I:{},...M,children:(c===Y||c===z)&&o});function S(){return e.isValidElement(o)?e.cloneElement(o):o}function k(){return a?n.jsx(ae,{value:h,children:e.cloneElement(a,{ref:v,hidden:!F})}):null}return a?n.jsxs("li",{...M,style:p,className:"relative",...I,children:[n.jsxs(te,{ref:t,asElement:"div",id:s,isActive:y,eventKey:f,variant:w,className:D("dropdown-submenu-item",l),children:[n.jsx("span",{children:o}),E==="rtl"?n.jsx(re,{}):n.jsx(le,{})]}),k()]}):n.jsxs(te,{ref:t,asElement:"li",style:p,isActive:y,disabled:m,eventKey:f,variant:w,className:l,...I,...M,children:[S(),k()]})});ee.displayName="DropdownItem";const ne=e.forwardRef((r,i)=>{const{eventKey:b,title:o,className:g,placement:m,...l}=r,a=e.useContext(Q),p="dropdown-menu",x=D(p,m,g),u=D(p,"dropdown-submenu"),c=n.jsx(J,{ref:i,className:u,placement:m,...l});if(a){const M=D(g);return n.jsx(ee,{className:M,submenu:c,eventKey:b,children:o})}return n.jsx(J,{ref:i,className:x,placement:m,...l})});ne.displayName="DropdownMenu";const Me=({placement:r,children:i})=>r&&r.includes("middle-start")?n.jsxs(n.Fragment,{children:[i,n.jsx(le,{})]}):r&&r.includes("middle-end")?n.jsxs(n.Fragment,{children:[n.jsx(re,{}),i]}):r&&r.includes("top")?n.jsxs(n.Fragment,{children:[i,n.jsx(xe,{})]}):n.jsxs(n.Fragment,{children:[i,n.jsx(ve,{})]}),ce=e.forwardRef((r,i)=>{const{className:b,renderTitle:o,children:g,placement:m="bottom-start",disabled:l,toggleClassName:a,...p}=r,u=D("dropdown-toggle",b,a,l&&"dropdown-toggle-disabled"),c=D(u,"dropdown-toggle-default");return o?n.jsx("div",{className:u,...p,ref:i,children:o}):n.jsx("div",{ref:i,className:c,...p,children:n.jsx("span",{className:"flex items-center",children:n.jsx(Me,{placement:m,children:g})})})});ce.displayName="DropdownToggle";function G(r,i){return Array.isArray(i)?i.indexOf(r)>=0:r===i}const{BOTTOM_START:we}=fe,je="click",Ee="hover",ye="context",ie=e.forwardRef((r,i)=>{const{title:b,children:o,menuClass:g,menuStyle:m,disabled:l,renderTitle:a,placement:p=we,activeKey:f,toggleClassName:x,trigger:u="click",style:c,onClick:M,onMouseEnter:w,onMouseLeave:E,onContextMenu:t,onSelect:s,onOpen:v,onClose:d,onToggle:C,..._}=r,h=e.useRef(null),F=e.useRef(null),y=Z(h),N=y.open,H=$("dropdown-toggle-"),B=$("base-menu-"),j=e.useCallback(O=>{const P=typeof O>"u"?!N:O,W=P?v:d;W==null||W(),C==null||C(P),P?y.openMenu():y.closeMenu()},[d,v,C,N,y]),L=e.useCallback(O=>{O.preventDefault(),!l&&j()},[l,j]),I=e.useCallback(()=>{l||j(!0)},[l,j]),R=e.useCallback(()=>{l||j(!1)},[l,j]),T=(O,P)=>{s==null||s(O,P),j(!1)};ge(()=>j(),{triggerTarget:F,overlayTarget:h,disabled:!N,listenEscape:!1});const S={onMouseEnter:w,onMouseLeave:E},k={onClick:M,onContextMenu:t};G(je,u)&&(k.onClick=K(L,k.onClick)),G(ye,u)&&(k.onContextMenu=K(L,t)),G(Ee,u)&&(S.onMouseEnter=K(I,w),S.onMouseLeave=K(R,E));const A=n.jsx(ce,{..._,...k,ref:F,id:H,className:x,renderTitle:a,disabled:l,placement:p,children:b}),U=n.jsx(ne,{ref:h,className:g,style:m,activeKey:f,hidden:!N,placement:p,id:B,onSelect:T,children:o});return n.jsx(X.Provider,{value:{activeKey:f},children:n.jsxs("div",{...S,ref:i,style:c,className:"dropdown",children:[A,n.jsx(q.Provider,{value:y,children:U})]})})});ie.displayName="Dropdown";const ue=ie;ue.Item=ee;ue.Menu=ne;export{ue as D,ne as a};
