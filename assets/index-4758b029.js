import{r as c,j as o,bd as w}from"./index-4bd6b7b3.js";import{D as z}from"./DemoLayout-abb47ea7.js";import{B as S}from"./Button-39d85f08.js";import{D as N}from"./DataTable-8887d7ed.js";import{I as A}from"./Input-1462fe73.js";import{d as I}from"./debounce-1894c673.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./SyntaxHighlighter-d5a055b8.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";import"./index-96e19bc1.js";import"./DemoComponentApi-dfdadeb6.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./context-a8cf3940.js";import"./Pagination-22ec60b1.js";import"./Select-938bf375.js";import"./slicedToArray-e2770cb7.js";import"./floating-ui.dom-bef9cea3.js";import"./get-2d6f452a.js";import"./toString-a7228545.js";import"./_MapCache-9c7f01dc.js";import"./index-e9ce1b4a.js";import"./cloneDeep-9b3959e9.js";import"./_Uint8Array-04aa9e28.js";import"./_getPrototype-715b1198.js";import"./_baseIsEqual-a094f75a.js";import"./TableRowSkeleton-f238368d.js";import"./Skeleton-e8e73738.js";import"./index-030d990e.js";import"./isNil-ae028dac.js";const P=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),d=c.useMemo(()=>[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:l=>o.jsx(S,{size:"xs",onClick:()=>console.log("Action clicked",l),children:"Action"})}],[]),m=l=>{s(r=>({...r,pageIndex:l}))},b=l=>{s(r=>({...r,pageSize:l}))},x=({order:l,key:r})=>{s(h=>({...h,sort:{order:l,key:r}}))};return c.useEffect(()=>{(async()=>{p(!0);const r=await w.post("/api/crm/customers",n);r.data&&(u(r.data.data),p(!1),s(h=>({...h,total:r.data.total})))})()},[n.pageIndex,n.sort,n.pageSize]),o.jsx(N,{columns:d,data:g,loading:f,pagingData:{total:n.total,pageIndex:n.pageIndex,pageSize:n.pageSize},onPaginationChange:m,onSelectChange:b,onSort:x})},v=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState([]),[d,m]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),b=e=>{console.log("Action clicked",e)},x=()=>{console.log("selectedRows",n)},l=c.useMemo(()=>[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:e=>o.jsx(S,{size:"xs",onClick:()=>b(e),children:"Action"})}],[]),r=e=>{m(a=>({...a,pageIndex:e}))},h=e=>{m(a=>({...a,pageSize:e}))},k=({order:e,key:a})=>{m(i=>({...i,sort:{order:e,key:a}}))},C=(e,a)=>{console.log("row",a),s(e?i=>i.includes(a.name)?i:[...i,a.name]:i=>i.includes(a.name)?i.filter(y=>y!==a.name):i)},t=(e,a)=>{if(console.log("rows",a),e){const i=a.map(D=>D.original),y=[];i.forEach(D=>{y.push(D.name)}),s(y)}else s([])};return c.useEffect(()=>{(async()=>{p(!0);const a=await w.post("/api/crm/customers",d);a.data&&(u(a.data.data),p(!1),m(i=>({...i,total:a.data.total})))})()},[d.pageIndex,d.sort,d.pageSize]),o.jsxs(o.Fragment,{children:[n.length>0&&o.jsx("div",{className:"flex justify-end mb-4",children:o.jsx(S,{size:"sm",variant:"solid",onClick:x,children:"Batch Action"})}),o.jsx(N,{selectable:!0,columns:l,data:g,loading:f,pagingData:d,onPaginationChange:r,onSelectChange:h,onSort:k,onCheckBoxChange:C,onIndeterminateCheckBoxChange:t})]})},B=()=>{const[g,u]=c.useState([]),[f,p]=c.useState(!1),[n,s]=c.useState({total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}}),d=c.useRef(null),m=I(b,500);function b(t){typeof t=="string"&&(t.length>1||t.length===0)&&s(e=>({...e,query:t,pageIndex:1}))}const x=t=>{m(t.target.value)},l=t=>{console.log("Action clicked",t)},r=[{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"",id:"action",cell:t=>o.jsx(S,{size:"xs",onClick:()=>l(t),children:"Action"})}],h=t=>{s(e=>({...e,pageIndex:t}))},k=t=>{s(e=>({...e,pageSize:t}))},C=({order:t,key:e})=>{console.log({order:t,key:e}),s(a=>({...a,sort:{order:t,key:e}}))};return c.useEffect(()=>{(async()=>{p(!0);const e=await w.post("/api/crm/customers",n);e.data&&(u(e.data.data),p(!1),s(a=>({...a,total:e.data.total})))})()},[n.pageIndex,n.sort,n.pageSize,n.query]),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"flex justify-end mb-4",children:o.jsx(A,{ref:d,placeholder:"Search...",size:"sm",className:"lg:w-52",onChange:x})}),o.jsx(N,{columns:r,data:g,loading:f,pagingData:n,onPaginationChange:h,onSelectChange:k,onSort:C})]})},j="DataTableDoc",T={title:"DataTable",desc:'DataTable is often used table logic encapsulated component, it can save up some boilerplate setup from <a class="text-indigo-600 underline" href="https://react-table-v7.tanstack.com/" target="_blank">react-table</a> & quick start with your async table data.'},E=[{mdName:"Basic",mdPath:j,title:"Basic",desc:"",component:o.jsx(P,{})},{mdName:"Checkable",mdPath:j,title:"Checkable",desc:"",component:o.jsx(v,{})},{mdName:"Query",mdPath:j,title:"Query",desc:"",component:o.jsx(B,{})}],R=[{component:"DataTable",api:[{propName:"columns",type:'<a class="text-indigo-600 underline" href="https://tanstack.com/table/v8/docs/guide/column-defs" target="_blank"><code>Array&lt;Column&gt;</code></a>',default:"<code>[]</code>",desc:"The core columns configuration object for the entire table"},{propName:"data",type:"<code>Array&lt;any&gt;</code>",default:"<code>[]</code>",desc:"The data array that you want to display on the table"},{propName:"loading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Wheter to display loading indicator on the table"},{propName:"onCheckBoxChange",type:"<code>(checked: boolean, row: any) => void</code>",default:"-",desc:"Callback when row checkbox is changed, return a checkbox value & changed row data"},{propName:"onIndeterminateCheckBoxChange",type:"<code>(checked: boolean, rows: any) => void</code>",default:"-",desc:"Callback when indeterminate checkbox is changed, return indeterminate checkbox value & all rows data"},{propName:"onPaginationChange",type:"<code>(pageIndex: number) => void</code>",default:"-",desc:"Callback when pagination changed"},{propName:"onSelectChange",type:"<code>(pageSize: number) => void</code>",default:"-",desc:"Callback when page size selector changed"},{propName:"onSort",type:"<code>(pageSize: {order: 'desc' | 'asc', key: string}) => void</code>",default:"-",desc:"Callback when any column of sorted changed, return sort order & sorted column identifier"},{propName:"pageSizes",type:"<code>number[]</code>",default:"<code>[10, 25, 50, 100]</code>",desc:"Options of selectable page sizes"},{propName:"skeletonAvatarColumns",type:"<code>number[]</code>",default:"-",desc:"Specify skeleton avatar display is which column when loading is true"},{propName:"skeletonAvatarProps",type:'<a class="text-indigo-600 underline" href="/ui-components/avatar#api" target="_blank"><code>AvatarProps</code></a>',default:"-",desc:"Props for skeleton avatar"},{propName:"pagingData",type:"<code>{total: number, pageIndex: number, pageSize: number}</code>",default:"<code>{total: 0, pageIndex: 1, pageSize: 10}</code>",desc:"Paging state of tthe table"}]}],De=()=>o.jsx(z,{innerFrame:!1,header:T,demos:E,api:R,mdPrefixPath:"shared"});export{De as default};
