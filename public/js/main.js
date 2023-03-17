
(() => {
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



})()