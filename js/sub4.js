document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const reviewLinks = document.querySelectorAll(".review_imgs a");
  const closeBtn = document.querySelector(".modal .close");

  reviewLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
});
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
