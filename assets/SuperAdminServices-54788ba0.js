import{A as r}from"./index-dd430329.js";async function s(){return r.fetchData({url:"/master/crm/organization",method:"get"})}async function n(t,e){return r.fetchData({url:`/master/crm/organization/${t}`,method:"put",data:e})}async function o(t){return r.fetchData({url:"/master/crm/organization",method:"post",data:t})}async function u(t){return(await r.fetchData({url:`/master/crm/user/${t}`,method:"delete"})).data}async function c(){return r.fetchData({url:"/master/crm/user",method:"get"})}async function i(t,e){return r.fetchData({url:`/master/crm/user/${t}`,method:"put",data:e})}async function m(t){return r.fetchData({url:"/master/crm/user",method:"post",data:t})}async function p(t){return(await r.fetchData({url:`/master/crm/user/${t}`,method:"delete"})).data}export{o as a,s as b,n as c,u as d,c as e,i as f,p as g,m as h};
