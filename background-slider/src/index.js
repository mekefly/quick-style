const backgrounds = document.querySelectorAll(".background");
const imgs = document.querySelectorAll(".img");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const imgsLength = imgs.length;
let index = 0;

left.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = imgsLength - 1;
  }
  update();
});
right.addEventListener("click", () => {
  index++;
  if (index > imgsLength - 1) {
    index = 0;
  }
  update();
});

function update() {
  imgs.forEach((img) => img.classList.remove("active"));

  const img = imgs[index];
  img.classList.add("active");

  backgrounds.forEach(
    (background) =>
      (background.style.backgroundImage = img.style.backgroundImage)
  );
}
update();
