let minuteInputEl = document.getElementById("minutes");
let timeOutputEl = document.getElementById("time");
let alertInput = document.getElementById("alert");
let myInterval;
let minutes;
let seconds = 59;
let minuteTwoDigits;
let secondTwoDigits;

function startMinCountdown() {
    minutes = Number(minuteInputEl.value);

    if (!minutes) {
        return alertInput.innerHTML = "Wie viele Minuten?";
    } else {
        alertInput.innerHTML = "";
    }

    minutes--;
    myInterval = setInterval(timerCountdown, 1000);
    let minuteTwoDigits = minutes >= 10 ? minutes : "0" + minutes;
    let secondsTwoDigits = seconds >= 10 ? seconds : "0" + seconds;
    timeOutputEl.innerHTML = minuteTwoDigits + ":" + secondsTwoDigits;
    minuteInputEl.value = "";
}

function timerCountdown() {
    if (minutes <= 0 && seconds <= 0) {
        clearInterval(myInterval)
        console.log("testfriday")
        return;
    }

    timeOutputEl.innerHTML = "00:00";
    if (seconds === 0) {
        minutes--;
        seconds = 60;
    }

    seconds--;
    let minuteTwoDigits = minutes >= 10 ? minutes : "0" + minutes;
    let secondsTwoDigits = seconds >= 10 ? seconds : "0" + seconds;
    timeOutputEl.innerHTML = minuteTwoDigits + ":" + secondsTwoDigits;
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
    seconds === 60;
    timeOutputEl.innerHTML = "00:00";
    minuteInputEl.value = "";
}
