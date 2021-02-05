gsap.fromTo('.farba-header', {duration: 1.1, x: -120, opacity: 0}, {opacity:1, x: 0, clearProps: 'all'} );

burgerBtn.addEventListener('click', () => {
    if (navigationMenu.classList.contains('visible')) {
        gsap.fromTo('.farba-header__navigation.visible .farba-header__menu ', {duration: 0.5, y: -140, opacity: 0}, {opacity:1, y: 0, clearProps: 'all'} );
        gsap.fromTo('.farba-header__navigation.visible .farba-header__submenu li ', {duration: 0.5, y: '100%', opacity: 0, stagger: 0.1}, {opacity:1, y: 0, clearProps: 'all', stagger: 0.1, delay:0.4} );

    } else {
        gsap.fromTo('.farba-header__navigation .farba-header__menu ', {duration: 0.5, y: 0, opacity: 1}, {opacity:0, y: -140} );
        gsap.fromTo('.farba-header__navigation .farba-header__submenu li ', {duration: 0.5, y: 0, opacity: 1, stagger: 0.1}, {opacity:0, y: '100%', stagger: 0.1} );

    }

})

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
            triggerHook: 1,
            reverse:false
        })
            .setTween(el, {backgroundColor: "green", scale: 2.5, opacity: 1, x: 100, stagger: 0.3}) // trigger a TweenMax.to tween
            .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);

    })

//work code


})