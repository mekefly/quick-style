//添加点击事件
const imgsDom = document.querySelectorAll(".expanding-cards .img");
imgsDom.forEach((imgDom) =>
  imgDom.addEventListener("click", (e) => {
    //删除上一个active
    const activeImgDom = document.querySelector(".expanding-cards .img.active");
    activeImgDom.classList.remove("active");

    //添加当前active
    e.target.classList.add("active");
  })
);
