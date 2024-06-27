'use strict'

let s1 = "大 chotto crazy 2020 プレイベント 大 chotto crazy 2020 プレイベント 大 chotto crazy 2020 プレイベント 大 chotto crazy 2020 プレイベント 大 chotto crazy 2020 プレイベント 大 chotto crazy 2020 プレイベント ",
    s2 = "「こす」とは、YeXuQo・seaketaによるライブパフォーマンスをBGMに、芝生でくつろいだり、植物を植え替えたり、石を磨いたり、光る透明粘土で遊んだり、公園のような場所を作ることを目標とした、一日限りの参加型アトラクションです。 ",
    s3 = "企画：浅野充利／YeXuQo／seaketa／Kenny Pain／ペフ 企画：浅野充利／YeXuQo／seaketa／Kenny Pain／ペフ 企画：浅野充利／YeXuQo／seaketa／Kenny Pain／ペフ 企画：浅野充利／YeXuQo／seaketa／Kenny Pain／ペフ ",
    speed = 400;

function headlineTop() {
    s1 = s1.substring(2, s1.length) + s1.substring(0, 2)
    document.querySelector('#top').value = s1;
    setTimeout("headlineTop()", speed)
}

function headlineLR() {
    s2 = s2.substring(2, s2.length) + s2.substring(0, 2)
    document.querySelector('#left').value = s2;
    document.querySelector('#right').value = s2;
    setTimeout("headlineLR()", speed)
}

function headlineBottom() {
    s3 = s3.substring(2, s3.length) + s3.substring(0, 2)
    document.querySelector('#bottom').value = s3;
    setTimeout("headlineBottom()", speed)
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        headlineTop()
        headlineLR()
        headlineBottom()
    }
}, false)