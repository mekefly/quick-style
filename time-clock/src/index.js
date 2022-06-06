function renderScale() {
  const scale = document.querySelector(".scale");
  //hours
  for (let i = 0; i < 12; i++) {
    const hour = document.createElement("div");

    hour.classList.add("hour");
    hour.style.transform = `rotate(${i * 30}deg)`;

    scale.appendChild(hour);
  }
  //minutes
  for (let i = 0; i < 60; i++) {
    const minute = document.createElement("div");

    minute.classList.add("minute");
    minute.style.transform = `rotate(${i * 6}deg)`;

    scale.appendChild(minute);
  }
}
renderScale();

//让指针动起来

const hourDom = document.querySelector(".pointer .hour");
const minuteDom = document.querySelector(".pointer .minute");
const secondDom = document.querySelector(".pointer .second");

const weekTextDom = document.querySelector(".date-text .week");
const monthTextDom = document.querySelector(".date-text .month");
const timeTextDom = document.querySelector(".date-text .time");
const dayTextDom = document.querySelector(".date-text .day");

const weekText = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const monthText = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function renderPointer() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  timeTextDom.innerHTML = `${hour % 12}:${minute.toString().padStart(2, "0")} ${
    hour > 12 ? "PM" : "AM"
  }`;
  weekTextDom.innerHTML = weekText[date.getDay()];
  monthTextDom.innerHTML = monthText[date.getMonth()];
  dayTextDom.innerHTML = date.getDate();

  hourDom.style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;

  minuteDom.style.transform = `rotate(${
    (minute + hour * 60) * 6 + second * 0.1
  }deg)`;

  secondDom.style.transform = `rotate(${
    (second + minute * 60 + hour * 3600) * 6
  }deg)`;
}

//初始位置
renderPointer();

// 初始校准
setTimeout(() => {
  renderPointer();
  setInterval(renderPointer, 1000);
}, 1000 - new Date().getMilliseconds());

//switch

const body = document.querySelector("body");
const switchBtn = document.querySelector(".switch");
switchBtn.addEventListener("click", switchTheme);
switchTheme();
function switchTheme() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");

    switchBtn.innerHTML = "Dark";
  } else {
    body.classList.add("dark");
    body.classList.remove("light");

    switchBtn.innerHTML = "Light";
  }
}
