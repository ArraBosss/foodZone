const dropDownMenu = document.querySelector('.sub-menu'),
  menuClick = document.querySelector('.menu__link--click');

menuClick.addEventListener('click', (e) => {
  e.preventDefault();
  dropDownMenu.classList.toggle('down');
  if (dropDownMenu.classList.contains('down')) {
    setTimeout(function () {
      dropDownMenu.style.overflow = 'visible';
    }, 500);
  } else {
    dropDownMenu.style.overflow = 'hidden';
  }
});


//Плавный скролл


// const order = document.querySelector('#order'),
//       visitBtn = document.querySelector('.hero__btn--visit');

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








document.addEventListener('DOMContentLoaded', () => {

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


// const logo = document.querySelector('.logo');
// let clonedLogo = logo.cloneNode(true);
// const buttonIn = document.querySelector('.button__in');
// const menu = document.querySelector('.menu__list');


// // if (document.documentElement.clientWidth < 700) {
// //   menu.prepend(clonedLogo);
// //   menu.append(buttonIn);
// // }


// function checkMediaQuery() {
//   if (document.documentElement.clientWidth < 768) {
//     menu.prepend(clonedLogo);
//   menu.append(buttonIn);
//   } else if (window.innerWidth < 768) {
//     menu.remove(clonedLogo);
//   }
// }
// window.addEventListener('resize', checkMediaQuery);


