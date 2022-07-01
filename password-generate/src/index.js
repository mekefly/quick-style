// 包括列表
const includeSet = new Set();
const includeEls = document.querySelectorAll(".include");
includeEls.forEach((includeEl) => {
  updateIncludeSet.call(includeEl);
  includeEl.addEventListener("change", updateIncludeSet);
});
/**
 * update includeset
 *
 * @author meke
 */
function updateIncludeSet() {
  if (this.checked) {
    includeSet.add(this.name);
  } else {
    includeSet.delete(this.name);
  }
}

//处理函数
const handelFuns = {
  low() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  upp() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  num() {
    return String(Math.floor(Math.random() * 10));
  },
  sym() {
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
};

//click generate password
const genBtnEl = document.querySelector(".gen.btn");
const lengthEl = document.querySelector(".length");
const resultEl = document.querySelector(".result");
genBtnEl.addEventListener("click", function () {
  const includeList = [...includeSet];
  let password = "";
  for (let index = 0; index < lengthEl.value; index++) {
    password +=
      handelFuns[includeList[Math.floor(Math.random() * includeList.length)]]();
  }
  resultEl.value = password;
});

//copy
const copyBtnDom = document.querySelector(".copy.btn");
copyBtnDom.addEventListener("click", function () {
  resultEl.select();

  navigator.clipboard.writeText(resultEl.value);
});
