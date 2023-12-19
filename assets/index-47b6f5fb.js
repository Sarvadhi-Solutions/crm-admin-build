import{r as u,ax as B,c as y,j as k,m as V}from"./index-f4ad2487.js";import{_ as j,k as ee,a as E,c as re}from"./cloneDeep-acd0e120.js";import{_ as G}from"./_baseIsEqual-95b6ae1f.js";import{c as te,q as ne,k as S,r as se}from"./Views-292f6930.js";import{_ as R,a as P,b as ae,c as w,d as N}from"./get-0781bc40.js";const L=u.createContext({}),le=L.Provider,K=u.forwardRef((e,r)=>{const{name:n,value:s,onChange:t,color:a}=u.useContext(L),{color:l,className:o,onChange:i,children:v,disabled:c,readOnly:f,name:C=n,defaultChecked:b,value:p,checked:m,labelRef:g,field:x,...I}=e,{themeColor:_,primaryColorLevel:A}=B(),H=u.useCallback(()=>typeof s<"u"&&typeof p<"u"?s.some(h=>h===p):m||b,[m,s,p,b]),[M,O]=u.useState(H()),T=(()=>{let h=M,d={checked:h},$={value:h};return typeof m<"u"&&($.checked=m),x&&(h=typeof x.value=="boolean"?x.value:b,$={value:h,checked:h}),typeof s<"u"&&(d={checked:s.includes(p)}),b&&($.defaultChecked=b),typeof s<"u"?d:$})(),J=u.useCallback(h=>{let d=!M;typeof s<"u"&&(d=!s.includes(p)),!(c||f)&&(O(d),i==null||i(d,h),t==null||t(p,d,h))},[M,c,f,O,i,p,t,s]),Q=`checkbox text-${l||a||`${_}-${A}`}`,W=c&&"disabled",X="checkbox-label",Y=c&&"disabled",Z=y(Q,W),z=y(X,Y,o);return k.jsxs("label",{ref:g,className:z,children:[k.jsx("input",{ref:r,className:Z,type:"checkbox",disabled:c,readOnly:f,name:C,onChange:J,...T,...x,...I}),v?k.jsx("span",{className:y("ltr:ml-2 rtl:mr-2",c?"opacity-50":""),children:v}):null]})});K.displayName="Checkbox";var oe=j,ce=G,ie=1,ue=2;function fe(e,r,n,s){var t=n.length,a=t,l=!s;if(e==null)return!a;for(e=Object(e);t--;){var o=n[t];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++t<a;){o=n[t];var i=o[0],v=e[i],c=o[1];if(l&&o[2]){if(v===void 0&&!(i in e))return!1}else{var f=new oe;if(s)var C=s(v,c,i,e,r,f);if(!(C===void 0?ce(c,v,ie|ue,s,f):C))return!1}}return!0}var he=fe,pe=te;function ve(e){return e===e&&!pe(e)}var q=ve,Ce=q,de=ee;function be(e){for(var r=de(e),n=r.length;n--;){var s=r[n],t=e[s];r[n]=[s,t,Ce(t)]}return r}var me=be;function xe(e,r){return function(n){return n==null?!1:n[e]===r&&(r!==void 0||e in Object(n))}}var F=xe,_e=he,ke=me,ge=F;function $e(e){var r=ke(e);return r.length==1&&r[0][2]?ge(r[0][0],r[0][1]):function(n){return n===e||_e(n,e,r)}}var ye=$e;function Pe(e,r){return e!=null&&r in Object(e)}var Ie=Pe,Ae=R,Me=ne,Oe=S,De=E,Ee=se,Ge=P;function Se(e,r,n){r=Ae(r,e);for(var s=-1,t=r.length,a=!1;++s<t;){var l=Ge(r[s]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++s!=t?a:(t=e==null?0:e.length,!!t&&Ee(t)&&De(l,t)&&(Oe(e)||Me(e)))}var Re=Se,we=Ie,Ne=Re;function Le(e,r){return e!=null&&Ne(e,r,we)}var Ke=Le,qe=G,Fe=ae,Ue=Ke,He=w,Te=q,Je=F,Qe=P,We=1,Xe=2;function Ye(e,r){return He(e)&&Te(r)?Je(Qe(e),r):function(n){var s=Fe(n,e);return s===void 0&&s===r?Ue(n,e):qe(r,s,We|Xe)}}var Ze=Ye;function ze(e){return e}var Be=ze;function Ve(e){return function(r){return r==null?void 0:r[e]}}var je=Ve,er=N;function rr(e){return function(r){return er(r,e)}}var tr=rr,nr=je,sr=tr,ar=w,lr=P;function or(e){return ar(e)?nr(lr(e)):sr(e)}var cr=or,ir=ye,ur=Ze,fr=Be,hr=S,pr=cr;function vr(e){return typeof e=="function"?e:e==null?fr:typeof e=="object"?hr(e)?ur(e[0],e[1]):ir(e):pr(e)}var Cr=vr;function dr(e){var r=e==null?0:e.length;return r?e[r-1]:void 0}var br=dr;function mr(e,r,n){var s=-1,t=e.length;r<0&&(r=-r>t?0:t+r),n=n>t?t:n,n<0&&(n+=t),t=r>n?0:n-r>>>0,r>>>=0;for(var a=Array(t);++s<t;)a[s]=e[s+r];return a}var xr=mr,_r=N,kr=xr;function gr(e,r){return r.length<2?e:_r(e,kr(r,0,-1))}var $r=gr,yr=R,Pr=br,Ir=$r,Ar=P;function Mr(e,r){return r=yr(r,e),e=Ir(e,r),e==null||delete e[Ar(Pr(r))]}var Or=Mr,Dr=Or,Er=E,Gr=Array.prototype,Sr=Gr.splice;function Rr(e,r){for(var n=e?r.length:0,s=n-1;n--;){var t=r[n];if(n==s||t!==a){var a=t;Er(t)?Sr.call(e,t,1):Dr(e,t)}}return e}var wr=Rr,Nr=Cr,Lr=wr;function Kr(e,r){var n=[];if(!(e&&e.length))return n;var s=-1,t=[],a=e.length;for(r=Nr(r);++s<a;){var l=e[s];r(l,s,e)&&(n.push(l),t.push(s))}return Lr(e,t),n}var qr=Kr;const Fr=V(qr),Ur=Object.prototype.hasOwnProperty;function D(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function Hr(e,r){if(D(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(let t=0;t<n.length;t+=1)if(!Ur.call(r,n[t])||!D(e[n[t]],r[n[t]]))return!1;return!0}const U=u.forwardRef((e,r)=>{const{children:n,className:s,color:t,name:a,onChange:l,value:o,vertical:i,...v}=e,[c,f]=u.useState(o),C=u.useCallback((g,x,I)=>{const _=re(c)||[];x?_.push(g):Fr(_,A=>Hr(A,g)),f(_),l==null||l(_,I)},[l,f,c]);u.useEffect(()=>{f(o)},[o]);const p=y(`inline-flex ${i?"flex-col gap-y-2":""}`,s),m=u.useMemo(()=>({vertical:i,name:a,value:c,color:t,onChange:C}),[i,C,a,t,c]);return k.jsx(le,{value:m,children:k.jsx("div",{ref:r,className:p,...v,children:n})})});U.displayName="CheckboxGroup";const Tr=K;Tr.Group=U;export{Tr as C};
