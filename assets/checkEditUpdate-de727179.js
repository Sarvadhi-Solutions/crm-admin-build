import{u as c}from"./index-dd430329.js";import{h as m}from"./moment-fbc5633a.js";const f=(a,e)=>{const t=c(s=>{var o,r;return((r=(o=s.auth.user)==null?void 0:o.role)==null?void 0:r.rolePermissions)||[]});return t==null?void 0:t.some(s=>s.master.moduleName.toLowerCase()===a.toLowerCase()&&s[e])},g=a=>{const e=a.split(" ");if(e.length>=2){const t=e[0][0].toUpperCase(),n=e[e.length-1][0].toUpperCase();return t+n}else return""},p=a=>{const e=new Date(a),t=new Date,n=t.getTime()-e.getTime(),s=Math.floor(n/1e3),o=Math.floor(s/60),r=Math.floor(o/60),i=Math.floor(r/24);return i<=t.getDay()?i>0?`${i} day${i>1?"s":""} ago`:r>0?`${r} hour${r>1?"s":""} ago`:o>0?`${o} minute${o>1?"s":""} ago`:`${s} second${s>1?"s":""} ago`:m(e).format("DD MMMM YYYY h:mm A")};export{g,p as t,f as u};
