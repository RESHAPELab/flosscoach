/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/bootstrap-select",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginBootstrapSelect=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="selectpicker",Selectpicker=function(_Plugin){function Selectpicker(){return babelHelpers.classCallCheck(this,Selectpicker),babelHelpers.possibleConstructorReturn(this,(Selectpicker.__proto__||Object.getPrototypeOf(Selectpicker)).apply(this,arguments))}return babelHelpers.inherits(Selectpicker,_Plugin),babelHelpers.createClass(Selectpicker,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{style:"btn-select",iconBase:"icon",tickIcon:"wb-check"}}}]),Selectpicker}(_Plugin3.default);_Plugin3.default.register(NAME,Selectpicker),exports.default=Selectpicker});
