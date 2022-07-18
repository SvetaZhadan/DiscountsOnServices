export default function form() {
  if (document.querySelector("form")) {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll(".b-input");    

    inputs.forEach((inputItem) => {
      const inputItems = {
        icon: inputItem.querySelector("[data-inp-icon]"),
        input: inputItem.querySelector("input"),
      };

      inputItems.input.oninput = function () {
        inputItem.classList.add("--on-input");
        checkCorrectInp(inputItems.input, inputItem);
      };

      inputItems.input.onblur = function () {
        inputItem.classList.remove("--on-input");
        inputItem.classList.remove("--introduced");
        inputItem.classList.remove("--error");
        checkCorrectInp(inputItems.input, inputItem);
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

    //типа валидатор который должен быть уникальным для каждого типа поля
    function checkCorrectInp(input, block) {
      if (input.value.length >= 3) {
        block.classList.add("--introduced");
        block.classList.remove("--error");
      } else {
        block.classList.remove("--introduced");
        block.classList.add("--error");
      }
    }
  }
}
export { form };
