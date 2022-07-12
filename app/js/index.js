//// ================================ Imports ======================================
"use strict";
//scss
import "bootstrap/dist/css/bootstrap-grid.css";
import "nouislider/dist/nouislider.css";
import "../scss/index.scss";

//js
// import $ from 'jquery';
// import Swiper from 'swiper';
// import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
// import IMask from 'imask';
// import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
// import validate from 'validate.js';
// import ApexCharts from 'apexcharts';
// import { rippleEffect, Ripple } from 'data-ripple';
// import noUiSlider from 'nouislider';
// import Scrollbar from 'smooth-scrollbar';
import { faqs, info } from "./sourse.js";
//// ================================ Code ======================================

const platformpage = document.querySelector(".platform-page");

const homePage = document.querySelector(".home-page");
const toggle = platformpage.querySelector(".b-toggle");
const btnReturn = platformpage.querySelector(".btn-return");
const platformpageHeight = platformpage.clientHeight;
platformpage.style.height = 0 + "px";
const parent = document.querySelector(".home-page__choses");

info.forEach((item) => {
  const cardTemp = parent.querySelector(".c-choose-temp");
  setCard(cardTemp, item, ".c-choose");
});

const chose = document.querySelectorAll(".c-choose");

for (const key of chose) {
  key.onmouseover = function () {
    key.querySelector(".animation").style.opacity  = 1;
    key.querySelector(".img").style.opacity = 0;
  };
  key.onmouseout = function () {
    key.querySelector(".animation").style.opacity  = 0;
    key.querySelector(".img").style.opacity = 1;
  };
}

const cards = parent.querySelectorAll(".c-choose");
cards.forEach((card, i) => {
  const btn = card.querySelector(".b-button");
  btn.onclick = function () {
    homePage.style.display = "none";
    platformpage.style.height = platformpageHeight + 620 + "px";

    setTimeout(() => {
      platformpage.style.height = "auto";
    }, 300);
    platformpage.classList.add("--active");
    btnReturn.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const parent = document.querySelector(".platform-page__cards");
    const cardTemp = parent.querySelector(".c-card-temp");

    platformpage.querySelector(".name").textContent = info[i].name;
    platformpage.querySelector(".subtitle").textContent = info[i].subtitle;

    info[i].plans.forEach((item) => {
      setCard(cardTemp, item, ".c-card");
      if (item.newprice) {
        toggle.style.display = "block";
      }

      console.log(item.items, 'items');
      // platformpage.querySelector(".items").innerHTML= '<li>'+item.items+'</li>';

      for (const key in item.items) {
        console.log(item.items[key]);

      }
      // item.items.forEach(block=>{
      //   console.log(block);
      //   platformpage.querySelector(".items").textContent= block+'</br>';
      // })
    });
  };
});

btnReturn.onclick = function () {
  btnReturn.style.display = "none";
  platformpage.style.height = 0 + "px";
  toggle.style.display = "none";
  platformpage.classList.remove("--active");
  homePage.style.display = "block";
  const parent = document.querySelector(".platform-page__cards");

  parent.querySelectorAll(".c-card").forEach((item) => {
    item.remove();
    if (toggle) {
      toggle.classList.remove("--toggle");
      toggle.querySelector(".b-toggle__input").checked = false;
    }
  });

  window.scrollTo({
    top: document.querySelector(".home-page__choses").offsetHeight - 300,
  });
};

if (btnReturn) {
  window.onscroll = function () {
    if (document.body.scrollTop > 10) {
      btnReturn.classList.add("--on-scroll");
    } else {
      btnReturn.classList.remove("--on-scroll");
    }
  };
}
toggle.onchange = function () {
  const cards = platformpage.querySelectorAll(".c-card");

  if (toggle.classList.contains("--toggle")) {
    toggle.classList.remove("--toggle");
    changePrice(cards, "block", "none");
  } else {
    toggle.classList.add("--toggle");
    changePrice(cards, "none", "block");
  }
};

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

function changePrice(cards, price, newprice) {
  cards.forEach((card) => {
    card.querySelector(".price").style.display = price;
    card.querySelector(".newprice").style.display = newprice;
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

    if (key === "plans" || key === "subtitle") {
      continue;
    }
    if (key === "subtitle") {
      continue;
    } else {
      element.textContent = item[key];
    }
    if (key === "img" || key === "animation") {
      element.src = item[key];
    }
  }
  template.parentElement.appendChild(content);
}
