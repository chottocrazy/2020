'use strict'

const params = new URLSearchParams(location.search)

async function indexJSON() {
    const request = new Request("index.json")
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    mates(index)
}

async function questions(json) {
    const request = new Request(json)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    creatQ(index)
}

function mates(obj) {
    const ccm = document.querySelector('#mates')
    for (const mate of obj.ccm) {
        const article = document.createElement('article')
        article.id = mate.id;
        ccm.appendChild(article)

        const ruby = document.createElement('ruby')
        article.appendChild(ruby)
        const a = document.createElement('a')
        a.textContent = mate.name;
        a.href = `?name=${mate.id}`
        ruby.appendChild(a)

        const rt = document.createElement('rt')
        rt.textContent = mate.yomi;
        ruby.appendChild(rt)

        if (params.get("name") === mate.id) {
            console.log(params.get("name"))
            const name = document.querySelector('#profile h2 ruby b')
            const yomi = document.querySelector('#profile h2 ruby rt')
            const program = document.querySelector('#profile #program')
            const value = document.querySelector('#profile #value')
            const text = document.querySelector('aside p')
            const aside = document.querySelector('aside')

            name.textContent = mate.name;
            yomi.textContent = mate.yomi;
            text.textContent = mate.text;

            if (mate.program) {
                for (const ii of mate.program) {
                    const button = document.createElement('button')
                    button.textContent = ii.title;
                    program.appendChild(button)
                }
            }

            if (mate.value) {
                for (const iii of mate.value) {
                    const button = document.createElement('button')
                    button.textContent = iii.title;
                    value.appendChild(button)
                }
            }

            questions(`${mate.id}/10q.json`)

            if (mate.link) {
                for (const iiii of mate.link) {
                    const a = document.createElement('a')
                    a.textContent = iiii.a;
                    a.href = iiii.href;
                    a.setAttribute('target', '_blank')
                    aside.appendChild(a)
                }
            }
        }
    }
}

function shuffle(arrays) {
    const array = arrays.slice()
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]]
    }
    return array
}

function creatQ(allQ) {
    const questions = document.querySelector('#questions')
    for (const q of allQ.questions) {
        const section = document.createElement('section')
        section.className = "question";
        questions.appendChild(section)

        const h3 = document.createElement('h3');
        h3.innerHTML = `
        <strong>${q.question}</strong>
        <small>${q.jp}</small>
        `;
        section.appendChild(h3)

        const h4 = document.createElement('h4');
        h4.innerHTML = `
        <input name="${q.id}" id="${q.id}_left" value="${q.id}_left" type="radio" required/>
        <label for="${q.id}_left">
        <strong>${q.yes}</strong>
        <small>${q.left}</small>
        </label>
        <input name="${q.id}" id="${q.id}_right" value="${q.id}_right" type="radio" required/>
        <label for="${q.id}_right">
        <strong>${q.no}</strong>
        <small>${q.right}</small>
        </label>
        `;
        section.appendChild(h4);
    }
    const section = document.createElement('section')
    section.className = "question";
    section.textContent = "question";
    questions.appendChild(section)
}

function headline() {
    ccm = ccm.substring(2, ccm.length) + ccm.substring(0, 2)
    document.querySelector('#headline').value = ccm;
    setTimeout("headline()", speed)
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        headline()
        indexJSON()

        // ?name=名前
        const header = document.querySelector('header')
        const article = document.querySelector('article')

        if (params.get("name")) {
            header.hidden = true;
            article.hidden = false;
        } else {
            header.hidden = false;
            article.hidden = true;
        }
    }
}, false)