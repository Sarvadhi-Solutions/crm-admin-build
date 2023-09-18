import{r as a,j as e}from"./index-7a16719d.js";import{D as i}from"./DemoLayout-7c805240.js";import{S as s}from"./Switcher-9edb53af.js";import{T as c}from"./TextBlockSkeleton-4da9f025.js";import"./AdaptableCard-13b794a2.js";import"./Card-1701bbfb.js";import"./Views-6f74b325.js";import"./Affix-67c05f4f.js";import"./Button-796af526.js";import"./context-0b7be94f.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index.esm-a0bff864.js";import"./SyntaxHighlighter-746c9a4b.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-7c73c178.js";import"./DemoComponentApi-898a36fa.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./Skeleton-37e417fd.js";const n=()=>{const[o,t]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-6 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(s,{checked:o,onChange:r=>t(!r)})]}),e.jsx("div",{className:"prose",children:o?e.jsx(c,{rowCount:4}):e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Wall of text"}),e.jsx("p",{children:"Kopi-luwak, seasonal breve strong caffeine medium lungo grinder. Espresso filter, café au lait turkish, sweet, single shot half and half americano variety mocha extraction. Skinny to go, a brewed, mocha single origin, plunger pot cup strong white dripper. Single origin pumpkin spice, instant, cultivar americano crema aromatic bar café au lait."})]})})]})},d="TextBlockSkeletonDoc",l={title:"TextBlockSkeleton",desc:"TextBlockSkeleton is a combination of Skeleton component for display a loading state of text bloack."},m=[{mdName:"Example",mdPath:d,title:"Example",desc:"",component:e.jsx(n,{})}],p=[{component:"TextBlockSkeleton",api:[{propName:"height",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Thickness of the skeleton bar"},{propName:"lastChildWidth",type:"<code>string</code> | <code>number</code>",default:"<code>'60%'</code>",desc:"Width of the last skeleton bar"},{propName:"rowCount",type:"<code>number</code>",default:"<code>3</code>",desc:"Total skeleton bar rows to display"},{propName:"title",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to display title skeleton bar"},{propName:"titleWidth",type:"<code>string</code> | <code>number</code>",default:"<code>'40%'</code>",desc:"Width of the title skeleton bar"}]}],A=()=>e.jsx(i,{innerFrame:!1,header:l,demos:m,api:p,mdPrefixPath:"shared"});export{A as default};
