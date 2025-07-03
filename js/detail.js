document.addEventListener("DOMContentLoaded", function () {
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
  const moreViewButton = document.querySelector(".moreview");
  const images = document.querySelectorAll(".about img");

  moreViewButton.addEventListener("click", function () {
    for (let i = 1; i < images.length; i++) {
      images[i].style.display = "block";
    }
    moreViewButton.style.display = "none";
  });

  const aboutButton = document.querySelector('button[name="about"]');
  const reviewButton = document.querySelector('button[name="review"]');
  const aboutSection = document.querySelector(".about");
  const reviewSection = document.querySelector(".review");

  aboutSection.style.display = "block";
  reviewSection.style.display = "none";

  aboutButton.focus();

  aboutButton.classList.add("active-tab");
  reviewButton.classList.remove("active-tab");

  aboutButton.addEventListener("click", function () {
    aboutSection.style.display = "block";
    reviewSection.style.display = "none";

    this.focus();
    this.classList.add("active-tab");
    reviewButton.classList.remove("active-tab");
  });

  reviewButton.addEventListener("click", function () {
    aboutSection.style.display = "none";
    reviewSection.style.display = "block";

    this.focus();
    this.classList.add("active-tab");
    aboutButton.classList.remove("active-tab");
  });
});
