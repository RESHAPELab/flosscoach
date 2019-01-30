/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/animsition",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginAnimsition=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="animsition",Animsition=function(_Plugin){function Animsition(){return babelHelpers.classCallCheck(this,Animsition),babelHelpers.possibleConstructorReturn(this,(Animsition.__proto__||Object.getPrototypeOf(Animsition)).apply(this,arguments))}return babelHelpers.inherits(Animsition,_Plugin),babelHelpers.createClass(Animsition,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(callback){var options=this.options;if(options.random){var li=options.inDefaults.length,lo=options.outDefaults.length,ni=parseInt(li*Math.random(),0),no=parseInt(lo*Math.random(),0);options.inClass=options.inDefaults[ni],options.outClass=options.outDefaults[no]}return this.$el.animsition(options),(0,_jquery2.default)("."+options.loadingClass).addClass("loader-"+options.loadingType),this.$el.animsition("supportCheck",options)?(_jquery2.default.isFunction(callback)&&this.$el.one("animsition.end",function(){callback.call()}),!0):(_jquery2.default.isFunction(callback)&&callback.call(),!1)}}],[{key:"getDefaults",value:function(){return{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"loader",loadingType:"default",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]}}}]),Animsition}(_Plugin3.default);_Plugin3.default.register(NAME,Animsition),exports.default=Animsition});