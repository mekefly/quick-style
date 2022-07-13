const feelBtns = document.querySelectorAll(".feel .btn");
feelBtns.forEach((item) => item.addEventListener("click", feelBtnHandel));
function feelBtnHandel() {
  feelBtns.forEach((item) => item.classList.remove("active"));

  this.classList.add("active");
}

const sendReviewBtn = document.querySelector(".send-review");
const feedbackDom = document.querySelector(".feedback");
const thankDom = document.querySelector(".thank");
sendReviewBtn.addEventListener("click", function () {
  feedbackDom.classList.add("hide");
  thankDom.classList.remove("hide");
});
