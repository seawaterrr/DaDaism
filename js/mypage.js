const reviewParagraphs = document.querySelectorAll(".review p");
const moreButtons = document.querySelectorAll(".more button");

reviewParagraphs.forEach((paragraph, index) => {
  paragraph.style.overflow = "hidden";
  paragraph.style.display = "-webkit-box";
  paragraph.style.webkitLineClamp = "2";
  paragraph.style.webkitBoxOrient = "vertical";

  const originalText = paragraph.textContent;

  moreButtons[index].addEventListener("click", function () {
    if (paragraph.style.webkitLineClamp === "2") {
      paragraph.style.webkitLineClamp = "unset";
      paragraph.style.maxHeight = "none";
      this.textContent = "간략히";
    } else {
      paragraph.style.webkitLineClamp = "2";
      this.textContent = "더보기";
    }
  });
});
