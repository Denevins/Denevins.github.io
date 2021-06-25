$(window).on('load', function () {
    $preloader = $('.mk-spinner-wrap'),
        $loader = $preloader.find('.mk-spinner-doublecircle');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(function () {
    var element = $(".skills-item");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 950) {
            element.addClass("anim");
        } else {
            element.removeClass("anim");
        }
    });

});

$(function () {
    var element = $(".calculator section");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2800) {
            element.addClass("anim");
        } else {
            element.removeClass("anim");
        }
    });
});

$(function () {
    var element = $(".stat-item1,.stat-item2,.stat-item3,.stat-item4");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 4000) {
            element.addClass("anim");
        } else {
            element.removeClass("anim");
        }
    });
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
