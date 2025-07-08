kakao.maps.load(function () {
  var mapContainer = document.getElementById("map");
  var mapOption = {
    center: new kakao.maps.LatLng(37.579617, 126.977041),
    level: 3,
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커 정보 배열 + 카드 ID 정보 추가
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

  // 카드 전부 숨기는 함수
  function hideAllCards() {
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });
  }

  // 초기에는 모두 숨기기
  hideAllCards();

  // 마커 생성 반복
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
      hideAllCards(); // 모든 카드 숨기고
      var targetCard = document.getElementById(loc.cardId);
      if (targetCard) {
        targetCard.style.display = "block"; // 해당 카드만 보이기
      }
    });
  });
});
