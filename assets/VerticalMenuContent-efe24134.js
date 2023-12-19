import{m as te,B as ge,r as v,C as ne,F as D,E as re,j as a,h as L,a2 as z,g as Oe,y as be,x as ve}from"./index-349191dc.js";import{M as C}from"./index-af467029.js";import{w as Ee,b as B,I as Ke,a as Pe,A,u as se}from"./AuthorityCheck-a8986fa2.js";import{T as ke}from"./Tooltip-23ad192d.js";import{_ as W}from"./objectWithoutProperties-8809bfcf.js";import{D as J}from"./index-6e1d0772.js";import{_ as we,a as Me}from"./Views-868e2d5a.js";import{_ as Ae}from"./_getPrototype-b4480593.js";var Ie={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const Se=te(Ie);var Te=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function X(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(Se[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var o=new RegExp(Te),s=null;(s=o.exec(e))!==null;)if(s[0].trim())if(s[1]){var c=s[1].trim(),y=[c,""];c.indexOf("=")>-1&&(y=c.split("=")),t.attrs[y[0]]=y[1],o.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var De=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Ve=/^\s*$/,Ce=Object.create(null);function ae(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var r=[];for(var o in n)r.push(o+'="'+n[o]+'"');return r.length?" "+r.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(ae,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var Fe={parse:function(e,t){t||(t={}),t.components||(t.components=Ce);var n,r=[],o=[],s=-1,c=!1;if(e.indexOf("<")!==0){var y=e.indexOf("<");r.push({type:"text",content:y===-1?e:e.substring(0,y)})}return e.replace(De,function(h,O){if(c){if(h!=="</"+n.name+">")return;c=!1}var E,u=h.charAt(1)!=="/",k=h.startsWith("<!--"),j=O+h.length,l=e.charAt(j);if(k){var K=X(h);return s<0?(r.push(K),r):((E=o[s]).children.push(K),r)}if(u&&(s++,(n=X(h)).type==="tag"&&t.components[n.name]&&(n.type="component",c=!0),n.voidElement||c||!l||l==="<"||n.children.push({type:"text",content:e.slice(j,e.indexOf("<",j))}),s===0&&r.push(n),(E=o[s-1])&&E.children.push(n),o[s]=n),(!u||n.voidElement)&&(s>-1&&(n.voidElement||n.name===h.slice(2,-1))&&(s--,n=s===-1?r:o[s]),!c&&l!=="<"&&l)){E=s===-1?r:o[s].children;var f=e.indexOf("<",j),g=e.slice(j,f===-1?void 0:f);Ve.test(g)&&(g=" "),(f>-1&&s+E.length>=0||g!==" ")&&E.push({type:"text",content:g})}}),r},stringify:function(e){return e.reduce(function(t,n){return t+ae("",n)},"")}},$e=["format"],Be=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function H(e){return e?e.props?e.props.children:e.children:[]}function Ue(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(t){return v.isValidElement(t)})}function V(e){return Array.isArray(e)?e:[e]}function He(e,t){var n=x({},t);return n.props=Object.assign(e.props,t.props),n}function oe(e,t){if(!e)return"";var n="",r=V(e),o=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach(function(s,c){if(typeof s=="string")n+="".concat(s);else if(v.isValidElement(s)){var y=Object.keys(s.props).length,h=o.indexOf(s.type)>-1,O=s.props.children;if(!O&&h&&y===0)n+="<".concat(s.type,"/>");else if(!O&&(!h||y!==0))n+="<".concat(c,"></").concat(c,">");else if(s.props.i18nIsDynamicList)n+="<".concat(c,"></").concat(c,">");else if(h&&y===1&&typeof O=="string")n+="<".concat(s.type,">").concat(O,"</").concat(s.type,">");else{var E=oe(O,t);n+="<".concat(c,">").concat(E,"</").concat(c,">")}}else if(s===null)B("Trans: the passed in value is invalid - seems you passed in a null child.");else if(D(s)==="object"){var u=s.format,k=W(s,$e),j=Object.keys(k);if(j.length===1){var l=u?"".concat(j[0],", ").concat(u):j[0];n+="{{".concat(l,"}}")}else B("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else B("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Le(e,t,n,r,o,s){if(t==="")return[];var c=r.transKeepBasicHtmlNodesFor||[],y=t&&new RegExp(c.join("|")).test(t);if(!e&&!y)return[t];var h={};function O(f){var g=V(f);g.forEach(function(p){typeof p!="string"&&(U(p)?O(H(p)):D(p)==="object"&&!v.isValidElement(p)&&Object.assign(h,p))})}O(e);var E=Fe.parse("<0>".concat(t,"</0>")),u=x(x({},h),o);function k(f,g,p){var m=H(f),P=l(m,g.children,p);return Ue(m)&&P.length===0?m:P}function j(f,g,p,m,P){f.dummy&&(f.children=g),p.push(v.cloneElement(f,x(x({},f.props),{},{key:m}),P?void 0:g))}function l(f,g,p){var m=V(f),P=V(g);return P.reduce(function(b,i,w){var I=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,u,n.language);if(i.type==="tag"){var M=m[parseInt(i.name,10)];!M&&p.length===1&&p[0][i.name]&&(M=p[0][i.name]),M||(M={});var d=Object.keys(i.attrs).length!==0?He({props:i.attrs},M):M,S=v.isValidElement(d),$=S&&U(i,!0)&&!i.voidElement,pe=y&&D(d)==="object"&&d.dummy&&!S,fe=D(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,i.name);if(typeof d=="string"){var ye=n.services.interpolator.interpolate(d,u,n.language);b.push(ye)}else if(U(d)||$){var me=k(d,i,p);j(d,me,b,w)}else if(pe){var he=l(m,i.children,p);b.push(v.cloneElement(d,x(x({},d.props),{},{key:w}),he))}else if(Number.isNaN(parseFloat(i.name)))if(fe){var de=k(d,i,p);j(d,de,b,w,i.voidElement)}else if(r.transSupportBasicHtmlNodes&&c.indexOf(i.name)>-1)if(i.voidElement)b.push(v.createElement(i.name,{key:"".concat(i.name,"-").concat(w)}));else{var je=l(m,i.children,p);b.push(v.createElement(i.name,{key:"".concat(i.name,"-").concat(w)},je))}else if(i.voidElement)b.push("<".concat(i.name," />"));else{var xe=l(m,i.children,p);b.push("<".concat(i.name,">").concat(xe,"</").concat(i.name,">"))}else if(D(d)==="object"&&!S){var Y=i.children[0]?I:null;Y&&b.push(Y)}else i.children.length===1&&I?b.push(v.cloneElement(d,x(x({},d.props),{},{key:w}),I)):b.push(v.cloneElement(d,x(x({},d.props),{},{key:w})))}else if(i.type==="text"){var G=r.transWrapTextNodes,_=s?r.unescape(n.services.interpolator.interpolate(i.content,u,n.language)):n.services.interpolator.interpolate(i.content,u,n.language);G?b.push(v.createElement(G,{key:"".concat(i.name,"-").concat(w)},_)):b.push(_)}return b},[])}var K=l([{dummy:!0,children:e||[]}],E,V(e||[]));return H(K[0])}function We(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,s=e.context,c=e.tOptions,y=c===void 0?{}:c,h=e.values,O=e.defaults,E=e.components,u=e.ns,k=e.i18n,j=e.t,l=e.shouldUnescape,K=W(e,Be),f=k||re();if(!f)return Ee("You will need to pass in an i18next instance by using i18nextReactModule"),t;var g=j||f.t.bind(f)||function($){return $};s&&(y.context=s);var p=x(x({},ge()),f.options&&f.options.react),m=u||g.ns||f.options&&f.options.defaultNS;m=typeof m=="string"?[m]:m||["translation"];var P=O||oe(t,p)||p.transEmptyNodeValue||o,b=p.hashTransKey,i=o||(b?b(P):P),w=h?y.interpolation:{interpolation:x(x({},y.interpolation),{},{prefix:"#$?",suffix:"?$#"})},I=x(x(x(x({},y),{},{count:n},h),w),{},{defaultValue:P,ns:m}),M=i?g(i,I):P,d=Le(E||t,M,f,p,I,l),S=r!==void 0?r:p.defaultTransParent;return S?v.createElement(S,K,d):d}var Ye=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,s=e.context,c=e.tOptions,y=c===void 0?{}:c,h=e.values,O=e.defaults,E=e.components,u=e.ns,k=e.i18n,j=e.t,l=e.shouldUnescape,K=W(e,Ye),f=v.useContext(Ke)||{},g=f.i18n,p=f.defaultNS,m=k||g||re(),P=j||m&&m.t.bind(m);return We(Ge({children:t,count:n,parent:r,i18nKey:o,context:s,tOptions:y,values:h,defaults:O,components:E,ns:u||P&&P.ns||p||m&&m.options&&m.options.defaultNS,i18n:m,t:j,shouldUnescape:l},K))}const F=({icon:e,gutter:t})=>typeof e!="string"&&!e?a.jsx(a.Fragment,{}):a.jsx("span",{className:`text-2xl ${t?"ltr:mr-2 rtl:ml-2":""}`,children:Pe[e]});F.defaultProps={gutter:!0};const{MenuItem:_e}=C,ze=({title:e,translateKey:t,children:n,direction:r})=>{const{t:o}=se();return a.jsx(ke,{title:o(t)||e,placement:r==="rtl"?"left":"right",children:n})},Q=e=>{const{nav:t,onLinkClick:n,sideCollapsed:r,userAuthority:o}=e;return a.jsx(A,{userAuthority:o,authority:t.authority,children:a.jsx(_e,{eventKey:t.key,className:"mb-2",children:a.jsxs(L,{to:t.path,className:"flex items-center h-full w-full",target:t.isExternalLink?"_blank":"",onClick:()=>n==null?void 0:n({key:t.key,title:t.title,path:t.path}),children:[a.jsx(F,{icon:t.icon}),!r&&a.jsx("span",{children:a.jsx(T,{i18nKey:t.translateKey,defaults:t.title})})]})},t.key)})},R=({nav:e,onLinkClick:t,sideCollapsed:n,userAuthority:r,direction:o})=>a.jsx(A,{userAuthority:r,authority:e.authority,children:n?a.jsx(ze,{title:e.title,translateKey:e.translateKey,direction:o,children:a.jsx(Q,{nav:e,sideCollapsed:n,userAuthority:r,onLinkClick:t})}):a.jsx(Q,{nav:e,sideCollapsed:n,userAuthority:r,onLinkClick:t})}),{MenuItem:ie,MenuCollapse:Je}=C,Xe=({nav:e,onLinkClick:t,userAuthority:n})=>a.jsx(A,{userAuthority:n,authority:e.authority,children:a.jsx(Je,{label:a.jsxs(a.Fragment,{children:[a.jsx(F,{icon:e.icon}),a.jsx("span",{children:a.jsx(T,{i18nKey:e.translateKey,defaults:e.title})})]}),eventKey:e.key,expanded:!1,className:"mb-2",children:e.subMenu.map(r=>a.jsx(A,{userAuthority:n,authority:r.authority,children:a.jsx(ie,{eventKey:r.key,children:r.path?a.jsx(L,{className:"h-full w-full flex items-center",to:r.path,target:r.isExternalLink?"_blank":"",onClick:()=>t==null?void 0:t({key:r.key,title:r.title,path:r.path}),children:a.jsx("span",{children:a.jsx(T,{i18nKey:r.translateKey,defaults:r.title})})}):a.jsx("span",{children:a.jsx(T,{i18nKey:r.translateKey,defaults:r.title})})})},r.key))},e.key)}),Ze=({nav:e,onLinkClick:t,userAuthority:n,direction:r})=>{const o=a.jsx(ie,{eventKey:e.key,className:"mb-2",children:a.jsx(F,{icon:e.icon})},e.key);return a.jsx(A,{userAuthority:n,authority:e.authority,children:a.jsx(J,{trigger:"hover",renderTitle:o,placement:r==="rtl"?"middle-end-top":"middle-start-top",children:e.subMenu.map(s=>a.jsx(A,{userAuthority:n,authority:s.authority,children:a.jsx(J.Item,{eventKey:s.key,children:s.path?a.jsx(L,{className:"h-full w-full flex items-center",to:s.path,target:s.isExternalLink?"_blank":"",onClick:()=>t==null?void 0:t({key:s.key,title:s.title,path:s.path}),children:a.jsx("span",{children:a.jsx(T,{i18nKey:s.translateKey,defaults:s.title})})}):a.jsx("span",{children:a.jsx(T,{i18nKey:s.translateKey,defaults:s.title})})})},s.key))})})},N=({sideCollapsed:e,...t})=>e?a.jsx(Ze,{...t}):a.jsx(Xe,{...t});var qe=we,Qe=Ae,Re=Me,Ne="[object Object]",et=Function.prototype,tt=Object.prototype,le=et.toString,nt=tt.hasOwnProperty,rt=le.call(Object);function st(e){if(!Re(e)||qe(e)!=Ne)return!1;var t=Qe(e);if(t===null)return!0;var n=nt.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&le.call(n)==rt}var at=st;const ot=te(at),ce=(e,t)=>{if(!Array.isArray(e)&&e.key===t)return e;let n,r=!1;for(const o in e)if(o!=="icon"&&e.hasOwnProperty(o)&&typeof e[o]=="object"&&(ot(e[o])&&e[o].subMenu.length>0&&e[o].subMenu.some(s=>s.key===t)&&(r=!0),n=ce(e[o],t),n))return r&&(n.parentKey=e[o].key),n;return n},ue=(e,t)=>e.find(r=>r.key===t)?!0:e.some(r=>ue(r.subMenu,t)),it=(e,t)=>{let n={};return e.forEach(r=>{ue([r],t)&&(n=r)}),n};function lt(e,t){const n=v.useMemo(()=>ce(e,t),[e,t]),r=v.useMemo(()=>it(e,t),[e,t]);return{activedRoute:n,includedRouteTree:r}}const{MenuGroup:ee}=C,ct=e=>{const{navMode:t=z.navMode,collapsed:n,routeKey:r,navigationTree:o=[],userAuthority:s=[],onMenuItemClick:c,direction:y=z.direction}=e,{t:h}=se(),[O,E]=v.useState([]),{activedRoute:u}=lt(o,r);v.useEffect(()=>{O.length===0&&(u!=null&&u.parentKey)&&E([u==null?void 0:u.parentKey])},[u==null?void 0:u.parentKey]);const k=()=>{c==null||c()},j=l=>{if(l.subMenu.length===0&&l.type===Oe)return a.jsx(R,{nav:l,sideCollapsed:n,userAuthority:s,direction:y,onLinkClick:k},l.key);if(l.subMenu.length>0&&l.type===be)return a.jsx(N,{nav:l,sideCollapsed:n,userAuthority:s,direction:y,onLinkClick:c},l.key);if(l.type===ve){if(l.subMenu.length>0)return a.jsx(A,{userAuthority:s,authority:l.authority,children:a.jsx(ee,{label:h(l.translateKey)||l.title,children:l.subMenu.map(K=>K.subMenu.length>0?a.jsx(N,{nav:K,sideCollapsed:n,userAuthority:s,direction:y,onLinkClick:c},K.key):a.jsx(R,{nav:K,sideCollapsed:n,userAuthority:s,direction:y,onLinkClick:c},K.key))})},l.key);l.title}};return a.jsx(C,{className:"px-4 pb-4",variant:t,sideCollapsed:n,defaultActiveKeys:u!=null&&u.key?[u.key]:[],defaultExpandedKeys:O,children:o.map(l=>j(l))})},xt=ct;export{xt as V,lt as u};
