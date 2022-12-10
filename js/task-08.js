const formEl = document.querySelector(".login-form");
console.log(formEl);
formEl.addEventListener("submit", checkFormInput);
function checkFormInput(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    let newUser = {};
    return alert("Незаполнены поля!");
  } else {
    console.log(`Login: ${email.value}, Password: ${password.value}`);

    evt.currentTarget.reset();
  }
}
