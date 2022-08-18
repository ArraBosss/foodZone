// const dropDownMenu = document.querySelector('.sub-menu'),
//   menuClick = document.querySelector('.menu__link--click');

// menuClick.addEventListener('click', (e) => {
//   e.preventDefault();
//   dropDownMenu.classList.toggle('down');
//   if (dropDownMenu.classList.contains('down')) {
//     setTimeout(function () {
//       dropDownMenu.style.overflow = 'visible';
//     }, 500);
//   } else {
//     dropDownMenu.style.overflow = 'hidden';
//   }
// });


// document.querySelectorAll('.accordion').forEach(function(dropDown) {

//     let container = dropDown.querySelector('.toggleMe');
//     let toggleBtn = dropDown.querySelector('.drop-down');
    
//     toggleBtn.addEventListener('click', function (e) {
//         e.preventDefault();
    
//         if (!container.classList.contains('active')) {
//             container.classList.add('active');
//             toggleBtn.classList.add('drop-down--active');
//             container.style.height = 'auto';
    
//             let height = container.clientHeight + "px";
    
//             container.style.height = '0px';
    
//             setTimeout(function () {
//                 container.style.height = height;
//             }, 0);
//         } else {
//             container.style.height = '0px';
//             toggleBtn.classList.remove('drop-down--active');
    
//             container.addEventListener('transitionend', function () {
//                 container.classList.remove('active');
//             }, {
//                 once: true
//             });
//         }
//     });

// });











// document.addEventListener('DOMContentLoaded', () => {

//   const burger = document.querySelector('.burger');
//   const sideNav = document.querySelector('.menu');
//   const bodyLock = document.querySelector('body');
//   const overlay = document.querySelector('.overlay');

//   burger.addEventListener('click', () => {
//     sideNav.classList.toggle('menu--active');

//     if (sideNav.classList.contains('menu--active')) {
//       burger.classList.add('burger--active');
//       bodyLock.classList.add('lock');
//       overlay.classList.add('overlay--active');
//     } else {
//       burger.classList.remove('burger--active');
//       bodyLock.classList.remove('lock');
//       overlay.classList.remove('overlay--active');

//     }

//   });

// });


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

