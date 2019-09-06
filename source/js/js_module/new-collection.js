(function () {
  const projectHeader = document.querySelector('.project-header');
  const newCollectionProduct = document.querySelectorAll('.new-collection__product');
  const collectionSwitchLeft = document.querySelector('.collection-switch-left');
  const collectionSwitchRight = document.querySelector('.collection-switch-right');
  const activeClassName = 'new-collection__product--active';
  const projectHeaderBgCollection = ['project-header--product1', 'project-header--product2', 'project-header--product3'];

  let productIndex = 1;

  let switchProductBG = function () {
    for (let i = 0; i < newCollectionProduct.length; i++) {
      if (newCollectionProduct[i].classList.contains(activeClassName)) {
        projectHeader.className = 'project-header';

        projectHeader.classList.add(projectHeaderBgCollection[i]);
      }
    }
  }

  let showNextProduct = function (n) {
    let currentProductIndex = document.querySelector('.new-collection__product-currently');
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
  }

  let plusSlider = function (n) {
    showNextProduct(productIndex += n);
  }

  collectionSwitchLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  })

  collectionSwitchRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  })
})();
