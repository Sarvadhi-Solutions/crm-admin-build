import{u}from"./index-3e880d58.js";const i=(t,a)=>{const o=u(e=>{var s,r;return((r=(s=e.auth.user)==null?void 0:s.role)==null?void 0:r.rolePermissions)||[]});return o==null?void 0:o.some(e=>e.master.moduleName.toLowerCase()===t.toLowerCase()&&e[a])};export{i as u};
