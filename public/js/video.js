'use strict';
(() => {
// Video
const transcriptBtn = document.querySelector("#transcriptBtn"),
transcriptBox = document.querySelector(".transcript__text");

function showTranscriptBox() {
  transcriptBox.classList.toggle("open");
  // window.scrollTo(0, 1000);
  window.scrollTo({top: 1000, behavior: 'smooth'});
}

transcriptBtn.addEventListener("click", showTranscriptBox);
})()