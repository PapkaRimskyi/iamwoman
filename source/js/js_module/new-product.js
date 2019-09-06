(function () {
  const leftArrow = document.querySelector('.switch-arrow-left');
  const rightArrow = document.querySelector('.switch-arrow-right');
  const newProductCollection = document.querySelectorAll('.new-product__product-preview');
  const activeClassName = 'new-product__product-preview--active';
  const sliderIndex = 2;

  let removeActiveClass = function (coll, activeCls) {
    for (let i = 0; i < coll.length; i++) {
      if (coll[i].classList.contains(activeCls)) {
        coll[i].classList.remove(activeCls);
      }
    }
  }

  let showSlider = function (n) {
    if (n > newProductCollection.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = newProductCollection.length;
    }
    removeActiveClass(newProductCollection, activeClassName);
    newProductCollection[sliderIndex - 1].classList.add('new-product__product-preview--active');
  }

  let plusSlider = function (n) {
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
