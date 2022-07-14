/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-grid.css */ "./node_modules/bootstrap/dist/css/bootstrap-grid.css");
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/index.scss */ "./app/scss/index.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var _sourse_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sourse.js */ "./app/js/sourse.js");
//// ================================ Imports ======================================

//scss




//js












//// ================================ Code ======================================

const platformPage = document.querySelector(".platform-page");
const homePage = document.querySelector(".home-page");

const items = {
  toTop: document.querySelector("[data-scroll-top]"),
  togglePopup: document.querySelectorAll("[data-toggle]"),
};

const platformItems = {
  toggle: platformPage.querySelector(".b-toggle"),
  btnReturn: platformPage.querySelector(".btn-return"),
  cards: platformPage.querySelector(".platform-page__cards"),
  height: platformPage.clientHeight,
};

const homeItems = {
  choses: homePage.querySelector(".home-page__choses"),
};

items.toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

platformPage.style.height = 0 + "px";

_sourse_js__WEBPACK_IMPORTED_MODULE_13__.info.forEach((item) => {
  const cardTemp = homeItems.choses.querySelector(".c-choose-temp");
  setCard(cardTemp, item, ".c-choose");
});

const cards = homeItems.choses.querySelectorAll(".c-choose");

for (const key of cards) {
  key.onmouseover = function () {
    key.querySelector(".animation").style.opacity = 1;
    key.querySelector(".img").style.opacity = 0;
  };
  key.onmouseout = function () {
    key.querySelector(".animation").style.opacity = 0;
    key.querySelector(".img").style.opacity = 1;
  };
}

cards.forEach((card, i) => {
  const btn = card.querySelector(".b-button");
  btn.onclick = function () {
    homePage.style.display = "none";
    platformPage.style.height = platformItems.height + 620 + "px";

    setTimeout(() => {
      platformPage.style.height = "auto";
    }, 300);
    platformPage.classList.add("--active");
    platformItems.btnReturn.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const cardTemp = platformItems.cards.querySelector(".c-card-temp");

    platformPage.querySelector(".name").textContent = _sourse_js__WEBPACK_IMPORTED_MODULE_13__.info[i].name;
    platformPage.querySelector(".subtitle").textContent = _sourse_js__WEBPACK_IMPORTED_MODULE_13__.info[i].subtitle;

    _sourse_js__WEBPACK_IMPORTED_MODULE_13__.info[i].plans.forEach((item) => {
      setCard(cardTemp, item, ".c-card");
      if (item.newprice) {
        platformItems.toggle.style.display = "block";
      }

      // console.log(item.items, "items");

      // for (const key in item.items) {
      //   console.log(item.items[key]);
      //   platformPage.querySelector(".items").innerHTML +=
      //     "<li>" + item.items[key] + "</li>";
      // }
    });
  };
});

platformItems.btnReturn.onclick = function () {
  platformItems.btnReturn.style.display = "none";

  platformPage.style.height = 0 + "px";
  platformItems.toggle.style.display = "none";
  platformPage.classList.remove("--active");
  homePage.style.display = "block";

  platformItems.cards.querySelectorAll(".c-card").forEach((item) => {
    item.remove();
    if (platformItems.toggle) {
      platformItems.toggle.classList.remove("--toggle");
      platformItems.toggle.querySelector(".b-toggle__input").checked = false;
    }
  });

  window.scrollTo({
    top: homeItems.choses.offsetHeight - 300,
  });
};

window.onscroll = function () {
  if (platformItems.btnReturn) {
    if (document.body.scrollTop > 10) {
      platformItems.btnReturn.classList.add("--on-scroll");
    } else {
      platformItems.btnReturn.classList.remove("--on-scroll");
    }
  }

  if (document.body.scrollTop > 500) {
    items.toTop.classList.add("--active");
  } else {
    items.toTop.classList.remove("--active");
  }
};

platformItems.toggle.onchange = function () {
  const cards = platformPage.querySelectorAll(".c-card");

  if (platformItems.toggle.classList.contains("--toggle")) {
    platformItems.toggle.classList.remove("--toggle");
    changePrice(cards, "block", "none");
  } else {
    platformItems.toggle.classList.add("--toggle");
    changePrice(cards, "none", "block");
  }
};

if (document.querySelector(".faqs")) {

  _sourse_js__WEBPACK_IMPORTED_MODULE_13__.faqs.forEach((item) => {
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

// const datatoggle = document.querySelectorAll("[data-toggle]");
items.togglePopup.forEach((btn) => {
  const block = btn.parentNode;
  btn.onclick = function () {
    block.classList.contains("--active")
      ? block.classList.remove("--active")
      : block.classList.add("--active");
  };

  // const popup = document.querySelector(".toggle__popup");

  // document.onclick = function (e) {
  //   console.log(e.target);
  //   console.log(btn, 'btn');

  //   if (e.target != btn) {
  //     block.classList.remove("--active")
  //   }
  //   else{
  //     block.classList.add("--active");
  //   }
  // };
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

    if (element) {
      if (key === "img" || key === "animation") {
        element.src = item[key];
      }
      element.textContent = item[key];
    }
  }
  template.parentElement.appendChild(content);
}


/***/ }),

/***/ "./app/js/sourse.js":
/*!**************************!*\
  !*** ./app/js/sourse.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faqs": () => (/* binding */ faqs),
/* harmony export */   "info": () => (/* binding */ info)
/* harmony export */ });
const faqs = [
  {
    question: 'The set time has passed, but the invoice has not yet arrived, what should I do?',
    answer: 'With cash accounting, bookkeeping is simple: You dont record any transactions until money actually changes hands, Accounting Tools says. With accrual accounting, you record transactions as soon as you earn or owe money. If an invoice arrives before, or after, the goods youve paid for, recording the transaction properly requires a couple of extra accounting steps.',
  },
  {
    question: 'Can I change my Netflix account email and password after purchase?',
    answer: 'To update your Netflix email and password, start by going to Netflix and logging in. Next, go to the main menu by clicking the downward-facing triangle in the upper-right corner. Select Account to access your account overview page. Then, go to the Membership & Billing section, where you will find the option to reset your email address and/or password.',
  },
  {
    question: 'Can I add a phone number for password recovery?',
    answer: 'To make sure you can get back into your Google Account if you ever can’t sign in, add recovery information.',
  },
  {
    question: 'How soon will I receive the account information I ordered?',
    answer: 'The order process typically takes 3-5 business days. Youll receive an email once your order status changes to “Shipped” or if further action ',
  },
  {
    question: 'How to pay?',
    answer: 'Payment options we currently have: PayPal, Bitcoin.',
  },
];

const info=[
  {
    name: 'Netflix',
    description:'Netflix can be accessed via web browsers or via application software installed on smart TVs, set-top boxes connected to televisions, tablet computers, smartphones.',
    img:'../assets/images/ntflx.png',
    animation: '../assets/images/ntflxAnimation.gif',
    subtitle:'Watch movies without limits at a bargain price',
    plans:[
      {
        name:'Basic',
        items:[
          'Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:45,
        newprice:80,
      },
      {
        name:'Standart',
        items:[
          'Standart Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:60,
        newprice:110,
      },
      {
        name:'Premium',
        items:[
          'Premium Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:80,
        newprice:150,//year price
      },
    ]
  },

  {
    name: 'YouTube Premium',
    description:'The service provides ad-free access to content across the service, as well as access to premium YouTube',
    img:'../assets/images/ytb.png',
    animation: '../assets/images/ytbAnimation.gif',
    subtitle:'Select the subscription type for a period of 12 months:',
    plans:[
      {
        name:'Music',
        items:[
          'Listen to music without ads, in the background and offline',
        ],
        price:60,
      },
      {
        name:'Premium',
        items:[
          'YouTube and YouTube Music without ads, in the background and offline',
        ],
        price:80,
      },
    ]
  },
  {
    name: 'Spotify',
    description:'Spotify offers digital copyright restricted recorded music and podcasts, including more than 82 million songs, from record labels and media companies.',
    img:'../assets/images/sptf.png',
    animation: '../assets/images/sptfAnimation.gif',
    subtitle:'Select the subscription type for a period of 12 months:',
    plans:[
      {
        name:'Individual',
        items:[
          'Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:47,
      },
      {
        name:'Duo',
        items:[
          '2 Premium accounts for a couple under one roof','Ad-free music listening, play offline, on-demand playback',
        ],
        price:57,
      },
      {
        name:'Family',
        items:[
          '6 Premium accounts for family members living under one roof','Block explicit music','Ad-free music listening, play offline, on-demand playback', 
        ],
        price:77,
      },
    ]
  },
  
];



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./app/scss/index.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./app/scss/index.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,600;0,700;0,800;0,900;1,300;1,600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ================================ Fonts ================================ */ /* ================================ Reset ================================ */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\na:active, a:hover {\n  outline: 0;\n}\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0;\n}\n\nimg,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\naudio,\ncanvas,\niframe,\nvideo,\nimg,\nsvg {\n  vertical-align: middle;\n}\n\niframe {\n  border: 0;\n}\n\ntextarea {\n  overflow: auto;\n  box-shadow: none;\n  box-shadow: none;\n  box-shadow: none;\n  vertical-align: top;\n  resize: none; /* remove the resize handle on the bottom right */\n}\n\ninput,\ntextarea,\nselect,\nbutton {\n  margin: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 100%;\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  button:active span,\nbutton:focus span {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n}\nbutton,\ninput {\n  line-height: normal;\n}\n\ninput::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button,\ninput::-webkit-search-results-button,\ninput::-webkit-search-results-decoration {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\n\nbutton {\n  display: block;\n  padding: 0;\n  color: unset;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  /* display: none; <- Crashes Chrome on hover */\n  appearance: none;\n}\n\ninput[type=number] {\n  appearance: textfield;\n}\n\n/* ================================ Styles ================================ */ /* ================================ Base ================================ */\nbody {\n  background-color: #ecf3fb;\n  font-family: Mulish, sans-serif;\n}\n\np {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n\na {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n  color: #333333;\n  transition-duration: 0.3s;\n}\na:hover {\n  color: #1749b3;\n}\na:active {\n  color: #4b84fd;\n}\n\nsvg path {\n  transition-duration: 0.3s;\n}\n\nli {\n  display: inline;\n}\n\nh1 {\n  font-family: Mulish, sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh2 {\n  font-family: Mulish, sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh3 {\n  font-family: Mulish, sans-serif;\n  font-size: 26px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh4 {\n  font-family: Mulish, sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh5 {\n  font-family: Mulish, sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh6 {\n  font-family: Mulish, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 150%;\n}\n\nbutton {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 130%;\n  text-transform: none;\n  text-decoration: none;\n}\n\n.b-iconButton svg {\n  width: 24px;\n  height: 24px;\n}\n.b-iconButton:hover svg path {\n  fill: #1749b3;\n}\n.b-iconButton:active svg path {\n  fill: #4b84fd;\n}\n.b-iconButton.--white svg path {\n  fill: #ffffff;\n}\n\n.b-button {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 130%;\n  text-transform: none;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 9px 0;\n  background-color: #1749b3;\n  border-radius: 12px;\n  transition-duration: 0.3s;\n  border: 1px solid transparent;\n}\n.b-button:hover {\n  color: #171717;\n  background-color: #ffffff;\n  border: 1px solid #1749b3;\n}\n.b-button:active {\n  color: #ffffff;\n  background-color: #4b84fd;\n  border: 1px solid #4b84fd;\n}\n.b-button.--black {\n  color: #ffffff;\n  background-color: #333333;\n}\n.b-button.--black:hover {\n  color: #333333;\n  background-color: #ffffff;\n  border: 1px solid #333333;\n}\n.b-button.--black:active {\n  color: #ffffff;\n  background-color: #606060;\n  border: 1px solid #606060;\n}\n.b-button.--white {\n  color: #171717;\n  background-color: #ffffff;\n  border: 1px solid #1749b3;\n}\n.b-button.--white:hover {\n  color: #ffffff;\n  background-color: #1749b3;\n}\n.b-button.--white:active {\n  color: #ffffff;\n  background-color: #4b84fd;\n  border: 1px solid #4b84fd;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.b-toggle {\n  position: relative;\n  display: inline-block;\n  width: 360px;\n  height: 61px;\n  font-size: 18px;\n}\n.b-toggle__input {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.b-toggle__slider {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  background-color: transparent;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.b-toggle__slider::before {\n  position: absolute;\n  display: flex;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n  background-color: #1749b3;\n  transition: 0.4s;\n}\n.b-toggle__input:checked + .b-toggle__slider {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n}\n.b-toggle__input:checked + .b-toggle__slider .b-toggle__container-x2 {\n  color: #ffffff;\n}\n.b-toggle__input:checked + .b-toggle__slider .b-toggle__container-x1 {\n  color: #171717;\n}\n.b-toggle__input:checked + .b-toggle__slider::before {\n  transform: translateX(180px);\n}\n.b-toggle .--round {\n  border-radius: 12px;\n  border: 1px solid #1749b3;\n}\n.b-toggle .--round::before {\n  border-radius: 12px;\n}\n.b-toggle__container {\n  z-index: 2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  color: #171717;\n}\n.b-toggle__container-x1 {\n  color: #ffffff;\n  transition-duration: 0.3s;\n}\n.b-toggle__container-x2 {\n  transition-duration: 0.3s;\n}\n\n.b-toTop {\n  background-color: #333333;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  border-radius: 100%;\n  transition-duration: 0.3s;\n  position: fixed;\n  top: 55%;\n  right: 20px;\n  height: 0;\n  width: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.b-toTop.--active {\n  opacity: 1;\n  height: 40px;\n  width: 40px;\n}\n.b-toTop:hover {\n  background-color: transparent;\n  border: 1px solid #333333;\n}\n.b-toTop:hover svg path {\n  fill: #333333;\n}\n.b-toTop svg {\n  transform: rotate(180deg);\n}\n.b-toTop svg path {\n  fill: #ffffff;\n}\n\n/* ================================ Combinations ================================ */\n.c-choose {\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 32px;\n}\n.c-choose .b-button {\n  width: 147px;\n}\n.c-choose .info {\n  flex: 1;\n  padding: 60px 112px 60px 60px;\n}\n.c-choose .info h2 {\n  margin-bottom: 22px;\n  text-align: start;\n}\n.c-choose .info p {\n  margin-bottom: 38px;\n}\n.c-choose .imgs {\n  max-width: 588px;\n  height: 342px;\n  overflow: hidden;\n  flex: 1;\n  position: relative;\n}\n.c-choose img {\n  border-radius: 32px;\n  height: 342px;\n  object-fit: cover;\n  transition-duration: 0.3s;\n}\n.c-choose .animation {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 588px;\n  height: 342px;\n  opacity: 0;\n}\n\n.c-step {\n  flex: 1;\n  padding: 6px 6px 40px 40px;\n  background: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-step__img {\n  display: flex;\n  justify-content: flex-end;\n}\n.c-step__img img {\n  width: 185px;\n  height: 185px;\n}\n\n.c-invite {\n  display: flex;\n  align-items: center;\n  padding: 44px 80px;\n  color: #ffffff;\n  background-color: #1749b3;\n  border-radius: 32px;\n  width: 100%;\n}\n.c-invite h3 {\n  margin-bottom: 24px;\n}\n.c-invite div p {\n  width: 508px;\n}\n.c-invite__link {\n  width: 100%;\n  margin-left: 87px;\n  padding: 28px 71px;\n  color: #171717;\n  background-color: #f1f4f8;\n  border-radius: 16px;\n  text-align: center;\n}\n.c-invite__link a {\n  color: #1749b3;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.c-invite__link a:hover {\n  color: #171717;\n}\n.c-invite__link a:active {\n  color: #333333;\n}\n.c-invite__link a svg {\n  margin-left: 8px;\n}\n\n.c-faqs {\n  padding: 32px 40px 40px;\n  background-color: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2), 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-faqs.--active p {\n  margin-top: 19px;\n}\n.c-faqs.--active div span svg {\n  transform: rotate(180deg);\n}\n.c-faqs p {\n  overflow: hidden;\n  transition: 0.3s;\n}\n.c-faqs div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.c-faqs div:hover svg {\n  transform: rotate(90deg);\n}\n.c-faqs div span {\n  padding: 12px;\n  background-color: #f1f4f8;\n  border-radius: 10px;\n}\n.c-faqs div svg {\n  width: 20px;\n  height: 20px;\n  transition-duration: 0.3s;\n}\n\n.c-card {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 532px;\n  padding: 60px 40px 40px;\n  background-color: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-card .b-button {\n  width: 100%;\n  padding: 16px 0;\n  font-size: 18px;\n}\n.c-card .b-button:hover {\n  background-color: #333333;\n  border: 1px solid #333333;\n  color: #ffffff;\n}\n.c-card h2 {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #dbdbdb;\n  text-align: center;\n}\n.c-card ul {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n  padding-top: 20px;\n}\n.c-card ul li {\n  margin-bottom: 20px;\n  display: list-item;\n}\n.c-card ul li:last-child {\n  margin-bottom: 0;\n}\n.c-card .sign {\n  position: relative;\n  width: 86px;\n  margin: 0 auto;\n  margin-bottom: 16px;\n  font-size: 26px;\n  font-weight: 700;\n}\n.c-card .sign-item {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.c-card .price {\n  margin-left: 13px;\n  font-size: 50px;\n  font-weight: 700;\n}\n.c-card .newprice {\n  display: none;\n  margin-bottom: 0;\n  margin-left: 13px;\n  font-size: 50px;\n}\n\n/* ================================ Modules ================================ */\n.header {\n  padding: 5px 0;\n  background-color: #ffffff;\n}\n.header .toggle__popup {\n  position: absolute;\n  top: 75px;\n  display: flex;\n  flex-direction: column;\n  max-width: 180px;\n  max-height: 0px;\n  padding: 28px 24px 24px 23px;\n  overflow: hidden;\n  background-color: #ffffff;\n  border-radius: 16px;\n  opacity: 0;\n  box-shadow: 0px 20px 48px rgba(177, 177, 177, 0.4);\n  transition: 0.3s;\n}\n.header .toggle__popup a {\n  margin-bottom: 20px;\n}\n.header .toggle__popup a:last-child {\n  margin-bottom: 0;\n}\n.header [data-toggle] {\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header [data-toggle]:hover {\n  color: #1749b3;\n}\n.header [data-toggle]:hover svg {\n  transform: rotate(90deg);\n}\n.header [data-toggle]:hover svg path {\n  fill: #1749b3;\n}\n.header__burger {\n  display: none;\n}\n.header__close {\n  display: none;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header nav svg {\n  transition: 0.3s;\n}\n.header nav.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.header nav.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.header__content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.header__content div {\n  display: flex;\n  align-items: center;\n}\n.header__content div .socials {\n  margin-left: 42px;\n}\n.header__content div svg {\n  transition: 0.3s;\n}\n.header__content div.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.header__content div.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.header__content div p {\n  margin-left: 28px;\n}\n.header__content div p ul li {\n  display: block;\n}\n.header__content div p ul a {\n  font-weight: 500;\n}\n.header__sub {\n  margin-right: 44px;\n  cursor: pointer;\n}\n.header__sub svg {\n  margin-left: 8px;\n}\n.header__sub:hover svg path {\n  fill: #1749b3;\n}\n.header li {\n  margin-right: 44px;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n  margin-right: 116px;\n}\n.header__logo p {\n  font-weight: 600;\n}\n.header__logo svg {\n  width: 55px;\n  height: 55px;\n  margin-right: 8px;\n}\n.header__logo:hover {\n  color: #333333;\n}\n.header .b-iconButton {\n  margin-right: 12px;\n}\n.header .b-iconButton:last-child {\n  margin-right: 0px;\n}\n.header .b-button {\n  width: 136px;\n  margin-left: 40px;\n}\n\n.footer {\n  padding: 40px 0 12px;\n  background-color: #1749b3;\n}\n.footer .toggle__popup {\n  position: absolute;\n  top: 70px;\n  display: flex;\n  flex-direction: column;\n  max-height: 0px;\n  overflow: hidden;\n  opacity: 0;\n  transition: 0.3s;\n}\n.footer .toggle__popup a {\n  margin-bottom: 5px;\n}\n.footer .toggle__popup a:last-child {\n  margin-bottom: 0;\n}\n.footer [data-toggle] {\n  color: #ffffff;\n  cursor: pointer;\n}\n.footer [data-toggle]:hover svg {\n  transform: rotate(90deg);\n}\n.footer [data-toggle]:hover svg path {\n  fill: #ffffff;\n}\n.footer a {\n  color: #ffffff;\n}\n.footer__wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.footer p {\n  color: #ffffff;\n}\n.footer__text {\n  width: 178px;\n  margin-top: 23px;\n}\n.footer__logo {\n  display: flex;\n  align-items: center;\n  margin-right: 150px;\n}\n.footer__logo p {\n  font-weight: 600;\n}\n.footer__logo svg {\n  width: 55px;\n  height: 55px;\n  margin-right: 8px;\n  border-radius: 100%;\n}\n.footer__content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.footer__content-wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 65%;\n}\n.footer__content .arrow svg {\n  transition: 0.3s;\n}\n.footer__content .arrow svg path {\n  fill: #ffffff;\n}\n.footer__content div p {\n  margin-bottom: 20px;\n}\n.footer__content li {\n  display: block;\n  margin-bottom: 12px;\n}\n.footer__content li:last-child {\n  margin-bottom: 0;\n}\n.footer__info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n}\n.footer__info.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.footer__info.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.footer__info .socials {\n  margin-bottom: 17px;\n}\n.footer__row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.footer__row p {\n  color: #d3d3d3;\n}\n\n.m-baner {\n  display: flex;\n  margin: 60px 0px 120px;\n}\n.m-baner div {\n  flex: 1;\n  width: 592px;\n  height: 500px;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.m-baner__info {\n  padding: 114px 60px;\n  color: #ffffff;\n  background-color: #1749b3;\n}\n.m-baner__info h1 {\n  margin-bottom: 24px;\n}\n.m-baner__info p {\n  margin-bottom: 40px;\n}\n.m-baner__info .b-button {\n  width: 207px;\n}\n.m-baner__img {\n  width: 592px;\n  margin-left: 16px;\n}\n.m-baner__img img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 32px;\n}\n\n.m-steps {\n  display: flex;\n  justify-content: center;\n}\n.m-steps .c-step {\n  margin-right: 16px;\n}\n.m-steps .c-step:last-child {\n  margin-right: 0;\n}\n\n.m-about {\n  display: flex;\n  margin: 37px 0px 120px;\n}\n.m-about div {\n  flex: 1;\n  height: 535px;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.m-about__info {\n  padding: 60px;\n  background-color: #ffffff;\n}\n.m-about__info p {\n  font-family: Mulish, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n.m-about__info svg {\n  width: 130px;\n  height: 130px;\n  margin-bottom: 32px;\n  border-radius: 100%;\n}\n.m-about p {\n  margin-bottom: 32px;\n}\n.m-about p:last-child {\n  margin-bottom: 0;\n  font-weight: 700;\n}\n.m-about__img {\n  width: 592px;\n  margin-left: 16px;\n  overflow: hidden;\n  border-radius: 32px;\n}\n.m-about__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* ================================ Media ================================ */\n@media (max-width: 1280px) {\n  .header__logo {\n    margin-right: 16px;\n  }\n  .c-invite div p {\n    width: auto;\n  }\n}\n@media (max-width: 1024px) {\n  .header__logo svg {\n    width: 32px;\n    height: 32px;\n  }\n  .header__content {\n    display: none;\n  }\n  .header__burger {\n    display: block;\n  }\n  .header.--active .header__burger {\n    display: none;\n  }\n  .header.--active .header__close {\n    display: block;\n  }\n  .header.--active .header__content {\n    position: absolute;\n    display: flex;\n    width: 90%;\n    height: 35px;\n    background-color: #ffffff;\n  }\n  .m-baner {\n    margin: 52px 0 106px;\n  }\n  .m-baner div {\n    width: 344px;\n    height: auto;\n  }\n  .m-baner__info {\n    padding: 23px 20px 24px;\n  }\n  .home-page h2 {\n    margin-bottom: 32px;\n  }\n  .home-page__faqs {\n    margin-bottom: 100px;\n  }\n  .home-page__faqs .b-button {\n    margin-top: 32px;\n  }\n  .c-faqs div {\n    align-items: flex-start;\n  }\n  .c-invite {\n    padding: 32px;\n  }\n  .c-invite h3 {\n    margin-bottom: 16px;\n  }\n  .c-invite__link {\n    padding: 20px 24px;\n  }\n  .c-choose .info {\n    padding: 49px 28px 48px 32px;\n  }\n  .c-choose p {\n    display: none;\n  }\n  .c-step {\n    padding: 20px;\n  }\n  .c-step h4 {\n    margin-top: -65px;\n    margin-bottom: 39px;\n  }\n  .c-step__img img {\n    width: 88px;\n    height: 88px;\n  }\n  .m-about div {\n    height: 412px;\n  }\n  .m-about__info {\n    padding: 20px;\n  }\n  .m-about__info svg {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 20px;\n  }\n  .m-about__info p {\n    margin-bottom: 16px;\n  }\n  .platform-page .c-card {\n    height: 412px;\n    padding: 37px 16px;\n  }\n  .footer__logo {\n    margin-right: 50px;\n  }\n  .footer__logo svg {\n    width: 44px;\n    height: 44px;\n  }\n  .footer__text {\n    margin-top: 12px;\n  }\n  .footer__wrapper {\n    padding-bottom: 40px;\n    border-bottom: 1px solid #d3d3d3;\n  }\n}\n@media (max-width: 850px) {\n  .header.--active .header__content {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    padding: 12px;\n    overflow: scroll;\n  }\n  .header.--active .header__content nav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .header.--active .header__content nav .header__sub,\n.header.--active .header__content nav li {\n    margin-right: 0;\n    margin-bottom: 20px;\n    font-family: Mulish, sans-serif;\n    font-size: 18px;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 150%;\n    text-transform: none;\n    text-decoration: none;\n  }\n  .header.--active .header__content nav .toggle__popup {\n    position: relative;\n    top: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    max-width: 100%;\n    padding: 0;\n    background-color: transparent;\n    border-radius: 0px;\n    box-shadow: 0px 0px 0px;\n  }\n  .header.--active .header__content nav .toggle__popup a {\n    margin-right: 10px;\n  }\n  .header.--active .header__content div {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n  .header.--active .header__content div .socials {\n    margin-bottom: 20px;\n    margin-left: 0;\n  }\n  .header.--active .header__content div .b-button {\n    margin-left: 0;\n  }\n  .header.--active .header__content div .toggle__popup {\n    position: relative;\n    top: 0;\n    flex-direction: row;\n    align-items: flex-start;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 0;\n    background-color: transparent;\n    border-radius: 0px;\n    box-shadow: 0px 0px 0px;\n  }\n  .header.--active .header__content div .toggle__popup a {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n  .header.--active .header__content div .toggle__popup a:last-child {\n    margin-right: 0;\n  }\n  .m-baner {\n    flex-direction: column-reverse;\n    margin: 48px 0 100px;\n  }\n  .m-baner div {\n    width: 100%;\n    height: auto;\n  }\n  .m-baner__img {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n  .m-baner__img img {\n    width: 327px;\n    height: 278px;\n  }\n  .m-baner .b-button {\n    width: 100%;\n  }\n  .m-steps {\n    flex-direction: column;\n  }\n  .m-steps .c-step {\n    margin-right: 0;\n    margin-bottom: 16px;\n  }\n  .c-invite {\n    flex-direction: column;\n    padding: 32px 20px;\n  }\n  .c-invite__link {\n    margin-top: 32px;\n    margin-left: 0;\n    padding: 28px 33px;\n  }\n  .m-about {\n    flex-direction: column-reverse;\n    margin-bottom: 100px;\n  }\n  .m-about__img {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: auto;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n  .m-about__img img {\n    width: 327px;\n    height: 278px;\n    border-radius: 24px;\n  }\n  .platform-page__cards {\n    flex-direction: column;\n    margin-top: 28px;\n    margin-bottom: 16px;\n  }\n  .platform-page__cards .c-card {\n    height: 333px;\n    margin-right: 0 !important;\n    margin-bottom: 16px;\n  }\n  .platform-page__cards .c-card:last-child {\n    margin-bottom: 0;\n  }\n  .platform-page__cards .c-card ul {\n    margin-bottom: 48px;\n  }\n  .platform-page__cards .c-card .sign {\n    margin-bottom: 12px;\n  }\n  .platform-page__cards .c-card .b-button {\n    padding: 14px 0;\n    font-size: 16px;\n  }\n  .footer__contant-wrapper {\n    width: 100%;\n  }\n}\n@media (max-width: 570px) {\n  .header__logo p {\n    display: none;\n  }\n  .c-choose {\n    flex-direction: column-reverse;\n  }\n  .c-choose img {\n    width: 180%;\n  }\n  .c-choose .info {\n    padding: 32px 20px;\n  }\n  .c-choose .info h2 {\n    margin-bottom: 16px;\n    text-align: start;\n  }\n  .c-choose .info p {\n    display: block;\n    margin-bottom: 32px;\n  }\n  .c-choose .info .b-button {\n    width: 100%;\n  }\n  .c-faqs h6 {\n    margin-right: 21px;\n    font-size: 17px;\n  }\n  .c-faqs p {\n    font-size: 17px;\n  }\n  .home-page__faqs .b-button {\n    margin-top: 28px;\n  }\n  .platform-page .b-toggle {\n    width: 100%;\n  }\n  .footer .toggle__popup {\n    top: 30px;\n    right: 0;\n    flex-direction: row;\n  }\n  .footer .toggle__popup a {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n  .footer .toggle__popup a:last-child {\n    margin-right: 0;\n  }\n  .footer__info {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 40px;\n  }\n  .footer__info .socials {\n    margin-bottom: 0;\n  }\n  .footer__content {\n    flex-direction: column;\n  }\n  .footer__content-wrapper {\n    width: 100%;\n  }\n  .footer__text {\n    width: auto;\n  }\n  .footer__logo {\n    margin-right: 0;\n  }\n  .footer__col {\n    margin-bottom: 40px;\n  }\n  .footer__wrapper {\n    flex-direction: column;\n  }\n  .footer__row {\n    flex-direction: column;\n    align-items: center;\n    margin-top: 16px;\n  }\n  .footer__row p {\n    margin-bottom: 12px;\n  }\n  .footer__row p:last-child {\n    margin-bottom: 0;\n  }\n  h1 {\n    font-family: Mulish, sans-serif;\n    font-size: 30px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h2 {\n    font-family: Mulish, sans-serif;\n    font-size: 25px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h3 {\n    font-family: Mulish, sans-serif;\n    font-size: 22px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h4 {\n    font-family: Mulish, sans-serif;\n    font-size: 19px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h5 {\n    font-family: Mulish, sans-serif;\n    font-size: 18px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n}\n.home-page h2 {\n  margin-bottom: 37px;\n  text-align: center;\n}\n.home-page .c-choose {\n  margin-bottom: 16px;\n}\n.home-page__choses {\n  margin-bottom: 128px;\n}\n.home-page__steps {\n  margin-bottom: 120px;\n}\n.home-page .c-invite {\n  margin-top: 20px;\n}\n\n.faqs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 120px;\n}\n.faqs h2 {\n  margin-bottom: 37px;\n  text-align: center;\n}\n.faqs .c-faqs {\n  margin-bottom: 16px;\n}\n.faqs .c-faqs:last-child {\n  margin-bottom: 0;\n}\n.faqs .b-button {\n  width: 243px;\n  margin-top: 40px;\n  padding: 16px 0;\n  border-radius: 16px;\n}\n\n.platform-page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.platform-page.--active {\n  margin-top: 80px;\n  margin-bottom: 100px;\n}\n.platform-page .b-toggle {\n  display: none;\n  margin-top: 52px;\n}\n.platform-page .btn-return {\n  position: fixed;\n  bottom: 10px;\n  display: none;\n  opacity: 0.5;\n  transition-duration: 0.3s;\n}\n.platform-page .btn-return.--on-scroll {\n  bottom: -10px;\n  opacity: 0;\n}\n.platform-page .btn-return .b-button {\n  width: 200px;\n}\n.platform-page .btn-return .b-button svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  transform: rotate(90deg);\n}\n.platform-page .btn-return .b-button svg path {\n  fill: #ffffff;\n}\n.platform-page .btn-return .b-button:hover {\n  color: #333333;\n}\n.platform-page .btn-return .b-button:hover svg path {\n  fill: #333333;\n}\n.platform-page h1 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.platform-page p {\n  font-size: 18px;\n}\n.platform-page__cards {\n  display: flex;\n  margin-top: 48px;\n  margin-bottom: 120px;\n}\n.platform-page__cards .c-card {\n  margin-right: 16px;\n}\n.platform-page__cards .c-card:last-child {\n  margin-right: 0;\n}", "",{"version":3,"sources":["webpack://./app/scss/_fonts.scss","webpack://./app/scss/_reset.scss","webpack://./app/scss/index.scss","webpack://./app/scss/_styles.scss","webpack://./app/scss/_base.scss","webpack://./app/scss/_combinations.scss","webpack://./app/scss/_modules.scss","webpack://./app/scss/_media.scss","webpack://./app/scss/pages/home.scss","webpack://./app/scss/pages/platform.scss"],"names":[],"mappings":"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","sourcesContent":["/* ================================ Fonts ================================ */\n\n","/* ================================ Reset ================================ */\n// Default\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n// Links\n\na {\n  text-decoration: none;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n}\n\n// List\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n// Headlines\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\n// Default\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0;\n}\n\nimg,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\naudio,\ncanvas,\niframe,\nvideo,\nimg,\nsvg {\n  vertical-align: middle;\n}\n\niframe {\n  border: 0;\n}\n\n// From\n\ntextarea {\n  overflow: auto;\n  box-shadow: none;\n  box-shadow: none;\n  box-shadow: none;\n  vertical-align: top;\n  resize: none; /* remove the resize handle on the bottom right */\n}\n\ninput,\ntextarea,\nselect,\nbutton {\n  margin: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 100%;\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n\n  button:active span,\n  button:focus span {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n}\n\nbutton,\ninput {\n  line-height: normal;\n}\n\ninput::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button,\ninput::-webkit-search-results-button,\ninput::-webkit-search-results-decoration {\n  display: none;\n}\n\n// Table\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\n\nbutton {\n  display: block;\n  padding: 0;\n  color: unset;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n\n  /* display: none; <- Crashes Chrome on hover */\n  appearance: none;\n}\n\ninput[type = 'number'] {\n  appearance: textfield;\n}\n","/* ================================ Fonts ================================ */ /* ================================ Reset ================================ */\n@import url(\"https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,600;0,700;0,800;0,900;1,300;1,600&display=swap\");\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\na:active, a:hover {\n  outline: 0;\n}\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0;\n}\n\nimg,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\naudio,\ncanvas,\niframe,\nvideo,\nimg,\nsvg {\n  vertical-align: middle;\n}\n\niframe {\n  border: 0;\n}\n\ntextarea {\n  overflow: auto;\n  box-shadow: none;\n  box-shadow: none;\n  box-shadow: none;\n  vertical-align: top;\n  resize: none; /* remove the resize handle on the bottom right */\n}\n\ninput,\ntextarea,\nselect,\nbutton {\n  margin: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 100%;\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  button:active span,\nbutton:focus span {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n}\nbutton,\ninput {\n  line-height: normal;\n}\n\ninput::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button,\ninput::-webkit-search-results-button,\ninput::-webkit-search-results-decoration {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\n\nbutton {\n  display: block;\n  padding: 0;\n  color: unset;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  /* display: none; <- Crashes Chrome on hover */\n  appearance: none;\n}\n\ninput[type=number] {\n  appearance: textfield;\n}\n\n/* ================================ Styles ================================ */ /* ================================ Base ================================ */\nbody {\n  background-color: #ecf3fb;\n  font-family: Mulish, sans-serif;\n}\n\np {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n\na {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n  color: #333333;\n  transition-duration: 0.3s;\n}\na:hover {\n  color: #1749b3;\n}\na:active {\n  color: #4b84fd;\n}\n\nsvg path {\n  transition-duration: 0.3s;\n}\n\nli {\n  display: inline;\n}\n\nh1 {\n  font-family: Mulish, sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh2 {\n  font-family: Mulish, sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh3 {\n  font-family: Mulish, sans-serif;\n  font-size: 26px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh4 {\n  font-family: Mulish, sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh5 {\n  font-family: Mulish, sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\nh6 {\n  font-family: Mulish, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 150%;\n}\n\nbutton {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 130%;\n  text-transform: none;\n  text-decoration: none;\n}\n\n.b-iconButton svg {\n  width: 24px;\n  height: 24px;\n}\n.b-iconButton:hover svg path {\n  fill: #1749b3;\n}\n.b-iconButton:active svg path {\n  fill: #4b84fd;\n}\n.b-iconButton.--white svg path {\n  fill: #ffffff;\n}\n\n.b-button {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 130%;\n  text-transform: none;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 9px 0;\n  background-color: #1749b3;\n  border-radius: 12px;\n  transition-duration: 0.3s;\n  border: 1px solid transparent;\n}\n.b-button:hover {\n  color: #171717;\n  background-color: #ffffff;\n  border: 1px solid #1749b3;\n}\n.b-button:active {\n  color: #ffffff;\n  background-color: #4b84fd;\n  border: 1px solid #4b84fd;\n}\n.b-button.--black {\n  color: #ffffff;\n  background-color: #333333;\n}\n.b-button.--black:hover {\n  color: #333333;\n  background-color: #ffffff;\n  border: 1px solid #333333;\n}\n.b-button.--black:active {\n  color: #ffffff;\n  background-color: #606060;\n  border: 1px solid #606060;\n}\n.b-button.--white {\n  color: #171717;\n  background-color: #ffffff;\n  border: 1px solid #1749b3;\n}\n.b-button.--white:hover {\n  color: #ffffff;\n  background-color: #1749b3;\n}\n.b-button.--white:active {\n  color: #ffffff;\n  background-color: #4b84fd;\n  border: 1px solid #4b84fd;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.b-toggle {\n  position: relative;\n  display: inline-block;\n  width: 360px;\n  height: 61px;\n  font-size: 18px;\n}\n.b-toggle__input {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.b-toggle__slider {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  background-color: transparent;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.b-toggle__slider::before {\n  position: absolute;\n  display: flex;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n  background-color: #1749b3;\n  transition: 0.4s;\n}\n.b-toggle__input:checked + .b-toggle__slider {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n}\n.b-toggle__input:checked + .b-toggle__slider .b-toggle__container-x2 {\n  color: #ffffff;\n}\n.b-toggle__input:checked + .b-toggle__slider .b-toggle__container-x1 {\n  color: #171717;\n}\n.b-toggle__input:checked + .b-toggle__slider::before {\n  transform: translateX(180px);\n}\n.b-toggle .--round {\n  border-radius: 12px;\n  border: 1px solid #1749b3;\n}\n.b-toggle .--round::before {\n  border-radius: 12px;\n}\n.b-toggle__container {\n  z-index: 2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  color: #171717;\n}\n.b-toggle__container-x1 {\n  color: #ffffff;\n  transition-duration: 0.3s;\n}\n.b-toggle__container-x2 {\n  transition-duration: 0.3s;\n}\n\n.b-toTop {\n  background-color: #333333;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  border-radius: 100%;\n  transition-duration: 0.3s;\n  position: fixed;\n  top: 55%;\n  right: 20px;\n  height: 0;\n  width: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.b-toTop.--active {\n  opacity: 1;\n  height: 40px;\n  width: 40px;\n}\n.b-toTop:hover {\n  background-color: transparent;\n  border: 1px solid #333333;\n}\n.b-toTop:hover svg path {\n  fill: #333333;\n}\n.b-toTop svg {\n  transform: rotate(180deg);\n}\n.b-toTop svg path {\n  fill: #ffffff;\n}\n\n/* ================================ Combinations ================================ */\n.c-choose {\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 32px;\n}\n.c-choose .b-button {\n  width: 147px;\n}\n.c-choose .info {\n  flex: 1;\n  padding: 60px 112px 60px 60px;\n}\n.c-choose .info h2 {\n  margin-bottom: 22px;\n  text-align: start;\n}\n.c-choose .info p {\n  margin-bottom: 38px;\n}\n.c-choose .imgs {\n  max-width: 588px;\n  height: 342px;\n  overflow: hidden;\n  flex: 1;\n  position: relative;\n}\n.c-choose img {\n  border-radius: 32px;\n  height: 342px;\n  object-fit: cover;\n  transition-duration: 0.3s;\n}\n.c-choose .animation {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 588px;\n  height: 342px;\n  opacity: 0;\n}\n\n.c-step {\n  flex: 1;\n  padding: 6px 6px 40px 40px;\n  background: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-step__img {\n  display: flex;\n  justify-content: flex-end;\n}\n.c-step__img img {\n  width: 185px;\n  height: 185px;\n}\n\n.c-invite {\n  display: flex;\n  align-items: center;\n  padding: 44px 80px;\n  color: #ffffff;\n  background-color: #1749b3;\n  border-radius: 32px;\n  width: 100%;\n}\n.c-invite h3 {\n  margin-bottom: 24px;\n}\n.c-invite div p {\n  width: 508px;\n}\n.c-invite__link {\n  width: 100%;\n  margin-left: 87px;\n  padding: 28px 71px;\n  color: #171717;\n  background-color: #f1f4f8;\n  border-radius: 16px;\n  text-align: center;\n}\n.c-invite__link a {\n  color: #1749b3;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.c-invite__link a:hover {\n  color: #171717;\n}\n.c-invite__link a:active {\n  color: #333333;\n}\n.c-invite__link a svg {\n  margin-left: 8px;\n}\n\n.c-faqs {\n  padding: 32px 40px 40px;\n  background-color: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2), 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-faqs.--active p {\n  margin-top: 19px;\n}\n.c-faqs.--active div span svg {\n  transform: rotate(180deg);\n}\n.c-faqs p {\n  overflow: hidden;\n  transition: 0.3s;\n}\n.c-faqs div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.c-faqs div:hover svg {\n  transform: rotate(90deg);\n}\n.c-faqs div span {\n  padding: 12px;\n  background-color: #f1f4f8;\n  border-radius: 10px;\n}\n.c-faqs div svg {\n  width: 20px;\n  height: 20px;\n  transition-duration: 0.3s;\n}\n\n.c-card {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 532px;\n  padding: 60px 40px 40px;\n  background-color: #ffffff;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.c-card .b-button {\n  width: 100%;\n  padding: 16px 0;\n  font-size: 18px;\n}\n.c-card .b-button:hover {\n  background-color: #333333;\n  border: 1px solid #333333;\n  color: #ffffff;\n}\n.c-card h2 {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #dbdbdb;\n  text-align: center;\n}\n.c-card ul {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n  padding-top: 20px;\n}\n.c-card ul li {\n  margin-bottom: 20px;\n  display: list-item;\n}\n.c-card ul li:last-child {\n  margin-bottom: 0;\n}\n.c-card .sign {\n  position: relative;\n  width: 86px;\n  margin: 0 auto;\n  margin-bottom: 16px;\n  font-size: 26px;\n  font-weight: 700;\n}\n.c-card .sign-item {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.c-card .price {\n  margin-left: 13px;\n  font-size: 50px;\n  font-weight: 700;\n}\n.c-card .newprice {\n  display: none;\n  margin-bottom: 0;\n  margin-left: 13px;\n  font-size: 50px;\n}\n\n/* ================================ Modules ================================ */\n.header {\n  padding: 5px 0;\n  background-color: #ffffff;\n}\n.header .toggle__popup {\n  position: absolute;\n  top: 75px;\n  display: flex;\n  flex-direction: column;\n  max-width: 180px;\n  max-height: 0px;\n  padding: 28px 24px 24px 23px;\n  overflow: hidden;\n  background-color: #ffffff;\n  border-radius: 16px;\n  opacity: 0;\n  box-shadow: 0px 20px 48px rgba(177, 177, 177, 0.4);\n  transition: 0.3s;\n}\n.header .toggle__popup a {\n  margin-bottom: 20px;\n}\n.header .toggle__popup a:last-child {\n  margin-bottom: 0;\n}\n.header [data-toggle] {\n  transition: 0.3s;\n  cursor: pointer;\n}\n.header [data-toggle]:hover {\n  color: #1749b3;\n}\n.header [data-toggle]:hover svg {\n  transform: rotate(90deg);\n}\n.header [data-toggle]:hover svg path {\n  fill: #1749b3;\n}\n.header__burger {\n  display: none;\n}\n.header__close {\n  display: none;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header nav svg {\n  transition: 0.3s;\n}\n.header nav.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.header nav.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.header__content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.header__content div {\n  display: flex;\n  align-items: center;\n}\n.header__content div .socials {\n  margin-left: 42px;\n}\n.header__content div svg {\n  transition: 0.3s;\n}\n.header__content div.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.header__content div.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.header__content div p {\n  margin-left: 28px;\n}\n.header__content div p ul li {\n  display: block;\n}\n.header__content div p ul a {\n  font-weight: 500;\n}\n.header__sub {\n  margin-right: 44px;\n  cursor: pointer;\n}\n.header__sub svg {\n  margin-left: 8px;\n}\n.header__sub:hover svg path {\n  fill: #1749b3;\n}\n.header li {\n  margin-right: 44px;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n  margin-right: 116px;\n}\n.header__logo p {\n  font-weight: 600;\n}\n.header__logo svg {\n  width: 55px;\n  height: 55px;\n  margin-right: 8px;\n}\n.header__logo:hover {\n  color: #333333;\n}\n.header .b-iconButton {\n  margin-right: 12px;\n}\n.header .b-iconButton:last-child {\n  margin-right: 0px;\n}\n.header .b-button {\n  width: 136px;\n  margin-left: 40px;\n}\n\n.footer {\n  padding: 40px 0 12px;\n  background-color: #1749b3;\n}\n.footer .toggle__popup {\n  position: absolute;\n  top: 70px;\n  display: flex;\n  flex-direction: column;\n  max-height: 0px;\n  overflow: hidden;\n  opacity: 0;\n  transition: 0.3s;\n}\n.footer .toggle__popup a {\n  margin-bottom: 5px;\n}\n.footer .toggle__popup a:last-child {\n  margin-bottom: 0;\n}\n.footer [data-toggle] {\n  color: #ffffff;\n  cursor: pointer;\n}\n.footer [data-toggle]:hover svg {\n  transform: rotate(90deg);\n}\n.footer [data-toggle]:hover svg path {\n  fill: #ffffff;\n}\n.footer a {\n  color: #ffffff;\n}\n.footer__wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.footer p {\n  color: #ffffff;\n}\n.footer__text {\n  width: 178px;\n  margin-top: 23px;\n}\n.footer__logo {\n  display: flex;\n  align-items: center;\n  margin-right: 150px;\n}\n.footer__logo p {\n  font-weight: 600;\n}\n.footer__logo svg {\n  width: 55px;\n  height: 55px;\n  margin-right: 8px;\n  border-radius: 100%;\n}\n.footer__content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.footer__content-wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 65%;\n}\n.footer__content .arrow svg {\n  transition: 0.3s;\n}\n.footer__content .arrow svg path {\n  fill: #ffffff;\n}\n.footer__content div p {\n  margin-bottom: 20px;\n}\n.footer__content li {\n  display: block;\n  margin-bottom: 12px;\n}\n.footer__content li:last-child {\n  margin-bottom: 0;\n}\n.footer__info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n}\n.footer__info.--active .arrow svg {\n  transform: rotate(180deg);\n}\n.footer__info.--active .toggle__popup {\n  max-height: 169px;\n  opacity: 1;\n}\n.footer__info .socials {\n  margin-bottom: 17px;\n}\n.footer__row {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.footer__row p {\n  color: #d3d3d3;\n}\n\n.m-baner {\n  display: flex;\n  margin: 60px 0px 120px;\n}\n.m-baner div {\n  flex: 1;\n  width: 592px;\n  height: 500px;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.m-baner__info {\n  padding: 114px 60px;\n  color: #ffffff;\n  background-color: #1749b3;\n}\n.m-baner__info h1 {\n  margin-bottom: 24px;\n}\n.m-baner__info p {\n  margin-bottom: 40px;\n}\n.m-baner__info .b-button {\n  width: 207px;\n}\n.m-baner__img {\n  width: 592px;\n  margin-left: 16px;\n}\n.m-baner__img img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 32px;\n}\n\n.m-steps {\n  display: flex;\n  justify-content: center;\n}\n.m-steps .c-step {\n  margin-right: 16px;\n}\n.m-steps .c-step:last-child {\n  margin-right: 0;\n}\n\n.m-about {\n  display: flex;\n  margin: 37px 0px 120px;\n}\n.m-about div {\n  flex: 1;\n  height: 535px;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n}\n.m-about__info {\n  padding: 60px;\n  background-color: #ffffff;\n}\n.m-about__info p {\n  font-family: Mulish, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n.m-about__info svg {\n  width: 130px;\n  height: 130px;\n  margin-bottom: 32px;\n  border-radius: 100%;\n}\n.m-about p {\n  margin-bottom: 32px;\n}\n.m-about p:last-child {\n  margin-bottom: 0;\n  font-weight: 700;\n}\n.m-about__img {\n  width: 592px;\n  margin-left: 16px;\n  overflow: hidden;\n  border-radius: 32px;\n}\n.m-about__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* ================================ Media ================================ */\n@media (max-width: 1280px) {\n  .header__logo {\n    margin-right: 16px;\n  }\n  .c-invite div p {\n    width: auto;\n  }\n}\n@media (max-width: 1024px) {\n  .header__logo svg {\n    width: 32px;\n    height: 32px;\n  }\n  .header__content {\n    display: none;\n  }\n  .header__burger {\n    display: block;\n  }\n  .header.--active .header__burger {\n    display: none;\n  }\n  .header.--active .header__close {\n    display: block;\n  }\n  .header.--active .header__content {\n    position: absolute;\n    display: flex;\n    width: 90%;\n    height: 35px;\n    background-color: #ffffff;\n  }\n  .m-baner {\n    margin: 52px 0 106px;\n  }\n  .m-baner div {\n    width: 344px;\n    height: auto;\n  }\n  .m-baner__info {\n    padding: 23px 20px 24px;\n  }\n  .home-page h2 {\n    margin-bottom: 32px;\n  }\n  .home-page__faqs {\n    margin-bottom: 100px;\n  }\n  .home-page__faqs .b-button {\n    margin-top: 32px;\n  }\n  .c-faqs div {\n    align-items: flex-start;\n  }\n  .c-invite {\n    padding: 32px;\n  }\n  .c-invite h3 {\n    margin-bottom: 16px;\n  }\n  .c-invite__link {\n    padding: 20px 24px;\n  }\n  .c-choose .info {\n    padding: 49px 28px 48px 32px;\n  }\n  .c-choose p {\n    display: none;\n  }\n  .c-step {\n    padding: 20px;\n  }\n  .c-step h4 {\n    margin-top: -65px;\n    margin-bottom: 39px;\n  }\n  .c-step__img img {\n    width: 88px;\n    height: 88px;\n  }\n  .m-about div {\n    height: 412px;\n  }\n  .m-about__info {\n    padding: 20px;\n  }\n  .m-about__info svg {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 20px;\n  }\n  .m-about__info p {\n    margin-bottom: 16px;\n  }\n  .platform-page .c-card {\n    height: 412px;\n    padding: 37px 16px;\n  }\n  .footer__logo {\n    margin-right: 50px;\n  }\n  .footer__logo svg {\n    width: 44px;\n    height: 44px;\n  }\n  .footer__text {\n    margin-top: 12px;\n  }\n  .footer__wrapper {\n    padding-bottom: 40px;\n    border-bottom: 1px solid #d3d3d3;\n  }\n}\n@media (max-width: 850px) {\n  .header.--active .header__content {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    padding: 12px;\n    overflow: scroll;\n  }\n  .header.--active .header__content nav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .header.--active .header__content nav .header__sub,\n.header.--active .header__content nav li {\n    margin-right: 0;\n    margin-bottom: 20px;\n    font-family: Mulish, sans-serif;\n    font-size: 18px;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 150%;\n    text-transform: none;\n    text-decoration: none;\n  }\n  .header.--active .header__content nav .toggle__popup {\n    position: relative;\n    top: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    max-width: 100%;\n    padding: 0;\n    background-color: transparent;\n    border-radius: 0px;\n    box-shadow: 0px 0px 0px;\n  }\n  .header.--active .header__content nav .toggle__popup a {\n    margin-right: 10px;\n  }\n  .header.--active .header__content div {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n  .header.--active .header__content div .socials {\n    margin-bottom: 20px;\n    margin-left: 0;\n  }\n  .header.--active .header__content div .b-button {\n    margin-left: 0;\n  }\n  .header.--active .header__content div .toggle__popup {\n    position: relative;\n    top: 0;\n    flex-direction: row;\n    align-items: flex-start;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 0;\n    background-color: transparent;\n    border-radius: 0px;\n    box-shadow: 0px 0px 0px;\n  }\n  .header.--active .header__content div .toggle__popup a {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n  .header.--active .header__content div .toggle__popup a:last-child {\n    margin-right: 0;\n  }\n  .m-baner {\n    flex-direction: column-reverse;\n    margin: 48px 0 100px;\n  }\n  .m-baner div {\n    width: 100%;\n    height: auto;\n  }\n  .m-baner__img {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n  .m-baner__img img {\n    width: 327px;\n    height: 278px;\n  }\n  .m-baner .b-button {\n    width: 100%;\n  }\n  .m-steps {\n    flex-direction: column;\n  }\n  .m-steps .c-step {\n    margin-right: 0;\n    margin-bottom: 16px;\n  }\n  .c-invite {\n    flex-direction: column;\n    padding: 32px 20px;\n  }\n  .c-invite__link {\n    margin-top: 32px;\n    margin-left: 0;\n    padding: 28px 33px;\n  }\n  .m-about {\n    flex-direction: column-reverse;\n    margin-bottom: 100px;\n  }\n  .m-about__img {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: auto;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n  .m-about__img img {\n    width: 327px;\n    height: 278px;\n    border-radius: 24px;\n  }\n  .platform-page__cards {\n    flex-direction: column;\n    margin-top: 28px;\n    margin-bottom: 16px;\n  }\n  .platform-page__cards .c-card {\n    height: 333px;\n    margin-right: 0 !important;\n    margin-bottom: 16px;\n  }\n  .platform-page__cards .c-card:last-child {\n    margin-bottom: 0;\n  }\n  .platform-page__cards .c-card ul {\n    margin-bottom: 48px;\n  }\n  .platform-page__cards .c-card .sign {\n    margin-bottom: 12px;\n  }\n  .platform-page__cards .c-card .b-button {\n    padding: 14px 0;\n    font-size: 16px;\n  }\n  .footer__contant-wrapper {\n    width: 100%;\n  }\n}\n@media (max-width: 570px) {\n  .header__logo p {\n    display: none;\n  }\n  .c-choose {\n    flex-direction: column-reverse;\n  }\n  .c-choose img {\n    width: 180%;\n  }\n  .c-choose .info {\n    padding: 32px 20px;\n  }\n  .c-choose .info h2 {\n    margin-bottom: 16px;\n    text-align: start;\n  }\n  .c-choose .info p {\n    display: block;\n    margin-bottom: 32px;\n  }\n  .c-choose .info .b-button {\n    width: 100%;\n  }\n  .c-faqs h6 {\n    margin-right: 21px;\n    font-size: 17px;\n  }\n  .c-faqs p {\n    font-size: 17px;\n  }\n  .home-page__faqs .b-button {\n    margin-top: 28px;\n  }\n  .platform-page .b-toggle {\n    width: 100%;\n  }\n  .footer .toggle__popup {\n    top: 30px;\n    right: 0;\n    flex-direction: row;\n  }\n  .footer .toggle__popup a {\n    margin-right: 10px;\n    margin-bottom: 0;\n  }\n  .footer .toggle__popup a:last-child {\n    margin-right: 0;\n  }\n  .footer__info {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 40px;\n  }\n  .footer__info .socials {\n    margin-bottom: 0;\n  }\n  .footer__content {\n    flex-direction: column;\n  }\n  .footer__content-wrapper {\n    width: 100%;\n  }\n  .footer__text {\n    width: auto;\n  }\n  .footer__logo {\n    margin-right: 0;\n  }\n  .footer__col {\n    margin-bottom: 40px;\n  }\n  .footer__wrapper {\n    flex-direction: column;\n  }\n  .footer__row {\n    flex-direction: column;\n    align-items: center;\n    margin-top: 16px;\n  }\n  .footer__row p {\n    margin-bottom: 12px;\n  }\n  .footer__row p:last-child {\n    margin-bottom: 0;\n  }\n  h1 {\n    font-family: Mulish, sans-serif;\n    font-size: 30px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h2 {\n    font-family: Mulish, sans-serif;\n    font-size: 25px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h3 {\n    font-family: Mulish, sans-serif;\n    font-size: 22px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h4 {\n    font-family: Mulish, sans-serif;\n    font-size: 19px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n  h5 {\n    font-family: Mulish, sans-serif;\n    font-size: 18px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 140%;\n    letter-spacing: 0.01em;\n    text-transform: none;\n    text-decoration: none;\n  }\n}\n.home-page h2 {\n  margin-bottom: 37px;\n  text-align: center;\n}\n.home-page .c-choose {\n  margin-bottom: 16px;\n}\n.home-page__choses {\n  margin-bottom: 128px;\n}\n.home-page__steps {\n  margin-bottom: 120px;\n}\n.home-page .c-invite {\n  margin-top: 20px;\n}\n\n.faqs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 120px;\n}\n.faqs h2 {\n  margin-bottom: 37px;\n  text-align: center;\n}\n.faqs .c-faqs {\n  margin-bottom: 16px;\n}\n.faqs .c-faqs:last-child {\n  margin-bottom: 0;\n}\n.faqs .b-button {\n  width: 243px;\n  margin-top: 40px;\n  padding: 16px 0;\n  border-radius: 16px;\n}\n\n.platform-page {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.platform-page.--active {\n  margin-top: 80px;\n  margin-bottom: 100px;\n}\n.platform-page .b-toggle {\n  display: none;\n  margin-top: 52px;\n}\n.platform-page .btn-return {\n  position: fixed;\n  bottom: 10px;\n  display: none;\n  opacity: 0.5;\n  transition-duration: 0.3s;\n}\n.platform-page .btn-return.--on-scroll {\n  bottom: -10px;\n  opacity: 0;\n}\n.platform-page .btn-return .b-button {\n  width: 200px;\n}\n.platform-page .btn-return .b-button svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  transform: rotate(90deg);\n}\n.platform-page .btn-return .b-button svg path {\n  fill: #ffffff;\n}\n.platform-page .btn-return .b-button:hover {\n  color: #333333;\n}\n.platform-page .btn-return .b-button:hover svg path {\n  fill: #333333;\n}\n.platform-page h1 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.platform-page p {\n  font-size: 18px;\n}\n.platform-page__cards {\n  display: flex;\n  margin-top: 48px;\n  margin-bottom: 120px;\n}\n.platform-page__cards .c-card {\n  margin-right: 16px;\n}\n.platform-page__cards .c-card:last-child {\n  margin-right: 0;\n}","/* ================================ Styles ================================ */\n@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,600;0,700;0,800;0,900;1,300;1,600&display=swap');\n\n$color-blue: #1749b3;\n$color-blue-lght: #4b84fd;\n$color-red: #fe0000;\n$color-black-1: #333333;\n$color-black-2: #171717;\n$color-gray: #606060;\n$color-gray-lght: #d3d3d3;\n$color-white: #ffffff;\n$color-background: #ecf3fb;\n\n@mixin text-style-heading-1 {\n  font-family: Mulish, sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-heading-2 {\n  font-family: Mulish, sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-heading-3 {\n  font-family: Mulish, sans-serif;\n  font-size: 26px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-heading-4 {\n  font-family: Mulish, sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-heading-5 {\n  font-family: Mulish, sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 140%;\n  text-transform: none;\n  text-decoration: none;\n}\n\n@mixin text-style-heading-6 {\n  font-family: Mulish, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 150%;\n}\n@mixin text-style-button {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 130%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-paragraph-blog-r {\n  font-family: Mulish, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-paragraph {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-heading-1 {\n  font-family: Mulish, sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-heading-2 {\n  font-family: Mulish, sans-serif;\n  font-size: 25px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-heading-3 {\n  font-family: Mulish, sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-heading-4 {\n  font-family: Mulish, sans-serif;\n  font-size: 19px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-heading-5 {\n  font-family: Mulish, sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-paragraph-blog {\n  font-family: Mulish, sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n@mixin text-style-m-paragraph {\n  font-family: Mulish, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: 150%;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  text-decoration: none;\n}\n","/* ================================ Base ================================ */\n\nbody {\n  background-color: $color-background;\n  font-family: Mulish, sans-serif;\n}\n\np {\n  @include text-style-paragraph;\n}\n\na {\n  @include text-style-paragraph;\n  color: $color-black-1;\n  transition-duration: 0.3s;\n\n  &:hover {\n    color: $color-blue;\n  }\n\n  &:active {\n    color: $color-blue-lght;\n  }\n}\n\nsvg {\n  path {\n    transition-duration: 0.3s;\n  }\n}\n\nli {\n  display: inline;\n}\n\nh1 {\n  @include text-style-heading-1;\n}\n\nh2 {\n  @include text-style-heading-2;\n}\n\nh3 {\n  @include text-style-heading-3;\n}\n\nh4 {\n  @include text-style-heading-4;\n}\n\nh5 {\n  @include text-style-heading-5;\n}\n\nh6 {\n  @include text-style-heading-6;\n}\n\nbutton {\n  @include text-style-button;\n}\n\n.b-iconButton {\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    svg {\n      path {\n        fill: $color-blue;\n      }\n    }\n  }\n\n  &:active {\n    svg {\n      path {\n        fill: $color-blue-lght;\n      }\n    }\n  }\n\n  &.--white {\n    svg {\n      path {\n        fill: $color-white;\n      }\n    }\n  }\n}\n\n.b-button {\n  @include text-style-button;\n  color: $color-white;\n  padding: 9px 0;\n  background-color: $color-blue;\n  border-radius: 12px;\n  transition-duration: 0.3s;\n  border: 1px solid transparent;\n\n  &:hover {\n    color: $color-black-2;\n    background-color: $color-white;\n    border: 1px solid $color-blue;\n  }\n\n  &:active {\n    color: $color-white;\n    background-color: $color-blue-lght;\n    border: 1px solid $color-blue-lght;\n  }\n\n  &.--black {\n    color: $color-white;\n    background-color: $color-black-1;\n\n    &:hover {\n      color: $color-black-1;\n      background-color: $color-white;\n      border: 1px solid $color-black-1;\n    }\n\n    &:active {\n      color: $color-white;\n      background-color: $color-gray;\n      border: 1px solid $color-gray;\n    }\n  }\n\n  &.--white {\n    color: $color-black-2;\n    background-color: $color-white;\n    border: 1px solid $color-blue;\n\n    &:hover {\n      color: $color-white;\n      background-color: $color-blue;\n    }\n\n    &:active {\n      color: $color-white;\n      background-color: $color-blue-lght;\n      border: 1px solid $color-blue-lght;\n    }\n  }\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n$togglewidth: 360px;\n\n.b-toggle {\n  position: relative;\n  display: inline-block;\n  width: $togglewidth;\n  height: 61px;\n  font-size: 18px;\n\n  &__input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n\n  &__slider {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    background-color: transparent;\n    cursor: pointer;\n    transition: 0.4s;\n  }\n\n  &__slider::before {\n    position: absolute;\n    display: flex;\n    content: \"\";\n    width: 50%;\n    height: 100%;\n    background-color: $color-blue;\n    transition: 0.4s;\n  }\n\n  &__input:checked + &__slider {\n    display: flex;\n    align-items: center;\n    // background-color: $color-gray;\n    background-color: transparent;\n\n    .b-toggle__container-x2 {\n      color: $color-white;\n    }\n\n    .b-toggle__container-x1 {\n      color: $color-black-2;\n    }\n  }\n\n  &__input:checked + &__slider::before {\n    transform: translateX($togglewidth/2);\n  }\n  .--round {\n    border-radius: 12px;\n    border: 1px solid $color-blue;\n\n    &::before {\n      border-radius: 12px;\n    }\n  }\n\n  &__container {\n    z-index: 2;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    color: $color-black-2;\n\n    &-x1 {\n      color: $color-white;\n      transition-duration: 0.3s;\n    }\n\n    &-x2 {\n      transition-duration: 0.3s;\n    }\n  }\n}\n\n.b-toTop {\n  background-color: $color-black-1;\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\n  border-radius: 100%;\n  transition-duration: 0.3s;\n  position: fixed;\n  top: 55%;\n  right: 20px;\n  height: 0;\n  width: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n\n  &.--active{\n    opacity: 1;\n    height: 40px;\n    width: 40px;\n  }\n\n  &:hover{\n    background-color: transparent;\n    border: 1px solid $color-black-1;\n\n    svg {\n  \n      path {\n        fill: $color-black-1;\n      }\n    }\n  }\n\n  svg {\n\n    transform: rotate(180deg);\n\n    path {\n      fill: $color-white;\n    }\n  }\n}\n","/* ================================ Combinations ================================ */\n\n.c-choose {\n  display: flex;\n  background-color: $color-white;\n  border-radius: 32px;\n\n  .b-button {\n    width: 147px;\n  }\n\n  .info {\n    flex: 1;\n    padding: 60px 112px 60px 60px;\n\n    h2 {\n      margin-bottom: 22px;\n      text-align: start;\n    }\n\n    p {\n      margin-bottom: 38px;\n    }\n  }\n\n  .imgs{\n    max-width: 588px;\n    height: 342px;\n    overflow: hidden;\n    flex: 1;\n    position: relative;\n  }\n  img {\n    border-radius: 32px;\n    height: 342px;\n    object-fit: cover;\n    transition-duration: 0.3s;\n  }\n\n  .animation{\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 588px;\n    height: 342px;\n    opacity: 0;\n  }\n  \n}\n\n.c-step {\n  flex: 1;\n  padding: 6px 6px 40px 40px;\n  background: $color-white;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n\n  &__img {\n    display: flex;\n    justify-content: flex-end;\n\n    img {\n      width: 185px;\n      height: 185px;\n    }\n  }\n}\n\n.c-invite {\n  display: flex;\n  align-items: center;\n  // margin-top: 20px;\n  padding: 44px 80px;\n  color: $color-white;\n  background-color: $color-blue;\n  border-radius: 32px;\n  width: 100%;\n\n  h3 {\n    margin-bottom: 24px;\n  }\n\n  div {\n\n    p {\n      width: 508px;\n    }\n  }\n\n  &__link {\n    width: 100%;\n    margin-left: 87px;\n    padding: 28px 71px;\n    color: $color-black-2;\n    background-color: #f1f4f8;\n    border-radius: 16px;\n    text-align: center;\n\n    a {\n      color: $color-blue;\n      text-transform: uppercase;\n      // text-decoration: underline;\n      font-weight: 600;\n\n      &:hover{\n        color: $color-black-2;\n      }\n\n      &:active{\n        color: $color-black-1;\n      }\n\n      svg {\n        margin-left: 8px;\n      }\n    }\n  }\n}\n\n.c-faqs {\n  padding: 32px 40px 40px;\n  background-color: $color-white;\n  border-radius: 32px;\n  box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2), 0px 12px 28px rgba(244, 245, 245, 0.2);\n\n  &.--active {\n\n    p {\n      margin-top: 19px;\n    }\n\n    div {\n\n      span {\n\n        svg {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n\n  p {\n    overflow: hidden;\n    transition: 0.3s;\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n\n    &:hover {\n\n      svg {\n        transform: rotate(90deg);\n      }\n    }\n\n    span {\n      padding: 12px;\n      background-color: #f1f4f8;\n      border-radius: 10px;\n    }\n\n    svg {\n      width: 20px;\n      height: 20px;\n      transition-duration: 0.3s;\n    }\n  }\n}\n\n.c-card {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 532px;\n  padding: 60px 40px 40px;\n  background-color: $color-white;\n  border-radius: 32px;\n  box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n\n  .b-button {\n    width: 100%;\n    padding: 16px 0;\n    font-size: 18px;\n\n    &:hover{\n      background-color: $color-black-1;\n      border: 1px solid $color-black-1;\n      color: $color-white;\n    }\n  }\n\n  h2 {\n    padding-bottom: 20px;\n    border-bottom: 1px solid #dbdbdb;\n    text-align: center;\n  }\n\n  ul {\n    @include text-style-paragraph;\n    padding-top: 20px;\n\n    li {\n      margin-bottom: 20px;\n      display: list-item;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  .sign {\n    position: relative;\n    width: 86px;\n    margin: 0 auto;\n    margin-bottom: 16px;\n    font-size: 26px;\n    font-weight: 700;\n\n    &-item {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n    }\n  }\n\n  .price {\n    // margin-bottom: 16px;\n    margin-left: 13px;\n    font-size: 50px;\n    font-weight: 700;\n  }\n\n  .newprice {\n    display: none;\n    margin-bottom: 0;\n    margin-left: 13px;\n    font-size: 50px;\n  }\n}\n","/* ================================ Modules ================================ */\n\n.header {\n  padding: 5px 0;\n  background-color: $color-white;\n\n  .toggle__popup {\n    position: absolute;\n    top: 75px;\n    display: flex;\n    flex-direction: column;\n    max-width: 180px;\n    max-height: 0px;\n    padding: 28px 24px 24px 23px;\n    overflow: hidden;\n    background-color: $color-white;\n    border-radius: 16px;\n    opacity: 0;\n    box-shadow: 0px 20px 48px rgba(177, 177, 177, 0.4);\n    transition: 0.3s;\n\n    a {\n      margin-bottom: 20px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  [data-toggle] {\n    transition: 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      color: $color-blue;\n\n      svg {\n        transform: rotate(90deg);\n\n        path {\n          fill: $color-blue;\n        }\n      }\n    }\n  }\n\n  &__burger {\n    display: none;\n  }\n\n  &__close {\n    display: none;\n  }\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  nav {\n    svg {\n      transition: 0.3s;\n    }\n\n    &.--active {\n      .toggle__popup {\n        max-height: 169px;\n        opacity: 1;\n      }\n\n      .arrow {\n        svg {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n\n  &__content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    div {\n      display: flex;\n      align-items: center;\n\n      .socials {\n        margin-left: 42px;\n      }\n\n      svg {\n        transition: 0.3s;\n      }\n\n      &.--active {\n        .arrow {\n          svg {\n            transform: rotate(180deg);\n          }\n        }\n\n        .toggle__popup {\n          max-height: 169px;\n          opacity: 1;\n        }\n      }\n\n      p {\n        margin-left: 28px;\n\n        ul {\n          li {\n            display: block;\n          }\n\n          a {\n            font-weight: 500;\n          }\n        }\n      }\n    }\n  }\n\n  &__sub {\n    margin-right: 44px;\n    cursor: pointer;\n\n    svg {\n      margin-left: 8px;\n    }\n\n    &:hover {\n      svg {\n        path {\n          fill: $color-blue;\n        }\n      }\n    }\n  }\n\n  li {\n    margin-right: 44px;\n  }\n\n  &__logo {\n    display: flex;\n    align-items: center;\n    margin-right: 116px;\n\n    p {\n      font-weight: 600;\n    }\n\n    svg {\n      width: 55px;\n      height: 55px;\n      margin-right: 8px;\n    }\n\n    &:hover{\n      color:$color-black-1;\n    }\n  }\n\n  .b-iconButton {\n    margin-right: 12px;\n\n    &:last-child {\n      margin-right: 0px;\n    }\n  }\n\n  .b-button {\n    width: 136px;\n    margin-left: 40px;\n  }\n}\n\n.footer {\n  padding: 40px 0 12px;\n  background-color: $color-blue;\n\n  .toggle__popup {\n    position: absolute;\n    top: 70px;\n    display: flex;\n    flex-direction: column;\n    // flex-direction: row;\n    max-height: 0px;\n    overflow: hidden;\n    opacity: 0;\n    transition: 0.3s;\n\n    a {\n      margin-bottom: 5px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  [data-toggle] {\n    color: $color-white;\n    cursor: pointer;\n\n    &:hover {\n      svg {\n        transform: rotate(90deg);\n\n        path {\n          fill: $color-white;\n        }\n      }\n    }\n  }\n\n  a {\n    color: $color-white;\n  }\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  p {\n    color: $color-white;\n  }\n\n  &__text {\n    width: 178px;\n    margin-top: 23px;\n  }\n\n  &__logo {\n    display: flex;\n    align-items: center;\n    margin-right: 150px;\n\n    p {\n      font-weight: 600;\n    }\n\n    svg {\n      width: 55px;\n      height: 55px;\n      margin-right: 8px;\n      border-radius: 100%;\n    }\n  }\n\n  &__content {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n\n    &-wrapper {\n      display: flex;\n      justify-content: space-between;\n      width: 65%;\n    }\n\n    .arrow {\n      svg {\n        transition: 0.3s;\n\n        path {\n          fill: $color-white;\n        }\n      }\n    }\n\n    div {\n      p {\n        margin-bottom: 20px;\n      }\n    }\n\n    li {\n      display: block;\n      margin-bottom: 12px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  &__info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    position: relative;\n\n    &.--active {\n      .arrow {\n        svg {\n          transform: rotate(180deg);\n        }\n      }\n\n      .toggle__popup {\n        max-height: 169px;\n        opacity: 1;\n      }\n    }\n\n    .socials {\n      margin-bottom: 17px;\n    }\n  }\n\n  &__row {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 40px;\n\n    p {\n      color: $color-gray-lght;\n    }\n  }\n}\n\n.m-baner {\n  display: flex;\n  margin: 60px 0px 120px;\n\n  div {\n    flex: 1;\n    width: 592px;\n    height: 500px;\n    border-radius: 32px;\n    box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n  }\n\n  &__info {\n    padding: 114px 60px;\n    color: $color-white;\n    background-color: $color-blue;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    p {\n      margin-bottom: 40px;\n    }\n\n    .b-button {\n      width: 207px;\n    }\n  }\n\n  &__img {\n    width: 592px;\n    margin-left: 16px;\n\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      border-radius: 32px;\n    }\n  }\n}\n\n.m-steps {\n  display: flex;\n  justify-content: center;\n\n  .c-step {\n    margin-right: 16px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n}\n\n.m-about {\n  display: flex;\n  margin: 37px 0px 120px;\n\n  div {\n    flex: 1;\n    height: 535px;\n    border-radius: 32px;\n    box-shadow: 0px 12px 28px rgba(244, 245, 245, 0.2);\n  }\n\n  &__info {\n    padding: 60px;\n    background-color: $color-white;\n\n    p {\n      @include text-style-paragraph-blog-r;\n    }\n\n    svg {\n      width: 130px;\n      height: 130px;\n      margin-bottom: 32px;\n      border-radius: 100%;\n    }\n  }\n\n  p {\n    margin-bottom: 32px;\n\n    &:last-child {\n      margin-bottom: 0;\n      font-weight: 700;\n    }\n  }\n\n  &__img {\n    width: 592px;\n    margin-left: 16px;\n    overflow: hidden;\n    border-radius: 32px;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n}\n","/* ================================ Media ================================ */\n@media (max-width: 1280px) {\n\n  .header {\n\n    &__logo {\n      margin-right: 16px;\n    }\n  }\n\n  .c-invite {\n\n    div {\n\n      p {\n        width: auto;\n      }\n    }\n  }\n}\n\n@media (max-width: 1024px) {\n  \n  .header {\n\n    &__logo {\n\n      svg {\n        width: 32px;\n        height: 32px;\n      }\n    }\n\n    &__content {\n      display: none;\n    }\n\n    &__burger {\n      display: block;\n    }\n\n    &.--active {\n\n      .header__burger {\n        display: none;\n      }\n\n      .header__close {\n        display: block;\n      }\n\n      .header__content {\n        position: absolute;\n        display: flex;\n        width: 90%;\n        height: 35px;\n        background-color: $color-white;\n      }\n    }\n  }\n\n  .m-baner {\n    margin: 52px 0 106px;\n\n    div {\n      width: 344px;\n      height: auto;\n    }\n\n    &__info {\n      padding: 23px 20px 24px;\n    }\n  }\n\n  .home-page {\n\n    h2 {\n      margin-bottom: 32px;\n    }\n\n    &__faqs {\n      margin-bottom: 100px;\n\n      .b-button {\n        margin-top: 32px;\n      }\n    }\n  }\n\n  .c-faqs {\n\n    div {\n      align-items: flex-start;\n    }\n  }\n\n  .c-invite {\n    padding: 32px;\n\n    h3 {\n      margin-bottom: 16px;\n    }\n\n    &__link {\n      padding: 20px 24px;\n    }\n  }\n\n  .c-choose {\n\n    .info {\n      padding: 49px 28px 48px 32px;\n    }\n\n    p {\n      display: none;\n    }\n  }\n\n  .c-step {\n    padding: 20px;\n\n    h4 {\n      margin-top: -65px;\n      margin-bottom: 39px;\n    }\n\n    &__img {\n\n      img {\n        width: 88px;\n        height: 88px;\n      }\n    }\n  }\n\n  .m-about {\n\n    div {\n      height: 412px;\n    }\n\n    &__info {\n      padding: 20px;\n\n      svg {\n        width: 60px;\n        height: 60px;\n        margin-bottom: 20px;\n      }\n\n      p {\n        margin-bottom: 16px;\n      }\n    }\n  }\n\n  .platform-page{\n\n    .c-card{\n      height: 412px;\n      padding: 37px 16px;\n    }\n  }\n\n  .footer {\n\n    &__logo {\n      margin-right: 50px;\n\n      svg {\n        width: 44px;\n        height: 44px;\n      }\n    }\n\n    &__text {\n      margin-top: 12px;\n    }\n\n    &__wrapper {\n      padding-bottom: 40px;\n      border-bottom: 1px solid $color-gray-lght;\n    }\n  }\n}\n\n@media (max-width: 850px) {\n\n  .header {\n\n    &.--active {\n\n      .header__content {\n        position: absolute;\n        top: 40px;\n        left: 0;\n        flex-direction: column;\n        justify-content: start;\n        align-items: center;\n        width: 100%;\n        height: auto;\n        padding: 12px;\n        overflow: scroll;\n\n        nav {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          width: 100%;\n          margin-bottom: 20px;\n\n          .header__sub,\n          li {\n            margin-right: 0;\n            margin-bottom: 20px;\n            @include text-style-paragraph-blog-r;\n          }\n\n          .toggle__popup {\n            position: relative;\n            top: 0;\n            display: flex;\n            flex-direction: row;\n            align-items: flex-start;\n            max-width: 100%;\n            padding: 0;\n            background-color: transparent;\n            border-radius: 0px;\n            box-shadow: 0px 0px 0px;\n\n            a {\n              margin-right: 10px;\n            }\n          }\n        }\n\n        div {\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n\n          .socials {\n            margin-bottom: 20px;\n            margin-left: 0;\n          }\n\n          .b-button {\n            margin-left: 0;\n          }\n\n          .toggle__popup {\n            position: relative;\n            top: 0;\n            flex-direction: row;\n            align-items: flex-start;\n            max-width: 100%;\n            margin-bottom: 20px;\n            padding: 0;\n            background-color: transparent;\n            border-radius: 0px;\n            box-shadow: 0px 0px 0px;\n\n            a {\n              margin-right: 10px;\n              margin-bottom: 0;\n\n              &:last-child {\n                margin-right: 0;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .m-baner {\n    flex-direction: column-reverse;\n    margin: 48px 0 100px;\n\n    div {\n      width: 100%;\n      height: auto;\n    }\n\n    &__img {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 16px;\n      margin-left: 0;\n\n      img {\n        width: 327px;\n        height: 278px;\n      }\n    }\n\n    .b-button {\n      width: 100%;\n    }\n  }\n\n  .m-steps {\n    flex-direction: column;\n\n    .c-step {\n      margin-right: 0;\n      margin-bottom: 16px;\n    }\n  }\n\n  .c-invite {\n    flex-direction: column;\n    padding: 32px 20px;\n\n    &__link {\n      margin-top: 32px;\n      margin-left: 0;\n      padding: 28px 33px;\n    }\n  }\n\n  .m-about {\n    flex-direction: column-reverse;\n    margin-bottom: 100px;\n\n    &__img {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      height: auto;\n      margin-bottom: 16px;\n      margin-left: 0;\n\n      img {\n        width: 327px;\n        height: 278px;\n        border-radius: 24px;\n      }\n    }\n  }\n\n  .platform-page__cards{\n    flex-direction: column;\n    margin-top: 28px;\n    margin-bottom: 16px;\n\n    .c-card{\n      height: 333px;\n      margin-right: 0 !important;\n      margin-bottom: 16px;\n\n      &:last-child{\n        margin-bottom: 0;\n      }\n\n      ul{\n        margin-bottom: 48px;\n      }\n\n      .sign{\n        margin-bottom: 12px;\n      }\n\n      .b-button{\n        padding: 14px 0;\n        font-size: 16px;\n      }\n    }  \n  }\n\n  .platform-page{\n    // height: auto;\n  }\n\n  .footer {\n\n    &__contant {\n\n      &-wrapper {\n        width: 100%;\n      }\n    }\n  }\n}\n\n@media (max-width: 570px) {\n\n  .header {\n\n    &__logo {\n\n      p {\n        display: none;\n      }\n    }\n  }\n\n  .c-choose {\n    flex-direction: column-reverse;\n\n    img {\n      width: 180%;\n    }\n\n    .info {\n      padding: 32px 20px;\n\n      h2 {\n        margin-bottom: 16px;\n        text-align: start;\n      }\n\n      p {\n        display: block;\n        margin-bottom: 32px;\n      }\n\n      .b-button {\n        width: 100%;\n      }\n    }\n  }\n\n  .c-faqs {\n\n    h6 {\n      margin-right: 21px;\n      font-size: 17px;\n    }\n\n    p {\n      font-size: 17px;\n    }\n  }\n\n  .home-page {\n\n    &__faqs {\n\n      .b-button {\n        margin-top: 28px;\n      }\n    }\n  }\n\n  .platform-page{\n\n    .b-toggle{\n      width: 100%;\n    }\n  }\n\n  .footer {\n\n    .toggle__popup {\n      top: 30px;\n      right: 0;\n      flex-direction: row;\n\n      a {\n        margin-right: 10px;\n        margin-bottom: 0;\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n\n    &__info {\n      flex-direction: row;\n      justify-content: space-between;\n      margin-top: 40px;\n\n      .socials {\n        margin-bottom: 0;\n      }\n\n      &.--active {\n\n        .toggle__popup {\n          // top: 440px;\n        }\n      }\n    }\n\n    &__content {\n      flex-direction: column;\n\n      &-wrapper {\n        width: 100%;\n      }\n    }\n\n    &__text {\n      width: auto;\n    }\n\n    &__logo {\n      margin-right: 0;\n    }\n\n    &__col {\n      margin-bottom: 40px;\n    }\n\n    &__wrapper {\n      flex-direction: column;\n    }\n\n    &__row {\n      flex-direction: column;\n      align-items: center;\n      margin-top: 16px;\n\n      p {\n        margin-bottom: 12px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n      }\n    }\n  }\n\n  h1 {\n    @include text-style-m-heading-1;\n  }\n\n  h2 {\n    @include text-style-m-heading-2;\n  }\n\n  h3 {\n    @include text-style-m-heading-3;\n  }\n\n  h4 {\n    @include text-style-m-heading-4;\n  }\n\n  h5 {\n    @include text-style-m-heading-5;\n  }\n}\n",".home-page{\n\n  h2{\n    margin-bottom: 37px;\n    text-align: center;\n  }\n\n  .c-choose{\n    margin-bottom: 16px;\n  }\n\n  &__choses{\n    margin-bottom: 128px;\n  }\n\n  &__steps{\n    margin-bottom: 120px;\n  }\n\n  .c-invite{\n    margin-top: 20px;\n  }\n}\n\n.faqs{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 120px;\n\n  h2{\n    margin-bottom: 37px;\n    text-align: center;\n  }\n\n  .c-faqs {\n    margin-bottom: 16px;\n\n    &:last-child{\n      margin-bottom: 0;\n    }\n  }\n\n  .b-button{\n    width: 243px;\n    margin-top: 40px;\n    padding: 16px 0;\n    border-radius: 16px;\n  }\n}",".platform-page{\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  overflow: hidden;\n  transition: height 0.3s;\n\n  &.--active{\n    margin-top: 80px;\n    margin-bottom: 100px;\n  }\n\n  .b-toggle{\n    display: none;\n    margin-top: 52px;\n  }\n\n  .btn-return{\n    position: fixed;\n    bottom: 10px;\n    display: none;\n    opacity: 0.5;\n    transition-duration: 0.3s;\n\n    &.--on-scroll{\n      bottom: -10px;\n      opacity: 0;\n    }\n\n    .b-button{\n      width: 200px;\n\n      svg{\n        width: 20px;\n        height: 20px;\n        margin-right: 10px;\n        transform: rotate(90deg);\n\n        path{\n          fill: $color-white;\n        }\n      }\n\n      &:hover{\n        color: $color-black-1;\n\n        svg{\n\n          path{\n            fill: $color-black-1;\n          }\n        }\n      }\n    }\n  }\n\n  \n  h1{\n    margin-bottom: 20px;\n    text-align: center;\n  }\n\n  p{\n    font-size: 18px;\n  }\n\n  &__cards{\n    display: flex;\n    margin-top: 48px;\n    margin-bottom: 120px;\n\n    .c-card{\n      margin-right: 16px;\n\n      &:last-child{\n        margin-right: 0;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/scss/index.scss":
/*!*****************************!*\
  !*** ./app/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./app/scss/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb_bundle"] = self["webpackChunkweb_bundle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("./app/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.77398d6c8e4000a0f705.js.map