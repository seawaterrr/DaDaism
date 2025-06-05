document.getElementsByClassName("box1").onmouseover = function () {
  let change = document.querySelector("#moreView1");
  man.setAttribute("src", "../img/sub2/seesaw2.png");
};
document.getElementById("box1").onmouseout = () => {
  let back = document.querySelector("#moreView1");
  man.setAttribute("src", "../img/sub2/seesaw.png");
};
