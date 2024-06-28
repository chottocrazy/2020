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

let i = 0,
    imgAll = [
        "https://d2w9rnfcy7mm78.cloudfront.net/29089038/original_b1c149df713d031c02c0710bf59f109c.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28964437/original_9bca83e71169e1dec0c3af78367a04ec.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28964440/original_012842f7c78492c9816a6bffd79fbc43.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/29089039/original_bfe2f00096707f9aebfcf32ffcadd5e4.gif",
        "https://d2w9rnfcy7mm78.cloudfront.net/28964438/original_41fcdd8151b81368d9560811918ba430.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/29089041/original_53263c5a28f19b8b76a5281f650ce7ad.gif",
        "https://d2w9rnfcy7mm78.cloudfront.net/28964439/original_0e2d60666194112a4402ecf9e384940a.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/29089040/original_9a93e5cff1479053819c32cb30fde546.gif",
        "https://d2w9rnfcy7mm78.cloudfront.net/28964441/original_882b98c33a1dc32f67958c5fa685c5a4.jpg"
    ]

function changeIMG() {
    if (i === imgAll.length - 1) {
        i = 0
    } else if (i <= imgAll.length - 1) {
        i++
    }
    bgIMG()
}

function bgIMG() {
    const img = document.querySelector('#img')
    img.style.backgroundImage = `url(${imgAll[i]})`
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        headlineTop()
        headlineLR()
        headlineBottom()
        bgIMG()
    }
}, false)