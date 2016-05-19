jQuery(document).ready(function($){

	var visionTrigger = $('.pd-3d-trigger'),
		galleryItems = $('.no-touch #pd-gallery-items').children('li'),
		galleryNavigation = $('.pd-item-navigation a'),
		decreaments = $('.cd-count-decr'),
		increaments = $('.cd-count-incr');

	//on mobile - start/end 3d vision clicking on the 3d-vision-trigger
	visionTrigger.on('click', function(){
		$this = $(this);
		if( $this.parent('li').hasClass('active') ) {
			$this.parent('li').removeClass('active');
			hideNavigation($this.parent('li').find('.pd-item-navigation'));
		} else {
			$this.parent('li').addClass('active');
			updateNavigation($this.parent('li').find('.pd-item-navigation'), $this.parent('li').find('.pd-item-wrapper'));
		}
	});

	//on desktop - update navigation visibility when hovering over the gallery images
	galleryItems.hover(
		//when mouse enters the element, show slider navigation
		function(){
			$this = $(this).children('.pd-item-wrapper');
			updateNavigation($this.siblings('nav').find('.pd-item-navigation').eq(0), $this);
		},
		//when mouse leaves the element, hide slider navigation
		function(){
			$this = $(this).children('.pd-item-wrapper');
			hideNavigation($this.siblings('nav').find('.pd-item-navigation').eq(0));
		}
	);

	//change image in the slider
	galleryNavigation.on('click', function(){
		var navigationAnchor = $(this);
			direction = navigationAnchor.text(),
			activeContainer = navigationAnchor.parents('nav').eq(0).siblings('.pd-item-wrapper');
		
		( direction=="Next") ? showNextSlide(activeContainer) : showPreviousSlide(activeContainer);
		updateNavigation(navigationAnchor.parents('.pd-item-navigation').eq(0), activeContainer);
	});

	// Decrease product count
	decreaments.each(function(){
		var target = $(this).siblings('input[type=text]');
		$(this).click(function(){
			if (parseInt(target.val()) > 1) {
				target.val(parseInt(target.val())-1);
			}			
		});
	});

	// Increase product count
	increaments.each(function(){
		var target = $(this).siblings('input[type=text]');
		$(this).click(function(){
			target.val(parseInt(target.val())+1);
		});
	});

	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var $L = 1200,
		$menu_navigation = $('#main-nav'),
		$cart_trigger = $('#cd-cart-trigger'),
		$hamburger_icon = $('#cd-hamburger-menu'),
		$lateral_cart = $('#cd-cart'),
		$shadow_layer = $('#cd-shadow-layer');

	//open lateral menu on mobile
	$hamburger_icon.on('click', function(event){
		event.preventDefault();
		//close cart panel (if it's open)
		$lateral_cart.removeClass('speed-in');
		toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
	});

	//open cart
	$cart_trigger.on('click', function(event){
		event.preventDefault();
		//close lateral menu (if it's open)
		$menu_navigation.removeClass('speed-in');
		toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
	});

	//close lateral cart or lateral menu
	$shadow_layer.on('click', function(){
		$shadow_layer.removeClass('is-visible');
		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $lateral_cart.hasClass('speed-in') ) {
			$lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$menu_navigation.removeClass('speed-in');
		} else {
			$menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$lateral_cart.removeClass('speed-in');
		}
	});

	//move #main-navigation inside header on laptop
	//insert #main-navigation after header on mobile
	move_navigation( $menu_navigation, $L);
	$(window).on('resize', function(){
		move_navigation( $menu_navigation, $L);
		
		if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
			$menu_navigation.removeClass('speed-in');
			$shadow_layer.removeClass('is-visible');
			$('body').removeClass('overflow-hidden');
		}

	});

});

function showNextSlide(container) {
	var itemToHide = container.find('.pd-item-front'),
		itemToShow = container.find('.pd-item-middle'),
		itemMiddle = container.find('.pd-item-back'),
		itemToBack = container.find('.pd-item-out').eq(0);

	itemToHide.addClass('move-right').removeClass('pd-item-front').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		itemToHide.addClass('hidden');
	});
	itemToShow.addClass('pd-item-front').removeClass('pd-item-middle');
	itemMiddle.addClass('pd-item-middle').removeClass('pd-item-back');
	itemToBack.addClass('pd-item-back').removeClass('pd-item-out');
}

function showPreviousSlide(container) {
	var itemToMiddle = container.find('.pd-item-front'),
		itemToBack = container.find('.pd-item-middle'),
		itemToShow = container.find('.move-right').slice(-1),
		itemToOut = container.find('.pd-item-back');

	itemToShow.removeClass('hidden').addClass('pd-item-front');
	itemToMiddle.removeClass('pd-item-front').addClass('pd-item-middle');
	itemToBack.removeClass('pd-item-middle').addClass('pd-item-back');
	itemToOut.removeClass('pd-item-back').addClass('pd-item-out');

	//wait until itemToShow does'n have the 'hidden' class, then remove the move-right class 
	//in this way, transition works also in the way back
	var stop = setInterval(checkClass, 100);
	
	function checkClass(){
		if( !itemToShow.hasClass('hidden') ) {
			itemToShow.removeClass('move-right');
			window.clearInterval(stop);
		}
	}
}

function updateNavigation(navigation, container) {
	var isNextActive = ( container.find('.pd-item-middle').length > 0 ) ? true : false,
		isPrevActive = 	( container.children('li').eq(0).hasClass('pd-item-front') ) ? false : true;
	(isNextActive) ? navigation.find('a').eq(1).addClass('visible') : navigation.find('a').eq(1).removeClass('visible');
	(isPrevActive) ? navigation.find('a').eq(0).addClass('visible') : navigation.find('a').eq(0).removeClass('visible');
}

function hideNavigation(navigation) {
	navigation.find('a').removeClass('visible');
}

function cartCountDecrease(target){
	target.val(target.val()+1);
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
		$navigation.appendTo('header');
	} else {
		$navigation.detach();
		$navigation.insertAfter('header');
	}
}