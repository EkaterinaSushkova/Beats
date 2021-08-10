const slider = $('.products').bxSlider({
    pager: false,
    controls: false
});
$('.product-slider__arrow--direction--back').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.product-slider__arrow--direction--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});