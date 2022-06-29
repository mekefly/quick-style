const cardDom = document.querySelector(".card");
cardDom.addEventListener("click", function (e) {
  const newHeartDom = document.createElement("i");
  newHeartDom.className = `heart fa-solid fa-heart`;
  newHeartDom.style.top = `${e.clientY}px`;
  newHeartDom.style.left = `${e.clientX}px`;
  document.body.appendChild(newHeartDom);

  setTimeout(function () {
    newHeartDom.remove();
  }, 1000);
});
