/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/toolbar",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginToolbar=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="toolbar",Toolbar=function(_Plugin){function Toolbar(){return babelHelpers.classCallCheck(this,Toolbar),babelHelpers.possibleConstructorReturn(this,(Toolbar.__proto__||Object.getPrototypeOf(Toolbar)).apply(this,arguments))}return babelHelpers.inherits(Toolbar,_Plugin),babelHelpers.createClass(Toolbar,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.toolbar){var $el=this.$el,content=$el.data("toolbar");content&&(this.options.content=content),$el.toolbar(this.options)}}}],[{key:"getDefaults",value:function(){return{hideOnClick:!0,event:"hover"}}}]),Toolbar}(_Plugin3.default);_Plugin3.default.register(NAME,Toolbar),exports.default=Toolbar});
