

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
// let allP = [...document.querySelectorAll('main .trigger')];
//
// allP.forEach((p) => {
//     let allAnimated = [...p.querySelectorAll('table')];
//     allAnimated.forEach((el) => {
//         let trigger = el.closest('.trigger');
//         var scene = new ScrollMagic.Scene({
//             triggerElement: trigger,
//             triggerHook: 0.5,
//             reverse: false
//             //advanced with adding class (.setClassToggle("#reveal1", "visible") )
//             // triggerHook: 0.5,
//             // // reverse:false,
//             // offset: 40,
//             // duration: '80%'
//
//         })
//             .setTween(el, {backgroundColor: "green", scale: 2.5, opacity: 1, x: 100, stagger: 0.7}) // trigger a TweenMax.to tween
//             .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//             .addTo(controller);
//
//     })
//
// //work code
//
// });

//home page animation
gsap.fromTo('.farba-main__farba-main-title', {opacity:0}, {opacity: 1, duration: 1.2, delay: 0.4})
// gsap.fromTo('.anim-to-top', {y: -50, opacity:0}, {opacity: 1, y:0, duration: 0.7, delay: 1.0, clearProps: 'all'})
gsap.fromTo('.absolute-pos svg', {opacity:0}, {opacity: 1, duration: 1.3, delay: 0.6, clearProps: 'all'})
// gsap.fromTo('.brand-container > ul > li:first-child  p', {opacity:0, x: -60}, {opacity: 1, x: 0,duration: 0.7, delay: 1.2, clearProps: 'all'})
// gsap.fromTo('.brand-container > ul > li:last-child  p', {opacity:0, x: 70}, {opacity: 1, x: 0,duration: 0.7, delay: 1.4, clearProps: 'all'})
// gsap.fromTo('.anim-to-right', {opacity:0, x: -160}, {opacity: 1, x: 0,duration: 0.7, delay: 0.9, clearProps: 'all'})
// gsap.fromTo('.anim-to-left', {opacity:0, x: 160}, {opacity: 1, x: 0,duration: 0.7, delay: 1.1, clearProps: 'all'})

//home page animation

let triggerElement = [...document.querySelectorAll('.trigger')];
let trigger2Element = [...document.querySelectorAll('.trigger-2')];
triggerElement.forEach((cont, k) => {
    let allAnimated = [];
    allAnimated.push(cont);
    let allElTriggered = [...cont.querySelectorAll('.el-triggered')];

    allElTriggered.forEach((el) => {
        allAnimated.push(el);
        // console.log(allAnimated + ' -- ' + k +' -k ' + el + ' --el');
        allAnimated.forEach((el2, i) => {
            let delay;

            if (i === 0) {
                delay = 0.1;
            } else{
                delay = 0.4 + (0.2 * i);
            }
            // console.log(cont + ' delay ' + delay + ':::' + i + ' number' )
            let trigger = cont;
            // console.log(el2 + ' element ' + delay + ' delay')
            // gsap.fromTo(el, {opacity:0, y: 200}, {opacity: 1, y: 0, delay: delay, duration: 0.6})
            var scene = new ScrollMagic.Scene({
                triggerElement: cont,
                triggerHook: 0.91,
                reverse: false
                //advanced with adding class (.setClassToggle("#reveal1", "visible") )
                // triggerHook: 0.5,
                // // reverse:false,
                // offset: 40,
                // duration: '80%'

            })
                .setTween(el2, {opacity: 1, y: 0, x:0, delay: delay, duration: 0.3}) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);
        })


    })

});
trigger2Element.forEach((cont, k) => {
    let allAnimated2 = [];
    allAnimated2.push(cont);
    let allElTriggered = [...cont.querySelectorAll('.el-triggered')];

    allElTriggered.forEach((el) => {
        allAnimated2.push(el);
        // console.log(allAnimated2 + ' -- ' + k +' -k ' + el + ' --el');
        allAnimated2.forEach((el2, i) => {
            let delay;

            if (i === 0) {
                delay = 0.1;
            } else{
                delay = 0.4 + (0.2 * i);
            }
            // console.log(cont + ' delay ' + delay + ':::' + i + ' number' )
            let trigger = cont;
            // console.log(el2 + ' element ' + delay + ' delay')
            // gsap.fromTo(el, {opacity:0, y: 200}, {opacity: 1, y: 0, delay: delay, duration: 0.6})
            var scene = new ScrollMagic.Scene({
                triggerElement: cont,
                triggerHook: 0.91,
                reverse: false
                //advanced with adding class (.setClassToggle("#reveal1", "visible") )
                // triggerHook: 0.5,
                // // reverse:false,
                // offset: 40,
                // duration: '80%'

            })
                .setTween(el2, {opacity: 1, y: 0, x:0, delay: delay, duration: 0.3, scale: 1}) // trigger a TweenMax.to tween
                // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);
        })


    })

});
function checkHomePageAnims() {
    if (!document.querySelector('.anim-to-top')) {

    } else {
        gsap.fromTo('.anim-to-top', {y: -50, opacity:0}, {opacity: 1, y:0, duration: 0.7, delay: 1.0, clearProps: 'all'})
        gsap.fromTo('.brand-container > ul > li:first-child  p', {opacity:0, x: -60}, {opacity: 1, x: 0,duration: 0.7, delay: 1.2, clearProps: 'all'})
        gsap.fromTo('.brand-container > ul > li:last-child  p', {opacity:0, x: 70}, {opacity: 1, x: 0,duration: 0.7, delay: 1.4, clearProps: 'all'})
        gsap.fromTo('.anim-to-right', {opacity:0, x: -160}, {opacity: 1, x: 0,duration: 0.7, delay: 0.9, clearProps: 'all'})
        gsap.fromTo('.anim-to-left', {opacity:0, x: 160}, {opacity: 1, x: 0,duration: 0.7, delay: 1.1, clearProps: 'all'})

    }
}
window.onload = () => {
    checkHomePageAnims();
}