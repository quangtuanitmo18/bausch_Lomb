var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 11,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   thumbs: {
  //     swiper: swiper,
  //   },
  allowTouchMove: false,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 20,
  allowTouchMove: false,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    1: {
      slidesPerView: 1,
      //   spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      //   spaceBetween: 20
    },
  },
});
