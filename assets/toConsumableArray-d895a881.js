import{a as i}from"./objectWithoutPropertiesLoose-df62547b.js";import{aN as p,aO as b,aF as y}from"./index-5b083722.js";function m(t,o){if(t==null)return{};var a=i(t,o),r,e;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function l(t){if(Array.isArray(t))return p(t)}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t){return l(t)||b(t)||y(t)||s()}export{m as _,_ as a};
