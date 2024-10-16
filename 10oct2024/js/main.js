$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        center: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        // autoHeight: true,
        nav:true,
        navText: ["Previous","Next"],
        });
});