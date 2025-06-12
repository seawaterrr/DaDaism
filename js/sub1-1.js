const $nav = document.querySelector("#chips");
const $section = document.querySelector(".choice");

$nav.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab_button")) {
    return;
  }
  const focusedTable = e.target.dataset.tabSection;

  $section.forEach(($section) => {
    if ($section.id === focusedTable) {
      $section.removeAttribute("hidden");
    } else {
      $section.setAttribute("hidden", true);
    }
  });
});
