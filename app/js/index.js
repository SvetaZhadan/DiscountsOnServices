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
//// ================================ Code ======================================
const platformpage = document.querySelector(".platform-page");
const homePage=document.querySelector('.home-page');
const platformpageHeight=platformpage.clientHeight;
platformpage.style.height=0+'px';

  const parent = document.querySelector(".home-page__choses");
  info.forEach((item) => {
    const cardTemp = parent.querySelector(".c-choose-temp");
    setCard(cardTemp, item, ".c-choose");
  });

  const card = parent.querySelectorAll(".c-choose");
  card.forEach((card, i) => {
    const btn = card.querySelector(".b-button");
    btn.onclick = function () {
      homePage.style.display='none';
      platformpage.style.height=400+'px'

      const parent = document.querySelector(".platform-page__cards");
      const cardTemp = parent.querySelector(".c-card-temp");
      platformpage.querySelector(".name").textContent = info[i].name;

      info[i].plans.forEach((item) => {
          setCard(cardTemp, item, ".c-card");
      });
    };
  });


if (document.querySelector(".faqs")) {
  faqs.forEach((item) => {
    const parent = document.querySelector(".faq");
    const catdTemp = parent.querySelector(".c-faqs-temp");
    setCard(catdTemp, item, ".c-faqs");
  });

  const accordion = document.querySelectorAll(".c-faqs");

  accordion.forEach((item) => {
    const quest = item.querySelector(".question").parentNode;
    const answ = item.querySelector(".answer");

    const height = answ.clientHeight;
    answ.style.height = 0 + "px";
    quest.onclick = function () {
      if (item.classList.contains("--active")) {
        item.classList.remove("--active");
        answ.style.height = 0 + "px";
      } else {
        item.classList.add("--active");
        answ.style.height = height + "px";
      }
    };
  });
}

if (document.querySelector("header")) {
  const datatoggle = document.querySelectorAll("[data-toggle]");
  const burgerMenu = document.querySelectorAll("[data-burger-menu]");
  const header = document.querySelector("header");

  datatoggle.forEach((btn) => {
    const block = btn.parentNode;
    btn.onclick = function () {
      block.classList.contains("--active")
        ? block.classList.remove("--active")
        : block.classList.add("--active");
    };
  });

  burgerMenu.forEach((btn) => {
    btn.onclick = function () {
      header.classList.contains("--active")
        ? header.classList.remove("--active")
        : header.classList.add("--active");
    };
  });
}

function makeClone(template, name) {
  return template.content.cloneNode(true).querySelector(name);
}

function setCard(template, item, card) {
  const content = makeClone(template, card);

  const keys = Object.keys(item);

  for (const key of keys) {
    const element = content.querySelector(`.${key}`);

    if (key === "plans") {
      continue;
    }
    if (key === "subtitle") {
      continue;
    }
    if (key === "link") {
      element.href = "#" + item[key];
    } else {
      element.textContent = item[key];
    }

    if (key === "img") {
      element.src = item[key];
    }
  }
  template.parentElement.appendChild(content);
}
