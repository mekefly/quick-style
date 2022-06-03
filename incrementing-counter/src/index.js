document.querySelectorAll(".counter").forEach(function (item) {
  const target = parseInt(item.getAttribute("data-target"));
  let count = 0;
  const interval = target / 200;
  console.log(count);
  const increment = setInterval(function () {
    if (count >= target) {
      clearInterval(increment);
    } else {
      count += interval;
      item.innerHTML = count;
    }
  }, 1.8);
});
