import{r as e}from"./index-e30b2821.js";function a(u,c=0,s=!0){const t=e.useRef(),r=e.useRef(u),o=e.useCallback(()=>{t.current&&clearTimeout(t.current)},[]),n=e.useCallback(()=>{t.current&&clearTimeout(t.current),s&&(t.current=setTimeout(()=>{var i;(i=r.current)==null||i.call(r)},c))},[c,s]);return e.useEffect(()=>{r.current=u},[u]),e.useEffect(()=>(n(),o),[c,s,n,o]),{clear:o,reset:n}}export{a as u};
