'use strict'

var player;

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function full() {
    document.body.classList.toggle('full')
    const button = document.querySelector('footer button')
    if (button.innerHTML === "Fullscreen View") {
        button.innerHTML = playlistTitle;
    } else {
        button.innerHTML = "Fullscreen View";
    }
}