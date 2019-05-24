(function () {
  var projectHeader = document.querySelector('.project-header');
  var newCollectionProduct = document.querySelectorAll('.new-collection__product');
  var collectionSwitchLeft = document.querySelector('.collection-switch-left');
  var collectionSwitchRight = document.querySelector('.collection-switch-right');
  var activeClassName = 'new-collection__product--active';
  var projectHeaderBgCollection = ['project-header--product1', 'project-header--product2', 'project-header--product3'];

  var productIndex = 1;

  var switchProductBG = function () {
    for (var i = 0; i < newCollectionProduct.length; i++) {
      if (newCollectionProduct[i].classList.contains(activeClassName)) {
        projectHeader.className = 'project-header';

        projectHeader.classList.add(projectHeaderBgCollection[i]);
      }
    }
  }

  var showNextProduct = function (n) {
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
  }

  var plusSlider = function (n) {
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
