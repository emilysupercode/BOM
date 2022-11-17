// ====================================
// 1_1
// ====================================

let threeSecondsOutput = document.querySelector("#waitThreeSeconds");
function timerPart1() {
    threeSecondsOutput.innerHTML = "Begin your three second wait..."
    setTimeout(youveWastedThreeSeconds, 3000)
}

function youveWastedThreeSeconds() {
    threeSecondsOutput.innerHTML += ("<br>congratulations, you will never get those three seconds back")
}
let timerPart2;
function timerPart2Start() {
    let newDate = new Date();
    let dateOutput = newDate.toLocaleTimeString("de-DE");
    let clockOutput = document.querySelector("#clock");
    clockOutput.innerHTML = dateOutput;
}
function writeTimer() {
    timerPart2 = setInterval(timerPart2Start, 1000)
    timerPart2Start();
}

function clearTimerPart2() {
    clearInterval(timerPart2)
}

let countdownArray = [
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    "Endlich Feierabend!"
]

const countdownEl = document.querySelector("#countdown")
let i = 0;
let countdownInterval;
const countdown = () => {
    if (i < 11) {
        countdownEl.innerHTML = `${countdownEl.innerHTML}<br>${countdownArray[i]}`;
    } else {
        clearInterval(countdownInterval)
    }
    i++;
}

function startCountdown() {
    countdown();
    countdownInterval = setInterval(countdown, 1000);
}

// ====================================
// 1_2
// ====================================

const btn = document.querySelector("#btn");
let percentTime = document.querySelector(".zeit");
let percent = percentTime.innerHTML.replace("%", "");
let percentNumber = Number(percent)

const percentCountdown = () => {
    if (percentNumber < 101 && percentNumber >= 0) {
        percentTime.innerHTML = percentNumber-- + "%";
    } else {
        clearInterval(percent)
    }
}

function startPercentCountdown() {
    percentCountdown();
    percent = setInterval(percentCountdown, 100)
}

// ====================================
// 1_9
// ====================================

// see ex 1_9 js

// ====================================
// 2_1
// ====================================

// see ex 2_1 js

// ====================================
// 3_2
// ====================================

// see ex3_2 js file