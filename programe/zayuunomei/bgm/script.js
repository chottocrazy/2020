'use strict'

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

let thisAudio,
    thisFile = "bgm/top.wav",
    isPlaying = false;

// 音源を取得しAudioBuffer形式に変換して返す関数
async function setAudio(audio) {
    const response = await fetch(audio);
    const arrayBuffer = await response.arrayBuffer();
    // Web Audio APIで使える形式に変換
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    return audioBuffer;
}

// AudioBufferをctxに接続し再生する関数
function playAudio(ctx, audioBuffer) {
    // 変換されたバッファーを音源として設定
    thisAudio = ctx.createBufferSource();
    thisAudio.buffer = audioBuffer;

    // 出力につなげる
    var gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);
    gainNode.gain.value = 0.45;

    thisAudio.connect(gainNode);
    thisAudio.start();
    thisAudio.loop = true;
    isPlaying = true;
}

document.querySelector("#play").addEventListener("click", async () => {
    if (isPlaying === false) {
        isPlaying = true;
        const playThis = await setAudio(thisFile)
        playAudio(ctx, playThis)
    } else if (isPlaying === true) {
        thisAudio?.stop();
        isPlaying = false;
    }
});