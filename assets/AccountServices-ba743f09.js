import{A as t}from"./index-a75c2214.js";async function c(){return t.fetchData({url:"/account/setting",method:"get"})}async function e(){return t.fetchData({url:"/account/setting/integration",method:"get"})}async function o(){return t.fetchData({url:"/account/setting/billing",method:"get"})}async function i(a){return t.fetchData({url:"/account/invoice",method:"get",params:a})}async function u(a){return t.fetchData({url:"/account/log",method:"post",data:a})}async function r(){return t.fetchData({url:"/account/form",method:"get"})}export{c as a,i as b,u as c,r as d,e,o as f};
