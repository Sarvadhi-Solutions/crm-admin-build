import{r as x,j as t}from"./index-6767ac81.js";import{T as h}from"./Tooltip-777f9f9c.js";import{A as c}from"./index-688b9e70.js";import{u as A,a as f}from"./acronym-ce865035.js";const T=p=>{const{avatarGroupProps:n={},avatarProps:e={},imgKey:i="img",nameKey:a="name",onAvatarClick:s,users:m=[],...u}=p,l=A(),o=x.useMemo(()=>({shape:"circle",size:30,className:"cursor-pointer",...e}),[e]),d=r=>{s==null||s(r)};return t.jsx(c.Group,{omittedAvatarTooltip:!0,chained:!0,omittedAvatarProps:o,...n,...u,children:m.map((r,v)=>t.jsx(h,{title:r[a],children:t.jsx(c,{...o,className:`${r[i]?"":l(r[a])} ${o.className}`,src:r[i],onClick:()=>d(r),children:f(r.name)})},r[a]+v))})};export{T as U};
