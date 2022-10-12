//Бургер меню
window.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const sideNav = document.querySelector('.menu');
  const bodyLock = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    sideNav.classList.toggle('menu--active');

    if (sideNav.classList.contains('menu--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock');
      overlay.classList.add('overlay--active');
    } else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
      overlay.classList.remove('overlay--active');
    }
  });

});


// // Плавный скролл

// const order = document.querySelector('#order'),
//       visitBtn = document.querySelector('.hero__btn--visit'),
//       kitchen = document.querySelector('#kitchen'),
//       foodBtn = document.querySelector('.hero__btn--food');

// function scrollTo(e) {
//   window.scroll({
//     left: 0,
//     top: e.offsetTop,
//     behavior: 'smooth'
//   });
// }

// visitBtn.addEventListener('click', () => {
// scrollTo(order);
// });

// foodBtn.addEventListener('click', () => {
// scrollTo(kitchen);
// });

