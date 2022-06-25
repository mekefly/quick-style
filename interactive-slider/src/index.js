const leftSliderDom = document.querySelector(".left.slider");
const rightSliderDom = document.querySelector(".right.slider");
const upBtnDom = document.querySelector(".btn.up");
const downBtnDom = document.querySelector(".btn.down");

let index = 0;
let len = document.querySelectorAll(".left.slider .item").length;
updateSlider();
function updateSlider() {
  leftSliderDom.style.transform = `translateY(${100 * index}%)`;
  rightSliderDom.style.transform = `translateY(${-100 * index}%)`;
}

upBtnDom.addEventListener("click", function () {
  index += 1;
  if (index >= len) {
    index = 0;
  }
  updateSlider();
});
downBtnDom.addEventListener("click", function () {
  index -= 1;
  if (index < 0) {
    index = len - 1;
  }
  updateSlider();
});
