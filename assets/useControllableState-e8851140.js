import{r as s}from"./index-0ab2c514.js";function f(e){const n=s.useRef(e);return s.useEffect(()=>{n.current=e}),s.useMemo(()=>(...o)=>{var t;return(t=n.current)==null?void 0:t.call(n,...o)},[])}function C({defaultProp:e,onChange:n}){const o=s.useState(e),[t]=o,c=s.useRef(t),r=f(n);return s.useEffect(()=>{c.current!==t&&(r(t),c.current=t)},[t,c,r]),o}function h({prop:e,defaultProp:n,onChange:o=()=>{}}){const[t,c]=C({defaultProp:n,onChange:o}),r=e!==void 0,i=r?e:t,l=f(o),d=s.useCallback(u=>{const v=u;if(r){const a=typeof u=="function"?v(e):u;a!==e&&l(a)}else c(u)},[r,e,c,l]);return[i,d]}export{f as a,h as u};
