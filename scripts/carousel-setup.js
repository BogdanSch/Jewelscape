const slides = [
    "images/Slider1.jpg",
    "images/Slider2.jpg",
    "images/Slider3.jpg",
    "images/Slider4.jpg",
];

$(function () {
    $.each(slides, function (index, src) {
        let item = `<div  class="item" style="background: url(${src});"></div>`;
        $(".owl-carousel.owl-theme").append(item);
    });
});

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})