import{j as m}from"./index-f0c7b593.js";import"./Alert-6365923a.js";import"./index-e46ae74f.js";import"./Badge-eb9394bd.js";import"./Button-7f5aeb19.js";import"./RangeCalendar-4446a681.js";import"./Card-d2bb7bb1.js";import"./index-3454c4af.js";import"./index-7fb568e6.js";import"./Dialog-863f25dc.js";import"./Drawer-3213f845.js";import"./index-096ca5d8.js";import{a as p}from"./FormItem-39c4f499.js";import"./toString-15315b0c.js";import"./Input-b0936f40.js";import"./index-cae4e5da.js";import"./index-cd4a639d.js";import"./index-e9f2e738.js";import"./toast-98ab077b.js";import"./Pagination-4451079e.js";import"./Progress-c215b6a7.js";import"./index-aa5943b4.js";import"./ScrollBar-af66e651.js";import"./index-2d35600c.js";import{S as e}from"./Select-20b819a9.js";import"./Skeleton-3fb87948.js";import"./index-681acbb6.js";import"./Switcher-52adaf57.js";import"./index-b0e56b87.js";import"./index-0fbd5995.js";import"./Tag-c0e1c031.js";import"./index-11547d1a.js";import"./index-ff0fc04f.js";import"./Tooltip-c002e367.js";import"./Upload-652ef9c2.js";import{b as a}from"./formik.esm-251b655f.js";import{G as s}from"./index.esm-e9a42a23.js";const P=({data:r,handleTagChange:i})=>m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(o=>m.jsx("div",{className:"col-span-1",children:m.jsx(p,{label:o.categoryName.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g,t=>t.toUpperCase()),children:m.jsx(a,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:`tagId_${o.id}`,placeholder:`Select ${o.categoryName} tags`,component:e,options:o.tags.map(t=>({label:t.tagName,value:t.id})),prefix:m.jsx(s,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:t=>i(t,o.id)})})},o.id))});export{P as D};
