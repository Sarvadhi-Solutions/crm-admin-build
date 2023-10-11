import{$ as z,r as M}from"./index-9bc8ff5f.js";function fe(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var ee;(function(e){e.event="event",e.props="prop"})(ee||(ee={}));function U(){}function Be(e){var r,t=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r&&n.length===r.length&&n.every(function(i,u){return i===r[u]})||(r=n,t=e.apply(void 0,n)),t}}function q(e){return!!(e||"").match(/\d/)}function H(e){return e==null}function Fe(e){return typeof e=="number"&&isNaN(e)}function ge(e){return H(e)||Fe(e)||typeof e=="number"&&!isFinite(e)}function me(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Re(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function _e(e,r,t){var n=Re(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function Te(e){var r=M.useRef(e);r.current=e;var t=M.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function le(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),i=a[0],u=a[1]||"";return{beforeDecimal:i,afterDecimal:u,hasNegation:t,addNegation:n}}function ke(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function he(e,r,t){for(var n="",a=t?"0":"",i=0;i<=r-1;i++)n+=e[i]||a;return n}function ce(e,r){return Array(r+1).join(e)}function Se(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return t+a;a=a.replace(".","");var u=1+i,c=a.length;return u<0?a="0."+ce("0",Math.abs(u))+a:u>=c?a=a+ce("0",u-c):a=(a.substring(0,u)||"0")+"."+a.substring(u),t+a}function se(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=le(e),i=a.beforeDecimal,u=a.afterDecimal,c=a.hasNegation,S=parseFloat("0."+(u||"0")),y=u.length<=r?"0."+u:S.toFixed(r),g=y.split("."),x=i.split("").reverse().reduce(function(b,V,s){return b.length>s?(Number(b[0])+Number(V)).toString()+b.substring(1,b.length):V+b},g[0]),v=he(g[1]||"",r,t),w=c?"-":"",f=n?".":"";return""+w+x+f+v}function Z(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var ye=Be(function(e,r){for(var t=0,n=0,a=e.length,i=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[i-1-n]&&i-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:i-n}}});function Pe(e,r,t){return Math.min(Math.max(e,r),t)}function ue(e){return Math.max(e.selectionStart,e.selectionEnd)}function je(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function xe(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function we(e,r){return e===void 0&&(e=" "),typeof e=="string"?e:e[r]||" "}function Me(e){var r=e.currentValue,t=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return r[n]===t[a]}function Le(e,r,t,n,a,i,u){u===void 0&&(u=Me);var c=a.findIndex(function(C){return C}),S=e.slice(0,c);!r&&!t.startsWith(S)&&(r=S,t=S+t,n=n+S.length);for(var y=t.length,g=e.length,x={},v=new Array(y),w=0;w<y;w++){v[w]=-1;for(var f=0,b=g;f<b;f++){var V=u({currentValue:t,lastValue:r,formattedValue:e,currentValueIndex:w,formattedValueIndex:f});if(V&&x[f]!==!0){v[w]=f,x[f]=!0;break}}}for(var s=n;s<y&&(v[s]===-1||!i(t[s]));)s++;var I=s===y||v[s]===-1?g:v[s];for(s=n-1;s>0&&v[s]===-1;)s--;var p=s===-1||v[s]===-1?0:v[s]+1;return p>I?I:n-p<I-n?p:I}function ae(e,r,t,n){var a=e.length;if(r=Pe(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function Ke(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=!!(q(e[t])||q(e[t-1]));return r}function Ve(e,r,t,n,a,i){i===void 0&&(i=U);var u=Te(function(f,b){var V,s;return ge(f)?(s="",V=""):typeof f=="number"||b?(s=typeof f=="number"?Se(f):f,V=n(s)):(s=a(f,void 0),V=n(s)),{formattedValue:V,numAsString:s}}),c=M.useState(function(){return u(H(e)?r:e,t)}),S=c[0],y=c[1],g=function(f,b){f.formattedValue!==S.formattedValue&&y({formattedValue:f.formattedValue,numAsString:f.value}),i(f,b)},x=e,v=t;H(e)&&(x=S.numAsString,v=!0);var w=u(x,v);return M.useMemo(function(){y(w)},[w.formattedValue]),[S,g]}function $e(e){return e.replace(/[^0-9]/g,"")}function Ue(e){return e}function be(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,u=e.format;u===void 0&&(u=Ue);var c=e.removeFormatting;c===void 0&&(c=$e);var S=e.defaultValue,y=e.valueIsNumericString,g=e.onValueChange,x=e.isAllowed,v=e.onChange;v===void 0&&(v=U);var w=e.onKeyDown;w===void 0&&(w=U);var f=e.onMouseUp;f===void 0&&(f=U);var b=e.onFocus;b===void 0&&(b=U);var V=e.onBlur;V===void 0&&(V=U);var s=e.value,I=e.getCaretBoundary;I===void 0&&(I=Ke);var p=e.isValidInputCharacter;p===void 0&&(p=q);var C=e.isCharacterSame,T=fe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),K=Ve(s,S,!!y,u,c,g),$=K[0],N=$.formattedValue,j=$.numAsString,W=K[1],L=M.useRef({formattedValue:N,numAsString:j}),J=function(o,l){L.current={formattedValue:o.formattedValue,numAsString:o.value},W(o,l)},G=M.useState(!1),Q=G[0],X=G[1],d=M.useRef(null),m=M.useRef({setCaretTimeout:null,focusTimeout:null});M.useEffect(function(){return X(!0),function(){clearTimeout(m.current.setCaretTimeout),clearTimeout(m.current.focusTimeout)}},[]);var _=u,A=function(o,l){var h=parseFloat(l);return{formattedValue:o,value:l,floatValue:isNaN(h)?void 0:h}},E=function(o,l,h){o.selectionStart===0&&o.selectionEnd===o.value.length||(Z(o,l),m.current.setCaretTimeout=setTimeout(function(){o.value===h&&o.selectionStart!==o.selectionEnd&&Z(o,l)},0))},F=function(o,l,h){return ae(o,l,I(o),h)},P=function(o,l,h){var O=I(l),B=Le(l,N,o,h,O,p,C);return B=ae(l,B,O),B},re=function(o){var l=o.formattedValue;l===void 0&&(l="");var h=o.input,O=o.setCaretPosition;O===void 0&&(O=!0);var B=o.source,D=o.event,R=o.numAsString,k=o.caretPos;if(h){if(k===void 0&&O){var Y=o.inputValue||h.value,oe=ue(h);h.value=l,k=P(Y,l,oe)}h.value=l,O&&k!==void 0&&E(h,k,l)}l!==N&&J(A(l,R),{event:D,source:B})};M.useEffect(function(){var o=L.current,l=o.formattedValue,h=o.numAsString;N!==l&&(N!==j||l!==h)&&J(A(N,j),{event:void 0,source:ee.props})},[N,j]);var ie=d.current?ue(d.current):void 0,te=typeof window<"u"?M.useLayoutEffect:M.useEffect;te(function(){var o=d.current;if(N!==L.current.formattedValue&&o){var l=P(L.current.formattedValue,N,ie);o.value=N,E(o,l,N)}},[N]);var Ne=function(o,l,h){var O=ye(N,o),B=Object.assign(Object.assign({},O),{lastValue:N}),D=c(o,B),R=_(D);if(D=c(R,void 0),x&&!x(A(R,D))){var k=l.target,Y=ue(k),oe=P(o,N,Y);return k.value=N,E(k,oe,N),!1}return re({formattedValue:R,numAsString:D,inputValue:o,event:l,source:h,setCaretPosition:!0,input:l.target}),!0},pe=function(o){var l=o.target,h=l.value,O=Ne(h,o,ee.event);O&&v(o)},Ce=function(o){var l=o.target,h=o.key,O=l.selectionStart,B=l.selectionEnd,D=l.value;D===void 0&&(D="");var R;if(h==="ArrowLeft"||h==="Backspace"?R=Math.max(O-1,0):h==="ArrowRight"?R=Math.min(O+1,D.length):h==="Delete"&&(R=O),R===void 0||O!==B){w(o);return}var k=R;if(h==="ArrowLeft"||h==="ArrowRight"){var Y=h==="ArrowLeft"?"left":"right";k=F(D,R,Y),k!==R&&o.preventDefault()}else h==="Delete"&&!p(D[R])?k=F(D,R,"right"):h==="Backspace"&&!p(D[R])&&(k=F(D,R,"left"));k!==R&&E(l,k,D),o.isUnitTestRun&&E(l,k,D),w(o)},De=function(o){var l=o.target,h=l.selectionStart,O=l.selectionEnd,B=l.value;if(B===void 0&&(B=""),h===O){var D=F(B,h);D!==h&&E(l,D,B)}f(o)},Ie=function(o){o.persist&&o.persist();var l=o.target;d.current=l,m.current.focusTimeout=setTimeout(function(){var h=l.selectionStart,O=l.selectionEnd,B=l.value;B===void 0&&(B="");var D=F(B,h);D!==h&&!(h===0&&O===B.length)&&E(l,D,B),b(o)},0)},Ae=function(o){d.current=null,clearTimeout(m.current.focusTimeout),clearTimeout(m.current.setCaretTimeout),V(o)},Ee=Q&&je()?"numeric":void 0,ve=Object.assign({inputMode:Ee},T,{type:r,value:N,onChange:pe,onKeyDown:Ce,onMouseUp:De,onFocus:Ie,onBlur:Ae});if(t==="text")return a?z.createElement(z.Fragment,null,a(N,T)||null):z.createElement("span",Object.assign({},T,{ref:i}),N);if(n){var Oe=n;return z.createElement(Oe,Object.assign({},ve,{ref:i}))}return z.createElement("input",Object.assign({},ve,{ref:i}))}function de(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var i=r.suffix;i===void 0&&(i="");var u=r.allowNegative,c=r.thousandsGroupStyle;if(c===void 0&&(c="thousand"),e===""||e==="-")return e;var S=ne(r),y=S.thousandSeparator,g=S.decimalSeparator,x=t!==0&&e.indexOf(".")!==-1||t&&n,v=le(e,u),w=v.beforeDecimal,f=v.afterDecimal,b=v.addNegation;return t!==void 0&&(f=he(f,t,!!n)),y&&(w=_e(w,y,c)),a&&(w=a+w),i&&(f=f+i),b&&(w="-"+w),e=w+(x&&g||"")+f,e}function ne(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function We(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&r&&(e="-"+e),e}function Ge(e,r){return new RegExp("(^-)|[0-9]|"+me(e),r?"g":void 0)}function Ze(e,r,t){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function ze(e,r,t){var n;r===void 0&&(r=xe(e));var a=t.allowNegative,i=t.prefix;i===void 0&&(i="");var u=t.suffix;u===void 0&&(u="");var c=t.decimalScale,S=r.from,y=r.to,g=y.start,x=y.end,v=ne(t),w=v.allowedDecimalSeparators,f=v.decimalSeparator,b=e[x]===f;if(q(e)&&(e===i||e===u)&&r.lastValue==="")return e;if(x-g===1&&w.indexOf(e[g])!==-1){var V=c===0?"":f;e=e.substring(0,g)+V+e.substring(g+1,e.length)}var s=function(m,_,A){var E=!1,F=!1;i.startsWith("-")?E=!1:m.startsWith("--")?(E=!1,F=!0):u.startsWith("-")&&m.length===u.length?E=!1:m[0]==="-"&&(E=!0);var P=E?1:0;return F&&(P=2),P&&(m=m.substring(P),_-=P,A-=P),{value:m,start:_,end:A,hasNegation:E}},I=s(e,g,x),p=I.hasNegation;n=I,e=n.value,g=n.start,x=n.end;var C=s(r.lastValue,S.start,S.end),T=C.start,K=C.end,$=C.value,N=e.substring(g,x);e.length&&$.length&&(T>$.length-u.length||K<i.length)&&!(N&&u.startsWith(N))&&(e=$);var j=0;e.startsWith(i)?j+=i.length:g<i.length&&(j=g),e=e.substring(j),x-=j;var W=e.length,L=e.length-u.length;e.endsWith(u)?W=L:(x>L||x>e.length-u.length)&&(W=x),e=e.substring(0,W),e=We(p?"-"+e:e,a),e=(e.match(Ge(f,!0))||[]).join("");var J=e.indexOf(f);e=e.replace(new RegExp(me(f),"g"),function(m,_){return _===J?".":""});var G=le(e,a),Q=G.beforeDecimal,X=G.afterDecimal,d=G.addNegation;return y.end-y.start<S.end-S.start&&Q===""&&b&&!parseFloat(X)&&(e=d?"-":""),e}function He(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,t.length+(i?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}function qe(e){var r=ne(e),t=r.thousandSeparator,n=r.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function Je(e){e=qe(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,t=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=U);var i=e.onBlur;i===void 0&&(i=U);var u=e.thousandSeparator,c=e.decimalScale,S=e.fixedDecimalScale,y=e.prefix;y===void 0&&(y="");var g=e.defaultValue,x=e.value,v=e.valueIsNumericString,w=e.onValueChange,f=fe(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),b=ne(e),V=b.decimalSeparator,s=b.allowedDecimalSeparators,I=function(d){return de(d,e)},p=function(d,m){return ze(d,m,e)},C=H(x)?g:x,T=v??Ze(C,y,r);H(x)?H(g)||(T=T||typeof g=="number"):T=T||typeof x=="number";var K=function(d){return ge(d)?d:(typeof d=="number"&&(d=Se(d)),T&&typeof c=="number"?se(d,c,!!S):d)},$=Ve(K(x),K(g),!!T,I,p,w),N=$[0],j=N.numAsString,W=N.formattedValue,L=$[1],J=function(d){var m=d.target,_=d.key,A=m.selectionStart,E=m.selectionEnd,F=m.value;if(F===void 0&&(F=""),A!==E){a(d);return}_==="Backspace"&&F[0]==="-"&&A===y.length+1&&t&&Z(m,1),c&&S&&(_==="Backspace"&&F[A-1]===V?(Z(m,A-1),d.preventDefault()):_==="Delete"&&F[A]===V&&d.preventDefault()),s!=null&&s.includes(_)&&F[A]===V&&Z(m,A+1);var P=u===!0?",":u;_==="Backspace"&&F[A-1]===P&&Z(m,A-1),_==="Delete"&&F[A]===P&&Z(m,A+1),a(d)},G=function(d){var m=j;if(m.match(/\d/g)||(m=""),n||(m=ke(m)),S&&c&&(m=se(m,c,S)),m!==j){var _=de(m,e);L({formattedValue:_,value:m,floatValue:parseFloat(m)},{event:d,source:ee.event})}i(d)},Q=function(d){return d===V?!0:q(d)},X=function(d){var m=d.currentValue,_=d.lastValue,A=d.formattedValue,E=d.currentValueIndex,F=d.formattedValueIndex,P=m[E],re=A[F],ie=ye(_,m),te=ie.to;return E>=te.start&&E<te.end&&s&&s.includes(P)&&re===V?!0:P===re};return Object.assign(Object.assign({},f),{value:W,valueIsNumericString:!1,isValidInputCharacter:Q,isCharacterSame:X,onValueChange:L,format:I,removeFormatting:p,getCaretBoundary:function(d){return He(d,e)},onKeyDown:J,onBlur:G})}function nr(e){var r=Je(e);return z.createElement(be,Object.assign({},r))}function Qe(e,r){var t=r.format,n=r.allowEmptyFormatting,a=r.mask,i=r.patternChar;if(i===void 0&&(i="#"),e===""&&!n)return"";for(var u=0,c=t.split(""),S=0,y=t.length;S<y;S++)t[S]===i&&(c[S]=e[u]||we(a,u),u+=1);return c.join("")}function Xe(e,r,t){r===void 0&&(r=xe(e));var n=t.format,a=t.patternChar;a===void 0&&(a="#");var i=r.from,u=r.to,c=r.lastValue;c===void 0&&(c="");var S=function(V){return n[V]===a},y=function(V,s){for(var I="",p=0;p<V.length;p++)S(s+p)&&q(V[p])&&(I+=V[p]);return I},g=function(V){return V.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return g(e);if(c===""&&e.length===n.length){for(var x="",v=0;v<e.length;v++)if(S(v))q(e[v])&&(x+=e[v]);else if(e[v]!==n[v])return g(e);return x}var w=c.substring(0,i.start),f=e.substring(u.start,u.end),b=c.substring(i.end);return""+y(w,0)+g(f)+y(b,i.end)}function Ye(e,r){var t=r.format,n=r.mask,a=r.patternChar;a===void 0&&(a="#");var i=Array.from({length:e.length+1}).map(function(){return!0}),u=0,c=-1,S={};t.split("").forEach(function(v,w){var f=void 0;v===a&&(u++,f=we(n,u-1),c===-1&&e[w]===f&&(c=w)),S[w]=f});for(var y=function(v){return t[v]===a&&e[v]!==S[v]},g=0,x=i.length;g<x;g++)i[g]=g===c||y(g)||y(g-1);return i[t.indexOf(a)]=!0,i}function er(e){var r=e.mask;if(r){var t=r==="string"?r:r.toString();if(t.match(/\d/g))throw new Error("Mask "+r+" should not contain numeric character;")}}function rr(e,r){return e===""?!0:!(r!=null&&r.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function tr(e){e.mask,e.allowEmptyFormatting;var r=e.format,t=e.inputMode;t===void 0&&(t="numeric");var n=e.onKeyDown;n===void 0&&(n=U);var a=e.patternChar;a===void 0&&(a="#");var i=e.value,u=e.defaultValue,c=e.valueIsNumericString,S=fe(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);er(e);var y=function(f){return Ye(f,e)},g=function(f){var b=f.key,V=f.target,s=V.selectionStart,I=V.selectionEnd,p=V.value;if(s!==I){n(f);return}var C=s;if(b==="Backspace"||b==="Delete"){var T="right";if(b==="Backspace"){for(;C>0&&r[C-1]!==a;)C--;T="left"}else{for(var K=r.length;C<K&&r[C]!==a;)C++;T="right"}C=ae(p,C,y(p),T)}else r[C]!==a&&b!=="ArrowLeft"&&b!=="ArrowRight"&&(C=ae(p,C+1,y(p),"right"));C!==s&&Z(V,C),n(f)},x=H(i)?u:i,v=c??rr(x,r),w=Object.assign(Object.assign({},e),{valueIsNumericString:v});return Object.assign(Object.assign({},S),{value:i,defaultValue:u,valueIsNumericString:v,inputMode:t,format:function(f){return Qe(f,w)},removeFormatting:function(f,b){return Xe(f,b,w)},getCaretBoundary:y,onKeyDown:g})}function ir(e){var r=tr(e);return z.createElement(be,Object.assign({},r))}export{nr as N,ir as P,be as a};
