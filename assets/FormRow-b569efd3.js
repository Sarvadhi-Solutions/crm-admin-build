import{j as r,c as m}from"./index-5b083722.js";import{c as l}from"./formik.esm-ca71b2a3.js";const p=({title:s,desc:e,...a})=>r.jsxs("div",{...a,children:[r.jsx("h5",{children:s}),r.jsx("p",{children:e})]}),h=s=>{const{label:e,children:a,errors:i,touched:d,name:o,border:c=!0,alignCenter:n=!0}=s;return r.jsxs("div",{className:m("grid md:grid-cols-3 gap-4 py-8",c&&"border-b border-gray-200 dark:border-gray-600",n&&"items-center"),children:[r.jsx("div",{className:"font-semibold",children:e}),r.jsx("div",{className:"col-span-2",children:r.jsx(l,{className:"mb-0 max-w-[700px]",invalid:i[o]&&d[o],errorMessage:i[o],children:a})})]})};export{p as F,h as a};
