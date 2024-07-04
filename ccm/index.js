'use strict'

const params = new URLSearchParams(location.search)

if (params.get("name") === "chishima") {
    questions("chishima/10q.json")
}

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
            const programe = document.querySelector('#profile #things')
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
            } else {
                programe.remove()
            }

            if (mate.value) {
                for (const iii of mate.value) {
                    const a = document.createElement('a')
                    a.textContent = iii.title;
                    a.href = `?value=${mate.id}`;
                    valuing.appendChild(a)
                }
            } else {
                valuing.remove()
            }

            questions(`${mate.id}/10q.json`)
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

    if (params.get("name") === "chishima") {
        const name = document.querySelector('#profile h2 ruby b')
        const yomi = document.querySelector('#profile h2 ruby rt')
        const programe = document.querySelector('#profile #things')
        const valuing = document.querySelector('#profile #valuing')

        name.textContent = allQ.yomi;
        yomi.textContent = allQ.name;

        programe.remove()
        valuing.remove()
    }
}

function valuing(act) {
    const body = document.body;
    const article = document.createElement('article')
    article.className = "value";
    body.appendChild(article);

    const h3 = document.createElement('h3');
    h3.className = "ja vertical";
    article.appendChild(h3);
    const title = document.createElement('strong');
    title.textContent = act.value;
    h3.appendChild(title);
    const name = document.createElement('small');
    name.textContent = act.name;
    h3.appendChild(name);

    if (act.img) {
        const img = document.createElement('img');
        img.src = act.id + "/" + act.img;
        img.alt = act.value;
        article.appendChild(img);
    }

    const section = document.createElement('section');
    section.className = "ja_app";
    article.appendChild(section);
    for (const i of act.text) {
        const p = document.createElement('p');
        p.innerHTML = i;
        section.appendChild(p);
    }
}

function headline() {
    ccm = ccm.substring(2, ccm.length) + ccm.substring(0, 2)
    document.querySelector('#headline').value = ccm;
    setTimeout("headline()", speed)
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const header = document.querySelector('header')
        const profile = document.querySelector('#article')

        if (params.get("name")) {
            header.hidden = true;
            profile.hidden = false;
            indexJSON()
        } else if (params.get("value")) {
            header.hidden = true;
            profile.hidden = true;
            if (params.get("value") === "20201015") {
                value("asano/value.json");
                value("yexuqo/value.json");
                value("kennypain/value.json");
                value("seaketa/value.json");
            } else if (params.get("value") === "20201115") {
                value("rie/value.json");
                value("itochan/value.json");
                value("ayumihirono/value.json");
                value("yutoohashi/value.json");
            } else if (params.get("value") === "20201201") {
                value("kakitaibuki/value.json");
                value("twontwon/value.json");
                value("yuikuroki/value.json");
                value("wannabeyouth/value.json");
            } else if (params.get("value") === "20201215") {
                header.hidden = true;
                profile.hidden = true;
                value("chukuippa/value.json");
                value("jackdoe/value.json");
                value("sou/value.json");
                value("shokoyamamura/value.json");
                value("yamamoo/value.json");
            } else {
                value(`${params.get("value")}/value.json`);
            }
        } else {
            headline()
            indexJSON()

            header.hidden = false;
            profile.hidden = true;
        }
    }
}, false)