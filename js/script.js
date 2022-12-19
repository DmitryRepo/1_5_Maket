const buttonOpen = document.querySelector('.cards-pointer');
const cardsOpen = document.querySelector('.swiper-wrapper');
let pointerOpen = document.querySelector('.span-pointer')
let imageRotate = document.querySelector('.image-pointer')

buttonOpen.addEventListener("click", buttonClick);

function buttonClick() {
    cardsOpen.classList.toggle('swiper-wrapper--open');
    if (cardsOpen.classList.contains('swiper-wrapper--open')) {
        pointerOpen.textContent="Скрыть";
        imageRotate.classList.replace('image-pointer','image-pointer--rotate');
    } else {
        pointerOpen.textContent="Показать все";
        imageRotate.classList.replace('image-pointer--rotate','image-pointer');
    }
}
