const containerDom = document.querySelector(".container");
let count = 0;
const listNotLoaded = [];
for (let i = 0; i < 24; i++) {
  loadMore();
}
function loadMore() {
  const imgDom = document.createElement("img");
  imgDom.url = `https://source.unsplash.com/random/${randomHW()}`;
  containerDom.append(imgDom);
  listNotLoaded.push(imgDom);

  //提示
  count++;
  if (count % 100 === 0) {
    alert("建议不要加载过多");
  }
}
function randomHW() {
  const size = randomSize();
  return `${size}x${size}`;
}
function randomSize() {
  //50px 到 150px
  return `${Math.floor(Math.random() * 100) + 50}`;
}

//lazy loading 简洁 时间复杂度O(m * n)n为照片的数量，m为滑动事件触发次数
// const imgDoms = document.querySelectorAll("img");
// function lazyLoading(params) {
//   imgDoms.forEach((item) => {
//     const rect = item.getBoundingClientRect();
//     if (rect.top < window.innerHeight) {
//       item.src = item.url;
//     }
//   });
// }
// lazyLoading();
// window.addEventListener("scroll", lazyLoading);
// window.addEventListener("resize", lazyLoading);

//lazy loading优化代码 时间复杂度O(m + n)n为照片的数量，m为滑动事件触发次数
function lazyLoading(params) {
  for (let index = 0; index < listNotLoaded.length; index++) {
    const imgDom = listNotLoaded[index];
    const rect = imgDom.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      imgDom.src = imgDom.url;
      //如果链接已加载过了，就可以从未加载列表删除了
      listNotLoaded.splice(index, 1);
      index--;
    } else {
      //本例子中是顺序的，所以最前面的都不在范围后面就不再需要计算了
      break;
    }
  }
  //我们可以在下方未显示的小于某数事继续添加,实现无限加载
  if (listNotLoaded.length < 12) {
    loadMore();
  }
}
lazyLoading();

window.addEventListener("scroll", lazyLoading);
window.addEventListener("resize", lazyLoading);
