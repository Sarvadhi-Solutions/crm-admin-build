import{r as i,K as s,al as g,w as u,j as t}from"./index-8f180057.js";import{T as c}from"./index-19730294.js";import{A as b}from"./AdaptableCard-4ed28de0.js";import{i as x,C as h}from"./Views-0f0dd1b0.js";import{a as j}from"./AccountServices-11482fa9.js";import"./useControllableState-a20a08a7.js";import"./Card-c08b3dc7.js";const E=i.lazy(()=>s(()=>import("./Profile-5e9926f8.js"),["assets/Profile-5e9926f8.js","assets/index-8f180057.js","assets/index-0702b530.css","assets/Input-80948cc5.js","assets/Button-9a124664.js","assets/Views-0f0dd1b0.js","assets/isNil-7f5c5bc3.js","assets/get-49349d76.js","assets/toString-6546c1f5.js","assets/_MapCache-c801105a.js","assets/index-50da1f05.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-c46cdf61.js","assets/usePopper-4f231cdc.js","assets/index.esm-047fe164.js","assets/index-56b40026.js","assets/Upload-5d1aec4a.js","assets/cloneDeep-1f39f070.js","assets/_getPrototype-6ef2344b.js","assets/index.esm-e628df3b.js","assets/CloseButton-f457d2a5.js","assets/index.esm-d559b7a8.js","assets/toast-d4a23693.js","assets/useTimeout-6ce9cc18.js","assets/StatusIcon-af9b884d.js","assets/chainedFunction-070f832c.js","assets/Select-b8e32f8a.js","assets/slicedToArray-4e770983.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-10fd47e9.js","assets/floating-ui.dom-4bc0055b.js","assets/Switcher-b15fc15a.js","assets/FormItem-6da989b2.js","assets/FormDesription-b9a91e67.js","assets/FormRow-80cac18f.js","assets/formik.esm-23c950a3.js","assets/index.esm-f2cf7456.js"])),T=i.lazy(()=>s(()=>import("./Password-6775dfb7.js"),["assets/Password-6775dfb7.js","assets/index-8f180057.js","assets/index-0702b530.css","assets/Input-80948cc5.js","assets/Button-9a124664.js","assets/Views-0f0dd1b0.js","assets/isNil-7f5c5bc3.js","assets/get-49349d76.js","assets/toString-6546c1f5.js","assets/_MapCache-c801105a.js","assets/Tag-f078f978.js","assets/toast-d4a23693.js","assets/useTimeout-6ce9cc18.js","assets/CloseButton-f457d2a5.js","assets/index.esm-d559b7a8.js","assets/StatusIcon-af9b884d.js","assets/chainedFunction-070f832c.js","assets/FormItem-6da989b2.js","assets/index-56b40026.js","assets/FormDesription-b9a91e67.js","assets/FormRow-80cac18f.js","assets/formik.esm-23c950a3.js","assets/isLastChild-83eb4c23.js","assets/index.esm-f2cf7456.js"])),v=i.lazy(()=>s(()=>import("./NotificationSetting-5f82553b.js"),["assets/NotificationSetting-5f82553b.js","assets/index-8f180057.js","assets/index-0702b530.css","assets/index-5c4aebcf.js","assets/useControllableState-a20a08a7.js","assets/Button-9a124664.js","assets/FormItem-6da989b2.js","assets/index-56b40026.js","assets/Views-0f0dd1b0.js","assets/toast-d4a23693.js","assets/useTimeout-6ce9cc18.js","assets/CloseButton-f457d2a5.js","assets/index.esm-d559b7a8.js","assets/StatusIcon-af9b884d.js","assets/chainedFunction-070f832c.js","assets/FormDesription-b9a91e67.js","assets/FormRow-80cac18f.js","assets/formik.esm-23c950a3.js","assets/isLastChild-83eb4c23.js"])),P=i.lazy(()=>s(()=>import("./Integration-69c725f2.js"),["assets/Integration-69c725f2.js","assets/index-8f180057.js","assets/index-0702b530.css","assets/Button-9a124664.js","assets/Dialog-00762d81.js","assets/index-21bd03ca.js","assets/Views-0f0dd1b0.js","assets/CloseButton-f457d2a5.js","assets/index.esm-d559b7a8.js","assets/toast-d4a23693.js","assets/useTimeout-6ce9cc18.js","assets/StatusIcon-af9b884d.js","assets/chainedFunction-070f832c.js","assets/Switcher-b15fc15a.js","assets/index-50da1f05.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-c46cdf61.js","assets/usePopper-4f231cdc.js","assets/index.esm-047fe164.js","assets/index-56b40026.js","assets/Card-c08b3dc7.js","assets/AccountServices-11482fa9.js","assets/cloneDeep-1f39f070.js","assets/_MapCache-c801105a.js","assets/_getPrototype-6ef2344b.js"])),y=i.lazy(()=>s(()=>import("./Billing-5d98e638.js"),["assets/Billing-5d98e638.js","assets/index-8f180057.js","assets/index-0702b530.css","assets/Tag-f078f978.js","assets/Button-9a124664.js","assets/toast-d4a23693.js","assets/useTimeout-6ce9cc18.js","assets/CloseButton-f457d2a5.js","assets/index.esm-d559b7a8.js","assets/StatusIcon-af9b884d.js","assets/chainedFunction-070f832c.js","assets/Views-0f0dd1b0.js","assets/FormItem-6da989b2.js","assets/index-56b40026.js","assets/Dialog-00762d81.js","assets/index-21bd03ca.js","assets/FormDesription-b9a91e67.js","assets/FormRow-80cac18f.js","assets/Input-80948cc5.js","assets/isNil-7f5c5bc3.js","assets/get-49349d76.js","assets/toString-6546c1f5.js","assets/_MapCache-c801105a.js","assets/Tooltip-c46cdf61.js","assets/usePopper-4f231cdc.js","assets/index.esm-047fe164.js","assets/index-467c57d1.js","assets/cloneDeep-1f39f070.js","assets/_getPrototype-6ef2344b.js","assets/_baseIsEqual-f757163a.js","assets/index-f0ef0842.js","assets/useControllableState-a20a08a7.js","assets/useDidUpdate-6bcd31b9.js","assets/useMergeRef-788c4cb0.js","assets/useRootClose-849d9b9c.js","assets/useUncertainRef-cd8eb299.js","assets/useUniqueId-b6b18158.js","assets/formik.esm-23c950a3.js","assets/react-number-format.es-8632b3a3.js","assets/index.esm-f2cf7456.js","assets/index-68091566.js","assets/index.esm-7da1e9bd.js","assets/Badge-da9b4bac.js","assets/index-9a956df5.js","assets/isLastChild-83eb4c23.js","assets/AccountServices-11482fa9.js"])),{TabNav:A,TabList:D}=c,l={profile:{label:"Profile",path:"profile"},password:{label:"Password",path:"password"},notification:{label:"Notification",path:"notification"},integration:{label:"Integration",path:"integration"},billing:{label:"Billing",path:"billing"}},I=()=>{const[o,e]=i.useState("profile"),[n,p]=i.useState({}),d=g(),r=u(),_=r.pathname.substring(r.pathname.lastIndexOf("/")+1),f=a=>{e(a),d(`/app/account/settings/${a}`)},m=async()=>{const a=await j();p(a.data)};return i.useEffect(()=>{e(_),x(n)&&m()},[]),t.jsx(h,{children:t.jsxs(b,{children:[t.jsx(c,{value:o,onChange:a=>f(a),children:t.jsx(D,{children:Object.keys(l).map(a=>t.jsx(A,{value:a,children:l[a].label},a))})}),t.jsx("div",{className:"px-4 py-6",children:t.jsxs(i.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[o==="profile"&&t.jsx(E,{data:n.profile}),o==="password"&&t.jsx(T,{data:n.loginHistory}),o==="notification"&&t.jsx(v,{data:n.notification}),o==="integration"&&t.jsx(P,{}),o==="billing"&&t.jsx(y,{})]})})]})})},N=I;export{N as default};
