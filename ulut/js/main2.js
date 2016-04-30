$(document).ready(function($){
    var scrolling = false;
    var contentSections = $('.us-section'),
        verticalNavigation = $('.us-nav'),
        navigationItems = verticalNavigation.find('a'),
        navTrigger = $('.us-nav-trigger'),
        scrollArrow = $('.us-scroll-down'),
        servicesButton = $('.us-btn.services'),
        contactsButton = $('.us-btn.contacts');

    // open navigation if user clicks the .us-nav-trigger - small devices only
    navTrigger.on('click', function(event){
        event.preventDefault();
        verticalNavigation.toggleClass('open');
    });
});

// PROJECTS SLIDER

$(document).ready(function($){
    var sliderContainers = $('.us-slider-wrapper');

    if( sliderContainers.length > 0 ) initBlockSlider(sliderContainers);

    function initBlockSlider(sliderContainers) {
        sliderContainers.each(function(){
            var sliderContainer = $(this),
                slides = sliderContainer.children('.us-slider').children('li'),
                sliderPagination = createSliderPagination(sliderContainer);

            sliderPagination.on('click', function(event){
                event.preventDefault();
                var selected = $(this),
                    index = selected.index();
                updateSlider(index, sliderPagination, slides);
            });

            sliderContainer.on('swipeleft', function(){
                var bool = enableSwipe(sliderContainer),
                    visibleSlide = sliderContainer.find('.is-visible').last(),
                    visibleSlideIndex = visibleSlide.index();
                if(!visibleSlide.is(':last-child') && bool) {updateSlider(visibleSlideIndex + 1, sliderPagination, slides);}
            });

            sliderContainer.on('swiperight', function(){
                var bool = enableSwipe(sliderContainer),
                    visibleSlide = sliderContainer.find('.is-visible').last(),
                    visibleSlideIndex = visibleSlide.index();
                if(!visibleSlide.is(':first-child') && bool) {updateSlider(visibleSlideIndex - 1, sliderPagination, slides);}
            });
        });
    }

    function createSliderPagination(container){
        var wrapper = $('<ol class="us-slider-navigation"></ol>');
        container.children('.us-slider').find('li').each(function(index){
            var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
                dot = $('<a href="#0"></a>').appendTo(dotWrapper);
            dotWrapper.appendTo(wrapper);
            var dotText = ( index+1 < 10 ) ? '0'+ (index+1) : index+1;
            dot.text(dotText);
        });
        wrapper.appendTo(container);
        return wrapper.children('li');
    }

    function updateSlider(n, navigation, slides) {
        navigation.removeClass('selected').eq(n).addClass('selected');
        slides.eq(n).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');

        //fixes a bug on Firefox with ul.us-slider-navigation z-index
        navigation.parent('ul').addClass('slider-animating').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            $(this).removeClass('slider-animating');
        });
    }

    function enableSwipe(container) {
        return ( container.parents('.touch').length > 0 );
    }
});

// TEXT CLIP EFFECT

$(document).ready(function($){
    //set animation timing
    var animationDelay = 2500,
    //clip effect
        revealDuration = 800,
        revealAnimationDelay = 1500;

    initHeadline();

    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.us-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.us-headline'));
    }

    function singleLetters($words) {
        $words.each(function(){
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function(){
            var headline = $(this);

            if(headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function(){ headline.find('.us-words-wrapper').addClass('is-loading') }, barWaiting);
            } else if (headline.hasClass('clip')){
                var spanWrapper = headline.find('.us-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type') ) {
                //assign to .us-words-wrapper the width of its longest word
                var words = headline.find('.us-words-wrapper b'),
                    width = 0;
                words.each(function(){
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.us-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if($word.parents('.us-headline').hasClass('type')) {
            var parentSpan = $word.parent('.us-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function(){
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

        } else if($word.parents('.us-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        }  else if($word.parents('.us-headline').hasClass('clip')) {
            $word.parents('.us-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.us-headline').hasClass('loading-bar')){
            $word.parents('.us-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
            setTimeout(function(){ $word.parents('.us-words-wrapper').addClass('is-loading') }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function(){ hideWord(nextWord) }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if($word.parents('.us-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        }  else if($word.parents('.us-headline').hasClass('clip')) {
            $word.parents('.us-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
                setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if(!$letter.is(':last-child')) {
            setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else if($bool) {
            setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
        }

        if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if(!$letter.is(':last-child')) {
            setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else {
            if($word.parents('.us-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.us-words-wrapper').addClass('waiting'); }, 200);}
            if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});

// SERVICES

$(document).ready(function($){
    var liService = $('.us-service');
    //check if background-images have been loaded and show list items
    liService.bgLoaded({
        afterLoaded : function(){
            showCaption($('.services-container li').eq(0));
        }
    });

    //open project
    liService.on('click', function(){
        var selectedProject = $(this),
            toggle = !selectedProject.hasClass('is-full-width');
        if(toggle) toggleProject($(this), $('.services-container'), toggle);
    });

    //close project
    $('.services-container .us-close').on('click', function(){
        toggleProject($('.is-full-width'), $('.services-container'), false);
    });

    //scroll to project info
    //$('.projects-container .cd-scroll').on('click', function(){
    //    $('.projects-container').animate({'scrollTop':$(window).height()}, 500);
    //});

    //update title and .cd-scroll opacity while scrolling
    //$('.projects-container').on('scroll', function(){
    //    window.requestAnimationFrame(changeOpacity);
    //});

    function toggleProject(project, container, bool) {
        if(bool) {
            //expand project
            container.addClass('service-is-open');
            project.addClass('is-full-width').siblings('li').removeClass('is-loaded');
        } else {
            //check media query
            var mq = window.getComputedStyle(document.querySelector('.services-container'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, ""),
                delay = ( mq == 'mobile' ) ? 100 : 0;

            container.removeClass('service-is-open');
            //fade out project
            project.animate({opacity: 0}, 800, function(){
                project.removeClass('is-loaded');
                setTimeout(function(){
                    project.attr('style', '').removeClass('is-full-width').find('.us-title').attr('style', '');
                }, delay);
                setTimeout(function(){
                    showCaption($('.services-container li').eq(0));
                }, 300);
            });
        }
    }

    function changeOpacity(){
        var newOpacity = 1- ($('.services-container').scrollTop())/300;
        $('.services-container .cd-scroll').css('opacity', newOpacity);
        $('.is-full-width .cd-title').css('opacity', newOpacity);
        //Bug fixed - Chrome background-attachment:fixed rendering issue
        $('.is-full-width').hide().show(0);
    }

    function showCaption(project) {
        if(project.length > 0 ) {
            setTimeout(function(){
                project.addClass('is-loaded');
                showCaption(project.next());
            }, 150);
        }
    }
});

/*
 * BG Loaded
 * Copyright (c) 2014 Jonathan Catmull
 * Licensed under the MIT license.
 */
(function($){
    $.fn.bgLoaded = function(custom) {
        var self = this;

        // Default plugin settings
        var defaults = {
            afterLoaded : function(){
                this.addClass('bg-loaded');
            }
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

        // Loop through element
        self.each(function(){
            var $this = $(this),
                bgImgs = window.getComputedStyle($this.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
            $this.data('loaded-count',0);
            $.each( bgImgs, function(key, value){
                var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                $('<img/>').attr('src', img).load(function() {
                    $(this).remove(); // prevent memory leaks
                    $this.data('loaded-count',$this.data('loaded-count')+1);
                    if ($this.data('loaded-count') >= bgImgs.length) {
                        settings.afterLoaded.call($this);
                    }
                });
            });

        });
    };
})(jQuery);