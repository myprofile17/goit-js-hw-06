const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler(str) {
  if (!str.target.value) {
    return (output.textContent = "Anonymous");
  }
  output.textContent = str.target.value;
}
