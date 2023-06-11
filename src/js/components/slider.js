import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.rooms__content', {
  slidesPerView: '1',
  spaceBetween: 40,
  scrollbar: {
    el: '.rooms__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.rooms__slider-btn--next',
    prevEl: '.rooms__slider-btn--prev',
  },
});
