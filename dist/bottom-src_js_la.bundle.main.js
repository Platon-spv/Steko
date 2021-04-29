(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_la"],{

/***/ 981:
/*!*****************************!*\
  !*** ./src/js/lazy_load.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});


/***/ }),

/***/ 547:
/*!***********************************!*\
  !*** ./src/js/lightslider.min.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*! lightslider - v1.1.6 - 2016-10-25
 * https://github.com/sachinchoolur/lightslider
 * Copyright (c) 2016 Sachin N; Licensed MIT */


!(function (a, b) {
  "use strict";
  var c = {
    item: 3,
    autoWidth: !1,
    slideMove: 1,
    slideMargin: 10,
    addClass: "",
    mode: "slide",
    useCSS: !0,
    cssEasing: "ease",
    easing: "linear",
    speed: 400,
    auto: !1,
    pauseOnHover: !1,
    loop: !1,
    slideEndAnimation: !0,
    pause: 2e3,
    keyPress: !1,
    controls: !0,
    prevHtml: "",
    nextHtml: "",
    rtl: !1,
    adaptiveHeight: !1,
    vertical: !1,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 10,
    pager: !0,
    gallery: !1,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",
    enableTouch: !0,
    enableDrag: !0,
    freeMove: !0,
    swipeThreshold: 40,
    responsive: [],
    onBeforeStart: function (a) {},
    onSliderLoad: function (a) {},
    onBeforeSlide: function (a, b) {},
    onAfterSlide: function (a, b) {},
    onBeforeNextSlide: function (a, b) {},
    onBeforePrevSlide: function (a, b) {},
  };
  a.fn.lightSlider = function (b) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          a(this).lightSlider(b);
        }),
        this
      );
    var d = {},
      e = a.extend(!0, {}, c, b),
      f = {},
      g = this;
    (d.$el = this), "fade" === e.mode && (e.vertical = !1);
    var h = g.children(),
      i = a(window).width(),
      j = null,
      k = null,
      l = 0,
      m = 0,
      n = !1,
      o = 0,
      p = "",
      q = 0,
      r = e.vertical === !0 ? "height" : "width",
      s = e.vertical === !0 ? "margin-bottom" : "margin-right",
      t = 0,
      u = 0,
      v = 0,
      w = 0,
      x = null,
      y = "ontouchstart" in document.documentElement,
      z = {};
    return (
      (z.chbreakpoint = function () {
        if (((i = a(window).width()), e.responsive.length)) {
          var b;
          if (
            (e.autoWidth === !1 && (b = e.item), i < e.responsive[0].breakpoint)
          )
            for (var c = 0; c < e.responsive.length; c++)
              i < e.responsive[c].breakpoint &&
                ((j = e.responsive[c].breakpoint), (k = e.responsive[c]));
          if ("undefined" != typeof k && null !== k)
            for (var d in k.settings)
              k.settings.hasOwnProperty(d) &&
                (("undefined" == typeof f[d] || null === f[d]) && (f[d] = e[d]),
                (e[d] = k.settings[d]));
          if (!a.isEmptyObject(f) && i > e.responsive[0].breakpoint)
            for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g]);
          e.autoWidth === !1 &&
            t > 0 &&
            v > 0 &&
            b !== e.item &&
            (q = Math.round(t / ((v + e.slideMargin) * e.slideMove)));
        }
      }),
      (z.calSW = function () {
        e.autoWidth === !1 &&
          (v = (o - (e.item * e.slideMargin - e.slideMargin)) / e.item);
      }),
      (z.calWidth = function (a) {
        var b = a === !0 ? p.find(".lslide").length : h.length;
        if (e.autoWidth === !1) m = b * (v + e.slideMargin);
        else {
          m = 0;
          for (var c = 0; b > c; c++)
            m += parseInt(h.eq(c).width()) + e.slideMargin;
        }
        return m;
      }),
      (d = {
        doCss: function () {
          var a = function () {
            for (
              var a = [
                  "transition",
                  "MozTransition",
                  "WebkitTransition",
                  "OTransition",
                  "msTransition",
                  "KhtmlTransition",
                ],
                b = document.documentElement,
                c = 0;
              c < a.length;
              c++
            )
              if (a[c] in b.style) return !0;
          };
          return e.useCSS && a() ? !0 : !1;
        },
        keyPress: function () {
          e.keyPress &&
            a(document).on("keyup.lightslider", function (b) {
              a(":focus").is("input, textarea") ||
                (b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                37 === b.keyCode
                  ? g.goToPrevSlide()
                  : 39 === b.keyCode && g.goToNextSlide());
            });
        },
        controls: function () {
          e.controls &&
            (g.after(
              '<div class="lSAction"><a class="lSPrev">' +
                e.prevHtml +
                '</a><a class="lSNext">' +
                e.nextHtml +
                "</a></div>"
            ),
            e.autoWidth
              ? z.calWidth(!1) < o && p.find(".lSAction").hide()
              : l <= e.item && p.find(".lSAction").hide(),
            p.find(".lSAction a").on("click", function (b) {
              return (
                b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                "lSPrev" === a(this).attr("class")
                  ? g.goToPrevSlide()
                  : g.goToNextSlide(),
                !1
              );
            }));
        },
        initialStyle: function () {
          var a = this;
          "fade" === e.mode && ((e.autoWidth = !1), (e.slideEndAnimation = !1)),
            e.auto && (e.slideEndAnimation = !1),
            e.autoWidth && ((e.slideMove = 1), (e.item = 1)),
            e.loop && ((e.slideMove = 1), (e.freeMove = !1)),
            e.onBeforeStart.call(this, g),
            z.chbreakpoint(),
            g
              .addClass("lightSlider")
              .wrap(
                '<div class="lSSlideOuter ' +
                  e.addClass +
                  '"><div class="lSSlideWrapper"></div></div>'
              ),
            (p = g.parent(".lSSlideWrapper")),
            e.rtl === !0 && p.parent().addClass("lSrtl"),
            e.vertical
              ? (p.parent().addClass("vertical"),
                (o = e.verticalHeight),
                p.css("height", o + "px"))
              : (o = g.outerWidth()),
            h.addClass("lslide"),
            e.loop === !0 &&
              "slide" === e.mode &&
              (z.calSW(),
              (z.clone = function () {
                if (z.calWidth(!0) > o) {
                  for (
                    var b = 0, c = 0, d = 0;
                    d < h.length &&
                    ((b +=
                      parseInt(g.find(".lslide").eq(d).width()) +
                      e.slideMargin),
                    c++,
                    !(b >= o + e.slideMargin));
                    d++
                  );
                  var f = e.autoWidth === !0 ? c : e.item;
                  if (f < g.find(".clone.left").length)
                    for (var i = 0; i < g.find(".clone.left").length - f; i++)
                      h.eq(i).remove();
                  if (f < g.find(".clone.right").length)
                    for (
                      var j = h.length - 1;
                      j > h.length - 1 - g.find(".clone.right").length;
                      j--
                    )
                      q--, h.eq(j).remove();
                  for (var k = g.find(".clone.right").length; f > k; k++)
                    g
                      .find(".lslide")
                      .eq(k)
                      .clone()
                      .removeClass("lslide")
                      .addClass("clone right")
                      .appendTo(g),
                      q++;
                  for (
                    var l =
                      g.find(".lslide").length - g.find(".clone.left").length;
                    l > g.find(".lslide").length - f;
                    l--
                  )
                    g.find(".lslide")
                      .eq(l - 1)
                      .clone()
                      .removeClass("lslide")
                      .addClass("clone left")
                      .prependTo(g);
                  h = g.children();
                } else
                  h.hasClass("clone") &&
                    (g.find(".clone").remove(), a.move(g, 0));
              }),
              z.clone()),
            (z.sSW = function () {
              (l = h.length),
                e.rtl === !0 && e.vertical === !1 && (s = "margin-left"),
                e.autoWidth === !1 && h.css(r, v + "px"),
                h.css(s, e.slideMargin + "px"),
                (m = z.calWidth(!1)),
                g.css(r, m + "px"),
                e.loop === !0 &&
                  "slide" === e.mode &&
                  n === !1 &&
                  (q = g.find(".clone.left").length);
            }),
            (z.calL = function () {
              (h = g.children()), (l = h.length);
            }),
            this.doCss() && p.addClass("usingCss"),
            z.calL(),
            "slide" === e.mode
              ? (z.calSW(),
                z.sSW(),
                e.loop === !0 && ((t = a.slideValue()), this.move(g, t)),
                e.vertical === !1 && this.setHeight(g, !1))
              : (this.setHeight(g, !0),
                g.addClass("lSFade"),
                this.doCss() || (h.fadeOut(0), h.eq(q).fadeIn(0))),
            e.loop === !0 && "slide" === e.mode
              ? h.eq(q).addClass("active")
              : h.first().addClass("active");
        },
        pager: function () {
          var a = this;
          if (
            ((z.createPager = function () {
              w =
                (o - (e.thumbItem * e.thumbMargin - e.thumbMargin)) /
                e.thumbItem;
              var b = p.find(".lslide"),
                c = p.find(".lslide").length,
                d = 0,
                f = "",
                h = 0;
              for (d = 0; c > d; d++) {
                "slide" === e.mode &&
                  (e.autoWidth
                    ? (h +=
                        (parseInt(b.eq(d).width()) + e.slideMargin) *
                        e.slideMove)
                    : (h = d * (v + e.slideMargin) * e.slideMove));
                var i = b.eq(d * e.slideMove).attr("data-thumb");
                if (
                  ((f +=
                    e.gallery === !0
                      ? '<li style="width:100%;' +
                        r +
                        ":" +
                        w +
                        "px;" +
                        s +
                        ":" +
                        e.thumbMargin +
                        'px"><a href="#"><img src="' +
                        i +
                        '" /></a></li>'
                      : '<li><a href="#">' + (d + 1) + "</a></li>"),
                  "slide" === e.mode && h >= m - o - e.slideMargin)
                ) {
                  d += 1;
                  var j = 2;
                  e.autoWidth &&
                    ((f += '<li><a href="#">' + (d + 1) + "</a></li>"),
                    (j = 1)),
                    j > d
                      ? ((f = null), p.parent().addClass("noPager"))
                      : p.parent().removeClass("noPager");
                  break;
                }
              }
              var k = p.parent();
              k.find(".lSPager").html(f),
                e.gallery === !0 &&
                  (e.vertical === !0 &&
                    k.find(".lSPager").css("width", e.vThumbWidth + "px"),
                  (u = d * (e.thumbMargin + w) + 0.5),
                  k
                    .find(".lSPager")
                    .css({
                      property: u + "px",
                      "transition-duration": e.speed + "ms",
                    }),
                  e.vertical === !0 &&
                    p
                      .parent()
                      .css(
                        "padding-right",
                        e.vThumbWidth + e.galleryMargin + "px"
                      ),
                  k.find(".lSPager").css(r, u + "px"));
              var l = k.find(".lSPager").find("li");
              l.first().addClass("active"),
                l.on("click", function () {
                  return (
                    e.loop === !0 && "slide" === e.mode
                      ? (q +=
                          l.index(this) -
                          k.find(".lSPager").find("li.active").index())
                      : (q = l.index(this)),
                    g.mode(!1),
                    e.gallery === !0 && a.slideThumb(),
                    !1
                  );
                });
            }),
            e.pager)
          ) {
            var b = "lSpg";
            e.gallery && (b = "lSGallery"),
              p.after('<ul class="lSPager ' + b + '"></ul>');
            var c = e.vertical ? "margin-left" : "margin-top";
            p
              .parent()
              .find(".lSPager")
              .css(c, e.galleryMargin + "px"),
              z.createPager();
          }
          setTimeout(function () {
            z.init();
          }, 0);
        },
        setHeight: function (a, b) {
          var c = null,
            d = this;
          c = e.loop ? a.children(".lslide ").first() : a.children().first();
          var f = function () {
            var d = c.outerHeight(),
              e = 0,
              f = d;
            b && ((d = 0), (e = (100 * f) / o)),
              a.css({ height: d + "px", "padding-bottom": e + "%" });
          };
          f(),
            c.find("img").length
              ? c.find("img")[0].complete
                ? (f(), x || d.auto())
                : c.find("img").on("load", function () {
                    setTimeout(function () {
                      f(), x || d.auto();
                    }, 100);
                  })
              : x || d.auto();
        },
        active: function (a, b) {
          this.doCss() && "fade" === e.mode && p.addClass("on");
          var c = 0;
          if (q * e.slideMove < l) {
            a.removeClass("active"),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                a.fadeOut(e.speed),
              (c = b === !0 ? q : q * e.slideMove);
            var d, f;
            b === !0 && ((d = a.length), (f = d - 1), c + 1 >= d && (c = f)),
              e.loop === !0 &&
                "slide" === e.mode &&
                ((c =
                  b === !0
                    ? q - g.find(".clone.left").length
                    : q * e.slideMove),
                b === !0 &&
                  ((d = a.length),
                  (f = d - 1),
                  c + 1 === d ? (c = f) : c + 1 > d && (c = 0))),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                a.eq(c).fadeIn(e.speed),
              a.eq(c).addClass("active");
          } else
            a.removeClass("active"),
              a.eq(a.length - 1).addClass("active"),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                (a.fadeOut(e.speed), a.eq(c).fadeIn(e.speed));
        },
        move: function (a, b) {
          e.rtl === !0 && (b = -b),
            this.doCss()
              ? a.css(
                  e.vertical === !0
                    ? {
                        transform: "translate3d(0px, " + -b + "px, 0px)",
                        "-webkit-transform":
                          "translate3d(0px, " + -b + "px, 0px)",
                      }
                    : {
                        transform: "translate3d(" + -b + "px, 0px, 0px)",
                        "-webkit-transform":
                          "translate3d(" + -b + "px, 0px, 0px)",
                      }
                )
              : e.vertical === !0
              ? a
                  .css("position", "relative")
                  .animate({ top: -b + "px" }, e.speed, e.easing)
              : a
                  .css("position", "relative")
                  .animate({ left: -b + "px" }, e.speed, e.easing);
          var c = p.parent().find(".lSPager").find("li");
          this.active(c, !0);
        },
        fade: function () {
          this.active(h, !1);
          var a = p.parent().find(".lSPager").find("li");
          this.active(a, !0);
        },
        slide: function () {
          var a = this;
          (z.calSlide = function () {
            m > o &&
              ((t = a.slideValue()),
              a.active(h, !1),
              t > m - o - e.slideMargin
                ? (t = m - o - e.slideMargin)
                : 0 > t && (t = 0),
              a.move(g, t),
              e.loop === !0 &&
                "slide" === e.mode &&
                (q >= l - g.find(".clone.left").length / e.slideMove &&
                  a.resetSlide(g.find(".clone.left").length),
                0 === q && a.resetSlide(p.find(".lslide").length)));
          }),
            z.calSlide();
        },
        resetSlide: function (a) {
          var b = this;
          p.find(".lSAction a").addClass("disabled"),
            setTimeout(function () {
              (q = a),
                p.css("transition-duration", "0ms"),
                (t = b.slideValue()),
                b.active(h, !1),
                d.move(g, t),
                setTimeout(function () {
                  p.css("transition-duration", e.speed + "ms"),
                    p.find(".lSAction a").removeClass("disabled");
                }, 50);
            }, e.speed + 100);
        },
        slideValue: function () {
          var a = 0;
          if (e.autoWidth === !1) a = q * (v + e.slideMargin) * e.slideMove;
          else {
            a = 0;
            for (var b = 0; q > b; b++)
              a += parseInt(h.eq(b).width()) + e.slideMargin;
          }
          return a;
        },
        slideThumb: function () {
          var a;
          switch (e.currentPagerPosition) {
            case "left":
              a = 0;
              break;
            case "middle":
              a = o / 2 - w / 2;
              break;
            case "right":
              a = o - w;
          }
          var b = q - g.find(".clone.left").length,
            c = p.parent().find(".lSPager");
          "slide" === e.mode &&
            e.loop === !0 &&
            (b >= c.children().length
              ? (b = 0)
              : 0 > b && (b = c.children().length));
          var d = b * (w + e.thumbMargin) - a;
          d + o > u && (d = u - o - e.thumbMargin),
            0 > d && (d = 0),
            this.move(c, d);
        },
        auto: function () {
          e.auto &&
            (clearInterval(x),
            (x = setInterval(function () {
              g.goToNextSlide();
            }, e.pause)));
        },
        pauseOnHover: function () {
          var b = this;
          e.auto &&
            e.pauseOnHover &&
            (p.on("mouseenter", function () {
              a(this).addClass("ls-hover"), g.pause(), (e.auto = !0);
            }),
            p.on("mouseleave", function () {
              a(this).removeClass("ls-hover"),
                p.find(".lightSlider").hasClass("lsGrabbing") || b.auto();
            }));
        },
        touchMove: function (a, b) {
          if ((p.css("transition-duration", "0ms"), "slide" === e.mode)) {
            var c = a - b,
              d = t - c;
            if (d >= m - o - e.slideMargin)
              if (e.freeMove === !1) d = m - o - e.slideMargin;
              else {
                var f = m - o - e.slideMargin;
                d = f + (d - f) / 5;
              }
            else 0 > d && (e.freeMove === !1 ? (d = 0) : (d /= 5));
            this.move(g, d);
          }
        },
        touchEnd: function (a) {
          if (
            (p.css("transition-duration", e.speed + "ms"), "slide" === e.mode)
          ) {
            var b = !1,
              c = !0;
            (t -= a),
              t > m - o - e.slideMargin
                ? ((t = m - o - e.slideMargin), e.autoWidth === !1 && (b = !0))
                : 0 > t && (t = 0);
            var d = function (a) {
              var c = 0;
              if ((b || (a && (c = 1)), e.autoWidth))
                for (
                  var d = 0, f = 0;
                  f < h.length &&
                  ((d += parseInt(h.eq(f).width()) + e.slideMargin),
                  (q = f + c),
                  !(d >= t));
                  f++
                );
              else {
                var g = t / ((v + e.slideMargin) * e.slideMove);
                (q = parseInt(g) + c),
                  t >= m - o - e.slideMargin && g % 1 !== 0 && q++;
              }
            };
            a >= e.swipeThreshold
              ? (d(!1), (c = !1))
              : a <= -e.swipeThreshold && (d(!0), (c = !1)),
              g.mode(c),
              this.slideThumb();
          } else
            a >= e.swipeThreshold
              ? g.goToPrevSlide()
              : a <= -e.swipeThreshold && g.goToNextSlide();
        },
        enableDrag: function () {
          var b = this;
          if (!y) {
            var c = 0,
              d = 0,
              f = !1;
            p.find(".lightSlider").addClass("lsGrab"),
              p.on("mousedown", function (b) {
                return o > m && 0 !== m
                  ? !1
                  : void (
                      "lSPrev" !== a(b.target).attr("class") &&
                      "lSNext" !== a(b.target).attr("class") &&
                      ((c = e.vertical === !0 ? b.pageY : b.pageX),
                      (f = !0),
                      b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1),
                      (p.scrollLeft += 1),
                      (p.scrollLeft -= 1),
                      p
                        .find(".lightSlider")
                        .removeClass("lsGrab")
                        .addClass("lsGrabbing"),
                      clearInterval(x))
                    );
              }),
              a(window).on("mousemove", function (a) {
                f &&
                  ((d = e.vertical === !0 ? a.pageY : a.pageX),
                  b.touchMove(d, c));
              }),
              a(window).on("mouseup", function (g) {
                if (f) {
                  p
                    .find(".lightSlider")
                    .removeClass("lsGrabbing")
                    .addClass("lsGrab"),
                    (f = !1),
                    (d = e.vertical === !0 ? g.pageY : g.pageX);
                  var h = d - c;
                  Math.abs(h) >= e.swipeThreshold &&
                    a(window).on("click.ls", function (b) {
                      b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1),
                        b.stopImmediatePropagation(),
                        b.stopPropagation(),
                        a(window).off("click.ls");
                    }),
                    b.touchEnd(h);
                }
              });
          }
        },
        enableTouch: function () {
          var a = this;
          if (y) {
            var b = {},
              c = {};
            p.on("touchstart", function (a) {
              (c = a.originalEvent.targetTouches[0]),
                (b.pageX = a.originalEvent.targetTouches[0].pageX),
                (b.pageY = a.originalEvent.targetTouches[0].pageY),
                clearInterval(x);
            }),
              p.on("touchmove", function (d) {
                if (o > m && 0 !== m) return !1;
                var f = d.originalEvent;
                c = f.targetTouches[0];
                var g = Math.abs(c.pageX - b.pageX),
                  h = Math.abs(c.pageY - b.pageY);
                e.vertical === !0
                  ? (3 * h > g && d.preventDefault(),
                    a.touchMove(c.pageY, b.pageY))
                  : (3 * g > h && d.preventDefault(),
                    a.touchMove(c.pageX, b.pageX));
              }),
              p.on("touchend", function () {
                if (o > m && 0 !== m) return !1;
                var d;
                (d = e.vertical === !0 ? c.pageY - b.pageY : c.pageX - b.pageX),
                  a.touchEnd(d);
              });
          }
        },
        build: function () {
          var b = this;
          b.initialStyle(),
            this.doCss() &&
              (e.enableTouch === !0 && b.enableTouch(),
              e.enableDrag === !0 && b.enableDrag()),
            a(window).on("focus", function () {
              b.auto();
            }),
            a(window).on("blur", function () {
              clearInterval(x);
            }),
            b.pager(),
            b.pauseOnHover(),
            b.controls(),
            b.keyPress();
        },
      }),
      d.build(),
      (z.init = function () {
        z.chbreakpoint(),
          e.vertical === !0
            ? ((o = e.item > 1 ? e.verticalHeight : h.outerHeight()),
              p.css("height", o + "px"))
            : (o = p.outerWidth()),
          e.loop === !0 && "slide" === e.mode && z.clone(),
          z.calL(),
          "slide" === e.mode && g.removeClass("lSSlide"),
          "slide" === e.mode && (z.calSW(), z.sSW()),
          setTimeout(function () {
            "slide" === e.mode && g.addClass("lSSlide");
          }, 1e3),
          e.pager && z.createPager(),
          e.adaptiveHeight === !0 &&
            e.vertical === !1 &&
            g.css("height", h.eq(q).outerHeight(!0)),
          e.adaptiveHeight === !1 &&
            ("slide" === e.mode
              ? e.vertical === !1
                ? d.setHeight(g, !1)
                : d.auto()
              : d.setHeight(g, !0)),
          e.gallery === !0 && d.slideThumb(),
          "slide" === e.mode && d.slide(),
          e.autoWidth === !1
            ? h.length <= e.item
              ? p.find(".lSAction").hide()
              : p.find(".lSAction").show()
            : z.calWidth(!1) < o && 0 !== m
            ? p.find(".lSAction").hide()
            : p.find(".lSAction").show();
      }),
      (g.goToPrevSlide = function () {
        if (q > 0)
          e.onBeforePrevSlide.call(this, g, q),
            q--,
            g.mode(!1),
            e.gallery === !0 && d.slideThumb();
        else if (e.loop === !0) {
          if ((e.onBeforePrevSlide.call(this, g, q), "fade" === e.mode)) {
            var a = l - 1;
            q = parseInt(a / e.slideMove);
          }
          g.mode(!1), e.gallery === !0 && d.slideThumb();
        } else
          e.slideEndAnimation === !0 &&
            (g.addClass("leftEnd"),
            setTimeout(function () {
              g.removeClass("leftEnd");
            }, 400));
      }),
      (g.goToNextSlide = function () {
        var a = !0;
        if ("slide" === e.mode) {
          var b = d.slideValue();
          a = b < m - o - e.slideMargin;
        }
        q * e.slideMove < l - e.slideMove && a
          ? (e.onBeforeNextSlide.call(this, g, q),
            q++,
            g.mode(!1),
            e.gallery === !0 && d.slideThumb())
          : e.loop === !0
          ? (e.onBeforeNextSlide.call(this, g, q),
            (q = 0),
            g.mode(!1),
            e.gallery === !0 && d.slideThumb())
          : e.slideEndAnimation === !0 &&
            (g.addClass("rightEnd"),
            setTimeout(function () {
              g.removeClass("rightEnd");
            }, 400));
      }),
      (g.mode = function (a) {
        e.adaptiveHeight === !0 &&
          e.vertical === !1 &&
          g.css("height", h.eq(q).outerHeight(!0)),
          n === !1 &&
            ("slide" === e.mode
              ? d.doCss() &&
                (g.addClass("lSSlide"),
                "" !== e.speed && p.css("transition-duration", e.speed + "ms"),
                "" !== e.cssEasing &&
                  p.css("transition-timing-function", e.cssEasing))
              : d.doCss() &&
                ("" !== e.speed && g.css("transition-duration", e.speed + "ms"),
                "" !== e.cssEasing &&
                  g.css("transition-timing-function", e.cssEasing))),
          a || e.onBeforeSlide.call(this, g, q),
          "slide" === e.mode ? d.slide() : d.fade(),
          p.hasClass("ls-hover") || d.auto(),
          setTimeout(function () {
            a || e.onAfterSlide.call(this, g, q);
          }, e.speed),
          (n = !0);
      }),
      (g.play = function () {
        g.goToNextSlide(), (e.auto = !0), d.auto();
      }),
      (g.pause = function () {
        (e.auto = !1), clearInterval(x);
      }),
      (g.refresh = function () {
        z.init();
      }),
      (g.getCurrentSlideCount = function () {
        var a = q;
        if (e.loop) {
          var b = p.find(".lslide").length,
            c = g.find(".clone.left").length;
          a = c - 1 >= q ? b + (q - c) : q >= b + c ? q - b - c : q - c;
        }
        return a + 1;
      }),
      (g.getTotalSlideCount = function () {
        return p.find(".lslide").length;
      }),
      (g.goToSlide = function (a) {
        (q = e.loop ? a + g.find(".clone.left").length - 1 : a),
          g.mode(!1),
          e.gallery === !0 && d.slideThumb();
      }),
      (g.destroy = function () {
        g.lightSlider &&
          ((g.goToPrevSlide = function () {}),
          (g.goToNextSlide = function () {}),
          (g.mode = function () {}),
          (g.play = function () {}),
          (g.pause = function () {}),
          (g.refresh = function () {}),
          (g.getCurrentSlideCount = function () {}),
          (g.getTotalSlideCount = function () {}),
          (g.goToSlide = function () {}),
          (g.lightSlider = null),
          (z = { init: function () {} }),
          g.parent().parent().find(".lSAction, .lSPager").remove(),
          g
            .removeClass(
              "lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right"
            )
            .removeAttr("style")
            .unwrap()
            .unwrap(),
          g.children().removeAttr("style"),
          h.removeClass("lslide active"),
          g.find(".clone").remove(),
          (h = null),
          (x = null),
          (n = !1),
          (q = 0));
      }),
      setTimeout(function () {
        e.onSliderLoad.call(this, g);
      }, 10),
      a(window).on("resize orientationchange", function (a) {
        setTimeout(function () {
          a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
            z.init();
        }, 200);
      }),
      this
    );
  };
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2xhenlfbG9hZC5qcyIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2xpZ2h0c2xpZGVyLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVCRDtBQUNBO0FBQ0EsK0JBQStCO0FBQ1I7QUFDSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLDJDQUEyQztBQUMzQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsa0RBQWtEO0FBQ2xELGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQSxnQkFBZ0IscUJBQXFCLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRSwrQ0FBTSIsImZpbGUiOiJib3R0b20tc3JjX2pzX2xhLmJ1bmRsZS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBsYXp5bG9hZEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcubGF6eVwiKTtcclxuICB2YXIgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQ7XHJcblxyXG4gIGZ1bmN0aW9uIGxhenlsb2FkKCkge1xyXG4gICAgaWYgKGxhenlsb2FkVGhyb3R0bGVUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChsYXp5bG9hZFRocm90dGxlVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGF6eWxvYWRUaHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgbGF6eWxvYWRJbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICAgICAgaWYgKGltZy5vZmZzZXRUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApIHtcclxuICAgICAgICAgIGltZy5zcmMgPSBpbWcuZGF0YXNldC5zcmM7XHJcbiAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGxhenlsb2FkSW1hZ2VzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5bG9hZCk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eWxvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25DaGFuZ2VcIiwgbGF6eWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlsb2FkKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsYXp5bG9hZCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiLCBsYXp5bG9hZCk7XHJcbn0pO1xyXG4iLCIvKiEgbGlnaHRzbGlkZXIgLSB2MS4xLjYgLSAyMDE2LTEwLTI1XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWNoaW5jaG9vbHVyL2xpZ2h0c2xpZGVyXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNiBTYWNoaW4gTjsgTGljZW5zZWQgTUlUICovXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbiEoZnVuY3Rpb24gKGEsIGIpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuICB2YXIgYyA9IHtcclxuICAgIGl0ZW06IDMsXHJcbiAgICBhdXRvV2lkdGg6ICExLFxyXG4gICAgc2xpZGVNb3ZlOiAxLFxyXG4gICAgc2xpZGVNYXJnaW46IDEwLFxyXG4gICAgYWRkQ2xhc3M6IFwiXCIsXHJcbiAgICBtb2RlOiBcInNsaWRlXCIsXHJcbiAgICB1c2VDU1M6ICEwLFxyXG4gICAgY3NzRWFzaW5nOiBcImVhc2VcIixcclxuICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgIHNwZWVkOiA0MDAsXHJcbiAgICBhdXRvOiAhMSxcclxuICAgIHBhdXNlT25Ib3ZlcjogITEsXHJcbiAgICBsb29wOiAhMSxcclxuICAgIHNsaWRlRW5kQW5pbWF0aW9uOiAhMCxcclxuICAgIHBhdXNlOiAyZTMsXHJcbiAgICBrZXlQcmVzczogITEsXHJcbiAgICBjb250cm9sczogITAsXHJcbiAgICBwcmV2SHRtbDogXCJcIixcclxuICAgIG5leHRIdG1sOiBcIlwiLFxyXG4gICAgcnRsOiAhMSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiAhMSxcclxuICAgIHZlcnRpY2FsOiAhMSxcclxuICAgIHZlcnRpY2FsSGVpZ2h0OiA1MDAsXHJcbiAgICB2VGh1bWJXaWR0aDogMTAwLFxyXG4gICAgdGh1bWJJdGVtOiAxMCxcclxuICAgIHBhZ2VyOiAhMCxcclxuICAgIGdhbGxlcnk6ICExLFxyXG4gICAgZ2FsbGVyeU1hcmdpbjogNSxcclxuICAgIHRodW1iTWFyZ2luOiA1LFxyXG4gICAgY3VycmVudFBhZ2VyUG9zaXRpb246IFwibWlkZGxlXCIsXHJcbiAgICBlbmFibGVUb3VjaDogITAsXHJcbiAgICBlbmFibGVEcmFnOiAhMCxcclxuICAgIGZyZWVNb3ZlOiAhMCxcclxuICAgIHN3aXBlVGhyZXNob2xkOiA0MCxcclxuICAgIHJlc3BvbnNpdmU6IFtdLFxyXG4gICAgb25CZWZvcmVTdGFydDogZnVuY3Rpb24gKGEpIHt9LFxyXG4gICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbiAoYSkge30sXHJcbiAgICBvbkJlZm9yZVNsaWRlOiBmdW5jdGlvbiAoYSwgYikge30sXHJcbiAgICBvbkFmdGVyU2xpZGU6IGZ1bmN0aW9uIChhLCBiKSB7fSxcclxuICAgIG9uQmVmb3JlTmV4dFNsaWRlOiBmdW5jdGlvbiAoYSwgYikge30sXHJcbiAgICBvbkJlZm9yZVByZXZTbGlkZTogZnVuY3Rpb24gKGEsIGIpIHt9LFxyXG4gIH07XHJcbiAgYS5mbi5saWdodFNsaWRlciA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICBpZiAoMCA9PT0gdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzO1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYSh0aGlzKS5saWdodFNsaWRlcihiKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICk7XHJcbiAgICB2YXIgZCA9IHt9LFxyXG4gICAgICBlID0gYS5leHRlbmQoITAsIHt9LCBjLCBiKSxcclxuICAgICAgZiA9IHt9LFxyXG4gICAgICBnID0gdGhpcztcclxuICAgIChkLiRlbCA9IHRoaXMpLCBcImZhZGVcIiA9PT0gZS5tb2RlICYmIChlLnZlcnRpY2FsID0gITEpO1xyXG4gICAgdmFyIGggPSBnLmNoaWxkcmVuKCksXHJcbiAgICAgIGkgPSBhKHdpbmRvdykud2lkdGgoKSxcclxuICAgICAgaiA9IG51bGwsXHJcbiAgICAgIGsgPSBudWxsLFxyXG4gICAgICBsID0gMCxcclxuICAgICAgbSA9IDAsXHJcbiAgICAgIG4gPSAhMSxcclxuICAgICAgbyA9IDAsXHJcbiAgICAgIHAgPSBcIlwiLFxyXG4gICAgICBxID0gMCxcclxuICAgICAgciA9IGUudmVydGljYWwgPT09ICEwID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIixcclxuICAgICAgcyA9IGUudmVydGljYWwgPT09ICEwID8gXCJtYXJnaW4tYm90dG9tXCIgOiBcIm1hcmdpbi1yaWdodFwiLFxyXG4gICAgICB0ID0gMCxcclxuICAgICAgdSA9IDAsXHJcbiAgICAgIHYgPSAwLFxyXG4gICAgICB3ID0gMCxcclxuICAgICAgeCA9IG51bGwsXHJcbiAgICAgIHkgPSBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgeiA9IHt9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHouY2hicmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgoKGkgPSBhKHdpbmRvdykud2lkdGgoKSksIGUucmVzcG9uc2l2ZS5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB2YXIgYjtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuYXV0b1dpZHRoID09PSAhMSAmJiAoYiA9IGUuaXRlbSksIGkgPCBlLnJlc3BvbnNpdmVbMF0uYnJlYWtwb2ludClcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBlLnJlc3BvbnNpdmUubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgICAgaSA8IGUucmVzcG9uc2l2ZVtjXS5icmVha3BvaW50ICYmXHJcbiAgICAgICAgICAgICAgICAoKGogPSBlLnJlc3BvbnNpdmVbY10uYnJlYWtwb2ludCksIChrID0gZS5yZXNwb25zaXZlW2NdKSk7XHJcbiAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgayAmJiBudWxsICE9PSBrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBkIGluIGsuc2V0dGluZ3MpXHJcbiAgICAgICAgICAgICAgay5zZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShkKSAmJlxyXG4gICAgICAgICAgICAgICAgKChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBmW2RdIHx8IG51bGwgPT09IGZbZF0pICYmIChmW2RdID0gZVtkXSksXHJcbiAgICAgICAgICAgICAgICAoZVtkXSA9IGsuc2V0dGluZ3NbZF0pKTtcclxuICAgICAgICAgIGlmICghYS5pc0VtcHR5T2JqZWN0KGYpICYmIGkgPiBlLnJlc3BvbnNpdmVbMF0uYnJlYWtwb2ludClcclxuICAgICAgICAgICAgZm9yICh2YXIgZyBpbiBmKSBmLmhhc093blByb3BlcnR5KGcpICYmIChlW2ddID0gZltnXSk7XHJcbiAgICAgICAgICBlLmF1dG9XaWR0aCA9PT0gITEgJiZcclxuICAgICAgICAgICAgdCA+IDAgJiZcclxuICAgICAgICAgICAgdiA+IDAgJiZcclxuICAgICAgICAgICAgYiAhPT0gZS5pdGVtICYmXHJcbiAgICAgICAgICAgIChxID0gTWF0aC5yb3VuZCh0IC8gKCh2ICsgZS5zbGlkZU1hcmdpbikgKiBlLnNsaWRlTW92ZSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoei5jYWxTVyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlLmF1dG9XaWR0aCA9PT0gITEgJiZcclxuICAgICAgICAgICh2ID0gKG8gLSAoZS5pdGVtICogZS5zbGlkZU1hcmdpbiAtIGUuc2xpZGVNYXJnaW4pKSAvIGUuaXRlbSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoei5jYWxXaWR0aCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdmFyIGIgPSBhID09PSAhMCA/IHAuZmluZChcIi5sc2xpZGVcIikubGVuZ3RoIDogaC5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGUuYXV0b1dpZHRoID09PSAhMSkgbSA9IGIgKiAodiArIGUuc2xpZGVNYXJnaW4pO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbSA9IDA7XHJcbiAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYiA+IGM7IGMrKylcclxuICAgICAgICAgICAgbSArPSBwYXJzZUludChoLmVxKGMpLndpZHRoKCkpICsgZS5zbGlkZU1hcmdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZCA9IHtcclxuICAgICAgICBkb0NzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgdmFyIGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIk1velRyYW5zaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJXZWJraXRUcmFuc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiT1RyYW5zaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJtc1RyYW5zaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJLaHRtbFRyYW5zaXRpb25cIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBiID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgYyA9IDA7XHJcbiAgICAgICAgICAgICAgYyA8IGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgIGMrK1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgaWYgKGFbY10gaW4gYi5zdHlsZSkgcmV0dXJuICEwO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBlLnVzZUNTUyAmJiBhKCkgPyAhMCA6ICExO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5UHJlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGUua2V5UHJlc3MgJiZcclxuICAgICAgICAgICAgYShkb2N1bWVudCkub24oXCJrZXl1cC5saWdodHNsaWRlclwiLCBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICAgIGEoXCI6Zm9jdXNcIikuaXMoXCJpbnB1dCwgdGV4dGFyZWFcIikgfHxcclxuICAgICAgICAgICAgICAgIChiLnByZXZlbnREZWZhdWx0ID8gYi5wcmV2ZW50RGVmYXVsdCgpIDogKGIucmV0dXJuVmFsdWUgPSAhMSksXHJcbiAgICAgICAgICAgICAgICAzNyA9PT0gYi5rZXlDb2RlXHJcbiAgICAgICAgICAgICAgICAgID8gZy5nb1RvUHJldlNsaWRlKClcclxuICAgICAgICAgICAgICAgICAgOiAzOSA9PT0gYi5rZXlDb2RlICYmIGcuZ29Ub05leHRTbGlkZSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZS5jb250cm9scyAmJlxyXG4gICAgICAgICAgICAoZy5hZnRlcihcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxTQWN0aW9uXCI+PGEgY2xhc3M9XCJsU1ByZXZcIj4nICtcclxuICAgICAgICAgICAgICAgIGUucHJldkh0bWwgK1xyXG4gICAgICAgICAgICAgICAgJzwvYT48YSBjbGFzcz1cImxTTmV4dFwiPicgK1xyXG4gICAgICAgICAgICAgICAgZS5uZXh0SHRtbCArXHJcbiAgICAgICAgICAgICAgICBcIjwvYT48L2Rpdj5cIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBlLmF1dG9XaWR0aFxyXG4gICAgICAgICAgICAgID8gei5jYWxXaWR0aCghMSkgPCBvICYmIHAuZmluZChcIi5sU0FjdGlvblwiKS5oaWRlKClcclxuICAgICAgICAgICAgICA6IGwgPD0gZS5pdGVtICYmIHAuZmluZChcIi5sU0FjdGlvblwiKS5oaWRlKCksXHJcbiAgICAgICAgICAgIHAuZmluZChcIi5sU0FjdGlvbiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYi5wcmV2ZW50RGVmYXVsdCA/IGIucHJldmVudERlZmF1bHQoKSA6IChiLnJldHVyblZhbHVlID0gITEpLFxyXG4gICAgICAgICAgICAgICAgXCJsU1ByZXZcIiA9PT0gYSh0aGlzKS5hdHRyKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgICAgICAgPyBnLmdvVG9QcmV2U2xpZGUoKVxyXG4gICAgICAgICAgICAgICAgICA6IGcuZ29Ub05leHRTbGlkZSgpLFxyXG4gICAgICAgICAgICAgICAgITFcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0aWFsU3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBhID0gdGhpcztcclxuICAgICAgICAgIFwiZmFkZVwiID09PSBlLm1vZGUgJiYgKChlLmF1dG9XaWR0aCA9ICExKSwgKGUuc2xpZGVFbmRBbmltYXRpb24gPSAhMSkpLFxyXG4gICAgICAgICAgICBlLmF1dG8gJiYgKGUuc2xpZGVFbmRBbmltYXRpb24gPSAhMSksXHJcbiAgICAgICAgICAgIGUuYXV0b1dpZHRoICYmICgoZS5zbGlkZU1vdmUgPSAxKSwgKGUuaXRlbSA9IDEpKSxcclxuICAgICAgICAgICAgZS5sb29wICYmICgoZS5zbGlkZU1vdmUgPSAxKSwgKGUuZnJlZU1vdmUgPSAhMSkpLFxyXG4gICAgICAgICAgICBlLm9uQmVmb3JlU3RhcnQuY2FsbCh0aGlzLCBnKSxcclxuICAgICAgICAgICAgei5jaGJyZWFrcG9pbnQoKSxcclxuICAgICAgICAgICAgZ1xyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcImxpZ2h0U2xpZGVyXCIpXHJcbiAgICAgICAgICAgICAgLndyYXAoXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxTU2xpZGVPdXRlciAnICtcclxuICAgICAgICAgICAgICAgICAgZS5hZGRDbGFzcyArXHJcbiAgICAgICAgICAgICAgICAgICdcIj48ZGl2IGNsYXNzPVwibFNTbGlkZVdyYXBwZXJcIj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgKHAgPSBnLnBhcmVudChcIi5sU1NsaWRlV3JhcHBlclwiKSksXHJcbiAgICAgICAgICAgIGUucnRsID09PSAhMCAmJiBwLnBhcmVudCgpLmFkZENsYXNzKFwibFNydGxcIiksXHJcbiAgICAgICAgICAgIGUudmVydGljYWxcclxuICAgICAgICAgICAgICA/IChwLnBhcmVudCgpLmFkZENsYXNzKFwidmVydGljYWxcIiksXHJcbiAgICAgICAgICAgICAgICAobyA9IGUudmVydGljYWxIZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgcC5jc3MoXCJoZWlnaHRcIiwgbyArIFwicHhcIikpXHJcbiAgICAgICAgICAgICAgOiAobyA9IGcub3V0ZXJXaWR0aCgpKSxcclxuICAgICAgICAgICAgaC5hZGRDbGFzcyhcImxzbGlkZVwiKSxcclxuICAgICAgICAgICAgZS5sb29wID09PSAhMCAmJlxyXG4gICAgICAgICAgICAgIFwic2xpZGVcIiA9PT0gZS5tb2RlICYmXHJcbiAgICAgICAgICAgICAgKHouY2FsU1coKSxcclxuICAgICAgICAgICAgICAoei5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh6LmNhbFdpZHRoKCEwKSA+IG8pIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IDAsIGMgPSAwLCBkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkIDwgaC5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAoKGIgKz1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGcuZmluZChcIi5sc2xpZGVcIikuZXEoZCkud2lkdGgoKSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5zbGlkZU1hcmdpbiksXHJcbiAgICAgICAgICAgICAgICAgICAgYysrLFxyXG4gICAgICAgICAgICAgICAgICAgICEoYiA+PSBvICsgZS5zbGlkZU1hcmdpbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGQrK1xyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZiA9IGUuYXV0b1dpZHRoID09PSAhMCA/IGMgOiBlLml0ZW07XHJcbiAgICAgICAgICAgICAgICAgIGlmIChmIDwgZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoIC0gZjsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgaC5lcShpKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGYgPCBnLmZpbmQoXCIuY2xvbmUucmlnaHRcIikubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IGgubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgIGogPiBoLmxlbmd0aCAtIDEgLSBnLmZpbmQoXCIuY2xvbmUucmlnaHRcIikubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgai0tXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgcS0tLCBoLmVxKGopLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gZy5maW5kKFwiLmNsb25lLnJpZ2h0XCIpLmxlbmd0aDsgZiA+IGs7IGsrKylcclxuICAgICAgICAgICAgICAgICAgICBnXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5sc2xpZGVcIilcclxuICAgICAgICAgICAgICAgICAgICAgIC5lcShrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImxzbGlkZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY2xvbmUgcmlnaHRcIilcclxuICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhnKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHErKztcclxuICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICBnLmZpbmQoXCIubHNsaWRlXCIpLmxlbmd0aCAtIGcuZmluZChcIi5jbG9uZS5sZWZ0XCIpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBsID4gZy5maW5kKFwiLmxzbGlkZVwiKS5sZW5ndGggLSBmO1xyXG4gICAgICAgICAgICAgICAgICAgIGwtLVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgZy5maW5kKFwiLmxzbGlkZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmVxKGwgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImxzbGlkZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY2xvbmUgbGVmdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhnKTtcclxuICAgICAgICAgICAgICAgICAgaCA9IGcuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICBoLmhhc0NsYXNzKFwiY2xvbmVcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAoZy5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLCBhLm1vdmUoZywgMCkpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHouY2xvbmUoKSksXHJcbiAgICAgICAgICAgICh6LnNTVyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAobCA9IGgubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGUucnRsID09PSAhMCAmJiBlLnZlcnRpY2FsID09PSAhMSAmJiAocyA9IFwibWFyZ2luLWxlZnRcIiksXHJcbiAgICAgICAgICAgICAgICBlLmF1dG9XaWR0aCA9PT0gITEgJiYgaC5jc3MociwgdiArIFwicHhcIiksXHJcbiAgICAgICAgICAgICAgICBoLmNzcyhzLCBlLnNsaWRlTWFyZ2luICsgXCJweFwiKSxcclxuICAgICAgICAgICAgICAgIChtID0gei5jYWxXaWR0aCghMSkpLFxyXG4gICAgICAgICAgICAgICAgZy5jc3MociwgbSArIFwicHhcIiksXHJcbiAgICAgICAgICAgICAgICBlLmxvb3AgPT09ICEwICYmXHJcbiAgICAgICAgICAgICAgICAgIFwic2xpZGVcIiA9PT0gZS5tb2RlICYmXHJcbiAgICAgICAgICAgICAgICAgIG4gPT09ICExICYmXHJcbiAgICAgICAgICAgICAgICAgIChxID0gZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICh6LmNhbEwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgKGggPSBnLmNoaWxkcmVuKCkpLCAobCA9IGgubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRoaXMuZG9Dc3MoKSAmJiBwLmFkZENsYXNzKFwidXNpbmdDc3NcIiksXHJcbiAgICAgICAgICAgIHouY2FsTCgpLFxyXG4gICAgICAgICAgICBcInNsaWRlXCIgPT09IGUubW9kZVxyXG4gICAgICAgICAgICAgID8gKHouY2FsU1coKSxcclxuICAgICAgICAgICAgICAgIHouc1NXKCksXHJcbiAgICAgICAgICAgICAgICBlLmxvb3AgPT09ICEwICYmICgodCA9IGEuc2xpZGVWYWx1ZSgpKSwgdGhpcy5tb3ZlKGcsIHQpKSxcclxuICAgICAgICAgICAgICAgIGUudmVydGljYWwgPT09ICExICYmIHRoaXMuc2V0SGVpZ2h0KGcsICExKSlcclxuICAgICAgICAgICAgICA6ICh0aGlzLnNldEhlaWdodChnLCAhMCksXHJcbiAgICAgICAgICAgICAgICBnLmFkZENsYXNzKFwibFNGYWRlXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0NzcygpIHx8IChoLmZhZGVPdXQoMCksIGguZXEocSkuZmFkZUluKDApKSksXHJcbiAgICAgICAgICAgIGUubG9vcCA9PT0gITAgJiYgXCJzbGlkZVwiID09PSBlLm1vZGVcclxuICAgICAgICAgICAgICA/IGguZXEocSkuYWRkQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICA6IGguZmlyc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgYSA9IHRoaXM7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICgoei5jcmVhdGVQYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3ID1cclxuICAgICAgICAgICAgICAgIChvIC0gKGUudGh1bWJJdGVtICogZS50aHVtYk1hcmdpbiAtIGUudGh1bWJNYXJnaW4pKSAvXHJcbiAgICAgICAgICAgICAgICBlLnRodW1iSXRlbTtcclxuICAgICAgICAgICAgICB2YXIgYiA9IHAuZmluZChcIi5sc2xpZGVcIiksXHJcbiAgICAgICAgICAgICAgICBjID0gcC5maW5kKFwiLmxzbGlkZVwiKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBkID0gMCxcclxuICAgICAgICAgICAgICAgIGYgPSBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yIChkID0gMDsgYyA+IGQ7IGQrKykge1xyXG4gICAgICAgICAgICAgICAgXCJzbGlkZVwiID09PSBlLm1vZGUgJiZcclxuICAgICAgICAgICAgICAgICAgKGUuYXV0b1dpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaCArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VJbnQoYi5lcShkKS53aWR0aCgpKSArIGUuc2xpZGVNYXJnaW4pICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zbGlkZU1vdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoaCA9IGQgKiAodiArIGUuc2xpZGVNYXJnaW4pICogZS5zbGlkZU1vdmUpKTtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gYi5lcShkICogZS5zbGlkZU1vdmUpLmF0dHIoXCJkYXRhLXRodW1iXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoKGYgKz1cclxuICAgICAgICAgICAgICAgICAgICBlLmdhbGxlcnkgPT09ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICc8bGkgc3R5bGU9XCJ3aWR0aDoxMDAlOycgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJweDtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGh1bWJNYXJnaW4gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncHhcIj48YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXCIgLz48L2E+PC9saT4nXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICc8bGk+PGEgaHJlZj1cIiNcIj4nICsgKGQgKyAxKSArIFwiPC9hPjwvbGk+XCIpLFxyXG4gICAgICAgICAgICAgICAgICBcInNsaWRlXCIgPT09IGUubW9kZSAmJiBoID49IG0gLSBvIC0gZS5zbGlkZU1hcmdpbilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBqID0gMjtcclxuICAgICAgICAgICAgICAgICAgZS5hdXRvV2lkdGggJiZcclxuICAgICAgICAgICAgICAgICAgICAoKGYgKz0gJzxsaT48YSBocmVmPVwiI1wiPicgKyAoZCArIDEpICsgXCI8L2E+PC9saT5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgKGogPSAxKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaiA+IGRcclxuICAgICAgICAgICAgICAgICAgICAgID8gKChmID0gbnVsbCksIHAucGFyZW50KCkuYWRkQ2xhc3MoXCJub1BhZ2VyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwibm9QYWdlclwiKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciBrID0gcC5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICBrLmZpbmQoXCIubFNQYWdlclwiKS5odG1sKGYpLFxyXG4gICAgICAgICAgICAgICAgZS5nYWxsZXJ5ID09PSAhMCAmJlxyXG4gICAgICAgICAgICAgICAgICAoZS52ZXJ0aWNhbCA9PT0gITAgJiZcclxuICAgICAgICAgICAgICAgICAgICBrLmZpbmQoXCIubFNQYWdlclwiKS5jc3MoXCJ3aWR0aFwiLCBlLnZUaHVtYldpZHRoICsgXCJweFwiKSxcclxuICAgICAgICAgICAgICAgICAgKHUgPSBkICogKGUudGh1bWJNYXJnaW4gKyB3KSArIDAuNSksXHJcbiAgICAgICAgICAgICAgICAgIGtcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5sU1BhZ2VyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogdSArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbi1kdXJhdGlvblwiOiBlLnNwZWVkICsgXCJtc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBlLnZlcnRpY2FsID09PSAhMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudlRodW1iV2lkdGggKyBlLmdhbGxlcnlNYXJnaW4gKyBcInB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIGsuZmluZChcIi5sU1BhZ2VyXCIpLmNzcyhyLCB1ICsgXCJweFwiKSk7XHJcbiAgICAgICAgICAgICAgdmFyIGwgPSBrLmZpbmQoXCIubFNQYWdlclwiKS5maW5kKFwibGlcIik7XHJcbiAgICAgICAgICAgICAgbC5maXJzdCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBlLmxvb3AgPT09ICEwICYmIFwic2xpZGVcIiA9PT0gZS5tb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IChxICs9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbC5pbmRleCh0aGlzKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgay5maW5kKFwiLmxTUGFnZXJcIikuZmluZChcImxpLmFjdGl2ZVwiKS5pbmRleCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAocSA9IGwuaW5kZXgodGhpcykpLFxyXG4gICAgICAgICAgICAgICAgICAgIGcubW9kZSghMSksXHJcbiAgICAgICAgICAgICAgICAgICAgZS5nYWxsZXJ5ID09PSAhMCAmJiBhLnNsaWRlVGh1bWIoKSxcclxuICAgICAgICAgICAgICAgICAgICAhMVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBlLnBhZ2VyKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBiID0gXCJsU3BnXCI7XHJcbiAgICAgICAgICAgIGUuZ2FsbGVyeSAmJiAoYiA9IFwibFNHYWxsZXJ5XCIpLFxyXG4gICAgICAgICAgICAgIHAuYWZ0ZXIoJzx1bCBjbGFzcz1cImxTUGFnZXIgJyArIGIgKyAnXCI+PC91bD4nKTtcclxuICAgICAgICAgICAgdmFyIGMgPSBlLnZlcnRpY2FsID8gXCJtYXJnaW4tbGVmdFwiIDogXCJtYXJnaW4tdG9wXCI7XHJcbiAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAuZmluZChcIi5sU1BhZ2VyXCIpXHJcbiAgICAgICAgICAgICAgLmNzcyhjLCBlLmdhbGxlcnlNYXJnaW4gKyBcInB4XCIpLFxyXG4gICAgICAgICAgICAgIHouY3JlYXRlUGFnZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB6LmluaXQoKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SGVpZ2h0OiBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgdmFyIGMgPSBudWxsLFxyXG4gICAgICAgICAgICBkID0gdGhpcztcclxuICAgICAgICAgIGMgPSBlLmxvb3AgPyBhLmNoaWxkcmVuKFwiLmxzbGlkZSBcIikuZmlyc3QoKSA6IGEuY2hpbGRyZW4oKS5maXJzdCgpO1xyXG4gICAgICAgICAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gYy5vdXRlckhlaWdodCgpLFxyXG4gICAgICAgICAgICAgIGUgPSAwLFxyXG4gICAgICAgICAgICAgIGYgPSBkO1xyXG4gICAgICAgICAgICBiICYmICgoZCA9IDApLCAoZSA9ICgxMDAgKiBmKSAvIG8pKSxcclxuICAgICAgICAgICAgICBhLmNzcyh7IGhlaWdodDogZCArIFwicHhcIiwgXCJwYWRkaW5nLWJvdHRvbVwiOiBlICsgXCIlXCIgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZigpLFxyXG4gICAgICAgICAgICBjLmZpbmQoXCJpbWdcIikubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBjLmZpbmQoXCJpbWdcIilbMF0uY29tcGxldGVcclxuICAgICAgICAgICAgICAgID8gKGYoKSwgeCB8fCBkLmF1dG8oKSlcclxuICAgICAgICAgICAgICAgIDogYy5maW5kKFwiaW1nXCIpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmKCksIHggfHwgZC5hdXRvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IHggfHwgZC5hdXRvKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmU6IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICB0aGlzLmRvQ3NzKCkgJiYgXCJmYWRlXCIgPT09IGUubW9kZSAmJiBwLmFkZENsYXNzKFwib25cIik7XHJcbiAgICAgICAgICB2YXIgYyA9IDA7XHJcbiAgICAgICAgICBpZiAocSAqIGUuc2xpZGVNb3ZlIDwgbCkge1xyXG4gICAgICAgICAgICBhLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZG9Dc3MoKSB8fFxyXG4gICAgICAgICAgICAgICAgXCJmYWRlXCIgIT09IGUubW9kZSB8fFxyXG4gICAgICAgICAgICAgICAgYiAhPT0gITEgfHxcclxuICAgICAgICAgICAgICAgIGEuZmFkZU91dChlLnNwZWVkKSxcclxuICAgICAgICAgICAgICAoYyA9IGIgPT09ICEwID8gcSA6IHEgKiBlLnNsaWRlTW92ZSk7XHJcbiAgICAgICAgICAgIHZhciBkLCBmO1xyXG4gICAgICAgICAgICBiID09PSAhMCAmJiAoKGQgPSBhLmxlbmd0aCksIChmID0gZCAtIDEpLCBjICsgMSA+PSBkICYmIChjID0gZikpLFxyXG4gICAgICAgICAgICAgIGUubG9vcCA9PT0gITAgJiZcclxuICAgICAgICAgICAgICAgIFwic2xpZGVcIiA9PT0gZS5tb2RlICYmXHJcbiAgICAgICAgICAgICAgICAoKGMgPVxyXG4gICAgICAgICAgICAgICAgICBiID09PSAhMFxyXG4gICAgICAgICAgICAgICAgICAgID8gcSAtIGcuZmluZChcIi5jbG9uZS5sZWZ0XCIpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIDogcSAqIGUuc2xpZGVNb3ZlKSxcclxuICAgICAgICAgICAgICAgIGIgPT09ICEwICYmXHJcbiAgICAgICAgICAgICAgICAgICgoZCA9IGEubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgKGYgPSBkIC0gMSksXHJcbiAgICAgICAgICAgICAgICAgIGMgKyAxID09PSBkID8gKGMgPSBmKSA6IGMgKyAxID4gZCAmJiAoYyA9IDApKSksXHJcbiAgICAgICAgICAgICAgdGhpcy5kb0NzcygpIHx8XHJcbiAgICAgICAgICAgICAgICBcImZhZGVcIiAhPT0gZS5tb2RlIHx8XHJcbiAgICAgICAgICAgICAgICBiICE9PSAhMSB8fFxyXG4gICAgICAgICAgICAgICAgYS5lcShjKS5mYWRlSW4oZS5zcGVlZCksXHJcbiAgICAgICAgICAgICAgYS5lcShjKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBhLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgIGEuZXEoYS5sZW5ndGggLSAxKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgICB0aGlzLmRvQ3NzKCkgfHxcclxuICAgICAgICAgICAgICAgIFwiZmFkZVwiICE9PSBlLm1vZGUgfHxcclxuICAgICAgICAgICAgICAgIGIgIT09ICExIHx8XHJcbiAgICAgICAgICAgICAgICAoYS5mYWRlT3V0KGUuc3BlZWQpLCBhLmVxKGMpLmZhZGVJbihlLnNwZWVkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgZS5ydGwgPT09ICEwICYmIChiID0gLWIpLFxyXG4gICAgICAgICAgICB0aGlzLmRvQ3NzKClcclxuICAgICAgICAgICAgICA/IGEuY3NzKFxyXG4gICAgICAgICAgICAgICAgICBlLnZlcnRpY2FsID09PSAhMFxyXG4gICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIC1iICsgXCJweCwgMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtdHJhbnNmb3JtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgLWIgKyBcInB4LCAwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZChcIiArIC1iICsgXCJweCwgMHB4LCAwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZTNkKFwiICsgLWIgKyBcInB4LCAwcHgsIDBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IGUudmVydGljYWwgPT09ICEwXHJcbiAgICAgICAgICAgICAgPyBhXHJcbiAgICAgICAgICAgICAgICAgIC5jc3MoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgdG9wOiAtYiArIFwicHhcIiB9LCBlLnNwZWVkLCBlLmVhc2luZylcclxuICAgICAgICAgICAgICA6IGFcclxuICAgICAgICAgICAgICAgICAgLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIilcclxuICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBsZWZ0OiAtYiArIFwicHhcIiB9LCBlLnNwZWVkLCBlLmVhc2luZyk7XHJcbiAgICAgICAgICB2YXIgYyA9IHAucGFyZW50KCkuZmluZChcIi5sU1BhZ2VyXCIpLmZpbmQoXCJsaVwiKTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlKGMsICEwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlKGgsICExKTtcclxuICAgICAgICAgIHZhciBhID0gcC5wYXJlbnQoKS5maW5kKFwiLmxTUGFnZXJcIikuZmluZChcImxpXCIpO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmUoYSwgITApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBhID0gdGhpcztcclxuICAgICAgICAgICh6LmNhbFNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtID4gbyAmJlxyXG4gICAgICAgICAgICAgICgodCA9IGEuc2xpZGVWYWx1ZSgpKSxcclxuICAgICAgICAgICAgICBhLmFjdGl2ZShoLCAhMSksXHJcbiAgICAgICAgICAgICAgdCA+IG0gLSBvIC0gZS5zbGlkZU1hcmdpblxyXG4gICAgICAgICAgICAgICAgPyAodCA9IG0gLSBvIC0gZS5zbGlkZU1hcmdpbilcclxuICAgICAgICAgICAgICAgIDogMCA+IHQgJiYgKHQgPSAwKSxcclxuICAgICAgICAgICAgICBhLm1vdmUoZywgdCksXHJcbiAgICAgICAgICAgICAgZS5sb29wID09PSAhMCAmJlxyXG4gICAgICAgICAgICAgICAgXCJzbGlkZVwiID09PSBlLm1vZGUgJiZcclxuICAgICAgICAgICAgICAgIChxID49IGwgLSBnLmZpbmQoXCIuY2xvbmUubGVmdFwiKS5sZW5ndGggLyBlLnNsaWRlTW92ZSAmJlxyXG4gICAgICAgICAgICAgICAgICBhLnJlc2V0U2xpZGUoZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIDAgPT09IHEgJiYgYS5yZXNldFNsaWRlKHAuZmluZChcIi5sc2xpZGVcIikubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHouY2FsU2xpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2xpZGU6IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IHRoaXM7XHJcbiAgICAgICAgICBwLmZpbmQoXCIubFNBY3Rpb24gYVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAocSA9IGEpLFxyXG4gICAgICAgICAgICAgICAgcC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIFwiMG1zXCIpLFxyXG4gICAgICAgICAgICAgICAgKHQgPSBiLnNsaWRlVmFsdWUoKSksXHJcbiAgICAgICAgICAgICAgICBiLmFjdGl2ZShoLCAhMSksXHJcbiAgICAgICAgICAgICAgICBkLm1vdmUoZywgdCksXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGUuc3BlZWQgKyBcIm1zXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHAuZmluZChcIi5sU0FjdGlvbiBhXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIH0sIGUuc3BlZWQgKyAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGVWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGEgPSAwO1xyXG4gICAgICAgICAgaWYgKGUuYXV0b1dpZHRoID09PSAhMSkgYSA9IHEgKiAodiArIGUuc2xpZGVNYXJnaW4pICogZS5zbGlkZU1vdmU7XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBxID4gYjsgYisrKVxyXG4gICAgICAgICAgICAgIGEgKz0gcGFyc2VJbnQoaC5lcShiKS53aWR0aCgpKSArIGUuc2xpZGVNYXJnaW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlVGh1bWI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBhO1xyXG4gICAgICAgICAgc3dpdGNoIChlLmN1cnJlbnRQYWdlclBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkbGVcIjpcclxuICAgICAgICAgICAgICBhID0gbyAvIDIgLSB3IC8gMjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgYSA9IG8gLSB3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdmFyIGIgPSBxIC0gZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoLFxyXG4gICAgICAgICAgICBjID0gcC5wYXJlbnQoKS5maW5kKFwiLmxTUGFnZXJcIik7XHJcbiAgICAgICAgICBcInNsaWRlXCIgPT09IGUubW9kZSAmJlxyXG4gICAgICAgICAgICBlLmxvb3AgPT09ICEwICYmXHJcbiAgICAgICAgICAgIChiID49IGMuY2hpbGRyZW4oKS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IChiID0gMClcclxuICAgICAgICAgICAgICA6IDAgPiBiICYmIChiID0gYy5jaGlsZHJlbigpLmxlbmd0aCkpO1xyXG4gICAgICAgICAgdmFyIGQgPSBiICogKHcgKyBlLnRodW1iTWFyZ2luKSAtIGE7XHJcbiAgICAgICAgICBkICsgbyA+IHUgJiYgKGQgPSB1IC0gbyAtIGUudGh1bWJNYXJnaW4pLFxyXG4gICAgICAgICAgICAwID4gZCAmJiAoZCA9IDApLFxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoYywgZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBlLmF1dG8gJiZcclxuICAgICAgICAgICAgKGNsZWFySW50ZXJ2YWwoeCksXHJcbiAgICAgICAgICAgICh4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGcuZ29Ub05leHRTbGlkZSgpO1xyXG4gICAgICAgICAgICB9LCBlLnBhdXNlKSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IHRoaXM7XHJcbiAgICAgICAgICBlLmF1dG8gJiZcclxuICAgICAgICAgICAgZS5wYXVzZU9uSG92ZXIgJiZcclxuICAgICAgICAgICAgKHAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBhKHRoaXMpLmFkZENsYXNzKFwibHMtaG92ZXJcIiksIGcucGF1c2UoKSwgKGUuYXV0byA9ICEwKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBhKHRoaXMpLnJlbW92ZUNsYXNzKFwibHMtaG92ZXJcIiksXHJcbiAgICAgICAgICAgICAgICBwLmZpbmQoXCIubGlnaHRTbGlkZXJcIikuaGFzQ2xhc3MoXCJsc0dyYWJiaW5nXCIpIHx8IGIuYXV0bygpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmU6IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICBpZiAoKHAuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBcIjBtc1wiKSwgXCJzbGlkZVwiID09PSBlLm1vZGUpKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gYSAtIGIsXHJcbiAgICAgICAgICAgICAgZCA9IHQgLSBjO1xyXG4gICAgICAgICAgICBpZiAoZCA+PSBtIC0gbyAtIGUuc2xpZGVNYXJnaW4pXHJcbiAgICAgICAgICAgICAgaWYgKGUuZnJlZU1vdmUgPT09ICExKSBkID0gbSAtIG8gLSBlLnNsaWRlTWFyZ2luO1xyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGYgPSBtIC0gbyAtIGUuc2xpZGVNYXJnaW47XHJcbiAgICAgICAgICAgICAgICBkID0gZiArIChkIC0gZikgLyA1O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSAwID4gZCAmJiAoZS5mcmVlTW92ZSA9PT0gITEgPyAoZCA9IDApIDogKGQgLz0gNSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUoZywgZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaEVuZDogZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHAuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBlLnNwZWVkICsgXCJtc1wiKSwgXCJzbGlkZVwiID09PSBlLm1vZGUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGIgPSAhMSxcclxuICAgICAgICAgICAgICBjID0gITA7XHJcbiAgICAgICAgICAgICh0IC09IGEpLFxyXG4gICAgICAgICAgICAgIHQgPiBtIC0gbyAtIGUuc2xpZGVNYXJnaW5cclxuICAgICAgICAgICAgICAgID8gKCh0ID0gbSAtIG8gLSBlLnNsaWRlTWFyZ2luKSwgZS5hdXRvV2lkdGggPT09ICExICYmIChiID0gITApKVxyXG4gICAgICAgICAgICAgICAgOiAwID4gdCAmJiAodCA9IDApO1xyXG4gICAgICAgICAgICB2YXIgZCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGMgPSAwO1xyXG4gICAgICAgICAgICAgIGlmICgoYiB8fCAoYSAmJiAoYyA9IDEpKSwgZS5hdXRvV2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgdmFyIGQgPSAwLCBmID0gMDtcclxuICAgICAgICAgICAgICAgICAgZiA8IGgubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICgoZCArPSBwYXJzZUludChoLmVxKGYpLndpZHRoKCkpICsgZS5zbGlkZU1hcmdpbiksXHJcbiAgICAgICAgICAgICAgICAgIChxID0gZiArIGMpLFxyXG4gICAgICAgICAgICAgICAgICAhKGQgPj0gdCkpO1xyXG4gICAgICAgICAgICAgICAgICBmKytcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZyA9IHQgLyAoKHYgKyBlLnNsaWRlTWFyZ2luKSAqIGUuc2xpZGVNb3ZlKTtcclxuICAgICAgICAgICAgICAgIChxID0gcGFyc2VJbnQoZykgKyBjKSxcclxuICAgICAgICAgICAgICAgICAgdCA+PSBtIC0gbyAtIGUuc2xpZGVNYXJnaW4gJiYgZyAlIDEgIT09IDAgJiYgcSsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYSA+PSBlLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgICAgICAgICAgPyAoZCghMSksIChjID0gITEpKVxyXG4gICAgICAgICAgICAgIDogYSA8PSAtZS5zd2lwZVRocmVzaG9sZCAmJiAoZCghMCksIChjID0gITEpKSxcclxuICAgICAgICAgICAgICBnLm1vZGUoYyksXHJcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZVRodW1iKCk7XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgYSA+PSBlLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgICAgICAgICAgPyBnLmdvVG9QcmV2U2xpZGUoKVxyXG4gICAgICAgICAgICAgIDogYSA8PSAtZS5zd2lwZVRocmVzaG9sZCAmJiBnLmdvVG9OZXh0U2xpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZURyYWc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBiID0gdGhpcztcclxuICAgICAgICAgIGlmICgheSkge1xyXG4gICAgICAgICAgICB2YXIgYyA9IDAsXHJcbiAgICAgICAgICAgICAgZCA9IDAsXHJcbiAgICAgICAgICAgICAgZiA9ICExO1xyXG4gICAgICAgICAgICBwLmZpbmQoXCIubGlnaHRTbGlkZXJcIikuYWRkQ2xhc3MoXCJsc0dyYWJcIiksXHJcbiAgICAgICAgICAgICAgcC5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gPiBtICYmIDAgIT09IG1cclxuICAgICAgICAgICAgICAgICAgPyAhMVxyXG4gICAgICAgICAgICAgICAgICA6IHZvaWQgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJsU1ByZXZcIiAhPT0gYShiLnRhcmdldCkuYXR0cihcImNsYXNzXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxTTmV4dFwiICE9PSBhKGIudGFyZ2V0KS5hdHRyKFwiY2xhc3NcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICgoYyA9IGUudmVydGljYWwgPT09ICEwID8gYi5wYWdlWSA6IGIucGFnZVgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGYgPSAhMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBiLnByZXZlbnREZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGIucmV0dXJuVmFsdWUgPSAhMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAocC5zY3JvbGxMZWZ0ICs9IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHAuc2Nyb2xsTGVmdCAtPSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIubGlnaHRTbGlkZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibHNHcmFiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImxzR3JhYmJpbmdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgYSh3aW5kb3cpLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICBmICYmXHJcbiAgICAgICAgICAgICAgICAgICgoZCA9IGUudmVydGljYWwgPT09ICEwID8gYS5wYWdlWSA6IGEucGFnZVgpLFxyXG4gICAgICAgICAgICAgICAgICBiLnRvdWNoTW92ZShkLCBjKSk7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgYSh3aW5kb3cpLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmxpZ2h0U2xpZGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibHNHcmFiYmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImxzR3JhYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAoZiA9ICExKSxcclxuICAgICAgICAgICAgICAgICAgICAoZCA9IGUudmVydGljYWwgPT09ICEwID8gZy5wYWdlWSA6IGcucGFnZVgpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaCA9IGQgLSBjO1xyXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyhoKSA+PSBlLnN3aXBlVGhyZXNob2xkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYSh3aW5kb3cpLm9uKFwiY2xpY2subHNcIiwgZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGIucHJldmVudERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBiLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoYi5yZXR1cm5WYWx1ZSA9ICExKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdG9wUHJvcGFnYXRpb24oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSh3aW5kb3cpLm9mZihcImNsaWNrLmxzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGIudG91Y2hFbmQoaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVUb3VjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGEgPSB0aGlzO1xyXG4gICAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgICAgdmFyIGIgPSB7fSxcclxuICAgICAgICAgICAgICBjID0ge307XHJcbiAgICAgICAgICAgIHAub24oXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgKGMgPSBhLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXSksXHJcbiAgICAgICAgICAgICAgICAoYi5wYWdlWCA9IGEub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYKSxcclxuICAgICAgICAgICAgICAgIChiLnBhZ2VZID0gYS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkpLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgcC5vbihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gPiBtICYmIDAgIT09IG0pIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgIHZhciBmID0gZC5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICAgICAgYyA9IGYudGFyZ2V0VG91Y2hlc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciBnID0gTWF0aC5hYnMoYy5wYWdlWCAtIGIucGFnZVgpLFxyXG4gICAgICAgICAgICAgICAgICBoID0gTWF0aC5hYnMoYy5wYWdlWSAtIGIucGFnZVkpO1xyXG4gICAgICAgICAgICAgICAgZS52ZXJ0aWNhbCA9PT0gITBcclxuICAgICAgICAgICAgICAgICAgPyAoMyAqIGggPiBnICYmIGQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBhLnRvdWNoTW92ZShjLnBhZ2VZLCBiLnBhZ2VZKSlcclxuICAgICAgICAgICAgICAgICAgOiAoMyAqIGcgPiBoICYmIGQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBhLnRvdWNoTW92ZShjLnBhZ2VYLCBiLnBhZ2VYKSk7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgcC5vbihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvID4gbSAmJiAwICE9PSBtKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICB2YXIgZDtcclxuICAgICAgICAgICAgICAgIChkID0gZS52ZXJ0aWNhbCA9PT0gITAgPyBjLnBhZ2VZIC0gYi5wYWdlWSA6IGMucGFnZVggLSBiLnBhZ2VYKSxcclxuICAgICAgICAgICAgICAgICAgYS50b3VjaEVuZChkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1aWxkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IHRoaXM7XHJcbiAgICAgICAgICBiLmluaXRpYWxTdHlsZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmRvQ3NzKCkgJiZcclxuICAgICAgICAgICAgICAoZS5lbmFibGVUb3VjaCA9PT0gITAgJiYgYi5lbmFibGVUb3VjaCgpLFxyXG4gICAgICAgICAgICAgIGUuZW5hYmxlRHJhZyA9PT0gITAgJiYgYi5lbmFibGVEcmFnKCkpLFxyXG4gICAgICAgICAgICBhKHdpbmRvdykub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgYi5hdXRvKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhKHdpbmRvdykub24oXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYi5wYWdlcigpLFxyXG4gICAgICAgICAgICBiLnBhdXNlT25Ib3ZlcigpLFxyXG4gICAgICAgICAgICBiLmNvbnRyb2xzKCksXHJcbiAgICAgICAgICAgIGIua2V5UHJlc3MoKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZC5idWlsZCgpLFxyXG4gICAgICAoei5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHouY2hicmVha3BvaW50KCksXHJcbiAgICAgICAgICBlLnZlcnRpY2FsID09PSAhMFxyXG4gICAgICAgICAgICA/ICgobyA9IGUuaXRlbSA+IDEgPyBlLnZlcnRpY2FsSGVpZ2h0IDogaC5vdXRlckhlaWdodCgpKSxcclxuICAgICAgICAgICAgICBwLmNzcyhcImhlaWdodFwiLCBvICsgXCJweFwiKSlcclxuICAgICAgICAgICAgOiAobyA9IHAub3V0ZXJXaWR0aCgpKSxcclxuICAgICAgICAgIGUubG9vcCA9PT0gITAgJiYgXCJzbGlkZVwiID09PSBlLm1vZGUgJiYgei5jbG9uZSgpLFxyXG4gICAgICAgICAgei5jYWxMKCksXHJcbiAgICAgICAgICBcInNsaWRlXCIgPT09IGUubW9kZSAmJiBnLnJlbW92ZUNsYXNzKFwibFNTbGlkZVwiKSxcclxuICAgICAgICAgIFwic2xpZGVcIiA9PT0gZS5tb2RlICYmICh6LmNhbFNXKCksIHouc1NXKCkpLFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFwic2xpZGVcIiA9PT0gZS5tb2RlICYmIGcuYWRkQ2xhc3MoXCJsU1NsaWRlXCIpO1xyXG4gICAgICAgICAgfSwgMWUzKSxcclxuICAgICAgICAgIGUucGFnZXIgJiYgei5jcmVhdGVQYWdlcigpLFxyXG4gICAgICAgICAgZS5hZGFwdGl2ZUhlaWdodCA9PT0gITAgJiZcclxuICAgICAgICAgICAgZS52ZXJ0aWNhbCA9PT0gITEgJiZcclxuICAgICAgICAgICAgZy5jc3MoXCJoZWlnaHRcIiwgaC5lcShxKS5vdXRlckhlaWdodCghMCkpLFxyXG4gICAgICAgICAgZS5hZGFwdGl2ZUhlaWdodCA9PT0gITEgJiZcclxuICAgICAgICAgICAgKFwic2xpZGVcIiA9PT0gZS5tb2RlXHJcbiAgICAgICAgICAgICAgPyBlLnZlcnRpY2FsID09PSAhMVxyXG4gICAgICAgICAgICAgICAgPyBkLnNldEhlaWdodChnLCAhMSlcclxuICAgICAgICAgICAgICAgIDogZC5hdXRvKClcclxuICAgICAgICAgICAgICA6IGQuc2V0SGVpZ2h0KGcsICEwKSksXHJcbiAgICAgICAgICBlLmdhbGxlcnkgPT09ICEwICYmIGQuc2xpZGVUaHVtYigpLFxyXG4gICAgICAgICAgXCJzbGlkZVwiID09PSBlLm1vZGUgJiYgZC5zbGlkZSgpLFxyXG4gICAgICAgICAgZS5hdXRvV2lkdGggPT09ICExXHJcbiAgICAgICAgICAgID8gaC5sZW5ndGggPD0gZS5pdGVtXHJcbiAgICAgICAgICAgICAgPyBwLmZpbmQoXCIubFNBY3Rpb25cIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgOiBwLmZpbmQoXCIubFNBY3Rpb25cIikuc2hvdygpXHJcbiAgICAgICAgICAgIDogei5jYWxXaWR0aCghMSkgPCBvICYmIDAgIT09IG1cclxuICAgICAgICAgICAgPyBwLmZpbmQoXCIubFNBY3Rpb25cIikuaGlkZSgpXHJcbiAgICAgICAgICAgIDogcC5maW5kKFwiLmxTQWN0aW9uXCIpLnNob3coKTtcclxuICAgICAgfSksXHJcbiAgICAgIChnLmdvVG9QcmV2U2xpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHEgPiAwKVxyXG4gICAgICAgICAgZS5vbkJlZm9yZVByZXZTbGlkZS5jYWxsKHRoaXMsIGcsIHEpLFxyXG4gICAgICAgICAgICBxLS0sXHJcbiAgICAgICAgICAgIGcubW9kZSghMSksXHJcbiAgICAgICAgICAgIGUuZ2FsbGVyeSA9PT0gITAgJiYgZC5zbGlkZVRodW1iKCk7XHJcbiAgICAgICAgZWxzZSBpZiAoZS5sb29wID09PSAhMCkge1xyXG4gICAgICAgICAgaWYgKChlLm9uQmVmb3JlUHJldlNsaWRlLmNhbGwodGhpcywgZywgcSksIFwiZmFkZVwiID09PSBlLm1vZGUpKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0gbCAtIDE7XHJcbiAgICAgICAgICAgIHEgPSBwYXJzZUludChhIC8gZS5zbGlkZU1vdmUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZy5tb2RlKCExKSwgZS5nYWxsZXJ5ID09PSAhMCAmJiBkLnNsaWRlVGh1bWIoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIGUuc2xpZGVFbmRBbmltYXRpb24gPT09ICEwICYmXHJcbiAgICAgICAgICAgIChnLmFkZENsYXNzKFwibGVmdEVuZFwiKSxcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgZy5yZW1vdmVDbGFzcyhcImxlZnRFbmRcIik7XHJcbiAgICAgICAgICAgIH0sIDQwMCkpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGcuZ29Ub05leHRTbGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9ICEwO1xyXG4gICAgICAgIGlmIChcInNsaWRlXCIgPT09IGUubW9kZSkge1xyXG4gICAgICAgICAgdmFyIGIgPSBkLnNsaWRlVmFsdWUoKTtcclxuICAgICAgICAgIGEgPSBiIDwgbSAtIG8gLSBlLnNsaWRlTWFyZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxICogZS5zbGlkZU1vdmUgPCBsIC0gZS5zbGlkZU1vdmUgJiYgYVxyXG4gICAgICAgICAgPyAoZS5vbkJlZm9yZU5leHRTbGlkZS5jYWxsKHRoaXMsIGcsIHEpLFxyXG4gICAgICAgICAgICBxKyssXHJcbiAgICAgICAgICAgIGcubW9kZSghMSksXHJcbiAgICAgICAgICAgIGUuZ2FsbGVyeSA9PT0gITAgJiYgZC5zbGlkZVRodW1iKCkpXHJcbiAgICAgICAgICA6IGUubG9vcCA9PT0gITBcclxuICAgICAgICAgID8gKGUub25CZWZvcmVOZXh0U2xpZGUuY2FsbCh0aGlzLCBnLCBxKSxcclxuICAgICAgICAgICAgKHEgPSAwKSxcclxuICAgICAgICAgICAgZy5tb2RlKCExKSxcclxuICAgICAgICAgICAgZS5nYWxsZXJ5ID09PSAhMCAmJiBkLnNsaWRlVGh1bWIoKSlcclxuICAgICAgICAgIDogZS5zbGlkZUVuZEFuaW1hdGlvbiA9PT0gITAgJiZcclxuICAgICAgICAgICAgKGcuYWRkQ2xhc3MoXCJyaWdodEVuZFwiKSxcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgZy5yZW1vdmVDbGFzcyhcInJpZ2h0RW5kXCIpO1xyXG4gICAgICAgICAgICB9LCA0MDApKTtcclxuICAgICAgfSksXHJcbiAgICAgIChnLm1vZGUgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGUuYWRhcHRpdmVIZWlnaHQgPT09ICEwICYmXHJcbiAgICAgICAgICBlLnZlcnRpY2FsID09PSAhMSAmJlxyXG4gICAgICAgICAgZy5jc3MoXCJoZWlnaHRcIiwgaC5lcShxKS5vdXRlckhlaWdodCghMCkpLFxyXG4gICAgICAgICAgbiA9PT0gITEgJiZcclxuICAgICAgICAgICAgKFwic2xpZGVcIiA9PT0gZS5tb2RlXHJcbiAgICAgICAgICAgICAgPyBkLmRvQ3NzKCkgJiZcclxuICAgICAgICAgICAgICAgIChnLmFkZENsYXNzKFwibFNTbGlkZVwiKSxcclxuICAgICAgICAgICAgICAgIFwiXCIgIT09IGUuc3BlZWQgJiYgcC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGUuc3BlZWQgKyBcIm1zXCIpLFxyXG4gICAgICAgICAgICAgICAgXCJcIiAhPT0gZS5jc3NFYXNpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgcC5jc3MoXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiLCBlLmNzc0Vhc2luZykpXHJcbiAgICAgICAgICAgICAgOiBkLmRvQ3NzKCkgJiZcclxuICAgICAgICAgICAgICAgIChcIlwiICE9PSBlLnNwZWVkICYmIGcuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBlLnNwZWVkICsgXCJtc1wiKSxcclxuICAgICAgICAgICAgICAgIFwiXCIgIT09IGUuY3NzRWFzaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgIGcuY3NzKFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIiwgZS5jc3NFYXNpbmcpKSksXHJcbiAgICAgICAgICBhIHx8IGUub25CZWZvcmVTbGlkZS5jYWxsKHRoaXMsIGcsIHEpLFxyXG4gICAgICAgICAgXCJzbGlkZVwiID09PSBlLm1vZGUgPyBkLnNsaWRlKCkgOiBkLmZhZGUoKSxcclxuICAgICAgICAgIHAuaGFzQ2xhc3MoXCJscy1ob3ZlclwiKSB8fCBkLmF1dG8oKSxcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhIHx8IGUub25BZnRlclNsaWRlLmNhbGwodGhpcywgZywgcSk7XHJcbiAgICAgICAgICB9LCBlLnNwZWVkKSxcclxuICAgICAgICAgIChuID0gITApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGcucGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnLmdvVG9OZXh0U2xpZGUoKSwgKGUuYXV0byA9ICEwKSwgZC5hdXRvKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZy5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoZS5hdXRvID0gITEpLCBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGcucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB6LmluaXQoKTtcclxuICAgICAgfSksXHJcbiAgICAgIChnLmdldEN1cnJlbnRTbGlkZUNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gcTtcclxuICAgICAgICBpZiAoZS5sb29wKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IHAuZmluZChcIi5sc2xpZGVcIikubGVuZ3RoLFxyXG4gICAgICAgICAgICBjID0gZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoO1xyXG4gICAgICAgICAgYSA9IGMgLSAxID49IHEgPyBiICsgKHEgLSBjKSA6IHEgPj0gYiArIGMgPyBxIC0gYiAtIGMgOiBxIC0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgKyAxO1xyXG4gICAgICB9KSxcclxuICAgICAgKGcuZ2V0VG90YWxTbGlkZUNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwLmZpbmQoXCIubHNsaWRlXCIpLmxlbmd0aDtcclxuICAgICAgfSksXHJcbiAgICAgIChnLmdvVG9TbGlkZSA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgKHEgPSBlLmxvb3AgPyBhICsgZy5maW5kKFwiLmNsb25lLmxlZnRcIikubGVuZ3RoIC0gMSA6IGEpLFxyXG4gICAgICAgICAgZy5tb2RlKCExKSxcclxuICAgICAgICAgIGUuZ2FsbGVyeSA9PT0gITAgJiYgZC5zbGlkZVRodW1iKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGcubGlnaHRTbGlkZXIgJiZcclxuICAgICAgICAgICgoZy5nb1RvUHJldlNsaWRlID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKGcuZ29Ub05leHRTbGlkZSA9IGZ1bmN0aW9uICgpIHt9KSxcclxuICAgICAgICAgIChnLm1vZGUgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAoZy5wbGF5ID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKGcucGF1c2UgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAoZy5yZWZyZXNoID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKGcuZ2V0Q3VycmVudFNsaWRlQ291bnQgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAoZy5nZXRUb3RhbFNsaWRlQ291bnQgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAoZy5nb1RvU2xpZGUgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAoZy5saWdodFNsaWRlciA9IG51bGwpLFxyXG4gICAgICAgICAgKHogPSB7IGluaXQ6IGZ1bmN0aW9uICgpIHt9IH0pLFxyXG4gICAgICAgICAgZy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmxTQWN0aW9uLCAubFNQYWdlclwiKS5yZW1vdmUoKSxcclxuICAgICAgICAgIGdcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgIFwibGlnaHRTbGlkZXIgbFNGYWRlIGxTU2xpZGUgbHNHcmFiIGxzR3JhYmJpbmcgbGVmdEVuZCByaWdodFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoXCJzdHlsZVwiKVxyXG4gICAgICAgICAgICAudW53cmFwKClcclxuICAgICAgICAgICAgLnVud3JhcCgpLFxyXG4gICAgICAgICAgZy5jaGlsZHJlbigpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxcclxuICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoXCJsc2xpZGUgYWN0aXZlXCIpLFxyXG4gICAgICAgICAgZy5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLFxyXG4gICAgICAgICAgKGggPSBudWxsKSxcclxuICAgICAgICAgICh4ID0gbnVsbCksXHJcbiAgICAgICAgICAobiA9ICExKSxcclxuICAgICAgICAgIChxID0gMCkpO1xyXG4gICAgICB9KSxcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZS5vblNsaWRlckxvYWQuY2FsbCh0aGlzLCBnKTtcclxuICAgICAgfSwgMTApLFxyXG4gICAgICBhKHdpbmRvdykub24oXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGEucHJldmVudERlZmF1bHQgPyBhLnByZXZlbnREZWZhdWx0KCkgOiAoYS5yZXR1cm5WYWx1ZSA9ICExKSxcclxuICAgICAgICAgICAgei5pbml0KCk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfSksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfTtcclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==