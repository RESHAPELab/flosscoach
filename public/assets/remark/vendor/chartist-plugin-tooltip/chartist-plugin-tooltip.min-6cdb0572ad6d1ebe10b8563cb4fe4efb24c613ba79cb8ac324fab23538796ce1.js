/* chartist-plugin-pointlabels 0.0.7
 * Copyright © 2015 Gion Kunz
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */


!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a["Chartist.plugins.tooltips"]=b()}(this,function(){return function(a,b,c){"use strict";function d(a){a.style.display="block"}function e(a){a.style.display="none"}function f(a,b){return(" "+a.getAttribute("class")+" ").indexOf(" "+b+" ")>-1}function g(a,b){do a=a.nextSibling;while(a&&!f(a,b));return a}function h(a){return a.innerText||a.textContent}var i={currency:void 0,tooltipOffset:{x:0,y:-20}};c.plugins=c.plugins||{},c.plugins.tooltip=function(a){return a=c.extend({},i,a),function(i){function j(a,b,c){m.addEventListener(a,function(a){(!b||f(a.target,b))&&c(a)})}function k(b){o=o||n.offsetHeight,p=p||n.offsetWidth,n.style.top=(b.layerY||b.offsetY)-o+a.tooltipOffset.y+"px",n.style.left=(b.layerX||b.offsetX)-p/2+a.tooltipOffset.x+"px"}var l="ct-point";i instanceof c.Bar?l="ct-bar":i instanceof c.Pie&&(l=i.options.donut?"ct-slice-donut":"ct-slice-pie");var m=i.container,n=m.querySelector(".chartist-tooltip");n||(n=b.createElement("div"),n.className="chartist-tooltip",m.appendChild(n));var o=n.offsetHeight,p=n.offsetWidth;e(n),j("mouseover",l,function(b){var e=b.target,f="",j=e.getAttribute("ct:meta")||"",l=e.getAttribute("ct:value");if(a.tooltipFnc)f=a.tooltipFnc(j,l);else{if(j)f+=j+"<br>";else if(i instanceof c.Pie){var m=g(e,"ct-label");m.length>0&&(f+=h(m)+"<br>")}a.currency&&(l=a.currency+l.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")),f+=l}n.innerHTML=f,k(b),d(n),o=n.offsetHeight,p=n.offsetWidth}),j("mouseout",l,function(){e(n)}),j("mousemove",null,function(a){k(a)})}}}(window,document,Chartist),Chartist.plugins.tooltips});
//# sourceMappingURL=chartist-plugin-tooltip.min.js.map
;
