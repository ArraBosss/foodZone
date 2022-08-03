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


document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const sideNav = document.querySelector('.menu__list');
  const bodyLock = document.querySelector('body');
  const overlay = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    sideNav.classList.toggle('menu__list--active');

    if (sideNav.classList.contains('menu__list--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock');
      overlay.classList.add('menu--active');
    } else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
      overlay.classList.remove('menu--active');
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


