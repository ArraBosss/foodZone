const swiperMain = new Swiper('.slider__swiper', {
  loop: true,

  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

  autoplay: {
    disableOnInteraction: false,
  },
});

const swiperStock = new Swiper('.stock-slider', {
  loop: true,
  slidesPerView:1,
  spaceBetween: 30,

  breakpoints: {  
    993: {
      slidesPerView: 3,

    }
  },

  navigation: {
    nextEl: '.stock-slider__next',
    prevEl: '.stock-slider__prev'
  },
});