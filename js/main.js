const burger = document.querySelector('.header__menu-burger');
const headerMenu = document.querySelector('.header__menu');

if(burger){
    burger.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}

if (burger.classList.contains('active')) {
        document.body.classList.remove('lock');
        burger.classList.remove('active');
        headerMenu.classList.remove('active');
}

