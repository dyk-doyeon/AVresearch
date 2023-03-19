'use strict';
(() => {


  // Video Controls
  const player = document.querySelector("#videoPlay"),
        playBtn = document.querySelector("#play"),
        pauseBtn = document.querySelector("#stop"),
        volumeUpBtn = document.querySelector("#volup"),
        volumeDownBtn = document.querySelector("#voldown"),
        fullScreenBtn = document.querySelector("#fullscreen"),
        subscriptBtn = document.querySelector("#subtitles");
        

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

  player.addEventListener("volumechange", volumeState, false);
  function volumeState(event) {
    document.querySelector(".volumeLevel").innerHTML = Math.floor(player.volume * 10);
  }
  
  player.addEventListener("timeupdate", PlayTime, false);
		function PlayTime(event) {
			document.querySelector(".currentTime").innerHTML = Math.floor(player.currentTime) 	
		}


  playBtn.addEventListener("click", playVideo);
  pauseBtn.addEventListener("click", pauseVideo);
  volumeUpBtn.addEventListener("click", volumeUp);
  volumeDownBtn.addEventListener("click", volumedown);


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