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

  //스와이프
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });

  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom top",
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
  let hasBeenAnimated = false;

  const animateCharts = () => {
    const chartBars = section.querySelectorAll(".chart-bar");
    chartBars.forEach((bar) => {
      const degree = bar.getAttribute("data-degree");
      const fillColor = bar.getAttribute("data-fill-color");
      bar.style.background = `conic-gradient(#96a376 ${
        100 - degree / 3.6
      }%, ${fillColor} ${100 - degree / 3.6}%)`;
    });

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
          hasBeenAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(section);

  const refreshButton = section.querySelector(".title2 button");
  refreshButton.addEventListener("click", () => {
    hasBeenAnimated = false;
    section.classList.remove("animated");
    section
      .querySelectorAll(".graph .bar")
      .forEach((bar) => (bar.style.width = "0px"));
    section
      .querySelectorAll(".chart-bar")
      .forEach(
        (bar) =>
          (bar.style.background = "conic-gradient(#96a376 0deg, #587d00 0deg)")
      );
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.querySelector(".title2 button");
  const exhibitionContainers = document.querySelectorAll(".sec3_con");

  function showRandomExhibition() {
    exhibitionContainers.forEach((container) => {
      container.style.display = "none";
    });

    const randomIndex = Math.floor(Math.random() * exhibitionContainers.length);

    exhibitionContainers[randomIndex].style.display = "flex";
  }

  showRandomExhibition();

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

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      animateGraphs();
      window.removeEventListener("scroll", checkSectionVisibility);
    }
  }

  window.addEventListener("scroll", checkSectionVisibility);

  checkSectionVisibility();
});
