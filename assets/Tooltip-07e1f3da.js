import{r as i,j as a,c as l,av as g,a3 as $}from"./index-814886c9.js";import{s as M,u as L,a as F,b as q}from"./usePopper-6c0a6ae3.js";import{w as Y,b as x,m as z}from"./Views-fed2ee34.js";import{b as R,c as O,d as _,e as k}from"./index.esm-cc12ad2c.js";import{A as G}from"./index-d9b10e52.js";var C=i.createContext(),A=i.createContext();function J(t){var e=t.children,o=i.useState(null),n=o[0],r=o[1],s=i.useRef(!1);i.useEffect(function(){return function(){s.current=!0}},[]);var f=i.useCallback(function(p){s.current||r(p)},[]);return i.createElement(C.Provider,{value:n},i.createElement(A.Provider,{value:f},e))}var K=function(){},Q=function(){return Promise.resolve(null)},V=[];function X(t){var e=t.placement,o=e===void 0?"bottom":e,n=t.strategy,r=n===void 0?"absolute":n,s=t.modifiers,f=s===void 0?V:s,p=t.referenceElement,d=t.onFirstUpdate,b=t.innerRef,j=t.children,N=i.useContext(C),m=i.useState(null),h=m[0],y=m[1],c=i.useState(null),v=c[0],w=c[1];i.useEffect(function(){M(b,h)},[b,h]);var W=i.useMemo(function(){return{placement:o,strategy:r,onFirstUpdate:d,modifiers:[].concat(f,[{name:"arrow",enabled:v!=null,options:{element:v}}])}},[o,r,d,f,v]),P=L(p||N,h,W),u=P.state,E=P.styles,D=P.forceUpdate,S=P.update,H=i.useMemo(function(){return{ref:y,style:E.popper,placement:u?u.placement:o,hasPopperEscaped:u&&u.modifiersData.hide?u.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:u&&u.modifiersData.hide?u.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:E.arrow,ref:w},forceUpdate:D||K,update:S||Q}},[y,w,o,u,E,S,D]);return F(j)(H)}function Z(t){var e=t.children,o=t.innerRef,n=i.useContext(A),r=i.useCallback(function(s){M(o,s),q(n,s)},[o,n]);return i.useEffect(function(){return function(){return M(o,null)}},[]),i.useEffect(function(){Y(!!n,"`Reference` should not be used outside of a `Manager` component.")},[n]),F(e)({ref:r})}const T=({placement:t,color:e,colorDark:o})=>{const n=`absolute text-${e} dark:text-${o}`,r=()=>{switch(t){case"top":return a.jsx(k,{className:l(n,"-bottom-2 w-full left-0")});case"top-start":return a.jsx(k,{className:l(n,"-bottom-2 left-0 ml-3")});case"top-end":return a.jsx(k,{className:l(n,"-bottom-2 right-0 mr-3")});case"right":return a.jsx(_,{className:l(n,"-left-2 top-1/2 transform -translate-y-1/2")});case"right-start":return a.jsx(_,{className:l(n,"-left-2 top-2")});case"right-end":return a.jsx(_,{className:l(n,"-left-2 bottom-2")});case"bottom":return a.jsx(O,{className:l(n,"-top-2 w-full left-0")});case"bottom-start":return a.jsx(O,{className:l(n,"-top-2 left-0 ml-3")});case"bottom-end":return a.jsx(O,{className:l(n,"-top-2 right-0 mr-3")});case"left":return a.jsx(R,{className:l(n,"-right-2 top-1/2 transform -translate-y-1/2")});case"left-start":return a.jsx(R,{className:l(n,"-right-2 top-2")});case"left-end":return a.jsx(R,{className:l(n,"-right-2 bottom-2")})}};return a.jsx("div",{children:r()})};var ee=!!(typeof window<"u"&&window.document&&window.document.createElement),te=function(){function t(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();function ne(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function re(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var B=function(t){re(e,t);function e(){return ne(this,e),oe(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return te(e,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return ee?(!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),g.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),e}($.Component);B.propTypes={children:x.node.isRequired,node:x.any};const ae=B;var ie=function(){function t(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();function le(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function se(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ce(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var I=function(t){ce(e,t);function e(){return le(this,e),se(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return ie(e,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(n){this.renderPortal()}},{key:"componentWillUnmount",value:function(){g.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(n){!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var r=this.props.children;typeof this.props.children.type=="function"&&(r=$.cloneElement(this.props.children)),this.portal=g.unstable_renderSubtreeIntoContainer(this,r,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),e}($.Component);const ue=I;I.propTypes={children:x.node.isRequired,node:x.any};var U=void 0;g.createPortal?U=ae:U=ue;const fe=U,de=t=>{const{title:e,forceUpdate:o,open:n}=t;return i.useEffect(()=>{n&&o()},[n]),a.jsx("span",{children:e})},pe=t=>{const{className:e,children:o,isOpen:n=!1,placement:r="top",title:s,wrapperClass:f,...p}=t,[d,b]=i.useState(n),j=i.useRef(),N="gray-800",m="black",h=`tooltip bg-${N} dark:bg-${m}`,y=i.useCallback(c=>{n||b(c)},[n]);return a.jsxs(J,{children:[a.jsx(Z,{children:({ref:c})=>a.jsx("span",{ref:c,className:l("tooltip-wrapper",f),onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:o})}),d&&a.jsx(fe,{children:a.jsx(X,{placement:r,innerRef:c=>j.current=c,modifiers:[{name:"arrow",options:{element:T}},{name:"offset",options:{offset:[0,7]}}],strategy:"fixed",children:({ref:c,style:v,...w})=>a.jsx(G,{children:a.jsxs(z.div,{ref:c,className:l(h,e),style:v,initial:{opacity:0,visibility:"hidden"},animate:d?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"},transition:{duration:.15,type:"tween"},children:[a.jsx(de,{open:d,title:s,...p,...w}),a.jsx(T,{placement:r,color:N,colorDark:m})]})})})})]})};pe.displayName="Tooltip";export{pe as T};
