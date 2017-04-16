/**
* jQuery asPieProgress v0.4.6
* https://github.com/amazingSurge/jquery-asPieProgress
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/

!function(t,e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("undefined"!=typeof exports)e(require("jquery"));else{var i={exports:{}};e(t.jQuery),t.jqueryAsPieProgressEs=i.exports}}(this,function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=e(t),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);if(!e)return i;for(var n in e)Object.hasOwnProperty.call(e,n)&&i.setAttribute(n,e[n]);return i};Date.now||(Date.now=function(){return(new Date).getTime()});for(var o=["webkit","moz"],u=0;u<o.length&&!window.requestAnimationFrame;++u){var h=o[u];window.requestAnimationFrame=window[h+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]}!/iP(ad|hone|od).*OS (6|7|8)/.test(window.navigator.userAgent)&&window.requestAnimationFrame&&window.cancelAnimationFrame||!function(){var t=0;window.requestAnimationFrame=function(e){var i=l(),n=Math.max(t+16,i);return setTimeout(function(){e(t=n)},n-i)},window.cancelAnimationFrame=clearTimeout}();var l=function(){return"undefined"!=typeof window.performance&&window.performance.now?window.performance.now():Date.now()},f=function(t){return"string"==typeof t&&t.indexOf("%")!==-1},c="createElementNS"in document&&new a("svg",{}).createSVGRect,m=function(t,e,i,n){var s=function(t,e){return 1-3*e+3*t},r=function(t,e){return 3*e-6*t},a=function(t){return 3*t},o=function(t,e,i){return((s(e,i)*t+r(e,i))*t+a(e))*t},u=function(t,e,i){return 3*s(e,i)*t*t+2*r(e,i)*t+a(e)},h=function(e){for(var n=e,s=0;s<4;++s){var r=u(n,t,i);if(0===r)return n;var a=o(n,t,i)-e;n-=a/r}return n};return t===e&&i===n?{css:"linear",fn:function(t){return t}}:{css:"cubic-bezier("+t+","+e+","+i+","+n+")",fn:function(t){return o(h(t),e,n)}}},d={ease:m(.25,.1,.25,1),linear:m(0,0,1,1),"ease-in":m(.42,0,1,1),"ease-out":m(0,0,.58,1),"ease-in-out":m(.42,0,.58,1)},p={namespace:"asPieProgress",classes:{svg:"pie_progress__svg",element:"pie_progress",number:"pie_progress__number",content:"pie_progress__content"},min:0,max:100,goal:100,size:160,speed:15,barcolor:"#ef1e25",barsize:"4",trackcolor:"#f2f2f2",fillcolor:"none",easing:"ease",numberCallback:function(t){var e=Math.round(this.getPercentage(t));return e+"%"},contentCallback:null},g="asPieProgress",v=function(){function t(e,s){i(this,t),this.element=e,this.$element=(0,n.default)(e),this.options=n.default.extend(!0,{},p,s,this.$element.data()),this.namespace=this.options.namespace,this.classes=this.options.classes,this.easing=d[this.options.easing]||d.ease,this.$element.addClass(this.classes.element),this.min=this.$element.attr("aria-valuemin"),this.max=this.$element.attr("aria-valuemax"),this.min=this.min?parseInt(this.min,10):this.options.min,this.max=this.max?parseInt(this.max,10):this.options.max,this.first=this.$element.attr("aria-valuenow"),this.first=this.first?parseInt(this.first,10):this.options.first?this.options.first:this.min,this.now=this.first,this.goal=this.options.goal,this._frameId=null,this.initialized=!1,this._trigger("init"),this.init()}return r(t,[{key:"init",value:function(){this.$number=this.$element.find("."+this.classes.number),this.$content=this.$element.find("."+this.classes.content),this.size=this.options.size,this.width=this.size,this.height=this.size,this.prepare(),this.initialized=!0,this._trigger("ready")}},{key:"prepare",value:function(){c&&(this.svg=new a("svg",{version:"1.1",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 "+this.width+" "+this.height}),this.buildTrack(),this.buildBar(),(0,n.default)('<div class="'+this.classes.svg+'"></div>').append(this.svg).appendTo(this.$element))}},{key:"buildTrack",value:function(){var t=this.size,e=this.size,i=e/2,n=t/2,s=this.options.barsize,r=new a("ellipse",{rx:i-s/2,ry:n-s/2,cx:i,cy:n,stroke:this.options.trackcolor,fill:this.options.fillcolor,"stroke-width":s});this.svg.appendChild(r)}},{key:"buildBar",value:function(){if(c){var t=new a("path",{fill:"none","stroke-width":this.options.barsize,stroke:this.options.barcolor});this.bar=t,this.svg.appendChild(t),this._drawBar(this.first),this._updateBar()}}},{key:"_drawBar",value:function(t){if(c){this.barGoal=t;var e=this.size,i=this.size,n=i/2,s=e/2,r=0,a=this.options.barsize,o=Math.min(n,s)-a/2;this.r=o;var u=this.getPercentage(t);100===u&&(u-=1e-4);var h=r+u*Math.PI*2/100,l=n+o*Math.sin(r),f=n+o*Math.sin(h),m=s-o*Math.cos(r),d=s-o*Math.cos(h),p=0;h-r>Math.PI&&(p=1);var g="M"+l+","+m+" A"+o+","+o+" 0 "+p+" 1 "+f+","+d;this.bar.setAttribute("d",g)}}},{key:"_updateBar",value:function(){if(c){var t=this.getPercentage(this.now),e=this.bar.getTotalLength(),i=e*(1-t/this.getPercentage(this.barGoal));this.bar.style.strokeDasharray=e+" "+e,this.bar.style.strokeDashoffset=i}}},{key:"_trigger",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var s=[this].concat(i);this.$element.trigger(g+"::"+t,s),t=t.replace(/\b\w+\b/g,function(t){return t.substring(0,1).toUpperCase()+t.substring(1)});var r="on"+t;"function"==typeof this.options[r]&&this.options[r].apply(this,i)}},{key:"getPercentage",value:function(t){return 100*(t-this.min)/(this.max-this.min)}},{key:"go",value:function(t){var e=this;this._clear(),f(t)&&(t=parseInt(t.replace("%",""),10),t=Math.round(this.min+t/100*(this.max-this.min))),"undefined"==typeof t&&(t=this.goal),t>this.max?t=this.max:t<this.min&&(t=this.min),this.barGoal<t&&this._drawBar(t);var i=e.now,n=l(),s=n+100*Math.abs(i-t)*e.options.speed/(e.max-e.min),r=function r(a){var o=void 0;if(a>s)o=t;else{var u=(a-n)/e.options.speed;o=Math.round(e.easing.fn(u/100)*(e.max-e.min)),t>i?(o=i+o,o>t&&(o=t)):(o=i-o,o<t&&(o=t))}e._update(o),o===t?(window.cancelAnimationFrame(e._frameId),e._frameId=null,e.now===e.goal&&e._trigger("finish")):e._frameId=window.requestAnimationFrame(r)};e._frameId=window.requestAnimationFrame(r)}},{key:"_update",value:function(t){this.now=t,this._updateBar(),this.$element.attr("aria-valuenow",this.now),this.$number.length>0&&"function"==typeof this.options.numberCallback&&this.$number.html(this.options.numberCallback.call(this,[this.now])),this.$content.length>0&&"function"==typeof this.options.contentCallback&&this.$content.html(this.options.contentCallback.call(this,[this.now])),this._trigger("update",t)}},{key:"_clear",value:function(){this._frameId&&(window.cancelAnimationFrame(this._frameId),this._frameId=null)}},{key:"get",value:function(){return this.now}},{key:"start",value:function(){this._clear(),this._trigger("start"),this.go(this.goal)}},{key:"reset",value:function(){this._clear(),this._drawBar(this.first),this._update(this.first),this._trigger("reset")}},{key:"stop",value:function(){this._clear(),this._trigger("stop")}},{key:"finish",value:function(){this._clear(),this._update(this.goal),this._trigger("finish")}},{key:"destroy",value:function(){this.$element.data(g,null),this._trigger("destroy")}}],[{key:"registerEasing",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];d[t]=m.apply(void 0,i)}},{key:"getEasing",value:function(t){return d[t]}},{key:"setDefaults",value:function(t){n.default.extend(!0,p,n.default.isPlainObject(t)&&t)}}]),t}(),w={version:"0.4.6"},y="asPieProgress",b=n.default.fn.asPieProgress,_=function(t){for(var e=this,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];if("string"==typeof t){var o=function(){var i=t;if(/^_/.test(i))return{v:!1};if(!/^(get)/.test(i))return{v:e.each(function(){var t=n.default.data(this,y);t&&"function"==typeof t[i]&&t[i].apply(t,r)})};var s=e.first().data(y);return s&&"function"==typeof s[i]?{v:s[i].apply(s,r)}:void 0}();if("object"===("undefined"==typeof o?"undefined":s(o)))return o.v}return this.each(function(){(0,n.default)(this).data(y)||(0,n.default)(this).data(y,new v(this,t))})};n.default.fn.asPieProgress=_,n.default.asPieProgress=n.default.extend({setDefaults:v.setDefaults,registerEasing:v.registerEasing,getEasing:v.getEasing,noConflict:function(){return n.default.fn.asPieProgress=b,_}},w)});
