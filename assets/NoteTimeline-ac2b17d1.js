import{j as i}from"./index-dd430329.js";import{h as e}from"./moment-fbc5633a.js";import"./Alert-40c008c9.js";import"./index-1bec26b5.js";import"./Badge-81ec6aad.js";import"./Button-477f78d2.js";import"./RangeCalendar-c7dd44b3.js";import"./Card-7303f1d6.js";import"./index-4953df19.js";import"./index-e8664bdc.js";import"./Dialog-4e683d85.js";import"./Drawer-851dfb0e.js";import"./index-273b73f2.js";import"./FormItem-c5d9f12d.js";import"./toString-45c45754.js";import"./Input-2ae5f21f.js";import"./index-ad4d109a.js";import"./index-1e6ea035.js";import"./index-5ad45768.js";import"./toast-7520b143.js";import"./Pagination-a183170a.js";import"./Progress-65bff4d5.js";import"./index-9685374c.js";import"./ScrollBar-efe95462.js";import"./index-a7fee107.js";import"./Select-a638e837.js";import"./Skeleton-0435d2db.js";import"./index-0bd5fcc8.js";import"./Switcher-46a64a8e.js";import"./index-03531cf7.js";import"./index-f4b545fd.js";import"./Tag-a01d1848.js";import"./index-c88fea13.js";import{T as p}from"./index-f57ef06e.js";import"./Tooltip-4f6c910c.js";import"./Upload-79efa750.js";import{O as d,P as x}from"./index.esm-8a75a52d.js";const X=({notes:m,onEdit:t,onDelete:l,canEdit:c})=>i.jsx("div",{className:"max-h-96 overflow-y-scroll no-scrollbar",children:i.jsx(p,{children:m&&(m!=null&&m.length)?m==null?void 0:m.map((r,o)=>{var s,a;return i.jsxs(p.Item,{children:[r==null?void 0:r.notes," ",((s=r==null?void 0:r.createdData)==null?void 0:s.firstName)&&i.jsx("span",{className:"font-bold",children:r==null?void 0:r.createdData.firstName})," ",((a=r==null?void 0:r.createdData)==null?void 0:a.lastName)&&i.jsx("span",{className:"font-bold",children:r==null?void 0:r.createdData.lastName}),i.jsx("br",{}),i.jsx("span",{children:i.jsxs("span",{style:{display:"flex",flexDirection:"row"},children:[e(r==null?void 0:r.createdAt).format("DD MMMM YYYY h:mm A"),c&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"cursor-pointer circle items-center ml-2",onClick:()=>t(r),children:i.jsx(d,{})}),i.jsx("span",{className:"cursor-pointer hover:text-red-500 circle mx-1 items-center",onClick:()=>l(r),children:i.jsx(x,{})})]})]})})]},o)}):i.jsx("div",{className:"flex items-center justify-center my-auto",children:"No notes found."})})});export{X as N};
