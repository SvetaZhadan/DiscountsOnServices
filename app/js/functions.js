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
export { makeClone, setCard };
