import{m as Q}from"./index-a75c2214.js";import{k as U,b as X,c as F,d as Z,s as k,e as z,f as ee,_ as re,g as te}from"./_Uint8Array-d074a65a.js";import{n as ne,c as A,s as M,t as ae,b as oe,j as se,v as T,a as K,x as D,y as N,z as ie,k as ce}from"./Views-10f1927c.js";import{e as fe}from"./_MapCache-876ac592.js";import{_ as G}from"./_getPrototype-42ea40f8.js";function le(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}var ye=le,ue=ne,be=function(){try{var e=ue(Object,"defineProperty");return e({},"",{}),e}catch{}}(),ge=be,I=ge;function pe(e,r,t){r=="__proto__"&&I?I(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var V=pe,ve=V,$e=fe,_e=Object.prototype,Ae=_e.hasOwnProperty;function Te(e,r,t){var a=e[r];(!(Ae.call(e,r)&&$e(a,t))||t===void 0&&!(r in e))&&ve(e,r,t)}var R=Te,je=R,de=V;function Oe(e,r,t,a){var f=!t;t||(t={});for(var i=-1,o=r.length;++i<o;){var s=r[i],c=a?a(t[s],e[s],s,t,e):void 0;c===void 0&&(c=e[s]),f?de(t,s,c):je(t,s,c)}return t}var _=Oe,Se=_,Ie=U;function me(e,r){return e&&Se(r,Ie(r),e)}var he=me;function we(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ce=we,Ee=A,Pe=M,xe=Ce,Be=Object.prototype,Le=Be.hasOwnProperty;function Ue(e){if(!Ee(e))return xe(e);var r=Pe(e),t=[];for(var a in e)a=="constructor"&&(r||!Le.call(e,a))||t.push(a);return t}var Fe=Ue,Me=X,Ke=Fe,De=ae;function Ne(e){return De(e)?Me(e,!0):Ke(e)}var j=Ne,Ge=_,Ve=j;function Re(e,r){return e&&Ge(r,Ve(r),e)}var qe=Re,$={exports:{}};$.exports;(function(e,r){var t=oe,a=r&&!r.nodeType&&r,f=a&&!0&&e&&!e.nodeType&&e,i=f&&f.exports===a,o=i?t.Buffer:void 0,s=o?o.allocUnsafe:void 0;function c(b,p){if(p)return b.slice();var l=b.length,g=s?s(l):new b.constructor(l);return b.copy(g),g}e.exports=c})($,$.exports);var Ye=$.exports;function We(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var He=We,Je=_,Qe=F;function Xe(e,r){return Je(e,Qe(e),r)}var Ze=Xe,ke=Z,ze=G,er=F,rr=k,tr=Object.getOwnPropertySymbols,nr=tr?function(e){for(var r=[];e;)ke(r,er(e)),e=ze(e);return r}:rr,q=nr,ar=_,or=q;function sr(e,r){return ar(e,or(e),r)}var ir=sr,cr=z,fr=q,lr=j;function yr(e){return cr(e,lr,fr)}var ur=yr,br=Object.prototype,gr=br.hasOwnProperty;function pr(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&gr.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var vr=pr,m=ee;function $r(e){var r=new e.constructor(e.byteLength);return new m(r).set(new m(e)),r}var d=$r,_r=d;function Ar(e,r){var t=r?_r(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Tr=Ar,jr=/\w*$/;function dr(e){var r=new e.constructor(e.source,jr.exec(e));return r.lastIndex=e.lastIndex,r}var Or=dr,h=se,w=h?h.prototype:void 0,C=w?w.valueOf:void 0;function Sr(e){return C?Object(C.call(e)):{}}var Ir=Sr,mr=d;function hr(e,r){var t=r?mr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var wr=hr,Cr=d,Er=Tr,Pr=Or,xr=Ir,Br=wr,Lr="[object Boolean]",Ur="[object Date]",Fr="[object Map]",Mr="[object Number]",Kr="[object RegExp]",Dr="[object Set]",Nr="[object String]",Gr="[object Symbol]",Vr="[object ArrayBuffer]",Rr="[object DataView]",qr="[object Float32Array]",Yr="[object Float64Array]",Wr="[object Int8Array]",Hr="[object Int16Array]",Jr="[object Int32Array]",Qr="[object Uint8Array]",Xr="[object Uint8ClampedArray]",Zr="[object Uint16Array]",kr="[object Uint32Array]";function zr(e,r,t){var a=e.constructor;switch(r){case Vr:return Cr(e);case Lr:case Ur:return new a(+e);case Rr:return Er(e,t);case qr:case Yr:case Wr:case Hr:case Jr:case Qr:case Xr:case Zr:case kr:return Br(e,t);case Fr:return new a;case Mr:case Nr:return new a(e);case Kr:return Pr(e);case Dr:return new a;case Gr:return xr(e)}}var et=zr,rt=A,E=Object.create,tt=function(){function e(){}return function(r){if(!rt(r))return{};if(E)return E(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),nt=tt,at=nt,ot=G,st=M;function it(e){return typeof e.constructor=="function"&&!st(e)?at(ot(e)):{}}var ct=it,ft=T,lt=K,yt="[object Map]";function ut(e){return lt(e)&&ft(e)==yt}var bt=ut,gt=bt,pt=N,P=D,x=P&&P.isMap,vt=x?pt(x):gt,$t=vt,_t=T,At=K,Tt="[object Set]";function jt(e){return At(e)&&_t(e)==Tt}var dt=jt,Ot=dt,St=N,B=D,L=B&&B.isSet,It=L?St(L):Ot,mt=It,ht=re,wt=ye,Ct=R,Et=he,Pt=qe,xt=Ye,Bt=He,Lt=Ze,Ut=ir,Ft=te,Mt=ur,Kt=T,Dt=vr,Nt=et,Gt=ct,Vt=ce,Rt=ie,qt=$t,Yt=A,Wt=mt,Ht=U,Jt=j,Qt=1,Xt=2,Zt=4,Y="[object Arguments]",kt="[object Array]",zt="[object Boolean]",en="[object Date]",rn="[object Error]",W="[object Function]",tn="[object GeneratorFunction]",nn="[object Map]",an="[object Number]",H="[object Object]",on="[object RegExp]",sn="[object Set]",cn="[object String]",fn="[object Symbol]",ln="[object WeakMap]",yn="[object ArrayBuffer]",un="[object DataView]",bn="[object Float32Array]",gn="[object Float64Array]",pn="[object Int8Array]",vn="[object Int16Array]",$n="[object Int32Array]",_n="[object Uint8Array]",An="[object Uint8ClampedArray]",Tn="[object Uint16Array]",jn="[object Uint32Array]",n={};n[Y]=n[kt]=n[yn]=n[un]=n[zt]=n[en]=n[bn]=n[gn]=n[pn]=n[vn]=n[$n]=n[nn]=n[an]=n[H]=n[on]=n[sn]=n[cn]=n[fn]=n[_n]=n[An]=n[Tn]=n[jn]=!0;n[rn]=n[W]=n[ln]=!1;function v(e,r,t,a,f,i){var o,s=r&Qt,c=r&Xt,b=r&Zt;if(t&&(o=f?t(e,a,f,i):t(e)),o!==void 0)return o;if(!Yt(e))return e;var p=Vt(e);if(p){if(o=Dt(e),!s)return Bt(e,o)}else{var l=Kt(e),g=l==W||l==tn;if(Rt(e))return xt(e,s);if(l==H||l==Y||g&&!f){if(o=c||g?{}:Gt(e),!s)return c?Ut(e,Pt(o,e)):Lt(e,Et(o,e))}else{if(!n[l])return f?e:{};o=Nt(e,l,s)}}i||(i=new ht);var O=i.get(e);if(O)return O;i.set(e,o),Wt(e)?e.forEach(function(y){o.add(v(y,r,t,y,e,i))}):qt(e)&&e.forEach(function(y,u){o.set(u,v(y,r,t,u,e,i))});var J=b?c?Mt:Ft:c?Jt:Ht,S=p?void 0:J(e);return wt(S||e,function(y,u){S&&(u=y,y=e[u]),Ct(o,u,v(y,r,t,u,e,i))}),o}var dn=v,On=dn,Sn=1,In=4;function mn(e){return On(e,Sn|In)}var hn=mn;const Bn=Q(hn);export{Bn as c};
