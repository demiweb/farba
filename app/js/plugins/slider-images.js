$(document).ready(function(){

    $('.slider-slick').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
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


                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
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

function checkMainWidth() {
    let contWi = document.querySelector('.farba-main .container');
    let slides = [...document.querySelectorAll('.slider-slick li')];
    if (window.innerWidth < 576) {
        setTimeout(() => {
            slides.forEach((el) => {
                console.log(el);
                el.style.width = `${contWi.offsetWidth}px !important`;
            })
        }, 1500)

    }
    // console.log(contWi.offsetWidth);
};
window.onload = () => {
    checkMainWidth();
}
checkMainWidth();
