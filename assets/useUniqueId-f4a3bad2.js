import{m as a,r as c}from"./index-4675262e.js";import{t as i}from"./toString-5a26993f.js";var s=i,f=0;function d(n){var r=++f;return s(n)+r}var h=d;const m=a(h),l=(n=10)=>{const r=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=t.length,u=n;for(let e=0;e<u;e++)r[e]=t.charAt(Math.floor(Math.random()*o));return r.join("")};function I(n="",r=10){const t=c.useRef();return t.current||(t.current=`${m(n)}-${l(r)}`),t.current}export{I as u};
