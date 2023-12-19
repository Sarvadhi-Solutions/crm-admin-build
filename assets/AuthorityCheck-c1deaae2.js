import{_ as W}from"./slicedToArray-84afaa5e.js";import{r as l,_ as Y,y as X,z as Q,B as Z,C as ee,E as ne,j as n,c as H,H as te,F as k,g as _,G as L,U as M,I as ae,J as se,u as h,i as re,N as ie,f as oe,v as ce}from"./index-c91233c4.js";import{k as ue,l as le,m as de,n as fe,o as pe,p as ge,q as me,r as R,s as he,t as ve,u as xe,v as je,w as ye,x as U,y as Ne,z as Oe,A as z,B as Ce,C as be,D as we,E as He,F as Se,g as Ae,G as Ie,I as Pe,J as Ee,K as De}from"./index.esm-3e702816.js";import{D as Te}from"./Drawer-1eb99a1f.js";import{w as J}from"./withHeaderItem-83e72327.js";import{u as ke}from"./useResponsive-6afa04b1.js";import{A as F}from"./index-ab87cb73.js";import{D as w}from"./index-5e45e4e6.js";import{u as _e}from"./Views-7340793d.js";function Le(){if(console&&console.warn){for(var a,e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(a=console).warn.apply(a,t)}}var K={};function I(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];typeof e[0]=="string"&&K[e[0]]||(typeof e[0]=="string"&&(K[e[0]]=new Date),Le.apply(void 0,e))}var V=function(e,t){return function(){if(e.isInitialized)t();else{var s=function i(){setTimeout(function(){e.off("initialized",i)},0),t()};e.on("initialized",s)}}};function B(a,e,t){a.loadNamespaces(e,V(a,t))}function $(a,e,t,s){typeof t=="string"&&(t=[t]),t.forEach(function(i){a.options.ns.indexOf(i)<0&&a.options.ns.push(i)}),a.loadLanguages(e,V(a,s))}function Me(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.languages[0],i=e.options?e.options.fallbackLng:!1,u=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;var r=function(g,f){var j=e.services.backendConnector.state["".concat(g,"|").concat(f)];return j===-1||j===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,a)?!1:!!(e.hasResourceBundle(s,a)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(s,a)&&(!i||r(u,a)))}function Re(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return I("i18n.languages were undefined or empty",e.languages),!0;var s=e.options.ignoreJSONStructure!==void 0;return s?e.hasLoadedNamespace(a,{lng:t.lng,precheck:function(u,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,a))return!1}}):Me(a,e,t)}var Ue=l.createContext(),ze=function(){function a(){X(this,a),this.usedNamespaces={}}return Y(a,[{key:"addUsedNamespaces",value:function(t){var s=this;t.forEach(function(i){s.usedNamespaces[i]||(s.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),a}();function G(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,s)}return t}function A(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?G(Object(t),!0).forEach(function(s){Z(a,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))})}return a}var Fe=function(e,t){var s=l.useRef();return l.useEffect(function(){s.current=t?s.current:e},[e,t]),s.current};function an(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,s=l.useContext(Ue)||{},i=s.i18n,u=s.defaultNS,r=t||i||ee();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new ze),!r){I("You will need to pass in an i18next instance by using initReactI18next");var x=function(m,d){return typeof d=="string"?d:d&&ne(d)==="object"&&typeof d.defaultValue=="string"?d.defaultValue:Array.isArray(m)?m[m.length-1]:m},g=[x,{},!1];return g.t=x,g.i18n={},g.ready=!1,g}r.options.react&&r.options.react.wait!==void 0&&I("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=A(A(A({},Q()),r.options.react),e),j=f.useSuspense,b=f.keyPrefix,c=a||u||r.options&&r.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(c);var v=(r.isInitialized||r.initializedStoreOnce)&&c.every(function(p){return Re(p,r,f)});function o(){return r.getFixedT(e.lng||null,f.nsMode==="fallback"?c:c[0],b)}var q=l.useState(o),P=W(q,2),E=P[0],N=P[1],O=c.join();e.lng&&(O="".concat(e.lng).concat(O));var D=Fe(O),y=l.useRef(!0);l.useEffect(function(){var p=f.bindI18n,m=f.bindI18nStore;y.current=!0,!v&&!j&&(e.lng?$(r,e.lng,c,function(){y.current&&N(o)}):B(r,c,function(){y.current&&N(o)})),v&&D&&D!==O&&y.current&&N(o);function d(){y.current&&N(o)}return p&&r&&r.on(p,d),m&&r&&r.store.on(m,d),function(){y.current=!1,p&&r&&p.split(" ").forEach(function(S){return r.off(S,d)}),m&&r&&m.split(" ").forEach(function(S){return r.store.off(S,d)})}},[r,O]);var T=l.useRef(!0);l.useEffect(function(){y.current&&!T.current&&N(o),T.current=!1},[r,b]);var C=[E,r,v];if(C.t=E,C.i18n=r,C.ready=v,v||!v&&!j)return C;throw new Promise(function(p){e.lng?$(r,e.lng,c,function(){return p()}):B(r,c,function(){return p()})})}const sn=a=>{const{headerStart:e,headerEnd:t,headerMiddle:s,className:i,container:u}=a;return n.jsx("header",{className:H("header",i),children:n.jsxs("div",{className:H("header-wrapper",te,u&&"container mx-auto"),children:[n.jsx("div",{className:"header-action header-action-start",children:e}),s&&n.jsx("div",{className:"header-action header-action-middle",children:s}),n.jsx("div",{className:"header-action header-action-end",children:t})]})})},Ke=({toggled:a,className:e})=>n.jsx("div",{className:e,children:a?n.jsx(ue,{}):n.jsx(le,{})}),rn={apps:n.jsx(de,{}),project:n.jsx(fe,{}),crm:n.jsx(pe,{}),sales:n.jsx(ge,{}),crypto:n.jsx(me,{}),knowledgeBase:n.jsx(R,{}),account:n.jsx(he,{}),uiComponents:n.jsx(ve,{}),common:n.jsx(xe,{}),feedback:n.jsx(je,{}),dataDisplay:n.jsx(ye,{}),forms:n.jsx(U,{}),navigation:n.jsx(Ne,{}),graph:n.jsx(Oe,{}),authentication:n.jsx(z,{}),signIn:n.jsx(Ce,{}),signUp:n.jsx(be,{}),forgotPassword:n.jsx(z,{}),resetPassword:n.jsx(we,{}),pages:n.jsx(He,{}),welcome:n.jsx(Se,{}),accessDenied:n.jsx(Ae,{}),guide:n.jsx(R,{}),documentation:n.jsx(U,{}),sharedComponentDoc:n.jsx(Ie,{}),utilsDoc:n.jsx(Pe,{}),changeLog:n.jsx(Ee,{})},Be=[{key:"superPanel.organizations",path:`${k}/super/organizations`,title:"Organization",translateKey:"nav.superPanel.Organization",icon:"",type:_,authority:[L,M],subMenu:[]},{key:"superPanel.dashboard",path:`${k}/super/dashboard`,title:"Dashboard",translateKey:"nav.superPanel.dashboard",icon:"",type:_,authority:[L,M],subMenu:[]}],$e=[...ae,...Be],Ge=l.lazy(()=>se(()=>import("./index-4b6706ee.js"),["assets/index-4b6706ee.js","assets/VerticalMenuContent-96bde528.js","assets/index-c91233c4.js","assets/index-33785ac7.css","assets/index-ae85a04b.js","assets/index-4b57f9f6.js","assets/index.esm-3e702816.js","assets/Views-7340793d.js","assets/useUniqueId-a5104d81.js","assets/toString-02d61bde.js","assets/Tooltip-63f372a9.js","assets/usePopper-59b3c55c.js","assets/index.esm-95ff1c22.js","assets/index-e6ff5055.js","assets/objectWithoutProperties-8809bfcf.js","assets/index-5e45e4e6.js","assets/useUncertainRef-50cdc3d0.js","assets/isNil-470b0161.js","assets/chainedFunction-070f832c.js","assets/useRootClose-e7f1cf8a.js","assets/_getPrototype-c07d5b11.js","assets/slicedToArray-84afaa5e.js","assets/Drawer-1eb99a1f.js","assets/index-50dd8478.js","assets/CloseButton-a41fa522.js","assets/withHeaderItem-83e72327.js","assets/useResponsive-6afa04b1.js","assets/index-ab87cb73.js","assets/useMergeRef-788c4cb0.js"])),Je=J(Ke),on=()=>{const[a,e]=l.useState(!1),t=()=>{e(!0)},s=()=>{e(!1)},i=h(o=>o.theme.themeColor),u=h(o=>o.theme.primaryColorLevel),r=h(o=>o.theme.navMode),x=h(o=>o.theme.mode),g=h(o=>o.theme.direction),f=h(o=>o.base.common.currentRouteKey),j=h(o=>o.theme.layout.sideNavCollapse),b=h(o=>o.auth.user.authority),{smaller:c}=ke(),v=()=>r===ie?`bg-${i}-${u} side-nav-${r}`:r===oe?`side-nav-${x}`:`side-nav-${r}`;return n.jsx(n.Fragment,{children:c.md&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-2xl",onClick:t,children:n.jsx(Je,{toggled:a})}),n.jsx(Te,{title:"Navigation",isOpen:a,bodyClass:H(v(),"p-0"),width:330,placement:g===re?"right":"left",onClose:s,onRequestClose:s,children:n.jsx(l.Suspense,{fallback:n.jsx(n.Fragment,{}),children:a&&n.jsx(Ge,{navMode:r,collapsed:j,navigationTree:$e,routeKey:f,userAuthority:b,direction:g,onMenuItemClick:s})})})]})})},Ve=({className:a})=>{const{firstName:e,lastName:t,email:s,role:i}=h(x=>x.auth.user),{signOut:u}=ce(),r=n.jsxs("div",{className:H(a,"flex items-center gap-2"),children:[n.jsx(F,{size:32,shape:"circle",src:""}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("div",{className:"text-xs capitalize",children:(i==null?void 0:i.roleName)||"Super Admin"}),n.jsxs("div",{className:"font-bold",children:[e," ",t]})]})]});return n.jsx("div",{children:n.jsxs(w,{menuStyle:{minWidth:240},renderTitle:r,placement:"bottom-end",children:[n.jsx(w.Item,{variant:"header",children:n.jsxs("div",{className:"py-2 px-3 flex items-center gap-2",children:[n.jsx(F,{shape:"circle",src:""}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-bold text-gray-900 dark:text-gray-100",children:[e," ",t]}),n.jsx("div",{className:"text-xs",children:s})]})]})}),n.jsx(w.Item,{variant:"divider"}),n.jsxs(w.Item,{eventKey:"Sign Out",className:"gap-2",onClick:u,children:[n.jsx("span",{className:"text-xl opacity-50",children:n.jsx(De,{})}),n.jsx("span",{children:"Sign Out"})]})]})})},cn=J(Ve),un=a=>{const{userAuthority:e=[],authority:t=[],children:s}=a,i=_e(e,t);return n.jsx(n.Fragment,{children:i?s:null})};export{un as A,sn as H,Ue as I,on as M,Ke as N,cn as U,rn as a,Le as b,$e as n,an as u,I as w};
