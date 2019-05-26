(function () {
  var blogLine = document.querySelector('.blog__slider-line');
  var blogPin = blogLine.querySelector('.blog__slider-pin');
  var blogArticleContainer = document.querySelector('.blog__container');
  var sliderCounterMargin = document.querySelector('.blog__slider-counter--margin');
  var currentSlide = document.querySelector('.blog__slider-counter--current-slide');

  var defaultCoords;
  var MIN_PX_LEVEL_LINE = 0;
  var MAX_PX_LEVEL_LINE = 208 - 78;
  var SLIDE_COUNT = 4;

  blogPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    defaultCoords = {x: evt.clientX};
    document.addEventListener('mousemove', pinMove);
    document.addEventListener('mouseup', pinUp);
  });

  var pinMove = function (evtMove) {
    evtMove.preventDefault();
    findPinCoords(evtMove);
  };

  var pinUp = function (evtUp) {
    evtUp.preventDefault();
    findPinCoords(evtUp);
    document.removeEventListener('mousemove', pinMove);
    document.removeEventListener('mouseup', pinMove);
  }

  var showSlide = function (leftCoord) {
    var coordGap = MAX_PX_LEVEL_LINE / SLIDE_COUNT;
    var coordMin = 0;
    var sliderCount = 1;
    var coordMax = coordGap;
    var translateX = 0;
    var increaseX = 281.5;
    var margin = 7;
    var marginIncrease = 43;
    for (var i = 0; i < SLIDE_COUNT; i++) {
      if (leftCoord <= coordMin || leftCoord <= coordMax) {
        blogArticleContainer.style.transform = 'translateX(-' + translateX + 'px' + ')';
        sliderCounterMargin.style.marginLeft = margin + 'px';
        currentSlide.innerHTML = '0' + sliderCount + '/';

      } else {
        coordMin += coordGap;
        coordMax += coordGap;
        translateX += increaseX;
        margin += marginIncrease;
        sliderCount += 1;
      }
    }
  }

  var findPinCoords = function (evtMove) {
    var shift = {x: defaultCoords.x - evtMove.clientX};
    defaultCoords = {x: evtMove.clientX};
    var pinCoordsLeft = (blogPin.offsetLeft - shift.x);
    if (MIN_PX_LEVEL_LINE <= pinCoordsLeft && pinCoordsLeft <= MAX_PX_LEVEL_LINE) {
      blogPin.style.left = pinCoordsLeft + 'px';
      showSlide(pinCoordsLeft);
    }
  };
})();
