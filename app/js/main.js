// document.querySelector('.menu__link--click').addEventListener('click', () => {
//   document.querySelector('.sub-menu').classList.toggle('active-menu');
// });

import tabs from "./tabs"

window.addEventListener('DOMContentLoader', () => {
  tabs('.kitchen__list', '.kitchen__item', '.popular', 'active');
})

