const list = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
let index = 0;
let correctQuantity = 0;

const containerDom = document.querySelector(".container");
const questionDom = document.querySelector(".question");
const aOptionLabelDom = document.querySelector(".option.a label");
const bOptionLabelDom = document.querySelector(".option.b label");
const cOptionLabelDom = document.querySelector(".option.c label");
const dOptionLabelDom = document.querySelector(".option.d label");
const nextBtn = document.querySelector("button");

const len = list.length;
//渲染
function render() {
  if (index < len) {
    const data = list[index];
    questionDom.innerHTML = data.question;
    aOptionLabelDom.innerHTML = data.a;
    bOptionLabelDom.innerHTML = data.b;
    cOptionLabelDom.innerHTML = data.c;
    dOptionLabelDom.innerHTML = data.d;

    clearAnswer();

    //submit
    if (index == len - 1) {
      nextBtn.innerHTML = "Submit";
      return;
    }
  }
  //回答页面到答案页面
  else if (index == len) {
    enterResultPage();
    return;
  }
  //答案到第一个选项
  else if (index == len + 1) {
    enterOptionPage();
    return;
  }
}
//选择答案
const optionInputs = document.querySelectorAll(".option input");
//上一个选项
let lastOptionDom = optionInputs[0];
//答案
let answer = "";
optionInputs.forEach((optionInput) => {
  optionInput.addEventListener("input", function (e) {
    answer = this.id;
    lastOptionDom = this;
    nextBtn.classList.remove("disable");
  });
});

//下一位
nextBtn.addEventListener("click", next);
function next() {
  //是否被禁止点击
  if (this.classList.contains("disable")) {
    return;
  }
  checkTheAnswer(index);

  index++;
  render();
}

//进入结果页面
function enterResultPage() {
  containerDom.classList.add("result");
  nextBtn.innerHTML = "Reload";
  questionDom.innerHTML = `You answered ${correctQuantity}/4 questions correctly`;
  correctQuantity = 0;
}

//进入选项页面
function enterOptionPage() {
  containerDom.classList.remove("result");
  nextBtn.innerHTML = "Next";

  index = 0;
  render();
}

//验证答案
function checkTheAnswer(index) {
  const data = list[index];
  if (!data) {
    return;
  }
  if (answer === data.correct) {
    correctQuantity++;
  }
}

//清空选项
function clearAnswer() {
  lastOptionDom.checked = false;
  nextBtn.classList.add("disable");
}

render();
