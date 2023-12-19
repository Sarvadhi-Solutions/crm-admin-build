import{j as e,r as x}from"./index-eaf52e42.js";import{D as v}from"./DemoLayout-9115e4a8.js";import{T as t}from"./index-bdee5ec8.js";import{aS as j,ae as f,aT as T}from"./index.esm-decdb68b.js";import"./AdaptableCard-e9f1de59.js";import"./Card-c132ef99.js";import"./Views-58b94d35.js";import"./Affix-f7f5615f.js";import"./Button-fed4171f.js";import"./Tooltip-6b1d43dc.js";import"./usePopper-c621d6e7.js";import"./index.esm-601da8bc.js";import"./index-6c9c5c4e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5085ff27.js";import"./index-3be64316.js";import"./index-e6ca51e2.js";import"./index.esm-819ab12a.js";import"./useControllableState-4a07cc2b.js";const{TabNav:s,TabList:y,TabContent:i}=t,g=()=>e.jsx("div",{children:e.jsxs(t,{defaultValue:"tab1",children:[e.jsxs(y,{children:[e.jsx(s,{value:"tab1",children:"Home"}),e.jsx(s,{value:"tab2",children:"Profile"}),e.jsx(s,{value:"tab3",children:"Contact"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx(i,{value:"tab1",children:e.jsx("p",{children:"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)"})}),e.jsx(i,{value:"tab2",children:e.jsx("p",{children:"A computer lets you make more mistakes faster than any invention in human history with the possible exceptions of handguns and tequila. (Mitch Radcliffe)."})}),e.jsx(i,{value:"tab3",children:e.jsx("p",{children:"In C++ its harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)"})})]})]})}),{TabNav:n,TabList:w,TabContent:l}=t,N=()=>e.jsx("div",{children:e.jsxs(t,{defaultValue:"tab1",children:[e.jsxs(w,{children:[e.jsx(n,{value:"tab1",icon:e.jsx(j,{}),children:"Home"}),e.jsx(n,{value:"tab2",icon:e.jsx(f,{}),children:"Profile"}),e.jsx(n,{value:"tab3",icon:e.jsx(T,{}),children:"Contact"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx(l,{value:"tab1",children:e.jsx("p",{children:"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{children:"A computer lets you make more mistakes faster than any invention in human historywith the possible exceptions of handguns and tequila. (Mitch Radcliffe)."})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{children:"In C++ its harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)"})})]})]})}),{TabNav:r,TabList:C,TabContent:d}=t,k=()=>e.jsx("div",{children:e.jsxs(t,{defaultValue:"tab1",variant:"pill",children:[e.jsxs(C,{children:[e.jsx(r,{value:"tab1",children:"Home"}),e.jsx(r,{value:"tab2",children:"Profile"}),e.jsx(r,{value:"tab3",children:"Contact"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx(d,{value:"tab1",children:e.jsx("p",{children:"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)"})}),e.jsx(d,{value:"tab2",children:e.jsx("p",{children:"A computer lets you make more mistakes faster than any invention in human history with the possible exceptions of handguns and tequila. (Mitch Radcliffe)."})}),e.jsx(d,{value:"tab3",children:e.jsx("p",{children:"In C++ its harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)"})})]})]})}),{TabNav:a,TabList:h}=t,I=()=>e.jsxs("div",{children:[e.jsx(t,{defaultValue:"tab1",className:"mb-4",children:e.jsxs(h,{children:[e.jsx(a,{value:"tab1",children:"Home"}),e.jsx(a,{disabled:!0,value:"tab2",children:"Profile"}),e.jsx(a,{value:"tab3",children:"Contact"})]})}),e.jsx(t,{defaultValue:"tab1",variant:"pill",children:e.jsxs(h,{children:[e.jsx(a,{value:"tab1",children:"Home"}),e.jsx(a,{disabled:!0,value:"tab2",children:"Profile"}),e.jsx(a,{value:"tab3",children:"Contact"})]})})]}),{TabNav:c,TabList:$,TabContent:u}=t,H=()=>{const[b,p]=x.useState("tab1");return e.jsx("div",{children:e.jsxs(t,{value:b,onChange:m=>p(m),children:[e.jsxs($,{children:[e.jsx(c,{value:"tab1",children:"Home"}),e.jsx(c,{value:"tab2",children:"Profile"}),e.jsx(c,{value:"tab3",children:"Contact"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx(u,{value:"tab1",children:e.jsx("p",{children:"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)"})}),e.jsx(u,{value:"tab2",children:e.jsx("p",{children:"A computer lets you make more mistakes faster than any invention in human history with the possible exceptions of handguns and tequila. (Mitch Radcliffe)."})}),e.jsx(u,{value:"tab3",children:e.jsx("p",{children:"In C++ its harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)"})})]})]})})},o="Tabs",L={title:"Tabs",desc:"Tabs help to organize related content in a single view which user make easy to explore and switch between different views."},P=[{mdName:"Default",mdPath:o,title:"Default",desc:"Default Tabs usage.",component:e.jsx(g,{})},{mdName:"Pill",mdPath:o,title:"Pill",desc:"You can change the Tabs style by setting <code>variant</code> to pill.",component:e.jsx(k,{})},{mdName:"Icons",mdPath:o,title:"Icons",desc:"TabNav <code>icon</code> prop allow us to insert icon with auto spaced.",component:e.jsx(N,{})},{mdName:"Disabled",mdPath:o,title:"Disabled",desc:"Set <code>disabled</code> to TabNav prevent user execute click event.",component:e.jsx(I,{})},{mdName:"ControlledTabs",mdPath:o,title:"Controlled Tabs",desc:"Example of controlled Tabs.",component:e.jsx(H,{})}],D=[{component:"Tabs",api:[{propName:"defaultValue",type:"<code>string</code>",default:"-",desc:"Initial value for uncontrolled Tabs"},{propName:"onChange",type:"<code>(tabValue: string) => void</code>",default:"-",desc:"Callback when Tab value is changed"},{propName:"value",type:"<code>string</code>",default:"-",desc:"Controlled value of the tab to activate"},{propName:"variant",type:"<code>'underline'</code> | <code>'pill'</code>",default:"-",desc:"Tabs style"}]},{component:"Tabs.TabList",api:[]},{component:"Tabs.TabNav",api:[{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable the tab"},{propName:"icon",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Tab icon"},{propName:"value(*)",type:"<code>string</code>",default:"-",desc:"An unique value matched with <code>TabContent</code>"}]},{component:"Tabs.TabContent",api:[{propName:"value(*)",type:"<code>string</code>",default:"-",desc:"An unique value matched with <code>TabNav</code>"}]}],Z=()=>e.jsx(v,{header:L,demos:P,api:D});export{Z as default};
