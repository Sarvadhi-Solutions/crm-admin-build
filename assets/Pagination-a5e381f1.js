import{r as c,j as o,c as m,ax as y}from"./index-deb31e10.js";import{a1 as H,a2 as w,a3 as T,U as $,c as D}from"./index.esm-7e071777.js";const j=7,L=({className:g,onArrow:t})=>{const[e,i]=c.useState(!1);return o.jsx("li",{className:g,role:"presentation",onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},onClick:()=>t("nextMore"),children:e?o.jsx(H,{}):o.jsx(w,{})})},R=({className:g,onArrow:t})=>{const[e,i]=c.useState(!1);return o.jsx("li",{className:g,role:"presentation",onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},onClick:()=>t("prevMore"),children:e?o.jsx(T,{}):o.jsx(w,{})})},z=g=>{const{pageCount:t,currentPage:e,onChange:i,pagerClass:n}=g,[l,f]=c.useState(!1),[u,x]=c.useState(!1);c.useEffect(()=>{t>j?(e>j-2&&f(!0),e<t-2&&x(!0),e>=t-3&&e<=t&&x(!1),e>=1&&e<=4&&f(!1)):(f(!1),x(!1))},[e,t]);const C=(a,s)=>{s.preventDefault();let r=a;r<1&&(r=1),r>t&&(r=t),r!==e&&i(r)},k=c.useCallback(a=>{let s=e;a==="nextMore"&&(s=e+5),a==="prevMore"&&(s=e-5),i(s)},[e,i]),v=c.useMemo(()=>{const a=[];if(l&&!u){const s=t-(j-2);for(let r=s;r<t;r++)a.push(r)}else if(!l&&u)for(let s=2;s<j;s++)a.push(s);else if(l&&u){const s=Math.floor(j/2)-1,r=e>=t-2&&e<=t;for(let P=e-s;P<=e+(r?0:s);P++)a.push(P)}else for(let s=2;s<t;s++)a.push(s);return a.length>j-2?[]:a},[l,u,e,t]),h=a=>m(n.default,e===a?n.active:n.inactive);return o.jsxs("ul",{children:[t>0&&o.jsx("li",{className:h(1),role:"presentation",onClick:a=>C(1,a),children:"1"}),l&&o.jsx(R,{className:m(n.default,n.inactive),onArrow:a=>k(a)}),v.map((a,s)=>o.jsx("li",{className:h(a),role:"presentation",onClick:r=>C(a,r),children:a},s)),u&&o.jsx(L,{className:m(n.default,n.inactive),onArrow:a=>k(a)}),t>1&&o.jsx("li",{className:h(t),role:"presentation",onClick:a=>C(t,a),children:t})]})},O=g=>{const{currentPage:t,pagerClass:e,onPrev:i}=g,n=t<=1,l=u=>{n||i(u)},f=m(e.default,"pagination-pager-prev",n?e.disabled:e.inactive);return o.jsx("span",{className:f,role:"presentation",onClick:l,children:o.jsx($,{})})},q=g=>{const{currentPage:t,pageCount:e,pagerClass:i,onNext:n}=g,l=t===e||e===0,f=x=>{x.preventDefault(),!l&&n(x)},u=m(i.default,"pagination-pager-next",l?i.disabled:i.inactive);return o.jsx("span",{className:u,role:"presentation",onClick:f,children:o.jsx(D,{})})},Q=g=>{const{total:t}=g;return o.jsxs("div",{className:"pagination-total",children:["Total ",o.jsx("span",{children:t})," Items"]})},U=g=>{const{className:t,currentPage:e=1,displayTotal:i=!1,onChange:n,pageSize:l=1,total:f=5}=g,[u,x]=c.useState(f),[C,k]=c.useState(l),{themeColor:v,primaryColorLevel:h}=y(),a=c.useMemo(()=>typeof u=="number"?Math.ceil(u/C):null,[u,C]),s=c.useCallback(p=>{const N=parseInt(p,10),b=a;let d;return b?(N<1&&(d=1),N>b&&(d=b)):(isNaN(N)||N<1)&&(d=1),(d===void 0&&isNaN(N)||d===0)&&(d=1),d===void 0?N:d},[a]),[r,P]=c.useState(e?s(e):1);c.useEffect(()=>{f!==u&&x(f),l!==C&&k(l),e!==r&&P(e)},[f,l,e]);const S=p=>{P(s(p)),n==null||n(s(p))},A=c.useCallback(()=>{const p=r-1;P(s(p)),n==null||n(s(p))},[n,r,s]),I=c.useCallback(()=>{const p=r+1;P(s(p)),n==null||n(s(p))},[n,r,s]),M={default:"pagination-pager",inactive:"pagination-pager-inactive",active:`text-${v}-${h} bg-${v}-50 hover:bg-${v}-50 dark:bg-${v}-${h} dark:text-gray-100`,disabled:"pagination-pager-disabled"},E=m("pagination",t);return o.jsxs("div",{className:E,children:[i&&o.jsx(Q,{total:f}),o.jsx(O,{currentPage:r,pagerClass:M,onPrev:A}),o.jsx(z,{pageCount:a,currentPage:r,pagerClass:M,onChange:S}),o.jsx(q,{currentPage:r,pageCount:a,pagerClass:M,onNext:I})]})};U.displayName="Pagination";export{U as P};
