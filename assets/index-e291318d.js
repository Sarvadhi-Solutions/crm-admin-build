import{am as y,an as j,ao as D,ap as N,aY as _,j as s,aq as A,r as c,K as f,a as I}from"./index-e9e80fad.js";import{A as b}from"./AdaptableCard-4f414664.js";import{C as F}from"./Views-6a6f19fc.js";import{M as h}from"./index-e4774632.js";import{L as d,at as L}from"./index.esm-0e189e80.js";import{u as z}from"./useThemeClass-395527ab.js";import{d as E}from"./AccountServices-1afd0935.js";import{aP as R}from"./CrmService-dcc529f1.js";const x="crmAccountDetailForm",O=y(x+"/getForm",async()=>(await E()).data),T=y(x+"/getIndustry",async()=>(await R()).data),u={formData:{personalInformation:{logo:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",industry:"",organizationSize:""},branches:{branchName:"",addressInformation:"",isHeadQuarter:"",branchOwnerId:"",contact:"",dialCode:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},industryList:[],stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},S=j({name:`${x}/state`,initialState:u,reducers:{resetState:a=>{a.formData={...u.formData},a.stepStatus={...u.stepStatus},a.currentStep=u.currentStep},setFormData:(a,n)=>{a.formData={...a.formData,...n.payload}},setStepStatus:(a,n)=>{a.stepStatus={...a.stepStatus,...n.payload}},setCurrentStep:(a,n)=>{a.currentStep=n.payload}},extraReducers:a=>{a.addCase(O.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus}).addCase(T.fulfilled,(n,e)=>{n.industryList=e.payload.data})}}),{setFormData:k,setStepStatus:C,setCurrentStep:m,resetState:P}=S.actions,M=S.reducer,w=D({data:M}),p=N,B=[{label:"Organization information",value:0},{label:"Braches",value:1}],H=({currentStep:a,currentStepStatus:n,stepStatus:e})=>{const{textTheme:l}=z(),o=_(),i=t=>{const r=e[t].status;if(r==="complete"||r==="current"){o(m(t));return}t!==a&&t<a&&(n==="pending"&&o(C("complete")),o(m(t)))};return s.jsx(h,{variant:"transparent",className:"px-2",children:B.map(t=>s.jsxs(h.MenuItem,{eventKey:t.value.toString(),className:"mb-2",isActive:a===t.value,onSelect:()=>i(t.value),children:[s.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[t.value].status==="complete"&&s.jsx(d,{className:l}),e[t.value].status==="current"&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a===t.value&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a!==t.value&&s.jsx(L,{className:"text-gray-400"}),e[t.value].status==="invalid"&&s.jsx(d,{className:"text-gray-400"})]}),s.jsx("span",{children:t.label})]},t.value))})};A("crmAccountDetailForm",w);const V=c.lazy(()=>f(()=>import("./PersonalInformation-688264c5.js"),["assets/PersonalInformation-688264c5.js","assets/index-e9e80fad.js","assets/index-e466e11d.css","assets/Alert-4b9289a7.js","assets/useTimeout-0a987a2a.js","assets/index.esm-0e189e80.js","assets/CloseButton-59471e32.js","assets/StatusIcon-8798719a.js","assets/Views-6a6f19fc.js","assets/index-fdab81dd.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-0ed58b52.js","assets/usePopper-279cd1bc.js","assets/index.esm-a4c1c24f.js","assets/index-bfcd6c72.js","assets/Badge-c25ebbc3.js","assets/Button-227d4871.js","assets/RangeCalendar-8629c316.js","assets/useControllableState-97f974f1.js","assets/Card-14c7d5e0.js","assets/index-7e05bd38.js","assets/cloneDeep-ccfbe55a.js","assets/_MapCache-49bf6e31.js","assets/_getPrototype-64e64018.js","assets/_baseIsEqual-934e8574.js","assets/get-e7c8697a.js","assets/toString-d452c1eb.js","assets/index-034f67b7.js","assets/Input-d4f6dd9d.js","assets/isNil-5d9d980a.js","assets/useRootClose-50069751.js","assets/TimeInput-3543dad0.js","assets/useUniqueId-6815521f.js","assets/useDidUpdate-b1f63e57.js","assets/Dialog-78dc0140.js","assets/index-fc6fab3c.js","assets/Drawer-6d31deda.js","assets/index-713c10b4.js","assets/useUncertainRef-07db30ec.js","assets/chainedFunction-070f832c.js","assets/index-ffd743d2.js","assets/FormItem-4bb500cc.js","assets/index-5342abc4.js","assets/index-e4774632.js","assets/toast-87b47471.js","assets/Pagination-1965e489.js","assets/Progress-d4986dc8.js","assets/index-2b35542d.js","assets/ScrollBar-21d87604.js","assets/index-ef47c85f.js","assets/Select-435e7909.js","assets/slicedToArray-64904844.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-0e64d439.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-635ffbd7.js","assets/index-c9660479.js","assets/mapCloneElement-b62b3eb9.js","assets/Switcher-c852a089.js","assets/index-a7d59cb4.js","assets/index.esm-778bb6ce.js","assets/index-7f78caa8.js","assets/Tag-b2597221.js","assets/index-9428398a.js","assets/index-ae776672.js","assets/Upload-15d917f3.js","assets/index.esm-c9613619.js","assets/countries.constant-5369f7df.js","assets/formik.esm-41cf3f17.js","assets/react-number-format.es-ce2dfab0.js","assets/index.esm-0ceb40eb.js","assets/index-b61495b8.js","assets/CrmService-dcc529f1.js","assets/react-select-creatable.esm-9a05d79b.js","assets/AdaptableCard-4f414664.js","assets/useThemeClass-395527ab.js","assets/AccountServices-1afd0935.js"])),G=c.lazy(()=>f(()=>import("./Branches-37c8bc1b.js"),["assets/Branches-37c8bc1b.js","assets/index-e9e80fad.js","assets/index-e466e11d.css","assets/Alert-4b9289a7.js","assets/useTimeout-0a987a2a.js","assets/index.esm-0e189e80.js","assets/CloseButton-59471e32.js","assets/StatusIcon-8798719a.js","assets/Views-6a6f19fc.js","assets/index-fdab81dd.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-0ed58b52.js","assets/usePopper-279cd1bc.js","assets/index.esm-a4c1c24f.js","assets/index-bfcd6c72.js","assets/Badge-c25ebbc3.js","assets/Button-227d4871.js","assets/RangeCalendar-8629c316.js","assets/useControllableState-97f974f1.js","assets/Card-14c7d5e0.js","assets/index-7e05bd38.js","assets/cloneDeep-ccfbe55a.js","assets/_MapCache-49bf6e31.js","assets/_getPrototype-64e64018.js","assets/_baseIsEqual-934e8574.js","assets/get-e7c8697a.js","assets/toString-d452c1eb.js","assets/index-034f67b7.js","assets/Input-d4f6dd9d.js","assets/isNil-5d9d980a.js","assets/useRootClose-50069751.js","assets/TimeInput-3543dad0.js","assets/useUniqueId-6815521f.js","assets/useDidUpdate-b1f63e57.js","assets/Dialog-78dc0140.js","assets/index-fc6fab3c.js","assets/Drawer-6d31deda.js","assets/index-713c10b4.js","assets/useUncertainRef-07db30ec.js","assets/chainedFunction-070f832c.js","assets/index-ffd743d2.js","assets/FormItem-4bb500cc.js","assets/index-5342abc4.js","assets/index-e4774632.js","assets/toast-87b47471.js","assets/Pagination-1965e489.js","assets/Progress-d4986dc8.js","assets/index-2b35542d.js","assets/ScrollBar-21d87604.js","assets/index-ef47c85f.js","assets/Select-435e7909.js","assets/slicedToArray-64904844.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-0e64d439.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-635ffbd7.js","assets/index-c9660479.js","assets/mapCloneElement-b62b3eb9.js","assets/Switcher-c852a089.js","assets/index-a7d59cb4.js","assets/index.esm-778bb6ce.js","assets/index-7f78caa8.js","assets/Tag-b2597221.js","assets/index-9428398a.js","assets/index-ae776672.js","assets/Upload-15d917f3.js","assets/index.esm-c9613619.js","assets/countries.constant-5369f7df.js","assets/index-b61495b8.js","assets/CrmService-dcc529f1.js","assets/formik.esm-41cf3f17.js","assets/react-number-format.es-ce2dfab0.js","assets/index.esm-0ceb40eb.js","assets/AdaptableCard-4f414664.js","assets/useThemeClass-395527ab.js","assets/AccountServices-1afd0935.js"])),K=c.lazy(()=>f(()=>import("./AccountReview-d09a56b4.js"),["assets/AccountReview-d09a56b4.js","assets/index-e9e80fad.js","assets/index-e466e11d.css","assets/DoubleSidedImage-8ea80133.js","assets/Alert-4b9289a7.js","assets/useTimeout-0a987a2a.js","assets/index.esm-0e189e80.js","assets/CloseButton-59471e32.js","assets/StatusIcon-8798719a.js","assets/Views-6a6f19fc.js","assets/index-fdab81dd.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-0ed58b52.js","assets/usePopper-279cd1bc.js","assets/index.esm-a4c1c24f.js","assets/index-bfcd6c72.js","assets/Badge-c25ebbc3.js","assets/Button-227d4871.js","assets/RangeCalendar-8629c316.js","assets/useControllableState-97f974f1.js","assets/Card-14c7d5e0.js","assets/index-7e05bd38.js","assets/cloneDeep-ccfbe55a.js","assets/_MapCache-49bf6e31.js","assets/_getPrototype-64e64018.js","assets/_baseIsEqual-934e8574.js","assets/get-e7c8697a.js","assets/toString-d452c1eb.js","assets/index-034f67b7.js","assets/Input-d4f6dd9d.js","assets/isNil-5d9d980a.js","assets/useRootClose-50069751.js","assets/TimeInput-3543dad0.js","assets/useUniqueId-6815521f.js","assets/useDidUpdate-b1f63e57.js","assets/Dialog-78dc0140.js","assets/index-fc6fab3c.js","assets/Drawer-6d31deda.js","assets/index-713c10b4.js","assets/useUncertainRef-07db30ec.js","assets/chainedFunction-070f832c.js","assets/index-ffd743d2.js","assets/FormItem-4bb500cc.js","assets/index-5342abc4.js","assets/index-e4774632.js","assets/toast-87b47471.js","assets/Pagination-1965e489.js","assets/Progress-d4986dc8.js","assets/index-2b35542d.js","assets/ScrollBar-21d87604.js","assets/index-ef47c85f.js","assets/Select-435e7909.js","assets/slicedToArray-64904844.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-0e64d439.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-635ffbd7.js","assets/index-c9660479.js","assets/mapCloneElement-b62b3eb9.js","assets/Switcher-c852a089.js","assets/index-a7d59cb4.js","assets/index.esm-778bb6ce.js","assets/index-7f78caa8.js","assets/Tag-b2597221.js","assets/index-9428398a.js","assets/index-ae776672.js","assets/Upload-15d917f3.js","assets/index.esm-c9613619.js","assets/AdaptableCard-4f414664.js","assets/useThemeClass-395527ab.js","assets/AccountServices-1afd0935.js","assets/CrmService-dcc529f1.js"])),q=()=>{const a=I(),n=p(r=>r.crmAccountDetailForm.data.stepStatus),e=p(r=>r.crmAccountDetailForm.data.currentStep),l=p(r=>r.crmAccountDetailForm.data.formData),o=(r,v)=>{const g=e+1;a(k({[v]:r})),a(C({[e]:{status:"complete"},[g]:{status:"current"}})),a(m(g))},i=()=>{const r=e-1;a(m(r))},t=c.useMemo(()=>n[e].status,[n,e]);return c.useEffect(()=>()=>{a(P())},[]),s.jsx(F,{className:"h-full",children:s.jsx(b,{className:"h-full",bodyClass:"h-full",children:s.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&s.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:s.jsx(H,{currentStep:e,currentStepStatus:t,stepStatus:n})}),s.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:s.jsxs(c.Suspense,{fallback:s.jsx(s.Fragment,{}),children:[e===0&&s.jsx(V,{data:l.personalInformation,currentStepStatus:t,onNextChange:o}),e===1&&s.jsx(G,{data:l.branches,currentStepStatus:t,onNextChange:o,onBackChange:i}),e===2&&s.jsx(K,{currentStepStatus:t,onNextChange:o,onBackChange:i})]})})]})})})},Q=q,ea=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{T as g,ea as i,P as r,p as u};
