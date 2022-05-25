const pageDom = document.querySelector(".rotating-navigation-animation");

document.querySelector(".rotate.btn").addEventListener("click", () => {
  const isRotated = pageDom.classList.contains("rotated");
  if (isRotated) {
    pageDom.classList.remove("rotated");
  } else {
    pageDom.classList.add("rotated");
  }
});
