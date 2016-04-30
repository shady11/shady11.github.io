jQuery(document).ready(function($){
	var visionTrigger = $('.pd-3d-trigger'),
		galleryItems = $('.no-touch #pd-gallery-items').children('li'),
		galleryNavigation = $('.pd-item-navigation a');

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