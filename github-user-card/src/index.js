const maxRepos = 20;

/** 这个函数作用是更新渲染卡片 */
const renderCard = (function () {
  //闭包

  const cardDom = document.querySelector(".card");
  const portraitDom = document.querySelector(".card .portrait");
  const nameDom = document.querySelector(".card .name");
  const followersDom = document.querySelector(".card .followers");
  const followingDom = document.querySelector(".card .following");
  const publicReposDom = document.querySelector(".card .public-repos");
  const reposDom = document.querySelector(".card .repos");

  return function (user, repos) {
    //先判断是否是错误请求
    if (user.message) {
      cardDom.style.opacity = 0;
      setTimeout(function () {
        alert("您请求的用户不存在");
      });
      return;
    }

    portraitDom.style.backgroundImage = `url(${user.avatar_url})`;
    nameDom.innerHTML = user.login;
    followersDom.innerHTML = `${
      user.followers ? user.followers : "Not"
    } Followers`;
    followingDom.innerHTML = `${
      user.following ? user.following : "Not"
    } Following`;
    publicReposDom.innerHTML = `${
      user.public_repos ? user.public_repos : "Not"
    } Repos`;

    //随机显示n个repos
    //清空
    reposDom.innerHTML = "";

    for (let i = 0; i < maxRepos; i++) {
      //如果数组归零就退出
      if (repos.length <= 0) {
        bleak;
      }

      const newRepoDom = document.createElement("div");
      newRepoDom.classList.add("repo");
      const randomIndex = Math.floor(Math.random() * repos.length);
      newRepoDom.innerHTML = repos[randomIndex].name;
      repos.splice(randomIndex, 1);

      reposDom.appendChild(newRepoDom);
    }

    cardDom.style.opacity = 1;
  };
})();

const baseUrl = "https://api.github.com";
async function updateByName(name) {
  renderCard(
    ...(await Promise.all([getUserByName(name), getReposByName(name)]))
  );
}

async function getUserByName(name) {
  return await (await fetch(`${baseUrl}/users/${name}`)).json();
}

async function getReposByName(name) {
  return await (await fetch(`${baseUrl}/users/${name}/repos`)).json();
}
const input = document.querySelector(".search");
updateByName(input.value);
input.addEventListener("change", function () {
  updateByName(input.value);
});
