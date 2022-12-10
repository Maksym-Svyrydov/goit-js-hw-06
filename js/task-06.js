const formEl = document.querySelector("#validation-input");
const lengthEl = document.querySelector('input[data-length="6"]');
formEl.addEventListener("blur", checkValue);
// console.log(formEl);
// console.log(lengthEl.dataset.length);
function checkValue(evt) {
  const input = evt.currentTarget;
  const inputLength = Number(input.dataset.length);
  // console.log(input);
  // console.log(inputLength);
  if (input.value.length !== inputLength) {
    formEl.classList.add("invalid");
    formEl.classList.remove("valid");
    return;
  } else {
    formEl.classList.add("valid");
    formEl.classList.remove("invalid");
  }
}
console.log(formEl.value.length);
