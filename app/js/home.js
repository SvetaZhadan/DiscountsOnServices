import { info } from "./sourse.js";
import { makeClone, setCard } from "./functions.js";

export default function homePage() {
  if (document.querySelector(".home-page")) {
    const homePage = document.querySelector(".home-page");
    const homeItems = {
      choses: homePage.querySelector(".home-page__choses"),
    };

    const chosesItems = {
      template: homeItems.choses.querySelector(".c-choose-temp"),
    };

    info.forEach((item) => {
      setCard(chosesItems.template, item, ".c-choose");
    });

    const cards = homeItems.choses.querySelectorAll(".c-choose");

    cards.forEach((card, i) => {
      card.onmouseover = function () {
        card.querySelector(".animation").style.opacity = 1;
        card.querySelector(".img").style.opacity = 0;
      };
      card.onmouseout = function () {
        card.querySelector(".animation").style.opacity = 0;
        card.querySelector(".img").style.opacity = 1;
      };

      const btn = card.querySelector(".b-button");
      let url = btn.parentNode.href;

      btn.onclick = function () {
        btn.parentNode.href = url + "#" + i;
      };
    });
  }
}

export { homePage };
