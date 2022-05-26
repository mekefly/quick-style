const audio = document.querySelectorAll("audio");
const map = {};
audio.forEach((item) => {
  map[item.id] = item;
});

Object.keys(map).forEach((id) => {
  const button = document.createElement("button");
  button.innerHTML = id;
  button.classList.add("btn");
  button.addEventListener("click", () => {
    stopSongs(id);
    map[id].play();
  });
  document.body.appendChild(button);
});
let lastSongId = "";
function stopSongs(id) {
  //标准
  // Object.keys(map).forEach((id) => {
  //   const audio = map[id];
  //   audio.pause();
  //   audio.currentTime = 0;
  // });
  //优化到O1（虽然没啥必要）
  const song = map[lastSongId];
  lastSongId = id;
  if (song === undefined) {
    return;
  }
  song.pause();
  song.currentTime = 0;
}
