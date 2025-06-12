document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animations for header and main image text/progress
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "100% 0%",
        end: "100% 5%",
        scrub: 1,
        duration: 0.3,
      },
    })
    .fromTo(
      "header",
      {
        backgroundColor: "transparent",
        borderBottomColor: "transparent",
      },
      {
        backgroundColor: "rgba(255,255,255,1)",
        borderBottomColor: "rgba(0,0,0,0.2)",
      }
    )
    .to(
      "header h1 img",
      {
        filter: "none",
      },
      "-=0.3"
    )
    .to(
      "#gnb a",
      {
        color: "rgb(0,0,0)",
      },
      "-=0.3"
    )
    .to(
      ".icons button > img",
      {
        filter: "none",
      },
      "-=0.3"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "100% 0%",
        end: "100% 5%",
        scrub: 1,
        duration: 0.3,
      },
    })
    .fromTo(
      ".title_text",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "100% 0%",
        end: "100% 5%",
        scrub: 1,
        duration: 0.3,
      },
    })
    .fromTo(
      ".autoplay-progress",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );

  // Swiper initialization
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000, // Changed from 2500 to 5000 milliseconds (5 seconds)
      disableOnInteraction: false,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        // Ensure the displayed time starts from 5s
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });

  // ScrollTrigger for Swiper autoplay control
  ScrollTrigger.create({
    trigger: "body", // Using body as the trigger to detect general scroll
    start: "top top", // When the top of the body hits the top of the viewport
    end: "bottom top", // When the bottom of the body hits the top of the viewport
    onUpdate: (self) => {
      if (self.scroll() > 100) {
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      } else {
        if (!swiper.autoplay.running) {
          swiper.autoplay.start();
        }
      }
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".sec3");
  let hasBeenAnimated = false; // Flag to ensure animation runs only once

  const animateCharts = () => {
    // Animate Donut Charts
    const chartBars = section.querySelectorAll(".chart-bar");
    chartBars.forEach((bar) => {
      const degree = bar.getAttribute("data-degree");
      const fillColor = bar.getAttribute("data-fill-color");
      bar.style.background = `conic-gradient(#96a376 ${
        100 - degree / 3.6
      }%, ${fillColor} ${100 - degree / 3.6}%)`;
    });

    // Animate Bar Charts
    const bars = section.querySelectorAll(".graph .bar");
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = `${width}px`;
    });
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasBeenAnimated) {
          section.classList.add("animated");
          animateCharts();
          hasBeenAnimated = true; // Set the flag to true
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  observer.observe(section);

  // Optional: Reset animation on refresh button click (for demonstration/testing)
  const refreshButton = section.querySelector(".title2 button");
  refreshButton.addEventListener("click", () => {
    hasBeenAnimated = false;
    section.classList.remove("animated");
    // Reset bar widths
    section
      .querySelectorAll(".graph .bar")
      .forEach((bar) => (bar.style.width = "0px"));
    // Reset donut charts
    section
      .querySelectorAll(".chart-bar")
      .forEach(
        (bar) =>
          (bar.style.background = "conic-gradient(#96a376 0deg, #587d00 0deg)")
      );
    observer.observe(section); // Re-observe the section
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.querySelector(".title2 button");
  const exhibitionContainers = document.querySelectorAll(".sec3_con");

  // Function to show a random exhibition container
  function showRandomExhibition() {
    // Hide all exhibition containers first
    exhibitionContainers.forEach((container) => {
      container.style.display = "none";
    });

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * exhibitionContainers.length);

    // Display the randomly selected container
    exhibitionContainers[randomIndex].style.display = "flex"; // Assuming 'flex' is the default display style
  }

  // Show one random exhibition on initial load
  showRandomExhibition();

  // Add event listener to the refresh button
  refreshButton.addEventListener("click", showRandomExhibition);
});
document.addEventListener("DOMContentLoaded", () => {
  const sec3 = document.querySelector(".sec3");
  let isAnimated = false;

  function animateGraphs() {
    if (!isAnimated) {
      sec3.classList.add("animated");
      isAnimated = true;
    }
  }

  function checkSectionVisibility() {
    const rect = sec3.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // 섹션이 화면에 들어왔는지 확인
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      animateGraphs();
      // 애니메이션이 시작되면 더 이상 이벤트를 감지할 필요가 없음
      window.removeEventListener("scroll", checkSectionVisibility);
    }
  }

  // 스크롤 이벤트 리스너 추가
  window.addEventListener("scroll", checkSectionVisibility);

  // 초기 로드 시에도 확인
  checkSectionVisibility();
});
