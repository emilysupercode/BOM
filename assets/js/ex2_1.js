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