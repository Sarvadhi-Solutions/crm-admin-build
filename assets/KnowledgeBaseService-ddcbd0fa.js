import{A as t}from"./index-4bd6b7b3.js";async function r(){return t.fetchData({url:"/knowledge-base/categories",method:"get"})}async function c(e){return t.fetchData({url:"/knowledge-base/articles-query",method:"post",data:e})}async function i(e){return t.fetchData({url:"/knowledge-base/article",method:"get",params:e})}async function s(e){return t.fetchData({url:"/knowledge-base/article",method:"post",data:e})}async function n(e){return t.fetchData({url:"/knowledge-base/others-article",method:"get",params:e})}async function o(){return t.fetchData({url:"/knowledge-base/categorized-articles",method:"get"})}export{r as a,c as b,i as c,n as d,o as e,s as f};
