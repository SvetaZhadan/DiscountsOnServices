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

function layOut() {
  const layout = document.querySelector(".layout");
  const active = document.querySelectorAll(".--active");
  document.body.classList.add('--no-scroll');

  layout.classList.add("--active");

  layout.onclick = function () {
    document.body.classList.remove('--no-scroll');
    layout.classList.remove("--active");
    active.forEach((item) => {
      item.classList.remove("--active");
    });
  };
}

function readTextFile(file) {
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    let allText = rawFile.responseText;
    console.log(allText);
  };
  rawFile.send(null);
}
export { setCard, layOut, readTextFile };
