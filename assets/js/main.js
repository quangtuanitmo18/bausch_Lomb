const navbarPerpageValue = document.getElementsByClassName(
  "swiper__nav--perpage"
);
// console.log(perPageCurrent[1].getAttribute("aria-label"));
const prevPage = document.getElementsByClassName(
  "swiper-button-prev__responsive"
);
const nextPage = document.getElementsByClassName(
  "swiper-button-next__responsive"
);
// console.log(navbarPerpageValue);
const perPageCurrent = document.getElementsByClassName("swiper-slide-active");

navbarPerpageValue[0].innerHTML = perPageCurrent[1].getAttribute("aria-label");
// console.log(prevPage);
prevPage[0].addEventListener("click", function () {
  const perPageCurrent = document.getElementsByClassName("swiper-slide-active");
  //   console.log("hello");
  navbarPerpageValue[0].innerHTML =
    perPageCurrent[1].getAttribute("aria-label");
});
nextPage[0].addEventListener("click", function () {
  const perPageCurrent = document.getElementsByClassName("swiper-slide-active");
  //   console.log("hello");
  navbarPerpageValue[0].innerHTML =
    perPageCurrent[1].getAttribute("aria-label");
});

// console.log(navbarPerpageValue.textContent);
