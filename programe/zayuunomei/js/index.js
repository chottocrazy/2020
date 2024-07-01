'use strict'

let all = "大 chotto crazy 2020 公式プログラム「座右の銘を交換したい」 | 発案・文・BGM（クリック音）など 宙空一派 | ウェブページ作成 ささじまかずま | 協力 ペフ | ",
    playTXT = "ここをクリックすると、宙空一派が制作した「座右の銘の交換」の BGM が 再生／停止されます。 ",
    speed = 400;

function headline() {
    all = all.substring(2, all.length) + all.substring(0, 2)
    document.querySelector('#headline').value = all;
    setTimeout("headline()", speed)
}

function headlinePlay() {
    playTXT = playTXT.substring(2, playTXT.length) + playTXT.substring(0, 2)
    document.querySelector('#play').value = playTXT;
    setTimeout("headlinePlay()", speed)
}

function dialogOpen() {
    clickAudio('click/top.wav')
    const dialog = document.querySelector("dialog")
    dialog.showModal()
}

function dialogClose() {
    clickAudio('click/top.wav')
    const dialog = document.querySelector("dialog")
    dialog.close()
}

function textTXT(txt, query) {
    fetch(txt)
        .then(response => response.text())
        .then(data => {
            document.querySelector(query).innerText = data;
        })
        .catch(error => {
            console.error('Error', error)
        })
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        headline()
        headlinePlay()
        textTXT('js/card.txt', '#card')
        textTXT('js/thankyou.txt', '#thankyou')
    }
}, false)