import{u as t,a as _,j as s,s as x,c as S,S as T,L as f,b as m,d as u,N,e as E,f as y}from"./index-a9c93031.js";import{w as A}from"./withHeaderItem-8699baf5.js";import{u as p}from"./useResponsive-429e39cc.js";import{N as j}from"./NavToggle-2a5ce8f0.js";import{S as D}from"./ScrollBar-ad1c4e83.js";import{L as R}from"./Logo-5f8f0899.js";import{n as L}from"./UserDropdown-cf66f5e3.js";import{V as M}from"./VerticalMenuContent-8dce785c.js";const V=({className:i})=>{const r=t(d=>d.theme.layout.sideNavCollapse),o=_(),{larger:l}=p(),n=()=>{o(x(!r))};return s.jsx(s.Fragment,{children:l.md&&s.jsx("div",{className:i,onClick:n,children:s.jsx(j,{className:"text-2xl",toggled:r})})})},P=A(V),O={width:m,minWidth:m},I={width:u,minWidth:u},U=()=>{const i=t(e=>e.theme.themeColor),r=t(e=>e.theme.primaryColorLevel),o=t(e=>e.theme.navMode),l=t(e=>e.theme.mode),n=t(e=>e.theme.direction),d=t(e=>e.base.common.currentRouteKey),a=t(e=>e.theme.layout.sideNavCollapse),v=t(e=>e.auth.user.authority),{larger:h}=p(),g=()=>o===N?`bg-${i}-${r} side-nav-${o}`:`side-nav-${o}`,C=()=>o===N?E:o===y?l:o,c=s.jsx(M,{navMode:o,collapsed:a,navigationTree:L,routeKey:d,userAuthority:v,direction:n});return s.jsx(s.Fragment,{children:h.md&&s.jsxs("div",{style:a?I:O,className:S("side-nav",g(),!a&&"side-nav-expand"),children:[s.jsx("div",{className:"side-nav-header",children:s.jsx(R,{mode:C(),type:a?"streamline":"full",className:a?T:f})}),a?c:s.jsx("div",{className:"side-nav-content",children:s.jsx(D,{autoHide:!0,direction:n,children:c})})]})})};export{U as S,P as a};
