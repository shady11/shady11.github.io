"use strict";

(function($) { 
  
    // fire default bpHS!
    $('#art-slider').bpHS({
		nextText : '<i class="icon-arrow-right transition"></i>',
		prevText : '<i class="icon-arrow-left transition"></i>',
		// autoPlay: true,
		duration: 3600
    });  

	var height = $('.hd-slider img').height();
	$( "#art-slider" ).css('height', height);

    $(window).resize(function() {
    	var height = $('.hd-slider img').height();
		$( "#art-slider" ).css('height', height);
	});
    
})(jQuery); 