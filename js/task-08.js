const formEl = document.querySelector(".login-form");

// console.log(formEl);

formEl.addEventListener("submit", checkFormInput);
function checkFormInput(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Незаполнены поля!");
  }
  if (email.value && password.value) {
    const email = formEl.email.value;
    const password = formEl.password.value;
    const newUser = { email, password };

    console.log(newUser);

    evt.currentTarget.reset();
  }
}
