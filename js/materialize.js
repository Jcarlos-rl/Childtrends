$(document).ready(function(){
    $('.slider').slider({
        height: $(window).height(),
        indicators: false,
    });
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});