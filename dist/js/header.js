let burgerBtn = document.querySelector('.farba__burger-button');
let navigationMenu = document.querySelector('.farba-header__navigation');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('opened');
    navigationMenu.classList.toggle('visible');
    document.body.classList.toggle('no-scroll');
});



function forTest() {
    console.log('test test test')
}
forTest();