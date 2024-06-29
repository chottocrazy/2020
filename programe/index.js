'use strict'

const params = new URLSearchParams(location.search)

async function programe(json) {
    const request = new Request(json)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    indexJson(index)
}

function indexJson(obj) {
    const header = document.querySelector('header')
    const title = document.querySelector('h1 b')
    const date = document.querySelector('h1 u')
    title.textContent = obj.title;
    date.textContent = obj.date;

    if (obj.by) {
        const h2 = document.createElement('h2')
        h2.textContent = "by";
        header.appendChild(h2)

        for (const i of obj.by) {
            const by = document.createElement('b')
            by.textContent = i;
            h2.appendChild(by)
        }
    }

    const text = document.querySelector('nav h2')
    if (obj.text) {
        text.textContent = "";
        for (const ii of obj.text) {
            text.innerHTML = ii + "<br/>";
        }
    } else if (!obj.text) {
        text.remove()
    }

    const progress = document.querySelector('#progress progress')
    const percent = document.querySelector('#progress u')
    progress.value = obj.progress;
    if (obj.progress === '100') {
        percent.textContent = "MAX";
    } else {
        percent.textContent = obj.progress + "%";
    }

    if (obj.schedule) {
        const nav = document.querySelector('nav')
        for (const iii of obj.schedule) {
            const details = document.createElement('details')
            nav.appendChild(details)
            const summary = document.createElement('summary')
            details.appendChild(summary)

            if (iii.status === "done") {
                summary.dataset.date = iii.date;
                summary.innerHTML = `
                <b>${iii.text}しました</b>`;
            }

            if (iii.html) {
                summary.className = "gradation";
                for (const iiii of iii.html) {
                    details.innerHTML += iiii
                }
            }
        }
    }
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        if (location.search) {
            document.querySelector('#headline').hidden = true;
            if (params.get("id")) {
                document.body.id = "programe";
                if (params.get("id") === "2020") {
                    programe('2020.json')
                } else {
                    programe(`${params.get("id")}/index.json`)
                }
            }
        } else {
            headline.hidden = false;
            headline()
        }
    }
}, false)

function headline() {
    topic = topic.substring(2, topic.length) + topic.substring(0, 2)
    document.querySelector('#headline').value = topic;
    setTimeout("headline()", speed)
}