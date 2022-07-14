async function getUserList() {
  const rp = await fetch("https://randomuser.me/api?results=50");
  return (await rp.json()).results;
}
const bodyDom = document.querySelector(".body");
const userDomList = [];
async function render() {
  bodyDom.innerHTML = `
        <li><h1>Loading...</h1></li>
  `;
  const userList = await getUserList();
  bodyDom.innerHTML = "";
  userList.forEach((user) => {
    const userDom = document.createElement("li");
    userDom.innerHTML = `
          <img
            src="${user.picture.medium}"
            alt="${user.name.first}"
          />
          <div class="user-info">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city} ${user.location.state} ${user.location.country}</p>
          </div>
   `;
    bodyDom.append(userDom);
    userDomList.push(userDom);
  });
}
render();

const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();
  if (value === "") {
    userDomList.forEach((item) => {
      item.classList.remove("hide");
    });
  } else {
    userDomList.forEach((item) => {
      if (item.innerText.toLowerCase().includes(value)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
});

