import { makeClone, setCard } from "./functions.js";
import { info } from "./sourse.js";

export default function platformPage() {
  if (document.querySelector(".platform-page")) {
    const currentInfo = sessionStorage.getItem("currentObj");
    const currentPlatform = JSON.parse(currentInfo);

    console.log(currentPlatform);
    const platformPage = document.querySelector(".platform-page");
    const platformItems = {
      toggle: platformPage.querySelector(".b-toggle"),
      btnReturn: platformPage.querySelector(".btn-return"),
      cardsBlock: platformPage.querySelector(".platform-page__cards"),
      height: platformPage.clientHeight,
      title: platformPage.querySelector(".name"),
      subtitle: platformPage.querySelector(".subtitle"),
    };

    platformItems.title.textContent = currentPlatform.name;
    platformItems.subtitle.textContent = currentPlatform.subtitle;

    currentPlatform.plans.forEach((plan) => {
      const cardTemp = platformItems.cardsBlock.querySelector(".c-card-temp");
      setCard(cardTemp, plan, ".c-card");

      if (plan.newprice) {
        platformItems.toggle.style.display = "block";
      }
    });
    
    platformItems.toggle.onchange = function () {
      const cards = platformPage.querySelectorAll(".c-card");

      if (platformItems.toggle.classList.contains("--toggle")) {
        platformItems.toggle.classList.remove("--toggle");
        cards.forEach((card) => {
          card.querySelector(".price").style.display = "block";
          card.querySelector(".newprice").style.display = "none";
        });
      } else {
        platformItems.toggle.classList.add("--toggle");
        cards.forEach((card) => {
          card.querySelector(".price").style.display = "none";
          card.querySelector(".newprice").style.display = "block";
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
