//stop, start interval, timeout
let transformAmount = 0;
let activeSlideNumber = 0;
let sliderTrack = document.querySelector('.our-team-slider__container');
let memberSlides = [...document.querySelectorAll('.our-team-slider__member-slide')];

function changeColorSpan() {
    if (!sliderTrack) {

    } else {
        transformAmount += -100;
        activeSlideNumber += 1;
        if (-(memberSlides.length * 100) === transformAmount) {
            transformAmount = 0;
            activeSlideNumber = 0;
            sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;

        } else {
            sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;
        }
        memberSlides.forEach((sld, k) => {
            if (k === activeSlideNumber) {
                sld.classList.add('active');
            } else {
                sld.classList.remove('active');

            }
        })
    }

}
let timerSet = setInterval(changeColorSpan, 4000);
function ifOnPageMouse() {
    if (!sliderTrack) {

    } else {

        sliderTrack.addEventListener('mouseover', () => {
                clearInterval(timerSet);
            });
        sliderTrack.addEventListener('mouseout', () => {
                timerSet = setInterval(changeColorSpan, 4000);
            });


    }
}
ifOnPageMouse();

//stop, start interval, timeout

//slider team-members

let controlBtns = [...document.querySelectorAll('.our-team-slider__control-btn')];

controlBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        clearInterval(timerSet);
        timerSet = setInterval(changeColorSpan, 4000);
        let classBtn = btn.classList[0];
        console.log(`${classBtn}--right`);

        if (btn.classList.contains(`${classBtn}--right`)) {
            transformAmount += -100;
            activeSlideNumber += 1;
            if (-(memberSlides.length * 100) === transformAmount) {
                transformAmount = 0;
                activeSlideNumber = 0;
                sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;

            } else {
                sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;
            }
            memberSlides.forEach((sld, k) => {
                if (k === activeSlideNumber) {
                    sld.classList.add('active');
                } else {
                    sld.classList.remove('active');

                }
            })

        } else {
            transformAmount += 100;
            activeSlideNumber -= 1;
            if (transformAmount === 100) {
                transformAmount = -((memberSlides.length - 1) * 100);
                activeSlideNumber = memberSlides.length - 1;
                sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;

            } else {
                sliderTrack.style.transform = `translate(${transformAmount}%, 0)`;

            }
            memberSlides.forEach((sld, k) => {
                if (k === activeSlideNumber) {
                    sld.classList.add('active');
                } else {
                    sld.classList.remove('active');

                }
            })
        }
    })
})




//slider team-members

//slides gallery
let imagesGalleryLine = [...document.querySelectorAll('.gallery__line')];
function ifGalleryOnPage() {
    if (!imagesGalleryLine.length) {

    } else {
        imagesGalleryLine.forEach((line, j) => {
            let imagesGallery = [...line.querySelectorAll('.img-container')];
            let galleryLineWidth = 0;
            function getWidthLine() {
                galleryLineWidth = 0;
                imagesGallery.forEach((img) => {
                    let imgToLeft = img.getBoundingClientRect().left - 120;
                    let imgWidth = img.clientWidth;
                    let imgMarginRight = Number(window.getComputedStyle(img).marginRight.match(/\d+/)[0]);
                    galleryLineWidth += imgWidth;
                    galleryLineWidth += imgMarginRight;
                    line.appendChild(img.cloneNode(true))

                })
                console.log(galleryLineWidth);
                let slideDist = 0;
                if (j === 1) {
                    setInterval(() => {
                        slideDist += 1;
                        if (slideDist === galleryLineWidth) {
                            slideDist = 0;
                        }
                        imagesGallery = [...line.querySelectorAll('.img-container')];
                        imagesGallery.forEach((img2) => {

                            img2.style.transform = `translate(-${slideDist}px, 0%)`;
                        })
                    }, 13)
                } else {
                    setInterval(() => {
                        slideDist += 1;
                        if (slideDist === galleryLineWidth) {
                            slideDist = 0;
                        }
                        imagesGallery = [...line.querySelectorAll('.img-container')];
                        imagesGallery.forEach((img2) => {

                            img2.style.transform = `translate(-${slideDist}px, 0%)`;
                        })
                    }, 10)
                }


                return galleryLineWidth;
            }
            getWidthLine();




        })

    }
}
ifGalleryOnPage();
//slides gallery