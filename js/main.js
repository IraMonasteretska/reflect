
$(document).ready(function () {

    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('body').toggleClass('bg-active');
    });

    $('.header__menu a').click(function () {
        $('.burger').removeClass('open');
        $('.header__nav').removeClass('open');
        $('body').removeClass('bg-active');
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('shadowh');
        } else {
            $('.header').removeClass('shadowh');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('shadowh');
    } else {
        $('.header').removeClass('shadowh');
    }

});

