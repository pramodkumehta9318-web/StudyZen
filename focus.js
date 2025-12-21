let focus = 25 * 60;
let shortBreak = 5 * 60;
let longBreak = 15 * 60;

let time = focus;
let timer;
let sessions = 0;

let streak = Number(localStorage.getItem("studyzen-streak")) || 0;
let breakCount = Number(localStorage.getItem("studyzen-break-count")) || 0;

const display = document.getElementById("timer");
const mode = document.getElementById("modeText");

function start() {
    if (timer) return;
    timer = setInterval(() => {
        time--;
        display.innerText = format(time);
        if (time <= 0) switchMode();
    }, 1000);
}

function switchMode() {
    clearInterval(timer);
    timer = null;

    if (mode.innerText.includes("Study")) {
        streak++;
        sessions++;
        localStorage.setItem("studyzen-streak", streak);
        localStorage.setItem("studyzen-last-study-date", new Date().toDateString());

        if (sessions % 4 === 0) {
            time = longBreak;
            mode.innerText = "Long Break 😴";
        } else {
            time = shortBreak;
            mode.innerText = "Short Break ☕";
        }
        breakCount++;
        localStorage.setItem("studyzen-break-count", breakCount);
    } else {
        time = focus;
        mode.innerText = "Study Time 📘";
    }
}

function format(s) {
    return Math.floor(s / 60) + ":" + (s % 60).toString().padStart(2, "0");
}
