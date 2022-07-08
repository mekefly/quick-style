const cdDoms = document.querySelectorAll(".cd");
let index = 0;
const len = cdDoms.length;
const containerDom = document.querySelector(".container");
const goDom = document.querySelector(".go");

function show() {
  const cdDom = cdDoms[index];
  cdDom.classList.add("show");
  cdDom.addEventListener("transitionend", hide, { once: true });
}
function hide() {
  const cdDom = this;
  index++;
  if (index >= len) {
    goDom.classList.add("show");
    containerDom.classList.add("hide");
    return;
  }

  cdDom.classList.remove("show");
  cdDom.classList.add("hide");
  show();
}
show();

//replay
const replayBtn = document.querySelector(".replay");
replayBtn.addEventListener("click", function () {
  goDom.classList.remove("show");
  containerDom.classList.remove("hide");

  index = 0;

  cdDoms.forEach((cdDom) => {
    //关闭动画
    cdDom.style.transition = "none";

    //重制class
    cdDom.className = "cd";
  });
  setTimeout(() => {
    cdDoms.forEach((cdDom) => {
      cdDom.style.transition = "";
    });

    show();
  }, 0);
});
