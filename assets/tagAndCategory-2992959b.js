import{j as _,r as K,aw as Q,m as Z}from"./index-7b0349c6.js";import"./Alert-ebb58074.js";import"./index-2cc854d3.js";import"./Badge-50330686.js";import"./Button-9fa3d2fc.js";import"./RangeCalendar-8f0006dc.js";import"./Card-a848a8eb.js";import"./index-f606ec14.js";import"./index-e01b641f.js";import"./Dialog-9d79d85c.js";import"./Drawer-464b2899.js";import"./index-d98edc99.js";import"./FormItem-26ad5e8d.js";import"./toString-a66e4ffc.js";import"./Input-5106ef66.js";import"./index-10cbcf37.js";import"./index-89cb79e5.js";import"./index-24734fba.js";import"./toast-184c7e0a.js";import"./Pagination-2aca965e.js";import"./Progress-10ad9a7b.js";import"./index-9b4971f3.js";import"./ScrollBar-e6e4e948.js";import"./index-c97a424b.js";import"./Select-1f2320ab.js";import"./Skeleton-8e99ae89.js";import"./index-2cd79135.js";import"./Switcher-e923ff00.js";import"./index-0df82d35.js";import"./index-77e8bdc2.js";import{T as D}from"./Tag-a0bc44e6.js";import"./index-aa85e3d4.js";import"./index-df8f9f26.js";import"./Tooltip-a61fe545.js";import"./Upload-4b7aa6b8.js";const je=({tags:f})=>{if(f.length<=2)return _.jsx("div",{className:"flex",children:f.map(c=>_.jsx(D,{className:"border-0 rounded",style:{backgroundColor:`${c.colorName}10`,color:c.colorName,margin:"0.15rem"},children:c.tagName},c.id))});{const c=f.slice(0,2),h=f.length-2;return _.jsxs("div",{className:"flex",children:[c.map(m=>_.jsx(D,{className:"border-0 rounded",style:{backgroundColor:`${m.colorName}10`,color:m.colorName,margin:"0.15rem"},children:m.tagName},m.id)),_.jsxs(D,{className:"border-0 rounded",style:{backgroundColor:"gray",color:"white",margin:"0.15rem"},children:["+",h]})]})}};var j={};(function(f){Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var u=L(K),c=h(Q);function h(t){return t&&t.__esModule?t:{default:t}}function m(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return m=function(){return t},t}function L(t){if(t&&t.__esModule)return t;if(t===null||b(t)!=="object"&&typeof t!="function")return{default:t};var a=m();if(a&&a.has(t))return a.get(t);var r={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var s=e?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=t[n]}return r.default=t,a&&a.set(t,r),r}function b(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?b=function(r){return typeof r}:b=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b(t)}function g(){return g=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},g.apply(this,arguments)}function P(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,e)}return r}function V(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?P(r,!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function I(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function E(t,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function W(t,a,r){return a&&E(t.prototype,a),r&&E(t,r),t}function F(t,a){return a&&(b(a)==="object"||typeof a=="function")?a:N(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},w(t)}function N(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),a&&C(t,a)}function C(t,a){return C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},C(t,a)}var S="Select...",k=function(t){G(a,t);function a(r){var e;return I(this,a),e=F(this,w(a).call(this,r)),e.state={selected:e.parseValue(r.value,r.options)||{label:typeof r.placeholder>"u"?S:r.placeholder,value:""},isOpen:!1},e.dropdownRef=(0,u.createRef)(),e.mounted=!0,e.handleDocumentClick=e.handleDocumentClick.bind(N(e)),e.fireChangeEvent=e.fireChangeEvent.bind(N(e)),e}return W(a,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var n=this.parseValue(this.props.value,this.props.options);n!==this.state.selected&&this.setState({selected:n})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?S:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,n){var s;if(typeof e=="string")for(var o=0,p=n.length;o<p;o++)if(n[o].type==="group"){var i=n[o].items.filter(function(d){return d.value===e});i.length&&(s=i[0])}else typeof n[o].value<"u"&&n[o].value===e&&(s=n[o]);return s||e}},{key:"setValue",value:function(e,n){var s={selected:{value:e,label:n},isOpen:!1};this.fireChangeEvent(s),this.setState(s)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var n,s=e.value;typeof s>"u"&&(s=e.label||e);var o=e.label||e.value||e,p=s===this.state.selected.value||s===this.state.selected,i=(n={},l(n,"".concat(this.props.baseClassName,"-option"),!0),l(n,e.className,!!e.className),l(n,"is-selected",p),n),d=(0,c.default)(i),v=Object.keys(e.data||{}).reduce(function(y,O){return V({},y,l({},"data-".concat(O),e.data[O]))},{});return u.default.createElement("div",g({key:s,className:d,onMouseDown:this.setValue.bind(this,s,o),onClick:this.setValue.bind(this,s,o),role:"option","aria-selected":p?"true":"false"},v),o)}},{key:"buildMenu",value:function(){var e=this,n=this.props,s=n.options,o=n.baseClassName,p=s.map(function(i){if(i.type==="group"){var d=u.default.createElement("div",{className:"".concat(o,"-title")},i.name),v=i.items.map(function(y){return e.renderOption(y)});return u.default.createElement("div",{className:"".concat(o,"-group"),key:i.name,role:"listbox",tabIndex:"-1"},d,v)}else return e.renderOption(i)});return p.length?p:u.default.createElement("div",{className:"".concat(o,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,n,s,o,p,i=this.props,d=i.baseClassName,v=i.controlClassName,y=i.placeholderClassName,O=i.menuClassName,M=i.arrowClassName,x=i.arrowClosed,T=i.arrowOpen,A=i.className,R=this.props.disabled?"Dropdown-disabled":"",q=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,X=(0,c.default)((e={},l(e,"".concat(d,"-root"),!0),l(e,A,!!A),l(e,"is-open",this.state.isOpen),e)),Y=(0,c.default)((n={},l(n,"".concat(d,"-control"),!0),l(n,v,!!v),l(n,R,!!R),n)),$=(0,c.default)((s={},l(s,"".concat(d,"-placeholder"),!0),l(s,y,!!y),l(s,"is-selected",this.isValueSelected()),s)),H=(0,c.default)((o={},l(o,"".concat(d,"-menu"),!0),l(o,O,!!O),o)),z=(0,c.default)((p={},l(p,"".concat(d,"-arrow"),!0),l(p,M,!!M),p)),B=u.default.createElement("div",{className:$},q),J=this.state.isOpen?u.default.createElement("div",{className:H,"aria-expanded":"true"},this.buildMenu()):null;return u.default.createElement("div",{ref:this.dropdownRef,className:X},u.default.createElement("div",{className:Y,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},B,u.default.createElement("div",{className:"".concat(d,"-arrow-wrapper")},T&&x?this.state.isOpen?T:x:u.default.createElement("span",{className:z}))),J)}}]),a}(u.Component);k.defaultProps={baseClassName:"Dropdown"};var U=k;f.default=U})(j);const Le=Z(j);function Ve(f){return f.map(c=>({type:"group",name:c.categoryName,items:c.tags.map(h=>({value:h.id,label:h.tagName}))}))}function Ie(f){return f.map(u=>({value:u.id,label:u.categoryName}))}export{Le as D,je as T,Ie as c,Ve as t};
