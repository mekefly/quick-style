const menuDom = document.querySelector(".menu");
const navigationDom = document.querySelector(".navigation");

//打开按钮
menuDom.addEventListener("click", function (e) {
  navigationDom.classList.remove("hide");
  e.stopPropagation;
});

//关闭按钮
const closeDom = document.querySelector(".close");
closeDom.addEventListener("click", close);

//点击外部关闭
clickExternal([navigationDom, menuDom], close);

function close() {
  navigationDom.classList.add("hide");
}

/**
 * 点击目标外部触发回调
 *
 * @param {*} targets 目标元素的列表
 * @param {*} callback 回调
 */
function clickExternal(targets, callback) {
  targets.forEach((target) =>
    target.addEventListener("click", (e) => e.stopPropagation())
  );

  document.addEventListener("click", callback);
}
