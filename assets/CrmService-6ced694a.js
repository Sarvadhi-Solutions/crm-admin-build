import{A as a}from"./index-4bd6b7b3.js";async function c(){return a.fetchData({url:"/crm/dashboard",method:"get"})}async function s(){return a.fetchData({url:"/crm/calendar",method:"get"})}async function n(){return a.fetchData({url:"/crm/clients",method:"get"})}async function u(t){return a.fetchData({url:"/crm/clients",method:"post",data:t})}async function o(t,e){return a.fetchData({url:`/crm/clients/${t}`,method:"put",data:e})}async function m(t){return(await a.fetchData({url:`/crm/clients/${t}`,method:"delete"})).data}async function i(){return a.fetchData({url:"/crm/customers-statistic",method:"get"})}async function l(t){return a.fetchData({url:"/crm/customer-details",method:"get",params:t})}async function h(){return a.fetchData({url:"/crm/module",method:"get"})}async function f(t){return a.fetchData({url:"/crm/tags",method:"post",data:t})}async function p(t){return a.fetchData({url:`/tag-category/?masterId=${t}`,method:"get"})}async function d(t){return a.fetchData({url:"/crm/mails",method:"get",params:t})}async function C(t){return a.fetchData({url:"/crm/mail",method:"get",params:t})}async function y(){return a.fetchData({url:"/crm/leads",method:"get"})}async function D(t){return a.fetchData({url:"/crm/leads",method:"post",data:t})}async function g(t,e){return a.fetchData({url:`/crm/leads/${t}`,method:"put",data:e})}async function G(t){return(await a.fetchData({url:`/crm/leads/${t}`,method:"delete"})).data}async function $(){return a.fetchData({url:"/crm/leads-statistic",method:"get"})}async function k(){return a.fetchData({url:"/crm/tasks",method:"get"})}async function P(t){return a.fetchData({url:"/crm/tasks",method:"post",data:t})}async function S(){return a.fetchData({url:"/crm/tasks-statistic",method:"get"})}async function T(t,e){return console.log(t,"tkid"),a.fetchData({url:`/crm/tasks/${t}`,method:"put",data:e})}async function L(t){return a.fetchData({url:`/crm/tasks/${t}`,method:"delete"})}async function w(){return a.fetchData({url:"/crm/contacts",method:"get"})}async function R(t){return a.fetchData({url:"/crm/contacts",method:"post",data:t})}async function M(t,e){return a.fetchData({url:`/crm/contacts/${t}`,method:"put",data:e})}async function U(t){return(await a.fetchData({url:`/crm/contacts/${t}`,method:"delete"})).data}async function b(){return a.fetchData({url:"/crm/contacts-statistic",method:"get"})}async function A(){return a.fetchData({url:"/crm/roles",method:"get"})}async function v(){return a.fetchData({url:"/crm/roles-statistic",method:"get"})}async function x(t){return a.fetchData({url:"/crm/roles",method:"post",data:t})}async function j(t,e){return a.fetchData({url:`/crm/roles/${t}`,method:"put",data:e})}async function q(t){return a.fetchData({url:`/crm/roles/${t}`,method:"delete"})}async function z(){return a.fetchData({url:"/crm/user",method:"get"})}async function B(){return a.fetchData({url:"/crm/user-statistic",method:"get"})}async function E(t,e){return a.fetchData({url:`/crm/user/${t}`,method:"put",data:e})}async function F(t){return a.fetchData({url:`/crm/user/${t}`,method:"delete"})}async function H(){return a.fetchData({url:"/crm/company",method:"get"})}async function I(t){return a.fetchData({url:"/crm/company",method:"post",data:t})}async function J(t,e){return a.fetchData({url:`/crm/company/${t}`,method:"put",data:e})}async function K(t){return(await a.fetchData({url:`/crm/company/${t}`,method:"delete"})).data}async function N(){return a.fetchData({url:"/crm/company-statistic",method:"get"})}export{K as A,I as B,i as C,n as D,u as E,d as F,C as G,v as H,A as I,j as J,q as K,x as L,B as M,z as N,E as O,F as P,c as a,s as b,$ as c,y as d,w as e,g as f,G as g,D as h,h as i,p as j,f as k,l,m,o as n,S as o,k as p,T as q,L as r,P as s,b as t,H as u,M as v,U as w,R as x,N as y,J as z};
