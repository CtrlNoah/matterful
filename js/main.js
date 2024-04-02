let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 800)
});


let indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 2000)
    const imageComparison = document.querySelectorAll('.comparison');
    for (let x = 0; x < imageComparison.length; x++) {
        imageComparison[x].style.display = 'none';
    }
    indexValue++;
    if (indexValue > imageComparison.length) {
        indexValue = 1;
    }
    imageComparison[indexValue - 1].style.display = 'block';
}
slideShow();








AOS.init();

