const content = document.querySelector(".content");
content.addEventListener("dragstart", dragstart);
function dragstart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.remove("hold");
    this.classList.add("hide");
  });
}
content.addEventListener("dragend", dragend);
function dragend() {
  this.classList.remove("hide");
}

const containers = document.querySelectorAll(".container");
containers.forEach((container) => {
  container.addEventListener("dragover", dragover);
  container.addEventListener("dragenter", dragenter);
  container.addEventListener("dragleave", dragleave);
  container.addEventListener("drop", drop);
});
function dragover(e) {
  e.preventDefault();
}
function dragenter() {
  this.classList.add("hovered");
}
function dragleave() {
  this.classList.remove("hovered");
}
function drop() {
  this.classList.remove("hovered");
  this.append(content);
}
