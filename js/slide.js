function windowSize(){
    if (jQuery(window).width() <= '767'){
        jQuery("#batn-call-back").prependTo("#wrapper-for-btn-menu").addClass("append-child");
    } else {
        jQuery("#batn-call-back").appendTo("#wrapper-for-contact").removeClass("append-child");
    }

// jQuery(window).load(windowSize); // при загрузке
// jQuery(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
// jQuery(window).on('load resize',windowSize);
};
jQuery(document).ready(windowSize);
jQuery(window).resize(windowSize);

jQuery(document).ready(function() {
    // jQuery("#null-null").click(function() {
    //     if (jQuery("#image").css("transform") == 'none') {
    //         jQuery("#image").css("transform", "rotate(180deg)")
    //     } else {
    //         jQuery("#image").css("transform", "")
    //     }
    // });
    jQuery(document).ready(function () {
        jQuery(".text_phone_header_spander").click(function(e) {
            e.preventDefault();
            jQuery(".wrapper_phone_header").toggleClass("active_header_hpone");
        });
    });
    // var sliderHeight = jQuery('.lSSlideWrapper').innerHeight();
    // jQuery('#form_main').height(sliderHeight + 50);
    // var w = jQuery(window).width();
    // if (w >= 1141) {
    //     jQuery(".1-st").addClass("active");
    //     jQuery("#thumbs-gless").addClass("active");
    //     jQuery(".0-ls").removeClass("active");
    //     jQuery("#thumbs-lamin").appendTo("#box-1");
    //     jQuery("#box-1").show();
    // }
    // if (w <= 1140) {
    //     jQuery(".1-st").removeClass("active");
    //     jQuery(".0-ls").addClass("active");
    //     jQuery("#thumbs-lamin").appendTo("#content__right__side").addClass("tabs__content").addClass("active");
    //     jQuery("#thumbs-gless").appendTo("#content__right__side");
    //     jQuery("#thumbs-gless").removeClass("active");
    //     jQuery("#box-1").hide();
    //     if (w >= 751) {
    //         jQuery("#null-null").show();
    //         jQuery(".font-centr").show();
    //         jQuery("#box-requara-320px").appendTo("#conteiner__box");
    //     }
    //     if (w <= 750) {
    //         jQuery("#null-null").hide();
    //         // // jQuery("#box-1_title").hide();
    //         jQuery(".font-centr").hide();
    //         jQuery('<span class="0-ls"><button class="knopka-0">Ламинация</button></span>').remove();
    //         jQuery(".1-st").addClass("active");
    //         jQuery("#mobile-320px_frame_lam").prepend('<span class="reauere_320_tiitle">Ламинация</span>')
    //         jQuery("#thumbs-lamin").appendTo("#mobile-320px_frame_lam");
    //         jQuery("#box-requara-320px").appendTo("#mobile-320px_frame_plenka_glass");
    //         jQuery("#thumbs-lamin").removeClass('active');
    //         jQuery("#thumbs-lamin").removeClass('tabs__content');
    //         jQuery("#thumbs-gless").addClass('active');
    //     }
    //     jQuery("#mobile-320px_frame_lam").hide();
    //     jQuery("#mobile-320px_frame_plenka_glass").hide();
    //     jQuery("#helper_mobile_1").click(function() {
    //         jQuery("#mobile-320px_frame_lam").show();
    //         jQuery("#frame_mobile_hide, .shadow").hide()
    //     });
    //     jQuery("#close").click(function() {
    //         jQuery("#mobile-320px_frame_lam").hide();
    //         jQuery("#frame_mobile_hide, .shadow").show()
    //     });
    //     jQuery("#close-2").click(function() {
    //         jQuery("#mobile-320px_frame_plenka_glass").hide();
    //         jQuery("#frame_mobile_hide, .shadow").show()
    //     });
    //     jQuery(".pad-for-btn").click(function() {
    //         jQuery("#mobile-320px_frame_lam, #mobile-320px_frame_plenka_glass").hide();
    //         jQuery("#frame_mobile_hide, .shadow").show()
    //     });
    //     jQuery("#helper_mobile_2").click(function() {
    //         jQuery("#mobile-320px_frame_plenka_glass").show();
    //         jQuery("#frame_mobile_hide, .shadow").hide()
    //     })
    // }
    // jQuery(".tabl-1").click(function() {
    //     jQuery(".panel3").hide();
    //     jQuery(".panel2").show();
    //     jQuery("#tabsik-2 .tabl-2").removeClass("active")
    // });
    // jQuery(".tabl-2").click(function() {
    //     jQuery(".panel2").hide();
    //     jQuery(".panel3").show();
    //     jQuery("#tabsik-1 .tabl-1").removeClass("active")
    // });
    // jQuery("#tabsik").on("click", ".tabl", function() {
    //     jQuery("#tabsik .tabl").removeClass("active");
    //     jQuery(this).addClass("active")
    // });
    // jQuery("#inner_furniture_blocks").on("click", ".single_item", function() {
    //     jQuery("#inner_furniture_blocks .single_item").removeClass("active");
    //     jQuery(this).addClass("active")
    // });
    // jQuery("#tabsik-1").on("click", ".tabl-1", function() {
    //     jQuery("#tabsik-1 .tabl-1").removeClass("active");
    //     jQuery(this).addClass("active")
    // });
    // jQuery("#tabsik-2").on("click", ".tabl-2", function() {
    //     jQuery("#tabsik-2 .tabl-2").removeClass("active");
    //     jQuery(this).addClass("active")
    // });
    // jQuery("#null-null").click(function() {
    //     jQuery("#tabsik-2 .tabl-2").removeClass("active");
    //     jQuery("#tabsik-1 .tabl-1").removeClass("active");
    //     jQuery("#tabsik .tabl").removeClass("active");
    //     jQuery("#lamin").attr("src", "/img/lam/simple-lam.png");
    //     jQuery("#gless").attr("src", "/img/gless/simple-gless.png");
    //     jQuery("#plenka").attr("src", "/img/plenka/simple.png")
    // });
    // jQuery('.slider8').bxSlider({
    //     mode: 'vertical',
    //     slideWidth: 370,
    //     minSlides: 5,
    //     slideMargin: 10,
    //     slideMargin: 10,
    //     infiniteLoop: false,
    //     hideControlOnEnd: true,
    //     touchEnabled: false
    // })
});
// (function($) {
//     $(function() {
//         $('div.tabs__caption').on('click', 'span:not(.active)', function() {
//             $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
//         });
//         var tabIndex = window.location.hash.replace('#tab', '') - 1;
//         if (tabIndex != -1) $('div.tabs__caption span').eq(tabIndex).click();
//         // $('a[href*=#tab]').click(function() {
//         //     var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
//         //     $('div.tabs__caption span').eq(tabIndex).click()
//         // })
//     })
// })(jQuery);
//
// function l_image_gless(a) {
//     document.gless_img.src = a
// }
//
// function l_image_plenka(a) {
//     document.plenka_img.src = a
// }
//
// function l_image_lam(a) {
//     document.lam_img.src = a
// }
/*
jQuery(".first_slide_form, .first_mobile_form, .feedback_form, .komplekts_form, .footer_contact_form, .zamer_slideform, .popup_main_form").click(function() {
    _fbq.push('track', 'Lead')
});*/
jQuery(document).ready(function(){
    _fbq.push('track', 'PageView');
});

/*jQuery(document).ready(function(){
    jQuery('#intro').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
        jQuery(".nav li:nth-child(2) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
        jQuery(".nav li:nth-child(2) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#economics_i').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(3) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(3) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#rigger').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(4) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(4) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#profile_steko').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(5) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(5) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#furniture').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(6) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(6) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#testimonials_steko').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(7) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(7) a.page-scroll").removeClass('active');
      }
    });
    jQuery('#footer_steko').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
      jQuery(".nav li:nth-child(8) a.page-scroll").addClass('active');
      } else {
        // element has gone out of viewport
      jQuery(".nav li:nth-child(8) a.page-scroll").removeClass('active');
      }
    });
});*/