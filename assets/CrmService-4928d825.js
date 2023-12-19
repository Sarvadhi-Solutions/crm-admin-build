import{A as a}from"./index-4b23f9f2.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function n(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function s(t){return a.fetchData({url:"/crm/notes",method:"post",data:t})}async function u(t,e){return a.fetchData({url:`/crm/notes/${t}`,method:"put",data:e})}async function o(t){return a.fetchData({url:`/crm/notes/${t}`,method:"delete"})}async function m(){return a.fetchData({url:"/crm/clients",method:"get"})}async function i(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function h(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function f(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function l(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function d(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function p(){return a.fetchData({url:"/crm/module",method:"get"})}async function C(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function y(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function D(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function g(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function $(){return a.fetchData({url:"/crm/leads",method:"get"})}async function G(){return a.fetchData({url:"/crm/leads/chart",method:"get"})}async function P(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function S(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function b(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function k(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function T(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function w(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function z(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function B(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function I(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function L(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function F(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function A(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function R(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function O(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function U(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function M(){return a.fetchData({url:"/crm/deals",method:"get"})}async function N(t){return a.fetchData({url:"/crm/deals",method:"post",data:t})}async function v(t){return a.fetchData({url:`/crm/deals/${t}`,method:"get"})}async function x(t,e){return a.fetchData({url:`/crm/deals/${t}`,method:"put",data:e})}async function E(t){return a.fetchData({url:`/crm/deals/${t}`,method:"delete"})}async function j(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function q(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function H(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function J(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function K(t){return a.fetchData({url:`/crm/contacts/${t}`,method:"get"})}async function Q(t){return a.fetchData({url:`/crm/leads/${t}`,method:"get"})}async function V(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"get"})}async function W(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function X(){return a.fetchData({url:"/crm/state",method:"get"})}async function Y(){return a.fetchData({url:"/crm/city",method:"get"})}async function Z(){return a.fetchData({url:"/crm/roles",method:"get"})}async function _(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function tt(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function at(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function et(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function rt(){return a.fetchData({url:"/crm/user",method:"get"})}async function ct(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function nt(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function st(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function ut(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function ot(){return a.fetchData({url:"/crm/category",method:"get"})}async function mt(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function it(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function ht(t){return a.fetchData({url:"/crm/state",method:"post",data:t})}async function ft(){return a.fetchData({url:"/crm/state",method:"get"})}async function lt(t,e){return a.fetchData({url:`/crm/state/${t}`,method:"put",data:e})}async function dt(t){return(await a.fetchData({url:`/crm/state/${t}`,method:"delete"})).data}async function pt(t){return a.fetchData({url:"/crm/source",method:"post",data:t})}async function Ct(){return a.fetchData({url:"/crm/source",method:"get"})}async function yt(t,e){return a.fetchData({url:`/crm/source/${t}`,method:"put",data:e})}async function Dt(t){return(await a.fetchData({url:`/crm/source/${t}`,method:"delete"})).data}async function gt(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function $t(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function Gt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function Pt(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function St(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function bt(t){return a.fetchData({url:"/crm/city",method:"post",data:t})}async function kt(){return a.fetchData({url:"/crm/city",method:"get"})}async function Tt(t,e){return a.fetchData({url:`/crm/city/${t}`,method:"put",data:e})}async function wt(t){return(await a.fetchData({url:`/crm/city/${t}`,method:"delete"})).data}async function zt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function Bt(){return a.fetchData({url:"/crm/product",method:"get"})}async function It(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function Lt(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function Ft(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function At(){return a.fetchData({url:"/crm/company",method:"get"})}async function Rt(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function Ot(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function Ut(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function Mt(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function Nt(){return a.fetchData({url:"/crm/organization",method:"get"})}async function vt(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function xt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function Et(t,e){return a.fetchData({url:`/crm/organization/${t}`,method:"put",data:e})}async function jt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function qt(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}async function Ht(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"post",data:e})}async function Jt(){return a.fetchData({url:"/crm/custom-fields?masterId=1",method:"get"})}async function Kt(){return a.fetchData({url:"/crm/custom-fields?masterId=6",method:"get"})}async function Qt(){return a.fetchData({url:"/crm/custom-fields?masterId=4",method:"get"})}async function Vt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"put",data:e})}async function Wt(t){return(await a.fetchData({url:`/crm/custom-fields/${t}`,method:"delete"})).data}export{i as $,E as A,N as B,R as C,F as D,O as E,U as F,Kt as G,A as H,W as I,Ct as J,X as K,Y as L,pt as M,At as N,H as O,J as P,q as Q,Jt as R,ct as S,rt as T,Z as U,nt as V,st as W,d as X,m as Y,f as Z,l as _,c as a,T as a0,z as a1,B as a2,w as a3,L as a4,_ as a5,at as a6,et as a7,tt as a8,Nt as a9,Ht as aA,Vt as aB,Wt as aC,I as aD,Mt as aE,Ot as aF,Ut as aG,Rt as aH,D as aI,g as aJ,Et as aa,vt as ab,xt as ac,jt as ad,qt as ae,ut as af,mt as ag,it as ah,gt as ai,$t as aj,Pt as ak,St as al,zt as am,Bt as an,Lt as ao,Ft as ap,bt as aq,kt as ar,ft as as,Tt as at,wt as au,ht as av,lt as aw,dt as ax,yt as ay,Dt as az,h as b,$ as c,G as d,n as e,K as f,v as g,Q as h,s as i,u as j,o as k,k as l,j as m,S as n,b as o,P as p,It as q,Gt as r,ot as s,p as t,Qt as u,y as v,C as w,V as x,M as y,x as z};
