/**
* jQuery slidePanel v0.3.4
* https://github.com/amazingSurge/jquery-slidePanel
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/

!function(t,e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("undefined"!=typeof exports)e(require("jquery"));else{var n={exports:{}};e(t.jQuery),t.jquerySlidePanelEs=n.exports}}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){return!(!t||"matrix"!==t.substr(0,6))&&t.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function i(t){"string"!=typeof t&&(t=JSON.stringify(t));var e=void 0,n=0,i=void 0,o=void 0;if(0===t.length)return n;for(i=0,o=t.length;i<o;i++)e=t.charCodeAt(i),n=(n<<5)-n+e,n|=0;return n}function o(){return void 0!==window.performance&&window.performance.now?window.performance.now():Date.now()}function s(t){return"string"==typeof t&&t.indexOf("%")!==-1}function a(t){return"string"==typeof t&&t.indexOf("px")!==-1}function r(t,e,n,i){function o(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function a(t){return 3*t}function r(t,e,n){return((o(e,n)*t+s(e,n))*t+a(e))*t}function l(t,e,n){return 3*o(e,n)*t*t+2*s(e,n)*t+a(e)}function u(e){for(var i=e,o=0;o<4;++o){var s=l(i,t,n);if(0===s)return i;i-=(r(i,t,n)-e)/s}return i}return t===e&&n===i?{css:"linear",fn:function(t){return t}}:{css:"cubic-bezier("+t+","+e+","+n+","+i+")",fn:function(t){return r(u(t),e,i)}}}var l=function(t){return t&&t.__esModule?t:{default:t}}(t),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h={version:"0.3.4"},d={skin:null,classes:{base:"slidePanel",show:"slidePanel-show",loading:"slidePanel-loading",content:"slidePanel-content",dragging:"slidePanel-dragging",willClose:"slidePanel-will-close"},closeSelector:null,template:function(t){return'<div class="'+t.classes.base+" "+t.classes.base+"-"+t.direction+'"><div class="'+t.classes.content+'"></div></div>'},loading:{appendTo:"panel",template:function(t){return'<div class="'+t.classes.loading+'"></div>'},showCallback:function(t){this.$el.addClass(t.classes.loading+"-show")},hideCallback:function(t){this.$el.removeClass(t.classes.loading+"-show")}},contentFilter:function(t,e){return t},useCssTransforms3d:!0,useCssTransforms:!0,useCssTransitions:!0,dragTolerance:150,mouseDragHandler:null,mouseDrag:!0,touchDrag:!0,pointerDrag:!0,direction:"right",duration:"500",easing:"ease",beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,onChange:$.noop,beforeHide:$.noop,afterHide:$.noop,beforeDrag:$.noop,afterDrag:$.noop},c=function(){function t(n){e(this,t);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];this.initialize.apply(this,[n].concat(o))}return u(t,[{key:"initialize",value:function(t){var e=(arguments.length<=1?void 0:arguments[1])||{};if("string"==typeof t)t={url:t};else if(t&&1===t.nodeType){var n=(0,l.default)(t);t={url:n.attr("href"),settings:n.data("settings")||{},options:n.data()||{}}}return t&&t.options?t.options=l.default.extend(!0,e,t.options):t.options=e,t.options=l.default.extend(!0,{},d,t.options),l.default.extend(this,t),this}}]),t}(),f={};!function(t){var e={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},n=["webkit","Moz","O","ms"],i=(0,l.default)("<support>").get(0).style,o={csstransforms:function(){return Boolean(s("transform"))},csstransforms3d:function(){return Boolean(s("perspective"))},csstransitions:function(){return Boolean(s("transition"))},cssanimations:function(){return Boolean(s("animation"))}},s=function(t,e){var o=!1,s=t.charAt(0).toUpperCase()+t.slice(1);return void 0!==i[t]&&(o=t),o||l.default.each(n,function(t,e){return void 0===i[e+s]||(o="-"+e.toLowerCase()+"-"+s,!1)}),e?o:!!o},a=function(t){return s(t,!0)};o.csstransitions()&&(t.transition=new String(a("transition")),t.transition.end=e.transition.end[t.transition]),o.cssanimations()&&(t.animation=new String(a("animation")),t.animation.end=e.animation.end[t.animation]),o.csstransforms()&&(t.transform=new String(a("transform")),t.transform3d=o.csstransforms3d()),"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch?t.touch=!0:t.touch=!1,window.PointerEvent||window.MSPointerEvent?t.pointer=!0:t.pointer=!1,t.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t}}(f);var p={ease:r(.25,.1,.25,1),linear:r(0,0,1,1),"ease-in":r(.42,0,1,1),"ease-out":r(0,0,.58,1),"ease-in-out":r(.42,0,.58,1)},g={prepareTransition:function(t,e,n,i,o){var s=[];e&&s.push(e),n&&(l.default.isNumeric(n)&&(n+="ms"),s.push(n)),i?s.push(i):s.push(this.easing.css),o&&s.push(o),t.css(f.transition,s.join(" "))},do:function(t,e,n){y.enter("animating");var i=t.options.duration,s=t.options.easing||"ease",a=this,r=t.makePositionStyle(e),u=null;for(u in r)if({}.hasOwnProperty.call(r,u))break;if(t.options.useCssTransitions&&f.transition)setTimeout(function(){a.prepareTransition(t.$panel,u,i,s)},20),t.$panel.one(f.transition.end,function(){l.default.isFunction(n)&&n(),t.$panel.css(f.transition,""),y.leave("animating")}),setTimeout(function(){t.setPosition(e)},20);else{var h=o(),d=t.getPosition(),c=e,g=function e(i){var o=(i-h)/t.options.duration;o>1&&(o=1),o=p[s].fn(o);var r=parseFloat(d+o*(c-d),10);t.setPosition(r),1===o?(window.cancelAnimationFrame(a._frameId),a._frameId=null,l.default.isFunction(n)&&n(),y.leave("animating")):a._frameId=window.requestAnimationFrame(e)};a._frameId=window.requestAnimationFrame(g)}}},v=function(){function t(n){e(this,t),this.initialize(n)}return u(t,[{key:"initialize",value:function(t){this._view=t,this.build()}},{key:"build",value:function(){if(!this._builded){var t=this._view.options,e=t.loading.template.call(this,t);switch(this.$el=(0,l.default)(e),t.loading.appendTo){case"panel":this.$el.appendTo(this._view.$panel);break;case"body":this.$el.appendTo("body");break;default:this.$el.appendTo(t.loading.appendTo)}this._builded=!0}}},{key:"show",value:function(t){this.build();var e=this._view.options;e.loading.showCallback.call(this,e),l.default.isFunction(t)&&t.call(this)}},{key:"hide",value:function(t){var e=this._view.options;e.loading.hideCallback.call(this,e),l.default.isFunction(t)&&t.call(this)}}]),t}(),m=function(){function t(){e(this,t),this.initialize.apply(this,arguments)}return u(t,[{key:"initialize",value:function(t){this._view=t,this.options=t.options,this._drag={time:null,pointer:null},this.bindEvents()}},{key:"bindEvents",value:function(){var t=this._view.$panel,e=this.options;e.mouseDrag&&(t.on(y.eventName("mousedown"),l.default.proxy(this.onDragStart,this)),t.on(y.eventName("dragstart selectstart"),function(t){if(!e.mouseDragHandler||(0,l.default)(t.target).is(e.mouseDragHandler)||(0,l.default)(t.target).parents(e.mouseDragHandler).length>0)return!1})),e.touchDrag&&f.touch&&(t.on(y.eventName("touchstart"),l.default.proxy(this.onDragStart,this)),t.on(y.eventName("touchcancel"),l.default.proxy(this.onDragEnd,this))),e.pointerDrag&&f.pointer&&(t.on(y.eventName(f.prefixPointerEvent("pointerdown")),l.default.proxy(this.onDragStart,this)),t.on(y.eventName(f.prefixPointerEvent("pointercancel")),l.default.proxy(this.onDragEnd,this)))}},{key:"onDragStart",value:function(t){var e=this;if(3!==t.which){var n=this.options;this._view.$panel.addClass(this.options.classes.dragging),this._position=this._view.getPosition(!0),this._drag.time=(new Date).getTime(),this._drag.pointer=this.pointer(t);var i=function(){y.enter("dragging"),y.trigger(e._view,"beforeDrag")};if(n.mouseDrag){if(n.mouseDragHandler&&!((0,l.default)(t.target).is(n.mouseDragHandler)||(0,l.default)(t.target).parents(n.mouseDragHandler).length>0))return;(0,l.default)(document).on(y.eventName("mouseup"),l.default.proxy(this.onDragEnd,this)),(0,l.default)(document).one(y.eventName("mousemove"),l.default.proxy(function(){(0,l.default)(document).on(y.eventName("mousemove"),l.default.proxy(this.onDragMove,this)),i()},this))}n.touchDrag&&f.touch&&((0,l.default)(document).on(y.eventName("touchend"),l.default.proxy(this.onDragEnd,this)),(0,l.default)(document).one(y.eventName("touchmove"),l.default.proxy(function(){(0,l.default)(document).on(y.eventName("touchmove"),l.default.proxy(this.onDragMove,this)),i()},this))),n.pointerDrag&&f.pointer&&((0,l.default)(document).on(y.eventName(f.prefixPointerEvent("pointerup")),l.default.proxy(this.onDragEnd,this)),(0,l.default)(document).one(y.eventName(f.prefixPointerEvent("pointermove")),l.default.proxy(function(){(0,l.default)(document).on(y.eventName(f.prefixPointerEvent("pointermove")),l.default.proxy(this.onDragMove,this)),i()},this))),(0,l.default)(document).on(y.eventName("blur"),l.default.proxy(this.onDragEnd,this)),t.preventDefault()}}},{key:"onDragMove",value:function(t){var e=this.distance(this._drag.pointer,this.pointer(t));y.is("dragging")&&(Math.abs(e)>this.options.dragTolerance?this._willClose!==!0&&(this._willClose=!0,this._view.$panel.addClass(this.options.classes.willClose)):this._willClose!==!1&&(this._willClose=!1,this._view.$panel.removeClass(this.options.classes.willClose)),y.is("dragging")&&(t.preventDefault(),this.move(e)))}},{key:"onDragEnd",value:function(t){var e=this.distance(this._drag.pointer,this.pointer(t));(0,l.default)(document).off(y.eventName("mousemove mouseup touchmove touchend pointermove pointerup MSPointerMove MSPointerUp blur")),this._view.$panel.removeClass(this.options.classes.dragging),this._willClose===!0&&(this._willClose=!1,this._view.$panel.removeClass(this.options.classes.willClose)),y.is("dragging")&&(y.leave("dragging"),y.trigger(this._view,"afterDrag"),Math.abs(e)<this.options.dragTolerance?this._view.revert():this._view.hide())}},{key:"pointer",value:function(t){var e={x:null,y:null};return t=t.originalEvent||t||window.event,t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,t.pageX?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX,e.y=t.clientY),e}},{key:"distance",value:function(t,e){var n=this.options.direction;return"left"===n||"right"===n?e.x-t.x:e.y-t.y}},{key:"move",value:function(t){var e=this._position+t;if("right"===this.options.direction||"bottom"===this.options.direction){if(e<0)return}else if(e>0)return;this.options.useCssTransforms||this.options.useCssTransforms3d||"right"!==this.options.direction&&"bottom"!==this.options.direction||(e=-e),this._view.setPosition(e+"px")}}]),t}(),w=function(){function t(n){e(this,t),this.initialize(n)}return u(t,[{key:"initialize",value:function(t){this.options=t,this._instance=null,this._showed=!1,this._isLoading=!1,this.build()}},{key:"setLength",value:function(){switch(this.options.direction){case"top":case"bottom":this._length=this.$panel.outerHeight();break;case"left":case"right":this._length=this.$panel.outerWidth()}}},{key:"build",value:function(){if(!this._builded){var t=this.options,e=t.template.call(this,t),n=this;this.$panel=(0,l.default)(e).appendTo("body"),t.skin&&this.$panel.addClass(t.skin),this.$content=this.$panel.find("."+this.options.classes.content),t.closeSelector&&this.$panel.on("click touchstart",t.closeSelector,function(){return n.hide(),!1}),this.loading=new v(this),this.setLength(),this.setPosition(this.getHidePosition()),(t.mouseDrag||t.touchDrag||t.pointerDrag)&&(this.drag=new m(this)),this._builded=!0}}},{key:"getHidePosition",value:function(){var t=this.options;if(t.useCssTransforms||t.useCssTransforms3d)switch(t.direction){case"top":case"left":return"-100";case"bottom":case"right":return"100"}switch(t.direction){case"top":case"bottom":return parseFloat(100*-(this._length/(0,l.default)(window).height()),10);case"left":case"right":return parseFloat(100*-(this._length/(0,l.default)(window).width()),10)}}},{key:"empty",value:function(){this._instance=null,this.$content.empty()}},{key:"load",value:function(t){function e(e){e=i.contentFilter.call(this,e,t),n.$content.html(e),n.hideLoading(),n._instance=t,y.trigger(n,"afterLoad",t)}var n=this,i=t.options;y.trigger(this,"beforeLoad",t),this.empty(),t.content?e(t.content):t.url?(this.showLoading(),l.default.ajax(t.url,t.settings||{}).done(function(t){e(t)})):e("")}},{key:"showLoading",value:function(){var t=this;this.loading.show(function(){t._isLoading=!0})}},{key:"hideLoading",value:function(){var t=this;this.loading.hide(function(){t._isLoading=!1})}},{key:"show",value:function(t){this.build(),y.enter("show"),y.trigger(this,"beforeShow"),(0,l.default)("html").addClass(this.options.classes.base+"-html"),this.$panel.addClass(this.options.classes.show);var e=this;g.do(this,0,function(){e._showed=!0,y.trigger(e,"afterShow"),l.default.isFunction(t)&&t.call(e)})}},{key:"change",value:function(t){y.trigger(this,"beforeShow"),y.trigger(this,"onChange",t,this._instance),this.load(t),y.trigger(this,"afterShow")}},{key:"revert",value:function(t){var e=this;g.do(this,0,function(){l.default.isFunction(t)&&t.call(e)})}},{key:"hide",value:function(t){y.leave("show"),y.trigger(this,"beforeHide");var e=this;g.do(this,this.getHidePosition(),function(){e.$panel.removeClass(e.options.classes.show),e._showed=!1,e._instance=null,y._current===e&&(y._current=null),y.is("show")||(0,l.default)("html").removeClass(e.options.classes.base+"-html"),l.default.isFunction(t)&&t.call(e),y.trigger(e,"afterHide")})}},{key:"makePositionStyle",value:function(t){var e=void 0,n="0",i="0";s(t)||a(t)||(t+="%"),this.options.useCssTransforms&&f.transform?("left"===this.options.direction||"right"===this.options.direction?n=t:i=t,e=f.transform.toString(),t=this.options.useCssTransforms3d&&f.transform3d?"translate3d("+n+","+i+",0)":"translate("+n+","+i+")"):e=this.options.direction;var o={};return o[e]=t,o}},{key:"getPosition",value:function(t){var e=void 0;if(this.options.useCssTransforms&&f.transform){if(!(e=n(this.$panel.css(f.transform))))return 0;e="left"===this.options.direction||"right"===this.options.direction?e[12]||e[4]:e[13]||e[5]}else e=this.$panel.css(this.options.direction),e=parseFloat(e.replace("px",""));return t!==!0&&(e=e/this._length*100),parseFloat(e,10)}},{key:"setPosition",value:function(t){var e=this.makePositionStyle(t);this.$panel.css(e)}}]),t}(),y={_states:{},_views:{},_current:null,is:function(t){return this._states[t]&&this._states[t]>0},enter:function(t){void 0===this._states[t]&&(this._states[t]=0),this._states[t]++},leave:function(t){this._states[t]--},trigger:function(t,e){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var s=[t].concat(i);(0,l.default)(document).trigger("slidePanel::"+e,s),l.default.isFunction(t.options[e])&&t.options[e].apply(t,i)},eventName:function(t){if("string"!=typeof t||""===t)return".slidepanel";t=t.split(" ");for(var e=t.length,n=0;n<e;n++)t[n]=t[n]+".slidepanel";return t.join(" ")},show:function(t,e){var n=this;if(!(t instanceof c))switch(arguments.length){case 0:t=new c;break;case 1:t=new c(t);break;case 2:t=new c(t,e)}var i=this.getView(t.options),o=function(){i.show(),i.load(t),n._current=i};null!==this._current?i===this._current?this._current.change(t):this._current.hide(o):o()},getView:function(t){var e=i(t);return this._views.hasOwnProperty(e)?this._views[e]:this._views[e]=new w(t)},hide:function(t){if(void 0!==t&&void 0!==t.options){this.getView(t.options).hide()}else null!==this._current&&this._current.hide()}},_={is:function(t){return y.is(t)},show:function(t,e){return y.show(t,e),this},hide:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.hide(e),this}};Date.now||(Date.now=function(){return(new Date).getTime()});for(var b=["webkit","moz"],k=0;k<b.length&&!window.requestAnimationFrame;++k){var P=b[k];window.requestAnimationFrame=window[P+"RequestAnimationFrame"],window.cancelAnimationFrame=window[P+"CancelAnimationFrame"]||window[P+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS (6|7|8)/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var D=0;window.requestAnimationFrame=function(t){var e=o(),n=Math.max(D+16,e);return setTimeout(function(){t(D=n)},n-e)},window.cancelAnimationFrame=clearTimeout}var C=l.default.fn.slidePanel,x=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var o=t;return"string"==typeof t?this.each(function(){var t=l.default.data(this,"slidePanel");switch(t instanceof c||(t=new c(this,n),l.default.data(this,"slidePanel",t)),o){case"hide":y.hide(t);break;case"show":y.show(t)}}):this.each(function(){l.default.data(this,"slidePanel")||(l.default.data(this,"slidePanel",new c(this,t)),(0,l.default)(this).on("click",function(t){var e=l.default.data(this,"slidePanel");y.show(e),t.preventDefault(),t.stopPropagation()}))})};l.default.fn.slidePanel=x,l.default.slidePanel=function(){y.show.apply(y,arguments)},l.default.extend(l.default.slidePanel,{setDefaults:function(t){l.default.extend(!0,d,l.default.isPlainObject(t)&&t)},noConflict:function(){return l.default.fn.slidePanel=C,x}},h,_)});
