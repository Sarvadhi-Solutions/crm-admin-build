import{am as y,an as j,ao as D,ap as N,aZ as _,j as s,aq as A,r as c,K as f,a as I}from"./index-afeb99dd.js";import{A as b}from"./AdaptableCard-01cd8827.js";import{C as F}from"./Views-f7a9b898.js";import{M as h}from"./index-cf176bc9.js";import{L as d,at as L}from"./index.esm-f4f10cf9.js";import{u as z}from"./useThemeClass-a6e6a15d.js";import{d as E}from"./AccountServices-9922ba58.js";import{aS as R}from"./CrmService-80eafdff.js";const x="crmAccountDetailForm",O=y(x+"/getForm",async()=>(await E()).data),T=y(x+"/getIndustry",async()=>(await R()).data),u={formData:{personalInformation:{logo:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",industry:"",organizationSize:""},branches:{branchName:"",addressInformation:"",isHeadQuarter:"",branchOwnerId:"",contact:"",dialCode:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},industryList:[],stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},S=j({name:`${x}/state`,initialState:u,reducers:{resetState:a=>{a.formData={...u.formData},a.stepStatus={...u.stepStatus},a.currentStep=u.currentStep},setFormData:(a,n)=>{a.formData={...a.formData,...n.payload}},setStepStatus:(a,n)=>{a.stepStatus={...a.stepStatus,...n.payload}},setCurrentStep:(a,n)=>{a.currentStep=n.payload}},extraReducers:a=>{a.addCase(O.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus}).addCase(T.fulfilled,(n,e)=>{n.industryList=e.payload.data})}}),{setFormData:k,setStepStatus:C,setCurrentStep:m,resetState:M}=S.actions,P=S.reducer,w=D({data:P}),p=N,B=[{label:"Organization information",value:0},{label:"Braches",value:1}],H=({currentStep:a,currentStepStatus:n,stepStatus:e})=>{const{textTheme:l}=z(),o=_(),i=t=>{const r=e[t].status;if(r==="complete"||r==="current"){o(m(t));return}t!==a&&t<a&&(n==="pending"&&o(C("complete")),o(m(t)))};return s.jsx(h,{variant:"transparent",className:"px-2",children:B.map(t=>s.jsxs(h.MenuItem,{eventKey:t.value.toString(),className:"mb-2",isActive:a===t.value,onSelect:()=>i(t.value),children:[s.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[t.value].status==="complete"&&s.jsx(d,{className:l}),e[t.value].status==="current"&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a===t.value&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a!==t.value&&s.jsx(L,{className:"text-gray-400"}),e[t.value].status==="invalid"&&s.jsx(d,{className:"text-gray-400"})]}),s.jsx("span",{children:t.label})]},t.value))})};A("crmAccountDetailForm",w);const V=c.lazy(()=>f(()=>import("./PersonalInformation-b7079748.js"),["assets/PersonalInformation-b7079748.js","assets/index-afeb99dd.js","assets/index-e466e11d.css","assets/Alert-abc01096.js","assets/useTimeout-682d9172.js","assets/index.esm-f4f10cf9.js","assets/CloseButton-217fbce9.js","assets/StatusIcon-47182631.js","assets/Views-f7a9b898.js","assets/index-08720d19.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-46e989ae.js","assets/usePopper-996565a6.js","assets/index.esm-44e5e467.js","assets/index-07932842.js","assets/Badge-57260147.js","assets/Button-5e9321cd.js","assets/RangeCalendar-c8e5e23d.js","assets/useControllableState-8021c4d2.js","assets/Card-a25bc86a.js","assets/index-646ce73f.js","assets/cloneDeep-f2528b95.js","assets/_MapCache-d7aaf9c0.js","assets/_getPrototype-c53836d9.js","assets/_baseIsEqual-879f4f25.js","assets/get-a5b2ed65.js","assets/toString-79dd21b9.js","assets/index-71f17666.js","assets/Input-fe5fc582.js","assets/isNil-e2aeddd7.js","assets/useRootClose-d6d9b544.js","assets/TimeInput-a38fa8f0.js","assets/useUniqueId-6aef0ec3.js","assets/useDidUpdate-f2162ffc.js","assets/Dialog-b0478122.js","assets/index-a4e43560.js","assets/Drawer-6021c63b.js","assets/index-29936284.js","assets/useUncertainRef-8a988cd5.js","assets/chainedFunction-070f832c.js","assets/index-8145753b.js","assets/FormItem-2a151033.js","assets/index-ed8cb66a.js","assets/index-cf176bc9.js","assets/toast-b57ee67d.js","assets/Pagination-46eefec6.js","assets/Progress-65192619.js","assets/index-fde04e31.js","assets/ScrollBar-93cfd3f9.js","assets/index-b82cade4.js","assets/Select-2984c046.js","assets/slicedToArray-fe25a6b5.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b3b9a0e8.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-1c4e4b72.js","assets/index-a70c7a57.js","assets/mapCloneElement-4a1cd053.js","assets/Switcher-83e7e292.js","assets/index-45766b4b.js","assets/index.esm-a56f1c0a.js","assets/index-b8a0c8d7.js","assets/Tag-f3e28a4c.js","assets/index-53e11fec.js","assets/index-16b82756.js","assets/Upload-1e962b58.js","assets/index.esm-e1783cee.js","assets/countries.constant-5369f7df.js","assets/formik.esm-e70cf2ce.js","assets/react-number-format.es-f9c69fb4.js","assets/index.esm-639db9d4.js","assets/index-a5cccc57.js","assets/CrmService-80eafdff.js","assets/react-select-creatable.esm-ec2ba8d2.js","assets/AdaptableCard-01cd8827.js","assets/useThemeClass-a6e6a15d.js","assets/AccountServices-9922ba58.js"])),G=c.lazy(()=>f(()=>import("./Branches-f8995283.js"),["assets/Branches-f8995283.js","assets/index-afeb99dd.js","assets/index-e466e11d.css","assets/Alert-abc01096.js","assets/useTimeout-682d9172.js","assets/index.esm-f4f10cf9.js","assets/CloseButton-217fbce9.js","assets/StatusIcon-47182631.js","assets/Views-f7a9b898.js","assets/index-08720d19.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-46e989ae.js","assets/usePopper-996565a6.js","assets/index.esm-44e5e467.js","assets/index-07932842.js","assets/Badge-57260147.js","assets/Button-5e9321cd.js","assets/RangeCalendar-c8e5e23d.js","assets/useControllableState-8021c4d2.js","assets/Card-a25bc86a.js","assets/index-646ce73f.js","assets/cloneDeep-f2528b95.js","assets/_MapCache-d7aaf9c0.js","assets/_getPrototype-c53836d9.js","assets/_baseIsEqual-879f4f25.js","assets/get-a5b2ed65.js","assets/toString-79dd21b9.js","assets/index-71f17666.js","assets/Input-fe5fc582.js","assets/isNil-e2aeddd7.js","assets/useRootClose-d6d9b544.js","assets/TimeInput-a38fa8f0.js","assets/useUniqueId-6aef0ec3.js","assets/useDidUpdate-f2162ffc.js","assets/Dialog-b0478122.js","assets/index-a4e43560.js","assets/Drawer-6021c63b.js","assets/index-29936284.js","assets/useUncertainRef-8a988cd5.js","assets/chainedFunction-070f832c.js","assets/index-8145753b.js","assets/FormItem-2a151033.js","assets/index-ed8cb66a.js","assets/index-cf176bc9.js","assets/toast-b57ee67d.js","assets/Pagination-46eefec6.js","assets/Progress-65192619.js","assets/index-fde04e31.js","assets/ScrollBar-93cfd3f9.js","assets/index-b82cade4.js","assets/Select-2984c046.js","assets/slicedToArray-fe25a6b5.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b3b9a0e8.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-1c4e4b72.js","assets/index-a70c7a57.js","assets/mapCloneElement-4a1cd053.js","assets/Switcher-83e7e292.js","assets/index-45766b4b.js","assets/index.esm-a56f1c0a.js","assets/index-b8a0c8d7.js","assets/Tag-f3e28a4c.js","assets/index-53e11fec.js","assets/index-16b82756.js","assets/Upload-1e962b58.js","assets/index.esm-e1783cee.js","assets/countries.constant-5369f7df.js","assets/index-a5cccc57.js","assets/CrmService-80eafdff.js","assets/formik.esm-e70cf2ce.js","assets/react-number-format.es-f9c69fb4.js","assets/index.esm-639db9d4.js","assets/AdaptableCard-01cd8827.js","assets/useThemeClass-a6e6a15d.js","assets/AccountServices-9922ba58.js"])),K=c.lazy(()=>f(()=>import("./AccountReview-cc1e88ad.js"),["assets/AccountReview-cc1e88ad.js","assets/index-afeb99dd.js","assets/index-e466e11d.css","assets/DoubleSidedImage-576ed11c.js","assets/Alert-abc01096.js","assets/useTimeout-682d9172.js","assets/index.esm-f4f10cf9.js","assets/CloseButton-217fbce9.js","assets/StatusIcon-47182631.js","assets/Views-f7a9b898.js","assets/index-08720d19.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-46e989ae.js","assets/usePopper-996565a6.js","assets/index.esm-44e5e467.js","assets/index-07932842.js","assets/Badge-57260147.js","assets/Button-5e9321cd.js","assets/RangeCalendar-c8e5e23d.js","assets/useControllableState-8021c4d2.js","assets/Card-a25bc86a.js","assets/index-646ce73f.js","assets/cloneDeep-f2528b95.js","assets/_MapCache-d7aaf9c0.js","assets/_getPrototype-c53836d9.js","assets/_baseIsEqual-879f4f25.js","assets/get-a5b2ed65.js","assets/toString-79dd21b9.js","assets/index-71f17666.js","assets/Input-fe5fc582.js","assets/isNil-e2aeddd7.js","assets/useRootClose-d6d9b544.js","assets/TimeInput-a38fa8f0.js","assets/useUniqueId-6aef0ec3.js","assets/useDidUpdate-f2162ffc.js","assets/Dialog-b0478122.js","assets/index-a4e43560.js","assets/Drawer-6021c63b.js","assets/index-29936284.js","assets/useUncertainRef-8a988cd5.js","assets/chainedFunction-070f832c.js","assets/index-8145753b.js","assets/FormItem-2a151033.js","assets/index-ed8cb66a.js","assets/index-cf176bc9.js","assets/toast-b57ee67d.js","assets/Pagination-46eefec6.js","assets/Progress-65192619.js","assets/index-fde04e31.js","assets/ScrollBar-93cfd3f9.js","assets/index-b82cade4.js","assets/Select-2984c046.js","assets/slicedToArray-fe25a6b5.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b3b9a0e8.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-1c4e4b72.js","assets/index-a70c7a57.js","assets/mapCloneElement-4a1cd053.js","assets/Switcher-83e7e292.js","assets/index-45766b4b.js","assets/index.esm-a56f1c0a.js","assets/index-b8a0c8d7.js","assets/Tag-f3e28a4c.js","assets/index-53e11fec.js","assets/index-16b82756.js","assets/Upload-1e962b58.js","assets/index.esm-e1783cee.js","assets/AdaptableCard-01cd8827.js","assets/useThemeClass-a6e6a15d.js","assets/AccountServices-9922ba58.js","assets/CrmService-80eafdff.js"])),q=()=>{const a=I(),n=p(r=>r.crmAccountDetailForm.data.stepStatus),e=p(r=>r.crmAccountDetailForm.data.currentStep),l=p(r=>r.crmAccountDetailForm.data.formData),o=(r,v)=>{const g=e+1;a(k({[v]:r})),a(C({[e]:{status:"complete"},[g]:{status:"current"}})),a(m(g))},i=()=>{const r=e-1;a(m(r))},t=c.useMemo(()=>n[e].status,[n,e]);return c.useEffect(()=>()=>{a(M())},[]),s.jsx(F,{className:"h-full",children:s.jsx(b,{className:"h-full",bodyClass:"h-full",children:s.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&s.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:s.jsx(H,{currentStep:e,currentStepStatus:t,stepStatus:n})}),s.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:s.jsxs(c.Suspense,{fallback:s.jsx(s.Fragment,{}),children:[e===0&&s.jsx(V,{data:l.personalInformation,currentStepStatus:t,onNextChange:o}),e===1&&s.jsx(G,{data:l.branches,currentStepStatus:t,onNextChange:o,onBackChange:i}),e===2&&s.jsx(K,{currentStepStatus:t,onNextChange:o,onBackChange:i})]})})]})})})},Q=q,ea=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{T as g,ea as i,M as r,p as u};
