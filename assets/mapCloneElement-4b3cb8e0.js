import{r as m}from"./index-7c10d2a3.js";function l(r,t,a){let n=0;return m.Children.map(r,e=>{if(!m.isValidElement(e))return e;const o=t.call(a,e,n);return n+=1,o})}function u(r,t,a){return l(r,(n,e)=>m.cloneElement(n,{key:e,...t(n,e)}),a)}export{u as m};
