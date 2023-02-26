const input = document.querySelector("#validation-input");

input.addEventListener("blur", functionValid);

function functionValid() {
  if (Number(this.dataset.length) === this.value.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}
