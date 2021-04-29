(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_jquery_fancybox_min_js-37ac4014"],{

/***/ 234:
/*!***************************************!*\
  !*** ./src/js/jquery.fancybox.min.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================


!(function (t, e, n, o) {
  "use strict";
  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger("blur")),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr("data-fancybox") || ""),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)));
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" },
        },
        video: {
          tpl:
            '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0,
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom:
            '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom",
          },
          de: {
            CLOSE: "Schlie&szlig;en",
            NEXT: "Weiter",
            PREV: "Zur&uuml;ck",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Vergr&ouml;&szlig;ern",
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      f = (function () {
        var t,
          n = e.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in o) if (void 0 !== n.style[t]) return o[t];
        return "transitionend";
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e);
          }),
          o
        );
      },
      g = function (t) {
        var o, i;
        return (
          !(!t || t.ownerDocument !== e) &&
          (n(".fancybox-container").css("pointer-events", "none"),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n(".fancybox-container").css("pointer-events", ""),
          i)
        );
      },
      b = function (t, e, o) {
        var i = this;
        (i.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init();
      };
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0),
          n("body").addClass("fancybox-active"),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n("head").append(""),
            n("body").addClass("compensate-for-scrollbar")),
          (i = ""),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || "";
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace("{{buttons}}", i)
                .replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr("id", "fancybox-container-" + a.id)
            .addClass(r.baseClass)
            .data("FancyBox", a)
            .appendTo(r.parentEl)),
          (a.$refs = { container: o }),
          [
            "bg",
            "inner",
            "infobar",
            "toolbar",
            "stage",
            "caption",
            "navigation",
          ].forEach(function (t) {
            a.$refs[t] = o.find(".fancybox-" + t);
          }),
          a.trigger("onInit"),
          a.activate(),
          a.jumpTo(a.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {};
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : "object" === n.type(e) && n(e).length
            ? ((i = n(e)),
              (d = i.data() || {}),
              (d = n.extend(!0, {}, d, d.options)),
              (d.$orig = i),
              (l.src = o.opts.src || d.src || i.attr("href")),
              l.type || l.src || ((l.type = "inline"), (l.src = e)))
            : (l = { type: "html", src: e + "" }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ""),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = "video"),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                : r.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (a = "image")
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((a = "iframe"),
                  (l = n.extend(!0, l, {
                    contentType: "pdf",
                    opts: { iframe: { preload: !1 } },
                  })))
                : "#" === r.charAt(0) && (a = "inline")),
            a ? (l.type = a) : o.trigger("objectNeedsType", l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                  ? "html"
                  : l.type),
            (l.index = o.group.length),
            "auto" == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
            "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find("img:first")),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find("img:first")),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            "function" === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            "function" === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? "" : l.opts.caption + ""),
            "ajax" === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            o.group.push(l);
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function () {
        var e = this;
        e.removeEvents(),
          e.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            })
            .on(
              "touchstart.fb-prev click.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous();
              }
            )
            .on(
              "touchstart.fb-next click.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next();
              }
            )
            .on("click.fb", "[data-fancybox-zoom]", function (t) {
              e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t);
                })))
              : (e.current &&
                  "iframe" === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t);
                  },
                  n.fancybox.isMobile ? 600 : 250
                ));
          }),
          r.on("keydown.fb", function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
            if (9 == a) return void (i.opts.trapFocus && e.focus(t));
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is("input,textarea,video,audio,select")
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                ? (t.preventDefault(), void e.previous())
                : 39 === a || 40 === a
                ? (t.preventDefault(), void e.next())
                : void e.trigger("afterKeydown", t, a);
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function (t) {
                (e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1);
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length;
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1;
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger("beforeShow", o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass("fancybox-slide--current"),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css("transition-duration", e + "ms"),
              f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
              f.loadSlide(s),
              void f.preload("image")
            );
          (c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0);
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              "fancybox-slide--complete fancybox-slide--current"
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        " "
                      );
                    });
                  var i = o.pos * c.width + o.pos * o.opts.gutter;
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u,
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        "fancybox-slide--" +
                          (o.pos > s.pos ? "next" : "previous")
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter,
                      },
                      e,
                      function () {
                        o.$slide
                          .css({ transform: "", opacity: "" })
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === f.currPos && f.complete();
                      }
                    );
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                r.$slide.addClass(
                  "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        "fancybox-slide--next fancybox-slide--previous"
                      );
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload("image");
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height;
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          "image" != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            { top: s, left: a, scaleX: r, scaleY: c },
            o || 366,
            function () {
              l.isAnimating = !1;
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          "image" != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 366,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css("paddingLeft")) +
            parseFloat(c.css("paddingRight")) +
            parseFloat(r.css("marginLeft")) +
            parseFloat(r.css("marginRight"))),
          (o -=
            parseFloat(c.css("paddingTop")) +
            parseFloat(c.css("paddingBottom")) +
            parseFloat(r.css("marginTop")) +
            parseFloat(r.css("marginBottom"))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          "image" === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
            : "video" === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        );
      },
      update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t),
          i &&
            (a || s || "video" === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger("refresh"),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                .toggleClass(
                  "compensate-for-scrollbar",
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger("onUpdate", t, e);
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide;
        !e.isClosing &&
          o &&
          (i.siblings().css({ transform: "", opacity: "" }),
          i
            .parent()
            .children()
            .removeClass("fancybox-slide--previous fancybox-slide--next"),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            void 0 === t ? 0 : t,
            function () {
              i.css({ transform: "", opacity: "" }),
                o.isComplete || e.complete();
            },
            !1
          ));
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current;
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass("fancybox-animated") &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        );
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container;
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass("fancybox-is-zoomable", i),
          n("[data-fancybox-zoom]").prop("disabled", !i),
          o
            ? r.addClass("fancybox-can-pan")
            : i &&
              ("zoom" === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  "zoom" == s.opts.clickContent(s)))
            ? r.addClass("fancybox-can-zoomIn")
            : s.opts.touch &&
              (s.opts.touch.vertical || a.group.length > 1) &&
              "video" !== s.contentType &&
              r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0;
        }
        return !1;
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content;
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        );
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1;
        return (
          "image" === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = { width: t, height: e })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
            return (t.isLoading = !1), !1;
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "video":
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    "{{format}}",
                    t.opts.videoFormat || t.opts.video.format || ""
                  )
                  .replace("{{poster}}", t.thumb || "")
              );
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var o,
          i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t);
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass("fancybox-is-hidden")
            .appendTo(t.$slide.addClass("fancybox-slide--image"))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement("img")),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null);
            }),
            (o.onload = function () {
              i.afterLoad(t);
            }),
            (t.$ghost = n(o)
              .addClass("fancybox-image")
              .appendTo(t.$content)
              .attr("src", t.thumb))),
          i.setBigImage(t);
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          (i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === n) return (e.url = t);
                    o && ((e.value = o), (e.postfix = t[t.length - 1]));
                  }),
                e
              );
            })),
            o.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if (
              ("w" === c.postfix && c.value >= a) ||
              ("x" === c.postfix && c.value >= i)
            ) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                "w" == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s));
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement("img"),
          a = n(i);
        (t.$image = a
          .one("error", function () {
            o.setError(t);
          })
          .one("load", function () {
            var e;
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && "auto" !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? "100"
                        : Math.round((t.width / t.height) * 100)) + "vw"),
                  a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function () {
                    t.$ghost && !o.isClosing && t.$ghost.hide();
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (i.complete || "complete" == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger("load")
            : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        (t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass("fancybox-slide--" + t.contentType),
          (t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(i.attr)
            .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
              }),
              a.on("refresh.fb", function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (o = n.find("body"));
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css("overflow", "visible"),
                    s.css({
                      width: "100%",
                      "max-width": "100%",
                      height: "9999px",
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css("width", r || "").css("max-width", ""),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css("height", c || ""),
                    a.css("overflow", "auto")),
                    s.removeClass("fancybox-is-hidden");
                }
              }))
            : o.afterLoad(t),
          e.attr("src", t.src),
          a.one("onReset", function () {
            try {
              n(this)
                .find("iframe")
                .hide()
                .unbind()
                .attr("src", "//about:blank");
            } catch (t) {}
            n(this).off("refresh.fb").empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass("fancybox-content") ||
                e.parent().hasClass("fancybox-content")) &&
                e.parents(".fancybox-slide").trigger("onReset"),
              (t.$placeholder = n("<div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                (e = n("<div>").append(n.trim(e)).contents()),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass("fancybox-content").hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
          }),
          n(e).appendTo(t.$slide),
          n(e).is("video,audio") &&
            (n(e).addClass("fancybox-video"),
            n(e).wrap("<div></div>"),
            (t.contentType = "video"),
            (t.opts.width = t.opts.width || n(e).attr("width")),
            (t.opts.height = t.opts.height || n(e).attr("height"))),
          (t.$content = t.$slide
            .children()
            .filter("div,form,main,video,audio,article,.fancybox-content")
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
          t.$content.addClass("fancybox-content"),
          t.$slide.addClass("fancybox-slide--" + t.contentType),
          o.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide
            .trigger("onReset")
            .removeClass("fancybox-slide--" + t.contentType)
            .addClass("fancybox-slide--error"),
          (t.contentType = "html"),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn("fast"));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t));
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1;
        s.toggleClass("fancybox-caption--separate", a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current;
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css("margin-bottom", ""),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style["padding-bottom"]),
            (i = s.$slide.css("padding-bottom")),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css("padding-bottom", 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css("padding-bottom", o))),
          s.$content.css("margin-bottom", n));
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed;
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
          (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          "zoom" === e &&
            (t.pos === s.currPos &&
            i &&
            "image" === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = "fade")),
          "zoom" === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              "auto" == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                (s.isAnimating = !1), s.complete();
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    "fancybox-slide--" +
                    (t.pos >= s.prevPos ? "next" : "previous") +
                    " fancybox-animated fancybox-fx-" +
                    e),
                  r.addClass(o).removeClass("fancybox-slide--current"),
                  t.$content.removeClass("fancybox-is-hidden"),
                  p(r),
                  "image" !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    "fancybox-slide--current",
                    i,
                    function () {
                      r.removeClass(o).css({ transform: "", opacity: "" }),
                        t.pos === s.currPos && s.complete();
                    },
                    !0
                  ))
                : (t.$content.removeClass("fancybox-is-hidden"),
                  u ||
                    !d ||
                    "image" !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn("fast"),
                  void (t.pos === s.currPos && s.complete())))
        );
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb;
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css("border-top-width") || 0)),
          (i = parseFloat(c.css("border-right-width") || 0)),
          (a = parseFloat(c.css("border-bottom-width") || 0)),
          (s = parseFloat(c.css("border-left-width") || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        );
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {};
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger("onReset"),
            e.preload("inline"),
            p(o.$slide),
            o.$slide.addClass("fancybox-slide--complete"),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger("afterShow"),
          o.opts.video.autoStart &&
            o.$slide
              .find("video,audio")
              .filter(":visible:first")
              .trigger("play")
              .one("ended", function () {
                Document.exitFullscreen
                  ? Document.exitFullscreen()
                  : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next();
              }),
          o.opts.autoFocus &&
            "html" === o.contentType &&
            ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
            t.length ? t.trigger("focus") : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function (t) {
        var e,
          n,
          o = this;
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n));
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ].join(",");
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                )
              : s.$refs.container.find("*:visible")),
          (i = i.filter(r).filter(function () {
            return (
              "hidden" !== n(this).css("visibility") &&
              !n(this).hasClass("disabled")
            );
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger("focus")))
            : s.$refs.container.trigger("focus"));
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t);
          };
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger("beforeClose", t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update();
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger("onReset").remove(),
              i &&
                u.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing")
                  .css("transition-duration", i + "ms"),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              "zoom" !== o ||
                (a &&
                  i &&
                  "image" === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  "auto" == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass("fancybox-slide--previous")
                          .removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-fx-" + o,
                        i,
                        h
                      )
                    : !0 === t
                    ? setTimeout(h, i)
                    : h(),
                  !0)))
        );
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"),
          s.$refs.container.empty().remove(),
          s.trigger("afterClose", e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(":visible")) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger("focus"),
              n("html, body").scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n("body").removeClass(
                "fancybox-active compensate-for-scrollbar"
              ),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o;
        "afterClose" !== t && a.$refs
          ? a.$refs.container.trigger(t + ".fb", i)
          : r.trigger(t + ".fb", i);
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger("refresh"),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find("[data-fancybox-count]").html(t.group.length),
          a.find("[data-fancybox-index]").html(i + 1),
          a
            .find("[data-fancybox-prev]")
            .prop("disabled", !o.opts.loop && i <= 0),
          a
            .find("[data-fancybox-next]")
            .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
          "image" === o.type
            ? a
                .find("[data-fancybox-zoom]")
                .show()
                .end()
                .find("[data-fancybox-download]")
                .attr("href", o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
          n(e.activeElement).is(":hidden,[disabled]") &&
            t.$refs.container.trigger("focus");
      },
      hideControls: function (t) {
        var e = this,
          n = ["infobar", "toolbar", "nav"];
        (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return "fancybox-show-" + t;
              })
              .join(" ")
          ),
          (this.hasHiddenControls = !0);
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass("fancybox-show-caption", !!t.$caption)
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.5.7",
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof b &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new b(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close(t));
        },
        destroy: function () {
          this.close(!0), r.add("body").off("click.fb-start", "**");
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css("opacity")),
            })
          );
        },
        setTranslate: function (t, e) {
          var n = "",
            o = {};
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  "px, " +
                  (void 0 === e.top ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            );
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this;
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              (!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  "z-index" != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css("transition-duration", ""),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c));
            }),
            n.isNumeric(o) && t.css("transition-duration", o + "ms"),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass("fancybox-slide--image") &&
                    t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger(f);
              }, o + 33)
            );
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data("timer")),
            e && t.trigger(f),
            t.off(f).css("transition-duration", ""),
            t.parent().removeClass("fancybox-is-scaling"));
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { options: t }, i)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i),
      r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
          .eq(n(this).attr("data-fancybox-index") || 0)
          .trigger("click.fb-start", { $trigger: n(this) });
      }),
      (function () {
        var t = null;
        r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              t = n(this);
              break;
            case "mouseup":
              t = null;
              break;
            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"),
                n(this).is(t) ||
                  n(this).is("[disabled]") ||
                  n(this).addClass("fancybox-focus");
              break;
            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      })();
  }
})(window, document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t) {
    "use strict";
    var e = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;
      (s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              (d = c[o.paramPlace]),
                "?" == d[0] && (d = d.substring(1)),
                (d = d.split("&"));
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split("=", 2);
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                "function" === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                "function" === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              "youtube" === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    );
                  }))
                : "vimeo" === e && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            "iframe" === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == f || "gmap_search" == f
                  ? "map"
                  : "video",
            }))
          : p && (a.type = a.opts.defaultType);
    });
    var o = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t);
          });
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement("script")),
          (e.type = "text/javascript"),
          (e.src = this[t].src),
          "youtube" === t
            ? (window.onYouTubeIframeAPIReady = function () {
                (n[t].loaded = !0), n.done(t);
              })
            : (e.onload = function () {
                (n[t].loaded = !0), n.done(t);
              }),
          document.body.appendChild(e));
      },
      done: function (e) {
        var n, o, i;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on("ended", function () {
                  n.next();
                })));
      },
    };
    t(document).on({
      "afterShow.fb": function (t, e, n) {
        e.group.length > 1 &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      d = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (d.prototype.destroy = function () {
      var t = this;
      t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is("img") ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
            return o.stopPropagation(), void o.preventDefault();
          (i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0,
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  h
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(i, "ontouchend")
                )
                .on(
                  h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(i, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is(".fancybox-image") && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents(".fancybox-caption").length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass("fancybox-is-grabbing")),
                2 === i.startPoints.length &&
                  "image" === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0;
        if (!0 !== c)
          "x" == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = "y")
              : r.isDragging ||
                !1 === s.opts.vertical ||
                ("auto" === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = "x")
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0);
          (r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i;
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (d.prototype.onPan = function () {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints);
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height;
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: a, left: i }
        );
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f };
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling;
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass("fancybox-is-grabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t);
        (o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
        (o.sliderLastPos = null),
          "y" == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (i = o.instance.previous(300))
            : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
          o.$container.removeClass("fancybox-is-sliding");
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366));
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t];
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case "close":
                  r.close(i.startEvent);
                  break;
                case "toggleControls":
                  r.toggleControls();
                  break;
                case "next":
                  r.next();
                  break;
                case "nextOrClose":
                  r.group.length > 1 ? r.next() : r.close(i.startEvent);
                  break;
                case "zoom":
                  "image" == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(i.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            o = "Outside";
          else if (s.is(".fancybox-slide")) o = "Slide";
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return;
            o = "Content";
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this;
            f("dblclick" + o);
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts["dblclick" + o] &&
              c.opts["dblclick" + o] !== c.opts["click" + o]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), r.isAnimating || f("click" + o);
                  }, 500))
                : f("click" + o);
          return this;
        }
      }),
      n(e)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current;
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            "video" !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0);
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1),
          t.instance.trigger("onSlideShowChange", !1),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e) {
    "use strict";
    var n = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o];
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var o = {
        request: function (e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !t)
              .toggleClass("fancybox-button--fsexit", t));
        });
    }
    e(t).on({
      "onInit.fb": function (t, e) {
        var i;
        if (!n)
          return void e.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .remove();
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle();
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      },
      "afterKeydown.fb": function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle());
      },
      "beforeClose.fb": function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass("fancybox-is-fullscreen") &&
          o.exit();
      },
    });
  })(document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on("click", "a", function () {
            i.jumpTo(e(this).attr("data-index"));
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            (t = n.thumb),
              t || "image" !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (o.$list[0].innerHTML = s.join("")),
          "x" === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css("padding-right"), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
        o.instance.current &&
          ((e = i
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")),
          (n = e.position()),
          "y" === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : "x" === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e) {
    "use strict";
    function n(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl:
          '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null;
        a &&
          ("function" === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === a.type ? encodeURIComponent(a.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e, n) {
    "use strict";
    function o() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return { hash: e, index: o < 1 ? 1 : o, gallery: i };
    }
    function i(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function a(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        "" !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            "onInit.fb": function (t, e) {
              var n, i;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, o, i, s) {
              var r;
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                t.location.hash !== "#" + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    "replaceState" in t.history
                      ? (t.history[s ? "pushState" : "replaceState"](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            "#" +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ("replaceState" in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || "")
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null));
            },
          }),
          n(t).on("hashchange.fb", function () {
            var t = o(),
              e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
              var i = n(o).data("FancyBox");
              if (i && i.currentHash) return (e = i), !1;
            }),
              e
                ? e.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : "" !== t.gallery && i(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o());
          }, 50));
      });
  })(window, document, (jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, o) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ("auto" === o.opts.wheel && "image" !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, (jquery__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2pxdWVyeS5mYW5jeWJveC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7QUFDSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCLGVBQWUsWUFBWSxRQUFRLGVBQWUsRUFBRSxFQUFFO0FBQ3REO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSSx1QkFBdUIsSUFBSSw0RUFBNEU7QUFDbko7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCLG9CQUFvQjtBQUNyQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdGQUF3RixRQUFRLGlCQUFpQixLQUFLLFVBQVUsUUFBUSxxRUFBcUUsS0FBSztBQUNsTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVNQUF1TSxPQUFPLHVFQUF1RSxTQUFTLHlDQUF5QyxRQUFRO0FBQy9VO0FBQ0Esb0RBQW9ELE9BQU87QUFDM0Q7QUFDQTtBQUNBLDJHQUEyRyxVQUFVLG9CQUFvQjtBQUN6STtBQUNBLCtGQUErRixNQUFNO0FBQ3JHO0FBQ0EsaUdBQWlHLE9BQU87QUFDeEc7QUFDQSxxR0FBcUcsTUFBTTtBQUMzRztBQUNBLHNHQUFzRyxNQUFNO0FB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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkJBQTZCO0FBQ3pFO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZEQUE2RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUcsWUFBWSwrQ0FBTSIsImZpbGUiOiJib3R0b20tc3JjX2pzX2pxdWVyeV9mYW5jeWJveF9taW5fanMtMzdhYzQwMTQuYnVuZGxlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBmYW5jeUJveCB2My41LjdcclxuLy9cclxuLy8gTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxyXG4vLyBvciBmYW5jeUJveCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXHJcbi8vXHJcbi8vIGh0dHA6Ly9mYW5jeWFwcHMuY29tL2ZhbmN5Ym94L1xyXG4vLyBDb3B5cmlnaHQgMjAxOSBmYW5jeUFwcHNcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuIShmdW5jdGlvbiAodCwgZSwgbiwgbykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIGZ1bmN0aW9uIGkodCwgZSkge1xyXG4gICAgdmFyIG8sXHJcbiAgICAgIGksXHJcbiAgICAgIGEsXHJcbiAgICAgIHMgPSBbXSxcclxuICAgICAgciA9IDA7XHJcbiAgICAodCAmJiB0LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB8fFxyXG4gICAgICAodC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAoZSA9IGUgfHwge30pLFxyXG4gICAgICB0ICYmIHQuZGF0YSAmJiAoZSA9IGgodC5kYXRhLm9wdGlvbnMsIGUpKSxcclxuICAgICAgKG8gPSBlLiR0YXJnZXQgfHwgbih0LmN1cnJlbnRUYXJnZXQpLnRyaWdnZXIoXCJibHVyXCIpKSxcclxuICAgICAgKChhID0gbi5mYW5jeWJveC5nZXRJbnN0YW5jZSgpKSAmJiBhLiR0cmlnZ2VyICYmIGEuJHRyaWdnZXIuaXMobykpIHx8XHJcbiAgICAgICAgKGUuc2VsZWN0b3JcclxuICAgICAgICAgID8gKHMgPSBuKGUuc2VsZWN0b3IpKVxyXG4gICAgICAgICAgOiAoKGkgPSBvLmF0dHIoXCJkYXRhLWZhbmN5Ym94XCIpIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgPyAoKHMgPSB0LmRhdGEgPyB0LmRhdGEuaXRlbXMgOiBbXSksXHJcbiAgICAgICAgICAgICAgICAocyA9IHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgID8gcy5maWx0ZXIoJ1tkYXRhLWZhbmN5Ym94PVwiJyArIGkgKyAnXCJdJylcclxuICAgICAgICAgICAgICAgICAgOiBuKCdbZGF0YS1mYW5jeWJveD1cIicgKyBpICsgJ1wiXScpKSlcclxuICAgICAgICAgICAgICA6IChzID0gW29dKSksXHJcbiAgICAgICAgKHIgPSBuKHMpLmluZGV4KG8pKSxcclxuICAgICAgICByIDwgMCAmJiAociA9IDApLFxyXG4gICAgICAgIChhID0gbi5mYW5jeWJveC5vcGVuKHMsIGUsIHIpKSxcclxuICAgICAgICAoYS4kdHJpZ2dlciA9IG8pKSk7XHJcbiAgfVxyXG4gIGlmICgoKHQuY29uc29sZSA9IHQuY29uc29sZSB8fCB7IGluZm86IGZ1bmN0aW9uICh0KSB7fSB9KSwgbikpIHtcclxuICAgIGlmIChuLmZuLmZhbmN5Ym94KSByZXR1cm4gdm9pZCBjb25zb2xlLmluZm8oXCJmYW5jeUJveCBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xyXG4gICAgdmFyIGEgPSB7XHJcbiAgICAgICAgY2xvc2VFeGlzdGluZzogITEsXHJcbiAgICAgICAgbG9vcDogITEsXHJcbiAgICAgICAgZ3V0dGVyOiA1MCxcclxuICAgICAgICBrZXlib2FyZDogITAsXHJcbiAgICAgICAgcHJldmVudENhcHRpb25PdmVybGFwOiAhMCxcclxuICAgICAgICBhcnJvd3M6ICEwLFxyXG4gICAgICAgIGluZm9iYXI6ICEwLFxyXG4gICAgICAgIHNtYWxsQnRuOiBcImF1dG9cIixcclxuICAgICAgICB0b29sYmFyOiBcImF1dG9cIixcclxuICAgICAgICBidXR0b25zOiBbXCJ6b29tXCIsIFwic2xpZGVTaG93XCIsIFwidGh1bWJzXCIsIFwiY2xvc2VcIl0sXHJcbiAgICAgICAgaWRsZVRpbWU6IDMsXHJcbiAgICAgICAgcHJvdGVjdDogITEsXHJcbiAgICAgICAgbW9kYWw6ICExLFxyXG4gICAgICAgIGltYWdlOiB7IHByZWxvYWQ6ICExIH0sXHJcbiAgICAgICAgYWpheDogeyBzZXR0aW5nczogeyBkYXRhOiB7IGZhbmN5Ym94OiAhMCB9IH0gfSxcclxuICAgICAgICBpZnJhbWU6IHtcclxuICAgICAgICAgIHRwbDpcclxuICAgICAgICAgICAgJzxpZnJhbWUgaWQ9XCJmYW5jeWJveC1mcmFtZXtybmR9XCIgbmFtZT1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBjbGFzcz1cImZhbmN5Ym94LWlmcmFtZVwiIGFsbG93ZnVsbHNjcmVlbj1cImFsbG93ZnVsbHNjcmVlblwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIiBzcmM9XCJcIj48L2lmcmFtZT4nLFxyXG4gICAgICAgICAgcHJlbG9hZDogITAsXHJcbiAgICAgICAgICBjc3M6IHt9LFxyXG4gICAgICAgICAgYXR0cjogeyBzY3JvbGxpbmc6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aWRlbzoge1xyXG4gICAgICAgICAgdHBsOlxyXG4gICAgICAgICAgICAnPHZpZGVvIGNsYXNzPVwiZmFuY3lib3gtdmlkZW9cIiBjb250cm9scyBjb250cm9sc0xpc3Q9XCJub2Rvd25sb2FkXCIgcG9zdGVyPVwie3twb3N0ZXJ9fVwiPjxzb3VyY2Ugc3JjPVwie3tzcmN9fVwiIHR5cGU9XCJ7e2Zvcm1hdH19XCIgLz5Tb3JyeSwgeW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IGVtYmVkZGVkIHZpZGVvcywgPGEgaHJlZj1cInt7c3JjfX1cIj5kb3dubG9hZDwvYT4gYW5kIHdhdGNoIHdpdGggeW91ciBmYXZvcml0ZSB2aWRlbyBwbGF5ZXIhPC92aWRlbz4nLFxyXG4gICAgICAgICAgZm9ybWF0OiBcIlwiLFxyXG4gICAgICAgICAgYXV0b1N0YXJ0OiAhMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRUeXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uRWZmZWN0OiBcInpvb21cIixcclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzY2LFxyXG4gICAgICAgIHpvb21PcGFjaXR5OiBcImF1dG9cIixcclxuICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiBcImZhZGVcIixcclxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDM2NixcclxuICAgICAgICBzbGlkZUNsYXNzOiBcIlwiLFxyXG4gICAgICAgIGJhc2VDbGFzczogXCJcIixcclxuICAgICAgICBiYXNlVHBsOlxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgdGFiaW5kZXg9XCItMVwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1iZ1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbm5lclwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbmZvYmFyXCI+PHNwYW4gZGF0YS1mYW5jeWJveC1pbmRleD48L3NwYW4+Jm5ic3A7LyZuYnNwOzxzcGFuIGRhdGEtZmFuY3lib3gtY291bnQ+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC10b29sYmFyXCI+e3tidXR0b25zfX08L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtbmF2aWdhdGlvblwiPnt7YXJyb3dzfX08L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtc3RhZ2VcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtY2FwdGlvblwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1jYXB0aW9uX19ib2R5XCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JyxcclxuICAgICAgICBzcGlubmVyVHBsOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWxvYWRpbmdcIj48L2Rpdj4nLFxyXG4gICAgICAgIGVycm9yVHBsOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWVycm9yXCI+PHA+e3tFUlJPUn19PC9wPjwvZGl2PicsXHJcbiAgICAgICAgYnRuVHBsOiB7XHJcbiAgICAgICAgICBkb3dubG9hZDpcclxuICAgICAgICAgICAgJzxhIGRvd25sb2FkIGRhdGEtZmFuY3lib3gtZG93bmxvYWQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1kb3dubG9hZFwiIHRpdGxlPVwie3tET1dOTE9BRH19XCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjYyIDE3LjA5VjE5SDUuMzh2LTEuOTF6bS0yLjk3LTYuOTZMMTcgMTEuNDVsLTUgNC44Ny01LTQuODcgMS4zNi0xLjMyIDIuNjggMi42NFY1aDEuOTJ2Ny43N3pcIi8+PC9zdmc+PC9hPicsXHJcbiAgICAgICAgICB6b29tOlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXpvb20gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS16b29tXCIgdGl0bGU9XCJ7e1pPT019fVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjcgMTcuM2wtMy0zYTUuOSA1LjkgMCAwIDAtLjYtNy42IDUuOSA1LjkgMCAwIDAtOC40IDAgNS45IDUuOSAwIDAgMCAwIDguNCA1LjkgNS45IDAgMCAwIDcuNy43bDMgM2ExIDEgMCAwIDAgMS4zIDBjLjQtLjUuNC0xIDAtMS41ek04LjEgMTMuOGE0IDQgMCAwIDEgMC01LjcgNCA0IDAgMCAxIDUuNyAwIDQgNCAwIDAgMSAwIDUuNyA0IDQgMCAwIDEtNS43IDB6XCIvPjwvc3ZnPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICBjbG9zZTpcclxuICAgICAgICAgICAgJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxMC42TDYuNiA1LjIgNS4yIDYuNmw1LjQgNS40LTUuNCA1LjQgMS40IDEuNCA1LjQtNS40IDUuNCA1LjQgMS40LTEuNC01LjQtNS40IDUuNC01LjQtMS40LTEuNC01LjQgNS40elwiLz48L3N2Zz48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgYXJyb3dMZWZ0OlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXByZXYgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19sZWZ0XCIgdGl0bGU9XCJ7e1BSRVZ9fVwiPjxkaXY+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTEuMjggMTUuN2wtMS4zNCAxLjM3TDUgMTJsNC45NC01LjA3IDEuMzQgMS4zOC0yLjY4IDIuNzJIMTl2MS45NEg4LjZ6XCIvPjwvc3ZnPjwvZGl2PjwvYnV0dG9uPicsXHJcbiAgICAgICAgICBhcnJvd1JpZ2h0OlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LW5leHQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1hcnJvd19yaWdodFwiIHRpdGxlPVwie3tORVhUfX1cIj48ZGl2PjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQgMTIuOTdsLTIuNjggMi43MiAxLjM0IDEuMzhMMTkgMTJsLTQuOTQtNS4wNy0xLjM0IDEuMzggMi42OCAyLjcySDV2MS45NHpcIi8+PC9zdmc+PC9kaXY+PC9idXR0b24+JyxcclxuICAgICAgICAgIHNtYWxsQnRuOlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1jbG9zZS1zbWFsbFwiIHRpdGxlPVwie3tDTE9TRX19XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjFcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMyAxMmw1LTUtMS0xLTUgNS01LTUtMSAxIDUgNS01IDUgMSAxIDUtNSA1IDUgMS0xelwiLz48L3N2Zz48L2J1dHRvbj4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50RWw6IFwiYm9keVwiLFxyXG4gICAgICAgIGhpZGVTY3JvbGxiYXI6ICEwLFxyXG4gICAgICAgIGF1dG9Gb2N1czogITAsXHJcbiAgICAgICAgYmFja0ZvY3VzOiAhMCxcclxuICAgICAgICB0cmFwRm9jdXM6ICEwLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IHsgYXV0b1N0YXJ0OiAhMSB9LFxyXG4gICAgICAgIHRvdWNoOiB7IHZlcnRpY2FsOiAhMCwgbW9tZW50dW06ICEwIH0sXHJcbiAgICAgICAgaGFzaDogbnVsbCxcclxuICAgICAgICBtZWRpYToge30sXHJcbiAgICAgICAgc2xpZGVTaG93OiB7IGF1dG9TdGFydDogITEsIHNwZWVkOiAzZTMgfSxcclxuICAgICAgICB0aHVtYnM6IHtcclxuICAgICAgICAgIGF1dG9TdGFydDogITEsXHJcbiAgICAgICAgICBoaWRlT25DbG9zZTogITAsXHJcbiAgICAgICAgICBwYXJlbnRFbDogXCIuZmFuY3lib3gtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICBheGlzOiBcInlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdoZWVsOiBcImF1dG9cIixcclxuICAgICAgICBvbkluaXQ6IG4ubm9vcCxcclxuICAgICAgICBiZWZvcmVMb2FkOiBuLm5vb3AsXHJcbiAgICAgICAgYWZ0ZXJMb2FkOiBuLm5vb3AsXHJcbiAgICAgICAgYmVmb3JlU2hvdzogbi5ub29wLFxyXG4gICAgICAgIGFmdGVyU2hvdzogbi5ub29wLFxyXG4gICAgICAgIGJlZm9yZUNsb3NlOiBuLm5vb3AsXHJcbiAgICAgICAgYWZ0ZXJDbG9zZTogbi5ub29wLFxyXG4gICAgICAgIG9uQWN0aXZhdGU6IG4ubm9vcCxcclxuICAgICAgICBvbkRlYWN0aXZhdGU6IG4ubm9vcCxcclxuICAgICAgICBjbGlja0NvbnRlbnQ6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJpbWFnZVwiID09PSB0LnR5cGUgJiYgXCJ6b29tXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGlja1NsaWRlOiBcImNsb3NlXCIsXHJcbiAgICAgICAgY2xpY2tPdXRzaWRlOiBcImNsb3NlXCIsXHJcbiAgICAgICAgZGJsY2xpY2tDb250ZW50OiAhMSxcclxuICAgICAgICBkYmxjbGlja1NsaWRlOiAhMSxcclxuICAgICAgICBkYmxjbGlja091dHNpZGU6ICExLFxyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgcHJldmVudENhcHRpb25PdmVybGFwOiAhMSxcclxuICAgICAgICAgIGlkbGVUaW1lOiAhMSxcclxuICAgICAgICAgIGNsaWNrQ29udGVudDogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW1hZ2VcIiA9PT0gdC50eXBlICYmIFwidG9nZ2xlQ29udHJvbHNcIjtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbGlja1NsaWRlOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbWFnZVwiID09PSB0LnR5cGUgPyBcInRvZ2dsZUNvbnRyb2xzXCIgOiBcImNsb3NlXCI7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGJsY2xpY2tDb250ZW50OiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbWFnZVwiID09PSB0LnR5cGUgJiYgXCJ6b29tXCI7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGJsY2xpY2tTbGlkZTogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW1hZ2VcIiA9PT0gdC50eXBlICYmIFwiem9vbVwiO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmc6IFwiZW5cIixcclxuICAgICAgICBpMThuOiB7XHJcbiAgICAgICAgICBlbjoge1xyXG4gICAgICAgICAgICBDTE9TRTogXCJDbG9zZVwiLFxyXG4gICAgICAgICAgICBORVhUOiBcIk5leHRcIixcclxuICAgICAgICAgICAgUFJFVjogXCJQcmV2aW91c1wiLFxyXG4gICAgICAgICAgICBFUlJPUjpcclxuICAgICAgICAgICAgICBcIlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLiA8YnIvPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICAgICAgICBQTEFZX1NUQVJUOiBcIlN0YXJ0IHNsaWRlc2hvd1wiLFxyXG4gICAgICAgICAgICBQTEFZX1NUT1A6IFwiUGF1c2Ugc2xpZGVzaG93XCIsXHJcbiAgICAgICAgICAgIEZVTExfU0NSRUVOOiBcIkZ1bGwgc2NyZWVuXCIsXHJcbiAgICAgICAgICAgIFRIVU1CUzogXCJUaHVtYm5haWxzXCIsXHJcbiAgICAgICAgICAgIERPV05MT0FEOiBcIkRvd25sb2FkXCIsXHJcbiAgICAgICAgICAgIFNIQVJFOiBcIlNoYXJlXCIsXHJcbiAgICAgICAgICAgIFpPT006IFwiWm9vbVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlOiB7XHJcbiAgICAgICAgICAgIENMT1NFOiBcIlNjaGxpZSZzemxpZztlblwiLFxyXG4gICAgICAgICAgICBORVhUOiBcIldlaXRlclwiLFxyXG4gICAgICAgICAgICBQUkVWOiBcIlp1ciZ1dW1sO2NrXCIsXHJcbiAgICAgICAgICAgIEVSUk9SOlxyXG4gICAgICAgICAgICAgIFwiRGllIGFuZ2Vmb3JkZXJ0ZW4gRGF0ZW4ga29ubnRlbiBuaWNodCBnZWxhZGVuIHdlcmRlbi4gPGJyLz4gQml0dGUgdmVyc3VjaGVuIFNpZSBlcyBzcCZhdW1sO3RlciBub2NobWFsLlwiLFxyXG4gICAgICAgICAgICBQTEFZX1NUQVJUOiBcIkRpYXNjaGF1IHN0YXJ0ZW5cIixcclxuICAgICAgICAgICAgUExBWV9TVE9QOiBcIkRpYXNjaGF1IGJlZW5kZW5cIixcclxuICAgICAgICAgICAgRlVMTF9TQ1JFRU46IFwiVm9sbGJpbGRcIixcclxuICAgICAgICAgICAgVEhVTUJTOiBcIlZvcnNjaGF1YmlsZGVyXCIsXHJcbiAgICAgICAgICAgIERPV05MT0FEOiBcIkhlcnVudGVybGFkZW5cIixcclxuICAgICAgICAgICAgU0hBUkU6IFwiVGVpbGVuXCIsXHJcbiAgICAgICAgICAgIFpPT006IFwiVmVyZ3Imb3VtbDsmc3psaWc7ZXJuXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHMgPSBuKHQpLFxyXG4gICAgICByID0gbihlKSxcclxuICAgICAgYyA9IDAsXHJcbiAgICAgIGwgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0ICYmIHQuaGFzT3duUHJvcGVydHkgJiYgdCBpbnN0YW5jZW9mIG47XHJcbiAgICAgIH0sXHJcbiAgICAgIGQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgIHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICB0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LnNldFRpbWVvdXQoZSwgMWUzIC8gNjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pKCksXHJcbiAgICAgIHUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB0LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICB0LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICB0Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICB0Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdC5jbGVhclRpbWVvdXQoZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSkoKSxcclxuICAgICAgZiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQsXHJcbiAgICAgICAgICBuID0gZS5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksXHJcbiAgICAgICAgICBvID0ge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgICAgICAgT1RyYW5zaXRpb246IFwib1RyYW5zaXRpb25FbmRcIixcclxuICAgICAgICAgICAgTW96VHJhbnNpdGlvbjogXCJ0cmFuc2l0aW9uZW5kXCIsXHJcbiAgICAgICAgICAgIFdlYmtpdFRyYW5zaXRpb246IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHQgaW4gbykgaWYgKHZvaWQgMCAhPT0gbi5zdHlsZVt0XSkgcmV0dXJuIG9bdF07XHJcbiAgICAgICAgcmV0dXJuIFwidHJhbnNpdGlvbmVuZFwiO1xyXG4gICAgICB9KSgpLFxyXG4gICAgICBwID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCAmJiB0WzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgfSxcclxuICAgICAgaCA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIG8gPSBuLmV4dGVuZCghMCwge30sIHQsIGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBuLmVhY2goZSwgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgbi5pc0FycmF5KGUpICYmIChvW3RdID0gZSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIG9cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBnID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbywgaTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgISghdCB8fCB0Lm93bmVyRG9jdW1lbnQgIT09IGUpICYmXHJcbiAgICAgICAgICAobihcIi5mYW5jeWJveC1jb250YWluZXJcIikuY3NzKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpLFxyXG4gICAgICAgICAgKG8gPSB7XHJcbiAgICAgICAgICAgIHg6IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHQub2Zmc2V0V2lkdGggLyAyLFxyXG4gICAgICAgICAgICB5OiB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHQub2Zmc2V0SGVpZ2h0IC8gMixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKGkgPSBlLmVsZW1lbnRGcm9tUG9pbnQoby54LCBvLnkpID09PSB0KSxcclxuICAgICAgICAgIG4oXCIuZmFuY3lib3gtY29udGFpbmVyXCIpLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpLFxyXG4gICAgICAgICAgaSlcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBiID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgKGkub3B0cyA9IGgoeyBpbmRleDogbyB9LCBuLmZhbmN5Ym94LmRlZmF1bHRzKSksXHJcbiAgICAgICAgICBuLmlzUGxhaW5PYmplY3QoZSkgJiYgKGkub3B0cyA9IGgoaS5vcHRzLCBlKSksXHJcbiAgICAgICAgICBuLmZhbmN5Ym94LmlzTW9iaWxlICYmIChpLm9wdHMgPSBoKGkub3B0cywgaS5vcHRzLm1vYmlsZSkpLFxyXG4gICAgICAgICAgKGkuaWQgPSBpLm9wdHMuaWQgfHwgKytjKSxcclxuICAgICAgICAgIChpLmN1cnJJbmRleCA9IHBhcnNlSW50KGkub3B0cy5pbmRleCwgMTApIHx8IDApLFxyXG4gICAgICAgICAgKGkucHJldkluZGV4ID0gbnVsbCksXHJcbiAgICAgICAgICAoaS5wcmV2UG9zID0gbnVsbCksXHJcbiAgICAgICAgICAoaS5jdXJyUG9zID0gMCksXHJcbiAgICAgICAgICAoaS5maXJzdFJ1biA9ICEwKSxcclxuICAgICAgICAgIChpLmdyb3VwID0gW10pLFxyXG4gICAgICAgICAgKGkuc2xpZGVzID0ge30pLFxyXG4gICAgICAgICAgaS5hZGRDb250ZW50KHQpLFxyXG4gICAgICAgICAgaS5ncm91cC5sZW5ndGggJiYgaS5pbml0KCk7XHJcbiAgICAgIH07XHJcbiAgICBuLmV4dGVuZChiLnByb3RvdHlwZSwge1xyXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSA9IHRoaXMsXHJcbiAgICAgICAgICBzID0gYS5ncm91cFthLmN1cnJJbmRleF0sXHJcbiAgICAgICAgICByID0gcy5vcHRzO1xyXG4gICAgICAgIHIuY2xvc2VFeGlzdGluZyAmJiBuLmZhbmN5Ym94LmNsb3NlKCEwKSxcclxuICAgICAgICAgIG4oXCJib2R5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYWN0aXZlXCIpLFxyXG4gICAgICAgICAgIW4uZmFuY3lib3guZ2V0SW5zdGFuY2UoKSAmJlxyXG4gICAgICAgICAgICAhMSAhPT0gci5oaWRlU2Nyb2xsYmFyICYmXHJcbiAgICAgICAgICAgICFuLmZhbmN5Ym94LmlzTW9iaWxlICYmXHJcbiAgICAgICAgICAgIGUuYm9keS5zY3JvbGxIZWlnaHQgPiB0LmlubmVySGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIChuKFwiaGVhZFwiKS5hcHBlbmQoXCJcIiksXHJcbiAgICAgICAgICAgIG4oXCJib2R5XCIpLmFkZENsYXNzKFwiY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFyXCIpKSxcclxuICAgICAgICAgIChpID0gXCJcIiksXHJcbiAgICAgICAgICBuLmVhY2goci5idXR0b25zLCBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpICs9IHIuYnRuVHBsW2VdIHx8IFwiXCI7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIChvID0gbihcclxuICAgICAgICAgICAgYS50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAgICByLmJhc2VUcGxcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3tidXR0b25zfX1cIiwgaSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwie3thcnJvd3N9fVwiLCByLmJ0blRwbC5hcnJvd0xlZnQgKyByLmJ0blRwbC5hcnJvd1JpZ2h0KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJmYW5jeWJveC1jb250YWluZXItXCIgKyBhLmlkKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3Moci5iYXNlQ2xhc3MpXHJcbiAgICAgICAgICAgIC5kYXRhKFwiRmFuY3lCb3hcIiwgYSlcclxuICAgICAgICAgICAgLmFwcGVuZFRvKHIucGFyZW50RWwpKSxcclxuICAgICAgICAgIChhLiRyZWZzID0geyBjb250YWluZXI6IG8gfSksXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiYmdcIixcclxuICAgICAgICAgICAgXCJpbm5lclwiLFxyXG4gICAgICAgICAgICBcImluZm9iYXJcIixcclxuICAgICAgICAgICAgXCJ0b29sYmFyXCIsXHJcbiAgICAgICAgICAgIFwic3RhZ2VcIixcclxuICAgICAgICAgICAgXCJjYXB0aW9uXCIsXHJcbiAgICAgICAgICAgIFwibmF2aWdhdGlvblwiLFxyXG4gICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIGEuJHJlZnNbdF0gPSBvLmZpbmQoXCIuZmFuY3lib3gtXCIgKyB0KTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYS50cmlnZ2VyKFwib25Jbml0XCIpLFxyXG4gICAgICAgICAgYS5hY3RpdmF0ZSgpLFxyXG4gICAgICAgICAgYS5qdW1wVG8oYS5jdXJySW5kZXgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIG4gPSB0Lm9wdHMuaTE4blt0Lm9wdHMubGFuZ10gfHwgdC5vcHRzLmkxOG4uZW47XHJcbiAgICAgICAgcmV0dXJuIGUucmVwbGFjZSgvXFx7XFx7KFxcdyspXFx9XFx9L2csIGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSBuW2VdID8gdCA6IG5bZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZENvbnRlbnQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBvID0gdGhpcyxcclxuICAgICAgICAgIGkgPSBuLm1ha2VBcnJheSh0KTtcclxuICAgICAgICBuLmVhY2goaSwgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICBhLFxyXG4gICAgICAgICAgICBzLFxyXG4gICAgICAgICAgICByLFxyXG4gICAgICAgICAgICBjLFxyXG4gICAgICAgICAgICBsID0ge30sXHJcbiAgICAgICAgICAgIGQgPSB7fTtcclxuICAgICAgICAgIG4uaXNQbGFpbk9iamVjdChlKVxyXG4gICAgICAgICAgICA/ICgobCA9IGUpLCAoZCA9IGUub3B0cyB8fCBlKSlcclxuICAgICAgICAgICAgOiBcIm9iamVjdFwiID09PSBuLnR5cGUoZSkgJiYgbihlKS5sZW5ndGhcclxuICAgICAgICAgICAgPyAoKGkgPSBuKGUpKSxcclxuICAgICAgICAgICAgICAoZCA9IGkuZGF0YSgpIHx8IHt9KSxcclxuICAgICAgICAgICAgICAoZCA9IG4uZXh0ZW5kKCEwLCB7fSwgZCwgZC5vcHRpb25zKSksXHJcbiAgICAgICAgICAgICAgKGQuJG9yaWcgPSBpKSxcclxuICAgICAgICAgICAgICAobC5zcmMgPSBvLm9wdHMuc3JjIHx8IGQuc3JjIHx8IGkuYXR0cihcImhyZWZcIikpLFxyXG4gICAgICAgICAgICAgIGwudHlwZSB8fCBsLnNyYyB8fCAoKGwudHlwZSA9IFwiaW5saW5lXCIpLCAobC5zcmMgPSBlKSkpXHJcbiAgICAgICAgICAgIDogKGwgPSB7IHR5cGU6IFwiaHRtbFwiLCBzcmM6IGUgKyBcIlwiIH0pLFxyXG4gICAgICAgICAgICAobC5vcHRzID0gbi5leHRlbmQoITAsIHt9LCBvLm9wdHMsIGQpKSxcclxuICAgICAgICAgICAgbi5pc0FycmF5KGQuYnV0dG9ucykgJiYgKGwub3B0cy5idXR0b25zID0gZC5idXR0b25zKSxcclxuICAgICAgICAgICAgbi5mYW5jeWJveC5pc01vYmlsZSAmJlxyXG4gICAgICAgICAgICAgIGwub3B0cy5tb2JpbGUgJiZcclxuICAgICAgICAgICAgICAobC5vcHRzID0gaChsLm9wdHMsIGwub3B0cy5tb2JpbGUpKSxcclxuICAgICAgICAgICAgKGEgPSBsLnR5cGUgfHwgbC5vcHRzLnR5cGUpLFxyXG4gICAgICAgICAgICAociA9IGwuc3JjIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAhYSAmJlxyXG4gICAgICAgICAgICAgIHIgJiZcclxuICAgICAgICAgICAgICAoKHMgPSByLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3Z8d2VibSkoKFxcP3wjKS4qKT8kL2kpKVxyXG4gICAgICAgICAgICAgICAgPyAoKGEgPSBcInZpZGVvXCIpLFxyXG4gICAgICAgICAgICAgICAgICBsLm9wdHMudmlkZW8uZm9ybWF0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGwub3B0cy52aWRlby5mb3JtYXQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWRlby9cIiArIChcIm9ndlwiID09PSBzWzFdID8gXCJvZ2dcIiA6IHNbMV0pKSlcclxuICAgICAgICAgICAgICAgIDogci5tYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAvKF5kYXRhOmltYWdlXFwvW2EtejAtOStcXC89XSosKXwoXFwuKGpwKGV8Z3xlZyl8Z2lmfHBuZ3xibXB8d2VicHxzdmd8aWNvKSgoXFw/fCMpLiopPyQpL2lcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyAoYSA9IFwiaW1hZ2VcIilcclxuICAgICAgICAgICAgICAgIDogci5tYXRjaCgvXFwuKHBkZikoKFxcP3wjKS4qKT8kL2kpXHJcbiAgICAgICAgICAgICAgICA/ICgoYSA9IFwiaWZyYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAobCA9IG4uZXh0ZW5kKCEwLCBsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwicGRmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyBpZnJhbWU6IHsgcHJlbG9hZDogITEgfSB9LFxyXG4gICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICA6IFwiI1wiID09PSByLmNoYXJBdCgwKSAmJiAoYSA9IFwiaW5saW5lXCIpKSxcclxuICAgICAgICAgICAgYSA/IChsLnR5cGUgPSBhKSA6IG8udHJpZ2dlcihcIm9iamVjdE5lZWRzVHlwZVwiLCBsKSxcclxuICAgICAgICAgICAgbC5jb250ZW50VHlwZSB8fFxyXG4gICAgICAgICAgICAgIChsLmNvbnRlbnRUeXBlID1cclxuICAgICAgICAgICAgICAgIG4uaW5BcnJheShsLnR5cGUsIFtcImh0bWxcIiwgXCJpbmxpbmVcIiwgXCJhamF4XCJdKSA+IC0xXHJcbiAgICAgICAgICAgICAgICAgID8gXCJodG1sXCJcclxuICAgICAgICAgICAgICAgICAgOiBsLnR5cGUpLFxyXG4gICAgICAgICAgICAobC5pbmRleCA9IG8uZ3JvdXAubGVuZ3RoKSxcclxuICAgICAgICAgICAgXCJhdXRvXCIgPT0gbC5vcHRzLnNtYWxsQnRuICYmXHJcbiAgICAgICAgICAgICAgKGwub3B0cy5zbWFsbEJ0biA9XHJcbiAgICAgICAgICAgICAgICBuLmluQXJyYXkobC50eXBlLCBbXCJodG1sXCIsIFwiaW5saW5lXCIsIFwiYWpheFwiXSkgPiAtMSksXHJcbiAgICAgICAgICAgIFwiYXV0b1wiID09PSBsLm9wdHMudG9vbGJhciAmJiAobC5vcHRzLnRvb2xiYXIgPSAhbC5vcHRzLnNtYWxsQnRuKSxcclxuICAgICAgICAgICAgKGwuJHRodW1iID0gbC5vcHRzLiR0aHVtYiB8fCBudWxsKSxcclxuICAgICAgICAgICAgbC5vcHRzLiR0cmlnZ2VyICYmXHJcbiAgICAgICAgICAgICAgbC5pbmRleCA9PT0gby5vcHRzLmluZGV4ICYmXHJcbiAgICAgICAgICAgICAgKChsLiR0aHVtYiA9IGwub3B0cy4kdHJpZ2dlci5maW5kKFwiaW1nOmZpcnN0XCIpKSxcclxuICAgICAgICAgICAgICBsLiR0aHVtYi5sZW5ndGggJiYgKGwub3B0cy4kb3JpZyA9IGwub3B0cy4kdHJpZ2dlcikpLFxyXG4gICAgICAgICAgICAobC4kdGh1bWIgJiYgbC4kdGh1bWIubGVuZ3RoKSB8fFxyXG4gICAgICAgICAgICAgICFsLm9wdHMuJG9yaWcgfHxcclxuICAgICAgICAgICAgICAobC4kdGh1bWIgPSBsLm9wdHMuJG9yaWcuZmluZChcImltZzpmaXJzdFwiKSksXHJcbiAgICAgICAgICAgIGwuJHRodW1iICYmICFsLiR0aHVtYi5sZW5ndGggJiYgKGwuJHRodW1iID0gbnVsbCksXHJcbiAgICAgICAgICAgIChsLnRodW1iID0gbC5vcHRzLnRodW1iIHx8IChsLiR0aHVtYiA/IGwuJHRodW1iWzBdLnNyYyA6IG51bGwpKSxcclxuICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSBuLnR5cGUobC5vcHRzLmNhcHRpb24pICYmXHJcbiAgICAgICAgICAgICAgKGwub3B0cy5jYXB0aW9uID0gbC5vcHRzLmNhcHRpb24uYXBwbHkoZSwgW28sIGxdKSksXHJcbiAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gbi50eXBlKG8ub3B0cy5jYXB0aW9uKSAmJlxyXG4gICAgICAgICAgICAgIChsLm9wdHMuY2FwdGlvbiA9IG8ub3B0cy5jYXB0aW9uLmFwcGx5KGUsIFtvLCBsXSkpLFxyXG4gICAgICAgICAgICBsLm9wdHMuY2FwdGlvbiBpbnN0YW5jZW9mIG4gfHxcclxuICAgICAgICAgICAgICAobC5vcHRzLmNhcHRpb24gPVxyXG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBsLm9wdHMuY2FwdGlvbiA/IFwiXCIgOiBsLm9wdHMuY2FwdGlvbiArIFwiXCIpLFxyXG4gICAgICAgICAgICBcImFqYXhcIiA9PT0gbC50eXBlICYmXHJcbiAgICAgICAgICAgICAgKChjID0gci5zcGxpdCgvXFxzKy8sIDIpKSxcclxuICAgICAgICAgICAgICBjLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgICAgICgobC5zcmMgPSBjLnNoaWZ0KCkpLCAobC5vcHRzLmZpbHRlciA9IGMuc2hpZnQoKSkpKSxcclxuICAgICAgICAgICAgbC5vcHRzLm1vZGFsICYmXHJcbiAgICAgICAgICAgICAgKGwub3B0cyA9IG4uZXh0ZW5kKCEwLCBsLm9wdHMsIHtcclxuICAgICAgICAgICAgICAgIHRyYXBGb2N1czogITAsXHJcbiAgICAgICAgICAgICAgICBpbmZvYmFyOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogMCxcclxuICAgICAgICAgICAgICAgIHNtYWxsQnRuOiAwLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVNob3c6IDAsXHJcbiAgICAgICAgICAgICAgICBmdWxsU2NyZWVuOiAwLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJzOiAwLFxyXG4gICAgICAgICAgICAgICAgdG91Y2g6IDAsXHJcbiAgICAgICAgICAgICAgICBjbGlja0NvbnRlbnQ6ICExLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tTbGlkZTogITEsXHJcbiAgICAgICAgICAgICAgICBjbGlja091dHNpZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgZGJsY2xpY2tDb250ZW50OiAhMSxcclxuICAgICAgICAgICAgICAgIGRibGNsaWNrU2xpZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgZGJsY2xpY2tPdXRzaWRlOiAhMSxcclxuICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIG8uZ3JvdXAucHVzaChsKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAgIE9iamVjdC5rZXlzKG8uc2xpZGVzKS5sZW5ndGggJiZcclxuICAgICAgICAgICAgKG8udXBkYXRlQ29udHJvbHMoKSxcclxuICAgICAgICAgICAgKGUgPSBvLlRodW1icykgJiYgZS5pc0FjdGl2ZSAmJiAoZS5jcmVhdGUoKSwgZS5mb2N1cygpKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICBlLnJlbW92ZUV2ZW50cygpLFxyXG4gICAgICAgICAgZS4kcmVmcy5jb250YWluZXJcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2suZmItY2xvc2VcIiwgXCJbZGF0YS1mYW5jeWJveC1jbG9zZV1cIiwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICB0LnN0b3BQcm9wYWdhdGlvbigpLCB0LnByZXZlbnREZWZhdWx0KCksIGUuY2xvc2UodCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcclxuICAgICAgICAgICAgICBcInRvdWNoc3RhcnQuZmItcHJldiBjbGljay5mYi1wcmV2XCIsXHJcbiAgICAgICAgICAgICAgXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiLFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB0LnN0b3BQcm9wYWdhdGlvbigpLCB0LnByZXZlbnREZWZhdWx0KCksIGUucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9uKFxyXG4gICAgICAgICAgICAgIFwidG91Y2hzdGFydC5mYi1uZXh0IGNsaWNrLmZiLW5leHRcIixcclxuICAgICAgICAgICAgICBcIltkYXRhLWZhbmN5Ym94LW5leHRdXCIsXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuc3RvcFByb3BhZ2F0aW9uKCksIHQucHJldmVudERlZmF1bHQoKSwgZS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrLmZiXCIsIFwiW2RhdGEtZmFuY3lib3gtem9vbV1cIiwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICBlW2UuaXNTY2FsZWREb3duKCkgPyBcInNjYWxlVG9BY3R1YWxcIiA6IFwic2NhbGVUb0ZpdFwiXSgpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIHMub24oXCJvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmJcIiwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdCAmJiB0Lm9yaWdpbmFsRXZlbnQgJiYgXCJyZXNpemVcIiA9PT0gdC5vcmlnaW5hbEV2ZW50LnR5cGVcclxuICAgICAgICAgICAgICA/IChlLnJlcXVlc3RJZCAmJiB1KGUucmVxdWVzdElkKSxcclxuICAgICAgICAgICAgICAgIChlLnJlcXVlc3RJZCA9IGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBlLnVwZGF0ZSh0KTtcclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICAgICAgICA6IChlLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgXCJpZnJhbWVcIiA9PT0gZS5jdXJyZW50LnR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgZS4kcmVmcy5zdGFnZS5oaWRlKCksXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS4kcmVmcy5zdGFnZS5zaG93KCksIGUudXBkYXRlKHQpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBuLmZhbmN5Ym94LmlzTW9iaWxlID8gNjAwIDogMjUwXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgci5vbihcImtleWRvd24uZmJcIiwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSBuLmZhbmN5Ym94ID8gbi5mYW5jeWJveC5nZXRJbnN0YW5jZSgpIDogbnVsbCxcclxuICAgICAgICAgICAgICBpID0gby5jdXJyZW50LFxyXG4gICAgICAgICAgICAgIGEgPSB0LmtleUNvZGUgfHwgdC53aGljaDtcclxuICAgICAgICAgICAgaWYgKDkgPT0gYSkgcmV0dXJuIHZvaWQgKGkub3B0cy50cmFwRm9jdXMgJiYgZS5mb2N1cyh0KSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgIWkub3B0cy5rZXlib2FyZCB8fFxyXG4gICAgICAgICAgICAgICAgdC5jdHJsS2V5IHx8XHJcbiAgICAgICAgICAgICAgICB0LmFsdEtleSB8fFxyXG4gICAgICAgICAgICAgICAgdC5zaGlmdEtleSB8fFxyXG4gICAgICAgICAgICAgICAgbih0LnRhcmdldCkuaXMoXCJpbnB1dCx0ZXh0YXJlYSx2aWRlbyxhdWRpbyxzZWxlY3RcIilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gOCA9PT0gYSB8fCAyNyA9PT0gYVxyXG4gICAgICAgICAgICAgICAgPyAodC5wcmV2ZW50RGVmYXVsdCgpLCB2b2lkIGUuY2xvc2UodCkpXHJcbiAgICAgICAgICAgICAgICA6IDM3ID09PSBhIHx8IDM4ID09PSBhXHJcbiAgICAgICAgICAgICAgICA/ICh0LnByZXZlbnREZWZhdWx0KCksIHZvaWQgZS5wcmV2aW91cygpKVxyXG4gICAgICAgICAgICAgICAgOiAzOSA9PT0gYSB8fCA0MCA9PT0gYVxyXG4gICAgICAgICAgICAgICAgPyAodC5wcmV2ZW50RGVmYXVsdCgpLCB2b2lkIGUubmV4dCgpKVxyXG4gICAgICAgICAgICAgICAgOiB2b2lkIGUudHJpZ2dlcihcImFmdGVyS2V5ZG93blwiLCB0LCBhKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgZS5ncm91cFtlLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSAmJlxyXG4gICAgICAgICAgICAoKGUuaWRsZVNlY29uZHNDb3VudGVyID0gMCksXHJcbiAgICAgICAgICAgIHIub24oXHJcbiAgICAgICAgICAgICAgXCJtb3VzZW1vdmUuZmItaWRsZSBtb3VzZWxlYXZlLmZiLWlkbGUgbW91c2Vkb3duLmZiLWlkbGUgdG91Y2hzdGFydC5mYi1pZGxlIHRvdWNobW92ZS5mYi1pZGxlIHNjcm9sbC5mYi1pZGxlIGtleWRvd24uZmItaWRsZVwiLFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAoZS5pZGxlU2Vjb25kc0NvdW50ZXIgPSAwKSxcclxuICAgICAgICAgICAgICAgICAgZS5pc0lkbGUgJiYgZS5zaG93Q29udHJvbHMoKSxcclxuICAgICAgICAgICAgICAgICAgKGUuaXNJZGxlID0gITEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgKGUuaWRsZUludGVydmFsID0gdC5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgKytlLmlkbGVTZWNvbmRzQ291bnRlciA+PSBlLmdyb3VwW2UuY3VyckluZGV4XS5vcHRzLmlkbGVUaW1lICYmXHJcbiAgICAgICAgICAgICAgICAhZS5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICAgICAoKGUuaXNJZGxlID0gITApLCAoZS5pZGxlU2Vjb25kc0NvdW50ZXIgPSAwKSwgZS5oaWRlQ29udHJvbHMoKSk7XHJcbiAgICAgICAgICAgIH0sIDFlMykpKTtcclxuICAgICAgfSxcclxuICAgICAgcmVtb3ZlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIHMub2ZmKFwib3JpZW50YXRpb25jaGFuZ2UuZmIgcmVzaXplLmZiXCIpLFxyXG4gICAgICAgICAgci5vZmYoXCJrZXlkb3duLmZiIC5mYi1pZGxlXCIpLFxyXG4gICAgICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIub2ZmKFwiLmZiLWNsb3NlIC5mYi1wcmV2IC5mYi1uZXh0XCIpLFxyXG4gICAgICAgICAgZS5pZGxlSW50ZXJ2YWwgJiZcclxuICAgICAgICAgICAgKHQuY2xlYXJJbnRlcnZhbChlLmlkbGVJbnRlcnZhbCksIChlLmlkbGVJbnRlcnZhbCA9IG51bGwpKTtcclxuICAgICAgfSxcclxuICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanVtcFRvKHRoaXMuY3VyclBvcyAtIDEsIHQpO1xyXG4gICAgICB9LFxyXG4gICAgICBuZXh0OiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmp1bXBUbyh0aGlzLmN1cnJQb3MgKyAxLCB0KTtcclxuICAgICAgfSxcclxuICAgICAganVtcFRvOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBvLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBzLFxyXG4gICAgICAgICAgcixcclxuICAgICAgICAgIGMsXHJcbiAgICAgICAgICBsLFxyXG4gICAgICAgICAgZCxcclxuICAgICAgICAgIHUsXHJcbiAgICAgICAgICBmID0gdGhpcyxcclxuICAgICAgICAgIGggPSBmLmdyb3VwLmxlbmd0aDtcclxuICAgICAgICBpZiAoIShmLmlzRHJhZ2dpbmcgfHwgZi5pc0Nsb3NpbmcgfHwgKGYuaXNBbmltYXRpbmcgJiYgZi5maXJzdFJ1bikpKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICgodCA9IHBhcnNlSW50KHQsIDEwKSksXHJcbiAgICAgICAgICAgICEoYSA9IGYuY3VycmVudCA/IGYuY3VycmVudC5vcHRzLmxvb3AgOiBmLm9wdHMubG9vcCkgJiZcclxuICAgICAgICAgICAgICAodCA8IDAgfHwgdCA+PSBoKSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoKG8gPSBmLmZpcnN0UnVuID0gIU9iamVjdC5rZXlzKGYuc2xpZGVzKS5sZW5ndGgpLFxyXG4gICAgICAgICAgICAociA9IGYuY3VycmVudCksXHJcbiAgICAgICAgICAgIChmLnByZXZJbmRleCA9IGYuY3VyckluZGV4KSxcclxuICAgICAgICAgICAgKGYucHJldlBvcyA9IGYuY3VyclBvcyksXHJcbiAgICAgICAgICAgIChzID0gZi5jcmVhdGVTbGlkZSh0KSksXHJcbiAgICAgICAgICAgIGggPiAxICYmXHJcbiAgICAgICAgICAgICAgKChhIHx8IHMuaW5kZXggPCBoIC0gMSkgJiYgZi5jcmVhdGVTbGlkZSh0ICsgMSksXHJcbiAgICAgICAgICAgICAgKGEgfHwgcy5pbmRleCA+IDApICYmIGYuY3JlYXRlU2xpZGUodCAtIDEpKSxcclxuICAgICAgICAgICAgKGYuY3VycmVudCA9IHMpLFxyXG4gICAgICAgICAgICAoZi5jdXJySW5kZXggPSBzLmluZGV4KSxcclxuICAgICAgICAgICAgKGYuY3VyclBvcyA9IHMucG9zKSxcclxuICAgICAgICAgICAgZi50cmlnZ2VyKFwiYmVmb3JlU2hvd1wiLCBvKSxcclxuICAgICAgICAgICAgZi51cGRhdGVDb250cm9scygpLFxyXG4gICAgICAgICAgICAocy5mb3JjZWREdXJhdGlvbiA9IHZvaWQgMCksXHJcbiAgICAgICAgICAgIG4uaXNOdW1lcmljKGUpXHJcbiAgICAgICAgICAgICAgPyAocy5mb3JjZWREdXJhdGlvbiA9IGUpXHJcbiAgICAgICAgICAgICAgOiAoZSA9IHMub3B0c1tvID8gXCJhbmltYXRpb25EdXJhdGlvblwiIDogXCJ0cmFuc2l0aW9uRHVyYXRpb25cIl0pLFxyXG4gICAgICAgICAgICAoZSA9IHBhcnNlSW50KGUsIDEwKSksXHJcbiAgICAgICAgICAgIChpID0gZi5pc01vdmVkKHMpKSxcclxuICAgICAgICAgICAgcy4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKSxcclxuICAgICAgICAgICAgbylcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBzLm9wdHMuYW5pbWF0aW9uRWZmZWN0ICYmXHJcbiAgICAgICAgICAgICAgICBlICYmXHJcbiAgICAgICAgICAgICAgICBmLiRyZWZzLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGUgKyBcIm1zXCIpLFxyXG4gICAgICAgICAgICAgIGYuJHJlZnMuY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKS50cmlnZ2VyKFwiZm9jdXNcIiksXHJcbiAgICAgICAgICAgICAgZi5sb2FkU2xpZGUocyksXHJcbiAgICAgICAgICAgICAgdm9pZCBmLnByZWxvYWQoXCJpbWFnZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgKGMgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShyLiRzbGlkZSkpLFxyXG4gICAgICAgICAgICAobCA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGYuJHJlZnMuc3RhZ2UpKSxcclxuICAgICAgICAgICAgbi5lYWNoKGYuc2xpZGVzLCBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICAgIG4uZmFuY3lib3guc3RvcChlLiRzbGlkZSwgITApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgci5wb3MgIT09IHMucG9zICYmIChyLmlzQ29tcGxldGUgPSAhMSksXHJcbiAgICAgICAgICAgIHIuJHNsaWRlLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgIFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgID8gKCh1ID0gYy5sZWZ0IC0gKHIucG9zICogYy53aWR0aCArIHIucG9zICogci5vcHRzLmd1dHRlcikpLFxyXG4gICAgICAgICAgICAgICAgbi5lYWNoKGYuc2xpZGVzLCBmdW5jdGlvbiAodCwgbykge1xyXG4gICAgICAgICAgICAgICAgICBvLiRzbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvLnBvcyAqIGMud2lkdGggKyBvLnBvcyAqIG8ub3B0cy5ndXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKG8uJHNsaWRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGkgLSBsLmxlZnQgKyB1LFxyXG4gICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBvLnBvcyAhPT0gcy5wb3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG8uJHNsaWRlLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbmN5Ym94LXNsaWRlLS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG8ucG9zID4gcy5wb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgcChvLiRzbGlkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbi5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgby4kc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoby5wb3MgLSBzLnBvcykgKiBjLndpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoby5wb3MgLSBzLnBvcykgKiBvLm9wdHMuZ3V0dGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uJHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJcIiwgb3BhY2l0eTogXCJcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG8ucG9zID09PSBmLmN1cnJQb3MgJiYgZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICA6IGUgJiZcclxuICAgICAgICAgICAgICAgIHMub3B0cy50cmFuc2l0aW9uRWZmZWN0ICYmXHJcbiAgICAgICAgICAgICAgICAoKGQgPVxyXG4gICAgICAgICAgICAgICAgICBcImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICsgcy5vcHRzLnRyYW5zaXRpb25FZmZlY3QpLFxyXG4gICAgICAgICAgICAgICAgci4kc2xpZGUuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtc2xpZGUtLVwiICsgKHIucG9zID4gcy5wb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIilcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBuLmZhbmN5Ym94LmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgIHIuJHNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICBkLFxyXG4gICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgci4kc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAhMVxyXG4gICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIHMuaXNMb2FkZWQgPyBmLnJldmVhbENvbnRlbnQocykgOiBmLmxvYWRTbGlkZShzKSxcclxuICAgICAgICAgICAgZi5wcmVsb2FkKFwiaW1hZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVTbGlkZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSxcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpID0gdGhpcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgKG8gPSB0ICUgaS5ncm91cC5sZW5ndGgpLFxyXG4gICAgICAgICAgKG8gPSBvIDwgMCA/IGkuZ3JvdXAubGVuZ3RoICsgbyA6IG8pLFxyXG4gICAgICAgICAgIWkuc2xpZGVzW3RdICYmXHJcbiAgICAgICAgICAgIGkuZ3JvdXBbb10gJiZcclxuICAgICAgICAgICAgKChlID0gbignPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNsaWRlXCI+PC9kaXY+JykuYXBwZW5kVG8oXHJcbiAgICAgICAgICAgICAgaS4kcmVmcy5zdGFnZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGkuc2xpZGVzW3RdID0gbi5leHRlbmQoITAsIHt9LCBpLmdyb3VwW29dLCB7XHJcbiAgICAgICAgICAgICAgcG9zOiB0LFxyXG4gICAgICAgICAgICAgICRzbGlkZTogZSxcclxuICAgICAgICAgICAgICBpc0xvYWRlZDogITEsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgaS51cGRhdGVTbGlkZShpLnNsaWRlc1t0XSkpLFxyXG4gICAgICAgICAgaS5zbGlkZXNbdF1cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBzY2FsZVRvQWN0dWFsOiBmdW5jdGlvbiAodCwgZSwgbykge1xyXG4gICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHMsXHJcbiAgICAgICAgICByLFxyXG4gICAgICAgICAgYyxcclxuICAgICAgICAgIGwgPSB0aGlzLFxyXG4gICAgICAgICAgZCA9IGwuY3VycmVudCxcclxuICAgICAgICAgIHUgPSBkLiRjb250ZW50LFxyXG4gICAgICAgICAgZiA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGQuJHNsaWRlKS53aWR0aCxcclxuICAgICAgICAgIHAgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShkLiRzbGlkZSkuaGVpZ2h0LFxyXG4gICAgICAgICAgaCA9IGQud2lkdGgsXHJcbiAgICAgICAgICBnID0gZC5oZWlnaHQ7XHJcbiAgICAgICAgbC5pc0FuaW1hdGluZyB8fFxyXG4gICAgICAgICAgbC5pc01vdmVkKCkgfHxcclxuICAgICAgICAgICF1IHx8XHJcbiAgICAgICAgICBcImltYWdlXCIgIT0gZC50eXBlIHx8XHJcbiAgICAgICAgICAhZC5pc0xvYWRlZCB8fFxyXG4gICAgICAgICAgZC5oYXNFcnJvciB8fFxyXG4gICAgICAgICAgKChsLmlzQW5pbWF0aW5nID0gITApLFxyXG4gICAgICAgICAgbi5mYW5jeWJveC5zdG9wKHUpLFxyXG4gICAgICAgICAgKHQgPSB2b2lkIDAgPT09IHQgPyAwLjUgKiBmIDogdCksXHJcbiAgICAgICAgICAoZSA9IHZvaWQgMCA9PT0gZSA/IDAuNSAqIHAgOiBlKSxcclxuICAgICAgICAgIChpID0gbi5mYW5jeWJveC5nZXRUcmFuc2xhdGUodSkpLFxyXG4gICAgICAgICAgKGkudG9wIC09IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGQuJHNsaWRlKS50b3ApLFxyXG4gICAgICAgICAgKGkubGVmdCAtPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShkLiRzbGlkZSkubGVmdCksXHJcbiAgICAgICAgICAociA9IGggLyBpLndpZHRoKSxcclxuICAgICAgICAgIChjID0gZyAvIGkuaGVpZ2h0KSxcclxuICAgICAgICAgIChhID0gMC41ICogZiAtIDAuNSAqIGgpLFxyXG4gICAgICAgICAgKHMgPSAwLjUgKiBwIC0gMC41ICogZyksXHJcbiAgICAgICAgICBoID4gZiAmJlxyXG4gICAgICAgICAgICAoKGEgPSBpLmxlZnQgKiByIC0gKHQgKiByIC0gdCkpLFxyXG4gICAgICAgICAgICBhID4gMCAmJiAoYSA9IDApLFxyXG4gICAgICAgICAgICBhIDwgZiAtIGggJiYgKGEgPSBmIC0gaCkpLFxyXG4gICAgICAgICAgZyA+IHAgJiZcclxuICAgICAgICAgICAgKChzID0gaS50b3AgKiBjIC0gKGUgKiBjIC0gZSkpLFxyXG4gICAgICAgICAgICBzID4gMCAmJiAocyA9IDApLFxyXG4gICAgICAgICAgICBzIDwgcCAtIGcgJiYgKHMgPSBwIC0gZykpLFxyXG4gICAgICAgICAgbC51cGRhdGVDdXJzb3IoaCwgZyksXHJcbiAgICAgICAgICBuLmZhbmN5Ym94LmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHUsXHJcbiAgICAgICAgICAgIHsgdG9wOiBzLCBsZWZ0OiBhLCBzY2FsZVg6IHIsIHNjYWxlWTogYyB9LFxyXG4gICAgICAgICAgICBvIHx8IDM2NixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGwuaXNBbmltYXRpbmcgPSAhMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIGwuU2xpZGVTaG93ICYmIGwuU2xpZGVTaG93LmlzQWN0aXZlICYmIGwuU2xpZGVTaG93LnN0b3AoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlVG9GaXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBvID0gdGhpcyxcclxuICAgICAgICAgIGkgPSBvLmN1cnJlbnQsXHJcbiAgICAgICAgICBhID0gaS4kY29udGVudDtcclxuICAgICAgICBvLmlzQW5pbWF0aW5nIHx8XHJcbiAgICAgICAgICBvLmlzTW92ZWQoKSB8fFxyXG4gICAgICAgICAgIWEgfHxcclxuICAgICAgICAgIFwiaW1hZ2VcIiAhPSBpLnR5cGUgfHxcclxuICAgICAgICAgICFpLmlzTG9hZGVkIHx8XHJcbiAgICAgICAgICBpLmhhc0Vycm9yIHx8XHJcbiAgICAgICAgICAoKG8uaXNBbmltYXRpbmcgPSAhMCksXHJcbiAgICAgICAgICBuLmZhbmN5Ym94LnN0b3AoYSksXHJcbiAgICAgICAgICAoZSA9IG8uZ2V0Rml0UG9zKGkpKSxcclxuICAgICAgICAgIG8udXBkYXRlQ3Vyc29yKGUud2lkdGgsIGUuaGVpZ2h0KSxcclxuICAgICAgICAgIG4uZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRvcDogZS50b3AsXHJcbiAgICAgICAgICAgICAgbGVmdDogZS5sZWZ0LFxyXG4gICAgICAgICAgICAgIHNjYWxlWDogZS53aWR0aCAvIGEud2lkdGgoKSxcclxuICAgICAgICAgICAgICBzY2FsZVk6IGUuaGVpZ2h0IC8gYS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdCB8fCAzNjYsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBvLmlzQW5pbWF0aW5nID0gITE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICkpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRGaXRQb3M6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBvLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBzID0gdGhpcyxcclxuICAgICAgICAgIHIgPSB0LiRjb250ZW50LFxyXG4gICAgICAgICAgYyA9IHQuJHNsaWRlLFxyXG4gICAgICAgICAgbCA9IHQud2lkdGggfHwgdC5vcHRzLndpZHRoLFxyXG4gICAgICAgICAgZCA9IHQuaGVpZ2h0IHx8IHQub3B0cy5oZWlnaHQsXHJcbiAgICAgICAgICB1ID0ge307XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICEhKHQuaXNMb2FkZWQgJiYgciAmJiByLmxlbmd0aCkgJiZcclxuICAgICAgICAgICgoZSA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKHMuJHJlZnMuc3RhZ2UpLndpZHRoKSxcclxuICAgICAgICAgIChvID0gbi5mYW5jeWJveC5nZXRUcmFuc2xhdGUocy4kcmVmcy5zdGFnZSkuaGVpZ2h0KSxcclxuICAgICAgICAgIChlIC09XHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoYy5jc3MoXCJwYWRkaW5nTGVmdFwiKSkgK1xyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGMuY3NzKFwicGFkZGluZ1JpZ2h0XCIpKSArXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoci5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoci5jc3MoXCJtYXJnaW5SaWdodFwiKSkpLFxyXG4gICAgICAgICAgKG8gLT1cclxuICAgICAgICAgICAgcGFyc2VGbG9hdChjLmNzcyhcInBhZGRpbmdUb3BcIikpICtcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChjLmNzcyhcInBhZGRpbmdCb3R0b21cIikpICtcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChyLmNzcyhcIm1hcmdpblRvcFwiKSkgK1xyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHIuY3NzKFwibWFyZ2luQm90dG9tXCIpKSksXHJcbiAgICAgICAgICAobCAmJiBkKSB8fCAoKGwgPSBlKSwgKGQgPSBvKSksXHJcbiAgICAgICAgICAoaSA9IE1hdGgubWluKDEsIGUgLyBsLCBvIC8gZCkpLFxyXG4gICAgICAgICAgKGwgKj0gaSksXHJcbiAgICAgICAgICAoZCAqPSBpKSxcclxuICAgICAgICAgIGwgPiBlIC0gMC41ICYmIChsID0gZSksXHJcbiAgICAgICAgICBkID4gbyAtIDAuNSAmJiAoZCA9IG8pLFxyXG4gICAgICAgICAgXCJpbWFnZVwiID09PSB0LnR5cGVcclxuICAgICAgICAgICAgPyAoKHUudG9wID1cclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoMC41ICogKG8gLSBkKSkgKyBwYXJzZUZsb2F0KGMuY3NzKFwicGFkZGluZ1RvcFwiKSkpLFxyXG4gICAgICAgICAgICAgICh1LmxlZnQgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcigwLjUgKiAoZSAtIGwpKSArIHBhcnNlRmxvYXQoYy5jc3MoXCJwYWRkaW5nTGVmdFwiKSkpKVxyXG4gICAgICAgICAgICA6IFwidmlkZW9cIiA9PT0gdC5jb250ZW50VHlwZSAmJlxyXG4gICAgICAgICAgICAgICgoYSA9XHJcbiAgICAgICAgICAgICAgICB0Lm9wdHMud2lkdGggJiYgdC5vcHRzLmhlaWdodCA/IGwgLyBkIDogdC5vcHRzLnJhdGlvIHx8IDE2IC8gOSksXHJcbiAgICAgICAgICAgICAgZCA+IGwgLyBhID8gKGQgPSBsIC8gYSkgOiBsID4gZCAqIGEgJiYgKGwgPSBkICogYSkpLFxyXG4gICAgICAgICAgKHUud2lkdGggPSBsKSxcclxuICAgICAgICAgICh1LmhlaWdodCA9IGQpLFxyXG4gICAgICAgICAgdSlcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIG4uZWFjaChlLnNsaWRlcywgZnVuY3Rpb24gKG4sIG8pIHtcclxuICAgICAgICAgIGUudXBkYXRlU2xpZGUobywgdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZVNsaWRlOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBvID0gdGhpcyxcclxuICAgICAgICAgIGkgPSB0ICYmIHQuJGNvbnRlbnQsXHJcbiAgICAgICAgICBhID0gdC53aWR0aCB8fCB0Lm9wdHMud2lkdGgsXHJcbiAgICAgICAgICBzID0gdC5oZWlnaHQgfHwgdC5vcHRzLmhlaWdodCxcclxuICAgICAgICAgIHIgPSB0LiRzbGlkZTtcclxuICAgICAgICBvLmFkanVzdENhcHRpb24odCksXHJcbiAgICAgICAgICBpICYmXHJcbiAgICAgICAgICAgIChhIHx8IHMgfHwgXCJ2aWRlb1wiID09PSB0LmNvbnRlbnRUeXBlKSAmJlxyXG4gICAgICAgICAgICAhdC5oYXNFcnJvciAmJlxyXG4gICAgICAgICAgICAobi5mYW5jeWJveC5zdG9wKGkpLFxyXG4gICAgICAgICAgICBuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShpLCBvLmdldEZpdFBvcyh0KSksXHJcbiAgICAgICAgICAgIHQucG9zID09PSBvLmN1cnJQb3MgJiYgKChvLmlzQW5pbWF0aW5nID0gITEpLCBvLnVwZGF0ZUN1cnNvcigpKSksXHJcbiAgICAgICAgICBvLmFkanVzdExheW91dCh0KSxcclxuICAgICAgICAgIHIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChyLnRyaWdnZXIoXCJyZWZyZXNoXCIpLFxyXG4gICAgICAgICAgICB0LnBvcyA9PT0gby5jdXJyUG9zICYmXHJcbiAgICAgICAgICAgICAgby4kcmVmcy50b29sYmFyXHJcbiAgICAgICAgICAgICAgICAuYWRkKG8uJHJlZnMubmF2aWdhdGlvbi5maW5kKFwiLmZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfcmlnaHRcIikpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgIFwiY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHIuZ2V0KDApLnNjcm9sbEhlaWdodCA+IHIuZ2V0KDApLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICBvLnRyaWdnZXIoXCJvblVwZGF0ZVwiLCB0LCBlKTtcclxuICAgICAgfSxcclxuICAgICAgY2VudGVyU2xpZGU6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLFxyXG4gICAgICAgICAgbyA9IGUuY3VycmVudCxcclxuICAgICAgICAgIGkgPSBvLiRzbGlkZTtcclxuICAgICAgICAhZS5pc0Nsb3NpbmcgJiZcclxuICAgICAgICAgIG8gJiZcclxuICAgICAgICAgIChpLnNpYmxpbmdzKCkuY3NzKHsgdHJhbnNmb3JtOiBcIlwiLCBvcGFjaXR5OiBcIlwiIH0pLFxyXG4gICAgICAgICAgaVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzIGZhbmN5Ym94LXNsaWRlLS1uZXh0XCIpLFxyXG4gICAgICAgICAgbi5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICB7IHRvcDogMCwgbGVmdDogMCwgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgICAgICB2b2lkIDAgPT09IHQgPyAwIDogdCxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGkuY3NzKHsgdHJhbnNmb3JtOiBcIlwiLCBvcGFjaXR5OiBcIlwiIH0pLFxyXG4gICAgICAgICAgICAgICAgby5pc0NvbXBsZXRlIHx8IGUuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgITFcclxuICAgICAgICAgICkpO1xyXG4gICAgICB9LFxyXG4gICAgICBpc01vdmVkOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlLFxyXG4gICAgICAgICAgbyxcclxuICAgICAgICAgIGkgPSB0IHx8IHRoaXMuY3VycmVudDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgISFpICYmXHJcbiAgICAgICAgICAoKG8gPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSh0aGlzLiRyZWZzLnN0YWdlKSksXHJcbiAgICAgICAgICAoZSA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGkuJHNsaWRlKSksXHJcbiAgICAgICAgICAhaS4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSAmJlxyXG4gICAgICAgICAgICAoTWF0aC5hYnMoZS50b3AgLSBvLnRvcCkgPiAwLjUgfHwgTWF0aC5hYnMoZS5sZWZ0IC0gby5sZWZ0KSA+IDAuNSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlQ3Vyc29yOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBvLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGEgPSB0aGlzLFxyXG4gICAgICAgICAgcyA9IGEuY3VycmVudCxcclxuICAgICAgICAgIHIgPSBhLiRyZWZzLmNvbnRhaW5lcjtcclxuICAgICAgICBzICYmXHJcbiAgICAgICAgICAhYS5pc0Nsb3NpbmcgJiZcclxuICAgICAgICAgIGEuR3Vlc3R1cmVzICYmXHJcbiAgICAgICAgICAoci5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgXCJmYW5jeWJveC1pcy16b29tYWJsZSBmYW5jeWJveC1jYW4tem9vbUluIGZhbmN5Ym94LWNhbi16b29tT3V0IGZhbmN5Ym94LWNhbi1zd2lwZSBmYW5jeWJveC1jYW4tcGFuXCJcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICAobyA9IGEuY2FuUGFuKHQsIGUpKSxcclxuICAgICAgICAgIChpID0gISFvIHx8IGEuaXNab29tYWJsZSgpKSxcclxuICAgICAgICAgIHIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy16b29tYWJsZVwiLCBpKSxcclxuICAgICAgICAgIG4oXCJbZGF0YS1mYW5jeWJveC16b29tXVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWkpLFxyXG4gICAgICAgICAgb1xyXG4gICAgICAgICAgICA/IHIuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tcGFuXCIpXHJcbiAgICAgICAgICAgIDogaSAmJlxyXG4gICAgICAgICAgICAgIChcInpvb21cIiA9PT0gcy5vcHRzLmNsaWNrQ29udGVudCB8fFxyXG4gICAgICAgICAgICAgICAgKG4uaXNGdW5jdGlvbihzLm9wdHMuY2xpY2tDb250ZW50KSAmJlxyXG4gICAgICAgICAgICAgICAgICBcInpvb21cIiA9PSBzLm9wdHMuY2xpY2tDb250ZW50KHMpKSlcclxuICAgICAgICAgICAgPyByLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXpvb21JblwiKVxyXG4gICAgICAgICAgICA6IHMub3B0cy50b3VjaCAmJlxyXG4gICAgICAgICAgICAgIChzLm9wdHMudG91Y2gudmVydGljYWwgfHwgYS5ncm91cC5sZW5ndGggPiAxKSAmJlxyXG4gICAgICAgICAgICAgIFwidmlkZW9cIiAhPT0gcy5jb250ZW50VHlwZSAmJlxyXG4gICAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tc3dpcGVcIikpO1xyXG4gICAgICB9LFxyXG4gICAgICBpc1pvb21hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQsXHJcbiAgICAgICAgICBlID0gdGhpcyxcclxuICAgICAgICAgIG4gPSBlLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKG4gJiYgIWUuaXNDbG9zaW5nICYmIFwiaW1hZ2VcIiA9PT0gbi50eXBlICYmICFuLmhhc0Vycm9yKSB7XHJcbiAgICAgICAgICBpZiAoIW4uaXNMb2FkZWQpIHJldHVybiAhMDtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHQgPSBlLmdldEZpdFBvcyhuKSkgJiZcclxuICAgICAgICAgICAgKG4ud2lkdGggPiB0LndpZHRoIHx8IG4uaGVpZ2h0ID4gdC5oZWlnaHQpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICB9LFxyXG4gICAgICBpc1NjYWxlZERvd246IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLFxyXG4gICAgICAgICAgaSA9ICExLFxyXG4gICAgICAgICAgYSA9IG8uY3VycmVudCxcclxuICAgICAgICAgIHMgPSBhLiRjb250ZW50O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB2b2lkIDAgIT09IHQgJiYgdm9pZCAwICE9PSBlXHJcbiAgICAgICAgICAgID8gKGkgPSB0IDwgYS53aWR0aCAmJiBlIDwgYS5oZWlnaHQpXHJcbiAgICAgICAgICAgIDogcyAmJlxyXG4gICAgICAgICAgICAgICgoaSA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKHMpKSxcclxuICAgICAgICAgICAgICAoaSA9IGkud2lkdGggPCBhLndpZHRoICYmIGkuaGVpZ2h0IDwgYS5oZWlnaHQpKSxcclxuICAgICAgICAgIGlcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBjYW5QYW46IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLFxyXG4gICAgICAgICAgaSA9IG8uY3VycmVudCxcclxuICAgICAgICAgIGEgPSBudWxsLFxyXG4gICAgICAgICAgcyA9ICExO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBcImltYWdlXCIgPT09IGkudHlwZSAmJlxyXG4gICAgICAgICAgICAoaS5pc0NvbXBsZXRlIHx8ICh0ICYmIGUpKSAmJlxyXG4gICAgICAgICAgICAhaS5oYXNFcnJvciAmJlxyXG4gICAgICAgICAgICAoKHMgPSBvLmdldEZpdFBvcyhpKSksXHJcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gdCAmJiB2b2lkIDAgIT09IGVcclxuICAgICAgICAgICAgICA/IChhID0geyB3aWR0aDogdCwgaGVpZ2h0OiBlIH0pXHJcbiAgICAgICAgICAgICAgOiBpLmlzQ29tcGxldGUgJiYgKGEgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpLiRjb250ZW50KSksXHJcbiAgICAgICAgICAgIGEgJiZcclxuICAgICAgICAgICAgICBzICYmXHJcbiAgICAgICAgICAgICAgKHMgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYS53aWR0aCAtIHMud2lkdGgpID4gMS41IHx8XHJcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhhLmhlaWdodCAtIHMuaGVpZ2h0KSA+IDEuNSkpLFxyXG4gICAgICAgICAgc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWRTbGlkZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSxcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmlzTG9hZGluZyAmJiAhdC5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgaWYgKCgodC5pc0xvYWRpbmcgPSAhMCksICExID09PSBhLnRyaWdnZXIoXCJiZWZvcmVMb2FkXCIsIHQpKSlcclxuICAgICAgICAgICAgcmV0dXJuICh0LmlzTG9hZGluZyA9ICExKSwgITE7XHJcbiAgICAgICAgICBzd2l0Y2ggKFxyXG4gICAgICAgICAgICAoKGUgPSB0LnR5cGUpLFxyXG4gICAgICAgICAgICAobyA9IHQuJHNsaWRlKSxcclxuICAgICAgICAgICAgby5vZmYoXCJyZWZyZXNoXCIpLnRyaWdnZXIoXCJvblJlc2V0XCIpLmFkZENsYXNzKHQub3B0cy5zbGlkZUNsYXNzKSxcclxuICAgICAgICAgICAgZSlcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICAgICAgICBhLnNldEltYWdlKHQpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWZyYW1lXCI6XHJcbiAgICAgICAgICAgICAgYS5zZXRJZnJhbWUodCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICAgICAgYS5zZXRDb250ZW50KHQsIHQuc3JjIHx8IHQuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aWRlb1wiOlxyXG4gICAgICAgICAgICAgIGEuc2V0Q29udGVudChcclxuICAgICAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgICAgICB0Lm9wdHMudmlkZW8udHBsXHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtcXHtzcmNcXH1cXH0vZ2ksIHQuc3JjKVxyXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICBcInt7Zm9ybWF0fX1cIixcclxuICAgICAgICAgICAgICAgICAgICB0Lm9wdHMudmlkZW9Gb3JtYXQgfHwgdC5vcHRzLnZpZGVvLmZvcm1hdCB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e3Bvc3Rlcn19XCIsIHQudGh1bWIgfHwgXCJcIilcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lXCI6XHJcbiAgICAgICAgICAgICAgbih0LnNyYykubGVuZ3RoID8gYS5zZXRDb250ZW50KHQsIG4odC5zcmMpKSA6IGEuc2V0RXJyb3IodCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhamF4XCI6XHJcbiAgICAgICAgICAgICAgYS5zaG93TG9hZGluZyh0KSxcclxuICAgICAgICAgICAgICAgIChpID0gbi5hamF4KFxyXG4gICAgICAgICAgICAgICAgICBuLmV4dGVuZCh7fSwgdC5vcHRzLmFqYXguc2V0dGluZ3MsIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHQuc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlLCBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIiA9PT0gbiAmJiBhLnNldENvbnRlbnQodCwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUgJiYgXCJhYm9ydFwiICE9PSBuICYmIGEuc2V0RXJyb3IodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgby5vbmUoXCJvblJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgaS5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgYS5zZXRFcnJvcih0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldEltYWdlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBvLFxyXG4gICAgICAgICAgaSA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgZSA9IHQuJGltYWdlO1xyXG4gICAgICAgICAgaS5pc0Nsb3NpbmcgfHxcclxuICAgICAgICAgICAgIXQuaXNMb2FkaW5nIHx8XHJcbiAgICAgICAgICAgIChlICYmIGUubGVuZ3RoICYmIGVbMF0uY29tcGxldGUpIHx8XHJcbiAgICAgICAgICAgIHQuaGFzRXJyb3IgfHxcclxuICAgICAgICAgICAgaS5zaG93TG9hZGluZyh0KTtcclxuICAgICAgICB9LCA1MCksXHJcbiAgICAgICAgICBpLmNoZWNrU3Jjc2V0KHQpLFxyXG4gICAgICAgICAgKHQuJGNvbnRlbnQgPSBuKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtY29udGVudFwiPjwvZGl2PicpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8odC4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0taW1hZ2VcIikpKSxcclxuICAgICAgICAgICExICE9PSB0Lm9wdHMucHJlbG9hZCAmJlxyXG4gICAgICAgICAgICB0Lm9wdHMud2lkdGggJiZcclxuICAgICAgICAgICAgdC5vcHRzLmhlaWdodCAmJlxyXG4gICAgICAgICAgICB0LnRodW1iICYmXHJcbiAgICAgICAgICAgICgodC53aWR0aCA9IHQub3B0cy53aWR0aCksXHJcbiAgICAgICAgICAgICh0LmhlaWdodCA9IHQub3B0cy5oZWlnaHQpLFxyXG4gICAgICAgICAgICAobyA9IGUuY3JlYXRlRWxlbWVudChcImltZ1wiKSksXHJcbiAgICAgICAgICAgIChvLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgbih0aGlzKS5yZW1vdmUoKSwgKHQuJGdob3N0ID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAoby5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaS5hZnRlckxvYWQodCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAodC4kZ2hvc3QgPSBuKG8pXHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaW1hZ2VcIilcclxuICAgICAgICAgICAgICAuYXBwZW5kVG8odC4kY29udGVudClcclxuICAgICAgICAgICAgICAuYXR0cihcInNyY1wiLCB0LnRodW1iKSkpLFxyXG4gICAgICAgICAgaS5zZXRCaWdJbWFnZSh0KTtcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tTcmNzZXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG4sXHJcbiAgICAgICAgICBvLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBzID0gZS5vcHRzLnNyY3NldCB8fCBlLm9wdHMuaW1hZ2Uuc3Jjc2V0O1xyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAoaSA9IHQuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcclxuICAgICAgICAgICAgKGEgPSB0LmlubmVyV2lkdGggKiBpKSxcclxuICAgICAgICAgICAgKG8gPSBzLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICB2YXIgZSA9IHt9O1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0XHJcbiAgICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMrLylcclxuICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHBhcnNlSW50KHQuc3Vic3RyaW5nKDAsIHQubGVuZ3RoIC0gMSksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gbikgcmV0dXJuIChlLnVybCA9IHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG8gJiYgKChlLnZhbHVlID0gbyksIChlLnBvc3RmaXggPSB0W3QubGVuZ3RoIC0gMV0pKTtcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBlXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBvLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdC52YWx1ZSAtIGUudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gb1tyXTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIChcIndcIiA9PT0gYy5wb3N0Zml4ICYmIGMudmFsdWUgPj0gYSkgfHxcclxuICAgICAgICAgICAgICAoXCJ4XCIgPT09IGMucG9zdGZpeCAmJiBjLnZhbHVlID49IGkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIG4gPSBjO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAhbiAmJiBvLmxlbmd0aCAmJiAobiA9IG9bby5sZW5ndGggLSAxXSksXHJcbiAgICAgICAgICAgIG4gJiZcclxuICAgICAgICAgICAgICAoKGUuc3JjID0gbi51cmwpLFxyXG4gICAgICAgICAgICAgIGUud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIGUuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICBcIndcIiA9PSBuLnBvc3RmaXggJiZcclxuICAgICAgICAgICAgICAgICgoZS5oZWlnaHQgPSAoZS53aWR0aCAvIGUuaGVpZ2h0KSAqIG4udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgKGUud2lkdGggPSBuLnZhbHVlKSksXHJcbiAgICAgICAgICAgICAgKGUub3B0cy5zcmNzZXQgPSBzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZXRCaWdJbWFnZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbyA9IHRoaXMsXHJcbiAgICAgICAgICBpID0gZS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxyXG4gICAgICAgICAgYSA9IG4oaSk7XHJcbiAgICAgICAgKHQuJGltYWdlID0gYVxyXG4gICAgICAgICAgLm9uZShcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgby5zZXRFcnJvcih0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAub25lKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlO1xyXG4gICAgICAgICAgICB0LiRnaG9zdCB8fFxyXG4gICAgICAgICAgICAgIChvLnJlc29sdmVJbWFnZVNsaWRlU2l6ZShcclxuICAgICAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdHVyYWxXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0dXJhbEhlaWdodFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgby5hZnRlckxvYWQodCkpLFxyXG4gICAgICAgICAgICAgIG8uaXNDbG9zaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAodC5vcHRzLnNyY3NldCAmJlxyXG4gICAgICAgICAgICAgICAgICAoKGUgPSB0Lm9wdHMuc2l6ZXMpLFxyXG4gICAgICAgICAgICAgICAgICAoZSAmJiBcImF1dG9cIiAhPT0gZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAodC53aWR0aCAvIHQuaGVpZ2h0ID4gMSAmJiBzLndpZHRoKCkgLyBzLmhlaWdodCgpID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnJvdW5kKCh0LndpZHRoIC8gdC5oZWlnaHQpICogMTAwKSkgKyBcInZ3XCIpLFxyXG4gICAgICAgICAgICAgICAgICBhLmF0dHIoXCJzaXplc1wiLCBlKS5hdHRyKFwic3Jjc2V0XCIsIHQub3B0cy5zcmNzZXQpKSxcclxuICAgICAgICAgICAgICAgIHQuJGdob3N0ICYmXHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuJGdob3N0ICYmICFvLmlzQ2xvc2luZyAmJiB0LiRnaG9zdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIE1hdGgubWluKDMwMCwgTWF0aC5tYXgoMWUzLCB0LmhlaWdodCAvIDE2MDApKSksXHJcbiAgICAgICAgICAgICAgICBvLmhpZGVMb2FkaW5nKHQpKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1pbWFnZVwiKVxyXG4gICAgICAgICAgLmF0dHIoXCJzcmNcIiwgdC5zcmMpXHJcbiAgICAgICAgICAuYXBwZW5kVG8odC4kY29udGVudCkpLFxyXG4gICAgICAgICAgKGkuY29tcGxldGUgfHwgXCJjb21wbGV0ZVwiID09IGkucmVhZHlTdGF0ZSkgJiZcclxuICAgICAgICAgIGEubmF0dXJhbFdpZHRoICYmXHJcbiAgICAgICAgICBhLm5hdHVyYWxIZWlnaHRcclxuICAgICAgICAgICAgPyBhLnRyaWdnZXIoXCJsb2FkXCIpXHJcbiAgICAgICAgICAgIDogaS5lcnJvciAmJiBhLnRyaWdnZXIoXCJlcnJvclwiKTtcclxuICAgICAgfSxcclxuICAgICAgcmVzb2x2ZUltYWdlU2xpZGVTaXplOiBmdW5jdGlvbiAodCwgZSwgbikge1xyXG4gICAgICAgIHZhciBvID0gcGFyc2VJbnQodC5vcHRzLndpZHRoLCAxMCksXHJcbiAgICAgICAgICBpID0gcGFyc2VJbnQodC5vcHRzLmhlaWdodCwgMTApO1xyXG4gICAgICAgICh0LndpZHRoID0gZSksXHJcbiAgICAgICAgICAodC5oZWlnaHQgPSBuKSxcclxuICAgICAgICAgIG8gPiAwICYmICgodC53aWR0aCA9IG8pLCAodC5oZWlnaHQgPSBNYXRoLmZsb29yKChvICogbikgLyBlKSkpLFxyXG4gICAgICAgICAgaSA+IDAgJiYgKCh0LndpZHRoID0gTWF0aC5mbG9vcigoaSAqIGUpIC8gbikpLCAodC5oZWlnaHQgPSBpKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldElmcmFtZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSxcclxuICAgICAgICAgIG8gPSB0aGlzLFxyXG4gICAgICAgICAgaSA9IHQub3B0cy5pZnJhbWUsXHJcbiAgICAgICAgICBhID0gdC4kc2xpZGU7XHJcbiAgICAgICAgKHQuJGNvbnRlbnQgPSBuKFxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250ZW50JyArXHJcbiAgICAgICAgICAgIChpLnByZWxvYWQgPyBcIiBmYW5jeWJveC1pcy1oaWRkZW5cIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgJ1wiPjwvZGl2PidcclxuICAgICAgICApXHJcbiAgICAgICAgICAuY3NzKGkuY3NzKVxyXG4gICAgICAgICAgLmFwcGVuZFRvKGEpKSxcclxuICAgICAgICAgIGEuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyB0LmNvbnRlbnRUeXBlKSxcclxuICAgICAgICAgICh0LiRpZnJhbWUgPSBlID0gbihpLnRwbC5yZXBsYWNlKC9cXHtybmRcXH0vZywgbmV3IERhdGUoKS5nZXRUaW1lKCkpKVxyXG4gICAgICAgICAgICAuYXR0cihpLmF0dHIpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyh0LiRjb250ZW50KSksXHJcbiAgICAgICAgICBpLnByZWxvYWRcclxuICAgICAgICAgICAgPyAoby5zaG93TG9hZGluZyh0KSxcclxuICAgICAgICAgICAgICBlLm9uKFwibG9hZC5mYiBlcnJvci5mYlwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXNSZWFkeSA9IDEpLCB0LiRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKSwgby5hZnRlckxvYWQodCk7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgYS5vbihcInJlZnJlc2guZmJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG4sXHJcbiAgICAgICAgICAgICAgICAgIG8sXHJcbiAgICAgICAgICAgICAgICAgIHMgPSB0LiRjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICByID0gaS5jc3Mud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgIGMgPSBpLmNzcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gZVswXS5pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKG4gPSBlLmNvbnRlbnRzKCkpLCAobyA9IG4uZmluZChcImJvZHlcIikpO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7fVxyXG4gICAgICAgICAgICAgICAgICBvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgby5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICBvLmNoaWxkcmVuKCkubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGEuY3NzKFwib3ZlcmZsb3dcIiwgXCJ2aXNpYmxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHMuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjk5OTlweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHIgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KG9bMF0uY2xpZW50V2lkdGgsIG8ub3V0ZXJXaWR0aCghMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgICAgICAgICBzLmNzcyhcIndpZHRoXCIsIHIgfHwgXCJcIikuY3NzKFwibWF4LXdpZHRoXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gYyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGMgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KG9bMF0uY2xpZW50SGVpZ2h0LCBvLm91dGVySGVpZ2h0KCEwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHMuY3NzKFwiaGVpZ2h0XCIsIGMgfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYS5jc3MoXCJvdmVyZmxvd1wiLCBcImF1dG9cIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHMucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIDogby5hZnRlckxvYWQodCksXHJcbiAgICAgICAgICBlLmF0dHIoXCJzcmNcIiwgdC5zcmMpLFxyXG4gICAgICAgICAgYS5vbmUoXCJvblJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBuKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlmcmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLnVuYmluZCgpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyY1wiLCBcIi8vYWJvdXQ6YmxhbmtcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHt9XHJcbiAgICAgICAgICAgIG4odGhpcykub2ZmKFwicmVmcmVzaC5mYlwiKS5lbXB0eSgpLFxyXG4gICAgICAgICAgICAgICh0LmlzTG9hZGVkID0gITEpLFxyXG4gICAgICAgICAgICAgICh0LmlzUmV2ZWFsZWQgPSAhMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgbyA9IHRoaXM7XHJcbiAgICAgICAgby5pc0Nsb3NpbmcgfHxcclxuICAgICAgICAgIChvLmhpZGVMb2FkaW5nKHQpLFxyXG4gICAgICAgICAgdC4kY29udGVudCAmJiBuLmZhbmN5Ym94LnN0b3AodC4kY29udGVudCksXHJcbiAgICAgICAgICB0LiRzbGlkZS5lbXB0eSgpLFxyXG4gICAgICAgICAgbChlKSAmJiBlLnBhcmVudCgpLmxlbmd0aFxyXG4gICAgICAgICAgICA/ICgoZS5oYXNDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikgfHxcclxuICAgICAgICAgICAgICAgIGUucGFyZW50KCkuaGFzQ2xhc3MoXCJmYW5jeWJveC1jb250ZW50XCIpKSAmJlxyXG4gICAgICAgICAgICAgICAgZS5wYXJlbnRzKFwiLmZhbmN5Ym94LXNsaWRlXCIpLnRyaWdnZXIoXCJvblJlc2V0XCIpLFxyXG4gICAgICAgICAgICAgICh0LiRwbGFjZWhvbGRlciA9IG4oXCI8ZGl2PlwiKS5oaWRlKCkuaW5zZXJ0QWZ0ZXIoZSkpLFxyXG4gICAgICAgICAgICAgIGUuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKSlcclxuICAgICAgICAgICAgOiB0Lmhhc0Vycm9yIHx8XHJcbiAgICAgICAgICAgICAgKFwic3RyaW5nXCIgPT09IG4udHlwZShlKSAmJlxyXG4gICAgICAgICAgICAgICAgKGUgPSBuKFwiPGRpdj5cIikuYXBwZW5kKG4udHJpbShlKSkuY29udGVudHMoKSksXHJcbiAgICAgICAgICAgICAgdC5vcHRzLmZpbHRlciAmJiAoZSA9IG4oXCI8ZGl2PlwiKS5odG1sKGUpLmZpbmQodC5vcHRzLmZpbHRlcikpKSxcclxuICAgICAgICAgIHQuJHNsaWRlLm9uZShcIm9uUmVzZXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBuKHRoaXMpLmZpbmQoXCJ2aWRlbyxhdWRpb1wiKS50cmlnZ2VyKFwicGF1c2VcIiksXHJcbiAgICAgICAgICAgICAgdC4kcGxhY2Vob2xkZXIgJiZcclxuICAgICAgICAgICAgICAgICh0LiRwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAuYWZ0ZXIoZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikuaGlkZSgpKVxyXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlKCksXHJcbiAgICAgICAgICAgICAgICAodC4kcGxhY2Vob2xkZXIgPSBudWxsKSksXHJcbiAgICAgICAgICAgICAgdC4kc21hbGxCdG4gJiYgKHQuJHNtYWxsQnRuLnJlbW92ZSgpLCAodC4kc21hbGxCdG4gPSBudWxsKSksXHJcbiAgICAgICAgICAgICAgdC5oYXNFcnJvciB8fFxyXG4gICAgICAgICAgICAgICAgKG4odGhpcykuZW1wdHkoKSwgKHQuaXNMb2FkZWQgPSAhMSksICh0LmlzUmV2ZWFsZWQgPSAhMSkpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBuKGUpLmFwcGVuZFRvKHQuJHNsaWRlKSxcclxuICAgICAgICAgIG4oZSkuaXMoXCJ2aWRlbyxhdWRpb1wiKSAmJlxyXG4gICAgICAgICAgICAobihlKS5hZGRDbGFzcyhcImZhbmN5Ym94LXZpZGVvXCIpLFxyXG4gICAgICAgICAgICBuKGUpLndyYXAoXCI8ZGl2PjwvZGl2PlwiKSxcclxuICAgICAgICAgICAgKHQuY29udGVudFR5cGUgPSBcInZpZGVvXCIpLFxyXG4gICAgICAgICAgICAodC5vcHRzLndpZHRoID0gdC5vcHRzLndpZHRoIHx8IG4oZSkuYXR0cihcIndpZHRoXCIpKSxcclxuICAgICAgICAgICAgKHQub3B0cy5oZWlnaHQgPSB0Lm9wdHMuaGVpZ2h0IHx8IG4oZSkuYXR0cihcImhlaWdodFwiKSkpLFxyXG4gICAgICAgICAgKHQuJGNvbnRlbnQgPSB0LiRzbGlkZVxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFwiZGl2LGZvcm0sbWFpbix2aWRlbyxhdWRpbyxhcnRpY2xlLC5mYW5jeWJveC1jb250ZW50XCIpXHJcbiAgICAgICAgICAgIC5maXJzdCgpKSxcclxuICAgICAgICAgIHQuJGNvbnRlbnQuc2libGluZ3MoKS5oaWRlKCksXHJcbiAgICAgICAgICB0LiRjb250ZW50Lmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAodC4kY29udGVudCA9IHQuJHNsaWRlLndyYXBJbm5lcihcIjxkaXY+PC9kaXY+XCIpLmNoaWxkcmVuKCkuZmlyc3QoKSksXHJcbiAgICAgICAgICB0LiRjb250ZW50LmFkZENsYXNzKFwiZmFuY3lib3gtY29udGVudFwiKSxcclxuICAgICAgICAgIHQuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiICsgdC5jb250ZW50VHlwZSksXHJcbiAgICAgICAgICBvLmFmdGVyTG9hZCh0KSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldEVycm9yOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICh0Lmhhc0Vycm9yID0gITApLFxyXG4gICAgICAgICAgdC4kc2xpZGVcclxuICAgICAgICAgICAgLnRyaWdnZXIoXCJvblJlc2V0XCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1cIiArIHQuY29udGVudFR5cGUpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1lcnJvclwiKSxcclxuICAgICAgICAgICh0LmNvbnRlbnRUeXBlID0gXCJodG1sXCIpLFxyXG4gICAgICAgICAgdGhpcy5zZXRDb250ZW50KHQsIHRoaXMudHJhbnNsYXRlKHQsIHQub3B0cy5lcnJvclRwbCkpLFxyXG4gICAgICAgICAgdC5wb3MgPT09IHRoaXMuY3VyclBvcyAmJiAodGhpcy5pc0FuaW1hdGluZyA9ICExKTtcclxuICAgICAgfSxcclxuICAgICAgc2hvd0xvYWRpbmc6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgICh0ID0gdCB8fCBlLmN1cnJlbnQpICYmXHJcbiAgICAgICAgICAhdC4kc3Bpbm5lciAmJlxyXG4gICAgICAgICAgKHQuJHNwaW5uZXIgPSBuKGUudHJhbnNsYXRlKGUsIGUub3B0cy5zcGlubmVyVHBsKSlcclxuICAgICAgICAgICAgLmFwcGVuZFRvKHQuJHNsaWRlKVxyXG4gICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgIC5mYWRlSW4oXCJmYXN0XCIpKTtcclxuICAgICAgfSxcclxuICAgICAgaGlkZUxvYWRpbmc6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgICh0ID0gdCB8fCBlLmN1cnJlbnQpICYmXHJcbiAgICAgICAgICB0LiRzcGlubmVyICYmXHJcbiAgICAgICAgICAodC4kc3Bpbm5lci5zdG9wKCkucmVtb3ZlKCksIGRlbGV0ZSB0LiRzcGlubmVyKTtcclxuICAgICAgfSxcclxuICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICBlLmlzQ2xvc2luZyB8fFxyXG4gICAgICAgICAgKCh0LmlzTG9hZGluZyA9ICExKSxcclxuICAgICAgICAgICh0LmlzTG9hZGVkID0gITApLFxyXG4gICAgICAgICAgZS50cmlnZ2VyKFwiYWZ0ZXJMb2FkXCIsIHQpLFxyXG4gICAgICAgICAgZS5oaWRlTG9hZGluZyh0KSxcclxuICAgICAgICAgICF0Lm9wdHMuc21hbGxCdG4gfHxcclxuICAgICAgICAgICAgKHQuJHNtYWxsQnRuICYmIHQuJHNtYWxsQnRuLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgKHQuJHNtYWxsQnRuID0gbihlLnRyYW5zbGF0ZSh0LCB0Lm9wdHMuYnRuVHBsLnNtYWxsQnRuKSkuYXBwZW5kVG8oXHJcbiAgICAgICAgICAgICAgdC4kY29udGVudFxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgIHQub3B0cy5wcm90ZWN0ICYmXHJcbiAgICAgICAgICAgIHQuJGNvbnRlbnQgJiZcclxuICAgICAgICAgICAgIXQuaGFzRXJyb3IgJiZcclxuICAgICAgICAgICAgKHQuJGNvbnRlbnQub24oXCJjb250ZXh0bWVudS5mYlwiLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAyID09IHQuYnV0dG9uICYmIHQucHJldmVudERlZmF1bHQoKSwgITA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBcImltYWdlXCIgPT09IHQudHlwZSAmJlxyXG4gICAgICAgICAgICAgIG4oJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zcGFjZWJhbGxcIj48L2Rpdj4nKS5hcHBlbmRUbyh0LiRjb250ZW50KSksXHJcbiAgICAgICAgICBlLmFkanVzdENhcHRpb24odCksXHJcbiAgICAgICAgICBlLmFkanVzdExheW91dCh0KSxcclxuICAgICAgICAgIHQucG9zID09PSBlLmN1cnJQb3MgJiYgZS51cGRhdGVDdXJzb3IoKSxcclxuICAgICAgICAgIGUucmV2ZWFsQ29udGVudCh0KSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkanVzdENhcHRpb246IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBuID0gdGhpcyxcclxuICAgICAgICAgIG8gPSB0IHx8IG4uY3VycmVudCxcclxuICAgICAgICAgIGkgPSBvLm9wdHMuY2FwdGlvbixcclxuICAgICAgICAgIGEgPSBvLm9wdHMucHJldmVudENhcHRpb25PdmVybGFwLFxyXG4gICAgICAgICAgcyA9IG4uJHJlZnMuY2FwdGlvbixcclxuICAgICAgICAgIHIgPSAhMTtcclxuICAgICAgICBzLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtY2FwdGlvbi0tc2VwYXJhdGVcIiwgYSksXHJcbiAgICAgICAgICBhICYmXHJcbiAgICAgICAgICAgIGkgJiZcclxuICAgICAgICAgICAgaS5sZW5ndGggJiZcclxuICAgICAgICAgICAgKG8ucG9zICE9PSBuLmN1cnJQb3NcclxuICAgICAgICAgICAgICA/ICgoZSA9IHMuY2xvbmUoKS5hcHBlbmRUbyhzLnBhcmVudCgpKSksXHJcbiAgICAgICAgICAgICAgICBlLmNoaWxkcmVuKCkuZXEoMCkuZW1wdHkoKS5odG1sKGkpLFxyXG4gICAgICAgICAgICAgICAgKHIgPSBlLm91dGVySGVpZ2h0KCEwKSksXHJcbiAgICAgICAgICAgICAgICBlLmVtcHR5KCkucmVtb3ZlKCkpXHJcbiAgICAgICAgICAgICAgOiBuLiRjYXB0aW9uICYmIChyID0gbi4kY2FwdGlvbi5vdXRlckhlaWdodCghMCkpLFxyXG4gICAgICAgICAgICBvLiRzbGlkZS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiLCByIHx8IFwiXCIpKTtcclxuICAgICAgfSxcclxuICAgICAgYWRqdXN0TGF5b3V0OiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlLFxyXG4gICAgICAgICAgbixcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSA9IHRoaXMsXHJcbiAgICAgICAgICBzID0gdCB8fCBhLmN1cnJlbnQ7XHJcbiAgICAgICAgcy5pc0xvYWRlZCAmJlxyXG4gICAgICAgICAgITAgIT09IHMub3B0cy5kaXNhYmxlTGF5b3V0Rml4ICYmXHJcbiAgICAgICAgICAocy4kY29udGVudC5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiXCIpLFxyXG4gICAgICAgICAgcy4kY29udGVudC5vdXRlckhlaWdodCgpID4gcy4kc2xpZGUuaGVpZ2h0KCkgKyAwLjUgJiZcclxuICAgICAgICAgICAgKChvID0gcy4kc2xpZGVbMF0uc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXSksXHJcbiAgICAgICAgICAgIChpID0gcy4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIikpLFxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGkpID4gMCAmJlxyXG4gICAgICAgICAgICAgICgoZSA9IHMuJHNsaWRlWzBdLnNjcm9sbEhlaWdodCksXHJcbiAgICAgICAgICAgICAgcy4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgMCksXHJcbiAgICAgICAgICAgICAgTWF0aC5hYnMoZSAtIHMuJHNsaWRlWzBdLnNjcm9sbEhlaWdodCkgPCAxICYmIChuID0gaSksXHJcbiAgICAgICAgICAgICAgcy4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgbykpKSxcclxuICAgICAgICAgIHMuJGNvbnRlbnQuY3NzKFwibWFyZ2luLWJvdHRvbVwiLCBuKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmVhbENvbnRlbnQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBvLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBzID0gdGhpcyxcclxuICAgICAgICAgIHIgPSB0LiRzbGlkZSxcclxuICAgICAgICAgIGMgPSAhMSxcclxuICAgICAgICAgIGwgPSAhMSxcclxuICAgICAgICAgIGQgPSBzLmlzTW92ZWQodCksXHJcbiAgICAgICAgICB1ID0gdC5pc1JldmVhbGVkO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAodC5pc1JldmVhbGVkID0gITApLFxyXG4gICAgICAgICAgKGUgPSB0Lm9wdHNbcy5maXJzdFJ1biA/IFwiYW5pbWF0aW9uRWZmZWN0XCIgOiBcInRyYW5zaXRpb25FZmZlY3RcIl0pLFxyXG4gICAgICAgICAgKGkgPSB0Lm9wdHNbcy5maXJzdFJ1biA/IFwiYW5pbWF0aW9uRHVyYXRpb25cIiA6IFwidHJhbnNpdGlvbkR1cmF0aW9uXCJdKSxcclxuICAgICAgICAgIChpID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gdC5mb3JjZWREdXJhdGlvbiA/IGkgOiB0LmZvcmNlZER1cmF0aW9uLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgICAgKSksXHJcbiAgICAgICAgICAoIWQgJiYgdC5wb3MgPT09IHMuY3VyclBvcyAmJiBpKSB8fCAoZSA9ICExKSxcclxuICAgICAgICAgIFwiem9vbVwiID09PSBlICYmXHJcbiAgICAgICAgICAgICh0LnBvcyA9PT0gcy5jdXJyUG9zICYmXHJcbiAgICAgICAgICAgIGkgJiZcclxuICAgICAgICAgICAgXCJpbWFnZVwiID09PSB0LnR5cGUgJiZcclxuICAgICAgICAgICAgIXQuaGFzRXJyb3IgJiZcclxuICAgICAgICAgICAgKGwgPSBzLmdldFRodW1iUG9zKHQpKVxyXG4gICAgICAgICAgICAgID8gKGMgPSBzLmdldEZpdFBvcyh0KSlcclxuICAgICAgICAgICAgICA6IChlID0gXCJmYWRlXCIpKSxcclxuICAgICAgICAgIFwiem9vbVwiID09PSBlXHJcbiAgICAgICAgICAgID8gKChzLmlzQW5pbWF0aW5nID0gITApLFxyXG4gICAgICAgICAgICAgIChjLnNjYWxlWCA9IGMud2lkdGggLyBsLndpZHRoKSxcclxuICAgICAgICAgICAgICAoYy5zY2FsZVkgPSBjLmhlaWdodCAvIGwuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAoYSA9IHQub3B0cy56b29tT3BhY2l0eSksXHJcbiAgICAgICAgICAgICAgXCJhdXRvXCIgPT0gYSAmJlxyXG4gICAgICAgICAgICAgICAgKGEgPSBNYXRoLmFicyh0LndpZHRoIC8gdC5oZWlnaHQgLSBsLndpZHRoIC8gbC5oZWlnaHQpID4gMC4xKSxcclxuICAgICAgICAgICAgICBhICYmICgobC5vcGFjaXR5ID0gMC4xKSwgKGMub3BhY2l0eSA9IDEpKSxcclxuICAgICAgICAgICAgICBuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIHQuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIiksXHJcbiAgICAgICAgICAgICAgICBsXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBwKHQuJGNvbnRlbnQpLFxyXG4gICAgICAgICAgICAgIHZvaWQgbi5mYW5jeWJveC5hbmltYXRlKHQuJGNvbnRlbnQsIGMsIGksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIChzLmlzQW5pbWF0aW5nID0gITEpLCBzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIDogKHMudXBkYXRlU2xpZGUodCksXHJcbiAgICAgICAgICAgICAgZVxyXG4gICAgICAgICAgICAgICAgPyAobi5mYW5jeWJveC5zdG9wKHIpLFxyXG4gICAgICAgICAgICAgICAgICAobyA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmYW5jeWJveC1zbGlkZS0tXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0LnBvcyA+PSBzLnByZXZQb3MgPyBcIm5leHRcIiA6IFwicHJldmlvdXNcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIGZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICtcclxuICAgICAgICAgICAgICAgICAgICBlKSxcclxuICAgICAgICAgICAgICAgICAgci5hZGRDbGFzcyhvKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICB0LiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLFxyXG4gICAgICAgICAgICAgICAgICBwKHIpLFxyXG4gICAgICAgICAgICAgICAgICBcImltYWdlXCIgIT09IHQudHlwZSAmJiB0LiRjb250ZW50LmhpZGUoKS5zaG93KDApLFxyXG4gICAgICAgICAgICAgICAgICB2b2lkIG4uZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICByLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHIucmVtb3ZlQ2xhc3MobykuY3NzKHsgdHJhbnNmb3JtOiBcIlwiLCBvcGFjaXR5OiBcIlwiIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnBvcyA9PT0gcy5jdXJyUG9zICYmIHMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICEwXHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6ICh0LiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLFxyXG4gICAgICAgICAgICAgICAgICB1IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBcImltYWdlXCIgIT09IHQudHlwZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHQuaGFzRXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICB0LiRjb250ZW50LmhpZGUoKS5mYWRlSW4oXCJmYXN0XCIpLFxyXG4gICAgICAgICAgICAgICAgICB2b2lkICh0LnBvcyA9PT0gcy5jdXJyUG9zICYmIHMuY29tcGxldGUoKSkpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRodW1iUG9zOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlLFxyXG4gICAgICAgICAgbyxcclxuICAgICAgICAgIGksXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgcyxcclxuICAgICAgICAgIHIgPSAhMSxcclxuICAgICAgICAgIGMgPSB0LiR0aHVtYjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgISghYyB8fCAhZyhjWzBdKSkgJiZcclxuICAgICAgICAgICgoZSA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGMpKSxcclxuICAgICAgICAgIChvID0gcGFyc2VGbG9hdChjLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIikgfHwgMCkpLFxyXG4gICAgICAgICAgKGkgPSBwYXJzZUZsb2F0KGMuY3NzKFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIpIHx8IDApKSxcclxuICAgICAgICAgIChhID0gcGFyc2VGbG9hdChjLmNzcyhcImJvcmRlci1ib3R0b20td2lkdGhcIikgfHwgMCkpLFxyXG4gICAgICAgICAgKHMgPSBwYXJzZUZsb2F0KGMuY3NzKFwiYm9yZGVyLWxlZnQtd2lkdGhcIikgfHwgMCkpLFxyXG4gICAgICAgICAgKHIgPSB7XHJcbiAgICAgICAgICAgIHRvcDogZS50b3AgKyBvLFxyXG4gICAgICAgICAgICBsZWZ0OiBlLmxlZnQgKyBzLFxyXG4gICAgICAgICAgICB3aWR0aDogZS53aWR0aCAtIGkgLSBzLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGUuaGVpZ2h0IC0gbyAtIGEsXHJcbiAgICAgICAgICAgIHNjYWxlWDogMSxcclxuICAgICAgICAgICAgc2NhbGVZOiAxLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBlLndpZHRoID4gMCAmJiBlLmhlaWdodCA+IDAgJiYgcilcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0LFxyXG4gICAgICAgICAgZSA9IHRoaXMsXHJcbiAgICAgICAgICBvID0gZS5jdXJyZW50LFxyXG4gICAgICAgICAgaSA9IHt9O1xyXG4gICAgICAgICFlLmlzTW92ZWQoKSAmJlxyXG4gICAgICAgICAgby5pc0xvYWRlZCAmJlxyXG4gICAgICAgICAgKG8uaXNDb21wbGV0ZSB8fFxyXG4gICAgICAgICAgICAoKG8uaXNDb21wbGV0ZSA9ICEwKSxcclxuICAgICAgICAgICAgby4kc2xpZGUuc2libGluZ3MoKS50cmlnZ2VyKFwib25SZXNldFwiKSxcclxuICAgICAgICAgICAgZS5wcmVsb2FkKFwiaW5saW5lXCIpLFxyXG4gICAgICAgICAgICBwKG8uJHNsaWRlKSxcclxuICAgICAgICAgICAgby4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGVcIiksXHJcbiAgICAgICAgICAgIG4uZWFjaChlLnNsaWRlcywgZnVuY3Rpb24gKHQsIG8pIHtcclxuICAgICAgICAgICAgICBvLnBvcyA+PSBlLmN1cnJQb3MgLSAxICYmIG8ucG9zIDw9IGUuY3VyclBvcyArIDFcclxuICAgICAgICAgICAgICAgID8gKGlbby5wb3NdID0gbylcclxuICAgICAgICAgICAgICAgIDogbyAmJiAobi5mYW5jeWJveC5zdG9wKG8uJHNsaWRlKSwgby4kc2xpZGUub2ZmKCkucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKGUuc2xpZGVzID0gaSkpLFxyXG4gICAgICAgICAgKGUuaXNBbmltYXRpbmcgPSAhMSksXHJcbiAgICAgICAgICBlLnVwZGF0ZUN1cnNvcigpLFxyXG4gICAgICAgICAgZS50cmlnZ2VyKFwiYWZ0ZXJTaG93XCIpLFxyXG4gICAgICAgICAgby5vcHRzLnZpZGVvLmF1dG9TdGFydCAmJlxyXG4gICAgICAgICAgICBvLiRzbGlkZVxyXG4gICAgICAgICAgICAgIC5maW5kKFwidmlkZW8sYXVkaW9cIilcclxuICAgICAgICAgICAgICAuZmlsdGVyKFwiOnZpc2libGU6Zmlyc3RcIilcclxuICAgICAgICAgICAgICAudHJpZ2dlcihcInBsYXlcIilcclxuICAgICAgICAgICAgICAub25lKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgPyBEb2N1bWVudC5leGl0RnVsbHNjcmVlbigpXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy53ZWJraXRFeGl0RnVsbHNjcmVlbiAmJiB0aGlzLndlYmtpdEV4aXRGdWxsc2NyZWVuKCksXHJcbiAgICAgICAgICAgICAgICAgIGUubmV4dCgpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgby5vcHRzLmF1dG9Gb2N1cyAmJlxyXG4gICAgICAgICAgICBcImh0bWxcIiA9PT0gby5jb250ZW50VHlwZSAmJlxyXG4gICAgICAgICAgICAoKHQgPSBvLiRjb250ZW50LmZpbmQoXCJpbnB1dFthdXRvZm9jdXNdOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdFwiKSksXHJcbiAgICAgICAgICAgIHQubGVuZ3RoID8gdC50cmlnZ2VyKFwiZm9jdXNcIikgOiBlLmZvY3VzKG51bGwsICEwKSksXHJcbiAgICAgICAgICBvLiRzbGlkZS5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZWxvYWQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBuLFxyXG4gICAgICAgICAgbyA9IHRoaXM7XHJcbiAgICAgICAgby5ncm91cC5sZW5ndGggPCAyIHx8XHJcbiAgICAgICAgICAoKG4gPSBvLnNsaWRlc1tvLmN1cnJQb3MgKyAxXSksXHJcbiAgICAgICAgICAoZSA9IG8uc2xpZGVzW28uY3VyclBvcyAtIDFdKSxcclxuICAgICAgICAgIGUgJiYgZS50eXBlID09PSB0ICYmIG8ubG9hZFNsaWRlKGUpLFxyXG4gICAgICAgICAgbiAmJiBuLnR5cGUgPT09IHQgJiYgby5sb2FkU2xpZGUobikpO1xyXG4gICAgICB9LFxyXG4gICAgICBmb2N1czogZnVuY3Rpb24gKHQsIG8pIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBzID0gdGhpcyxcclxuICAgICAgICAgIHIgPSBbXHJcbiAgICAgICAgICAgIFwiYVtocmVmXVwiLFxyXG4gICAgICAgICAgICBcImFyZWFbaHJlZl1cIixcclxuICAgICAgICAgICAgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcbiAgICAgICAgICAgIFwic2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcclxuICAgICAgICAgICAgXCJ0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXHJcbiAgICAgICAgICAgIFwiYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcclxuICAgICAgICAgICAgXCJpZnJhbWVcIixcclxuICAgICAgICAgICAgXCJvYmplY3RcIixcclxuICAgICAgICAgICAgXCJlbWJlZFwiLFxyXG4gICAgICAgICAgICBcInZpZGVvXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW9cIixcclxuICAgICAgICAgICAgXCJbY29udGVudGVkaXRhYmxlXVwiLFxyXG4gICAgICAgICAgICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJyxcclxuICAgICAgICAgIF0uam9pbihcIixcIik7XHJcbiAgICAgICAgcy5pc0Nsb3NpbmcgfHxcclxuICAgICAgICAgICgoaSA9XHJcbiAgICAgICAgICAgICF0ICYmIHMuY3VycmVudCAmJiBzLmN1cnJlbnQuaXNDb21wbGV0ZVxyXG4gICAgICAgICAgICAgID8gcy5jdXJyZW50LiRzbGlkZS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICBcIio6dmlzaWJsZVwiICsgKG8gPyBcIjpub3QoLmZhbmN5Ym94LWNsb3NlLXNtYWxsKVwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IHMuJHJlZnMuY29udGFpbmVyLmZpbmQoXCIqOnZpc2libGVcIikpLFxyXG4gICAgICAgICAgKGkgPSBpLmZpbHRlcihyKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIFwiaGlkZGVuXCIgIT09IG4odGhpcykuY3NzKFwidmlzaWJpbGl0eVwiKSAmJlxyXG4gICAgICAgICAgICAgICFuKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGkubGVuZ3RoXHJcbiAgICAgICAgICAgID8gKChhID0gaS5pbmRleChlLmFjdGl2ZUVsZW1lbnQpKSxcclxuICAgICAgICAgICAgICB0ICYmIHQuc2hpZnRLZXlcclxuICAgICAgICAgICAgICAgID8gKGEgPCAwIHx8IDAgPT0gYSkgJiZcclxuICAgICAgICAgICAgICAgICAgKHQucHJldmVudERlZmF1bHQoKSwgaS5lcShpLmxlbmd0aCAtIDEpLnRyaWdnZXIoXCJmb2N1c1wiKSlcclxuICAgICAgICAgICAgICAgIDogKGEgPCAwIHx8IGEgPT0gaS5sZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAodCAmJiB0LnByZXZlbnREZWZhdWx0KCksIGkuZXEoMCkudHJpZ2dlcihcImZvY3VzXCIpKSlcclxuICAgICAgICAgICAgOiBzLiRyZWZzLmNvbnRhaW5lci50cmlnZ2VyKFwiZm9jdXNcIikpO1xyXG4gICAgICB9LFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICBuKFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBlID0gbih0aGlzKS5kYXRhKFwiRmFuY3lCb3hcIik7XHJcbiAgICAgICAgICBlICYmXHJcbiAgICAgICAgICAgIGUuaWQgIT09IHQuaWQgJiZcclxuICAgICAgICAgICAgIWUuaXNDbG9zaW5nICYmXHJcbiAgICAgICAgICAgIChlLnRyaWdnZXIoXCJvbkRlYWN0aXZhdGVcIiksIGUucmVtb3ZlRXZlbnRzKCksIChlLmlzVmlzaWJsZSA9ICExKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgICAodC5pc1Zpc2libGUgPSAhMCksXHJcbiAgICAgICAgICAodC5jdXJyZW50IHx8IHQuaXNJZGxlKSAmJiAodC51cGRhdGUoKSwgdC51cGRhdGVDb250cm9scygpKSxcclxuICAgICAgICAgIHQudHJpZ2dlcihcIm9uQWN0aXZhdGVcIiksXHJcbiAgICAgICAgICB0LmFkZEV2ZW50cygpO1xyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZTogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgbyxcclxuICAgICAgICAgIGksXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgcyxcclxuICAgICAgICAgIHIsXHJcbiAgICAgICAgICBjLFxyXG4gICAgICAgICAgbCxcclxuICAgICAgICAgIHUgPSB0aGlzLFxyXG4gICAgICAgICAgZiA9IHUuY3VycmVudCxcclxuICAgICAgICAgIGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHUuY2xlYW5VcCh0KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICF1LmlzQ2xvc2luZyAmJlxyXG4gICAgICAgICAgKCh1LmlzQ2xvc2luZyA9ICEwKSxcclxuICAgICAgICAgICExID09PSB1LnRyaWdnZXIoXCJiZWZvcmVDbG9zZVwiLCB0KVxyXG4gICAgICAgICAgICA/ICgodS5pc0Nsb3NpbmcgPSAhMSksXHJcbiAgICAgICAgICAgICAgZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICExKVxyXG4gICAgICAgICAgICA6ICh1LnJlbW92ZUV2ZW50cygpLFxyXG4gICAgICAgICAgICAgIChhID0gZi4kY29udGVudCksXHJcbiAgICAgICAgICAgICAgKG8gPSBmLm9wdHMuYW5pbWF0aW9uRWZmZWN0KSxcclxuICAgICAgICAgICAgICAoaSA9IG4uaXNOdW1lcmljKGUpID8gZSA6IG8gPyBmLm9wdHMuYW5pbWF0aW9uRHVyYXRpb24gOiAwKSxcclxuICAgICAgICAgICAgICBmLiRzbGlkZS5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1hbmltYXRlZFwiXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAhMCAhPT0gdCA/IG4uZmFuY3lib3guc3RvcChmLiRzbGlkZSkgOiAobyA9ICExKSxcclxuICAgICAgICAgICAgICBmLiRzbGlkZS5zaWJsaW5ncygpLnRyaWdnZXIoXCJvblJlc2V0XCIpLnJlbW92ZSgpLFxyXG4gICAgICAgICAgICAgIGkgJiZcclxuICAgICAgICAgICAgICAgIHUuJHJlZnMuY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLW9wZW5cIilcclxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtY2xvc2luZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBpICsgXCJtc1wiKSxcclxuICAgICAgICAgICAgICB1LmhpZGVMb2FkaW5nKGYpLFxyXG4gICAgICAgICAgICAgIHUuaGlkZUNvbnRyb2xzKCEwKSxcclxuICAgICAgICAgICAgICB1LnVwZGF0ZUN1cnNvcigpLFxyXG4gICAgICAgICAgICAgIFwiem9vbVwiICE9PSBvIHx8XHJcbiAgICAgICAgICAgICAgICAoYSAmJlxyXG4gICAgICAgICAgICAgICAgICBpICYmXHJcbiAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIiA9PT0gZi50eXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICF1LmlzTW92ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAhZi5oYXNFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgICAobCA9IHUuZ2V0VGh1bWJQb3MoZikpKSB8fFxyXG4gICAgICAgICAgICAgICAgKG8gPSBcImZhZGVcIiksXHJcbiAgICAgICAgICAgICAgXCJ6b29tXCIgPT09IG9cclxuICAgICAgICAgICAgICAgID8gKG4uZmFuY3lib3guc3RvcChhKSxcclxuICAgICAgICAgICAgICAgICAgKHMgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShhKSksXHJcbiAgICAgICAgICAgICAgICAgIChjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcy50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWDogcy53aWR0aCAvIGwud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiBzLmhlaWdodCAvIGwuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAociA9IGYub3B0cy56b29tT3BhY2l0eSksXHJcbiAgICAgICAgICAgICAgICAgIFwiYXV0b1wiID09IHIgJiZcclxuICAgICAgICAgICAgICAgICAgICAociA9XHJcbiAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmLndpZHRoIC8gZi5oZWlnaHQgLSBsLndpZHRoIC8gbC5oZWlnaHQpID4gMC4xKSxcclxuICAgICAgICAgICAgICAgICAgciAmJiAobC5vcGFjaXR5ID0gMCksXHJcbiAgICAgICAgICAgICAgICAgIG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKGEsIGMpLFxyXG4gICAgICAgICAgICAgICAgICBwKGEpLFxyXG4gICAgICAgICAgICAgICAgICBuLmZhbmN5Ym94LmFuaW1hdGUoYSwgbCwgaSwgaCksXHJcbiAgICAgICAgICAgICAgICAgICEwKVxyXG4gICAgICAgICAgICAgICAgOiAobyAmJiBpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuLmZhbmN5Ym94LmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuJHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtZngtXCIgKyBvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhMCA9PT0gdFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2V0VGltZW91dChoLCBpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCgpLFxyXG4gICAgICAgICAgICAgICAgICAhMCkpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsZWFuVXA6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHMgPSB0aGlzLFxyXG4gICAgICAgICAgciA9IHMuY3VycmVudC5vcHRzLiRvcmlnO1xyXG4gICAgICAgIHMuY3VycmVudC4kc2xpZGUudHJpZ2dlcihcIm9uUmVzZXRcIiksXHJcbiAgICAgICAgICBzLiRyZWZzLmNvbnRhaW5lci5lbXB0eSgpLnJlbW92ZSgpLFxyXG4gICAgICAgICAgcy50cmlnZ2VyKFwiYWZ0ZXJDbG9zZVwiLCBlKSxcclxuICAgICAgICAgIHMuY3VycmVudC5vcHRzLmJhY2tGb2N1cyAmJlxyXG4gICAgICAgICAgICAoKHIgJiYgci5sZW5ndGggJiYgci5pcyhcIjp2aXNpYmxlXCIpKSB8fCAociA9IHMuJHRyaWdnZXIpLFxyXG4gICAgICAgICAgICByICYmXHJcbiAgICAgICAgICAgICAgci5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAoKGkgPSB0LnNjcm9sbFgpLFxyXG4gICAgICAgICAgICAgIChhID0gdC5zY3JvbGxZKSxcclxuICAgICAgICAgICAgICByLnRyaWdnZXIoXCJmb2N1c1wiKSxcclxuICAgICAgICAgICAgICBuKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AoYSkuc2Nyb2xsTGVmdChpKSkpLFxyXG4gICAgICAgICAgKHMuY3VycmVudCA9IG51bGwpLFxyXG4gICAgICAgICAgKG8gPSBuLmZhbmN5Ym94LmdldEluc3RhbmNlKCkpLFxyXG4gICAgICAgICAgb1xyXG4gICAgICAgICAgICA/IG8uYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICA6IChuKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwiZmFuY3lib3gtYWN0aXZlIGNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBuKFwiI2ZhbmN5Ym94LXN0eWxlLW5vc2Nyb2xsXCIpLnJlbW92ZSgpKTtcclxuICAgICAgfSxcclxuICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgbyxcclxuICAgICAgICAgIGkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG4gICAgICAgICAgYSA9IHRoaXMsXHJcbiAgICAgICAgICBzID0gZSAmJiBlLm9wdHMgPyBlIDogYS5jdXJyZW50O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChzID8gaS51bnNoaWZ0KHMpIDogKHMgPSBhKSxcclxuICAgICAgICAgIGkudW5zaGlmdChhKSxcclxuICAgICAgICAgIG4uaXNGdW5jdGlvbihzLm9wdHNbdF0pICYmIChvID0gcy5vcHRzW3RdLmFwcGx5KHMsIGkpKSxcclxuICAgICAgICAgICExID09PSBvKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgIFwiYWZ0ZXJDbG9zZVwiICE9PSB0ICYmIGEuJHJlZnNcclxuICAgICAgICAgID8gYS4kcmVmcy5jb250YWluZXIudHJpZ2dlcih0ICsgXCIuZmJcIiwgaSlcclxuICAgICAgICAgIDogci50cmlnZ2VyKHQgKyBcIi5mYlwiLCBpKTtcclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlQ29udHJvbHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXMsXHJcbiAgICAgICAgICBvID0gdC5jdXJyZW50LFxyXG4gICAgICAgICAgaSA9IG8uaW5kZXgsXHJcbiAgICAgICAgICBhID0gdC4kcmVmcy5jb250YWluZXIsXHJcbiAgICAgICAgICBzID0gdC4kcmVmcy5jYXB0aW9uLFxyXG4gICAgICAgICAgciA9IG8ub3B0cy5jYXB0aW9uO1xyXG4gICAgICAgIG8uJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpLFxyXG4gICAgICAgICAgciAmJiByLmxlbmd0aFxyXG4gICAgICAgICAgICA/ICgodC4kY2FwdGlvbiA9IHMpLCBzLmNoaWxkcmVuKCkuZXEoMCkuaHRtbChyKSlcclxuICAgICAgICAgICAgOiAodC4kY2FwdGlvbiA9IG51bGwpLFxyXG4gICAgICAgICAgdC5oYXNIaWRkZW5Db250cm9scyB8fCB0LmlzSWRsZSB8fCB0LnNob3dDb250cm9scygpLFxyXG4gICAgICAgICAgYS5maW5kKFwiW2RhdGEtZmFuY3lib3gtY291bnRdXCIpLmh0bWwodC5ncm91cC5sZW5ndGgpLFxyXG4gICAgICAgICAgYS5maW5kKFwiW2RhdGEtZmFuY3lib3gtaW5kZXhdXCIpLmh0bWwoaSArIDEpLFxyXG4gICAgICAgICAgYVxyXG4gICAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LXByZXZdXCIpXHJcbiAgICAgICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgIW8ub3B0cy5sb29wICYmIGkgPD0gMCksXHJcbiAgICAgICAgICBhXHJcbiAgICAgICAgICAgIC5maW5kKFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIilcclxuICAgICAgICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCAhby5vcHRzLmxvb3AgJiYgaSA+PSB0Lmdyb3VwLmxlbmd0aCAtIDEpLFxyXG4gICAgICAgICAgXCJpbWFnZVwiID09PSBvLnR5cGVcclxuICAgICAgICAgICAgPyBhXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpXHJcbiAgICAgICAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImhyZWZcIiwgby5vcHRzLmltYWdlLnNyYyB8fCBvLnNyYylcclxuICAgICAgICAgICAgICAgIC5zaG93KClcclxuICAgICAgICAgICAgOiBvLm9wdHMudG9vbGJhciAmJlxyXG4gICAgICAgICAgICAgIGEuZmluZChcIltkYXRhLWZhbmN5Ym94LWRvd25sb2FkXSxbZGF0YS1mYW5jeWJveC16b29tXVwiKS5oaWRlKCksXHJcbiAgICAgICAgICBuKGUuYWN0aXZlRWxlbWVudCkuaXMoXCI6aGlkZGVuLFtkaXNhYmxlZF1cIikgJiZcclxuICAgICAgICAgICAgdC4kcmVmcy5jb250YWluZXIudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBoaWRlQ29udHJvbHM6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLFxyXG4gICAgICAgICAgbiA9IFtcImluZm9iYXJcIiwgXCJ0b29sYmFyXCIsIFwibmF2XCJdO1xyXG4gICAgICAgICghdCAmJiBlLmN1cnJlbnQub3B0cy5wcmV2ZW50Q2FwdGlvbk92ZXJsYXApIHx8IG4ucHVzaChcImNhcHRpb25cIiksXHJcbiAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgblxyXG4gICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImZhbmN5Ym94LXNob3ctXCIgKyB0O1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgKHRoaXMuaGFzSGlkZGVuQ29udHJvbHMgPSAhMCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dDb250cm9sczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcyxcclxuICAgICAgICAgIGUgPSB0LmN1cnJlbnQgPyB0LmN1cnJlbnQub3B0cyA6IHQub3B0cyxcclxuICAgICAgICAgIG4gPSB0LiRyZWZzLmNvbnRhaW5lcjtcclxuICAgICAgICAodC5oYXNIaWRkZW5Db250cm9scyA9ICExKSxcclxuICAgICAgICAgICh0LmlkbGVTZWNvbmRzQ291bnRlciA9IDApLFxyXG4gICAgICAgICAgblxyXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRvb2xiYXJcIiwgISghZS50b29sYmFyIHx8ICFlLmJ1dHRvbnMpKVxyXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgXCJmYW5jeWJveC1zaG93LWluZm9iYXJcIixcclxuICAgICAgICAgICAgICAhIShlLmluZm9iYXIgJiYgdC5ncm91cC5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctY2FwdGlvblwiLCAhIXQuJGNhcHRpb24pXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcclxuICAgICAgICAgICAgICBcImZhbmN5Ym94LXNob3ctbmF2XCIsXHJcbiAgICAgICAgICAgICAgISEoZS5hcnJvd3MgJiYgdC5ncm91cC5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWlzLW1vZGFsXCIsICEhZS5tb2RhbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvZ2dsZUNvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5oYXNIaWRkZW5Db250cm9scyA/IHRoaXMuc2hvd0NvbnRyb2xzKCkgOiB0aGlzLmhpZGVDb250cm9scygpO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICAgIChuLmZhbmN5Ym94ID0ge1xyXG4gICAgICAgIHZlcnNpb246IFwiMy41LjdcIixcclxuICAgICAgICBkZWZhdWx0czogYSxcclxuICAgICAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHZhciBlID0gbihcclxuICAgICAgICAgICAgICAnLmZhbmN5Ym94LWNvbnRhaW5lcjpub3QoXCIuZmFuY3lib3gtaXMtY2xvc2luZ1wiKTpsYXN0J1xyXG4gICAgICAgICAgICApLmRhdGEoXCJGYW5jeUJveFwiKSxcclxuICAgICAgICAgICAgbyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlIGluc3RhbmNlb2YgYiAmJlxyXG4gICAgICAgICAgICAoXCJzdHJpbmdcIiA9PT0gbi50eXBlKHQpXHJcbiAgICAgICAgICAgICAgPyBlW3RdLmFwcGx5KGUsIG8pXHJcbiAgICAgICAgICAgICAgOiBcImZ1bmN0aW9uXCIgPT09IG4udHlwZSh0KSAmJiB0LmFwcGx5KGUsIG8pLFxyXG4gICAgICAgICAgICBlKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wZW46IGZ1bmN0aW9uICh0LCBlLCBuKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IGIodCwgZSwgbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHZhciBlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgZSAmJiAoZS5jbG9zZSgpLCAhMCA9PT0gdCAmJiB0aGlzLmNsb3NlKHQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoITApLCByLmFkZChcImJvZHlcIikub2ZmKFwiY2xpY2suZmItc3RhcnRcIiwgXCIqKlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzTW9iaWxlOiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXHJcbiAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgKSxcclxuICAgICAgICB1c2UzZDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBuID0gZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdC5nZXRDb21wdXRlZFN0eWxlICYmXHJcbiAgICAgICAgICAgIHQuZ2V0Q29tcHV0ZWRTdHlsZShuKSAmJlxyXG4gICAgICAgICAgICB0LmdldENvbXB1dGVkU3R5bGUobikuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKSAmJlxyXG4gICAgICAgICAgICAhKGUuZG9jdW1lbnRNb2RlICYmIGUuZG9jdW1lbnRNb2RlIDwgMTEpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pKCksXHJcbiAgICAgICAgZ2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdmFyIGU7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhKCF0IHx8ICF0Lmxlbmd0aCkgJiZcclxuICAgICAgICAgICAgKChlID0gdFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b3A6IGUudG9wIHx8IDAsXHJcbiAgICAgICAgICAgICAgbGVmdDogZS5sZWZ0IHx8IDAsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGUud2lkdGgsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBlLmhlaWdodCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KHQuY3NzKFwib3BhY2l0eVwiKSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgdmFyIG4gPSBcIlwiLFxyXG4gICAgICAgICAgICBvID0ge307XHJcbiAgICAgICAgICBpZiAodCAmJiBlKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICh2b2lkIDAgPT09IGUubGVmdCAmJiB2b2lkIDAgPT09IGUudG9wKSB8fFxyXG4gICAgICAgICAgICAgICAgKChuID1cclxuICAgICAgICAgICAgICAgICAgKHZvaWQgMCA9PT0gZS5sZWZ0ID8gdC5wb3NpdGlvbigpLmxlZnQgOiBlLmxlZnQpICtcclxuICAgICAgICAgICAgICAgICAgXCJweCwgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAodm9pZCAwID09PSBlLnRvcCA/IHQucG9zaXRpb24oKS50b3AgOiBlLnRvcCkgK1xyXG4gICAgICAgICAgICAgICAgICBcInB4XCIpLFxyXG4gICAgICAgICAgICAgICAgKG4gPSB0aGlzLnVzZTNkXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2xhdGUzZChcIiArIG4gKyBcIiwgMHB4KVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc2xhdGUoXCIgKyBuICsgXCIpXCIpKSxcclxuICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuc2NhbGVYICYmIHZvaWQgMCAhPT0gZS5zY2FsZVlcclxuICAgICAgICAgICAgICAgID8gKG4gKz0gXCIgc2NhbGUoXCIgKyBlLnNjYWxlWCArIFwiLCBcIiArIGUuc2NhbGVZICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICA6IHZvaWQgMCAhPT0gZS5zY2FsZVggJiYgKG4gKz0gXCIgc2NhbGVYKFwiICsgZS5zY2FsZVggKyBcIilcIiksXHJcbiAgICAgICAgICAgICAgbi5sZW5ndGggJiYgKG8udHJhbnNmb3JtID0gbiksXHJcbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLm9wYWNpdHkgJiYgKG8ub3BhY2l0eSA9IGUub3BhY2l0eSksXHJcbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLndpZHRoICYmIChvLndpZHRoID0gZS53aWR0aCksXHJcbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLmhlaWdodCAmJiAoby5oZWlnaHQgPSBlLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgdC5jc3MobylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGU6IGZ1bmN0aW9uICh0LCBlLCBvLCBpLCBhKSB7XHJcbiAgICAgICAgICB2YXIgcyxcclxuICAgICAgICAgICAgciA9IHRoaXM7XHJcbiAgICAgICAgICBuLmlzRnVuY3Rpb24obykgJiYgKChpID0gbyksIChvID0gbnVsbCkpLFxyXG4gICAgICAgICAgICByLnN0b3AodCksXHJcbiAgICAgICAgICAgIChzID0gci5nZXRUcmFuc2xhdGUodCkpLFxyXG4gICAgICAgICAgICB0Lm9uKGYsIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgKCFjIHx8XHJcbiAgICAgICAgICAgICAgICAhYy5vcmlnaW5hbEV2ZW50IHx8XHJcbiAgICAgICAgICAgICAgICAodC5pcyhjLm9yaWdpbmFsRXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICBcInotaW5kZXhcIiAhPSBjLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lKSkgJiZcclxuICAgICAgICAgICAgICAgIChyLnN0b3AodCksXHJcbiAgICAgICAgICAgICAgICBuLmlzTnVtZXJpYyhvKSAmJiB0LmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBuLmlzUGxhaW5PYmplY3QoZSlcclxuICAgICAgICAgICAgICAgICAgPyB2b2lkIDAgIT09IGUuc2NhbGVYICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLnNjYWxlWSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHIuc2V0VHJhbnNsYXRlKHQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBlLmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcy53aWR0aCAqIGUuc2NhbGVYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzLmhlaWdodCAqIGUuc2NhbGVZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogITAgIT09IGEgJiYgdC5yZW1vdmVDbGFzcyhlKSxcclxuICAgICAgICAgICAgICAgIG4uaXNGdW5jdGlvbihpKSAmJiBpKGMpKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG4uaXNOdW1lcmljKG8pICYmIHQuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBvICsgXCJtc1wiKSxcclxuICAgICAgICAgICAgbi5pc1BsYWluT2JqZWN0KGUpXHJcbiAgICAgICAgICAgICAgPyAodm9pZCAwICE9PSBlLnNjYWxlWCAmJlxyXG4gICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuc2NhbGVZICYmXHJcbiAgICAgICAgICAgICAgICAgIChkZWxldGUgZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlIGUuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICB0LnBhcmVudCgpLmhhc0NsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWltYWdlXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdC5wYXJlbnQoKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIikpLFxyXG4gICAgICAgICAgICAgICAgbi5mYW5jeWJveC5zZXRUcmFuc2xhdGUodCwgZSkpXHJcbiAgICAgICAgICAgICAgOiB0LmFkZENsYXNzKGUpLFxyXG4gICAgICAgICAgICB0LmRhdGEoXHJcbiAgICAgICAgICAgICAgXCJ0aW1lclwiLFxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdC50cmlnZ2VyKGYpO1xyXG4gICAgICAgICAgICAgIH0sIG8gKyAzMylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICB0ICYmXHJcbiAgICAgICAgICAgIHQubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChjbGVhclRpbWVvdXQodC5kYXRhKFwidGltZXJcIikpLFxyXG4gICAgICAgICAgICBlICYmIHQudHJpZ2dlcihmKSxcclxuICAgICAgICAgICAgdC5vZmYoZikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBcIlwiKSxcclxuICAgICAgICAgICAgdC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXNjYWxpbmdcIikpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICAobi5mbi5mYW5jeWJveCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICh0ID0gdCB8fCB7fSksXHJcbiAgICAgICAgICAoZSA9IHQuc2VsZWN0b3IgfHwgITEpLFxyXG4gICAgICAgICAgZVxyXG4gICAgICAgICAgICA/IG4oXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKFwiY2xpY2suZmItc3RhcnRcIiwgZSlcclxuICAgICAgICAgICAgICAgIC5vbihcImNsaWNrLmZiLXN0YXJ0XCIsIGUsIHsgb3B0aW9uczogdCB9LCBpKVxyXG4gICAgICAgICAgICA6IHRoaXMub2ZmKFwiY2xpY2suZmItc3RhcnRcIikub24oXHJcbiAgICAgICAgICAgICAgICBcImNsaWNrLmZiLXN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLCBvcHRpb25zOiB0IH0sXHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgci5vbihcImNsaWNrLmZiLXN0YXJ0XCIsIFwiW2RhdGEtZmFuY3lib3hdXCIsIGkpLFxyXG4gICAgICByLm9uKFwiY2xpY2suZmItc3RhcnRcIiwgXCJbZGF0YS1mYW5jeWJveC10cmlnZ2VyXVwiLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIG4oJ1tkYXRhLWZhbmN5Ym94PVwiJyArIG4odGhpcykuYXR0cihcImRhdGEtZmFuY3lib3gtdHJpZ2dlclwiKSArICdcIl0nKVxyXG4gICAgICAgICAgLmVxKG4odGhpcykuYXR0cihcImRhdGEtZmFuY3lib3gtaW5kZXhcIikgfHwgMClcclxuICAgICAgICAgIC50cmlnZ2VyKFwiY2xpY2suZmItc3RhcnRcIiwgeyAkdHJpZ2dlcjogbih0aGlzKSB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSBudWxsO1xyXG4gICAgICAgIHIub24oXCJtb3VzZWRvd24gbW91c2V1cCBmb2N1cyBibHVyXCIsIFwiLmZhbmN5Ym94LWJ1dHRvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxyXG4gICAgICAgICAgICAgIHQgPSBuKHRoaXMpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICAgICAgICAgIHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9jdXNpblwiOlxyXG4gICAgICAgICAgICAgIG4oXCIuZmFuY3lib3gtYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtZm9jdXNcIiksXHJcbiAgICAgICAgICAgICAgICBuKHRoaXMpLmlzKHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgIG4odGhpcykuaXMoXCJbZGlzYWJsZWRdXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgIG4odGhpcykuYWRkQ2xhc3MoXCJmYW5jeWJveC1mb2N1c1wiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZvY3Vzb3V0XCI6XHJcbiAgICAgICAgICAgICAgbihcIi5mYW5jeWJveC1idXR0b25cIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1mb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSkoKTtcclxuICB9XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSksXHJcbiAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBlID0ge1xyXG4gICAgICAgIHlvdXR1YmU6IHtcclxuICAgICAgICAgIG1hdGNoZXI6IC8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlfHlvdXR1YmVcXC1ub2Nvb2tpZVxcLmNvbSlcXC8od2F0Y2hcXD8oLiomKT92PXx2XFwvfHVcXC98ZW1iZWRcXC8/KT8odmlkZW9zZXJpZXNcXD9saXN0PSguKil8W1xcdy1dezExfXxcXD9saXN0VHlwZT0oLiopJmxpc3Q9KC4qKSkoLiopL2ksXHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgICAgIGF1dG9oaWRlOiAxLFxyXG4gICAgICAgICAgICBmczogMSxcclxuICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgICBoZDogMSxcclxuICAgICAgICAgICAgd21vZGU6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXHJcbiAgICAgICAgICAgIGh0bWw1OiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhcmFtUGxhY2U6IDgsXHJcbiAgICAgICAgICB0eXBlOiBcImlmcmFtZVwiLFxyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLyQ0XCIsXHJcbiAgICAgICAgICB0aHVtYjogXCJodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8kNC9ocWRlZmF1bHQuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aW1lbzoge1xyXG4gICAgICAgICAgbWF0Y2hlcjogL14uK3ZpbWVvLmNvbVxcLyguKlxcLyk/KFtcXGRdKykoLiopPy8sXHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgICAgIGhkOiAxLFxyXG4gICAgICAgICAgICBzaG93X3RpdGxlOiAxLFxyXG4gICAgICAgICAgICBzaG93X2J5bGluZTogMSxcclxuICAgICAgICAgICAgc2hvd19wb3J0cmFpdDogMCxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYXJhbVBsYWNlOiAzLFxyXG4gICAgICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgICAgIHVybDogXCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJDJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgICAgbWF0Y2hlcjogLyhpbnN0YWdyXFwuYW18aW5zdGFncmFtXFwuY29tKVxcL3BcXC8oW2EtekEtWjAtOV9cXC1dKylcXC8/L2ksXHJcbiAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICB1cmw6IFwiLy8kMS9wLyQyL21lZGlhLz9zaXplPWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdtYXBfcGxhY2U6IHtcclxuICAgICAgICAgIG1hdGNoZXI6IC8obWFwc1xcLik/Z29vZ2xlXFwuKFthLXpdezIsM30oXFwuW2Etel17Mn0pPylcXC8oKChtYXBzXFwvKHBsYWNlXFwvKC4qKVxcLyk/XFxAKC4qKSwoXFxkKy4/XFxkKz8peikpfChcXD9sbD0pKSguKik/L2ksXHJcbiAgICAgICAgICB0eXBlOiBcImlmcmFtZVwiLFxyXG4gICAgICAgICAgdXJsOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIFwiLy9tYXBzLmdvb2dsZS5cIiArXHJcbiAgICAgICAgICAgICAgdFsyXSArXHJcbiAgICAgICAgICAgICAgXCIvP2xsPVwiICtcclxuICAgICAgICAgICAgICAodFs5XVxyXG4gICAgICAgICAgICAgICAgPyB0WzldICtcclxuICAgICAgICAgICAgICAgICAgXCImej1cIiArXHJcbiAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodFsxMF0pICtcclxuICAgICAgICAgICAgICAgICAgKHRbMTJdID8gdFsxMl0ucmVwbGFjZSgvXlxcLy8sIFwiJlwiKSA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICA6IHRbMTJdICsgXCJcIlxyXG4gICAgICAgICAgICAgICkucmVwbGFjZSgvXFw/LywgXCImXCIpICtcclxuICAgICAgICAgICAgICBcIiZvdXRwdXQ9XCIgK1xyXG4gICAgICAgICAgICAgICh0WzEyXSAmJiB0WzEyXS5pbmRleE9mKFwibGF5ZXI9Y1wiKSA+IDAgPyBcInN2ZW1iZWRcIiA6IFwiZW1iZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnbWFwX3NlYXJjaDoge1xyXG4gICAgICAgICAgbWF0Y2hlcjogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLyhtYXBzXFwvc2VhcmNoXFwvKSguKikvaSxcclxuICAgICAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXHJcbiAgICAgICAgICB1cmw6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgXCIvL21hcHMuZ29vZ2xlLlwiICtcclxuICAgICAgICAgICAgICB0WzJdICtcclxuICAgICAgICAgICAgICBcIi9tYXBzP3E9XCIgK1xyXG4gICAgICAgICAgICAgIHRbNV0ucmVwbGFjZShcInF1ZXJ5PVwiLCBcInE9XCIpLnJlcGxhY2UoXCJhcGk9MVwiLCBcIlwiKSArXHJcbiAgICAgICAgICAgICAgXCImb3V0cHV0PWVtYmVkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbiA9IGZ1bmN0aW9uIChlLCBuLCBvKSB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAobyA9IG8gfHwgXCJcIiksXHJcbiAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHQudHlwZShvKSAmJiAobyA9IHQucGFyYW0obywgITApKSxcclxuICAgICAgICAgICAgdC5lYWNoKG4sIGZ1bmN0aW9uICh0LCBuKSB7XHJcbiAgICAgICAgICAgICAgZSA9IGUucmVwbGFjZShcIiRcIiArIHQsIG4gfHwgXCJcIik7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBvLmxlbmd0aCAmJiAoZSArPSAoZS5pbmRleE9mKFwiP1wiKSA+IDAgPyBcIiZcIiA6IFwiP1wiKSArIG8pLFxyXG4gICAgICAgICAgICBlXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgdChkb2N1bWVudCkub24oXCJvYmplY3ROZWVkc1R5cGUuZmJcIiwgZnVuY3Rpb24gKG8sIGksIGEpIHtcclxuICAgICAgdmFyIHMsXHJcbiAgICAgICAgcixcclxuICAgICAgICBjLFxyXG4gICAgICAgIGwsXHJcbiAgICAgICAgZCxcclxuICAgICAgICB1LFxyXG4gICAgICAgIGYsXHJcbiAgICAgICAgcCA9IGEuc3JjIHx8IFwiXCIsXHJcbiAgICAgICAgaCA9ICExO1xyXG4gICAgICAocyA9IHQuZXh0ZW5kKCEwLCB7fSwgZSwgYS5vcHRzLm1lZGlhKSksXHJcbiAgICAgICAgdC5lYWNoKHMsIGZ1bmN0aW9uIChlLCBvKSB7XHJcbiAgICAgICAgICBpZiAoKGMgPSBwLm1hdGNoKG8ubWF0Y2hlcikpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoKGggPSBvLnR5cGUpLCAoZiA9IGUpLCAodSA9IHt9KSwgby5wYXJhbVBsYWNlICYmIGNbby5wYXJhbVBsYWNlXSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgKGQgPSBjW28ucGFyYW1QbGFjZV0pLFxyXG4gICAgICAgICAgICAgICAgXCI/XCIgPT0gZFswXSAmJiAoZCA9IGQuc3Vic3RyaW5nKDEpKSxcclxuICAgICAgICAgICAgICAgIChkID0gZC5zcGxpdChcIiZcIikpO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBkW2ldLnNwbGl0KFwiPVwiLCAyKTtcclxuICAgICAgICAgICAgICAgIDIgPT0gcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgKHVbc1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQoc1sxXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgKGwgPSB0LmV4dGVuZCghMCwge30sIG8ucGFyYW1zLCBhLm9wdHNbZV0sIHUpKSxcclxuICAgICAgICAgICAgICAocCA9XHJcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHQudHlwZShvLnVybClcclxuICAgICAgICAgICAgICAgICAgPyBvLnVybC5jYWxsKHRoaXMsIGMsIGwsIGEpXHJcbiAgICAgICAgICAgICAgICAgIDogbihvLnVybCwgYywgbCkpLFxyXG4gICAgICAgICAgICAgIChyID1cclxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdC50eXBlKG8udGh1bWIpXHJcbiAgICAgICAgICAgICAgICAgID8gby50aHVtYi5jYWxsKHRoaXMsIGMsIGwsIGEpXHJcbiAgICAgICAgICAgICAgICAgIDogbihvLnRodW1iLCBjKSksXHJcbiAgICAgICAgICAgICAgXCJ5b3V0dWJlXCIgPT09IGVcclxuICAgICAgICAgICAgICAgID8gKHAgPSBwLnJlcGxhY2UoLyZ0PSgoXFxkKyltKT8oXFxkKylzLywgZnVuY3Rpb24gKHQsIGUsIG4sIG8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCImc3RhcnQ9XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKChuID8gNjAgKiBwYXJzZUludChuLCAxMCkgOiAwKSArIHBhcnNlSW50KG8sIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIDogXCJ2aW1lb1wiID09PSBlICYmIChwID0gcC5yZXBsYWNlKFwiJiUyM1wiLCBcIiNcIikpLFxyXG4gICAgICAgICAgICAgICExXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaFxyXG4gICAgICAgICAgPyAoYS5vcHRzLnRodW1iIHx8XHJcbiAgICAgICAgICAgICAgKGEub3B0cy4kdGh1bWIgJiYgYS5vcHRzLiR0aHVtYi5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgKGEub3B0cy50aHVtYiA9IHIpLFxyXG4gICAgICAgICAgICBcImlmcmFtZVwiID09PSBoICYmXHJcbiAgICAgICAgICAgICAgKGEub3B0cyA9IHQuZXh0ZW5kKCEwLCBhLm9wdHMsIHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZTogeyBwcmVsb2FkOiAhMSwgYXR0cjogeyBzY3JvbGxpbmc6IFwibm9cIiB9IH0sXHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0LmV4dGVuZChhLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogaCxcclxuICAgICAgICAgICAgICBzcmM6IHAsXHJcbiAgICAgICAgICAgICAgb3JpZ1NyYzogYS5zcmMsXHJcbiAgICAgICAgICAgICAgY29udGVudFNvdXJjZTogZixcclxuICAgICAgICAgICAgICBjb250ZW50VHlwZTpcclxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIiA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICA/IFwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiZ21hcF9wbGFjZVwiID09IGYgfHwgXCJnbWFwX3NlYXJjaFwiID09IGZcclxuICAgICAgICAgICAgICAgICAgPyBcIm1hcFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ2aWRlb1wiLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIDogcCAmJiAoYS50eXBlID0gYS5vcHRzLmRlZmF1bHRUeXBlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIG8gPSB7XHJcbiAgICAgIHlvdXR1YmU6IHtcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiLFxyXG4gICAgICAgIGNsYXNzOiBcIllUXCIsXHJcbiAgICAgICAgbG9hZGluZzogITEsXHJcbiAgICAgICAgbG9hZGVkOiAhMSxcclxuICAgICAgfSxcclxuICAgICAgdmltZW86IHtcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIixcclxuICAgICAgICBjbGFzczogXCJWaW1lb1wiLFxyXG4gICAgICAgIGxvYWRpbmc6ICExLFxyXG4gICAgICAgIGxvYWRlZDogITEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUsXHJcbiAgICAgICAgICBuID0gdGhpcztcclxuICAgICAgICBpZiAodGhpc1t0XS5sb2FkZWQpXHJcbiAgICAgICAgICByZXR1cm4gdm9pZCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbi5kb25lKHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpc1t0XS5sb2FkaW5nIHx8XHJcbiAgICAgICAgICAoKHRoaXNbdF0ubG9hZGluZyA9ICEwKSxcclxuICAgICAgICAgIChlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSksXHJcbiAgICAgICAgICAoZS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIiksXHJcbiAgICAgICAgICAoZS5zcmMgPSB0aGlzW3RdLnNyYyksXHJcbiAgICAgICAgICBcInlvdXR1YmVcIiA9PT0gdFxyXG4gICAgICAgICAgICA/ICh3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAoblt0XS5sb2FkZWQgPSAhMCksIG4uZG9uZSh0KTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IChlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIChuW3RdLmxvYWRlZCA9ICEwKSwgbi5kb25lKHQpO1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRvbmU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG4sIG8sIGk7XHJcbiAgICAgICAgXCJ5b3V0dWJlXCIgPT09IGUgJiYgZGVsZXRlIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSxcclxuICAgICAgICAgIChuID0gdC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpKSAmJlxyXG4gICAgICAgICAgICAoKG8gPSBuLmN1cnJlbnQuJGNvbnRlbnQuZmluZChcImlmcmFtZVwiKSksXHJcbiAgICAgICAgICAgIFwieW91dHViZVwiID09PSBlICYmIHZvaWQgMCAhPT0gWVQgJiYgWVRcclxuICAgICAgICAgICAgICA/IChpID0gbmV3IFlULlBsYXllcihvLmF0dHIoXCJpZFwiKSwge1xyXG4gICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgMCA9PSB0LmRhdGEgJiYgbi5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIDogXCJ2aW1lb1wiID09PSBlICYmXHJcbiAgICAgICAgICAgICAgICB2b2lkIDAgIT09IFZpbWVvICYmXHJcbiAgICAgICAgICAgICAgICBWaW1lbyAmJlxyXG4gICAgICAgICAgICAgICAgKChpID0gbmV3IFZpbWVvLlBsYXllcihvKSksXHJcbiAgICAgICAgICAgICAgICBpLm9uKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBuLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdChkb2N1bWVudCkub24oe1xyXG4gICAgICBcImFmdGVyU2hvdy5mYlwiOiBmdW5jdGlvbiAodCwgZSwgbikge1xyXG4gICAgICAgIGUuZ3JvdXAubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgKFwieW91dHViZVwiID09PSBuLmNvbnRlbnRTb3VyY2UgfHwgXCJ2aW1lb1wiID09PSBuLmNvbnRlbnRTb3VyY2UpICYmXHJcbiAgICAgICAgICBvLmxvYWQobi5jb250ZW50U291cmNlKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKGZ1bmN0aW9uICh0LCBlLCBuKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBvID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgIHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICB0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgdC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5zZXRUaW1lb3V0KGUsIDFlMyAvIDYwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KSgpLFxyXG4gICAgICBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdC5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgdC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgdC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgdC5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHQuY2xlYXJUaW1lb3V0KGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pKCksXHJcbiAgICAgIGEgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBuID0gW107XHJcbiAgICAgICAgKGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZSB8fCB0LmUpLFxyXG4gICAgICAgICAgKGUgPVxyXG4gICAgICAgICAgICBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgID8gZS50b3VjaGVzXHJcbiAgICAgICAgICAgICAgOiBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBlLmNoYW5nZWRUb3VjaGVzXHJcbiAgICAgICAgICAgICAgOiBbZV0pO1xyXG4gICAgICAgIGZvciAodmFyIG8gaW4gZSlcclxuICAgICAgICAgIGVbb10ucGFnZVhcclxuICAgICAgICAgICAgPyBuLnB1c2goeyB4OiBlW29dLnBhZ2VYLCB5OiBlW29dLnBhZ2VZIH0pXHJcbiAgICAgICAgICAgIDogZVtvXS5jbGllbnRYICYmIG4ucHVzaCh7IHg6IGVbb10uY2xpZW50WCwgeTogZVtvXS5jbGllbnRZIH0pO1xyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgICB9LFxyXG4gICAgICBzID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcclxuICAgICAgICByZXR1cm4gZSAmJiB0XHJcbiAgICAgICAgICA/IFwieFwiID09PSBuXHJcbiAgICAgICAgICAgID8gdC54IC0gZS54XHJcbiAgICAgICAgICAgIDogXCJ5XCIgPT09IG5cclxuICAgICAgICAgICAgPyB0LnkgLSBlLnlcclxuICAgICAgICAgICAgOiBNYXRoLnNxcnQoTWF0aC5wb3codC54IC0gZS54LCAyKSArIE1hdGgucG93KHQueSAtIGUueSwgMikpXHJcbiAgICAgICAgICA6IDA7XHJcbiAgICAgIH0sXHJcbiAgICAgIHIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHQuaXMoXHJcbiAgICAgICAgICAgICdhLGFyZWEsYnV0dG9uLFtyb2xlPVwiYnV0dG9uXCJdLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhLHZpZGVvLGF1ZGlvLGlmcmFtZSdcclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIG4uaXNGdW5jdGlvbih0LmdldCgwKS5vbmNsaWNrKSB8fFxyXG4gICAgICAgICAgdC5kYXRhKFwic2VsZWN0YWJsZVwiKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICBmb3IgKHZhciBlID0gMCwgbyA9IHRbMF0uYXR0cmlidXRlcywgaSA9IG8ubGVuZ3RoOyBlIDwgaTsgZSsrKVxyXG4gICAgICAgICAgaWYgKFwiZGF0YS1mYW5jeWJveC1cIiA9PT0gb1tlXS5ub2RlTmFtZS5zdWJzdHIoMCwgMTQpKSByZXR1cm4gITA7XHJcbiAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICB9LFxyXG4gICAgICBjID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgbiA9IHQuZ2V0Q29tcHV0ZWRTdHlsZShlKVtcIm92ZXJmbG93LXlcIl0sXHJcbiAgICAgICAgICBvID0gdC5nZXRDb21wdXRlZFN0eWxlKGUpW1wib3ZlcmZsb3cteFwiXSxcclxuICAgICAgICAgIGkgPVxyXG4gICAgICAgICAgICAoXCJzY3JvbGxcIiA9PT0gbiB8fCBcImF1dG9cIiA9PT0gbikgJiYgZS5zY3JvbGxIZWlnaHQgPiBlLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgIGEgPSAoXCJzY3JvbGxcIiA9PT0gbyB8fCBcImF1dG9cIiA9PT0gbykgJiYgZS5zY3JvbGxXaWR0aCA+IGUuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIGkgfHwgYTtcclxuICAgICAgfSxcclxuICAgICAgbCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgZSA9ICExOyA7ICkge1xyXG4gICAgICAgICAgaWYgKChlID0gYyh0LmdldCgwKSkpKSBicmVhaztcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCh0ID0gdC5wYXJlbnQoKSksXHJcbiAgICAgICAgICAgICF0Lmxlbmd0aCB8fCB0Lmhhc0NsYXNzKFwiZmFuY3lib3gtc3RhZ2VcIikgfHwgdC5pcyhcImJvZHlcIikpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZTtcclxuICAgICAgfSxcclxuICAgICAgZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIChlLmluc3RhbmNlID0gdCksXHJcbiAgICAgICAgICAoZS4kYmcgPSB0LiRyZWZzLmJnKSxcclxuICAgICAgICAgIChlLiRzdGFnZSA9IHQuJHJlZnMuc3RhZ2UpLFxyXG4gICAgICAgICAgKGUuJGNvbnRhaW5lciA9IHQuJHJlZnMuY29udGFpbmVyKSxcclxuICAgICAgICAgIGUuZGVzdHJveSgpLFxyXG4gICAgICAgICAgZS4kY29udGFpbmVyLm9uKFxyXG4gICAgICAgICAgICBcInRvdWNoc3RhcnQuZmIudG91Y2ggbW91c2Vkb3duLmZiLnRvdWNoXCIsXHJcbiAgICAgICAgICAgIG4ucHJveHkoZSwgXCJvbnRvdWNoc3RhcnRcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICAoZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICB0LiRjb250YWluZXIub2ZmKFwiLmZiLnRvdWNoXCIpLFxyXG4gICAgICAgIG4oZSkub2ZmKFwiLmZiLnRvdWNoXCIpLFxyXG4gICAgICAgIHQucmVxdWVzdElkICYmIChpKHQucmVxdWVzdElkKSwgKHQucmVxdWVzdElkID0gbnVsbCkpLFxyXG4gICAgICAgIHQudGFwcGVkICYmIChjbGVhclRpbWVvdXQodC50YXBwZWQpLCAodC50YXBwZWQgPSBudWxsKSk7XHJcbiAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLFxyXG4gICAgICAgICAgYyA9IG4oby50YXJnZXQpLFxyXG4gICAgICAgICAgZCA9IGkuaW5zdGFuY2UsXHJcbiAgICAgICAgICB1ID0gZC5jdXJyZW50LFxyXG4gICAgICAgICAgZiA9IHUuJHNsaWRlLFxyXG4gICAgICAgICAgcCA9IHUuJGNvbnRlbnQsXHJcbiAgICAgICAgICBoID0gXCJ0b3VjaHN0YXJ0XCIgPT0gby50eXBlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChoICYmIGkuJGNvbnRhaW5lci5vZmYoXCJtb3VzZWRvd24uZmIudG91Y2hcIiksXHJcbiAgICAgICAgICAoIW8ub3JpZ2luYWxFdmVudCB8fCAyICE9IG8ub3JpZ2luYWxFdmVudC5idXR0b24pICYmXHJcbiAgICAgICAgICAgIGYubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICFyKGMpICYmXHJcbiAgICAgICAgICAgICFyKGMucGFyZW50KCkpICYmXHJcbiAgICAgICAgICAgIChjLmlzKFwiaW1nXCIpIHx8XHJcbiAgICAgICAgICAgICAgIShvLm9yaWdpbmFsRXZlbnQuY2xpZW50WCA+IGNbMF0uY2xpZW50V2lkdGggKyBjLm9mZnNldCgpLmxlZnQpKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmICghdSB8fCBkLmlzQW5pbWF0aW5nIHx8IHUuJHNsaWRlLmhhc0NsYXNzKFwiZmFuY3lib3gtYW5pbWF0ZWRcIikpXHJcbiAgICAgICAgICAgIHJldHVybiBvLnN0b3BQcm9wYWdhdGlvbigpLCB2b2lkIG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIChpLnJlYWxQb2ludHMgPSBpLnN0YXJ0UG9pbnRzID0gYShvKSksXHJcbiAgICAgICAgICAgIGkuc3RhcnRQb2ludHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgKHUudG91Y2ggJiYgby5zdG9wUHJvcGFnYXRpb24oKSxcclxuICAgICAgICAgICAgICAoaS5zdGFydEV2ZW50ID0gbyksXHJcbiAgICAgICAgICAgICAgKGkuY2FuVGFwID0gITApLFxyXG4gICAgICAgICAgICAgIChpLiR0YXJnZXQgPSBjKSxcclxuICAgICAgICAgICAgICAoaS4kY29udGVudCA9IHApLFxyXG4gICAgICAgICAgICAgIChpLm9wdHMgPSB1Lm9wdHMudG91Y2gpLFxyXG4gICAgICAgICAgICAgIChpLmlzUGFubmluZyA9ICExKSxcclxuICAgICAgICAgICAgICAoaS5pc1N3aXBpbmcgPSAhMSksXHJcbiAgICAgICAgICAgICAgKGkuaXNab29taW5nID0gITEpLFxyXG4gICAgICAgICAgICAgIChpLmlzU2Nyb2xsaW5nID0gITEpLFxyXG4gICAgICAgICAgICAgIChpLmNhblBhbiA9IGQuY2FuUGFuKCkpLFxyXG4gICAgICAgICAgICAgIChpLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSxcclxuICAgICAgICAgICAgICAoaS5kaXN0YW5jZVggPSBpLmRpc3RhbmNlWSA9IGkuZGlzdGFuY2UgPSAwKSxcclxuICAgICAgICAgICAgICAoaS5jYW52YXNXaWR0aCA9IE1hdGgucm91bmQoZlswXS5jbGllbnRXaWR0aCkpLFxyXG4gICAgICAgICAgICAgIChpLmNhbnZhc0hlaWdodCA9IE1hdGgucm91bmQoZlswXS5jbGllbnRIZWlnaHQpKSxcclxuICAgICAgICAgICAgICAoaS5jb250ZW50TGFzdFBvcyA9IG51bGwpLFxyXG4gICAgICAgICAgICAgIChpLmNvbnRlbnRTdGFydFBvcyA9IG4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGkuJGNvbnRlbnQpIHx8IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgKGkuc2xpZGVyU3RhcnRQb3MgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShmKSksXHJcbiAgICAgICAgICAgICAgKGkuc3RhZ2VQb3MgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShkLiRyZWZzLnN0YWdlKSksXHJcbiAgICAgICAgICAgICAgKGkuc2xpZGVyU3RhcnRQb3MudG9wIC09IGkuc3RhZ2VQb3MudG9wKSxcclxuICAgICAgICAgICAgICAoaS5zbGlkZXJTdGFydFBvcy5sZWZ0IC09IGkuc3RhZ2VQb3MubGVmdCksXHJcbiAgICAgICAgICAgICAgKGkuY29udGVudFN0YXJ0UG9zLnRvcCAtPSBpLnN0YWdlUG9zLnRvcCksXHJcbiAgICAgICAgICAgICAgKGkuY29udGVudFN0YXJ0UG9zLmxlZnQgLT0gaS5zdGFnZVBvcy5sZWZ0KSxcclxuICAgICAgICAgICAgICBuKGUpXHJcbiAgICAgICAgICAgICAgICAub2ZmKFwiLmZiLnRvdWNoXCIpXHJcbiAgICAgICAgICAgICAgICAub24oXHJcbiAgICAgICAgICAgICAgICAgIGhcclxuICAgICAgICAgICAgICAgICAgICA/IFwidG91Y2hlbmQuZmIudG91Y2ggdG91Y2hjYW5jZWwuZmIudG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJtb3VzZXVwLmZiLnRvdWNoIG1vdXNlbGVhdmUuZmIudG91Y2hcIixcclxuICAgICAgICAgICAgICAgICAgbi5wcm94eShpLCBcIm9udG91Y2hlbmRcIilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5vbihcclxuICAgICAgICAgICAgICAgICAgaCA/IFwidG91Y2htb3ZlLmZiLnRvdWNoXCIgOiBcIm1vdXNlbW92ZS5mYi50b3VjaFwiLFxyXG4gICAgICAgICAgICAgICAgICBuLnByb3h5KGksIFwib250b3VjaG1vdmVcIilcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgbi5mYW5jeWJveC5pc01vYmlsZSAmJlxyXG4gICAgICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGkub25zY3JvbGwsICEwKSxcclxuICAgICAgICAgICAgICAoKChpLm9wdHMgfHwgaS5jYW5QYW4pICYmXHJcbiAgICAgICAgICAgICAgICAoYy5pcyhpLiRzdGFnZSkgfHwgaS4kc3RhZ2UuZmluZChjKS5sZW5ndGgpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGMuaXMoXCIuZmFuY3lib3gtaW1hZ2VcIikgJiYgby5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgbi5mYW5jeWJveC5pc01vYmlsZSAmJlxyXG4gICAgICAgICAgICAgICAgICBjLnBhcmVudHMoXCIuZmFuY3lib3gtY2FwdGlvblwiKS5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgKChpLmlzU2Nyb2xsYWJsZSA9IGwoYykgfHwgbChjLnBhcmVudCgpKSksXHJcbiAgICAgICAgICAgICAgICAobi5mYW5jeWJveC5pc01vYmlsZSAmJiBpLmlzU2Nyb2xsYWJsZSkgfHwgby5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgKDEgPT09IGkuc3RhcnRQb2ludHMubGVuZ3RoIHx8IHUuaGFzRXJyb3IpICYmXHJcbiAgICAgICAgICAgICAgICAgIChpLmNhblBhblxyXG4gICAgICAgICAgICAgICAgICAgID8gKG4uZmFuY3lib3guc3RvcChpLiRjb250ZW50KSwgKGkuaXNQYW5uaW5nID0gITApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGkuaXNTd2lwaW5nID0gITApLFxyXG4gICAgICAgICAgICAgICAgICBpLiRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1ncmFiYmluZ1wiKSksXHJcbiAgICAgICAgICAgICAgICAyID09PSBpLnN0YXJ0UG9pbnRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICBcImltYWdlXCIgPT09IHUudHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAodS5pc0xvYWRlZCB8fCB1LiRnaG9zdCkgJiZcclxuICAgICAgICAgICAgICAgICAgKChpLmNhblRhcCA9ICExKSxcclxuICAgICAgICAgICAgICAgICAgKGkuaXNTd2lwaW5nID0gITEpLFxyXG4gICAgICAgICAgICAgICAgICAoaS5pc1Bhbm5pbmcgPSAhMSksXHJcbiAgICAgICAgICAgICAgICAgIChpLmlzWm9vbWluZyA9ICEwKSxcclxuICAgICAgICAgICAgICAgICAgbi5mYW5jeWJveC5zdG9wKGkuJGNvbnRlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAoaS5jZW50ZXJQb2ludFN0YXJ0WCA9XHJcbiAgICAgICAgICAgICAgICAgICAgMC41ICogKGkuc3RhcnRQb2ludHNbMF0ueCArIGkuc3RhcnRQb2ludHNbMV0ueCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIG4odCkuc2Nyb2xsTGVmdCgpKSxcclxuICAgICAgICAgICAgICAgICAgKGkuY2VudGVyUG9pbnRTdGFydFkgPVxyXG4gICAgICAgICAgICAgICAgICAgIDAuNSAqIChpLnN0YXJ0UG9pbnRzWzBdLnkgKyBpLnN0YXJ0UG9pbnRzWzFdLnkpIC1cclxuICAgICAgICAgICAgICAgICAgICBuKHQpLnNjcm9sbFRvcCgpKSxcclxuICAgICAgICAgICAgICAgICAgKGkucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYID1cclxuICAgICAgICAgICAgICAgICAgICAoaS5jZW50ZXJQb2ludFN0YXJ0WCAtIGkuY29udGVudFN0YXJ0UG9zLmxlZnQpIC9cclxuICAgICAgICAgICAgICAgICAgICBpLmNvbnRlbnRTdGFydFBvcy53aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgIChpLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGkuY2VudGVyUG9pbnRTdGFydFkgLSBpLmNvbnRlbnRTdGFydFBvcy50b3ApIC9cclxuICAgICAgICAgICAgICAgICAgICBpLmNvbnRlbnRTdGFydFBvcy5oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAoaS5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBzKFxyXG4gICAgICAgICAgICAgICAgICAgIGkuc3RhcnRQb2ludHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaS5zdGFydFBvaW50c1sxXVxyXG4gICAgICAgICAgICAgICAgICApKSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZC5wcm90b3R5cGUub25zY3JvbGwgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICAobi5pc1Njcm9sbGluZyA9ICEwKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG4ub25zY3JvbGwsICEwKTtcclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB2b2lkIDAgIT09IHQub3JpZ2luYWxFdmVudC5idXR0b25zICYmXHJcbiAgICAgICAgICAwID09PSB0Lm9yaWdpbmFsRXZlbnQuYnV0dG9uc1xyXG4gICAgICAgICAgPyB2b2lkIGUub250b3VjaGVuZCh0KVxyXG4gICAgICAgICAgOiBlLmlzU2Nyb2xsaW5nXHJcbiAgICAgICAgICA/IHZvaWQgKGUuY2FuVGFwID0gITEpXHJcbiAgICAgICAgICA6ICgoZS5uZXdQb2ludHMgPSBhKHQpKSxcclxuICAgICAgICAgICAgdm9pZCAoXHJcbiAgICAgICAgICAgICAgKGUub3B0cyB8fCBlLmNhblBhbikgJiZcclxuICAgICAgICAgICAgICBlLm5ld1BvaW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICBlLm5ld1BvaW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAoKGUuaXNTd2lwaW5nICYmICEwID09PSBlLmlzU3dpcGluZykgfHwgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgIChlLmRpc3RhbmNlWCA9IHMoZS5uZXdQb2ludHNbMF0sIGUuc3RhcnRQb2ludHNbMF0sIFwieFwiKSksXHJcbiAgICAgICAgICAgICAgKGUuZGlzdGFuY2VZID0gcyhlLm5ld1BvaW50c1swXSwgZS5zdGFydFBvaW50c1swXSwgXCJ5XCIpKSxcclxuICAgICAgICAgICAgICAoZS5kaXN0YW5jZSA9IHMoZS5uZXdQb2ludHNbMF0sIGUuc3RhcnRQb2ludHNbMF0pKSxcclxuICAgICAgICAgICAgICBlLmRpc3RhbmNlID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgKGUuaXNTd2lwaW5nXHJcbiAgICAgICAgICAgICAgICAgID8gZS5vblN3aXBlKHQpXHJcbiAgICAgICAgICAgICAgICAgIDogZS5pc1Bhbm5pbmdcclxuICAgICAgICAgICAgICAgICAgPyBlLm9uUGFuKClcclxuICAgICAgICAgICAgICAgICAgOiBlLmlzWm9vbWluZyAmJiBlLm9uWm9vbSgpKSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZC5wcm90b3R5cGUub25Td2lwZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGEsXHJcbiAgICAgICAgICBzID0gdGhpcyxcclxuICAgICAgICAgIHIgPSBzLmluc3RhbmNlLFxyXG4gICAgICAgICAgYyA9IHMuaXNTd2lwaW5nLFxyXG4gICAgICAgICAgbCA9IHMuc2xpZGVyU3RhcnRQb3MubGVmdCB8fCAwO1xyXG4gICAgICAgIGlmICghMCAhPT0gYylcclxuICAgICAgICAgIFwieFwiID09IGMgJiZcclxuICAgICAgICAgICAgKHMuZGlzdGFuY2VYID4gMCAmJlxyXG4gICAgICAgICAgICAocy5pbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8XHJcbiAgICAgICAgICAgICAgKDAgPT09IHMuaW5zdGFuY2UuY3VycmVudC5pbmRleCAmJiAhcy5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCkpXHJcbiAgICAgICAgICAgICAgPyAobCArPSBNYXRoLnBvdyhzLmRpc3RhbmNlWCwgMC44KSlcclxuICAgICAgICAgICAgICA6IHMuZGlzdGFuY2VYIDwgMCAmJlxyXG4gICAgICAgICAgICAgICAgKHMuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fFxyXG4gICAgICAgICAgICAgICAgICAocy5pbnN0YW5jZS5jdXJyZW50LmluZGV4ID09PSBzLmluc3RhbmNlLmdyb3VwLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcy5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCkpXHJcbiAgICAgICAgICAgICAgPyAobCAtPSBNYXRoLnBvdygtcy5kaXN0YW5jZVgsIDAuOCkpXHJcbiAgICAgICAgICAgICAgOiAobCArPSBzLmRpc3RhbmNlWCkpLFxyXG4gICAgICAgICAgICAocy5zbGlkZXJMYXN0UG9zID0ge1xyXG4gICAgICAgICAgICAgIHRvcDogXCJ4XCIgPT0gYyA/IDAgOiBzLnNsaWRlclN0YXJ0UG9zLnRvcCArIHMuZGlzdGFuY2VZLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IGwsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzLnJlcXVlc3RJZCAmJiAoaShzLnJlcXVlc3RJZCksIChzLnJlcXVlc3RJZCA9IG51bGwpKSxcclxuICAgICAgICAgICAgKHMucmVxdWVzdElkID0gbyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcy5zbGlkZXJMYXN0UG9zICYmXHJcbiAgICAgICAgICAgICAgICAobi5lYWNoKHMuaW5zdGFuY2Uuc2xpZGVzLCBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgbyA9IGUucG9zIC0gcy5pbnN0YW5jZS5jdXJyUG9zO1xyXG4gICAgICAgICAgICAgICAgICBuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShlLiRzbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcy5zbGlkZXJMYXN0UG9zLnRvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXJMYXN0UG9zLmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgbyAqIHMuY2FudmFzV2lkdGggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgbyAqIGUub3B0cy5ndXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1zbGlkaW5nXCIpKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHMuZGlzdGFuY2UpID4gMTApIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKChzLmNhblRhcCA9ICExKSxcclxuICAgICAgICAgICAgci5ncm91cC5sZW5ndGggPCAyICYmIHMub3B0cy52ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgID8gKHMuaXNTd2lwaW5nID0gXCJ5XCIpXHJcbiAgICAgICAgICAgICAgOiByLmlzRHJhZ2dpbmcgfHxcclxuICAgICAgICAgICAgICAgICExID09PSBzLm9wdHMudmVydGljYWwgfHxcclxuICAgICAgICAgICAgICAgIChcImF1dG9cIiA9PT0gcy5vcHRzLnZlcnRpY2FsICYmIG4odCkud2lkdGgoKSA+IDgwMClcclxuICAgICAgICAgICAgICA/IChzLmlzU3dpcGluZyA9IFwieFwiKVxyXG4gICAgICAgICAgICAgIDogKChhID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgICAgICgxODAgKiBNYXRoLmF0YW4yKHMuZGlzdGFuY2VZLCBzLmRpc3RhbmNlWCkpIC8gTWF0aC5QSVxyXG4gICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgICAgICAocy5pc1N3aXBpbmcgPSBhID4gNDUgJiYgYSA8IDEzNSA/IFwieVwiIDogXCJ4XCIpKSxcclxuICAgICAgICAgICAgXCJ5XCIgPT09IHMuaXNTd2lwaW5nICYmIG4uZmFuY3lib3guaXNNb2JpbGUgJiYgcy5pc1Njcm9sbGFibGUpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChzLmlzU2Nyb2xsaW5nID0gITApO1xyXG4gICAgICAgICAgKHIuaXNEcmFnZ2luZyA9IHMuaXNTd2lwaW5nKSxcclxuICAgICAgICAgICAgKHMuc3RhcnRQb2ludHMgPSBzLm5ld1BvaW50cyksXHJcbiAgICAgICAgICAgIG4uZWFjaChyLnNsaWRlcywgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgICB2YXIgbywgaTtcclxuICAgICAgICAgICAgICBuLmZhbmN5Ym94LnN0b3AoZS4kc2xpZGUpLFxyXG4gICAgICAgICAgICAgICAgKG8gPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShlLiRzbGlkZSkpLFxyXG4gICAgICAgICAgICAgICAgKGkgPSBuLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShyLiRyZWZzLnN0YWdlKSksXHJcbiAgICAgICAgICAgICAgICBlLiRzbGlkZVxyXG4gICAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24tZHVyYXRpb25cIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYW5pbWF0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlLm1hdGNoKC8oXnxcXHMpZmFuY3lib3gtZngtXFxTKy9nKSB8fCBbXSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZS5wb3MgPT09IHIuY3VycmVudC5wb3MgJiZcclxuICAgICAgICAgICAgICAgICAgKChzLnNsaWRlclN0YXJ0UG9zLnRvcCA9IG8udG9wIC0gaS50b3ApLFxyXG4gICAgICAgICAgICAgICAgICAocy5zbGlkZXJTdGFydFBvcy5sZWZ0ID0gby5sZWZ0IC0gaS5sZWZ0KSksXHJcbiAgICAgICAgICAgICAgICBuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShlLiRzbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IG8udG9wIC0gaS50b3AsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IG8ubGVmdCAtIGkubGVmdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgci5TbGlkZVNob3cgJiYgci5TbGlkZVNob3cuaXNBY3RpdmUgJiYgci5TbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5vblBhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHModC5uZXdQb2ludHNbMF0sIHQucmVhbFBvaW50c1swXSkgPCAobi5mYW5jeWJveC5pc01vYmlsZSA/IDEwIDogNSkpXHJcbiAgICAgICAgICByZXR1cm4gdm9pZCAodC5zdGFydFBvaW50cyA9IHQubmV3UG9pbnRzKTtcclxuICAgICAgICAodC5jYW5UYXAgPSAhMSksXHJcbiAgICAgICAgICAodC5jb250ZW50TGFzdFBvcyA9IHQubGltaXRNb3ZlbWVudCgpKSxcclxuICAgICAgICAgIHQucmVxdWVzdElkICYmIGkodC5yZXF1ZXN0SWQpLFxyXG4gICAgICAgICAgKHQucmVxdWVzdElkID0gbyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKHQuJGNvbnRlbnQsIHQuY29udGVudExhc3RQb3MpO1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLmxpbWl0TW92ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQsXHJcbiAgICAgICAgICBlLFxyXG4gICAgICAgICAgbixcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHMgPSB0aGlzLFxyXG4gICAgICAgICAgciA9IHMuY2FudmFzV2lkdGgsXHJcbiAgICAgICAgICBjID0gcy5jYW52YXNIZWlnaHQsXHJcbiAgICAgICAgICBsID0gcy5kaXN0YW5jZVgsXHJcbiAgICAgICAgICBkID0gcy5kaXN0YW5jZVksXHJcbiAgICAgICAgICB1ID0gcy5jb250ZW50U3RhcnRQb3MsXHJcbiAgICAgICAgICBmID0gdS5sZWZ0LFxyXG4gICAgICAgICAgcCA9IHUudG9wLFxyXG4gICAgICAgICAgaCA9IHUud2lkdGgsXHJcbiAgICAgICAgICBnID0gdS5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIChpID0gaCA+IHIgPyBmICsgbCA6IGYpLFxyXG4gICAgICAgICAgKGEgPSBwICsgZCksXHJcbiAgICAgICAgICAodCA9IE1hdGgubWF4KDAsIDAuNSAqIHIgLSAwLjUgKiBoKSksXHJcbiAgICAgICAgICAoZSA9IE1hdGgubWF4KDAsIDAuNSAqIGMgLSAwLjUgKiBnKSksXHJcbiAgICAgICAgICAobiA9IE1hdGgubWluKHIgLSBoLCAwLjUgKiByIC0gMC41ICogaCkpLFxyXG4gICAgICAgICAgKG8gPSBNYXRoLm1pbihjIC0gZywgMC41ICogYyAtIDAuNSAqIGcpKSxcclxuICAgICAgICAgIGwgPiAwICYmIGkgPiB0ICYmIChpID0gdCAtIDEgKyBNYXRoLnBvdygtdCArIGYgKyBsLCAwLjgpIHx8IDApLFxyXG4gICAgICAgICAgbCA8IDAgJiYgaSA8IG4gJiYgKGkgPSBuICsgMSAtIE1hdGgucG93KG4gLSBmIC0gbCwgMC44KSB8fCAwKSxcclxuICAgICAgICAgIGQgPiAwICYmIGEgPiBlICYmIChhID0gZSAtIDEgKyBNYXRoLnBvdygtZSArIHAgKyBkLCAwLjgpIHx8IDApLFxyXG4gICAgICAgICAgZCA8IDAgJiYgYSA8IG8gJiYgKGEgPSBvICsgMSAtIE1hdGgucG93KG8gLSBwIC0gZCwgMC44KSB8fCAwKSxcclxuICAgICAgICAgIHsgdG9wOiBhLCBsZWZ0OiBpIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLmxpbWl0UG9zaXRpb24gPSBmdW5jdGlvbiAodCwgZSwgbiwgbykge1xyXG4gICAgICAgIHZhciBpID0gdGhpcyxcclxuICAgICAgICAgIGEgPSBpLmNhbnZhc1dpZHRoLFxyXG4gICAgICAgICAgcyA9IGkuY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBuID4gYVxyXG4gICAgICAgICAgICA/ICgodCA9IHQgPiAwID8gMCA6IHQpLCAodCA9IHQgPCBhIC0gbiA/IGEgLSBuIDogdCkpXHJcbiAgICAgICAgICAgIDogKHQgPSBNYXRoLm1heCgwLCBhIC8gMiAtIG4gLyAyKSksXHJcbiAgICAgICAgICBvID4gc1xyXG4gICAgICAgICAgICA/ICgoZSA9IGUgPiAwID8gMCA6IGUpLCAoZSA9IGUgPCBzIC0gbyA/IHMgLSBvIDogZSkpXHJcbiAgICAgICAgICAgIDogKGUgPSBNYXRoLm1heCgwLCBzIC8gMiAtIG8gLyAyKSksXHJcbiAgICAgICAgICB7IHRvcDogZSwgbGVmdDogdCB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5vblpvb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLFxyXG4gICAgICAgICAgYSA9IGUuY29udGVudFN0YXJ0UG9zLFxyXG4gICAgICAgICAgciA9IGEud2lkdGgsXHJcbiAgICAgICAgICBjID0gYS5oZWlnaHQsXHJcbiAgICAgICAgICBsID0gYS5sZWZ0LFxyXG4gICAgICAgICAgZCA9IGEudG9wLFxyXG4gICAgICAgICAgdSA9IHMoZS5uZXdQb2ludHNbMF0sIGUubmV3UG9pbnRzWzFdKSxcclxuICAgICAgICAgIGYgPSB1IC8gZS5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMsXHJcbiAgICAgICAgICBwID0gTWF0aC5mbG9vcihyICogZiksXHJcbiAgICAgICAgICBoID0gTWF0aC5mbG9vcihjICogZiksXHJcbiAgICAgICAgICBnID0gKHIgLSBwKSAqIGUucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYLFxyXG4gICAgICAgICAgYiA9IChjIC0gaCkgKiBlLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WSxcclxuICAgICAgICAgIG0gPSAoZS5uZXdQb2ludHNbMF0ueCArIGUubmV3UG9pbnRzWzFdLngpIC8gMiAtIG4odCkuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgdiA9IChlLm5ld1BvaW50c1swXS55ICsgZS5uZXdQb2ludHNbMV0ueSkgLyAyIC0gbih0KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgIHkgPSBtIC0gZS5jZW50ZXJQb2ludFN0YXJ0WCxcclxuICAgICAgICAgIHggPSB2IC0gZS5jZW50ZXJQb2ludFN0YXJ0WSxcclxuICAgICAgICAgIHcgPSBsICsgKGcgKyB5KSxcclxuICAgICAgICAgICQgPSBkICsgKGIgKyB4KSxcclxuICAgICAgICAgIFMgPSB7IHRvcDogJCwgbGVmdDogdywgc2NhbGVYOiBmLCBzY2FsZVk6IGYgfTtcclxuICAgICAgICAoZS5jYW5UYXAgPSAhMSksXHJcbiAgICAgICAgICAoZS5uZXdXaWR0aCA9IHApLFxyXG4gICAgICAgICAgKGUubmV3SGVpZ2h0ID0gaCksXHJcbiAgICAgICAgICAoZS5jb250ZW50TGFzdFBvcyA9IFMpLFxyXG4gICAgICAgICAgZS5yZXF1ZXN0SWQgJiYgaShlLnJlcXVlc3RJZCksXHJcbiAgICAgICAgICAoZS5yZXF1ZXN0SWQgPSBvKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbi5mYW5jeWJveC5zZXRUcmFuc2xhdGUoZS4kY29udGVudCwgZS5jb250ZW50TGFzdFBvcyk7XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZC5wcm90b3R5cGUub250b3VjaGVuZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLFxyXG4gICAgICAgICAgcyA9IG8uaXNTd2lwaW5nLFxyXG4gICAgICAgICAgciA9IG8uaXNQYW5uaW5nLFxyXG4gICAgICAgICAgYyA9IG8uaXNab29taW5nLFxyXG4gICAgICAgICAgbCA9IG8uaXNTY3JvbGxpbmc7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKChvLmVuZFBvaW50cyA9IGEodCkpLFxyXG4gICAgICAgICAgKG8uZE1zID0gTWF0aC5tYXgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBvLnN0YXJ0VGltZSwgMSkpLFxyXG4gICAgICAgICAgby4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtZ3JhYmJpbmdcIiksXHJcbiAgICAgICAgICBuKGUpLm9mZihcIi5mYi50b3VjaFwiKSxcclxuICAgICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvLm9uc2Nyb2xsLCAhMCksXHJcbiAgICAgICAgICBvLnJlcXVlc3RJZCAmJiAoaShvLnJlcXVlc3RJZCksIChvLnJlcXVlc3RJZCA9IG51bGwpKSxcclxuICAgICAgICAgIChvLmlzU3dpcGluZyA9ICExKSxcclxuICAgICAgICAgIChvLmlzUGFubmluZyA9ICExKSxcclxuICAgICAgICAgIChvLmlzWm9vbWluZyA9ICExKSxcclxuICAgICAgICAgIChvLmlzU2Nyb2xsaW5nID0gITEpLFxyXG4gICAgICAgICAgKG8uaW5zdGFuY2UuaXNEcmFnZ2luZyA9ICExKSxcclxuICAgICAgICAgIG8uY2FuVGFwKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIHJldHVybiBvLm9uVGFwKHQpO1xyXG4gICAgICAgIChvLnNwZWVkID0gMTAwKSxcclxuICAgICAgICAgIChvLnZlbG9jaXR5WCA9IChvLmRpc3RhbmNlWCAvIG8uZE1zKSAqIDAuNSksXHJcbiAgICAgICAgICAoby52ZWxvY2l0eVkgPSAoby5kaXN0YW5jZVkgLyBvLmRNcykgKiAwLjUpLFxyXG4gICAgICAgICAgciA/IG8uZW5kUGFubmluZygpIDogYyA/IG8uZW5kWm9vbWluZygpIDogby5lbmRTd2lwaW5nKHMsIGwpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLmVuZFN3aXBpbmcgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBvID0gdGhpcyxcclxuICAgICAgICAgIGkgPSAhMSxcclxuICAgICAgICAgIGEgPSBvLmluc3RhbmNlLmdyb3VwLmxlbmd0aCxcclxuICAgICAgICAgIHMgPSBNYXRoLmFicyhvLmRpc3RhbmNlWCksXHJcbiAgICAgICAgICByID0gXCJ4XCIgPT0gdCAmJiBhID4gMSAmJiAoKG8uZE1zID4gMTMwICYmIHMgPiAxMCkgfHwgcyA+IDUwKTtcclxuICAgICAgICAoby5zbGlkZXJMYXN0UG9zID0gbnVsbCksXHJcbiAgICAgICAgICBcInlcIiA9PSB0ICYmICFlICYmIE1hdGguYWJzKG8uZGlzdGFuY2VZKSA+IDUwXHJcbiAgICAgICAgICAgID8gKG4uZmFuY3lib3guYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIG8uaW5zdGFuY2UuY3VycmVudC4kc2xpZGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogby5zbGlkZXJTdGFydFBvcy50b3AgKyBvLmRpc3RhbmNlWSArIDE1MCAqIG8udmVsb2NpdHlZLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgKGkgPSBvLmluc3RhbmNlLmNsb3NlKCEwLCAyNTApKSlcclxuICAgICAgICAgICAgOiByICYmIG8uZGlzdGFuY2VYID4gMFxyXG4gICAgICAgICAgICA/IChpID0gby5pbnN0YW5jZS5wcmV2aW91cygzMDApKVxyXG4gICAgICAgICAgICA6IHIgJiYgby5kaXN0YW5jZVggPCAwICYmIChpID0gby5pbnN0YW5jZS5uZXh0KDMwMCkpLFxyXG4gICAgICAgICAgITEgIT09IGkgfHwgKFwieFwiICE9IHQgJiYgXCJ5XCIgIT0gdCkgfHwgby5pbnN0YW5jZS5jZW50ZXJTbGlkZSgyMDApLFxyXG4gICAgICAgICAgby4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2xpZGluZ1wiKTtcclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5lbmRQYW5uaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0LFxyXG4gICAgICAgICAgZSxcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpID0gdGhpcztcclxuICAgICAgICBpLmNvbnRlbnRMYXN0UG9zICYmXHJcbiAgICAgICAgICAoITEgPT09IGkub3B0cy5tb21lbnR1bSB8fCBpLmRNcyA+IDM1MFxyXG4gICAgICAgICAgICA/ICgodCA9IGkuY29udGVudExhc3RQb3MubGVmdCksIChlID0gaS5jb250ZW50TGFzdFBvcy50b3ApKVxyXG4gICAgICAgICAgICA6ICgodCA9IGkuY29udGVudExhc3RQb3MubGVmdCArIDUwMCAqIGkudmVsb2NpdHlYKSxcclxuICAgICAgICAgICAgICAoZSA9IGkuY29udGVudExhc3RQb3MudG9wICsgNTAwICogaS52ZWxvY2l0eVkpKSxcclxuICAgICAgICAgIChvID0gaS5saW1pdFBvc2l0aW9uKFxyXG4gICAgICAgICAgICB0LFxyXG4gICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICBpLmNvbnRlbnRTdGFydFBvcy53aWR0aCxcclxuICAgICAgICAgICAgaS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0XHJcbiAgICAgICAgICApKSxcclxuICAgICAgICAgIChvLndpZHRoID0gaS5jb250ZW50U3RhcnRQb3Mud2lkdGgpLFxyXG4gICAgICAgICAgKG8uaGVpZ2h0ID0gaS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0KSxcclxuICAgICAgICAgIG4uZmFuY3lib3guYW5pbWF0ZShpLiRjb250ZW50LCBvLCAzNjYpKTtcclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5lbmRab29taW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0LFxyXG4gICAgICAgICAgZSxcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgYSA9IHRoaXMsXHJcbiAgICAgICAgICBzID0gYS5pbnN0YW5jZS5jdXJyZW50LFxyXG4gICAgICAgICAgciA9IGEubmV3V2lkdGgsXHJcbiAgICAgICAgICBjID0gYS5uZXdIZWlnaHQ7XHJcbiAgICAgICAgYS5jb250ZW50TGFzdFBvcyAmJlxyXG4gICAgICAgICAgKCh0ID0gYS5jb250ZW50TGFzdFBvcy5sZWZ0KSxcclxuICAgICAgICAgIChlID0gYS5jb250ZW50TGFzdFBvcy50b3ApLFxyXG4gICAgICAgICAgKGkgPSB7IHRvcDogZSwgbGVmdDogdCwgd2lkdGg6IHIsIGhlaWdodDogYywgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSksXHJcbiAgICAgICAgICBuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShhLiRjb250ZW50LCBpKSxcclxuICAgICAgICAgIHIgPCBhLmNhbnZhc1dpZHRoICYmIGMgPCBhLmNhbnZhc0hlaWdodFxyXG4gICAgICAgICAgICA/IGEuaW5zdGFuY2Uuc2NhbGVUb0ZpdCgxNTApXHJcbiAgICAgICAgICAgIDogciA+IHMud2lkdGggfHwgYyA+IHMuaGVpZ2h0XHJcbiAgICAgICAgICAgID8gYS5pbnN0YW5jZS5zY2FsZVRvQWN0dWFsKFxyXG4gICAgICAgICAgICAgICAgYS5jZW50ZXJQb2ludFN0YXJ0WCxcclxuICAgICAgICAgICAgICAgIGEuY2VudGVyUG9pbnRTdGFydFksXHJcbiAgICAgICAgICAgICAgICAxNTBcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogKChvID0gYS5saW1pdFBvc2l0aW9uKHQsIGUsIHIsIGMpKSxcclxuICAgICAgICAgICAgICBuLmZhbmN5Ym94LmFuaW1hdGUoYS4kY29udGVudCwgbywgMTUwKSkpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLm9uVGFwID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgbyxcclxuICAgICAgICAgIGkgPSB0aGlzLFxyXG4gICAgICAgICAgcyA9IG4oZS50YXJnZXQpLFxyXG4gICAgICAgICAgciA9IGkuaW5zdGFuY2UsXHJcbiAgICAgICAgICBjID0gci5jdXJyZW50LFxyXG4gICAgICAgICAgbCA9IChlICYmIGEoZSkpIHx8IGkuc3RhcnRQb2ludHMsXHJcbiAgICAgICAgICBkID0gbFswXSA/IGxbMF0ueCAtIG4odCkuc2Nyb2xsTGVmdCgpIC0gaS5zdGFnZVBvcy5sZWZ0IDogMCxcclxuICAgICAgICAgIHUgPSBsWzBdID8gbFswXS55IC0gbih0KS5zY3JvbGxUb3AoKSAtIGkuc3RhZ2VQb3MudG9wIDogMCxcclxuICAgICAgICAgIGYgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IGMub3B0c1t0XTtcclxuICAgICAgICAgICAgaWYgKChuLmlzRnVuY3Rpb24obykgJiYgKG8gPSBvLmFwcGx5KHIsIFtjLCBlXSkpLCBvKSlcclxuICAgICAgICAgICAgICBzd2l0Y2ggKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgICByLmNsb3NlKGkuc3RhcnRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvZ2dsZUNvbnRyb2xzXCI6XHJcbiAgICAgICAgICAgICAgICAgIHIudG9nZ2xlQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICByLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV4dE9yQ2xvc2VcIjpcclxuICAgICAgICAgICAgICAgICAgci5ncm91cC5sZW5ndGggPiAxID8gci5uZXh0KCkgOiByLmNsb3NlKGkuc3RhcnRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInpvb21cIjpcclxuICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiID09IGMudHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChjLmlzTG9hZGVkIHx8IGMuJGdob3N0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChyLmNhblBhbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHIuc2NhbGVUb0ZpdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHIuaXNTY2FsZWREb3duKClcclxuICAgICAgICAgICAgICAgICAgICAgID8gci5zY2FsZVRvQWN0dWFsKGQsIHUpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHIuZ3JvdXAubGVuZ3RoIDwgMiAmJiByLmNsb3NlKGkuc3RhcnRFdmVudCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKCFlLm9yaWdpbmFsRXZlbnQgfHwgMiAhPSBlLm9yaWdpbmFsRXZlbnQuYnV0dG9uKSAmJlxyXG4gICAgICAgICAgKHMuaXMoXCJpbWdcIikgfHwgIShkID4gc1swXS5jbGllbnRXaWR0aCArIHMub2Zmc2V0KCkubGVmdCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHMuaXMoXHJcbiAgICAgICAgICAgICAgXCIuZmFuY3lib3gtYmcsLmZhbmN5Ym94LWlubmVyLC5mYW5jeWJveC1vdXRlciwuZmFuY3lib3gtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICBvID0gXCJPdXRzaWRlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmIChzLmlzKFwiLmZhbmN5Ym94LXNsaWRlXCIpKSBvID0gXCJTbGlkZVwiO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhci5jdXJyZW50LiRjb250ZW50IHx8XHJcbiAgICAgICAgICAgICAgIXIuY3VycmVudC4kY29udGVudC5maW5kKHMpLmFkZEJhY2soKS5maWx0ZXIocykubGVuZ3RoXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIG8gPSBcIkNvbnRlbnRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpLnRhcHBlZCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKGNsZWFyVGltZW91dChpLnRhcHBlZCksXHJcbiAgICAgICAgICAgICAgKGkudGFwcGVkID0gbnVsbCksXHJcbiAgICAgICAgICAgICAgTWF0aC5hYnMoZCAtIGkudGFwWCkgPiA1MCB8fCBNYXRoLmFicyh1IC0gaS50YXBZKSA+IDUwKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIGYoXCJkYmxjbGlja1wiICsgbyk7XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgKGkudGFwWCA9IGQpLFxyXG4gICAgICAgICAgICAgIChpLnRhcFkgPSB1KSxcclxuICAgICAgICAgICAgICBjLm9wdHNbXCJkYmxjbGlja1wiICsgb10gJiZcclxuICAgICAgICAgICAgICBjLm9wdHNbXCJkYmxjbGlja1wiICsgb10gIT09IGMub3B0c1tcImNsaWNrXCIgKyBvXVxyXG4gICAgICAgICAgICAgICAgPyAoaS50YXBwZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAoaS50YXBwZWQgPSBudWxsKSwgci5pc0FuaW1hdGluZyB8fCBmKFwiY2xpY2tcIiArIG8pO1xyXG4gICAgICAgICAgICAgICAgICB9LCA1MDApKVxyXG4gICAgICAgICAgICAgICAgOiBmKFwiY2xpY2tcIiArIG8pO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgbihlKVxyXG4gICAgICAgIC5vbihcIm9uQWN0aXZhdGUuZmJcIiwgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgIGUgJiYgIWUuR3Vlc3R1cmVzICYmIChlLkd1ZXN0dXJlcyA9IG5ldyBkKGUpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbihcImJlZm9yZUNsb3NlLmZiXCIsIGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICBlICYmIGUuR3Vlc3R1cmVzICYmIGUuR3Vlc3R1cmVzLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICB9KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpLFxyXG4gIChmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBlLmV4dGVuZCghMCwgZS5mYW5jeWJveC5kZWZhdWx0cywge1xyXG4gICAgICBidG5UcGw6IHtcclxuICAgICAgICBzbGlkZVNob3c6XHJcbiAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYuNSA1LjR2MTMuMmwxMS02LjZ6XCIvPjwvc3ZnPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTguMzMgNS43NWgyLjJ2MTIuNWgtMi4yVjUuNzV6bTUuMTUgMGgyLjJ2MTIuNWgtMi4yVjUuNzV6XCIvPjwvc3ZnPjwvYnV0dG9uPicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaWRlU2hvdzogeyBhdXRvU3RhcnQ6ICExLCBzcGVlZDogM2UzLCBwcm9ncmVzczogITAgfSxcclxuICAgIH0pO1xyXG4gICAgdmFyIG4gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAodGhpcy5pbnN0YW5jZSA9IHQpLCB0aGlzLmluaXQoKTtcclxuICAgIH07XHJcbiAgICBlLmV4dGVuZChuLnByb3RvdHlwZSwge1xyXG4gICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgaXNBY3RpdmU6ICExLFxyXG4gICAgICAkYnV0dG9uOiBudWxsLFxyXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzLFxyXG4gICAgICAgICAgbiA9IHQuaW5zdGFuY2UsXHJcbiAgICAgICAgICBvID0gbi5ncm91cFtuLmN1cnJJbmRleF0ub3B0cy5zbGlkZVNob3c7XHJcbiAgICAgICAgKHQuJGJ1dHRvbiA9IG4uJHJlZnMudG9vbGJhclxyXG4gICAgICAgICAgLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1wbGF5XVwiKVxyXG4gICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgbi5ncm91cC5sZW5ndGggPCAyIHx8ICFvXHJcbiAgICAgICAgICAgID8gdC4kYnV0dG9uLmhpZGUoKVxyXG4gICAgICAgICAgICA6IG8ucHJvZ3Jlc3MgJiZcclxuICAgICAgICAgICAgICAodC4kcHJvZ3Jlc3MgPSBlKFxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1wcm9ncmVzc1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICApLmFwcGVuZFRvKG4uJHJlZnMuaW5uZXIpKTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBuID0gdGhpcyxcclxuICAgICAgICAgIG8gPSBuLmluc3RhbmNlLFxyXG4gICAgICAgICAgaSA9IG8uY3VycmVudDtcclxuICAgICAgICBpICYmICghMCA9PT0gdCB8fCBpLm9wdHMubG9vcCB8fCBvLmN1cnJJbmRleCA8IG8uZ3JvdXAubGVuZ3RoIC0gMSlcclxuICAgICAgICAgID8gbi5pc0FjdGl2ZSAmJlxyXG4gICAgICAgICAgICBcInZpZGVvXCIgIT09IGkuY29udGVudFR5cGUgJiZcclxuICAgICAgICAgICAgKG4uJHByb2dyZXNzICYmXHJcbiAgICAgICAgICAgICAgZS5mYW5jeWJveC5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgbi4kcHJvZ3Jlc3Muc2hvdygpLFxyXG4gICAgICAgICAgICAgICAgeyBzY2FsZVg6IDEgfSxcclxuICAgICAgICAgICAgICAgIGkub3B0cy5zbGlkZVNob3cuc3BlZWRcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAobi50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIG8uY3VycmVudC5vcHRzLmxvb3AgfHwgby5jdXJyZW50LmluZGV4ICE9IG8uZ3JvdXAubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgPyBvLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgOiBvLmp1bXBUbygwKTtcclxuICAgICAgICAgICAgfSwgaS5vcHRzLnNsaWRlU2hvdy5zcGVlZCkpKVxyXG4gICAgICAgICAgOiAobi5zdG9wKCksIChvLmlkbGVTZWNvbmRzQ291bnRlciA9IDApLCBvLnNob3dDb250cm9scygpKTtcclxuICAgICAgfSxcclxuICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXIpLFxyXG4gICAgICAgICAgKHQudGltZXIgPSBudWxsKSxcclxuICAgICAgICAgIHQuJHByb2dyZXNzICYmIHQuJHByb2dyZXNzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5oaWRlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzLFxyXG4gICAgICAgICAgZSA9IHQuaW5zdGFuY2UuY3VycmVudDtcclxuICAgICAgICBlICYmXHJcbiAgICAgICAgICAodC4kYnV0dG9uXHJcbiAgICAgICAgICAgIC5hdHRyKFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIixcclxuICAgICAgICAgICAgICAoZS5vcHRzLmkxOG5bZS5vcHRzLmxhbmddIHx8IGUub3B0cy5pMThuLmVuKS5QTEFZX1NUT1BcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKSxcclxuICAgICAgICAgICh0LmlzQWN0aXZlID0gITApLFxyXG4gICAgICAgICAgZS5pc0NvbXBsZXRlICYmIHQuc2V0KCEwKSxcclxuICAgICAgICAgIHQuaW5zdGFuY2UudHJpZ2dlcihcIm9uU2xpZGVTaG93Q2hhbmdlXCIsICEwKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXMsXHJcbiAgICAgICAgICBlID0gdC5pbnN0YW5jZS5jdXJyZW50O1xyXG4gICAgICAgIHQuY2xlYXIoKSxcclxuICAgICAgICAgIHQuJGJ1dHRvblxyXG4gICAgICAgICAgICAuYXR0cihcclxuICAgICAgICAgICAgICBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgICAgKGUub3B0cy5pMThuW2Uub3B0cy5sYW5nXSB8fCBlLm9wdHMuaTE4bi5lbikuUExBWV9TVEFSVFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGF1c2VcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIpLFxyXG4gICAgICAgICAgKHQuaXNBY3RpdmUgPSAhMSksXHJcbiAgICAgICAgICB0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblNsaWRlU2hvd0NoYW5nZVwiLCAhMSksXHJcbiAgICAgICAgICB0LiRwcm9ncmVzcyAmJiB0LiRwcm9ncmVzcy5yZW1vdmVBdHRyKFwic3R5bGVcIikuaGlkZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5pc0FjdGl2ZSA/IHQuc3RvcCgpIDogdC5zdGFydCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICAgIGUodCkub24oe1xyXG4gICAgICAgIFwib25Jbml0LmZiXCI6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICBlICYmICFlLlNsaWRlU2hvdyAmJiAoZS5TbGlkZVNob3cgPSBuZXcgbihlKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24gKHQsIGUsIG4sIG8pIHtcclxuICAgICAgICAgIHZhciBpID0gZSAmJiBlLlNsaWRlU2hvdztcclxuICAgICAgICAgIG9cclxuICAgICAgICAgICAgPyBpICYmIG4ub3B0cy5zbGlkZVNob3cuYXV0b1N0YXJ0ICYmIGkuc3RhcnQoKVxyXG4gICAgICAgICAgICA6IGkgJiYgaS5pc0FjdGl2ZSAmJiBpLmNsZWFyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFmdGVyU2hvdy5mYlwiOiBmdW5jdGlvbiAodCwgZSwgbikge1xyXG4gICAgICAgICAgdmFyIG8gPSBlICYmIGUuU2xpZGVTaG93O1xyXG4gICAgICAgICAgbyAmJiBvLmlzQWN0aXZlICYmIG8uc2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAobiwgbywgaSwgYSwgcykge1xyXG4gICAgICAgICAgdmFyIHIgPSBvICYmIG8uU2xpZGVTaG93O1xyXG4gICAgICAgICAgIXIgfHxcclxuICAgICAgICAgICAgIWkub3B0cy5zbGlkZVNob3cgfHxcclxuICAgICAgICAgICAgKDgwICE9PSBzICYmIDMyICE9PSBzKSB8fFxyXG4gICAgICAgICAgICBlKHQuYWN0aXZlRWxlbWVudCkuaXMoXCJidXR0b24sYSxpbnB1dFwiKSB8fFxyXG4gICAgICAgICAgICAoYS5wcmV2ZW50RGVmYXVsdCgpLCByLnRvZ2dsZSgpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmVmb3JlQ2xvc2UuZmIgb25EZWFjdGl2YXRlLmZiXCI6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICB2YXIgbiA9IGUgJiYgZS5TbGlkZVNob3c7XHJcbiAgICAgICAgICBuICYmIG4uc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBlKHQpLm9uKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG4gPSBlLmZhbmN5Ym94LmdldEluc3RhbmNlKCksXHJcbiAgICAgICAgICBvID0gbiAmJiBuLlNsaWRlU2hvdztcclxuICAgICAgICBvICYmIG8uaXNBY3RpdmUgJiYgKHQuaGlkZGVuID8gby5jbGVhcigpIDogby5zZXQoKSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pKGRvY3VtZW50LCBqUXVlcnkpLFxyXG4gIChmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgdmFyIGUgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICBcInJlcXVlc3RGdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgXCJleGl0RnVsbHNjcmVlblwiLFxyXG4gICAgICAgICAgICAgIFwiZnVsbHNjcmVlbkVsZW1lbnRcIixcclxuICAgICAgICAgICAgICBcImZ1bGxzY3JlZW5FbmFibGVkXCIsXHJcbiAgICAgICAgICAgICAgXCJmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgXCJmdWxsc2NyZWVuZXJyb3JcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIFwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICBcIndlYmtpdEV4aXRGdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgXCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgIFwid2Via2l0RnVsbHNjcmVlbkVuYWJsZWRcIixcclxuICAgICAgICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcclxuICAgICAgICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgXCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlblwiLFxyXG4gICAgICAgICAgICAgIFwid2Via2l0Q2FuY2VsRnVsbFNjcmVlblwiLFxyXG4gICAgICAgICAgICAgIFwid2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgXCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgXCJ3ZWJraXRmdWxsc2NyZWVuZXJyb3JcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIFwibW96UmVxdWVzdEZ1bGxTY3JlZW5cIixcclxuICAgICAgICAgICAgICBcIm1vekNhbmNlbEZ1bGxTY3JlZW5cIixcclxuICAgICAgICAgICAgICBcIm1vekZ1bGxTY3JlZW5FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgXCJtb3pGdWxsU2NyZWVuRW5hYmxlZFwiLFxyXG4gICAgICAgICAgICAgIFwibW96ZnVsbHNjcmVlbmNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgIFwibW96ZnVsbHNjcmVlbmVycm9yXCIsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICBcIm1zUmVxdWVzdEZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICBcIm1zRXhpdEZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICBcIm1zRnVsbHNjcmVlbkVsZW1lbnRcIixcclxuICAgICAgICAgICAgICBcIm1zRnVsbHNjcmVlbkVuYWJsZWRcIixcclxuICAgICAgICAgICAgICBcIk1TRnVsbHNjcmVlbkNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgIFwiTVNGdWxsc2NyZWVuRXJyb3JcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBuID0ge30sXHJcbiAgICAgICAgICBvID0gMDtcclxuICAgICAgICBvIDwgZS5sZW5ndGg7XHJcbiAgICAgICAgbysrXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhciBpID0gZVtvXTtcclxuICAgICAgICBpZiAoaSAmJiBpWzFdIGluIHQpIHtcclxuICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgaS5sZW5ndGg7IGErKykgbltlWzBdW2FdXSA9IGlbYV07XHJcbiAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICExO1xyXG4gICAgfSkoKTtcclxuICAgIGlmIChuKSB7XHJcbiAgICAgIHZhciBvID0ge1xyXG4gICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAoZSA9IGUgfHwgdC5kb2N1bWVudEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBlW24ucmVxdWVzdEZ1bGxzY3JlZW5dKGUuQUxMT1dfS0VZQk9BUkRfSU5QVVQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhpdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdFtuLmV4aXRGdWxsc2NyZWVuXSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgKGUgPSBlIHx8IHQuZG9jdW1lbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4oKSA/IHRoaXMuZXhpdCgpIDogdGhpcy5yZXF1ZXN0KGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNGdWxsc2NyZWVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbih0W24uZnVsbHNjcmVlbkVsZW1lbnRdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBCb29sZWFuKHRbbi5mdWxsc2NyZWVuRW5hYmxlZF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGUuZXh0ZW5kKCEwLCBlLmZhbmN5Ym94LmRlZmF1bHRzLCB7XHJcbiAgICAgICAgYnRuVHBsOiB7XHJcbiAgICAgICAgICBmdWxsU2NyZWVuOlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW4gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1mc2VudGVyXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01elwiLz48L3N2Zz48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk01IDE2aDN2M2gydi01SDV6bTMtOEg1djJoNVY1SDh6bTYgMTFoMnYtM2gzdi0yaC01em0yLTExVjVoLTJ2NWg1Vjh6XCIvPjwvc3ZnPjwvYnV0dG9uPicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdWxsU2NyZWVuOiB7IGF1dG9TdGFydDogITEgfSxcclxuICAgICAgfSksXHJcbiAgICAgICAgZSh0KS5vbihuLmZ1bGxzY3JlZW5jaGFuZ2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciB0ID0gby5pc0Z1bGxzY3JlZW4oKSxcclxuICAgICAgICAgICAgbiA9IGUuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICAgIG4gJiZcclxuICAgICAgICAgICAgKG4uY3VycmVudCAmJlxyXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIiA9PT0gbi5jdXJyZW50LnR5cGUgJiZcclxuICAgICAgICAgICAgICBuLmlzQW5pbWF0aW5nICYmXHJcbiAgICAgICAgICAgICAgKChuLmlzQW5pbWF0aW5nID0gITEpLFxyXG4gICAgICAgICAgICAgIG4udXBkYXRlKCEwLCAhMCwgMCksXHJcbiAgICAgICAgICAgICAgbi5pc0NvbXBsZXRlIHx8IG4uY29tcGxldGUoKSksXHJcbiAgICAgICAgICAgIG4udHJpZ2dlcihcIm9uRnVsbHNjcmVlbkNoYW5nZVwiLCB0KSxcclxuICAgICAgICAgICAgbi4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy1mdWxsc2NyZWVuXCIsIHQpLFxyXG4gICAgICAgICAgICBuLiRyZWZzLnRvb2xiYXJcclxuICAgICAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpXHJcbiAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1mc2VudGVyXCIsICF0KVxyXG4gICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tZnNleGl0XCIsIHQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGUodCkub24oe1xyXG4gICAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGlmICghbilcclxuICAgICAgICAgIHJldHVybiB2b2lkIGUuJHJlZnMudG9vbGJhclxyXG4gICAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcclxuICAgICAgICBlICYmIGUuZ3JvdXBbZS5jdXJySW5kZXhdLm9wdHMuZnVsbFNjcmVlblxyXG4gICAgICAgICAgPyAoKGkgPSBlLiRyZWZzLmNvbnRhaW5lciksXHJcbiAgICAgICAgICAgIGkub24oXHJcbiAgICAgICAgICAgICAgXCJjbGljay5mYi1mdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiLFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB0LnN0b3BQcm9wYWdhdGlvbigpLCB0LnByZXZlbnREZWZhdWx0KCksIG8udG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBlLm9wdHMuZnVsbFNjcmVlbiAmJlxyXG4gICAgICAgICAgICAgICEwID09PSBlLm9wdHMuZnVsbFNjcmVlbi5hdXRvU3RhcnQgJiZcclxuICAgICAgICAgICAgICBvLnJlcXVlc3QoKSxcclxuICAgICAgICAgICAgKGUuRnVsbFNjcmVlbiA9IG8pKVxyXG4gICAgICAgICAgOiBlICYmIGUuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtZnVsbHNjcmVlbl1cIikuaGlkZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAodCwgZSwgbiwgbywgaSkge1xyXG4gICAgICAgIGUgJiZcclxuICAgICAgICAgIGUuRnVsbFNjcmVlbiAmJlxyXG4gICAgICAgICAgNzAgPT09IGkgJiZcclxuICAgICAgICAgIChvLnByZXZlbnREZWZhdWx0KCksIGUuRnVsbFNjcmVlbi50b2dnbGUoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiYmVmb3JlQ2xvc2UuZmJcIjogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICBlICYmXHJcbiAgICAgICAgICBlLkZ1bGxTY3JlZW4gJiZcclxuICAgICAgICAgIGUuJHJlZnMuY29udGFpbmVyLmhhc0NsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiKSAmJlxyXG4gICAgICAgICAgby5leGl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KShkb2N1bWVudCwgalF1ZXJ5KSxcclxuICAoZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIG4gPSBcImZhbmN5Ym94LXRodW1ic1wiO1xyXG4gICAgZS5mYW5jeWJveC5kZWZhdWx0cyA9IGUuZXh0ZW5kKFxyXG4gICAgICAhMCxcclxuICAgICAge1xyXG4gICAgICAgIGJ0blRwbDoge1xyXG4gICAgICAgICAgdGh1bWJzOlxyXG4gICAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1ic1wiIHRpdGxlPVwie3tUSFVNQlN9fVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE0LjU5IDE0LjU5aDMuNzZ2My43NmgtMy43NnYtMy43NnptLTQuNDcgMGgzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjV2LTMuNzZ6bTguOTQtNC40N2gzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2di0zLjc2em0tNC40NyAwaDMuNzZ2My43Nkg1LjY1di0zLjc2em04Ljk0LTQuNDdoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2aC0zLjc2VjUuNjV6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjVWNS42NXpcIi8+PC9zdmc+PC9idXR0b24+JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRodW1iczoge1xyXG4gICAgICAgICAgYXV0b1N0YXJ0OiAhMSxcclxuICAgICAgICAgIGhpZGVPbkNsb3NlOiAhMCxcclxuICAgICAgICAgIHBhcmVudEVsOiBcIi5mYW5jeWJveC1jb250YWluZXJcIixcclxuICAgICAgICAgIGF4aXM6IFwieVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGUuZmFuY3lib3guZGVmYXVsdHNcclxuICAgICk7XHJcbiAgICB2YXIgbyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHRoaXMuaW5pdCh0KTtcclxuICAgIH07XHJcbiAgICBlLmV4dGVuZChvLnByb3RvdHlwZSwge1xyXG4gICAgICAkYnV0dG9uOiBudWxsLFxyXG4gICAgICAkZ3JpZDogbnVsbCxcclxuICAgICAgJGxpc3Q6IG51bGwsXHJcbiAgICAgIGlzVmlzaWJsZTogITEsXHJcbiAgICAgIGlzQWN0aXZlOiAhMSxcclxuICAgICAgaW5pdDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMsXHJcbiAgICAgICAgICBuID0gdC5ncm91cCxcclxuICAgICAgICAgIG8gPSAwO1xyXG4gICAgICAgIChlLmluc3RhbmNlID0gdCksXHJcbiAgICAgICAgICAoZS5vcHRzID0gblt0LmN1cnJJbmRleF0ub3B0cy50aHVtYnMpLFxyXG4gICAgICAgICAgKHQuVGh1bWJzID0gZSksXHJcbiAgICAgICAgICAoZS4kYnV0dG9uID0gdC4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC10aHVtYnNdXCIpKTtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgdmFyIGkgPSAwLCBhID0gbi5sZW5ndGg7XHJcbiAgICAgICAgICBpIDwgYSAmJiAobltpXS50aHVtYiAmJiBvKyssICEobyA+IDEpKTtcclxuICAgICAgICAgIGkrK1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbyA+IDEgJiYgZS5vcHRzXHJcbiAgICAgICAgICA/IChlLiRidXR0b24ucmVtb3ZlQXR0cihcInN0eWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGUudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAoZS5pc0FjdGl2ZSA9ICEwKSlcclxuICAgICAgICAgIDogZS4kYnV0dG9uLmhpZGUoKTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQsXHJcbiAgICAgICAgICBvID0gdGhpcyxcclxuICAgICAgICAgIGkgPSBvLmluc3RhbmNlLFxyXG4gICAgICAgICAgYSA9IG8ub3B0cy5wYXJlbnRFbCxcclxuICAgICAgICAgIHMgPSBbXTtcclxuICAgICAgICBvLiRncmlkIHx8XHJcbiAgICAgICAgICAoKG8uJGdyaWQgPSBlKFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIicgKyBuICsgXCIgXCIgKyBuICsgXCItXCIgKyBvLm9wdHMuYXhpcyArICdcIj48L2Rpdj4nXHJcbiAgICAgICAgICApLmFwcGVuZFRvKGkuJHJlZnMuY29udGFpbmVyLmZpbmQoYSkuYWRkQmFjaygpLmZpbHRlcihhKSkpLFxyXG4gICAgICAgICAgby4kZ3JpZC5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGkuanVtcFRvKGUodGhpcykuYXR0cihcImRhdGEtaW5kZXhcIikpO1xyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgby4kbGlzdCB8fFxyXG4gICAgICAgICAgICAoby4kbGlzdCA9IGUoJzxkaXYgY2xhc3M9XCInICsgbiArICdfX2xpc3RcIj4nKS5hcHBlbmRUbyhvLiRncmlkKSksXHJcbiAgICAgICAgICBlLmVhY2goaS5ncm91cCwgZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgICAgICAgKHQgPSBuLnRodW1iKSxcclxuICAgICAgICAgICAgICB0IHx8IFwiaW1hZ2VcIiAhPT0gbi50eXBlIHx8ICh0ID0gbi5zcmMpLFxyXG4gICAgICAgICAgICAgIHMucHVzaChcclxuICAgICAgICAgICAgICAgICc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdGFiaW5kZXg9XCIwXCIgZGF0YS1pbmRleD1cIicgK1xyXG4gICAgICAgICAgICAgICAgICBlICtcclxuICAgICAgICAgICAgICAgICAgJ1wiJyArXHJcbiAgICAgICAgICAgICAgICAgICh0ICYmIHQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIHQgKyAnKVwiJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ2NsYXNzPVwiZmFuY3lib3gtdGh1bWJzLW1pc3NpbmdcIicpICtcclxuICAgICAgICAgICAgICAgICAgXCI+PC9hPlwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKG8uJGxpc3RbMF0uaW5uZXJIVE1MID0gcy5qb2luKFwiXCIpKSxcclxuICAgICAgICAgIFwieFwiID09PSBvLm9wdHMuYXhpcyAmJlxyXG4gICAgICAgICAgICBvLiRsaXN0LndpZHRoKFxyXG4gICAgICAgICAgICAgIHBhcnNlSW50KG8uJGdyaWQuY3NzKFwicGFkZGluZy1yaWdodFwiKSwgMTApICtcclxuICAgICAgICAgICAgICAgIGkuZ3JvdXAubGVuZ3RoICogby4kbGlzdC5jaGlsZHJlbigpLmVxKDApLm91dGVyV2lkdGgoITApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlLFxyXG4gICAgICAgICAgbixcclxuICAgICAgICAgIG8gPSB0aGlzLFxyXG4gICAgICAgICAgaSA9IG8uJGxpc3QsXHJcbiAgICAgICAgICBhID0gby4kZ3JpZDtcclxuICAgICAgICBvLmluc3RhbmNlLmN1cnJlbnQgJiZcclxuICAgICAgICAgICgoZSA9IGlcclxuICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtdGh1bWJzLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicgKyBvLmluc3RhbmNlLmN1cnJlbnQuaW5kZXggKyAnXCJdJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtdGh1bWJzLWFjdGl2ZVwiKSksXHJcbiAgICAgICAgICAobiA9IGUucG9zaXRpb24oKSksXHJcbiAgICAgICAgICBcInlcIiA9PT0gby5vcHRzLmF4aXMgJiZcclxuICAgICAgICAgIChuLnRvcCA8IDAgfHwgbi50b3AgPiBpLmhlaWdodCgpIC0gZS5vdXRlckhlaWdodCgpKVxyXG4gICAgICAgICAgICA/IGkuc3RvcCgpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGkuc2Nyb2xsVG9wKCkgKyBuLnRvcCB9LCB0KVxyXG4gICAgICAgICAgICA6IFwieFwiID09PSBvLm9wdHMuYXhpcyAmJlxyXG4gICAgICAgICAgICAgIChuLmxlZnQgPCBhLnNjcm9sbExlZnQoKSB8fFxyXG4gICAgICAgICAgICAgICAgbi5sZWZ0ID4gYS5zY3JvbGxMZWZ0KCkgKyAoYS53aWR0aCgpIC0gZS5vdXRlcldpZHRoKCkpKSAmJlxyXG4gICAgICAgICAgICAgIGkucGFyZW50KCkuc3RvcCgpLmFuaW1hdGUoeyBzY3JvbGxMZWZ0OiBuLmxlZnQgfSwgdCkpO1xyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5pbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXHJcbiAgICAgICAgICBcImZhbmN5Ym94LXNob3ctdGh1bWJzXCIsXHJcbiAgICAgICAgICB0aGlzLmlzVmlzaWJsZVxyXG4gICAgICAgICksXHJcbiAgICAgICAgICB0LmlzVmlzaWJsZVxyXG4gICAgICAgICAgICA/ICh0LiRncmlkIHx8IHQuY3JlYXRlKCksXHJcbiAgICAgICAgICAgICAgdC5pbnN0YW5jZS50cmlnZ2VyKFwib25UaHVtYnNTaG93XCIpLFxyXG4gICAgICAgICAgICAgIHQuZm9jdXMoMCkpXHJcbiAgICAgICAgICAgIDogdC4kZ3JpZCAmJiB0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic0hpZGVcIiksXHJcbiAgICAgICAgICB0Lmluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKHRoaXMuaXNWaXNpYmxlID0gITEpLCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKHRoaXMuaXNWaXNpYmxlID0gITApLCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAodGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGUpLCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICAgIGUodCkub24oe1xyXG4gICAgICAgIFwib25Jbml0LmZiXCI6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICB2YXIgbjtcclxuICAgICAgICAgIGUgJiZcclxuICAgICAgICAgICAgIWUuVGh1bWJzICYmXHJcbiAgICAgICAgICAgICgobiA9IG5ldyBvKGUpKSwgbi5pc0FjdGl2ZSAmJiAhMCA9PT0gbi5vcHRzLmF1dG9TdGFydCAmJiBuLnNob3coKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24gKHQsIGUsIG4sIG8pIHtcclxuICAgICAgICAgIHZhciBpID0gZSAmJiBlLlRodW1icztcclxuICAgICAgICAgIGkgJiYgaS5pc1Zpc2libGUgJiYgaS5mb2N1cyhvID8gMCA6IDI1MCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAodCwgZSwgbiwgbywgaSkge1xyXG4gICAgICAgICAgdmFyIGEgPSBlICYmIGUuVGh1bWJzO1xyXG4gICAgICAgICAgYSAmJiBhLmlzQWN0aXZlICYmIDcxID09PSBpICYmIChvLnByZXZlbnREZWZhdWx0KCksIGEudG9nZ2xlKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiZWZvcmVDbG9zZS5mYlwiOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgdmFyIG4gPSBlICYmIGUuVGh1bWJzO1xyXG4gICAgICAgICAgbiAmJiBuLmlzVmlzaWJsZSAmJiAhMSAhPT0gbi5vcHRzLmhpZGVPbkNsb3NlICYmIG4uJGdyaWQuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH0pKGRvY3VtZW50LCBqUXVlcnkpLFxyXG4gIChmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBuKHQpIHtcclxuICAgICAgdmFyIGUgPSB7XHJcbiAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgICdcIic6IFwiJnF1b3Q7XCIsXHJcbiAgICAgICAgXCInXCI6IFwiJiMzOTtcIixcclxuICAgICAgICBcIi9cIjogXCImI3gyRjtcIixcclxuICAgICAgICBcImBcIjogXCImI3g2MDtcIixcclxuICAgICAgICBcIj1cIjogXCImI3gzRDtcIixcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIFN0cmluZyh0KS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVbdF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZS5leHRlbmQoITAsIGUuZmFuY3lib3guZGVmYXVsdHMsIHtcclxuICAgICAgYnRuVHBsOiB7XHJcbiAgICAgICAgc2hhcmU6XHJcbiAgICAgICAgICAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXNoYXJlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tc2hhcmVcIiB0aXRsZT1cInt7U0hBUkV9fVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTIuNTUgMTljMS40LTguNCA5LjEtOS44IDExLjktOS44VjVsNyA3LTcgNi4zdi0zLjVjLTIuOCAwLTEwLjUgMi4xLTExLjkgNC4yelwiLz48L3N2Zz48L2J1dHRvbj4nLFxyXG4gICAgICB9LFxyXG4gICAgICBzaGFyZToge1xyXG4gICAgICAgIHVybDogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICghdC5jdXJyZW50SGFzaCAmJlxyXG4gICAgICAgICAgICAgIFwiaW5saW5lXCIgIT09IGUudHlwZSAmJlxyXG4gICAgICAgICAgICAgIFwiaHRtbFwiICE9PSBlLnR5cGUgJiZcclxuICAgICAgICAgICAgICAoZS5vcmlnU3JjIHx8IGUuc3JjKSkgfHxcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHBsOlxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zaGFyZVwiPjxoMT57e1NIQVJFfX08L2gxPjxwPjxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS1mYlwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0yODcgNDU2di0yOTljMC0yMSA2LTM1IDM1LTM1aDM4di02M2MtNy0xLTI5LTMtNTUtMy01NCAwLTkxIDMzLTkxIDk0djMwNm0xNDMtMjU0aC0yMDV2NzJoMTk2XCIgLz48L3N2Zz48c3Bhbj5GYWNlYm9vazwvc3Bhbj48L2E+PGEgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9fYnV0dG9uIGZhbmN5Ym94LXNoYXJlX19idXR0b24tLXR3XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD17e3VybH19JnRleHQ9e3tkZXNjcn19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NTYgMTMzYy0xNCA3LTMxIDExLTQ3IDEzIDE3LTEwIDMwLTI3IDM3LTQ2LTE1IDEwLTM0IDE2LTUyIDIwLTYxLTYyLTE1Ny03LTE0MSA3NS02OC0zLTEyOS0zNS0xNjktODUtMjIgMzctMTEgODYgMjYgMTA5LTEzIDAtMjYtNC0zNy05IDAgMzkgMjggNzIgNjUgODAtMTIgMy0yNSA0LTM3IDIgMTAgMzMgNDEgNTcgNzcgNTctNDIgMzAtNzcgMzgtMTIyIDM0IDE3MCAxMTEgMzc4LTMyIDM1OS0yMDggMTYtMTEgMzAtMjUgNDEtNDJ6XCIgLz48L3N2Zz48c3Bhbj5Ud2l0dGVyPC9zcGFuPjwvYT48YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tcHRcIiBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPXt7dXJsfX0mZGVzY3JpcHRpb249e3tkZXNjcn19Jm1lZGlhPXt7bWVkaWF9fVwiPjxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMjY1IDU2Yy0xMDkgMC0xNjQgNzgtMTY0IDE0NCAwIDM5IDE1IDc0IDQ3IDg3IDUgMiAxMCAwIDEyLTVsNC0xOWMyLTYgMS04LTMtMTMtOS0xMS0xNS0yNS0xNS00NSAwLTU4IDQzLTExMCAxMTMtMTEwIDYyIDAgOTYgMzggOTYgODggMCA2Ny0zMCAxMjItNzMgMTIyLTI0IDAtNDItMTktMzYtNDQgNi0yOSAyMC02MCAyMC04MSAwLTE5LTEwLTM1LTMxLTM1LTI1IDAtNDQgMjYtNDQgNjAgMCAyMSA3IDM2IDcgMzZsLTMwIDEyNWMtOCAzNy0xIDgzIDAgODcgMCAzIDQgNCA1IDIgMi0zIDMyLTM5IDQyLTc1bDE2LTY0YzggMTYgMzEgMjkgNTYgMjkgNzQgMCAxMjQtNjcgMTI0LTE1NyAwLTY5LTU4LTEzMi0xNDYtMTMyelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPjxzcGFuPlBpbnRlcmVzdDwvc3Bhbj48L2E+PC9wPjxwPjxpbnB1dCBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e3VybF9yYXd9fVwiIG9uY2xpY2s9XCJzZWxlY3QoKVwiIC8+PC9wPjwvZGl2PicsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgICAgZSh0KS5vbihcImNsaWNrXCIsIFwiW2RhdGEtZmFuY3lib3gtc2hhcmVdXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCxcclxuICAgICAgICAgIG8sXHJcbiAgICAgICAgICBpID0gZS5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLFxyXG4gICAgICAgICAgYSA9IGkuY3VycmVudCB8fCBudWxsO1xyXG4gICAgICAgIGEgJiZcclxuICAgICAgICAgIChcImZ1bmN0aW9uXCIgPT09IGUudHlwZShhLm9wdHMuc2hhcmUudXJsKSAmJlxyXG4gICAgICAgICAgICAodCA9IGEub3B0cy5zaGFyZS51cmwuYXBwbHkoYSwgW2ksIGFdKSksXHJcbiAgICAgICAgICAobyA9IGEub3B0cy5zaGFyZS50cGxcclxuICAgICAgICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgL1xce1xce21lZGlhXFx9XFx9L2csXHJcbiAgICAgICAgICAgICAgXCJpbWFnZVwiID09PSBhLnR5cGUgPyBlbmNvZGVVUklDb21wb25lbnQoYS5zcmMpIDogXCJcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtcXHt1cmxcXH1cXH0vZywgZW5jb2RlVVJJQ29tcG9uZW50KHQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx7XFx7dXJsX3Jhd1xcfVxcfS9nLCBuKHQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZShcclxuICAgICAgICAgICAgICAvXFx7XFx7ZGVzY3JcXH1cXH0vZyxcclxuICAgICAgICAgICAgICBpLiRjYXB0aW9uID8gZW5jb2RlVVJJQ29tcG9uZW50KGkuJGNhcHRpb24udGV4dCgpKSA6IFwiXCJcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICBlLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICAgICAgICBzcmM6IGkudHJhbnNsYXRlKGksIG8pLFxyXG4gICAgICAgICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgb3B0czoge1xyXG4gICAgICAgICAgICAgIHRvdWNoOiAhMSxcclxuICAgICAgICAgICAgICBhbmltYXRpb25FZmZlY3Q6ICExLFxyXG4gICAgICAgICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgIGkuJHJlZnMuY29udGFpbmVyLm9uZShcImJlZm9yZUNsb3NlLmZiXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgdC5jbG9zZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBlLiRjb250ZW50LmZpbmQoXCIuZmFuY3lib3gtc2hhcmVfX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgXCJTaGFyZVwiLCBcIndpZHRoPTU1MCwgaGVpZ2h0PTQ1MFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICExXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgYXV0b0ZvY3VzOiAhMSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICB9KShkb2N1bWVudCwgalF1ZXJ5KSxcclxuICAoZnVuY3Rpb24gKHQsIGUsIG4pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gbygpIHtcclxuICAgICAgdmFyIGUgPSB0LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgICAgIG4gPSBlLnNwbGl0KFwiLVwiKSxcclxuICAgICAgICBvID1cclxuICAgICAgICAgIG4ubGVuZ3RoID4gMSAmJiAvXlxcKz9cXGQrJC8udGVzdChuW24ubGVuZ3RoIC0gMV0pXHJcbiAgICAgICAgICAgID8gcGFyc2VJbnQobi5wb3AoLTEpLCAxMCkgfHwgMVxyXG4gICAgICAgICAgICA6IDEsXHJcbiAgICAgICAgaSA9IG4uam9pbihcIi1cIik7XHJcbiAgICAgIHJldHVybiB7IGhhc2g6IGUsIGluZGV4OiBvIDwgMSA/IDEgOiBvLCBnYWxsZXJ5OiBpIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpKHQpIHtcclxuICAgICAgXCJcIiAhPT0gdC5nYWxsZXJ5ICYmXHJcbiAgICAgICAgbihcIltkYXRhLWZhbmN5Ym94PSdcIiArIG4uZXNjYXBlU2VsZWN0b3IodC5nYWxsZXJ5KSArIFwiJ11cIilcclxuICAgICAgICAgIC5lcSh0LmluZGV4IC0gMSlcclxuICAgICAgICAgIC5mb2N1cygpXHJcbiAgICAgICAgICAudHJpZ2dlcihcImNsaWNrLmZiLXN0YXJ0XCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYSh0KSB7XHJcbiAgICAgIHZhciBlLCBuO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICEhdCAmJlxyXG4gICAgICAgICgoZSA9IHQuY3VycmVudCA/IHQuY3VycmVudC5vcHRzIDogdC5vcHRzKSxcclxuICAgICAgICBcIlwiICE9PVxyXG4gICAgICAgICAgKG4gPVxyXG4gICAgICAgICAgICBlLmhhc2ggfHxcclxuICAgICAgICAgICAgKGUuJG9yaWdcclxuICAgICAgICAgICAgICA/IGUuJG9yaWcuZGF0YShcImZhbmN5Ym94XCIpIHx8IGUuJG9yaWcuZGF0YShcImZhbmN5Ym94LXRyaWdnZXJcIilcclxuICAgICAgICAgICAgICA6IFwiXCIpKSAmJiBuKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbi5lc2NhcGVTZWxlY3RvciB8fFxyXG4gICAgICAobi5lc2NhcGVTZWxlY3RvciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuICh0ICsgXCJcIikucmVwbGFjZShcclxuICAgICAgICAgIC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxceDgwLVxcdUZGRkZcXHctXS9nLFxyXG4gICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgICA/IFwiXFwwXCIgPT09IHRcclxuICAgICAgICAgICAgICAgID8gXCLvv71cIlxyXG4gICAgICAgICAgICAgICAgOiB0LnNsaWNlKDAsIC0xKSArXHJcbiAgICAgICAgICAgICAgICAgIFwiXFxcXFwiICtcclxuICAgICAgICAgICAgICAgICAgdC5jaGFyQ29kZUF0KHQubGVuZ3RoIC0gMSkudG9TdHJpbmcoMTYpICtcclxuICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICA6IFwiXFxcXFwiICsgdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgITEgIT09IG4uZmFuY3lib3guZGVmYXVsdHMuaGFzaCAmJlxyXG4gICAgICAgICAgKG4oZSkub24oe1xyXG4gICAgICAgICAgICBcIm9uSW5pdC5mYlwiOiBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICAgIHZhciBuLCBpO1xyXG4gICAgICAgICAgICAgICExICE9PSBlLmdyb3VwW2UuY3VyckluZGV4XS5vcHRzLmhhc2ggJiZcclxuICAgICAgICAgICAgICAgICgobiA9IG8oKSksXHJcbiAgICAgICAgICAgICAgICAoaSA9IGEoZSkpICYmXHJcbiAgICAgICAgICAgICAgICAgIG4uZ2FsbGVyeSAmJlxyXG4gICAgICAgICAgICAgICAgICBpID09IG4uZ2FsbGVyeSAmJlxyXG4gICAgICAgICAgICAgICAgICAoZS5jdXJySW5kZXggPSBuLmluZGV4IC0gMSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24gKG4sIG8sIGksIHMpIHtcclxuICAgICAgICAgICAgICB2YXIgcjtcclxuICAgICAgICAgICAgICBpICYmXHJcbiAgICAgICAgICAgICAgICAhMSAhPT0gaS5vcHRzLmhhc2ggJiZcclxuICAgICAgICAgICAgICAgIChyID0gYShvKSkgJiZcclxuICAgICAgICAgICAgICAgICgoby5jdXJyZW50SGFzaCA9XHJcbiAgICAgICAgICAgICAgICAgIHIgKyAoby5ncm91cC5sZW5ndGggPiAxID8gXCItXCIgKyAoaS5pbmRleCArIDEpIDogXCJcIikpLFxyXG4gICAgICAgICAgICAgICAgdC5sb2NhdGlvbi5oYXNoICE9PSBcIiNcIiArIG8uY3VycmVudEhhc2ggJiZcclxuICAgICAgICAgICAgICAgICAgKHMgJiYgIW8ub3JpZ0hhc2ggJiYgKG8ub3JpZ0hhc2ggPSB0LmxvY2F0aW9uLmhhc2gpLFxyXG4gICAgICAgICAgICAgICAgICBvLmhhc2hUaW1lciAmJiBjbGVhclRpbWVvdXQoby5oYXNoVGltZXIpLFxyXG4gICAgICAgICAgICAgICAgICAoby5oYXNoVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBcInJlcGxhY2VTdGF0ZVwiIGluIHQuaGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAodC5oaXN0b3J5W3MgPyBcInB1c2hTdGF0ZVwiIDogXCJyZXBsYWNlU3RhdGVcIl0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0LmxvY2F0aW9uLnBhdGhuYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubG9jYXRpb24uc2VhcmNoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uY3VycmVudEhhc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcyAmJiAoby5oYXNDcmVhdGVkSGlzdG9yeSA9ICEwKSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogKHQubG9jYXRpb24uaGFzaCA9IG8uY3VycmVudEhhc2gpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKG8uaGFzaFRpbWVyID0gbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDMwMCkpKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYmVmb3JlQ2xvc2UuZmJcIjogZnVuY3Rpb24gKG4sIG8sIGkpIHtcclxuICAgICAgICAgICAgICBpICYmXHJcbiAgICAgICAgICAgICAgICAhMSAhPT0gaS5vcHRzLmhhc2ggJiZcclxuICAgICAgICAgICAgICAgIChjbGVhclRpbWVvdXQoby5oYXNoVGltZXIpLFxyXG4gICAgICAgICAgICAgICAgby5jdXJyZW50SGFzaCAmJiBvLmhhc0NyZWF0ZWRIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgID8gdC5oaXN0b3J5LmJhY2soKVxyXG4gICAgICAgICAgICAgICAgICA6IG8uY3VycmVudEhhc2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAoXCJyZXBsYWNlU3RhdGVcIiBpbiB0Lmhpc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgID8gdC5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHQubG9jYXRpb24ucGF0aG5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5sb2NhdGlvbi5zZWFyY2ggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8ub3JpZ0hhc2ggfHwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAodC5sb2NhdGlvbi5oYXNoID0gby5vcmlnSGFzaCkpLFxyXG4gICAgICAgICAgICAgICAgKG8uY3VycmVudEhhc2ggPSBudWxsKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIG4odCkub24oXCJoYXNoY2hhbmdlLmZiXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBvKCksXHJcbiAgICAgICAgICAgICAgZSA9IG51bGw7XHJcbiAgICAgICAgICAgIG4uZWFjaChuKFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiKS5nZXQoKS5yZXZlcnNlKCksIGZ1bmN0aW9uICh0LCBvKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGkgPSBuKG8pLmRhdGEoXCJGYW5jeUJveFwiKTtcclxuICAgICAgICAgICAgICBpZiAoaSAmJiBpLmN1cnJlbnRIYXNoKSByZXR1cm4gKGUgPSBpKSwgITE7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGVcclxuICAgICAgICAgICAgICAgID8gZS5jdXJyZW50SGFzaCA9PT0gdC5nYWxsZXJ5ICsgXCItXCIgKyB0LmluZGV4IHx8XHJcbiAgICAgICAgICAgICAgICAgICgxID09PSB0LmluZGV4ICYmIGUuY3VycmVudEhhc2ggPT0gdC5nYWxsZXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAoKGUuY3VycmVudEhhc2ggPSBudWxsKSwgZS5jbG9zZSgpKVxyXG4gICAgICAgICAgICAgICAgOiBcIlwiICE9PSB0LmdhbGxlcnkgJiYgaSh0KTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG4uZmFuY3lib3guZ2V0SW5zdGFuY2UoKSB8fCBpKG8oKSk7XHJcbiAgICAgICAgICB9LCA1MCkpO1xyXG4gICAgICB9KTtcclxuICB9KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpLFxyXG4gIChmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgZSh0KS5vbih7XHJcbiAgICAgIFwib25Jbml0LmZiXCI6IGZ1bmN0aW9uICh0LCBlLCBvKSB7XHJcbiAgICAgICAgZS4kcmVmcy5zdGFnZS5vbihcclxuICAgICAgICAgIFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCB3aGVlbCBNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IGUuY3VycmVudCxcclxuICAgICAgICAgICAgICBpID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGUuZ3JvdXAubGVuZ3RoIDwgMiB8fFxyXG4gICAgICAgICAgICAgICExID09PSBvLm9wdHMud2hlZWwgfHxcclxuICAgICAgICAgICAgICAoXCJhdXRvXCIgPT09IG8ub3B0cy53aGVlbCAmJiBcImltYWdlXCIgIT09IG8udHlwZSkgfHxcclxuICAgICAgICAgICAgICAodC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgIHQuc3RvcFByb3BhZ2F0aW9uKCksXHJcbiAgICAgICAgICAgICAgby4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKCh0ID0gdC5vcmlnaW5hbEV2ZW50IHx8IHQpLFxyXG4gICAgICAgICAgICAgICAgaSAtIG4gPCAyNTAgfHxcclxuICAgICAgICAgICAgICAgICAgKChuID0gaSksXHJcbiAgICAgICAgICAgICAgICAgIGVbXHJcbiAgICAgICAgICAgICAgICAgICAgKC10LmRlbHRhWSB8fCAtdC5kZWx0YVggfHwgdC53aGVlbERlbHRhIHx8IC10LmRldGFpbCkgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwicHJldmlvdXNcIlxyXG4gICAgICAgICAgICAgICAgICBdKCkpKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pKGRvY3VtZW50LCBqUXVlcnkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9