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

// fadein
const sr = ScrollReveal({
  distance: "80px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".banner__text", { delay: 200, origin: "bottom" });
sr.reveal(".banner__avt--3", {
  delay: 400,
  origin: "right",
  duration: 3500,
  distance: "100px",
});
sr.reveal(".banner__avt--1", {
  delay: 800,
  origin: "left",
  duration: 3500,
  distance: "100px",
});
sr.reveal(".banner__avt--2", {
  delay: 600,
  origin: "left",
  duration: 3500,
  distance: "100px",
});

sr.reveal(".banner__download--left", {
  delay: 400,
  origin: "top",
  duration: 4000,
  distance: "100px",
});
sr.reveal(".banner__download--right", {
  delay: 800,
  origin: "top",
  duration: 4300,
  distance: "100px",
});
