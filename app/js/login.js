// import { layOut } from "./functions";

export default function logIn() {
  if (document.querySelector("[data-log-in-popup]")) {
    const logIn = document.querySelector("[data-log-in-popup]");
    const logInItems = {
      openPopup: document.querySelector(".btn-log-in"),
      popup: logIn.querySelector(".popup"),
    };

    logInItems.openPopup.onclick = function () {
      logIn.classList.add("--active");
      document.body.classList.add("--no-scroll");
    };

    // window.addEventListener("click", (e) => {
    //   const target = e.target;
    //   if (!target.closest(".popup")) {
    //     logIn.classList.remove("--active");
    //     document.body.classList.remove("--no-scroll");
    //   }
    // });
  }
}

export { logIn };
