(function () {
  var inputEmail = document.querySelector('.contacts__input-email');
  var formEmail = document.querySelector('.contacts__form-input');

  var ENTER_KEY_CODE = 13;

  var clearHintText = function () {
    inputEmail.setCustomValidity('');
  }

  var successSend = function () {
    formEmail.reset();
    inputEmail.setCustomValidity('Данные о e-mail успешно отправлены');
    setTimeout(clearHintText, 1000);
  }

  var errorSend = function () {
    inputEmail.setCustomValidity('Данные о e-mail не были отправлены. Попробуйте ещё раз');
    setTimeout(clearHintText, 1000);
  }

  formEmail.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(formEmail), successSend, errorSend);
    evt.preventDefault();
  });

})();
