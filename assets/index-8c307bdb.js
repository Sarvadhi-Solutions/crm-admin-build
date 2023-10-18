import{r as i,G as s,ap as g,aa as u,j as t}from"./index-de229e0f.js";import{T as c}from"./index-c847ee3d.js";import{A as b}from"./AdaptableCard-73970f77.js";import{i as x,C as h}from"./Views-e5666688.js";import{a as j}from"./AccountServices-7d4a2269.js";import"./useControllableState-c13b1cb7.js";import"./Card-a97e4c2f.js";const E=i.lazy(()=>s(()=>import("./Profile-43096d3f.js"),["assets/Profile-43096d3f.js","assets/index-de229e0f.js","assets/index-619460ca.css","assets/Input-0edbc257.js","assets/Button-b15cd132.js","assets/Views-e5666688.js","assets/isNil-8888295d.js","assets/get-9c32eaa8.js","assets/toString-99f06a6f.js","assets/_MapCache-af06afb7.js","assets/index-014db2f3.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-f07ebc4b.js","assets/usePopper-beea1819.js","assets/index.esm-9e33621c.js","assets/index-95f7d6b8.js","assets/Upload-bc5be741.js","assets/cloneDeep-e3592be4.js","assets/_getPrototype-3735b5b3.js","assets/index.esm-7525e498.js","assets/CloseButton-a4aa9973.js","assets/index.esm-aee8ac7d.js","assets/toast-2a495ac5.js","assets/useTimeout-73ec5f9b.js","assets/StatusIcon-6f48f0ae.js","assets/chainedFunction-070f832c.js","assets/Select-7b8d032a.js","assets/slicedToArray-dce459c5.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-ccf7c0d4.js","assets/floating-ui.dom-bef9cea3.js","assets/Switcher-a81d65e1.js","assets/FormItem-babd9538.js","assets/FormDesription-4c1c908a.js","assets/FormRow-d25c0467.js","assets/formik.esm-db3e081d.js","assets/index.esm-863c1a13.js"])),T=i.lazy(()=>s(()=>import("./Password-c8c29108.js"),["assets/Password-c8c29108.js","assets/index-de229e0f.js","assets/index-619460ca.css","assets/Input-0edbc257.js","assets/Button-b15cd132.js","assets/Views-e5666688.js","assets/isNil-8888295d.js","assets/get-9c32eaa8.js","assets/toString-99f06a6f.js","assets/_MapCache-af06afb7.js","assets/Tag-416f4bd5.js","assets/toast-2a495ac5.js","assets/useTimeout-73ec5f9b.js","assets/CloseButton-a4aa9973.js","assets/index.esm-aee8ac7d.js","assets/StatusIcon-6f48f0ae.js","assets/chainedFunction-070f832c.js","assets/FormItem-babd9538.js","assets/index-95f7d6b8.js","assets/FormDesription-4c1c908a.js","assets/FormRow-d25c0467.js","assets/formik.esm-db3e081d.js","assets/isLastChild-83eb4c23.js","assets/index.esm-863c1a13.js"])),v=i.lazy(()=>s(()=>import("./NotificationSetting-c8a69090.js"),["assets/NotificationSetting-c8a69090.js","assets/index-de229e0f.js","assets/index-619460ca.css","assets/index-da4e4b17.js","assets/useControllableState-c13b1cb7.js","assets/Button-b15cd132.js","assets/FormItem-babd9538.js","assets/index-95f7d6b8.js","assets/Views-e5666688.js","assets/toast-2a495ac5.js","assets/useTimeout-73ec5f9b.js","assets/CloseButton-a4aa9973.js","assets/index.esm-aee8ac7d.js","assets/StatusIcon-6f48f0ae.js","assets/chainedFunction-070f832c.js","assets/FormDesription-4c1c908a.js","assets/FormRow-d25c0467.js","assets/formik.esm-db3e081d.js","assets/isLastChild-83eb4c23.js"])),P=i.lazy(()=>s(()=>import("./Integration-ad50446e.js"),["assets/Integration-ad50446e.js","assets/index-de229e0f.js","assets/index-619460ca.css","assets/Button-b15cd132.js","assets/Dialog-8e46cfc1.js","assets/index-ea6d121c.js","assets/Views-e5666688.js","assets/CloseButton-a4aa9973.js","assets/index.esm-aee8ac7d.js","assets/toast-2a495ac5.js","assets/useTimeout-73ec5f9b.js","assets/StatusIcon-6f48f0ae.js","assets/chainedFunction-070f832c.js","assets/Switcher-a81d65e1.js","assets/index-014db2f3.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-f07ebc4b.js","assets/usePopper-beea1819.js","assets/index.esm-9e33621c.js","assets/index-95f7d6b8.js","assets/Card-a97e4c2f.js","assets/AccountServices-7d4a2269.js","assets/cloneDeep-e3592be4.js","assets/_MapCache-af06afb7.js","assets/_getPrototype-3735b5b3.js"])),y=i.lazy(()=>s(()=>import("./Billing-4be4a6da.js"),["assets/Billing-4be4a6da.js","assets/index-de229e0f.js","assets/index-619460ca.css","assets/Tag-416f4bd5.js","assets/Button-b15cd132.js","assets/toast-2a495ac5.js","assets/useTimeout-73ec5f9b.js","assets/CloseButton-a4aa9973.js","assets/index.esm-aee8ac7d.js","assets/StatusIcon-6f48f0ae.js","assets/chainedFunction-070f832c.js","assets/Views-e5666688.js","assets/FormItem-babd9538.js","assets/index-95f7d6b8.js","assets/Dialog-8e46cfc1.js","assets/index-ea6d121c.js","assets/FormDesription-4c1c908a.js","assets/FormRow-d25c0467.js","assets/Input-0edbc257.js","assets/isNil-8888295d.js","assets/get-9c32eaa8.js","assets/toString-99f06a6f.js","assets/_MapCache-af06afb7.js","assets/Tooltip-f07ebc4b.js","assets/usePopper-beea1819.js","assets/index.esm-9e33621c.js","assets/index-5d48ec0d.js","assets/cloneDeep-e3592be4.js","assets/_getPrototype-3735b5b3.js","assets/_baseIsEqual-e27983a5.js","assets/index-f8bbcced.js","assets/useControllableState-c13b1cb7.js","assets/useDidUpdate-be9907f8.js","assets/useMergeRef-788c4cb0.js","assets/useRootClose-2530cd3e.js","assets/useUncertainRef-4abf232b.js","assets/useUniqueId-c7e0bf5f.js","assets/formik.esm-db3e081d.js","assets/react-number-format.es-63a72d58.js","assets/index.esm-863c1a13.js","assets/index-a5a888d3.js","assets/index.esm-181c8c38.js","assets/Badge-1c9640f8.js","assets/index-bcf5a82e.js","assets/isLastChild-83eb4c23.js","assets/AccountServices-7d4a2269.js"])),{TabNav:A,TabList:D}=c,l={profile:{label:"Profile",path:"profile"},password:{label:"Password",path:"password"},notification:{label:"Notification",path:"notification"},integration:{label:"Integration",path:"integration"},billing:{label:"Billing",path:"billing"}},I=()=>{const[o,e]=i.useState("profile"),[n,p]=i.useState({}),d=g(),r=u(),_=r.pathname.substring(r.pathname.lastIndexOf("/")+1),f=a=>{e(a),d(`/app/account/settings/${a}`)},m=async()=>{const a=await j();p(a.data)};return i.useEffect(()=>{e(_),x(n)&&m()},[]),t.jsx(h,{children:t.jsxs(b,{children:[t.jsx(c,{value:o,onChange:a=>f(a),children:t.jsx(D,{children:Object.keys(l).map(a=>t.jsx(A,{value:a,children:l[a].label},a))})}),t.jsx("div",{className:"px-4 py-6",children:t.jsxs(i.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[o==="profile"&&t.jsx(E,{data:n.profile}),o==="password"&&t.jsx(T,{data:n.loginHistory}),o==="notification"&&t.jsx(v,{data:n.notification}),o==="integration"&&t.jsx(P,{}),o==="billing"&&t.jsx(y,{})]})})]})})},N=I;export{N as default};
