// 하트 버튼
document.addEventListener("DOMContentLoaded", function () {
  const heartButton = document.querySelector('button[name="heart"]');

  heartButton.addEventListener("click", function () {
    const heartIcon = this.querySelector("i");
    heartIcon.classList.toggle("xi-heart");
    heartIcon.classList.toggle("xi-heart-o");
  });

  // 리뷰 더보기 버튼
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

  // 이미지 상세보기 버튼
  const moreViewButton = document.querySelector(".moreview");
  const images = document.querySelectorAll(".about img");

  moreViewButton.addEventListener("click", function () {
    for (let i = 1; i < images.length; i++) {
      images[i].style.display = "block";
    }
    moreViewButton.style.display = "none";
  });

  // about, review 버튼
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

// 햄버거 버튼
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger i");
  const gnb2 = document.getElementById("gnb2");

  hamburgerBtn.addEventListener("click", function () {
    const isOpen = gnb2.classList.contains("active");

    if (isOpen) {
      gnb2.classList.remove("active");
      hamburgerBtn.classList.remove("xi-close");
      hamburgerBtn.classList.add("xi-ellipsis-v");
    } else {
      gnb2.classList.add("active");
      hamburgerBtn.classList.remove("xi-ellipsis-v");
      hamburgerBtn.classList.add("xi-close");
    }
  });
});
