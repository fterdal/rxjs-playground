import { fromEvent, interval } from "rxjs";

function pickRandomElement(array: any[]) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

const validColors: string[] = ["blue", "yellow", "green", "red"];

function generateArrayOfColors(num = 5): string[] {
  const availableColors: string[] = ["blue", "yellow", "green", "red"];
  let colors: string[];
  for (let i = 0; i < num; i++) {
    if (!colors) {
      const newColor = pickRandomElement(availableColors);
      colors = [newColor];
    } else {
      const previousColor = colors[i - 1];
      const filteredColors = availableColors.filter(
        (color) => color !== previousColor
      );
      const newColor = pickRandomElement(filteredColors);
      colors.push(newColor);
    }
  }
  return colors;
}
console.log(generateArrayOfColors());

const btnContainer = document.querySelector("#btn-container");
const currentColor = document.querySelector("#current-color");
const body = document.querySelector("body");
// const blueBtn = document.querySelector(".btn .blue");
// const yellowBtn = document.querySelector(".btn .yellow");
// const greenBtn = document.querySelector(".btn .green");
// const redBtn = document.querySelector(".btn .red");

// Click Event: Change Background Color
const colorClick = fromEvent(btnContainer, "click");

colorClick.subscribe(function (event) {
  const color = (event.target as HTMLElement).dataset.color;
  body.className = "";
  if (color) {
    body.classList.add(color);
  } else {
    body.classList.add("white");
  }
});

// Click Event: Change Current Color
colorClick.subscribe(function (event) {
  const color = (event.target as HTMLElement).dataset.color;
  if (color) {
    currentColor.innerHTML = color[0].toUpperCase() + color.slice(1);
  } else {
    currentColor.innerHTML = "White";
  }
});
