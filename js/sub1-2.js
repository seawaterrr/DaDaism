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
      // 섹션 전환
      showOnlySection(priceSections[index]);

      // 버튼 스타일 초기화
      buttons.forEach((btn) => btn.classList.remove("active"));

      // 현재 클릭한 버튼에 스타일 적용
      button.classList.add("active");
    });
  });

  // 초기 상태 설정
  showOnlySection(".free");
  buttons[0].classList.add("active"); // 첫 번째 버튼에 active 클래스 적용
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
