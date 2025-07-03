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
  // --- Tab Switching Logic ---
  const tabItems = document.querySelectorAll(".tab__item");
  const tabContents = document.querySelectorAll(".tab__content");

  tabItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor link behavior

      // Remove 'active' from all tab items and contents
      tabItems.forEach((i) => i.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add 'active' to the clicked tab item
      this.classList.add("active");

      // Show the corresponding tab content
      const targetId = this.querySelector("a").getAttribute("href");
      document.querySelector(targetId).classList.add("active");

      // --- Handle city selections based on active tab ---
      if (targetId === "#tab1") {
        // Domestic tab
        // Hide overseas sections when switching to domestic
        hideAllOverseasSections();
        // Trigger click on the default domestic city (e.g., Seoul)
        const defaultDomesticCityButton = document.querySelector(
          "#tab1 .choice .location button:first-child"
        );
        if (defaultDomesticCityButton) {
          defaultDomesticCityButton.click();
        }
      } else if (targetId === "#tab2") {
        // Overseas tab
        // Hide domestic sections when switching to overseas
        hideAllDomesticSections();
        // Trigger click on the default overseas city (e.g., Japan)
        const defaultOverseasCityButton = document.querySelector(
          "#tab2 .choice .location button:first-child"
        );
        if (defaultOverseasCityButton) {
          defaultOverseasCityButton.click();
        }
      }
    });
  });

  // --- Domestic City Selection Logic ---
  const domesticButtons = document.querySelectorAll(
    "#tab1 .choice .location button"
  );
  const domesticCitySections = {
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

  function hideAllDomesticSections() {
    for (const city in domesticCitySections) {
      domesticCitySections[city].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = "none";
        }
      });
    }
  }

  function removeActiveClassFromAllDomesticButtons() {
    domesticButtons.forEach((button) => {
      button.classList.remove("active");
    });
  }

  domesticButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cityName = this.textContent;

      removeActiveClassFromAllDomesticButtons();
      this.classList.add("active");

      hideAllDomesticSections();

      if (domesticCitySections[cityName]) {
        domesticCitySections[cityName].forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            element.style.display = "block";
          }
        });
      }
    });
  });

  // --- Overseas City Selection Logic ---
  const overseasButtons = document.querySelectorAll(
    "#tab2 .choice .location button"
  );
  const overseasCitySections = {
    일본: ["japanRank", "japanList"],
    미국: ["usaRank", "usaList"],
    중국: ["chinaRank", "chinaList"],
    영국: ["ukRank", "ukList"],
    프랑스: ["franceRank", "franceList"],
    네덜란드: ["netherlandsRank", "netherlandsList"],
    스페인: ["spainRank", "spainList"],
    러시아: ["russiaRank", "russiaList"],
    캐나다: ["canadaRank", "canadaList"],
    대만: ["taiwanRank", "taiwanList"],
    이탈리아: ["italyRank", "italyList"],
    호주: ["australiaRank", "australiaList"],
    독일: ["germanyRank", "germanyList"],
    홍콩: ["hongkongRank", "hongkongList"],
    아르헨티나: ["ArgentineRank", "ArgentineList"],
    스위스: ["switzerlandRank", "switzerlandList"],
    그리스: ["greeceRank", "greeceList"],
    태국: ["thailandRank", "thailandList"],
    // Add all other overseas cities with their respective IDs
  };

  function hideAllOverseasSections() {
    for (const city in overseasCitySections) {
      overseasCitySections[city].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.style.display = "none";
        }
      });
    }
  }

  function removeActiveClassFromAllOverseasButtons() {
    overseasButtons.forEach((button) => {
      button.classList.remove("active");
    });
  }

  overseasButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cityName = this.textContent;

      removeActiveClassFromAllOverseasButtons();
      this.classList.add("active");

      hideAllOverseasSections();

      if (overseasCitySections[cityName]) {
        overseasCitySections[cityName].forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            element.style.display = "block";
          }
        });
      }
    });
  });

  // --- Initial Page Load Setup ---
  // Simulate click on the default domestic tab (or whichever you want active initially)
  const defaultTab = document.querySelector(".tab__item.active");
  if (defaultTab) {
    defaultTab.click();
  } else {
    // If no active tab is set in HTML, default to the first one (Domestic)
    document.querySelector(".tab__item:first-child").click();
  }
});
