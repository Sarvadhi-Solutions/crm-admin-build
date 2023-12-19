import{A as a}from"./index-3e880d58.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function n(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function s(){return a.fetchData({url:"/crm/clients",method:"get"})}async function o(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function u(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function m(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function i(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function h(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function f(t){return a.fetchData({url:"/crm/customer-details",method:"get",params:t})}async function p(){return a.fetchData({url:"/crm/module",method:"get"})}async function l(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function d(t){return a.fetchData({url:`/crm/tag-category/?masterId=${t}`,method:"get"})}async function C(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function y(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function D(){return a.fetchData({url:"/crm/leads",method:"get"})}async function g(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function G(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function $(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function b(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function P(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function T(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function S(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function k(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function w(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function z(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function B(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function L(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function R(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function U(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function A(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function M(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function O(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function I(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function v(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function x(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function j(){return a.fetchData({url:"/crm/roles",method:"get"})}async function q(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function E(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function F(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function H(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function J(){return a.fetchData({url:"/crm/user",method:"get"})}async function K(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function N(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function Q(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function V(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function W(){return a.fetchData({url:"/crm/category",method:"get"})}async function X(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function Y(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function Z(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function _(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function tt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function at(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function et(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function rt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function ct(){return a.fetchData({url:"/crm/product",method:"get"})}async function nt(t){return a.fetchData({url:`/crm/product/${t}`,method:"get"})}async function st(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function ot(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function ut(){return a.fetchData({url:"/crm/company",method:"get"})}async function mt(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function it(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function ht(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function ft(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function pt(){return a.fetchData({url:"/crm/organization",method:"get"})}async function lt(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function dt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function Ct(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function yt(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}export{et as $,v as A,O as B,w as C,z as D,ft as E,it as F,ht as G,mt as H,h as I,s as J,o as K,P as L,S as M,k as N,T as O,pt as P,lt as Q,dt as R,Ct as S,yt as T,J as U,V,X as W,Y as X,Z as Y,_ as Z,at as _,c as a,rt as a0,ct as a1,st as a2,ot as a3,C as a4,y as a5,q as a6,j as a7,F as a8,H as a9,E as aa,K as ab,N as ac,Q as ad,u as b,n as c,b as d,D as e,M as f,G as g,$ as h,g as i,nt as j,tt as k,W as l,p as m,d as n,l as o,f as p,i as q,m as r,R as s,B as t,U as u,A as v,L as w,x,ut as y,I as z};
