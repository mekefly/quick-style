const rangerDoms = document.querySelectorAll(".ranger");
rangerDoms.forEach((rangerDom) => {
  const max = parseInt(rangerDom.getAttribute("max") || 100);
  const min = parseInt(rangerDom.getAttribute("min") || 0);

  const lineDom = rangerDom.querySelector(".line");
  const lineFillDom = rangerDom.querySelector(".line-fill");
  const ballDom = rangerDom.querySelector(".ball");
  const labelDom = rangerDom.querySelector(".label");

  //鼠标按下
  let isMousedown = false;
  rangerDom.addEventListener("mousedown", function () {
    isMousedown = true;
    rangerDom.classList.add("mousedown");
  });
  document.addEventListener("mouseup", function () {
    isMousedown = false;
    rangerDom.classList.remove("mousedown");

    //松开鼠标时吸附
    refresh();
  });

  //这个是在调整窗口大小时自动更新状态
  window.addEventListener("resize", refresh());

  function refresh() {
    const value = rangerDom.value;
    render(value * getUnitSize(), value);
  }

  //update
  document.addEventListener("mousemove", update);
  document.addEventListener("mousedown", update);
  function update(e) {
    if (isMousedown) {
      const left = getLeft(e.pageX);
      const value = getValue(left);

      render(left, value);
    }
  }
  function render(left, value) {
    ballDom.style.left = `${left}px`;
    lineFillDom.style.width = `${left}px`;

    rangerDom.value = value;
    labelDom.innerHTML = value;
  }
  function getLeft(pageX) {
    const { left, width } = lineDom.getBoundingClientRect();
    const l = pageX - left;
    if (l < 0) {
      return 0;
    }
    if (l > width) {
      return width;
    }
    return l;
  }
  function getValue(left) {
    const unitSize = getUnitSize();
    return Math.floor((left + unitSize / 2) / unitSize);
  }
  function getUnitSize() {
    const { width } = lineDom.getBoundingClientRect();
    return width / (max - min);
  }
});
