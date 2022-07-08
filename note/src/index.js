const containerDom = document.querySelector(".container");
//add note
function addNote() {
  const noteDom = document.createElement("div");
  noteDom.classList.add("note", "note-enter");
  noteDom.innerHTML = `
        <div class="header">
          <div class="edit btn"><i class="fa-solid fa-pen-to-square"></i></div>
          <div class="delete btn"><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <textarea></textarea>
  `;
  containerDom.append(noteDom);
  //delete click
  const deleteBtn = noteDom.querySelector(".delete.btn");
  deleteBtn.addEventListener("click", function () {
    noteDom.style.animation = `note-leave var(--duration)`;
    noteDom.addEventListener("animationend", function () {
      noteDom.remove();
    });
  });
  //delete hover
  deleteBtn.addEventListener("mouseenter", function () {
    //删除进入动画防止抖动，动画冲突
    noteDom.classList.remove("note-enter");
    //抖动
    noteDom.classList.add("shake-rotate");
    noteDom.style.backgroundColor = "red";
  });
  deleteBtn.addEventListener("mouseleave", function () {
    //抖动
    noteDom.classList.remove("shake-rotate");
    noteDom.style.backgroundColor = "";
  });
  //readonly
  const editBtn = noteDom.querySelector(".edit.btn");
  const textareaDom = noteDom.querySelector("textarea");
  editBtn.addEventListener("click", function () {
    textareaDom.readOnly = !textareaDom.readOnly;
  });
}
addNote();
const addBtn = document.querySelector(".add.btn");
addBtn.addEventListener("click", addNote);
