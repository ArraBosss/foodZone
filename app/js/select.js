// //Polyfill for method "forEach"
// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (var i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }




function selectDropDown(wrappSelector, contentSelector, btnSelector, activeClass) {

  const wrapp = document.querySelectorAll(wrappSelector);


  wrapp.forEach(function (dropDownWrapper) {

    const container = dropDownWrapper.querySelector(contentSelector),
      dropBtn = dropDownWrapper.querySelector(btnSelector);


    dropBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (!container.classList.contains('active')) {
        container.classList.add('active');
        dropBtn.classList.add(activeClass);
        container.style.height = 'auto';

        let height = container.clientHeight + "px";

        container.style.height = '0px';

        setTimeout(function () {
          container.style.height = height;
        }, 0);
      } else {
        container.style.height = '0px';
        dropBtn.classList.remove(activeClass);

        container.addEventListener('transitionend', function () {
          container.classList.remove('active');

        }, {
          once: true
        });
      }
    });
  });
}



function dropDown(wrappSelector, contentSelector, btnSelector,
  activeClass, closeSelector, optionSelector, currentSelector) {

  const wrapp = document.querySelectorAll(wrappSelector);

  wrapp.forEach(function (dropDownWrapper) {

    const container = dropDownWrapper.querySelector(contentSelector),
      dropBtn = dropDownWrapper.querySelector(btnSelector),
      option = container.querySelectorAll(optionSelector),
      current = dropDownWrapper.querySelector(currentSelector);


    dropBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (!container.classList.contains('active')) {
        container.classList.add('active');
        dropBtn.classList.add(activeClass);
        dropBtn.classList.remove(closeSelector);
        container.style.height = 'auto';

        let height = container.clientHeight + "px";

        container.style.height = '0px';

        setTimeout(function () {
          container.style.height = height;
        }, 0);
      } else {
        dropBtn.classList.add(closeSelector);
        container.style.height = '0px';
        dropBtn.classList.remove(activeClass);

        container.addEventListener('transitionend', function () {
          container.classList.remove('active');

        }, {
          once: true
        });
      }
    });


    option.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.stopPropagation();

        // option.forEach((item) => {
        //   item.style.backgroundColor = '#2e2f37';
        // });

        // this.style.backgroundColor = '#FF0000';

        dropBtn.innerText = this.innerText;
        current.value = this.dataset.value;

        dropBtn.classList.add(closeSelector);
        container.style.height = '0px';
        dropBtn.classList.remove(activeClass);

        container.addEventListener('transitionend', function () {
          container.classList.remove('active');
        }, {
          once: true
        });
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropBtn && dropBtn.classList.contains(activeClass)) {
        dropBtn.classList.add(closeSelector);
        container.style.height = '0px';
        dropBtn.classList.remove(activeClass);

        container.addEventListener('transitionend', function () {
          container.classList.remove('active');

        }, {
          once: true
        });
      }
    });

    document.addEventListener('keydown', function (e) {
      if (dropBtn.classList.contains(activeClass) && 
      (e.key === 'Tab' || e.key === 'Escape')) {
        dropBtn.classList.add(closeSelector);
        container.style.height = '0px';
        dropBtn.classList.remove(activeClass);

        container.addEventListener('transitionend', function () {
          container.classList.remove('active');

        }, {
          once: true
        });
      }
    });
  });
}







window.addEventListener('DOMContentLoaded', () => {
  selectDropDown('.menu__item--sub', '.sub-menu', '.menu__btn', 'menu__btn--active');
  selectDropDown('.delivery__item', '.delivery__content', '.delivery__button', 'delivery__button--active');

  dropDown('.form__select', '.form__wrapper', '.form__button', 'form__button--active', 'close',
  '.form__option', '.form__time');
});




















































// function dropDown(wrappSelector, contentSelector, btnSelector,
//   activeClass = null, closeSelector = null, optionSelector = null, currentSelector = null) {

//   const wrapp = document.querySelectorAll(wrappSelector);



//   wrapp.forEach(function (dropDownWrapper) {


//     const container = dropDownWrapper.querySelector(contentSelector),
//       dropBtn = dropDownWrapper.querySelector(btnSelector),
//       option = container.querySelectorAll(optionSelector),
//       current = dropDownWrapper.querySelector(currentSelector);



//     dropBtn.addEventListener('click', function (e) {
//       e.preventDefault();

//       if (!container.classList.contains('active')) {
//         container.classList.add('active');
//         dropBtn.classList.add(activeClass);
//         dropBtn.classList.remove(closeSelector);
//         container.style.height = 'auto';

//         let height = container.clientHeight + "px";

//         container.style.height = '0px';

//         setTimeout(function () {
//           container.style.height = height;
//         }, 0);
//       } else {
//         dropBtn.classList.add(closeSelector);
//         container.style.height = '0px';
//         dropBtn.classList.remove(activeClass);

//         container.addEventListener('transitionend', function () {
//           container.classList.remove('active');

//         }, {
//           once: true
//         });
//       }


//     });


//     option.forEach(function (item) {
//       item.addEventListener('click', function (e) {
//         e.stopPropagation();

//         // option.forEach((item) => {
//         //   item.style.backgroundColor = '#2e2f37';
//         // });

//         // this.style.backgroundColor = '#FF0000';

//         dropBtn.innerText = this.innerText;
//         current.value = this.dataset.value;

//         dropBtn.classList.add(closeSelector);
//         container.style.height = '0px';
//         dropBtn.classList.remove(activeClass);

//         container.addEventListener('transitionend', function () {
//           container.classList.remove('active');
//         }, {
//           once: true
//         });
//       });




//     });

//     // document.addEventListener('click', function (e) {

//     //   if (e.target !== dropBtn && e.target !== option) {
//     //     dropBtn.classList.add(closeSelector);
//     //     container.style.height = '0px';
//     //     dropBtn.classList.remove(activeClass);

//     //     container.addEventListener('transitionend', function () {
//     //       container.classList.remove('active');

//     //     }, {
//     //       once: true
//     //     });
//     //   }
//     // });



//     // document.addEventListener('keydown', function (e) {
//     //   if (e.key === 'Tab' || e.key === 'Escape') {
//     //     dropBtn.classList.add(closeSelector);
//     //     container.style.height = '0px';
//     //     dropBtn.classList.remove(activeClass);

//     //     container.addEventListener('transitionend', function () {
//     //       container.classList.remove('active');

//     //     }, {
//     //       once: true
//     //     });
//     //   }
//     // });



//   });
// }















// window.addEventListener('DOMContentLoaded', () => {
//   dropDown('.menu__item--sub', '.sub-menu', '.menu__btn', 'menu__btn--active');
//   dropDown('.form__select', '.form__wrapper', '.form__button', 'form__button--active', 'close', '.form__option',
//     '.form__time');
//   dropDown('.delivery__item', '.delivery__content', '.delivery__button', 'delivery__button--active');
// });






























// document.querySelectorAll('.form__select').forEach(function (dropDownWrapper) {

//   const dropDownBtn = dropDownWrapper.querySelector('.form__button'),
//     dropDownList = dropDownWrapper.querySelector('.form__wrapper'),
//     dropDownListItems = dropDownList.querySelectorAll('.form__option'),
//     dropDownInput = dropDownWrapper.querySelector('.form__time');

//   dropDownBtn.addEventListener('click', () => {
//     dropDownList.classList.toggle('form__wrapper--active');
//     dropDownBtn.classList.toggle('form__button--active');
//   });

//   dropDownListItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (e) {
//       e.stopPropagation();
//       dropDownBtn.innerText = this.innerText;
//       dropDownInput.value = this.dataset.value;
//       dropDownList.classList.remove('form__wrapper--active');
//       dropDownBtn.classList.remove('form__button--active');
//     });
//   });

//   document.addEventListener('click', function (e) {

//     if (e.target !== dropDownBtn) {
//       dropDownList.classList.remove('form__wrapper--active');
//       dropDownBtn.classList.remove('form__button--active');
//     }
//   });

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Tab' || e.key === 'Escape') {
//       dropDownBtn.classList.remove('form__button--active');
//       dropDownList.classList.remove('form__wrapper--active');
//     }
//   });
// });

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