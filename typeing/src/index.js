//速度修改
let spendNum;
const spendDom = document.querySelector(".spend-input");

function updateSpend() {
  spendNum = 600 / spendDom.value;
}
updateSpend();
spendDom.addEventListener("change", updateSpend);

const typeingDoms = Array.from(document.querySelectorAll(".typeing"));
typeingDoms.forEach((dom) => {
  dom.index112 = 0;
  dom.text112 = dom.innerHTML;
  dom.innerHTML = "";

  updateTypeing(dom);
});
//typeing
function updateTypeing(dom) {
  //更新动画
  dom.classList.remove("blink");
  setTimeout(() => dom.classList.add("blink"), 200);

  //更新输入
  const text = dom.text112;
  let index = dom.index112;
  const t = text[index];
  dom.append(t);

  let d = spendNum;
  //更新index
  index++;
  if (index >= text.length) {
    index = 0;
    //更新延迟
    d = spendNum * 20;

    setTimeout(() => {
      dom.innerHTML = "";
    }, d / 2);
  } else {
    if (t === " ") {
      //更新延迟
      d = spendNum * 2;
    }
  }
  dom.index112 = index;

  //下次更新
  setTimeout(updateTypeing, d, dom);
}
