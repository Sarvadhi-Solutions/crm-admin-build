import{x as p}from"./index-21d7ce34.js";import{k as c}from"./Views-aa9d3067.js";import{i as f,t as m}from"./toString-839cbc0d.js";import{_ as h}from"./_MapCache-e6bfd31d.js";var y=c,_=f,g=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/;function v(r,e){if(y(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||_(r)?!0:d.test(r)||!g.test(r)||e!=null&&r in Object(e)}var l=v,u=h,$="Expected a function";function s(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError($);var t=function(){var a=arguments,i=e?e.apply(this,a):a[0],n=t.cache;if(n.has(i))return n.get(i);var o=r.apply(this,a);return t.cache=n.set(i,o)||n,o};return t.cache=new(s.Cache||u),t}s.Cache=u;var C=s,P=C,E=500;function z(r){var e=P(r,function(a){return t.size===E&&t.clear(),a}),t=e.cache;return e}var I=z,T=I,K=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,S=/\\(\\)?/g,b=T(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(K,function(t,a,i,n){e.push(i?n.replace(S,"$1"):a||t)}),e}),w=b,x=c,A=l,M=w,N=m;function F(r,e){return x(r)?r:A(r,e)?[r]:M(N(r))}var G=F,O=f,R=1/0;function k(r){if(typeof r=="string"||O(r))return r;var e=r+"";return e=="0"&&1/r==-R?"-0":e}var D=k,X=G,Z=D;function U(r,e){e=X(e,r);for(var t=0,a=e.length;r!=null&&t<a;)r=r[Z(e[t++])];return t&&t==a?r:void 0}var Y=U,q=Y;function B(r,e,t){var a=r==null?void 0:q(r,e);return a===void 0?t:a}var H=B;const W=p(H);export{G as _,D as a,H as b,l as c,Y as d,W as g};
