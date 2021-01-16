const btnContainer = document.querySelector("#btn-container");
const blueBtn = document.querySelector(".btn .blue");
const yellowBtn = document.querySelector(".btn .yellow");
const greenBtn = document.querySelector(".btn .green");
const redBtn = document.querySelector(".btn .red");
const body = document.querySelector("body");

// Click Event: Change Background Color
btnContainer.addEventListener("click", function (event) {
  const color = event.target.dataset.color;
  if (color) {
    body.className = "";
    body.classList.add(color);
  }
});

// Click Event: Change Current Color
// TODO

// Click Event: Append to Past Colors
// TODO
