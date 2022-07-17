export default function form() {
  if (document.querySelector("form")) {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll(".b-input");
    const button = form.querySelector(".b-button");

    const userInfo = {
      name: "test",
      password: "123",
    };

    inputs.forEach((inputItem) => {
      const inputItems = {
        icon: inputItem.querySelector("[data-inp-icon]"),
        input: inputItem.querySelector("input"),
      };

      inputItems.input.oninput = function () {
        inputItem.classList.add("--on-input");

        //типа валидатор который будет уникальным для каждого типа поля

        if (inputItems.input.value.length >= 3) {
          inputItem.classList.add("--introduced");
        } else {
          inputItem.classList.add("--error");
        }
      };

      inputItems.input.onblur = function () {
        inputItem.classList.remove("--on-input");
        inputItem.classList.remove("--introduced");
        inputItem.classList.remove("--error");
        if (inputItems.input.value.length >= 10) {
          inputItem.classList.add("--correct");
        } else {
          inputItem.classList.add("--error");
        }
      };

      if (inputItem.classList.contains("password")) {
        inputItems.icon.onclick = function () {
          if (inputItems.icon.classList.contains("--show-pswd")) {
            inputItems.icon.classList.remove("--show-pswd");
            inputItems.input.setAttribute("type", "password");
          } else {
            inputItems.icon.classList.add("--show-pswd");
            inputItems.input.setAttribute("type", "text");
          }
        };
      }
    });
    const formInputs = {
      name: form.querySelector(".name"),
      password: form.querySelector(".password"),
    };

    button.onclick = function () {
      event.preventDefault();

      const formInputsValues = {
        name: formInputs.name.querySelector("input").value,
        password: formInputs.password.querySelector("input").value,
      };


      for (const key in formInputsValues) {
        userInfo[key] == formInputsValues[key]?console.log(true):'';
      }
    };
  }
}
export { form };
