let modalMiscount = 'miscount';
let modalContactUs = 'contact-us';
let modalProposal = 'proposal';
let btnModalMiscount = [...document.querySelectorAll(`.modal--get-${modalMiscount}`)];
let btnModalContactUs = [...document.querySelectorAll(`.modal--get-${modalContactUs}`)];
let btnModalProposal = [...document.querySelectorAll(`.modal--get-${modalProposal}`)];
let btnModalClose = [...document.querySelectorAll('.close-modal-window')];
let allModalsBtns = [...document.querySelectorAll('.open-modal-btn')]
function openModalWindow(item, name){
    let modalWindow = document.querySelector(`.modal-window--${name}`);
    // console.log(modalWindow);
    document.body.classList.toggle('no-scroll');
    modalWindow.classList.toggle('active');
}
function closeModalWindow(item) {
    // console.log(item);
    item.closest('.modal-window').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function checkIfPageHaveModals() {
    if (!allModalsBtns.length) {
        console.log('No modal on page')
    } else {
        btnModalClose.forEach((btn) => {
            // console.log(btn);
            btn.addEventListener('click', () => {
                closeModalWindow(btn);
            })
        });


        btnModalMiscount.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                openModalWindow(btn, modalMiscount);
            })

        });
        btnModalContactUs.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                openModalWindow(btn, modalContactUs);
            })
        });
        btnModalProposal.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                openModalWindow(btn, modalProposal);
            })
        })
    }
}
let allSelectors = [...document.querySelectorAll('.select-type > select')];
let allChecked = [...document.querySelectorAll('.select-type > span')];
function ifSelectTypeOnPage() {
    if (!allChecked.length) {

    } else {
        allSelectors.forEach((sel) => {
            let selOpt = [...sel.querySelectorAll('option')];
            selOpt.forEach((opt) => {
                let optValue = opt.value;
                let optInnerText = opt.innerText;
                let newSpan = document.createElement('span');
                newSpan.setAttribute('data-value', `${optValue}`);
                newSpan.innerHTML = optInnerText;
                opt.closest('.select-type').querySelector('.custom-selector').appendChild(newSpan);
                newSpan.addEventListener('click', () => {
                    let spanInner = newSpan.innerHTML;
                    let spanValue = newSpan.dataset.value;
                    newSpan.closest('.select-type').querySelector('span').innerHTML = spanInner;
                    let event = new Event('change');
                    let suggestOpt = document.querySelector(`option[value='${spanValue}']`);
                    suggestOpt.selected = 'selected';
                    suggestOpt.setAttribute('selected', 'selected');
                    suggestOpt.click();
                    newSpan.closest('.select-type').querySelector('select').dispatchEvent(event);
                    // console.log(newSpan.closest('.select-type'));
                    if (!newSpan.closest('.select-type').querySelector('span.active')) {

                    } else {
                        newSpan.closest('.select-type').querySelector('span.active').classList.remove('active');

                    }
                    document.querySelector(`span[data-value='${spanValue}']`).classList.add('active');
                    newSpan.closest('.select-type').classList.remove('open');
                })
            })
        })

        allChecked.forEach((opener) => {
            opener.addEventListener('click', () => {
                opener.closest('.select-type').classList.toggle('open')
            })
        })
    }
}
let btnsOpenMoreRepair = [...document.querySelectorAll('.repair__single button')];
function ifOpenMoreBtnOnPage() {
    if (!btnsOpenMoreRepair.length) {

    } else {
        btnsOpenMoreRepair.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.repair__single').classList.toggle('open');
            })
        })
    }
}
window.onload = () => {
    ifOpenMoreBtnOnPage();
    checkIfPageHaveModals();
    ifSelectTypeOnPage();
};

new fullpage('#full-page', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    css3: true,
    responsiveWidth: 1025,
});
let nonScrollFull = document.querySelector('.full-page-block.full-page-block--scroll');
let nonFirstBlock = document.querySelector('.full-page-block.full-page-block--scroll .farba-main__farba-advices--proposal');
function checkTopDistance(e) {
    let toTopDis = nonFirstBlock.getBoundingClientRect().bottom - (nonFirstBlock.getBoundingClientRect().bottom - nonFirstBlock.getBoundingClientRect().top);
    if (toTopDis !== 0) {
        e.stopPropagation();
    }
}
document.querySelector('.full-page-block.full-page-block--scroll').onwheel = (e) => {
    // e.stopPropagation();
    console.log(e.deltaY);
    let next;
    checkTopDistance(e);
    console.log(next);
}

//methods
// fullpage_api.setAllowScrolling(false);


