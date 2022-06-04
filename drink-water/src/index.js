const cups = document.querySelectorAll(".cups .cup");
const cupsLength = cups.length;
const l = document.querySelector(".l");
const water = document.querySelector(".water");
cups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    l.innerHTML = `${2 - ((index + 1) * 250) / 1000}L`;
    const pe = (100 / cupsLength) * (index + 1);
    water.innerHTML = `${pe}%`;
    water.style.height = `${pe}%`;

    for (let i = 0; i < cupsLength; i++) {
      const c = cups[i];
      if (i <= index) {
        c.classList.add("full");
      } else {
        c.classList.remove("full");
      }
    }
  });
});
