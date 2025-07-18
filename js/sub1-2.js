document.addEventListener("DOMContentLoaded", function () {
  const priceSections = [
    ".free",
    ".under_1dollar",
    ".up_1dollar",
    ".up_2dollar",
    ".up_3dollar",
    ".up_4dollar",
  ];

  const buttons = document.querySelectorAll(".value button");

  const showOnlySection = (className) => {
    priceSections.forEach((selector) => {
      const section = document.querySelector(selector);
      if (section) {
        section.style.display = selector === className ? "block" : "none";
      }
    });
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showOnlySection(priceSections[index]);

      buttons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
    });
  });

  showOnlySection(".free");
  buttons[0].classList.add("active");
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
