(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["chunks"],{

/***/ 932:
/*!*********************************!*\
  !*** ./src/js/bootstrap.min.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */



if ("undefined" == typeof (jquery__WEBPACK_IMPORTED_MODULE_0___default()))
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default())),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })((jquery__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2Jvb3RzdHJhcC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1QjtBQUNLOztBQUU1QiwwQkFBMEIsK0NBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFLCtDQUFNO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsR0FBRyxFQUFFLCtDQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRyxFQUFFLCtDQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFLCtDQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNB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QUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHLEVBQUUsK0NBQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxHQUFHLEVBQUUsK0NBQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RCx3Q0FBd0Msc0JBQXNCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQTZDO0FBQ3hFLDZCQUE2Qiw0Q0FBNEM7QUFDekUsZUFBZTtBQUNmO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUUsK0NBQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEdBQUcsRUFBRSwrQ0FBTSIsImZpbGUiOiJjaHVua3MuYnVuZGxlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQm9vdHN0cmFwIHYzLjMuNyAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5pZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgalF1ZXJ5KVxyXG4gIHRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5XCIpO1xyXG4rKGZ1bmN0aW9uIChhKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgdmFyIGIgPSBhLmZuLmpxdWVyeS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCIuXCIpO1xyXG4gIGlmIChcclxuICAgIChiWzBdIDwgMiAmJiBiWzFdIDwgOSkgfHxcclxuICAgICgxID09IGJbMF0gJiYgOSA9PSBiWzFdICYmIGJbMl0gPCAxKSB8fFxyXG4gICAgYlswXSA+IDNcclxuICApXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkgdmVyc2lvbiAxLjkuMSBvciBoaWdoZXIsIGJ1dCBsb3dlciB0aGFuIHZlcnNpb24gNFwiXHJcbiAgICApO1xyXG59KShqUXVlcnkpLFxyXG4gICsoZnVuY3Rpb24gKGEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gYigpIHtcclxuICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9vdHN0cmFwXCIpLFxyXG4gICAgICAgIGIgPSB7XHJcbiAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uOiBcIndlYmtpdFRyYW5zaXRpb25FbmRcIixcclxuICAgICAgICAgIE1velRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgICAgT1RyYW5zaXRpb246IFwib1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGZvciAodmFyIGMgaW4gYikgaWYgKHZvaWQgMCAhPT0gYS5zdHlsZVtjXSkgcmV0dXJuIHsgZW5kOiBiW2NdIH07XHJcbiAgICAgIHJldHVybiAhMTtcclxuICAgIH1cclxuICAgIChhLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgdmFyIGMgPSAhMSxcclxuICAgICAgICBkID0gdGhpcztcclxuICAgICAgYSh0aGlzKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGMgPSAhMDtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGMgfHwgYShkKS50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGUsIGIpLCB0aGlzO1xyXG4gICAgfSksXHJcbiAgICAgIGEoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIChhLnN1cHBvcnQudHJhbnNpdGlvbiA9IGIoKSksXHJcbiAgICAgICAgICBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJlxyXG4gICAgICAgICAgICAoYS5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZCA9IHtcclxuICAgICAgICAgICAgICBiaW5kVHlwZTogYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLFxyXG4gICAgICAgICAgICAgIGRlbGVnYXRlVHlwZTogYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLFxyXG4gICAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhKGIudGFyZ2V0KS5pcyh0aGlzKSlcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSkoalF1ZXJ5KSxcclxuICArKGZ1bmN0aW9uIChhKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGZ1bmN0aW9uIGIoYikge1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYyA9IGEodGhpcyksXHJcbiAgICAgICAgICBlID0gYy5kYXRhKFwiYnMuYWxlcnRcIik7XHJcbiAgICAgICAgZSB8fCBjLmRhdGEoXCJicy5hbGVydFwiLCAoZSA9IG5ldyBkKHRoaXMpKSksXHJcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIGVbYl0uY2FsbChjKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYyA9ICdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nLFxyXG4gICAgICBkID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICBhKGIpLm9uKFwiY2xpY2tcIiwgYywgdGhpcy5jbG9zZSk7XHJcbiAgICAgIH07XHJcbiAgICAoZC5WRVJTSU9OID0gXCIzLjMuN1wiKSxcclxuICAgICAgKGQuVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MCksXHJcbiAgICAgIChkLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gYygpIHtcclxuICAgICAgICAgIGcuZGV0YWNoKCkudHJpZ2dlcihcImNsb3NlZC5icy5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGUgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgZiA9IGUuYXR0cihcImRhdGEtdGFyZ2V0XCIpO1xyXG4gICAgICAgIGYgfHwgKChmID0gZS5hdHRyKFwiaHJlZlwiKSksIChmID0gZiAmJiBmLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sIFwiXCIpKSk7XHJcbiAgICAgICAgdmFyIGcgPSBhKFwiI1wiID09PSBmID8gW10gOiBmKTtcclxuICAgICAgICBiICYmIGIucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgIGcubGVuZ3RoIHx8IChnID0gZS5jbG9zZXN0KFwiLmFsZXJ0XCIpKSxcclxuICAgICAgICAgIGcudHJpZ2dlcigoYiA9IGEuRXZlbnQoXCJjbG9zZS5icy5hbGVydFwiKSkpLFxyXG4gICAgICAgICAgYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxyXG4gICAgICAgICAgICAoZy5yZW1vdmVDbGFzcyhcImluXCIpLFxyXG4gICAgICAgICAgICBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBnLmhhc0NsYXNzKFwiZmFkZVwiKVxyXG4gICAgICAgICAgICAgID8gZ1xyXG4gICAgICAgICAgICAgICAgICAub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsIGMpXHJcbiAgICAgICAgICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pXHJcbiAgICAgICAgICAgICAgOiBjKCkpO1xyXG4gICAgICB9KTtcclxuICAgIHZhciBlID0gYS5mbi5hbGVydDtcclxuICAgIChhLmZuLmFsZXJ0ID0gYiksXHJcbiAgICAgIChhLmZuLmFsZXJ0LkNvbnN0cnVjdG9yID0gZCksXHJcbiAgICAgIChhLmZuLmFsZXJ0Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChhLmZuLmFsZXJ0ID0gZSksIHRoaXM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpXCIsIGMsIGQucHJvdG90eXBlLmNsb3NlKTtcclxuICB9KShqUXVlcnkpLFxyXG4gICsoZnVuY3Rpb24gKGEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gYihiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkID0gYSh0aGlzKSxcclxuICAgICAgICAgIGUgPSBkLmRhdGEoXCJicy5idXR0b25cIiksXHJcbiAgICAgICAgICBmID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgYiAmJiBiO1xyXG4gICAgICAgIGUgfHwgZC5kYXRhKFwiYnMuYnV0dG9uXCIsIChlID0gbmV3IGModGhpcywgZikpKSxcclxuICAgICAgICAgIFwidG9nZ2xlXCIgPT0gYiA/IGUudG9nZ2xlKCkgOiBiICYmIGUuc2V0U3RhdGUoYik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGMgPSBmdW5jdGlvbiAoYiwgZCkge1xyXG4gICAgICAodGhpcy4kZWxlbWVudCA9IGEoYikpLFxyXG4gICAgICAgICh0aGlzLm9wdGlvbnMgPSBhLmV4dGVuZCh7fSwgYy5ERUZBVUxUUywgZCkpLFxyXG4gICAgICAgICh0aGlzLmlzTG9hZGluZyA9ICExKTtcclxuICAgIH07XHJcbiAgICAoYy5WRVJTSU9OID0gXCIzLjMuN1wiKSxcclxuICAgICAgKGMuREVGQVVMVFMgPSB7IGxvYWRpbmdUZXh0OiBcImxvYWRpbmcuLi5cIiB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICB2YXIgYyA9IFwiZGlzYWJsZWRcIixcclxuICAgICAgICAgIGQgPSB0aGlzLiRlbGVtZW50LFxyXG4gICAgICAgICAgZSA9IGQuaXMoXCJpbnB1dFwiKSA/IFwidmFsXCIgOiBcImh0bWxcIixcclxuICAgICAgICAgIGYgPSBkLmRhdGEoKTtcclxuICAgICAgICAoYiArPSBcIlRleHRcIiksXHJcbiAgICAgICAgICBudWxsID09IGYucmVzZXRUZXh0ICYmIGQuZGF0YShcInJlc2V0VGV4dFwiLCBkW2VdKCkpLFxyXG4gICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgYS5wcm94eShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgZFtlXShudWxsID09IGZbYl0gPyB0aGlzLm9wdGlvbnNbYl0gOiBmW2JdKSxcclxuICAgICAgICAgICAgICAgIFwibG9hZGluZ1RleHRcIiA9PSBiXHJcbiAgICAgICAgICAgICAgICAgID8gKCh0aGlzLmlzTG9hZGluZyA9ICEwKSxcclxuICAgICAgICAgICAgICAgICAgICBkLmFkZENsYXNzKGMpLmF0dHIoYywgYykucHJvcChjLCAhMCkpXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5pc0xvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAoKHRoaXMuaXNMb2FkaW5nID0gITEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGQucmVtb3ZlQ2xhc3MoYykucmVtb3ZlQXR0cihjKS5wcm9wKGMsICExKSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9ICEwLFxyXG4gICAgICAgICAgYiA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpO1xyXG4gICAgICAgIGlmIChiLmxlbmd0aCkge1xyXG4gICAgICAgICAgdmFyIGMgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgIFwicmFkaW9cIiA9PSBjLnByb3AoXCJ0eXBlXCIpXHJcbiAgICAgICAgICAgID8gKGMucHJvcChcImNoZWNrZWRcIikgJiYgKGEgPSAhMSksXHJcbiAgICAgICAgICAgICAgYi5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICA6IFwiY2hlY2tib3hcIiA9PSBjLnByb3AoXCJ0eXBlXCIpICYmXHJcbiAgICAgICAgICAgICAgKGMucHJvcChcImNoZWNrZWRcIikgIT09IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikgJiZcclxuICAgICAgICAgICAgICAgIChhID0gITEpLFxyXG4gICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikpLFxyXG4gICAgICAgICAgICBjLnByb3AoXCJjaGVja2VkXCIsIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLFxyXG4gICAgICAgICAgICBhICYmIGMudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtcHJlc3NlZFwiLCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksXHJcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgdmFyIGQgPSBhLmZuLmJ1dHRvbjtcclxuICAgIChhLmZuLmJ1dHRvbiA9IGIpLFxyXG4gICAgICAoYS5mbi5idXR0b24uQ29uc3RydWN0b3IgPSBjKSxcclxuICAgICAgKGEuZm4uYnV0dG9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChhLmZuLmJ1dHRvbiA9IGQpLCB0aGlzO1xyXG4gICAgICB9KSxcclxuICAgICAgYShkb2N1bWVudClcclxuICAgICAgICAub24oXHJcbiAgICAgICAgICBcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLFxyXG4gICAgICAgICAgJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBhKGMudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0blwiKTtcclxuICAgICAgICAgICAgYi5jYWxsKGQsIFwidG9nZ2xlXCIpLFxyXG4gICAgICAgICAgICAgIGEoYy50YXJnZXQpLmlzKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHx8XHJcbiAgICAgICAgICAgICAgICAoYy5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgZC5pcyhcImlucHV0LGJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgICA/IGQudHJpZ2dlcihcImZvY3VzXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dDp2aXNpYmxlLGJ1dHRvbjp2aXNpYmxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoXCJmb2N1c1wiKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5vbihcclxuICAgICAgICAgIFwiZm9jdXMuYnMuYnV0dG9uLmRhdGEtYXBpIGJsdXIuYnMuYnV0dG9uLmRhdGEtYXBpXCIsXHJcbiAgICAgICAgICAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXHJcbiAgICAgICAgICBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICBhKGIudGFyZ2V0KVxyXG4gICAgICAgICAgICAgIC5jbG9zZXN0KFwiLmJ0blwiKVxyXG4gICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZvY3VzXCIsIC9eZm9jdXMoaW4pPyQvLnRlc3QoYi50eXBlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICB9KShqUXVlcnkpLFxyXG4gICsoZnVuY3Rpb24gKGEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gYihiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkID0gYSh0aGlzKSxcclxuICAgICAgICAgIGUgPSBkLmRhdGEoXCJicy5jYXJvdXNlbFwiKSxcclxuICAgICAgICAgIGYgPSBhLmV4dGVuZCh7fSwgYy5ERUZBVUxUUywgZC5kYXRhKCksIFwib2JqZWN0XCIgPT0gdHlwZW9mIGIgJiYgYiksXHJcbiAgICAgICAgICBnID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYiA/IGIgOiBmLnNsaWRlO1xyXG4gICAgICAgIGUgfHwgZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIiwgKGUgPSBuZXcgYyh0aGlzLCBmKSkpLFxyXG4gICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgYlxyXG4gICAgICAgICAgICA/IGUudG8oYilcclxuICAgICAgICAgICAgOiBnXHJcbiAgICAgICAgICAgID8gZVtnXSgpXHJcbiAgICAgICAgICAgIDogZi5pbnRlcnZhbCAmJiBlLnBhdXNlKCkuY3ljbGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYyA9IGZ1bmN0aW9uIChiLCBjKSB7XHJcbiAgICAgICh0aGlzLiRlbGVtZW50ID0gYShiKSksXHJcbiAgICAgICAgKHRoaXMuJGluZGljYXRvcnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiKSksXHJcbiAgICAgICAgKHRoaXMub3B0aW9ucyA9IGMpLFxyXG4gICAgICAgICh0aGlzLnBhdXNlZCA9IG51bGwpLFxyXG4gICAgICAgICh0aGlzLnNsaWRpbmcgPSBudWxsKSxcclxuICAgICAgICAodGhpcy5pbnRlcnZhbCA9IG51bGwpLFxyXG4gICAgICAgICh0aGlzLiRhY3RpdmUgPSBudWxsKSxcclxuICAgICAgICAodGhpcy4kaXRlbXMgPSBudWxsKSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMua2V5Ym9hcmQgJiZcclxuICAgICAgICAgIHRoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmJzLmNhcm91c2VsXCIsIGEucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKSksXHJcbiAgICAgICAgXCJob3ZlclwiID09IHRoaXMub3B0aW9ucy5wYXVzZSAmJlxyXG4gICAgICAgICAgIShcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiZcclxuICAgICAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAgICAgLm9uKFwibW91c2VlbnRlci5icy5jYXJvdXNlbFwiLCBhLnByb3h5KHRoaXMucGF1c2UsIHRoaXMpKVxyXG4gICAgICAgICAgICAub24oXCJtb3VzZWxlYXZlLmJzLmNhcm91c2VsXCIsIGEucHJveHkodGhpcy5jeWNsZSwgdGhpcykpO1xyXG4gICAgfTtcclxuICAgIChjLlZFUlNJT04gPSBcIjMuMy43XCIpLFxyXG4gICAgICAoYy5UUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwKSxcclxuICAgICAgKGMuREVGQVVMVFMgPSB7IGludGVydmFsOiA1ZTMsIHBhdXNlOiBcImhvdmVyXCIsIHdyYXA6ICEwLCBrZXlib2FyZDogITAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5rZXlkb3duID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYS50YXJnZXQudGFnTmFtZSkpIHtcclxuICAgICAgICAgIHN3aXRjaCAoYS53aGljaCkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgIHRoaXMucHJldigpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuY3ljbGUgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBiIHx8ICh0aGlzLnBhdXNlZCA9ICExKSxcclxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSxcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnZhbCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wYXVzZWQgJiZcclxuICAgICAgICAgICAgKHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgICBhLnByb3h5KHRoaXMubmV4dCwgdGhpcyksXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmludGVydmFsXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZ2V0SXRlbUluZGV4ID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgKHRoaXMuJGl0ZW1zID0gYS5wYXJlbnQoKS5jaGlsZHJlbihcIi5pdGVtXCIpKSxcclxuICAgICAgICAgIHRoaXMuJGl0ZW1zLmluZGV4KGEgfHwgdGhpcy4kYWN0aXZlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZ2V0SXRlbUZvckRpcmVjdGlvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldEl0ZW1JbmRleChiKSxcclxuICAgICAgICAgIGQgPVxyXG4gICAgICAgICAgICAoXCJwcmV2XCIgPT0gYSAmJiAwID09PSBjKSB8fFxyXG4gICAgICAgICAgICAoXCJuZXh0XCIgPT0gYSAmJiBjID09IHRoaXMuJGl0ZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGlmIChkICYmICF0aGlzLm9wdGlvbnMud3JhcCkgcmV0dXJuIGI7XHJcbiAgICAgICAgdmFyIGUgPSBcInByZXZcIiA9PSBhID8gLTEgOiAxLFxyXG4gICAgICAgICAgZiA9IChjICsgZSkgJSB0aGlzLiRpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGl0ZW1zLmVxKGYpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnRvID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB2YXIgYiA9IHRoaXMsXHJcbiAgICAgICAgICBjID0gdGhpcy5nZXRJdGVtSW5kZXgoXHJcbiAgICAgICAgICAgICh0aGlzLiRhY3RpdmUgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIikpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGlmICghKGEgPiB0aGlzLiRpdGVtcy5sZW5ndGggLSAxIHx8IGEgPCAwKSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNsaWRpbmdcclxuICAgICAgICAgICAgPyB0aGlzLiRlbGVtZW50Lm9uZShcInNsaWQuYnMuY2Fyb3VzZWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYi50byhhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGMgPT0gYVxyXG4gICAgICAgICAgICA/IHRoaXMucGF1c2UoKS5jeWNsZSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5zbGlkZShhID4gYyA/IFwibmV4dFwiIDogXCJwcmV2XCIsIHRoaXMuJGl0ZW1zLmVxKGEpKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGIgfHwgKHRoaXMucGF1c2VkID0gITApLFxyXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKFwiLm5leHQsIC5wcmV2XCIpLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJlxyXG4gICAgICAgICAgICAodGhpcy4kZWxlbWVudC50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksIHRoaXMuY3ljbGUoITApKSxcclxuICAgICAgICAgICh0aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSksXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zbGlkaW5nKSByZXR1cm4gdGhpcy5zbGlkZShcIm5leHRcIik7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2xpZGluZykgcmV0dXJuIHRoaXMuc2xpZGUoXCJwcmV2XCIpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnNsaWRlID0gZnVuY3Rpb24gKGIsIGQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSxcclxuICAgICAgICAgIGYgPSBkIHx8IHRoaXMuZ2V0SXRlbUZvckRpcmVjdGlvbihiLCBlKSxcclxuICAgICAgICAgIGcgPSB0aGlzLmludGVydmFsLFxyXG4gICAgICAgICAgaCA9IFwibmV4dFwiID09IGIgPyBcImxlZnRcIiA6IFwicmlnaHRcIixcclxuICAgICAgICAgIGkgPSB0aGlzO1xyXG4gICAgICAgIGlmIChmLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSByZXR1cm4gKHRoaXMuc2xpZGluZyA9ICExKTtcclxuICAgICAgICB2YXIgaiA9IGZbMF0sXHJcbiAgICAgICAgICBrID0gYS5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIsIHsgcmVsYXRlZFRhcmdldDogaiwgZGlyZWN0aW9uOiBoIH0pO1xyXG4gICAgICAgIGlmICgodGhpcy4kZWxlbWVudC50cmlnZ2VyKGspLCAhay5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCh0aGlzLnNsaWRpbmcgPSAhMCksIGcgJiYgdGhpcy5wYXVzZSgpLCB0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB2YXIgbCA9IGEodGhpcy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpW3RoaXMuZ2V0SXRlbUluZGV4KGYpXSk7XHJcbiAgICAgICAgICAgIGwgJiYgbC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBtID0gYS5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIiwge1xyXG4gICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBqLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IGgsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGEuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJzbGlkZVwiKVxyXG4gICAgICAgICAgICAgID8gKGYuYWRkQ2xhc3MoYiksXHJcbiAgICAgICAgICAgICAgICBmWzBdLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgZS5hZGRDbGFzcyhoKSxcclxuICAgICAgICAgICAgICAgIGYuYWRkQ2xhc3MoaCksXHJcbiAgICAgICAgICAgICAgICBlXHJcbiAgICAgICAgICAgICAgICAgIC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYucmVtb3ZlQ2xhc3MoW2IsIGhdLmpvaW4oXCIgXCIpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlQ2xhc3MoW1wiYWN0aXZlXCIsIGhdLmpvaW4oXCIgXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgIChpLnNsaWRpbmcgPSAhMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaS4kZWxlbWVudC50cmlnZ2VyKG0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pKVxyXG4gICAgICAgICAgICAgIDogKGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksXHJcbiAgICAgICAgICAgICAgICBmLmFkZENsYXNzKFwiYWN0aXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc2xpZGluZyA9ICExKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihtKSksXHJcbiAgICAgICAgICAgIGcgJiYgdGhpcy5jeWNsZSgpLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB2YXIgZCA9IGEuZm4uY2Fyb3VzZWw7XHJcbiAgICAoYS5mbi5jYXJvdXNlbCA9IGIpLFxyXG4gICAgICAoYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3RvciA9IGMpLFxyXG4gICAgICAoYS5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoYS5mbi5jYXJvdXNlbCA9IGQpLCB0aGlzO1xyXG4gICAgICB9KTtcclxuICAgIHZhciBlID0gZnVuY3Rpb24gKGMpIHtcclxuICAgICAgdmFyIGQsXHJcbiAgICAgICAgZSA9IGEodGhpcyksXHJcbiAgICAgICAgZiA9IGEoXHJcbiAgICAgICAgICBlLmF0dHIoXCJkYXRhLXRhcmdldFwiKSB8fFxyXG4gICAgICAgICAgICAoKGQgPSBlLmF0dHIoXCJocmVmXCIpKSAmJiBkLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sIFwiXCIpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGlmIChmLmhhc0NsYXNzKFwiY2Fyb3VzZWxcIikpIHtcclxuICAgICAgICB2YXIgZyA9IGEuZXh0ZW5kKHt9LCBmLmRhdGEoKSwgZS5kYXRhKCkpLFxyXG4gICAgICAgICAgaCA9IGUuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7XHJcbiAgICAgICAgaCAmJiAoZy5pbnRlcnZhbCA9ICExKSxcclxuICAgICAgICAgIGIuY2FsbChmLCBnKSxcclxuICAgICAgICAgIGggJiYgZi5kYXRhKFwiYnMuY2Fyb3VzZWxcIikudG8oaCksXHJcbiAgICAgICAgICBjLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBhKGRvY3VtZW50KVxyXG4gICAgICAub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLCBcIltkYXRhLXNsaWRlXVwiLCBlKVxyXG4gICAgICAub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLCBcIltkYXRhLXNsaWRlLXRvXVwiLCBlKSxcclxuICAgICAgYSh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYSgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgYyA9IGEodGhpcyk7XHJcbiAgICAgICAgICBiLmNhbGwoYywgYy5kYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9KShqUXVlcnkpLFxyXG4gICsoZnVuY3Rpb24gKGEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gYihiKSB7XHJcbiAgICAgIHZhciBjLFxyXG4gICAgICAgIGQgPVxyXG4gICAgICAgICAgYi5hdHRyKFwiZGF0YS10YXJnZXRcIikgfHxcclxuICAgICAgICAgICgoYyA9IGIuYXR0cihcImhyZWZcIikpICYmIGMucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgXCJcIikpO1xyXG4gICAgICByZXR1cm4gYShkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGMoYikge1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYyA9IGEodGhpcyksXHJcbiAgICAgICAgICBlID0gYy5kYXRhKFwiYnMuY29sbGFwc2VcIiksXHJcbiAgICAgICAgICBmID0gYS5leHRlbmQoe30sIGQuREVGQVVMVFMsIGMuZGF0YSgpLCBcIm9iamVjdFwiID09IHR5cGVvZiBiICYmIGIpO1xyXG4gICAgICAgICFlICYmIGYudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3QoYikgJiYgKGYudG9nZ2xlID0gITEpLFxyXG4gICAgICAgICAgZSB8fCBjLmRhdGEoXCJicy5jb2xsYXBzZVwiLCAoZSA9IG5ldyBkKHRoaXMsIGYpKSksXHJcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIGVbYl0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZCA9IGZ1bmN0aW9uIChiLCBjKSB7XHJcbiAgICAgICh0aGlzLiRlbGVtZW50ID0gYShiKSksXHJcbiAgICAgICAgKHRoaXMub3B0aW9ucyA9IGEuZXh0ZW5kKHt9LCBkLkRFRkFVTFRTLCBjKSksXHJcbiAgICAgICAgKHRoaXMuJHRyaWdnZXIgPSBhKFxyXG4gICAgICAgICAgJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArXHJcbiAgICAgICAgICAgIGIuaWQgK1xyXG4gICAgICAgICAgICAnXCJdLFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycgK1xyXG4gICAgICAgICAgICBiLmlkICtcclxuICAgICAgICAgICAgJ1wiXSdcclxuICAgICAgICApKSxcclxuICAgICAgICAodGhpcy50cmFuc2l0aW9uaW5nID0gbnVsbCksXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudFxyXG4gICAgICAgICAgPyAodGhpcy4kcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSlcclxuICAgICAgICAgIDogdGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy4kZWxlbWVudCwgdGhpcy4kdHJpZ2dlciksXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgfTtcclxuICAgIChkLlZFUlNJT04gPSBcIjMuMy43XCIpLFxyXG4gICAgICAoZC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzUwKSxcclxuICAgICAgKGQuREVGQVVMVFMgPSB7IHRvZ2dsZTogITAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwid2lkdGhcIik7XHJcbiAgICAgICAgcmV0dXJuIGEgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiO1xyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb25pbmcgJiYgIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSkge1xyXG4gICAgICAgICAgdmFyIGIsXHJcbiAgICAgICAgICAgIGUgPVxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5jaGlsZHJlbihcIi5wYW5lbFwiKS5jaGlsZHJlbihcIi5pbiwgLmNvbGxhcHNpbmdcIik7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgZSAmJlxyXG4gICAgICAgICAgICAgIGUubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgKChiID0gZS5kYXRhKFwiYnMuY29sbGFwc2VcIikpLCBiICYmIGIudHJhbnNpdGlvbmluZylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBmID0gYS5FdmVudChcInNob3cuYnMuY29sbGFwc2VcIik7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy4kZWxlbWVudC50cmlnZ2VyKGYpLCAhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkpIHtcclxuICAgICAgICAgICAgICBlICYmXHJcbiAgICAgICAgICAgICAgICBlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgKGMuY2FsbChlLCBcImhpZGVcIiksIGIgfHwgZS5kYXRhKFwiYnMuY29sbGFwc2VcIiwgbnVsbCkpO1xyXG4gICAgICAgICAgICAgIHZhciBnID0gdGhpcy5kaW1lbnNpb24oKTtcclxuICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVxyXG4gICAgICAgICAgICAgICAgW2ddKDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgITApLFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kdHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIilcclxuICAgICAgICAgICAgICAgICAgLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsICEwKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnRyYW5zaXRpb25pbmcgPSAxKTtcclxuICAgICAgICAgICAgICB2YXIgaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKVxyXG4gICAgICAgICAgICAgICAgICBbZ10oXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnRyYW5zaXRpb25pbmcgPSAwKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwic2hvd24uYnMuY29sbGFwc2VcIik7XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBpZiAoIWEuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gaC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgIHZhciBpID0gYS5jYW1lbENhc2UoW1wic2Nyb2xsXCIsIGddLmpvaW4oXCItXCIpKTtcclxuICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsIGEucHJveHkoaCwgdGhpcykpXHJcbiAgICAgICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoZC5UUkFOU0lUSU9OX0RVUkFUSU9OKVxyXG4gICAgICAgICAgICAgICAgW2ddKHRoaXMuJGVsZW1lbnRbMF1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgKGQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb25pbmcgJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IGEuRXZlbnQoXCJoaWRlLmJzLmNvbGxhcHNlXCIpO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksICFiLmlzRGVmYXVsdFByZXZlbnRlZCgpKSkge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuZGltZW5zaW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnRbY10odGhpcy4kZWxlbWVudFtjXSgpKVswXS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCAhMSksXHJcbiAgICAgICAgICAgICAgdGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCAhMSksXHJcbiAgICAgICAgICAgICAgKHRoaXMudHJhbnNpdGlvbmluZyA9IDEpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAodGhpcy50cmFuc2l0aW9uaW5nID0gMCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIilcclxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiY29sbGFwc2VcIilcclxuICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgID8gdm9pZCB0aGlzLiRlbGVtZW50W2NdKDApXHJcbiAgICAgICAgICAgICAgICAgIC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIiwgYS5wcm94eShlLCB0aGlzKSlcclxuICAgICAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgICAgICA6IGUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpID8gXCJoaWRlXCIgOiBcInNob3dcIl0oKTtcclxuICAgICAgfSksXHJcbiAgICAgIChkLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGEodGhpcy5vcHRpb25zLnBhcmVudClcclxuICAgICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgICAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInICtcclxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucGFyZW50ICtcclxuICAgICAgICAgICAgICAnXCJdJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmVhY2goXHJcbiAgICAgICAgICAgIGEucHJveHkoZnVuY3Rpb24gKGMsIGQpIHtcclxuICAgICAgICAgICAgICB2YXIgZSA9IGEoZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoYihlKSwgZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuZW5kKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZC5wcm90b3R5cGUuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgYyA9IGEuaGFzQ2xhc3MoXCJpblwiKTtcclxuICAgICAgICBhLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIGMpLFxyXG4gICAgICAgICAgYi50b2dnbGVDbGFzcyhcImNvbGxhcHNlZFwiLCAhYykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgYyk7XHJcbiAgICAgIH0pO1xyXG4gICAgdmFyIGUgPSBhLmZuLmNvbGxhcHNlO1xyXG4gICAgKGEuZm4uY29sbGFwc2UgPSBjKSxcclxuICAgICAgKGEuZm4uY29sbGFwc2UuQ29uc3RydWN0b3IgPSBkKSxcclxuICAgICAgKGEuZm4uY29sbGFwc2Uubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKGEuZm4uY29sbGFwc2UgPSBlKSwgdGhpcztcclxuICAgICAgfSksXHJcbiAgICAgIGEoZG9jdW1lbnQpLm9uKFxyXG4gICAgICAgIFwiY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGlcIixcclxuICAgICAgICAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLFxyXG4gICAgICAgIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICB2YXIgZSA9IGEodGhpcyk7XHJcbiAgICAgICAgICBlLmF0dHIoXCJkYXRhLXRhcmdldFwiKSB8fCBkLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB2YXIgZiA9IGIoZSksXHJcbiAgICAgICAgICAgIGcgPSBmLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxcclxuICAgICAgICAgICAgaCA9IGcgPyBcInRvZ2dsZVwiIDogZS5kYXRhKCk7XHJcbiAgICAgICAgICBjLmNhbGwoZiwgaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKyhmdW5jdGlvbiAoYSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBiKGIpIHtcclxuICAgICAgdmFyIGMgPSBiLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtcclxuICAgICAgYyB8fFxyXG4gICAgICAgICgoYyA9IGIuYXR0cihcImhyZWZcIikpLFxyXG4gICAgICAgIChjID0gYyAmJiAvI1tBLVphLXpdLy50ZXN0KGMpICYmIGMucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgXCJcIikpKTtcclxuICAgICAgdmFyIGQgPSBjICYmIGEoYyk7XHJcbiAgICAgIHJldHVybiBkICYmIGQubGVuZ3RoID8gZCA6IGIucGFyZW50KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjKGMpIHtcclxuICAgICAgKGMgJiYgMyA9PT0gYy53aGljaCkgfHxcclxuICAgICAgICAoYShlKS5yZW1vdmUoKSxcclxuICAgICAgICBhKGYpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGQgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgICBlID0gYihkKSxcclxuICAgICAgICAgICAgZiA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9O1xyXG4gICAgICAgICAgZS5oYXNDbGFzcyhcIm9wZW5cIikgJiZcclxuICAgICAgICAgICAgKChjICYmXHJcbiAgICAgICAgICAgICAgXCJjbGlja1wiID09IGMudHlwZSAmJlxyXG4gICAgICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYy50YXJnZXQudGFnTmFtZSkgJiZcclxuICAgICAgICAgICAgICBhLmNvbnRhaW5zKGVbMF0sIGMudGFyZ2V0KSkgfHxcclxuICAgICAgICAgICAgICAoZS50cmlnZ2VyKChjID0gYS5FdmVudChcImhpZGUuYnMuZHJvcGRvd25cIiwgZikpKSxcclxuICAgICAgICAgICAgICBjLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAoZC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpLFxyXG4gICAgICAgICAgICAgICAgZVxyXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpXHJcbiAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKGEuRXZlbnQoXCJoaWRkZW4uYnMuZHJvcGRvd25cIiwgZikpKSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGQoYikge1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYyA9IGEodGhpcyksXHJcbiAgICAgICAgICBkID0gYy5kYXRhKFwiYnMuZHJvcGRvd25cIik7XHJcbiAgICAgICAgZCB8fCBjLmRhdGEoXCJicy5kcm9wZG93blwiLCAoZCA9IG5ldyBnKHRoaXMpKSksXHJcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIGRbYl0uY2FsbChjKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZSA9IFwiLmRyb3Bkb3duLWJhY2tkcm9wXCIsXHJcbiAgICAgIGYgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLFxyXG4gICAgICBnID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICBhKGIpLm9uKFwiY2xpY2suYnMuZHJvcGRvd25cIiwgdGhpcy50b2dnbGUpO1xyXG4gICAgICB9O1xyXG4gICAgKGcuVkVSU0lPTiA9IFwiMy4zLjdcIiksXHJcbiAgICAgIChnLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHZhciBlID0gYSh0aGlzKTtcclxuICAgICAgICBpZiAoIWUuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgdmFyIGYgPSBiKGUpLFxyXG4gICAgICAgICAgICBnID0gZi5oYXNDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICBpZiAoKGMoKSwgIWcpKSB7XHJcbiAgICAgICAgICAgIFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgIWYuY2xvc2VzdChcIi5uYXZiYXItbmF2XCIpLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgIGEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImRyb3Bkb3duLWJhY2tkcm9wXCIpXHJcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSlcclxuICAgICAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGMpO1xyXG4gICAgICAgICAgICB2YXIgaCA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKGYudHJpZ2dlcigoZCA9IGEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsIGgpKSksXHJcbiAgICAgICAgICAgICAgZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZS50cmlnZ2VyKFwiZm9jdXNcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgIGYudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoYS5FdmVudChcInNob3duLmJzLmRyb3Bkb3duXCIsIGgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoZy5wcm90b3R5cGUua2V5ZG93biA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgLygzOHw0MHwyN3wzMikvLnRlc3QoYy53aGljaCkgJiZcclxuICAgICAgICAgICEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGMudGFyZ2V0LnRhZ05hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB2YXIgZCA9IGEodGhpcyk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjLnByZXZlbnREZWZhdWx0KCksXHJcbiAgICAgICAgICAgIGMuc3RvcFByb3BhZ2F0aW9uKCksXHJcbiAgICAgICAgICAgICFkLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBiKGQpLFxyXG4gICAgICAgICAgICAgIGcgPSBlLmhhc0NsYXNzKFwib3BlblwiKTtcclxuICAgICAgICAgICAgaWYgKCghZyAmJiAyNyAhPSBjLndoaWNoKSB8fCAoZyAmJiAyNyA9PSBjLndoaWNoKSlcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgMjcgPT0gYy53aGljaCAmJiBlLmZpbmQoZikudHJpZ2dlcihcImZvY3VzXCIpLCBkLnRyaWdnZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciBoID0gXCIgbGk6bm90KC5kaXNhYmxlZCk6dmlzaWJsZSBhXCIsXHJcbiAgICAgICAgICAgICAgaSA9IGUuZmluZChcIi5kcm9wZG93bi1tZW51XCIgKyBoKTtcclxuICAgICAgICAgICAgaWYgKGkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGogPSBpLmluZGV4KGMudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAzOCA9PSBjLndoaWNoICYmIGogPiAwICYmIGotLSxcclxuICAgICAgICAgICAgICAgIDQwID09IGMud2hpY2ggJiYgaiA8IGkubGVuZ3RoIC0gMSAmJiBqKyssXHJcbiAgICAgICAgICAgICAgICB+aiB8fCAoaiA9IDApLFxyXG4gICAgICAgICAgICAgICAgaS5lcShqKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgdmFyIGggPSBhLmZuLmRyb3Bkb3duO1xyXG4gICAgKGEuZm4uZHJvcGRvd24gPSBkKSxcclxuICAgICAgKGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IgPSBnKSxcclxuICAgICAgKGEuZm4uZHJvcGRvd24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKGEuZm4uZHJvcGRvd24gPSBoKSwgdGhpcztcclxuICAgICAgfSksXHJcbiAgICAgIGEoZG9jdW1lbnQpXHJcbiAgICAgICAgLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIiwgYylcclxuICAgICAgICAub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLCBcIi5kcm9wZG93biBmb3JtXCIsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICBhLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIiwgZiwgZy5wcm90b3R5cGUudG9nZ2xlKVxyXG4gICAgICAgIC5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIiwgZiwgZy5wcm90b3R5cGUua2V5ZG93bilcclxuICAgICAgICAub24oXHJcbiAgICAgICAgICBcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcclxuICAgICAgICAgIFwiLmRyb3Bkb3duLW1lbnVcIixcclxuICAgICAgICAgIGcucHJvdG90eXBlLmtleWRvd25cclxuICAgICAgICApO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKyhmdW5jdGlvbiAoYSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBiKGIsIGQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgZiA9IGUuZGF0YShcImJzLm1vZGFsXCIpLFxyXG4gICAgICAgICAgZyA9IGEuZXh0ZW5kKHt9LCBjLkRFRkFVTFRTLCBlLmRhdGEoKSwgXCJvYmplY3RcIiA9PSB0eXBlb2YgYiAmJiBiKTtcclxuICAgICAgICBmIHx8IGUuZGF0YShcImJzLm1vZGFsXCIsIChmID0gbmV3IGModGhpcywgZykpKSxcclxuICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGIgPyBmW2JdKGQpIDogZy5zaG93ICYmIGYuc2hvdyhkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYyA9IGZ1bmN0aW9uIChiLCBjKSB7XHJcbiAgICAgICh0aGlzLm9wdGlvbnMgPSBjKSxcclxuICAgICAgICAodGhpcy4kYm9keSA9IGEoZG9jdW1lbnQuYm9keSkpLFxyXG4gICAgICAgICh0aGlzLiRlbGVtZW50ID0gYShiKSksXHJcbiAgICAgICAgKHRoaXMuJGRpYWxvZyA9IHRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1kaWFsb2dcIikpLFxyXG4gICAgICAgICh0aGlzLiRiYWNrZHJvcCA9IG51bGwpLFxyXG4gICAgICAgICh0aGlzLmlzU2hvd24gPSBudWxsKSxcclxuICAgICAgICAodGhpcy5vcmlnaW5hbEJvZHlQYWQgPSBudWxsKSxcclxuICAgICAgICAodGhpcy5zY3JvbGxiYXJXaWR0aCA9IDApLFxyXG4gICAgICAgICh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2sgPSAhMSksXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlbW90ZSAmJlxyXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWNvbnRlbnRcIikubG9hZChcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbW90ZSxcclxuICAgICAgICAgICAgYS5wcm94eShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICAoYy5WRVJTSU9OID0gXCIzLjMuN1wiKSxcclxuICAgICAgKGMuVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMCksXHJcbiAgICAgIChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTApLFxyXG4gICAgICAoYy5ERUZBVUxUUyA9IHsgYmFja2Ryb3A6ICEwLCBrZXlib2FyZDogITAsIHNob3c6ICEwIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coYSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgdmFyIGQgPSB0aGlzLFxyXG4gICAgICAgICAgZSA9IGEuRXZlbnQoXCJzaG93LmJzLm1vZGFsXCIsIHsgcmVsYXRlZFRhcmdldDogYiB9KTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksXHJcbiAgICAgICAgICB0aGlzLmlzU2hvd24gfHxcclxuICAgICAgICAgICAgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxyXG4gICAgICAgICAgICAoKHRoaXMuaXNTaG93biA9ICEwKSxcclxuICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbGJhcigpLFxyXG4gICAgICAgICAgICB0aGlzLnNldFNjcm9sbGJhcigpLFxyXG4gICAgICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKFwibW9kYWwtb3BlblwiKSxcclxuICAgICAgICAgICAgdGhpcy5lc2NhcGUoKSxcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKSxcclxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vbihcclxuICAgICAgICAgICAgICBcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIixcclxuICAgICAgICAgICAgICAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcclxuICAgICAgICAgICAgICBhLnByb3h5KHRoaXMuaGlkZSwgdGhpcylcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdGhpcy4kZGlhbG9nLm9uKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGQuJGVsZW1lbnQub25lKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgICAgICAgICBhKGIudGFyZ2V0KS5pcyhkLiRlbGVtZW50KSAmJiAoZC5pZ25vcmVCYWNrZHJvcENsaWNrID0gITApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGUgPSBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBkLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtcclxuICAgICAgICAgICAgICBkLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aCB8fCBkLiRlbGVtZW50LmFwcGVuZFRvKGQuJGJvZHkpLFxyXG4gICAgICAgICAgICAgICAgZC4kZWxlbWVudC5zaG93KCkuc2Nyb2xsVG9wKDApLFxyXG4gICAgICAgICAgICAgICAgZC5hZGp1c3REaWFsb2coKSxcclxuICAgICAgICAgICAgICAgIGUgJiYgZC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGQuJGVsZW1lbnQuYWRkQ2xhc3MoXCJpblwiKSxcclxuICAgICAgICAgICAgICAgIGQuZW5mb3JjZUZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgdmFyIGYgPSBhLkV2ZW50KFwic2hvd24uYnMubW9kYWxcIiwgeyByZWxhdGVkVGFyZ2V0OiBiIH0pO1xyXG4gICAgICAgICAgICAgIGVcclxuICAgICAgICAgICAgICAgID8gZC4kZGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgICAgICAgIDogZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIGIgJiYgYi5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgKGIgPSBhLkV2ZW50KFwiaGlkZS5icy5tb2RhbFwiKSksXHJcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksXHJcbiAgICAgICAgICB0aGlzLmlzU2hvd24gJiZcclxuICAgICAgICAgICAgIWIuaXNEZWZhdWx0UHJldmVudGVkKCkgJiZcclxuICAgICAgICAgICAgKCh0aGlzLmlzU2hvd24gPSAhMSksXHJcbiAgICAgICAgICAgIHRoaXMuZXNjYXBlKCksXHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCksXHJcbiAgICAgICAgICAgIGEoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIiksXHJcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJpblwiKVxyXG4gICAgICAgICAgICAgIC5vZmYoXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIpXHJcbiAgICAgICAgICAgICAgLm9mZihcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiKSxcclxuICAgICAgICAgICAgdGhpcy4kZGlhbG9nLm9mZihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpLFxyXG4gICAgICAgICAgICBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKVxyXG4gICAgICAgICAgICAgID8gdGhpcy4kZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsIGEucHJveHkodGhpcy5oaWRlTW9kYWwsIHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKVxyXG4gICAgICAgICAgICAgIDogdGhpcy5oaWRlTW9kYWwoKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZW5mb3JjZUZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGEoZG9jdW1lbnQpXHJcbiAgICAgICAgICAub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKVxyXG4gICAgICAgICAgLm9uKFxyXG4gICAgICAgICAgICBcImZvY3VzaW4uYnMubW9kYWxcIixcclxuICAgICAgICAgICAgYS5wcm94eShmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50ID09PSBhLnRhcmdldCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudFswXSA9PT0gYS50YXJnZXQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaGFzKGEudGFyZ2V0KS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5lc2NhcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5rZXlib2FyZFxyXG4gICAgICAgICAgPyB0aGlzLiRlbGVtZW50Lm9uKFxyXG4gICAgICAgICAgICAgIFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsXHJcbiAgICAgICAgICAgICAgYS5wcm94eShmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgMjcgPT0gYS53aGljaCAmJiB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICA6IHRoaXMuaXNTaG93biB8fCB0aGlzLiRlbGVtZW50Lm9mZihcImtleWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3duXHJcbiAgICAgICAgICA/IGEod2luZG93KS5vbihcInJlc2l6ZS5icy5tb2RhbFwiLCBhLnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLCB0aGlzKSlcclxuICAgICAgICAgIDogYSh3aW5kb3cpLm9mZihcInJlc2l6ZS5icy5tb2RhbFwiKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaGlkZSgpLFxyXG4gICAgICAgICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGEuJGJvZHkucmVtb3ZlQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLFxyXG4gICAgICAgICAgICAgIGEucmVzZXRBZGp1c3RtZW50cygpLFxyXG4gICAgICAgICAgICAgIGEucmVzZXRTY3JvbGxiYXIoKSxcclxuICAgICAgICAgICAgICBhLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMubW9kYWxcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRiYWNrZHJvcCAmJiB0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKSwgKHRoaXMuJGJhY2tkcm9wID0gbnVsbCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuYmFja2Ryb3AgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIHZhciBkID0gdGhpcyxcclxuICAgICAgICAgIGUgPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKSA/IFwiZmFkZVwiIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5iYWNrZHJvcCkge1xyXG4gICAgICAgICAgdmFyIGYgPSBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBlO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoKHRoaXMuJGJhY2tkcm9wID0gYShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhcIm1vZGFsLWJhY2tkcm9wIFwiICsgZSlcclxuICAgICAgICAgICAgICAuYXBwZW5kVG8odGhpcy4kYm9keSkpLFxyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKFxyXG4gICAgICAgICAgICAgIFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLFxyXG4gICAgICAgICAgICAgIGEucHJveHkoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2tcclxuICAgICAgICAgICAgICAgICAgPyB2b2lkICh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2sgPSAhMSlcclxuICAgICAgICAgICAgICAgICAgOiB2b2lkIChcclxuICAgICAgICAgICAgICAgICAgICAgIGEudGFyZ2V0ID09PSBhLmN1cnJlbnRUYXJnZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIChcInN0YXRpY1wiID09IHRoaXMub3B0aW9ucy5iYWNrZHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuJGVsZW1lbnRbMF0uZm9jdXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGlkZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgZiAmJiB0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy4kYmFja2Ryb3AuYWRkQ2xhc3MoXCJpblwiKSxcclxuICAgICAgICAgICAgIWIpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIGZcclxuICAgICAgICAgICAgPyB0aGlzLiRiYWNrZHJvcFxyXG4gICAgICAgICAgICAgICAgLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLCBiKVxyXG4gICAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgICAgOiBiKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duICYmIHRoaXMuJGJhY2tkcm9wKSB7XHJcbiAgICAgICAgICB0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcyhcImluXCIpO1xyXG4gICAgICAgICAgdmFyIGcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGQucmVtb3ZlQmFja2Ryb3AoKSwgYiAmJiBiKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYS5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIilcclxuICAgICAgICAgICAgPyB0aGlzLiRiYWNrZHJvcFxyXG4gICAgICAgICAgICAgICAgLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLCBnKVxyXG4gICAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgICAgOiBnKCk7XHJcbiAgICAgICAgfSBlbHNlIGIgJiYgYigpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmhhbmRsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFkanVzdERpYWxvZygpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmFkanVzdERpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9XHJcbiAgICAgICAgICB0aGlzLiRlbGVtZW50WzBdLnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe1xyXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICF0aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIGEgPyB0aGlzLnNjcm9sbGJhcldpZHRoIDogXCJcIixcclxuICAgICAgICAgIHBhZGRpbmdSaWdodDogdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhYSA/IHRoaXMuc2Nyb2xsYmFyV2lkdGggOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jc3MoeyBwYWRkaW5nTGVmdDogXCJcIiwgcGFkZGluZ1JpZ2h0OiBcIlwiIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICB2YXIgYiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIGEgPSBiLnJpZ2h0IC0gTWF0aC5hYnMoYi5sZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgYSksXHJcbiAgICAgICAgICAodGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMubWVhc3VyZVNjcm9sbGJhcigpKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSBwYXJzZUludCh0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIikgfHwgMCwgMTApO1xyXG4gICAgICAgICh0aGlzLm9yaWdpbmFsQm9keVBhZCA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0IHx8IFwiXCIpLFxyXG4gICAgICAgICAgdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJlxyXG4gICAgICAgICAgICB0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIiwgYSArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLCB0aGlzLm9yaWdpbmFsQm9keVBhZCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgKGEuY2xhc3NOYW1lID0gXCJtb2RhbC1zY3JvbGxiYXItbWVhc3VyZVwiKSwgdGhpcy4kYm9keS5hcHBlbmQoYSk7XHJcbiAgICAgICAgdmFyIGIgPSBhLm9mZnNldFdpZHRoIC0gYS5jbGllbnRXaWR0aDtcclxuICAgICAgICByZXR1cm4gdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZChhKSwgYjtcclxuICAgICAgfSk7XHJcbiAgICB2YXIgZCA9IGEuZm4ubW9kYWw7XHJcbiAgICAoYS5mbi5tb2RhbCA9IGIpLFxyXG4gICAgICAoYS5mbi5tb2RhbC5Db25zdHJ1Y3RvciA9IGMpLFxyXG4gICAgICAoYS5mbi5tb2RhbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoYS5mbi5tb2RhbCA9IGQpLCB0aGlzO1xyXG4gICAgICB9KSxcclxuICAgICAgYShkb2N1bWVudCkub24oXHJcbiAgICAgICAgXCJjbGljay5icy5tb2RhbC5kYXRhLWFwaVwiLFxyXG4gICAgICAgICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXHJcbiAgICAgICAgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgIHZhciBkID0gYSh0aGlzKSxcclxuICAgICAgICAgICAgZSA9IGQuYXR0cihcImhyZWZcIiksXHJcbiAgICAgICAgICAgIGYgPSBhKFxyXG4gICAgICAgICAgICAgIGQuYXR0cihcImRhdGEtdGFyZ2V0XCIpIHx8IChlICYmIGUucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgXCJcIikpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGcgPSBmLmRhdGEoXCJicy5tb2RhbFwiKVxyXG4gICAgICAgICAgICAgID8gXCJ0b2dnbGVcIlxyXG4gICAgICAgICAgICAgIDogYS5leHRlbmQoeyByZW1vdGU6ICEvIy8udGVzdChlKSAmJiBlIH0sIGYuZGF0YSgpLCBkLmRhdGEoKSk7XHJcbiAgICAgICAgICBkLmlzKFwiYVwiKSAmJiBjLnByZXZlbnREZWZhdWx0KCksXHJcbiAgICAgICAgICAgIGYub25lKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgIGEuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcclxuICAgICAgICAgICAgICAgIGYub25lKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgZC5pcyhcIjp2aXNpYmxlXCIpICYmIGQudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBiLmNhbGwoZiwgZywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKyhmdW5jdGlvbiAoYSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBiKGIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgZSA9IGQuZGF0YShcImJzLnRvb2x0aXBcIiksXHJcbiAgICAgICAgICBmID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgYiAmJiBiO1xyXG4gICAgICAgICghZSAmJiAvZGVzdHJveXxoaWRlLy50ZXN0KGIpKSB8fFxyXG4gICAgICAgICAgKGUgfHwgZC5kYXRhKFwiYnMudG9vbHRpcFwiLCAoZSA9IG5ldyBjKHRoaXMsIGYpKSksXHJcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIGVbYl0oKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGMgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAodGhpcy50eXBlID0gbnVsbCksXHJcbiAgICAgICAgKHRoaXMub3B0aW9ucyA9IG51bGwpLFxyXG4gICAgICAgICh0aGlzLmVuYWJsZWQgPSBudWxsKSxcclxuICAgICAgICAodGhpcy50aW1lb3V0ID0gbnVsbCksXHJcbiAgICAgICAgKHRoaXMuaG92ZXJTdGF0ZSA9IG51bGwpLFxyXG4gICAgICAgICh0aGlzLiRlbGVtZW50ID0gbnVsbCksXHJcbiAgICAgICAgKHRoaXMuaW5TdGF0ZSA9IG51bGwpLFxyXG4gICAgICAgIHRoaXMuaW5pdChcInRvb2x0aXBcIiwgYSwgYik7XHJcbiAgICB9O1xyXG4gICAgKGMuVkVSU0lPTiA9IFwiMy4zLjdcIiksXHJcbiAgICAgIChjLlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTApLFxyXG4gICAgICAoYy5ERUZBVUxUUyA9IHtcclxuICAgICAgICBhbmltYXRpb246ICEwLFxyXG4gICAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcclxuICAgICAgICBzZWxlY3RvcjogITEsXHJcbiAgICAgICAgdGVtcGxhdGU6XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgIHRyaWdnZXI6IFwiaG92ZXIgZm9jdXNcIixcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBkZWxheTogMCxcclxuICAgICAgICBodG1sOiAhMSxcclxuICAgICAgICBjb250YWluZXI6ICExLFxyXG4gICAgICAgIHZpZXdwb3J0OiB7IHNlbGVjdG9yOiBcImJvZHlcIiwgcGFkZGluZzogMCB9LFxyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoYiwgYywgZCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICgodGhpcy5lbmFibGVkID0gITApLFxyXG4gICAgICAgICAgKHRoaXMudHlwZSA9IGIpLFxyXG4gICAgICAgICAgKHRoaXMuJGVsZW1lbnQgPSBhKGMpKSxcclxuICAgICAgICAgICh0aGlzLm9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoZCkpLFxyXG4gICAgICAgICAgKHRoaXMuJHZpZXdwb3J0ID1cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnZpZXdwb3J0ICYmXHJcbiAgICAgICAgICAgIGEoXHJcbiAgICAgICAgICAgICAgYS5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy52aWV3cG9ydClcclxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnZpZXdwb3J0LmNhbGwodGhpcywgdGhpcy4kZWxlbWVudClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy52aWV3cG9ydFxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICh0aGlzLmluU3RhdGUgPSB7IGNsaWNrOiAhMSwgaG92ZXI6ICExLCBmb2N1czogITEgfSksXHJcbiAgICAgICAgICB0aGlzLiRlbGVtZW50WzBdIGluc3RhbmNlb2YgZG9jdW1lbnQuY29uc3RydWN0b3IgJiZcclxuICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5zZWxlY3RvcilcclxuICAgICAgICApXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIFwiYHNlbGVjdG9yYCBvcHRpb24gbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXppbmcgXCIgK1xyXG4gICAgICAgICAgICAgIHRoaXMudHlwZSArXHJcbiAgICAgICAgICAgICAgXCIgb24gdGhlIHdpbmRvdy5kb2N1bWVudCBvYmplY3QhXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KFwiIFwiKSwgZiA9IGUubGVuZ3RoOyBmLS07ICkge1xyXG4gICAgICAgICAgdmFyIGcgPSBlW2ZdO1xyXG4gICAgICAgICAgaWYgKFwiY2xpY2tcIiA9PSBnKVxyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKFxyXG4gICAgICAgICAgICAgIFwiY2xpY2suXCIgKyB0aGlzLnR5cGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgIGEucHJveHkodGhpcy50b2dnbGUsIHRoaXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBlbHNlIGlmIChcIm1hbnVhbFwiICE9IGcpIHtcclxuICAgICAgICAgICAgdmFyIGggPSBcImhvdmVyXCIgPT0gZyA/IFwibW91c2VlbnRlclwiIDogXCJmb2N1c2luXCIsXHJcbiAgICAgICAgICAgICAgaSA9IFwiaG92ZXJcIiA9PSBnID8gXCJtb3VzZWxlYXZlXCIgOiBcImZvY3Vzb3V0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub24oXHJcbiAgICAgICAgICAgICAgaCArIFwiLlwiICsgdGhpcy50eXBlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvcixcclxuICAgICAgICAgICAgICBhLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vbihcclxuICAgICAgICAgICAgICAgIGkgKyBcIi5cIiArIHRoaXMudHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGEucHJveHkodGhpcy5sZWF2ZSwgdGhpcylcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3JcclxuICAgICAgICAgID8gKHRoaXMuX29wdGlvbnMgPSBhLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgdHJpZ2dlcjogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICBzZWxlY3RvcjogXCJcIixcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICA6IHRoaXMuZml4VGl0bGUoKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gYy5ERUZBVUxUUztcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgKGIgPSBhLmV4dGVuZCh7fSwgdGhpcy5nZXREZWZhdWx0cygpLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgYikpLFxyXG4gICAgICAgICAgYi5kZWxheSAmJlxyXG4gICAgICAgICAgICBcIm51bWJlclwiID09IHR5cGVvZiBiLmRlbGF5ICYmXHJcbiAgICAgICAgICAgIChiLmRlbGF5ID0geyBzaG93OiBiLmRlbGF5LCBoaWRlOiBiLmRlbGF5IH0pLFxyXG4gICAgICAgICAgYlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiID0ge30sXHJcbiAgICAgICAgICBjID0gdGhpcy5nZXREZWZhdWx0cygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB0aGlzLl9vcHRpb25zICYmXHJcbiAgICAgICAgICAgIGEuZWFjaCh0aGlzLl9vcHRpb25zLCBmdW5jdGlvbiAoYSwgZCkge1xyXG4gICAgICAgICAgICAgIGNbYV0gIT0gZCAmJiAoYlthXSA9IGQpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIGJcclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICB2YXIgYyA9XHJcbiAgICAgICAgICBiIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICA/IGJcclxuICAgICAgICAgICAgOiBhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiICsgdGhpcy50eXBlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgYyB8fFxyXG4gICAgICAgICAgICAoKGMgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICBiLmN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIiArIHRoaXMudHlwZSwgYykpLFxyXG4gICAgICAgICAgYiBpbnN0YW5jZW9mIGEuRXZlbnQgJiZcclxuICAgICAgICAgICAgKGMuaW5TdGF0ZVtcImZvY3VzaW5cIiA9PSBiLnR5cGUgPyBcImZvY3VzXCIgOiBcImhvdmVyXCJdID0gITApLFxyXG4gICAgICAgICAgYy50aXAoKS5oYXNDbGFzcyhcImluXCIpIHx8IFwiaW5cIiA9PSBjLmhvdmVyU3RhdGVcclxuICAgICAgICAgICAgPyB2b2lkIChjLmhvdmVyU3RhdGUgPSBcImluXCIpXHJcbiAgICAgICAgICAgIDogKGNsZWFyVGltZW91dChjLnRpbWVvdXQpLFxyXG4gICAgICAgICAgICAgIChjLmhvdmVyU3RhdGUgPSBcImluXCIpLFxyXG4gICAgICAgICAgICAgIGMub3B0aW9ucy5kZWxheSAmJiBjLm9wdGlvbnMuZGVsYXkuc2hvd1xyXG4gICAgICAgICAgICAgICAgPyB2b2lkIChjLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBcImluXCIgPT0gYy5ob3ZlclN0YXRlICYmIGMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICB9LCBjLm9wdGlvbnMuZGVsYXkuc2hvdykpXHJcbiAgICAgICAgICAgICAgICA6IGMuc2hvdygpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuaXNJblN0YXRlVHJ1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBhIGluIHRoaXMuaW5TdGF0ZSkgaWYgKHRoaXMuaW5TdGF0ZVthXSkgcmV0dXJuICEwO1xyXG4gICAgICAgIHJldHVybiAhMTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgdmFyIGMgPVxyXG4gICAgICAgICAgYiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3JcclxuICAgICAgICAgICAgPyBiXHJcbiAgICAgICAgICAgIDogYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIiArIHRoaXMudHlwZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKGMgfHxcclxuICAgICAgICAgICAgKChjID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgYi5jdXJyZW50VGFyZ2V0LFxyXG4gICAgICAgICAgICAgIHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKClcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIgKyB0aGlzLnR5cGUsIGMpKSxcclxuICAgICAgICAgIGIgaW5zdGFuY2VvZiBhLkV2ZW50ICYmXHJcbiAgICAgICAgICAgIChjLmluU3RhdGVbXCJmb2N1c291dFwiID09IGIudHlwZSA/IFwiZm9jdXNcIiA6IFwiaG92ZXJcIl0gPSAhMSksXHJcbiAgICAgICAgICAhYy5pc0luU3RhdGVUcnVlKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGMudGltZW91dCksXHJcbiAgICAgICAgICAgIChjLmhvdmVyU3RhdGUgPSBcIm91dFwiKSxcclxuICAgICAgICAgICAgYy5vcHRpb25zLmRlbGF5ICYmIGMub3B0aW9ucy5kZWxheS5oaWRlXHJcbiAgICAgICAgICAgICAgPyB2b2lkIChjLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgXCJvdXRcIiA9PSBjLmhvdmVyU3RhdGUgJiYgYy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBjLm9wdGlvbnMuZGVsYXkuaGlkZSkpXHJcbiAgICAgICAgICAgICAgOiBjLmhpZGUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiID0gYS5FdmVudChcInNob3cuYnMuXCIgKyB0aGlzLnR5cGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKTtcclxuICAgICAgICAgIHZhciBkID0gYS5jb250YWlucyhcclxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudFswXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChiLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFkKSByZXR1cm47XHJcbiAgICAgICAgICB2YXIgZSA9IHRoaXMsXHJcbiAgICAgICAgICAgIGYgPSB0aGlzLnRpcCgpLFxyXG4gICAgICAgICAgICBnID0gdGhpcy5nZXRVSUQodGhpcy50eXBlKTtcclxuICAgICAgICAgIHRoaXMuc2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgICBmLmF0dHIoXCJpZFwiLCBnKSxcclxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBnKSxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbiAmJiBmLmFkZENsYXNzKFwiZmFkZVwiKTtcclxuICAgICAgICAgIHZhciBoID1cclxuICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsIGZbMF0sIHRoaXMuJGVsZW1lbnRbMF0pXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGkgPSAvXFxzP2F1dG8/XFxzPy9pLFxyXG4gICAgICAgICAgICBqID0gaS50ZXN0KGgpO1xyXG4gICAgICAgICAgaiAmJiAoaCA9IGgucmVwbGFjZShpLCBcIlwiKSB8fCBcInRvcFwiKSxcclxuICAgICAgICAgICAgZlxyXG4gICAgICAgICAgICAgIC5kZXRhY2goKVxyXG4gICAgICAgICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6IFwiYmxvY2tcIiB9KVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhoKVxyXG4gICAgICAgICAgICAgIC5kYXRhKFwiYnMuXCIgKyB0aGlzLnR5cGUsIHRoaXMpLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgPyBmLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpXHJcbiAgICAgICAgICAgICAgOiBmLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJpbnNlcnRlZC5icy5cIiArIHRoaXMudHlwZSk7XHJcbiAgICAgICAgICB2YXIgayA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgICAgICAgbCA9IGZbMF0ub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIG0gPSBmWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gaCxcclxuICAgICAgICAgICAgICBvID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7XHJcbiAgICAgICAgICAgIChoID1cclxuICAgICAgICAgICAgICBcImJvdHRvbVwiID09IGggJiYgay5ib3R0b20gKyBtID4gby5ib3R0b21cclxuICAgICAgICAgICAgICAgID8gXCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRvcFwiID09IGggJiYgay50b3AgLSBtIDwgby50b3BcclxuICAgICAgICAgICAgICAgID8gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgOiBcInJpZ2h0XCIgPT0gaCAmJiBrLnJpZ2h0ICsgbCA+IG8ud2lkdGhcclxuICAgICAgICAgICAgICAgID8gXCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIDogXCJsZWZ0XCIgPT0gaCAmJiBrLmxlZnQgLSBsIDwgby5sZWZ0XHJcbiAgICAgICAgICAgICAgICA/IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgOiBoKSxcclxuICAgICAgICAgICAgICBmLnJlbW92ZUNsYXNzKG4pLmFkZENsYXNzKGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdmFyIHAgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQoaCwgaywgbCwgbSk7XHJcbiAgICAgICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KHAsIGgpO1xyXG4gICAgICAgICAgdmFyIHEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0gZS5ob3ZlclN0YXRlO1xyXG4gICAgICAgICAgICBlLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5cIiArIGUudHlwZSksXHJcbiAgICAgICAgICAgICAgKGUuaG92ZXJTdGF0ZSA9IG51bGwpLFxyXG4gICAgICAgICAgICAgIFwib3V0XCIgPT0gYSAmJiBlLmxlYXZlKGUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGEuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIilcclxuICAgICAgICAgICAgPyBmXHJcbiAgICAgICAgICAgICAgICAub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsIHEpXHJcbiAgICAgICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKVxyXG4gICAgICAgICAgICA6IHEoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQgPSBmdW5jdGlvbiAoYiwgYykge1xyXG4gICAgICAgIHZhciBkID0gdGhpcy50aXAoKSxcclxuICAgICAgICAgIGUgPSBkWzBdLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgZiA9IGRbMF0ub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgZyA9IHBhcnNlSW50KGQuY3NzKFwibWFyZ2luLXRvcFwiKSwgMTApLFxyXG4gICAgICAgICAgaCA9IHBhcnNlSW50KGQuY3NzKFwibWFyZ2luLWxlZnRcIiksIDEwKTtcclxuICAgICAgICBpc05hTihnKSAmJiAoZyA9IDApLFxyXG4gICAgICAgICAgaXNOYU4oaCkgJiYgKGggPSAwKSxcclxuICAgICAgICAgIChiLnRvcCArPSBnKSxcclxuICAgICAgICAgIChiLmxlZnQgKz0gaCksXHJcbiAgICAgICAgICBhLm9mZnNldC5zZXRPZmZzZXQoXHJcbiAgICAgICAgICAgIGRbMF0sXHJcbiAgICAgICAgICAgIGEuZXh0ZW5kKFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzaW5nOiBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICBkLmNzcyh7IHRvcDogTWF0aC5yb3VuZChhLnRvcCksIGxlZnQ6IE1hdGgucm91bmQoYS5sZWZ0KSB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBkLmFkZENsYXNzKFwiaW5cIik7XHJcbiAgICAgICAgdmFyIGkgPSBkWzBdLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgaiA9IGRbMF0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIFwidG9wXCIgPT0gYyAmJiBqICE9IGYgJiYgKGIudG9wID0gYi50b3AgKyBmIC0gaik7XHJcbiAgICAgICAgdmFyIGsgPSB0aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShjLCBiLCBpLCBqKTtcclxuICAgICAgICBrLmxlZnQgPyAoYi5sZWZ0ICs9IGsubGVmdCkgOiAoYi50b3AgKz0gay50b3ApO1xyXG4gICAgICAgIHZhciBsID0gL3RvcHxib3R0b20vLnRlc3QoYyksXHJcbiAgICAgICAgICBtID0gbCA/IDIgKiBrLmxlZnQgLSBlICsgaSA6IDIgKiBrLnRvcCAtIGYgKyBqLFxyXG4gICAgICAgICAgbiA9IGwgPyBcIm9mZnNldFdpZHRoXCIgOiBcIm9mZnNldEhlaWdodFwiO1xyXG4gICAgICAgIGQub2Zmc2V0KGIpLCB0aGlzLnJlcGxhY2VBcnJvdyhtLCBkWzBdW25dLCBsKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5yZXBsYWNlQXJyb3cgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHRoaXMuYXJyb3coKVxyXG4gICAgICAgICAgLmNzcyhjID8gXCJsZWZ0XCIgOiBcInRvcFwiLCA1MCAqICgxIC0gYSAvIGIpICsgXCIlXCIpXHJcbiAgICAgICAgICAuY3NzKGMgPyBcInRvcFwiIDogXCJsZWZ0XCIsIFwiXCIpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnRpcCgpLFxyXG4gICAgICAgICAgYiA9IHRoaXMuZ2V0VGl0bGUoKTtcclxuICAgICAgICBhLmZpbmQoXCIudG9vbHRpcC1pbm5lclwiKVt0aGlzLm9wdGlvbnMuaHRtbCA/IFwiaHRtbFwiIDogXCJ0ZXh0XCJdKGIpLFxyXG4gICAgICAgICAgYS5yZW1vdmVDbGFzcyhcImZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0XCIpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGQoKSB7XHJcbiAgICAgICAgICBcImluXCIgIT0gZS5ob3ZlclN0YXRlICYmIGYuZGV0YWNoKCksXHJcbiAgICAgICAgICAgIGUuJGVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICBlLiRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIilcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKFwiaGlkZGVuLmJzLlwiICsgZS50eXBlKSxcclxuICAgICAgICAgICAgYiAmJiBiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlID0gdGhpcyxcclxuICAgICAgICAgIGYgPSBhKHRoaXMuJHRpcCksXHJcbiAgICAgICAgICBnID0gYS5FdmVudChcImhpZGUuYnMuXCIgKyB0aGlzLnR5cGUpO1xyXG4gICAgICAgIGlmICgodGhpcy4kZWxlbWVudC50cmlnZ2VyKGcpLCAhZy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkpXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBmLnJlbW92ZUNsYXNzKFwiaW5cIiksXHJcbiAgICAgICAgICAgIGEuc3VwcG9ydC50cmFuc2l0aW9uICYmIGYuaGFzQ2xhc3MoXCJmYWRlXCIpXHJcbiAgICAgICAgICAgICAgPyBmXHJcbiAgICAgICAgICAgICAgICAgIC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIiwgZClcclxuICAgICAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgICAgICA6IGQoKSxcclxuICAgICAgICAgICAgKHRoaXMuaG92ZXJTdGF0ZSA9IG51bGwpLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmZpeFRpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy4kZWxlbWVudDtcclxuICAgICAgICAoYS5hdHRyKFwidGl0bGVcIikgfHwgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKSkgJiZcclxuICAgICAgICAgIGFcclxuICAgICAgICAgICAgLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsIGEuYXR0cihcInRpdGxlXCIpIHx8IFwiXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJcIik7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICBiID0gYiB8fCB0aGlzLiRlbGVtZW50O1xyXG4gICAgICAgIHZhciBjID0gYlswXSxcclxuICAgICAgICAgIGQgPSBcIkJPRFlcIiA9PSBjLnRhZ05hbWUsXHJcbiAgICAgICAgICBlID0gYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBudWxsID09IGUud2lkdGggJiZcclxuICAgICAgICAgIChlID0gYS5leHRlbmQoe30sIGUsIHtcclxuICAgICAgICAgICAgd2lkdGg6IGUucmlnaHQgLSBlLmxlZnQsXHJcbiAgICAgICAgICAgIGhlaWdodDogZS5ib3R0b20gLSBlLnRvcCxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB2YXIgZiA9IHdpbmRvdy5TVkdFbGVtZW50ICYmIGMgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCxcclxuICAgICAgICAgIGcgPSBkID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IGYgPyBudWxsIDogYi5vZmZzZXQoKSxcclxuICAgICAgICAgIGggPSB7XHJcbiAgICAgICAgICAgIHNjcm9sbDogZFxyXG4gICAgICAgICAgICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgIDogYi5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpID0gZFxyXG4gICAgICAgICAgICA/IHsgd2lkdGg6IGEod2luZG93KS53aWR0aCgpLCBoZWlnaHQ6IGEod2luZG93KS5oZWlnaHQoKSB9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICByZXR1cm4gYS5leHRlbmQoe30sIGUsIGgsIGksIGcpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xyXG4gICAgICAgIHJldHVybiBcImJvdHRvbVwiID09IGFcclxuICAgICAgICAgID8geyB0b3A6IGIudG9wICsgYi5oZWlnaHQsIGxlZnQ6IGIubGVmdCArIGIud2lkdGggLyAyIC0gYyAvIDIgfVxyXG4gICAgICAgICAgOiBcInRvcFwiID09IGFcclxuICAgICAgICAgID8geyB0b3A6IGIudG9wIC0gZCwgbGVmdDogYi5sZWZ0ICsgYi53aWR0aCAvIDIgLSBjIC8gMiB9XHJcbiAgICAgICAgICA6IFwibGVmdFwiID09IGFcclxuICAgICAgICAgID8geyB0b3A6IGIudG9wICsgYi5oZWlnaHQgLyAyIC0gZCAvIDIsIGxlZnQ6IGIubGVmdCAtIGMgfVxyXG4gICAgICAgICAgOiB7IHRvcDogYi50b3AgKyBiLmhlaWdodCAvIDIgLSBkIC8gMiwgbGVmdDogYi5sZWZ0ICsgYi53aWR0aCB9O1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YSA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XHJcbiAgICAgICAgdmFyIGUgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgICAgIGlmICghdGhpcy4kdmlld3BvcnQpIHJldHVybiBlO1xyXG4gICAgICAgIHZhciBmID0gKHRoaXMub3B0aW9ucy52aWV3cG9ydCAmJiB0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZykgfHwgMCxcclxuICAgICAgICAgIGcgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtcclxuICAgICAgICBpZiAoL3JpZ2h0fGxlZnQvLnRlc3QoYSkpIHtcclxuICAgICAgICAgIHZhciBoID0gYi50b3AgLSBmIC0gZy5zY3JvbGwsXHJcbiAgICAgICAgICAgIGkgPSBiLnRvcCArIGYgLSBnLnNjcm9sbCArIGQ7XHJcbiAgICAgICAgICBoIDwgZy50b3BcclxuICAgICAgICAgICAgPyAoZS50b3AgPSBnLnRvcCAtIGgpXHJcbiAgICAgICAgICAgIDogaSA+IGcudG9wICsgZy5oZWlnaHQgJiYgKGUudG9wID0gZy50b3AgKyBnLmhlaWdodCAtIGkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgaiA9IGIubGVmdCAtIGYsXHJcbiAgICAgICAgICAgIGsgPSBiLmxlZnQgKyBmICsgYztcclxuICAgICAgICAgIGogPCBnLmxlZnRcclxuICAgICAgICAgICAgPyAoZS5sZWZ0ID0gZy5sZWZ0IC0gailcclxuICAgICAgICAgICAgOiBrID4gZy5yaWdodCAmJiAoZS5sZWZ0ID0gZy5sZWZ0ICsgZy53aWR0aCAtIGspO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSxcclxuICAgICAgICAgIGIgPSB0aGlzLiRlbGVtZW50LFxyXG4gICAgICAgICAgYyA9IHRoaXMub3B0aW9ucztcclxuICAgICAgICByZXR1cm4gKGEgPVxyXG4gICAgICAgICAgYi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKSB8fFxyXG4gICAgICAgICAgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYy50aXRsZSA/IGMudGl0bGUuY2FsbChiWzBdKSA6IGMudGl0bGUpKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGRvIGEgKz0gfn4oMWU2ICogTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKTtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS50aXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMuJHRpcCAmJlxyXG4gICAgICAgICAgKCh0aGlzLiR0aXAgPSBhKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSkpLCAxICE9IHRoaXMuJHRpcC5sZW5ndGgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgK1xyXG4gICAgICAgICAgICAgIFwiIGB0ZW1wbGF0ZWAgb3B0aW9uIG11c3QgY29uc2lzdCBvZiBleGFjdGx5IDEgdG9wLWxldmVsIGVsZW1lbnQhXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRpcDtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKFwiLnRvb2x0aXAtYXJyb3dcIikpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSAhMDtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9ICExO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZDtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgIHZhciBjID0gdGhpcztcclxuICAgICAgICBiICYmXHJcbiAgICAgICAgICAoKGMgPSBhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiICsgdGhpcy50eXBlKSksXHJcbiAgICAgICAgICBjIHx8XHJcbiAgICAgICAgICAgICgoYyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgIGIuY3VycmVudFRhcmdldCxcclxuICAgICAgICAgICAgICB0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICBhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiICsgdGhpcy50eXBlLCBjKSkpLFxyXG4gICAgICAgICAgYlxyXG4gICAgICAgICAgICA/ICgoYy5pblN0YXRlLmNsaWNrID0gIWMuaW5TdGF0ZS5jbGljayksXHJcbiAgICAgICAgICAgICAgYy5pc0luU3RhdGVUcnVlKCkgPyBjLmVudGVyKGMpIDogYy5sZWF2ZShjKSlcclxuICAgICAgICAgICAgOiBjLnRpcCgpLmhhc0NsYXNzKFwiaW5cIilcclxuICAgICAgICAgICAgPyBjLmxlYXZlKGMpXHJcbiAgICAgICAgICAgIDogYy5lbnRlcihjKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcztcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSxcclxuICAgICAgICAgIHRoaXMuaGlkZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGEuJGVsZW1lbnQub2ZmKFwiLlwiICsgYS50eXBlKS5yZW1vdmVEYXRhKFwiYnMuXCIgKyBhLnR5cGUpLFxyXG4gICAgICAgICAgICAgIGEuJHRpcCAmJiBhLiR0aXAuZGV0YWNoKCksXHJcbiAgICAgICAgICAgICAgKGEuJHRpcCA9IG51bGwpLFxyXG4gICAgICAgICAgICAgIChhLiRhcnJvdyA9IG51bGwpLFxyXG4gICAgICAgICAgICAgIChhLiR2aWV3cG9ydCA9IG51bGwpLFxyXG4gICAgICAgICAgICAgIChhLiRlbGVtZW50ID0gbnVsbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB2YXIgZCA9IGEuZm4udG9vbHRpcDtcclxuICAgIChhLmZuLnRvb2x0aXAgPSBiKSxcclxuICAgICAgKGEuZm4udG9vbHRpcC5Db25zdHJ1Y3RvciA9IGMpLFxyXG4gICAgICAoYS5mbi50b29sdGlwLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChhLmZuLnRvb2x0aXAgPSBkKSwgdGhpcztcclxuICAgICAgfSk7XHJcbiAgfSkoalF1ZXJ5KSxcclxuICArKGZ1bmN0aW9uIChhKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGZ1bmN0aW9uIGIoYikge1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZCA9IGEodGhpcyksXHJcbiAgICAgICAgICBlID0gZC5kYXRhKFwiYnMucG9wb3ZlclwiKSxcclxuICAgICAgICAgIGYgPSBcIm9iamVjdFwiID09IHR5cGVvZiBiICYmIGI7XHJcbiAgICAgICAgKCFlICYmIC9kZXN0cm95fGhpZGUvLnRlc3QoYikpIHx8XHJcbiAgICAgICAgICAoZSB8fCBkLmRhdGEoXCJicy5wb3BvdmVyXCIsIChlID0gbmV3IGModGhpcywgZikpKSxcclxuICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGIgJiYgZVtiXSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHRoaXMuaW5pdChcInBvcG92ZXJcIiwgYSwgYik7XHJcbiAgICB9O1xyXG4gICAgaWYgKCFhLmZuLnRvb2x0aXApIHRocm93IG5ldyBFcnJvcihcIlBvcG92ZXIgcmVxdWlyZXMgdG9vbHRpcC5qc1wiKTtcclxuICAgIChjLlZFUlNJT04gPSBcIjMuMy43XCIpLFxyXG4gICAgICAoYy5ERUZBVUxUUyA9IGEuZXh0ZW5kKHt9LCBhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMsIHtcclxuICAgICAgICBwbGFjZW1lbnQ6IFwicmlnaHRcIixcclxuICAgICAgICB0cmlnZ2VyOiBcImNsaWNrXCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIixcclxuICAgICAgICB0ZW1wbGF0ZTpcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjwvZGl2PjwvZGl2PicsXHJcbiAgICAgIH0pKSxcclxuICAgICAgKGMucHJvdG90eXBlID0gYS5leHRlbmQoe30sIGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpKSxcclxuICAgICAgKGMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gYyksXHJcbiAgICAgIChjLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gYy5ERUZBVUxUUztcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy50aXAoKSxcclxuICAgICAgICAgIGIgPSB0aGlzLmdldFRpdGxlKCksXHJcbiAgICAgICAgICBjID0gdGhpcy5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgYS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIilbdGhpcy5vcHRpb25zLmh0bWwgPyBcImh0bWxcIiA6IFwidGV4dFwiXShiKSxcclxuICAgICAgICAgIGFcclxuICAgICAgICAgICAgLmZpbmQoXCIucG9wb3Zlci1jb250ZW50XCIpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgIC5kZXRhY2goKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5odG1sXHJcbiAgICAgICAgICAgICAgICA/IFwic3RyaW5nXCIgPT0gdHlwZW9mIGNcclxuICAgICAgICAgICAgICAgICAgPyBcImh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYXBwZW5kXCJcclxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0XCJcclxuICAgICAgICAgICAgXShjKSxcclxuICAgICAgICAgIGEucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKSxcclxuICAgICAgICAgIGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKSB8fCBhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5oaWRlKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuZ2V0Q29udGVudCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLiRlbGVtZW50LFxyXG4gICAgICAgICAgYiA9IHRoaXMub3B0aW9ucztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgYS5hdHRyKFwiZGF0YS1jb250ZW50XCIpIHx8XHJcbiAgICAgICAgICAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBiLmNvbnRlbnQgPyBiLmNvbnRlbnQuY2FsbChhWzBdKSA6IGIuY29udGVudClcclxuICAgICAgICApO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoXCIuYXJyb3dcIikpO1xyXG4gICAgICB9KTtcclxuICAgIHZhciBkID0gYS5mbi5wb3BvdmVyO1xyXG4gICAgKGEuZm4ucG9wb3ZlciA9IGIpLFxyXG4gICAgICAoYS5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yID0gYyksXHJcbiAgICAgIChhLmZuLnBvcG92ZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKGEuZm4ucG9wb3ZlciA9IGQpLCB0aGlzO1xyXG4gICAgICB9KTtcclxuICB9KShqUXVlcnkpLFxyXG4gICsoZnVuY3Rpb24gKGEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gYihjLCBkKSB7XHJcbiAgICAgICh0aGlzLiRib2R5ID0gYShkb2N1bWVudC5ib2R5KSksXHJcbiAgICAgICAgKHRoaXMuJHNjcm9sbEVsZW1lbnQgPSBhKGEoYykuaXMoZG9jdW1lbnQuYm9keSkgPyB3aW5kb3cgOiBjKSksXHJcbiAgICAgICAgKHRoaXMub3B0aW9ucyA9IGEuZXh0ZW5kKHt9LCBiLkRFRkFVTFRTLCBkKSksXHJcbiAgICAgICAgKHRoaXMuc2VsZWN0b3IgPSAodGhpcy5vcHRpb25zLnRhcmdldCB8fCBcIlwiKSArIFwiIC5uYXYgbGkgPiBhXCIpLFxyXG4gICAgICAgICh0aGlzLm9mZnNldHMgPSBbXSksXHJcbiAgICAgICAgKHRoaXMudGFyZ2V0cyA9IFtdKSxcclxuICAgICAgICAodGhpcy5hY3RpdmVUYXJnZXQgPSBudWxsKSxcclxuICAgICAgICAodGhpcy5zY3JvbGxIZWlnaHQgPSAwKSxcclxuICAgICAgICB0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKFxyXG4gICAgICAgICAgXCJzY3JvbGwuYnMuc2Nyb2xsc3B5XCIsXHJcbiAgICAgICAgICBhLnByb3h5KHRoaXMucHJvY2VzcywgdGhpcylcclxuICAgICAgICApLFxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpLFxyXG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYyhjKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkID0gYSh0aGlzKSxcclxuICAgICAgICAgIGUgPSBkLmRhdGEoXCJicy5zY3JvbGxzcHlcIiksXHJcbiAgICAgICAgICBmID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgYyAmJiBjO1xyXG4gICAgICAgIGUgfHwgZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIsIChlID0gbmV3IGIodGhpcywgZikpKSxcclxuICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGMgJiYgZVtjXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIChiLlZFUlNJT04gPSBcIjMuMy43XCIpLFxyXG4gICAgICAoYi5ERUZBVUxUUyA9IHsgb2Zmc2V0OiAxMCB9KSxcclxuICAgICAgKGIucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHQgfHxcclxuICAgICAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgICAgICB0aGlzLiRib2R5WzBdLnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYi5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYiA9IHRoaXMsXHJcbiAgICAgICAgICBjID0gXCJvZmZzZXRcIixcclxuICAgICAgICAgIGQgPSAwO1xyXG4gICAgICAgICh0aGlzLm9mZnNldHMgPSBbXSksXHJcbiAgICAgICAgICAodGhpcy50YXJnZXRzID0gW10pLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSksXHJcbiAgICAgICAgICBhLmlzV2luZG93KHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0pIHx8XHJcbiAgICAgICAgICAgICgoYyA9IFwicG9zaXRpb25cIiksIChkID0gdGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSkpLFxyXG4gICAgICAgICAgdGhpcy4kYm9keVxyXG4gICAgICAgICAgICAuZmluZCh0aGlzLnNlbGVjdG9yKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgYiA9IGEodGhpcyksXHJcbiAgICAgICAgICAgICAgICBlID0gYi5kYXRhKFwidGFyZ2V0XCIpIHx8IGIuYXR0cihcImhyZWZcIiksXHJcbiAgICAgICAgICAgICAgICBmID0gL14jLi8udGVzdChlKSAmJiBhKGUpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAoZiAmJiBmLmxlbmd0aCAmJiBmLmlzKFwiOnZpc2libGVcIikgJiYgW1tmW2NdKCkudG9wICsgZCwgZV1dKSB8fFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgYi5vZmZzZXRzLnB1c2godGhpc1swXSksIGIudGFyZ2V0cy5wdXNoKHRoaXNbMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIChiLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhLFxyXG4gICAgICAgICAgYiA9IHRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0aGlzLm9wdGlvbnMub2Zmc2V0LFxyXG4gICAgICAgICAgYyA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXHJcbiAgICAgICAgICBkID0gdGhpcy5vcHRpb25zLm9mZnNldCArIGMgLSB0aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpLFxyXG4gICAgICAgICAgZSA9IHRoaXMub2Zmc2V0cyxcclxuICAgICAgICAgIGYgPSB0aGlzLnRhcmdldHMsXHJcbiAgICAgICAgICBnID0gdGhpcy5hY3RpdmVUYXJnZXQ7XHJcbiAgICAgICAgaWYgKCh0aGlzLnNjcm9sbEhlaWdodCAhPSBjICYmIHRoaXMucmVmcmVzaCgpLCBiID49IGQpKVxyXG4gICAgICAgICAgcmV0dXJuIGcgIT0gKGEgPSBmW2YubGVuZ3RoIC0gMV0pICYmIHRoaXMuYWN0aXZhdGUoYSk7XHJcbiAgICAgICAgaWYgKGcgJiYgYiA8IGVbMF0pIHJldHVybiAodGhpcy5hY3RpdmVUYXJnZXQgPSBudWxsKSwgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIGZvciAoYSA9IGUubGVuZ3RoOyBhLS07IClcclxuICAgICAgICAgIGcgIT0gZlthXSAmJlxyXG4gICAgICAgICAgICBiID49IGVbYV0gJiZcclxuICAgICAgICAgICAgKHZvaWQgMCA9PT0gZVthICsgMV0gfHwgYiA8IGVbYSArIDFdKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKGZbYV0pO1xyXG4gICAgICB9KSxcclxuICAgICAgKGIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAodGhpcy5hY3RpdmVUYXJnZXQgPSBiKSwgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHZhciBjID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvciArXHJcbiAgICAgICAgICAgICdbZGF0YS10YXJnZXQ9XCInICtcclxuICAgICAgICAgICAgYiArXHJcbiAgICAgICAgICAgICdcIl0sJyArXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IgK1xyXG4gICAgICAgICAgICAnW2hyZWY9XCInICtcclxuICAgICAgICAgICAgYiArXHJcbiAgICAgICAgICAgICdcIl0nLFxyXG4gICAgICAgICAgZCA9IGEoYykucGFyZW50cyhcImxpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGQucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoICYmXHJcbiAgICAgICAgICAoZCA9IGQuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxcclxuICAgICAgICAgIGQudHJpZ2dlcihcImFjdGl2YXRlLmJzLnNjcm9sbHNweVwiKTtcclxuICAgICAgfSksXHJcbiAgICAgIChiLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgICAucGFyZW50c1VudGlsKHRoaXMub3B0aW9ucy50YXJnZXQsIFwiLmFjdGl2ZVwiKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIHZhciBkID0gYS5mbi5zY3JvbGxzcHk7XHJcbiAgICAoYS5mbi5zY3JvbGxzcHkgPSBjKSxcclxuICAgICAgKGEuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yID0gYiksXHJcbiAgICAgIChhLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoYS5mbi5zY3JvbGxzcHkgPSBkKSwgdGhpcztcclxuICAgICAgfSksXHJcbiAgICAgIGEod2luZG93KS5vbihcImxvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhKCdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBiID0gYSh0aGlzKTtcclxuICAgICAgICAgIGMuY2FsbChiLCBiLmRhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKyhmdW5jdGlvbiAoYSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBiKGIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgZSA9IGQuZGF0YShcImJzLnRhYlwiKTtcclxuICAgICAgICBlIHx8IGQuZGF0YShcImJzLnRhYlwiLCAoZSA9IG5ldyBjKHRoaXMpKSksXHJcbiAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBiICYmIGVbYl0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYyA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGEoYik7XHJcbiAgICB9O1xyXG4gICAgKGMuVkVSU0lPTiA9IFwiMy4zLjdcIiksXHJcbiAgICAgIChjLlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTApLFxyXG4gICAgICAoYy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYiA9IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgIGMgPSBiLmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLFxyXG4gICAgICAgICAgZCA9IGIuZGF0YShcInRhcmdldFwiKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoZCB8fFxyXG4gICAgICAgICAgICAoKGQgPSBiLmF0dHIoXCJocmVmXCIpKSwgKGQgPSBkICYmIGQucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgXCJcIikpKSxcclxuICAgICAgICAgICFiLnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFyIGUgPSBjLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKSxcclxuICAgICAgICAgICAgZiA9IGEuRXZlbnQoXCJoaWRlLmJzLnRhYlwiLCB7IHJlbGF0ZWRUYXJnZXQ6IGJbMF0gfSksXHJcbiAgICAgICAgICAgIGcgPSBhLkV2ZW50KFwic2hvdy5icy50YWJcIiwgeyByZWxhdGVkVGFyZ2V0OiBlWzBdIH0pO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS50cmlnZ2VyKGYpLFxyXG4gICAgICAgICAgICBiLnRyaWdnZXIoZyksXHJcbiAgICAgICAgICAgICFnLmlzRGVmYXVsdFByZXZlbnRlZCgpICYmICFmLmlzRGVmYXVsdFByZXZlbnRlZCgpKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gYShkKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZShiLmNsb3Nlc3QoXCJsaVwiKSwgYyksXHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZShoLCBoLnBhcmVudCgpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBlLnRyaWdnZXIoeyB0eXBlOiBcImhpZGRlbi5icy50YWJcIiwgcmVsYXRlZFRhcmdldDogYlswXSB9KSxcclxuICAgICAgICAgICAgICAgICAgYi50cmlnZ2VyKHsgdHlwZTogXCJzaG93bi5icy50YWJcIiwgcmVsYXRlZFRhcmdldDogZVswXSB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoYiwgZCwgZSkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGYoKSB7XHJcbiAgICAgICAgICBnXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAuZmluZChcIj4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCAhMSksXHJcbiAgICAgICAgICAgIGJcclxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJylcclxuICAgICAgICAgICAgICAuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgITApLFxyXG4gICAgICAgICAgICBoID8gKGJbMF0ub2Zmc2V0V2lkdGgsIGIuYWRkQ2xhc3MoXCJpblwiKSkgOiBiLnJlbW92ZUNsYXNzKFwiZmFkZVwiKSxcclxuICAgICAgICAgICAgYi5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICBiXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgITApLFxyXG4gICAgICAgICAgICBlICYmIGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGcgPSBkLmZpbmQoXCI+IC5hY3RpdmVcIiksXHJcbiAgICAgICAgICBoID1cclxuICAgICAgICAgICAgZSAmJlxyXG4gICAgICAgICAgICBhLnN1cHBvcnQudHJhbnNpdGlvbiAmJlxyXG4gICAgICAgICAgICAoKGcubGVuZ3RoICYmIGcuaGFzQ2xhc3MoXCJmYWRlXCIpKSB8fCAhIWQuZmluZChcIj4gLmZhZGVcIikubGVuZ3RoKTtcclxuICAgICAgICBnLmxlbmd0aCAmJiBoXHJcbiAgICAgICAgICA/IGdcclxuICAgICAgICAgICAgICAub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsIGYpXHJcbiAgICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTilcclxuICAgICAgICAgIDogZigpLFxyXG4gICAgICAgICAgZy5yZW1vdmVDbGFzcyhcImluXCIpO1xyXG4gICAgICB9KTtcclxuICAgIHZhciBkID0gYS5mbi50YWI7XHJcbiAgICAoYS5mbi50YWIgPSBiKSxcclxuICAgICAgKGEuZm4udGFiLkNvbnN0cnVjdG9yID0gYyksXHJcbiAgICAgIChhLmZuLnRhYi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoYS5mbi50YWIgPSBkKSwgdGhpcztcclxuICAgICAgfSk7XHJcbiAgICB2YXIgZSA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgIGMucHJldmVudERlZmF1bHQoKSwgYi5jYWxsKGEodGhpcyksIFwic2hvd1wiKTtcclxuICAgIH07XHJcbiAgICBhKGRvY3VtZW50KVxyXG4gICAgICAub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwgJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGUpXHJcbiAgICAgIC5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCAnW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsIGUpO1xyXG4gIH0pKGpRdWVyeSksXHJcbiAgKyhmdW5jdGlvbiAoYSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBmdW5jdGlvbiBiKGIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBhKHRoaXMpLFxyXG4gICAgICAgICAgZSA9IGQuZGF0YShcImJzLmFmZml4XCIpLFxyXG4gICAgICAgICAgZiA9IFwib2JqZWN0XCIgPT0gdHlwZW9mIGIgJiYgYjtcclxuICAgICAgICBlIHx8IGQuZGF0YShcImJzLmFmZml4XCIsIChlID0gbmV3IGModGhpcywgZikpKSxcclxuICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGIgJiYgZVtiXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBjID0gZnVuY3Rpb24gKGIsIGQpIHtcclxuICAgICAgKHRoaXMub3B0aW9ucyA9IGEuZXh0ZW5kKHt9LCBjLkRFRkFVTFRTLCBkKSksXHJcbiAgICAgICAgKHRoaXMuJHRhcmdldCA9IGEodGhpcy5vcHRpb25zLnRhcmdldClcclxuICAgICAgICAgIC5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLCBhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbiwgdGhpcykpXHJcbiAgICAgICAgICAub24oXHJcbiAgICAgICAgICAgIFwiY2xpY2suYnMuYWZmaXguZGF0YS1hcGlcIixcclxuICAgICAgICAgICAgYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLCB0aGlzKVxyXG4gICAgICAgICAgKSksXHJcbiAgICAgICAgKHRoaXMuJGVsZW1lbnQgPSBhKGIpKSxcclxuICAgICAgICAodGhpcy5hZmZpeGVkID0gbnVsbCksXHJcbiAgICAgICAgKHRoaXMudW5waW4gPSBudWxsKSxcclxuICAgICAgICAodGhpcy5waW5uZWRPZmZzZXQgPSBudWxsKSxcclxuICAgICAgICB0aGlzLmNoZWNrUG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICAoYy5WRVJTSU9OID0gXCIzLjMuN1wiKSxcclxuICAgICAgKGMuUkVTRVQgPSBcImFmZml4IGFmZml4LXRvcCBhZmZpeC1ib3R0b21cIiksXHJcbiAgICAgIChjLkRFRkFVTFRTID0geyBvZmZzZXQ6IDAsIHRhcmdldDogd2luZG93IH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgZiA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXHJcbiAgICAgICAgICBnID0gdGhpcy4kdGFyZ2V0LmhlaWdodCgpO1xyXG4gICAgICAgIGlmIChudWxsICE9IGMgJiYgXCJ0b3BcIiA9PSB0aGlzLmFmZml4ZWQpIHJldHVybiBlIDwgYyAmJiBcInRvcFwiO1xyXG4gICAgICAgIGlmIChcImJvdHRvbVwiID09IHRoaXMuYWZmaXhlZClcclxuICAgICAgICAgIHJldHVybiBudWxsICE9IGNcclxuICAgICAgICAgICAgPyAhKGUgKyB0aGlzLnVucGluIDw9IGYudG9wKSAmJiBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgIDogIShlICsgZyA8PSBhIC0gZCkgJiYgXCJib3R0b21cIjtcclxuICAgICAgICB2YXIgaCA9IG51bGwgPT0gdGhpcy5hZmZpeGVkLFxyXG4gICAgICAgICAgaSA9IGggPyBlIDogZi50b3AsXHJcbiAgICAgICAgICBqID0gaCA/IGcgOiBiO1xyXG4gICAgICAgIHJldHVybiBudWxsICE9IGMgJiYgZSA8PSBjXHJcbiAgICAgICAgICA/IFwidG9wXCJcclxuICAgICAgICAgIDogbnVsbCAhPSBkICYmIGkgKyBqID49IGEgLSBkICYmIFwiYm90dG9tXCI7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoYy5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBpbm5lZE9mZnNldCkgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoXCJhZmZpeFwiKTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgIGIgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5waW5uZWRPZmZzZXQgPSBiLnRvcCAtIGEpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sIHRoaXMpLCAxKTtcclxuICAgICAgfSksXHJcbiAgICAgIChjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgIHZhciBiID0gdGhpcy4kZWxlbWVudC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgZCA9IHRoaXMub3B0aW9ucy5vZmZzZXQsXHJcbiAgICAgICAgICAgIGUgPSBkLnRvcCxcclxuICAgICAgICAgICAgZiA9IGQuYm90dG9tLFxyXG4gICAgICAgICAgICBnID0gTWF0aC5tYXgoYShkb2N1bWVudCkuaGVpZ2h0KCksIGEoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkpO1xyXG4gICAgICAgICAgXCJvYmplY3RcIiAhPSB0eXBlb2YgZCAmJiAoZiA9IGUgPSBkKSxcclxuICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlICYmIChlID0gZC50b3AodGhpcy4kZWxlbWVudCkpLFxyXG4gICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGYgJiYgKGYgPSBkLmJvdHRvbSh0aGlzLiRlbGVtZW50KSk7XHJcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuZ2V0U3RhdGUoZywgYiwgZSwgZik7XHJcbiAgICAgICAgICBpZiAodGhpcy5hZmZpeGVkICE9IGgpIHtcclxuICAgICAgICAgICAgbnVsbCAhPSB0aGlzLnVucGluICYmIHRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgaSA9IFwiYWZmaXhcIiArIChoID8gXCItXCIgKyBoIDogXCJcIiksXHJcbiAgICAgICAgICAgICAgaiA9IGEuRXZlbnQoaSArIFwiLmJzLmFmZml4XCIpO1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihqKSwgai5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkpIHJldHVybjtcclxuICAgICAgICAgICAgKHRoaXMuYWZmaXhlZCA9IGgpLFxyXG4gICAgICAgICAgICAgICh0aGlzLnVucGluID0gXCJib3R0b21cIiA9PSBoID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoKSA6IG51bGwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjLlJFU0VUKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGkpXHJcbiAgICAgICAgICAgICAgICAudHJpZ2dlcihpLnJlcGxhY2UoXCJhZmZpeFwiLCBcImFmZml4ZWRcIikgKyBcIi5icy5hZmZpeFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFwiYm90dG9tXCIgPT0gaCAmJiB0aGlzLiRlbGVtZW50Lm9mZnNldCh7IHRvcDogZyAtIGIgLSBmIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB2YXIgZCA9IGEuZm4uYWZmaXg7XHJcbiAgICAoYS5mbi5hZmZpeCA9IGIpLFxyXG4gICAgICAoYS5mbi5hZmZpeC5Db25zdHJ1Y3RvciA9IGMpLFxyXG4gICAgICAoYS5mbi5hZmZpeC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoYS5mbi5hZmZpeCA9IGQpLCB0aGlzO1xyXG4gICAgICB9KSxcclxuICAgICAgYSh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYSgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBjID0gYSh0aGlzKSxcclxuICAgICAgICAgICAgZCA9IGMuZGF0YSgpO1xyXG4gICAgICAgICAgKGQub2Zmc2V0ID0gZC5vZmZzZXQgfHwge30pLFxyXG4gICAgICAgICAgICBudWxsICE9IGQub2Zmc2V0Qm90dG9tICYmIChkLm9mZnNldC5ib3R0b20gPSBkLm9mZnNldEJvdHRvbSksXHJcbiAgICAgICAgICAgIG51bGwgIT0gZC5vZmZzZXRUb3AgJiYgKGQub2Zmc2V0LnRvcCA9IGQub2Zmc2V0VG9wKSxcclxuICAgICAgICAgICAgYi5jYWxsKGMsIGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9KShqUXVlcnkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9