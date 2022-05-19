// document.querySelector('.menu__link--click').addEventListener('click', () => {
//   document.querySelector('.sub-menu').classList.toggle('active-menu');
// });

document.querySelector('.form__select').addEventListener('click', () => {
  document.querySelector('.form__wrapper').classList.toggle('form__wrapper--active');
  document.querySelector('.form__select').classList.toggle('form__select--active');
});


// let select = function () {
//   let selectOption = document.querySelectorAll('.form__option');

//   selectOption.forEach( item => {
//     item.addEventListener('click', () => {
//     this.parentElement.classList.toggle('is-active');
//   })
//   })
// };
