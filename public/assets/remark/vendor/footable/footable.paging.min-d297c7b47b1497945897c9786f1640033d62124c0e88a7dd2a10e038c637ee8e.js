/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.4
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/

!function(a,b){b.Pager=b.Class.extend({construct:function(a,b,c,d,e){this.total=a,this.current=b,this.size=c,this.page=d,this.forward=e}})}(jQuery,FooTable),function(a,b){b.Paging=b.Component.extend({construct:function(a){this._super(a,a.o.paging.enabled),this.strings=a.o.paging.strings,this.current=a.o.paging.current,this.size=a.o.paging.size,this.limit=a.o.paging.limit,this.position=a.o.paging.position,this.countFormat=a.o.paging.countFormat,this.total=-1,this.totalRows=0,this.previous=-1,this.formattedCount=null,this.$row=null,this.$cell=null,this.$pagination=null,this.$count=null,this.detached=!0,this._createdLinks=0},preinit:function(a){var c=this;this.ft.raise("preinit.ft.paging",[a]).then(function(){c.ft.$el.hasClass("footable-paging")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.paging)?a.paging:c.enabled,c.enabled&&(c.size=b.is.number(a.pagingSize)?a.pagingSize:c.size,c.current=b.is.number(a.pagingCurrent)?a.pagingCurrent:c.current,c.limit=b.is.number(a.pagingLimit)?a.pagingLimit:c.limit,c.ft.$el.hasClass("footable-paging-left")&&(c.position="left"),c.ft.$el.hasClass("footable-paging-center")&&(c.position="center"),c.ft.$el.hasClass("footable-paging-right")&&(c.position="right"),c.position=b.is.string(a.pagingPosition)?a.pagingPosition:c.position,c.countFormat=b.is.string(a.pagingCountFormat)?a.pagingCountFormat:c.countFormat,c.total=Math.ceil(c.ft.rows.all.length/c.size))},function(){c.enabled=!1})},init:function(){var a=this;this.ft.raise("init.ft.paging").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.paging").then(function(){a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(),a.detached=!0,a._createdLinks=0})},predraw:function(){this.total=Math.ceil(this.ft.rows.array.length/this.size),this.current=this.current>this.total?this.total:this.current<1?1:this.current,this.totalRows=this.ft.rows.array.length,this.totalRows>this.size&&(this.ft.rows.array=this.ft.rows.array.splice((this.current-1)*this.size,this.size)),this.formattedCount=this.format(this.countFormat)},draw:function(){if(this.total<=1)this.detached||(this.$row.detach(),this.detached=!0);else{if(this.detached){var b=this.ft.$el.children("tfoot");0==b.length&&(b=a("<tfoot/>"),this.ft.$el.append(b)),this.$row.appendTo(b),this.detached=!1}this.$cell.attr("colspan",this.ft.columns.visibleColspan),this._createLinks(),this._setVisible(this.current,this.current>this.previous),this._setNavigation(!0),this.$count.text(this.formattedCount)}},$create:function(){this._createdLinks=0;var b="footable-paging-center";switch(this.position){case"left":b="footable-paging-left";break;case"right":b="footable-paging-right"}this.ft.$el.addClass("footable-paging").addClass(b),this.$cell=a("<td/>").attr("colspan",this.ft.columns.visibleColspan);var c=this.ft.$el.children("tfoot");0==c.length&&(c=a("<tfoot/>"),this.ft.$el.append(c)),this.$row=a("<tr/>",{"class":"footable-paging"}).append(this.$cell).appendTo(c),this.$pagination=a("<ul/>",{"class":"pagination"}).on("click.footable","a.footable-page-link",{self:this},this._onPageClicked),this.$count=a("<span/>",{"class":"label label-default"}),this.$cell.append(this.$pagination,a("<div/>",{"class":"divider"}),this.$count),this.detached=!1},format:function(a){var b=this.size*(this.current-1)+1,c=this.size*this.current;return 0==this.ft.rows.array.length?(b=0,c=0):c=c>this.totalRows?this.totalRows:c,a.replace(/\{CP}/g,this.current).replace(/\{TP}/g,this.total).replace(/\{PF}/g,b).replace(/\{PL}/g,c).replace(/\{TR}/g,this.totalRows)},first:function(){return this._set(1)},prev:function(){return this._set(this.current-1>0?this.current-1:1)},next:function(){return this._set(this.current+1<this.total?this.current+1:this.total)},last:function(){return this._set(this.total)},"goto":function(a){return this._set(a>this.total?this.total:1>a?1:a)},prevPages:function(){var a=this.$pagination.children("li.footable-page.visible:first").data("page")-1;this._setVisible(a,!0),this._setNavigation(!1)},nextPages:function(){var a=this.$pagination.children("li.footable-page.visible:last").data("page")+1;this._setVisible(a,!1),this._setNavigation(!1)},pageSize:function(a){return b.is.number(a)?(this.size=a,this.total=Math.ceil(this.ft.rows.all.length/this.size),b.is.jq(this.$row)&&this.$row.remove(),this.$create(),void this.ft.draw()):this.size},_set:function(c){var d=this,e=new b.Pager(d.total,d.current,d.size,c,c>d.current);return d.ft.raise("before.ft.paging",[e]).then(function(){return e.page=e.page>e.total?e.total:e.page,e.page=e.page<1?1:e.page,d.current==c?a.when():(d.previous=d.current,d.current=e.page,d.ft.draw().then(function(){d.ft.raise("after.ft.paging",[e])}))})},_createLinks:function(){if(this._createdLinks!==this.total){var b=this,c=b.total>1,d=function(b,c,d){return a("<li/>",{"class":d}).attr("data-page",b).append(a("<a/>",{"class":"footable-page-link",href:"#"}).data("page",b).html(c))};b.$pagination.empty(),c&&(b.$pagination.append(d("first",b.strings.first,"footable-page-nav")),b.$pagination.append(d("prev",b.strings.prev,"footable-page-nav")),b.limit>0&&b.limit<b.total&&b.$pagination.append(d("prev-limit",b.strings.prevPages,"footable-page-nav")));for(var e,f=0;f<b.total;f++)e=d(f+1,f+1,"footable-page"),b.$pagination.append(e);c&&(b.limit>0&&b.limit<b.total&&b.$pagination.append(d("next-limit",b.strings.nextPages,"footable-page-nav")),b.$pagination.append(d("next",b.strings.next,"footable-page-nav")),b.$pagination.append(d("last",b.strings.last,"footable-page-nav"))),b._createdLinks=b.total}},_setNavigation:function(a){1==this.current?this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled"):this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"),this.current==this.total?this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled"):this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"),1==(this.$pagination.children("li.footable-page.visible:first").data("page")||1)?this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"),(this.$pagination.children("li.footable-page.visible:last").data("page")||this.limit)==this.total?this.$pagination.children('li[data-page="next-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"),this.limit>0&&this.total<this.limit?this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display","none"):this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display",""),a&&this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="'+this.current+'"]').addClass("active")},_setVisible:function(a,b){if(this.limit>0&&this.total>this.limit){if(!this.$pagination.children('li.footable-page[data-page="'+a+'"]').hasClass("visible")){var c=0,d=0;1==b?(d=a>this.total?this.total:a,c=d-this.limit):(c=1>a?0:a-1,d=c+this.limit),0>c&&(c=0,d=this.limit>this.total?this.total:this.limit),d>this.total&&(d=this.total,c=this.total-this.limit<0?0:this.total-this.limit),this.$pagination.children("li.footable-page").removeClass("visible").slice(c,d).addClass("visible")}}else this.$pagination.children("li.footable-page").removeClass("visible").slice(0,this.total).addClass("visible")},_onPageClicked:function(b){if(b.preventDefault(),!a(b.target).closest("li").is(".active,.disabled")){var c=b.data.self,d=a(this).data("page");switch(d){case"first":return void c.first();case"prev":return void c.prev();case"next":return void c.next();case"last":return void c.last();case"prev-limit":return void c.prevPages();case"next-limit":return void c.nextPages();default:return void c._set(d)}}}}),b.components.register("paging",b.Paging,400)}(jQuery,FooTable),function(a){a.Defaults.prototype.paging={enabled:!1,countFormat:"{CP} of {TP}",current:1,limit:5,position:"center",size:10,strings:{first:"&laquo;",prev:"&lsaquo;",next:"&rsaquo;",last:"&raquo;",prevPages:"...",nextPages:"..."}}}(FooTable),function(a){a.Table.prototype.gotoPage=function(b){return this.use(a.Paging)["goto"](b)},a.Table.prototype.nextPage=function(){return this.use(a.Paging).next()},a.Table.prototype.prevPage=function(){return this.use(a.Paging).prev()},a.Table.prototype.firstPage=function(){return this.use(a.Paging).first()},a.Table.prototype.lastPage=function(){return this.use(a.Paging).last()},a.Table.prototype.nextPages=function(){return this.use(a.Paging).nextPages()},a.Table.prototype.prevPages=function(){return this.use(a.Paging).prevPages()},a.Table.prototype.pageSize=function(b){return this.use(a.Paging).pageSize(b)}}(FooTable);