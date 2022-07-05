const swiper = new Swiper('.slider', {
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