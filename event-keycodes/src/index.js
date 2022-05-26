const boxs = document.querySelectorAll(".box div");
let handle = function (e) {
  document.querySelector(".tip").classList.add("noshow");
  document.querySelector(".content").classList.add("show");

  handle = function (e) {
    boxs[0].innerHTML = e.key;
    boxs[1].innerHTML = e.keyCode;
    boxs[2].innerHTML = e.code;
  };
  handle(e);
};
document.addEventListener("keyup", handle);
