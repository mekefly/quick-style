const nav = document.querySelector(".nav");

let lastPe;
const size = 6;

window.addEventListener("scroll", scroll);
scroll();
function scroll() {
  let pe = window.scrollY / (window.innerHeight / 2);
  if (pe > 1) {
    pe = 1;
  }
  if (lastPe === pe) {
    return;
  }
  lastPe = pe;

  const repe = 1 - pe;
  nav.style.minHeight = `${size - size * pe}rem`;
  nav.style.fontSize = `${0.8 + 0.5 * repe}em`;
  nav.style.setProperty(
    "--bg-color",
    `rgba(${255 * pe},${255 * pe},${255 * pe},${pe * 8})`
  );
  nav.style.setProperty(
    "--text-color",
    `rgb(${255 * repe},${255 * repe},${255 * repe})`
  );
  if (pe > 0.5) {
    nav.classList.add("box-shadow");
  } else {
    nav.classList.remove("box-shadow");
  }
}
