let play = document.querySelector(".play");
play.addEventListener("click", () => {
  const pause = "pause";
  let isPause = play.classList.contains(pause);
  if (isPause) {
    play.classList.remove(pause);
  } else {
    play.classList.add(pause);
  }
});
