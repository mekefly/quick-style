const msgsDom = document.querySelector(".msgs");
function sendMsg(msg, type = "info", duration = 10000) {
  const newMsgDom = document.createElement("div");
  newMsgDom.innerText = msg;
  newMsgDom.classList.add("msg");
  newMsgDom.classList.add(type);
  msgsDom.appendChild(newMsgDom);
  setTimeout(() => {
    newMsgDom.remove();
  }, duration);
}
sendMsg("请点击按钮来查看效果");

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  const type = btn.innerHTML.toString();
  btn.classList.add(type);
  btn.addEventListener("click", function (e) {
    sendMsg("This is a message", type);
  });
});
