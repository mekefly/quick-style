const content = document.querySelector(".content");
async function getContent() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  return (await res.json()).joke;
}

async function updateContent() {
  content.innerHTML = await getContent();
}

updateContent();
document.querySelector(".btn").addEventListener("click", updateContent);
