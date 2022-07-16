//// ================================ Imports ======================================
"use strict";
//scss
import "bootstrap/dist/css/bootstrap-grid.css";
import "nouislider/dist/nouislider.css";
import "../scss/index.scss";

//js
import $ from "jquery";
import Swiper from "swiper";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import IMask from "imask";
import Choices from "choices.js";
import autoComplete from "@tarekraafat/autocomplete.js";
import validate from "validate.js";
import ApexCharts from "apexcharts";
import { rippleEffect, Ripple } from "data-ripple";
import noUiSlider from "nouislider";
import Scrollbar from "smooth-scrollbar";
import { faqs, info } from "./sourse.js";
import ClipboardJS from "clipboard";
import { platformPage } from "./platform";
import { homePage } from "./home";
import { showFaqs } from "./faqs";
import { logIn } from "./login";


//// ================================ Code ======================================
platformPage();
homePage();
showFaqs();
logIn();

const initItems = {
  toTop: document.querySelector("[data-scroll-top]"),
  togglePopup: document.querySelectorAll("[data-toggle]"),
  btnReturn: document.querySelector(".btn-return"),
  platformItems: document.querySelectorAll("[data-platform-items]"),
  invite: document.querySelector(".c-invite"),
};

const link = initItems.invite.querySelector(".c-invite__link-copy");
const copyPopup = document.querySelector(".m-popup-copy");
new ClipboardJS(".c-invite__link-copy");

link.onclick = function () {
  copyPopup.classList.add("--active");

  setTimeout(() => {
    copyPopup.classList.remove("--active");
  }, 2000);
};

copyPopup.onclick = function () {
  copyPopup.classList.remove("--active");
};

initItems.toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (document.body.scrollTop > 500) {
    initItems.toTop.classList.add("--active");
    if (initItems.btnReturn) {
      initItems.btnReturn.classList.add("--on-scroll");
    }
  } else {
    initItems.toTop.classList.remove("--active");
    if (initItems.btnReturn) {
      initItems.btnReturn.classList.remove("--on-scroll");
    }
  }
};

initItems.togglePopup.forEach((btn) => {
  const block = btn.parentNode;
  btn.onclick = function () {
    block.classList.contains("--active")
      ? block.classList.remove("--active")
      : block.classList.add("--active");
  };

  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('[data-toggle]')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      block.classList.remove("--active")// то закрываем окно навигации, удаляя активный класс
    }
  })
});



const header = document.querySelector("header");
if (header) {
  const headerItems = {
    burgerMenu: header.querySelectorAll("[data-burger-menu]"),
    nav: header.querySelector("nav"),
  };

  headerItems.burgerMenu.forEach((btn) => {
    btn.onclick = function () {
      header.classList.contains("--active")
        ? header.classList.remove("--active")
        : header.classList.add("--active");
    };
  });

  const anchors = headerItems.nav.querySelectorAll("a[href*='#']");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
