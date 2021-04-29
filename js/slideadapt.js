jQuery("#null-null").click(function() {
    if (jQuery("#image").css("transform") == 'none') {
        jQuery("#image").css("transform", "rotate(180deg)")
    } else {
        jQuery("#image").css("transform", "")
    }
});
jQuery(document).ready(function () {
    jQuery(".text_phone_header_spander").click(function(e) {
        e.preventDefault();
        jQuery(".wrapper_phone_header").toggleClass("active_header_hpone");
    });
});
var sliderHeight = jQuery('.lSSlideWrapper').innerHeight();
jQuery('#form_main').height(sliderHeight + 50);

$(window).on('load resize', function () {
    windowChange();
});
function windowChange() {
    var w = jQuery(window).width();
    if (w >= 1141) {
        jQuery(".1-st").addClass("active");
        jQuery("#thumbs-gless").addClass("active");
        jQuery(".0-ls").removeClass("active");
        jQuery("#thumbs-lamin").appendTo("#box-1");
        jQuery("#box-1").show();
        jQuery("#textR").show();
        if (jQuery("#conteiner__box>#box-requara-320px").length == 0) {
            jQuery("#box-requara-320px").appendTo("#conteiner__box");
            jQuery("#frame_mobile_hide").attr("style", " ");
            jQuery('#mobile-320px_frame_lam').hide();
            jQuery(".shadow").show();
            jQuery("#null-null").show();
            jQuery(".font-centr").show();
        }
    }
    if (w <= 1140) {
        jQuery(".1-st").removeClass("active");
        jQuery(".0-ls").addClass("active");
        jQuery("#thumbs-lamin").appendTo("#content__right__side").addClass("tabs__content").addClass("active");
        jQuery("#thumbs-gless").appendTo("#content__right__side");
        jQuery("#thumbs-gless").removeClass("active");
        jQuery("#box-1").hide();
        jQuery("#textR").hide();
        jQuery("#frame_mobile_hide").css({"display" : "block"});

        if (w >= 751) {
            jQuery("#null-null").show();
            jQuery(".font-centr").show();
            jQuery("#box-requara-320px").appendTo("#conteiner__box");
        }

        if (w <= 750) {
            jQuery("#null-null").hide();
            jQuery("#textR").hide();
            // // jQuery("#box-1_title").hide();
            jQuery(".font-centr").hide();
            jQuery(".1-st").addClass("active");
            jQuery("#thumbs-lamin").appendTo("#mobile-320px_frame_lam");
            jQuery("#box-requara-320px").appendTo("#mobile-320px_frame_plenka_glass");
            jQuery("#thumbs-lamin").removeClass('active');
            jQuery("#thumbs-lamin").removeClass('tabs__content');
            jQuery("#thumbs-gless").addClass('active');
        }

        jQuery("#mobile-320px_frame_lam").hide();
        jQuery("#mobile-320px_frame_plenka_glass").hide();

        jQuery("#helper_mobile_1").click(function() {
            jQuery("#mobile-320px_frame_lam").show();
            jQuery("#frame_mobile_hide, .shadow").hide()
        });
        jQuery("#close").click(function() {
            jQuery("#mobile-320px_frame_lam").hide();
            jQuery("#frame_mobile_hide, .shadow").show()
        });
        jQuery("#close-2").click(function() {
            jQuery("#mobile-320px_frame_plenka_glass").hide();
            jQuery("#frame_mobile_hide, .shadow").show()
        });
        jQuery(".pad-for-btn").click(function() {
            jQuery("#mobile-320px_frame_lam, #mobile-320px_frame_plenka_glass").hide();
            jQuery("#frame_mobile_hide, .shadow").show()
        });
        jQuery("#helper_mobile_2").click(function() {
            jQuery("#mobile-320px_frame_plenka_glass").show();
            jQuery("#frame_mobile_hide, .shadow").hide()
        })
    }
   };
windowChange();
jQuery(".tabl-1").click(function() {
    jQuery(".panel3").hide();
    jQuery(".panel2").show();
    jQuery("#tabsik-2 .tabl-2").removeClass("active")
});
jQuery(".tabl-2").click(function() {
    jQuery(".panel2").hide();
    jQuery(".panel3").show();
    jQuery("#tabsik-1 .tabl-1").removeClass("active")
});
jQuery("#tabsik").on("click", ".tabl", function() {
    jQuery("#tabsik .tabl").removeClass("active");
    jQuery(this).addClass("active")
});
jQuery("#inner_furniture_blocks").on("click", ".single_item", function() {
    jQuery("#inner_furniture_blocks .single_item").removeClass("active");
    jQuery(this).addClass("active")
});
jQuery("#tabsik-1").on("click", ".tabl-1", function() {
    jQuery("#tabsik-1 .tabl-1").removeClass("active");
    jQuery(this).addClass("active")
});
jQuery("#tabsik-2").on("click", ".tabl-2", function() {
    jQuery("#tabsik-2 .tabl-2").removeClass("active");
    jQuery(this).addClass("active")
});
jQuery("#null-null").click(function() {
    jQuery("#tabsik-2 .tabl-2").removeClass("active");
    jQuery("#tabsik-1 .tabl-1").removeClass("active");
    jQuery("#tabsik .tabl").removeClass("active");
    jQuery("#lamin").attr("src", "/img/lam/simple-lam.png");
    jQuery("#gless").attr("src", "/img/gless/simple-gless.png");
    jQuery("#plenka").attr("src", "/img/plenka/simple.png")
});

(function($) {
    $(function() {
        $('div.tabs__caption').on('click', 'span:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
        });
        var tabIndex = window.location.hash.replace('#tab', '') - 1;
        if (tabIndex != -1) $('div.tabs__caption span').eq(tabIndex).click();
        // $('a[href*=#tab]').click(function() {
        //     var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
        //     $('div.tabs__caption span').eq(tabIndex).click()
        // })
    })
})(jQuery);

function l_image_gless(a) {
    document.gless_img.src = a
}

function l_image_plenka(a) {
    document.plenka_img.src = a
}

function l_image_lam(a) {
    document.lam_img.src = a
}