import{ax as I,aO as t,az as E,j as e,c as h,r as g,ay as x}from"./index-9ca3e01c.js";import{F as w,c as W,u as Z}from"./Button-da045d3b.js";import{A as H}from"./index-cfbd213c.js";import{m as $}from"./Views-42612634.js";const V=o=>{const{controlSize:n}=I(),{children:m,className:c,labelWidth:d=100,layout:u=t.VERTICAL,size:i=E.MD}=o,p={labelWidth:d,layout:u,size:i||n};return e.jsx(w,{value:p,children:e.jsx(W,{children:a=>e.jsx("div",{className:h("form-container",a==null?void 0:a.layout,c),children:m})})})};V.displayName="FormContainer";const M=g.forwardRef((o,n)=>{const{asterisk:m,children:c,className:d,errorMessage:u,extra:i,htmlFor:p,invalid:a,label:r,labelClass:L,labelWidth:b,layout:j,style:y,size:F}=o,s=Z(),{controlSize:v}=I(),f=F||(s==null?void 0:s.size)||v,O=b||(s==null?void 0:s.labelWidth),l=j||(s==null?void 0:s.layout),S=()=>{switch(l){case t.HORIZONTAL:return r?`h-${x[f]} ${r&&"ltr:pr-2 rtl:pl-2"}`:"ltr:pr-2 rtl:pl-2";case t.VERTICAL:return"mb-2";case t.INLINE:return`h-${x[f]} ${r&&"ltr:pr-2 rtl:pl-2"}`}},T=h("form-item",l,d,a?"invalid":""),A=h("form-label",r&&S(),L),C=()=>l===t.HORIZONTAL?{...y,minWidth:O}:{...y},R={opacity:1,marginTop:3,bottom:-21},N={opacity:0,marginTop:-10},z=N;return e.jsxs("div",{ref:n,className:T,children:[e.jsxs("label",{htmlFor:p,className:A,style:C(),children:[m&&e.jsx("span",{className:"text-red-500 ltr:mr-1 rtl:ml-1",children:"*"}),r,i&&e.jsx("span",{children:i}),r&&l!=="vertical"&&":"]}),e.jsxs("div",{className:l===t.HORIZONTAL?"w-full flex flex-col justify-center relative":"",children:[c,e.jsx(H,{mode:"wait",children:a&&e.jsx($.div,{className:"form-explain",initial:z,animate:R,exit:N,transition:{duration:.15,type:"tween"},children:u})})]})]})});M.displayName="FormItem";export{V as F,M as a};
