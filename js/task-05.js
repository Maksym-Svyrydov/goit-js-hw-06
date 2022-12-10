const formEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
console.log(formEl);
formEl.addEventListener("input", () =>
  formEl.value !== ""
    ? (nameEl.textContent = formEl.value)
    : (nameEl.textContent = "Anonymous")
);
