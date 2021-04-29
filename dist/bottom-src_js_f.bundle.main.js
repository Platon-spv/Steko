(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_f"],{

/***/ 685:
/*!************************!*\
  !*** ./src/js/flip.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*! flip - v1.1.2 - 2016-10-20
 * https://github.com/nnattawat/flip
 * Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */


(function ($, jQuery) {
  /*
   * Private attributes and method
   */

  // Function from David Walsh: http://davidwalsh.name/css-animation-callback licensed with http://opensource.org/licenses/MIT
  var whichTransitionEvent = function () {
    var t,
      el = document.createElement("fakeelement"),
      transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
      };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  };

  /*
   * Model declaration
   */
  var Flip = function ($el, options, callback) {
    // Define default setting
    this.setting = {
      axis: "y",
      reverse: false,
      trigger: "click",
      speed: 500,
      forceHeight: false,
      forceWidth: false,
      autoSize: true,
      front: ".front",
      back: ".back",
    };

    this.setting = $.extend(this.setting, options);

    if (
      typeof options.axis === "string" &&
      (options.axis.toLowerCase() === "x" || options.axis.toLowerCase() === "y")
    ) {
      this.setting.axis = options.axis.toLowerCase();
    }

    if (typeof options.reverse === "boolean") {
      this.setting.reverse = options.reverse;
    }

    if (typeof options.trigger === "string") {
      this.setting.trigger = options.trigger.toLowerCase();
    }

    var speed = parseInt(options.speed);
    if (!isNaN(speed)) {
      this.setting.speed = speed;
    }

    if (typeof options.forceHeight === "boolean") {
      this.setting.forceHeight = options.forceHeight;
    }

    if (typeof options.forceWidth === "boolean") {
      this.setting.forceWidth = options.forceWidth;
    }

    if (typeof options.autoSize === "boolean") {
      this.setting.autoSize = options.autoSize;
    }

    if (typeof options.front === "string" || options.front instanceof $) {
      this.setting.front = options.front;
    }

    if (typeof options.back === "string" || options.back instanceof $) {
      this.setting.back = options.back;
    }

    // Other attributes
    this.element = $el;
    this.frontElement = this.getFrontElement();
    this.backElement = this.getBackElement();
    this.isFlipped = false;

    this.init(callback);
  };

  /*
   * Public methods
   */
  $.extend(Flip.prototype, {
    flipDone: function (callback) {
      var self = this;
      // Providing a nicely wrapped up callback because transform is essentially async
      self.element.one(whichTransitionEvent(), function () {
        self.element.trigger("flip:done");
        if (typeof callback === "function") {
          callback.call(self.element);
        }
      });
    },

    flip: function (callback) {
      if (this.isFlipped) {
        return;
      }

      this.isFlipped = true;

      var rotateAxis = "rotate" + this.setting.axis;
      this.frontElement.css({
        transform:
          rotateAxis + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
        "z-index": "0",
      });

      this.backElement.css({
        transform: rotateAxis + "(0deg)",
        "z-index": "1",
      });
      this.flipDone(callback);
    },

    unflip: function (callback) {
      if (!this.isFlipped) {
        return;
      }

      this.isFlipped = false;

      var rotateAxis = "rotate" + this.setting.axis;
      this.frontElement.css({
        transform: rotateAxis + "(0deg)",
        "z-index": "1",
      });

      this.backElement.css({
        transform:
          rotateAxis + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
        "z-index": "0",
      });
      this.flipDone(callback);
    },

    getFrontElement: function () {
      if (this.setting.front instanceof $) {
        return this.setting.front;
      } else {
        return this.element.find(this.setting.front);
      }
    },

    getBackElement: function () {
      if (this.setting.back instanceof $) {
        return this.setting.back;
      } else {
        return this.element.find(this.setting.back);
      }
    },

    init: function (callback) {
      var self = this;

      var faces = self.frontElement.add(self.backElement);
      var rotateAxis = "rotate" + self.setting.axis;
      var perspective =
        self.element[
          "outer" + (rotateAxis === "rotatex" ? "Height" : "Width")
        ]() * 2;
      var elementCss = {
        perspective: perspective,
        position: "relative",
      };
      var backElementCss = {
        transform:
          rotateAxis +
          "(" +
          (self.setting.reverse ? "180deg" : "-180deg") +
          ")",
        "z-index": "0",
        position: "relative",
      };
      var faceElementCss = {
        "backface-visibility": "hidden",
        "transform-style": "preserve-3d",
        position: "absolute",
        "z-index": "1",
      };

      if (self.setting.forceHeight) {
        faces.outerHeight(self.element.height());
      } else if (self.setting.autoSize) {
        faceElementCss.height = "100%";
      }

      if (self.setting.forceWidth) {
        faces.outerWidth(self.element.width());
      } else if (self.setting.autoSize) {
        faceElementCss.width = "100%";
      }

      // Back face always visible on Chrome #39
      if (
        (window.chrome || (window.Intl && Intl.v8BreakIterator)) &&
        "CSS" in window
      ) {
        //Blink Engine, add preserve-3d to self.element
        elementCss["-webkit-transform-style"] = "preserve-3d";
      }

      faces.css(faceElementCss).find("*").css({
        "backface-visibility": "hidden",
      });

      self.element.css(elementCss);
      self.backElement.css(backElementCss);

      // #39
      // not forcing width/height may cause an initial flip to show up on
      // page load when we apply the style to reverse the backface...
      // To prevent self we first apply the basic styles and then give the
      // browser a moment to apply them. Only afterwards do we add the transition.
      setTimeout(function () {
        // By now the browser should have applied the styles, so the transition
        // will only affect subsequent flips.
        var speedInSec = self.setting.speed / 1000 || 0.5;
        faces.css({
          transition: "all " + speedInSec + "s ease-out",
        });

        // This allows flip to be called for setup with only a callback (default settings)
        if (typeof callback === "function") {
          callback.call(self.element);
        }

        // While this used to work with a setTimeout of zero, at some point that became
        // unstable and the initial flip returned. The reason for this is unknown but we
        // will temporarily use a short delay of 20 to mitigate this issue.
      }, 20);

      self.attachEvents();
    },

    clickHandler: function (event) {
      if (!event) {
        event = window.event;
      }
      if (
        this.element.find(
          $(event.target).closest('button, a, input[type="submit"]')
        ).length
      ) {
        return;
      }

      if (this.isFlipped) {
        this.unflip();
      } else {
        this.flip();
      }
    },

    hoverHandler: function () {
      var self = this;
      self.element.off("mouseleave.flip");

      self.flip();

      setTimeout(function () {
        self.element.on("mouseleave.flip", $.proxy(self.unflip, self));
        if (!self.element.is(":hover")) {
          self.unflip();
        }
      }, self.setting.speed + 150);
    },

    attachEvents: function () {
      var self = this;
      if (self.setting.trigger === "click") {
        self.element.on(
          $.fn.tap ? "tap.flip" : "click.flip",
          $.proxy(self.clickHandler, self)
        );
      } else if (self.setting.trigger === "hover") {
        self.element.on("mouseenter.flip", $.proxy(self.hoverHandler, self));
        self.element.on("mouseleave.flip", $.proxy(self.unflip, self));
      }
    },

    flipChanged: function (callback) {
      this.element.trigger("flip:change");
      if (typeof callback === "function") {
        callback.call(this.element);
      }
    },

    changeSettings: function (options, callback) {
      var self = this;
      var changeNeeded = false;

      if (
        options.axis !== undefined &&
        self.setting.axis !== options.axis.toLowerCase()
      ) {
        self.setting.axis = options.axis.toLowerCase();
        changeNeeded = true;
      }

      if (
        options.reverse !== undefined &&
        self.setting.reverse !== options.reverse
      ) {
        self.setting.reverse = options.reverse;
        changeNeeded = true;
      }

      if (changeNeeded) {
        var faces = self.frontElement.add(self.backElement);
        var savedTrans = faces.css([
          "transition-property",
          "transition-timing-function",
          "transition-duration",
          "transition-delay",
        ]);

        faces.css({
          transition: "none",
        });

        // This sets up the first flip in the new direction automatically
        var rotateAxis = "rotate" + self.setting.axis;

        if (self.isFlipped) {
          self.frontElement.css({
            transform:
              rotateAxis + (self.setting.reverse ? "(-180deg)" : "(180deg)"),
            "z-index": "0",
          });
        } else {
          self.backElement.css({
            transform:
              rotateAxis + (self.setting.reverse ? "(180deg)" : "(-180deg)"),
            "z-index": "0",
          });
        }
        // Providing a nicely wrapped up callback because transform is essentially async
        setTimeout(function () {
          faces.css(savedTrans);
          self.flipChanged(callback);
        }, 0);
      } else {
        // If we didnt have to set the axis we can just call back.
        self.flipChanged(callback);
      }
    },
  });

  /*
   * jQuery collection methods
   */
  $.fn.flip = function (options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    if (typeof options === "string" || typeof options === "boolean") {
      this.each(function () {
        var flip = $(this).data("flip-model");

        if (options === "toggle") {
          options = !flip.isFlipped;
        }

        if (options) {
          flip.flip(callback);
        } else {
          flip.unflip(callback);
        }
      });
    } else {
      this.each(function () {
        if ($(this).data("flip-model")) {
          // The element has been initiated, all we have to do is change applicable settings
          var flip = $(this).data("flip-model");

          if (
            options &&
            (options.axis !== undefined || options.reverse !== undefined)
          ) {
            flip.changeSettings(options, callback);
          }
        } else {
          // Init
          $(this).data(
            "flip-model",
            new Flip($(this), options || {}, callback)
          );
        }
      });
    }

    return this;
  };
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 971:
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ 808);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_allinone_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/allinone.min.css */ 904);
/* harmony import */ var _css_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/aos.css */ 905);
/* harmony import */ var _css_new_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/new-styles.css */ 644);
/* harmony import */ var _css_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/jquery.fancybox.min.css */ 806);
/* harmony import */ var _css_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/slick.css */ 5);
/* harmony import */ var _css_sweetalert_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/sweetalert.css */ 768);
/* harmony import */ var _css_jquery_flipster_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/jquery.flipster.min.css */ 163);
/* harmony import */ var _Partner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Partner.js */ 572);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ 755);


// import fonts from "../css/fonts-style.css";








// import { Talon } from "./Talon.js";
// import { createLeads } from "./crateLeads";
// import { validateReCaptcha } from "./captcha";
// import fancybox from "./jquery.fancybox.min.js";
// import button from "./Button_discount";

window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
// import
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

const partner = new _Partner_js__WEBPACK_IMPORTED_MODULE_9__.default(document.location.search, document.cookie);
let is_forms_was_touched = false;

//new design

// Cookie

var $$cookieDisclaimer = document.querySelector(".js-cookie-disclaimer");

if (!localStorage.getItem("cookieDisclaimer")) {
  $$cookieDisclaimer.classList.add("is-active");
}

$$cookieDisclaimer
  .querySelector(".cookie__button")
  .addEventListener("click", function () {
    localStorage.setItem("cookieDisclaimer", true);
    $$cookieDisclaimer.classList.remove("is-active");
  });

// Cookie end

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".top-nav__menu li").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".active-link").removeClass("active-link");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active-link");
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".lam-wrapper a").hover(
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".caption").addClass("caption-hover");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("lam-hover");
  },
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".caption").stop(true).removeClass("caption-hover");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).stop(true).removeClass("lam-hover");
  }
);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".assortment-item").hover(
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".caption").addClass("assortment-back");
  },
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".caption").stop(true).removeClass("assortment-back");
  }
);

// hover gallery

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".gallery-slider a").hover(
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".gallery-back").addClass("gallery-back-on");
  },
  function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".gallery-back").stop(true).removeClass("gallery-back-on");
  }
);

//language page color in mob

//Smooth Page Scroll

jquery__WEBPACK_IMPORTED_MODULE_0___default()("header .js-menu-slide").on("click", "a", function (event) {
  event.preventDefault();
  var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href"),
    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body,html").animate({ scrollTop: top - 90 }, 1500);
});

//Smooth Page Scroll Mobile Version

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-mob-link").on("click", ".scroll", function (event) {
  event.preventDefault();
  var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href"),
    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body,html").animate({ scrollTop: top - 70 }, 1500);
});

//Smooth Page Scroll in Footer

jquery__WEBPACK_IMPORTED_MODULE_0___default()("footer").on("click", ".scroll-footer", function (event) {
  event.preventDefault();
  var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href"),
    top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body,html").animate({ scrollTop: top - 90 }, 1500);
});

// Jquery Flip Card

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card").flip({
  trigger: "manual",
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card .flip-button").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card").flip(false);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".card").flip(true);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card-close").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".card").flip(false);
});

// MOBILE MENU
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menuIcon").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("open");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menu").toggleClass("open");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menu-name").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menuIcon").toggleClass("open");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menu").toggleClass("open");
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-filterOpen").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#ocfilter").toggleClass("open");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mask").toggleClass(" js-mask-mobile");
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-mob-scroll").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-menu").removeClass("open");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mask").removeClass(" js-mask-mobile");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header__menu").removeClass("open");
});

setTimeout(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".accordion .accordion-wrap:first-child  a").trigger("click");
}, 0);
//Accordion implement

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".accordion a").click(function (j) {
  var dropDown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("li").find(".accordion-box");
  var dropDownImg = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".accordion-wrap").find(".accordion-img");

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".accordion").find(".accordion-box").not(dropDown).slideUp();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
    .closest(".accordion")
    .find(".accordion-img")
    .not(dropDownImg)
    .fadeOut();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("active")) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("active");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".accordion").find("a.active").removeClass("active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
  }

  dropDown.stop(false, true).slideToggle();
  dropDownImg.stop(false, true).fadeToggle();

  j.preventDefault();
});

//kit accorderon

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".kit-accordion > li:eq(0) a").addClass("active").next().slideDown();

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".kit-accordion a").click(function (j) {
  var dropDown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest("li").find(".kit-wrapper");

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
    .closest(".kit-accordion")
    .find(".kit-wrapper")
    .not(dropDown)
    .slideUp();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("active")) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("active");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".kit-accordion").find("a.active").removeClass("active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
  }

  dropDown.stop(false, true).slideToggle();

  j.preventDefault();
});

//Tabs implement

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-control a:first").addClass("current");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-control a").click(function (e) {
  e.preventDefault();
  var _href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-control a").removeClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-content > div").hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_href).fadeIn();
});

//Tabs lamination

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-lam a:first").addClass("current");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-lam a").click(function (e) {
  e.preventDefault();
  var _href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-lam a").removeClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-content-lam > div").hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_href).fadeIn();
});

//Tabs glass
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-glass a:first").addClass("current");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-glass a").click(function (e) {
  e.preventDefault();
  var _href = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("href");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-glass a").removeClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("current");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tabs-content-glass > div").hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(_href).fadeIn();
});

//ПРОФИЛЬНЫЕ СИСТЕМЫ STEKO

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var europeSliderWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-europe-slider-wrap");
  var ukraineSliderWrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-ukraine-slider-wrap");
  var taeb = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".taeb-switch");

  europeSliderWrap.hide();
  taeb.find(".taeb").on("click", function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    if ($this.hasClass("active")) return;

    var direction = $this.attr("data-direction");

    taeb.removeClass("left right").addClass(direction);
    taeb.find(".taeb.active").removeClass("active");
    $this.addClass("active");
    if (taeb.hasClass("left")) {
      ukraineSliderWrap.show();
      europeSliderWrap.hide();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".ukraine-slider").get(0).slick.setPosition();
    } else {
      ukraineSliderWrap.hide();
      europeSliderWrap.show();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".europe-slider").get(0).slick.setPosition();
    }
  });

  const lamClick = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-lam");
  const glassClick = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-glass");

  const lam = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".lam-switch");

  glassClick.hide();
  lam.find(".lam").on("click", function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    if ($this.hasClass("active")) return;

    var direction = $this.attr("data-direction");

    lam.removeClass("left right").addClass(direction);
    lam.find(".lam.active").removeClass("active");
    $this.addClass("active");
    if (lam.hasClass("left")) {
      lamClick.show();
      glassClick.hide();
    } else {
      lamClick.hide();
      glassClick.show();
    }
  });
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function ($) {
  const mainSlider = $(".slider");
  mainSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-mainSlider__nav"),
  });

  const main_prev = $(".js-main-slider-left");
  const main_next = $(".js-main-slider-right");

  main_prev.on("click", function () {
    mainSlider.slick("slickPrev");
  });

  main_next.on("click", function () {
    mainSlider.slick("slickNext");
  });

  const ukraineSlider = $(".ukraine-slider");
  const ukraineSlider_prev = $(".js-ukraine-arrow__left");
  const ukraineSlider_next = $(".js-ukraine-arrow__right");

  ukraineSlider_next.on("click", function () {
    ukraineSlider.slick("slickNext");
  });

  ukraineSlider_prev.on("click", function () {
    ukraineSlider.slick("slickPrev");
  });

  ukraineSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-ukraine-dots"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const europeSlider = $(".europe-slider");

  const europeSlider_prev = $(".js-europe-arrow__left");
  const europeSlider_next = $(".js-europe-arrow__right");

  europeSlider_next.on("click", function () {
    europeSlider.slick("slickNext");
  });

  europeSlider_prev.on("click", function () {
    europeSlider.slick("slickPrev");
  });

  europeSlider.slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-europe-dots"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  var componentSlider = $(".component-slider");

  componentSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-component-dots"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const gallerySlider = $(".js-gallery");
  const gallerySlider_prev = $(".js-gallery-arrow__left");
  const gallerySlider_next = $(".js-gallery-arrow__right");

  gallerySlider_next.on("click", function () {
    gallerySlider.slick("slickNext");
  });

  gallerySlider_prev.on("click", function () {
    gallerySlider.slick("slickPrev");
  });

  gallerySlider.slick({
    autoplaySpeed: 5000,
    infinite: false,
    slidesToShow: 4,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".js-reviews-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-reviewsSlider__nav"),
    responsive: [
      {
        breakpoint: 996,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".js-implement-slider").slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    customPaging: function (slider, i) {
      i = i + 1;
      var slideNumber = i + 1,
        totalSlides = slider.slideCount;
      return (
        '<a class="custom-dot" role="button" title="' +
        slideNumber +
        " of " +
        totalSlides +
        '"><span class="string"></span></a>'
      );
    },
    appendDots: $(".js-implement__nav"),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });

  document
    .querySelectorAll(
      "#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form, #popup_form_water"
    )
    .forEach((form) => {
      form.querySelectorAll("input").forEach((input) =>
        input.addEventListener("blur", () => {
          if (input.value.length) {
            is_forms_was_touched = false;
          }
        })
      );
    });

  window.onbeforeunload = function (e) {
    return is_forms_was_touched
      ? `Ви не залишили номер для зв'язку. Бажаєте закрити сторінку?`
      : null;
  };

  if (document.location.search.match("partner_id")) {
    $.ajax({
      url: "https://partners.steko.com.ua/api/visits/create",
      method: "POST",
      data: JSON.stringify(partner.get_all_data(), (key, value) => {
        if (key === "partner_id") value = partner.get_partner_id().partner_id;
        return value;
      }).replace("partner_id", "uuid"),
      headers: {
        Accept: "text/plain; charset=utf-8",
        "Content-Type": "text/plain; charset=utf-8",
      },
      crossDomain: true,
    });
  }

  $(".js-header__logo").click(function (event) {
    // Prevent the click from loading href
    event.preventDefault();

    // Scroll down to 'thisCVTopPosition'
    $("html, body").animate({ scrollTop: 0 }, "slow");
    // This stops the anchor link from acting like a normal anchor link
    return false;
  });

  var cookie = js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("promo4");

  if (cookie) {
    if (cookie == "30") {
      $("#popup_main_form_promo").css("display", "none");
      $("#promo_text").html("Вы уже испытали удачу! Ваша скидка:");
      $("#cont_animation").html("<img src='images/promo/30.gif' alt=''>");
      $("#cont_animation").append(
        '<div class="usege_promo"><p>Ваш промокод: ' +
          js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("cod") +
          "</p><p>Для получения скидки сообщите промокод менеджеру</p></div>"
      );
    } else if (cookie == "35") {
      $("#popup_main_form_promo").css("display", "none");
      $("#promo_text").html("Вы уже испытали удачу! Ваша скидка:");
      $("#cont_animation").html("<img src='images/promo/35.gif' alt=''>");
      $("#cont_animation").append(
        '<div class="usege_promo"><p>Ваш промокод: ' +
          js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("cod") +
          "</p><p>Для получения скидки сообщите промокод менеджеру</p></div>"
      );
    } else if (cookie == "33") {
      $("#popup_main_form_promo").css("display", "none");
      $("#promo_text").html("Вы уже испытали удачу! Ваша скидка:");
      $("#cont_animation").html("<img src='images/promo/33.gif' alt=''>");
      $("#cont_animation").append(
        '<div class="usege_promo"><p>Ваш промокод: ' +
          js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("cod") +
          "</p><p>Для получения скидки сообщите промокод менеджеру</p></div>"
      );
    } else if (cookie == "40") {
      $("#popup_main_form_promo").css("display", "none");
      $("#promo_text").html("Вы уже испытали удачу! Ваша скидка:");
      $("#cont_animation").html("<img src='images/promo/40.gif' alt=''>");
      $("#cont_animation").append(
        '<div class="usege_promo"><p>Ваш промокод: ' +
          js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("cod") +
          "</p><p>Для получения скидки сообщите промокод менеджеру</p></div>"
      );
    }
  } else {
    $("#popup_main_form_promo").submit(function (event) {
      event.preventDefault();
      var clientip = $("#clientip").val();
      if (!clientip) {
        var rand = 2 - 0.5 + Math.random() * (255 - 2 + 1);
        rand = Math.round(rand);
        clientip = "99.99.99." + rand;
      }
      var min = 0,
        max = 99,
        randomPromo = randomInteger(5, 10000000);
      var rand = Math.floor(Math.random() * (max - min)) + min;
      var promo4;
      promo4 = 33;

      var leed_phone = $(this)
        .find("#phone_popup")
        .val()
        .replace(/[^0-9]/g, "")
        .slice(2);
      var leed_name = $(this).find("input[name=field_1_promo]").val();
      var val_region = $(this).find("#choose-region").val();
      var val_email = $(this).find("#email_form").val();
      var dataPromo = {
        leed_name: leed_name,
        leed_phone: leed_phone,
        leed_region_id: val_region,
        leed_email: val_email,
        leed_promo_code: randomPromo,
        leed_promo_discount: promo4,
        client_ip: clientip,
      };

      var data_pr =
        $(this).serialize() +
        "&field_2_promo=" +
        leed_phone +
        "&field_3_promo=" +
        promo4 +
        "&field_4_promo=" +
        randomPromo +
        "&field_6_promo=" +
        clientip;
      $.ajax({
        // url: 'http://leed.steko.com.ua/takedata_promo.php',
        url: "https://b2c.steko.com.ua/api/takedata-promo",
        type: "POST",
        data: dataPromo,
        success: function (data) {
          // Получаем ответ с сервера с помощью ajax
          if (data.message === "success") {
            $("#popup_main_form_promo").remove();
            $("#promo_text").html("Ваша скидка:");
            $("#cont_animation").html("<img src='images/promo/33.gif' alt=''>");
            js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("promo4", "33", {
              expires: 365,
              path: "/",
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_1__.get("cod", randomPromo, {
              expires: 365,
              path: "/",
            });
            $("#cont_animation").append(
              '<div class="usege_promo"><p>Ваш промокод: ' +
                randomPromo +
                "</p><p>Для получения скидки сообщите промокод менеджеру</p></div>"
            );
          } else {
            $("#popup_main_form_promo").remove();
            $("#promo_text").html("Вы уже испытали удачу!");
            $("#cont_animation").html(
              '<div class="usege_promo"><p>Вы уже получили код на скидку.</p></div>'
            );
          }
        },
      });
    });
  }
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function e() {}

  function i() {}

  function n(e) {
    e.each(function () {
      var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        i = parseInt(e.children(".cd-pricing-features").width()),
        n = parseInt(e.width());
      e.scrollLeft() >= i - n - 1
        ? e.parent("li").addClass("is-ended")
        : e.parent("li").removeClass("is-ended");
    });
  }

  function t(e) {
    e.addClass("is-selected");
  }

  function a(e, i) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(e, function (e, n) {
      e != i
        ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("is-visible is-selected").addClass("is-hidden")
        : jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("is-visible").removeClass("is-hidden is-selected");
    });
  }

  //  $("head").append("<link rel='stylesheet' type='text/css' href='../css/sweetalert.css' />"), $("head").append("<link rel='stylesheet' type='text/css' href='../css/jquery.flipster.min.css' />");

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
    "#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form, #popup_form_water"
  ).on("submit", function (n) {
    n.preventDefault(), setTimeout(e, 100);

    var val_select = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("[name=region_id]").val();
    var val_phone = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_2]").cleanVal();
    var val_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_1]").val();
    var val_email = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_3]").val();
    var val_emailNew = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_9]").val();

    var reg_name = val_name.match(/^[a-zа-яA-ZА-ЯёїіҐґЇІЁЄє\-\.' ]{1,30}$/u);
    if (!val_name || !val_select || !val_phone) {
      swal("Заполните поля формы");
      // console.log(`test1`);
      return;
    }
    // console.log(`test2`);

    if (val_select == "not_set" || !val_select) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#error_choos_region").fadeIn("slow");
    } else if (val_phone == "") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#error_choos_phone").fadeIn("slow");
    } else if (!reg_name) {
      alert("Введите корректное имя!");
    } else {
      var leed_phone = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_2]").cleanVal();
      var leed_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_1]").val();
      var leed_email = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_3]").val();
      var label_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=label_id]").val();
      var clientip = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#clientip").val();
      var email = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input[name=field_9]").val();
      var partnerInfo = partner.get_all_data();

      if (!clientip) {
        var rand = 2 - 0.5 + Math.random() * (255 - 2 + 1);
        rand = Math.round(rand);
        clientip = "99.99.99." + rand;
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#error_choos_region").fadeOut("slow");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#error_choos_phone").fadeOut("slow");
      // console.log(email, `email`);

      let response = "";
      for (let i = 0; i < 2; i++) {
        response = grecaptcha.getResponse(i);
        // console.log(response);
        if (response) break;
      }

      if (response.length === 0) {
        swal("Заполните капчу");
        return;
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "/controller/CreateLead.php",
        method: "POST",
        data: {
          leed_phone: leed_phone,
          leed_name: leed_name,
          leed_email: leed_email,
          email: email,
          leed_region_id: val_select,
          label_id: label_id,
          client_ip: clientip,
          "g-recaptcha-response": response,
          ...partnerInfo,
        },
        success: function (data) {
          parent.$.fancybox.close();
          is_forms_was_touched = false;
          _fbq.push("track", "Lead");
          var timeOne = new Date();
          var curetime = timeOne.getHours();
          var cureday = timeOne.getDay();
          var curemin = timeOne.getMinutes();
          var day = new Array(7);
          day[0] = "Восскресенье";
          day[1] = "Понедельник";
          day[2] = "Вторник";
          day[3] = "Среда";
          day[4] = "Четверг";
          day[5] = "Пятница";
          day[6] = "Суббота";
          curemin = curemin > 9 ? curemin : "0" + curemin;
          if (day[cureday] == day[0]) {
            swal(
              "Спасибо за заявку!",
              "Извините сегодня у нас выходной день, наши менеджеры свяжуться с вами в " +
                day[1],
              "success"
            );
          } else if (
            (day[cureday] == day[6] && curetime <= 9 && curemin <= 59) ||
            (curetime >= 16 && curemin <= 59 && day[cureday] == day[6])
          ) {
            swal(
              "Спасибо за заявку!",
              "Извините, наш офис уже не работает. График работы в субботу с 9 до 16:00, наши менеджеры свяжутся с вами в " +
                day[1],
              "success"
            );
          } else if (
            ((curetime >= 18 && curemin >= 0) ||
              (curetime <= 7 && curemin <= 59)) &&
            day[cureday] != day[6]
          ) {
            swal(
              "Спасибо за заявку!",
              "К сожалению, сегодня мы уже не работаем! Наш график работы: Пн-Пт с 8:00-18:00, в Сб: с 9:00 до 16:00! Мы свяжемся с вами в рабочее время",
              "success"
            );
          } else {
            swal(
              "Спасибо за заявку!",
              "Наши специалисты свяжутся с Вами в ближайшее время",
              "success"
            ),
              (a.value = ""),
              (phone.value = "");
          }
          jQuery(
            "#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form"
          )[0].reset();
        },
        error: function (xhr, textStatus, error) {
          // swal("что то пошло не так!");
          swal(
            "Вибачте ведуться технічні роботи, найближчим часом робота сервісу буде відновленно. Для подання заявки скористуйтесь телефоном гарячої лінії"
          );
        },
      });

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(
        "#popup_main_form, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form"
      ).trigger("reset"),
        setTimeout(i, 1e3);
    }
  }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#date_zakaz").mask("00/00/0000"),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-toggle="tooltip"]').tooltip(),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz_form").submit(function () {
      var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz").val();
      var date = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#date_zakaz").val();
      var arrDate = date.split("/");
      var data = {
        num_zakaz: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz").val(),
        year: arrDate[2],
        month: arrDate[1],
        day: arrDate[0],
      };
      if (date.length < 10) {
        alert("Пожалуйста введите дату в формате 'дд.мм.гггг'");
        return;
      }
      if ("" != e)
        return (
          jquery__WEBPACK_IMPORTED_MODULE_0___default().post(
            "https://dealer.steko.com.ua/tracking.php",
            data,
            function (e, i) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
                var b = JSON.parse(e);
                if (b.message === "error") {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#modal-zakaz").html("<div>" + b.message + "<div>");
                }
                if (b.message === "not_found") {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#modal-zakaz").html("<div>Нет такого заказа<div>");
                } else {
                  var arr = [
                    "Номер заказа: " + b.data.num_order,
                    "Дата заказа: " + b.data.date_add,
                    "Дата оплаты: " + b.data.date_pay,
                    "Дата изготовления: " + b.data.date_factory,
                    "Дата/Время доставки: " + b.data.date_time_delivery,
                    "Тел. Водителя: " + b.data.driver,
                    "Адрес доставки: " + b.data.city,
                    "Статус заказа: " + b.data.status,
                  ];
                  let mess = "";
                  // console.log(b.data.num_order);
                  window.numberZakaz = b.data.num_order;
                  window.dateZakaz = b.data.date_add;
                  window.isRollet = b.data.isRollet;
                  for (i = 0; i < arr.length; i++) {
                    mess += arr[i] + "<br>";
                  }
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#modal-zakaz").html("<div>" + mess + "<div>");
                }
                jquery__WEBPACK_IMPORTED_MODULE_0___default().fancybox.open({
                  src: "#found_order",
                });
              });
            }
          ),
          !1
        );
      alert("Пожалуйста заполните форму");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz_form .number_2").submit(function () {
      var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz").val();
      if ("" != e)
        return (
          jquery__WEBPACK_IMPORTED_MODULE_0___default().post(
            "ua/controller/tracking.php",
            {
              num_zakaz: e,
            },
            function (e, i) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tracking_wrapper").hide(),
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#status_tracking button").hide(),
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#num_zakaz_form").prepend(e);
            }
          ),
          !1
        );
      alert("Пожалуйста заполните форму");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(
      "#phone , #phone_popup, #zamer_tel, #phone_feedback, #footer_phone, #kompl_tel"
    ).mask("+38(999)999-99-99", {
      onBeforeMask: function (t, e) {
        return t.replace(/^38/g, "");
      },
      onBeforePaste: function (t, e) {
        return t.replace(/^38/g, "");
      },
    });

  var calcInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".calc_input");
  calcInput.ready(function () {
    var e = +jquery__WEBPACK_IMPORTED_MODULE_0___default()("#S").val(),
      i = +jquery__WEBPACK_IMPORTED_MODULE_0___default()("#G").val(),
      n = (e * i * 2.4).toFixed(2),
      t = (e * i * 2).toFixed(2),
      a = (n - t).toFixed(2);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shit_windows").html(n + " ₴"),
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#steko_windows").html(t + " ₴"),
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#raznica_val").html(a + " ₴");
  }),
    calcInput.keyup(function () {
      var e = +jquery__WEBPACK_IMPORTED_MODULE_0___default()("#S").val(),
        i = +jquery__WEBPACK_IMPORTED_MODULE_0___default()("#G").val(),
        n = (e * i * 2.4).toFixed(2),
        t = (e * i * 2).toFixed(2),
        a = (n - t).toFixed(2);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#shit_windows").html(n + " ₴"),
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#steko_windows").html(t + " ₴"),
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#raznica_val").html(a + " ₴");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixed_zamer, .rigger_callback").click(function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixedForm").toggle("slow");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".close_form").click(function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixedForm").hide("slow");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixedSuccess i").click(function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixedSuccess").hide("slow");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup_main").on("show.bs.modal", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#fixedForm").hide(), console.log("popup_main show event");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("ul a.page-scroll").click(function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav.navbar-nav.desktop_nav li a").removeClass("active"),
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("a.scroll_mobile").click(function () {
      if (
        (event.preventDefault(),
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname)
      ) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".navbar-toggle").click(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hamburger").click();
        var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.hash);
        if ((e = e.length ? e : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=" + this.hash.slice(1) + "]")).length)
          return (
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate(
              {
                scrollTop: e.offset().top - 57,
              },
              1e3
            ),
            !1
          );
      }
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".furni_mobile .panel-collapse").on("shown.bs.collapse", function (e) {
      var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".panel");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("html,body").animate(
        {
          scrollTop: i.offset().top - 57,
        },
        850
      );
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".furni_mobile .panel-collapse").on("hidden.bs.collapse", function (e) {
      var i = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".bs-example");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("html,body").animate(
        {
          scrollTop: i.offset().top - 57,
        },
        850
      );
    }),
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".close_mobile_furni").click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".panel-collapse").collapse("hide"),
        event.preventDefault(),
        event.stopPropagation();
    });
  let feedback = document.getElementById("feedback_form");
  if (feedback) {
    feedback.addEventListener(
      "submit",
      function (e) {
        var i = new XMLHttpRequest(),
          n = this;
        e.preventDefault(),
          "" === n.name_feedback.value ||
          n.name_feedback.value === n.defaultValue ||
          "" === n.phone_feedback.value ||
          n.phone_feedback.value === n.defaultValue
            ? alert(
                "Данные не были переданы!",
                "Пожалуйста, Заполните все поля !",
                "error"
              )
            : (i.open(
                "POST",
                "https://online.steko.com.ua/controller/feedback_form.php",
                !0
              ),
              i.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
              ),
              i.send(
                "feedName=" +
                  n.name_feedback.value +
                  "&feedPhone=" +
                  n.phone_feedback.value +
                  "&feedMsg=" +
                  n.comment_feedback.value
              ),
              (i.onreadystatechange = function () {
                4 == i.readyState &&
                  200 == i.status &&
                  (swal(
                    "Спасибо за оставленный отзыв!",
                    "Вы помогаете нам становиться ещё лучше!",
                    "success"
                  ),
                  (n.name_feedback.value = ""),
                  (n.phone_feedback.value = ""),
                  (n.comment_feedback.value = ""));
              }),
              (i.onerror = function () {}));
      },
      !1
    );
  }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ2hCO0FBQ0s7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLENBQUMsRUFBRSwrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WjZCO0FBQ0Q7QUFDckM7QUFDOEM7QUFDYjtBQUNjO0FBQ087QUFDakI7QUFDVTtBQUNPO0FBQ25CO0FBQ25DLFdBQVcsUUFBUTtBQUNuQixXQUFXLGNBQWM7QUFDekIsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTs7QUFFQSxXQUFXLCtDQUFDO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnREFBTztBQUMzQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILENBQUM7O0FBRUQsNkNBQUM7QUFDRDtBQUNBLElBQUksNkNBQUM7QUFDTCxJQUFJLDZDQUFDO0FBQ0wsR0FBRztBQUNIO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLElBQUksNkNBQUM7QUFDTDtBQUNBOztBQUVBLDZDQUFDO0FBQ0Q7QUFDQSxJQUFJLDZDQUFDO0FBQ0wsR0FBRztBQUNIO0FBQ0EsSUFBSSw2Q0FBQztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEsNkNBQUM7QUFDRDtBQUNBLElBQUksNkNBQUM7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLDZDQUFDO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBQztBQUNEO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLFVBQVUsNkNBQUM7QUFDWCxFQUFFLDZDQUFDLHVCQUF1QixzQkFBc0I7QUFDaEQsQ0FBQzs7QUFFRDs7QUFFQSw2Q0FBQztBQUNEO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLFVBQVUsNkNBQUM7QUFDWCxFQUFFLDZDQUFDLHVCQUF1QixzQkFBc0I7QUFDaEQsQ0FBQzs7QUFFRDs7QUFFQSw2Q0FBQztBQUNEO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLFVBQVUsNkNBQUM7QUFDWCxFQUFFLDZDQUFDLHVCQUF1QixzQkFBc0I7QUFDaEQsQ0FBQzs7QUFFRDs7QUFFQSw2Q0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNELDZDQUFDO0FBQ0QsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxDQUFDO0FBQ0QsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLDZDQUFDO0FBQ0QsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxDQUFDO0FBQ0QsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILENBQUM7O0FBRUQsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILENBQUM7O0FBRUQsNkNBQUM7QUFDRCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw2Q0FBQztBQUNILENBQUM7QUFDRDs7QUFFQSw2Q0FBQztBQUNELGlCQUFpQiw2Q0FBQztBQUNsQixvQkFBb0IsNkNBQUM7O0FBRXJCLEVBQUUsNkNBQUM7QUFDSCxFQUFFLDZDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSw2Q0FBQztBQUNQLElBQUksNkNBQUM7QUFDTCxHQUFHO0FBQ0gsSUFBSSw2Q0FBQztBQUNMLElBQUksNkNBQUM7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSw2Q0FBQzs7QUFFRCw2Q0FBQztBQUNELGlCQUFpQiw2Q0FBQzs7QUFFbEIsRUFBRSw2Q0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sNkNBQUM7QUFDUCxJQUFJLDZDQUFDO0FBQ0wsR0FBRztBQUNILElBQUksNkNBQUM7QUFDTCxJQUFJLDZDQUFDO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBLDZDQUFDOztBQUVELDZDQUFDO0FBQ0Q7QUFDQSxjQUFjLDZDQUFDO0FBQ2YsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILENBQUM7O0FBRUQ7O0FBRUEsNkNBQUM7O0FBRUQsNkNBQUM7QUFDRDtBQUNBLGNBQWMsNkNBQUM7QUFDZixFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxFQUFFLDZDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLDZDQUFDOztBQUVELDZDQUFDO0FBQ0Q7QUFDQSxjQUFjLDZDQUFDO0FBQ2YsRUFBRSw2Q0FBQztBQUNILEVBQUUsNkNBQUM7QUFDSCxFQUFFLDZDQUFDO0FBQ0gsRUFBRSw2Q0FBQztBQUNILENBQUM7O0FBRUQ7O0FBRUEsNkNBQUM7QUFDRCx5QkFBeUIsNkNBQUM7QUFDMUIsMEJBQTBCLDZDQUFDO0FBQzNCLGFBQWEsNkNBQUM7O0FBRWQ7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBQztBQUNqQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUFDO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxHQUFHOztBQUVILG1CQUFtQiw2Q0FBQztBQUNwQixxQkFBcUIsNkNBQUM7O0FBRXRCLGNBQWMsNkNBQUM7O0FBRWY7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBQztBQUNqQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsNkNBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0Es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QUFDTCxjQUFjLDZDQUFDO0FBQ2YsTUFBTSw2Q0FBQztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDZDQUFDO0FBQ0wsY0FBYyw2Q0FBQztBQUNmLE1BQU0sNkNBQUM7QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw2Q0FBQztBQUNMLE1BQU0sNkNBQUM7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZix5Q0FBeUM7QUFDekMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYm90dG9tLXNyY19qc19mLmJ1bmRsZS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGZsaXAgLSB2MS4xLjIgLSAyMDE2LTEwLTIwXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ubmF0dGF3YXQvZmxpcFxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgTmF0dGF3YXQgTm9uc3VuZzsgTGljZW5zZWQgTUlUICovXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbihmdW5jdGlvbiAoJCwgalF1ZXJ5KSB7XHJcbiAgLypcclxuICAgKiBQcml2YXRlIGF0dHJpYnV0ZXMgYW5kIG1ldGhvZFxyXG4gICAqL1xyXG5cclxuICAvLyBGdW5jdGlvbiBmcm9tIERhdmlkIFdhbHNoOiBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL2Nzcy1hbmltYXRpb24tY2FsbGJhY2sgbGljZW5zZWQgd2l0aCBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAgdmFyIHdoaWNoVHJhbnNpdGlvbkV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHQsXHJcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLFxyXG4gICAgICB0cmFuc2l0aW9ucyA9IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgICBPVHJhbnNpdGlvbjogXCJvVHJhbnNpdGlvbkVuZFwiLFxyXG4gICAgICAgIE1velRyYW5zaXRpb246IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgIFdlYmtpdFRyYW5zaXRpb246IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGZvciAodCBpbiB0cmFuc2l0aW9ucykge1xyXG4gICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qXHJcbiAgICogTW9kZWwgZGVjbGFyYXRpb25cclxuICAgKi9cclxuICB2YXIgRmxpcCA9IGZ1bmN0aW9uICgkZWwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBEZWZpbmUgZGVmYXVsdCBzZXR0aW5nXHJcbiAgICB0aGlzLnNldHRpbmcgPSB7XHJcbiAgICAgIGF4aXM6IFwieVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgdHJpZ2dlcjogXCJjbGlja1wiLFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBmb3JjZUhlaWdodDogZmFsc2UsXHJcbiAgICAgIGZvcmNlV2lkdGg6IGZhbHNlLFxyXG4gICAgICBhdXRvU2l6ZTogdHJ1ZSxcclxuICAgICAgZnJvbnQ6IFwiLmZyb250XCIsXHJcbiAgICAgIGJhY2s6IFwiLmJhY2tcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXR0aW5nID0gJC5leHRlbmQodGhpcy5zZXR0aW5nLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBvcHRpb25zLmF4aXMgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgKG9wdGlvbnMuYXhpcy50b0xvd2VyQ2FzZSgpID09PSBcInhcIiB8fCBvcHRpb25zLmF4aXMudG9Mb3dlckNhc2UoKSA9PT0gXCJ5XCIpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLmF4aXMgPSBvcHRpb25zLmF4aXMudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucmV2ZXJzZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLnJldmVyc2UgPSBvcHRpb25zLnJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyaWdnZXIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXIudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3BlZWQgPSBwYXJzZUludChvcHRpb25zLnNwZWVkKTtcclxuICAgIGlmICghaXNOYU4oc3BlZWQpKSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mb3JjZUhlaWdodCA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLmZvcmNlSGVpZ2h0ID0gb3B0aW9ucy5mb3JjZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZm9yY2VXaWR0aCA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLmZvcmNlV2lkdGggPSBvcHRpb25zLmZvcmNlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmF1dG9TaXplID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICB0aGlzLnNldHRpbmcuYXV0b1NpemUgPSBvcHRpb25zLmF1dG9TaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mcm9udCA9PT0gXCJzdHJpbmdcIiB8fCBvcHRpb25zLmZyb250IGluc3RhbmNlb2YgJCkge1xyXG4gICAgICB0aGlzLnNldHRpbmcuZnJvbnQgPSBvcHRpb25zLmZyb250O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5iYWNrID09PSBcInN0cmluZ1wiIHx8IG9wdGlvbnMuYmFjayBpbnN0YW5jZW9mICQpIHtcclxuICAgICAgdGhpcy5zZXR0aW5nLmJhY2sgPSBvcHRpb25zLmJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3RoZXIgYXR0cmlidXRlc1xyXG4gICAgdGhpcy5lbGVtZW50ID0gJGVsO1xyXG4gICAgdGhpcy5mcm9udEVsZW1lbnQgPSB0aGlzLmdldEZyb250RWxlbWVudCgpO1xyXG4gICAgdGhpcy5iYWNrRWxlbWVudCA9IHRoaXMuZ2V0QmFja0VsZW1lbnQoKTtcclxuICAgIHRoaXMuaXNGbGlwcGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5pbml0KGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICAvKlxyXG4gICAqIFB1YmxpYyBtZXRob2RzXHJcbiAgICovXHJcbiAgJC5leHRlbmQoRmxpcC5wcm90b3R5cGUsIHtcclxuICAgIGZsaXBEb25lOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAvLyBQcm92aWRpbmcgYSBuaWNlbHkgd3JhcHBlZCB1cCBjYWxsYmFjayBiZWNhdXNlIHRyYW5zZm9ybSBpcyBlc3NlbnRpYWxseSBhc3luY1xyXG4gICAgICBzZWxmLmVsZW1lbnQub25lKHdoaWNoVHJhbnNpdGlvbkV2ZW50KCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLmVsZW1lbnQudHJpZ2dlcihcImZsaXA6ZG9uZVwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2VsZi5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmbGlwOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgaWYgKHRoaXMuaXNGbGlwcGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgcm90YXRlQXhpcyA9IFwicm90YXRlXCIgKyB0aGlzLnNldHRpbmcuYXhpcztcclxuICAgICAgdGhpcy5mcm9udEVsZW1lbnQuY3NzKHtcclxuICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICByb3RhdGVBeGlzICsgKHRoaXMuc2V0dGluZy5yZXZlcnNlID8gXCIoLTE4MGRlZylcIiA6IFwiKDE4MGRlZylcIiksXHJcbiAgICAgICAgXCJ6LWluZGV4XCI6IFwiMFwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYmFja0VsZW1lbnQuY3NzKHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZUF4aXMgKyBcIigwZGVnKVwiLFxyXG4gICAgICAgIFwiei1pbmRleFwiOiBcIjFcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZmxpcERvbmUoY2FsbGJhY2spO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmZsaXA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGbGlwcGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgdmFyIHJvdGF0ZUF4aXMgPSBcInJvdGF0ZVwiICsgdGhpcy5zZXR0aW5nLmF4aXM7XHJcbiAgICAgIHRoaXMuZnJvbnRFbGVtZW50LmNzcyh7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVBeGlzICsgXCIoMGRlZylcIixcclxuICAgICAgICBcInotaW5kZXhcIjogXCIxXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5iYWNrRWxlbWVudC5jc3Moe1xyXG4gICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgIHJvdGF0ZUF4aXMgKyAodGhpcy5zZXR0aW5nLnJldmVyc2UgPyBcIigxODBkZWcpXCIgOiBcIigtMTgwZGVnKVwiKSxcclxuICAgICAgICBcInotaW5kZXhcIjogXCIwXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmZsaXBEb25lKGNhbGxiYWNrKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RnJvbnRFbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmcuZnJvbnQgaW5zdGFuY2VvZiAkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZy5mcm9udDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmZpbmQodGhpcy5zZXR0aW5nLmZyb250KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRCYWNrRWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nLmJhY2sgaW5zdGFuY2VvZiAkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZy5iYWNrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZmluZCh0aGlzLnNldHRpbmcuYmFjayk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBmYWNlcyA9IHNlbGYuZnJvbnRFbGVtZW50LmFkZChzZWxmLmJhY2tFbGVtZW50KTtcclxuICAgICAgdmFyIHJvdGF0ZUF4aXMgPSBcInJvdGF0ZVwiICsgc2VsZi5zZXR0aW5nLmF4aXM7XHJcbiAgICAgIHZhciBwZXJzcGVjdGl2ZSA9XHJcbiAgICAgICAgc2VsZi5lbGVtZW50W1xyXG4gICAgICAgICAgXCJvdXRlclwiICsgKHJvdGF0ZUF4aXMgPT09IFwicm90YXRleFwiID8gXCJIZWlnaHRcIiA6IFwiV2lkdGhcIilcclxuICAgICAgICBdKCkgKiAyO1xyXG4gICAgICB2YXIgZWxlbWVudENzcyA9IHtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogcGVyc3BlY3RpdmUsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgfTtcclxuICAgICAgdmFyIGJhY2tFbGVtZW50Q3NzID0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgIHJvdGF0ZUF4aXMgK1xyXG4gICAgICAgICAgXCIoXCIgK1xyXG4gICAgICAgICAgKHNlbGYuc2V0dGluZy5yZXZlcnNlID8gXCIxODBkZWdcIiA6IFwiLTE4MGRlZ1wiKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgICBcInotaW5kZXhcIjogXCIwXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgfTtcclxuICAgICAgdmFyIGZhY2VFbGVtZW50Q3NzID0ge1xyXG4gICAgICAgIFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiOiBcImhpZGRlblwiLFxyXG4gICAgICAgIFwidHJhbnNmb3JtLXN0eWxlXCI6IFwicHJlc2VydmUtM2RcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIFwiei1pbmRleFwiOiBcIjFcIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChzZWxmLnNldHRpbmcuZm9yY2VIZWlnaHQpIHtcclxuICAgICAgICBmYWNlcy5vdXRlckhlaWdodChzZWxmLmVsZW1lbnQuaGVpZ2h0KCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc2V0dGluZy5hdXRvU2l6ZSkge1xyXG4gICAgICAgIGZhY2VFbGVtZW50Q3NzLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VsZi5zZXR0aW5nLmZvcmNlV2lkdGgpIHtcclxuICAgICAgICBmYWNlcy5vdXRlcldpZHRoKHNlbGYuZWxlbWVudC53aWR0aCgpKTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLnNldHRpbmcuYXV0b1NpemUpIHtcclxuICAgICAgICBmYWNlRWxlbWVudENzcy53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCYWNrIGZhY2UgYWx3YXlzIHZpc2libGUgb24gQ2hyb21lICMzOVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHdpbmRvdy5jaHJvbWUgfHwgKHdpbmRvdy5JbnRsICYmIEludGwudjhCcmVha0l0ZXJhdG9yKSkgJiZcclxuICAgICAgICBcIkNTU1wiIGluIHdpbmRvd1xyXG4gICAgICApIHtcclxuICAgICAgICAvL0JsaW5rIEVuZ2luZSwgYWRkIHByZXNlcnZlLTNkIHRvIHNlbGYuZWxlbWVudFxyXG4gICAgICAgIGVsZW1lbnRDc3NbXCItd2Via2l0LXRyYW5zZm9ybS1zdHlsZVwiXSA9IFwicHJlc2VydmUtM2RcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmFjZXMuY3NzKGZhY2VFbGVtZW50Q3NzKS5maW5kKFwiKlwiKS5jc3Moe1xyXG4gICAgICAgIFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiOiBcImhpZGRlblwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuZWxlbWVudC5jc3MoZWxlbWVudENzcyk7XHJcbiAgICAgIHNlbGYuYmFja0VsZW1lbnQuY3NzKGJhY2tFbGVtZW50Q3NzKTtcclxuXHJcbiAgICAgIC8vICMzOVxyXG4gICAgICAvLyBub3QgZm9yY2luZyB3aWR0aC9oZWlnaHQgbWF5IGNhdXNlIGFuIGluaXRpYWwgZmxpcCB0byBzaG93IHVwIG9uXHJcbiAgICAgIC8vIHBhZ2UgbG9hZCB3aGVuIHdlIGFwcGx5IHRoZSBzdHlsZSB0byByZXZlcnNlIHRoZSBiYWNrZmFjZS4uLlxyXG4gICAgICAvLyBUbyBwcmV2ZW50IHNlbGYgd2UgZmlyc3QgYXBwbHkgdGhlIGJhc2ljIHN0eWxlcyBhbmQgdGhlbiBnaXZlIHRoZVxyXG4gICAgICAvLyBicm93c2VyIGEgbW9tZW50IHRvIGFwcGx5IHRoZW0uIE9ubHkgYWZ0ZXJ3YXJkcyBkbyB3ZSBhZGQgdGhlIHRyYW5zaXRpb24uXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEJ5IG5vdyB0aGUgYnJvd3NlciBzaG91bGQgaGF2ZSBhcHBsaWVkIHRoZSBzdHlsZXMsIHNvIHRoZSB0cmFuc2l0aW9uXHJcbiAgICAgICAgLy8gd2lsbCBvbmx5IGFmZmVjdCBzdWJzZXF1ZW50IGZsaXBzLlxyXG4gICAgICAgIHZhciBzcGVlZEluU2VjID0gc2VsZi5zZXR0aW5nLnNwZWVkIC8gMTAwMCB8fCAwLjU7XHJcbiAgICAgICAgZmFjZXMuY3NzKHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIFwiICsgc3BlZWRJblNlYyArIFwicyBlYXNlLW91dFwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGlzIGFsbG93cyBmbGlwIHRvIGJlIGNhbGxlZCBmb3Igc2V0dXAgd2l0aCBvbmx5IGEgY2FsbGJhY2sgKGRlZmF1bHQgc2V0dGluZ3MpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXaGlsZSB0aGlzIHVzZWQgdG8gd29yayB3aXRoIGEgc2V0VGltZW91dCBvZiB6ZXJvLCBhdCBzb21lIHBvaW50IHRoYXQgYmVjYW1lXHJcbiAgICAgICAgLy8gdW5zdGFibGUgYW5kIHRoZSBpbml0aWFsIGZsaXAgcmV0dXJuZWQuIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdW5rbm93biBidXQgd2VcclxuICAgICAgICAvLyB3aWxsIHRlbXBvcmFyaWx5IHVzZSBhIHNob3J0IGRlbGF5IG9mIDIwIHRvIG1pdGlnYXRlIHRoaXMgaXNzdWUuXHJcbiAgICAgIH0sIDIwKTtcclxuXHJcbiAgICAgIHNlbGYuYXR0YWNoRXZlbnRzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICBldmVudCA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoXHJcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnYnV0dG9uLCBhLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJylcclxuICAgICAgICApLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzRmxpcHBlZCkge1xyXG4gICAgICAgIHRoaXMudW5mbGlwKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mbGlwKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaG92ZXJIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgc2VsZi5lbGVtZW50Lm9mZihcIm1vdXNlbGVhdmUuZmxpcFwiKTtcclxuXHJcbiAgICAgIHNlbGYuZmxpcCgpO1xyXG5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50Lm9uKFwibW91c2VsZWF2ZS5mbGlwXCIsICQucHJveHkoc2VsZi51bmZsaXAsIHNlbGYpKTtcclxuICAgICAgICBpZiAoIXNlbGYuZWxlbWVudC5pcyhcIjpob3ZlclwiKSkge1xyXG4gICAgICAgICAgc2VsZi51bmZsaXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHNlbGYuc2V0dGluZy5zcGVlZCArIDE1MCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGF0dGFjaEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGlmIChzZWxmLnNldHRpbmcudHJpZ2dlciA9PT0gXCJjbGlja1wiKSB7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50Lm9uKFxyXG4gICAgICAgICAgJC5mbi50YXAgPyBcInRhcC5mbGlwXCIgOiBcImNsaWNrLmZsaXBcIixcclxuICAgICAgICAgICQucHJveHkoc2VsZi5jbGlja0hhbmRsZXIsIHNlbGYpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLnNldHRpbmcudHJpZ2dlciA9PT0gXCJob3ZlclwiKSB7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50Lm9uKFwibW91c2VlbnRlci5mbGlwXCIsICQucHJveHkoc2VsZi5ob3ZlckhhbmRsZXIsIHNlbGYpKTtcclxuICAgICAgICBzZWxmLmVsZW1lbnQub24oXCJtb3VzZWxlYXZlLmZsaXBcIiwgJC5wcm94eShzZWxmLnVuZmxpcCwgc2VsZikpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGZsaXBDaGFuZ2VkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoXCJmbGlwOmNoYW5nZVwiKTtcclxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVNldHRpbmdzOiBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICB2YXIgY2hhbmdlTmVlZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb3B0aW9ucy5heGlzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBzZWxmLnNldHRpbmcuYXhpcyAhPT0gb3B0aW9ucy5heGlzLnRvTG93ZXJDYXNlKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2VsZi5zZXR0aW5nLmF4aXMgPSBvcHRpb25zLmF4aXMudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjaGFuZ2VOZWVkZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb3B0aW9ucy5yZXZlcnNlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBzZWxmLnNldHRpbmcucmV2ZXJzZSAhPT0gb3B0aW9ucy5yZXZlcnNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNlbGYuc2V0dGluZy5yZXZlcnNlID0gb3B0aW9ucy5yZXZlcnNlO1xyXG4gICAgICAgIGNoYW5nZU5lZWRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFuZ2VOZWVkZWQpIHtcclxuICAgICAgICB2YXIgZmFjZXMgPSBzZWxmLmZyb250RWxlbWVudC5hZGQoc2VsZi5iYWNrRWxlbWVudCk7XHJcbiAgICAgICAgdmFyIHNhdmVkVHJhbnMgPSBmYWNlcy5jc3MoW1xyXG4gICAgICAgICAgXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIsXHJcbiAgICAgICAgICBcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICBcInRyYW5zaXRpb24tZHVyYXRpb25cIixcclxuICAgICAgICAgIFwidHJhbnNpdGlvbi1kZWxheVwiLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBmYWNlcy5jc3Moe1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgc2V0cyB1cCB0aGUgZmlyc3QgZmxpcCBpbiB0aGUgbmV3IGRpcmVjdGlvbiBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAgdmFyIHJvdGF0ZUF4aXMgPSBcInJvdGF0ZVwiICsgc2VsZi5zZXR0aW5nLmF4aXM7XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmlzRmxpcHBlZCkge1xyXG4gICAgICAgICAgc2VsZi5mcm9udEVsZW1lbnQuY3NzKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgIHJvdGF0ZUF4aXMgKyAoc2VsZi5zZXR0aW5nLnJldmVyc2UgPyBcIigtMTgwZGVnKVwiIDogXCIoMTgwZGVnKVwiKSxcclxuICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMFwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuYmFja0VsZW1lbnQuY3NzKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgIHJvdGF0ZUF4aXMgKyAoc2VsZi5zZXR0aW5nLnJldmVyc2UgPyBcIigxODBkZWcpXCIgOiBcIigtMTgwZGVnKVwiKSxcclxuICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMFwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByb3ZpZGluZyBhIG5pY2VseSB3cmFwcGVkIHVwIGNhbGxiYWNrIGJlY2F1c2UgdHJhbnNmb3JtIGlzIGVzc2VudGlhbGx5IGFzeW5jXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBmYWNlcy5jc3Moc2F2ZWRUcmFucyk7XHJcbiAgICAgICAgICBzZWxmLmZsaXBDaGFuZ2VkKGNhbGxiYWNrKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB3ZSBkaWRudCBoYXZlIHRvIHNldCB0aGUgYXhpcyB3ZSBjYW4ganVzdCBjYWxsIGJhY2suXHJcbiAgICAgICAgc2VsZi5mbGlwQ2hhbmdlZChjYWxsYmFjayk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8qXHJcbiAgICogalF1ZXJ5IGNvbGxlY3Rpb24gbWV0aG9kc1xyXG4gICAqL1xyXG4gICQuZm4uZmxpcCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmxpcCA9ICQodGhpcykuZGF0YShcImZsaXAtbW9kZWxcIik7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgICAgICBvcHRpb25zID0gIWZsaXAuaXNGbGlwcGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIGZsaXAuZmxpcChjYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZsaXAudW5mbGlwKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKFwiZmxpcC1tb2RlbFwiKSkge1xyXG4gICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaGFzIGJlZW4gaW5pdGlhdGVkLCBhbGwgd2UgaGF2ZSB0byBkbyBpcyBjaGFuZ2UgYXBwbGljYWJsZSBzZXR0aW5nc1xyXG4gICAgICAgICAgdmFyIGZsaXAgPSAkKHRoaXMpLmRhdGEoXCJmbGlwLW1vZGVsXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3B0aW9ucyAmJlxyXG4gICAgICAgICAgICAob3B0aW9ucy5heGlzICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZXZlcnNlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZmxpcC5jaGFuZ2VTZXR0aW5ncyhvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEluaXRcclxuICAgICAgICAgICQodGhpcykuZGF0YShcclxuICAgICAgICAgICAgXCJmbGlwLW1vZGVsXCIsXHJcbiAgICAgICAgICAgIG5ldyBGbGlwKCQodGhpcyksIG9wdGlvbnMgfHwge30sIGNhbGxiYWNrKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7XHJcbiIsImltcG9ydCAkLCB7IGdldFNjcmlwdCB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0ICogYXMgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbi8vIGltcG9ydCBmb250cyBmcm9tIFwiLi4vY3NzL2ZvbnRzLXN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgYWxsaW9uZSBmcm9tIFwiLi4vY3NzL2FsbGlub25lLm1pbi5jc3NcIjtcclxuaW1wb3J0IGFvcyBmcm9tIFwiLi4vY3NzL2Fvcy5jc3NcIjtcclxuaW1wb3J0IG5ld19zdHlsZXMgZnJvbSBcIi4uL2Nzcy9uZXctc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgZmFuY3lib3ggZnJvbSBcIi4uL2Nzcy9qcXVlcnkuZmFuY3lib3gubWluLmNzc1wiO1xyXG5pbXBvcnQgc2xpY2sgZnJvbSBcIi4uL2Nzcy9zbGljay5jc3NcIjtcclxuaW1wb3J0IHN3ZWV0YWxlcnQgZnJvbSBcIi4uL2Nzcy9zd2VldGFsZXJ0LmNzc1wiO1xyXG5pbXBvcnQgZmxpcHN0ZXIgZnJvbSBcIi4uL2Nzcy9qcXVlcnkuZmxpcHN0ZXIubWluLmNzc1wiO1xyXG5pbXBvcnQgUGFydG5lciBmcm9tIFwiLi9QYXJ0bmVyLmpzXCI7XHJcbi8vIGltcG9ydCB7IFRhbG9uIH0gZnJvbSBcIi4vVGFsb24uanNcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlTGVhZHMgfSBmcm9tIFwiLi9jcmF0ZUxlYWRzXCI7XHJcbi8vIGltcG9ydCB7IHZhbGlkYXRlUmVDYXB0Y2hhIH0gZnJvbSBcIi4vY2FwdGNoYVwiO1xyXG4vLyBpbXBvcnQgZmFuY3lib3ggZnJvbSBcIi4vanF1ZXJ5LmZhbmN5Ym94Lm1pbi5qc1wiO1xyXG4vLyBpbXBvcnQgYnV0dG9uIGZyb20gXCIuL0J1dHRvbl9kaXNjb3VudFwiO1xyXG5cclxud2luZG93LiQgPSAkO1xyXG4vLyBpbXBvcnRcclxuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xyXG4gIHZhciByYW5kID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcclxuICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcclxuICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuY29uc3QgcGFydG5lciA9IG5ldyBQYXJ0bmVyKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCwgZG9jdW1lbnQuY29va2llKTtcclxubGV0IGlzX2Zvcm1zX3dhc190b3VjaGVkID0gZmFsc2U7XHJcblxyXG4vL25ldyBkZXNpZ25cclxuXHJcbi8vIENvb2tpZVxyXG5cclxudmFyICQkY29va2llRGlzY2xhaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY29va2llLWRpc2NsYWltZXJcIik7XHJcblxyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llRGlzY2xhaW1lclwiKSkge1xyXG4gICQkY29va2llRGlzY2xhaW1lci5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG59XHJcblxyXG4kJGNvb2tpZURpc2NsYWltZXJcclxuICAucXVlcnlTZWxlY3RvcihcIi5jb29raWVfX2J1dHRvblwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVEaXNjbGFpbWVyXCIsIHRydWUpO1xyXG4gICAgJCRjb29raWVEaXNjbGFpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4vLyBDb29raWUgZW5kXHJcblxyXG4kKFwiLnRvcC1uYXZfX21lbnUgbGlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5hY3RpdmUtbGlua1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1saW5rXCIpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmUtbGlua1wiKTtcclxufSk7XHJcblxyXG4kKFwiLmxhbS13cmFwcGVyIGFcIikuaG92ZXIoXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKFwiLmNhcHRpb25cIikuYWRkQ2xhc3MoXCJjYXB0aW9uLWhvdmVyXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImxhbS1ob3ZlclwiKTtcclxuICB9LFxyXG4gIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZChcIi5jYXB0aW9uXCIpLnN0b3AodHJ1ZSkucmVtb3ZlQ2xhc3MoXCJjYXB0aW9uLWhvdmVyXCIpO1xyXG4gICAgJCh0aGlzKS5zdG9wKHRydWUpLnJlbW92ZUNsYXNzKFwibGFtLWhvdmVyXCIpO1xyXG4gIH1cclxuKTtcclxuXHJcbiQoXCIuYXNzb3J0bWVudC1pdGVtXCIpLmhvdmVyKFxyXG4gIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZChcIi5jYXB0aW9uXCIpLmFkZENsYXNzKFwiYXNzb3J0bWVudC1iYWNrXCIpO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKFwiLmNhcHRpb25cIikuc3RvcCh0cnVlKS5yZW1vdmVDbGFzcyhcImFzc29ydG1lbnQtYmFja1wiKTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBob3ZlciBnYWxsZXJ5XHJcblxyXG4kKFwiLmdhbGxlcnktc2xpZGVyIGFcIikuaG92ZXIoXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKFwiLmdhbGxlcnktYmFja1wiKS5hZGRDbGFzcyhcImdhbGxlcnktYmFjay1vblwiKTtcclxuICB9LFxyXG4gIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuZmluZChcIi5nYWxsZXJ5LWJhY2tcIikuc3RvcCh0cnVlKS5yZW1vdmVDbGFzcyhcImdhbGxlcnktYmFjay1vblwiKTtcclxuICB9XHJcbik7XHJcblxyXG4vL2xhbmd1YWdlIHBhZ2UgY29sb3IgaW4gbW9iXHJcblxyXG4vL1Ntb290aCBQYWdlIFNjcm9sbFxyXG5cclxuJChcImhlYWRlciAuanMtbWVudS1zbGlkZVwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXHJcbiAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgJChcImJvZHksaHRtbFwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0b3AgLSA5MCB9LCAxNTAwKTtcclxufSk7XHJcblxyXG4vL1Ntb290aCBQYWdlIFNjcm9sbCBNb2JpbGUgVmVyc2lvblxyXG5cclxuJChcIi5qcy1tb2ItbGlua1wiKS5vbihcImNsaWNrXCIsIFwiLnNjcm9sbFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXHJcbiAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgJChcImJvZHksaHRtbFwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0b3AgLSA3MCB9LCAxNTAwKTtcclxufSk7XHJcblxyXG4vL1Ntb290aCBQYWdlIFNjcm9sbCBpbiBGb290ZXJcclxuXHJcbiQoXCJmb290ZXJcIikub24oXCJjbGlja1wiLCBcIi5zY3JvbGwtZm9vdGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAkKFwiYm9keSxodG1sXCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHRvcCAtIDkwIH0sIDE1MDApO1xyXG59KTtcclxuXHJcbi8vIEpxdWVyeSBGbGlwIENhcmRcclxuXHJcbiQoXCIuY2FyZFwiKS5mbGlwKHtcclxuICB0cmlnZ2VyOiBcIm1hbnVhbFwiLFxyXG59KTtcclxuJChcIi5jYXJkIC5mbGlwLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmNhcmRcIikuZmxpcChmYWxzZSk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KFwiLmNhcmRcIikuZmxpcCh0cnVlKTtcclxufSk7XHJcbiQoXCIuY2FyZC1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLmNsb3Nlc3QoXCIuY2FyZFwiKS5mbGlwKGZhbHNlKTtcclxufSk7XHJcblxyXG4vLyBNT0JJTEUgTUVOVVxyXG4kKFwiLmpzLW1lbnVJY29uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICQoXCIuanMtbWVudVwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbn0pO1xyXG4kKFwiLmpzLW1lbnUtbmFtZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmpzLW1lbnVJY29uXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAkKFwiLmpzLW1lbnVcIikudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG59KTtcclxuXHJcbiQoXCIuanMtZmlsdGVyT3BlblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKFwiI29jZmlsdGVyXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAkKFwiLm1hc2tcIikudG9nZ2xlQ2xhc3MoXCIganMtbWFzay1tb2JpbGVcIik7XHJcbn0pO1xyXG5cclxuJChcIi5qcy1tb2Itc2Nyb2xsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuanMtbWVudVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgJChcIi5tYXNrXCIpLnJlbW92ZUNsYXNzKFwiIGpzLW1hc2stbW9iaWxlXCIpO1xyXG4gICQoXCIuaGVhZGVyX19tZW51XCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcclxufSk7XHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLmFjY29yZGlvbiAuYWNjb3JkaW9uLXdyYXA6Zmlyc3QtY2hpbGQgIGFcIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG59LCAwKTtcclxuLy9BY2NvcmRpb24gaW1wbGVtZW50XHJcblxyXG4kKFwiLmFjY29yZGlvbiBhXCIpLmNsaWNrKGZ1bmN0aW9uIChqKSB7XHJcbiAgdmFyIGRyb3BEb3duID0gJCh0aGlzKS5jbG9zZXN0KFwibGlcIikuZmluZChcIi5hY2NvcmRpb24tYm94XCIpO1xyXG4gIHZhciBkcm9wRG93bkltZyA9ICQodGhpcykuY2xvc2VzdChcIi5hY2NvcmRpb24td3JhcFwiKS5maW5kKFwiLmFjY29yZGlvbi1pbWdcIik7XHJcblxyXG4gICQodGhpcykuY2xvc2VzdChcIi5hY2NvcmRpb25cIikuZmluZChcIi5hY2NvcmRpb24tYm94XCIpLm5vdChkcm9wRG93bikuc2xpZGVVcCgpO1xyXG4gICQodGhpcylcclxuICAgIC5jbG9zZXN0KFwiLmFjY29yZGlvblwiKVxyXG4gICAgLmZpbmQoXCIuYWNjb3JkaW9uLWltZ1wiKVxyXG4gICAgLm5vdChkcm9wRG93bkltZylcclxuICAgIC5mYWRlT3V0KCk7XHJcblxyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuYWNjb3JkaW9uXCIpLmZpbmQoXCJhLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkcm9wRG93bi5zdG9wKGZhbHNlLCB0cnVlKS5zbGlkZVRvZ2dsZSgpO1xyXG4gIGRyb3BEb3duSW1nLnN0b3AoZmFsc2UsIHRydWUpLmZhZGVUb2dnbGUoKTtcclxuXHJcbiAgai5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8va2l0IGFjY29yZGVyb25cclxuXHJcbiQoXCIua2l0LWFjY29yZGlvbiA+IGxpOmVxKDApIGFcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikubmV4dCgpLnNsaWRlRG93bigpO1xyXG5cclxuJChcIi5raXQtYWNjb3JkaW9uIGFcIikuY2xpY2soZnVuY3Rpb24gKGopIHtcclxuICB2YXIgZHJvcERvd24gPSAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5maW5kKFwiLmtpdC13cmFwcGVyXCIpO1xyXG5cclxuICAkKHRoaXMpXHJcbiAgICAuY2xvc2VzdChcIi5raXQtYWNjb3JkaW9uXCIpXHJcbiAgICAuZmluZChcIi5raXQtd3JhcHBlclwiKVxyXG4gICAgLm5vdChkcm9wRG93bilcclxuICAgIC5zbGlkZVVwKCk7XHJcblxyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCIua2l0LWFjY29yZGlvblwiKS5maW5kKFwiYS5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd24uc3RvcChmYWxzZSwgdHJ1ZSkuc2xpZGVUb2dnbGUoKTtcclxuXHJcbiAgai5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vVGFicyBpbXBsZW1lbnRcclxuXHJcbiQoXCIudGFicy1jb250cm9sIGE6Zmlyc3RcIikuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG5cclxuJChcIi50YWJzLWNvbnRyb2wgYVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgX2hyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICQoXCIudGFicy1jb250cm9sIGFcIikucmVtb3ZlQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICQoXCIudGFicy1jb250ZW50ID4gZGl2XCIpLmhpZGUoKTtcclxuICAkKF9ocmVmKS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4vL1RhYnMgbGFtaW5hdGlvblxyXG5cclxuJChcIi50YWJzLWxhbSBhOmZpcnN0XCIpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuXHJcbiQoXCIudGFicy1sYW0gYVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB2YXIgX2hyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICQoXCIudGFicy1sYW0gYVwiKS5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgJCh0aGlzKS5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgJChcIi50YWJzLWNvbnRlbnQtbGFtID4gZGl2XCIpLmhpZGUoKTtcclxuICAkKF9ocmVmKS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4vL1RhYnMgZ2xhc3NcclxuJChcIi50YWJzLWdsYXNzIGE6Zmlyc3RcIikuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG5cclxuJChcIi50YWJzLWdsYXNzIGFcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIF9ocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAkKFwiLnRhYnMtZ2xhc3MgYVwiKS5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgJCh0aGlzKS5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgJChcIi50YWJzLWNvbnRlbnQtZ2xhc3MgPiBkaXZcIikuaGlkZSgpO1xyXG4gICQoX2hyZWYpLmZhZGVJbigpO1xyXG59KTtcclxuXHJcbi8v0J/QoNCe0KTQmNCb0KzQndCr0JUg0KHQmNCh0KLQldCc0KsgU1RFS09cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBldXJvcGVTbGlkZXJXcmFwID0gJChcIi5qcy1ldXJvcGUtc2xpZGVyLXdyYXBcIik7XHJcbiAgdmFyIHVrcmFpbmVTbGlkZXJXcmFwID0gJChcIi5qcy11a3JhaW5lLXNsaWRlci13cmFwXCIpO1xyXG4gIHZhciB0YWViID0gJChcIi50YWViLXN3aXRjaFwiKTtcclxuXHJcbiAgZXVyb3BlU2xpZGVyV3JhcC5oaWRlKCk7XHJcbiAgdGFlYi5maW5kKFwiLnRhZWJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9ICR0aGlzLmF0dHIoXCJkYXRhLWRpcmVjdGlvblwiKTtcclxuXHJcbiAgICB0YWViLnJlbW92ZUNsYXNzKFwibGVmdCByaWdodFwiKS5hZGRDbGFzcyhkaXJlY3Rpb24pO1xyXG4gICAgdGFlYi5maW5kKFwiLnRhZWIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICBpZiAodGFlYi5oYXNDbGFzcyhcImxlZnRcIikpIHtcclxuICAgICAgdWtyYWluZVNsaWRlcldyYXAuc2hvdygpO1xyXG4gICAgICBldXJvcGVTbGlkZXJXcmFwLmhpZGUoKTtcclxuICAgICAgJChcIi51a3JhaW5lLXNsaWRlclwiKS5nZXQoMCkuc2xpY2suc2V0UG9zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVrcmFpbmVTbGlkZXJXcmFwLmhpZGUoKTtcclxuICAgICAgZXVyb3BlU2xpZGVyV3JhcC5zaG93KCk7XHJcbiAgICAgICQoXCIuZXVyb3BlLXNsaWRlclwiKS5nZXQoMCkuc2xpY2suc2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGFtQ2xpY2sgPSAkKFwiLmpzLWxhbVwiKTtcclxuICBjb25zdCBnbGFzc0NsaWNrID0gJChcIi5qcy1nbGFzc1wiKTtcclxuXHJcbiAgY29uc3QgbGFtID0gJChcIi5sYW0tc3dpdGNoXCIpO1xyXG5cclxuICBnbGFzc0NsaWNrLmhpZGUoKTtcclxuICBsYW0uZmluZChcIi5sYW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9ICR0aGlzLmF0dHIoXCJkYXRhLWRpcmVjdGlvblwiKTtcclxuXHJcbiAgICBsYW0ucmVtb3ZlQ2xhc3MoXCJsZWZ0IHJpZ2h0XCIpLmFkZENsYXNzKGRpcmVjdGlvbik7XHJcbiAgICBsYW0uZmluZChcIi5sYW0uYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICBpZiAobGFtLmhhc0NsYXNzKFwibGVmdFwiKSkge1xyXG4gICAgICBsYW1DbGljay5zaG93KCk7XHJcbiAgICAgIGdsYXNzQ2xpY2suaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFtQ2xpY2suaGlkZSgpO1xyXG4gICAgICBnbGFzc0NsaWNrLnNob3coKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IG1haW5TbGlkZXIgPSAkKFwiLnNsaWRlclwiKTtcclxuICBtYWluU2xpZGVyLnNsaWNrKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG4gICAgICBpID0gaSArIDE7XHJcbiAgICAgIHZhciBzbGlkZU51bWJlciA9IGkgKyAxLFxyXG4gICAgICAgIHRvdGFsU2xpZGVzID0gc2xpZGVyLnNsaWRlQ291bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJzxhIGNsYXNzPVwiY3VzdG9tLWRvdFwiIHJvbGU9XCJidXR0b25cIiB0aXRsZT1cIicgK1xyXG4gICAgICAgIHNsaWRlTnVtYmVyICtcclxuICAgICAgICBcIiBvZiBcIiArXHJcbiAgICAgICAgdG90YWxTbGlkZXMgK1xyXG4gICAgICAgICdcIj48c3BhbiBjbGFzcz1cInN0cmluZ1wiPjwvc3Bhbj48L2E+J1xyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZERvdHM6ICQoXCIuanMtbWFpblNsaWRlcl9fbmF2XCIpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYWluX3ByZXYgPSAkKFwiLmpzLW1haW4tc2xpZGVyLWxlZnRcIik7XHJcbiAgY29uc3QgbWFpbl9uZXh0ID0gJChcIi5qcy1tYWluLXNsaWRlci1yaWdodFwiKTtcclxuXHJcbiAgbWFpbl9wcmV2Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbWFpblNsaWRlci5zbGljayhcInNsaWNrUHJldlwiKTtcclxuICB9KTtcclxuXHJcbiAgbWFpbl9uZXh0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbWFpblNsaWRlci5zbGljayhcInNsaWNrTmV4dFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdWtyYWluZVNsaWRlciA9ICQoXCIudWtyYWluZS1zbGlkZXJcIik7XHJcbiAgY29uc3QgdWtyYWluZVNsaWRlcl9wcmV2ID0gJChcIi5qcy11a3JhaW5lLWFycm93X19sZWZ0XCIpO1xyXG4gIGNvbnN0IHVrcmFpbmVTbGlkZXJfbmV4dCA9ICQoXCIuanMtdWtyYWluZS1hcnJvd19fcmlnaHRcIik7XHJcblxyXG4gIHVrcmFpbmVTbGlkZXJfbmV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHVrcmFpbmVTbGlkZXIuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgfSk7XHJcblxyXG4gIHVrcmFpbmVTbGlkZXJfcHJldi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHVrcmFpbmVTbGlkZXIuc2xpY2soXCJzbGlja1ByZXZcIik7XHJcbiAgfSk7XHJcblxyXG4gIHVrcmFpbmVTbGlkZXIuc2xpY2soe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcbiAgICAgIGkgPSBpICsgMTtcclxuICAgICAgdmFyIHNsaWRlTnVtYmVyID0gaSArIDEsXHJcbiAgICAgICAgdG90YWxTbGlkZXMgPSBzbGlkZXIuc2xpZGVDb3VudDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnPGEgY2xhc3M9XCJjdXN0b20tZG90XCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiJyArXHJcbiAgICAgICAgc2xpZGVOdW1iZXIgK1xyXG4gICAgICAgIFwiIG9mIFwiICtcclxuICAgICAgICB0b3RhbFNsaWRlcyArXHJcbiAgICAgICAgJ1wiPjxzcGFuIGNsYXNzPVwic3RyaW5nXCI+PC9zcGFuPjwvYT4nXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kRG90czogJChcIi5qcy11a3JhaW5lLWRvdHNcIiksXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZXVyb3BlU2xpZGVyID0gJChcIi5ldXJvcGUtc2xpZGVyXCIpO1xyXG5cclxuICBjb25zdCBldXJvcGVTbGlkZXJfcHJldiA9ICQoXCIuanMtZXVyb3BlLWFycm93X19sZWZ0XCIpO1xyXG4gIGNvbnN0IGV1cm9wZVNsaWRlcl9uZXh0ID0gJChcIi5qcy1ldXJvcGUtYXJyb3dfX3JpZ2h0XCIpO1xyXG5cclxuICBldXJvcGVTbGlkZXJfbmV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGV1cm9wZVNsaWRlci5zbGljayhcInNsaWNrTmV4dFwiKTtcclxuICB9KTtcclxuXHJcbiAgZXVyb3BlU2xpZGVyX3ByZXYub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBldXJvcGVTbGlkZXIuc2xpY2soXCJzbGlja1ByZXZcIik7XHJcbiAgfSk7XHJcblxyXG4gIGV1cm9wZVNsaWRlci5zbGljayh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDYwMDAsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHtcclxuICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB2YXIgc2xpZGVOdW1iZXIgPSBpICsgMSxcclxuICAgICAgICB0b3RhbFNsaWRlcyA9IHNsaWRlci5zbGlkZUNvdW50O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICc8YSBjbGFzcz1cImN1c3RvbS1kb3RcIiByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCInICtcclxuICAgICAgICBzbGlkZU51bWJlciArXHJcbiAgICAgICAgXCIgb2YgXCIgK1xyXG4gICAgICAgIHRvdGFsU2xpZGVzICtcclxuICAgICAgICAnXCI+PHNwYW4gY2xhc3M9XCJzdHJpbmdcIj48L3NwYW4+PC9hPidcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhcHBlbmREb3RzOiAkKFwiLmpzLWV1cm9wZS1kb3RzXCIpLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBjb21wb25lbnRTbGlkZXIgPSAkKFwiLmNvbXBvbmVudC1zbGlkZXJcIik7XHJcblxyXG4gIGNvbXBvbmVudFNsaWRlci5zbGljayh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHtcclxuICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB2YXIgc2xpZGVOdW1iZXIgPSBpICsgMSxcclxuICAgICAgICB0b3RhbFNsaWRlcyA9IHNsaWRlci5zbGlkZUNvdW50O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICc8YSBjbGFzcz1cImN1c3RvbS1kb3RcIiByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCInICtcclxuICAgICAgICBzbGlkZU51bWJlciArXHJcbiAgICAgICAgXCIgb2YgXCIgK1xyXG4gICAgICAgIHRvdGFsU2xpZGVzICtcclxuICAgICAgICAnXCI+PHNwYW4gY2xhc3M9XCJzdHJpbmdcIj48L3NwYW4+PC9hPidcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhcHBlbmREb3RzOiAkKFwiLmpzLWNvbXBvbmVudC1kb3RzXCIpLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSAkKFwiLmpzLWdhbGxlcnlcIik7XHJcbiAgY29uc3QgZ2FsbGVyeVNsaWRlcl9wcmV2ID0gJChcIi5qcy1nYWxsZXJ5LWFycm93X19sZWZ0XCIpO1xyXG4gIGNvbnN0IGdhbGxlcnlTbGlkZXJfbmV4dCA9ICQoXCIuanMtZ2FsbGVyeS1hcnJvd19fcmlnaHRcIik7XHJcblxyXG4gIGdhbGxlcnlTbGlkZXJfbmV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGdhbGxlcnlTbGlkZXIuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGdhbGxlcnlTbGlkZXJfcHJldi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGdhbGxlcnlTbGlkZXIuc2xpY2soXCJzbGlja1ByZXZcIik7XHJcbiAgfSk7XHJcblxyXG4gIGdhbGxlcnlTbGlkZXIuc2xpY2soe1xyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICAkKFwiLmpzLXJldmlld3Mtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHtcclxuICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB2YXIgc2xpZGVOdW1iZXIgPSBpICsgMSxcclxuICAgICAgICB0b3RhbFNsaWRlcyA9IHNsaWRlci5zbGlkZUNvdW50O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICc8YSBjbGFzcz1cImN1c3RvbS1kb3RcIiByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCInICtcclxuICAgICAgICBzbGlkZU51bWJlciArXHJcbiAgICAgICAgXCIgb2YgXCIgK1xyXG4gICAgICAgIHRvdGFsU2xpZGVzICtcclxuICAgICAgICAnXCI+PHNwYW4gY2xhc3M9XCJzdHJpbmdcIj48L3NwYW4+PC9hPidcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBhcHBlbmREb3RzOiAkKFwiLmpzLXJldmlld3NTbGlkZXJfX25hdlwiKSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgJChcIi5qcy1pbXBsZW1lbnQtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcbiAgICAgIGkgPSBpICsgMTtcclxuICAgICAgdmFyIHNsaWRlTnVtYmVyID0gaSArIDEsXHJcbiAgICAgICAgdG90YWxTbGlkZXMgPSBzbGlkZXIuc2xpZGVDb3VudDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAnPGEgY2xhc3M9XCJjdXN0b20tZG90XCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiJyArXHJcbiAgICAgICAgc2xpZGVOdW1iZXIgK1xyXG4gICAgICAgIFwiIG9mIFwiICtcclxuICAgICAgICB0b3RhbFNsaWRlcyArXHJcbiAgICAgICAgJ1wiPjxzcGFuIGNsYXNzPVwic3RyaW5nXCI+PC9zcGFuPjwvYT4nXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kRG90czogJChcIi5qcy1pbXBsZW1lbnRfX25hdlwiKSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiI3BvcHVwX21haW5fZm9ybSwgI3phbWVyX3NsaWRlZm9ybSwgI2ZpcnN0X3NsaWRlX2Zvcm0sICNrb21wbGVrdHNfZm9ybSwgI2Zvb3Rlcl9jb250YWN0X2Zvcm0sICNmaXJzdF9tb2JpbGVfZm9ybSwgI3BvcHVwX2Zvcm1fd2F0ZXJcIlxyXG4gICAgKVxyXG4gICAgLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpc19mb3Jtc193YXNfdG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHJldHVybiBpc19mb3Jtc193YXNfdG91Y2hlZFxyXG4gICAgICA/IGDQktC4INC90LUg0LfQsNC70LjRiNC40LvQuCDQvdC+0LzQtdGAINC00LvRjyDQt9CyJ9GP0LfQutGDLiDQkdCw0LbQsNGU0YLQtSDQt9Cw0LrRgNC40YLQuCDRgdGC0L7RgNGW0L3QutGDP2BcclxuICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gubWF0Y2goXCJwYXJ0bmVyX2lkXCIpKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9wYXJ0bmVycy5zdGVrby5jb20udWEvYXBpL3Zpc2l0cy9jcmVhdGVcIixcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFydG5lci5nZXRfYWxsX2RhdGEoKSwgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoa2V5ID09PSBcInBhcnRuZXJfaWRcIikgdmFsdWUgPSBwYXJ0bmVyLmdldF9wYXJ0bmVyX2lkKCkucGFydG5lcl9pZDtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0pLnJlcGxhY2UoXCJwYXJ0bmVyX2lkXCIsIFwidXVpZFwiKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKFwiLmpzLWhlYWRlcl9fbG9nb1wiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIFByZXZlbnQgdGhlIGNsaWNrIGZyb20gbG9hZGluZyBocmVmXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIFNjcm9sbCBkb3duIHRvICd0aGlzQ1ZUb3BQb3NpdGlvbidcclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJzbG93XCIpO1xyXG4gICAgLy8gVGhpcyBzdG9wcyB0aGUgYW5jaG9yIGxpbmsgZnJvbSBhY3RpbmcgbGlrZSBhIG5vcm1hbCBhbmNob3IgbGlua1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgY29va2llID0gQ29va2llcy5nZXQoXCJwcm9tbzRcIik7XHJcblxyXG4gIGlmIChjb29raWUpIHtcclxuICAgIGlmIChjb29raWUgPT0gXCIzMFwiKSB7XHJcbiAgICAgICQoXCIjcG9wdXBfbWFpbl9mb3JtX3Byb21vXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI3Byb21vX3RleHRcIikuaHRtbChcItCS0Ysg0YPQttC1INC40YHQv9GL0YLQsNC70Lgg0YPQtNCw0YfRgyEg0JLQsNGI0LAg0YHQutC40LTQutCwOlwiKTtcclxuICAgICAgJChcIiNjb250X2FuaW1hdGlvblwiKS5odG1sKFwiPGltZyBzcmM9J2ltYWdlcy9wcm9tby8zMC5naWYnIGFsdD0nJz5cIik7XHJcbiAgICAgICQoXCIjY29udF9hbmltYXRpb25cIikuYXBwZW5kKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwidXNlZ2VfcHJvbW9cIj48cD7QktCw0Ygg0L/RgNC+0LzQvtC60L7QtDogJyArXHJcbiAgICAgICAgICBDb29raWVzLmdldChcImNvZFwiKSArXHJcbiAgICAgICAgICBcIjwvcD48cD7QlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINGB0LrQuNC00LrQuCDRgdC+0L7QsdGJ0LjRgtC1INC/0YDQvtC80L7QutC+0LQg0LzQtdC90LXQtNC20LXRgNGDPC9wPjwvZGl2PlwiXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGNvb2tpZSA9PSBcIjM1XCIpIHtcclxuICAgICAgJChcIiNwb3B1cF9tYWluX2Zvcm1fcHJvbW9cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjcHJvbW9fdGV4dFwiKS5odG1sKFwi0JLRiyDRg9C20LUg0LjRgdC/0YvRgtCw0LvQuCDRg9C00LDRh9GDISDQktCw0YjQsCDRgdC60LjQtNC60LA6XCIpO1xyXG4gICAgICAkKFwiI2NvbnRfYW5pbWF0aW9uXCIpLmh0bWwoXCI8aW1nIHNyYz0naW1hZ2VzL3Byb21vLzM1LmdpZicgYWx0PScnPlwiKTtcclxuICAgICAgJChcIiNjb250X2FuaW1hdGlvblwiKS5hcHBlbmQoXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJ1c2VnZV9wcm9tb1wiPjxwPtCS0LDRiCDQv9GA0L7QvNC+0LrQvtC0OiAnICtcclxuICAgICAgICAgIENvb2tpZXMuZ2V0KFwiY29kXCIpICtcclxuICAgICAgICAgIFwiPC9wPjxwPtCU0LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0YHQutC40LTQutC4INGB0L7QvtCx0YnQuNGC0LUg0L/RgNC+0LzQvtC60L7QtCDQvNC10L3QtdC00LbQtdGA0YM8L3A+PC9kaXY+XCJcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoY29va2llID09IFwiMzNcIikge1xyXG4gICAgICAkKFwiI3BvcHVwX21haW5fZm9ybV9wcm9tb1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIiNwcm9tb190ZXh0XCIpLmh0bWwoXCLQktGLINGD0LbQtSDQuNGB0L/Ri9GC0LDQu9C4INGD0LTQsNGH0YMhINCS0LDRiNCwINGB0LrQuNC00LrQsDpcIik7XHJcbiAgICAgICQoXCIjY29udF9hbmltYXRpb25cIikuaHRtbChcIjxpbWcgc3JjPSdpbWFnZXMvcHJvbW8vMzMuZ2lmJyBhbHQ9Jyc+XCIpO1xyXG4gICAgICAkKFwiI2NvbnRfYW5pbWF0aW9uXCIpLmFwcGVuZChcclxuICAgICAgICAnPGRpdiBjbGFzcz1cInVzZWdlX3Byb21vXCI+PHA+0JLQsNGIINC/0YDQvtC80L7QutC+0LQ6ICcgK1xyXG4gICAgICAgICAgQ29va2llcy5nZXQoXCJjb2RcIikgK1xyXG4gICAgICAgICAgXCI8L3A+PHA+0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDRgdC60LjQtNC60Lgg0YHQvtC+0LHRidC40YLQtSDQv9GA0L7QvNC+0LrQvtC0INC80LXQvdC10LTQttC10YDRgzwvcD48L2Rpdj5cIlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChjb29raWUgPT0gXCI0MFwiKSB7XHJcbiAgICAgICQoXCIjcG9wdXBfbWFpbl9mb3JtX3Byb21vXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI3Byb21vX3RleHRcIikuaHRtbChcItCS0Ysg0YPQttC1INC40YHQv9GL0YLQsNC70Lgg0YPQtNCw0YfRgyEg0JLQsNGI0LAg0YHQutC40LTQutCwOlwiKTtcclxuICAgICAgJChcIiNjb250X2FuaW1hdGlvblwiKS5odG1sKFwiPGltZyBzcmM9J2ltYWdlcy9wcm9tby80MC5naWYnIGFsdD0nJz5cIik7XHJcbiAgICAgICQoXCIjY29udF9hbmltYXRpb25cIikuYXBwZW5kKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwidXNlZ2VfcHJvbW9cIj48cD7QktCw0Ygg0L/RgNC+0LzQvtC60L7QtDogJyArXHJcbiAgICAgICAgICBDb29raWVzLmdldChcImNvZFwiKSArXHJcbiAgICAgICAgICBcIjwvcD48cD7QlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINGB0LrQuNC00LrQuCDRgdC+0L7QsdGJ0LjRgtC1INC/0YDQvtC80L7QutC+0LQg0LzQtdC90LXQtNC20LXRgNGDPC9wPjwvZGl2PlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgICQoXCIjcG9wdXBfbWFpbl9mb3JtX3Byb21vXCIpLnN1Ym1pdChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGNsaWVudGlwID0gJChcIiNjbGllbnRpcFwiKS52YWwoKTtcclxuICAgICAgaWYgKCFjbGllbnRpcCkge1xyXG4gICAgICAgIHZhciByYW5kID0gMiAtIDAuNSArIE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMiArIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLnJvdW5kKHJhbmQpO1xyXG4gICAgICAgIGNsaWVudGlwID0gXCI5OS45OS45OS5cIiArIHJhbmQ7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG1pbiA9IDAsXHJcbiAgICAgICAgbWF4ID0gOTksXHJcbiAgICAgICAgcmFuZG9tUHJvbW8gPSByYW5kb21JbnRlZ2VyKDUsIDEwMDAwMDAwKTtcclxuICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICAgIHZhciBwcm9tbzQ7XHJcbiAgICAgIHByb21vNCA9IDMzO1xyXG5cclxuICAgICAgdmFyIGxlZWRfcGhvbmUgPSAkKHRoaXMpXHJcbiAgICAgICAgLmZpbmQoXCIjcGhvbmVfcG9wdXBcIilcclxuICAgICAgICAudmFsKClcclxuICAgICAgICAucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgLnNsaWNlKDIpO1xyXG4gICAgICB2YXIgbGVlZF9uYW1lID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT1maWVsZF8xX3Byb21vXVwiKS52YWwoKTtcclxuICAgICAgdmFyIHZhbF9yZWdpb24gPSAkKHRoaXMpLmZpbmQoXCIjY2hvb3NlLXJlZ2lvblwiKS52YWwoKTtcclxuICAgICAgdmFyIHZhbF9lbWFpbCA9ICQodGhpcykuZmluZChcIiNlbWFpbF9mb3JtXCIpLnZhbCgpO1xyXG4gICAgICB2YXIgZGF0YVByb21vID0ge1xyXG4gICAgICAgIGxlZWRfbmFtZTogbGVlZF9uYW1lLFxyXG4gICAgICAgIGxlZWRfcGhvbmU6IGxlZWRfcGhvbmUsXHJcbiAgICAgICAgbGVlZF9yZWdpb25faWQ6IHZhbF9yZWdpb24sXHJcbiAgICAgICAgbGVlZF9lbWFpbDogdmFsX2VtYWlsLFxyXG4gICAgICAgIGxlZWRfcHJvbW9fY29kZTogcmFuZG9tUHJvbW8sXHJcbiAgICAgICAgbGVlZF9wcm9tb19kaXNjb3VudDogcHJvbW80LFxyXG4gICAgICAgIGNsaWVudF9pcDogY2xpZW50aXAsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgZGF0YV9wciA9XHJcbiAgICAgICAgJCh0aGlzKS5zZXJpYWxpemUoKSArXHJcbiAgICAgICAgXCImZmllbGRfMl9wcm9tbz1cIiArXHJcbiAgICAgICAgbGVlZF9waG9uZSArXHJcbiAgICAgICAgXCImZmllbGRfM19wcm9tbz1cIiArXHJcbiAgICAgICAgcHJvbW80ICtcclxuICAgICAgICBcIiZmaWVsZF80X3Byb21vPVwiICtcclxuICAgICAgICByYW5kb21Qcm9tbyArXHJcbiAgICAgICAgXCImZmllbGRfNl9wcm9tbz1cIiArXHJcbiAgICAgICAgY2xpZW50aXA7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cDovL2xlZWQuc3Rla28uY29tLnVhL3Rha2VkYXRhX3Byb21vLnBocCcsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYjJjLnN0ZWtvLmNvbS51YS9hcGkvdGFrZWRhdGEtcHJvbW9cIixcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiBkYXRhUHJvbW8sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L7RgtCy0LXRgiDRgSDRgdC10YDQstC10YDQsCDRgSDQv9C+0LzQvtGJ0YzRjiBhamF4XHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAkKFwiI3BvcHVwX21haW5fZm9ybV9wcm9tb1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNwcm9tb190ZXh0XCIpLmh0bWwoXCLQktCw0YjQsCDRgdC60LjQtNC60LA6XCIpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRfYW5pbWF0aW9uXCIpLmh0bWwoXCI8aW1nIHNyYz0naW1hZ2VzL3Byb21vLzMzLmdpZicgYWx0PScnPlwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5nZXQoXCJwcm9tbzRcIiwgXCIzM1wiLCB7XHJcbiAgICAgICAgICAgICAgZXhwaXJlczogMzY1LFxyXG4gICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQ29va2llcy5nZXQoXCJjb2RcIiwgcmFuZG9tUHJvbW8sIHtcclxuICAgICAgICAgICAgICBleHBpcmVzOiAzNjUsXHJcbiAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnRfYW5pbWF0aW9uXCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInVzZWdlX3Byb21vXCI+PHA+0JLQsNGIINC/0YDQvtC80L7QutC+0LQ6ICcgK1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tUHJvbW8gK1xyXG4gICAgICAgICAgICAgICAgXCI8L3A+PHA+0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDRgdC60LjQtNC60Lgg0YHQvtC+0LHRidC40YLQtSDQv9GA0L7QvNC+0LrQvtC0INC80LXQvdC10LTQttC10YDRgzwvcD48L2Rpdj5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNwb3B1cF9tYWluX2Zvcm1fcHJvbW9cIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjcHJvbW9fdGV4dFwiKS5odG1sKFwi0JLRiyDRg9C20LUg0LjRgdC/0YvRgtCw0LvQuCDRg9C00LDRh9GDIVwiKTtcclxuICAgICAgICAgICAgJChcIiNjb250X2FuaW1hdGlvblwiKS5odG1sKFxyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidXNlZ2VfcHJvbW9cIj48cD7QktGLINGD0LbQtSDQv9C+0LvRg9GH0LjQu9C4INC60L7QtCDQvdCwINGB0LrQuNC00LrRgy48L3A+PC9kaXY+J1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBlKCkge31cclxuXHJcbiAgZnVuY3Rpb24gaSgpIHt9XHJcblxyXG4gIGZ1bmN0aW9uIG4oZSkge1xyXG4gICAgZS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGUgPSAkKHRoaXMpLFxyXG4gICAgICAgIGkgPSBwYXJzZUludChlLmNoaWxkcmVuKFwiLmNkLXByaWNpbmctZmVhdHVyZXNcIikud2lkdGgoKSksXHJcbiAgICAgICAgbiA9IHBhcnNlSW50KGUud2lkdGgoKSk7XHJcbiAgICAgIGUuc2Nyb2xsTGVmdCgpID49IGkgLSBuIC0gMVxyXG4gICAgICAgID8gZS5wYXJlbnQoXCJsaVwiKS5hZGRDbGFzcyhcImlzLWVuZGVkXCIpXHJcbiAgICAgICAgOiBlLnBhcmVudChcImxpXCIpLnJlbW92ZUNsYXNzKFwiaXMtZW5kZWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHQoZSkge1xyXG4gICAgZS5hZGRDbGFzcyhcImlzLXNlbGVjdGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYShlLCBpKSB7XHJcbiAgICAkLmVhY2goZSwgZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgZSAhPSBpXHJcbiAgICAgICAgPyAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtdmlzaWJsZSBpcy1zZWxlY3RlZFwiKS5hZGRDbGFzcyhcImlzLWhpZGRlblwiKVxyXG4gICAgICAgIDogJCh0aGlzKS5hZGRDbGFzcyhcImlzLXZpc2libGVcIikucmVtb3ZlQ2xhc3MoXCJpcy1oaWRkZW4gaXMtc2VsZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vICAkKFwiaGVhZFwiKS5hcHBlbmQoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPScuLi9jc3Mvc3dlZXRhbGVydC5jc3MnIC8+XCIpLCAkKFwiaGVhZFwiKS5hcHBlbmQoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPScuLi9jc3MvanF1ZXJ5LmZsaXBzdGVyLm1pbi5jc3MnIC8+XCIpO1xyXG5cclxuICAkKFxyXG4gICAgXCIjcG9wdXBfbWFpbl9mb3JtLCAjemFtZXJfc2xpZGVmb3JtLCAjZmlyc3Rfc2xpZGVfZm9ybSwgI2tvbXBsZWt0c19mb3JtLCAjZm9vdGVyX2NvbnRhY3RfZm9ybSwgI2ZpcnN0X21vYmlsZV9mb3JtLCAjcG9wdXBfZm9ybV93YXRlclwiXHJcbiAgKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAobikge1xyXG4gICAgbi5wcmV2ZW50RGVmYXVsdCgpLCBzZXRUaW1lb3V0KGUsIDEwMCk7XHJcblxyXG4gICAgdmFyIHZhbF9zZWxlY3QgPSAkKHRoaXMpLmZpbmQoXCJbbmFtZT1yZWdpb25faWRdXCIpLnZhbCgpO1xyXG4gICAgdmFyIHZhbF9waG9uZSA9ICQodGhpcykuZmluZChcImlucHV0W25hbWU9ZmllbGRfMl1cIikuY2xlYW5WYWwoKTtcclxuICAgIHZhciB2YWxfbmFtZSA9ICQodGhpcykuZmluZChcImlucHV0W25hbWU9ZmllbGRfMV1cIikudmFsKCk7XHJcbiAgICB2YXIgdmFsX2VtYWlsID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT1maWVsZF8zXVwiKS52YWwoKTtcclxuICAgIHZhciB2YWxfZW1haWxOZXcgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFtuYW1lPWZpZWxkXzldXCIpLnZhbCgpO1xyXG5cclxuICAgIHZhciByZWdfbmFtZSA9IHZhbF9uYW1lLm1hdGNoKC9eW2EtetCwLdGPQS1a0JAt0K/RkdGX0ZbSkNKR0IfQhtCB0ITRlFxcLVxcLicgXXsxLDMwfSQvdSk7XHJcbiAgICBpZiAoIXZhbF9uYW1lIHx8ICF2YWxfc2VsZWN0IHx8ICF2YWxfcGhvbmUpIHtcclxuICAgICAgc3dhbChcItCX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvRjyDRhNC+0YDQvNGLXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgdGVzdDFgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coYHRlc3QyYCk7XHJcblxyXG4gICAgaWYgKHZhbF9zZWxlY3QgPT0gXCJub3Rfc2V0XCIgfHwgIXZhbF9zZWxlY3QpIHtcclxuICAgICAgJCh0aGlzKS5maW5kKFwiI2Vycm9yX2Nob29zX3JlZ2lvblwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSBlbHNlIGlmICh2YWxfcGhvbmUgPT0gXCJcIikge1xyXG4gICAgICAkKHRoaXMpLmZpbmQoXCIjZXJyb3JfY2hvb3NfcGhvbmVcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0gZWxzZSBpZiAoIXJlZ19uYW1lKSB7XHJcbiAgICAgIGFsZXJ0KFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdC+0LUg0LjQvNGPIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBsZWVkX3Bob25lID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT1maWVsZF8yXVwiKS5jbGVhblZhbCgpO1xyXG4gICAgICB2YXIgbGVlZF9uYW1lID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT1maWVsZF8xXVwiKS52YWwoKTtcclxuICAgICAgdmFyIGxlZWRfZW1haWwgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFtuYW1lPWZpZWxkXzNdXCIpLnZhbCgpO1xyXG4gICAgICB2YXIgbGFiZWxfaWQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFtuYW1lPWxhYmVsX2lkXVwiKS52YWwoKTtcclxuICAgICAgdmFyIGNsaWVudGlwID0gJChcIiNjbGllbnRpcFwiKS52YWwoKTtcclxuICAgICAgdmFyIGVtYWlsID0gJCh0aGlzKS5maW5kKFwiaW5wdXRbbmFtZT1maWVsZF85XVwiKS52YWwoKTtcclxuICAgICAgdmFyIHBhcnRuZXJJbmZvID0gcGFydG5lci5nZXRfYWxsX2RhdGEoKTtcclxuXHJcbiAgICAgIGlmICghY2xpZW50aXApIHtcclxuICAgICAgICB2YXIgcmFuZCA9IDIgLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKDI1NSAtIDIgKyAxKTtcclxuICAgICAgICByYW5kID0gTWF0aC5yb3VuZChyYW5kKTtcclxuICAgICAgICBjbGllbnRpcCA9IFwiOTkuOTkuOTkuXCIgKyByYW5kO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKHRoaXMpLmZpbmQoXCIjZXJyb3JfY2hvb3NfcmVnaW9uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoXCIjZXJyb3JfY2hvb3NfcGhvbmVcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVtYWlsLCBgZW1haWxgKTtcclxuXHJcbiAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgcmVzcG9uc2UgPSBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKGkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UpIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgc3dhbChcItCX0LDQv9C+0LvQvdC40YLQtSDQutCw0L/Rh9GDXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IFwiL2NvbnRyb2xsZXIvQ3JlYXRlTGVhZC5waHBcIixcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxlZWRfcGhvbmU6IGxlZWRfcGhvbmUsXHJcbiAgICAgICAgICBsZWVkX25hbWU6IGxlZWRfbmFtZSxcclxuICAgICAgICAgIGxlZWRfZW1haWw6IGxlZWRfZW1haWwsXHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBsZWVkX3JlZ2lvbl9pZDogdmFsX3NlbGVjdCxcclxuICAgICAgICAgIGxhYmVsX2lkOiBsYWJlbF9pZCxcclxuICAgICAgICAgIGNsaWVudF9pcDogY2xpZW50aXAsXHJcbiAgICAgICAgICBcImctcmVjYXB0Y2hhLXJlc3BvbnNlXCI6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgLi4ucGFydG5lckluZm8sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcGFyZW50LiQuZmFuY3lib3guY2xvc2UoKTtcclxuICAgICAgICAgIGlzX2Zvcm1zX3dhc190b3VjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBfZmJxLnB1c2goXCJ0cmFja1wiLCBcIkxlYWRcIik7XHJcbiAgICAgICAgICB2YXIgdGltZU9uZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICB2YXIgY3VyZXRpbWUgPSB0aW1lT25lLmdldEhvdXJzKCk7XHJcbiAgICAgICAgICB2YXIgY3VyZWRheSA9IHRpbWVPbmUuZ2V0RGF5KCk7XHJcbiAgICAgICAgICB2YXIgY3VyZW1pbiA9IHRpbWVPbmUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgdmFyIGRheSA9IG5ldyBBcnJheSg3KTtcclxuICAgICAgICAgIGRheVswXSA9IFwi0JLQvtGB0YHQutGA0LXRgdC10L3RjNC1XCI7XHJcbiAgICAgICAgICBkYXlbMV0gPSBcItCf0L7QvdC10LTQtdC70YzQvdC40LpcIjtcclxuICAgICAgICAgIGRheVsyXSA9IFwi0JLRgtC+0YDQvdC40LpcIjtcclxuICAgICAgICAgIGRheVszXSA9IFwi0KHRgNC10LTQsFwiO1xyXG4gICAgICAgICAgZGF5WzRdID0gXCLQp9C10YLQstC10YDQs1wiO1xyXG4gICAgICAgICAgZGF5WzVdID0gXCLQn9GP0YLQvdC40YbQsFwiO1xyXG4gICAgICAgICAgZGF5WzZdID0gXCLQodGD0LHQsdC+0YLQsFwiO1xyXG4gICAgICAgICAgY3VyZW1pbiA9IGN1cmVtaW4gPiA5ID8gY3VyZW1pbiA6IFwiMFwiICsgY3VyZW1pbjtcclxuICAgICAgICAgIGlmIChkYXlbY3VyZWRheV0gPT0gZGF5WzBdKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXHJcbiAgICAgICAgICAgICAgXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyFcIixcclxuICAgICAgICAgICAgICBcItCY0LfQstC40L3QuNGC0LUg0YHQtdCz0L7QtNC90Y8g0YMg0L3QsNGBINCy0YvRhdC+0LTQvdC+0Lkg0LTQtdC90YwsINC90LDRiNC4INC80LXQvdC10LTQttC10YDRiyDRgdCy0Y/QttGD0YLRjNGB0Y8g0YEg0LLQsNC80Lgg0LIgXCIgK1xyXG4gICAgICAgICAgICAgICAgZGF5WzFdLFxyXG4gICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAoZGF5W2N1cmVkYXldID09IGRheVs2XSAmJiBjdXJldGltZSA8PSA5ICYmIGN1cmVtaW4gPD0gNTkpIHx8XHJcbiAgICAgICAgICAgIChjdXJldGltZSA+PSAxNiAmJiBjdXJlbWluIDw9IDU5ICYmIGRheVtjdXJlZGF5XSA9PSBkYXlbNl0pXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgc3dhbChcclxuICAgICAgICAgICAgICBcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDIVwiLFxyXG4gICAgICAgICAgICAgIFwi0JjQt9Cy0LjQvdC40YLQtSwg0L3QsNGIINC+0YTQuNGBINGD0LbQtSDQvdC1INGA0LDQsdC+0YLQsNC10YIuINCT0YDQsNGE0LjQuiDRgNCw0LHQvtGC0Ysg0LIg0YHRg9Cx0LHQvtGC0YMg0YEgOSDQtNC+IDE2OjAwLCDQvdCw0YjQuCDQvNC10L3QtdC00LbQtdGA0Ysg0YHQstGP0LbRg9GC0YHRjyDRgSDQstCw0LzQuCDQsiBcIiArXHJcbiAgICAgICAgICAgICAgICBkYXlbMV0sXHJcbiAgICAgICAgICAgICAgXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICgoY3VyZXRpbWUgPj0gMTggJiYgY3VyZW1pbiA+PSAwKSB8fFxyXG4gICAgICAgICAgICAgIChjdXJldGltZSA8PSA3ICYmIGN1cmVtaW4gPD0gNTkpKSAmJlxyXG4gICAgICAgICAgICBkYXlbY3VyZWRheV0gIT0gZGF5WzZdXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgc3dhbChcclxuICAgICAgICAgICAgICBcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDIVwiLFxyXG4gICAgICAgICAgICAgIFwi0Jog0YHQvtC20LDQu9C10L3QuNGOLCDRgdC10LPQvtC00L3RjyDQvNGLINGD0LbQtSDQvdC1INGA0LDQsdC+0YLQsNC10LwhINCd0LDRiCDQs9GA0LDRhNC40Log0YDQsNCx0L7RgtGLOiDQn9C9LdCf0YIg0YEgODowMC0xODowMCwg0LIg0KHQsTog0YEgOTowMCDQtNC+IDE2OjAwISDQnNGLINGB0LLRj9C20LXQvNGB0Y8g0YEg0LLQsNC80Lgg0LIg0YDQsNCx0L7Rh9C10LUg0LLRgNC10LzRj1wiLFxyXG4gICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2FsKFxyXG4gICAgICAgICAgICAgIFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQt9Cw0Y/QstC60YMhXCIsXHJcbiAgICAgICAgICAgICAgXCLQndCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0LLRj9C20YPRgtGB0Y8g0YEg0JLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y9cIixcclxuICAgICAgICAgICAgICBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIChhLnZhbHVlID0gXCJcIiksXHJcbiAgICAgICAgICAgICAgKHBob25lLnZhbHVlID0gXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBqUXVlcnkoXHJcbiAgICAgICAgICAgIFwiI3BvcHVwX21haW5fZm9ybSwgI3phbWVyX3NsaWRlZm9ybSwgI2ZpcnN0X3NsaWRlX2Zvcm0sICNrb21wbGVrdHNfZm9ybSwgI2Zvb3Rlcl9jb250YWN0X2Zvcm0sICNmaXJzdF9tb2JpbGVfZm9ybVwiXHJcbiAgICAgICAgICApWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgdGV4dFN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgIC8vIHN3YWwoXCLRh9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6IVwiKTtcclxuICAgICAgICAgIHN3YWwoXHJcbiAgICAgICAgICAgIFwi0JLQuNCx0LDRh9GC0LUg0LLQtdC00YPRgtGM0YHRjyDRgtC10YXQvdGW0YfQvdGWINGA0L7QsdC+0YLQuCwg0L3QsNC50LHQu9C40LbRh9C40Lwg0YfQsNGB0L7QvCDRgNC+0LHQvtGC0LAg0YHQtdGA0LLRltGB0YMg0LHRg9C00LUg0LLRltC00L3QvtCy0LvQtdC90L3Qvi4g0JTQu9GPINC/0L7QtNCw0L3QvdGPINC30LDRj9Cy0LrQuCDRgdC60L7RgNC40YHRgtGD0LnRgtC10YHRjCDRgtC10LvQtdGE0L7QvdC+0Lwg0LPQsNGA0Y/Rh9C+0Zcg0LvRltC90ZbRl1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcclxuICAgICAgICBcIiNwb3B1cF9tYWluX2Zvcm0sICNmaXJzdF9zbGlkZV9mb3JtLCAja29tcGxla3RzX2Zvcm0sICNmb290ZXJfY29udGFjdF9mb3JtLCAjZmlyc3RfbW9iaWxlX2Zvcm1cIlxyXG4gICAgICApLnRyaWdnZXIoXCJyZXNldFwiKSxcclxuICAgICAgICBzZXRUaW1lb3V0KGksIDFlMyk7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgICAkKFwiI2RhdGVfemFrYXpcIikubWFzayhcIjAwLzAwLzAwMDBcIiksXHJcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpLFxyXG4gICAgJChcIiNudW1femFrYXpfZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZSA9ICQoXCIjbnVtX3pha2F6XCIpLnZhbCgpO1xyXG4gICAgICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZV96YWthelwiKS52YWwoKTtcclxuICAgICAgdmFyIGFyckRhdGUgPSBkYXRlLnNwbGl0KFwiL1wiKTtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgbnVtX3pha2F6OiAkKFwiI251bV96YWthelwiKS52YWwoKSxcclxuICAgICAgICB5ZWFyOiBhcnJEYXRlWzJdLFxyXG4gICAgICAgIG1vbnRoOiBhcnJEYXRlWzFdLFxyXG4gICAgICAgIGRheTogYXJyRGF0ZVswXSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKGRhdGUubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICBhbGVydChcItCf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC00LDRgtGDINCyINGE0L7RgNC80LDRgtC1ICfQtNC0LtC80Lwu0LPQs9Cz0LMnXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXCJcIiAhPSBlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAkLnBvc3QoXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9kZWFsZXIuc3Rla28uY29tLnVhL3RyYWNraW5nLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSBKU09OLnBhcnNlKGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGIubWVzc2FnZSA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWwtemFrYXpcIikuaHRtbChcIjxkaXY+XCIgKyBiLm1lc3NhZ2UgKyBcIjxkaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGIubWVzc2FnZSA9PT0gXCJub3RfZm91bmRcIikge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI21vZGFsLXpha2F6XCIpLmh0bWwoXCI8ZGl2PtCd0LXRgiDRgtCw0LrQvtCz0L4g0LfQsNC60LDQt9CwPGRpdj5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwi0J3QvtC80LXRgCDQt9Cw0LrQsNC30LA6IFwiICsgYi5kYXRhLm51bV9vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBcItCU0LDRgtCwINC30LDQutCw0LfQsDogXCIgKyBiLmRhdGEuZGF0ZV9hZGQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQlNCw0YLQsCDQvtC/0LvQsNGC0Ys6IFwiICsgYi5kYXRhLmRhdGVfcGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JTQsNGC0LAg0LjQt9Cz0L7RgtC+0LLQu9C10L3QuNGPOiBcIiArIGIuZGF0YS5kYXRlX2ZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQlNCw0YLQsC/QktGA0LXQvNGPINC00L7RgdGC0LDQstC60Lg6IFwiICsgYi5kYXRhLmRhdGVfdGltZV9kZWxpdmVyeSxcclxuICAgICAgICAgICAgICAgICAgICBcItCi0LXQuy4g0JLQvtC00LjRgtC10LvRjzogXCIgKyBiLmRhdGEuZHJpdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0JDQtNGA0LXRgSDQtNC+0YHRgtCw0LLQutC4OiBcIiArIGIuZGF0YS5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwi0KHRgtCw0YLRg9GBINC30LDQutCw0LfQsDogXCIgKyBiLmRhdGEuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGIuZGF0YS5udW1fb3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cubnVtYmVyWmFrYXogPSBiLmRhdGEubnVtX29yZGVyO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZGF0ZVpha2F6ID0gYi5kYXRhLmRhdGVfYWRkO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaXNSb2xsZXQgPSBiLmRhdGEuaXNSb2xsZXQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzICs9IGFycltpXSArIFwiPGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWwtemFrYXpcIikuaHRtbChcIjxkaXY+XCIgKyBtZXNzICsgXCI8ZGl2PlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogXCIjZm91bmRfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgITFcclxuICAgICAgICApO1xyXG4gICAgICBhbGVydChcItCf0L7QttCw0LvRg9C50YHRgtCwINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDXCIpO1xyXG4gICAgfSksXHJcbiAgICAkKFwiI251bV96YWthel9mb3JtIC5udW1iZXJfMlwiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZSA9ICQoXCIjbnVtX3pha2F6XCIpLnZhbCgpO1xyXG4gICAgICBpZiAoXCJcIiAhPSBlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAkLnBvc3QoXHJcbiAgICAgICAgICAgIFwidWEvY29udHJvbGxlci90cmFja2luZy5waHBcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG51bV96YWthejogZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgICAkKFwiLnRyYWNraW5nX3dyYXBwZXJcIikuaGlkZSgpLFxyXG4gICAgICAgICAgICAgICAgJChcIiNzdGF0dXNfdHJhY2tpbmcgYnV0dG9uXCIpLmhpZGUoKSxcclxuICAgICAgICAgICAgICAgICQoXCIjbnVtX3pha2F6X2Zvcm1cIikucHJlcGVuZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgICExXHJcbiAgICAgICAgKTtcclxuICAgICAgYWxlcnQoXCLQn9C+0LbQsNC70YPQudGB0YLQsCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRg1wiKTtcclxuICAgIH0pLFxyXG4gICAgJChcclxuICAgICAgXCIjcGhvbmUgLCAjcGhvbmVfcG9wdXAsICN6YW1lcl90ZWwsICNwaG9uZV9mZWVkYmFjaywgI2Zvb3Rlcl9waG9uZSwgI2tvbXBsX3RlbFwiXHJcbiAgICApLm1hc2soXCIrMzgoOTk5KTk5OS05OS05OVwiLCB7XHJcbiAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICByZXR1cm4gdC5yZXBsYWNlKC9eMzgvZywgXCJcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHQucmVwbGFjZSgvXjM4L2csIFwiXCIpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gIHZhciBjYWxjSW5wdXQgPSAkKFwiLmNhbGNfaW5wdXRcIik7XHJcbiAgY2FsY0lucHV0LnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlID0gKyQoXCIjU1wiKS52YWwoKSxcclxuICAgICAgaSA9ICskKFwiI0dcIikudmFsKCksXHJcbiAgICAgIG4gPSAoZSAqIGkgKiAyLjQpLnRvRml4ZWQoMiksXHJcbiAgICAgIHQgPSAoZSAqIGkgKiAyKS50b0ZpeGVkKDIpLFxyXG4gICAgICBhID0gKG4gLSB0KS50b0ZpeGVkKDIpO1xyXG4gICAgJChcIiNzaGl0X3dpbmRvd3NcIikuaHRtbChuICsgXCIg4oK0XCIpLFxyXG4gICAgICAkKFwiI3N0ZWtvX3dpbmRvd3NcIikuaHRtbCh0ICsgXCIg4oK0XCIpLFxyXG4gICAgICAkKFwiI3Jhem5pY2FfdmFsXCIpLmh0bWwoYSArIFwiIOKCtFwiKTtcclxuICB9KSxcclxuICAgIGNhbGNJbnB1dC5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBlID0gKyQoXCIjU1wiKS52YWwoKSxcclxuICAgICAgICBpID0gKyQoXCIjR1wiKS52YWwoKSxcclxuICAgICAgICBuID0gKGUgKiBpICogMi40KS50b0ZpeGVkKDIpLFxyXG4gICAgICAgIHQgPSAoZSAqIGkgKiAyKS50b0ZpeGVkKDIpLFxyXG4gICAgICAgIGEgPSAobiAtIHQpLnRvRml4ZWQoMik7XHJcbiAgICAgICQoXCIjc2hpdF93aW5kb3dzXCIpLmh0bWwobiArIFwiIOKCtFwiKSxcclxuICAgICAgICAkKFwiI3N0ZWtvX3dpbmRvd3NcIikuaHRtbCh0ICsgXCIg4oK0XCIpLFxyXG4gICAgICAgICQoXCIjcmF6bmljYV92YWxcIikuaHRtbChhICsgXCIg4oK0XCIpO1xyXG4gICAgfSksXHJcbiAgICAkKFwiI2ZpeGVkX3phbWVyLCAucmlnZ2VyX2NhbGxiYWNrXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIjZml4ZWRGb3JtXCIpLnRvZ2dsZShcInNsb3dcIik7XHJcbiAgICB9KSxcclxuICAgICQoXCIuY2xvc2VfZm9ybVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiI2ZpeGVkRm9ybVwiKS5oaWRlKFwic2xvd1wiKTtcclxuICAgIH0pLFxyXG4gICAgJChcIiNmaXhlZFN1Y2Nlc3MgaVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiI2ZpeGVkU3VjY2Vzc1wiKS5oaWRlKFwic2xvd1wiKTtcclxuICAgIH0pLFxyXG4gICAgJChcIiNwb3B1cF9tYWluXCIpLm9uKFwic2hvdy5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjZml4ZWRGb3JtXCIpLmhpZGUoKSwgY29uc29sZS5sb2coXCJwb3B1cF9tYWluIHNob3cgZXZlbnRcIik7XHJcbiAgICB9KSxcclxuICAgICQoXCJ1bCBhLnBhZ2Utc2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQoXCIubmF2Lm5hdmJhci1uYXYuZGVza3RvcF9uYXYgbGkgYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSksXHJcbiAgICAkKFwiYS5zY3JvbGxfbW9iaWxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSA9PVxyXG4gICAgICAgICAgdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgJiZcclxuICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpXHJcbiAgICAgICkge1xyXG4gICAgICAgICQoXCIubmF2YmFyLXRvZ2dsZVwiKS5jbGljaygpLCAkKFwiLmhhbWJ1cmdlclwiKS5jbGljaygpO1xyXG4gICAgICAgIHZhciBlID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgIGlmICgoZSA9IGUubGVuZ3RoID8gZSA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKSkubGVuZ3RoKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGUub2Zmc2V0KCkudG9wIC0gNTcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAxZTNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgITFcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgJChcIi5mdXJuaV9tb2JpbGUgLnBhbmVsLWNvbGxhcHNlXCIpLm9uKFwic2hvd24uYnMuY29sbGFwc2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIGkgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucGFuZWxcIik7XHJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IGkub2Zmc2V0KCkudG9wIC0gNTcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA4NTBcclxuICAgICAgKTtcclxuICAgIH0pLFxyXG4gICAgJChcIi5mdXJuaV9tb2JpbGUgLnBhbmVsLWNvbGxhcHNlXCIpLm9uKFwiaGlkZGVuLmJzLmNvbGxhcHNlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBpID0gJChcIi5icy1leGFtcGxlXCIpO1xyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiBpLm9mZnNldCgpLnRvcCAtIDU3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgODUwXHJcbiAgICAgICk7XHJcbiAgICB9KSxcclxuICAgICQoXCIuY2xvc2VfbW9iaWxlX2Z1cm5pXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5wYW5lbC1jb2xsYXBzZVwiKS5jb2xsYXBzZShcImhpZGVcIiksXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIGxldCBmZWVkYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlZGJhY2tfZm9ybVwiKTtcclxuICBpZiAoZmVlZGJhY2spIHtcclxuICAgIGZlZWRiYWNrLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwic3VibWl0XCIsXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGkgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcclxuICAgICAgICAgIG4gPSB0aGlzO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgIFwiXCIgPT09IG4ubmFtZV9mZWVkYmFjay52YWx1ZSB8fFxyXG4gICAgICAgICAgbi5uYW1lX2ZlZWRiYWNrLnZhbHVlID09PSBuLmRlZmF1bHRWYWx1ZSB8fFxyXG4gICAgICAgICAgXCJcIiA9PT0gbi5waG9uZV9mZWVkYmFjay52YWx1ZSB8fFxyXG4gICAgICAgICAgbi5waG9uZV9mZWVkYmFjay52YWx1ZSA9PT0gbi5kZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgPyBhbGVydChcclxuICAgICAgICAgICAgICAgIFwi0JTQsNC90L3Ri9C1INC90LUg0LHRi9C70Lgg0L/QtdGA0LXQtNCw0L3RiyFcIixcclxuICAgICAgICAgICAgICAgIFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINCX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IChpLm9wZW4oXHJcbiAgICAgICAgICAgICAgICBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9vbmxpbmUuc3Rla28uY29tLnVhL2NvbnRyb2xsZXIvZmVlZGJhY2tfZm9ybS5waHBcIixcclxuICAgICAgICAgICAgICAgICEwXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICBpLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgaS5zZW5kKFxyXG4gICAgICAgICAgICAgICAgXCJmZWVkTmFtZT1cIiArXHJcbiAgICAgICAgICAgICAgICAgIG4ubmFtZV9mZWVkYmFjay52YWx1ZSArXHJcbiAgICAgICAgICAgICAgICAgIFwiJmZlZWRQaG9uZT1cIiArXHJcbiAgICAgICAgICAgICAgICAgIG4ucGhvbmVfZmVlZGJhY2sudmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICBcIiZmZWVkTXNnPVwiICtcclxuICAgICAgICAgICAgICAgICAgbi5jb21tZW50X2ZlZWRiYWNrLnZhbHVlXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAoaS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICA0ID09IGkucmVhZHlTdGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAyMDAgPT0gaS5zdGF0dXMgJiZcclxuICAgICAgICAgICAgICAgICAgKHN3YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQodC/0LDRgdC40LHQviDQt9CwINC+0YHRgtCw0LLQu9C10L3QvdGL0Lkg0L7RgtC30YvQsiFcIixcclxuICAgICAgICAgICAgICAgICAgICBcItCS0Ysg0L/QvtC80L7Qs9Cw0LXRgtC1INC90LDQvCDRgdGC0LDQvdC+0LLQuNGC0YzRgdGPINC10YnRkSDQu9GD0YfRiNC1IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIChuLm5hbWVfZmVlZGJhY2sudmFsdWUgPSBcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgKG4ucGhvbmVfZmVlZGJhY2sudmFsdWUgPSBcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgKG4uY29tbWVudF9mZWVkYmFjay52YWx1ZSA9IFwiXCIpKTtcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAoaS5vbmVycm9yID0gZnVuY3Rpb24gKCkge30pKTtcclxuICAgICAgfSxcclxuICAgICAgITFcclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==