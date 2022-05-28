const btns = document.querySelectorAll(".item .row .btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const itemNode = e.target.parentNode.parentNode;
    const isActive = itemNode.classList.contains("active");
    if (isActive) {
      itemNode.classList.remove("active");
    } else {
      itemNode.classList.add("active");
    }
  });
});
