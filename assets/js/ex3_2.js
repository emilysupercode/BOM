//startMinCountdown()
//pauseMinCountdown()
//continueMinCountdown()
//resetMinCountdown()

let minuteInputEl = document.getElementById("minutes");
let timeOutputEl = document.getElementById("time");
// if input is <10, add zero before output
let timerCountdown;
let minuteTwoDigits;
let seconds;

function startMinCountdown() {
    let setUpCountdown = () => {
        let numberInput = Number(minuteInputEl.value)
        minuteTwoDigits = numberInput >= 10 ? numberInput + ":" : "0" + numberInput + ":";
        seconds = 60;
        let secondsTwoDigits = seconds < 10 ? "0" + seconds : seconds;
        timeOutputEl.innerHTML = minuteTwoDigits + secondsTwoDigits;
        console.log("start countdown")
        setTimeout(startMinCountdown, 1000)
    }
    timerCountdown = setInterval(setUpCountdown, 1000)
}

// var minutes = 0;
// var interval;

// function timer() {
//     minutes = minutes - 1;

//     minuteInputEl.innerHTML = minutes; // watch for spelling

//     if (minutes <= 0) {
//         //counter ended, do something here
//         window.clearInterval(interval);
//         return;
//     }
// }


// function fetchInput() {


//     interval = setInterval(timer, 1000);

//     return false;
// }
