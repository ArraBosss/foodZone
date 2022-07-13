//Polyfill for method "forEach"
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.form__select').forEach(function (dropDownWrapper) {

  const dropDownBtn = dropDownWrapper.querySelector('.form__button'),
        dropDownList = dropDownWrapper.querySelector('.form__wrapper'),
        dropDownListItems = dropDownList.querySelectorAll('.form__option'),
        dropDownInput = dropDownWrapper.querySelector('.form__time'),
        dropDownCurrent = dropDownWrapper.querySelector('.form__current');


  dropDownBtn.addEventListener('click', () => {
    dropDownList.classList.toggle('form__wrapper--active');
    dropDownBtn.classList.toggle('form__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownCurrent.innerText = this.innerText;
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('form__wrapper--active');
      dropDownBtn.classList.remove('form__button--active');
    });
  });

  document.addEventListener('click', function (e) {

    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('form__wrapper--active');
      dropDownBtn.classList.remove('form__button--active');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('form__button--active');
      dropDownList.classList.remove('form__wrapper--active');
    }
  });
});


//Limiting the number of guests
const inputs = document.querySelectorAll('input[type=number]');
Array.from(inputs).forEach(input => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener('input', (e) => {
    const value = +input.value;
    if (value > max) {
      input.value = max;
    } else if (value < min) {
      input.value = min;
    }
  });
});