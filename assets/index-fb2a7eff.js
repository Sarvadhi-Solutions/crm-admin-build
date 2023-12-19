import{r as c,j as o,be as w}from"./index-b09faefa.js";import{D as z}from"./DemoLayout-c746e798.js";import{B as S}from"./Button-3bdf4581.js";import{D as N}from"./DataTable-ca158282.js";import{I as A}from"./Input-8c731b0c.js";import{d as I}from"./debounce-24a9e0ff.js";import"./AdaptableCard-9a87f3ff.js";import"./Card-33431fc8.js";import"./Views-57e82c67.js";import"./Affix-b10a496a.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index.esm-2c67faf2.js";import"./SyntaxHighlighter-e97b96e2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";import"./index-abb4ede3.js";import"./DemoComponentApi-d5bf32a3.js";import"./index-a157bc37.js";import"./index.esm-dbc068f5.js";import"./context-80e77f1b.js";import"./Pagination-d71ebe95.js";import"./Select-71db8857.js";import"./slicedToArray-00fbfd7c.js";import"./floating-ui.dom-bef9cea3.js";import"./get-263a9377.js";import"./toString-9cef9a7f.js";import"./_MapCache-a97510fd.js";import"./index-c173cf47.js";import"./cloneDeep-de9ec659.js";import"./_Uint8Array-b1a93c95.js";import"./_getPrototype-3540f1e6.js";import"./_baseIsEqual-77ddc906.js";import"./TableRowSkeleton-a83d3c9d.js";import"./Skeleton-5bf82d8e.js";import"./index-e08096fb.js";import"./isNil-f81aee01.js";const P=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),d=c.useMemo(()=>[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:l=>o.jsx(S,{size:"xs",onClick:()=>console.log("Action clicked",l),children:"Action"})}],[]),m=l=>{s(r=>({...r,pageIndex:l}))},b=l=>{s(r=>({...r,pageSize:l}))},x=({order:l,key:r})=>{s(h=>({...h,sort:{order:l,key:r}}))};return c.useEffect(()=>{(async()=>{p(!0);const r=await w.post("/api/crm/customers",n);r.data&&(u(r.data.data),p(!1),s(h=>({...h,total:r.data.total})))})()},[n.pageIndex,n.sort,n.pageSize]),o.jsx(N,{columns:d,data:g,loading:f,pagingData:{total:n.total,pageIndex:n.pageIndex,pageSize:n.pageSize},onPaginationChange:m,onSelectChange:b,onSort:x})},v=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState([]),[d,m]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),b=e=>{console.log("Action clicked",e)},x=()=>{console.log("selectedRows",n)},l=c.useMemo(()=>[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:e=>o.jsx(S,{size:"xs",onClick:()=>b(e),children:"Action"})}],[]),r=e=>{m(a=>({...a,pageIndex:e}))},h=e=>{m(a=>({...a,pageSize:e}))},k=({order:e,key:a})=>{m(i=>({...i,sort:{order:e,key:a}}))},C=(e,a)=>{console.log("row",a),s(e?i=>i.includes(a.name)?i:[...i,a.name]:i=>i.includes(a.name)?i.filter(y=>y!==a.name):i)},t=(e,a)=>{if(console.log("rows",a),e){const i=a.map(D=>D.original),y=[];i.forEach(D=>{y.push(D.name)}),s(y)}else s([])};return c.useEffect(()=>{(async()=>{p(!0);const a=await w.post("/api/crm/customers",d);a.data&&(u(a.data.data),p(!1),m(i=>({...i,total:a.data.total})))})()},[d.pageIndex,d.sort,d.pageSize]),o.jsxs(o.Fragment,{children:[n.length>0&&o.jsx("div",{className:"flex justify-end mb-4",children:o.jsx(S,{size:"sm",variant:"solid",onClick:x,children:"Batch Action"})}),o.jsx(N,{selectable:!0,columns:l,data:g,loading:f,pagingData:d,onPaginationChange:r,onSelectChange:h,onSort:k,onCheckBoxChange:C,onIndeterminateCheckBoxChange:t})]})},B=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),d=c.useRef(null),m=I(b,500);function b(t){typeof t=="string"&&(t.length>1||t.length===0)&&s(e=>({...e,query:t,pageIndex:1}))}const x=t=>{m(t.target.value)},l=t=>{console.log("Action clicked",t)},r=[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:t=>o.jsx(S,{size:"xs",onClick:()=>l(t),children:"Action"})}],h=t=>{s(e=>({...e,pageIndex:t}))},k=t=>{s(e=>({...e,pageSize:t}))},C=({order:t,key:e})=>{console.log({order:t,key:e}),s(a=>({...a,sort:{order:t,key:e}}))};return c.useEffect(()=>{(async()=>{p(!0);const e=await w.post("/api/crm/customers",n);e.data&&(u(e.data.data),p(!1),s(a=>({...a,total:e.data.total})))})()},[n.pageIndex,n.sort,n.pageSize,n.query]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"flex justify-end mb-4",children:o.jsx(A,{ref:d,placeholder:"Search...",size:"sm",className:"lg:w-52",onChange:x})}),o.jsx(N,{columns:r,data:g,loading:f,pagingData:n,onPaginationChange:h,onSelectChange:k,onSort:C})]})},j="DataTableDoc",T={title:"DataTable",desc:'DataTable is often used table logic encapsulated component, it can save up some boilerplate setup from <a class="text-indigo-600 underline" href="https://react-table-v7.tanstack.com/" target="_blank">react-table</a> & quick start with your async table data.'},E=[{mdName:"Basic",mdPath:j,title:"Basic",desc:"",component:o.jsx(P,{})},{mdName:"Checkable",mdPath:j,title:"Checkable",desc:"",component:o.jsx(v,{})},{mdName:"Query",mdPath:j,title:"Query",desc:"",component:o.jsx(B,{})}],R=[{component:"DataTable",api:[{propName:"columns",type:'<a class="text-indigo-600 underline" href="https://tanstack.com/table/v8/docs/guide/column-defs" target="_blank"><code>Array&lt;Column&gt;</code></a>',default:"<code>[]</code>",desc:"The core columns configuration object for the entire table"},{propName:"data",type:"<code>Array&lt;any&gt;</code>",default:"<code>[]</code>",desc:"The data array that you want to display on the table"},{propName:"loading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Wheter to display loading indicator on the table"},{propName:"onCheckBoxChange",type:"<code>(checked: boolean, row: any) => void</code>",default:"-",desc:"Callback when row checkbox is changed, return a checkbox value & changed row data"},{propName:"onIndeterminateCheckBoxChange",type:"<code>(checked: boolean, rows: any) => void</code>",default:"-",desc:"Callback when indeterminate checkbox is changed, return indeterminate checkbox value & all rows data"},{propName:"onPaginationChange",type:"<code>(pageIndex: number) => void</code>",default:"-",desc:"Callback when pagination changed"},{propName:"onSelectChange",type:"<code>(pageSize: number) => void</code>",default:"-",desc:"Callback when page size selector changed"},{propName:"onSort",type:"<code>(pageSize: {order: 'desc' | 'asc', key: string}) => void</code>",default:"-",desc:"Callback when any column of sorted changed, return sort order & sorted column identifier"},{propName:"pageSizes",type:"<code>number[]</code>",default:"<code>[10, 25, 50, 100]</code>",desc:"Options of selectable page sizes"},{propName:"skeletonAvatarColumns",type:"<code>number[]</code>",default:"-",desc:"Specify skeleton avatar display is which column when loading is true"},{propName:"skeletonAvatarProps",type:'<a class="text-indigo-600 underline" href="/ui-components/avatar#api" target="_blank"><code>AvatarProps</code></a>',default:"-",desc:"Props for skeleton avatar"},{propName:"pagingData",type:"<code>{total: number, pageIndex: number, pageSize: number}</code>",default:"<code>{total: 0, pageIndex: 1, pageSize: 10}</code>",desc:"Paging state of tthe table"}]}],De=()=>o.jsx(z,{innerFrame:!1,header:T,demos:E,api:R,mdPrefixPath:"shared"});export{De as default};
