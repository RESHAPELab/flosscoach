/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/magnific-popup",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginMagnificPopup=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="magnificPopup",MagnificPopup=function(_Plugin){function MagnificPopup(){return babelHelpers.classCallCheck(this,MagnificPopup),babelHelpers.possibleConstructorReturn(this,(MagnificPopup.__proto__||Object.getPrototypeOf(MagnificPopup)).apply(this,arguments))}return babelHelpers.inherits(MagnificPopup,_Plugin),babelHelpers.createClass(MagnificPopup,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{type:"image",closeOnContentClick:!0,image:{verticalFit:!0}}}}]),MagnificPopup}(_Plugin3.default);_Plugin3.default.register(NAME,MagnificPopup),exports.default=MagnificPopup});
