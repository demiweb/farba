$(document).ready(function () {

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

function checkIfProjectsOnPage() {
    let projectsBlocks = [...document.querySelectorAll('.slider-project')];
    if (!projectsBlocks) {

    } else {
        projectsBlocks.forEach((pr, i) => {
            let imgAmount = 0;
            pr.setAttribute('data-project-id', i);
            // console.log(pr.dataset);
            // console.log(pr.children);
            [...pr.children].forEach((child) => {
                imgAmount += 1;
                // console.log(imgAmount);
            });

            function setImgWidth(imgAmount) {
                [...pr.children].forEach((img) => {
                    // img.style.width = `calc(100% / ${imgAmount})`
                })
            }

            setImgWidth(imgAmount);
            let transNumb = 0;
            let ctrlBtns = [...pr.closest('.project__right-side').querySelectorAll('.slides-control-btn')];
            ctrlBtns.forEach((btn) => {
                btn.addEventListener('click', () => {
                    if (btn.classList.contains('slides-control-btn--left')) {
                        transNumb -= 100;
                        let minimumTrans = -((imgAmount - 1) * 100);
                        let maximumTrans = 0;
                        if (transNumb < minimumTrans) {
                            transNumb = maximumTrans;
                        } else if (transNumb === maximumTrans) {
                            transNumb = minimumTrans;
                        } else {

                        }
                        pr.style.transform = `translate(${transNumb}%, 0)`;
                    } else {
                        transNumb += 100;
                        let minimumTrans = -((imgAmount - 1) * 100);
                        let maximumTrans = 0;
                        if (transNumb === minimumTrans) {
                            transNumb = maximumTrans;
                        } else if (transNumb > maximumTrans) {
                            transNumb = minimumTrans;
                        } else {

                        }
                        pr.style.transform = `translate(${transNumb}%, 0)`;
                    }
                })
            })
        })
    }
};

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
    checkIfProjectsOnPage();
}
checkMainWidth();

