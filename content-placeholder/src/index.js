setTimeout(() => {
  const imgDom = document.querySelector(".card > .img");
  imgDom.innerHTML = `<img src="../../public/image/photo-1507146426996-ef05306b995a.avif" alt="">`;

  const titleDom = document.querySelector(".card  .title");
  titleDom.innerHTML = "Dog";

  const content = document.querySelector(".card .content");
  content.innerHTML =
    "犬（学名：Canis lupus familiaris）[1]，现代俗称为狗，一种常见的犬科哺乳动物，与狼为同一种动物，生物学分类上是狼的一个亚种。";

  const authorImgDom = document.querySelector(".card .author > .img");
  authorImgDom.innerHTML = `<img src="../../public/image/1-1338-753.png" alt="">`;

  const authorName = document.querySelector(".card .author .name");
  authorName.innerHTML = "Airvya";

  const authorDate = document.querySelector(".card .author .date");
  authorDate.innerHTML = "2022-6-10";

  document
    .querySelectorAll(".loading-bg")
    .forEach((item) => item.classList.remove("loading-bg"));
}, 99999);
