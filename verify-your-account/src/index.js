const codeDoms = document.querySelectorAll(".code");
codeDoms.forEach((codeDom, index) => {
  codeDom.addEventListener("input", function (e) {
    const data = e.data;
    const codePoint = data.codePointAt();
    if (codePoint > 47 && codePoint < 58) {
      codeDom.value = data;
    } else {
      codeDom.value = "";
    }

    next(index);
  });
});

function next(index) {
  const nextDom = codeDoms[index + 1];
  if (nextDom) {
    nextDom.focus();
    return;
  }

  //代表已经输入完成了
  checkUp() && send(getCode());
}
function checkUp() {
  for (let i = 0; i < codeDoms.length; i++) {
    const codeDom = codeDoms[i];
    if (!codeDom.value) {
      codeDom.focus();
      return;
    }
  }

  return true;
}
function send(v) {
  alert("您输入的验证码为" + v);
}
function getCode() {
  let s = "";
  codeDoms.forEach((item) => (s += item.value));
  return s;
}
