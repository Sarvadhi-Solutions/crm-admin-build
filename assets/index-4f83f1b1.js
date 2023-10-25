import{j as e,r as d,c as m}from"./index-ba91c0fd.js";import{D as u}from"./DemoLayout-358cbd12.js";import{S as t}from"./index-d176cad0.js";import{L as p}from"./index.esm-55e99400.js";import"./AdaptableCard-3bfc48fe.js";import"./Card-b0a5a7d6.js";import"./Views-e9280400.js";import"./Affix-7836b794.js";import"./Button-4d442f63.js";import"./Tooltip-d4e69970.js";import"./usePopper-549b69fd.js";import"./index.esm-5fbbd29b.js";import"./index-8ea85167.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5585411f.js";import"./index-f272e67b.js";import"./index-fe0659a6.js";import"./index.esm-1fe268c9.js";import"./useControllableState-f5082273.js";const g=()=>e.jsxs(t,{children:[e.jsx(t.Item,{value:"left",children:"Left"}),e.jsx(t.Item,{value:"center",children:"Center"}),e.jsx(t.Item,{value:"right",children:"Right"})]}),h=()=>{const[l,n]=d.useState(["md"]),c=o=>{n(o)};return e.jsxs(t,{size:l[0],value:l,onChange:o=>c(o),children:[e.jsx(t.Item,{value:"xs",children:"Extra Small"}),e.jsx(t.Item,{value:"sm",children:"Small"}),e.jsx(t.Item,{value:"md",children:"Medium"}),e.jsx(t.Item,{value:"lg",children:"Large"})]})},x=()=>e.jsxs(t,{selectionType:"multiple",children:[e.jsx(t.Item,{value:"left",children:"Left"}),e.jsx(t.Item,{value:"center",children:"Center"}),e.jsx(t.Item,{value:"right",children:"Right"})]}),S=()=>e.jsxs(t,{children:[e.jsx(t.Item,{value:"left",children:"Left"}),e.jsx(t.Item,{disabled:!0,value:"center",children:"Center"}),e.jsx(t.Item,{value:"right",children:"Right"})]}),f=[{value:"Personal",desc:"The plan for personal.",disabled:!1},{value:"Team",desc:"The plan for team",disabled:!1},{value:"Business",desc:"Talk to us for business plan.",disabled:!0}],j=()=>e.jsx(t,{defaultValue:["Team"],className:"gap-2 md:flex-row flex-col",children:f.map(l=>e.jsx(t.Item,{value:l.value,disabled:l.disabled,children:({active:n,value:c,onSegmentItemClick:o,disabled:i})=>e.jsxs("div",{className:m("flex","ring-1","justify-between","border","rounded-md ","border-gray-300","py-5 px-4","cursor-pointer","select-none","w-100","md:w-[260px]",n?"ring-cyan-500 border-cyan-500":"ring-transparent",i?"opacity-50 cursor-not-allowed":"hover:ring-cyan-500 hover:border-cyan-500"),onClick:o,children:[e.jsxs("div",{children:[e.jsx("h6",{children:c}),e.jsx("p",{children:l.desc})]}),n&&e.jsx(p,{className:"text-cyan-500 text-xl"})]})},l.value))}),v=()=>{const[l,n]=d.useState(["left"]),[c,o]=d.useState(["center"]),i=d.useCallback(s=>{n(s)},[n]),r=d.useCallback(s=>{o(s)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h6",{className:"mb-3",children:"Single Selection"}),e.jsxs(t,{value:l,onChange:s=>i(s),children:[e.jsx(t.Item,{value:"left",children:"Left"}),e.jsx(t.Item,{value:"center",children:"Center"}),e.jsx(t.Item,{value:"right",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-3",children:"Multiple Selection"}),e.jsxs(t,{selectionType:"multiple",value:c,onChange:s=>r(s),children:[e.jsx(t.Item,{value:"left",children:"Left"}),e.jsx(t.Item,{value:"center",children:"Center"}),e.jsx(t.Item,{value:"right",children:"Right"})]})]})]})},a="forms/Segment/",b={title:"Segment",desc:"Segments display a group of related options that allow user toggled on or off."},C=[{mdName:"Basic",mdPath:a,title:"Basic",desc:"Basic usage of Segment.",component:e.jsx(g,{})},{mdName:"Size",mdPath:a,title:"Size",desc:"Segment have exact size variation as <code>Button</code>",component:e.jsx(h,{})},{mdName:"MultipleSelection",mdPath:a,title:"Multiple Selection",desc:"Segment support multiple selaction, by setting <code>selectionType</code> to <code>multiple</code>.",component:e.jsx(x,{})},{mdName:"Disabled",mdPath:a,title:"Disabled",desc:"Make Segment Item inactive by adding the <code>disabled</code> prop to.",component:e.jsx(S,{})},{mdName:"Custom",mdPath:a,title:"Custom Segment",desc:"Segment Item allow us to render prop as children to create a more custom look options.",component:e.jsx(j,{})},{mdName:"Controlled",mdPath:a,title:"Controlled",desc:"Some example of controlled Segment.",component:e.jsx(v,{})}],y=[{component:"Segment",api:[{propName:"defaultValue",type:"<code>string[]</code>",default:"-",desc:"Initial value for uncontrolled Segment"},{propName:"onChange",type:"<code>(segmentValue: string[]) => void</code>",default:"-",desc:"Callback when Segment value is changed"},{propName:"selectionType",type:"<code>'single' | 'multiple'</code>",default:"<code>'single'</code>",desc:"Whether a single or multiple items can be selected at a time"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code> | <code>'xs'</code>",default:"<code>'md'</code>",desc:"Size of all segment item."},{propName:"value",type:"<code>string[]</code>",default:"-",desc:"Controlled value of the Segment item to activate"}]},{component:"Segment.Item",api:[{propName:"children",type:"<code>({active: boolean, disabled: boolean, value: string[], ref: string, onSegmentItemClick: () => void}) => ReactNode | ReactNode</code>",default:"-",desc:"Children of Segment item"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable Segment item"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code> | <code>'xs'</code>",default:"<code>'md'</code>",desc:"Size of the segment item."},{propName:"value",type:"<code>string</code>",default:"-",desc:"An unique value for Segment item"}]}],$=()=>e.jsx(u,{header:b,demos:C,api:y});export{$ as default};
