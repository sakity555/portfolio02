$(function () {
    $("#acdn-button dt").on("click", function () {
        $(this).next().slideToggle();
    });
});

$(function () {
    $(window).scroll(function () {
        $(".main").each(function () {
            var elemPos = $(this).offset().top; /* 要素の位置を取得 */
            var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
            var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
            if (scroll > elemPos - windowHeight) {
                /* 要素位置までスクロール出来たときに動作する */
                $(this).addClass("main-scroll");
            }
        });
    });
    jQuery(window).scroll();
});
$(function () {
    $(window).scroll(function () {
        $(".sec01").each(function () {
            var elemPos = $(this).offset().top; /* 要素の位置を取得 */
            var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
            var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
            if (scroll > elemPos - windowHeight) {
                /* 要素位置までスクロール出来たときに動作する */
                $(this).addClass("sec01-scroll");
            }
        });
    });
    jQuery(window).scroll();
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    /*centeredSlides: true,*/
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});