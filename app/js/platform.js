import { setCard } from "./functions.js";
import { info } from "./sourse.js";

export default function platformPage() {
  if (document.querySelector(".platform-page")) {
    const url = window.location.href;
    let platformNum = url.split("#").pop();
    platformNum == url ? (platformNum = 0) : "";

    const platformPage = document.querySelector(".platform-page");
    const platformItems = {
      toggle: platformPage.querySelector(".b-toggle"),
      btnReturn: platformPage.querySelector(".btn-return"),
      cardsBlock: platformPage.querySelector(".platform-page__cards"),
      height: platformPage.clientHeight,
      title: platformPage.querySelector(".name"),
      subtitle: platformPage.querySelector(".subtitle"),
    };

    platformItems.title.textContent = info[platformNum].name;
    platformItems.subtitle.textContent = info[platformNum].subtitle;

    info[platformNum].plans.forEach((plan) => {
      const cardTemp = platformItems.cardsBlock.querySelector(".c-card-temp");
      setCard(cardTemp, plan, ".c-card");

      if (plan.halfyearprice) {
        platformItems.toggle.style.display = "block";
        const cards = platformPage.querySelectorAll(".c-card");
        cards.forEach((card) => {
          card.querySelector(".fullyearprice").style.display = "none";
          card.querySelector(".halfyearprice").style.display = "block";
        });
      }
    });

    platformItems.toggle.onchange = function () {
      const cards = platformPage.querySelectorAll(".c-card");

      if (platformItems.toggle.classList.contains("--toggle")) {
        platformItems.toggle.classList.remove("--toggle");
        cards.forEach((card) => {
          card.querySelector(".fullyearprice").style.display = "block";
          card.querySelector(".halfyearprice").style.display = "none";
        });
      } else {
        platformItems.toggle.classList.add("--toggle");
        cards.forEach((card) => {
          card.querySelector(".fullyearprice").style.display = "none";
          card.querySelector(".halfyearprice").style.display = "block";
        });
      }
    };

    platformItems.btnReturn.style.display = "block";
    platformItems.btnReturn.onclick = function () {
      platformItems.btnReturn.style.display = "none";
    };
  }
}

export { platformPage };
