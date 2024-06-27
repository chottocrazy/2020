'use strict'

function onOff() {
    const stage = document.querySelector('#stage')
    if (document.body.id === "on") {
        document.body.id = "";
        stage.hidden = true;
    } else {
        document.body.id = "on";
        stage.hidden = false;
    }
}

function inOut() {
    const communication = document.querySelector('#communication')
    if (document.body.id === "in") {
        document.body.id = "";
        communication.hidden = true;
    } else {
        document.body.id = "in";
        communication.hidden = false;
    }
}