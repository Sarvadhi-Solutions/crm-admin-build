import{r as c}from"./index-f4ad2487.js";const s=["indigo-600","emerald-500","cyan-500","blue-600","teal-500","fuchsia-500","pink-500","rose-500","red-500","amber-500","violet-500","purple-500"];function u(o="bg"){const t=e=>{let a=0;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);a+=n}return a};return c.useCallback(e=>{const r=t(e)%s.length,n=s[r];return`${o}-${n} dark:${o}-${n}`},[o])}function i(o=""){const t=o.match(/\b(\w)/g);return t?t.join(""):o}export{i as a,u};
