export default function userPage() {
  if (document.querySelector(".user-page")) {
    const userPage = document.querySelector(".user-page");
    const userPageItems = {
      inputs: userPage.querySelectorAll(".b-input"),
      error: userPage.querySelector(".error-id"),
    };
    const userInfo = localStorage.getItem("currentUserInfo");
    const currentUserInfo = JSON.parse(userInfo);

    // console.log(currentUserInfo);

    userPageItems.inputs.forEach((inputItem) => {
      for (const key in currentUserInfo) {
        const element = inputItem.parentNode.querySelector(`.user-${key}`);

        if (element) {
          if (key === "id") {
            element.querySelector("input").readOnly = true;
            element.onclick = function () {
              userPageItems.error.classList.add("--active");

              setTimeout(() => {
                userPageItems.error.classList.remove("--active");
              }, 5000);
            };
          }
          element.querySelector("input").value = currentUserInfo[key];
        }
      }
    });
  }
}

export { userPage };
