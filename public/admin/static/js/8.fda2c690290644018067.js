webpackJsonp([8],{"1H6C":function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("HhN8"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},"59kE":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h2",[t._v("添加管理员")]),t._v(" "),r("div",{staticClass:"box"},[r("el-form",{ref:"form",staticClass:"form",attrs:{model:t.info,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名字",prop:"name"}},[r("el-input",{attrs:{type:"text"},model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:t.info.pwd,callback:function(e){t.$set(t.info,"pwd",e)},expression:"info.pwd"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"权限",prop:"roles"}},[r("el-select",{staticClass:"block",attrs:{multiple:"",placeholder:"请选择"},model:{value:t.info.roles,callback:function(e){t.$set(t.info,"roles",e)},expression:"info.roles"}},t._l(t.roles,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submitForm("form")}}},[t._v("立即创建")])],1)],1)],1)])},o=[],i={render:n,staticRenderFns:o};e.a=i},"8Ccc":function(t,e,r){"use strict";function n(t){r("K2PX")}Object.defineProperty(e,"__esModule",{value:!0});var o=r("kR/3"),i=r.n(o);for(var a in o)"default"!==a&&function(t){r.d(e,t,function(){return o[t]})}(a);var u=r("59kE"),c=r("VU/8"),l=n,s=c(i.a,u.a,!1,l,"data-v-995ca76c",null);e.default=s.exports},HhN8:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new p(n||[]);return a._invoke=l(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&g.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function l(t,e,r){var o=E;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===F){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=s(u,r);if(c){if(c===N)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===E)throw o=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=j;var l=n(t,e,r);if("normal"===l.type){if(o=r.done?F:O,l.arg===N)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=F,r.method="throw",r.arg=l.arg)}}}function s(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,s(t,e),"throw"===e.method))return N;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,N;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,N):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,N)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,y=Object.prototype,g=y.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},w=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",_=x.toStringTag||"@@toStringTag",L="object"==typeof t,k=e.regeneratorRuntime;if(k)return void(L&&(t.exports=k));k=e.regeneratorRuntime=L?t.exports:{},k.wrap=r;var E="suspendedStart",O="suspendedYield",j="executing",F="completed",N={},P={};P[w]=function(){return this};var R=Object.getPrototypeOf,G=R&&R(R(d([])));G&&G!==y&&g.call(G,w)&&(P=G);var C=a.prototype=o.prototype=Object.create(P);i.prototype=C.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(C),t},k.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[b]=function(){return this},k.AsyncIterator=c,k.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return k.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(C),C[_]="Generator",C[w]=function(){return this},C.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),N},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),N}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),N}}}(function(){return this}()||Function("return this")())},K2PX:function(t,e,r){var n=r("bCe1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("4ffab145",n,!0,{})},Xxa5:function(t,e,r){t.exports=r("1H6C")},bCe1:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"article[data-v-995ca76c]{text-align:center;padding:0 100px}article h2[data-v-995ca76c]{text-align:center;line-height:80px;color:#666}article .box[data-v-995ca76c]{width:500px;text-align:left}article .block[data-v-995ca76c]{width:100%;display:block}article .left-item[data-v-995ca76c]{text-align:left}article .submit[data-v-995ca76c]{width:100px}",""])},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n=r("//Fk"),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var u=e[i](a),c=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},"kR/3":function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r("Xxa5"),i=n(o),a=r("exGp"),u=n(a);r("NYxO");e.default={data:function(){return{info:{name:"",username:"",pwd:"",avatar:"",roles:["default"]},roles:[{label:"超级管理员",value:"admin"},{label:"普通管理员",value:"default"}],loading:!1,rules:{name:[{required:!0,message:"请填写名字",trigger:"blur"}],username:[{required:!0,message:"请填写用户名",trigger:"blur"}],pwd:[{required:!0,message:"请填写密码",trigger:"blur"}],roles:[{required:!0,message:"请选择权限",trigger:"change",type:"array"}]}}},methods:{submitForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(){var t=(0,u.default)(i.default.mark(function t(r){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return t.prev=1,t.next=4,e.$store.dispatch("addUser",e.info);case 4:e.loading=!1,e.$router.push("/permission/list"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.loading=!1;case 11:t.next=16;break;case 13:return console.log("error submit!!"),e.loading=!1,t.abrupt("return",!1);case 16:case"end":return t.stop()}},t,e,[[1,8]])}));return function(e){return t.apply(this,arguments)}}())}}}}});