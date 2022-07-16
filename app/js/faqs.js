import { faqs } from "./sourse.js";
import { setCard } from './functions.js';

export default function showFaqs() {
  if (document.querySelector(".faqs")) {
    faqs.forEach((item) => {
      const parent = document.querySelector(".faq");
      const catdTemp = parent.querySelector(".c-faqs-temp");
      setCard(catdTemp, item, ".c-faqs");
    });
    
    const accordion = document.querySelectorAll(".c-faqs");
    accordion.forEach((item, i) => {
     
      const quest = item.querySelector(".question").parentNode;
      const answ = item.querySelector(".answer");
      const height = answ.clientHeight;

      answ.style.height = 0 + "px";      
      if (i==0) {
        item.classList.add("--active");
        answ.style.height = height + "px";
      }

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
}

export { showFaqs };
