
const filter = (headerSelector, btnSelector, contentSelector, activeClass) => {

  const header = document.querySelector(headerSelector),
        btn = document.querySelectorAll(btnSelector),
        content = document.querySelectorAll(contentSelector);

  function hideFilterContent() {
    btn.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showFilterContent(i = 0) {
    btn[i].classList.add(activeClass);
  }


  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target &&
      (target.classList.contains(btnSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(btnSelector.replace(/\./, '')))) {
        
      btn.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideFilterContent();
          showFilterContent(i);
        }
      });

      let filterClass = target.dataset.filter;

      content.forEach(item => {
        if (!item.classList.contains(filterClass) && filterClass !== 'all') {
          item.classList.add('hide');
        } else {
          item.classList.remove('hide');
        }
      });
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  filter('.filter', '.filter__btn', '.popular__item', 'filter__btn--active');
});


// const filterBox = document.querySelectorAll('.popular__item'),
//       filterBtn = document.querySelectorAll('.filter__btn');

// filterBtn.forEach(item => {

//   item.addEventListener('click', function (e) {

//     if (!e.target.classList.contains('filter__btn')) {
//       return false;
//     }

//     filterBtn.forEach(child =>{
//       child.classList.remove('filter__btn--active');
//     });

//     item.classList.add('filter__btn--active');

//     let filterClass = e.target.dataset.filter;

//     filterBox.forEach(item => {
//       if (!item.classList.contains(filterClass) && filterClass !== 'all') {
//         item.classList.add('hide');
//       } else {
//         item.classList.remove('hide');
//       }
//     });
//   });
// });