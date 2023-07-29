/** @format */

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const display = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexNum = "#";

  for (let i = 0; i < 6; i++) {
    hexNum += hex[randomHex()];
  }
  document.body.style.backgroundColor = hexNum;

  display.textContent = hexNum;
});

function randomHex() {
  return Math.floor(Math.random() * hex.length);
}
