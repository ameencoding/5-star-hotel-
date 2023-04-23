"use strict";

const menu = document.querySelector(".hambuger");
const header = document.querySelector(".header");
const scrollBtn = document.querySelector(".scroll-top");

menu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

window.addEventListener("scroll", function () {
  this.window.scrollY > 400
    ? scrollBtn.classList.add("active")
    : scrollBtn.classList.remove("active");
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
