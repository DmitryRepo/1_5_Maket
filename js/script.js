const buttonOpen = document.querySelector('.cards-pointer');
const cardsOpen = document.querySelector('.swiper-wrapper');
let pointerOpen = document.querySelector('.span-pointer')

buttonOpen.addEventListener("click", buttonClick);

function buttonClick() {
    cardsOpen.classList.toggle('swiper-wrapper--open');
    if (cardsOpen.classList.contains('swiper-wrapper--open')) {
        pointerOpen.textContent="Скрыть";
    } else {
        pointerOpen.textContent="Показать все";
    }
}
