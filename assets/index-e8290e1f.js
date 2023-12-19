import{r as Ce,aD as qe,ar as $e,m as Be}from"./index-d1f55000.js";import{e as Ke,p as Ee}from"./Views-27dec28c.js";var le={exports:{}},U={},se={exports:{}},T={},ie={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",l=/input|select|textarea|button|object|iframe/;function d(c,p){return p.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function g(c){var p=c.offsetWidth<=0&&c.offsetHeight<=0;if(p&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),E=h.getPropertyValue("display");return p?E!==r&&d(c,h):E===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var p=c,h=c.getRootNode&&c.getRootNode();p&&p!==document.body;){if(h&&p===h&&(p=h.host.parentNode),g(p))return!1;p=p.parentNode}return!0}function b(c,p){var h=c.nodeName.toLowerCase(),E=l.test(h)&&!c.disabled||h==="a"&&c.href||p;return E&&a(c)}function v(c){var p=c.getAttribute("tabindex");p===null&&(p=void 0);var h=isNaN(p);return(h||p>=0)&&b(c,!h)}function m(c){var p=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,E){return h.concat(E.shadowRoot?m(E.shadowRoot):[E])},[]);return p.filter(v)}t.exports=e.default})(ie,ie.exports);var Se=ie.exports;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Ve;T.log=Ge;T.handleBlur=j;T.handleFocus=z;T.markForFocusLater=Je;T.returnFocus=Qe;T.popWithoutFocus=Xe;T.setupScopedFocus=Ze;T.teardownScopedFocus=et;var je=Se,ze=Ye(je);function Ye(t){return t&&t.__esModule?t:{default:t}}var k=[],H=null,ue=!1;function Ve(){k=[]}function Ge(){}function j(){ue=!0}function z(){if(ue){if(ue=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var t=(0,ze.default)(H)[0]||H;t.focus()}},0)}}function Je(){k.push(document.activeElement)}function Qe(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{k.length!==0&&(e=k.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Xe(){k.length>0&&k.pop()}function Ze(t){H=t,window.addEventListener?(window.addEventListener("blur",j,!1),document.addEventListener("focus",z,!0)):(window.attachEvent("onBlur",j),document.attachEvent("onFocus",z))}function et(){H=null,window.addEventListener?(window.removeEventListener("blur",j),document.removeEventListener("focus",z)):(window.detachEvent("onBlur",j),document.detachEvent("onFocus",z))}var fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;var o=Se,r=l(o);function l(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function g(a,b){var v=(0,r.default)(a);if(!v.length){b.preventDefault();return}var m=void 0,c=b.shiftKey,p=v[0],h=v[v.length-1],E=d();if(a===E){if(!c)return;m=h}if(h===E&&!c&&(m=p),p===E&&c&&(m=h),m){b.preventDefault(),m.focus();return}var D=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=D!=null&&D[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var W=v.indexOf(E);if(W>-1&&(W+=c?-1:1),m=v[W],typeof m>"u"){b.preventDefault(),m=c?h:p,m.focus();return}b.preventDefault(),m.focus()}}t.exports=e.default})(fe,fe.exports);var tt=fe.exports,R={},N={},we={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(we);var nt=we.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var ot=nt,rt=at(ot);function at(t){return t&&t.__esModule?t:{default:t}}var ne=rt.default,lt=ne.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=ne.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=ne.canUseDOM?window.NodeList:{};N.canUseDOM=ne.canUseDOM;N.default=lt;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=ct;R.log=dt;R.assertNodeList=Me;R.setElement=pt;R.validateElement=ce;R.hide=vt;R.show=mt;R.documentNotReadyOrSSRTesting=ht;var st=Ke,it=ft(st),ut=N;function ft(t){return t&&t.__esModule?t:{default:t}}var w=null;function ct(){w&&(w.removeAttribute?w.removeAttribute("aria-hidden"):w.length!=null?w.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(w).forEach(function(t){return t.removeAttribute("aria-hidden")})),w=null}function dt(){}function Me(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function pt(t){var e=t;if(typeof e=="string"&&ut.canUseDOM){var o=document.querySelectorAll(e);Me(o,e),e=o}return w=e||w,w}function ce(t){var e=t||w;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,it.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function vt(t){var e=!0,o=!1,r=void 0;try{for(var l=ce(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var g=d.value;g.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw r}}}function mt(t){var e=!0,o=!1,r=void 0;try{for(var l=ce(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var g=d.value;g.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw r}}}function ht(){w=null}var I={};Object.defineProperty(I,"__esModule",{value:!0});I.resetState=yt;I.log=bt;var B={},K={};function ve(t,e){t.classList.remove(e)}function yt(){var t=document.getElementsByTagName("html")[0];for(var e in B)ve(t,B[e]);var o=document.body;for(var r in K)ve(o,K[r]);B={},K={}}function bt(){}var Ot=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},gt=function(e,o){return e[o]&&(e[o]-=1),o},_t=function(e,o,r){r.forEach(function(l){Ot(o,l),e.add(l)})},Ct=function(e,o,r){r.forEach(function(l){gt(o,l),o[l]===0&&e.remove(l)})};I.add=function(e,o){return _t(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};I.remove=function(e,o){return Ct(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=St;q.resetState=wt;function Et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ne=function t(){var e=this;Et(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Z=new Ne;function St(){console.log("portalOpenInstances ----------"),console.log(Z.openInstances.length),Z.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function wt(){Z=new Ne}q.default=Z;var de={};Object.defineProperty(de,"__esModule",{value:!0});de.resetState=Rt;de.log=Dt;var Mt=q,Nt=Tt(Mt);function Tt(t){return t&&t.__esModule?t:{default:t}}var C=void 0,M=void 0,L=[];function Rt(){for(var t=[C,M],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}C=M=null,L=[]}function Dt(){console.log("bodyTrap ----------"),console.log(L.length);for(var t=[C,M],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function me(){L.length!==0&&L[L.length-1].focusContent()}function Pt(t,e){!C&&!M&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",me),M=C.cloneNode(),M.addEventListener("focus",me)),L=e,L.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(C.parentElement&&C.parentElement.removeChild(C),M.parentElement&&M.parentElement.removeChild(M))}Nt.default.subscribe(Pt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&(f[n]=y[n])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(u,y){for(var n=0;n<y.length;n++){var s=y[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,y,n){return y&&f(u.prototype,y),n&&f(u,n),u}}(),d=Ce,g=Ee,a=G(g),b=T,v=oe(b),m=tt,c=G(m),p=R,h=oe(p),E=I,D=oe(E),$=N,W=G($),Ae=q,pe=G(Ae);function oe(f){if(f&&f.__esModule)return f;var u={};if(f!=null)for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(u[y]=f[y]);return u.default=f,u}function G(f){return f&&f.__esModule?f:{default:f}}function Fe(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function xe(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function Le(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var re={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ue=function(u){return u.code==="Tab"||u.keyCode===9},We=function(u){return u.code==="Escape"||u.keyCode===27},J=0,ae=function(f){Le(u,f);function u(y){Fe(this,u);var n=xe(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,y));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,_=s.appElement,S=s.ariaHideApp,O=s.htmlOpenClassName,A=s.bodyOpenClassName,F=s.parentSelector,Q=F&&F().ownerDocument||document;A&&D.remove(Q.body,A),O&&D.remove(Q.getElementsByTagName("html")[0],O),S&&J>0&&(J-=1,J===0&&h.show(_)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),pe.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){Ue(s)&&(0,c.default)(n.content,s),n.props.shouldCloseOnEsc&&We(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,_){var S=(typeof _>"u"?"undefined":r(_))==="object"?_:{base:re[s],afterOpen:re[s]+"--after-open",beforeClose:re[s]+"--before-close"},O=S.base;return n.state.afterOpen&&(O=O+" "+S.afterOpen),n.state.beforeClose&&(O=O+" "+S.beforeClose),typeof _=="string"&&_?O+" "+_:O},n.attributesFromObject=function(s,_){return Object.keys(_).reduce(function(S,O){return S[s+"-"+O]=_[O],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,_=n.ariaHideApp,S=n.htmlOpenClassName,O=n.bodyOpenClassName,A=n.parentSelector,F=A&&A().ownerDocument||document;O&&D.add(F.body,O),S&&D.add(F.getElementsByTagName("html")[0],S),_&&(J+=1,h.hide(s)),pe.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,_=n.className,S=n.overlayClassName,O=n.defaultStyles,A=n.children,F=_?{}:O.content,Q=S?{}:O.overlay;if(this.shouldBeClosed())return null;var He={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},Q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ke=o({id:s,ref:this.setContentRef,style:o({},F,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ie=this.props.contentElement(ke,A);return this.props.overlayElement(He,Ie)}}]),u}(d.Component);ae.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ae.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(W.default),a.default.instanceOf($.SafeHTMLCollection),a.default.instanceOf($.SafeNodeList),a.default.arrayOf(a.default.instanceOf(W.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ae,t.exports=e.default})(se,se.exports);var At=se.exports;function Te(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Re(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function De(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Te.__suppressDeprecationWarning=!0;Re.__suppressDeprecationWarning=!0;De.__suppressDeprecationWarning=!0;function Ft(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||r!==null||l!==null){var d=t.displayName||t.name,g=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+g+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Te,e.componentWillReceiveProps=Re),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=De;var a=e.componentDidUpdate;e.componentDidUpdate=function(v,m,c){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,v,m,p)}}return t}const xt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Ft},Symbol.toStringTag,{value:"Module"})),Lt=qe(xt);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Ut=function(){function t(e,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),Pe=Ce,ee=Y(Pe),Wt=$e,te=Y(Wt),Ht=Ee,i=Y(Ht),kt=At,ye=Y(kt),It=R,qt=Bt(It),P=N,be=Y(P),$t=Lt;function Bt(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function Y(t){return t&&t.__esModule?t:{default:t}}function Kt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function jt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var zt=U.portalClassName="ReactModalPortal",Yt=U.bodyOpenClassName="ReactModal__Body--open",x=P.canUseDOM&&te.default.createPortal!==void 0,ge=function(e){return document.createElement(e)},_e=function(){return x?te.default.createPortal:te.default.unstable_renderSubtreeIntoContainer};function X(t){return t()}var V=function(t){jt(e,t);function e(){var o,r,l,d;Kt(this,e);for(var g=arguments.length,a=Array(g),b=0;b<g;b++)a[b]=arguments[b];return d=(r=(l=Oe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),l),l.removePortal=function(){!x&&te.default.unmountComponentAtNode(l.node);var v=X(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var m=_e(),c=m(l,ee.default.createElement(ye.default,he({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(c)},r),Oe(l,d)}return Ut(e,[{key:"componentDidMount",value:function(){if(P.canUseDOM){x||(this.node=ge("div")),this.node.className=this.props.portalClassName;var r=X(this.props.parentSelector);r.appendChild(this.node),!x&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var l=X(r.parentSelector),d=X(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(r,l,d){if(P.canUseDOM){var g=this.props,a=g.isOpen,b=g.portalClassName;r.portalClassName!==b&&(this.node.className=b);var v=d.prevParent,m=d.nextParent;m!==v&&(v.removeChild(this.node),m.appendChild(this.node)),!(!r.isOpen&&!a)&&!x&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!P.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,l=Date.now(),d=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||l+this.props.closeTimeoutMS);d?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!P.canUseDOM||!x)return null;!this.node&&x&&(this.node=ge("div"));var r=_e();return r(ee.default.createElement(ye.default,he({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){qt.setElement(r)}}]),e}(Pe.Component);V.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(be.default),i.default.instanceOf(P.SafeHTMLCollection),i.default.instanceOf(P.SafeNodeList),i.default.arrayOf(i.default.instanceOf(be.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func};V.defaultProps={isOpen:!1,portalClassName:zt,bodyOpenClassName:Yt,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ee.default.createElement("div",e,o)},contentElement:function(e,o){return ee.default.createElement("div",e,o)}};V.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,$t.polyfill)(V);U.default=V;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=U,r=l(o);function l(d){return d&&d.__esModule?d:{default:d}}e.default=r.default,t.exports=e.default})(le,le.exports);var Vt=le.exports;const Qt=Be(Vt);export{Qt as M};
