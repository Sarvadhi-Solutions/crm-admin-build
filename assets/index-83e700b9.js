import{r as a,j as e}from"./index-21d7ce34.js";import{D as i}from"./DemoLayout-5f0e61ea.js";import{S as s}from"./Switcher-25855834.js";import{T as c}from"./TextBlockSkeleton-8d581071.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./SyntaxHighlighter-ef52ffff.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-d93ff48a.js";import"./DemoComponentApi-f2c63353.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./Skeleton-5f2460b7.js";const n=()=>{const[o,t]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-6 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(s,{checked:o,onChange:r=>t(!r)})]}),e.jsx("div",{className:"prose",children:o?e.jsx(c,{rowCount:4}):e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Wall of text"}),e.jsx("p",{children:"Kopi-luwak, seasonal breve strong caffeine medium lungo grinder. Espresso filter, café au lait turkish, sweet, single shot half and half americano variety mocha extraction. Skinny to go, a brewed, mocha single origin, plunger pot cup strong white dripper. Single origin pumpkin spice, instant, cultivar americano crema aromatic bar café au lait."})]})})]})},d="TextBlockSkeletonDoc",l={title:"TextBlockSkeleton",desc:"TextBlockSkeleton is a combination of Skeleton component for display a loading state of text bloack."},m=[{mdName:"Example",mdPath:d,title:"Example",desc:"",component:e.jsx(n,{})}],p=[{component:"TextBlockSkeleton",api:[{propName:"height",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Thickness of the skeleton bar"},{propName:"lastChildWidth",type:"<code>string</code> | <code>number</code>",default:"<code>'60%'</code>",desc:"Width of the last skeleton bar"},{propName:"rowCount",type:"<code>number</code>",default:"<code>3</code>",desc:"Total skeleton bar rows to display"},{propName:"title",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to display title skeleton bar"},{propName:"titleWidth",type:"<code>string</code> | <code>number</code>",default:"<code>'40%'</code>",desc:"Width of the title skeleton bar"}]}],A=()=>e.jsx(i,{innerFrame:!1,header:l,demos:m,api:p,mdPrefixPath:"shared"});export{A as default};
