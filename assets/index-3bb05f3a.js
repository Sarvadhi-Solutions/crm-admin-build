import{r as s,K as o,j as e}from"./index-847ef4f8.js";import{C as l}from"./Views-5cd95793.js";const _=s.lazy(()=>o(()=>import("./Step1-1803b2c0.js"),["assets/Step1-1803b2c0.js","assets/index-847ef4f8.js","assets/index-d1619282.css","assets/DoubleSidedImage-ee9d92d5.js","assets/Button-b74cc268.js"])),i=s.lazy(()=>o(()=>import("./Step2-657d5aec.js"),["assets/Step2-657d5aec.js","assets/index-847ef4f8.js","assets/index-d1619282.css","assets/Button-b74cc268.js","assets/FormItem-6caba9dc.js","assets/index-5449d842.js","assets/Views-5cd95793.js","assets/Select-ed97c876.js","assets/slicedToArray-505afcc1.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-621896fa.js","assets/floating-ui.dom-4bc0055b.js","assets/get-263abd7f.js","assets/toString-271e4441.js","assets/_MapCache-9e036a1f.js","assets/index.esm-487b51fd.js","assets/Input-07dbb44b.js","assets/isNil-4ae3346e.js","assets/formik.esm-bebe3698.js","assets/index.esm-2dd52620.js"])),x=s.lazy(()=>o(()=>import("./Step3-b747c14f.js"),["assets/Step3-b747c14f.js","assets/index-847ef4f8.js","assets/index-d1619282.css","assets/FormItem-6caba9dc.js","assets/Button-b74cc268.js","assets/index-5449d842.js","assets/Views-5cd95793.js","assets/index-dbe4178c.js","assets/useControllableState-d474fa8c.js","assets/formik.esm-bebe3698.js","assets/SegmentItemOption-0ad22a42.js","assets/useThemeClass-606c5d8c.js","assets/index.esm-487b51fd.js"])),p=s.lazy(()=>o(()=>import("./Step4-0ed1220a.js"),["assets/Step4-0ed1220a.js","assets/index-847ef4f8.js","assets/index-d1619282.css","assets/FormItem-6caba9dc.js","assets/Button-b74cc268.js","assets/index-5449d842.js","assets/Views-5cd95793.js","assets/index-dbe4178c.js","assets/useControllableState-d474fa8c.js","assets/formik.esm-bebe3698.js","assets/SegmentItemOption-0ad22a42.js","assets/useThemeClass-606c5d8c.js","assets/index.esm-487b51fd.js"])),u=s.lazy(()=>o(()=>import("./QuickStart-ce9a72c7.js"),["assets/QuickStart-ce9a72c7.js","assets/index-847ef4f8.js","assets/index-d1619282.css","assets/Card-7a58c886.js","assets/Button-b74cc268.js","assets/useThemeClass-606c5d8c.js","assets/index.esm-487b51fd.js"])),m=()=>{const[t,n]=s.useState(0),a=s.useCallback(()=>{n(t+1)},[t]),r=s.useCallback(()=>{n(t-1)},[t]),c=()=>{n(4)};return e.jsx(l,{className:"h-full",children:e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsxs(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:[t===0&&e.jsx(_,{onNext:a,onSkip:c}),t===1&&e.jsx(i,{onNext:a,onBack:r}),t===2&&e.jsx(x,{onNext:a,onBack:r}),t===3&&e.jsx(p,{onNext:a,onBack:r}),t===4&&e.jsx(u,{})]})})})},E=m;export{E as default};
