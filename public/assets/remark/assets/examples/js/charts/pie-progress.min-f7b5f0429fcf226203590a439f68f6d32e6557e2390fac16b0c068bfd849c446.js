/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run()}),function(){var $example=$("#examplePieApi");$(".pie-api-start").on("click",function(){$example.asPieProgress("start")}),$(".pie-api-finish").on("click",function(){$example.asPieProgress("finish")}),$(".pie-api-go").on("click",function(){$example.asPieProgress("go",200)}),$(".pie-api-go_percentage").on("click",function(){$example.asPieProgress("go","50%")}),$(".pie-api-stop").on("click",function(){$example.asPieProgress("stop")}),$(".pie-api-reset").on("click",function(){$example.asPieProgress("reset")})}()}(document,window,jQuery);
