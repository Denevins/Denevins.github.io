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
    var element = $(".calc .row");
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


let type = ['0 - Сайт Визитка',' 1 - Интернет-магазин',' 2 - Корпоративный сайт'];
let layout = ['0 - Адаптивная', ' 1 - Резиновая', ' 2 - Pixel perfect'];
let design = ['0 - Строгий', ' 1 - Вариант 2', ' 2 - Вариант 3'];


let typeal = [];
let types = ''
while (!types.length)
    {
    types = prompt("Тип сайта:  " +  type);
    if (types === null) break;
    }
if ( !types== null ) arr.push (p);


let layoutsal = [];
let layouts = ''
while (!layouts.length)
    {
    layouts = prompt('Тип верстки:  ' + layout);
    if (layouts === null) break;
    }
if ( !layouts== null ) arr.push (p);


let designsal = [];
let designs = ''
while (!designs.length)
    {
    designs = prompt('Дизайн:  ' + design);
    if (designs === null) break;
    }
if ( !designs== null ) arr.push (p);


let typecost = [100, 400, 1000];
let layoutcost = [100, 50, 70];
let designcost = [100, 200, 300];

let cost = [];
cost = typecost[types] + layoutcost[layouts] + designcost[designs];


let typetime = [2, 7, 14];
let layouttime = [2, 1, 2];
let designtime = [3, 5, 10];

let time =[];
time = typetime[types] + layouttime[layouts] + designtime[designs];

alert("Цена " + cost + "$  " +  "\nСроки: " + time + " дней");


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
