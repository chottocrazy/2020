'use strict'

async function index50Q(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    by50Q(index);
    all50Q(index);
}

function by50Q(by) {
    const by50Q = document.querySelector('#by');
    by50Q.textContent = by.by;

    const typeAll = by.types;
    for (const type of typeAll) {
        const name = document.querySelector("#name");
        const eachName = document.createElement('b');
        eachName.textContent = type.title;
        name.appendChild(eachName);

        const types = document.querySelector('#types');
        const youare = document.createElement('div');
        youare.id = type.id;
        youare.innerHTML = `
        <b>${type.title}</b>
        <p>${type.message}</p>
        `;
        types.appendChild(youare);

        const dialogModal = document.querySelector('#modal');
        function onModal() {
            if (typeof dialogModal.showModal === "function") {
                dialogModal.showModal();
            } else {
                alert("The <dialog> API is not supported by this browser");
            }
        }

        const closeBtn = document.querySelector('#closeBtn');
        closeBtn.addEventListener('click', () => {
            dialogModal.close();
        });

        youare.addEventListener('click', () => {
            onModal()

            const who = document.querySelector('#who');
            if (type.url) {
                who.innerHTML = `<a href="../ccm/?name=${type.id}">${type.name}</a>`;
            } else {
                who.textContent = type.name;

            }
        });
    }
}

function all50Q(q) {
    const questions = q.questions;
    for (const q of questions) {
        const allQ = document.querySelector('#questions');
        const article = document.createElement('article');
        article.id = q.id;
        article.hidden = true;
        article.className = "question";

        const h3 = document.createElement('h3');
        h3.innerHTML = `
        <strong>${q.question}</strong>
        <small>${q.jp}</small>
        `;

        const h4 = document.createElement('h4');
        h4.innerHTML = `
        <input name="${q.id}" id="${q.id}_left" value="${q.left_to}" type="radio" />
        <label data-value="${q.left_to}" for="${q.id}_left">
        <strong>${q.yes}</strong>
        <small>${q.left}</small>
        </label>
        <input name="${q.id}" id="${q.id}_right" value="${q.light_to}" type="radio" />
        <label data-value="${q.light_to}" for="${q.id}_right">
        <strong>${q.no}</strong>
        <small>${q.right}</small>
        </label>
        `;

        allQ.appendChild(article);
        article.appendChild(h3);
        article.appendChild(h4);
    }

    const anserAll = document.querySelectorAll('#questions label');
    anserAll.forEach(anser => {
        anser.addEventListener('click', () => {
            const hiddenAll = document.querySelectorAll('#questions article, #types div');
            hiddenAll.forEach(all => {
                all.hidden = true;
                all.style.display = "none";
            });

            const targetId = `#${anser.dataset.value}`;
            const targetElement = document.querySelector(targetId);
            document.querySelector(targetId).hidden = false;
            document.querySelector(targetId).style.display = "grid";
            document.querySelector(targetId).style.minHeight = "100vh";
            const targetOffsetTop = window.scrollY + targetElement.getBoundingClientRect().top;
            window.scrollTo({
                top: targetOffsetTop,
                behavior: "smooth"
            });
        });
    });
}

index50Q()

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const start = document.querySelector('#logo');
        const cover = document.querySelector('#cover');

        start.addEventListener('click', () => {
            cover.classList.toggle('restart');
            const Q1 = document.querySelector('#Q1');
            const questions = document.querySelectorAll('#questions article');
            const types = document.querySelectorAll('#types div');

            if (cover.className === 'restart') {
                Q1.hidden = false;
                Q1.style.display = "grid";
                Q1.style.minHeight = "100vh";

                const targetOffsetTop = window.scrollY + Q1.getBoundingClientRect().top;
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });

                types.forEach(type => {
                    type.hidden = true;
                    type.style.display = "none";
                })
            } else {
                questions.forEach(question => {
                    question.hidden = true;
                    question.style.display = "none";
                })

                types.forEach(type => {
                    type.hidden = false;
                    type.style.display = "grid";
                    type.style.minHeight = "100vh";
                })

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }
});