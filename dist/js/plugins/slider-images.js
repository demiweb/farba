$(document).ready(function(){

    $('.slider-slick').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        // useTransform: true,
        cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: false,
                }
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
});
    let sliderSlides = [...document.querySelectorAll('.slider-slick li img')];
    sliderSlides.forEach((el) => {
        el.addEventListener('load', () => {
            el.classList.add('is-loaded');
        })
    })

});