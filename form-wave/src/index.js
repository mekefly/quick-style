const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  const t = title.innerHTML;
  if (typeof t === "string") {
    title.innerHTML = t
      .split("")
      .map(
        (char, index) =>
          `<span style="transition-delay: ${120 * index}ms;">${char}</span>`
      )
      .join("");
  }
});
