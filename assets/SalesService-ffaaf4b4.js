import{A as t}from"./index-7c10d2a3.js";async function s(){return t.fetchData({url:"/sales/dashboard",method:"post"})}async function r(e){return t.fetchData({url:"/sales/products",method:"post",data:e})}async function c(e){return t.fetchData({url:"/sales/products/delete",method:"delete",data:e})}async function u(e){return t.fetchData({url:"/sales/product",method:"get",params:e})}async function o(e){return t.fetchData({url:"/sales/products/update",method:"put",data:e})}async function n(e){return t.fetchData({url:"/sales/products/create",method:"post",data:e})}async function d(e){return t.fetchData({url:"/sales/orders",method:"get",params:e})}async function l(e){return t.fetchData({url:"/sales/orders/delete",method:"delete",data:e})}async function i(e){return t.fetchData({url:"/sales/orders-details",method:"get",params:e})}export{s as a,r as b,c,u as d,o as e,n as f,d as g,l as h,i};
