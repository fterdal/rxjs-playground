// import { fromEvent } from "rxjs";

const btnContainer = document.querySelector("#btn-container");
const currentColor = document.querySelector("#current-color");
const blueBtn = document.querySelector(".btn .blue");
const yellowBtn = document.querySelector(".btn .yellow");
const greenBtn = document.querySelector(".btn .green");
const redBtn = document.querySelector(".btn .red");
const body = document.querySelector("body");

// Click Event: Change Background Color
btnContainer.addEventListener("click", function (event) {
  const color = event.target.dataset.color;
  body.className = "";
  if (color) {
    body.classList.add(color);
  } else {
    body.classList.add("white");
  }
});

// Click Event: Change Current Color
btnContainer.addEventListener("click", function (event) {
  const color = event.target.dataset.color;
  if (color) {
    currentColor.innerHTML = color[0].toUpperCase() + color.slice(1);
  } else {
    currentColor.innerHTML = "White";
  }
});

// Click Event: Append to Past Colors
// TODO
