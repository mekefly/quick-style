const steps = document.querySelectorAll(
  ".progress-steps .progress-container .step"
);
const progress = document.querySelector(
  ".progress-steps .progress-container .progress"
);

const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
let stepIndex = 0;
const len = steps.length;

function updateProgress() {
  progress.style.transform = `scale(${stepIndex / (len - 1)}, 1)`;
}
function updateBtnStyle() {
  if (stepIndex >= len - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  if (stepIndex <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}
function next() {
  if (stepIndex + 1 < len) {
    stepIndex++;
    steps[stepIndex].classList.add("active");
    updateProgress();
    updateBtnStyle();
  }
}
function prev() {
  if (stepIndex > 0) {
    steps[stepIndex].classList.remove("active");
    stepIndex--;
    updateProgress();
    updateBtnStyle();
  }
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
