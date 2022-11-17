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

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let today = new Date();
let thisYear = today.getFullYear();
let thisMonth = today.getMonth();
let thisDate = today.getDate();
let thisHour = today.getHours();
let thisHourTwoDigits = thisHour < 10 ? "0" + thisHour : thisHour;
let thisMinute = today.getMinutes();
let thisMinuteTwoDigits = thisMinute < 10 ? "0" + thisMinute : thisMinute;
let thisSecond = today.getSeconds();
let thisSecondTwoDigits = thisSecond < 10 ? "0" + thisSecond : thisSecond;
let thisPeriod = function getPeriod() {
    if (thisHour < 12) {
        return "AM";
    } else {
        return "PM";
    }
};
let thisWeekday = wochenTag[today.getDay()]
let thisMonthName = monate[today.getMonth()]

let dayLargeEl = document.querySelector("#dayLarge");
let daySmallEl = document.querySelector("#daySmall");
let hoursLargeEl = document.querySelector("#hoursLarge");
let hoursSmallEl = document.querySelector("#hoursSmall");
let minutesLargeEl = document.querySelector("#minutesLarge");
let minutesSmallEl = document.querySelector("#minutesSmall");
let secondsLargeEl = document.querySelector("#secondsLarge");
let secondsSmallEl = document.querySelector("#secondsSmall");
let periodLargeEl = document.querySelector("#periodLarge");
let periodSmallEl = document.querySelector("#periodSmall");

let clockDisplay1 = [
    { label: "DAY", data: thisWeekday.slice(0, 3) },
    { label: "HOURS", data: thisHourTwoDigits },
    { label: "MINUTES", data: thisMinuteTwoDigits },
    { label: "SECONDS", data: thisSecondTwoDigits },
    { label: "PERIOD", data: thisPeriod() }]

let liveClock1;
function goClock() {
    let setClock1 = () => {
        let today = new Date();
        let thisHour = today.getHours();
        let thisHourTwoDigits = thisHour < 10 ? "0" + thisHour : thisHour;
        let thisMinute = today.getMinutes();
        let thisMinuteTwoDigits = thisMinute < 10 ? "0" + thisMinute : thisMinute;
        let thisSecond = today.getSeconds();
        let thisSecondTwoDigits = thisSecond < 10 ? "0" + thisSecond : thisSecond;
        let thisPeriod = function getPeriod() {
            if (thisHour < 12) {
                return "AM";
            } else {
                return "PM";
            }
        };

        let clockDisplay1 = [
            { label: "DAY", data: thisWeekday.slice(0, 3) },
            { label: "HOURS", data: thisHourTwoDigits },
            { label: "MINUTES", data: thisMinuteTwoDigits },
            { label: "SECONDS", data: thisSecondTwoDigits },
            { label: "PERIOD", data: thisPeriod() }]


        dayLargeEl.innerHTML = clockDisplay1[0].data;
        hoursLargeEl.innerHTML = clockDisplay1[1].data;
        minutesLargeEl.innerHTML = clockDisplay1[2].data;
        secondsLargeEl.innerHTML = clockDisplay1[3].data;
        periodLargeEl.innerHTML = clockDisplay1[4].data;
        daySmallEl.innerHTML = clockDisplay1[0].label;
        hoursSmallEl.innerHTML = clockDisplay1[1].label;
        minutesSmallEl.innerHTML = clockDisplay1[2].label;
        secondsSmallEl.innerHTML = clockDisplay1[3].label;
        periodSmallEl.innerHTML = clockDisplay1[4].label;
    }
    liveClock1 = setInterval(setClock1, 1000)
}
goClock();

// ====================================
// 1_9 LIVECLOCK2
// ====================================

let dayLargeEl2 = document.querySelector("#dayLarge2");
let hoursLargeEl2 = document.querySelector("#hoursLarge2");
let minutesLargeEl2 = document.querySelector("#minutesLarge2");
let secondsLargeEl2 = document.querySelector("#secondsLarge2");
let periodLargeEl2 = document.querySelector("#periodLarge2");



let liveClock2;
function setClock2() {
    let date2 = new Date();
    let dateString = date2.toString();
    let clock2Day = dateString.slice(0, 3);
    let clock2Hours = dateString.slice(15, 18)
    let clock2Minutes = dateString.slice(19, 21)
    let clock2Seconds = dateString.slice(22, 25)
    let thisPeriod2 = thisHour < 12 ? "AM" : "PM";
    dayLargeEl2.innerHTML = clock2Day;
    hoursLargeEl2.innerHTML = clock2Hours;
    minutesLargeEl2.innerHTML = clock2Minutes;
    secondsLargeEl2.innerHTML = clock2Seconds;
    periodLargeEl2.innerHTML = thisPeriod2;
    liveClock2 = setInterval(setClock2, 1000)
}
setClock2();

// second pass performs more quickly & more consistently, 
//many fewer variables to define. much cleaner.

// ====================================
// 2_1
// ====================================

const newLoad = window.onload;
let writeHereEl = document.querySelector("#count");
let writeHereNumber = Number(writeHereEl.innerHTML);
let disappearingContent = document.querySelector("#exercise2_1");
let writeInterval;
const countdown2 = () => {
    if (writeHereNumber < 11 && writeHereNumber >= 1) {
        writeHereEl.innerHTML = writeHereNumber--;
    } else {
        clearInterval(writeInterval)
        disappearingContent.style.display = "none";
    }
}

function startCountdown2() {
    countdown2();
    writeInterval = setInterval(countdown2, 1000)
}

window.onload = startCountdown2();

// ====================================
// 3_2
// ====================================

//startMinCountdown()
//pauseMinCountdown()
//continueMinCountdown()
//resetMinCountdown()

let minuteInputEl = document.getElementById("minutes");
let timeOutputEl = document.getElementById("time");
// if input is <10, add zero before output
let timerCountdown;

// function startMinCountdown() {
//     let setUpCountdown = () => {
//         let numberInput = Number(minuteInputEl.value)
//         let minuteFourDigits = numberInput >= 10 ? numberInput + ":00" : "0" + numberInput + ":00";
//         timeOutputEl.innerHTML = minuteFourDigits;
//         console.log("start countdown")
//         setTimeout(startMinCountdown, 1000)
//     }
//     timerCountdown = setInterval(setUpCountdown, 1000)
// }

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
