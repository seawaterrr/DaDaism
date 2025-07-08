const userId = document.getElementById("user_id");
const userPw = document.getElementById("user_pw");
const loginBtn = document.querySelector(".login_btn");

const userIdBox = userId.closest(".user_info");
const userPwBox = userPw.closest(".user_info");

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
