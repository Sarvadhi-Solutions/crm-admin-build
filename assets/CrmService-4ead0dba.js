import{A as a}from"./index-8f180057.js";async function n(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function s(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function u(){return a.fetchData({url:"/crm/industry",method:"get"})}async function o(t){return a.fetchData({url:"/crm/notes",method:"post",data:t})}async function m(t,e){return a.fetchData({url:`/crm/notes/${t}`,method:"put",data:e})}async function i(t){return a.fetchData({url:`/crm/notes/${t}`,method:"delete"})}async function h(){return a.fetchData({url:"/crm/clients",method:"get"})}async function f(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function d(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function l(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function p(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function C(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function y(){return a.fetchData({url:"/crm/module",method:"get"})}async function D(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function g(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function $(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function G(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function P(){return a.fetchData({url:"/crm/leads",method:"get"})}async function S(){return a.fetchData({url:"/crm/leads/chart",method:"get"})}async function b(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function T(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function k(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function w(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function z(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function I(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function B(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function L(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function F(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function A(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function U(t,e){return(await a.fetchData({url:`/crm/tags/${t}`,method:"put",data:e})).data}async function R(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function M(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function N(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function O(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function v(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function x(){return a.fetchData({url:"/crm/deals",method:"get"})}async function E(t){return a.fetchData({url:"/crm/deals",method:"post",data:t})}async function j(t){return a.fetchData({url:`/crm/deals/${t}`,method:"get"})}async function q(t,e){return a.fetchData({url:`/crm/deals/${t}`,method:"put",data:e})}async function H(t){return a.fetchData({url:`/crm/deals/${t}`,method:"delete"})}async function J(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function K(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function Q(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function V(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function W(t){return a.fetchData({url:`/crm/contacts/${t}`,method:"get"})}async function X(t){return a.fetchData({url:`/crm/leads/${t}`,method:"get"})}async function Y(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"get"})}async function Z(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function _(){return a.fetchData({url:"/crm/state",method:"get"})}async function tt(){return a.fetchData({url:"/crm/city",method:"get"})}async function at(){return a.fetchData({url:"/crm/roles",method:"get"})}async function et(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function rt(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function ct(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function nt(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function st(t){return a.fetchData({url:"/master/crm/organization-admin",method:"post",data:t})}async function ut(t){return a.fetchData({url:"/crm/user",method:"post",data:t})}async function ot(){return a.fetchData({url:"/crm/user",method:"get"})}async function mt(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function it(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function ht(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function ft(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function dt(){return a.fetchData({url:"/crm/category",method:"get"})}async function lt(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function pt(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function Ct(t){return a.fetchData({url:"/crm/state",method:"post",data:t})}async function yt(){return a.fetchData({url:"/crm/state",method:"get"})}async function Dt(t,e){return a.fetchData({url:`/crm/state/${t}`,method:"put",data:e})}async function gt(t){return(await a.fetchData({url:`/crm/state/${t}`,method:"delete"})).data}async function $t(t){return a.fetchData({url:"/crm/source",method:"post",data:t})}async function Gt(){return a.fetchData({url:"/crm/source",method:"get"})}async function Pt(t,e){return a.fetchData({url:`/crm/source/${t}`,method:"put",data:e})}async function St(t){return(await a.fetchData({url:`/crm/source/${t}`,method:"delete"})).data}async function bt(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function Tt(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function kt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function wt(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function zt(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function It(t){return a.fetchData({url:"/crm/city",method:"post",data:t})}async function Bt(){return a.fetchData({url:"/crm/city",method:"get"})}async function Lt(t,e){return a.fetchData({url:`/crm/city/${t}`,method:"put",data:e})}async function Ft(t){return(await a.fetchData({url:`/crm/city/${t}`,method:"delete"})).data}async function At(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function Ut(){return a.fetchData({url:"/crm/product",method:"get"})}async function Rt(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function Mt(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function Nt(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function Ot(){return a.fetchData({url:"/crm/company",method:"get"})}async function vt(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function xt(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function Et(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function jt(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function qt(){return a.fetchData({url:"/crm/organization",method:"get"})}async function Ht(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function Jt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function Kt(t,e){return a.fetchData({url:`/crm/organization/${t}`,method:"put",data:e})}async function Qt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function Vt(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}async function Wt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"post",data:e})}async function Xt(){return a.fetchData({url:"/crm/custom-fields?masterId=1",method:"get"})}async function Yt(){return a.fetchData({url:"/crm/custom-fields?masterId=6",method:"get"})}async function Zt(){return a.fetchData({url:"/crm/custom-fields?masterId=4",method:"get"})}async function _t(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"put",data:e})}async function ta(t){return(await a.fetchData({url:`/crm/custom-fields/${t}`,method:"delete"})).data}export{l as $,H as A,E as B,N as C,R as D,O as E,v as F,Yt as G,M as H,Z as I,Gt as J,_ as K,tt as L,$t as M,Ot as N,Q as O,V as P,K as Q,Xt as R,mt as S,ot as T,st as U,ut as V,at as W,it as X,ht as Y,C as Z,h as _,n as a,p as a0,f as a1,z as a2,B as a3,L as a4,U as a5,I as a6,A as a7,et as a8,ct as a9,gt as aA,Pt as aB,St as aC,Wt as aD,_t as aE,ta as aF,F as aG,jt as aH,xt as aI,Et as aJ,vt as aK,$ as aL,G as aM,u as aN,nt as aa,rt as ab,qt as ac,Kt as ad,Ht as ae,Jt as af,Qt as ag,Vt as ah,ft as ai,lt as aj,pt as ak,bt as al,Tt as am,wt as an,zt as ao,At as ap,Ut as aq,Mt as ar,Nt as as,It as at,Bt as au,yt as av,Lt as aw,Ft as ax,Ct as ay,Dt as az,d as b,P as c,S as d,s as e,W as f,j as g,o as h,m as i,i as j,X as k,w as l,J as m,T as n,k as o,b as p,Rt as q,kt as r,dt as s,y as t,Zt as u,g as v,D as w,Y as x,x as y,q as z};
