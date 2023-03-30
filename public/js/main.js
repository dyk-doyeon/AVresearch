'use strict';
(() => {
  // Main
  const contrastAll = document.querySelector(".contrastColour"),
        changeNav = document.querySelector("#navbar"),
        changeImgOne = document.querySelector(".mainImg"),
        changeImgtwo = document.querySelector(".contrastImg"),
        changeFooter = document.querySelector("#footer");
        
  let count = 1;
  
  // Contrast Function
  function contrastColour() {

    count = count + 1;

    if (count%2 === 0) {
      changeNav.style.color = "white";
      changeNav.style.backgroundColor = "black";
      changeImgOne.style.display = "none";
      changeImgtwo.style.display = "block";
      changeFooter.style.color = "white";
      changeFooter.style.backgroundColor = "black";

    } else {
      changeNav.style.color = "#ffb62e";
      changeNav.style.backgroundColor = "#1C304A";
      changeImgOne.style.display = "block";
      changeImgtwo.style.display = "none";
      changeFooter.style.color = "#ffb62e";
      changeFooter.style.backgroundColor = "#1C304A";
    }
  };
  contrastAll.addEventListener("click", contrastColour);


  // Zoom In & Out
  const zoomInBtn = document.querySelector(".zoomInBtn"),
        zoomOutBtn = document.querySelector(".zoomOutBtn"),
        text1 = document.querySelector(".txt1"),
        text2 = document.querySelector(".txt2"),
        text3 = document.querySelector(".txt3");
  let clickCount = 0;

  
  function ZoomIn() {
    clickCount = clickCount + 1;

    if(clickCount < 2) {
      text1.style.fontSize = "42.5px";
      text2.style.fontSize = "32.5px";
      text3.style.fontSize = "27.5px";
    } else if(clickCount < 3) {
      text1.style.fontSize = "45px";
      text2.style.fontSize = "35px";
      text3.style.fontSize = "30px";
    } else if (clickCount < 4) {
      text1.style.fontSize = "47.5px";
      text2.style.fontSize = "37.5px";
      text3.style.fontSize = "32.5px";
    } else if (clickCount < 4) {
      text1.style.fontSize = "50px";
      text2.style.fontSize = "40px";
      text3.style.fontSize = "35px";
    } else {
      text1.style.fontSize = "50px";
      text2.style.fontSize = "40px";
      text3.style.fontSize = "35px";
    }
  }

  function ZoomOut() {
    clickCount = clickCount + 1;

    if(clickCount <= 6) {
      text1.style.fontSize = "50px";
      text2.style.fontSize = "40px";
      text3.style.fontSize = "35px";
    } else if(clickCount <= 7) {
      text1.style.fontSize = "47.5px";
      text2.style.fontSize = "37.5px";
      text3.style.fontSize = "32.5px";
    } else if (clickCount <= 8) {
      text1.style.fontSize = "45px";
      text2.style.fontSize = "35px";
      text3.style.fontSize = "30px";
    } else if (clickCount <= 9) {
      text1.style.fontSize = "42.5px";
      text2.style.fontSize = "32.5px";
      text3.style.fontSize = "27.5px";
    } else {
      text1.style.fontSize = "40px";
      text2.style.fontSize = "30px";
      text3.style.fontSize = "25px";
    }
  }
  
  
  zoomInBtn.addEventListener("click", ZoomIn);
  zoomOutBtn.addEventListener("click", ZoomOut);

})()