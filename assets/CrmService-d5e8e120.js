import{A as a}from"./index-7c10d2a3.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function s(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function n(){return a.fetchData({url:"/crm/clients",method:"get"})}async function u(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function o(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function m(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function i(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function l(t){return a.fetchData({url:"/crm/customer-details",method:"get",params:t})}async function h(){return a.fetchData({url:"/crm/module",method:"get"})}async function f(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function p(t){return a.fetchData({url:`/tag-category/?masterId=${t}`,method:"get"})}async function d(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function C(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function y(){return a.fetchData({url:"/crm/leads",method:"get"})}async function D(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function g(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function G(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function $(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function k(){return a.fetchData({url:"crm/tag-category/all",method:"get"})}async function T(){return a.fetchData({url:"crm/tags/all",method:"get"})}async function P(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function S(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function L(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function R(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function w(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function A(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function M(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function U(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function b(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function v(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function x(){return a.fetchData({url:"/crm/roles",method:"get"})}async function j(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function q(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function z(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function B(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function E(){return a.fetchData({url:"/crm/user",method:"get"})}async function F(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function H(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function I(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function J(){return a.fetchData({url:"/crm/company",method:"get"})}async function K(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function N(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function O(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function Q(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}export{z as A,B,q as C,F as D,E,H as F,I as G,i as H,n as I,u as J,k as K,T as L,Q as M,N,O,K as P,d as Q,C as R,c as a,s as b,$ as c,y as d,A as e,g as f,G as g,D as h,h as i,p as j,f as k,l,m,o as n,L as o,P as p,R as q,w as r,S as s,v as t,J as u,U as v,b as w,M as x,j as y,x as z};
