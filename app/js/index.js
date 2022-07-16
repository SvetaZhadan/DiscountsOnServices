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
import { platformPage } from "./platform";
import { homePage } from "./home";
import { showFaqs } from "./faqs";

//// ================================ Code ======================================
platformPage();
homePage();
showFaqs();

const initItems = {
  toTop: document.querySelector("[data-scroll-top]"),
  togglePopup: document.querySelectorAll("[data-toggle]"),
  btnReturn: document.querySelector(".btn-return"),
};

initItems.toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// cards.forEach((card, i) => {
//   const btn = card.querySelector(".b-button");
//   btn.onclick = function () {
//     homePage.style.display = "none";
//     platformPage.style.height = platformItems.height + 620 + "px";

//     setTimeout(() => {
//       platformPage.style.height = "auto";
//     }, 300);
//     platformPage.classList.add("--active");
//     platformItems.btnReturn.style.display = "block";

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//     const cardTemp = platformItems.cards.querySelector(".c-card-temp");

//     platformPage.querySelector(".name").textContent = info[i].name;
//     platformPage.querySelector(".subtitle").textContent = info[i].subtitle;

//     info[i].plans.forEach((item) => {
//       setCard(cardTemp, item, ".c-card");
//       if (item.newprice) {
//         platformItems.toggle.style.display = "block";
//       }

//       // console.log(item.items, "items");

//       // for (const key in item.items) {
//       //   console.log(item.items[key]);
//       //   platformPage.querySelector(".items").innerHTML +=
//       //     "<li>" + item.items[key] + "</li>";
//       // }
//     });
//   };
// });

// platformItems.btnReturn.onclick = function () {
//   platformItems.btnReturn.style.display = "none";

//   platformPage.style.height = 0 + "px";
//   platformItems.toggle.style.display = "none";
//   platformPage.classList.remove("--active");
//   homePage.style.display = "block";

//   platformItems.cards.querySelectorAll(".c-card").forEach((item) => {
//     item.remove();
//     if (platformItems.toggle) {
//       platformItems.toggle.classList.remove("--toggle");
//       platformItems.toggle.querySelector(".b-toggle__input").checked = false;
//     }
//   });

//   window.scrollTo({
//     top: homeItems.choses.offsetHeight - 300,
//   });
// };

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

// platformItems.toggle.onchange = function () {
//   const cards = platformPage.querySelectorAll(".c-card");

//   if (platformItems.toggle.classList.contains("--toggle")) {
//     platformItems.toggle.classList.remove("--toggle");
//     changePrice(cards, "block", "none");
//   } else {
//     platformItems.toggle.classList.add("--toggle");
//     changePrice(cards, "none", "block");
//   }
// };

// if (document.querySelector(".faqs")) {

//   faqs.forEach((item) => {
//     const parent = document.querySelector(".faq");
//     const catdTemp = parent.querySelector(".c-faqs-temp");
//     setCard(catdTemp, item, ".c-faqs");
//   });

//   const accordion = document.querySelectorAll(".c-faqs");

//   accordion.forEach((item) => {
//     const quest = item.querySelector(".question").parentNode;
//     const answ = item.querySelector(".answer");
//     const height = answ.clientHeight;

//     answ.style.height = 0 + "px";

//     quest.onclick = function () {
//       if (item.classList.contains("--active")) {
//         item.classList.remove("--active");
//         answ.style.height = 0 + "px";
//       } else {
//         item.classList.add("--active");
//         answ.style.height = height + "px";
//       }
//     };
//   });
// }

// // const datatoggle = document.querySelectorAll("[data-toggle]");
initItems.togglePopup.forEach((btn) => {
  const block = btn.parentNode;
  btn.onclick = function () {
    block.classList.contains("--active")
      ? block.classList.remove("--active")
      : block.classList.add("--active");
  };
});

const header = document.querySelector("header");
if (header) {
  const headerItems = {
    burgerMenu: header.querySelectorAll("[data-burger-menu]"),
  };

  headerItems.burgerMenu.forEach((btn) => {
    btn.onclick = function () {
      header.classList.contains("--active")
        ? header.classList.remove("--active")
        : header.classList.add("--active");
    };
  });
}
