

const small = window.matchMedia("(max-width: 767px)");
const large = window.matchMedia("(min-width: 768px)");

function checkWidthInner() {
    if (window.innerWidth > 767) {
        gsap.fromTo('.farba-header', {duration: 1.1, x: -120, opacity: 0}, {opacity:1, x: 0, clearProps: 'all'} );


    } else {
        gsap.fromTo('.farba-header', {duration: 1.1, y: -120, opacity: 0}, {opacity:1, y: 0, clearProps: 'all'} );

    }
}
window.onload = () => {
    checkWidthInner();
}


burgerBtn.addEventListener('click', () => {

    if(small.matches) {
        if (navigationMenu.classList.contains('visible')) {
            gsap.fromTo('.farba-header__navigation.visible .farba-header__menu ', {duration: 0.5, y: -140, opacity: 0}, {opacity:1, y: 0, clearProps: 'all'} );
            gsap.fromTo('.farba-header__navigation.visible .farba-header__submenu li ', {duration: 0.5, x: '-100%', opacity: 0, stagger: 0.1}, {opacity:1, x: 0, clearProps: 'all', stagger: 0.1, delay:0.4} );

        } else {
            gsap.fromTo('.farba-header__navigation .farba-header__menu ', {duration: 0.5, y: 0, opacity: 1}, {opacity:0, y: -140} );
            gsap.fromTo('.farba-header__navigation .farba-header__submenu li ', {duration: 0.5, x: 0, opacity: 1, stagger: 0.1}, {opacity:0, x: '-100%', stagger: 0.1} );

        }
    } else if (large.matches) {

        if (navigationMenu.classList.contains('visible')) {
            gsap.fromTo('.farba-header__navigation.visible .farba-header__menu ', {duration: 0.5, y: -140, opacity: 0}, {opacity:1, y: 0, clearProps: 'all'} );
            gsap.fromTo('.farba-header__navigation.visible .farba-header__submenu li ', {duration: 0.5, y: '100%', opacity: 0, stagger: 0.1}, {opacity:1, y: 0, clearProps: 'all', stagger: 0.1, delay:0.4} );

        } else {
            gsap.fromTo('.farba-header__navigation .farba-header__menu ', {duration: 0.5, y: 0, opacity: 1}, {opacity:0, y: -140} );
            gsap.fromTo('.farba-header__navigation .farba-header__submenu li ', {duration: 0.5, y: 0, opacity: 1, stagger: 0.1}, {opacity:0, y: '100%', stagger: 0.1} );

        }
    } else {
        // do nothing
    }


});

// gsap.from('main p', {duration: 2, x:400});


const controller = new ScrollMagic.Controller();

//work code
let allP = [...document.querySelectorAll('main .trigger')];

allP.forEach((p) => {
    let allAnimated = [...p.querySelectorAll('p')];
    allAnimated.forEach((el) => {
        let trigger = el.closest('.trigger');
        var scene = new ScrollMagic.Scene({
            triggerElement: trigger,
            triggerHook: 0.5,
            reverse: false
            //advanced with adding class (.setClassToggle("#reveal1", "visible") )
            // triggerHook: 0.5,
            // // reverse:false,
            // offset: 40,
            // duration: '80%'

        })
            .setTween(el, {backgroundColor: "green", scale: 2.5, opacity: 1, x: 100, stagger: 0.3}) // trigger a TweenMax.to tween
            .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);

    })

//work code

});

//home page animation
gsap.fromTo('.farba-main__farba-main-title', {opacity:0}, {opacity: 1, duration: 1.2, delay: 0.4})
gsap.fromTo('.farba-main-title__brand', {y: -50, opacity:0}, {opacity: 1, y:0, duration: 0.7, delay: 1.0, clearProps: 'all'})
gsap.fromTo('.absolute-pos svg', {opacity:0}, {opacity: 1, duration: 1.3, delay: 0.6, clearProps: 'all'})
gsap.fromTo('.brand-container > ul > li:first-child  p', {opacity:0, x: -60}, {opacity: 1, x: 0,duration: 0.7, delay: 1.2, clearProps: 'all'})
gsap.fromTo('.brand-container > ul > li:last-child  p', {opacity:0, x: 70}, {opacity: 1, x: 0,duration: 0.7, delay: 1.4, clearProps: 'all'})

//home page animation


let welcomeBlock = document.getElementById('farba-welcome');
let welcomeElArray = []
function checkIfOnPageWelcome() {
    if (!welcomeBlock) {

    }
    else {
        console.log(welcomeBlock);
        console.log(welcomeBlock.children);

        welcomeElArray.push(welcomeBlock.lastElementChild);
        console.log(welcomeElArray);
    }
}
checkIfOnPageWelcome();


// welcomeBlock.forEach((p) => {
//
//         var scene = new ScrollMagic.Scene({
//             triggerElement: welcomeBlock,
//             triggerHook: 0.6,
//             reverse: false
//             //advanced with adding class (.setClassToggle("#reveal1", "visible") )
//             // triggerHook: 0.5,
//             // // reverse:false,
//             // offset: 40,
//             // duration: '80%'
//
//         })
//             .setClassToggle(welcomeBlock, "visible")
//             .setClassToggle('#farba-welcome .farba-svg-bg', "animated")
//             .setTween('#farba-welcome .simple-block__img', {opacity: 1, delay: 0.4})
//             .setTween('#farba-welcome .simple-block__text-part', {opacity: 1, x: 0, delay: 0.5})
//             // .setTween(welcomeBlock, {opacity: 1, y: 0, clearProps: 'all'}) // trigger a TweenMax.to tween
//             // .setTween(el, {backgroundColor: "green", scale: 2.5, opacity: 1, x: 100, stagger: 0.3}) // trigger a TweenMax.to tween
//             .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//             .addTo(controller);
//
//             gsap.fromTo('#farba-welcome.visible .simple-block__img', {opacity: 0}, {opacity:1, duration: 2}
//             )
//
// //work code
//
// });