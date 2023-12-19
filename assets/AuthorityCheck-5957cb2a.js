import{_ as W}from"./slicedToArray-2ef3e469.js";import{r as l,_ as Y,z as X,B as Q,C as Z,E as ee,F as ne,j as n,c as H,H as te,G as I,g as P,I as E,U as D,J as ae,K as se,u as h,i as re,N as ie,f as oe,v as ce}from"./index-dd430329.js";import{k as ue,l as le,m as de,n as fe,o as pe,p as ge,q as me,r as M,s as he,t as ve,u as xe,v as je,w as ye,x as R,y as Ne,z as Oe,A as U,B as Ce,C as be,D as we,E as He,F as Se,g as Ae,G as Ie,I as Pe,J as Ee,K as De}from"./index.esm-8a75a52d.js";import{D as Te}from"./Drawer-851dfb0e.js";import{w as J}from"./withHeaderItem-1470e97e.js";import{u as ke}from"./useResponsive-575fc2c1.js";import{A as F}from"./index-1bec26b5.js";import{D as w}from"./index-273b73f2.js";import{u as _e}from"./Views-969b82ff.js";function ze(){if(console&&console.warn){for(var a,e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(a=console).warn.apply(a,t)}}var K={};function T(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];typeof e[0]=="string"&&K[e[0]]||(typeof e[0]=="string"&&(K[e[0]]=new Date),ze.apply(void 0,e))}var V=function(e,t){return function(){if(e.isInitialized)t();else{var s=function i(){setTimeout(function(){e.off("initialized",i)},0),t()};e.on("initialized",s)}}};function B(a,e,t){a.loadNamespaces(e,V(a,t))}function $(a,e,t,s){typeof t=="string"&&(t=[t]),t.forEach(function(i){a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(e,V(a,s))}function Le(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.languages[0],i=e.options?e.options.fallbackLng:!1,u=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;var r=function(g,f){var j=e.services.backendConnector.state["".concat(g,"|").concat(f)];return j===-1||j===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,a)?!1:!!(e.hasResourceBundle(s,a)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(s,a)&&(!i||r(u,a)))}function Me(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return T("i18n.languages were undefined or empty",e.languages),!0;var s=e.options.ignoreJSONStructure!==void 0;return s?e.hasLoadedNamespace(a,{lng:t.lng,precheck:function(u,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,a))return!1}}):Le(a,e,t)}var Re=l.createContext(),Ue=function(){function a(){X(this,a),this.usedNamespaces={}}return Y(a,[{key:"addUsedNamespaces",value:function(t){var s=this;t.forEach(function(i){s.usedNamespaces[i]||(s.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),a}();function G(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,s)}return t}function A(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?G(Object(t),!0).forEach(function(s){Z(a,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))})}return a}var Fe=function(e,t){var s=l.useRef();return l.useEffect(function(){s.current=t?s.current:e},[e,t]),s.current};function sn(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,s=l.useContext(Re)||{},i=s.i18n,u=s.defaultNS,r=t||i||ee();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Ue),!r){T("You will need to pass in an i18next instance by using initReactI18next");var x=function(m,d){return typeof d=="string"?d:d&&ne(d)==="object"&&typeof d.defaultValue=="string"?d.defaultValue:Array.isArray(m)?m[m.length-1]:m},g=[x,{},!1];return g.t=x,g.i18n={},g.ready=!1,g}r.options.react&&r.options.react.wait!==void 0&&T("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=A(A(A({},Q()),r.options.react),e),j=f.useSuspense,b=f.keyPrefix,c=a||u||r.options&&r.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(c);var v=(r.isInitialized||r.initializedStoreOnce)&&c.every(function(p){return Me(p,r,f)});function o(){return r.getFixedT(e.lng||null,f.nsMode==="fallback"?c:c[0],b)}var q=l.useState(o),k=W(q,2),_=k[0],N=k[1],O=c.join();e.lng&&(O="".concat(e.lng).concat(O));var z=Fe(O),y=l.useRef(!0);l.useEffect(function(){var p=f.bindI18n,m=f.bindI18nStore;y.current=!0,!v&&!j&&(e.lng?$(r,e.lng,c,function(){y.current&&N(o)}):B(r,c,function(){y.current&&N(o)})),v&&z&&z!==O&&y.current&&N(o);function d(){y.current&&N(o)}return p&&r&&r.on(p,d),m&&r&&r.store.on(m,d),function(){y.current=!1,p&&r&&p.split(" ").forEach(function(S){return r.off(S,d)}),m&&r&&m.split(" ").forEach(function(S){return r.store.off(S,d)})}},[r,O]);var L=l.useRef(!0);l.useEffect(function(){y.current&&!L.current&&N(o),L.current=!1},[r,b]);var C=[_,r,v];if(C.t=_,C.i18n=r,C.ready=v,v||!v&&!j)return C;throw new Promise(function(p){e.lng?$(r,e.lng,c,function(){return p()}):B(r,c,function(){return p()})})}const rn=a=>{const{headerStart:e,headerEnd:t,headerMiddle:s,className:i,container:u}=a;return n.jsx("header",{className:H("header",i),children:n.jsxs("div",{className:H("header-wrapper",te,u&&"container mx-auto"),children:[n.jsx("div",{className:"header-action header-action-start",children:e}),s&&n.jsx("div",{className:"header-action header-action-middle",children:s}),n.jsx("div",{className:"header-action header-action-end",children:t})]})})},Ke=({toggled:a,className:e})=>n.jsx("div",{className:e,children:a?n.jsx(ue,{}):n.jsx(le,{})}),on={apps:n.jsx(de,{}),project:n.jsx(fe,{}),crm:n.jsx(pe,{}),sales:n.jsx(ge,{}),crypto:n.jsx(me,{}),knowledgeBase:n.jsx(M,{}),account:n.jsx(he,{}),uiComponents:n.jsx(ve,{}),common:n.jsx(xe,{}),feedback:n.jsx(je,{}),dataDisplay:n.jsx(ye,{}),forms:n.jsx(R,{}),navigation:n.jsx(Ne,{}),graph:n.jsx(Oe,{}),authentication:n.jsx(U,{}),signIn:n.jsx(Ce,{}),signUp:n.jsx(be,{}),forgotPassword:n.jsx(U,{}),resetPassword:n.jsx(we,{}),pages:n.jsx(He,{}),welcome:n.jsx(Se,{}),accessDenied:n.jsx(Ae,{}),guide:n.jsx(M,{}),documentation:n.jsx(R,{}),sharedComponentDoc:n.jsx(Ie,{}),utilsDoc:n.jsx(Pe,{}),changeLog:n.jsx(Ee,{})},Be=[{key:"superPanel.organizations",path:`${I}/super/organizations`,title:"Organization",translateKey:"nav.superPanel.Organization",icon:"",type:P,authority:[E,D],subMenu:[]},{key:"superPanel.dashboard",path:`${I}/super/dashboard`,title:"Dashboard",translateKey:"nav.superPanel.dashboard",icon:"",type:P,authority:[E,D],subMenu:[]}],$e=[{key:"appOrganization.organizations",path:`${I}/common/organization`,title:"Organization",translateKey:"nav.appOrganization.Organization",icon:"",type:P,authority:[E,D],subMenu:[]}],Ge=[...ae,...Be,...$e],Je=l.lazy(()=>se(()=>import("./index-16593382.js"),["assets/index-16593382.js","assets/VerticalMenuContent-8d78a0ce.js","assets/index-dd430329.js","assets/index-e466e11d.css","assets/index-1e6ea035.js","assets/index-5ad45768.js","assets/index.esm-8a75a52d.js","assets/Views-969b82ff.js","assets/useUniqueId-abd97dae.js","assets/toString-45c45754.js","assets/Tooltip-4f6c910c.js","assets/usePopper-ad874619.js","assets/index.esm-075cf0f7.js","assets/index-59261ffa.js","assets/objectWithoutProperties-8809bfcf.js","assets/index-273b73f2.js","assets/useUncertainRef-b3ab91cc.js","assets/isNil-ba5dd027.js","assets/chainedFunction-070f832c.js","assets/useRootClose-c59d452a.js","assets/_getPrototype-a234e5e0.js","assets/slicedToArray-2ef3e469.js","assets/Drawer-851dfb0e.js","assets/index-ab79e894.js","assets/CloseButton-be129446.js","assets/withHeaderItem-1470e97e.js","assets/useResponsive-575fc2c1.js","assets/index-1bec26b5.js","assets/useMergeRef-788c4cb0.js"])),Ve=J(Ke),cn=()=>{const[a,e]=l.useState(!1),t=()=>{e(!0)},s=()=>{e(!1)},i=h(o=>o.theme.themeColor),u=h(o=>o.theme.primaryColorLevel),r=h(o=>o.theme.navMode),x=h(o=>o.theme.mode),g=h(o=>o.theme.direction),f=h(o=>o.base.common.currentRouteKey),j=h(o=>o.theme.layout.sideNavCollapse),b=h(o=>o.auth.user.authority),{smaller:c}=ke(),v=()=>r===ie?`bg-${i}-${u} side-nav-${r}`:r===oe?`side-nav-${x}`:`side-nav-${r}`;return n.jsx(n.Fragment,{children:c.md&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-2xl",onClick:t,children:n.jsx(Ve,{toggled:a})}),n.jsx(Te,{title:"Navigation",isOpen:a,bodyClass:H(v(),"p-0"),width:330,placement:g===re?"right":"left",onClose:s,onRequestClose:s,children:n.jsx(l.Suspense,{fallback:n.jsx(n.Fragment,{}),children:a&&n.jsx(Je,{navMode:r,collapsed:j,navigationTree:Ge,routeKey:f,userAuthority:b,direction:g,onMenuItemClick:s})})})]})})},qe=({className:a})=>{const{firstName:e,lastName:t,email:s,role:i}=h(x=>x.auth.user),{signOut:u}=ce(),r=n.jsxs("div",{className:H(a,"flex items-center gap-2"),children:[n.jsx(F,{size:32,shape:"circle",src:""}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("div",{className:"text-xs capitalize",children:(i==null?void 0:i.roleName)||"Super Admin"}),n.jsxs("div",{className:"font-bold",children:[e," ",t]})]})]});return n.jsx("div",{children:n.jsxs(w,{menuStyle:{minWidth:240},renderTitle:r,placement:"bottom-end",children:[n.jsx(w.Item,{variant:"header",children:n.jsxs("div",{className:"py-2 px-3 flex items-center gap-2",children:[n.jsx(F,{shape:"circle",src:""}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-bold text-gray-900 dark:text-gray-100",children:[e," ",t]}),n.jsx("div",{className:"text-xs",children:s})]})]})}),n.jsx(w.Item,{variant:"divider"}),n.jsxs(w.Item,{eventKey:"Sign Out",className:"gap-2",onClick:u,children:[n.jsx("span",{className:"text-xl opacity-50",children:n.jsx(De,{})}),n.jsx("span",{children:"Sign Out"})]})]})})},un=J(qe),ln=a=>{const{userAuthority:e=[],authority:t=[],children:s}=a,i=_e(e,t);return n.jsx(n.Fragment,{children:i?s:null})};export{ln as A,rn as H,Re as I,cn as M,Ke as N,un as U,on as a,ze as b,Ge as n,sn as u,T as w};
