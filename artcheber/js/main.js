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

	var isAnimating = false,
    newLocation = '';
    firstLoad = false;
  
	//trigger smooth transition from the actual page to the new one 
	$('main').on('click', '[data-type="page-transition"]', function(event){
		event.preventDefault();
		//detect which page has been selected
		var newPage = $(this).attr('href');
		//if the page is not already being animated - trigger animation
		if( !isAnimating ) changePage(newPage, true);
		firstLoad = true;
	});

	//detect the 'popstate' event - e.g. user clicking the back button
	$(window).on('popstate', function() {
		if( firstLoad ) {
		/*
		Safari emits a popstate event on page load - check if firstLoad is true before animating
		if it's false - the page has just been loaded 
		*/
	  		var newPageArray = location.pathname.split('/'),
	    	//this is the url of the page to be loaded 
	    	newPage = newPageArray[newPageArray.length - 1];

	  		if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
		}
		firstLoad = true;
	});

	function changePage(url, bool) {
		isAnimating = true;
		// trigger page animation
		$('body').addClass('page-is-changing');
		$('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			loadNewContent(url, bool);
	  		newLocation = url;
	  		$('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		});
		//if browser doesn't support CSS transitions
		if( !transitionsSupported() ) {
		  	loadNewContent(url, bool);
		  	newLocation = url;
		}
	}

	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
		var newSection = 'art-'+url.replace('.html', '');
		var section = $('<div class="'+newSection+'"></div>');
			
		section.load(url+' > *', function(event){
		  	// load new content and replace <main> content with the new one
		  	$('main').html(section);
		  	//if browser doesn't support CSS transitions - dont wait for the end of transitions
		  	var delay = ( transitionsSupported() ) ? 1200 : 0;
		  	setTimeout(function(){
		    	//wait for the end of the transition on the loading bar before revealing the new content
		    	( section.hasClass('art-product') ) ? $('body').addClass('art-product') : $('body').removeClass('art-product');
		    	$('body').removeClass('page-is-changing');
		    	$('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		      	isAnimating = false;
		      	$('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		    });

		    	if( !transitionsSupported() ) isAnimating = false;
	  		}, delay);
		  
	  		if(url!=window.location && bool){
	    		//add the new page to the window.history
		    	//if the new page was triggered by a 'popstate' event, don't add it
		    	window.history.pushState({path: url},'',url);
		  	}
		});
	}

	function transitionsSupported() {
		return $('html').hasClass('csstransitions');
	}

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