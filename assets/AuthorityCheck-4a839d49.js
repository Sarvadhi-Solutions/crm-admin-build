import{_ as $}from"./slicedToArray-424a3759.js";import{r as d,_ as q,y as J,z as V,B as W,C as Y,E as Q,j as e,c as H,H as X,F as Z,G as ee,u as x,i as ne,N as te,f as ae,v as se,h as re}from"./index-dddc73b4.js";import{k as ie,l as oe,m as ce,n as le,o as ue,p as de,q as fe,r as E,s as pe,t as me,u as ge,v as he,w as xe,x as T,y as ve,z as je,A as _,B as Ne,C as ye,D as Oe,E as be,F as Ce,g as we,G as He,I as Se,J as Ae,K as Ie,L as Le,j as De}from"./index.esm-d67f1fea.js";import{D as Pe}from"./Drawer-b1e7a53d.js";import{w as B}from"./withHeaderItem-2bffa761.js";import{u as ke}from"./useResponsive-69492abe.js";import{A as M}from"./index-1362588f.js";import{D as y}from"./index-e4a64f41.js";import{F as Ee}from"./index.esm-50c7c903.js";import{u as Te}from"./Views-ae1e9425.js";function _e(){if(console&&console.warn){for(var a,n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(a=console).warn.apply(a,t)}}var R={};function I(){for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];typeof n[0]=="string"&&R[n[0]]||(typeof n[0]=="string"&&(R[n[0]]=new Date),_e.apply(void 0,n))}var K=function(n,t){return function(){if(n.isInitialized)t();else{var s=function i(){setTimeout(function(){n.off("initialized",i)},0),t()};n.on("initialized",s)}}};function U(a,n,t){a.loadNamespaces(n,K(a,t))}function F(a,n,t,s){typeof t=="string"&&(t=[t]),t.forEach(function(i){a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(n,K(a,s))}function Me(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.languages[0],i=n.options?n.options.fallbackLng:!1,l=n.languages[n.languages.length-1];if(s.toLowerCase()==="cimode")return!0;var r=function(g,p){var j=n.services.backendConnector.state["".concat(g,"|").concat(p)];return j===-1||j===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,a)?!1:!!(n.hasResourceBundle(s,a)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||r(s,a)&&(!i||r(l,a)))}function Re(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!n.languages||!n.languages.length)return I("i18n.languages were undefined or empty",n.languages),!0;var s=n.options.ignoreJSONStructure!==void 0;return s?n.hasLoadedNamespace(a,{lng:t.lng,precheck:function(l,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!r(l.isLanguageChangingTo,a))return!1}}):Me(a,n,t)}var Ue=d.createContext(),Fe=function(){function a(){J(this,a),this.usedNamespaces={}}return q(a,[{key:"addUsedNamespaces",value:function(t){var s=this;t.forEach(function(i){s.usedNamespaces[i]||(s.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),a}();function z(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,s)}return t}function A(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?z(Object(t),!0).forEach(function(s){W(a,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))})}return a}var ze=function(n,t){var s=d.useRef();return d.useEffect(function(){s.current=t?s.current:n},[n,t]),s.current};function sn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.i18n,s=d.useContext(Ue)||{},i=s.i18n,l=s.defaultNS,r=t||i||Y();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Fe),!r){I("You will need to pass in an i18next instance by using initReactI18next");var u=function(h,f){return typeof f=="string"?f:f&&Q(f)==="object"&&typeof f.defaultValue=="string"?f.defaultValue:Array.isArray(h)?h[h.length-1]:h},g=[u,{},!1];return g.t=u,g.i18n={},g.ready=!1,g}r.options.react&&r.options.react.wait!==void 0&&I("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=A(A(A({},V()),r.options.react),n),j=p.useSuspense,w=p.keyPrefix,c=a||l||r.options&&r.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(c);var v=(r.isInitialized||r.initializedStoreOnce)&&c.every(function(m){return Re(m,r,p)});function o(){return r.getFixedT(n.lng||null,p.nsMode==="fallback"?c:c[0],w)}var G=d.useState(o),L=$(G,2),D=L[0],O=L[1],b=c.join();n.lng&&(b="".concat(n.lng).concat(b));var P=ze(b),N=d.useRef(!0);d.useEffect(function(){var m=p.bindI18n,h=p.bindI18nStore;N.current=!0,!v&&!j&&(n.lng?F(r,n.lng,c,function(){N.current&&O(o)}):U(r,c,function(){N.current&&O(o)})),v&&P&&P!==b&&N.current&&O(o);function f(){N.current&&O(o)}return m&&r&&r.on(m,f),h&&r&&r.store.on(h,f),function(){N.current=!1,m&&r&&m.split(" ").forEach(function(S){return r.off(S,f)}),h&&r&&h.split(" ").forEach(function(S){return r.store.off(S,f)})}},[r,b]);var k=d.useRef(!0);d.useEffect(function(){N.current&&!k.current&&O(o),k.current=!1},[r,w]);var C=[D,r,v];if(C.t=D,C.i18n=r,C.ready=v,v||!v&&!j)return C;throw new Promise(function(m){n.lng?F(r,n.lng,c,function(){return m()}):U(r,c,function(){return m()})})}const rn=a=>{const{headerStart:n,headerEnd:t,headerMiddle:s,className:i,container:l}=a;return e.jsx("header",{className:H("header",i),children:e.jsxs("div",{className:H("header-wrapper",X,l&&"container mx-auto"),children:[e.jsx("div",{className:"header-action header-action-start",children:n}),s&&e.jsx("div",{className:"header-action header-action-middle",children:s}),e.jsx("div",{className:"header-action header-action-end",children:t})]})})},Be=({toggled:a,className:n})=>e.jsx("div",{className:n,children:a?e.jsx(ie,{}):e.jsx(oe,{})}),on={apps:e.jsx(ce,{}),project:e.jsx(le,{}),crm:e.jsx(ue,{}),sales:e.jsx(de,{}),crypto:e.jsx(fe,{}),knowledgeBase:e.jsx(E,{}),account:e.jsx(pe,{}),uiComponents:e.jsx(me,{}),common:e.jsx(ge,{}),feedback:e.jsx(he,{}),dataDisplay:e.jsx(xe,{}),forms:e.jsx(T,{}),navigation:e.jsx(ve,{}),graph:e.jsx(je,{}),authentication:e.jsx(_,{}),signIn:e.jsx(Ne,{}),signUp:e.jsx(ye,{}),forgotPassword:e.jsx(_,{}),resetPassword:e.jsx(Oe,{}),pages:e.jsx(be,{}),welcome:e.jsx(Ce,{}),accessDenied:e.jsx(we,{}),guide:e.jsx(E,{}),documentation:e.jsx(T,{}),sharedComponentDoc:e.jsx(He,{}),utilsDoc:e.jsx(Se,{}),changeLog:e.jsx(Ae,{})},Ke=[...Z],Ge=d.lazy(()=>ee(()=>import("./index-0e411e4b.js"),["assets/index-0e411e4b.js","assets/VerticalMenuContent-0652d9f9.js","assets/index-dddc73b4.js","assets/index-620928fb.css","assets/index-9e2f2544.js","assets/index-b19ef1d4.js","assets/index.esm-d67f1fea.js","assets/Views-ae1e9425.js","assets/useUniqueId-1e16ac78.js","assets/toString-a6a23b36.js","assets/Tooltip-8ca67ef0.js","assets/usePopper-12f3dc15.js","assets/index.esm-604e49a5.js","assets/index-81597033.js","assets/objectWithoutProperties-8809bfcf.js","assets/index-e4a64f41.js","assets/useUncertainRef-a033bd83.js","assets/isNil-4bbd6f18.js","assets/chainedFunction-070f832c.js","assets/useRootClose-cdfb724d.js","assets/_getPrototype-510fa938.js","assets/slicedToArray-424a3759.js","assets/Drawer-b1e7a53d.js","assets/index-9e55e515.js","assets/CloseButton-9c4c449e.js","assets/withHeaderItem-2bffa761.js","assets/useResponsive-69492abe.js","assets/index-1362588f.js","assets/useMergeRef-788c4cb0.js","assets/index.esm-50c7c903.js"])),$e=B(Be),cn=()=>{const[a,n]=d.useState(!1),t=()=>{n(!0)},s=()=>{n(!1)},i=x(o=>o.theme.themeColor),l=x(o=>o.theme.primaryColorLevel),r=x(o=>o.theme.navMode),u=x(o=>o.theme.mode),g=x(o=>o.theme.direction),p=x(o=>o.base.common.currentRouteKey),j=x(o=>o.theme.layout.sideNavCollapse),w=x(o=>o.auth.user.authority),{smaller:c}=ke(),v=()=>r===te?`bg-${i}-${l} side-nav-${r}`:r===ae?`side-nav-${u}`:`side-nav-${r}`;return e.jsx(e.Fragment,{children:c.md&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-2xl",onClick:t,children:e.jsx($e,{toggled:a})}),e.jsx(Pe,{title:"Navigation",isOpen:a,bodyClass:H(v(),"p-0"),width:330,placement:g===ne?"right":"left",onClose:s,onRequestClose:s,children:e.jsx(d.Suspense,{fallback:e.jsx(e.Fragment,{}),children:a&&e.jsx(Ge,{navMode:r,collapsed:j,navigationTree:Ke,routeKey:p,userAuthority:w,direction:g,onMenuItemClick:s})})})]})})},qe=[{label:"Profile",path:"/app/account/settings/profile",icon:e.jsx(Le,{})},{label:"Account Setting",path:"/app/account/settings/profile",icon:e.jsx(De,{})},{label:"Activity Log",path:"/app/account/activity-log",icon:e.jsx(Ee,{})}],Je=({className:a})=>{const{firstName:n,lastName:t,email:s,role:i}=x(u=>u.auth.user),{signOut:l}=se(),r=e.jsxs("div",{className:H(a,"flex items-center gap-2"),children:[e.jsx(M,{size:32,shape:"circle",src:""}),e.jsxs("div",{className:"hidden md:block",children:[e.jsx("div",{className:"text-xs capitalize",children:(i==null?void 0:i.roleName)||"guest"}),e.jsxs("div",{className:"font-bold",children:[n," ",t]})]})]});return e.jsx("div",{children:e.jsxs(y,{menuStyle:{minWidth:240},renderTitle:r,placement:"bottom-end",children:[e.jsx(y.Item,{variant:"header",children:e.jsxs("div",{className:"py-2 px-3 flex items-center gap-2",children:[e.jsx(M,{shape:"circle",src:""}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-bold text-gray-900 dark:text-gray-100",children:[n," ",t]}),e.jsx("div",{className:"text-xs",children:s})]})]})}),e.jsx(y.Item,{variant:"divider"}),qe.map(u=>e.jsx(y.Item,{eventKey:u.label,className:"mb-1 px-0",children:e.jsx(re,{className:"flex h-full w-full px-2",to:u.path,children:e.jsxs("span",{className:"flex gap-2 items-center w-full",children:[e.jsx("span",{className:"text-xl opacity-50",children:u.icon}),e.jsx("span",{children:u.label})]})})},u.label)),e.jsx(y.Item,{variant:"divider"}),e.jsxs(y.Item,{eventKey:"Sign Out",className:"gap-2",onClick:l,children:[e.jsx("span",{className:"text-xl opacity-50",children:e.jsx(Ie,{})}),e.jsx("span",{children:"Sign Out"})]})]})})},ln=B(Je),un=a=>{const{userAuthority:n=[],authority:t=[],children:s}=a,i=Te(n,t);return e.jsx(e.Fragment,{children:i?s:null})};export{un as A,rn as H,Ue as I,cn as M,Be as N,ln as U,on as a,_e as b,Ke as n,sn as u,I as w};
