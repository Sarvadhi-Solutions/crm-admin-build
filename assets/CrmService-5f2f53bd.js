import{A as a}from"./index-b09faefa.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function n(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function s(){return a.fetchData({url:"/crm/clients",method:"get"})}async function o(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function u(){return a.fetchData({url:"/crm/task-dashboard-graph",method:"get"})}async function m(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function i(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function h(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function f(t){return a.fetchData({url:"/crm/customer-details",method:"get",params:t})}async function l(){return a.fetchData({url:"/crm/module",method:"get"})}async function p(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function d(t){return a.fetchData({url:`/tag-category/?masterId=${t}`,method:"get"})}async function C(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function y(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function D(){return a.fetchData({url:"/crm/leads",method:"get"})}async function g(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function G(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function $(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function b(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function P(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function T(t){return(await a.fetchData({url:`/crm/tag-category/${t}`,method:"delete"})).data}async function S(t){return a.fetchData({url:"/crm/tag-category",method:"post",data:t})}async function k(t,e){return a.fetchData({url:`/crm/tag-category/${t}`,method:"put",data:e})}async function w(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function z(t){return(await a.fetchData({url:`/crm/tags/${t}`,method:"delete"})).data}async function L(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function R(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function B(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function U(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function A(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function M(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function O(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function v(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function x(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function I(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function j(){return a.fetchData({url:"/crm/roles",method:"get"})}async function q(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function E(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function F(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function H(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function J(){return a.fetchData({url:"/crm/user",method:"get"})}async function K(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function N(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function Q(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function V(t){return a.fetchData({url:"/crm/category",method:"post",data:t})}async function W(){return a.fetchData({url:"/crm/category",method:"get"})}async function X(t,e){return a.fetchData({url:`/crm/category/${t}`,method:"put",data:e})}async function Y(t){return(await a.fetchData({url:`/crm/category/${t}`,method:"delete"})).data}async function Z(t){return a.fetchData({url:"/crm/sub-category",method:"post",data:t})}async function _(){return a.fetchData({url:"/crm/sub-category",method:"get"})}async function tt(t){return a.fetchData({url:`/crm/sub-category/${t}`,method:"get"})}async function at(t,e){return a.fetchData({url:`/crm/sub-category/${t}`,method:"put",data:e})}async function et(t){return(await a.fetchData({url:`/crm/sub-category/${t}`,method:"delete"})).data}async function rt(t){return a.fetchData({url:"/crm/product",method:"post",data:t})}async function ct(){return a.fetchData({url:"/crm/product",method:"get"})}async function nt(t,e){return a.fetchData({url:`/crm/product/${t}`,method:"put",data:e})}async function st(t){return(await a.fetchData({url:`/crm/product/${t}`,method:"delete"})).data}async function ot(){return a.fetchData({url:"/crm/company",method:"get"})}async function ut(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function mt(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function it(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function ht(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}async function ft(){return a.fetchData({url:"/crm/organization",method:"get"})}async function lt(){return a.fetchData({url:"/crm/organization-branch",method:"get"})}async function pt(t,e){return a.fetchData({url:`/crm/organization-branch/${t}`,method:"put",data:e})}async function dt(t){return a.fetchData({url:"/crm/organization-branch",method:"post",data:t})}async function Ct(t){return a.fetchData({url:"/crm/organization",method:"post",data:t})}export{at as $,j as A,F as B,H as C,E as D,K as E,J as F,N as G,Q as H,h as I,s as J,o as K,P as L,S as M,k as N,T as O,z as P,ft as Q,lt as R,pt as S,dt as T,Ct as U,V,W,X,Y,Z,_,c as a,et as a0,rt as a1,ct as a2,nt as a3,st as a4,tt as a5,w as a6,ht as a7,mt as a8,it as a9,ut as aa,C as ab,y as ac,u as b,n as c,b as d,D as e,M as f,G as g,$ as h,g as i,l as j,d as k,p as l,f as m,i as n,m as o,B as p,L as q,U as r,A as s,R as t,I as u,ot as v,v as w,x,O as y,q as z};
