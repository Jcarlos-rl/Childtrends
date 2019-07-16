$(document).ready(function(){
    var x = window.matchMedia("(max-width: 600px)");
    if(x.matches){
        $('.slider').slider({
            height: 300,
            indicators: false,
        });
    }else{
        $('.slider').slider({
            height: $(window).height(),
            indicators: false,
        });
    }
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

setInterval(function(){
    $('.carousel.carousel-slider').carousel('next');
}, 3000);

$(document).ready(function(){
    $('.sidenav').sidenav();
});
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
});