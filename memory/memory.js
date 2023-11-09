let images = [
  "./images/city.jpg",
  "./images/cup.jpg",
  "./images/download.jpg",
  "./images/grass.jpg",
  " ./images/nature.jpg",
  "./images/sky.jpg",
  "./images/city.jpg",
  "./images/cup.jpg",
  "./images/download.jpg",
  "./images/grass.jpg",
  " ./images/nature.jpg",
  "./images/sky.jpg",
];
const chanses = 7;
const foundCount = 0;
let foundElement = document.querySelector(".found");
let elTime = document.querySelector(".time");

let game = () => {
  let elImagesDiv = document.querySelector(".images");
  let elChanses = document.querySelector(".chanses");
  foundElement = 0;

  let usedIndex = [];
  let selectedImages = [];
  let foundCount = 0;
  let isGameOver = false;
  elImagesDiv.innerHTML = "";
  elChanses.innerText = chanses;
  let time = new Date(Date.now() + 1000 * 60 * 15 + 100);
  let interValid;
  let displayTime = () => {
    let now = Date.now();
    let diff = time - now;
    if (diff < 1000) {
      isGameOver = true;
      alert("Sizda vaqt qolmadi");
      if (confirm("Yanami")) {
        game();
      }
      clearInterval(interValid);
    }
    let min = Math.floor(diff / 1000 / 60);
    let sec = Math.floor((diff / 1000) % 60);

    elTime.innerText =
      min.toString(10).padStart(2, "0") +
      " : " +
      sec.toString(10).padStart(2, "0");
  };
  displayTime();
  interValid = setInterval(displayTime, 1000);

  for (let i = 0; i < images.length; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (usedIndex.includes(randomIndex));
    usedIndex.push(randomIndex);
    console.log(randomIndex);

    let elImageDiv = document.createElement("div");
    let elBackDiv = document.createElement("div");
    let elImage = document.createElement("img");
    elImageDiv.classList.add("image");
    elBackDiv.classList.add("back");

    elImage.setAttribute("src", images[randomIndex]);
    elImageDiv.append(elBackDiv, elImage);
    elImagesDiv.append(elImageDiv);

    elImageDiv.addEventListener("click", () => {
      if (
        elImageDiv.classList.contains("selected") ||
        selectedImages.length === 2 ||
        foundCount === images.length / 2 ||
        isGameOver
      )
        return;
      elImageDiv.classList.add("selected");
      selectedImages.push(elImageDiv);

      if (selectedImages.length === 2) {
        let url1 = selectedImages[0].children[1].getAttribute("src");
        let url2 = selectedImages[1].children[1].getAttribute("src");
        if (url1 === url2) {
          foundElement.innerText++;
          if (++foundCount === 6) {
            setTimeout(() => {
              alert("Yutsingiz! 🏆");
              if (confirm("Yana o'ynaysizmi!")) {
                game();
              }
            }, 500);
            return;
          }
          selectedImages = [];
          return;
        }
        setTimeout(() => {
          selectedImages.forEach((item) => {
            item.classList.remove("selected");
          });
          selectedImages = [];
          if (--elChanses.innerText === 0) {
            alert("Sizda shans qolmadi. ");
            if (confirm("Yana o'ynaysizmi!")) {
              game();
            }
            isGameOver = true;
          }
        }, 1000);
      }
    });
  }
};
game();
