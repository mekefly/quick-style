const duration = 1000;
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.style.top = e.pageY - btn.offsetTop + "px";
    ripple.style.left = e.pageX - btn.offsetLeft + "px";
    btn.style.setProperty("--duration", `${duration}ms`);

    ripple.classList.add("ripple");

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.classList.add("play");
    }, 0);
    setTimeout(() => {
      ripple.remove();
    }, duration);
  });
});
