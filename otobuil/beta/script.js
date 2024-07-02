'use strict'

let ii = 0,
    imgAll = [
        "https://d2w9rnfcy7mm78.cloudfront.net/28963330/original_a600e7533ef87bc3d2abb53fd94c1624.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963334/original_84f21aed2849b2ae71bad43da15cafd9.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963327/original_c3f25b91c9e5b8b32b6aa1a2f0b1b8da.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963319/original_88284b7a7d331401ef5f45cf589212e7.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963340/original_43843cf13e30d57888a68dc96223debf.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963341/original_93ed28b180a68fe916499722ed1839ee.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963324/original_658fe1a3031c328088ed7bf7c35706cb.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963326/original_491be80b5eb05d6a2ed806c8038d788a.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963323/original_1845a9e231da8565f7a26c17e0325bd3.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963338/original_5395e760c3de2e9074c8aeff08b51a7f.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963321/original_ce776d95757a59ba03c640aa398d69ff.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963337/original_214aec7102d81d687a24ff470a91471b.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963332/original_4080d5dc38c47a8978088fe1d672ab1a.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963335/original_114e2093e722add07546daa4f0f64ebe.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963331/original_02015e7be7289dae7d52c4915c2b728c.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963322/original_680bfe2cc1d53feba4e27646a3d67519.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963336/original_93ec03121f867b8505319781eb668fff.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963333/original_8393c0aa26408cf084c7c641f56d5197.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963339/original_36cbd38f3850c2dd19c0b930a5b79507.jpg",
        "https://d2w9rnfcy7mm78.cloudfront.net/28963325/original_8a61ec8b691b79ee3f10ad6b1ef2516e.jpg"
    ]

function changeIMG() {
    if (ii === imgAll.length - 1) {
        ii = 0;
    } else if (ii <= imgAll.length - 1) {
        ii++;
    }
    bgIMG()
    console.log(ii)
}

function bgIMG() {
    const img = document.querySelector('#img')
    img.style.backgroundImage = `url(${imgAll[ii]})`
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        bgIMG()
    }
}, false)