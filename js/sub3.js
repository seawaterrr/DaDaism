kakao.maps.load(function () {
  var mapContainer = document.getElementById("map");
  var mapOption = {
    center: new kakao.maps.LatLng(37.579617, 126.977041),
    level: 3,
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var locations = [
    {
      title: "국립현대미술관 서울",
      latlng: new kakao.maps.LatLng(37.5788333, 126.9804281),
      cardId: "card1",
    },
    {
      title: "그라운드시소 서촌",
      latlng: new kakao.maps.LatLng(37.57774939999999, 126.9729204),
      cardId: "card3",
    },
    {
      title: "국립민속박물관",
      latlng: new kakao.maps.LatLng(37.5816456, 126.9789948),
      cardId: "card2",
    },
  ];

  function hideAllCards() {
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });
  }
  hideAllCards();

  locations.forEach(function (loc) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: loc.latlng,
      title: loc.title,
    });

    var infowindow = new kakao.maps.InfoWindow({
      content: `<div style="padding:5px;font-size:13px;">${loc.title}</div>`,
    });

    kakao.maps.event.addListener(marker, "mouseover", function () {
      infowindow.open(map, marker);
    });

    kakao.maps.event.addListener(marker, "mouseout", function () {
      infowindow.close();
    });

    kakao.maps.event.addListener(marker, "click", function () {
      hideAllCards();
      var targetCard = document.getElementById(loc.cardId);
      if (targetCard) {
        targetCard.style.display = "block";
      }
    });
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
