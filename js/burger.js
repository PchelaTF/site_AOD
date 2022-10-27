const iconMenu = document.querySelector('.icon__menu');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const header = document.querySelector('header');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        body.classList.toggle('_lock');
        header.classList.toggle('_substrate');
    });
}