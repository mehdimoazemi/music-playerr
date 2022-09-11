import { cleanTime } from "../../utils/cleanTime.js";
import handleplatpauseUi from "./handlePlayPauseUi.js";


const musicsContainer = document.querySelector('.musics-container');
const currentMusicCover = document.querySelector('.current-music-cover');
const currentMusicSinger = document.querySelector('.current-music-singer');
const currentMusicTitle = document.querySelector('.current-music-title');
const playIcon = document.getElementById('play-icon');
const CoverPlayButton = document.querySelector('.cover-play-button');
const currentTime = document.querySelector('.current-time');
const fullTime = document.querySelector('.full-time');
const musicTimeRange = document.getElementById('music-time-range');
const musicProgressBar = document.querySelector('.music-progress-bar');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const handlePlaymusic = (audio) => {



    audio.play().then(() => {

        setInterval(() => {

            
            currentTime.innerHTML = cleanTime(audio.currentTime)
            const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
            musicProgressBar.style.width = musicProgressBarWidth + "%";

        }, 1000);



        musicTimeRange.max = audio.duration;

        fullTime.innerHTML = cleanTime( audio.duration);
        handleplatpauseUi(audio);

    });



}



export default handlePlaymusic; 