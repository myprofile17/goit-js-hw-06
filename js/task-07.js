const size = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

size.addEventListener("input", functionSize);

function functionSize(ev) {
  span.style.fontSize = `${ev.target.value}px`;
}
