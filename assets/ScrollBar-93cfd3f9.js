import{a4 as fe,r as le,j as ce}from"./index-afeb99dd.js";import{p as Re}from"./Views-f7a9b898.js";var ve={},ge={},G={exports:{}},I={exports:{}};(function(){var r,n,a,u,c,S;typeof performance<"u"&&performance!==null&&performance.now?I.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(I.exports=function(){return(r()-c)/1e6},n=process.hrtime,r=function(){var g;return g=n(),g[0]*1e9+g[1]},u=r(),S=process.uptime()*1e9,c=u-S):Date.now?(I.exports=function(){return Date.now()-a},a=Date.now()):(I.exports=function(){return new Date().getTime()-a},a=new Date().getTime())}).call(fe);var Fe=I.exports,Pe=Fe,_=typeof window>"u"?fe:window,X=["moz","webkit"],R="AnimationFrame",F=_["request"+R],B=_["cancel"+R]||_["cancelRequest"+R];for(var U=0;!F&&U<X.length;U++)F=_[X[U]+"Request"+R],B=_[X[U]+"Cancel"+R]||_[X[U]+"CancelRequest"+R];if(!F||!B){var ae=0,de=0,x=[],Ae=1e3/60;F=function(r){if(x.length===0){var n=Pe(),a=Math.max(0,Ae-(n-ae));ae=a+n,setTimeout(function(){var u=x.slice(0);x.length=0;for(var c=0;c<u.length;c++)if(!u[c].cancelled)try{u[c].callback(ae)}catch(S){setTimeout(function(){throw S},0)}},Math.round(a))}return x.push({handle:++de,callback:r,cancelled:!1}),de},B=function(r){for(var n=0;n<x.length;n++)x[n].handle===r&&(x[n].cancelled=!0)}}G.exports=function(r){return F.call(_,r)};G.exports.cancel=function(){B.apply(_,arguments)};G.exports.polyfill=function(r){r||(r=_),r.requestAnimationFrame=F,r.cancelAnimationFrame=B};var Ne=G.exports,Z={exports:{}},oe=null,he=["Webkit","Moz","O","ms"],Ue=function(n){oe||(oe=document.createElement("div"));var a=oe.style;if(n in a)return n;for(var u=n.charAt(0).toUpperCase()+n.slice(1),c=he.length;c>=0;c--){var S=he[c]+u;if(S in a)return S}return!1},Ie=Xe,Be=/\s/,$e=/(_|-|\.|:)/,je=/([a-z][A-Z]|[A-Z][a-z])/;function Xe(r){return Be.test(r)?r.toLowerCase():$e.test(r)?(qe(r)||r).toLowerCase():je.test(r)?Ze(r).toLowerCase():r.toLowerCase()}var Ye=/[\W_]+(.|$)/g;function qe(r){return r.replace(Ye,function(n,a){return a?" "+a:""})}var Ge=/(.)([A-Z]+)/g;function Ze(r){return r.replace(Ge,function(n,a,u){return a+" "+u.toLowerCase().split("").join(" ")})}var Je=Ie,Ke=Qe;function Qe(r){return Je(r).replace(/[\W_]+(.|$)/g,function(n,a){return a?" "+a:""}).trim()}var et=Ke,tt=rt;function rt(r){return et(r).replace(/\s(\w)/g,function(n,a){return a.toUpperCase()})}var nt={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},it=function(r,n){return typeof n=="number"&&!nt[r]?n+"px":n},at=Ue,ot=tt,Y={float:"cssFloat"},lt=it;function q(r,n,a){var u=Y[n];if(typeof u>"u"&&(u=st(n)),u){if(a===void 0)return r.style[u];r.style[u]=lt(u,a)}}function ut(r,n){for(var a in n)n.hasOwnProperty(a)&&q(r,a,n[a])}function st(r){var n=ot(r),a=at(n);return Y[n]=Y[r]=Y[a]=a,a}function me(){arguments.length===2?typeof arguments[1]=="string"?arguments[0].style.cssText=arguments[1]:ut(arguments[0],arguments[1]):q(arguments[0],arguments[1],arguments[2])}Z.exports=me;Z.exports.set=me;Z.exports.get=function(r,n){return Array.isArray(n)?n.reduce(function(a,u){return a[u]=q(r,u||""),a},{}):q(r,n||"")};var pe=Z.exports,Se={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){return typeof a=="string"}})(Se);var Te={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=S;var n=pe,a=u(n);function u(g){return g&&g.__esModule?g:{default:g}}var c=!1;function S(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(g&&c!==!1)return c;if(typeof document<"u"){var T=document.createElement("div");(0,a.default)(T,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(T),c=T.offsetWidth-T.clientWidth,document.body.removeChild(T)}else c=0;return c||0}})(Te);var ye={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(){return!1}})(ye);var be={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){var u=a.clientWidth,c=getComputedStyle(a),S=c.paddingLeft,g=c.paddingRight;return u-parseFloat(S)-parseFloat(g)}})(be);var we={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){var u=a.clientHeight,c=getComputedStyle(a),S=c.paddingTop,g=c.paddingBottom;return u-parseFloat(S)-parseFloat(g)}})(we);var y={};Object.defineProperty(y,"__esModule",{value:!0});y.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"};y.containerStyleAutoHeight={height:"auto"};y.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"};y.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0};y.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0};y.trackHorizontalStyleDefault={position:"absolute",height:6};y.trackVerticalStyleDefault={position:"absolute",width:6};y.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"};y.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"};y.disableSelectStyle={userSelect:"none"};y.disableSelectStyleReset={userSelect:""};var O={};Object.defineProperty(O,"__esModule",{value:!0});var E=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])}return r};O.renderViewDefault=ht;O.renderTrackHorizontalDefault=ft;O.renderTrackVerticalDefault=vt;O.renderThumbHorizontalDefault=gt;O.renderThumbVerticalDefault=mt;var ct=le,$=dt(ct);function dt(r){return r&&r.__esModule?r:{default:r}}function J(r,n){var a={};for(var u in r)n.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(r,u)&&(a[u]=r[u]);return a}function ht(r){return $.default.createElement("div",r)}function ft(r){var n=r.style,a=J(r,["style"]),u=E({},n,{right:2,bottom:2,left:2,borderRadius:3});return $.default.createElement("div",E({style:u},a))}function vt(r){var n=r.style,a=J(r,["style"]),u=E({},n,{right:2,bottom:2,top:2,borderRadius:3});return $.default.createElement("div",E({style:u},a))}function gt(r){var n=r.style,a=J(r,["style"]),u=E({},n,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return $.default.createElement("div",E({style:u},a))}function mt(r){var n=r.style,a=J(r,["style"]),u=E({},n,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return $.default.createElement("div",E({style:u},a))}(function(r){Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(v){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(v[t]=o[t])}return v},a=function(){function v(d,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(d,i.key,i)}}return function(d,o,t){return o&&v(d.prototype,o),t&&v(d,t),d}}(),u=Ne,c=M(u),S=pe,g=M(S),T=le,He=Re,f=M(He),ke=Se,ue=M(ke),De=Te,P=M(De),_e=ye,Me=M(_e),ze=be,K=M(ze),Le=we,Q=M(Le),b=y,A=O;function M(v){return v&&v.__esModule?v:{default:v}}function Ve(v,d){var o={};for(var t in v)d.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(v,t)&&(o[t]=v[t]);return o}function We(v,d){if(!(v instanceof d))throw new TypeError("Cannot call a class as a function")}function Ee(v,d){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:v}function xe(v,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);v.prototype=Object.create(d&&d.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(v,d):v.__proto__=d)}var ee=function(v){xe(d,v);function d(o){var t;We(this,d);for(var i=arguments.length,l=Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];var e=Ee(this,(t=d.__proto__||Object.getPrototypeOf(d)).call.apply(t,[this,o].concat(l)));return e.getScrollLeft=e.getScrollLeft.bind(e),e.getScrollTop=e.getScrollTop.bind(e),e.getScrollWidth=e.getScrollWidth.bind(e),e.getScrollHeight=e.getScrollHeight.bind(e),e.getClientWidth=e.getClientWidth.bind(e),e.getClientHeight=e.getClientHeight.bind(e),e.getValues=e.getValues.bind(e),e.getThumbHorizontalWidth=e.getThumbHorizontalWidth.bind(e),e.getThumbVerticalHeight=e.getThumbVerticalHeight.bind(e),e.getScrollLeftForOffset=e.getScrollLeftForOffset.bind(e),e.getScrollTopForOffset=e.getScrollTopForOffset.bind(e),e.scrollLeft=e.scrollLeft.bind(e),e.scrollTop=e.scrollTop.bind(e),e.scrollToLeft=e.scrollToLeft.bind(e),e.scrollToTop=e.scrollToTop.bind(e),e.scrollToRight=e.scrollToRight.bind(e),e.scrollToBottom=e.scrollToBottom.bind(e),e.handleTrackMouseEnter=e.handleTrackMouseEnter.bind(e),e.handleTrackMouseLeave=e.handleTrackMouseLeave.bind(e),e.handleHorizontalTrackMouseDown=e.handleHorizontalTrackMouseDown.bind(e),e.handleVerticalTrackMouseDown=e.handleVerticalTrackMouseDown.bind(e),e.handleHorizontalThumbMouseDown=e.handleHorizontalThumbMouseDown.bind(e),e.handleVerticalThumbMouseDown=e.handleVerticalThumbMouseDown.bind(e),e.handleWindowResize=e.handleWindowResize.bind(e),e.handleScroll=e.handleScroll.bind(e),e.handleDrag=e.handleDrag.bind(e),e.handleDragEnd=e.handleDragEnd.bind(e),e.state={didMountUniversal:!1},e}return a(d,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){var t=this.props.universal;t&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,u.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var t=this.view||{},i=t.scrollLeft,l=i===void 0?0:i,s=t.scrollTop,e=s===void 0?0:s,h=t.scrollWidth,m=h===void 0?0:h,p=t.scrollHeight,z=p===void 0?0:p,k=t.clientWidth,L=k===void 0?0:k,w=t.clientHeight,D=w===void 0?0:w;return{left:l/(m-L)||0,top:e/(z-D)||0,scrollLeft:l,scrollTop:e,scrollWidth:m,scrollHeight:z,clientWidth:L,clientHeight:D}}},{key:"getThumbHorizontalWidth",value:function(){var t=this.props,i=t.thumbSize,l=t.thumbMinSize,s=this.view,e=s.scrollWidth,h=s.clientWidth,m=(0,K.default)(this.trackHorizontal),p=Math.ceil(h/e*m);return m<=p?0:i||Math.max(p,l)}},{key:"getThumbVerticalHeight",value:function(){var t=this.props,i=t.thumbSize,l=t.thumbMinSize,s=this.view,e=s.scrollHeight,h=s.clientHeight,m=(0,Q.default)(this.trackVertical),p=Math.ceil(h/e*m);return m<=p?0:i||Math.max(p,l)}},{key:"getScrollLeftForOffset",value:function(t){var i=this.view,l=i.scrollWidth,s=i.clientWidth,e=(0,K.default)(this.trackHorizontal),h=this.getThumbHorizontalWidth();return t/(e-h)*(l-s)}},{key:"getScrollTopForOffset",value:function(t){var i=this.view,l=i.scrollHeight,s=i.clientHeight,e=(0,Q.default)(this.trackVertical),h=this.getThumbVerticalHeight();return t/(e-h)*(l-s)}},{key:"scrollLeft",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollLeft=t)}},{key:"scrollTop",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollTop=t)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if(!(typeof document>"u"||!this.view)){var t=this.view,i=this.trackHorizontal,l=this.trackVertical,s=this.thumbHorizontal,e=this.thumbVertical;t.addEventListener("scroll",this.handleScroll),(0,P.default)()&&(i.addEventListener("mouseenter",this.handleTrackMouseEnter),i.addEventListener("mouseleave",this.handleTrackMouseLeave),i.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),l.addEventListener("mouseenter",this.handleTrackMouseEnter),l.addEventListener("mouseleave",this.handleTrackMouseLeave),l.addEventListener("mousedown",this.handleVerticalTrackMouseDown),s.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),e.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if(!(typeof document>"u"||!this.view)){var t=this.view,i=this.trackHorizontal,l=this.trackVertical,s=this.thumbHorizontal,e=this.thumbVertical;t.removeEventListener("scroll",this.handleScroll),(0,P.default)()&&(i.removeEventListener("mouseenter",this.handleTrackMouseEnter),i.removeEventListener("mouseleave",this.handleTrackMouseLeave),i.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),l.removeEventListener("mouseenter",this.handleTrackMouseEnter),l.removeEventListener("mouseleave",this.handleTrackMouseLeave),l.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),s.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),e.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(t){var i=this,l=this.props,s=l.onScroll,e=l.onScrollFrame;s&&s(t),this.update(function(h){var m=h.scrollLeft,p=h.scrollTop;i.viewScrollLeft=m,i.viewScrollTop=p,e&&e(h)}),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var t=this.props.onScrollStart;t&&t(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){var t=this.props.autoHide;t&&this.showTracks()}},{key:"handleScrollStop",value:function(){var t=this.props.onScrollStop;t&&t(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"handleWindowResize",value:function(){(0,P.default)(!1),this.forceUpdate()}},{key:"handleHorizontalTrackMouseDown",value:function(t){t.preventDefault();var i=t.target,l=t.clientX,s=i.getBoundingClientRect(),e=s.left,h=this.getThumbHorizontalWidth(),m=Math.abs(e-l)-h/2;this.view.scrollLeft=this.getScrollLeftForOffset(m)}},{key:"handleVerticalTrackMouseDown",value:function(t){t.preventDefault();var i=t.target,l=t.clientY,s=i.getBoundingClientRect(),e=s.top,h=this.getThumbVerticalHeight(),m=Math.abs(e-l)-h/2;this.view.scrollTop=this.getScrollTopForOffset(m)}},{key:"handleHorizontalThumbMouseDown",value:function(t){t.preventDefault(),this.handleDragStart(t);var i=t.target,l=t.clientX,s=i.offsetWidth,e=i.getBoundingClientRect(),h=e.left;this.prevPageX=s-(l-h)}},{key:"handleVerticalThumbMouseDown",value:function(t){t.preventDefault(),this.handleDragStart(t);var i=t.target,l=t.clientY,s=i.offsetHeight,e=i.getBoundingClientRect(),h=e.top;this.prevPageY=s-(l-h)}},{key:"setupDragging",value:function(){(0,g.default)(document.body,b.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=Me.default}},{key:"teardownDragging",value:function(){(0,g.default)(document.body,b.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(t){this.dragging=!0,t.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(t){if(this.prevPageX){var i=t.clientX,l=this.trackHorizontal.getBoundingClientRect(),s=l.left,e=this.getThumbHorizontalWidth(),h=e-this.prevPageX,m=-s+i-h;this.view.scrollLeft=this.getScrollLeftForOffset(m)}if(this.prevPageY){var p=t.clientY,z=this.trackVertical.getBoundingClientRect(),k=z.top,L=this.getThumbVerticalHeight(),w=L-this.prevPageY,D=-k+p-w;this.view.scrollTop=this.getScrollTopForOffset(D)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){var t=this.props.autoHide;t&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,g.default)(this.trackHorizontal,{opacity:1}),(0,g.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var t=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var i=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout(function(){(0,g.default)(t.trackHorizontal,{opacity:0}),(0,g.default)(t.trackVertical,{opacity:0})},i)}}},{key:"detectScrolling",value:function(){var t=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval(function(){t.lastViewScrollLeft===t.viewScrollLeft&&t.lastViewScrollTop===t.viewScrollTop&&(clearInterval(t.detectScrollingInterval),t.scrolling=!1,t.handleScrollStop()),t.lastViewScrollLeft=t.viewScrollLeft,t.lastViewScrollTop=t.viewScrollTop},100))}},{key:"raf",value:function(t){var i=this;this.requestFrame&&c.default.cancel(this.requestFrame),this.requestFrame=(0,c.default)(function(){i.requestFrame=void 0,t()})}},{key:"update",value:function(t){var i=this;this.raf(function(){return i._update(t)})}},{key:"_update",value:function(t){var i=this.props,l=i.onUpdate,s=i.hideTracksWhenNotNeeded,e=this.getValues();if((0,P.default)()){var h=e.scrollLeft,m=e.clientWidth,p=e.scrollWidth,z=(0,K.default)(this.trackHorizontal),k=this.getThumbHorizontalWidth(),L=h/(p-m)*(z-k),w={width:k,transform:"translateX("+L+"px)"},D=e.scrollTop,V=e.clientHeight,W=e.scrollHeight,te=(0,Q.default)(this.trackVertical),j=this.getThumbVerticalHeight(),re=D/(W-V)*(te-j),C={height:j,transform:"translateY("+re+"px)"};if(s){var ne={visibility:p>m?"visible":"hidden"},ie={visibility:W>V?"visible":"hidden"};(0,g.default)(this.trackHorizontal,ne),(0,g.default)(this.trackVertical,ie)}(0,g.default)(this.thumbHorizontal,w),(0,g.default)(this.thumbVertical,C)}l&&l(e),typeof t=="function"&&t(e)}},{key:"render",value:function(){var t=this,i=(0,P.default)(),l=this.props;l.onScroll,l.onScrollFrame,l.onScrollStart,l.onScrollStop,l.onUpdate;var s=l.renderView,e=l.renderTrackHorizontal,h=l.renderTrackVertical,m=l.renderThumbHorizontal,p=l.renderThumbVertical,z=l.tagName;l.hideTracksWhenNotNeeded;var k=l.autoHide;l.autoHideTimeout;var L=l.autoHideDuration;l.thumbSize,l.thumbMinSize;var w=l.universal,D=l.autoHeight,V=l.autoHeightMin,W=l.autoHeightMax,te=l.style,j=l.children,re=Ve(l,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),C=this.state.didMountUniversal,ne=n({},b.containerStyleDefault,D&&n({},b.containerStyleAutoHeight,{minHeight:V,maxHeight:W}),te),ie=n({},b.viewStyleDefault,{marginRight:i?-i:0,marginBottom:i?-i:0},D&&n({},b.viewStyleAutoHeight,{minHeight:(0,ue.default)(V)?"calc("+V+" + "+i+"px)":V+i,maxHeight:(0,ue.default)(W)?"calc("+W+" + "+i+"px)":W+i}),D&&w&&!C&&{minHeight:V,maxHeight:W},w&&!C&&b.viewStyleUniversalInitial),se={transition:"opacity "+L+"ms",opacity:0},Oe=n({},b.trackHorizontalStyleDefault,k&&se,(!i||w&&!C)&&{display:"none"}),Ce=n({},b.trackVerticalStyleDefault,k&&se,(!i||w&&!C)&&{display:"none"});return(0,T.createElement)(z,n({},re,{style:ne,ref:function(H){t.container=H}}),[(0,T.cloneElement)(s({style:ie}),{key:"view",ref:function(H){t.view=H}},j),(0,T.cloneElement)(e({style:Oe}),{key:"trackHorizontal",ref:function(H){t.trackHorizontal=H}},(0,T.cloneElement)(m({style:b.thumbHorizontalStyleDefault}),{ref:function(H){t.thumbHorizontal=H}})),(0,T.cloneElement)(h({style:Ce}),{key:"trackVertical",ref:function(H){t.trackVertical=H}},(0,T.cloneElement)(p({style:b.thumbVerticalStyleDefault}),{ref:function(H){t.thumbVertical=H}}))])}}]),d}(T.Component);r.default=ee,ee.propTypes={onScroll:f.default.func,onScrollFrame:f.default.func,onScrollStart:f.default.func,onScrollStop:f.default.func,onUpdate:f.default.func,renderView:f.default.func,renderTrackHorizontal:f.default.func,renderTrackVertical:f.default.func,renderThumbHorizontal:f.default.func,renderThumbVertical:f.default.func,tagName:f.default.string,thumbSize:f.default.number,thumbMinSize:f.default.number,hideTracksWhenNotNeeded:f.default.bool,autoHide:f.default.bool,autoHideTimeout:f.default.number,autoHideDuration:f.default.number,autoHeight:f.default.bool,autoHeightMin:f.default.oneOfType([f.default.number,f.default.string]),autoHeightMax:f.default.oneOfType([f.default.number,f.default.string]),universal:f.default.bool,style:f.default.object,children:f.default.node},ee.defaultProps={renderView:A.renderViewDefault,renderTrackHorizontal:A.renderTrackHorizontalDefault,renderTrackVertical:A.renderTrackVerticalDefault,renderThumbHorizontal:A.renderThumbHorizontalDefault,renderThumbVertical:A.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}})(ge);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Scrollbars=void 0;var n=ge,a=u(n);function u(c){return c&&c.__esModule?c:{default:c}}r.default=a.default,r.Scrollbars=a.default})(ve);const pt=le.forwardRef((r,n)=>{const{direction:a="ltr",...u}=r;return ce.jsx(ve.Scrollbars,{ref:n,renderView:c=>ce.jsx("div",{...c,style:{...c.style,...a==="rtl"&&{marginLeft:c.style.marginRight,marginRight:0}}}),...u})});pt.displayName="ScrollBar";export{pt as S};
