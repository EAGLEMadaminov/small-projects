let elBox = document.querySelector(".box");
let elElements = document.querySelectorAll("span");
let elUserSelect = document.querySelector(".user-select");
let elRandomSelect = document.querySelector(".random-select");
let elShowResult = document.querySelector(".show-result");
let game = () => {
  elUserSelect.textContent = "";
  elUserSelect.style.backgroundColor = "";
  elRandomSelect.style.backgroundColor = "";
  elRandomSelect.textContent = "";
  let complete = false;
  elElements.forEach((item) => {
    item.addEventListener("click", () => {
      elUserSelect.innerHTML = item.textContent;
      elUserSelect.style.backgroundColor = "grey";
      setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        if (randomNum === 1) {
          elRandomSelect.textContent = "🤚";
        } else if (randomNum === 2) {
          elRandomSelect.textContent = "✌";
        } else {
          elRandomSelect.textContent = "👊";
        }
        elRandomSelect.style.backgroundColor = "grey";
        setTimeout(() => {
          if (item.textContent === elRandomSelect.textContent) {
            alert("Durand");
            complete = true;
          } else if (
            item.textContent === "🤚" &&
            elRandomSelect.textContent === "✌"
          ) {
            alert("Siz yutqazdingiz");
            complete = true;
          } else if (
            item.textContent === "🤚" &&
            elRandomSelect.textContent === "👊"
          ) {
            alert("Siz yutdingiz");
            complete = true;
          } else if (
            item.textContent === "✌" &&
            elRandomSelect.textContent === "🤚"
          ) {
            alert("Siz yutdingiz");
            complete = true;
          } else if (
            item.textContent === "✌" &&
            elRandomSelect.textContent === "👊"
          ) {
            alert("Siz yutqazdingiz");
            complete = true;
          } else if (
            item.textContent === "👊" &&
            elRandomSelect.textContent === "✌"
          ) {
            alert("Siz yutqazdingiz");
            complete = true;
          } else if (
            item.textContent === "👊" &&
            elRandomSelect.textContent === "🤚"
          ) {
            alert("Siz yutdingiz");
            complete = true;
          }
          let isAgain = confirm("Yana o'ynaysizmi");
          if (complete && isAgain) {
            game();
          } else if (!isAgain) return;
        }, 100);
      }, 1000);
    });
  });
};
game();
