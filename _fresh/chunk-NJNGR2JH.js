import{d as m}from"./chunk-J5P25FDZ.js";import{a as w,b as O,e as j,h as R}from"./chunk-BSG23BUC.js";var T=Symbol.for("preact-signals");function x(){if(h>1)h--;else{for(var t,i=!1;p!==void 0;){var n=p;for(p=void 0,$++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&A(n))try{n.c()}catch(u){i||(t=u,i=!0)}n=r}}if($=0,h--,i)throw t}}var f=void 0;var p=void 0,h=0,$=0,S=0;function P(t){if(f!==void 0){var i=t.n;if(i===void 0||i.t!==f)return i={i:0,S:t,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:i},f.s!==void 0&&(f.s.n=i),f.s=i,t.n=i,32&f.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=f.s,i.n=void 0,f.s.n=i,f.s=i),i}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=T;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};s.prototype.subscribe=function(t){var i=this;return _(function(){var n=i.value,r=f;f=void 0;try{t(n)}finally{f=r}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){var t=f;f=void 0;try{return this.value}finally{f=t}};Object.defineProperty(s.prototype,"value",{get:function(){var t=P(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if($>100)throw new Error("Cycle detected");this.v=t,this.i++,S++,h++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{x()}}}});function b(t){return new s(t)}function A(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function V(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function G(t){for(var i=t.s,n=void 0;i!==void 0;){var r=i.p;i.i===-1?(i.S.U(i),r!==void 0&&(r.n=i.n),i.n!==void 0&&(i.n.p=r)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=r}t.s=n}function c(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=S-1,this.f=4}(c.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===S))return!0;if(this.g=S,this.f|=1,this.i>0&&!A(this))return this.f&=-2,!0;var t=f;try{V(this),f=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return f=t,G(this),this.f&=-2,!0};c.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}s.prototype.S.call(this,t)};c.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(c.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=P(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function U(t){return new c(t)}function J(t){var i=t.u;if(t.u=void 0,typeof i=="function"){h++;var n=f;f=void 0;try{i()}catch(r){throw t.f&=-2,t.f|=8,E(t),r}finally{f=n,x()}}}function E(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,J(t)}function q(t){if(f!==this)throw new Error("Out-of-order effect");G(this),f=t,this.f&=-2,8&this.f&&E(this),x()}function l(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}l.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};l.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,J(this),V(this),h++;var t=f;return f=this,q.bind(this,t)};l.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};l.prototype.d=function(){this.f|=8,1&this.f||E(this)};function _(t){var i=new l(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}R();var C,k;function d(t,i){w[t]=i.bind(null,w[t]||function(){})}function g(t){k&&k(),k=t&&t.S()}function M(t){var i=this,n=t.data,r=B(n);r.value=n;var u=m(function(){for(var o=i.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return i.__$u.c=function(){var e,v=i.__$u.S(),a=u.value;v(),O(a)||((e=i.base)==null?void 0:e.nodeType)!==3?(i.__$f|=1,i.setState({})):i.base.data=a},U(function(){var e=r.value.value;return e===0?0:e===!0?"":e||""})},[]);return u.value}M.displayName="_st";Object.defineProperties(s.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:M},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});d("__b",function(t,i){if(typeof i.type=="string"){var n,r=i.props;for(var u in r)if(u!=="children"){var o=r[u];o instanceof s&&(n||(i.__np=n={}),n[u]=o,r[u]=o.peek())}}t(i)});d("__r",function(t,i){g();var n,r=i.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(u){var o;return _(function(){o=this}),o.c=function(){r.__$f|=1,r.setState({})},o}())),C=r,g(n),t(i)});d("__e",function(t,i,n,r){g(),C=void 0,t(i,n,r)});d("diffed",function(t,i){g(),C=void 0;var n;if(typeof i.type=="string"&&(n=i.__e)){var r=i.__np,u=i.props;if(r){var o=n.U;if(o)for(var e in o){var v=o[e];v!==void 0&&!(e in r)&&(v.d(),o[e]=void 0)}else n.U=o={};for(var a in r){var y=o[a],N=r[a];y===void 0?(y=z(n,a,N,u),o[a]=y):y.o(N,u)}}}t(i)});function z(t,i,n,r){var u=i in t&&t.ownerSVGElement===void 0,o=b(n);return{o:function(e,v){o.value=e,r=v},d:_(function(){var e=o.value.value;r[i]!==e&&(r[i]=e,u?t[i]=e:e?t.setAttribute(i,e):t.removeAttribute(i))})}}d("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var u in r){var o=r[u];o&&o.d()}}}}else{var e=i.__c;if(e){var v=e.__$u;v&&(e.__$u=void 0,v.d())}}t(i)});d("__h",function(t,i,n,r){(r<3||r===9)&&(i.__$f|=2),t(i,n,r)});j.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u,r=n&&n.s!==void 0;for(var u in i)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(r||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var e in this.props)if(!(e in t))return!0;return!1};function B(t){return m(function(){return b(t)},[])}export{b as a,B as b};
