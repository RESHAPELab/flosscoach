/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/editable-table",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginEditableTable=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="editableTable",EditableTable=function(_Plugin){function EditableTable(){return babelHelpers.classCallCheck(this,EditableTable),babelHelpers.possibleConstructorReturn(this,(EditableTable.__proto__||Object.getPrototypeOf(EditableTable)).apply(this,arguments))}return babelHelpers.inherits(EditableTable,_Plugin),babelHelpers.createClass(EditableTable,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.editableTableWidget){var $el=this.$el;$el.editableTableWidget(this.options)}}}],[{key:"getDefaults",value:function(){return{}}}]),EditableTable}(_Plugin3.default);_Plugin3.default.register(NAME,EditableTable),exports.default=EditableTable});
