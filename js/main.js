let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 800)
});



const slideLeft = document.querySelector('.vector-left');
const slideRight = document.querySelector('.vector-right');
const imageCompare = document.querySelector('.image-comparison_before');
const before = document.querySelector('.before')

slideRight.addEventListener('click', function () {
    imageCompare.classList.add('apear1');
    imageCompare.classList.remove('apear2');
    before.style.display = 'block';
});

slideLeft.addEventListener('click', function () {
    imageCompare.classList.add('apear2');
    imageCompare.classList.remove('apear1');
    before.style.display = 'none';
});

imageCompare.addEventListener('click', () => {
    imageCompare.classList.remove('apear1');
    imageCompare.classList.remove('apear2');
    before.style.display = 'block';
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

