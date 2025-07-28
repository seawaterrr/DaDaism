document.addEventListener("DOMContentLoaded", function () {
  const posters = document.querySelectorAll(".poster");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close");

  // 포스터 클릭 시 모달 열기
  posters.forEach((poster) => {
    poster.addEventListener("click", function () {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // 스크롤 방지
    });
  });

  // 닫기 버튼 클릭 시 모달 닫기
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 다시 허용
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

document.addEventListener("DOMContentLoaded", function () {
  // 모달창과 닫기 버튼 요소를 선택합니다.
  // 이 요소들이 HTML 어딘가에 존재한다고 가정합니다.
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal .close");

  // 모든 전시 아이템의 링크(<a> 태그)를 선택합니다.
  const exhibitionLinks = document.querySelectorAll(".exhibition > a");

  // 각 링크에 클릭 이벤트 리스너를 추가합니다.
  exhibitionLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // a 태그의 기본 기능(페이지 이동)을 막습니다.
      event.preventDefault();

      // 모달창에 'active' 클래스를 추가하여 화면에 표시합니다.
      if (modal) {
        modal.classList.add("active");
      }
    });
  });

  // 닫기 버튼을 클릭하면 모달창의 'active' 클래스를 제거합니다.
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) {
        modal.classList.remove("active");
      }
    });
  }
});

// (기존 햄버거 버튼 코드는 그대로 유지)
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
