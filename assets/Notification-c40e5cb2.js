import{A as ae,r as A,m as ye,j as n,c as $,h as fe,u as de,a as xe,n as he,o as be,p as je,q as Te,t as Se}from"./index-50945288.js";import{w as ie}from"./withHeaderItem-ceb9e326.js";import{B as ge}from"./Button-a4fa8688.js";import{D as Oe}from"./Dialog-280fa962.js";import{u as pe}from"./useThemeClass-d0c07393.js";import{a as Ne}from"./AuthorityCheck-a48cc221.js";import{d as Ce}from"./debounce-39f99d5c.js";import{b as le,c as we,d as ke,e as Ee,f as Re,g as Pe,h as Le,i as ce}from"./index.esm-35c8061b.js";import{A as U}from"./index-08f2a96a.js";import{D as F}from"./index-4454a30f.js";import{S as Ae}from"./ScrollBar-f9956c02.js";import{B as ve}from"./Badge-87c37bf0.js";import{T as Ie}from"./Tooltip-99e477d6.js";import{i as He}from"./isLastChild-83eb4c23.js";import{u as ze,a as De}from"./acronym-fc44d8df.js";import{u as $e}from"./useResponsive-c732fa43.js";async function Me(){return ae.fetchData({url:"/notification/count",method:"get"})}async function Be(){return ae.fetchData({url:"/notification/list",method:"get"})}async function Ue(L){return ae.fetchData({url:"/search/query",method:"post",data:L})}var me={exports:{}};(function(L){L.exports=function(c){var y={};function e(r){if(y[r])return y[r].exports;var i=y[r]={exports:{},id:r,loaded:!1};return c[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}return e.m=c,e.c=y,e.p="",e(0)}([function(c,y,e){c.exports=e(1)},function(c,y,e){Object.defineProperty(y,"__esModule",{value:!0});function r(o){return o&&o.__esModule?o:{default:o}}var i=e(2),v=r(i);y.default=v.default,c.exports=y.default},function(c,y,e){Object.defineProperty(y,"__esModule",{value:!0});var r=Object.assign||function(a){for(var g=1;g<arguments.length;g++){var l=arguments[g];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a};y.default=x;function i(a){return a&&a.__esModule?a:{default:a}}function v(a,g){var l={};for(var u in a)g.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(a,u)&&(l[u]=a[u]);return l}var o=e(3),f=e(4),s=i(f),h=e(14),m=e(15),b=i(m);x.propTypes={activeClassName:s.default.string,activeIndex:s.default.number,activeStyle:s.default.object,autoEscape:s.default.bool,className:s.default.string,findChunks:s.default.func,highlightClassName:s.default.oneOfType([s.default.object,s.default.string]),highlightStyle:s.default.object,highlightTag:s.default.oneOfType([s.default.node,s.default.func,s.default.string]),sanitize:s.default.func,searchWords:s.default.arrayOf(s.default.oneOfType([s.default.string,s.default.instanceOf(RegExp)])).isRequired,textToHighlight:s.default.string.isRequired,unhighlightTag:s.default.oneOfType([s.default.node,s.default.func,s.default.string]),unhighlightClassName:s.default.string,unhighlightStyle:s.default.object};function x(a){var g=a.activeClassName,l=g===void 0?"":g,u=a.activeIndex,j=u===void 0?-1:u,p=a.activeStyle,R=a.autoEscape,I=a.caseSensitive,B=I===void 0?!1:I,W=a.className,V=a.findChunks,G=a.highlightClassName,M=G===void 0?"":G,Y=a.highlightStyle,J=Y===void 0?{}:Y,K=a.highlightTag,_=K===void 0?"mark":K,ee=a.sanitize,q=a.searchWords,Q=a.textToHighlight,z=a.unhighlightTag,X=z===void 0?"span":z,Z=a.unhighlightClassName,te=Z===void 0?"":Z,t=a.unhighlightStyle,d=v(a,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightTag","unhighlightClassName","unhighlightStyle"]),w=(0,o.findAll)({autoEscape:R,caseSensitive:B,findChunks:V,sanitize:ee,searchWords:q,textToHighlight:Q}),O=_,T=-1,N="",S=void 0,C=function(P){var H={};for(var D in P)H[D.toLowerCase()]=P[D];return H},k=(0,b.default)(C);return(0,h.createElement)("span",r({className:W},d,{children:w.map(function(E,P){var H=Q.substr(E.start,E.end-E.start);if(E.highlight){T++;var D=void 0;typeof M=="object"?B?D=M[H]:(M=k(M),D=M[H.toLowerCase()]):D=M;var se=T===+j;N=D+" "+(se?l:""),S=se===!0&&p!=null?Object.assign({},J,p):J;var oe={children:H,className:N,key:P,style:S};return typeof O!="string"&&(oe.highlightIndex=T),(0,h.createElement)(O,oe)}else return(0,h.createElement)(X,{children:H,className:te,key:P,style:t})})}))}c.exports=y.default},function(c,y){c.exports=function(e){var r={};function i(v){if(r[v])return r[v].exports;var o=r[v]={exports:{},id:v,loaded:!1};return e[v].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}return i.m=e,i.c=r,i.p="",i(0)}([function(e,r,i){e.exports=i(1)},function(e,r,i){Object.defineProperty(r,"__esModule",{value:!0});var v=i(2);Object.defineProperty(r,"combineChunks",{enumerable:!0,get:function(){return v.combineChunks}}),Object.defineProperty(r,"fillInChunks",{enumerable:!0,get:function(){return v.fillInChunks}}),Object.defineProperty(r,"findAll",{enumerable:!0,get:function(){return v.findAll}}),Object.defineProperty(r,"findChunks",{enumerable:!0,get:function(){return v.findChunks}})},function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.findAll=function(m){var b=m.autoEscape,x=m.caseSensitive,a=x===void 0?!1:x,g=m.findChunks,l=g===void 0?v:g,u=m.sanitize,j=m.searchWords,p=m.textToHighlight;return o({chunksToHighlight:i({chunks:l({autoEscape:b,caseSensitive:a,sanitize:u,searchWords:j,textToHighlight:p})}),totalLength:p?p.length:0})};var i=r.combineChunks=function(m){var b=m.chunks;return b=b.sort(function(x,a){return x.start-a.start}).reduce(function(x,a){if(x.length===0)return[a];var g=x.pop();if(a.start<=g.end){var l=Math.max(g.end,a.end);x.push({start:g.start,end:l})}else x.push(g,a);return x},[]),b},v=function(m){var b=m.autoEscape,x=m.caseSensitive,a=m.sanitize,g=a===void 0?f:a,l=m.searchWords,u=m.textToHighlight;return u=g(u),l.filter(function(j){return j}).reduce(function(j,p){p=g(p),b&&(p=s(p));for(var R=new RegExp(p,x?"g":"gi"),I=void 0;I=R.exec(u);){var B=I.index,W=R.lastIndex;W>B&&j.push({start:B,end:W}),I.index==R.lastIndex&&R.lastIndex++}return j},[])};r.findChunks=v;var o=r.fillInChunks=function(m){var b=m.chunksToHighlight,x=m.totalLength,a=[],g=function(j,p,R){p-j>0&&a.push({start:j,end:p,highlight:R})};if(b.length===0)g(0,x,!1);else{var l=0;b.forEach(function(u){g(l,u.start,!1),g(u.start,u.end,!0),l=u.end}),g(l,x,!1)}return a};function f(h){return h}function s(h){return h.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])},function(c,y,e){(function(r){c.exports=e(13)()}).call(y,e(5))},function(c,y){var e=c.exports={},r,i;function v(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?r=setTimeout:r=v}catch{r=v}try{typeof clearTimeout=="function"?i=clearTimeout:i=o}catch{i=o}})();function f(j){if(r===setTimeout)return setTimeout(j,0);if((r===v||!r)&&setTimeout)return r=setTimeout,setTimeout(j,0);try{return r(j,0)}catch{try{return r.call(null,j,0)}catch{return r.call(this,j,0)}}}function s(j){if(i===clearTimeout)return clearTimeout(j);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(j);try{return i(j)}catch{try{return i.call(null,j)}catch{return i.call(this,j)}}}var h=[],m=!1,b,x=-1;function a(){!m||!b||(m=!1,b.length?h=b.concat(h):x=-1,h.length&&g())}function g(){if(!m){var j=f(a);m=!0;for(var p=h.length;p;){for(b=h,h=[];++x<p;)b&&b[x].run();x=-1,p=h.length}b=null,m=!1,s(j)}}e.nextTick=function(j){var p=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)p[R-1]=arguments[R];h.push(new l(j,p)),h.length===1&&!m&&f(g)};function l(j,p){this.fun=j,this.array=p}l.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={};function u(){}e.on=u,e.addListener=u,e.once=u,e.off=u,e.removeListener=u,e.removeAllListeners=u,e.emit=u,e.prependListener=u,e.prependOnceListener=u,e.listeners=function(j){return[]},e.binding=function(j){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(j){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(c,y,e){(function(r){var i=e(7),v=e(8),o=e(9),f=e(10),s=e(11),h=e(12);c.exports=function(m,b){var x=typeof Symbol=="function"&&Symbol.iterator,a="@@iterator";function g(t){var d=t&&(x&&t[x]||t[a]);if(typeof d=="function")return d}var l="<<anonymous>>",u={array:I("array"),bool:I("boolean"),func:I("function"),number:I("number"),object:I("object"),string:I("string"),symbol:I("symbol"),any:B(),arrayOf:W,element:V(),instanceOf:G,node:K(),objectOf:Y,oneOf:M,oneOfType:J,shape:_,exact:ee};function j(t,d){return t===d?t!==0||1/t===1/d:t!==t&&d!==d}function p(t){this.message=t,this.stack=""}p.prototype=Error.prototype;function R(t){function d(O,T,N,S,C,k,E){return S=S||l,k=k||N,E!==s&&b&&v(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),T[N]==null?O?T[N]===null?new p("The "+C+" `"+k+"` is marked as required "+("in `"+S+"`, but its value is `null`.")):new p("The "+C+" `"+k+"` is marked as required in "+("`"+S+"`, but its value is `undefined`.")):null:t(T,N,S,C,k)}var w=d.bind(null,!1);return w.isRequired=d.bind(null,!0),w}function I(t){function d(w,O,T,N,S,C){var k=w[O],E=z(k);if(E!==t){var P=X(k);return new p("Invalid "+N+" `"+S+"` of type "+("`"+P+"` supplied to `"+T+"`, expected ")+("`"+t+"`."))}return null}return R(d)}function B(){return R(i.thatReturnsNull)}function W(t){function d(w,O,T,N,S){if(typeof t!="function")return new p("Property `"+S+"` of component `"+T+"` has invalid PropType notation inside arrayOf.");var C=w[O];if(!Array.isArray(C)){var k=z(C);return new p("Invalid "+N+" `"+S+"` of type "+("`"+k+"` supplied to `"+T+"`, expected an array."))}for(var E=0;E<C.length;E++){var P=t(C,E,T,N,S+"["+E+"]",s);if(P instanceof Error)return P}return null}return R(d)}function V(){function t(d,w,O,T,N){var S=d[w];if(!m(S)){var C=z(S);return new p("Invalid "+T+" `"+N+"` of type "+("`"+C+"` supplied to `"+O+"`, expected a single ReactElement."))}return null}return R(t)}function G(t){function d(w,O,T,N,S){if(!(w[O]instanceof t)){var C=t.name||l,k=te(w[O]);return new p("Invalid "+N+" `"+S+"` of type "+("`"+k+"` supplied to `"+T+"`, expected ")+("instance of `"+C+"`."))}return null}return R(d)}function M(t){if(!Array.isArray(t))return i.thatReturnsNull;function d(w,O,T,N,S){for(var C=w[O],k=0;k<t.length;k++)if(j(C,t[k]))return null;var E=JSON.stringify(t);return new p("Invalid "+N+" `"+S+"` of value `"+C+"` "+("supplied to `"+T+"`, expected one of "+E+"."))}return R(d)}function Y(t){function d(w,O,T,N,S){if(typeof t!="function")return new p("Property `"+S+"` of component `"+T+"` has invalid PropType notation inside objectOf.");var C=w[O],k=z(C);if(k!=="object")return new p("Invalid "+N+" `"+S+"` of type "+("`"+k+"` supplied to `"+T+"`, expected an object."));for(var E in C)if(C.hasOwnProperty(E)){var P=t(C,E,T,N,S+"."+E,s);if(P instanceof Error)return P}return null}return R(d)}function J(t){if(!Array.isArray(t))return i.thatReturnsNull;for(var d=0;d<t.length;d++){var w=t[d];if(typeof w!="function")return o(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",Z(w),d),i.thatReturnsNull}function O(T,N,S,C,k){for(var E=0;E<t.length;E++){var P=t[E];if(P(T,N,S,C,k,s)==null)return null}return new p("Invalid "+C+" `"+k+"` supplied to "+("`"+S+"`."))}return R(O)}function K(){function t(d,w,O,T,N){return q(d[w])?null:new p("Invalid "+T+" `"+N+"` supplied to "+("`"+O+"`, expected a ReactNode."))}return R(t)}function _(t){function d(w,O,T,N,S){var C=w[O],k=z(C);if(k!=="object")return new p("Invalid "+N+" `"+S+"` of type `"+k+"` "+("supplied to `"+T+"`, expected `object`."));for(var E in t){var P=t[E];if(P){var H=P(C,E,T,N,S+"."+E,s);if(H)return H}}return null}return R(d)}function ee(t){function d(w,O,T,N,S){var C=w[O],k=z(C);if(k!=="object")return new p("Invalid "+N+" `"+S+"` of type `"+k+"` "+("supplied to `"+T+"`, expected `object`."));var E=f({},w[O],t);for(var P in E){var H=t[P];if(!H)return new p("Invalid "+N+" `"+S+"` key `"+P+"` supplied to `"+T+"`.\nBad object: "+JSON.stringify(w[O],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var D=H(C,P,T,N,S+"."+P,s);if(D)return D}return null}return R(d)}function q(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(q);if(t===null||m(t))return!0;var d=g(t);if(d){var w=d.call(t),O;if(d!==t.entries){for(;!(O=w.next()).done;)if(!q(O.value))return!1}else for(;!(O=w.next()).done;){var T=O.value;if(T&&!q(T[1]))return!1}}else return!1;return!0;default:return!1}}function Q(t,d){return t==="symbol"||d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol}function z(t){var d=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":Q(d,t)?"symbol":d}function X(t){if(typeof t>"u"||t===null)return""+t;var d=z(t);if(d==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return d}function Z(t){var d=X(t);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function te(t){return!t.constructor||!t.constructor.name?l:t.constructor.name}return u.checkPropTypes=h,u.PropTypes=u,u}}).call(y,e(5))},function(c,y){function e(i){return function(){return i}}var r=function(){};r.thatReturns=e,r.thatReturnsFalse=e(!1),r.thatReturnsTrue=e(!0),r.thatReturnsNull=e(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(i){return i},c.exports=r},function(c,y,e){(function(r){function i(v,o,f,s,h,m,b,x){if(!v){var a;if(o===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[f,s,h,m,b,x],l=0;a=new Error(o.replace(/%s/g,function(){return g[l++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}}c.exports=i}).call(y,e(5))},function(c,y,e){(function(r){var i=e(7),v=i;c.exports=v}).call(y,e(5))},function(c,y){var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function v(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function o(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var s={},h=0;h<10;h++)s["_"+String.fromCharCode(h)]=h;var m=Object.getOwnPropertyNames(s).map(function(x){return s[x]});if(m.join("")!=="0123456789")return!1;var b={};return"abcdefghijklmnopqrst".split("").forEach(function(x){b[x]=x}),Object.keys(Object.assign({},b)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}c.exports=o()?Object.assign:function(f,s){for(var h,m=v(f),b,x=1;x<arguments.length;x++){h=Object(arguments[x]);for(var a in h)r.call(h,a)&&(m[a]=h[a]);if(e){b=e(h);for(var g=0;g<b.length;g++)i.call(h,b[g])&&(m[b[g]]=h[b[g]])}}return m}},function(c,y){var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";c.exports=e},function(c,y,e){(function(r){function i(v,o,f,s,h){}c.exports=i}).call(y,e(5))},function(c,y,e){var r=e(7),i=e(8),v=e(11);c.exports=function(){function o(h,m,b,x,a,g){g!==v&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}o.isRequired=o;function f(){return o}var s={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f};return s.checkPropTypes=r,s.PropTypes=s,s}},function(c,y){c.exports=A},function(c,y){var e=function(v,o){return v===o};function r(i){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,o=void 0,f=[],s=void 0,h=!1,m=function(a,g){return v(a,f[g])},b=function(){for(var a=arguments.length,g=Array(a),l=0;l<a;l++)g[l]=arguments[l];return h&&o===this&&g.length===f.length&&g.every(m)||(h=!0,o=this,f=g,s=i.apply(this,g)),s};return b}c.exports=r}])})(me);var We=me.exports;const qe=ye(We),ne=[{title:"Recommended",data:[{title:"Documentation",url:"/docs/documentation/introduction",icon:"documentation",category:"Docs",categoryTitle:"Docs"},{title:"Changelog",url:"/docs/changelog",icon:"changeLog",category:"Docs",categoryTitle:"Docs"},{title:"Button",url:"/ui-components/button",icon:"common",category:"Common",categoryTitle:"UI Components"}]}],Fe=L=>{const{icon:c,label:y,url:e="",isLast:r,keyWord:i,onNavigate:v}=L,{textTheme:o}=pe();return n.jsx(fe,{to:e,onClick:v,children:n.jsxs("div",{className:$("flex items-center justify-between rounded-lg p-3.5 cursor-pointer user-select","bg-gray-50 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700/90",!r&&"mb-3"),children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:$("mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm text-xl group-hover:shadow h-6 w-6 flex items-center justify-center bg-white dark:bg-gray-700",o,"dark:text-gray-100"),children:c&&Ne[c]}),n.jsx("div",{className:"text-gray-900 dark:text-gray-300",children:n.jsx(qe,{autoEscape:!0,highlightClassName:$(o,"underline bg-transparent font-semibold dark:text-white"),searchWords:[i],textToHighlight:y})})]}),n.jsx(we,{className:"text-lg"})]})})},Ge=({className:L})=>{var g;const[c,y]=A.useState(!1),[e,r]=A.useState(ne),[i,v]=A.useState(!1),o=A.useRef(null),f=()=>{v(!1),r(ne)},s=()=>{y(!0)},h=()=>{y(!1),i&&setTimeout(()=>{f()},300)},m=Ce(b,200);async function b(l){if(!l){r(ne);return}i&&v(!1);const u=await Ue({query:l});u.data&&(u.data.length===0&&v(!0),r(u.data))}const x=l=>{m(l.target.value)};A.useEffect(()=>{if(c){const l=setTimeout(()=>{var u;return(u=o.current)==null?void 0:u.focus()},100);return()=>{clearTimeout(l)}}},[c]);const a=()=>{h()};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:$(L,"text-2xl"),onClick:s,children:n.jsx(le,{})}),n.jsx(Oe,{contentClassName:"p-0",isOpen:c,closable:!1,onRequestClose:h,children:n.jsxs("div",{children:[n.jsxs("div",{className:"px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx(le,{className:"text-xl"}),n.jsx("input",{ref:o,className:"ring-0 outline-none block w-full p-4 text-base bg-transparent text-gray-900 dark:text-gray-100",placeholder:"Search...",onChange:x})]}),n.jsx(ge,{size:"xs",onClick:h,children:"Esc"})]}),n.jsxs("div",{className:"py-6 px-5 max-h-[550px] overflow-y-auto",children:[e.map(l=>n.jsxs("div",{className:"mb-6",children:[n.jsx("h6",{className:"mb-3",children:l.title}),l.data.map((u,j)=>{var p;return n.jsx(Fe,{icon:u.icon,label:u.title,url:u.url,keyWord:((p=o.current)==null?void 0:p.value)||"",onNavigate:a},u.title+j)})]},l.title)),e.length===0&&i&&n.jsxs("div",{className:"my-10 text-center text-lg",children:[n.jsx("span",{children:"No results for "}),n.jsxs("span",{className:"heading-text",children:["'",(g=o.current)==null?void 0:g.value,"'"]})]})]})]})})]})},gt=ie(Ge),ue=[{label:"English",value:"en",flag:"us"},{label:"Chinese",value:"zh-cn",flag:"cn"},{label:"Espanol",value:"es",flag:"sp"},{label:"Arabic",value:"ar",flag:"ar"}],Ye=({className:L})=>{const[c,y]=A.useState(!1),e=de(f=>f.locale.currentLang),r=xe(),i=A.useMemo(()=>{var f;return(f=ue.find(s=>s.value===e))==null?void 0:f.flag},[e]),v=n.jsx("div",{className:$(L,"flex items-center"),children:c?n.jsx(he,{size:20}):n.jsx(U,{size:24,shape:"circle",src:`/img/countries/${i}.png`})}),o=f=>{const s=f.replace(/-([a-z])/g,function(m){return m[1].toUpperCase()});y(!0);const h=()=>{Te.changeLanguage(s),r(Se(f)),y(!1)};be[s]().then(()=>{je.locale(s),h()}).catch(()=>{h()})};return n.jsx(F,{renderTitle:v,placement:"bottom-end",children:ue.map(f=>n.jsxs(F.Item,{className:"mb-1 justify-between",eventKey:f.label,onClick:()=>o(f.value),children:[n.jsxs("span",{className:"flex items-center",children:[n.jsx(U,{size:18,shape:"circle",src:`/img/countries/${f.flag}.png`}),n.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:f.label})]}),e===f.value&&n.jsx(ke,{className:"text-emerald-500 text-lg"})]},f.label))})},pt=ie(Ye),re="h-72",Je="/img/avatars/",Ke=({target:L})=>{const c=ze();return n.jsx(U,{shape:"circle",className:`${c(L)}`,children:De(L)})},Qe=L=>{const{type:c,target:y,image:e,status:r}=L;switch(c){case 0:return e?n.jsx(U,{shape:"circle",src:`${Je}${e}`}):n.jsx(Ke,{target:y});case 1:return n.jsx(U,{shape:"circle",className:"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100",icon:n.jsx(Le,{})});case 2:return n.jsx(U,{shape:"circle",className:r==="succeed"?"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100":"bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100",icon:r==="succeed"?n.jsx(Re,{}):n.jsx(Pe,{})});default:return n.jsx(U,{})}},Xe=({className:L,dot:c})=>n.jsx("div",{className:$("text-2xl",L),children:c?n.jsx(ve,{badgeStyle:{top:"3px",right:"6px"},children:n.jsx(ce,{})}):n.jsx(ce,{})}),Ze=({className:L})=>{const[c,y]=A.useState([]),[e,r]=A.useState(!1),[i,v]=A.useState(!1),[o,f]=A.useState(!1),{bgTheme:s}=pe(),{larger:h}=$e(),m=de(l=>l.theme.direction),b=A.useCallback(async()=>{(await Me()).data.count>0?(v(!1),r(!0)):v(!0)},[r]);A.useEffect(()=>{b()},[b]);const x=A.useCallback(async()=>{if(c.length===0){f(!0);const l=await Be();f(!1),y(l.data)}},[c,f]),a=A.useCallback(()=>{const l=c.map(u=>(u.readed||(u.readed=!0),u));y(l),r(!1)},[c]),g=A.useCallback(l=>{const u=c.map(p=>(p.id===l&&(p.readed=!0),p));y(u),c.some(p=>!p.readed)||r(!1)},[c]);return n.jsxs(F,{renderTitle:n.jsx(Xe,{dot:e,className:L}),menuClass:"p-0 min-w-[280px] md:min-w-[340px]",placement:h.md?"bottom-end":"bottom-center",onOpen:x,children:[n.jsx(F.Item,{variant:"header",children:n.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-600 px-4 py-2 flex items-center justify-between",children:[n.jsx("h6",{children:"Notifications"}),n.jsx(Ie,{title:"Mark all as read",children:n.jsx(ge,{variant:"plain",shape:"circle",size:"sm",icon:n.jsx(Ee,{className:"text-xl"}),onClick:a})})]})}),n.jsx("div",{className:$("overflow-y-auto",re),children:n.jsxs(Ae,{direction:m,children:[c.length>0&&c.map((l,u)=>n.jsxs("div",{className:`relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  ${He(c,u)?"":"border-b border-gray-200 dark:border-gray-600"}`,onClick:()=>g(l.id),children:[n.jsx("div",{children:Qe(l)}),n.jsxs("div",{className:"ltr:ml-3 rtl:mr-3",children:[n.jsxs("div",{children:[l.target&&n.jsxs("span",{className:"font-semibold heading-text",children:[l.target," "]}),n.jsx("span",{children:l.description})]}),n.jsx("span",{className:"text-xs",children:l.date})]}),n.jsx(ve,{className:"absolute top-4 ltr:right-4 rtl:left-4 mt-1.5",innerClass:`${l.readed?"bg-gray-300":s} `})]},l.id)),o&&n.jsx("div",{className:$("flex items-center justify-center",re),children:n.jsx(he,{size:40})}),i&&n.jsx("div",{className:$("flex items-center justify-center",re),children:n.jsxs("div",{className:"text-center",children:[n.jsx("img",{className:"mx-auto mb-2 max-w-[150px]",src:"/img/others/no-notification.png",alt:"no-notification"}),n.jsx("h6",{className:"font-semibold",children:"No notifications!"}),n.jsx("p",{className:"mt-1",children:"Please Try again later"})]})})]})}),n.jsx(F.Item,{variant:"header",children:n.jsx("div",{className:"flex justify-center border-t border-gray-200 dark:border-gray-600 px-4 py-2",children:n.jsx(fe,{to:"/app/account/activity-log",className:"font-semibold cursor-pointer p-2 px-3 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white",children:"View All Activity"})})})]})},vt=ie(Ze);export{pt as L,vt as N,gt as S};
