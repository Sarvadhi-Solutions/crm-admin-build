import{A as a}from"./index-e9e80fad.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function s(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function u(){return a.fetchData({url:"/crm/industry",method:"get"})}async function o(t){return a.fetchData({url:"/crm/notes",method:"post",data:t})}async function m(t,e){return a.fetchData({url:`/crm/notes/${t}`,method:"put",data:e})}async function i(t){return a.fetchData({url:`/crm/notes/${t}`,method:"delete"})}async function h(){return a.fetchData({url:"/crm/clients",method:"get"})}async function f(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function d(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function l(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function p(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function C(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function y(){return a.fetchData({url:"/crm/module",method:"get"})}async function D(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function g(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function $(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function G(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function S(){return a.fetchData({url:"/crm/leads",method:"get"})}async function P(){return a.fetchData({url:"/crm/leads/chart",method:"get"})}async function b(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function k(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function w(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function T(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function z(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function I(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function B(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function L(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function F(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function A(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function R(t,e){return(await a.fetchData({url:`/crm/tags/${t}`,method:"put",data:e})).data}async function U(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function O(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function M(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function N(t,e){return a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function v(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function x(){return a.fetchData({url:"/crm/deals",method:"get"})}async function E(t){return a.fetchData({url:"/crm/deals",method:"post",data:t})}async function j(t){return a.fetchData({url:`/crm/deals/${t}`,method:"get"})}async function q(t,e){return a.fetchData({url:`/crm/deals/${t}`,method:"put",data:e})}async function H(t){return a.fetchData({url:`/crm/deals/${t}`,method:"delete"})}async function J(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function K(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function Q(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function V(t){return(await a.fetchData({url:"/crm/contacts/bulkDelete",method:"delete",data:t})).data}async function W(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function X(t){return a.fetchData({url:`/crm/contacts/${t}`,method:"get"})}async function Y(t){return a.fetchData({url:`/crm/leads/${t}`,method:"get"})}async function Z(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"get"})}async function _(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function tt(){return a.fetchData({url:"/crm/state",method:"get"})}async function at(){return a.fetchData({url:"/crm/city",method:"get"})}async function et(){return a.fetchData({url:"/crm/roles",method:"get"})}async function rt(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function nt(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function ct(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function st(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function ut(t){return a.fetchData({url:"/master/crm/organization-admin",method:"post",data:t})}async function ot(t){return a.fetchData({url:"/crm/user",method:"post",data:t})}async function mt(){return a.fetchData({url:"/crm/user",method:"get"})}async function it(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function ht(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function ft(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function dt(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function lt(){return a.fetchData({url:"/crm/category",method:"get"})}async function pt(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function Ct(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function yt(t){return a.fetchData({url:"/crm/state",method:"post",data:t})}async function Dt(){return a.fetchData({url:"/crm/state",method:"get"})}async function gt(t,e){return a.fetchData({url:`/crm/state/${t}`,method:"put",data:e})}async function $t(t){return(await a.fetchData({url:`/crm/state/${t}`,method:"delete"})).data}async function Gt(t){return a.fetchData({url:"/crm/source",method:"post",data:t})}async function St(){return a.fetchData({url:"/crm/source",method:"get"})}async function Pt(t,e){return a.fetchData({url:`/crm/source/${t}`,method:"put",data:e})}async function bt(t){return(await a.fetchData({url:`/crm/source/${t}`,method:"delete"})).data}async function kt(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function wt(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function Tt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function zt(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function It(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function Bt(t){return a.fetchData({url:"/crm/city",method:"post",data:t})}async function Lt(){return a.fetchData({url:"/crm/city",method:"get"})}async function Ft(t,e){return a.fetchData({url:`/crm/city/${t}`,method:"put",data:e})}async function At(t){return(await a.fetchData({url:`/crm/city/${t}`,method:"delete"})).data}async function Rt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function Ut(){return a.fetchData({url:"/crm/product",method:"get"})}async function Ot(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function Mt(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function Nt(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function vt(){return a.fetchData({url:"/crm/company",method:"get"})}async function xt(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function Et(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function jt(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function qt(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function Ht(){return a.fetchData({url:"/crm/organization",method:"get"})}async function Jt(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function Kt(t){return(await a.fetchData({url:`/crm/organization-branch/${t}`,method:"delete"})).data}async function Qt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function Vt(t,e){return a.fetchData({url:`/crm/organization/${t}`,method:"put",data:e})}async function Wt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function Xt(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}async function Yt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"post",data:e})}async function Zt(t){return a.fetchData({url:`/crm/custom-fields?masterId=${t}`,method:"get"})}async function _t(t){const e=`/crm/custom-fields?masterId=${t}`;return a.fetchData({url:e,method:"get"})}async function ta(t){const e=`/crm/custom-fields?masterId=${t}`;return a.fetchData({url:e,method:"get"})}async function aa(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"put",data:e})}async function ea(t){return(await a.fetchData({url:`/crm/custom-fields/${t}`,method:"delete"})).data}async function ra(t,e){return a.fetchData({url:`/crm/status/${t}`,method:"post",data:e})}async function na(t){return a.fetchData({url:`/crm/status?masterId=${t}`,method:"get"})}async function ca(t,e){return a.fetchData({url:`/crm/status/${t}`,method:"put",data:e})}async function sa(t){return(await a.fetchData({url:`/crm/status/${t}`,method:"delete"})).data}export{h as $,H as A,E as B,M as C,U as D,N as E,v as F,_t as G,O as H,it as I,mt as J,ut as K,ot as L,et as M,ht as N,ft as O,_ as P,St as Q,tt as R,at as S,Gt as T,vt as U,Q as V,V as W,W as X,K as Y,Zt as Z,C as _,c as a,l as a0,p as a1,f as a2,z as a3,B as a4,L as a5,R as a6,I as a7,A as a8,Ht as a9,Pt as aA,bt as aB,Yt as aC,aa as aD,ea as aE,ra as aF,ca as aG,sa as aH,F as aI,qt as aJ,Et as aK,jt as aL,xt as aM,$ as aN,G as aO,u as aP,rt as aQ,ct as aR,st as aS,nt as aT,Vt as aa,Jt as ab,Qt as ac,Kt as ad,Wt as ae,Xt as af,dt as ag,lt as ah,pt as ai,Ct as aj,kt as ak,wt as al,zt as am,It as an,Rt as ao,Ut as ap,Mt as aq,Nt as ar,Bt as as,Lt as at,Ft as au,At as av,yt as aw,Dt as ax,gt as ay,$t as az,d as b,P as c,s as d,X as e,j as f,o as g,m as h,i,Y as j,T as k,S as l,J as m,na as n,k as o,w as p,b as q,Ot as r,Tt as s,y as t,ta as u,g as v,D as w,Z as x,x as y,q as z};
