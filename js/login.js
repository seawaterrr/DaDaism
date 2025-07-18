const userId = document.getElementById("user_id");
const userPw = document.getElementById("user_pw");
const loginBtn = document.querySelector(".login_btn");

const userIdBox = userId.closest(".user_info");
const userPwBox = userPw.closest(".user_info");

// 로그인 버튼 활성화
function updateButtonState() {
  const filled = userId.value.trim() && userPw.value.trim();
  loginBtn.style.backgroundColor = filled ? "#587D00" : "#999";
  loginBtn.disabled = !filled;
  loginBtn.style.cursor = filled ? "pointer" : "not-allowed";
}

function toggleFocusStyle(input, box) {
  input.addEventListener("focus", () => box.classList.add("focused"));
  input.addEventListener("blur", () => box.classList.remove("focused"));
}

toggleFocusStyle(userId, userIdBox);
toggleFocusStyle(userPw, userPwBox);

userId.addEventListener("input", updateButtonState);
userPw.addEventListener("input", updateButtonState);

updateButtonState();

// 로그인 버튼 클릭 시 페이지 이동
loginBtn.addEventListener("click", function () {
  if (!loginBtn.disabled) {
    window.location.href = "./mypage.html";
  }
});

// Enter 키로 로그인
[userId, userPw].forEach((input) => {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !loginBtn.disabled) {
      loginBtn.click();
    }
  });
});

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
