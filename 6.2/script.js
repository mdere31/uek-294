const form = document.forms.register;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = form.elements.password;
  const passwordConfirm = form.elements.password_confirmation;

  passwordConfirm.addEventListener("input", () => {
    if (password.value != passwordConfirm.value) {
      passwordConfirm.setCustomValidity("The passwords are not same.");
    } else {
      passwordConfirm.setCustomValidity("");
    }
  })

  password.addEventListener("input", () => {
    if (password.value != passwordConfirm.value) {
      password.setCustomValidity("The passwords are not same.");
    } else {
      password.setCustomValidity("");
    }
  })
});