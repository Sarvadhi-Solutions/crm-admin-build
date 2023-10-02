import{r as l,a as M,j as e}from"./index-f40e4d75.js";import{I as S}from"./Input-a28838c6.js";import{A}from"./index-3d26675f.js";import{S as C}from"./ScrollBar-96d4eb77.js";import{B as c}from"./Button-50d583fa.js";import{u as d,f as x,d as k}from"./index-b33f2243.js";import{b as B}from"./index.esm-0d86f991.js";import{d as D}from"./debounce-8b6b031e.js";import{c as u}from"./cloneDeep-599ca6a7.js";import"./context-51e9908c.js";import"./Views-4f4cfc12.js";import"./isNil-867ba5c2.js";import"./get-8208bc30.js";import"./toString-1320cce2.js";import"./_MapCache-11f94205.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./ProjectService-ae14e2eb.js";import"./index-e9a19be6.js";import"./useControllableState-a88821e3.js";import"./UsersAvatarGroup-2d6d26cc.js";import"./acronym-c904e67f.js";import"./Dialog-7705a764.js";import"./index-abc0a377.js";import"./CloseButton-579d2861.js";import"./react-beautiful-dnd.esm-bc1fb195.js";import"./inheritsLoose-765b63b4.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./FormItem-e9df506f.js";import"./index-89133a2f.js";import"./useUncertainRef-8f47aa92.js";import"./useUniqueId-e478c472.js";import"./chainedFunction-070f832c.js";import"./index-1ec1c1e6.js";import"./useRootClose-e34f1b82.js";import"./EllipsisButton-7c6b26a6.js";import"./index.esm-b275af0e.js";import"./formik.esm-a717025a.js";import"./Card-902c739e.js";import"./Tag-d736e0a6.js";import"./IconText-a2fd838a.js";import"./_Uint8Array-1aa2dd21.js";import"./_getPrototype-fd20deb2.js";function R(m,i,o){const n=s=>{for(const a in s)if(s[o||a]!=null&&s[o||a].toString().toUpperCase().indexOf(i.toString().toUpperCase())!==-1)return!0};return m.filter(s=>n(s))}const St=()=>{const m=l.useRef(null),i=M(),o=d(t=>t.scrumBoard.data.allMembers),n=d(t=>t.scrumBoard.data.boardMembers),[p,s]=l.useState(o),a=D(h,500);function h(t){const r=R(o,t);s(r)}const f=t=>{a(t.target.value)},j=t=>n.some(r=>r.id===t),b=t=>{const r=u(n);r.push(t),i(x(r))},v=t=>{const r=u(n).filter(N=>N.id!==t);i(x(r))},g=()=>{i(k())};return e.jsxs("div",{children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h4",{className:"mb-2",children:"Add people"}),e.jsx("p",{children:"Invite existing team member to this project."})]}),e.jsx(S,{ref:m,prefix:e.jsx(B,{className:"text-lg"}),placeholder:"Quick search member",onChange:f}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"font-semibold uppercase text-xs mb-4",children:[p.length," members available"]}),e.jsx("div",{className:"overflow-y-auto h-80 mb-6",children:e.jsx(C,{children:p.map(t=>e.jsxs("div",{className:"py-3 pr-5 rounded-lg flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{shape:"circle",src:t.img}),e.jsxs("div",{children:[e.jsx("p",{className:"heading-text font-bold",children:t.name}),e.jsx("p",{children:t.email})]})]}),j(t.id)?e.jsx(c,{size:"xs",onClick:()=>v(t.id),children:e.jsx("span",{className:"text-red-500",children:"Remove"})}):e.jsx(c,{size:"xs",onClick:()=>b(t),children:"Add"})]},t.id))})}),e.jsx(c,{block:!0,variant:"solid",onClick:g,children:"Done"})]})]})};export{St as default};
