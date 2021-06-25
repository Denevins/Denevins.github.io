
$(window).on('load', function () {
	$preloader = $('.mk-spinner-wrap'),
	$loader = $preloader.find('.mk-spinner-doublecircle');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});



/* const animItems = document.quertySelectorAll('.anim-items');

if (animItems.length > 0) {
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset =
        }
    }
        function offset(el) {
            const rect = el.window.pageXOffset 
        }
} */ 