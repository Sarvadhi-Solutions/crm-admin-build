import{am as g,an as ne,ao as oe,ap as ie,r as q,aV as le,m as ce,a as ue,j as m}from"./index-f0c7b593.js";import{F as de,a as pe,b as P}from"./formik.esm-251b655f.js";import"./Alert-6365923a.js";import"./index-e46ae74f.js";import"./Badge-eb9394bd.js";import{B as A}from"./Button-7f5aeb19.js";import"./RangeCalendar-4446a681.js";import"./Card-d2bb7bb1.js";import"./index-3454c4af.js";import"./index-7fb568e6.js";import"./Dialog-863f25dc.js";import"./Drawer-3213f845.js";import"./index-096ca5d8.js";import{a as k}from"./FormItem-39c4f499.js";import"./toString-15315b0c.js";import{I as me}from"./Input-b0936f40.js";import"./index-cae4e5da.js";import"./index-cd4a639d.js";import"./index-e9f2e738.js";import"./toast-98ab077b.js";import"./Pagination-4451079e.js";import"./Progress-c215b6a7.js";import"./index-aa5943b4.js";import"./ScrollBar-af66e651.js";import"./index-2d35600c.js";import{S as fe}from"./Select-20b819a9.js";import"./Skeleton-3fb87948.js";import"./index-681acbb6.js";import"./Switcher-52adaf57.js";import"./index-b0e56b87.js";import"./index-0fbd5995.js";import"./Tag-c0e1c031.js";import"./index-11547d1a.js";import"./index-ff0fc04f.js";import"./Tooltip-c002e367.js";import"./Upload-652ef9c2.js";import{a as he,f as ye}from"./index.esm-648d214b.js";import{_ as ve,$ as Ce,a0 as ge,a1 as we,a2 as be,t as Oe,v as G,w as De}from"./CrmService-dbe6e33f.js";const _e="crmCustomers",z=g("crmCustomers/data/getCustomerStatistic",async()=>(await ve()).data),W=g("crmCustomers/data/getCustomers",async()=>(await Ce()).data),ht=g("crmCustomers/data/editCustomer",async({customerId:n,updatedData:r})=>{var l,c;try{return(await ge(n,r)).data}catch(f){throw new Error((c=(l=f==null?void 0:f.response)==null?void 0:l.data)==null?void 0:c.message)}}),yt=g("crmCustomers/data/deleteCustomer",async n=>{var r,l;try{return await we(n)}catch(c){throw new Error((l=(r=c==null?void 0:c.response)==null?void 0:r.data)==null?void 0:l.message)}}),vt=g("crmCustomers/data/createCustomer",async n=>{var r,l;try{return(await be(n)).data}catch(c){throw new Error((l=(r=c==null?void 0:c.response)==null?void 0:r.data)==null?void 0:l.message)}}),Ct=g("crmCustomers/data/module",async()=>(await Oe()).data),gt=g("tag-category",async({id:n})=>(await G(n)).data);g("crmCustomers/data/fetchTag",async({id:n})=>(await G(n)).data);const Ne=g("crmCustomers/data/createTag",async({masterId:n,colorName:r,tagName:l,tagCategoryId:c})=>(await De({colorName:r,tagName:l,masterId:n,tagCategoryId:c})).data),xe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Se={status:""},Ee={loading:!1,statisticLoading:!1,customerList:[],displayedCustomersList:[],statisticData:{},tableData:xe,filterData:Se,drawerOpen:!1,selectedCustomer:{},deleteConfirmation:!1},U=ne({name:`${_e}/state`,initialState:Ee,reducers:{setTableData:(n,r)=>{n.tableData=r.payload,n.displayedCustomersList=n.customerList.slice(r.payload.pageSize*(r.payload.pageIndex-1),r.payload.pageSize*r.payload.pageIndex)},setCustomerList:(n,r)=>{n.customerList=r.payload},setFilterData:(n,r)=>{n.filterData=r.payload},setSelectedCustomer:(n,r)=>{n.selectedCustomer=r.payload},setDrawerOpen:n=>{n.drawerOpen=!0},setDrawerClose:n=>{n.drawerOpen=!1},toggleDeleteConfirmation:(n,r)=>{n.deleteConfirmation=r.payload}},extraReducers:n=>{n.addCase(W.fulfilled,(r,l)=>{var c,f,b,C,h;r.customerList=(c=l.payload)==null?void 0:c.data,r.tableData.total=(b=(f=l.payload)==null?void 0:f.data)==null?void 0:b.length,r.displayedCustomersList=(h=(C=l.payload)==null?void 0:C.data)==null?void 0:h.slice(0,10),r.loading=!1}).addCase(W.pending,r=>{r.loading=!0}).addCase(z.fulfilled,(r,l)=>{r.statisticData=l.payload,r.statisticLoading=!1}).addCase(z.pending,r=>{r.statisticLoading=!0})}}),{setTableData:wt,setCustomerList:bt,setFilterData:Ot,setSelectedCustomer:Dt,setDrawerOpen:_t,setDrawerClose:Nt,toggleDeleteConfirmation:xt}=U.actions,Pe=U.reducer,St=oe({data:Pe}),Et=ie;var $={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=b(q),l=c(le);function c(t){return t&&t.__esModule?t:{default:t}}function f(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return f=function(){return t},t}function b(t){if(t&&t.__esModule)return t;if(t===null||C(t)!=="object"&&typeof t!="function")return{default:t};var s=f();if(s&&s.has(t))return s.get(t);var a={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=e?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=t[o]}return a.default=t,s&&s.set(t,a),a}function C(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(a){return typeof a}:C=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},C(t)}function h(){return h=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},h.apply(this,arguments)}function w(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,e)}return a}function O(t){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?w(a,!0).forEach(function(e){u(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function u(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}function H(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function j(t,s){for(var a=0;a<s.length;a++){var e=s[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function B(t,s,a){return s&&j(t.prototype,s),a&&j(t,a),t}function J(t,s){return s&&(C(s)==="object"||typeof s=="function")?s:S(t)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},x(t)}function S(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function K(t,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),s&&E(t,s)}function E(t,s){return E=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},E(t,s)}var T="Select...",L=function(t){K(s,t);function s(a){var e;return H(this,s),e=J(this,x(s).call(this,a)),e.state={selected:e.parseValue(a.value,a.options)||{label:typeof a.placeholder>"u"?T:a.placeholder,value:""},isOpen:!1},e.dropdownRef=(0,r.createRef)(),e.mounted=!0,e.handleDocumentClick=e.handleDocumentClick.bind(S(e)),e.fireChangeEvent=e.fireChangeEvent.bind(S(e)),e}return B(s,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var o=this.parseValue(this.props.value,this.props.options);o!==this.state.selected&&this.setState({selected:o})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?T:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,o){var i;if(typeof e=="string")for(var d=0,y=o.length;d<y;d++)if(o[d].type==="group"){var p=o[d].items.filter(function(v){return v.value===e});p.length&&(i=p[0])}else typeof o[d].value<"u"&&o[d].value===e&&(i=o[d]);return i||e}},{key:"setValue",value:function(e,o){var i={selected:{value:e,label:o},isOpen:!1};this.fireChangeEvent(i),this.setState(i)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var o,i=e.value;typeof i>"u"&&(i=e.label||e);var d=e.label||e.value||e,y=i===this.state.selected.value||i===this.state.selected,p=(o={},u(o,"".concat(this.props.baseClassName,"-option"),!0),u(o,e.className,!!e.className),u(o,"is-selected",y),o),v=(0,l.default)(p),D=Object.keys(e.data||{}).reduce(function(_,N){return O({},_,u({},"data-".concat(N),e.data[N]))},{});return r.default.createElement("div",h({key:i,className:v,onMouseDown:this.setValue.bind(this,i,d),onClick:this.setValue.bind(this,i,d),role:"option","aria-selected":y?"true":"false"},D),d)}},{key:"buildMenu",value:function(){var e=this,o=this.props,i=o.options,d=o.baseClassName,y=i.map(function(p){if(p.type==="group"){var v=r.default.createElement("div",{className:"".concat(d,"-title")},p.name),D=p.items.map(function(_){return e.renderOption(_)});return r.default.createElement("div",{className:"".concat(d,"-group"),key:p.name,role:"listbox",tabIndex:"-1"},v,D)}else return e.renderOption(p)});return y.length?y:r.default.createElement("div",{className:"".concat(d,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,o,i,d,y,p=this.props,v=p.baseClassName,D=p.controlClassName,_=p.placeholderClassName,N=p.menuClassName,M=p.arrowClassName,R=p.arrowClosed,F=p.arrowOpen,V=p.className,I=this.props.disabled?"Dropdown-disabled":"",X=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,Y=(0,l.default)((e={},u(e,"".concat(v,"-root"),!0),u(e,V,!!V),u(e,"is-open",this.state.isOpen),e)),Z=(0,l.default)((o={},u(o,"".concat(v,"-control"),!0),u(o,D,!!D),u(o,I,!!I),o)),ee=(0,l.default)((i={},u(i,"".concat(v,"-placeholder"),!0),u(i,_,!!_),u(i,"is-selected",this.isValueSelected()),i)),te=(0,l.default)((d={},u(d,"".concat(v,"-menu"),!0),u(d,N,!!N),d)),ae=(0,l.default)((y={},u(y,"".concat(v,"-arrow"),!0),u(y,M,!!M),y)),re=r.default.createElement("div",{className:ee},X),se=this.state.isOpen?r.default.createElement("div",{className:te,"aria-expanded":"true"},this.buildMenu()):null;return r.default.createElement("div",{ref:this.dropdownRef,className:Y},r.default.createElement("div",{className:Z,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},re,r.default.createElement("div",{className:"".concat(v,"-arrow-wrapper")},F&&R?this.state.isOpen?F:R:r.default.createElement("span",{className:ae}))),se)}}]),s}(r.Component);L.defaultProps={baseClassName:"Dropdown"};var Q=L;n.default=Q})($);const Pt=ce($),ke=({onCancel:n,onSave:r})=>m.jsxs("div",{className:"text-right w-full",children:[m.jsx(A,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),m.jsx(A,{size:"sm",variant:"solid",type:"button",onClick:r,children:"Save"})]}),kt=({isOpen:n,onOpenChange:r,categoryList:l,moduleName:c})=>{const f=q.useRef(null),b=ue(),C=async()=>{var h,w,O;if(c){const u=c.toString();await b(Ne({masterId:u,tagName:(h=f.current)==null?void 0:h.values.tag,colorName:(w=f.current)==null?void 0:w.values.tagColor,tagCategoryId:(O=f.current)==null?void 0:O.values.category.value})),r(!1)}};return m.jsx("div",{className:`${n?"flex":"hidden"} justify-center items-center top-16 left-0 z-10 bg-white p-4 border border-gray-300 w-full absolute rounded-8`,children:n&&m.jsx(de,{innerRef:f,initialValues:{category:"",tag:"",tagColor:"#808080"},onSubmit:h=>{console.log("values",h," ==== > Here The Value Is Prinitng")},children:({values:h,setFieldValue:w})=>m.jsxs(pe,{children:[m.jsx(m.Fragment,{children:m.jsx(k,{label:"Category",children:m.jsx(P,{isClearable:!0,type:"text",autoComplete:"off",name:"category",placeholder:"Category",options:l,component:fe,prefix:m.jsx(he,{className:"text-xl"}),onChange:O=>{w("category",O)}})})}),m.jsxs("div",{className:"flex items-center justify-center",children:[m.jsx(k,{label:"Tag Name",children:m.jsx(P,{type:"text",autoComplete:"off",name:"tag",placeholder:"Additional Tag Name",component:me,prefix:m.jsx(ye,{className:"text-xl"})})}),m.jsx(k,{children:m.jsx(P,{type:"color",name:"tagColor",className:"w-8 ml-2 p-2 rounded-full h-8 mt-6"})})]}),m.jsx(ke,{onCancel:()=>r(!1),onSave:C})]})})})};export{kt as A,Pt as D,gt as a,z as b,vt as c,Dt as d,ht as e,Ct as f,W as g,yt as h,wt as i,_t as j,Ot as k,St as r,Nt as s,xt as t,Et as u};
