(function () {
  var leftArrow = document.querySelector('.switch-arrow-left');
  var rightArrow = document.querySelector('.switch-arrow-right');
  var newProductCollection = document.querySelectorAll('.new-product__product-preview');
  var activeClassName = 'new-product__product-preview--active';
  var sliderIndex = 2;

  var removeActiveClass = function (coll, activeCls) {
    for (var i = 0; i < coll.length; i++) {
      if (coll[i].classList.contains(activeCls)) {
        coll[i].classList.remove(activeCls);
      }
    }
  }

  var showSlider = function (n) {
    if (n > newProductCollection.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = newProductCollection.length;
    }
    removeActiveClass(newProductCollection, activeClassName);
    newProductCollection[sliderIndex - 1].classList.add('new-product__product-preview--active');
  }

  var plusSlider = function (n) {
    showSlider(sliderIndex += n);
  }

  leftArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  })

  rightArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  })

  window.new_product = {
    removeActiveClass: removeActiveClass
  }
})();
