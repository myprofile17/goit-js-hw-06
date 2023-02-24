const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", functionLoginForm);

function functionLoginForm(ev) {
  ev.preventDefault();
  const {
    elements: { email, password },
  } = ev.target;
  if (email.value === "" || password.value === "") {
    return alert("Please fill all elements");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  ev.target.reset();
}
