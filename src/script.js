const btnContainer = document.querySelector("#btn-container");
const blueBtn = document.querySelector(".btn .blue");
const yellowBtn = document.querySelector(".btn .yellow");
const greenBtn = document.querySelector(".btn .green");
const redBtn = document.querySelector(".btn .red");
const body = document.querySelector("body");

btnContainer.addEventListener("click", function (event) {
  const color = event.target.dataset.color;
  console.log(color);
  if (color) {
    body.className = "";
    body.classList.add(color);
  }
});
