
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

// const partner = new Partner(document.location.search, document.cookie);
let is_forms_was_touched = false;


//new design


// Cookie

var $$cookieDisclaimer = document.querySelector('.js-cookie-disclaimer');

if (!localStorage.getItem('cookieDisclaimer')) {
    $$cookieDisclaimer.classList.add('is-active');
}

$$cookieDisclaimer.querySelector('.cookie__button').addEventListener('click', function() {
    localStorage.setItem('cookieDisclaimer', true);
    $$cookieDisclaimer.classList.remove('is-active');
});

// Cookie end

$('.top-nav__menu li').on('click', function () {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});


$('.lam-wrapper a').hover(function () {
    $(this).find('.caption').addClass("caption-hover");
    $(this).addClass("lam-hover");

}, function () {
    $(this).find('.caption').stop(true).removeClass("caption-hover");
    $(this).stop(true).removeClass("lam-hover");
});


$('.assortment-item').hover(function () {
    $(this).find('.caption').addClass("assortment-back");


}, function () {
    $(this).find('.caption').stop(true).removeClass("assortment-back");
});

// hover gallery

$('.gallery-slider a').hover(function () {
    $(this).find('.gallery-back').addClass("gallery-back-on");


}, function () {
    $(this).find('.gallery-back').stop(true).removeClass("gallery-back-on");
});


//language page color in mob


//Smooth Page Scroll

$("header .js-menu-slide").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 90}, 1500);
});

//Smooth Page Scroll Mobile Version

$(".js-mob-link").on("click", ".scroll", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});

//Smooth Page Scroll in Footer

$("footer").on("click", ".scroll-footer", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 90}, 1500);
});


// Jquery Flip Card

$(".card").flip({
    trigger: 'manual'
});
$(".card .flip-button").on("click", function(){
    $(".card").flip(false);
    $(this).closest(".card").flip(true);

});
$(".card-close").on("click", function(){
    $(this).closest(".card").flip(false);
});



// MOBILE MENU
$('.js-menuIcon').on("click", function () {
    $(this).toggleClass("open");
    $(".js-menu").toggleClass("open");
});
$('.js-menu-name').on("click", function () {
    $('.js-menuIcon').toggleClass("open");
    $(".js-menu").toggleClass("open");
});

$(".js-filterOpen").on("click", function () {
    $("#ocfilter").toggleClass("open");
    $(".mask").toggleClass(" js-mask-mobile");
});

$(".js-mob-scroll").on('click', function () {
    $(".js-menu").removeClass("open");
    $(".mask").removeClass(" js-mask-mobile");
    $(".header__menu").removeClass("open");
});


setTimeout(function () {
    $('.accordion .accordion-wrap:first-child  a').trigger('click');
}, 0);
//Accordion implement


$('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('.accordion-box');
    var dropDownImg = $(this).closest('.accordion-wrap').find('.accordion-img');

    $(this).closest('.accordion').find('.accordion-box').not(dropDown).slideUp();
    $(this).closest('.accordion').find('.accordion-img').not(dropDownImg).fadeOut();


    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    dropDownImg.stop(false, true).fadeToggle();

    j.preventDefault();

});


//kit accorderon


    $('.kit-accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.kit-accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.kit-wrapper');

        $(this).closest('.kit-accordion').find('.kit-wrapper').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.kit-accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


//Tabs implement

$(".tabs-control a:first").addClass("current");

$('.tabs-control a').click(function (e) {
    e.preventDefault();
    var _href = $(this).attr("href");
    $(".tabs-control a").removeClass("current");
    $(this).addClass("current");
    $(".tabs-content > div").hide();
    $(_href).fadeIn();
});

//Tabs lamination

$(".tabs-lam a:first").addClass("current");

$('.tabs-lam a').click(function (e) {
    e.preventDefault();
    var _href = $(this).attr("href");
    $(".tabs-lam a").removeClass("current");
    $(this).addClass("current");
    $(".tabs-content-lam > div").hide();
    $(_href).fadeIn();
});


//Tabs glass
$(".tabs-glass a:first").addClass("current");

$('.tabs-glass a').click(function (e) {
    e.preventDefault();
    var _href = $(this).attr("href");
    $(".tabs-glass a").removeClass("current");
    $(this).addClass("current");
    $(".tabs-content-glass > div").hide();
    $(_href).fadeIn();
});


//ПРОФИЛЬНЫЕ СИСТЕМЫ STEKO

$(function () {

    var europeSliderWrap = $(".js-europe-slider-wrap");
    var ukraineSliderWrap = $(".js-ukraine-slider-wrap");
    var taeb = $(".taeb-switch");

    europeSliderWrap.hide()
    taeb.find(".taeb").on("click", function () {
        var $this = $(this);
        if ($this.hasClass("active")) return;

        var direction = $this.attr("data-direction");

        taeb.removeClass("left right").addClass(direction);
        taeb.find(".taeb.active").removeClass("active");
        $this.addClass("active");
        if (taeb.hasClass("left")) {
            ukraineSliderWrap.show();
            europeSliderWrap.hide();
            $('.ukraine-slider').get(0).slick.setPosition()
        } else {
            ukraineSliderWrap.hide();
            europeSliderWrap.show();
            $('.europe-slider').get(0).slick.setPosition()
        }
    });


    const lamClick = $(".js-lam");
    const glassClick = $(".js-glass");

    const lam = $(".lam-switch");

    glassClick.hide();
    lam.find(".lam").on("click", function () {
        var $this = $(this);
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


$(document).ready(function ($) {
    const mainSlider = $('.slider');
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
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-mainSlider__nav"),
    });

    const main_prev = $('.js-main-slider-left');
    const main_next = $('.js-main-slider-right');

    main_prev.on("click", function () {
        mainSlider.slick('slickPrev');

    });

    main_next.on("click", function () {
        mainSlider.slick('slickNext');

    });


    const ukraineSlider = $('.ukraine-slider');
    const ukraineSlider_prev = $('.js-ukraine-arrow__left');
    const ukraineSlider_next = $('.js-ukraine-arrow__right');

    ukraineSlider_next.on("click", function () {
        ukraineSlider.slick('slickNext');
    });

    ukraineSlider_prev.on("click", function () {
        ukraineSlider.slick('slickPrev');
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
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-ukraine-dots"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const europeSlider = $('.europe-slider');

    const europeSlider_prev = $('.js-europe-arrow__left');
    const europeSlider_next = $('.js-europe-arrow__right');

    europeSlider_next.on("click", function () {
        europeSlider.slick('slickNext');
    });

    europeSlider_prev.on("click", function () {
        europeSlider.slick('slickPrev');
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
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-europe-dots"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var componentSlider = $('.component-slider');

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
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-component-dots"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    const gallerySlider = $('.js-gallery');
    const gallerySlider_prev = $('.js-gallery-arrow__left');
    const gallerySlider_next = $('.js-gallery-arrow__right');

    gallerySlider_next.on("click", function () {
        gallerySlider.slick('slickNext');
    });

    gallerySlider_prev.on("click", function () {
        gallerySlider.slick('slickPrev');
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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

    $('.js-reviews-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 2,
        dots: true,
        arrows: false,
        customPaging: function (slider, i) {
            i = i + 1;
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-reviewsSlider__nav"),
        responsive: [
            {
                breakpoint: 996,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-implement-slider').slick({
        // autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        customPaging: function (slider, i) {
            i = i + 1;
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"></span></a>';
        },
        appendDots: $(".js-implement__nav"),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });



    document.querySelectorAll("#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form, #popup_form_water").forEach(form => {
        form.querySelectorAll("input").forEach(input => input.addEventListener("blur", () => {
            if (input.value.length) {
                is_forms_was_touched = false;
            }
        }))
    })


    window.onbeforeunload = function (e) {
        return is_forms_was_touched ? `Ви не залишили номер для зв'язку. Бажаєте закрити сторінку?` : null;
    }

    if (document.location.search.match("partner_id")) {
        $.ajax({
            url: "https://partners.steko.com.ua/api/visits/create",
            method: 'POST',
            data: JSON.stringify(
                partner.get_all_data(), (key, value) => {
                    if (key === "partner_id") value = partner.get_partner_id().partner_id
                    return value
                }
            ).replace("partner_id", "uuid"),
            headers: {
                Accept: "text/plain; charset=utf-8",
                "Content-Type": "text/plain; charset=utf-8"
            },
            crossDomain: true
        })
    }


    $('.js-header__logo').click(function (event) {
        // Prevent the click from loading href
        event.preventDefault();

        // Scroll down to 'thisCVTopPosition'
        $('html, body').animate({scrollTop: 0}, 'slow');
        // This stops the anchor link from acting like a normal anchor link
        return false;
    });


    var cookie = $.cookie('promo4');

    if (cookie) {
        if (cookie == '30') {
            $('#popup_main_form_promo').css('display', 'none');
            $('#promo_text').html("Вы уже испытали удачу! Ваша скидка:");
            $('#cont_animation').html("<img src='images/promo/30.gif' alt=''>");
            $('#cont_animation').append('<div class="usege_promo"><p>Ваш промокод: ' + $.cookie('cod') + '</p><p>Для получения скидки сообщите промокод менеджеру</p></div>')
        } else if (cookie == '35') {
            $('#popup_main_form_promo').css('display', 'none');
            $('#promo_text').html("Вы уже испытали удачу! Ваша скидка:");
            $('#cont_animation').html("<img src='images/promo/35.gif' alt=''>");
            $('#cont_animation').append('<div class="usege_promo"><p>Ваш промокод: ' + $.cookie('cod') + '</p><p>Для получения скидки сообщите промокод менеджеру</p></div>')
        } else if (cookie == '33') {
            $('#popup_main_form_promo').css('display', 'none');
            $('#promo_text').html("Вы уже испытали удачу! Ваша скидка:");
            $('#cont_animation').html("<img src='images/promo/33.gif' alt=''>");
            $('#cont_animation').append('<div class="usege_promo"><p>Ваш промокод: ' + $.cookie('cod') + '</p><p>Для получения скидки сообщите промокод менеджеру</p></div>')
        } else if (cookie == '40') {
            $('#popup_main_form_promo').css('display', 'none');
            $('#promo_text').html("Вы уже испытали удачу! Ваша скидка:");
            $('#cont_animation').html("<img src='images/promo/40.gif' alt=''>");
            $('#cont_animation').append('<div class="usege_promo"><p>Ваш промокод: ' + $.cookie('cod') + '</p><p>Для получения скидки сообщите промокод менеджеру</p></div>')
        }
    } else {
        $('#popup_main_form_promo').submit(function (event) {
            event.preventDefault();
            var clientip = $('#clientip').val();
            if (!clientip) {
                var rand = 2 - 0.5 + Math.random() * (255 - 2 + 1)
                rand = Math.round(rand);
                clientip = "99.99.99." + rand;
            }
            ;
            var min = 0,
                max = 99,
                randomPromo = randomInteger(5, 10000000);
            var rand = Math.floor(Math.random() * (max - min)) + min;
            var promo4;
            promo4 = 33;

            var leed_phone = $(this).find("#phone_popup").val().replace(/[^0-9]/g, '').slice(2);
            var leed_name = $(this).find("input[name=field_1_promo]").val();
            var val_region = $(this).find('#choose-region').val();
            var val_email = $(this).find('#email_form').val();
            var dataPromo = {
                leed_name: leed_name,
                leed_phone: leed_phone,
                leed_region_id: val_region,
                leed_email: val_email,
                leed_promo_code: randomPromo,
                leed_promo_discount: promo4,
                client_ip: clientip
            };

            var data_pr = $(this).serialize() + '&field_2_promo=' + leed_phone + '&field_3_promo=' + promo4 + '&field_4_promo=' + randomPromo + '&field_6_promo=' + clientip;
            $.ajax({
                // url: 'http://leed.steko.com.ua/takedata_promo.php',
                url: 'https://b2c.steko.com.ua/api/takedata-promo',
                type: 'POST',
                data: dataPromo,
                success: function (data) {
                    // Получаем ответ с сервера с помощью ajax
                    if (data.message === 'success') {

                        $('#popup_main_form_promo').remove();
                        $('#promo_text').html("Ваша скидка:");
                        $('#cont_animation').html("<img src='images/promo/33.gif' alt=''>");
                        $.cookie('promo4', '33', {
                            expires: 365,
                            path: '/',
                        });
                        $.cookie('cod', randomPromo, {
                            expires: 365,
                            path: '/',
                        });
                        $('#cont_animation').append('<div class="usege_promo"><p>Ваш промокод: ' + randomPromo + '</p><p>Для получения скидки сообщите промокод менеджеру</p></div>')

                    } else {
                        $('#popup_main_form_promo').remove();
                        $('#promo_text').html("Вы уже испытали удачу!");
                        $('#cont_animation').html('<div class="usege_promo"><p>Вы уже получили код на скидку.</p></div>')
                    }
                }
            });
        });
    }
});

$(document).ready(function () {
    function e() {
    }

    function i() {
    }

    function n(e) {
        e.each(function () {
            var e = $(this),
                i = parseInt(e.children(".cd-pricing-features").width()),
                n = parseInt(e.width());
            e.scrollLeft() >= i - n - 1 ? e.parent("li").addClass("is-ended") : e.parent("li").removeClass("is-ended")
        })
    }

    function t(e) {
        e.addClass("is-selected")
    }

    function a(e, i) {
        $.each(e, function (e, n) {
            e != i ? $(this).removeClass("is-visible is-selected").addClass("is-hidden") : $(this).addClass("is-visible").removeClass("is-hidden is-selected")
        })
    }

     $("head").append("<link rel='stylesheet' type='text/css' href='../css/sweetalert.css' />"), $("head").append("<link rel='stylesheet' type='text/css' href='../css/jquery.flipster.min.css' />");
       
     $("#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form, #popup_form_water").on("submit", function (n) {

            n.preventDefault(), setTimeout(e, 100);

            var val_select = $(this).find('[name=region_id]').val();
            var val_phone = $(this).find("input[name=field_2]").cleanVal();
            var val_name = $(this).find("input[name=field_1]").val();
            var val_email = $(this).find("input[name=field_3]").val();
            var reg_name = val_name.match(/^[a-zа-яA-ZА-ЯёїіҐґЇІЁЄє\-\.' ]{1,30}$/u);
            
            if (val_select == "not_set" || !val_select) {
                $(this).find('#error_choos_region').fadeIn('slow');
            } else if (val_phone == "") {
                $(this).find('#error_choos_phone').fadeIn('slow');
            } else if (!reg_name) {
                alert("Введите корректное имя!")
            } else {
                var leed_phone = $(this).find("input[name=field_2]").cleanVal();
                var leed_name = $(this).find("input[name=field_1]").val();
                var leed_email = $(this).find("input[name=field_3]").val();
                var label_id = $(this).find("input[name=label_id]").val();
                var clientip = $('#clientip').val();

                var partnerInfo = partner.get_all_data()


                if (!clientip) {
                    var rand = 2 - 0.5 + Math.random() * (255 - 2 + 1)
                    rand = Math.round(rand);
                    clientip = "99.99.99." + rand;
                }
                $(this).find('#error_choos_region').fadeOut('slow');
                $(this).find('#error_choos_phone').fadeOut('slow');
                if( n.target.id === 'first_slide_form'){
                    var response = grecaptcha.getResponse();
                    if(response.length === 0 ){
                        alert('Заполните капчу')
                        return
                    }
                }
              
                $.ajax({
                    url: "https://b2c.steko.com.ua/api/takedata",
                    method: 'POST',
                    data: {
                        leed_phone: leed_phone,
                        leed_name: leed_name,
                        leed_email: leed_email,
                        leed_region_id: val_select,
                        label_id: label_id,
                        client_ip: clientip,
                        ...partnerInfo
                    },
                    success: function (data) {
                        parent.$.fancybox.close();
                        is_forms_was_touched = false;
                        _fbq.push('track', 'Lead')
                        var timeOne = new Date;
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
                        curemin = curemin > 9 ? curemin : '0' + curemin;
                        if (day[cureday] == day[0]) {
                            swal("Спасибо за заявку!", "Извините сегодня у нас выходной день, наши менеджеры свяжуться с вами в " + day[1], "success")
                        } else if (((day[cureday] == day[6]) && ((curetime <= 9) && (curemin <= 59))) || ((curetime >= 16) && (curemin <= 59) && (day[cureday] == day[6]))) {
                            swal("Спасибо за заявку!", "Извините, наш офис уже не работает. График работы в субботу с 9 до 16:00, наши менеджеры свяжутся с вами в " + day[1], "success")
                        } else if ((((curetime >= 18) && (curemin >= 0)) || ((curetime <= 7) && (curemin <= 59))) && ((day[cureday] != day[6]))) {
                            swal("Спасибо за заявку!", "К сожалению, сегодня мы уже не работаем! Наш график работы: Пн-Пт с 8:00-18:00, в Сб: с 9:00 до 16:00! Мы свяжемся с вами в рабочее время", "success")
                        } else {
                            swal("Спасибо за заявку!", "Наши специалисты свяжутся с Вами в ближайшее время", "success"), a.value = "", phone.value = ""
                        }
                        jQuery("#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form")[0].reset();
                    }
                });

                $("#popup_main_form, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form").trigger("reset"), setTimeout(i, 1e3)
            }
        }),
        $("#date_zakaz").mask("00/00/0000"),
        $('[data-toggle="tooltip"]').tooltip(),
            $("#num_zakaz_form").submit(function () {
        var e = $("#num_zakaz").val();
        var date = $("#date_zakaz").val()
        var arrDate = date.split('/')
        var data = {
            num_zakaz: $("#num_zakaz").val(),
            year: arrDate[2],
            month: arrDate[1],
            day: arrDate[0]
        }
        if (date.length < 10) {
            alert("Пожалуйста введите дату в формате 'дд.мм.гггг'")
            return
        }
        if ("" != e) return $.post("https://dealer.steko.com.ua/tracking.php", data, function (e, i) {
            $(function () {
                var b = JSON.parse(e);
                if (b.message === 'error') {
                    $("#modal-zakaz").html('<div>' + b.message + '<div>');
                }
                if (b.message === 'not_found') {
                    $("#modal-zakaz").html('<div>Нет такого заказа<div>');
                } else {
                    var arr = [
                        'Номер заказа: ' + b.data.num_order,
                        'Дата заказа: ' + b.data.date_add,
                        'Дата оплаты: ' + b.data.date_pay,
                        'Дата изготовления: ' + b.data.date_factory,
                        'Дата/Время доставки: ' + b.data.date_time_delivery,
                        'Тел. Водителя: ' + b.data.driver,
                        'Адрес доставки: ' + b.data.city,
                        'Статус заказа: ' + b.data.status
                    ];
                    let mess = '';
                    numberZakaz = b.data.num_order;
                    dateZakaz = b.data.date_add;
                    isRollet = b.data.isRollet;
                    for (i = 0; i < arr.length; i++) {
                        mess += arr[i] + '<br>';
                    }
                    $("#modal-zakaz").html('<div>' + mess + '<div>');
                }
                ;
                $.fancybox.open({
                    src: '#found_order'
                });
            })
        }), !1;
        alert("Пожалуйста заполните форму")
    }),
        $("#num_zakaz_form .number_2").submit(function () {
            var e = $("#num_zakaz").val();
            if ("" != e) return $.post("ua/controller/tracking.php", {
                num_zakaz: e
            }, function (e, i) {
                $(".tracking_wrapper").hide(), $("#status_tracking button").hide(), $("#num_zakaz_form").prepend(e)
            }), !1;
            alert("Пожалуйста заполните форму")
        }), $("#phone , #phone_popup, #zamer_tel, #phone_feedback, #footer_phone, #kompl_tel").mask("+38(999)999-99-99", {
        onBeforeMask: function (t, e) {
            return t.replace(/^38/g, "")
        },
        onBeforePaste: function (t, e) {
            return t.replace(/^38/g, "")
        }
    })


    var calcInput = $(".calc_input");
    calcInput.ready(function () {
        var e = +$("#S").val(),
            i = +$("#G").val(),
            n = (e * i * 2.4).toFixed(2),
            t = (e * i * 2).toFixed(2),
            a = (n - t).toFixed(2);
        $("#shit_windows").html(n + " ₴"), $("#steko_windows").html(t + " ₴"), $("#raznica_val").html(a + " ₴")
    }),
        calcInput.keyup(function () {
            var e = +$("#S").val(),
                i = +$("#G").val(),
                n = (e * i * 2.4).toFixed(2),
                t = (e * i * 2).toFixed(2),
                a = (n - t).toFixed(2);
            $("#shit_windows").html(n + " ₴"), $("#steko_windows").html(t + " ₴"), $("#raznica_val").html(a + " ₴")
        }), $("#fixed_zamer, .rigger_callback").click(function (e) {
        $("#fixedForm").toggle("slow")
    }), $(".close_form").click(function (e) {
        $("#fixedForm").hide("slow")
    }), $("#fixedSuccess i").click(function (e) {
        $("#fixedSuccess").hide("slow")
    }), $("#popup_main").on("show.bs.modal", function () {
        $("#fixedForm").hide(), console.log("popup_main show event")
    }),
        $("ul a.page-scroll").click(function (e) {

            $(".nav.navbar-nav.desktop_nav li a").removeClass("active"), $(this).addClass("active")
        }), $("a.scroll_mobile").click(function () {
        if (event.preventDefault(), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            $(".navbar-toggle").click(), $(".hamburger").click();
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
                scrollTop: e.offset().top - 57
            }, 1e3), !1
        }
    }), $(".furni_mobile .panel-collapse").on("shown.bs.collapse", function (e) {
        var i = $(this).closest(".panel");
        $("html,body").animate({
            scrollTop: i.offset().top - 57
        }, 850)
    }), $(".furni_mobile .panel-collapse").on("hidden.bs.collapse", function (e) {
        var i = $(".bs-example");
        $("html,body").animate({
            scrollTop: i.offset().top - 57
        }, 850)
    }), $(".close_mobile_furni").click(function () {
        $(".panel-collapse").collapse("hide"), event.preventDefault(), event.stopPropagation()
    }), document.getElementById("feedback_form").addEventListener("submit", function (e) {
        var i = new XMLHttpRequest,
            n = this;
        e.preventDefault(), "" === n.name_feedback.value || n.name_feedback.value === n.defaultValue || "" === n.phone_feedback.value || n.phone_feedback.value === n.defaultValue ? alert("Данные не были переданы!", "Пожалуйста, Заполните все поля !", "error") : (i.open("POST", "https://online.steko.com.ua/controller/feedback_form.php", !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send("feedName=" + n.name_feedback.value + "&feedPhone=" + n.phone_feedback.value + "&feedMsg=" + n.comment_feedback.value), i.onreadystatechange = function () {
            4 == i.readyState && 200 == i.status && (swal("Спасибо за оставленный отзыв!", "Вы помогаете нам становиться ещё лучше!", "success"), n.name_feedback.value = "", n.phone_feedback.value = "", n.comment_feedback.value = "")
        }, i.onerror = function () {
        })
    }, !1)
});



// make pdf function
$('#garant_talon').click(function () {
    const pdfTalon = new Talon();
    pdfTalon.defFonts();
    const deocument = isRollet ? pdfTalon.roleta(numberZakaz, dateZakaz) : pdfTalon.window(numberZakaz, dateZakaz);
    pdfMake.createPdf(deocument).download(`Garantiynyiy_Talon_${isRollet ? "Rolety_" : ""}Steko_${numberZakaz}`);
});

$('#garant_talon-open').click(function () {
    const pdfTalon = new Talon();
    pdfTalon.defFonts();
    const deocument = isRollet ? pdfTalon.roleta(numberZakaz, dateZakaz) : pdfTalon.window(numberZakaz, dateZakaz);
    pdfMake.createPdf(deocument).open();
});






