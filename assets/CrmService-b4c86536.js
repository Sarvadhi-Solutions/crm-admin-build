import{A as a}from"./index-349191dc.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function n(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function s(t){return a.fetchData({url:"/crm/notes",method:"post",data:t})}async function u(t,e){return a.fetchData({url:`/crm/notes/${t}`,method:"put",data:e})}async function o(t){return a.fetchData({url:`/crm/notes/${t}`,method:"delete"})}async function m(){return a.fetchData({url:"/crm/clients",method:"get"})}async function i(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function h(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function f(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function l(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function d(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function p(){return a.fetchData({url:"/crm/module",method:"get"})}async function C(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function y(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function D(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function g(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function $(){return a.fetchData({url:"/crm/leads",method:"get"})}async function G(){return a.fetchData({url:"/crm/leads/chart",method:"get"})}async function P(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function S(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function b(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function k(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function T(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function w(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function z(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function B(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function I(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function L(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function F(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function A(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function R(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function U(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function O(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function M(){return a.fetchData({url:"/crm/deals",method:"get"})}async function N(t){return a.fetchData({url:"/crm/deals",method:"post",data:t})}async function v(t){return a.fetchData({url:`/crm/deals/${t}`,method:"get"})}async function x(t,e){return a.fetchData({url:`/crm/deals/${t}`,method:"put",data:e})}async function E(t){return a.fetchData({url:`/crm/deals/${t}`,method:"delete"})}async function j(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function q(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function H(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function J(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function K(t){return a.fetchData({url:`/crm/contacts/${t}`,method:"get"})}async function Q(t){return a.fetchData({url:`/crm/leads/${t}`,method:"get"})}async function V(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"get"})}async function W(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function X(){return a.fetchData({url:"/crm/state",method:"get"})}async function Y(){return a.fetchData({url:"/crm/city",method:"get"})}async function Z(){return a.fetchData({url:"/crm/roles",method:"get"})}async function _(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function tt(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function at(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function et(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function rt(t){return a.fetchData({url:"/crm/user",method:"post",data:t})}async function ct(){return a.fetchData({url:"/crm/user",method:"get"})}async function nt(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function st(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function ut(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function ot(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function mt(){return a.fetchData({url:"/crm/category",method:"get"})}async function it(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function ht(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function ft(t){return a.fetchData({url:"/crm/state",method:"post",data:t})}async function lt(){return a.fetchData({url:"/crm/state",method:"get"})}async function dt(t,e){return a.fetchData({url:`/crm/state/${t}`,method:"put",data:e})}async function pt(t){return(await a.fetchData({url:`/crm/state/${t}`,method:"delete"})).data}async function Ct(t){return a.fetchData({url:"/crm/source",method:"post",data:t})}async function yt(){return a.fetchData({url:"/crm/source",method:"get"})}async function Dt(t,e){return a.fetchData({url:`/crm/source/${t}`,method:"put",data:e})}async function gt(t){return(await a.fetchData({url:`/crm/source/${t}`,method:"delete"})).data}async function $t(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function Gt(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function Pt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function St(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function bt(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function kt(t){return a.fetchData({url:"/crm/city",method:"post",data:t})}async function Tt(){return a.fetchData({url:"/crm/city",method:"get"})}async function wt(t,e){return a.fetchData({url:`/crm/city/${t}`,method:"put",data:e})}async function zt(t){return(await a.fetchData({url:`/crm/city/${t}`,method:"delete"})).data}async function Bt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function It(){return a.fetchData({url:"/crm/product",method:"get"})}async function Lt(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function Ft(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function At(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function Rt(){return a.fetchData({url:"/crm/company",method:"get"})}async function Ut(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function Ot(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function Mt(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function Nt(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function vt(){return a.fetchData({url:"/crm/organization",method:"get"})}async function xt(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function Et(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function jt(t,e){return a.fetchData({url:`/crm/organization/${t}`,method:"put",data:e})}async function qt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function Ht(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}async function Jt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"post",data:e})}async function Kt(){return a.fetchData({url:"/crm/custom-fields?masterId=1",method:"get"})}async function Qt(){return a.fetchData({url:"/crm/custom-fields?masterId=6",method:"get"})}async function Vt(){return a.fetchData({url:"/crm/custom-fields?masterId=4",method:"get"})}async function Wt(t,e){return a.fetchData({url:`/crm/custom-fields/${t}`,method:"put",data:e})}async function Xt(t){return(await a.fetchData({url:`/crm/custom-fields/${t}`,method:"delete"})).data}export{l as $,E as A,N as B,R as C,F as D,U as E,O as F,Qt as G,A as H,W as I,yt as J,X as K,Y as L,Ct as M,Rt as N,H as O,J as P,q as Q,Kt as R,nt as S,ct as T,rt as U,Z as V,st as W,ut as X,d as Y,m as Z,f as _,c as a,i as a0,T as a1,z as a2,B as a3,w as a4,L as a5,_ as a6,at as a7,et as a8,tt as a9,gt as aA,Jt as aB,Wt as aC,Xt as aD,I as aE,Nt as aF,Ot as aG,Mt as aH,Ut as aI,D as aJ,g as aK,vt as aa,jt as ab,xt as ac,Et as ad,qt as ae,Ht as af,ot as ag,it as ah,ht as ai,$t as aj,Gt as ak,St as al,bt as am,Bt as an,It as ao,Ft as ap,At as aq,kt as ar,Tt as as,lt as at,wt as au,zt as av,ft as aw,dt as ax,pt as ay,Dt as az,h as b,$ as c,G as d,n as e,K as f,v as g,Q as h,s as i,u as j,o as k,k as l,j as m,S as n,b as o,P as p,Lt as q,Pt as r,mt as s,p as t,Vt as u,y as v,C as w,V as x,M as y,x as z};
