const reviewParagraphs = document.querySelectorAll(".review p");
const moreButtons = document.querySelectorAll(".more button");

// 리뷰 더보기 버튼
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

// 햄버거 버튼
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger i");
  const gnb2 = document.getElementById("gnb2");

  hamburgerBtn.addEventListener("click", function () {
    const isOpen = gnb2.classList.contains("active");

    if (isOpen) {
      // 닫기
      gnb2.classList.remove("active");
      hamburgerBtn.classList.remove("xi-close");
      hamburgerBtn.classList.add("xi-ellipsis-v");
    } else {
      // 열기
      gnb2.classList.add("active");
      hamburgerBtn.classList.remove("xi-ellipsis-v");
      hamburgerBtn.classList.add("xi-close");
    }
  });
});
