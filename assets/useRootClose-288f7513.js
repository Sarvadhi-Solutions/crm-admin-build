import{r as f,ar as E}from"./index-3da8ab78.js";const d=(r,t)=>{if(r.contains)return r.contains(t);if(r.compareDocumentPosition)return r===t||!!(r.compareDocumentPosition(t)&16);if(t)do if(t===r)return!0;while(t=t.parentNode);return!1},p=r=>r&&("current"in r?r.current:r);function a(r){const t=(r==null?void 0:r.root)||(r==null?void 0:r.child)||p(r);return t!=null&&t.nodeType&&typeof(t==null?void 0:t.nodeName)=="string"?t:E.findDOMNode(t)}function D(r){return(r==null?void 0:r.button)===0}function y(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r!=null&&r.shiftKey)}function h(r,t,n,c=!1){return r.addEventListener(t,n,c),{off(){r.removeEventListener(t,n,c)}}}function N(r,{disabled:t,triggerTarget:n,overlayTarget:c}){const o=f.useCallback(u=>{const s=a(n),i=a(c);s&&d(s,u.target)||i&&d(i,u.target)||y(u)||!D(u)||r==null||r(u)},[r,n,c]);f.useEffect(()=>{const u=a(n);if(t||!u)return;const i=h((()=>u&&u.ownerDocument||document)(),"mousedown",o,!0);return()=>{i==null||i.off()}},[n,t,r,o])}export{N as u};
