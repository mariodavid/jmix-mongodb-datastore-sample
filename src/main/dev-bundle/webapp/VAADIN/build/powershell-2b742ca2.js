function l(e,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const p=Object.getOwnPropertyDescriptor(t,o);p&&Object.defineProperty(e,o,p.get?p:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},c={get exports(){return n},set exports(e){n=e}};(function(e,s){(function(){ace.require(["ace/snippets/powershell"],function(r){e&&(e.exports=r)})})()})(c);const f=n,i=l({__proto__:null,default:f},[n]);export{i as p};