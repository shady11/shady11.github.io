$(function () {

    $('.index-slider--carousel').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<svg viewBox="0 0 28 29" fill="none" class="slick-next"><path d="M13.3605 27.7209L26.721 14.3605L13.3605 0.999984" stroke="black"/></svg>',
        prevArrow: '<svg viewBox="0 0 28 29" fill="none" class="slick-prev"><path d="M14.3605 0.999756L1.00001 14.3602L14.3605 27.7207" stroke="black"/></svg>'
    });

    var is_mobile = false;

    if( $('#mobileChecker').css('display')=='block') {
        is_mobile = true;
    }
    if(is_mobile){
        // Mobile Menu
        $('.top-bar .form-inline').prependTo('.mobile-form');
        $('.main-nav').prependTo('.mobile-main-nav');
        $('.nav-item--mobile').appendTo('.mobile-top-nav');
        $('.nav-item--cta .btn-primary').appendTo('.mobile-cta');

        // Top Bar
        $('.nav-link--auth').appendTo('.mobile-top-bar');
        $('.navbar-widget--wishlist, .navbar-widget--cart').appendTo('.mobile-top-bar');

        $('.mobile-menu').height($(window).height() - $('.top-bar').height());

        // Menu Toggle
        var menuToggler = $('.menu-toggler');
        menuToggler.on("click", function(){
            if($('body').hasClass('nav_is_visible') == true){
                $('body').removeClass('nav_is_visible');
                menuToggler.removeClass('close');
            }
            else{
                $('body').addClass('nav_is_visible');
                menuToggler.addClass('close');
            }
        });
    }
});