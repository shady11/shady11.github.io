// Document ready
jQuery(document).ready(function($){
    var $window_width = $(window).width();

    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var $L = 992,
        $menu_navigation = $('#main-nav'),
        $hamburger_icon = $('#hamburger-menu'),
        $shadow_layer = $('#shadow-layer');

    //open lateral menu on mobile
    $hamburger_icon.on('click', function(event){
        event.preventDefault();
        $(this).toggleClass("is-active");
        toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
    });

    //close lateral cart or lateral menu
    $shadow_layer.on('click', function(){
        $shadow_layer.removeClass('is-visible');
        $hamburger_icon.removeClass("is-active");
        $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            $('body').removeClass('overflow-hidden');
        });
    });

    //move #main-navigation inside header on laptop
    //insert #main-navigation after header on mobile
    move_navigation($menu_navigation, $L);
    blocks_arrange($window_width);

    $(window).on('resize', function(){
        move_navigation( $menu_navigation, $L);
        if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
            $menu_navigation.removeClass('speed-in');
            $shadow_layer.removeClass('is-visible');
            $('body').removeClass('overflow-hidden');
        }
        $window_width = $(window).width();
        blocks_arrange($window_width);
    });

});

function blocks_arrange($window_width){
    if($window_width > 992) {
        $('.block').each(function(){
            $(this).height($(this).width());
        });
        $('.block-half').each(function(){
            $(this).height($(this).width()/2-5);
        });
        $('.block-quarter').each(function(){
            $(this).height($(this).width()-5);
        });
    } else {
        $('.block').each(function(){
            $(this).height($(this).width());
        });
    }
}

function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
    if( $lateral_panel.hasClass('speed-in') ) {
        // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            $body.removeClass('overflow-hidden');
        });
        $background_layer.removeClass('is-visible');

    } else {
        $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            $body.addClass('overflow-hidden');
        });
        $background_layer.addClass('is-visible');
    }
}

function move_navigation( $navigation, $MQ) {
    if ( $(window).width() >= $MQ ) {
        $navigation.detach();
        $navigation.appendTo('header .main-header');
    } else {
        $navigation.detach();
        $navigation.insertAfter('header');
    }
}