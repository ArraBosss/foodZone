const dropDownBtn = document.querySelector('.form__select'),
      dropDownList = document.querySelector('.form__wrapper'),




document.querySelector('.form__select').addEventListener('click', () => {
  document.querySelector('.form__wrapper').classList.toggle('form__wrapper--active');
  document.querySelector('.form__select').classList.toggle('form__select--active');
});

document.querySelectorAll('.form__option').forEach( function (listItem){
  listItem.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.form__current').innerText = this.innerText;
    document.querySelector('.form__time').value = this.dataset.value;
    document.querySelector('.form__wrapper').classList.remove('form__wrapper--active');
    document.querySelector('.form__select').classList.remove('form__select--active');

  })
})

document.addEventListener('click', function (e) {
  
  if (e.target !== document.querySelector('.form__select')) {
    document.querySelector('.form__wrapper').classList.remove('form__wrapper--active');
    document.querySelector('.form__select').classList.remove('form__select--active');
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    document.querySelector('.form__wrapper').classList.remove('form__wrapper--active');
    document.querySelector('.form__select').classList.remove('form__select--active');
  }
})