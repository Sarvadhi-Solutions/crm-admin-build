import{r as s,J as o,j as e}from"./index-eaf52e42.js";import{C as l}from"./Views-58b94d35.js";const _=s.lazy(()=>o(()=>import("./Step1-540df7fc.js"),["assets/Step1-540df7fc.js","assets/index-eaf52e42.js","assets/index-1a124896.css","assets/DoubleSidedImage-b10cd52b.js","assets/Button-fed4171f.js"])),i=s.lazy(()=>o(()=>import("./Step2-64c583de.js"),["assets/Step2-64c583de.js","assets/index-eaf52e42.js","assets/index-1a124896.css","assets/Button-fed4171f.js","assets/FormItem-29182244.js","assets/index-6c9c5c4e.js","assets/Views-58b94d35.js","assets/Select-dcd56571.js","assets/slicedToArray-1b3ef329.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-5085ff27.js","assets/floating-ui.dom-bef9cea3.js","assets/get-ff4ee146.js","assets/toString-e414acd1.js","assets/_MapCache-f8fbe57f.js","assets/index.esm-decdb68b.js","assets/Input-85c69384.js","assets/isNil-d4a6e430.js","assets/formik.esm-d9e9eac5.js","assets/index.esm-da5124e7.js"])),x=s.lazy(()=>o(()=>import("./Step3-61981fe9.js"),["assets/Step3-61981fe9.js","assets/index-eaf52e42.js","assets/index-1a124896.css","assets/FormItem-29182244.js","assets/Button-fed4171f.js","assets/index-6c9c5c4e.js","assets/Views-58b94d35.js","assets/index-4d78851d.js","assets/useControllableState-4a07cc2b.js","assets/formik.esm-d9e9eac5.js","assets/SegmentItemOption-4de5a997.js","assets/useThemeClass-62b227ea.js","assets/index.esm-decdb68b.js"])),p=s.lazy(()=>o(()=>import("./Step4-86d9cad1.js"),["assets/Step4-86d9cad1.js","assets/index-eaf52e42.js","assets/index-1a124896.css","assets/FormItem-29182244.js","assets/Button-fed4171f.js","assets/index-6c9c5c4e.js","assets/Views-58b94d35.js","assets/index-4d78851d.js","assets/useControllableState-4a07cc2b.js","assets/formik.esm-d9e9eac5.js","assets/SegmentItemOption-4de5a997.js","assets/useThemeClass-62b227ea.js","assets/index.esm-decdb68b.js"])),u=s.lazy(()=>o(()=>import("./QuickStart-186e3d08.js"),["assets/QuickStart-186e3d08.js","assets/index-eaf52e42.js","assets/index-1a124896.css","assets/Card-c132ef99.js","assets/Button-fed4171f.js","assets/useThemeClass-62b227ea.js","assets/index.esm-decdb68b.js"])),m=()=>{const[t,n]=s.useState(0),a=s.useCallback(()=>{n(t+1)},[t]),r=s.useCallback(()=>{n(t-1)},[t]),c=()=>{n(4)};return e.jsx(l,{className:"h-full",children:e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsxs(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:[t===0&&e.jsx(_,{onNext:a,onSkip:c}),t===1&&e.jsx(i,{onNext:a,onBack:r}),t===2&&e.jsx(x,{onNext:a,onBack:r}),t===3&&e.jsx(p,{onNext:a,onBack:r}),t===4&&e.jsx(u,{})]})})})},E=m;export{E as default};
