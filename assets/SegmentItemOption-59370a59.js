import{r as x,j as o,c as a}from"./index-f0c7b593.js";import{u as f}from"./useThemeClass-a90261c9.js";import{L as g}from"./index.esm-e5bc54ff.js";const b=x.forwardRef((m,n)=>{const{active:e,children:c,className:i,customCheck:r,defaultGutter:l=!0,disabled:d,hoverable:p,onSegmentItemClick:h}=m,{textTheme:u,borderTheme:t,ringTheme:s}=f();return o.jsxs("div",{ref:n,className:a("flex",!r&&"justify-between","items-center","border","rounded-md ","border-gray-200 dark:border-gray-600",l&&"py-5 px-4","cursor-pointer","select-none","w-100",e&&`ring-1 ${s} ${t}`,p&&`hover:ring-1 hover:${s} hover:${t}`,d&&"opacity-50 cursor-not-allowed",i),onClick:h,children:[c,e&&!r&&o.jsx(g,{className:a(u,"text-2xl")}),e&&r]})});b.displayName="SegmentItemOption";export{b as S};
