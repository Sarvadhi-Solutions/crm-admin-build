import{j as e,r as t,aH as O,t as ge}from"./index-7a16719d.js";import{D as Se}from"./DemoLayout-7c805240.js";import{S as s,c as xe,_ as u,h as Oe,u as Ce,e as Fe}from"./Select-9b097dd7.js";import{A as P}from"./index-a6767bf5.js";import{B as je}from"./index.esm-a0bff864.js";import{_ as Ae}from"./objectWithoutPropertiesLoose-df62547b.js";import{_ as ye}from"./toConsumableArray-f36ee3dc.js";import{C as Be}from"./react-select-creatable.esm-4588a42a.js";import"./AdaptableCard-13b794a2.js";import"./Card-1701bbfb.js";import"./Views-6f74b325.js";import"./Affix-67c05f4f.js";import"./Button-796af526.js";import"./context-0b7be94f.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./SyntaxHighlighter-746c9a4b.js";import"./index-7c73c178.js";import"./DemoComponentApi-898a36fa.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./floating-ui.dom-bef9cea3.js";import"./get-d062fc7e.js";import"./toString-8f2f6138.js";import"./_MapCache-4c25b116.js";import"./useMergeRef-788c4cb0.js";const we=[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Ne=()=>e.jsx("div",{children:e.jsx(s,{placeholder:"Please Select",options:we})}),w=[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Pe=()=>e.jsxs("div",{children:[e.jsx(s,{size:"sm",className:"mb-4",placeholder:"Please Select",options:w}),e.jsx(s,{className:"mb-4",placeholder:"Please Select",options:w}),e.jsx(s,{size:"lg",placeholder:"Please Select",options:w})]}),d=[{value:"ocean",label:"Ocean",color:"#00B8D9",isDisabled:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isDisabled:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A",isDisabled:!0},{value:"slate",label:"Slate",color:"#253858",isDisabled:!0},{value:"silver",label:"Silver",color:"#666666"}],De=()=>e.jsxs("div",{children:[e.jsx(s,{className:"mb-4",placeholder:"Certain options disabled",options:d}),e.jsx(s,{isDisabled:!0,className:"mb-4",placeholder:"Please Select",defaultValue:d[2],options:d}),e.jsx(s,{isDisabled:!0,isMulti:!0,defaultValue:[d[2],d[3]],options:d})]}),_e=[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Ee=()=>e.jsx("div",{children:e.jsx(s,{isSearchable:!1,placeholder:"Please Select",options:_e})}),N=[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Le=()=>e.jsx("div",{children:e.jsx(s,{isMulti:!0,placeholder:"Please Select",defaultValue:[N[2],N[3]],options:N})}),q=[{label:"Colours",options:[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}]},{label:"Flavours",options:[{value:"vanilla",label:"Vanilla",rating:"safe"},{value:"chocolate",label:"Chocolate",rating:"good"},{value:"strawberry",label:"Strawberry",rating:"wild"},{value:"salted-caramel",label:"Salted Caramel",rating:"crazy"}]}],Ve=l=>e.jsx("div",{className:"font-bold text-xs uppercase text-gray-800 dark:text-white my-2",children:l.label}),Re=()=>e.jsx("div",{children:e.jsx(s,{defaultValue:q[0].options[1],options:q,formatGroupLabel:Ve})}),{MultiValueLabel:Ie,Control:$e}=xe,g=[{value:"us",label:"United State",imgPath:"/img/countries/us.png"},{value:"cn",label:"China",imgPath:"/img/countries/cn.png"},{value:"jp",label:"Japan",imgPath:"/img/countries/jp.png"},{value:"fr",label:"French",imgPath:"/img/countries/fr.png"}],J=({innerProps:l,label:a,data:o,isSelected:r})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...l,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{shape:"circle",size:20,src:o.imgPath}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:a})]}),r&&e.jsx(je,{className:"text-emerald-500 text-xl"})]}),ze=({children:l,...a})=>{const o=a.getValue()[0];return e.jsxs($e,{...a,children:[o&&e.jsx(P,{className:"ltr:ml-4 rtl:mr-4",shape:"circle",size:18,src:o.imgPath}),l]})},Ge=({children:l,...a})=>{const{imgPath:o}=a.data;return e.jsx(Ie,{...a,children:e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx(P,{className:"mr-2 rtl:ml-2",shape:"circle",size:15,src:o}),l]})})},Me=()=>e.jsxs("div",{children:[e.jsx(s,{options:g,components:{Option:J,Control:ze},defaultValue:g[0],className:"mb-4"}),e.jsx(s,{isMulti:!0,options:g,components:{Option:J,MultiValueLabel:Ge},defaultValue:[g[1],g[2]],className:"mb-4"})]});var ke=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ye(l){var a=l.defaultOptions,o=a===void 0?!1:a,r=l.cacheOptions,i=r===void 0?!1:r,m=l.loadOptions;l.options;var D=l.isLoading,K=D===void 0?!1:D,_=l.onInputChange,E=l.filterOption,Q=E===void 0?null:E,L=ye(l,ke),V=L.inputValue,b=t.useRef(void 0),S=t.useRef(!1),X=t.useState(Array.isArray(o)?o:void 0),R=u(X,2),Z=R[0],I=R[1],ee=t.useState(typeof V<"u"?V:""),$=u(ee,2),z=$[0],C=$[1],le=t.useState(o===!0),G=u(le,2),oe=G[0],v=G[1],ae=t.useState(void 0),M=u(ae,2),F=M[0],j=M[1],te=t.useState([]),k=u(te,2),re=k[0],A=k[1],se=t.useState(!1),Y=u(se,2),ne=Y[0],x=Y[1],ce=t.useState({}),T=u(ce,2),f=T[0],H=T[1],ie=t.useState(void 0),U=u(ie,2),ue=U[0],pe=U[1],de=t.useState(void 0),W=u(de,2),me=W[0],be=W[1];i!==me&&(H({}),be(i)),o!==ue&&(I(Array.isArray(o)?o:void 0),pe(o)),t.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var y=t.useCallback(function(h,p){if(!m)return p();var n=m(h,p);n&&typeof n.then=="function"&&n.then(p,function(){return p()})},[m]);t.useEffect(function(){o===!0&&y(z,function(h){S.current&&(I(h||[]),v(!!b.current))})},[]);var ve=t.useCallback(function(h,p){var n=Oe(h,p,_);if(!n){b.current=void 0,C(""),j(""),A([]),v(!1),x(!1);return}if(i&&f[n])C(n),j(n),A(f[n]),v(!1),x(!1);else{var he=b.current={};C(n),v(!0),x(!F),y(n,function(B){S&&he===b.current&&(b.current=void 0,v(!1),j(n),A(B||[]),x(!1),H(B?O(O({},f),{},ge({},n,B)):f))})}},[i,y,F,f,_]),fe=ne?[]:z&&F?re:Z||[];return O(O({},L),{},{options:fe,isLoading:oe||K,onInputChange:ve,filterOption:Q})}var Te=t.forwardRef(function(l,a){var o=Ye(l),r=Ce(o);return t.createElement(Fe,Ae({ref:a},r))}),He=Te;const Ue=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],We=l=>Ue.filter(a=>a.label.toLowerCase().includes(l.toLowerCase())),qe=(l,a)=>{setTimeout(()=>{const o=We(l);a(o)},1e3)},Je=()=>{const[l,a]=t.useState(""),o=r=>{const i=r.replace(/\W/g,"");return a(i),i};return console.log(l),e.jsx("div",{children:e.jsx(s,{cacheOptions:!0,defaultOptions:!0,loadOptions:qe,componentAs:He,onInputChange:o})})},Ke=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Qe=()=>{const[l,a]=t.useState([]),[o,r]=t.useState(!1),i=()=>{setTimeout(()=>{a(Ke),r(!1)},1500)},m=()=>{l.length===0&&(r(!0),i())};return e.jsx("div",{children:e.jsx(s,{options:l,isLoading:o,onFocus:m})})},Xe=[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC"},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],Ze=()=>{const l=(o,r)=>{console.group("Value Changed"),console.log(o),console.log(`action: ${r.action}`),console.groupEnd()},a=(o,r)=>{console.group("Input Changed"),console.log(o),console.log(`action: ${r.action}`),console.groupEnd()};return e.jsx("div",{children:e.jsx(s,{isClearable:!0,placeholder:"Type something...",componentAs:Be,options:Xe,onChange:l,onInputChange:a})})},c="Select",el={title:"Select",desc:'Select allows a user to pick single or multiple options from a list. This component is a wrapper of <a class="underline text-blue-500" href="https://react-select.com/home" target="_blank">react-select</a>.'},ll=[{mdName:"Basic",mdPath:c,title:"Basic",desc:"Basic Usage.",component:e.jsx(Ne,{})},{mdName:"Size",mdPath:c,title:"Size",desc:"There's three sizes of option for Select.",component:e.jsx(Pe,{})},{mdName:"MultiSelection",mdPath:c,title:"Multi Selection",desc:"By setting <code>isMulti</code> to true, we can select multiple options from the list.",component:e.jsx(Le,{})},{mdName:"Disabled",mdPath:c,title:"Disabled",desc:"Example of disabled.",component:e.jsx(De,{})},{mdName:"DisabledSearch",mdPath:c,title:"Disabled Search",desc:"Select is searchable by default, but we can also turn it off by setting <code>isSearchable</code> to false.",component:e.jsx(Ee,{})},{mdName:"Group",mdPath:c,title:"Group",desc:"Options can be grouped with nested data.",component:e.jsx(Re,{})},{mdName:"Custom",mdPath:c,title:"Custom",desc:'React-select allow us to make customization the building block of the component, refer <a class="underline text-blue-500" href="https://react-select.com/components" target="_blank">here</a> for more detail infomation',component:e.jsx(Me,{})},{mdName:"AsyncOnSearch",mdPath:c,title:"Async on Search",desc:"Use the Async component to load options from a remote source as the user types.",component:e.jsx(Je,{})},{mdName:"LoadOptionOnExpand",mdPath:c,title:"Load Options on Expand",desc:"We can also load options upon clicking the Select.",component:e.jsx(Qe,{})},{mdName:"Creatable",mdPath:c,title:"Creatable",desc:"Example of creating new option via Select input.",component:e.jsx(Ze,{})}],ol=[{component:"Select",api:[{propName:"componentAs",type:"<code>ReactNode</code>",default:"<code>ReactSelect</code>",desc:"Receive extensive component from react-select, such as <code>Async</code> & <code>Creatable</code>"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"Select size"}]}],al=e.jsxs("div",{className:"demo-api-table mb-12",children:[e.jsx("h4",{className:"mb-5",children:"Dependencies"}),e.jsx("h6",{id:"react-select-api",className:"mb-3",children:"React Select"}),e.jsxs("p",{className:"mb-1",children:[e.jsx("code",{children:"Select"})," is a wrapper component of"," ",e.jsx("a",{className:"underline text-blue-500",href:"https://react-select.com/home",target:"_blank",rel:"noreferrer",children:"react-select"}),"."]}),e.jsxs("p",{children:["All react-select props can be applied on this component, refer"," ",e.jsx("a",{className:"underline text-blue-500",href:"https://react-select.com/props",target:"_blank",rel:"noreferrer",children:"official docs"})," ","for the complete api list."," "]})]}),_l=()=>e.jsx(Se,{header:el,demos:ll,api:ol,extra:al});export{_l as default};
