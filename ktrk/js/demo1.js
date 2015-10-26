(function(){

	var buttonTv = document.getElementById('cn-button-tv'),
    wrapperTv = document.getElementById('cn-wrapper-tv'),
    overlayTv = document.getElementById('cn-overlay-tv'),
    buttonRadio = document.getElementById('cn-button-radio'),
    wrapperRadio = document.getElementById('cn-wrapper-radio'),
    overlayRadio = document.getElementById('cn-overlay-radio');

	//open and close menu when the button is clicked
	var open = false;

    buttonTv.addEventListener('click', handlerTv, false);
    buttonRadio.addEventListener('click', handlerRadio, false);
    wrapperTv.addEventListener('click', cnhandleTv, false);
    wrapperRadio.addEventListener('click', cnhandleRadio, false);

	function cnhandleTv(e){
		e.stopPropagation();
	}
    function cnhandleRadio(e){
		e.stopPropagation();
	}

	function handlerTv(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
            openNavTv();
	  	}
	 	else{
	    	closeNavTv();
	  	}
	}
	function handlerRadio(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
            openNavRadio();
	  	}
	 	else{
	    	closeNavRadio();
	  	}
	}
	function openNavTv(){
		open = true;
	    classie.add(overlayTv, 'on-overlay');
	    classie.add(wrapperTv, 'opened-nav');
        classie.add(buttonRadio, 'inactive')
	}
	function openNavRadio(){
		open = true;
	    classie.add(overlayRadio, 'on-overlay');
	    classie.add(wrapperRadio, 'opened-nav');
        classie.add(buttonTv, 'inactive')
	}
	function closeNavTv(){
		open = false;
		classie.remove(overlayTv, 'on-overlay');
		classie.remove(wrapperTv, 'opened-nav');
        classie.remove(buttonRadio, 'inactive')
	}
	function closeNavRadio(){
		open = false;
		classie.remove(overlayRadio, 'on-overlay');
		classie.remove(wrapperRadio, 'opened-nav');
        classie.remove(buttonTv, 'inactive')
	}
	document.addEventListener('click', closeNavTv);
	document.addEventListener('click', closeNavRadio);

})();

