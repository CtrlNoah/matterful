// let mask = document.querySelector('.mask');

// window.addEventListener('load', () => {
//     mask.classList.add('hide');
//     setTimeout(() => {
//         mask.remove();
//     }, 800)
// });


// Первый сладер
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




// Второй слайдшоу
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


// Валидация формы 
function validation() {
    let form = document.querySelector('#form');
    let email = document.querySelector('#email').value;
    let text = document.querySelector('#text');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please Enter Valid Email Address.";
        text.style.color = "#ff0000";
    }
    if (email == "") {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }

}

const form = document.querySelector('#form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let form = document.querySelector('#form');
    let email = document.querySelector('#email').value;
    let text = document.querySelector('#text');
    if (email == "") {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "You forgot to fill the blank";
        text.style.color = "#ff0000";
    } else {
        modal.classList.add('slit-in-vertical');
        modal.classList.remove('slit-out-vertical')
    }
    modalBtn.addEventListener('click', () => {
        modal.classList.add('slit-out-vertical');
    });

})


// script for modal window

const modal = document.querySelector('.modal');
const modalChild = document.querySelector('.modal__child');
const modalBtn = document.querySelector('.modal__btn');




















AOS.init();

