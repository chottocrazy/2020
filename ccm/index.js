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

async function value(json) {
    const request = new Request(json)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    valuing(index)
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
        a.href = `?name=${mate.id}`;
        ruby.appendChild(a)

        const rt = document.createElement('rt')
        rt.textContent = mate.yomi;
        ruby.appendChild(rt)

        // ?name=名前
        if (params.get("name") === mate.id) {
            const name = document.querySelector('#profile h2 ruby b')
            const yomi = document.querySelector('#profile h2 ruby rt')
            const programe = document.querySelector('#profile #programe')
            const valuing = document.querySelector('#profile #valuing')

            name.textContent = mate.name;
            yomi.textContent = mate.yomi;

            if (mate.programe) {
                for (const ii of mate.programe) {
                    const a = document.createElement('a')
                    a.textContent = ii.title;
                    a.href = `../programe/?id=${ii.href}`;
                    programe.appendChild(a)
                }
            }

            if (mate.value) {
                for (const iii of mate.value) {
                    const a = document.createElement('a')
                    a.textContent = iii.title;
                    a.href = `?value=${mate.id}`;
                    valuing.appendChild(a)
                }
            }

            questions(`${mate.id}/10q.json`)
        }

        // ?value=名前
        if (params.get("value") === mate.id) {
            value(`${mate.id}/value.json`)
        }
    }
}

function creatQ(allQ) {
    const questions = document.querySelector('#questions')
    for (const q of allQ.questions) {
        const form = document.createElement('form')
        form.id = q.id;
        form.className = "question";
        questions.appendChild(form)

        const h3 = document.createElement('h3');
        h3.innerHTML = `
        <strong>${q.question}</strong>
        <small>${q.jp}</small>
        `;
        form.appendChild(h3)

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
        form.appendChild(h4);
    }


    const aside = document.querySelector('aside')
    if (allQ.text) {
        for (const i of allQ.text) {
            const p = document.createElement('p')
            p.innerHTML = i;
            aside.appendChild(p)
        }
    }

    if (allQ.link) {
        for (const ii of allQ.link) {
            const a = document.createElement('a')
            a.textContent = ii.a;
            a.href = ii.href;
            a.setAttribute('target', '_blank')
            aside.appendChild(a)
        }
    }
}

function valuing(act) {
    const title = document.querySelector('#value h3 strong')
    const name = document.querySelector('#value h3 small')
    title.textContent = act.value;
    name.textContent = act.name;

    const section = document.querySelector('#value section')
    for (const i of act.text) {
        const p = document.createElement('p')
        p.innerHTML = i;
        section.appendChild(p)
    }

    if (act.img) {
        const img = document.querySelector('#value img')
        img.src = act.id + "/" + act.img;
        img.alt = act.value;
        img.hidden = false;
    }

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

        const header = document.querySelector('header')
        const profile = document.querySelector('#article')
        const value = document.querySelector('#value')

        if (params.get("name")) {
            header.hidden = true;
            profile.hidden = false;
            value.hidden = true;
        } else if (params.get("value")) {
            header.hidden = true;
            profile.hidden = true;
            value.hidden = false;
        } else {
            header.hidden = false;
            profile.hidden = true;
            value.hidden = true;
        }
    }
}, false)