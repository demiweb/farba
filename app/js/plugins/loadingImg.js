
const allLozad = [...document.querySelectorAll('.lozad')];
allLozad.forEach((el) => {
    const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    observer.observe();
})

function fadeImg(e) {
    // e.style.animation = 'faddingImgAnim 0.5s ease';
    // e.style.animationFillMode = 'forwards';
    e.classList.add('is-loaded');

}