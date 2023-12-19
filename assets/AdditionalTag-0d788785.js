import{al as C,am as ne,an as oe,ao as ie,r as q,aV as le,m as ce,a as ue,j as m}from"./index-847ef4f8.js";import{F as de,a as pe,b as k}from"./formik.esm-bebe3698.js";import"./Alert-ee5a8060.js";import"./index-3c06be8e.js";import"./Badge-23f456f8.js";import{B as z}from"./Button-b74cc268.js";import"./RangeCalendar-0bcee289.js";import"./Card-7a58c886.js";import"./index-9702d4b4.js";import"./index-260f8e0a.js";import"./Dialog-c1236e17.js";import"./Drawer-7bdb186b.js";import"./index-c7f7da88.js";import{a as j}from"./FormItem-6caba9dc.js";import"./toString-271e4441.js";import{I as me}from"./Input-07dbb44b.js";import"./index-76b04bca.js";import"./index-4292c0e7.js";import"./index-938b8073.js";import"./toast-f5c3f24c.js";import"./Pagination-9c369e6e.js";import"./Progress-abdfc0bf.js";import"./index-629e5bc6.js";import"./ScrollBar-9a2baaea.js";import"./index-dbe4178c.js";import{S as fe}from"./Select-ed97c876.js";import"./Skeleton-4ba1ecfc.js";import"./index-44b26318.js";import"./Switcher-71827c71.js";import"./index-c1eb621b.js";import"./index-4eb372a0.js";import"./Tag-b8e15ca0.js";import"./index-cbb9775c.js";import"./index-0ac64fa5.js";import"./Tooltip-a237a4da.js";import"./Upload-1ad29e1a.js";import{a as he,f as ye}from"./index.esm-571653ad.js";import{Y as ve,Z as ge,_ as Ce,$ as we,a0 as be,t as Oe,v as U,w as De}from"./CrmService-c8ab1850.js";const _e="crmCustomers",W=C("crmCustomers/data/getCustomerStatistic",async()=>(await ve()).data),G=C("crmCustomers/data/getCustomers",async()=>(await ge()).data),ht=C("crmCustomers/data/editCustomer",async({customerId:n,updatedData:s})=>{var l,c;try{return(await Ce(n,s)).data}catch(f){throw new Error((c=(l=f==null?void 0:f.response)==null?void 0:l.data)==null?void 0:c.message)}}),yt=C("crmCustomers/data/deleteCustomer",async n=>{var s,l;try{return await we(n)}catch(c){throw new Error((l=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:l.message)}}),vt=C("crmCustomers/data/createCustomer",async n=>{var s,l;try{return(await be(n)).data}catch(c){throw new Error((l=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:l.message)}}),gt=C("crmCustomers/data/module",async()=>{const n=await Oe();return console.log(n.data,"response"),n.data}),Ct=C("tag-category",async({id:n})=>{const s=await U(n);return console.log(s.data,"Getting Data"),s.data});C("crmCustomers/data/fetchTag",async({id:n})=>(await U(n)).data);const Ne=C("crmCustomers/data/createTag",async({masterId:n,colorName:s,tagName:l,tagCategoryId:c})=>(await De({colorName:s,tagName:l,masterId:n,tagCategoryId:c})).data),xe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Se={status:""},Ee={loading:!1,statisticLoading:!1,customerList:[],displayedCustomersList:[],statisticData:{},tableData:xe,filterData:Se,drawerOpen:!1,selectedCustomer:{},deleteConfirmation:!1},$=ne({name:`${_e}/state`,initialState:Ee,reducers:{setTableData:(n,s)=>{n.tableData=s.payload,n.displayedCustomersList=n.customerList.slice(s.payload.pageSize*(s.payload.pageIndex-1),s.payload.pageSize*s.payload.pageIndex)},setCustomerList:(n,s)=>{n.customerList=s.payload},setFilterData:(n,s)=>{n.filterData=s.payload},setSelectedCustomer:(n,s)=>{n.selectedCustomer=s.payload},setDrawerOpen:n=>{n.drawerOpen=!0},setDrawerClose:n=>{n.drawerOpen=!1},toggleDeleteConfirmation:(n,s)=>{n.deleteConfirmation=s.payload}},extraReducers:n=>{n.addCase(G.fulfilled,(s,l)=>{var c,f,b,g,h;s.customerList=(c=l.payload)==null?void 0:c.data,s.tableData.total=(b=(f=l.payload)==null?void 0:f.data)==null?void 0:b.length,s.displayedCustomersList=(h=(g=l.payload)==null?void 0:g.data)==null?void 0:h.slice(0,10),s.loading=!1}).addCase(G.pending,s=>{s.loading=!0}).addCase(W.fulfilled,(s,l)=>{s.statisticData=l.payload,s.statisticLoading=!1}).addCase(W.pending,s=>{s.statisticLoading=!0})}}),{setTableData:wt,setCustomerList:bt,setFilterData:Ot,setSelectedCustomer:Dt,setDrawerOpen:_t,setDrawerClose:Nt,toggleDeleteConfirmation:xt}=$.actions,Pe=$.reducer,St=oe({data:Pe}),Et=ie;var H={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=b(q),l=c(le);function c(t){return t&&t.__esModule?t:{default:t}}function f(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return f=function(){return t},t}function b(t){if(t&&t.__esModule)return t;if(t===null||g(t)!=="object"&&typeof t!="function")return{default:t};var r=f();if(r&&r.has(t))return r.get(t);var a={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=e?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=t[o]}return a.default=t,r&&r.set(t,a),a}function g(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(a){return typeof a}:g=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g(t)}function h(){return h=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},h.apply(this,arguments)}function w(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,e)}return a}function O(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?w(a,!0).forEach(function(e){u(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function u(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function x(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function T(t,r){for(var a=0;a<r.length;a++){var e=r[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function B(t,r,a){return r&&T(t.prototype,r),a&&T(t,a),t}function Y(t,r){return r&&(g(r)==="object"||typeof r=="function")?r:E(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},S(t)}function E(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&P(t,r)}function P(t,r){return P=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},P(t,r)}var L="Select...",M=function(t){Z(r,t);function r(a){var e;return x(this,r),e=Y(this,S(r).call(this,a)),e.state={selected:e.parseValue(a.value,a.options)||{label:typeof a.placeholder>"u"?L:a.placeholder,value:""},isOpen:!1},e.dropdownRef=(0,s.createRef)(),e.mounted=!0,e.handleDocumentClick=e.handleDocumentClick.bind(E(e)),e.fireChangeEvent=e.fireChangeEvent.bind(E(e)),e}return B(r,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var o=this.parseValue(this.props.value,this.props.options);o!==this.state.selected&&this.setState({selected:o})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?L:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(e.type==="mousedown"&&e.button!==0)&&(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,o){var i;if(typeof e=="string")for(var d=0,y=o.length;d<y;d++)if(o[d].type==="group"){var p=o[d].items.filter(function(v){return v.value===e});p.length&&(i=p[0])}else typeof o[d].value<"u"&&o[d].value===e&&(i=o[d]);return i||e}},{key:"setValue",value:function(e,o){var i={selected:{value:e,label:o},isOpen:!1};this.fireChangeEvent(i),this.setState(i)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var o,i=e.value;typeof i>"u"&&(i=e.label||e);var d=e.label||e.value||e,y=i===this.state.selected.value||i===this.state.selected,p=(o={},u(o,"".concat(this.props.baseClassName,"-option"),!0),u(o,e.className,!!e.className),u(o,"is-selected",y),o),v=(0,l.default)(p),D=Object.keys(e.data||{}).reduce(function(_,N){return O({},_,u({},"data-".concat(N),e.data[N]))},{});return s.default.createElement("div",h({key:i,className:v,onMouseDown:this.setValue.bind(this,i,d),onClick:this.setValue.bind(this,i,d),role:"option","aria-selected":y?"true":"false"},D),d)}},{key:"buildMenu",value:function(){var e=this,o=this.props,i=o.options,d=o.baseClassName,y=i.map(function(p){if(p.type==="group"){var v=s.default.createElement("div",{className:"".concat(d,"-title")},p.name),D=p.items.map(function(_){return e.renderOption(_)});return s.default.createElement("div",{className:"".concat(d,"-group"),key:p.name,role:"listbox",tabIndex:"-1"},v,D)}else return e.renderOption(p)});return y.length?y:s.default.createElement("div",{className:"".concat(d,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var e,o,i,d,y,p=this.props,v=p.baseClassName,D=p.controlClassName,_=p.placeholderClassName,N=p.menuClassName,R=p.arrowClassName,F=p.arrowClosed,V=p.arrowOpen,I=p.className,A=this.props.disabled?"Dropdown-disabled":"",K=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,Q=(0,l.default)((e={},u(e,"".concat(v,"-root"),!0),u(e,I,!!I),u(e,"is-open",this.state.isOpen),e)),X=(0,l.default)((o={},u(o,"".concat(v,"-control"),!0),u(o,D,!!D),u(o,A,!!A),o)),ee=(0,l.default)((i={},u(i,"".concat(v,"-placeholder"),!0),u(i,_,!!_),u(i,"is-selected",this.isValueSelected()),i)),te=(0,l.default)((d={},u(d,"".concat(v,"-menu"),!0),u(d,N,!!N),d)),ae=(0,l.default)((y={},u(y,"".concat(v,"-arrow"),!0),u(y,R,!!R),y)),se=s.default.createElement("div",{className:ee},K),re=this.state.isOpen?s.default.createElement("div",{className:te,"aria-expanded":"true"},this.buildMenu()):null;return s.default.createElement("div",{ref:this.dropdownRef,className:Q},s.default.createElement("div",{className:X,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},se,s.default.createElement("div",{className:"".concat(v,"-arrow-wrapper")},V&&F?this.state.isOpen?V:F:s.default.createElement("span",{className:ae}))),re)}}]),r}(s.Component);M.defaultProps={baseClassName:"Dropdown"};var J=M;n.default=J})(H);const Pt=ce(H),ke=({onCancel:n,onSave:s})=>m.jsxs("div",{className:"text-right w-full",children:[m.jsx(z,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),m.jsx(z,{size:"sm",variant:"solid",type:"button",onClick:s,children:"Save"})]}),kt=({isOpen:n,onOpenChange:s,categoryList:l,moduleName:c})=>{const f=q.useRef(null),b=ue(),g=async()=>{var h,w,O,u;if(c){const x=c.toString();await b(Ne({masterId:x,tagName:(h=f.current)==null?void 0:h.values.tag,colorName:(w=f.current)==null?void 0:w.values.tagColor,tagCategoryId:(O=f.current)==null?void 0:O.values.category.value})),s(!1),console.log((u=f.current)==null?void 0:u.values)}};return m.jsx("div",{className:`${n?"flex":"hidden"} justify-center items-center top-16 left-0 z-10 bg-white p-4 border border-gray-300 w-full absolute rounded-8`,children:n&&m.jsx(de,{innerRef:f,initialValues:{category:"",tag:"",tagColor:"#808080"},onSubmit:h=>{console.log("values",h," ==== > Here The Value Is Prinitng")},children:({values:h,setFieldValue:w})=>m.jsxs(pe,{children:[m.jsx(m.Fragment,{children:m.jsx(j,{label:"Category",children:m.jsx(k,{type:"text",autoComplete:"off",name:"category",placeholder:"Category",options:l,component:fe,prefix:m.jsx(he,{className:"text-xl"}),onChange:O=>{w("category",O)}})})}),m.jsxs("div",{className:"flex items-center justify-center",children:[m.jsx(j,{label:"Tag Name",children:m.jsx(k,{type:"text",autoComplete:"off",name:"tag",placeholder:"Additional Tag Name",component:me,prefix:m.jsx(ye,{className:"text-xl"})})}),m.jsx(j,{children:m.jsx(k,{type:"color",name:"tagColor",className:"w-8 ml-2 p-2 rounded-full h-8 mt-6"})})]}),m.jsx(ke,{onCancel:()=>s(!1),onSave:g})]})})})};export{kt as A,Pt as D,Ct as a,W as b,vt as c,Dt as d,ht as e,gt as f,G as g,yt as h,wt as i,_t as j,Ot as k,St as r,Nt as s,xt as t,Et as u};
