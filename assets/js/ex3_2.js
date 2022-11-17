//startMinCountdown()
//pauseMinCountdown()
//continueMinCountdown()
//resetMinCountdown()

let minuteInputEl = document.getElementById("minutes");
let timeOutputEl = document.getElementById("time");
// if input is <10, add zero before output
let myInterval;
let minutes = 00;
let seconds = 00;
let minuteTwoDigits;
let secondTwoDigits;

function startMinCountdown() {
    numberInput = Number(minuteInputEl.value);
    seconds = 59;
    minutes = numberInput--;
    let minuteTwoDigits = numberInput >= 10 ? numberInput : "0" + numberInput;
    let secondTwoDigits = seconds >= 10 ? seconds : "0" + seconds;
    timeOutputEl.innerHTML = minuteTwoDigits + ":" + secondTwoDigits;
    myInterval = setInterval(timerCountdown, 100);
    minuteInputEl.value = "";
}

function timerCountdown() {
    seconds--;
    let minuteTwoDigits = numberInput >= 10 ? numberInput : "0" + numberInput;
    let secondsTwoDigits = seconds >= 10 ? seconds : "0" + seconds;
    timeOutputEl.innerHTML = minuteTwoDigits + ":" + secondsTwoDigits;

    // FIX ME
    // if ((seconds = 0) && (minutes = 0)) {
    //     console.log("test4")
    //     clearInterval(myInterval)
    //     return;
    // } else {
    //     console.log("test2")
    //     seconds = 59;
    // }
}

function pauseMinCountdown() {
    clearInterval(myInterval);
}

function continueMinCountdown() {
    myInterval = setInterval(timerCountdown, 1000)
}

function resetMinCountdown() {
    clearInterval(myInterval);
    minutes === 00;
    seconds === 00;
    timeOutputEl.innerHTML = "00:00";
    minuteInputEl.value = "";
}

// =====================================
// trash
// =====================================
// in timerCountdown
// else if (timeOutputEl.innerHTML == '00:00') {
//     console.log("test3")
//     clearInterval(myInterval)
// }

// in startMinCountdown
// if (minutes === 0 && seconds === 0) {
//     console.log("test1")
//     clearInterval(myInterval);
// } else if (seconds === 0) {
//     seconds = 59;
//     minutes = numberInput--;
// }