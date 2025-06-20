const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabItem.forEach((content) => {
      content.classList.remove("active");
    });
    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const domesticButtons = document.querySelectorAll(
    "#tab1 .choice .location button"
  );
  const citySections = {
    서울: ["seoulRank", "seoulList"],
    경기: ["gyeonggiRank", "gyeonggiList"],
    인천: ["incheonRank", "incheonList"],
    부산: ["busanRank", "busanList"],
    대구: ["daeguRank", "daeguList"],
    대전: ["daejeonRank", "daejeonList"],
    경남: ["gyeongnamRank", "gyeongnamList"],
    경북: ["gyeongbukRank", "gyeongbukList"],
    전남: ["jeonnamRank", "jeonnamList"],
    전북: ["jeonbukRank", "jeonbukList"],
    충남: ["chungnamRank", "chungnamList"],
    충북: ["chungbukRank", "chungbukList"],
    광주: ["gwangjuRank", "gwangjuList"],
    울산: ["ulsanRank", "ulsanList"],
    세종: ["sejongRank", "sejongList"],
    강원: ["gangwonRank", "gangwonList"],
    제주: ["jejuRank", "jejuList"],
    전국: ["nationwideRank", "nationwideList"], // Adjust IDs if you only have one section for '전국'
  };

  // Function to hide all domestic city exhibition sections
  function hideAllDomesticSections() {
    for (const city in citySections) {
      citySections[city].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = "none";
        }
      });
    }
  }

  // Function to remove the 'active' class from all buttons
  function removeActiveClassFromAllButtons() {
    domesticButtons.forEach((button) => {
      button.classList.remove("active");
    });
  }

  // Initially hide all sections
  hideAllDomesticSections();

  domesticButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cityName = this.textContent;

      // Remove 'active' class from all buttons
      removeActiveClassFromAllButtons();
      // Add 'active' class to the clicked button
      this.classList.add("active");

      // Hide all sections first
      hideAllDomesticSections();

      // Show only the sections for the clicked city
      if (citySections[cityName]) {
        citySections[cityName].forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            element.style.display = "block"; // Or 'flex', 'grid' depending on your CSS display property
          }
        });
      }
    });
  });

  // Optional: Set a default city to display on page load, e.g., Seoul
  // And apply the active style to it.
  const defaultCityButton = document.querySelector(
    "#tab1 .choice .location button:first-child"
  ); // This selects '서울'
  if (defaultCityButton) {
    defaultCityButton.click(); // Simulate a click on the first city button (e.g., Seoul)
  }
});
