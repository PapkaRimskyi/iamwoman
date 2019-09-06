(function () {
  const projectHeader = document.querySelector('.project-header');
  const menuIsOpen = document.querySelector('.menu-is-open');
  const burgerMenu = document.querySelector('.burger-menu__link');
  const burgerMenuInPopup = document.querySelector('.menu-is-open__button-svg-burger');
  const closeHamburgerMenu = document.querySelector('.menu-is-open__button-close-menu');

  menuIsOpen.classList.add('menu-is-open--display-none');

  let toggleMenu = function () {
    menuIsOpen.classList.toggle('menu-is-open--display-none');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  let closeMenu = function () {
    menuIsOpen.classList.add('menu-is-open--display-none');
  }

  burgerMenuInPopup.addEventListener('click', closeMenu);
  closeHamburgerMenu.addEventListener('click', closeMenu);

})();
