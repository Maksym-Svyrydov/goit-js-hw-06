const btnDecremEl = document.querySelector('button[data-action="decrement"]');
const btnIncremEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;
btnDecremEl.addEventListener("click", onDecrementBtnClick);
btnIncremEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue += 1;
  return (valueEl.textContent = counterValue);
}
function onIncrementBtnClick() {
  counterValue -= 1;
  return (valueEl.textContent = counterValue);
}
