"use strict";

(function($) { 
  
    // fire default bpHS!
    $('#art-slider').bpHS({
		// autoPlay: true,
		duration: 3600
    });  

	var height = $('.hd-slider img').height();
	$( "#art-slider" ).css('height', height);

    $(window).resize(function() {
    	var heightResize = $('.hd-slider img').height();
		$( "#art-slider" ).css('height', heightResize);
	});
    
})(jQuery); 