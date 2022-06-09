const canvasDom = document.querySelector("canvas");
const ctx = canvasDom.getContext("2d");

//设置尺寸

window.addEventListener("resize", resize);
function resize() {
  //解决偏移问题
  const border = parseInt(window.getComputedStyle(canvasDom).borderWidth);
  const rect = canvasDom.getBoundingClientRect();
  canvasDom.height = rect.height - border * 2;
  canvasDom.width = rect.width - border * 2;
}
resize();

//设置画笔尺寸
let size = 5;
const sizeDom = document.querySelector(".size");
sizeDom.innerHTML = size;
const subDom = document.querySelector(".sub");
subDom.addEventListener("click", () => {
  size--;
  sizeDom.innerHTML = size;
});
const addDom = document.querySelector(".add");
addDom.addEventListener("click", () => {
  size++;
  sizeDom.innerHTML = size;
});

//设置画笔颜色
const colorDom = document.querySelector(".color");
let color = colorDom.value;
colorDom.addEventListener("change", () => {
  console.log(colorDom.value);
  color = colorDom.value;
});

//清空画布
const clearDom = document.querySelector(".clear");
clearDom.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
});

//上一次鼠标位置
let lastX = undefined;
let lastY = undefined;

//记录鼠标按下状态
let isDown = false;
canvasDom.addEventListener("mousedown", () => {
  isDown = true;
});
canvasDom.addEventListener("mouseup", () => {
  isDown = false;
  //清空上一次的移动位置，这样就不会有线条连接
  lastX = undefined;
  lastY = undefined;
});

//记录移动信息，已经移动的监听
canvasDom.addEventListener("mousemove", (e) => {
  if (isDown) {
    draw(e);
  }
});

//画的动作
function draw(e) {
  //画线
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;

  //为了更好看点,所以加了点园，这样就有园角效果了
  ctx.arc(lastX, lastY, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
