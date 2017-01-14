<!-- jQuery 1.11.3 minify version from Google CDN JS -->
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/goodshare.js"></script>

<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/anime.min.js"></script>
<script src="js/main.js"></script>
<script>
    (function() {
        var tiltSettings = [
            {
                movement: {
                    imgWrapper : {
                        rotation : {x: -5, y: 10, z: 0},
                        reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                    },
                    caption : {
                        translation : {x: 20, y: 20, z: 0},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    },
                    overlay : {
                        translation : {x: 5, y: -5, z: 0},
                        rotation : {x: 0, y: 0, z: 6},
                        reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
                    },
                    shine : {
                        translation : {x: 50, y: 50, z: 0},
                        reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                    }
                }
            }];

        function init() {
            var idx = 0;
            [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
                idx = pos%2 === 0 ? idx+1 : idx;
                new TiltFx(el, tiltSettings[0]);
            });
        }

        // Preload all images.
        imagesLoaded(document.querySelector('main'), function() {
            document.body.classList.remove('loading');
            init();
        });

    })();
</script>

<script src="js/classie.js"></script>
<script src="js/modalEffects.js"></script>

</body>
</html>