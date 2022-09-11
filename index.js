import musics from "../../../data/musics.js"
import setcurrentmusic from "../currentMusic/index.js";
import { musicCard } from "./musicCard.js";
const musicsContainer = document.querySelector('.musics-container');

function musicCards() {



    musics().forEach((song) => {

        // musicCard(song)
        musicsContainer.innerHTML += musicCard(song);
        setcurrentmusic();

    });



}


export default musicCards; 