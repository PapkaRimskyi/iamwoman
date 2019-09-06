"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

(function () {
  var projectHeader = document.querySelector('.project-header');
  var menuIsOpen = document.querySelector('.menu-is-open');
  var burgerMenu = document.querySelector('.burger-menu__link');
  var burgerMenuInPopup = document.querySelector('.menu-is-open__button-svg-burger');
  var closeHamburgerMenu = document.querySelector('.menu-is-open__button-close-menu');
  menuIsOpen.classList.add('menu-is-open--display-none');

  var toggleMenu = function toggleMenu() {
    menuIsOpen.classList.toggle('menu-is-open--display-none');
  };

  burgerMenu.addEventListener('click', toggleMenu);

  var closeMenu = function closeMenu() {
    menuIsOpen.classList.add('menu-is-open--display-none');
  };

  burgerMenuInPopup.addEventListener('click', closeMenu);
  closeHamburgerMenu.addEventListener('click', closeMenu);
})();

(function () {
  var projectHeader = document.querySelector('.project-header');
  var newCollectionProduct = document.querySelectorAll('.new-collection__product');
  var collectionSwitchLeft = document.querySelector('.collection-switch-left');
  var collectionSwitchRight = document.querySelector('.collection-switch-right');
  var activeClassName = 'new-collection__product--active';
  var projectHeaderBgCollection = ['project-header--product1', 'project-header--product2', 'project-header--product3'];
  var productIndex = 1;

  var switchProductBG = function switchProductBG() {
    for (var i = 0; i < newCollectionProduct.length; i++) {
      if (newCollectionProduct[i].classList.contains(activeClassName)) {
        projectHeader.className = 'project-header';
        projectHeader.classList.add(projectHeaderBgCollection[i]);
      }
    }
  };

  var showNextProduct = function showNextProduct(n) {
    var currentProductIndex = document.querySelector('.new-collection__product-currently');

    if (n > newCollectionProduct.length) {
      productIndex = 1;
    }

    if (n < 1) {
      productIndex = newCollectionProduct.length;
    }

    window.new_product.removeActiveClass(newCollectionProduct, activeClassName);
    newCollectionProduct[productIndex - 1].classList.add('new-collection__product--active');
    currentProductIndex.innerHTML = '0' + productIndex + '/';
    switchProductBG();
  };

  var plusSlider = function plusSlider(n) {
    showNextProduct(productIndex += n);
  };

  collectionSwitchLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  });
  collectionSwitchRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  });
})();

(function () {
  var leftArrow = document.querySelector('.switch-arrow-left');
  var rightArrow = document.querySelector('.switch-arrow-right');
  var newProductCollection = document.querySelectorAll('.new-product__product-preview');
  var activeClassName = 'new-product__product-preview--active';
  var sliderIndex = 2;

  var removeActiveClass = function removeActiveClass(coll, activeCls) {
    for (var i = 0; i < coll.length; i++) {
      if (coll[i].classList.contains(activeCls)) {
        coll[i].classList.remove(activeCls);
      }
    }
  };

  var showSlider = function showSlider(n) {
    if (n > newProductCollection.length) {
      sliderIndex = (_readOnlyError("sliderIndex"), 1);
    }

    if (n < 1) {
      sliderIndex = (_readOnlyError("sliderIndex"), newProductCollection.length);
    }

    removeActiveClass(newProductCollection, activeClassName);
    newProductCollection[sliderIndex - 1].classList.add('new-product__product-preview--active');
  };

  var plusSlider = function plusSlider(n) {
    showSlider(sliderIndex += (_readOnlyError("sliderIndex"), n));
  };

  leftArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  });
  rightArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  });
  window.new_product = {
    removeActiveClass: removeActiveClass
  };
})();