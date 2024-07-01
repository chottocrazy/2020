'use strict'

function clickAudio(audio) {
    const click = new Audio(audio);
    click.currentTime = 0;
    click.play()
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const inputAll = document.querySelectorAll("form input")
        for (const key of inputAll) {
            key.addEventListener("keydown", () => {
                clickAudio('click/key.wav')
            }, false)
        }
    }
}, false)