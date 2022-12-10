function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", (evt) => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
});
