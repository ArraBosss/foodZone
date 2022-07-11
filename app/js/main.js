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







// const menuClientHeight = document.getElementById('sub-menu').clientHeight,
// menuLink = document.querySelector('.sub-menu__link');


// if (menuClientHeight > 0) {
//   dropDownMenu.addEventListener('keydown', (e) => {
//     if (e.key == 'Tab') {
//       e.preventDefault();
//     }
//   });
// }

// if (menuClientHeight <= 0) {
//   menuLink.tabIndex = -1;
// } else {
//   menuLink.tabIndex = 1;
// }

    
