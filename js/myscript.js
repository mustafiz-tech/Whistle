// slick 
$('.slider-main').slick({
    dots: true,
    prevArrow: '<i class="fa  fa-arrow-left left-arrows">',
    nextArrow: '<i class="fa  fa-arrow-right right-arrows">',
});

$('.testominal-main').slick({
    dots: false,
    slidesToShow: 2,
    infinite: false,
    dots: true,
    arrows: false,
});

$('.clients-main').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(function(){
    $('.nav-section').click(function(){
        $('.main-nav').slideToggle(200)
    })
})