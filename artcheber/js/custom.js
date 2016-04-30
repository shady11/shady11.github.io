"use strict";

(function($) { 
  $(document).ready(function() {
  
    // fire default bpHS!
    $('#demo-default').bpHS({
		nextText : '<i class="icon-arrow-right transition"></i>',
		prevText : '<i class="icon-arrow-left transition"></i>',
		// autoPlay: true,
		duration: 3600
    });
    
  });
})(jQuery); 