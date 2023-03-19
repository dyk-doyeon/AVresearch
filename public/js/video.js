'use strict';
(() => {

  // Video Controls
  const player = document.querySelector("#videoPlay"),
        playBtn = document.querySelector("#play"),
        pauseBtn = document.querySelector("#stop"),
        volumeUpBtn = document.querySelector("#volup"),
        volumeDownBtn = document.querySelector("#voldown"),
        progress = document.getElementById("progress");

  // Video Play
  player.volume = 0.3;

  function playVideo() {
    player.play();
    console.log(player.currentTime);
  }

  function pauseVideo() {
    player.pause();
  }

  function volumeUp() {
    player.volume += 0.1;
  }

  function volumedown() {
    player.volume -= 0.1;
  }

  function volumeState(event) {
    document.querySelector(".volumeLevel").innerHTML = Math.floor(player.volume * 10);
  }
  
	function PlayTime(event) {
		document.querySelector(".currentTime").innerHTML = Math.floor(player.currentTime) 	
	}

  playBtn.addEventListener("click", playVideo);
  pauseBtn.addEventListener("click", pauseVideo);
  volumeUpBtn.addEventListener("click", volumeUp);
  volumeDownBtn.addEventListener("click", volumedown);
  player.addEventListener("volumechange", volumeState, false);
  player.addEventListener("timeupdate", PlayTime, false);
  

  // Progress Bar
  function progressLoop() {
    setInterval(function () {
      progress.value = Math.round((player.currentTime / player.duration) * 100);
    });
  }
  progressLoop();

// Transcript
const transcriptBtn = document.querySelector("#transcriptBtn"),
transcriptBox = document.querySelector(".transcript__text");

function showTranscriptBox() {
  transcriptBox.classList.toggle("open");
  // window.scrollTo(0, 1000);
  window.scrollTo({top: 1000, behavior: 'smooth'});
}

transcriptBtn.addEventListener("click", showTranscriptBox);
})()