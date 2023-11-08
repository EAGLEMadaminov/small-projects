let elCalInput = document.querySelector(".cal-input");
let elBtns = document.querySelectorAll("button");

let reslut = () => {
  elCalInput.value = eval(String(elCalInput.value));
};

elBtns.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "=") return reslut();
    if (item.classList.contains("clear")) return (elCalInput.value = "");
    if (item.classList.contains("back"))
      return (elCalInput.value = elCalInput.value.slice(
        0,
        elCalInput.value.length - 1
      ));
    let value = elCalInput.value;
    if (
      (value[value.length - 1] === "-" && item.textContent === "-") ||
      (value[value.length - 1] === "+" && item.textContent === "+") ||
      (value[value.length - 1] === "*" && item.textContent === "*") ||
      (value[value.length - 1] === "/" && item.textContent === "/") ||
      (value[value.length - 1] === "%" && item.textContent === "%")
    )
      return;
    if (
      ((value[value.length - 1] === "-" && item.textContent !== "-") ||
        (value[value.length - 1] === "+" && item.textContent !== "+") ||
        (value[value.length - 1] === "*" && item.textContent !== "*") ||
        (value[value.length - 1] === "%" && item.textContent !== "%") ||
        (value[value.length - 1] === "/" && item.textContent !== "/")) &&
      isNaN(item.textContent)
    ) {
      elCalInput.value = elCalInput.value.slice(0, elCalInput.value.length - 1);
      elCalInput.value += item.textContent;
      return;
    }
    elCalInput.value += item.textContent;
  });
});

document.addEventListener("keydown", (e) => {
  let char = e.key;
  if (char === "=" || char === "Enter") return reslut();
  if (char === "Backspace") {
    if (e.altKey) return (elCalInput.value = "");
    return (elCalInput.value = elCalInput.value.slice(
      0,
      elCalInput.value.length - 1
    ));
  }
  if (["+", "-", "*", "/", "."].includes(char))
    return (elCalInput.value += char);
  if (isNaN(+char)) return;
  elCalInput.value += char;
});
