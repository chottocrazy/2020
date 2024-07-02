'use strict'

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const programes = document.querySelectorAll('.programes button')
        const programe = document.querySelector('#programe')
        const iframe = document.querySelector('#programe iframe')
        const close = document.querySelector('#programe button')

        for (const i of programes) {
            i.addEventListener('click', function () {
                programe.showModal();
                iframe.src = directory + 'programe/?id=' + i.value;
            })
        }

        close.addEventListener('click', function () {
            programe.close();
            iframe.src = directory + 'README.md';
        })
    }
}, false)