import{r as K,aw as Q,m as X}from"./index-3b75abce.js";var x={};(function(p){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var u=L(K),d=O(Q);function O(t){return t&&t.__esModule?t:{default:t}}function C(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return C=function(){return t},t}function L(t){if(t&&t.__esModule)return t;if(t===null||v(t)!=="object"&&typeof t!="function")return{default:t};var n=C();if(n&&n.has(t))return n.get(t);var a={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var s=e?Object.getOwnPropertyDescriptor(t,r):null;s&&(s.get||s.set)?Object.defineProperty(a,r,s):a[r]=t[r]}return a.default=t,n&&n.set(t,a),a}function v(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?v=function(a){return typeof a}:v=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v(t)}function b(){return b=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},b.apply(this,arguments)}function D(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function T(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?D(a,!0).forEach(function(e){i(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function i(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function W(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function N(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function j(t,n,a){return n&&N(t.prototype,n),a&&N(t,a),t}function F(t,n){return n&&(v(n)==="object"||typeof n=="function")?n:_(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},w(t)}function _(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}function g(t,n){return g=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},g(t,n)}var E="Select...",P=function(t){U(n,t);function n(a){var e;return W(this,n),e=F(this,w(n).call(this,a)),e.state={selected:e.parseValue(a.value,a.options)||{label:typeof a.placeholder>"u"?E:a.placeholder,value:""},isOpen:!1},e.dropdownRef=(0,u.createRef)(),e.mounted=!0,e.handleDocumentClick=e.handleDocumentClick.bind(_(e)),e.fireChangeEvent=e.fireChangeEvent.bind(_(e)),e}return j(n,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var r=this.parseValue(this.props.value,this.props.options);r!==this.state.selected&&this.setState({selected:r})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?E:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,r){var s;if(typeof e=="string")for(var l=0,c=r.length;l<c;l++)if(r[l].type==="group"){var o=r[l].items.filter(function(f){return f.value===e});o.length&&(s=o[0])}else typeof r[l].value<"u"&&r[l].value===e&&(s=r[l]);return s||e}},{key:"setValue",value:function(e,r){var s={selected:{value:e,label:r},isOpen:!1};this.fireChangeEvent(s),this.setState(s)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var r,s=e.value;typeof s>"u"&&(s=e.label||e);var l=e.label||e.value||e,c=s===this.state.selected.value||s===this.state.selected,o=(r={},i(r,"".concat(this.props.baseClassName,"-option"),!0),i(r,e.className,!!e.className),i(r,"is-selected",c),r),f=(0,d.default)(o),h=Object.keys(e.data||{}).reduce(function(m,y){return T({},m,i({},"data-".concat(y),e.data[y]))},{});return u.default.createElement("div",b({key:s,className:f,onMouseDown:this.setValue.bind(this,s,l),onClick:this.setValue.bind(this,s,l),role:"option","aria-selected":c?"true":"false"},h),l)}},{key:"buildMenu",value:function(){var e=this,r=this.props,s=r.options,l=r.baseClassName,c=s.map(function(o){if(o.type==="group"){var f=u.default.createElement("div",{className:"".concat(l,"-title")},o.name),h=o.items.map(function(m){return e.renderOption(m)});return u.default.createElement("div",{className:"".concat(l,"-group"),key:o.name,role:"listbox",tabIndex:"-1"},f,h)}else return e.renderOption(o)});return c.length?c:u.default.createElement("div",{className:"".concat(l,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,r,s,l,c,o=this.props,f=o.baseClassName,h=o.controlClassName,m=o.placeholderClassName,y=o.menuClassName,k=o.arrowClassName,S=o.arrowClosed,M=o.arrowOpen,R=o.className,V=this.props.disabled?"Dropdown-disabled":"",A=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,I=(0,d.default)((e={},i(e,"".concat(f,"-root"),!0),i(e,R,!!R),i(e,"is-open",this.state.isOpen),e)),H=(0,d.default)((r={},i(r,"".concat(f,"-control"),!0),i(r,h,!!h),i(r,V,!!V),r)),$=(0,d.default)((s={},i(s,"".concat(f,"-placeholder"),!0),i(s,m,!!m),i(s,"is-selected",this.isValueSelected()),s)),z=(0,d.default)((l={},i(l,"".concat(f,"-menu"),!0),i(l,y,!!y),l)),G=(0,d.default)((c={},i(c,"".concat(f,"-arrow"),!0),i(c,k,!!k),c)),B=u.default.createElement("div",{className:$},A),J=this.state.isOpen?u.default.createElement("div",{className:z,"aria-expanded":"true"},this.buildMenu()):null;return u.default.createElement("div",{ref:this.dropdownRef,className:I},u.default.createElement("div",{className:H,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},B,u.default.createElement("div",{className:"".concat(f,"-arrow-wrapper")},M&&S?this.state.isOpen?M:S:u.default.createElement("span",{className:G}))),J)}}]),n}(u.Component);P.defaultProps={baseClassName:"Dropdown"};var q=P;p.default=q})(x);const Z=X(x);function ee(p){return p.map(d=>({type:"group",name:d.categoryName,items:d.tags.map(O=>({value:O.id,label:O.tagName}))}))}function te(p){return p.map(u=>({value:u.id,label:u.categoryName}))}export{Z as D,te as c,ee as t};
