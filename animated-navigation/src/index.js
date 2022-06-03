const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");
container.style.setProperty("--num", items.length);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
});
