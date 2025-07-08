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
