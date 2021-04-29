(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_jquery_b"],{

/***/ 178:
/*!***********************************!*\
  !*** ./src/js/jquery.bxslider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:h()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",u()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;0!==n?e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&t(this).trigger("load")})}):i()},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(F)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},h=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},u=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(t=(e=s.children.last()).position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q())}):q()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),L())}):(S(r.resetValue,"reset",0),L()))):((a={})[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){q()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),L()}))},b=function(){for(var e=f(),i=0;i<e;i++)"",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(s.settings.buildPager(i),s.pagerEl.addClass("bx-custom-pager")):i+1;s.pagerEl.html("")},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t(""),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),A(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(i=t(e.currentTarget)).attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},I=function(e){var i=s.children.length;if("short"===s.settings.pagerType)return s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i);s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")})},q=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},A=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){if(s.settings.autoDelay>0)setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto(),t(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),L(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),L(d)})),L()},L=function(t){var e,i,n=t||s.settings.speed,r={left:0,top:0},a={left:0,top:0};"next"===s.settings.autoDirection?r=o.find(".bx-clone").first().position():a=s.children.first().position(),e="horizontal"===s.settings.mode?-r.left:-r.top,i="horizontal"===s.settings.mode?-a.left:-a.top,S(e,"ticker",n,{resetValue:i})},O=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},F=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&O(o)){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",V),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},R=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(e){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},B=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},U=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},h=null;if(s.oldIndex=s.active.index,s.active.index=U(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),q()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(g=(h=s.children.eq(s.children.length-1)).position(),c=s.viewport.width()-h.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),g=(h=o.children(".bx-clone").eq(r)).position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),void 0!==g?(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)):s.working=!1),s.settings.ariaHidden&&B(s.active.index*x())}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&!0!==t&&A("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&!0!==t&&A("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(u()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&B(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",Z),s.settings.keyboardEnabled&&t(document).unbind("keydown",F),t(this).removeData("bxSlider"))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ 287:
/*!*************************************!*\
  !*** ./src/js/jquery.easing.min.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */


(jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.jswing) = (jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.swing);
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend((jquery__WEBPACK_IMPORTED_MODULE_0___default().easing), {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return (jquery__WEBPACK_IMPORTED_MODULE_0___default().easing)[(jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.def)](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jquery__WEBPACK_IMPORTED_MODULE_0___default().easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});


/***/ }),

/***/ 313:
/*!***************************************!*\
  !*** ./src/js/jquery.flipster.min.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*! jQuery.Flipster, v1.1.1 (built 2016-03-03) */


!(function (a, b, c) {
  "use strict";
  function d(a, b) {
    var c = null;
    return function () {
      var d = this,
        e = arguments;
      null === c &&
        (c = setTimeout(function () {
          a.apply(d, e), (c = null);
        }, b));
    };
  }
  var e = (function () {
      var a = {};
      return function (b) {
        if (a[b] !== c) return a[b];
        var d = document.createElement("div"),
          e = d.style,
          f = b.charAt(0).toUpperCase() + b.slice(1),
          g = ["webkit", "moz", "ms", "o"],
          h = (b + " " + g.join(f + " ") + f).split(" ");
        for (var i in h) if (h[i] in e) return (a[b] = h[i]);
        return (a[b] = !1);
      };
    })(),
    f = "http://www.w3.org/2000/svg",
    g = (function () {
      var a;
      return function () {
        if (a !== c) return a;
        var b = document.createElement("div");
        return (
          (b.innerHTML = "<svg/>"),
          (a = b.firstChild && b.firstChild.namespaceURI === f)
        );
      };
    })(),
    h = a(b),
    i = e("transform"),
    j = {
      itemContainer: "ul",
      itemSelector: "li",
      start: "center",
      fadeIn: 400,
      loop: !1,
      autoplay: !1,
      pauseOnHover: !0,
      style: "coverflow",
      spacing: -0.6,
      click: !0,
      keyboard: !0,
      scrollwheel: !0,
      touch: !0,
      nav: !1,
      buttons: !1,
      buttonPrev: "Previous",
      buttonNext: "Next",
      onItemSwitch: !1,
    },
    k = {
      main: "flipster",
      active: "flipster--active",
      container: "flipster__container",
      nav: "flipster__nav",
      navChild: "flipster__nav__child",
      navItem: "flipster__nav__item",
      navLink: "flipster__nav__link",
      navCurrent: "flipster__nav__item--current",
      navCategory: "flipster__nav__item--category",
      navCategoryLink: "flipster__nav__link--category",
      button: "flipster__button",
      buttonPrev: "flipster__button--prev",
      buttonNext: "flipster__button--next",
      item: "flipster__item",
      itemCurrent: "flipster__item--current",
      itemPast: "flipster__item--past",
      itemFuture: "flipster__item--future",
      itemContent: "flipster__item__content",
    },
    l = new RegExp(
      "\\b(" +
        k.itemCurrent +
        "|" +
        k.itemPast +
        "|" +
        k.itemFuture +
        ")(.*?)(\\s|$)",
      "g"
    ),
    m = new RegExp("\\s\\s+", "g");
  a.fn.flipster = function (b) {
    var e = "string" == typeof b ? !0 : !1;
    if (e) {
      var n = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var c = a(this).data("methods");
        return c[b] ? c[b].apply(this, n) : this;
      });
    }
    var o = a.extend({}, j, b);
    return this.each(function () {
      function b(a) {
        var b = "next" === a ? o.buttonNext : o.buttonPrev;
        return "custom" !== o.buttons && g
          ? '<svg viewBox="0 0 13 20" xmlns="' +
              f +
              '" aria-labelledby="title"><title>' +
              b +
              '</title><polyline points="10,3 3,10 10,17"' +
              ("next" === a ? ' transform="rotate(180 6.5,10)"' : "") +
              "/></svg>"
          : b;
      }
      function e(c) {
        return (
          (c = c || "next"),
          a(
            '<button class="' +
              k.button +
              " " +
              ("next" === c ? k.buttonNext : k.buttonPrev) +
              '" role="button" />'
          )
            .html(b(c))
            .on("click", function (a) {
              v(c), a.preventDefault();
            })
        );
      }
      function j() {
        o.buttons &&
          J.length > 1 &&
          (O.find("." + k.button).remove(), O.append(e("prev"), e("next")));
      }
      function n() {
        var b = {};
        !o.nav ||
          J.length <= 1 ||
          (L && L.remove(),
          (L = a('<ul class="' + k.nav + '" role="navigation" />')),
          (N = a("")),
          J.each(function (c) {
            var d = a(this),
              e = d.data("flip-category"),
              f = d.data("flip-title") || d.attr("title") || c,
              g = a('<a href="#" class="' + k.navLink + '">' + f + "</a>").data(
                "index",
                c
              );
            if (((N = N.add(g)), e)) {
              if (!b[e]) {
                var h = a(
                    '<li class="' + k.navItem + " " + k.navCategory + '">'
                  ),
                  i = a(
                    '<a href="#" class="' +
                      k.navLink +
                      " " +
                      k.navCategoryLink +
                      '" data-flip-category="' +
                      e +
                      '">' +
                      e +
                      "</a>"
                  )
                    .data("category", e)
                    .data("index", c);
                (b[e] = a('<ul class="' + k.navChild + '" />')),
                  (N = N.add(i)),
                  h.append(i, b[e]).appendTo(L);
              }
              b[e].append(g);
            } else L.append(g);
            g.wrap('<li class="' + k.navItem + '">');
          }),
          L.on("click", "a", function (b) {
            var c = a(this).data("index");
            c >= 0 && (v(c), b.preventDefault());
          }),
          "after" === o.nav ? O.append(L) : O.prepend(L),
          (M = L.find("." + k.navItem)));
      }
      function p() {
        if (o.nav) {
          var b = K.data("flip-category");
          M.removeClass(k.navCurrent),
            N.filter(function () {
              return (
                a(this).data("index") === Q ||
                (b && a(this).data("category") === b)
              );
            })
              .parent()
              .addClass(k.navCurrent);
        }
      }
      function q() {
        O.css("transition", "none"),
          G.css("transition", "none"),
          J.css("transition", "none");
      }
      function r() {
        O.css("transition", ""),
          G.css("transition", ""),
          J.css("transition", "");
      }
      function s() {
        var b,
          c = 0;
        return (
          J.each(function () {
            (b = a(this).height()), b > c && (c = b);
          }),
          c
        );
      }
      function t(b) {
        return (
          b && q(),
          (H = G.width()),
          G.height(s()),
          H
            ? (I && (clearInterval(I), (I = !1)),
              void J.each(function (c) {
                var d,
                  e,
                  f = a(this);
                f.attr("class", function (a, b) {
                  return b && b.replace(l, "").replace(m, " ");
                }),
                  (d = f.outerWidth()),
                  0 !== o.spacing &&
                    f.css("margin-right", d * o.spacing + "px"),
                  (e = f.position().left),
                  (P[c] = -1 * (e + d / 2 - H / 2)),
                  c === J.length - 1 && (u(), b && setTimeout(r, 1));
              }))
            : void (I =
                I ||
                setInterval(function () {
                  t(b);
                }, 500))
        );
      }
      function u() {
        var b,
          d,
          e,
          f = J.length;
        J.each(function (c) {
          (b = a(this)),
            (d = " "),
            c === Q
              ? ((d += k.itemCurrent), (e = f + 1))
              : Q > c
              ? ((d += k.itemPast + " " + k.itemPast + "-" + (Q - c)), (e = c))
              : ((d += k.itemFuture + " " + k.itemFuture + "-" + (c - Q)),
                (e = f - c)),
            b.css("z-index", e).attr("class", function (a, b) {
              return b && b.replace(l, "").replace(m, " ") + d;
            });
        }),
          Q >= 0 &&
            ((H && P[Q] !== c) || t(!0),
            i
              ? G.css("transform", "translateX(" + P[Q] + "px)")
              : G.css({ left: P[Q] + "px" })),
          p();
      }
      function v(a) {
        var b = Q;
        if (!(J.length <= 1))
          return (
            "prev" === a
              ? Q > 0
                ? Q--
                : o.loop && (Q = J.length - 1)
              : "next" === a
              ? Q < J.length - 1
                ? Q++
                : o.loop && (Q = 0)
              : "number" == typeof a
              ? (Q = a)
              : a !== c && (Q = J.index(a)),
            (K = J.eq(Q)),
            Q !== b && o.onItemSwitch && o.onItemSwitch.call(O, J[Q], J[b]),
            u(),
            O
          );
      }
      function w(a) {
        return (
          (o.autoplay = a || o.autoplay),
          clearInterval(R),
          (R = setInterval(function () {
            var a = Q;
            v("next"), a !== Q || o.loop || clearInterval(R);
          }, o.autoplay)),
          O
        );
      }
      function x() {
        return clearInterval(R), (R = 0), O;
      }
      function y(a) {
        return x(), o.autoplay && a && (R = -1), O;
      }
      function z() {
        t(!0),
          O.hide().css("visibility", "").addClass(k.active).fadeIn(o.fadeIn);
      }
      function A() {
        return (
          (G = O.find(o.itemContainer).addClass(k.container)),
          (J = G.find(o.itemSelector)),
          J.length <= 1
            ? void 0
            : (J.addClass(k.item).each(function () {
                var b = a(this);
                b.children("." + k.itemContent).length ||
                  b.wrapInner('<div class="' + k.itemContent + '" />');
              }),
              o.click &&
                J.on("click.flipster touchend.flipster", function (b) {
                  S ||
                    (a(this).hasClass(k.itemCurrent) || b.preventDefault(),
                    v(this));
                }),
              j(),
              n(),
              Q >= 0 && v(Q),
              O)
        );
      }
      function B(a) {
        o.keyboard &&
          ((a[0].tabIndex = 0),
          a.on(
            "keydown.flipster",
            d(
              function (a) {
                var b = a.which;
                (37 === b || 39 === b) &&
                  (v(37 === b ? "prev" : "next"), a.preventDefault());
              },
              250,
              !0
            )
          ));
      }
      function C(a) {
        if (o.scrollwheel) {
          var b,
            c,
            e = !1,
            f = 0,
            g = 0,
            i = 0;
          a
            .on("mousewheel.flipster wheel.flipster", function () {
              e = !0;
            })
            .on(
              "mousewheel.flipster wheel.flipster",
              d(function (a) {
                clearTimeout(g),
                  (g = setTimeout(function () {
                    (f = 0), (i = 0);
                  }, 300)),
                  (a = a.originalEvent),
                  (i += a.wheelDelta || -1 * (a.deltaY + a.deltaX)),
                  Math.abs(i) < 25 ||
                    (f++,
                    (b = i > 0 ? "prev" : "next"),
                    c !== b && (f = 0),
                    (c = b),
                    (6 > f || f % 3 === 0) && v(b),
                    (i = 0));
              }, 50)
            ),
            h.on("mousewheel.flipster wheel.flipster", function (a) {
              e && (a.preventDefault(), (e = !1));
            });
        }
      }
      function D(a) {
        if (o.touch) {
          var b,
            c,
            e,
            f,
            g = !1,
            h = d(v, 300);
          a.on({
            "touchstart.flipster": function (a) {
              (a = a.originalEvent),
                (S = a.touches ? a.touches[0].clientX : a.clientX),
                (g = a.touches ? a.touches[0].clientY : a.clientY);
            },
            "touchmove.flipster": d(function (a) {
              S !== !1 &&
                ((a = a.originalEvent),
                (b = a.touches ? a.touches[0].clientX : a.clientX),
                (c = a.touches ? a.touches[0].clientY : a.clientY),
                (e = c - g),
                (f = b - S),
                Math.abs(e) < 100 &&
                  Math.abs(f) >= 30 &&
                  (h(0 > f ? "next" : "prev"), (S = b), a.preventDefault()));
            }, 100),
            "touchend.flipster touchcancel.flipster ": function () {
              S = !1;
            },
          });
        }
      }
      function E() {
        var a;
        if ((O.css("visibility", "hidden"), A(), J.length <= 1))
          return void O.css("visibility", "");
        (a = o.style
          ? "flipster--" + o.style.split(" ").join(" flipster--")
          : !1),
          O.addClass(
            [
              k.main,
              i ? "flipster--transform" : " flipster--no-transform",
              a,
              o.click ? "flipster--click" : "",
            ].join(" ")
          ),
          o.start &&
            (Q = "center" === o.start ? Math.floor(J.length / 2) : o.start),
          v(Q);
        var b = O.find("img");
        if (b.length) {
          var c = 0;
          b.on("load", function () {
            c++, c >= b.length && z();
          }),
            setTimeout(z, 750);
        } else z();
        h.on("resize.flipster", d(t, 400)),
          o.autoplay && w(),
          o.pauseOnHover &&
            G.on("mouseenter.flipster", function () {
              R ? y(!0) : x();
            }).on("mouseleave.flipster", function () {
              -1 === R && w();
            }),
          B(O),
          C(G),
          D(G);
      }
      var F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O = a(this),
        P = [],
        Q = 0,
        R = !1,
        S = !1;
      (F = {
        jump: v,
        next: function () {
          return v("next");
        },
        prev: function () {
          return v("prev");
        },
        play: w,
        stop: x,
        pause: y,
        index: A,
      }),
        O.data("methods", F),
        O.hasClass(k.active) || E();
    });
  };
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()), window);


/***/ }),

/***/ 153:
/*!*********************************!*\
  !*** ./src/js/jquery.inview.js ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 755)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function ($) {

  var inviewObjects = [], viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects.push({ data: data, $element: $(this), element: this });
      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && inviewObjects.length) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      for (var i=0; i<inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      // Clear interval when we no longer have any elements listening
      if (!inviewObjects.length) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    if (!inviewObjects.length) {
      return;
    }

    var i = 0, $elements = $.map(inviewObjects, function(inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      return selector ? $element.find(selector) : $element;
    });

    viewportSize   = viewportSize   || getViewportSize();
    viewportOffset = viewportOffset || getViewportOffset();

    for (; i<inviewObjects.length; i++) {
      // Ignore elements that are not in the DOM tree
      if (!$.contains(documentElement, $elements[i][0])) {
        continue;
      }

      var $element      = $($elements[i]),
          elementSize   = { height: $element[0].offsetHeight, width: $element[0].offsetWidth },
          elementOffset = $element.offset(),
          inView        = $element.data('inview');

      // Don't ask me why because I haven't figured out yet:
      // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
      // Even though it sounds weird:
      // It seems that the execution of this function is interferred by the onresize/onscroll event
      // where viewportOffset and viewportSize are unset
      if (!viewportOffset || !viewportSize) {
        return;
      }

      if (elementOffset.top + elementSize.height > viewportOffset.top &&
          elementOffset.top < viewportOffset.top + viewportSize.height &&
          elementOffset.left + elementSize.width > viewportOffset.left &&
          elementOffset.left < viewportOffset.left + viewportSize.width) {
        if (!inView) {
          $element.data('inview', true).trigger('inview', [true]);
        }
      } else if (inView) {
        $element.data('inview', false).trigger('inview', [false]);
      }
    }
  }

  $(w).on("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
}));


/***/ }),

/***/ 200:
/*!*******************************!*\
  !*** ./src/js/jquery.mask.js ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery.mask.js
 * @version: v1.14.15
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 755)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function() {
                var oldVal = el.data('mask-previus-value') || '',
                    newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret();

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition());
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2pxdWVyeS5ieHNsaWRlci5qcyIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2pxdWVyeS5lYXNpbmcubWluLmpzIiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vLi9zcmMvanMvanF1ZXJ5LmZsaXBzdGVyLm1pbi5qcyIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2pxdWVyeS5pbnZpZXcuanMiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby8uL3NyYy9qcy9qcXVlcnkubWFzay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUI7QUFDSzs7QUFFNUIsYUFBYSxPQUFPLG03QkFBbTdCLFNBQVMsMEJBQTBCLFNBQVMseUJBQXlCLFNBQVMsd0JBQXdCLFNBQVMsd0JBQXdCLFNBQVMsMkJBQTJCLFdBQVcsMEJBQTBCLCtCQUErQiw2Q0FBNkMsb0JBQW9CLE9BQU8sUUFBUSxpREFBaUQsMkJBQTJCLGlCQUFpQiw4Q0FBOEMsb1hBQW9YLDRCQUE0QixzVkFBc1YseUlBQXlJLG9IQUFvSCxXQUFXLHlJQUF5SSxTQUFTLHNLQUFzSyxnREFBZ0QsT0FBTyxjQUFjLDJDQUEyQywyUUFBMlEsOEZBQThGLHNLQUFzSyxtREFBbUQsMkJBQTJCLGFBQWEsa0JBQWtCLHdGQUF3RixzU0FBc1MsNENBQTRDLDRDQUE0Qyw4Q0FBOEMseWNBQXljLGlCQUFpQixxREFBcUQsMERBQTBELG9DQUFvQyxhQUFhLGtCQUFrQix1Q0FBdUMsRUFBRSxNQUFNLGNBQWMsMEVBQTBFLDBMQUEwTCxrR0FBa0csb2hCQUFvaEIsY0FBYyxjQUFjLDBFQUEwRSxrRUFBa0UsMkJBQTJCLDBCQUEwQixpRkFBaUYscUNBQXFDLGtCQUFrQix1REFBdUQseUJBQXlCLHlIQUF5SCwrQkFBK0IsNFhBQTRYLGNBQWMsYUFBYSxzTEFBc0wsY0FBYyxpREFBaUQs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Q0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyxFQUFFLCtDQUFNOzs7Ozs7Ozs7OztBQ3plVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXlDO0FBQy9DO0FBQ0EsSUFBSSxpQ0FBTyxDQUFDLHNDQUFRLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUMvQixHQUFHLE1BQU0sRUFNTjtBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLCtDQUErQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsVUFBVSx3QkFBd0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsbUVBQW1FO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDN0lEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQTBDO0FBQ2xELFFBQVEsaUNBQU8sQ0FBQyxzQ0FBUSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDbkMsS0FBSyxNQUFNLEVBSU47O0FBRUwsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBLCtCQUErQixpQkFBaUI7QUFDaEQ7O0FBRUE7O0FBRUEsNEVBQTRFLEVBQUUsS0FBSyxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsb0ZBQW9GO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDBDQUEwQywwQ0FBMEM7QUFDcEY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRCQUE0QjtBQUN6RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQscUNBQXFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDLGtCQUFrQiw4QkFBOEI7QUFDaEQsa0JBQWtCLCtCQUErQjtBQUNqRCxrQkFBa0IsdUJBQXVCO0FBQ3pDLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6ImJvdHRvbS1zcmNfanNfanF1ZXJ5X2IuYnVuZGxlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuIWZ1bmN0aW9uKHQpe3ZhciBlPXttb2RlOlwiaG9yaXpvbnRhbFwiLHNsaWRlU2VsZWN0b3I6XCJcIixpbmZpbml0ZUxvb3A6ITAsaGlkZUNvbnRyb2xPbkVuZDohMSxzcGVlZDo1MDAsZWFzaW5nOm51bGwsc2xpZGVNYXJnaW46MCxzdGFydFNsaWRlOjAscmFuZG9tU3RhcnQ6ITEsY2FwdGlvbnM6ITEsdGlja2VyOiExLHRpY2tlckhvdmVyOiExLGFkYXB0aXZlSGVpZ2h0OiExLGFkYXB0aXZlSGVpZ2h0U3BlZWQ6NTAwLHZpZGVvOiExLHVzZUNTUzohMCxwcmVsb2FkSW1hZ2VzOlwidmlzaWJsZVwiLHJlc3BvbnNpdmU6ITAsc2xpZGVaSW5kZXg6NTAsd3JhcHBlckNsYXNzOlwiYngtd3JhcHBlclwiLHRvdWNoRW5hYmxlZDohMCxzd2lwZVRocmVzaG9sZDo1MCxvbmVUb09uZVRvdWNoOiEwLHByZXZlbnREZWZhdWx0U3dpcGVYOiEwLHByZXZlbnREZWZhdWx0U3dpcGVZOiExLGFyaWFMaXZlOiEwLGFyaWFIaWRkZW46ITAsa2V5Ym9hcmRFbmFibGVkOiExLHBhZ2VyOiEwLHBhZ2VyVHlwZTpcImZ1bGxcIixwYWdlclNob3J0U2VwYXJhdG9yOlwiIC8gXCIscGFnZXJTZWxlY3RvcjpudWxsLGJ1aWxkUGFnZXI6bnVsbCxwYWdlckN1c3RvbTpudWxsLGNvbnRyb2xzOiEwLG5leHRUZXh0OlwiTmV4dFwiLHByZXZUZXh0OlwiUHJldlwiLG5leHRTZWxlY3RvcjpudWxsLHByZXZTZWxlY3RvcjpudWxsLGF1dG9Db250cm9sczohMSxzdGFydFRleHQ6XCJTdGFydFwiLHN0b3BUZXh0OlwiU3RvcFwiLGF1dG9Db250cm9sc0NvbWJpbmU6ITEsYXV0b0NvbnRyb2xzU2VsZWN0b3I6bnVsbCxhdXRvOiExLHBhdXNlOjRlMyxhdXRvU3RhcnQ6ITAsYXV0b0RpcmVjdGlvbjpcIm5leHRcIixzdG9wQXV0b09uQ2xpY2s6ITEsYXV0b0hvdmVyOiExLGF1dG9EZWxheTowLGF1dG9TbGlkZUZvck9uZVBhZ2U6ITEsbWluU2xpZGVzOjEsbWF4U2xpZGVzOjEsbW92ZVNsaWRlczowLHNsaWRlV2lkdGg6MCxzaHJpbmtJdGVtczohMSxvblNsaWRlckxvYWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sb25TbGlkZUJlZm9yZTpmdW5jdGlvbigpe3JldHVybiEwfSxvblNsaWRlQWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sb25TbGlkZU5leHQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sb25TbGlkZVByZXY6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sb25TbGlkZXJSZXNpemU6ZnVuY3Rpb24oKXtyZXR1cm4hMH19O3QuZm4uYnhTbGlkZXI9ZnVuY3Rpb24obil7aWYoMD09PXRoaXMubGVuZ3RoKXJldHVybiB0aGlzO2lmKHRoaXMubGVuZ3RoPjEpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3QodGhpcykuYnhTbGlkZXIobil9KSx0aGlzO3ZhciBzPXt9LG89dGhpcyxyPXQod2luZG93KS53aWR0aCgpLGE9dCh3aW5kb3cpLmhlaWdodCgpO2lmKCF0KG8pLmRhdGEoXCJieFNsaWRlclwiKSl7dmFyIGw9ZnVuY3Rpb24oKXt0KG8pLmRhdGEoXCJieFNsaWRlclwiKXx8KHMuc2V0dGluZ3M9dC5leHRlbmQoe30sZSxuKSxzLnNldHRpbmdzLnNsaWRlV2lkdGg9cGFyc2VJbnQocy5zZXR0aW5ncy5zbGlkZVdpZHRoKSxzLmNoaWxkcmVuPW8uY2hpbGRyZW4ocy5zZXR0aW5ncy5zbGlkZVNlbGVjdG9yKSxzLmNoaWxkcmVuLmxlbmd0aDxzLnNldHRpbmdzLm1pblNsaWRlcyYmKHMuc2V0dGluZ3MubWluU2xpZGVzPXMuY2hpbGRyZW4ubGVuZ3RoKSxzLmNoaWxkcmVuLmxlbmd0aDxzLnNldHRpbmdzLm1heFNsaWRlcyYmKHMuc2V0dGluZ3MubWF4U2xpZGVzPXMuY2hpbGRyZW4ubGVuZ3RoKSxzLnNldHRpbmdzLnJhbmRvbVN0YXJ0JiYocy5zZXR0aW5ncy5zdGFydFNsaWRlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzLmNoaWxkcmVuLmxlbmd0aCkpLHMuYWN0aXZlPXtpbmRleDpzLnNldHRpbmdzLnN0YXJ0U2xpZGV9LHMuY2Fyb3VzZWw9cy5zZXR0aW5ncy5taW5TbGlkZXM+MXx8cy5zZXR0aW5ncy5tYXhTbGlkZXM+MSxzLmNhcm91c2VsJiYocy5zZXR0aW5ncy5wcmVsb2FkSW1hZ2VzPVwiYWxsXCIpLHMubWluVGhyZXNob2xkPXMuc2V0dGluZ3MubWluU2xpZGVzKnMuc2V0dGluZ3Muc2xpZGVXaWR0aCsocy5zZXR0aW5ncy5taW5TbGlkZXMtMSkqcy5zZXR0aW5ncy5zbGlkZU1hcmdpbixzLm1heFRocmVzaG9sZD1zLnNldHRpbmdzLm1heFNsaWRlcypzLnNldHRpbmdzLnNsaWRlV2lkdGgrKHMuc2V0dGluZ3MubWF4U2xpZGVzLTEpKnMuc2V0dGluZ3Muc2xpZGVNYXJnaW4scy53b3JraW5nPSExLHMuY29udHJvbHM9e30scy5pbnRlcnZhbD1udWxsLHMuYW5pbVByb3A9XCJ2ZXJ0aWNhbFwiPT09cy5zZXR0aW5ncy5tb2RlP1widG9wXCI6XCJsZWZ0XCIscy51c2luZ0NTUz1zLnNldHRpbmdzLnVzZUNTUyYmXCJmYWRlXCIhPT1zLnNldHRpbmdzLm1vZGUmJmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1bXCJXZWJraXRQZXJzcGVjdGl2ZVwiLFwiTW96UGVyc3BlY3RpdmVcIixcIk9QZXJzcGVjdGl2ZVwiLFwibXNQZXJzcGVjdGl2ZVwiXSxpPTA7aTxlLmxlbmd0aDtpKyspaWYodm9pZCAwIT09dC5zdHlsZVtlW2ldXSlyZXR1cm4gcy5jc3NQcmVmaXg9ZVtpXS5yZXBsYWNlKFwiUGVyc3BlY3RpdmVcIixcIlwiKS50b0xvd2VyQ2FzZSgpLHMuYW5pbVByb3A9XCItXCIrcy5jc3NQcmVmaXgrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksXCJ2ZXJ0aWNhbFwiPT09cy5zZXR0aW5ncy5tb2RlJiYocy5zZXR0aW5ncy5tYXhTbGlkZXM9cy5zZXR0aW5ncy5taW5TbGlkZXMpLG8uZGF0YShcIm9yaWdTdHlsZVwiLG8uYXR0cihcInN0eWxlXCIpKSxvLmNoaWxkcmVuKHMuc2V0dGluZ3Muc2xpZGVTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpe3QodGhpcykuZGF0YShcIm9yaWdTdHlsZVwiLHQodGhpcykuYXR0cihcInN0eWxlXCIpKX0pLGQoKSl9LGQ9ZnVuY3Rpb24oKXt2YXIgZT1zLmNoaWxkcmVuLmVxKHMuc2V0dGluZ3Muc3RhcnRTbGlkZSk7by53cmFwKCc8ZGl2IGNsYXNzPVwiJytzLnNldHRpbmdzLndyYXBwZXJDbGFzcysnXCI+PGRpdiBjbGFzcz1cImJ4LXZpZXdwb3J0XCI+PC9kaXY+PC9kaXY+Jykscy52aWV3cG9ydD1vLnBhcmVudCgpLHMuc2V0dGluZ3MuYXJpYUxpdmUmJiFzLnNldHRpbmdzLnRpY2tlciYmcy52aWV3cG9ydC5hdHRyKFwiYXJpYS1saXZlXCIsXCJwb2xpdGVcIikscy5sb2FkZXI9dCgnPGRpdiBjbGFzcz1cImJ4LWxvYWRpbmdcIiAvPicpLHMudmlld3BvcnQucHJlcGVuZChzLmxvYWRlciksby5jc3Moe3dpZHRoOlwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlPzFlMypzLmNoaWxkcmVuLmxlbmd0aCsyMTUrXCIlXCI6XCJhdXRvXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkscy51c2luZ0NTUyYmcy5zZXR0aW5ncy5lYXNpbmc/by5jc3MoXCItXCIrcy5jc3NQcmVmaXgrXCItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIixzLnNldHRpbmdzLmVhc2luZyk6cy5zZXR0aW5ncy5lYXNpbmd8fChzLnNldHRpbmdzLmVhc2luZz1cInN3aW5nXCIpLHMudmlld3BvcnQuY3NzKHt3aWR0aDpcIjEwMCVcIixvdmVyZmxvdzpcImhpZGRlblwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLHMudmlld3BvcnQucGFyZW50KCkuY3NzKHttYXhXaWR0aDpoKCl9KSxzLmNoaWxkcmVuLmNzcyh7ZmxvYXQ6XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/XCJsZWZ0XCI6XCJub25lXCIsbGlzdFN0eWxlOlwibm9uZVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLHMuY2hpbGRyZW4uY3NzKFwid2lkdGhcIix1KCkpLFwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlJiZzLnNldHRpbmdzLnNsaWRlTWFyZ2luPjAmJnMuY2hpbGRyZW4uY3NzKFwibWFyZ2luUmlnaHRcIixzLnNldHRpbmdzLnNsaWRlTWFyZ2luKSxcInZlcnRpY2FsXCI9PT1zLnNldHRpbmdzLm1vZGUmJnMuc2V0dGluZ3Muc2xpZGVNYXJnaW4+MCYmcy5jaGlsZHJlbi5jc3MoXCJtYXJnaW5Cb3R0b21cIixzLnNldHRpbmdzLnNsaWRlTWFyZ2luKSxcImZhZGVcIj09PXMuc2V0dGluZ3MubW9kZSYmKHMuY2hpbGRyZW4uY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsekluZGV4OjAsZGlzcGxheTpcIm5vbmVcIn0pLHMuY2hpbGRyZW4uZXEocy5zZXR0aW5ncy5zdGFydFNsaWRlKS5jc3Moe3pJbmRleDpzLnNldHRpbmdzLnNsaWRlWkluZGV4LGRpc3BsYXk6XCJibG9ja1wifSkpLHMuY29udHJvbHMuZWw9dCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzXCIgLz4nKSxzLnNldHRpbmdzLmNhcHRpb25zJiZQKCkscy5hY3RpdmUubGFzdD1zLnNldHRpbmdzLnN0YXJ0U2xpZGU9PT1mKCktMSxzLnNldHRpbmdzLnZpZGVvJiZvLmZpdFZpZHMoKSwoXCJhbGxcIj09PXMuc2V0dGluZ3MucHJlbG9hZEltYWdlc3x8cy5zZXR0aW5ncy50aWNrZXIpJiYoZT1zLmNoaWxkcmVuKSxzLnNldHRpbmdzLnRpY2tlcj9zLnNldHRpbmdzLnBhZ2VyPSExOihzLnNldHRpbmdzLmNvbnRyb2xzJiZDKCkscy5zZXR0aW5ncy5hdXRvJiZzLnNldHRpbmdzLmF1dG9Db250cm9scyYmVCgpLHMuc2V0dGluZ3MucGFnZXImJncoKSwocy5zZXR0aW5ncy5jb250cm9sc3x8cy5zZXR0aW5ncy5hdXRvQ29udHJvbHN8fHMuc2V0dGluZ3MucGFnZXIpJiZzLnZpZXdwb3J0LmFmdGVyKHMuY29udHJvbHMuZWwpKSxjKGUsZyl9LGM9ZnVuY3Rpb24oZSxpKXt2YXIgbj1lLmZpbmQoJ2ltZzpub3QoW3NyYz1cIlwiXSksIGlmcmFtZScpLmxlbmd0aCxzPTA7MCE9PW4/ZS5maW5kKCdpbWc6bm90KFtzcmM9XCJcIl0pLCBpZnJhbWUnKS5lYWNoKGZ1bmN0aW9uKCl7dCh0aGlzKS5vbmUoXCJsb2FkIGVycm9yXCIsZnVuY3Rpb24oKXsrK3M9PT1uJiZpKCl9KS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5jb21wbGV0ZSYmdCh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKX0pfSk6aSgpfSxnPWZ1bmN0aW9uKCl7aWYocy5zZXR0aW5ncy5pbmZpbml0ZUxvb3AmJlwiZmFkZVwiIT09cy5zZXR0aW5ncy5tb2RlJiYhcy5zZXR0aW5ncy50aWNrZXIpe3ZhciBlPVwidmVydGljYWxcIj09PXMuc2V0dGluZ3MubW9kZT9zLnNldHRpbmdzLm1pblNsaWRlczpzLnNldHRpbmdzLm1heFNsaWRlcyxpPXMuY2hpbGRyZW4uc2xpY2UoMCxlKS5jbG9uZSghMCkuYWRkQ2xhc3MoXCJieC1jbG9uZVwiKSxuPXMuY2hpbGRyZW4uc2xpY2UoLWUpLmNsb25lKCEwKS5hZGRDbGFzcyhcImJ4LWNsb25lXCIpO3Muc2V0dGluZ3MuYXJpYUhpZGRlbiYmKGkuYXR0cihcImFyaWEtaGlkZGVuXCIsITApLG4uYXR0cihcImFyaWEtaGlkZGVuXCIsITApKSxvLmFwcGVuZChpKS5wcmVwZW5kKG4pfXMubG9hZGVyLnJlbW92ZSgpLG0oKSxcInZlcnRpY2FsXCI9PT1zLnNldHRpbmdzLm1vZGUmJihzLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0PSEwKSxzLnZpZXdwb3J0LmhlaWdodChwKCkpLG8ucmVkcmF3U2xpZGVyKCkscy5zZXR0aW5ncy5vblNsaWRlckxvYWQuY2FsbChvLHMuYWN0aXZlLmluZGV4KSxzLmluaXRpYWxpemVkPSEwLHMuc2V0dGluZ3MucmVzcG9uc2l2ZSYmdCh3aW5kb3cpLmJpbmQoXCJyZXNpemVcIixaKSxzLnNldHRpbmdzLmF1dG8mJnMuc2V0dGluZ3MuYXV0b1N0YXJ0JiYoZigpPjF8fHMuc2V0dGluZ3MuYXV0b1NsaWRlRm9yT25lUGFnZSkmJkgoKSxzLnNldHRpbmdzLnRpY2tlciYmVygpLHMuc2V0dGluZ3MucGFnZXImJkkocy5zZXR0aW5ncy5zdGFydFNsaWRlKSxzLnNldHRpbmdzLmNvbnRyb2xzJiZEKCkscy5zZXR0aW5ncy50b3VjaEVuYWJsZWQmJiFzLnNldHRpbmdzLnRpY2tlciYmTigpLHMuc2V0dGluZ3Mua2V5Ym9hcmRFbmFibGVkJiYhcy5zZXR0aW5ncy50aWNrZXImJnQoZG9jdW1lbnQpLmtleWRvd24oRil9LHA9ZnVuY3Rpb24oKXt2YXIgZT0wLG49dCgpO2lmKFwidmVydGljYWxcIj09PXMuc2V0dGluZ3MubW9kZXx8cy5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodClpZihzLmNhcm91c2VsKXt2YXIgbz0xPT09cy5zZXR0aW5ncy5tb3ZlU2xpZGVzP3MuYWN0aXZlLmluZGV4OnMuYWN0aXZlLmluZGV4KngoKTtmb3Iobj1zLmNoaWxkcmVuLmVxKG8pLGk9MTtpPD1zLnNldHRpbmdzLm1heFNsaWRlcy0xO2krKyluPW8raT49cy5jaGlsZHJlbi5sZW5ndGg/bi5hZGQocy5jaGlsZHJlbi5lcShpLTEpKTpuLmFkZChzLmNoaWxkcmVuLmVxKG8raSkpfWVsc2Ugbj1zLmNoaWxkcmVuLmVxKHMuYWN0aXZlLmluZGV4KTtlbHNlIG49cy5jaGlsZHJlbjtyZXR1cm5cInZlcnRpY2FsXCI9PT1zLnNldHRpbmdzLm1vZGU/KG4uZWFjaChmdW5jdGlvbihpKXtlKz10KHRoaXMpLm91dGVySGVpZ2h0KCl9KSxzLnNldHRpbmdzLnNsaWRlTWFyZ2luPjAmJihlKz1zLnNldHRpbmdzLnNsaWRlTWFyZ2luKihzLnNldHRpbmdzLm1pblNsaWRlcy0xKSkpOmU9TWF0aC5tYXguYXBwbHkoTWF0aCxuLm1hcChmdW5jdGlvbigpe3JldHVybiB0KHRoaXMpLm91dGVySGVpZ2h0KCExKX0pLmdldCgpKSxcImJvcmRlci1ib3hcIj09PXMudmlld3BvcnQuY3NzKFwiYm94LXNpemluZ1wiKT9lKz1wYXJzZUZsb2F0KHMudmlld3BvcnQuY3NzKFwicGFkZGluZy10b3BcIikpK3BhcnNlRmxvYXQocy52aWV3cG9ydC5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSkrcGFyc2VGbG9hdChzLnZpZXdwb3J0LmNzcyhcImJvcmRlci10b3Atd2lkdGhcIikpK3BhcnNlRmxvYXQocy52aWV3cG9ydC5jc3MoXCJib3JkZXItYm90dG9tLXdpZHRoXCIpKTpcInBhZGRpbmctYm94XCI9PT1zLnZpZXdwb3J0LmNzcyhcImJveC1zaXppbmdcIikmJihlKz1wYXJzZUZsb2F0KHMudmlld3BvcnQuY3NzKFwicGFkZGluZy10b3BcIikpK3BhcnNlRmxvYXQocy52aWV3cG9ydC5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSkpLGV9LGg9ZnVuY3Rpb24oKXt2YXIgdD1cIjEwMCVcIjtyZXR1cm4gcy5zZXR0aW5ncy5zbGlkZVdpZHRoPjAmJih0PVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlP3Muc2V0dGluZ3MubWF4U2xpZGVzKnMuc2V0dGluZ3Muc2xpZGVXaWR0aCsocy5zZXR0aW5ncy5tYXhTbGlkZXMtMSkqcy5zZXR0aW5ncy5zbGlkZU1hcmdpbjpzLnNldHRpbmdzLnNsaWRlV2lkdGgpLHR9LHU9ZnVuY3Rpb24oKXt2YXIgdD1zLnNldHRpbmdzLnNsaWRlV2lkdGgsZT1zLnZpZXdwb3J0LndpZHRoKCk7aWYoMD09PXMuc2V0dGluZ3Muc2xpZGVXaWR0aHx8cy5zZXR0aW5ncy5zbGlkZVdpZHRoPmUmJiFzLmNhcm91c2VsfHxcInZlcnRpY2FsXCI9PT1zLnNldHRpbmdzLm1vZGUpdD1lO2Vsc2UgaWYocy5zZXR0aW5ncy5tYXhTbGlkZXM+MSYmXCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGUpe2lmKGU+cy5tYXhUaHJlc2hvbGQpcmV0dXJuIHQ7ZTxzLm1pblRocmVzaG9sZD90PShlLXMuc2V0dGluZ3Muc2xpZGVNYXJnaW4qKHMuc2V0dGluZ3MubWluU2xpZGVzLTEpKS9zLnNldHRpbmdzLm1pblNsaWRlczpzLnNldHRpbmdzLnNocmlua0l0ZW1zJiYodD1NYXRoLmZsb29yKChlK3Muc2V0dGluZ3Muc2xpZGVNYXJnaW4pL01hdGguY2VpbCgoZStzLnNldHRpbmdzLnNsaWRlTWFyZ2luKS8odCtzLnNldHRpbmdzLnNsaWRlTWFyZ2luKSktcy5zZXR0aW5ncy5zbGlkZU1hcmdpbikpfXJldHVybiB0fSx2PWZ1bmN0aW9uKCl7dmFyIHQ9MSxlPW51bGw7cmV0dXJuXCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGUmJnMuc2V0dGluZ3Muc2xpZGVXaWR0aD4wP3Mudmlld3BvcnQud2lkdGgoKTxzLm1pblRocmVzaG9sZD90PXMuc2V0dGluZ3MubWluU2xpZGVzOnMudmlld3BvcnQud2lkdGgoKT5zLm1heFRocmVzaG9sZD90PXMuc2V0dGluZ3MubWF4U2xpZGVzOihlPXMuY2hpbGRyZW4uZmlyc3QoKS53aWR0aCgpK3Muc2V0dGluZ3Muc2xpZGVNYXJnaW4sdD1NYXRoLmZsb29yKChzLnZpZXdwb3J0LndpZHRoKCkrcy5zZXR0aW5ncy5zbGlkZU1hcmdpbikvZSkpOlwidmVydGljYWxcIj09PXMuc2V0dGluZ3MubW9kZSYmKHQ9cy5zZXR0aW5ncy5taW5TbGlkZXMpLHR9LGY9ZnVuY3Rpb24oKXt2YXIgdD0wLGU9MCxpPTA7aWYocy5zZXR0aW5ncy5tb3ZlU2xpZGVzPjApaWYocy5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApdD1NYXRoLmNlaWwocy5jaGlsZHJlbi5sZW5ndGgveCgpKTtlbHNlIGZvcig7ZTxzLmNoaWxkcmVuLmxlbmd0aDspKyt0LGU9aSt2KCksaSs9cy5zZXR0aW5ncy5tb3ZlU2xpZGVzPD12KCk/cy5zZXR0aW5ncy5tb3ZlU2xpZGVzOnYoKTtlbHNlIHQ9TWF0aC5jZWlsKHMuY2hpbGRyZW4ubGVuZ3RoL3YoKSk7cmV0dXJuIHR9LHg9ZnVuY3Rpb24oKXtyZXR1cm4gcy5zZXR0aW5ncy5tb3ZlU2xpZGVzPjAmJnMuc2V0dGluZ3MubW92ZVNsaWRlczw9digpP3Muc2V0dGluZ3MubW92ZVNsaWRlczp2KCl9LG09ZnVuY3Rpb24oKXt2YXIgdCxlLGk7cy5jaGlsZHJlbi5sZW5ndGg+cy5zZXR0aW5ncy5tYXhTbGlkZXMmJnMuYWN0aXZlLmxhc3QmJiFzLnNldHRpbmdzLmluZmluaXRlTG9vcD9cImhvcml6b250YWxcIj09PXMuc2V0dGluZ3MubW9kZT8odD0oZT1zLmNoaWxkcmVuLmxhc3QoKSkucG9zaXRpb24oKSxTKC0odC5sZWZ0LShzLnZpZXdwb3J0LndpZHRoKCktZS5vdXRlcldpZHRoKCkpKSxcInJlc2V0XCIsMCkpOlwidmVydGljYWxcIj09PXMuc2V0dGluZ3MubW9kZSYmKGk9cy5jaGlsZHJlbi5sZW5ndGgtcy5zZXR0aW5ncy5taW5TbGlkZXMsdD1zLmNoaWxkcmVuLmVxKGkpLnBvc2l0aW9uKCksUygtdC50b3AsXCJyZXNldFwiLDApKToodD1zLmNoaWxkcmVuLmVxKHMuYWN0aXZlLmluZGV4KngoKSkucG9zaXRpb24oKSxzLmFjdGl2ZS5pbmRleD09PWYoKS0xJiYocy5hY3RpdmUubGFzdD0hMCksdm9pZCAwIT09dCYmKFwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlP1MoLXQubGVmdCxcInJlc2V0XCIsMCk6XCJ2ZXJ0aWNhbFwiPT09cy5zZXR0aW5ncy5tb2RlJiZTKC10LnRvcCxcInJlc2V0XCIsMCkpKX0sUz1mdW5jdGlvbihlLGksbixyKXt2YXIgYSxsO3MudXNpbmdDU1M/KGw9XCJ2ZXJ0aWNhbFwiPT09cy5zZXR0aW5ncy5tb2RlP1widHJhbnNsYXRlM2QoMCwgXCIrZStcInB4LCAwKVwiOlwidHJhbnNsYXRlM2QoXCIrZStcInB4LCAwLCAwKVwiLG8uY3NzKFwiLVwiK3MuY3NzUHJlZml4K1wiLXRyYW5zaXRpb24tZHVyYXRpb25cIixuLzFlMytcInNcIiksXCJzbGlkZVwiPT09aT8oby5jc3Mocy5hbmltUHJvcCxsKSwwIT09bj9vLmJpbmQoXCJ0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oZSl7dChlLnRhcmdldCkuaXMobykmJihvLnVuYmluZChcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmRcIikscSgpKX0pOnEoKSk6XCJyZXNldFwiPT09aT9vLmNzcyhzLmFuaW1Qcm9wLGwpOlwidGlja2VyXCI9PT1pJiYoby5jc3MoXCItXCIrcy5jc3NQcmVmaXgrXCItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIixcImxpbmVhclwiKSxvLmNzcyhzLmFuaW1Qcm9wLGwpLDAhPT1uP28uYmluZChcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbihlKXt0KGUudGFyZ2V0KS5pcyhvKSYmKG8udW5iaW5kKFwidHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZFwiKSxTKHIucmVzZXRWYWx1ZSxcInJlc2V0XCIsMCksTCgpKX0pOihTKHIucmVzZXRWYWx1ZSxcInJlc2V0XCIsMCksTCgpKSkpOigoYT17fSlbcy5hbmltUHJvcF09ZSxcInNsaWRlXCI9PT1pP28uYW5pbWF0ZShhLG4scy5zZXR0aW5ncy5lYXNpbmcsZnVuY3Rpb24oKXtxKCl9KTpcInJlc2V0XCI9PT1pP28uY3NzKHMuYW5pbVByb3AsZSk6XCJ0aWNrZXJcIj09PWkmJm8uYW5pbWF0ZShhLG4sXCJsaW5lYXJcIixmdW5jdGlvbigpe1Moci5yZXNldFZhbHVlLFwicmVzZXRcIiwwKSxMKCl9KSl9LGI9ZnVuY3Rpb24oKXtmb3IodmFyIGU9ZigpLGk9MDtpPGU7aSsrKVwiXCIscy5zZXR0aW5ncy5idWlsZFBhZ2VyJiZ0LmlzRnVuY3Rpb24ocy5zZXR0aW5ncy5idWlsZFBhZ2VyKXx8cy5zZXR0aW5ncy5wYWdlckN1c3RvbT8ocy5zZXR0aW5ncy5idWlsZFBhZ2VyKGkpLHMucGFnZXJFbC5hZGRDbGFzcyhcImJ4LWN1c3RvbS1wYWdlclwiKSk6aSsxO3MucGFnZXJFbC5odG1sKFwiXCIpfSx3PWZ1bmN0aW9uKCl7cy5zZXR0aW5ncy5wYWdlckN1c3RvbT9zLnBhZ2VyRWw9dChzLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKToocy5wYWdlckVsPXQoXCJcIikscy5zZXR0aW5ncy5wYWdlclNlbGVjdG9yP3Qocy5zZXR0aW5ncy5wYWdlclNlbGVjdG9yKS5odG1sKHMucGFnZXJFbCk6cy5jb250cm9scy5lbC5hZGRDbGFzcyhcImJ4LWhhcy1wYWdlclwiKS5hcHBlbmQocy5wYWdlckVsKSxiKCkpLHMucGFnZXJFbC5vbihcImNsaWNrIHRvdWNoZW5kXCIsXCJhXCIseil9LEM9ZnVuY3Rpb24oKXtzLmNvbnRyb2xzLm5leHQ9dCgnPGEgY2xhc3M9XCJieC1uZXh0XCIgaHJlZj1cIlwiPicrcy5zZXR0aW5ncy5uZXh0VGV4dCtcIjwvYT5cIikscy5jb250cm9scy5wcmV2PXQoJzxhIGNsYXNzPVwiYngtcHJldlwiIGhyZWY9XCJcIj4nK3Muc2V0dGluZ3MucHJldlRleHQrXCI8L2E+XCIpLHMuY29udHJvbHMubmV4dC5iaW5kKFwiY2xpY2sgdG91Y2hlbmRcIixFKSxzLmNvbnRyb2xzLnByZXYuYmluZChcImNsaWNrIHRvdWNoZW5kXCIsaykscy5zZXR0aW5ncy5uZXh0U2VsZWN0b3ImJnQocy5zZXR0aW5ncy5uZXh0U2VsZWN0b3IpLmFwcGVuZChzLmNvbnRyb2xzLm5leHQpLHMuc2V0dGluZ3MucHJldlNlbGVjdG9yJiZ0KHMuc2V0dGluZ3MucHJldlNlbGVjdG9yKS5hcHBlbmQocy5jb250cm9scy5wcmV2KSxzLnNldHRpbmdzLm5leHRTZWxlY3Rvcnx8cy5zZXR0aW5ncy5wcmV2U2VsZWN0b3J8fChzLmNvbnRyb2xzLmRpcmVjdGlvbkVsPXQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1kaXJlY3Rpb25cIiAvPicpLHMuY29udHJvbHMuZGlyZWN0aW9uRWwuYXBwZW5kKHMuY29udHJvbHMucHJldikuYXBwZW5kKHMuY29udHJvbHMubmV4dCkscy5jb250cm9scy5lbC5hZGRDbGFzcyhcImJ4LWhhcy1jb250cm9scy1kaXJlY3Rpb25cIikuYXBwZW5kKHMuY29udHJvbHMuZGlyZWN0aW9uRWwpKX0sVD1mdW5jdGlvbigpe3MuY29udHJvbHMuc3RhcnQ9dCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzLWF1dG8taXRlbVwiPjxhIGNsYXNzPVwiYngtc3RhcnRcIiBocmVmPVwiXCI+JytzLnNldHRpbmdzLnN0YXJ0VGV4dCtcIjwvYT48L2Rpdj5cIikscy5jb250cm9scy5zdG9wPXQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1hdXRvLWl0ZW1cIj48YSBjbGFzcz1cImJ4LXN0b3BcIiBocmVmPVwiXCI+JytzLnNldHRpbmdzLnN0b3BUZXh0K1wiPC9hPjwvZGl2PlwiKSxzLmNvbnRyb2xzLmF1dG9FbD10KCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHMtYXV0b1wiIC8+Jykscy5jb250cm9scy5hdXRvRWwub24oXCJjbGlja1wiLFwiLmJ4LXN0YXJ0XCIsTSkscy5jb250cm9scy5hdXRvRWwub24oXCJjbGlja1wiLFwiLmJ4LXN0b3BcIix5KSxzLnNldHRpbmdzLmF1dG9Db250cm9sc0NvbWJpbmU/cy5jb250cm9scy5hdXRvRWwuYXBwZW5kKHMuY29udHJvbHMuc3RhcnQpOnMuY29udHJvbHMuYXV0b0VsLmFwcGVuZChzLmNvbnRyb2xzLnN0YXJ0KS5hcHBlbmQocy5jb250cm9scy5zdG9wKSxzLnNldHRpbmdzLmF1dG9Db250cm9sc1NlbGVjdG9yP3Qocy5zZXR0aW5ncy5hdXRvQ29udHJvbHNTZWxlY3RvcikuaHRtbChzLmNvbnRyb2xzLmF1dG9FbCk6cy5jb250cm9scy5lbC5hZGRDbGFzcyhcImJ4LWhhcy1jb250cm9scy1hdXRvXCIpLmFwcGVuZChzLmNvbnRyb2xzLmF1dG9FbCksQShzLnNldHRpbmdzLmF1dG9TdGFydD9cInN0b3BcIjpcInN0YXJ0XCIpfSxQPWZ1bmN0aW9uKCl7cy5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBpPXQodGhpcykuZmluZChcImltZzpmaXJzdFwiKS5hdHRyKFwidGl0bGVcIik7dm9pZCAwIT09aSYmKFwiXCIraSkubGVuZ3RoJiZ0KHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImJ4LWNhcHRpb25cIj48c3Bhbj4nK2krXCI8L3NwYW4+PC9kaXY+XCIpfSl9LEU9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHMuY29udHJvbHMuZWwuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8KHMuc2V0dGluZ3MuYXV0byYmcy5zZXR0aW5ncy5zdG9wQXV0b09uQ2xpY2smJm8uc3RvcEF1dG8oKSxvLmdvVG9OZXh0U2xpZGUoKSl9LGs9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHMuY29udHJvbHMuZWwuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8KHMuc2V0dGluZ3MuYXV0byYmcy5zZXR0aW5ncy5zdG9wQXV0b09uQ2xpY2smJm8uc3RvcEF1dG8oKSxvLmdvVG9QcmV2U2xpZGUoKSl9LE09ZnVuY3Rpb24odCl7by5zdGFydEF1dG8oKSx0LnByZXZlbnREZWZhdWx0KCl9LHk9ZnVuY3Rpb24odCl7by5zdG9wQXV0bygpLHQucHJldmVudERlZmF1bHQoKX0sej1mdW5jdGlvbihlKXt2YXIgaSxuO2UucHJldmVudERlZmF1bHQoKSxzLmNvbnRyb2xzLmVsLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fChzLnNldHRpbmdzLmF1dG8mJnMuc2V0dGluZ3Muc3RvcEF1dG9PbkNsaWNrJiZvLnN0b3BBdXRvKCksdm9pZCAwIT09KGk9dChlLmN1cnJlbnRUYXJnZXQpKS5hdHRyKFwiZGF0YS1zbGlkZS1pbmRleFwiKSYmKG49cGFyc2VJbnQoaS5hdHRyKFwiZGF0YS1zbGlkZS1pbmRleFwiKSkpIT09cy5hY3RpdmUuaW5kZXgmJm8uZ29Ub1NsaWRlKG4pKX0sST1mdW5jdGlvbihlKXt2YXIgaT1zLmNoaWxkcmVuLmxlbmd0aDtpZihcInNob3J0XCI9PT1zLnNldHRpbmdzLnBhZ2VyVHlwZSlyZXR1cm4gcy5zZXR0aW5ncy5tYXhTbGlkZXM+MSYmKGk9TWF0aC5jZWlsKHMuY2hpbGRyZW4ubGVuZ3RoL3Muc2V0dGluZ3MubWF4U2xpZGVzKSksdm9pZCBzLnBhZ2VyRWwuaHRtbChlKzErcy5zZXR0aW5ncy5wYWdlclNob3J0U2VwYXJhdG9yK2kpO3MucGFnZXJFbC5maW5kKFwiYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxzLnBhZ2VyRWwuZWFjaChmdW5jdGlvbihpLG4pe3QobikuZmluZChcImFcIikuZXEoZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KX0scT1mdW5jdGlvbigpe2lmKHMuc2V0dGluZ3MuaW5maW5pdGVMb29wKXt2YXIgdD1cIlwiOzA9PT1zLmFjdGl2ZS5pbmRleD90PXMuY2hpbGRyZW4uZXEoMCkucG9zaXRpb24oKTpzLmFjdGl2ZS5pbmRleD09PWYoKS0xJiZzLmNhcm91c2VsP3Q9cy5jaGlsZHJlbi5lcSgoZigpLTEpKngoKSkucG9zaXRpb24oKTpzLmFjdGl2ZS5pbmRleD09PXMuY2hpbGRyZW4ubGVuZ3RoLTEmJih0PXMuY2hpbGRyZW4uZXEocy5jaGlsZHJlbi5sZW5ndGgtMSkucG9zaXRpb24oKSksdCYmKFwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlP1MoLXQubGVmdCxcInJlc2V0XCIsMCk6XCJ2ZXJ0aWNhbFwiPT09cy5zZXR0aW5ncy5tb2RlJiZTKC10LnRvcCxcInJlc2V0XCIsMCkpfXMud29ya2luZz0hMSxzLnNldHRpbmdzLm9uU2xpZGVBZnRlci5jYWxsKG8scy5jaGlsZHJlbi5lcShzLmFjdGl2ZS5pbmRleCkscy5vbGRJbmRleCxzLmFjdGl2ZS5pbmRleCl9LEE9ZnVuY3Rpb24odCl7cy5zZXR0aW5ncy5hdXRvQ29udHJvbHNDb21iaW5lP3MuY29udHJvbHMuYXV0b0VsLmh0bWwocy5jb250cm9sc1t0XSk6KHMuY29udHJvbHMuYXV0b0VsLmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLHMuY29udHJvbHMuYXV0b0VsLmZpbmQoXCJhOm5vdCguYngtXCIrdCtcIilcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfSxEPWZ1bmN0aW9uKCl7MT09PWYoKT8ocy5jb250cm9scy5wcmV2LmFkZENsYXNzKFwiZGlzYWJsZWRcIikscy5jb250cm9scy5uZXh0LmFkZENsYXNzKFwiZGlzYWJsZWRcIikpOiFzLnNldHRpbmdzLmluZmluaXRlTG9vcCYmcy5zZXR0aW5ncy5oaWRlQ29udHJvbE9uRW5kJiYoMD09PXMuYWN0aXZlLmluZGV4PyhzLmNvbnRyb2xzLnByZXYuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxzLmNvbnRyb2xzLm5leHQucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSk6cy5hY3RpdmUuaW5kZXg9PT1mKCktMT8ocy5jb250cm9scy5uZXh0LmFkZENsYXNzKFwiZGlzYWJsZWRcIikscy5jb250cm9scy5wcmV2LnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIikpOihzLmNvbnRyb2xzLnByZXYucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSxzLmNvbnRyb2xzLm5leHQucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSkpfSxIPWZ1bmN0aW9uKCl7aWYocy5zZXR0aW5ncy5hdXRvRGVsYXk+MClzZXRUaW1lb3V0KG8uc3RhcnRBdXRvLHMuc2V0dGluZ3MuYXV0b0RlbGF5KTtlbHNlIG8uc3RhcnRBdXRvKCksdCh3aW5kb3cpLmZvY3VzKGZ1bmN0aW9uKCl7by5zdGFydEF1dG8oKX0pLmJsdXIoZnVuY3Rpb24oKXtvLnN0b3BBdXRvKCl9KTtzLnNldHRpbmdzLmF1dG9Ib3ZlciYmby5ob3ZlcihmdW5jdGlvbigpe3MuaW50ZXJ2YWwmJihvLnN0b3BBdXRvKCEwKSxzLmF1dG9QYXVzZWQ9ITApfSxmdW5jdGlvbigpe3MuYXV0b1BhdXNlZCYmKG8uc3RhcnRBdXRvKCEwKSxzLmF1dG9QYXVzZWQ9bnVsbCl9KX0sVz1mdW5jdGlvbigpe3ZhciBlLGksbixyLGEsbCxkLGMsZz0wO1wibmV4dFwiPT09cy5zZXR0aW5ncy5hdXRvRGlyZWN0aW9uP28uYXBwZW5kKHMuY2hpbGRyZW4uY2xvbmUoKS5hZGRDbGFzcyhcImJ4LWNsb25lXCIpKTooby5wcmVwZW5kKHMuY2hpbGRyZW4uY2xvbmUoKS5hZGRDbGFzcyhcImJ4LWNsb25lXCIpKSxlPXMuY2hpbGRyZW4uZmlyc3QoKS5wb3NpdGlvbigpLGc9XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/LWUubGVmdDotZS50b3ApLFMoZyxcInJlc2V0XCIsMCkscy5zZXR0aW5ncy5wYWdlcj0hMSxzLnNldHRpbmdzLmNvbnRyb2xzPSExLHMuc2V0dGluZ3MuYXV0b0NvbnRyb2xzPSExLHMuc2V0dGluZ3MudGlja2VySG92ZXImJihzLnVzaW5nQ1NTPyhyPVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlPzQ6NSxzLnZpZXdwb3J0LmhvdmVyKGZ1bmN0aW9uKCl7aT1vLmNzcyhcIi1cIitzLmNzc1ByZWZpeCtcIi10cmFuc2Zvcm1cIiksbj1wYXJzZUZsb2F0KGkuc3BsaXQoXCIsXCIpW3JdKSxTKG4sXCJyZXNldFwiLDApfSxmdW5jdGlvbigpe2M9MCxzLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oZSl7Yys9XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/dCh0aGlzKS5vdXRlcldpZHRoKCEwKTp0KHRoaXMpLm91dGVySGVpZ2h0KCEwKX0pLGE9cy5zZXR0aW5ncy5zcGVlZC9jLGw9XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/XCJsZWZ0XCI6XCJ0b3BcIixkPWEqKGMtTWF0aC5hYnMocGFyc2VJbnQobikpKSxMKGQpfSkpOnMudmlld3BvcnQuaG92ZXIoZnVuY3Rpb24oKXtvLnN0b3AoKX0sZnVuY3Rpb24oKXtjPTAscy5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGUpe2MrPVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlP3QodGhpcykub3V0ZXJXaWR0aCghMCk6dCh0aGlzKS5vdXRlckhlaWdodCghMCl9KSxhPXMuc2V0dGluZ3Muc3BlZWQvYyxsPVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlP1wibGVmdFwiOlwidG9wXCIsZD1hKihjLU1hdGguYWJzKHBhcnNlSW50KG8uY3NzKGwpKSkpLEwoZCl9KSksTCgpfSxMPWZ1bmN0aW9uKHQpe3ZhciBlLGksbj10fHxzLnNldHRpbmdzLnNwZWVkLHI9e2xlZnQ6MCx0b3A6MH0sYT17bGVmdDowLHRvcDowfTtcIm5leHRcIj09PXMuc2V0dGluZ3MuYXV0b0RpcmVjdGlvbj9yPW8uZmluZChcIi5ieC1jbG9uZVwiKS5maXJzdCgpLnBvc2l0aW9uKCk6YT1zLmNoaWxkcmVuLmZpcnN0KCkucG9zaXRpb24oKSxlPVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlPy1yLmxlZnQ6LXIudG9wLGk9XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/LWEubGVmdDotYS50b3AsUyhlLFwidGlja2VyXCIsbix7cmVzZXRWYWx1ZTppfSl9LE89ZnVuY3Rpb24oZSl7dmFyIGk9dCh3aW5kb3cpLG49e3RvcDppLnNjcm9sbFRvcCgpLGxlZnQ6aS5zY3JvbGxMZWZ0KCl9LHM9ZS5vZmZzZXQoKTtyZXR1cm4gbi5yaWdodD1uLmxlZnQraS53aWR0aCgpLG4uYm90dG9tPW4udG9wK2kuaGVpZ2h0KCkscy5yaWdodD1zLmxlZnQrZS5vdXRlcldpZHRoKCkscy5ib3R0b209cy50b3ArZS5vdXRlckhlaWdodCgpLCEobi5yaWdodDxzLmxlZnR8fG4ubGVmdD5zLnJpZ2h0fHxuLmJvdHRvbTxzLnRvcHx8bi50b3A+cy5ib3R0b20pfSxGPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO2lmKG51bGw9PW5ldyBSZWdFeHAoZSxbXCJpXCJdKS5leGVjKFwiaW5wdXR8dGV4dGFyZWFcIikmJk8obykpe2lmKDM5PT09dC5rZXlDb2RlKXJldHVybiBFKHQpLCExO2lmKDM3PT09dC5rZXlDb2RlKXJldHVybiBrKHQpLCExfX0sTj1mdW5jdGlvbigpe3MudG91Y2g9e3N0YXJ0Ont4OjAseTowfSxlbmQ6e3g6MCx5OjB9fSxzLnZpZXdwb3J0LmJpbmQoXCJ0b3VjaHN0YXJ0IE1TUG9pbnRlckRvd24gcG9pbnRlcmRvd25cIixYKSxzLnZpZXdwb3J0Lm9uKFwiY2xpY2tcIixcIi5ieHNsaWRlciBhXCIsZnVuY3Rpb24odCl7cy52aWV3cG9ydC5oYXNDbGFzcyhcImNsaWNrLWRpc2FibGVkXCIpJiYodC5wcmV2ZW50RGVmYXVsdCgpLHMudmlld3BvcnQucmVtb3ZlQ2xhc3MoXCJjbGljay1kaXNhYmxlZFwiKSl9KX0sWD1mdW5jdGlvbih0KXtpZihzLmNvbnRyb2xzLmVsLmFkZENsYXNzKFwiZGlzYWJsZWRcIikscy53b3JraW5nKXQucHJldmVudERlZmF1bHQoKSxzLmNvbnRyb2xzLmVsLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7ZWxzZXtzLnRvdWNoLm9yaWdpbmFsUG9zPW8ucG9zaXRpb24oKTt2YXIgZT10Lm9yaWdpbmFsRXZlbnQsaT12b2lkIDAhPT1lLmNoYW5nZWRUb3VjaGVzP2UuY2hhbmdlZFRvdWNoZXM6W2VdO3MudG91Y2guc3RhcnQueD1pWzBdLnBhZ2VYLHMudG91Y2guc3RhcnQueT1pWzBdLnBhZ2VZLHMudmlld3BvcnQuZ2V0KDApLnNldFBvaW50ZXJDYXB0dXJlJiYocy5wb2ludGVySWQ9ZS5wb2ludGVySWQscy52aWV3cG9ydC5nZXQoMCkuc2V0UG9pbnRlckNhcHR1cmUocy5wb2ludGVySWQpKSxzLnZpZXdwb3J0LmJpbmQoXCJ0b3VjaG1vdmUgTVNQb2ludGVyTW92ZSBwb2ludGVybW92ZVwiLFYpLHMudmlld3BvcnQuYmluZChcInRvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cFwiLFIpLHMudmlld3BvcnQuYmluZChcIk1TUG9pbnRlckNhbmNlbCBwb2ludGVyY2FuY2VsXCIsWSl9fSxZPWZ1bmN0aW9uKHQpe1Mocy50b3VjaC5vcmlnaW5hbFBvcy5sZWZ0LFwicmVzZXRcIiwwKSxzLmNvbnRyb2xzLmVsLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIikscy52aWV3cG9ydC51bmJpbmQoXCJNU1BvaW50ZXJDYW5jZWwgcG9pbnRlcmNhbmNlbFwiLFkpLHMudmlld3BvcnQudW5iaW5kKFwidG91Y2htb3ZlIE1TUG9pbnRlck1vdmUgcG9pbnRlcm1vdmVcIixWKSxzLnZpZXdwb3J0LnVuYmluZChcInRvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cFwiLFIpLHMudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSYmcy52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKX0sVj1mdW5jdGlvbih0KXt2YXIgZT10Lm9yaWdpbmFsRXZlbnQsaT12b2lkIDAhPT1lLmNoYW5nZWRUb3VjaGVzP2UuY2hhbmdlZFRvdWNoZXM6W2VdLG49TWF0aC5hYnMoaVswXS5wYWdlWC1zLnRvdWNoLnN0YXJ0LngpLG89TWF0aC5hYnMoaVswXS5wYWdlWS1zLnRvdWNoLnN0YXJ0LnkpLHI9MCxhPTA7MypuPm8mJnMuc2V0dGluZ3MucHJldmVudERlZmF1bHRTd2lwZVg/dC5wcmV2ZW50RGVmYXVsdCgpOjMqbz5uJiZzLnNldHRpbmdzLnByZXZlbnREZWZhdWx0U3dpcGVZJiZ0LnByZXZlbnREZWZhdWx0KCksXCJmYWRlXCIhPT1zLnNldHRpbmdzLm1vZGUmJnMuc2V0dGluZ3Mub25lVG9PbmVUb3VjaCYmKFwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlPyhhPWlbMF0ucGFnZVgtcy50b3VjaC5zdGFydC54LHI9cy50b3VjaC5vcmlnaW5hbFBvcy5sZWZ0K2EpOihhPWlbMF0ucGFnZVktcy50b3VjaC5zdGFydC55LHI9cy50b3VjaC5vcmlnaW5hbFBvcy50b3ArYSksUyhyLFwicmVzZXRcIiwwKSl9LFI9ZnVuY3Rpb24odCl7cy52aWV3cG9ydC51bmJpbmQoXCJ0b3VjaG1vdmUgTVNQb2ludGVyTW92ZSBwb2ludGVybW92ZVwiLFYpLHMuY29udHJvbHMuZWwucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTt2YXIgZT10Lm9yaWdpbmFsRXZlbnQsaT12b2lkIDAhPT1lLmNoYW5nZWRUb3VjaGVzP2UuY2hhbmdlZFRvdWNoZXM6W2VdLG49MCxyPTA7cy50b3VjaC5lbmQueD1pWzBdLnBhZ2VYLHMudG91Y2guZW5kLnk9aVswXS5wYWdlWSxcImZhZGVcIj09PXMuc2V0dGluZ3MubW9kZT8ocj1NYXRoLmFicyhzLnRvdWNoLnN0YXJ0Lngtcy50b3VjaC5lbmQueCkpPj1zLnNldHRpbmdzLnN3aXBlVGhyZXNob2xkJiYocy50b3VjaC5zdGFydC54PnMudG91Y2guZW5kLng/by5nb1RvTmV4dFNsaWRlKCk6by5nb1RvUHJldlNsaWRlKCksby5zdG9wQXV0bygpKTooXCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/KHI9cy50b3VjaC5lbmQueC1zLnRvdWNoLnN0YXJ0Lngsbj1zLnRvdWNoLm9yaWdpbmFsUG9zLmxlZnQpOihyPXMudG91Y2guZW5kLnktcy50b3VjaC5zdGFydC55LG49cy50b3VjaC5vcmlnaW5hbFBvcy50b3ApLCFzLnNldHRpbmdzLmluZmluaXRlTG9vcCYmKDA9PT1zLmFjdGl2ZS5pbmRleCYmcj4wfHxzLmFjdGl2ZS5sYXN0JiZyPDApP1MobixcInJlc2V0XCIsMjAwKTpNYXRoLmFicyhyKT49cy5zZXR0aW5ncy5zd2lwZVRocmVzaG9sZD8ocjwwP28uZ29Ub05leHRTbGlkZSgpOm8uZ29Ub1ByZXZTbGlkZSgpLG8uc3RvcEF1dG8oKSk6UyhuLFwicmVzZXRcIiwyMDApKSxzLnZpZXdwb3J0LnVuYmluZChcInRvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cFwiLFIpLHMudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSYmcy52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHMucG9pbnRlcklkKX0sWj1mdW5jdGlvbihlKXtpZihzLmluaXRpYWxpemVkKWlmKHMud29ya2luZyl3aW5kb3cuc2V0VGltZW91dChaLDEwKTtlbHNle3ZhciBpPXQod2luZG93KS53aWR0aCgpLG49dCh3aW5kb3cpLmhlaWdodCgpO3I9PT1pJiZhPT09bnx8KHI9aSxhPW4sby5yZWRyYXdTbGlkZXIoKSxzLnNldHRpbmdzLm9uU2xpZGVyUmVzaXplLmNhbGwobyxzLmFjdGl2ZS5pbmRleCkpfX0sQj1mdW5jdGlvbih0KXt2YXIgZT12KCk7cy5zZXR0aW5ncy5hcmlhSGlkZGVuJiYhcy5zZXR0aW5ncy50aWNrZXImJihzLmNoaWxkcmVuLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxzLmNoaWxkcmVuLnNsaWNlKHQsdCtlKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKX0sVT1mdW5jdGlvbih0KXtyZXR1cm4gdDwwP3Muc2V0dGluZ3MuaW5maW5pdGVMb29wP2YoKS0xOnMuYWN0aXZlLmluZGV4OnQ+PWYoKT9zLnNldHRpbmdzLmluZmluaXRlTG9vcD8wOnMuYWN0aXZlLmluZGV4OnR9O3JldHVybiBvLmdvVG9TbGlkZT1mdW5jdGlvbihlLGkpe3ZhciBuLHIsYSxsLGQ9ITAsYz0wLGc9e2xlZnQ6MCx0b3A6MH0saD1udWxsO2lmKHMub2xkSW5kZXg9cy5hY3RpdmUuaW5kZXgscy5hY3RpdmUuaW5kZXg9VShlKSwhcy53b3JraW5nJiZzLmFjdGl2ZS5pbmRleCE9PXMub2xkSW5kZXgpe2lmKHMud29ya2luZz0hMCx2b2lkIDAhPT0oZD1zLnNldHRpbmdzLm9uU2xpZGVCZWZvcmUuY2FsbChvLHMuY2hpbGRyZW4uZXEocy5hY3RpdmUuaW5kZXgpLHMub2xkSW5kZXgscy5hY3RpdmUuaW5kZXgpKSYmIWQpcmV0dXJuIHMuYWN0aXZlLmluZGV4PXMub2xkSW5kZXgsdm9pZChzLndvcmtpbmc9ITEpO1wibmV4dFwiPT09aT9zLnNldHRpbmdzLm9uU2xpZGVOZXh0LmNhbGwobyxzLmNoaWxkcmVuLmVxKHMuYWN0aXZlLmluZGV4KSxzLm9sZEluZGV4LHMuYWN0aXZlLmluZGV4KXx8KGQ9ITEpOlwicHJldlwiPT09aSYmKHMuc2V0dGluZ3Mub25TbGlkZVByZXYuY2FsbChvLHMuY2hpbGRyZW4uZXEocy5hY3RpdmUuaW5kZXgpLHMub2xkSW5kZXgscy5hY3RpdmUuaW5kZXgpfHwoZD0hMSkpLHMuYWN0aXZlLmxhc3Q9cy5hY3RpdmUuaW5kZXg+PWYoKS0xLChzLnNldHRpbmdzLnBhZ2VyfHxzLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSYmSShzLmFjdGl2ZS5pbmRleCkscy5zZXR0aW5ncy5jb250cm9scyYmRCgpLFwiZmFkZVwiPT09cy5zZXR0aW5ncy5tb2RlPyhzLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0JiZzLnZpZXdwb3J0LmhlaWdodCgpIT09cCgpJiZzLnZpZXdwb3J0LmFuaW1hdGUoe2hlaWdodDpwKCl9LHMuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHRTcGVlZCkscy5jaGlsZHJlbi5maWx0ZXIoXCI6dmlzaWJsZVwiKS5mYWRlT3V0KHMuc2V0dGluZ3Muc3BlZWQpLmNzcyh7ekluZGV4OjB9KSxzLmNoaWxkcmVuLmVxKHMuYWN0aXZlLmluZGV4KS5jc3MoXCJ6SW5kZXhcIixzLnNldHRpbmdzLnNsaWRlWkluZGV4KzEpLmZhZGVJbihzLnNldHRpbmdzLnNwZWVkLGZ1bmN0aW9uKCl7dCh0aGlzKS5jc3MoXCJ6SW5kZXhcIixzLnNldHRpbmdzLnNsaWRlWkluZGV4KSxxKCl9KSk6KHMuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHQmJnMudmlld3BvcnQuaGVpZ2h0KCkhPT1wKCkmJnMudmlld3BvcnQuYW5pbWF0ZSh7aGVpZ2h0OnAoKX0scy5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodFNwZWVkKSwhcy5zZXR0aW5ncy5pbmZpbml0ZUxvb3AmJnMuY2Fyb3VzZWwmJnMuYWN0aXZlLmxhc3Q/XCJob3Jpem9udGFsXCI9PT1zLnNldHRpbmdzLm1vZGU/KGc9KGg9cy5jaGlsZHJlbi5lcShzLmNoaWxkcmVuLmxlbmd0aC0xKSkucG9zaXRpb24oKSxjPXMudmlld3BvcnQud2lkdGgoKS1oLm91dGVyV2lkdGgoKSk6KG49cy5jaGlsZHJlbi5sZW5ndGgtcy5zZXR0aW5ncy5taW5TbGlkZXMsZz1zLmNoaWxkcmVuLmVxKG4pLnBvc2l0aW9uKCkpOnMuY2Fyb3VzZWwmJnMuYWN0aXZlLmxhc3QmJlwicHJldlwiPT09aT8ocj0xPT09cy5zZXR0aW5ncy5tb3ZlU2xpZGVzP3Muc2V0dGluZ3MubWF4U2xpZGVzLXgoKTooZigpLTEpKngoKS0ocy5jaGlsZHJlbi5sZW5ndGgtcy5zZXR0aW5ncy5tYXhTbGlkZXMpLGc9KGg9by5jaGlsZHJlbihcIi5ieC1jbG9uZVwiKS5lcShyKSkucG9zaXRpb24oKSk6XCJuZXh0XCI9PT1pJiYwPT09cy5hY3RpdmUuaW5kZXg/KGc9by5maW5kKFwiPiAuYngtY2xvbmVcIikuZXEocy5zZXR0aW5ncy5tYXhTbGlkZXMpLnBvc2l0aW9uKCkscy5hY3RpdmUubGFzdD0hMSk6ZT49MCYmKGw9ZSpwYXJzZUludCh4KCkpLGc9cy5jaGlsZHJlbi5lcShsKS5wb3NpdGlvbigpKSx2b2lkIDAhPT1nPyhhPVwiaG9yaXpvbnRhbFwiPT09cy5zZXR0aW5ncy5tb2RlPy0oZy5sZWZ0LWMpOi1nLnRvcCxTKGEsXCJzbGlkZVwiLHMuc2V0dGluZ3Muc3BlZWQpKTpzLndvcmtpbmc9ITEpLHMuc2V0dGluZ3MuYXJpYUhpZGRlbiYmQihzLmFjdGl2ZS5pbmRleCp4KCkpfX0sby5nb1RvTmV4dFNsaWRlPWZ1bmN0aW9uKCl7aWYocy5zZXR0aW5ncy5pbmZpbml0ZUxvb3B8fCFzLmFjdGl2ZS5sYXN0KXt2YXIgdD1wYXJzZUludChzLmFjdGl2ZS5pbmRleCkrMTtvLmdvVG9TbGlkZSh0LFwibmV4dFwiKX19LG8uZ29Ub1ByZXZTbGlkZT1mdW5jdGlvbigpe2lmKHMuc2V0dGluZ3MuaW5maW5pdGVMb29wfHwwIT09cy5hY3RpdmUuaW5kZXgpe3ZhciB0PXBhcnNlSW50KHMuYWN0aXZlLmluZGV4KS0xO28uZ29Ub1NsaWRlKHQsXCJwcmV2XCIpfX0sby5zdGFydEF1dG89ZnVuY3Rpb24odCl7cy5pbnRlcnZhbHx8KHMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcIm5leHRcIj09PXMuc2V0dGluZ3MuYXV0b0RpcmVjdGlvbj9vLmdvVG9OZXh0U2xpZGUoKTpvLmdvVG9QcmV2U2xpZGUoKX0scy5zZXR0aW5ncy5wYXVzZSkscy5zZXR0aW5ncy5hdXRvQ29udHJvbHMmJiEwIT09dCYmQShcInN0b3BcIikpfSxvLnN0b3BBdXRvPWZ1bmN0aW9uKHQpe3MuaW50ZXJ2YWwmJihjbGVhckludGVydmFsKHMuaW50ZXJ2YWwpLHMuaW50ZXJ2YWw9bnVsbCxzLnNldHRpbmdzLmF1dG9Db250cm9scyYmITAhPT10JiZBKFwic3RhcnRcIikpfSxvLmdldEN1cnJlbnRTbGlkZT1mdW5jdGlvbigpe3JldHVybiBzLmFjdGl2ZS5pbmRleH0sby5nZXRDdXJyZW50U2xpZGVFbGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHMuY2hpbGRyZW4uZXEocy5hY3RpdmUuaW5kZXgpfSxvLmdldFNsaWRlRWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm4gcy5jaGlsZHJlbi5lcSh0KX0sby5nZXRTbGlkZUNvdW50PWZ1bmN0aW9uKCl7cmV0dXJuIHMuY2hpbGRyZW4ubGVuZ3RofSxvLmlzV29ya2luZz1mdW5jdGlvbigpe3JldHVybiBzLndvcmtpbmd9LG8ucmVkcmF3U2xpZGVyPWZ1bmN0aW9uKCl7cy5jaGlsZHJlbi5hZGQoby5maW5kKFwiLmJ4LWNsb25lXCIpKS5vdXRlcldpZHRoKHUoKSkscy52aWV3cG9ydC5jc3MoXCJoZWlnaHRcIixwKCkpLHMuc2V0dGluZ3MudGlja2VyfHxtKCkscy5hY3RpdmUubGFzdCYmKHMuYWN0aXZlLmluZGV4PWYoKS0xKSxzLmFjdGl2ZS5pbmRleD49ZigpJiYocy5hY3RpdmUubGFzdD0hMCkscy5zZXR0aW5ncy5wYWdlciYmIXMuc2V0dGluZ3MucGFnZXJDdXN0b20mJihiKCksSShzLmFjdGl2ZS5pbmRleCkpLHMuc2V0dGluZ3MuYXJpYUhpZGRlbiYmQihzLmFjdGl2ZS5pbmRleCp4KCkpfSxvLmRlc3Ryb3lTbGlkZXI9ZnVuY3Rpb24oKXtzLmluaXRpYWxpemVkJiYocy5pbml0aWFsaXplZD0hMSx0KFwiLmJ4LWNsb25lXCIsdGhpcykucmVtb3ZlKCkscy5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKCl7dm9pZCAwIT09dCh0aGlzKS5kYXRhKFwib3JpZ1N0eWxlXCIpP3QodGhpcykuYXR0cihcInN0eWxlXCIsdCh0aGlzKS5kYXRhKFwib3JpZ1N0eWxlXCIpKTp0KHRoaXMpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKX0pLHZvaWQgMCE9PXQodGhpcykuZGF0YShcIm9yaWdTdHlsZVwiKT90aGlzLmF0dHIoXCJzdHlsZVwiLHQodGhpcykuZGF0YShcIm9yaWdTdHlsZVwiKSk6dCh0aGlzKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksdCh0aGlzKS51bndyYXAoKS51bndyYXAoKSxzLmNvbnRyb2xzLmVsJiZzLmNvbnRyb2xzLmVsLnJlbW92ZSgpLHMuY29udHJvbHMubmV4dCYmcy5jb250cm9scy5uZXh0LnJlbW92ZSgpLHMuY29udHJvbHMucHJldiYmcy5jb250cm9scy5wcmV2LnJlbW92ZSgpLHMucGFnZXJFbCYmcy5zZXR0aW5ncy5jb250cm9scyYmIXMuc2V0dGluZ3MucGFnZXJDdXN0b20mJnMucGFnZXJFbC5yZW1vdmUoKSx0KFwiLmJ4LWNhcHRpb25cIix0aGlzKS5yZW1vdmUoKSxzLmNvbnRyb2xzLmF1dG9FbCYmcy5jb250cm9scy5hdXRvRWwucmVtb3ZlKCksY2xlYXJJbnRlcnZhbChzLmludGVydmFsKSxzLnNldHRpbmdzLnJlc3BvbnNpdmUmJnQod2luZG93KS51bmJpbmQoXCJyZXNpemVcIixaKSxzLnNldHRpbmdzLmtleWJvYXJkRW5hYmxlZCYmdChkb2N1bWVudCkudW5iaW5kKFwia2V5ZG93blwiLEYpLHQodGhpcykucmVtb3ZlRGF0YShcImJ4U2xpZGVyXCIpKX0sby5yZWxvYWRTbGlkZXI9ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZSYmKG49ZSksby5kZXN0cm95U2xpZGVyKCksbCgpLHQobykuZGF0YShcImJ4U2xpZGVyXCIsdGhpcyl9LGwoKSx0KG8pLmRhdGEoXCJieFNsaWRlclwiLHRoaXMpLHRoaXN9fX0oalF1ZXJ5KTsiLCIvKlxyXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXHJcbiAqXHJcbiAqIFVzZXMgdGhlIGJ1aWx0IGluIGVhc2luZyBjYXBhYmlsaXRpZXMgYWRkZWQgSW4galF1ZXJ5IDEuMVxyXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xyXG4gKlxyXG4gKiBURVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXHJcbiAqXHJcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IMOD4oCaw4LCqSAyMDAxIFJvYmVydCBQZW5uZXJcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVEVSTVMgT0YgVVNFIC0galF1ZXJ5IEVhc2luZ1xyXG4gKlxyXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCDDg+KAmsOCwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZlxyXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0XHJcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzXHJcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICpcclxuICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2VcclxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxyXG4gKiBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0ZcclxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqICBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXHJcbiAqICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEVcclxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRFxyXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xyXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcclxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxualF1ZXJ5LmVhc2luZy5qc3dpbmcgPSBqUXVlcnkuZWFzaW5nLnN3aW5nO1xyXG5qUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcsIHtcclxuICBkZWY6IFwiZWFzZU91dFF1YWRcIixcclxuICBzd2luZzogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiBqUXVlcnkuZWFzaW5nW2pRdWVyeS5lYXNpbmcuZGVmXShlLCBmLCBhLCBoLCBnKTtcclxuICB9LFxyXG4gIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gaCAqIChmIC89IGcpICogZiArIGE7XHJcbiAgfSxcclxuICBlYXNlT3V0UXVhZDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiAtaCAqIChmIC89IGcpICogKGYgLSAyKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoZSwgZiwgYSwgaCwgZykge1xyXG4gICAgaWYgKChmIC89IGcgLyAyKSA8IDEpIHtcclxuICAgICAgcmV0dXJuIChoIC8gMikgKiBmICogZiArIGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKC1oIC8gMikgKiAoLS1mICogKGYgLSAyKSAtIDEpICsgYTtcclxuICB9LFxyXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbiAoZSwgZiwgYSwgaCwgZykge1xyXG4gICAgcmV0dXJuIGggKiAoZiAvPSBnKSAqIGYgKiBmICsgYTtcclxuICB9LFxyXG4gIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiBoICogKChmID0gZiAvIGcgLSAxKSAqIGYgKiBmICsgMSkgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICBpZiAoKGYgLz0gZyAvIDIpIDwgMSkge1xyXG4gICAgICByZXR1cm4gKGggLyAyKSAqIGYgKiBmICogZiArIGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGggLyAyKSAqICgoZiAtPSAyKSAqIGYgKiBmICsgMikgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gaCAqIChmIC89IGcpICogZiAqIGYgKiBmICsgYTtcclxuICB9LFxyXG4gIGVhc2VPdXRRdWFydDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiAtaCAqICgoZiA9IGYgLyBnIC0gMSkgKiBmICogZiAqIGYgLSAxKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIGlmICgoZiAvPSBnIC8gMikgPCAxKSB7XHJcbiAgICAgIHJldHVybiAoaCAvIDIpICogZiAqIGYgKiBmICogZiArIGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKC1oIC8gMikgKiAoKGYgLT0gMikgKiBmICogZiAqIGYgLSAyKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5RdWludDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiBoICogKGYgLz0gZykgKiBmICogZiAqIGYgKiBmICsgYTtcclxuICB9LFxyXG4gIGVhc2VPdXRRdWludDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiBoICogKChmID0gZiAvIGcgLSAxKSAqIGYgKiBmICogZiAqIGYgKyAxKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIGlmICgoZiAvPSBnIC8gMikgPCAxKSB7XHJcbiAgICAgIHJldHVybiAoaCAvIDIpICogZiAqIGYgKiBmICogZiAqIGYgKyBhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChoIC8gMikgKiAoKGYgLT0gMikgKiBmICogZiAqIGYgKiBmICsgMikgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZUluU2luZTogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiAtaCAqIE1hdGguY29zKChmIC8gZykgKiAoTWF0aC5QSSAvIDIpKSArIGggKyBhO1xyXG4gIH0sXHJcbiAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gaCAqIE1hdGguc2luKChmIC8gZykgKiAoTWF0aC5QSSAvIDIpKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbiAoZSwgZiwgYSwgaCwgZykge1xyXG4gICAgcmV0dXJuICgtaCAvIDIpICogKE1hdGguY29zKChNYXRoLlBJICogZikgLyBnKSAtIDEpICsgYTtcclxuICB9LFxyXG4gIGVhc2VJbkV4cG86IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gZiA9PSAwID8gYSA6IGggKiBNYXRoLnBvdygyLCAxMCAqIChmIC8gZyAtIDEpKSArIGE7XHJcbiAgfSxcclxuICBlYXNlT3V0RXhwbzogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIHJldHVybiBmID09IGcgPyBhICsgaCA6IGggKiAoLU1hdGgucG93KDIsICgtMTAgKiBmKSAvIGcpICsgMSkgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIGlmIChmID09IDApIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICBpZiAoZiA9PSBnKSB7XHJcbiAgICAgIHJldHVybiBhICsgaDtcclxuICAgIH1cclxuICAgIGlmICgoZiAvPSBnIC8gMikgPCAxKSB7XHJcbiAgICAgIHJldHVybiAoaCAvIDIpICogTWF0aC5wb3coMiwgMTAgKiAoZiAtIDEpKSArIGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGggLyAyKSAqICgtTWF0aC5wb3coMiwgLTEwICogLS1mKSArIDIpICsgYTtcclxuICB9LFxyXG4gIGVhc2VJbkNpcmM6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gLWggKiAoTWF0aC5zcXJ0KDEgLSAoZiAvPSBnKSAqIGYpIC0gMSkgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZU91dENpcmM6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gaCAqIE1hdGguc3FydCgxIC0gKGYgPSBmIC8gZyAtIDEpICogZikgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIGlmICgoZiAvPSBnIC8gMikgPCAxKSB7XHJcbiAgICAgIHJldHVybiAoLWggLyAyKSAqIChNYXRoLnNxcnQoMSAtIGYgKiBmKSAtIDEpICsgYTtcclxuICAgIH1cclxuICAgIHJldHVybiAoaCAvIDIpICogKE1hdGguc3FydCgxIC0gKGYgLT0gMikgKiBmKSArIDEpICsgYTtcclxuICB9LFxyXG4gIGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uIChmLCBoLCBlLCBsLCBrKSB7XHJcbiAgICB2YXIgaSA9IDEuNzAxNTg7XHJcbiAgICB2YXIgaiA9IDA7XHJcbiAgICB2YXIgZyA9IGw7XHJcbiAgICBpZiAoaCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgaWYgKChoIC89IGspID09IDEpIHtcclxuICAgICAgcmV0dXJuIGUgKyBsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFqKSB7XHJcbiAgICAgIGogPSBrICogMC4zO1xyXG4gICAgfVxyXG4gICAgaWYgKGcgPCBNYXRoLmFicyhsKSkge1xyXG4gICAgICBnID0gbDtcclxuICAgICAgdmFyIGkgPSBqIC8gNDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBpID0gKGogLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbihsIC8gZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAtKFxyXG4gICAgICAgIGcgKlxyXG4gICAgICAgIE1hdGgucG93KDIsIDEwICogKGggLT0gMSkpICpcclxuICAgICAgICBNYXRoLnNpbigoKGggKiBrIC0gaSkgKiAoMiAqIE1hdGguUEkpKSAvIGopXHJcbiAgICAgICkgKyBlXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uIChmLCBoLCBlLCBsLCBrKSB7XHJcbiAgICB2YXIgaSA9IDEuNzAxNTg7XHJcbiAgICB2YXIgaiA9IDA7XHJcbiAgICB2YXIgZyA9IGw7XHJcbiAgICBpZiAoaCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgaWYgKChoIC89IGspID09IDEpIHtcclxuICAgICAgcmV0dXJuIGUgKyBsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFqKSB7XHJcbiAgICAgIGogPSBrICogMC4zO1xyXG4gICAgfVxyXG4gICAgaWYgKGcgPCBNYXRoLmFicyhsKSkge1xyXG4gICAgICBnID0gbDtcclxuICAgICAgdmFyIGkgPSBqIC8gNDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBpID0gKGogLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbihsIC8gZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBnICogTWF0aC5wb3coMiwgLTEwICogaCkgKiBNYXRoLnNpbigoKGggKiBrIC0gaSkgKiAoMiAqIE1hdGguUEkpKSAvIGopICtcclxuICAgICAgbCArXHJcbiAgICAgIGVcclxuICAgICk7XHJcbiAgfSxcclxuICBlYXNlSW5PdXRFbGFzdGljOiBmdW5jdGlvbiAoZiwgaCwgZSwgbCwgaykge1xyXG4gICAgdmFyIGkgPSAxLjcwMTU4O1xyXG4gICAgdmFyIGogPSAwO1xyXG4gICAgdmFyIGcgPSBsO1xyXG4gICAgaWYgKGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIGlmICgoaCAvPSBrIC8gMikgPT0gMikge1xyXG4gICAgICByZXR1cm4gZSArIGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIWopIHtcclxuICAgICAgaiA9IGsgKiAoMC4zICogMS41KTtcclxuICAgIH1cclxuICAgIGlmIChnIDwgTWF0aC5hYnMobCkpIHtcclxuICAgICAgZyA9IGw7XHJcbiAgICAgIHZhciBpID0gaiAvIDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgaSA9IChqIC8gKDIgKiBNYXRoLlBJKSkgKiBNYXRoLmFzaW4obCAvIGcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGggPCAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgLTAuNSAqXHJcbiAgICAgICAgICAoZyAqXHJcbiAgICAgICAgICAgIE1hdGgucG93KDIsIDEwICogKGggLT0gMSkpICpcclxuICAgICAgICAgICAgTWF0aC5zaW4oKChoICogayAtIGkpICogKDIgKiBNYXRoLlBJKSkgLyBqKSkgK1xyXG4gICAgICAgIGVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGcgKlxyXG4gICAgICAgIE1hdGgucG93KDIsIC0xMCAqIChoIC09IDEpKSAqXHJcbiAgICAgICAgTWF0aC5zaW4oKChoICogayAtIGkpICogKDIgKiBNYXRoLlBJKSkgLyBqKSAqXHJcbiAgICAgICAgMC41ICtcclxuICAgICAgbCArXHJcbiAgICAgIGVcclxuICAgICk7XHJcbiAgfSxcclxuICBlYXNlSW5CYWNrOiBmdW5jdGlvbiAoZSwgZiwgYSwgaSwgaCwgZykge1xyXG4gICAgaWYgKGcgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGcgPSAxLjcwMTU4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGkgKiAoZiAvPSBoKSAqIGYgKiAoKGcgKyAxKSAqIGYgLSBnKSArIGE7XHJcbiAgfSxcclxuICBlYXNlT3V0QmFjazogZnVuY3Rpb24gKGUsIGYsIGEsIGksIGgsIGcpIHtcclxuICAgIGlmIChnID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnID0gMS43MDE1ODtcclxuICAgIH1cclxuICAgIHJldHVybiBpICogKChmID0gZiAvIGggLSAxKSAqIGYgKiAoKGcgKyAxKSAqIGYgKyBnKSArIDEpICsgYTtcclxuICB9LFxyXG4gIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uIChlLCBmLCBhLCBpLCBoLCBnKSB7XHJcbiAgICBpZiAoZyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZyA9IDEuNzAxNTg7XHJcbiAgICB9XHJcbiAgICBpZiAoKGYgLz0gaCAvIDIpIDwgMSkge1xyXG4gICAgICByZXR1cm4gKGkgLyAyKSAqIChmICogZiAqICgoKGcgKj0gMS41MjUpICsgMSkgKiBmIC0gZykpICsgYTtcclxuICAgIH1cclxuICAgIHJldHVybiAoaSAvIDIpICogKChmIC09IDIpICogZiAqICgoKGcgKj0gMS41MjUpICsgMSkgKiBmICsgZykgKyAyKSArIGE7XHJcbiAgfSxcclxuICBlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICByZXR1cm4gaCAtIGpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShlLCBnIC0gZiwgMCwgaCwgZykgKyBhO1xyXG4gIH0sXHJcbiAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24gKGUsIGYsIGEsIGgsIGcpIHtcclxuICAgIGlmICgoZiAvPSBnKSA8IDEgLyAyLjc1KSB7XHJcbiAgICAgIHJldHVybiBoICogKDcuNTYyNSAqIGYgKiBmKSArIGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZiA8IDIgLyAyLjc1KSB7XHJcbiAgICAgICAgcmV0dXJuIGggKiAoNy41NjI1ICogKGYgLT0gMS41IC8gMi43NSkgKiBmICsgMC43NSkgKyBhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChmIDwgMi41IC8gMi43NSkge1xyXG4gICAgICAgICAgcmV0dXJuIGggKiAoNy41NjI1ICogKGYgLT0gMi4yNSAvIDIuNzUpICogZiArIDAuOTM3NSkgKyBhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gaCAqICg3LjU2MjUgKiAoZiAtPSAyLjYyNSAvIDIuNzUpICogZiArIDAuOTg0Mzc1KSArIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uIChlLCBmLCBhLCBoLCBnKSB7XHJcbiAgICBpZiAoZiA8IGcgLyAyKSB7XHJcbiAgICAgIHJldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZShlLCBmICogMiwgMCwgaCwgZykgKiAwLjUgKyBhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGUsIGYgKiAyIC0gZywgMCwgaCwgZykgKiAwLjUgKyBoICogMC41ICsgYVxyXG4gICAgKTtcclxuICB9LFxyXG59KTtcclxuIiwiLyohIGpRdWVyeS5GbGlwc3RlciwgdjEuMS4xIChidWlsdCAyMDE2LTAzLTAzKSAqL1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG4hKGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgZnVuY3Rpb24gZChhLCBiKSB7XHJcbiAgICB2YXIgYyA9IG51bGw7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZCA9IHRoaXMsXHJcbiAgICAgICAgZSA9IGFyZ3VtZW50cztcclxuICAgICAgbnVsbCA9PT0gYyAmJlxyXG4gICAgICAgIChjID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBhLmFwcGx5KGQsIGUpLCAoYyA9IG51bGwpO1xyXG4gICAgICAgIH0sIGIpKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGEgPSB7fTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgaWYgKGFbYl0gIT09IGMpIHJldHVybiBhW2JdO1xyXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICAgIGUgPSBkLnN0eWxlLFxyXG4gICAgICAgICAgZiA9IGIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBiLnNsaWNlKDEpLFxyXG4gICAgICAgICAgZyA9IFtcIndlYmtpdFwiLCBcIm1velwiLCBcIm1zXCIsIFwib1wiXSxcclxuICAgICAgICAgIGggPSAoYiArIFwiIFwiICsgZy5qb2luKGYgKyBcIiBcIikgKyBmKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBoKSBpZiAoaFtpXSBpbiBlKSByZXR1cm4gKGFbYl0gPSBoW2ldKTtcclxuICAgICAgICByZXR1cm4gKGFbYl0gPSAhMSk7XHJcbiAgICAgIH07XHJcbiAgICB9KSgpLFxyXG4gICAgZiA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgIGcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoYSAhPT0gYykgcmV0dXJuIGE7XHJcbiAgICAgICAgdmFyIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAoYi5pbm5lckhUTUwgPSBcIjxzdmcvPlwiKSxcclxuICAgICAgICAgIChhID0gYi5maXJzdENoaWxkICYmIGIuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkgPT09IGYpXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICAgIH0pKCksXHJcbiAgICBoID0gYShiKSxcclxuICAgIGkgPSBlKFwidHJhbnNmb3JtXCIpLFxyXG4gICAgaiA9IHtcclxuICAgICAgaXRlbUNvbnRhaW5lcjogXCJ1bFwiLFxyXG4gICAgICBpdGVtU2VsZWN0b3I6IFwibGlcIixcclxuICAgICAgc3RhcnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZhZGVJbjogNDAwLFxyXG4gICAgICBsb29wOiAhMSxcclxuICAgICAgYXV0b3BsYXk6ICExLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6ICEwLFxyXG4gICAgICBzdHlsZTogXCJjb3ZlcmZsb3dcIixcclxuICAgICAgc3BhY2luZzogLTAuNixcclxuICAgICAgY2xpY2s6ICEwLFxyXG4gICAgICBrZXlib2FyZDogITAsXHJcbiAgICAgIHNjcm9sbHdoZWVsOiAhMCxcclxuICAgICAgdG91Y2g6ICEwLFxyXG4gICAgICBuYXY6ICExLFxyXG4gICAgICBidXR0b25zOiAhMSxcclxuICAgICAgYnV0dG9uUHJldjogXCJQcmV2aW91c1wiLFxyXG4gICAgICBidXR0b25OZXh0OiBcIk5leHRcIixcclxuICAgICAgb25JdGVtU3dpdGNoOiAhMSxcclxuICAgIH0sXHJcbiAgICBrID0ge1xyXG4gICAgICBtYWluOiBcImZsaXBzdGVyXCIsXHJcbiAgICAgIGFjdGl2ZTogXCJmbGlwc3Rlci0tYWN0aXZlXCIsXHJcbiAgICAgIGNvbnRhaW5lcjogXCJmbGlwc3Rlcl9fY29udGFpbmVyXCIsXHJcbiAgICAgIG5hdjogXCJmbGlwc3Rlcl9fbmF2XCIsXHJcbiAgICAgIG5hdkNoaWxkOiBcImZsaXBzdGVyX19uYXZfX2NoaWxkXCIsXHJcbiAgICAgIG5hdkl0ZW06IFwiZmxpcHN0ZXJfX25hdl9faXRlbVwiLFxyXG4gICAgICBuYXZMaW5rOiBcImZsaXBzdGVyX19uYXZfX2xpbmtcIixcclxuICAgICAgbmF2Q3VycmVudDogXCJmbGlwc3Rlcl9fbmF2X19pdGVtLS1jdXJyZW50XCIsXHJcbiAgICAgIG5hdkNhdGVnb3J5OiBcImZsaXBzdGVyX19uYXZfX2l0ZW0tLWNhdGVnb3J5XCIsXHJcbiAgICAgIG5hdkNhdGVnb3J5TGluazogXCJmbGlwc3Rlcl9fbmF2X19saW5rLS1jYXRlZ29yeVwiLFxyXG4gICAgICBidXR0b246IFwiZmxpcHN0ZXJfX2J1dHRvblwiLFxyXG4gICAgICBidXR0b25QcmV2OiBcImZsaXBzdGVyX19idXR0b24tLXByZXZcIixcclxuICAgICAgYnV0dG9uTmV4dDogXCJmbGlwc3Rlcl9fYnV0dG9uLS1uZXh0XCIsXHJcbiAgICAgIGl0ZW06IFwiZmxpcHN0ZXJfX2l0ZW1cIixcclxuICAgICAgaXRlbUN1cnJlbnQ6IFwiZmxpcHN0ZXJfX2l0ZW0tLWN1cnJlbnRcIixcclxuICAgICAgaXRlbVBhc3Q6IFwiZmxpcHN0ZXJfX2l0ZW0tLXBhc3RcIixcclxuICAgICAgaXRlbUZ1dHVyZTogXCJmbGlwc3Rlcl9faXRlbS0tZnV0dXJlXCIsXHJcbiAgICAgIGl0ZW1Db250ZW50OiBcImZsaXBzdGVyX19pdGVtX19jb250ZW50XCIsXHJcbiAgICB9LFxyXG4gICAgbCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgIFwiXFxcXGIoXCIgK1xyXG4gICAgICAgIGsuaXRlbUN1cnJlbnQgK1xyXG4gICAgICAgIFwifFwiICtcclxuICAgICAgICBrLml0ZW1QYXN0ICtcclxuICAgICAgICBcInxcIiArXHJcbiAgICAgICAgay5pdGVtRnV0dXJlICtcclxuICAgICAgICBcIikoLio/KShcXFxcc3wkKVwiLFxyXG4gICAgICBcImdcIlxyXG4gICAgKSxcclxuICAgIG0gPSBuZXcgUmVnRXhwKFwiXFxcXHNcXFxccytcIiwgXCJnXCIpO1xyXG4gIGEuZm4uZmxpcHN0ZXIgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgdmFyIGUgPSBcInN0cmluZ1wiID09IHR5cGVvZiBiID8gITAgOiAhMTtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIHZhciBuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGMgPSBhKHRoaXMpLmRhdGEoXCJtZXRob2RzXCIpO1xyXG4gICAgICAgIHJldHVybiBjW2JdID8gY1tiXS5hcHBseSh0aGlzLCBuKSA6IHRoaXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIG8gPSBhLmV4dGVuZCh7fSwgaiwgYik7XHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnVuY3Rpb24gYihhKSB7XHJcbiAgICAgICAgdmFyIGIgPSBcIm5leHRcIiA9PT0gYSA/IG8uYnV0dG9uTmV4dCA6IG8uYnV0dG9uUHJldjtcclxuICAgICAgICByZXR1cm4gXCJjdXN0b21cIiAhPT0gby5idXR0b25zICYmIGdcclxuICAgICAgICAgID8gJzxzdmcgdmlld0JveD1cIjAgMCAxMyAyMFwiIHhtbG5zPVwiJyArXHJcbiAgICAgICAgICAgICAgZiArXHJcbiAgICAgICAgICAgICAgJ1wiIGFyaWEtbGFiZWxsZWRieT1cInRpdGxlXCI+PHRpdGxlPicgK1xyXG4gICAgICAgICAgICAgIGIgK1xyXG4gICAgICAgICAgICAgICc8L3RpdGxlPjxwb2x5bGluZSBwb2ludHM9XCIxMCwzIDMsMTAgMTAsMTdcIicgK1xyXG4gICAgICAgICAgICAgIChcIm5leHRcIiA9PT0gYSA/ICcgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA2LjUsMTApXCInIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgIFwiLz48L3N2Zz5cIlxyXG4gICAgICAgICAgOiBiO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGUoYykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAoYyA9IGMgfHwgXCJuZXh0XCIpLFxyXG4gICAgICAgICAgYShcclxuICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCInICtcclxuICAgICAgICAgICAgICBrLmJ1dHRvbiArXHJcbiAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgIChcIm5leHRcIiA9PT0gYyA/IGsuYnV0dG9uTmV4dCA6IGsuYnV0dG9uUHJldikgK1xyXG4gICAgICAgICAgICAgICdcIiByb2xlPVwiYnV0dG9uXCIgLz4nXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5odG1sKGIoYykpXHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgdihjKSwgYS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gaigpIHtcclxuICAgICAgICBvLmJ1dHRvbnMgJiZcclxuICAgICAgICAgIEoubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgKE8uZmluZChcIi5cIiArIGsuYnV0dG9uKS5yZW1vdmUoKSwgTy5hcHBlbmQoZShcInByZXZcIiksIGUoXCJuZXh0XCIpKSk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gbigpIHtcclxuICAgICAgICB2YXIgYiA9IHt9O1xyXG4gICAgICAgICFvLm5hdiB8fFxyXG4gICAgICAgICAgSi5sZW5ndGggPD0gMSB8fFxyXG4gICAgICAgICAgKEwgJiYgTC5yZW1vdmUoKSxcclxuICAgICAgICAgIChMID0gYSgnPHVsIGNsYXNzPVwiJyArIGsubmF2ICsgJ1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgLz4nKSksXHJcbiAgICAgICAgICAoTiA9IGEoXCJcIikpLFxyXG4gICAgICAgICAgSi5lYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gYSh0aGlzKSxcclxuICAgICAgICAgICAgICBlID0gZC5kYXRhKFwiZmxpcC1jYXRlZ29yeVwiKSxcclxuICAgICAgICAgICAgICBmID0gZC5kYXRhKFwiZmxpcC10aXRsZVwiKSB8fCBkLmF0dHIoXCJ0aXRsZVwiKSB8fCBjLFxyXG4gICAgICAgICAgICAgIGcgPSBhKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJyArIGsubmF2TGluayArICdcIj4nICsgZiArIFwiPC9hPlwiKS5kYXRhKFxyXG4gICAgICAgICAgICAgICAgXCJpbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgY1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICgoKE4gPSBOLmFkZChnKSksIGUpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFiW2VdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGEoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxsaSBjbGFzcz1cIicgKyBrLm5hdkl0ZW0gKyBcIiBcIiArIGsubmF2Q2F0ZWdvcnkgKyAnXCI+J1xyXG4gICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICBpID0gYShcclxuICAgICAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgay5uYXZMaW5rICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgIGsubmF2Q2F0ZWdvcnlMaW5rICtcclxuICAgICAgICAgICAgICAgICAgICAgICdcIiBkYXRhLWZsaXAtY2F0ZWdvcnk9XCInICtcclxuICAgICAgICAgICAgICAgICAgICAgIGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIjwvYT5cIlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoXCJjYXRlZ29yeVwiLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKFwiaW5kZXhcIiwgYyk7XHJcbiAgICAgICAgICAgICAgICAoYltlXSA9IGEoJzx1bCBjbGFzcz1cIicgKyBrLm5hdkNoaWxkICsgJ1wiIC8+JykpLFxyXG4gICAgICAgICAgICAgICAgICAoTiA9IE4uYWRkKGkpKSxcclxuICAgICAgICAgICAgICAgICAgaC5hcHBlbmQoaSwgYltlXSkuYXBwZW5kVG8oTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJbZV0uYXBwZW5kKGcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgTC5hcHBlbmQoZyk7XHJcbiAgICAgICAgICAgIGcud3JhcCgnPGxpIGNsYXNzPVwiJyArIGsubmF2SXRlbSArICdcIj4nKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgTC5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGEodGhpcykuZGF0YShcImluZGV4XCIpO1xyXG4gICAgICAgICAgICBjID49IDAgJiYgKHYoYyksIGIucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIFwiYWZ0ZXJcIiA9PT0gby5uYXYgPyBPLmFwcGVuZChMKSA6IE8ucHJlcGVuZChMKSxcclxuICAgICAgICAgIChNID0gTC5maW5kKFwiLlwiICsgay5uYXZJdGVtKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHAoKSB7XHJcbiAgICAgICAgaWYgKG8ubmF2KSB7XHJcbiAgICAgICAgICB2YXIgYiA9IEsuZGF0YShcImZsaXAtY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgICBNLnJlbW92ZUNsYXNzKGsubmF2Q3VycmVudCksXHJcbiAgICAgICAgICAgIE4uZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYSh0aGlzKS5kYXRhKFwiaW5kZXhcIikgPT09IFEgfHxcclxuICAgICAgICAgICAgICAgIChiICYmIGEodGhpcykuZGF0YShcImNhdGVnb3J5XCIpID09PSBiKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKGsubmF2Q3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHEoKSB7XHJcbiAgICAgICAgTy5jc3MoXCJ0cmFuc2l0aW9uXCIsIFwibm9uZVwiKSxcclxuICAgICAgICAgIEcuY3NzKFwidHJhbnNpdGlvblwiLCBcIm5vbmVcIiksXHJcbiAgICAgICAgICBKLmNzcyhcInRyYW5zaXRpb25cIiwgXCJub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHIoKSB7XHJcbiAgICAgICAgTy5jc3MoXCJ0cmFuc2l0aW9uXCIsIFwiXCIpLFxyXG4gICAgICAgICAgRy5jc3MoXCJ0cmFuc2l0aW9uXCIsIFwiXCIpLFxyXG4gICAgICAgICAgSi5jc3MoXCJ0cmFuc2l0aW9uXCIsIFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHMoKSB7XHJcbiAgICAgICAgdmFyIGIsXHJcbiAgICAgICAgICBjID0gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgSi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgKGIgPSBhKHRoaXMpLmhlaWdodCgpKSwgYiA+IGMgJiYgKGMgPSBiKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgY1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gdChiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGIgJiYgcSgpLFxyXG4gICAgICAgICAgKEggPSBHLndpZHRoKCkpLFxyXG4gICAgICAgICAgRy5oZWlnaHQocygpKSxcclxuICAgICAgICAgIEhcclxuICAgICAgICAgICAgPyAoSSAmJiAoY2xlYXJJbnRlcnZhbChJKSwgKEkgPSAhMSkpLFxyXG4gICAgICAgICAgICAgIHZvaWQgSi5lYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCxcclxuICAgICAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICAgICAgZiA9IGEodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBmLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYiAmJiBiLnJlcGxhY2UobCwgXCJcIikucmVwbGFjZShtLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgKGQgPSBmLm91dGVyV2lkdGgoKSksXHJcbiAgICAgICAgICAgICAgICAgIDAgIT09IG8uc3BhY2luZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGYuY3NzKFwibWFyZ2luLXJpZ2h0XCIsIGQgKiBvLnNwYWNpbmcgKyBcInB4XCIpLFxyXG4gICAgICAgICAgICAgICAgICAoZSA9IGYucG9zaXRpb24oKS5sZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgKFBbY10gPSAtMSAqIChlICsgZCAvIDIgLSBIIC8gMikpLFxyXG4gICAgICAgICAgICAgICAgICBjID09PSBKLmxlbmd0aCAtIDEgJiYgKHUoKSwgYiAmJiBzZXRUaW1lb3V0KHIsIDEpKTtcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgOiB2b2lkIChJID1cclxuICAgICAgICAgICAgICAgIEkgfHxcclxuICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgdChiKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiB1KCkge1xyXG4gICAgICAgIHZhciBiLFxyXG4gICAgICAgICAgZCxcclxuICAgICAgICAgIGUsXHJcbiAgICAgICAgICBmID0gSi5sZW5ndGg7XHJcbiAgICAgICAgSi5lYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAoYiA9IGEodGhpcykpLFxyXG4gICAgICAgICAgICAoZCA9IFwiIFwiKSxcclxuICAgICAgICAgICAgYyA9PT0gUVxyXG4gICAgICAgICAgICAgID8gKChkICs9IGsuaXRlbUN1cnJlbnQpLCAoZSA9IGYgKyAxKSlcclxuICAgICAgICAgICAgICA6IFEgPiBjXHJcbiAgICAgICAgICAgICAgPyAoKGQgKz0gay5pdGVtUGFzdCArIFwiIFwiICsgay5pdGVtUGFzdCArIFwiLVwiICsgKFEgLSBjKSksIChlID0gYykpXHJcbiAgICAgICAgICAgICAgOiAoKGQgKz0gay5pdGVtRnV0dXJlICsgXCIgXCIgKyBrLml0ZW1GdXR1cmUgKyBcIi1cIiArIChjIC0gUSkpLFxyXG4gICAgICAgICAgICAgICAgKGUgPSBmIC0gYykpLFxyXG4gICAgICAgICAgICBiLmNzcyhcInotaW5kZXhcIiwgZSkuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGIgJiYgYi5yZXBsYWNlKGwsIFwiXCIpLnJlcGxhY2UobSwgXCIgXCIpICsgZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgICBRID49IDAgJiZcclxuICAgICAgICAgICAgKChIICYmIFBbUV0gIT09IGMpIHx8IHQoITApLFxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgPyBHLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoXCIgKyBQW1FdICsgXCJweClcIilcclxuICAgICAgICAgICAgICA6IEcuY3NzKHsgbGVmdDogUFtRXSArIFwicHhcIiB9KSksXHJcbiAgICAgICAgICBwKCk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gdihhKSB7XHJcbiAgICAgICAgdmFyIGIgPSBRO1xyXG4gICAgICAgIGlmICghKEoubGVuZ3RoIDw9IDEpKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXCJwcmV2XCIgPT09IGFcclxuICAgICAgICAgICAgICA/IFEgPiAwXHJcbiAgICAgICAgICAgICAgICA/IFEtLVxyXG4gICAgICAgICAgICAgICAgOiBvLmxvb3AgJiYgKFEgPSBKLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgOiBcIm5leHRcIiA9PT0gYVxyXG4gICAgICAgICAgICAgID8gUSA8IEoubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgPyBRKytcclxuICAgICAgICAgICAgICAgIDogby5sb29wICYmIChRID0gMClcclxuICAgICAgICAgICAgICA6IFwibnVtYmVyXCIgPT0gdHlwZW9mIGFcclxuICAgICAgICAgICAgICA/IChRID0gYSlcclxuICAgICAgICAgICAgICA6IGEgIT09IGMgJiYgKFEgPSBKLmluZGV4KGEpKSxcclxuICAgICAgICAgICAgKEsgPSBKLmVxKFEpKSxcclxuICAgICAgICAgICAgUSAhPT0gYiAmJiBvLm9uSXRlbVN3aXRjaCAmJiBvLm9uSXRlbVN3aXRjaC5jYWxsKE8sIEpbUV0sIEpbYl0pLFxyXG4gICAgICAgICAgICB1KCksXHJcbiAgICAgICAgICAgIE9cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gdyhhKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIChvLmF1dG9wbGF5ID0gYSB8fCBvLmF1dG9wbGF5KSxcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoUiksXHJcbiAgICAgICAgICAoUiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGEgPSBRO1xyXG4gICAgICAgICAgICB2KFwibmV4dFwiKSwgYSAhPT0gUSB8fCBvLmxvb3AgfHwgY2xlYXJJbnRlcnZhbChSKTtcclxuICAgICAgICAgIH0sIG8uYXV0b3BsYXkpKSxcclxuICAgICAgICAgIE9cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHgoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoUiksIChSID0gMCksIE87XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24geShhKSB7XHJcbiAgICAgICAgcmV0dXJuIHgoKSwgby5hdXRvcGxheSAmJiBhICYmIChSID0gLTEpLCBPO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIHooKSB7XHJcbiAgICAgICAgdCghMCksXHJcbiAgICAgICAgICBPLmhpZGUoKS5jc3MoXCJ2aXNpYmlsaXR5XCIsIFwiXCIpLmFkZENsYXNzKGsuYWN0aXZlKS5mYWRlSW4oby5mYWRlSW4pO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIEEoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIChHID0gTy5maW5kKG8uaXRlbUNvbnRhaW5lcikuYWRkQ2xhc3Moay5jb250YWluZXIpKSxcclxuICAgICAgICAgIChKID0gRy5maW5kKG8uaXRlbVNlbGVjdG9yKSksXHJcbiAgICAgICAgICBKLmxlbmd0aCA8PSAxXHJcbiAgICAgICAgICAgID8gdm9pZCAwXHJcbiAgICAgICAgICAgIDogKEouYWRkQ2xhc3Moay5pdGVtKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gYSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGIuY2hpbGRyZW4oXCIuXCIgKyBrLml0ZW1Db250ZW50KS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgICAgYi53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCInICsgay5pdGVtQ29udGVudCArICdcIiAvPicpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG8uY2xpY2sgJiZcclxuICAgICAgICAgICAgICAgIEoub24oXCJjbGljay5mbGlwc3RlciB0b3VjaGVuZC5mbGlwc3RlclwiLCBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICAgICAgICBTIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGEodGhpcykuaGFzQ2xhc3Moay5pdGVtQ3VycmVudCkgfHwgYi5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHYodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgaigpLFxyXG4gICAgICAgICAgICAgIG4oKSxcclxuICAgICAgICAgICAgICBRID49IDAgJiYgdihRKSxcclxuICAgICAgICAgICAgICBPKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gQihhKSB7XHJcbiAgICAgICAgby5rZXlib2FyZCAmJlxyXG4gICAgICAgICAgKChhWzBdLnRhYkluZGV4ID0gMCksXHJcbiAgICAgICAgICBhLm9uKFxyXG4gICAgICAgICAgICBcImtleWRvd24uZmxpcHN0ZXJcIixcclxuICAgICAgICAgICAgZChcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSBhLndoaWNoO1xyXG4gICAgICAgICAgICAgICAgKDM3ID09PSBiIHx8IDM5ID09PSBiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAodigzNyA9PT0gYiA/IFwicHJldlwiIDogXCJuZXh0XCIpLCBhLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgMjUwLFxyXG4gICAgICAgICAgICAgICEwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIEMoYSkge1xyXG4gICAgICAgIGlmIChvLnNjcm9sbHdoZWVsKSB7XHJcbiAgICAgICAgICB2YXIgYixcclxuICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgZSA9ICExLFxyXG4gICAgICAgICAgICBmID0gMCxcclxuICAgICAgICAgICAgZyA9IDAsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgYVxyXG4gICAgICAgICAgICAub24oXCJtb3VzZXdoZWVsLmZsaXBzdGVyIHdoZWVsLmZsaXBzdGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBlID0gITA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcclxuICAgICAgICAgICAgICBcIm1vdXNld2hlZWwuZmxpcHN0ZXIgd2hlZWwuZmxpcHN0ZXJcIixcclxuICAgICAgICAgICAgICBkKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZyksXHJcbiAgICAgICAgICAgICAgICAgIChnID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGYgPSAwKSwgKGkgPSAwKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMzAwKSksXHJcbiAgICAgICAgICAgICAgICAgIChhID0gYS5vcmlnaW5hbEV2ZW50KSxcclxuICAgICAgICAgICAgICAgICAgKGkgKz0gYS53aGVlbERlbHRhIHx8IC0xICogKGEuZGVsdGFZICsgYS5kZWx0YVgpKSxcclxuICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoaSkgPCAyNSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmKyssXHJcbiAgICAgICAgICAgICAgICAgICAgKGIgPSBpID4gMCA/IFwicHJldlwiIDogXCJuZXh0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGMgIT09IGIgJiYgKGYgPSAwKSxcclxuICAgICAgICAgICAgICAgICAgICAoYyA9IGIpLFxyXG4gICAgICAgICAgICAgICAgICAgICg2ID4gZiB8fCBmICUgMyA9PT0gMCkgJiYgdihiKSxcclxuICAgICAgICAgICAgICAgICAgICAoaSA9IDApKTtcclxuICAgICAgICAgICAgICB9LCA1MClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgaC5vbihcIm1vdXNld2hlZWwuZmxpcHN0ZXIgd2hlZWwuZmxpcHN0ZXJcIiwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICBlICYmIChhLnByZXZlbnREZWZhdWx0KCksIChlID0gITEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIEQoYSkge1xyXG4gICAgICAgIGlmIChvLnRvdWNoKSB7XHJcbiAgICAgICAgICB2YXIgYixcclxuICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgZyA9ICExLFxyXG4gICAgICAgICAgICBoID0gZCh2LCAzMDApO1xyXG4gICAgICAgICAgYS5vbih7XHJcbiAgICAgICAgICAgIFwidG91Y2hzdGFydC5mbGlwc3RlclwiOiBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgIChhID0gYS5vcmlnaW5hbEV2ZW50KSxcclxuICAgICAgICAgICAgICAgIChTID0gYS50b3VjaGVzID8gYS50b3VjaGVzWzBdLmNsaWVudFggOiBhLmNsaWVudFgpLFxyXG4gICAgICAgICAgICAgICAgKGcgPSBhLnRvdWNoZXMgPyBhLnRvdWNoZXNbMF0uY2xpZW50WSA6IGEuY2xpZW50WSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidG91Y2htb3ZlLmZsaXBzdGVyXCI6IGQoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICBTICE9PSAhMSAmJlxyXG4gICAgICAgICAgICAgICAgKChhID0gYS5vcmlnaW5hbEV2ZW50KSxcclxuICAgICAgICAgICAgICAgIChiID0gYS50b3VjaGVzID8gYS50b3VjaGVzWzBdLmNsaWVudFggOiBhLmNsaWVudFgpLFxyXG4gICAgICAgICAgICAgICAgKGMgPSBhLnRvdWNoZXMgPyBhLnRvdWNoZXNbMF0uY2xpZW50WSA6IGEuY2xpZW50WSksXHJcbiAgICAgICAgICAgICAgICAoZSA9IGMgLSBnKSxcclxuICAgICAgICAgICAgICAgIChmID0gYiAtIFMpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZSkgPCAxMDAgJiZcclxuICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZikgPj0gMzAgJiZcclxuICAgICAgICAgICAgICAgICAgKGgoMCA+IGYgPyBcIm5leHRcIiA6IFwicHJldlwiKSwgKFMgPSBiKSwgYS5wcmV2ZW50RGVmYXVsdCgpKSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCksXHJcbiAgICAgICAgICAgIFwidG91Y2hlbmQuZmxpcHN0ZXIgdG91Y2hjYW5jZWwuZmxpcHN0ZXIgXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBTID0gITE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gRSgpIHtcclxuICAgICAgICB2YXIgYTtcclxuICAgICAgICBpZiAoKE8uY3NzKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKSwgQSgpLCBKLmxlbmd0aCA8PSAxKSlcclxuICAgICAgICAgIHJldHVybiB2b2lkIE8uY3NzKFwidmlzaWJpbGl0eVwiLCBcIlwiKTtcclxuICAgICAgICAoYSA9IG8uc3R5bGVcclxuICAgICAgICAgID8gXCJmbGlwc3Rlci0tXCIgKyBvLnN0eWxlLnNwbGl0KFwiIFwiKS5qb2luKFwiIGZsaXBzdGVyLS1cIilcclxuICAgICAgICAgIDogITEpLFxyXG4gICAgICAgICAgTy5hZGRDbGFzcyhcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIGsubWFpbixcclxuICAgICAgICAgICAgICBpID8gXCJmbGlwc3Rlci0tdHJhbnNmb3JtXCIgOiBcIiBmbGlwc3Rlci0tbm8tdHJhbnNmb3JtXCIsXHJcbiAgICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAgICBvLmNsaWNrID8gXCJmbGlwc3Rlci0tY2xpY2tcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgIF0uam9pbihcIiBcIilcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvLnN0YXJ0ICYmXHJcbiAgICAgICAgICAgIChRID0gXCJjZW50ZXJcIiA9PT0gby5zdGFydCA/IE1hdGguZmxvb3IoSi5sZW5ndGggLyAyKSA6IG8uc3RhcnQpLFxyXG4gICAgICAgICAgdihRKTtcclxuICAgICAgICB2YXIgYiA9IE8uZmluZChcImltZ1wiKTtcclxuICAgICAgICBpZiAoYi5sZW5ndGgpIHtcclxuICAgICAgICAgIHZhciBjID0gMDtcclxuICAgICAgICAgIGIub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYysrLCBjID49IGIubGVuZ3RoICYmIHooKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHosIDc1MCk7XHJcbiAgICAgICAgfSBlbHNlIHooKTtcclxuICAgICAgICBoLm9uKFwicmVzaXplLmZsaXBzdGVyXCIsIGQodCwgNDAwKSksXHJcbiAgICAgICAgICBvLmF1dG9wbGF5ICYmIHcoKSxcclxuICAgICAgICAgIG8ucGF1c2VPbkhvdmVyICYmXHJcbiAgICAgICAgICAgIEcub24oXCJtb3VzZWVudGVyLmZsaXBzdGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBSID8geSghMCkgOiB4KCk7XHJcbiAgICAgICAgICAgIH0pLm9uKFwibW91c2VsZWF2ZS5mbGlwc3RlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgLTEgPT09IFIgJiYgdygpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIEIoTyksXHJcbiAgICAgICAgICBDKEcpLFxyXG4gICAgICAgICAgRChHKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgRixcclxuICAgICAgICBHLFxyXG4gICAgICAgIEgsXHJcbiAgICAgICAgSSxcclxuICAgICAgICBKLFxyXG4gICAgICAgIEssXHJcbiAgICAgICAgTCxcclxuICAgICAgICBNLFxyXG4gICAgICAgIE4sXHJcbiAgICAgICAgTyA9IGEodGhpcyksXHJcbiAgICAgICAgUCA9IFtdLFxyXG4gICAgICAgIFEgPSAwLFxyXG4gICAgICAgIFIgPSAhMSxcclxuICAgICAgICBTID0gITE7XHJcbiAgICAgIChGID0ge1xyXG4gICAgICAgIGp1bXA6IHYsXHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHYoXCJuZXh0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHYoXCJwcmV2XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheTogdyxcclxuICAgICAgICBzdG9wOiB4LFxyXG4gICAgICAgIHBhdXNlOiB5LFxyXG4gICAgICAgIGluZGV4OiBBLFxyXG4gICAgICB9KSxcclxuICAgICAgICBPLmRhdGEoXCJtZXRob2RzXCIsIEYpLFxyXG4gICAgICAgIE8uaGFzQ2xhc3Moay5hY3RpdmUpIHx8IEUoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLyoqXHJcbiAqIGF1dGhvciBDaHJpc3RvcGhlciBCbHVtXHJcbiAqICAgIC0gYmFzZWQgb24gdGhlIGlkZWEgb2YgUmVteSBTaGFycCwgaHR0cDovL3JlbXlzaGFycC5jb20vMjAwOS8wMS8yNi9lbGVtZW50LWluLXZpZXctZXZlbnQtcGx1Z2luL1xyXG4gKiAgICAtIGZvcmtlZCBmcm9tIGh0dHA6Ly9naXRodWIuY29tL3p1ay9qcXVlcnkuaW52aWV3L1xyXG4gKi9cclxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTURcclxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgLy8gTm9kZSwgQ29tbW9uSlNcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXHJcbiAgICBmYWN0b3J5KGpRdWVyeSk7XHJcbiAgfVxyXG59KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIHZhciBpbnZpZXdPYmplY3RzID0gW10sIHZpZXdwb3J0U2l6ZSwgdmlld3BvcnRPZmZzZXQsXHJcbiAgICAgIGQgPSBkb2N1bWVudCwgdyA9IHdpbmRvdywgZG9jdW1lbnRFbGVtZW50ID0gZC5kb2N1bWVudEVsZW1lbnQsIHRpbWVyO1xyXG5cclxuICAkLmV2ZW50LnNwZWNpYWwuaW52aWV3ID0ge1xyXG4gICAgYWRkOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGludmlld09iamVjdHMucHVzaCh7IGRhdGE6IGRhdGEsICRlbGVtZW50OiAkKHRoaXMpLCBlbGVtZW50OiB0aGlzIH0pO1xyXG4gICAgICAvLyBVc2Ugc2V0SW50ZXJ2YWwgaW4gb3JkZXIgdG8gYWxzbyBtYWtlIHN1cmUgdGhpcyBjYXB0dXJlcyBlbGVtZW50cyB3aXRoaW5cclxuICAgICAgLy8gXCJvdmVyZmxvdzpzY3JvbGxcIiBlbGVtZW50cyBvciBlbGVtZW50cyB0aGF0IGFwcGVhcmVkIGluIHRoZSBkb20gdHJlZSBkdWUgdG9cclxuICAgICAgLy8gZG9tIG1hbmlwdWxhdGlvbiBhbmQgcmVmbG93XHJcbiAgICAgIC8vIG9sZDogJCh3aW5kb3cpLnNjcm9sbChjaGVja0luVmlldyk7XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIEJ5IHRoZSB3YXksIGlPUyAoaVBhZCwgaVBob25lLCAuLi4pIHNlZW1zIHRvIG5vdCBleGVjdXRlLCBvciBhdCBsZWFzdCBkZWxheXNcclxuICAgICAgLy8gaW50ZXJ2YWxzIHdoaWxlIHRoZSB1c2VyIHNjcm9sbHMuIFRoZXJlZm9yZSB0aGUgaW52aWV3IGV2ZW50IG1pZ2h0IGZpcmUgYSBiaXQgbGF0ZSB0aGVyZVxyXG4gICAgICAvL1xyXG4gICAgICAvLyBEb24ndCB3YXN0ZSBjeWNsZXMgd2l0aCBhbiBpbnRlcnZhbCB1bnRpbCB3ZSBnZXQgYXQgbGVhc3Qgb25lIGVsZW1lbnQgdGhhdFxyXG4gICAgICAvLyBoYXMgYm91bmQgdG8gdGhlIGludmlldyBldmVudC5cclxuICAgICAgaWYgKCF0aW1lciAmJiBpbnZpZXdPYmplY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICB0aW1lciA9IHNldEludGVydmFsKGNoZWNrSW5WaWV3LCAyNTApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZTogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aW52aWV3T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBpbnZpZXdPYmplY3QgPSBpbnZpZXdPYmplY3RzW2ldO1xyXG4gICAgICAgIGlmIChpbnZpZXdPYmplY3QuZWxlbWVudCA9PT0gdGhpcyAmJiBpbnZpZXdPYmplY3QuZGF0YS5ndWlkID09PSBkYXRhLmd1aWQpIHtcclxuICAgICAgICAgIGludmlld09iamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDbGVhciBpbnRlcnZhbCB3aGVuIHdlIG5vIGxvbmdlciBoYXZlIGFueSBlbGVtZW50cyBsaXN0ZW5pbmdcclxuICAgICAgaWYgKCFpbnZpZXdPYmplY3RzLmxlbmd0aCkge1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRTaXplKCkge1xyXG4gICAgdmFyIG1vZGUsIGRvbU9iamVjdCwgc2l6ZSA9IHsgaGVpZ2h0OiB3LmlubmVySGVpZ2h0LCB3aWR0aDogdy5pbm5lcldpZHRoIH07XHJcblxyXG4gICAgLy8gaWYgdGhpcyBpcyBjb3JyZWN0IHRoZW4gcmV0dXJuIGl0LiBpUGFkIGhhcyBjb21wYXQgTW9kZSwgc28gd2lsbFxyXG4gICAgLy8gZ28gaW50byBjaGVjayBjbGllbnRIZWlnaHQvY2xpZW50V2lkdGggKHdoaWNoIGhhcyB0aGUgd3JvbmcgdmFsdWUpLlxyXG4gICAgaWYgKCFzaXplLmhlaWdodCkge1xyXG4gICAgICBtb2RlID0gZC5jb21wYXRNb2RlO1xyXG4gICAgICBpZiAobW9kZSB8fCAhJC5zdXBwb3J0LmJveE1vZGVsKSB7IC8vIElFLCBHZWNrb1xyXG4gICAgICAgIGRvbU9iamVjdCA9IG1vZGUgPT09ICdDU1MxQ29tcGF0JyA/XHJcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgOiAvLyBTdGFuZGFyZHNcclxuICAgICAgICAgIGQuYm9keTsgLy8gUXVpcmtzXHJcbiAgICAgICAgc2l6ZSA9IHtcclxuICAgICAgICAgIGhlaWdodDogZG9tT2JqZWN0LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOiAgZG9tT2JqZWN0LmNsaWVudFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaXplO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6ICB3LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgICB8fCBkLmJvZHkuc2Nyb2xsVG9wLFxyXG4gICAgICBsZWZ0OiB3LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0ICB8fCBkLmJvZHkuc2Nyb2xsTGVmdFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrSW5WaWV3KCkge1xyXG4gICAgaWYgKCFpbnZpZXdPYmplY3RzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGkgPSAwLCAkZWxlbWVudHMgPSAkLm1hcChpbnZpZXdPYmplY3RzLCBmdW5jdGlvbihpbnZpZXdPYmplY3QpIHtcclxuICAgICAgdmFyIHNlbGVjdG9yICA9IGludmlld09iamVjdC5kYXRhLnNlbGVjdG9yLFxyXG4gICAgICAgICAgJGVsZW1lbnQgID0gaW52aWV3T2JqZWN0LiRlbGVtZW50O1xyXG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyAkZWxlbWVudC5maW5kKHNlbGVjdG9yKSA6ICRlbGVtZW50O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmlld3BvcnRTaXplICAgPSB2aWV3cG9ydFNpemUgICB8fCBnZXRWaWV3cG9ydFNpemUoKTtcclxuICAgIHZpZXdwb3J0T2Zmc2V0ID0gdmlld3BvcnRPZmZzZXQgfHwgZ2V0Vmlld3BvcnRPZmZzZXQoKTtcclxuXHJcbiAgICBmb3IgKDsgaTxpbnZpZXdPYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIElnbm9yZSBlbGVtZW50cyB0aGF0IGFyZSBub3QgaW4gdGhlIERPTSB0cmVlXHJcbiAgICAgIGlmICghJC5jb250YWlucyhkb2N1bWVudEVsZW1lbnQsICRlbGVtZW50c1tpXVswXSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyICRlbGVtZW50ICAgICAgPSAkKCRlbGVtZW50c1tpXSksXHJcbiAgICAgICAgICBlbGVtZW50U2l6ZSAgID0geyBoZWlnaHQ6ICRlbGVtZW50WzBdLm9mZnNldEhlaWdodCwgd2lkdGg6ICRlbGVtZW50WzBdLm9mZnNldFdpZHRoIH0sXHJcbiAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gJGVsZW1lbnQub2Zmc2V0KCksXHJcbiAgICAgICAgICBpblZpZXcgICAgICAgID0gJGVsZW1lbnQuZGF0YSgnaW52aWV3Jyk7XHJcblxyXG4gICAgICAvLyBEb24ndCBhc2sgbWUgd2h5IGJlY2F1c2UgSSBoYXZlbid0IGZpZ3VyZWQgb3V0IHlldDpcclxuICAgICAgLy8gdmlld3BvcnRPZmZzZXQgYW5kIHZpZXdwb3J0U2l6ZSBhcmUgc29tZXRpbWVzIHN1ZGRlbmx5IG51bGwgaW4gRmlyZWZveCA1LlxyXG4gICAgICAvLyBFdmVuIHRob3VnaCBpdCBzb3VuZHMgd2VpcmQ6XHJcbiAgICAgIC8vIEl0IHNlZW1zIHRoYXQgdGhlIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIGludGVyZmVycmVkIGJ5IHRoZSBvbnJlc2l6ZS9vbnNjcm9sbCBldmVudFxyXG4gICAgICAvLyB3aGVyZSB2aWV3cG9ydE9mZnNldCBhbmQgdmlld3BvcnRTaXplIGFyZSB1bnNldFxyXG4gICAgICBpZiAoIXZpZXdwb3J0T2Zmc2V0IHx8ICF2aWV3cG9ydFNpemUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50T2Zmc2V0LnRvcCArIGVsZW1lbnRTaXplLmhlaWdodCA+IHZpZXdwb3J0T2Zmc2V0LnRvcCAmJlxyXG4gICAgICAgICAgZWxlbWVudE9mZnNldC50b3AgPCB2aWV3cG9ydE9mZnNldC50b3AgKyB2aWV3cG9ydFNpemUuaGVpZ2h0ICYmXHJcbiAgICAgICAgICBlbGVtZW50T2Zmc2V0LmxlZnQgKyBlbGVtZW50U2l6ZS53aWR0aCA+IHZpZXdwb3J0T2Zmc2V0LmxlZnQgJiZcclxuICAgICAgICAgIGVsZW1lbnRPZmZzZXQubGVmdCA8IHZpZXdwb3J0T2Zmc2V0LmxlZnQgKyB2aWV3cG9ydFNpemUud2lkdGgpIHtcclxuICAgICAgICBpZiAoIWluVmlldykge1xyXG4gICAgICAgICAgJGVsZW1lbnQuZGF0YSgnaW52aWV3JywgdHJ1ZSkudHJpZ2dlcignaW52aWV3JywgW3RydWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5WaWV3KSB7XHJcbiAgICAgICAgJGVsZW1lbnQuZGF0YSgnaW52aWV3JywgZmFsc2UpLnRyaWdnZXIoJ2ludmlldycsIFtmYWxzZV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkKHcpLm9uKFwic2Nyb2xsIHJlc2l6ZSBzY3JvbGxzdG9wXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlld3BvcnRTaXplID0gdmlld3BvcnRPZmZzZXQgPSBudWxsO1xyXG4gIH0pO1xyXG5cclxuICAvLyBJRSA8IDkgc2Nyb2xscyB0byBmb2N1c2VkIGVsZW1lbnRzIHdpdGhvdXQgZmlyaW5nIHRoZSBcInNjcm9sbFwiIGV2ZW50XHJcbiAgaWYgKCFkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAmJiBkb2N1bWVudEVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgIGRvY3VtZW50RWxlbWVudC5hdHRhY2hFdmVudChcIm9uZm9jdXNpblwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmlld3BvcnRPZmZzZXQgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KSk7XHJcbiIsIi8qKlxyXG4gKiBqcXVlcnkubWFzay5qc1xyXG4gKiBAdmVyc2lvbjogdjEuMTQuMTVcclxuICogQGF1dGhvcjogSWdvciBFc2NvYmFyXHJcbiAqXHJcbiAqIENyZWF0ZWQgYnkgSWdvciBFc2NvYmFyIG9uIDIwMTItMDMtMTAuIFBsZWFzZSByZXBvcnQgYW55IGJ1ZyBhdCBnaXRodWIuY29tL2lnb3Jlc2NvYmFyL2pRdWVyeS1NYXNrLVBsdWdpblxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgSWdvciBFc2NvYmFyIGh0dHA6Ly9pZ29yZXNjb2Jhci5jb21cclxuICpcclxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cclxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cclxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxyXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcclxuICogY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xyXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcclxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIGpzaGludCBsYXhicmVhazogdHJ1ZSAqL1xyXG4vKiBqc2hpbnQgbWF4Y29tcGxleGl0eToxNyAqL1xyXG4vKiBnbG9iYWwgZGVmaW5lICovXHJcblxyXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbikgcGF0dGVybnMgZm9yIEphdmFTY3JpcHQgbW9kdWxlcyB0aGF0IHdvcmsgZXZlcnl3aGVyZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci90ZW1wbGF0ZXMvanF1ZXJ5UGx1Z2luLmpzXHJcbihmdW5jdGlvbiAoZmFjdG9yeSwgalF1ZXJ5LCBaZXB0bykge1xyXG5cclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5IHx8IFplcHRvKTtcclxuICAgIH1cclxuXHJcbn0oZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgTWFzayA9IGZ1bmN0aW9uIChlbCwgbWFzaywgb3B0aW9ucykge1xyXG5cclxuICAgICAgICB2YXIgcCA9IHtcclxuICAgICAgICAgICAgaW52YWxpZDogW10sXHJcbiAgICAgICAgICAgIGdldENhcmV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwgPSBlbC5nZXQoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRTZWwgPSBkb2N1bWVudC5zZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNTZWxTdGFydCA9IGN0cmwuc2VsZWN0aW9uU3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElFIFN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZFNlbCAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCdNU0lFIDEwJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbCA9IGRTZWwuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXAudmFsKCkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gc2VsLnRleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IHN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjU2VsU3RhcnQgfHwgY1NlbFN0YXJ0ID09PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gY1NlbFN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldENhcmV0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlzKCc6Zm9jdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UsIGN0cmwgPSBlbC5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94LCBXZWJLaXQsIGV0Yy4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHJsLnNldFNlbGVjdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLnNldFNlbGVjdGlvblJhbmdlKHBvcywgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gSUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gY3RybC5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGVsXHJcbiAgICAgICAgICAgICAgICAub24oJ2tleWRvd24ubWFzaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdtYXNrLWtleWNvZGUnLCBlLmtleUNvZGUgfHwgZS53aGljaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnbWFzay1wcmV2aXVzLXZhbHVlJywgZWwudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ21hc2stcHJldml1cy1jYXJldC1wb3MnLCBwLmdldENhcmV0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAubWFza0RpZ2l0UG9zTWFwT2xkID0gcC5tYXNrRGlnaXRQb3NNYXA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCQuak1hc2tHbG9iYWxzLnVzZUlucHV0ID8gJ2lucHV0Lm1hc2snIDogJ2tleXVwLm1hc2snLCBwLmJlaGF2aW91cilcclxuICAgICAgICAgICAgICAgIC5vbigncGFzdGUubWFzayBkcm9wLm1hc2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5rZXlkb3duKCkua2V5dXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbignY2hhbmdlLm1hc2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ2NoYW5nZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub24oJ2JsdXIubWFzaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBwLnZhbCgpICYmICFlbC5kYXRhKCdjaGFuZ2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ2NoYW5nZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gaXQncyB2ZXJ5IGltcG9ydGFudCB0aGF0IHRoaXMgY2FsbGJhY2sgcmVtYWlucyBpbiB0aGlzIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndoaXNlIG9sZFZhbHVlIGl0J3MgZ29pbmcgdG8gd29yayBidWdneVxyXG4gICAgICAgICAgICAgICAgLm9uKCdibHVyLm1hc2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IHAudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IGFsbCB0ZXh0IG9uIGZvY3VzXHJcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3VzLm1hc2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdE9uRm9jdXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSB2YWx1ZSBpZiBpdCBub3QgY29tcGxldGUgdGhlIG1hc2tcclxuICAgICAgICAgICAgICAgIC5vbignZm9jdXNvdXQubWFzaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNsZWFySWZOb3RNYXRjaCAmJiAhcmVnZXhNYXNrLnRlc3QocC52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBwLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UmVnZXhNYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXNrQ2h1bmtzID0gW10sIHRyYW5zbGF0aW9uLCBwYXR0ZXJuLCBvcHRpb25hbCwgcmVjdXJzaXZlLCBvUmVjdXJzaXZlLCByO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gak1hc2sudHJhbnNsYXRpb25bbWFzay5jaGFyQXQoaSldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSB0cmFuc2xhdGlvbi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IHRyYW5zbGF0aW9uLm9wdGlvbmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmUgPSB0cmFuc2xhdGlvbi5yZWN1cnNpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2h1bmtzLnB1c2gobWFzay5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1JlY3Vyc2l2ZSA9IHtkaWdpdDogbWFzay5jaGFyQXQoaSksIHBhdHRlcm46IHBhdHRlcm59O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0NodW5rcy5wdXNoKCFvcHRpb25hbCAmJiAhcmVjdXJzaXZlID8gcGF0dGVybiA6IChwYXR0ZXJuICsgJz8nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0NodW5rcy5wdXNoKG1hc2suY2hhckF0KGkpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgciA9IG1hc2tDaHVua3Muam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9SZWN1cnNpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByID0gci5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgb1JlY3Vyc2l2ZS5kaWdpdCArICcoLionICsgb1JlY3Vyc2l2ZS5kaWdpdCArICcpPyknKSwgJygkMSk/JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAob1JlY3Vyc2l2ZS5kaWdpdCwgJ2cnKSwgb1JlY3Vyc2l2ZS5wYXR0ZXJuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVzdHJveUV2ZW50czogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5vZmYoWydpbnB1dCcsICdrZXlkb3duJywgJ2tleXVwJywgJ3Bhc3RlJywgJ2Ryb3AnLCAnYmx1cicsICdmb2N1c291dCcsICcnXS5qb2luKCcubWFzayAnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzSW5wdXQgPSBlbC5pcygnaW5wdXQnKSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBpc0lucHV0ID8gJ3ZhbCcgOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxbbWV0aG9kXSgpICE9PSB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsW21ldGhvZF0odik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBlbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IGVsW21ldGhvZF0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkVmFsID0gZWwuZGF0YSgnbWFzay1wcmV2aXVzLXZhbHVlJykgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsID0gcC5nZXRNYXNrZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyA9IHAuZ2V0Q2FyZXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IG5ld1ZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvc09sZCA9IGVsLmRhdGEoJ21hc2stcHJldml1cy1jYXJldC1wb3MnKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWxMID0gbmV3VmFsLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsTCA9IG9sZFZhbC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNBZnRlckNhcmV0ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsT2xkID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zTmV3OyBpIDwgbmV3VmFsTDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNBZnRlckNhcmV0Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc05ldyAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY2FyZXRQb3NOZXcgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc09sZCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLm1hc2tEaWdpdFBvc01hcE9sZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsT2xkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJzb3IgaXMgYXQgdGhlIGVuZCBrZWVwIGl0IHRoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zTmV3ID4gb2xkVmFsTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgPSBuZXdWYWxMICogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJldFBvc09sZCA+PSBjYXJldFBvc05ldyAmJiBjYXJldFBvc09sZCAhPT0gb2xkVmFsTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAubWFza0RpZ2l0UG9zTWFwT2xkW2NhcmV0UG9zTmV3XSkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldFBvc05ldztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyAtPSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQgLSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgLT0gbWFza0RpZ2l0c0JlZm9yZUNhcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLm1hc2tEaWdpdFBvc01hcFtjYXJldFBvc05ld10pICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyA9IGNhcmV0UG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXJldFBvc05ldyA+IGNhcmV0UG9zT2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ICs9IG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbCAtIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgKz0gbWFza0RpZ2l0c0FmdGVyQ2FyZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmV0UG9zTmV3O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWhhdmlvdXI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgIHAuaW52YWxpZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZWwuZGF0YSgnbWFzay1rZXljb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaW5BcnJheShrZXlDb2RlLCBqTWFzay5ieVBhc3NLZXlzKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gcC5nZXRNYXNrZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3MgPSBwLmdldENhcmV0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBjb21wZW5zYXRpb24gdG8gZGV2aWNlcy9icm93c2VycyB0aGF0IGRvbid0IGNvbXBlbnNhdGVcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXJldCBwb3NpdGlvbmluZyB0aGUgcmlnaHQgd2F5XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHAuc2V0Q2FyZXQocC5jYWxjdWxhdGVDYXJldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sICQuak1hc2tHbG9iYWxzLmtleVN0cm9rZUNvbXBlbnNhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAudmFsKG5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRDYXJldChjYXJldFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuY2FsbGJhY2tzKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNYXNrZWQ6IGZ1bmN0aW9uKHNraXBNYXNrQ2hhcnMsIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1ZiA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsID09PSB1bmRlZmluZWQgPyBwLnZhbCgpIDogdmFsICsgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbSA9IDAsIG1hc2tMZW4gPSBtYXNrLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB2ID0gMCwgdmFsTGVuID0gdmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDEsIGFkZE1ldGhvZCA9ICdwdXNoJyxcclxuICAgICAgICAgICAgICAgICAgICByZXNldFBvcyA9IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdENvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRQb3NBcnIgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1ldGhvZCA9ICd1bnNoaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG0gPSBtYXNrTGVuIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdmFsTGVuIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0gPiAtMSAmJiB2ID4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1hc2tDaGFyID0gbWFza0xlbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtIDwgbWFza0xlbiAmJiB2IDwgdmFsTGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RVbnRyYW5zbGF0ZWRNYXNrQ2hhcjtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChjaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tEaWdpdCA9IG1hc2suY2hhckF0KG0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxEaWdpdCA9IHZhbHVlLmNoYXJBdCh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrRGlnaXRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbERpZ2l0Lm1hdGNoKHRyYW5zbGF0aW9uLnBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXSh2YWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNldFBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRQb3MgPSBtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobSA9PT0gbGFzdE1hc2tDaGFyICYmIG0gIT09IHJlc2V0UG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSByZXNldFBvcyAtIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0TWFza0NoYXIgPT09IHJlc2V0UG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbERpZ2l0ID09PSBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoZWQgdGhlIGxhc3QgdW50cmFuc2xhdGVkIChyYXcpIG1hc2sgY2hhcmFjdGVyIHRoYXQgd2UgZW5jb3VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpa2VseSBhbiBpbnNlcnQgb2Zmc2V0IHRoZSBtYXNrIGNoYXJhY3RlciBmcm9tIHRoZSBsYXN0IGVudHJ5OyBmYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdWdoIGFuZCBvbmx5IGluY3JlbWVudCB2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0aW9uLm9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0aW9uLmZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXSh0cmFuc2xhdGlvbi5mYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW52YWxpZC5wdXNoKHtwOiB2LCB2OiB2YWxEaWdpdCwgZTogdHJhbnNsYXRpb24ucGF0dGVybn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcE1hc2tDaGFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmW2FkZE1ldGhvZF0obWFza0RpZ2l0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbERpZ2l0ID09PSBtYXNrRGlnaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0Fyci5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXIgPSBtYXNrRGlnaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRQb3NBcnIucHVzaCh2ICsgbWFza0RpZ2l0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TWFza0NoYXJEaWdpdCA9IG1hc2suY2hhckF0KGxhc3RNYXNrQ2hhcik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFza0xlbiA9PT0gdmFsTGVuICsgMSAmJiAhak1hc2sudHJhbnNsYXRpb25bbGFzdE1hc2tDaGFyRGlnaXRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmLnB1c2gobGFzdE1hc2tDaGFyRGlnaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBidWYuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBwLm1hcE1hc2tkaWdpdFBvc2l0aW9ucyhuZXdWYWwsIG1hc2tEaWdpdFBvc0FyciwgdmFsTGVuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcE1hc2tkaWdpdFBvc2l0aW9uczogZnVuY3Rpb24obmV3VmFsLCBtYXNrRGlnaXRQb3NBcnIsIHZhbExlbikge1xyXG4gICAgICAgICAgICAgIHZhciBtYXNrRGlmZiA9IG9wdGlvbnMucmV2ZXJzZSA/IG5ld1ZhbC5sZW5ndGggLSB2YWxMZW4gOiAwO1xyXG4gICAgICAgICAgICAgIHAubWFza0RpZ2l0UG9zTWFwID0ge307XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrRGlnaXRQb3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHAubWFza0RpZ2l0UG9zTWFwW21hc2tEaWdpdFBvc0FycltpXSArIG1hc2tEaWZmXSA9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcC52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdmFsICE9PSBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QXJncyA9IFt2YWwsIGUsIGVsLCBvcHRpb25zXSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKG5hbWUsIGNyaXRlcmlhLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBjcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uQ2hhbmdlJywgY2hhbmdlZCA9PT0gdHJ1ZSwgZGVmYXVsdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uS2V5UHJlc3MnLCBjaGFuZ2VkID09PSB0cnVlLCBkZWZhdWx0QXJncyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygnb25Db21wbGV0ZScsIHZhbC5sZW5ndGggPT09IG1hc2subGVuZ3RoLCBkZWZhdWx0QXJncyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygnb25JbnZhbGlkJywgcC5pbnZhbGlkLmxlbmd0aCA+IDAsIFt2YWwsIGUsIGVsLCBwLmludmFsaWQsIG9wdGlvbnNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGVsID0gJChlbCk7XHJcbiAgICAgICAgdmFyIGpNYXNrID0gdGhpcywgb2xkVmFsdWUgPSBwLnZhbCgpLCByZWdleE1hc2s7XHJcblxyXG4gICAgICAgIG1hc2sgPSB0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJyA/IG1hc2socC52YWwoKSwgdW5kZWZpbmVkLCBlbCwgIG9wdGlvbnMpIDogbWFzaztcclxuXHJcbiAgICAgICAgLy8gcHVibGljIG1ldGhvZHNcclxuICAgICAgICBqTWFzay5tYXNrID0gbWFzaztcclxuICAgICAgICBqTWFzay5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICBqTWFzay5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNhcmV0ID0gcC5nZXRDYXJldCgpO1xyXG4gICAgICAgICAgICBpZiAoak1hc2sub3B0aW9ucy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWwuZGF0YSgnbWFzay1tYXhsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignbWF4bGVuZ3RoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5kZXN0cm95RXZlbnRzKCk7XHJcbiAgICAgICAgICAgIHAudmFsKGpNYXNrLmdldENsZWFuVmFsKCkpO1xyXG4gICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGdldCB2YWx1ZSB3aXRob3V0IG1hc2tcclxuICAgICAgICBqTWFzay5nZXRDbGVhblZhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIHJldHVybiBwLmdldE1hc2tlZCh0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBnZXQgbWFza2VkIHZhbHVlIHdpdGhvdXQgdGhlIHZhbHVlIGJlaW5nIGluIHRoZSBpbnB1dCBvciBlbGVtZW50XHJcbiAgICAgICAgak1hc2suZ2V0TWFza2VkVmFsID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgcmV0dXJuIHAuZ2V0TWFza2VkKGZhbHNlLCB2YWwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgak1hc2suaW5pdCA9IGZ1bmN0aW9uKG9ubHlNYXNrKSB7XHJcbiAgICAgICAgICAgIG9ubHlNYXNrID0gb25seU1hc2sgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgak1hc2suY2xlYXJJZk5vdE1hdGNoICA9ICQuak1hc2tHbG9iYWxzLmNsZWFySWZOb3RNYXRjaDtcclxuICAgICAgICAgICAgak1hc2suYnlQYXNzS2V5cyAgICAgICA9ICQuak1hc2tHbG9iYWxzLmJ5UGFzc0tleXM7XHJcbiAgICAgICAgICAgIGpNYXNrLnRyYW5zbGF0aW9uICAgICAgPSAkLmV4dGVuZCh7fSwgJC5qTWFza0dsb2JhbHMudHJhbnNsYXRpb24sIG9wdGlvbnMudHJhbnNsYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgak1hc2sgPSAkLmV4dGVuZCh0cnVlLCB7fSwgak1hc2ssIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgcmVnZXhNYXNrID0gcC5nZXRSZWdleE1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbmx5TWFzaykge1xyXG4gICAgICAgICAgICAgICAgcC5ldmVudHMoKTtcclxuICAgICAgICAgICAgICAgIHAudmFsKHAuZ2V0TWFza2VkKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hdHRyKCdwbGFjZWhvbGRlcicgLCBvcHRpb25zLnBsYWNlaG9sZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSwgb3RoZXJ3aXNlIGlmIHRoZSB1c2VyIHN1Ym1pdCB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gcHJlc3MgdGhlIFwiYmFja1wiIGJ1dHRvbiwgdGhlIGF1dG9jb21wbGV0ZSB3aWxsIGVyYXNlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGF0YS4gV29ya3MgZmluZSBvbiBJRTkrLCBGRiwgT3BlcmEsIFNhZmFyaS5cclxuICAgICAgICAgICAgICAgIGlmIChlbC5kYXRhKCdtYXNrJykpIHtcclxuICAgICAgICAgICAgICAgICAgZWwuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRldGVjdCBpZiBpcyBuZWNlc3NhcnkgbGV0IHRoZSB1c2VyIHR5cGUgZnJlZWx5LlxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIGlzIGEgbG90IGZhc3RlciB0aGFuIGZvckVhY2guXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbWF4bGVuZ3RoID0gdHJ1ZTsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXhsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hdHRyKCdtYXhsZW5ndGgnLCBtYXNrLmxlbmd0aCkuZGF0YSgnbWFzay1tYXhsZW5ndGgnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwLmRlc3Ryb3lFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgIHAuZXZlbnRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhcmV0ID0gcC5nZXRDYXJldCgpO1xyXG4gICAgICAgICAgICAgICAgcC52YWwocC5nZXRNYXNrZWQoKSk7XHJcbiAgICAgICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGpNYXNrLmluaXQoIWVsLmlzKCdpbnB1dCcpKTtcclxuICAgIH07XHJcblxyXG4gICAgJC5tYXNrV2F0Y2hlcnMgPSB7fTtcclxuICAgIHZhciBIVE1MQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBvcHRpb25zID0ge30sXHJcbiAgICAgICAgICAgIHByZWZpeCA9ICdkYXRhLW1hc2stJyxcclxuICAgICAgICAgICAgbWFzayA9IGlucHV0LmF0dHIoJ2RhdGEtbWFzaycpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAncmV2ZXJzZScpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucmV2ZXJzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAnY2xlYXJpZm5vdG1hdGNoJykpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5jbGVhcklmTm90TWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlucHV0LmF0dHIocHJlZml4ICsgJ3NlbGVjdG9uZm9jdXMnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgb3B0aW9ucy5zZWxlY3RPbkZvY3VzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub3RTYW1lTWFza09iamVjdChpbnB1dCwgbWFzaywgb3B0aW9ucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmRhdGEoJ21hc2snLCBuZXcgTWFzayh0aGlzLCBtYXNrLCBvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vdFNhbWVNYXNrT2JqZWN0ID0gZnVuY3Rpb24oZmllbGQsIG1hc2ssIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgbWFza09iamVjdCA9ICQoZmllbGQpLmRhdGEoJ21hc2snKSxcclxuICAgICAgICAgICAgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnksXHJcbiAgICAgICAgICAgIHZhbHVlID0gJChmaWVsZCkudmFsKCkgfHwgJChmaWVsZCkudGV4dCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbWFzayA9IG1hc2sodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbWFza09iamVjdCAhPT0gJ29iamVjdCcgfHwgc3RyaW5naWZ5KG1hc2tPYmplY3Qub3B0aW9ucykgIT09IHN0cmluZ2lmeShvcHRpb25zKSB8fCBtYXNrT2JqZWN0Lm1hc2sgIT09IG1hc2s7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH0sXHJcbiAgICBldmVudFN1cHBvcnRlZCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xyXG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBpc1N1cHBvcnRlZDtcclxuXHJcbiAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcclxuICAgICAgICBpc1N1cHBvcnRlZCA9IChldmVudE5hbWUgaW4gZWwpO1xyXG5cclxuICAgICAgICBpZiAoICFpc1N1cHBvcnRlZCApIHtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcclxuICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4ubWFzayA9IGZ1bmN0aW9uKG1hc2ssIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICBnbG9iYWxzID0gJC5qTWFza0dsb2JhbHMsXHJcbiAgICAgICAgICAgIGludGVydmFsID0gZ2xvYmFscy53YXRjaEludGVydmFsLFxyXG4gICAgICAgICAgICB3YXRjaElucHV0cyA9IG9wdGlvbnMud2F0Y2hJbnB1dHMgfHwgZ2xvYmFscy53YXRjaElucHV0cyxcclxuICAgICAgICAgICAgbWFza0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90U2FtZU1hc2tPYmplY3QodGhpcywgbWFzaywgb3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKCdtYXNrJywgbmV3IE1hc2sodGhpcywgbWFzaywgb3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHRoaXMpLmVhY2gobWFza0Z1bmN0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yICYmIHNlbGVjdG9yICE9PSAnJyAmJiB3YXRjaElucHV0cykge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3NlbGVjdG9yXSk7XHJcbiAgICAgICAgICAgICQubWFza1dhdGNoZXJzW3NlbGVjdG9yXSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKHNlbGVjdG9yKS5lYWNoKG1hc2tGdW5jdGlvbik7XHJcbiAgICAgICAgICAgIH0sIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4ubWFza2VkID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgnbWFzaycpLmdldE1hc2tlZFZhbCh2YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLnVubWFzayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoJC5tYXNrV2F0Y2hlcnNbdGhpcy5zZWxlY3Rvcl0pO1xyXG4gICAgICAgIGRlbGV0ZSAkLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YU1hc2sgPSAkKHRoaXMpLmRhdGEoJ21hc2snKTtcclxuICAgICAgICAgICAgaWYgKGRhdGFNYXNrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhTWFzay5yZW1vdmUoKS5yZW1vdmVEYXRhKCdtYXNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5jbGVhblZhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoJ21hc2snKS5nZXRDbGVhblZhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmFwcGx5RGF0YU1hc2sgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJC5qTWFza0dsb2JhbHMubWFza0VsZW1lbnRzO1xyXG4gICAgICAgIHZhciAkc2VsZWN0b3IgPSAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSA/IHNlbGVjdG9yIDogJChzZWxlY3Rvcik7XHJcbiAgICAgICAgJHNlbGVjdG9yLmZpbHRlcigkLmpNYXNrR2xvYmFscy5kYXRhTWFza0F0dHIpLmVhY2goSFRNTEF0dHJpYnV0ZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZ2xvYmFscyA9IHtcclxuICAgICAgICBtYXNrRWxlbWVudHM6ICdpbnB1dCx0ZCxzcGFuLGRpdicsXHJcbiAgICAgICAgZGF0YU1hc2tBdHRyOiAnKltkYXRhLW1hc2tdJyxcclxuICAgICAgICBkYXRhTWFzazogdHJ1ZSxcclxuICAgICAgICB3YXRjaEludGVydmFsOiAzMDAsXHJcbiAgICAgICAgd2F0Y2hJbnB1dHM6IHRydWUsXHJcbiAgICAgICAga2V5U3Ryb2tlQ29tcGVuc2F0aW9uOiAxMCxcclxuICAgICAgICAvLyBvbGQgdmVyc2lvbnMgb2YgY2hyb21lIGRvbnQgd29yayBncmVhdCB3aXRoIGlucHV0IGV2ZW50XHJcbiAgICAgICAgdXNlSW5wdXQ6ICEvQ2hyb21lXFwvWzItNF1bMC05XXxTYW1zdW5nQnJvd3Nlci8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgZXZlbnRTdXBwb3J0ZWQoJ2lucHV0JyksXHJcbiAgICAgICAgd2F0Y2hEYXRhTWFzazogZmFsc2UsXHJcbiAgICAgICAgYnlQYXNzS2V5czogWzksIDE2LCAxNywgMTgsIDM2LCAzNywgMzgsIDM5LCA0MCwgOTFdLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgICAgICAgICcwJzoge3BhdHRlcm46IC9cXGQvfSxcclxuICAgICAgICAgICAgJzknOiB7cGF0dGVybjogL1xcZC8sIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICAgICAgJyMnOiB7cGF0dGVybjogL1xcZC8sIHJlY3Vyc2l2ZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgICdBJzoge3BhdHRlcm46IC9bYS16QS1aMC05XS99LFxyXG4gICAgICAgICAgICAnUyc6IHtwYXR0ZXJuOiAvW2EtekEtWl0vfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJC5qTWFza0dsb2JhbHMgPSAkLmpNYXNrR2xvYmFscyB8fCB7fTtcclxuICAgIGdsb2JhbHMgPSAkLmpNYXNrR2xvYmFscyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBnbG9iYWxzLCAkLmpNYXNrR2xvYmFscyk7XHJcblxyXG4gICAgLy8gbG9va2luZyBmb3IgaW5wdXRzIHdpdGggZGF0YS1tYXNrIGF0dHJpYnV0ZVxyXG4gICAgaWYgKGdsb2JhbHMuZGF0YU1hc2spIHtcclxuICAgICAgICAkLmFwcGx5RGF0YU1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJC5qTWFza0dsb2JhbHMud2F0Y2hEYXRhTWFzaykge1xyXG4gICAgICAgICAgICAkLmFwcGx5RGF0YU1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBnbG9iYWxzLndhdGNoSW50ZXJ2YWwpO1xyXG59LCB3aW5kb3cualF1ZXJ5LCB3aW5kb3cuWmVwdG8pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==