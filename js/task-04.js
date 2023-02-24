let counterValue = 0;
const countValue = document.querySelector("#value");
const buttonIncre = document.querySelector("[data-action = 'increment']");
const buttonDecre = document.querySelector("[data-action = 'decrement']");
buttonIncre.addEventListener("click", functionIncrement);
buttonDecre.addEventListener("click", functionDecrement);

function functionIncrement() {
  counterValue += 1;
  countValue.textContent = counterValue.toString();
}

function functionDecrement() {
  counterValue -= 1;
  countValue.textContent = counterValue.toString();
}
