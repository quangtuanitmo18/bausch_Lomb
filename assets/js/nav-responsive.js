const burger = document.getElementsByClassName("header-inner__burger");

const close = document.getElementsByClassName("nav-responsive__close");
const responsiveMenu = document.getElementsByClassName("nav-responsive");
burger[0].addEventListener("click", function () {
  //   console.log("dsad");
  responsiveMenu[0].classList.add("active");
});

close[0].addEventListener("click", function () {
  responsiveMenu[0].classList.remove("active");
});
