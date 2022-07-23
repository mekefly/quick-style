const containerDom = document.querySelector(".container");
for (let y = 0; y < 4; y++) {
  for (let x = 0; x < 4; x++) {
    const newBlock = document.createElement("div");
    newBlock.classList.add("block");
    newBlock.style.setProperty("--x", x);
    newBlock.style.setProperty("--y", y);
    containerDom.append(newBlock);
  }
}

const mergeDom = document.querySelector(".merge");
mergeDom.addEventListener("click", function () {
  containerDom.classList.toggle("merge");
});
