$(document).ready(function () {
    "use strict";

	// Peloader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
    // ************Mean Menu
    jQuery('header .main-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // ************ Search On Click
    $(".search_btn").on("click", function(event) {
        event.preventDefault();
        $("#search").addClass("open");
        $("#search > form > input[type='search']").focus();
    });

    $("#search, #search button.close").on("click keyup", function(event) {
        if (event.target == this || event.target.className == "close" || event.keyCode == 27) {
            $(this).removeClass("open");
        }
    });

    // ************ Login popup
    $('.js-modal-show').on('click' ,function(e){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
    $('.js-modal-hide').on('click' ,function(e){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });

    // ************ Map popup
    $('#KG-Y').on('click' ,function(e){
        $('.js-modal-map').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
    $('.js-modal-hide-map').on('click' ,function(e){
        $('.js-modal-map').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
    });
          


    // ************ Video Index 3 
    $(document).on('click','.js-videoPoster',function(e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src',src);
    }

    // Contact Form
	
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
		$('#message').hide();
 		$('#submit')
			.after('')
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});

    // ************ Scroll to top 
    jQuery('.to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });


    // ************ Spoinsored Client  
    $("#sponsored_logos").owlCarousel({
        items :4,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : false,
        pagination : false, 
        autoPlay: true
    });

    //Team Carousel   
    $("#sponsored_logos_2").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : false,
        pagination : false, 
        autoPlay: true
    });


    // Special Package
    $("#courses_details_page").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    }); 

    // Special Package
    $("#latest_blog_carousel").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 3,
        loop:true,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 1)
           .addClass('active')    
        }         
    }); 
       // Special Package
    $("#courses_3").owlCarousel({
         navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    });
           // Special Package
    $("#event_slider").owlCarousel({
    	 navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 2,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    });

    // Special Package
    $("#blog_2_carousel").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    }); 
       // Special Package
    $("#blog_3_carousel").owlCarousel({
         navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
    });

	//Team Carousel   
    $("#team_01").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1000,
        paginationSpeed: 1500,
        navigation : false,
        pagination : true,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 0)
           .addClass('active')    
        } 
    });


    $('#testimonial').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      customPaging: function(slider, i) {
          return '<div class="pager_item" id=' + i + "></div>";
        }
    });

    $('.testimonial_wrapper_4').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      customPaging: function(slider, i) {
          return '<div class="pager_item" id=' + i + "></div>";
        }
    });
        

    //Testimonial Carousel (Hosting)
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<a href='#'><i class='flaticon-angle-pointing-to-left'></i></a>",
        nextArrow: "<a href='#'><i class='flaticon-angle-arrow-pointing-to-right'></i></a>",
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    }); 

    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 

    $('#slider').nivoSlider({ 
        effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15,                       // For slice animations 
        boxCols: 8,                       // For box animations 
        boxRows: 4,                       // For box animations 
        animSpeed: 500,                   // Slide transition speed 
        pauseTime: 3000,                  // How long each slide will show 
        startSlide: 0,                    // Set starting Slide (0 index) 
        directionNav: false,               // Next & Prev navigation 
        controlNav: true,                 // 1,2,3... navigation 
        controlNavThumbs: false,          // Use thumbnails for Control Nav 
        pauseOnHover: true,               // Stop animation while hovering 
        manualAdvance: false,             // Force manual transitions 
        prevText: 'Prev',                 // Prev directionNav text 
        nextText: 'Next',                 // Next directionNav text 
        randomStart: false,              // Start on a random slide 
        customPaging: function(slider, i) {
          return '<div class="pager_item" id=' + i + ">fgfgf</div>";
        }
    });

	//WOW animation   
     new WOW().init();
     
});

