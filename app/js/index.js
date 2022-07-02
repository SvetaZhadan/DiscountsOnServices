//// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'nouislider/dist/nouislider.css';
import '../scss/index.scss';

//js
import $ from 'jquery';
import Swiper from 'swiper';
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import IMask from 'imask';
import Choices from 'choices.js';
import autoComplete from '@tarekraafat/autocomplete.js';
import validate from 'validate.js';
import ApexCharts from 'apexcharts';
import { rippleEffect, Ripple } from 'data-ripple';
import noUiSlider from 'nouislider';
import Scrollbar from 'smooth-scrollbar';
import { faqs } from './sourse.js';
//// ================================ Code ======================================

function makeClone(template, name) {
  return template.content.cloneNode(true).querySelector(name);
}

function setCard(template, item) {
  const content = makeClone(template, '.home-page__faq ');

  const keys = Object.keys(item);

  for (const key of keys) {
    const element = content.querySelector(`.${key}`);
    element.textContent = item[key];
  }
}

const cardTemp = document.querySelector('.c-faqs-temp');
const card=document.querySelectorAll('.c-faqs')

console.log(card);
faqs.forEach((items) => {
  // console.log(items);
  setCard(cardTemp,items)
});

const datatoggle = document.querySelectorAll('[data-toggle]');
const burgerMenu = document.querySelectorAll('[data-burger-menu]');
const header = document.querySelector('header');

datatoggle.forEach((btn) => {
  const block = btn.parentNode;
  btn.onclick = function () {
    console.log(block);

    block.classList.contains('--active') ? block.classList.remove('--active') : block.classList.add('--active');
  };
});

burgerMenu.forEach((btn) => {
  btn.onclick = function () {
    header.classList.contains('--active') ? header.classList.remove('--active') : header.classList.add('--active');
  };
});
