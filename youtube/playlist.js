'use strict'

let videoId,
    ii = 0,
    totalResults;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'playsinline': 1,
            'autoplay': 0,
            'controls': 0,
            'rel': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onGoogleLoad() {
    gapi.client.setApiKey('AIzaSyDBqB4snFnzISLwq_SVvIrNXzsXrZ0m6qY')
    gapi.client.load('youtube', 'v3', function () {
        const result = document.getElementById('result')
        var request = gapi.client.youtube.playlistItems.list({
            playlistId: playlistId,
            part: 'snippet,contentDetails',
            maxResults: 50,
        });

        request.execute(function (response) {
            const items = response.items;
            for (var i = 0; i < items.length; i++) {
                var snippet = items[i].snippet;
                var thisTitle = snippet.title;
                var thisID = snippet.resourceId.videoId;

                const li = document.createElement('li')
                result.appendChild(li)

                const input = document.createElement('input')
                input.setAttribute('type', 'radio')
                input.setAttribute('name', 'youtube')
                input.id = thisID;
                input.value = thisID;
                input.dataset.title = thisTitle;
                input.dataset.no = i;
                li.appendChild(input)

                const label = document.createElement('label');
                label.setAttribute('for', thisID);
                li.appendChild(label);
                const span = document.createElement('span');
                span.innerText = thisTitle;
                label.appendChild(span);

                const img = document.createElement('img');
                img.src = `https://i.ytimg.com/vi/${thisID}/mqdefault.jpg`;
                img.setAttribute('alt', thisTitle)
                label.appendChild(img);

                if (i === 0) {
                    input.checked = true;
                    ii = input.dataset.no;
                    videoId = input.value;
                } else if (i === items.length - 1) {
                    totalResults = items.length;
                }

                input.addEventListener('click', () => {
                    videoId = input.value;
                    ii = input.dataset.no;
                    player.loadVideoById({ videoId: videoId });
                });
            }
            player.loadVideoById({ videoId: videoId });
        });
    });
}

function onPlayerStateChange(event) {
    const allVIdeo = document.getElementsByName('youtube')
    const nowPlaying = document.querySelector('#title')
    const playingTrack = document.querySelector('#track')
    const playingStates = document.querySelector('#play button')

    function videoInfo() {
        nowPlaying.textContent = allVIdeo[ii].dataset.title;
        playingTrack.textContent = Number(ii) + 1 + "/" + totalResults;
    }

    // 現在のステータス取得
    var ytStatus = event.target.getPlayerState()

    // ステータスの判別
    switch (ytStatus) {
        case -1: // 未開始
            playingStates.addEventListener('click', function () {
                player.playVideo()
            }, false)
            player.playVideo()
            videoInfo()
            playingStates.textContent = "Play";
            break;

        case 0: // 終了
            if (Number(ii) + 1 === totalResults) {
                ii = 0;
            } else if (Number(ii) + 1 < totalResults) {
                ii++;
            }
            allVIdeo[ii].checked = true;
            videoId = allVIdeo[ii].value;
            player.loadVideoById({ videoId: videoId })
            player.playVideo()
            videoInfo()
            playingStates.textContent = "Now Playing";
            break;

        case 1: // 再生中
            playingStates.addEventListener('click', function () {
                player.pauseVideo();
            }, false);
            videoInfo()
            playingStates.textContent = "Now Playing";
            break;

        case 2: // 一時停止
            playingStates.textContent = 'Pause';
            playingStates.addEventListener('click', function () {
                player.playVideo();
            }, false);
            break;

        case 3: // バッファリング中
            break;

        case 5: // 頭出し済み
            break;

        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('#title');
    title.textContent = playlistTitle;

    const thisLink = document.querySelector('#link')
    thisLink.href = `https://youtube.com/playlist?list=${playlistId}`;
}, false)