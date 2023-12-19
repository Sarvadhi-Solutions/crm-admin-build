import{j as e,r as d}from"./index-6767ac81.js";import{D as ee}from"./DemoLayout-3595de25.js";import{T as m}from"./index-d5eb49a4.js";import{u as j,g as b,a as _,f as u,b as R,d as w,e as se,h as te,i as ae,j as Y}from"./index-43da21b1.js";import{I as q}from"./Input-736c9e0d.js";import{P as ne}from"./Pagination-3af44538.js";import{S as re}from"./Select-3d321c37.js";import{C as oe}from"./index-5c02b9f9.js";import{b1 as v,S as H,b2 as le,b3 as ie}from"./index.esm-107f547f.js";import{D as ce,C as de,P as me}from"./react-beautiful-dnd.esm-09763bb3.js";import{i as ue}from"./index.esm-bbc04dde.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./Views-e5205a91.js";import"./Affix-bd237bf0.js";import"./Button-edcd26d9.js";import"./context-cdfa92ed.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./SyntaxHighlighter-7b64a68f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-0b80b8cd.js";import"./DemoComponentApi-5636f861.js";import"./index.esm-ad20eb15.js";import"./isNil-1a1387e3.js";import"./get-582c28e3.js";import"./toString-5f976032.js";import"./_MapCache-5db605d8.js";import"./floating-ui.dom-bef9cea3.js";import"./cloneDeep-028f7085.js";import"./_Uint8Array-81109713.js";import"./_getPrototype-48c0ebaa.js";import"./_baseIsEqual-98c979d7.js";const{Tr:y,Th:M,Td:T,THead:ge,TBody:pe}=m,he=()=>e.jsx("div",{children:e.jsxs(m,{children:[e.jsx(ge,{children:e.jsxs(y,{children:[e.jsx(M,{children:"Company"}),e.jsx(M,{children:"Contact"}),e.jsx(M,{children:"Country"})]})}),e.jsxs(pe,{children:[e.jsxs(y,{children:[e.jsx(T,{children:"Alfreds Futterkiste"}),e.jsx(T,{children:"Maria Anders"}),e.jsx(T,{children:"Germany"})]}),e.jsxs(y,{children:[e.jsx(T,{children:"Centro comercial Moctezuma"}),e.jsx(T,{children:"Francisco Chang"}),e.jsx(T,{children:"Mexico"})]}),e.jsxs(y,{children:[e.jsx(T,{children:"Ernst Handel"}),e.jsx(T,{children:"Roland Mendel"}),e.jsx(T,{children:"Austria"})]})]})]})}),{Tr:S,Th:E,Td:N,THead:xe,TBody:fe}=m,je=()=>e.jsx("div",{children:e.jsxs(m,{compact:!0,children:[e.jsx(xe,{children:e.jsxs(S,{children:[e.jsx(E,{children:"Company"}),e.jsx(E,{children:"Contact"}),e.jsx(E,{children:"Country"})]})}),e.jsxs(fe,{children:[e.jsxs(S,{children:[e.jsx(N,{children:"Alfreds Futterkiste"}),e.jsx(N,{children:"Maria Anders"}),e.jsx(N,{children:"Germany"})]}),e.jsxs(S,{children:[e.jsx(N,{children:"Centro comercial Moctezuma"}),e.jsx(N,{children:"Francisco Chang"}),e.jsx(N,{children:"Mexico"})]}),e.jsxs(S,{children:[e.jsx(N,{children:"Ernst Handel"}),e.jsx(N,{children:"Roland Mendel"}),e.jsx(N,{children:"Austria"})]})]})]})}),be=[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"},{header:"Visits",accessorKey:"visits"},{header:"Status",accessorKey:"status"},{header:"Profile Progress",accessorKey:"progress"}],Te=[{firstName:"Maria",lastName:"Anders",age:24,visits:28,progress:56,status:"complicated"},{firstName:"Francisco",lastName:"Chang",age:9,visits:90,progress:77,status:"single"},{firstName:"Roland",lastName:"Mendel",age:1,visits:16,progress:56,status:"single"},{firstName:"Helen",lastName:"Bennett",age:43,visits:94,progress:53,status:"single"},{firstName:"Yoshi ",lastName:"Tannamuri",age:37,visits:85,progress:28,status:"single"}],{Tr:I,Th:Ne,Td:Ce,THead:ye,TBody:Se,Sorter:Re}=m,we=()=>{const[a,r]=d.useState([]),o=j({data:Te,columns:be,state:{sorting:a},onSortingChange:r,getCoreRowModel:b(),getSortedRowModel:_()});return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(ye,{children:o.getHeaderGroups().map(l=>e.jsx(I,{children:l.headers.map(s=>e.jsx(Ne,{colSpan:s.colSpan,children:s.isPlaceholder?null:e.jsxs("div",{className:s.column.getCanSort()?"cursor-pointer select-none":"",onClick:s.column.getToggleSortingHandler(),children:[u(s.column.columnDef.header,s.getContext()),e.jsx(Re,{sort:s.column.getIsSorted()})]})},s.id))},l.id))}),e.jsx(Se,{children:o.getRowModel().rows.slice(0,10).map(l=>e.jsx(I,{children:l.getVisibleCells().map(s=>e.jsx(Ce,{children:u(s.column.columnDef.cell,s.getContext())},s.id))},l.id))})]})})};/**
 * match-sorter-utils
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Q={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Me=Object.keys(Q).join("|"),Ee=new RegExp(Me,"g");function Ae(a){return a.replace(Ee,r=>Q[r])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const h={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function ve(a,r,o){var l;if(o=o||{},o.threshold=(l=o.threshold)!=null?l:h.MATCHES,!o.accessors){const n=$(a,r,o);return{rankedValue:a,rank:n,accessorIndex:-1,accessorThreshold:o.threshold,passed:n>=o.threshold}}const s=De(a,o.accessors),t={rankedValue:a,rank:h.NO_MATCH,accessorIndex:-1,accessorThreshold:o.threshold,passed:!1};for(let n=0;n<s.length;n++){const c=s[n];let i=$(c.itemValue,r,o);const{minRanking:g,maxRanking:x,threshold:p=o.threshold}=c.attributes;i<g&&i>=h.MATCHES?i=g:i>x&&(i=x),i=Math.min(i,x),i>=p&&i>t.rank&&(t.rank=i,t.passed=!0,t.accessorIndex=n,t.accessorThreshold=p,t.rankedValue=c.itemValue)}return t}function $(a,r,o){return a=D(a,o),r=D(r,o),r.length>a.length?h.NO_MATCH:a===r?h.CASE_SENSITIVE_EQUAL:(a=a.toLowerCase(),r=r.toLowerCase(),a===r?h.EQUAL:a.startsWith(r)?h.STARTS_WITH:a.includes(` ${r}`)?h.WORD_STARTS_WITH:a.includes(r)?h.CONTAINS:r.length===1?h.NO_MATCH:He(a).includes(r)?h.ACRONYM:Ie(a,r))}function He(a){let r="";return a.split(" ").forEach(l=>{l.split("-").forEach(t=>{r+=t.substr(0,1)})}),r}function Ie(a,r){let o=0,l=0;function s(i,g,x){for(let p=x,Z=g.length;p<Z;p++)if(g[p]===i)return o+=1,p+1;return-1}function t(i){const g=1/i,x=o/r.length;return h.MATCHES+x*g}const n=s(r[0],a,0);if(n<0)return h.NO_MATCH;l=n;for(let i=1,g=r.length;i<g;i++){const x=r[i];if(l=s(x,a,l),!(l>-1))return h.NO_MATCH}const c=l-n;return t(c)}function D(a,r){let{keepDiacritics:o}=r;return a=`${a}`,o||(a=Ae(a)),a}function $e(a,r){let o=r;typeof r=="object"&&(o=r.accessor);const l=o(a);return l==null?[]:Array.isArray(l)?l:[String(l)]}function De(a,r){const o=[];for(let l=0,s=r.length;l<s;l++){const t=r[l],n=Fe(t),c=$e(a,t);for(let i=0,g=c.length;i<g;i++)o.push({itemValue:c[i],attributes:n})}return o}const F={maxRanking:1/0,minRanking:-1/0};function Fe(a){return typeof a=="function"?F:{...F,...a}}const C=[{id:1,firstName:"Alastair",lastName:"Dilkes",email:"adilkes0@jigsy.com",gender:"Female"},{id:2,firstName:"Matthaeus",lastName:"Graber",email:"mgraber1@adobe.com",gender:"Genderqueer"},{id:3,firstName:"Gayel",lastName:"Croxley",email:"gcroxley2@businessinsider.com",gender:"Male"},{id:4,firstName:"Gracia",lastName:"Domegan",email:"gdomegan3@reference.com",gender:"Genderfluid"},{id:5,firstName:"Galvan",lastName:"Beringer",email:"gberinger4@yellowpages.com",gender:"Agender"},{id:6,firstName:"Maud",lastName:"Aicheson",email:"maicheson5@ycombinator.com",gender:"Male"},{id:7,firstName:"Gwenette",lastName:"Dailey",email:"gdailey6@state.tx.us",gender:"Genderfluid"},{id:8,firstName:"Marius",lastName:"Leman",email:"mleman7@cnn.com",gender:"Genderfluid"},{id:9,firstName:"Natka",lastName:"Varcoe",email:"nvarcoe8@hhs.gov",gender:"Male"},{id:10,firstName:"Kellie",lastName:"Ackerley",email:"kackerley9@posterous.com",gender:"Genderfluid"}],X=[{firstName:"Maria",lastName:"Anders",age:24,visits:28,progress:56,status:"complicated",subRows:[{firstName:"newspaper",lastName:"dinner",age:25,visits:2,progress:78,status:"single",subRows:void 0},{firstName:"whip",lastName:"marriage",age:3,visits:95,progress:65,status:"single",subRows:void 0},{firstName:"bee",lastName:"invention",age:7,visits:83,progress:68,status:"complicated",subRows:void 0}]},{firstName:"Francisco",lastName:"Chang",age:9,visits:90,progress:77,status:"single",subRows:[{firstName:"beds",lastName:"fairies",age:16,visits:82,progress:87,status:"single",subRows:void 0},{firstName:"cloth",lastName:"control",age:11,visits:8,progress:75,status:"single",subRows:void 0}]},{firstName:"Roland",lastName:"Mendel",age:1,visits:16,progress:56,status:"single",subRows:[{firstName:"newspaper",lastName:"dinner",age:25,visits:2,progress:78,status:"single",subRows:void 0},{firstName:"whip",lastName:"marriage",age:3,visits:95,progress:65,status:"single",subRows:void 0},{firstName:"bee",lastName:"invention",age:7,visits:83,progress:68,status:"complicated",subRows:void 0},{firstName:"stage",lastName:"cherries",age:14,visits:94,progress:53,status:"relationship",subRows:void 0}]},{firstName:"Helen",lastName:"Bennett",age:43,visits:94,progress:53,status:"single",subRows:[{firstName:"scarf",lastName:"requirement",age:23,visits:93,progress:40,status:"relationship",subRows:void 0}]},{firstName:"Yoshi ",lastName:"Tannamuri",age:37,visits:85,progress:28,status:"single",subRows:[{firstName:"tray",lastName:"chemistry",age:29,visits:55,progress:87,status:"relationship",subRows:void 0},{firstName:"fiction",lastName:"grade",age:27,visits:98,progress:15,status:"complicated",subRows:void 0}]}],{Tr:K,Th:Ke,Td:ke,THead:Oe,TBody:Pe,Sorter:Ve}=m;function ze({value:a,onChange:r,debounce:o=500,...l}){const[s,t]=d.useState(a);return d.useEffect(()=>{t(a)},[a]),d.useEffect(()=>{const n=setTimeout(()=>{r(s)},o);return()=>clearTimeout(n)},[s]),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"mr-2",children:"Search:"}),e.jsx(q,{...l,value:s,onChange:n=>t(n.target.value)})]})})}const k=(a,r,o,l)=>{const s=ve(a.getValue(r),o);return l({itemRank:s}),s.passed},Be=()=>{const[a,r]=d.useState([]),[o,l]=d.useState(""),s=d.useMemo(()=>[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"}],[]),[t]=d.useState(()=>C),n=j({data:t,columns:s,filterFns:{fuzzy:k},state:{columnFilters:a,globalFilter:o},onColumnFiltersChange:r,onGlobalFilterChange:l,globalFilterFn:k,getCoreRowModel:b(),getFilteredRowModel:R(),getSortedRowModel:_(),getPaginationRowModel:w(),getFacetedRowModel:se(),getFacetedUniqueValues:te(),getFacetedMinMaxValues:ae(),debugHeaders:!0,debugColumns:!1});return e.jsxs(e.Fragment,{children:[e.jsx(ze,{value:o??"",className:"p-2 font-lg shadow border border-block",placeholder:"Search all columns...",onChange:c=>l(String(c))}),e.jsxs(m,{children:[e.jsx(Oe,{children:n.getHeaderGroups().map(c=>e.jsx(K,{children:c.headers.map(i=>e.jsx(Ke,{colSpan:i.colSpan,children:i.isPlaceholder?null:e.jsxs("div",{className:i.column.getCanSort()?"cursor-pointer select-none":"",onClick:i.column.getToggleSortingHandler(),children:[u(i.column.columnDef.header,i.getContext()),e.jsx(Ve,{sort:i.column.getIsSorted()})]})},i.id))},c.id))}),e.jsx(Pe,{children:n.getRowModel().rows.map(c=>e.jsx(K,{children:c.getVisibleCells().map(i=>e.jsx(ke,{children:u(i.column.columnDef.cell,i.getContext())},i.id))},c.id))})]})]})},{Tr:O,Th:Ue,Td:Ge,THead:Le,TBody:We}=m,J=()=>{const a=[];for(let r=0;r<100;r++)a.push({firstName:`Maria ${r}`,lastName:`Anders ${r}`,age:r});return a},_e=J().length,P=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"},{value:40,label:"40 / page"},{value:50,label:"50 / page"}],Ye=()=>{const a=d.useMemo(()=>[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"}],[]),[r]=d.useState(()=>J()),o=j({data:r,columns:a,getCoreRowModel:b(),getFilteredRowModel:R(),getPaginationRowModel:w()}),l=t=>{o.setPageIndex(t-1)},s=(t=0)=>{o.setPageSize(Number(t))};return e.jsxs("div",{children:[e.jsxs(m,{children:[e.jsx(Le,{children:o.getHeaderGroups().map(t=>e.jsx(O,{children:t.headers.map(n=>e.jsx(Ue,{colSpan:n.colSpan,children:u(n.column.columnDef.header,n.getContext())},n.id))},t.id))}),e.jsx(We,{children:o.getRowModel().rows.map(t=>e.jsx(O,{children:t.getVisibleCells().map(n=>e.jsx(Ge,{children:u(n.column.columnDef.cell,n.getContext())},n.id))},t.id))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(ne,{pageSize:o.getState().pagination.pageSize,currentPage:o.getState().pagination.pageIndex+1,total:_e,onChange:l}),e.jsx("div",{style:{minWidth:130},children:e.jsx(re,{size:"sm",isSearchable:!1,value:P.filter(t=>t.value===o.getState().pagination.pageSize),options:P,onChange:t=>s(t==null?void 0:t.value)})})]})]})},{Tr:V,Th:qe,Td:Qe,THead:Xe,TBody:Je}=m,Ze=()=>{const[a]=d.useState(()=>C),r=d.useMemo(()=>[{header:"Name",columns:[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"}]},{header:"Info",columns:[{header:"Email",accessorKey:"email",width:50},{header:"Visits",accessorKey:"gender",width:60}]}],[]),o=j({data:a,columns:r,getCoreRowModel:b()});return e.jsxs(m,{children:[e.jsx(Xe,{children:o.getHeaderGroups().map(l=>e.jsx(V,{children:l.headers.map(s=>e.jsx(qe,{colSpan:s.colSpan,children:u(s.column.columnDef.header,s.getContext())},s.id))},l.id))}),e.jsx(Je,{children:o.getRowModel().rows.map(l=>e.jsx(V,{children:l.getVisibleCells().map(s=>e.jsx(Qe,{children:u(s.column.columnDef.cell,s.getContext())},s.id))},l.id))})]})},{Tr:z,Th:es,Td:ss,THead:ts,TBody:as}=m;function B({indeterminate:a,onChange:r,...o}){const l=d.useRef(null);return d.useEffect(()=>{typeof a=="boolean"&&l.current&&(l.current.indeterminate=!o.checked&&a)},[l,a]),e.jsx(oe,{ref:l,onChange:(s,t)=>r(t),...o})}function ns(){const[a,r]=d.useState({}),o=d.useMemo(()=>[{id:"select",header:({table:t})=>e.jsx(B,{checked:t.getIsAllRowsSelected(),indeterminate:t.getIsSomeRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()}),cell:({row:t})=>e.jsx("div",{className:"px-1",children:e.jsx(B,{checked:t.getIsSelected(),disabled:!t.getCanSelect(),indeterminate:t.getIsSomeSelected(),onChange:t.getToggleSelectedHandler()})})},{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"}],[]),[l]=d.useState(()=>C),s=j({data:l,columns:o,state:{rowSelection:a},enableRowSelection:!0,onRowSelectionChange:r,getCoreRowModel:b(),getFilteredRowModel:R(),getPaginationRowModel:w()});return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(ts,{children:s.getHeaderGroups().map(t=>e.jsx(z,{children:t.headers.map(n=>e.jsx(es,{colSpan:n.colSpan,children:u(n.column.columnDef.header,n.getContext())},n.id))},t.id))}),e.jsx(as,{children:s.getRowModel().rows.map(t=>e.jsx(z,{children:t.getVisibleCells().map(n=>e.jsx(ss,{children:u(n.column.columnDef.cell,n.getContext())},n.id))},t.id))})]})})}const{Tr:U,Th:rs,Td:os,THead:ls,TBody:is}=m;function cs(){const a=d.useMemo(()=>[{id:"expander",header:({table:t})=>e.jsx("button",{className:"text-xl",onClick:t.getToggleAllRowsExpandedHandler(),children:t.getIsAllRowsExpanded()?e.jsx(v,{}):e.jsx(H,{})}),cell:({row:t,getValue:n})=>e.jsxs(e.Fragment,{children:[t.getCanExpand()?e.jsx("button",{className:"text-xl",onClick:t.getToggleExpandedHandler(),children:t.getIsExpanded()?e.jsx(v,{}):e.jsx(H,{})}):null,n()]})},{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"},{header:"Visits",accessorKey:"visits"},{header:"Status",accessorKey:"status"},{header:"Profile Progress",accessorKey:"progress"}],[]),[r]=d.useState(X),[o,l]=d.useState({}),s=j({data:r,columns:a,state:{expanded:o},onExpandedChange:l,getSubRows:t=>t.subRows,getCoreRowModel:b(),getExpandedRowModel:Y()});return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(ls,{children:s.getHeaderGroups().map(t=>e.jsx(U,{children:t.headers.map(n=>e.jsx(rs,{colSpan:n.colSpan,children:u(n.column.columnDef.header,n.getContext())},n.id))},t.id))}),e.jsx(is,{children:s.getRowModel().rows.map(t=>e.jsx(U,{children:t.getVisibleCells().map(n=>e.jsx(os,{children:u(n.column.columnDef.cell,n.getContext())},n.id))},t.id))})]})})}const{Tr:A,Th:ds,Td:ms,THead:us,TBody:gs}=m;function ps({renderRowSubComponent:a,getRowCanExpand:r}){const o=d.useMemo(()=>[{header:()=>null,id:"expander",cell:({row:s})=>e.jsx(e.Fragment,{children:s.getCanExpand()?e.jsx("button",{className:"text-lg",onClick:s.getToggleExpandedHandler(),children:s.getIsExpanded()?e.jsx(le,{}):e.jsx(ie,{})}):null}),subCell:()=>null},{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Age",accessorKey:"age"},{header:"Visits",accessorKey:"visits"},{header:"Status",accessorKey:"status"},{header:"Profile Progress",accessorKey:"progress"}],[]),l=j({data:X,columns:o,getRowCanExpand:r,getCoreRowModel:b(),getExpandedRowModel:Y()});return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(us,{children:l.getHeaderGroups().map(s=>e.jsx(A,{children:s.headers.map(t=>e.jsx(ds,{colSpan:t.colSpan,children:u(t.column.columnDef.header,t.getContext())},t.id))},s.id))}),e.jsx(gs,{children:l.getRowModel().rows.map(s=>e.jsxs(d.Fragment,{children:[e.jsx(A,{children:s.getVisibleCells().map(t=>e.jsx("td",{children:u(t.column.columnDef.cell,t.getContext())},t.id))}),s.getIsExpanded()&&e.jsx(A,{children:e.jsx(ms,{colSpan:s.getVisibleCells().length,children:a({row:s})})})]},s.id))})]})})}const hs=({row:a})=>e.jsx("pre",{style:{fontSize:"10px"},children:e.jsx("code",{children:JSON.stringify(a.original,null,2)})}),xs=()=>e.jsx(ps,{renderRowSubComponent:hs,getRowCanExpand:()=>!0}),{Tr:G,Th:fs,Td:js,THead:bs,TBody:Ts}=m,Ns=({getValue:a,row:{index:r},column:{id:o},table:l})=>{const s=a(),[t,n]=d.useState(s),c=()=>{var i;(i=l.options.meta)==null||i.updateData(r,o,t)};return d.useEffect(()=>{n(s)},[s]),e.jsx(q,{className:"border-transparent bg-transparent hover:border-gray-300 focus:bg-white",size:"sm",value:t,onChange:i=>n(i.target.value),onBlur:c})},Cs={cell:Ns};function ys(){const a=d.useRef(!0),r=a.current,o=d.useCallback(()=>{a.current=!1},[]);return d.useEffect(()=>{a.current=!0}),[r,o]}function Ss(){const a=d.useMemo(()=>[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"}],[]),[r,o]=d.useState(()=>C),[l,s]=ys(),t=j({data:r,columns:a,defaultColumn:Cs,getCoreRowModel:b(),getFilteredRowModel:R(),getPaginationRowModel:w(),autoResetPageIndex:l,meta:{updateData:(n,c,i)=>{typeof s=="function"&&s(),o(g=>g.map((x,p)=>p===n?{...g[n],[c]:i}:x))}}});return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(bs,{children:t.getHeaderGroups().map(n=>e.jsx(G,{children:n.headers.map(c=>e.jsx(fs,{colSpan:c.colSpan,children:u(c.column.columnDef.header,c.getContext())},c.id))},n.id))}),e.jsx(Ts,{children:t.getRowModel().rows.map(n=>e.jsx(G,{children:n.getVisibleCells().map(c=>e.jsx(js,{children:u(c.column.columnDef.cell,c.getContext())},c.id))},n.id))})]})})}const{Tr:L,Th:Rs,Td:ws,THead:Ms,TBody:Es}=m,As=()=>{const[a,r]=d.useState(C),o=(n,c)=>{const i=[...a],[g]=i.splice(n,1);i.splice(c,0,g),r(i)},l=n=>{const{source:c,destination:i}=n;i&&o(c.index,i.index)},s=d.useMemo(()=>[{id:"dragger",header:"",accessorKey:"dragger",cell:n=>e.jsx("span",{...n.dragHandleProps,children:e.jsx(ue,{})})},{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"}],[]),t=j({data:a,columns:s,getCoreRowModel:b()});return e.jsxs(m,{className:"w-full",children:[e.jsx(Ms,{children:t.getHeaderGroups().map(n=>e.jsx(L,{children:n.headers.map(c=>e.jsx(Rs,{colSpan:c.colSpan,children:u(c.column.columnDef.header,c.getContext())},c.id))},n.id))}),e.jsx(ce,{onDragEnd:l,children:e.jsx(de,{droppableId:"table-body",children:n=>e.jsxs(Es,{ref:n.innerRef,...n.droppableProps,children:[t.getRowModel().rows.map(c=>e.jsx(me,{draggableId:c.id,index:c.index,children:(i,g)=>{const{style:x}=i.draggableProps;return e.jsx(L,{ref:i.innerRef,className:g.isDragging?"table":"",style:x,...i.draggableProps,...i.dragHandleProps,children:c.getVisibleCells().map(p=>e.jsx(ws,{children:u(p.column.columnDef.cell,p.getContext())},p.id))})}},c.id)),n.placeholder]})})})]})},{Tr:W,Th:vs,Td:Hs,THead:Is,TBody:$s}=m;function Ds(){const a=d.useMemo(()=>C,[]),r=d.useMemo(()=>[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"},{header:"Gender",accessorKey:"gender"}],[]),o=j({data:a,columns:r,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:b()});return e.jsxs(m,{children:[e.jsx(Is,{children:o.getHeaderGroups().map(l=>e.jsx(W,{children:l.headers.map(s=>e.jsxs(vs,{colSpan:s.colSpan,style:{position:"relative",width:s.getSize()},children:[s.isPlaceholder?null:u(s.column.columnDef.header,s.getContext()),s.column.getCanResize()&&e.jsx("div",{className:`table-resizer cursor-all-scroll ${s.column.getIsResizing()?"isResizing":""}`,onMouseDown:s.getResizeHandler(),onTouchStart:s.getResizeHandler()})]},s.id))},l.id))}),e.jsx($s,{children:o.getRowModel().rows.map(l=>e.jsx(W,{children:l.getVisibleCells().map(s=>e.jsx(Hs,{style:{width:s.column.getSize()},children:u(s.column.columnDef.cell,s.getContext())},s.id))},l.id))})]})}const f="Table",Fs={title:"Table",desc:"Tables display data in rows and columns which make users compare and analyze information easier."},Ks=[{mdName:"Simple",mdPath:f,title:"Simple",desc:"Simple Table example.",component:e.jsx(he,{})},{mdName:"Compact",mdPath:f,title:"Compact",desc:"Table come with compact view which let us display more data.",component:e.jsx(je,{})},{mdName:"Sorting",mdPath:f,title:"Sorting",desc:"Columns can be sorted by selecting table headers",component:e.jsx(we,{})},{mdName:"Filtering",mdPath:f,title:"Filtering",desc:"Filtering example.",component:e.jsx(Be,{})},{mdName:"PaginationTable",mdPath:f,title:"Pagination",desc:'Table can works with <a href="/ui-components/pagination" class="text-blue-500">Pagination</a> component.',component:e.jsx(Ye,{})},{mdName:"Group",mdPath:f,title:"Group",desc:"Grouping example.",component:e.jsx(Ze,{})},{mdName:"RowSelection",mdPath:f,title:"Row Selection",desc:"Row selection example.",component:e.jsx(ns,{})},{mdName:"Expanding",mdPath:f,title:"Expanding",desc:"Row expand example.",component:e.jsx(cs,{})},{mdName:"SubComponent",mdPath:f,title:"SubComponent",desc:"Row expand with sub component",component:e.jsx(xs,{})},{mdName:"Editable",mdPath:f,title:"Editable",desc:"Cell editable example",component:e.jsx(Ss,{})},{mdName:"DragAndDrop",mdPath:f,title:"Drag & Drop",desc:"Example of implementing <code>react-dnd</code> to the table.",component:e.jsx(As,{})},{mdName:"Resizable",mdPath:f,title:"Resizable",desc:"Column resize example.",component:e.jsx(Ds,{})}],ks=[{component:"Table",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'table'</code>",desc:"Render element"},{propName:"borderlessRow",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to disable the row border in table"},{propName:"compact",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether display table on compact view"},{propName:"hoverable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether table row able to hover"},{propName:"overflow",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether allow table content overflow"}]},{component:"Table.THead",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'thead'</code>",desc:"Render element"}]},{component:"Table.TBody",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'tbody'</code>",desc:"Render element"}]},{component:"Table.TFoot",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'tfoot'</code>",desc:"Render element"}]},{component:"Table.Tr",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'tr'</code>",desc:"Render element"}]},{component:"Table.Th",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'th'</code>",desc:"Render element"}]},{component:"Table.Td",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'td'</code>",desc:"Render element"}]},{component:"Table.Sorter",api:[{propName:"sort",type:"<code>false | 'asc' | 'desc'</code>",default:"<code>-</code>",desc:"Sort status"}]}],Os=e.jsxs("div",{className:"demo-api-table mb-12",children:[e.jsx("h4",{className:"mb-5",children:"Dependencies"}),e.jsx("h6",{id:"react-table-api",className:"mb-3",children:"React Table"}),e.jsxs("p",{className:"mb-1",children:["Most of the examples above were integrated with"," ",e.jsx("code",{children:"react-table"}),", its is lightweight and extensible data table component for materialize, filter, sort, group, aggregate, paginate and display massive data. Vist the"," ",e.jsx("a",{className:"underline text-blue-500",href:"https://react-table.tanstack.com/docs/overview",target:"_blank",rel:"noopener noreferrer",children:"official docs"})," ","for futher examples & hooks usage."]})]}),Ct=()=>e.jsx(ee,{header:Fs,demos:Ks,api:ks,extra:Os});export{Ct as default};
