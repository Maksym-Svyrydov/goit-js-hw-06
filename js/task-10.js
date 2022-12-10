function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatBtnEl = document.querySelector("button[data-create]");
const destrBtnEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const controlsEl = document.querySelector("#controls");
const blockEl = document.querySelector("#boxes");

console.log(creatBtnEl);
console.log(destrBtnEl);
console.log(inputEl);
console.log(blockEl);

creatBtnEl.addEventListener(
  "click",
  () => {
    addNewEl();
  },
  { once: true }
);
let boxesCollection = [];
let boxSizes = 30;
inputEl.value = 0;
blockEl.style.display = "flex";

function craeateBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let newEl = document.createElement("div");
    newEl.style.width = `${boxSizes}px`;
    newEl.style.height = `${boxSizes}px`;
    boxSizes += 10;
    newEl.style.backgroundColor = getRandomHexColor();
    boxesCollection.push(newEl);
  }
}
function addNewEl() {
  craeateBoxes(Number(inputEl.value));
  blockEl.append(...boxesCollection);
}

destrBtnEl.addEventListener("click", () => {
  window.location.reload();
});
