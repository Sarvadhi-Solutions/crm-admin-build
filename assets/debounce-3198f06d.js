import{m as C}from"./index-de229e0f.js";import{b as j,c as O}from"./Views-e5666688.js";import{i as A}from"./toString-99f06a6f.js";var L=j,M=function(){return L.Date.now()},B=M,F=/\s/;function R(e){for(var r=e.length;r--&&F.test(e.charAt(r)););return r}var D=R,H=D,P=/^\s+/;function U(e){return e&&e.slice(0,H(e)+1).replace(P,"")}var X=U,q=X,y=O,w=A,_=0/0,z=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;function Q(e){if(typeof e=="number")return e;if(w(e))return _;if(y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=q(e);var i=G.test(e);return i||J.test(e)?K(e.slice(2),i?2:8):z.test(e)?_:+e}var V=Q,Y=O,T=B,$=V,Z="Expected a function",ee=Math.max,ne=Math.min;function re(e,r,i){var o,s,l,u,t,f,m=0,I=!1,d=!1,b=!0;if(typeof e!="function")throw new TypeError(Z);r=$(r)||0,Y(i)&&(I=!!i.leading,d="maxWait"in i,l=d?ee($(i.maxWait)||0,r):l,b="trailing"in i?!!i.trailing:b);function g(n){var a=o,c=s;return o=s=void 0,m=n,u=e.apply(c,a),u}function S(n){return m=n,t=setTimeout(v,r),I?g(n):u}function k(n){var a=n-f,c=n-m,E=r-a;return d?ne(E,l-c):E}function p(n){var a=n-f,c=n-m;return f===void 0||a>=r||a<0||d&&c>=l}function v(){var n=T();if(p(n))return h(n);t=setTimeout(v,k(n))}function h(n){return t=void 0,b&&o?g(n):(o=s=void 0,u)}function N(){t!==void 0&&clearTimeout(t),m=0,o=f=s=t=void 0}function W(){return t===void 0?u:h(T())}function x(){var n=T(),a=p(n);if(o=arguments,s=this,f=n,a){if(t===void 0)return S(f);if(d)return clearTimeout(t),t=setTimeout(v,r),g(f)}return t===void 0&&(t=setTimeout(v,r)),u}return x.cancel=N,x.flush=W,x}var te=re;const oe=C(te);export{oe as d};
