const len = document.querySelectorAll(".img").length;
let index = 0;
const sliderDom = document.querySelector(".slider");

function render() {
  sliderDom.style.transform = `translate(calc(-${index} * var(--width)))`;
}

let id = null;
function right() {
  clearTimeout(id);
  id = setTimeout(right, 3000);

  index++;
  if (index >= len) {
    index = 0;
  }
  render();
}
function left() {
  clearTimeout(id);
  id = setTimeout(right, 3000);

  index--;
  if (index < 0) {
    index = len - 1;
  }
  render();
}
setTimeout(right, 3000);

const leftBtn = document.querySelector(".btn.left");
leftBtn.addEventListener("click", left);
const rightBtn = document.querySelector(".btn.right");
rightBtn.addEventListener("click", right);
