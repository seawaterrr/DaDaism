document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const reviewLinks = document.querySelectorAll('.review_imgs a');
    const closeBtn = document.querySelector('.modal .close');

    reviewLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // 기본 링크 동작 방지
        modal.classList.add('active'); // 모달 보이기
      });
    });

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active'); // 모달 숨기기
    });
  });