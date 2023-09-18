import{r as l,a as M,j as t}from"./index-21d7ce34.js";import{I as S}from"./Input-b18c5be2.js";import{A}from"./index-60ecab9e.js";import{S as C}from"./ScrollBar-83d9acc4.js";import{B as p}from"./Button-6c3081fd.js";import{u as d,f as x,d as k}from"./index-55d02253.js";import{z as B}from"./index.esm-3f5f076a.js";import{d as D}from"./debounce-4303ffbd.js";import{c as u}from"./cloneDeep-c49c3d8a.js";import"./context-ff20449e.js";import"./Views-aa9d3067.js";import"./isNil-e652d611.js";import"./get-db5a0269.js";import"./toString-839cbc0d.js";import"./_MapCache-e6bfd31d.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./ProjectService-b45c4249.js";import"./index-cfa1d7b1.js";import"./useControllableState-3f0dec55.js";import"./UsersAvatarGroup-978dde52.js";import"./acronym-edf87d4f.js";import"./Dialog-fcbd4cee.js";import"./index-e63aba64.js";import"./CloseButton-8f19e7bd.js";import"./react-beautiful-dnd.esm-74ff0f0d.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./formik.esm-b31c216f.js";import"./index-cbaf419c.js";import"./useUncertainRef-1f87b20a.js";import"./useUniqueId-18384f8e.js";import"./chainedFunction-070f832c.js";import"./index-a936af3e.js";import"./useRootClose-aa5c19cb.js";import"./EllipsisButton-1e35dd80.js";import"./index.esm-4dac136d.js";import"./Card-c016d7e4.js";import"./Tag-49702b6e.js";import"./IconText-e7277b15.js";import"./_Uint8Array-00b9b100.js";import"./_getPrototype-2575ec81.js";function R(m,i,o){const n=s=>{for(const a in s)if(s[o||a]!=null&&s[o||a].toString().toUpperCase().indexOf(i.toString().toUpperCase())!==-1)return!0};return m.filter(s=>n(s))}const ge=()=>{const m=l.useRef(null),i=M(),o=d(e=>e.scrumBoard.data.allMembers),n=d(e=>e.scrumBoard.data.boardMembers),[c,s]=l.useState(o),a=D(h,500);function h(e){const r=R(o,e);s(r)}const f=e=>{a(e.target.value)},j=e=>n.some(r=>r.id===e),b=e=>{const r=u(n);r.push(e),i(x(r))},v=e=>{const r=u(n).filter(N=>N.id!==e);i(x(r))},g=()=>{i(k())};return t.jsxs("div",{children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h4",{className:"mb-2",children:"Add people"}),t.jsx("p",{children:"Invite existing team member to this project."})]}),t.jsx(S,{ref:m,prefix:t.jsx(B,{className:"text-lg"}),placeholder:"Quick search member",onChange:f}),t.jsxs("div",{className:"mt-4",children:[t.jsxs("p",{className:"font-semibold uppercase text-xs mb-4",children:[c.length," members available"]}),t.jsx("div",{className:"overflow-y-auto h-80 mb-6",children:t.jsx(C,{children:c.map(e=>t.jsxs("div",{className:"py-3 pr-5 rounded-lg flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(A,{shape:"circle",src:e.img}),t.jsxs("div",{children:[t.jsx("p",{className:"heading-text font-bold",children:e.name}),t.jsx("p",{children:e.email})]})]}),j(e.id)?t.jsx(p,{size:"xs",onClick:()=>v(e.id),children:t.jsx("span",{className:"text-red-500",children:"Remove"})}):t.jsx(p,{size:"xs",onClick:()=>b(e),children:"Add"})]},e.id))})}),t.jsx(p,{block:!0,variant:"solid",onClick:g,children:"Done"})]})]})};export{ge as default};
