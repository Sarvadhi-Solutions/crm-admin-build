import{A as a}from"./index-fbeb73e8.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function n(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function s(){return a.fetchData({url:"/crm/clients",method:"get"})}async function u(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function o(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function m(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function i(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function h(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function f(){return a.fetchData({url:"/crm/module",method:"get"})}async function l(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function d(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function p(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function C(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function y(){return a.fetchData({url:"/crm/leads",method:"get"})}async function D(){return a.fetchData({url:"/crm/leads/chart",method:"get"})}async function g(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function G(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function $(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function P(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function S(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function b(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function k(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function T(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function w(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function z(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function B(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function I(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function L(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function F(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function A(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function R(){return a.fetchData({url:"/crm/deals",method:"get"})}async function O(t){return a.fetchData({url:"/crm/deals",method:"post",data:t})}async function U(t){return a.fetchData({url:`/crm/deals/${t}`,method:"get"})}async function M(t,e){return a.fetchData({url:`/crm/deals/${t}`,method:"put",data:e})}async function v(t){return a.fetchData({url:`/crm/deals/${t}`,method:"delete"})}async function x(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function j(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function q(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function E(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function H(t){return a.fetchData({url:`/crm/contacts/${t}`,method:"get"})}async function J(t){return a.fetchData({url:`/crm/leads/${t}`,method:"get"})}async function K(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"get"})}async function N(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function Q(){return a.fetchData({url:"/crm/state",method:"get"})}async function V(){return a.fetchData({url:"/crm/city",method:"get"})}async function W(){return a.fetchData({url:"/crm/roles",method:"get"})}async function X(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function Y(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function Z(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function _(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function tt(){return a.fetchData({url:"/crm/user",method:"get"})}async function at(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function et(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function rt(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function ct(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function nt(){return a.fetchData({url:"/crm/category",method:"get"})}async function st(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function ut(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function ot(t){return a.fetchData({url:"/crm/state",method:"post",data:t})}async function mt(){return a.fetchData({url:"/crm/state",method:"get"})}async function it(t,e){return a.fetchData({url:`/crm/state/${t}`,method:"put",data:e})}async function ht(t){return(await a.fetchData({url:`/crm/state/${t}`,method:"delete"})).data}async function ft(t){return a.fetchData({url:"/crm/source",method:"post",data:t})}async function lt(){return a.fetchData({url:"/crm/source",method:"get"})}async function dt(t,e){return a.fetchData({url:`/crm/source/${t}`,method:"put",data:e})}async function pt(t){return(await a.fetchData({url:`/crm/source/${t}`,method:"delete"})).data}async function Ct(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function yt(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function Dt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function gt(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function Gt(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function $t(t){return a.fetchData({url:"/crm/city",method:"post",data:t})}async function Pt(){return a.fetchData({url:"/crm/city",method:"get"})}async function St(t,e){return a.fetchData({url:`/crm/city/${t}`,method:"put",data:e})}async function bt(t){return(await a.fetchData({url:`/crm/city/${t}`,method:"delete"})).data}async function kt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function Tt(){return a.fetchData({url:"/crm/product",method:"get"})}async function wt(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function zt(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function Bt(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function It(){return a.fetchData({url:"/crm/company",method:"get"})}async function Lt(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function Ft(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function At(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function Rt(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function Ot(){return a.fetchData({url:"/crm/organization",method:"get"})}async function Ut(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function Mt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function vt(t,e){return a.fetchData({url:`/crm/organization/${t}`,method:"put",data:e})}async function xt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function jt(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}async function qt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"post",data:e})}async function Et(){return a.fetchData({url:"/crm/custom-fields?masterId=1",method:"get"})}async function Ht(){return a.fetchData({url:"/crm/custom-fields?masterId=6",method:"get"})}async function Jt(){return a.fetchData({url:"/crm/custom-fields?masterId=4",method:"get"})}async function Kt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"put",data:e})}async function Nt(t){return(await a.fetchData({url:`/crm/custom-fields/${t}`,method:"delete"})).data}export{_ as $,B as A,F as B,A as C,Ht as D,I as E,N as F,lt as G,Q as H,V as I,ft as J,It as K,q as L,E as M,j as N,Et as O,at as P,tt as Q,W as R,et as S,rt as T,h as U,s as V,m as W,i as X,u as Y,X as Z,Z as _,c as a,Y as a0,S as a1,k as a2,T as a3,b as a4,z as a5,Ot as a6,vt as a7,Ut as a8,Mt as a9,w as aA,Rt as aB,Ft as aC,At as aD,Lt as aE,p as aF,C as aG,xt as aa,jt as ab,ct as ac,st as ad,ut as ae,Ct as af,yt as ag,gt as ah,Gt as ai,kt as aj,Tt as ak,zt as al,Bt as am,$t as an,Pt as ao,mt as ap,St as aq,bt as ar,ot as as,it as at,ht as au,dt as av,pt as aw,qt as ax,Kt as ay,Nt as az,o as b,y as c,D as d,n as e,H as f,U as g,J as h,P as i,x as j,G as k,$ as l,g as m,wt as n,Dt as o,nt as p,f as q,Jt as r,d as s,l as t,K as u,R as v,M as w,v as x,O as y,L as z};
