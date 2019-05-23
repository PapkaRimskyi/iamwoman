'use strict';

(function () {
  var projectHeader = document.querySelector('.project-header');
  var menuIsOpen = document.querySelector('.menu-is-open');
  var burgerMenu = document.querySelector('.burger-menu__link');
  var burgerMenuInPopup = document.querySelector('.menu-is-open__button-svg-burger');
  var closeHamburgerMenu = document.querySelector('.menu-is-open__button-close-menu');

  menuIsOpen.classList.add('menu-is-open--display-none');

  var toggleMenu = function () {
    menuIsOpen.classList.toggle('menu-is-open--display-none');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  var closeMenu = function () {
    menuIsOpen.classList.add('menu-is-open--display-none');
  }

  burgerMenuInPopup.addEventListener('click', closeMenu);
  closeHamburgerMenu.addEventListener('click', closeMenu);

})();
