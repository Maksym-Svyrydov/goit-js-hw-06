const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", checkFormInput);
function checkFormInput(evt) {
  let newUser = {
    email,
    password,
  };
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Незаполнены поля!");
  } else {
    newUser.email = email.value;
    newUser.password = password.value;

    console.log(newUser);

    evt.currentTarget.reset();
  }
}
