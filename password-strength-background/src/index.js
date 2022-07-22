const backgroundDom = document.querySelector(".background");
const passwordInput = document.querySelector(".password");
const emailInput = document.querySelector(".email");

passwordInput.addEventListener("input", function () {
  backgroundDom.style.filter = `blur(${20 - passwordInput.value.length * 2}px)`;
});

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
  if (check()) {
    alert("登录成功");
  }
});
function check() {
  if (emailInput.value === "") {
    alert("请输入邮箱");
    return;
  }
  if (passwordInput.value.length < 10) {
    alert("你太短了");
    alert("我说的是密码");
    return;
  }
  return true;
}
