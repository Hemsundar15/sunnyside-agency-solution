const hamBurger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav__navigation');

hamBurger.addEventListener('click', function(){
    hamBurger.classList.toggle('nav__hamburger--active');
    nav.classList.toggle('nav__navigation--active');
});