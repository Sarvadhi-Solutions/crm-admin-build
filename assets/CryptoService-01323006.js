import{A as t}from"./index-7a16719d.js";async function e(){return t.fetchData({url:"/crypto/dashboard",method:"get"})}async function o(){return t.fetchData({url:"/crypto/portfolio",method:"get"})}async function c(){return t.fetchData({url:"/crypto/wallets",method:"get"})}async function n(a){return t.fetchData({url:"/crypto/wallets/history",method:"post",data:a})}async function s(a){return t.fetchData({url:"/crypto/market",method:"post",data:a})}export{e as a,o as b,s as c,c as d,n as e};
