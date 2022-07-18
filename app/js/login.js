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

    const formLogIn = logIn.querySelector("form");
    const formLogInItems = {
      inputs: formLogIn.querySelectorAll(".b-input"),
      logIn: formLogIn.querySelector(".log-in-button"),
      logInLink: formLogIn.querySelector(".log-in-button").href,
      mail: formLogIn.querySelector(".mail"),
      password: formLogIn.querySelector(".password"),
    };

    const url = "user.html";
    const userInfoFile = "../assets/docs/userInfo.json";
    const userInfo = [];

    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", userInfoFile, false);
    rawFile.onreadystatechange = function () {
      let info = JSON.parse(rawFile.responseText);
      info.forEach((item) => {
        userInfo.push(item);
      });
    };
    rawFile.send(null);

    formLogInItems.logIn.onclick = function () {
      userInfo.forEach((info) => {
        const formInputsValues = {
          mail: formLogInItems.mail.querySelector("input").value,
          password: formLogInItems.password.querySelector("input").value,
        };
        if (
          formInputsValues["mail"] == info["mail"] &&
          formInputsValues["password"] == info["password"]
        ) {
          formLogInItems.logInLink = url + "#" + info["id"];
          formLogInItems.logIn.href = formLogInItems.logInLink;
          localStorage.setItem('currentUserInfo', JSON.stringify(info));
        }
      });
    };

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".popup") && !target.closest(".btn-log-in")) {
        logIn.classList.remove("--active");
        document.body.classList.remove("--no-scroll");
      }
    });
  }
}

export { logIn };
