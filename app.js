import musicCards from "./components/musicCards/index.js";



const audio = document.getElementById('track');
const musicTimeRange = document.getElementById('music-time-range');
const musicProgressBar = document.querySelector('.music-progress-bar');



musicTimeRange.addEventListener('change', (e) => {

  audio.currentTime = e.target.value
  const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
  musicProgressBar.style.width = musicProgressBarWidth + "%";

});


musicCards()




