'use strict'

let mottoAll = {
    index: []
};

async function csvtojson(csv) {
    const response = await fetch(csv + '?' + Date.now())
    const text = await response.text()
    if (!text.length == 0) {
        const data = text.trim().split('\n')
            .map(line => line.split(',').map(x => x.trim()))
            .map(comma => {
                let policy = comma[0].replaceAll('"', "");
                let name = comma[1].replaceAll('"', "");
                let timestamp = comma[2].replaceAll('"', "");

                let mottoEach = {
                    policy: policy,
                    name: name,
                    timestamp: timestamp
                };
                mottoAll.index.push(mottoEach);
            }, false)

        viewAll(data.length);
    }
}

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    }
    return array;
}

async function viewAll(no) {
    const shuffleMotto = shuffle(mottoAll.index);
    const thisMotto = document.querySelector('#card');
    thisMotto.dataset.motto = shuffleMotto[0].policy;
    const mottoBy = document.querySelector('main h2');
    mottoBy.textContent = `これは「${shuffleMotto[0].name}」の座右の銘でした。`;

    const readme = document.querySelector('#readme');
    const u = document.createElement('u');
    u.innerHTML = `<small>これまでに投稿された</small>
    <time>${no}</time>
    <small>つの座右の銘</small>
    `;
    readme.appendChild(u);


    for (const post of shuffleMotto) {
        const section = document.createElement('section');
        const h3 = document.createElement('h3');
        h3.textContent = post.policy;
        const p = document.createElement('p');
        p.textContent = `これは「${post.name}」の座右の銘です。`;
        readme.appendChild(section);
        section.appendChild(h3);
        section.appendChild(p);
    }
}

function newMotto() {
    const readme = document.querySelector('#readme')
    readme.textContent = "";

    const h1 = document.querySelector('main h1');
    h1.textContent = "新しいあなたの座右の銘";

    csvtojson("index.csv");

    let d = new Date(localStorage.getItem("latest"))
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    const you = document.createElement('section')
    you.className = "mymotto"
    you.innerHTML = `
    <p>あなたが
    <time>${year}</time>年<time>${month}</time>月<time>${day}</time>日</time>
    に投稿した座右の銘</p>
    <strong>${localStorage.getItem("yourPolicy")}</strong>
    `;
    readme.appendChild(you);
}

window.addEventListener("load", () => {
    const yourPolicy = document.forms['motto'].elements['yourPolicy']
    const yourName = document.forms['motto'].elements['yourName']
    if (localStorage.getItem("yourName")) {
        yourName.value = localStorage.getItem("yourName");
    }

    if (localStorage.getItem("yourPolicy")) {
        newMotto()
    } else {
        textTXT('README.md', '#readme')
    }

    document.forms['motto'].addEventListener("submit", (event) => {
        event.preventDefault();
        thisAudio?.stop();
        clickAudio('click/submit.wav')

        for (let [name, value] of new FormData(motto)) {
            localStorage.setItem(name, value)
        }

        const d = new Date()
        localStorage.setItem("latest", d.toString())

        let thisPolicy = {
            policy: yourPolicy.value,
            name: yourName.value,
            timestamp: d.toString()
        }

        const thisJSON = JSON.stringify(thisPolicy)
        async function submitThis() {
            await fetch('submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: thisJSON
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
        submitThis()

        setTimeout(async () => {
            document.querySelector("dialog").close()

            thisFile = "bgm/new.wav";
            const playThis = await setAudio(thisFile)
            playAudio(ctx, playThis)

            newMotto()
        }, 4000)
    });
});
