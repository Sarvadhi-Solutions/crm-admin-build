import{u as t,a as _,j as s,s as x,c as S,S as T,L as E,b as m,d as u,N,e as f,f as y}from"./index-3e880d58.js";import{w as A}from"./withHeaderItem-fc806ae7.js";import{u as v}from"./useResponsive-6cc6823d.js";import{N as j,n as D}from"./AuthorityCheck-3d5b20eb.js";import{S as R}from"./ScrollBar-71fa1417.js";import{L}from"./Logo-55aae2b8.js";import{V as M}from"./VerticalMenuContent-6e155165.js";const V=({className:i})=>{const n=t(d=>d.theme.layout.sideNavCollapse),o=_(),{larger:l}=v(),r=()=>{o(x(!n))};return s.jsx(s.Fragment,{children:l.md&&s.jsx("div",{className:i,onClick:r,children:s.jsx(j,{className:"text-2xl",toggled:n})})})},F=A(V),O={width:m,minWidth:m},I={width:u,minWidth:u},P=()=>{const i=t(e=>e.theme.themeColor),n=t(e=>e.theme.primaryColorLevel),o=t(e=>e.theme.navMode),l=t(e=>e.theme.mode),r=t(e=>e.theme.direction),d=t(e=>e.base.common.currentRouteKey),a=t(e=>e.theme.layout.sideNavCollapse),p=t(e=>e.auth.user.authority),{larger:h}=v(),g=()=>o===N?`bg-${i}-${n} side-nav-${o}`:`side-nav-${o}`,C=()=>o===N?f:o===y?l:o,c=s.jsx(M,{navMode:o,collapsed:a,navigationTree:D,routeKey:d,userAuthority:p,direction:r});return s.jsx(s.Fragment,{children:h.md&&s.jsxs("div",{style:a?I:O,className:S("side-nav",g(),!a&&"side-nav-expand"),children:[s.jsx("div",{className:"side-nav-header",children:s.jsx(L,{mode:C(),type:a?"streamline":"full",className:a?T:E})}),a?c:s.jsx("div",{className:"side-nav-content",children:s.jsx(R,{autoHide:!0,direction:r,children:c})})]})})};export{P as S,F as a};
