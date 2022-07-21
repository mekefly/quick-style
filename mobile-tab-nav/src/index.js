const screenDom = document.querySelector(".screen");
const sliderDom = document.querySelector(".slider");
const tabDoms = document.querySelectorAll(".tab");
const len = tabDoms.length;

let activeIndex = 0;
//点击跳转到对应的页面
tabDoms.forEach((tabDom, index) => {
  tabDom.addEventListener("click", function () {
    activeIndex = index;
    refreshRender();
  });
});

//拖动到对应的页面

//按下的状态
let isMousedown = false;

//按下鼠标时记录一个除始状态
let mousedownPageX = 0;
screenDom.addEventListener("mousedown", function (e) {
  isMousedown = true;
  mousedownPageX = e.pageX;
  screenDom.classList.add("mousedown");
});

document.addEventListener("mouseup", function (e) {
  //鼠标弹起时标准更新
  stdUpdate(e);
  isMousedown = false;
  screenDom.classList.remove("mousedown");
});

/**
 * 这个更新会自动对齐
 * @param {*} e
 */
function stdUpdate(e) {
  if (isMousedown) {
    const left = getLeft(e.pageX);
    //当松开手指才会更新这个位置按住的时候只更新了页面的显示，没有更新它，
    //如果您需要页面显示渲染更新的一个index可以使用
    activeIndex = getActiveIndex(left);
    // activeIndex 代表当前要显示哪一个然后*一个屏幕宽度就是一个整数屏幕的位置，就对齐了
    render(-activeIndex * getScreenWidth(), activeIndex);
  }
}
let screenRect = screenDom.getBoundingClientRect();
//windows resize
window.addEventListener("resize", function () {
  screenRect = screenDom.getBoundingClientRect();

  refreshRender();
});

//移动
document.addEventListener("mousemove", update);
function update(e) {
  if (isMousedown) {
    const left = getLeft(e.pageX);
    const index = getActiveIndex(left);
    render(left, index);
  }
}

function refreshRender() {
  const left = -activeIndex * getScreenWidth();
  render(left, activeIndex);
}
function render(left, index) {
  sliderDom.style.transform = `translate(${left}px)`;
  updateTabClass(index);
}

function getLeft(pageX) {
  const left = -activeIndex * getScreenWidth() + pageX - mousedownPageX;
  return left;
}
function getActiveIndex(left) {
  const width = getScreenWidth();
  //left是负数，最终要得到正数index
  const i = Math.floor((-left + width / 2) / width);
  if (i < 0) {
    return 0;
  }
  if (i >= len - 1) {
    return len - 1;
  }
  return i;
}

function getScreenWidth() {
  return getScreenRect().width;
}
function getScreenRect() {
  return screenRect;
}
// 对修改 tab 高亮的行为进行封装，就可以更低的性能损耗下完成效果
// 这类代码也可以搬到一些其他类似的地方
const updateTabClass = (function () {
  let ov = 0;
  return function (nv) {
    if (nv === ov) {
      return;
    }
    tabDoms[ov].classList.remove("active");
    tabDoms[nv].classList.add("active");
    ov = nv;
  };
})();
