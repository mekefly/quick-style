const containerDom = document.querySelector(".container");
for (let i = 0; i < 900; i++) {
  const squareDom = document.createElement("div");
  squareDom.classList.add("square");
  squareDom.addEventListener("mouseenter", setColor);
  containerDom.append(squareDom);
}

function setColor() {
  const color = randomColor();
  this.style.setProperty("--color", color);
}
function randomColor() {
  return `hsl(${Math.random() * 360},100%,50%)`;
}
