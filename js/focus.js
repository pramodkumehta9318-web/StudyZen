let focus = 25 * 60;
let shortBreak = 5 * 60;
let longBreak = 15 * 60;

let time = focus;
let timer = null;

const display = document.getElementById("timer");
const mode = document.getElementById("modeText");
const info = document.getElementById("sessionInfo");

const audio = document.getElementById("brainAudio");
const waveSelect = document.getElementById("waveSelect");

const waves = {
    theta: "../assets/sounds/theta.mp3",
    alpha: "../assets/sounds/alpha.mp3",
    beta: "../assets/sounds/beta.mp3"
};

display.innerText = format(time);

// ▶ START — AUDIO MUST PLAY HERE
document.getElementById("startBtn").addEventListener("click", () => {

    // 🔥 THIS IS THE KEY LINE
    audio.src = waves[waveSelect.value];
    audio.volume = 0.4;
    audio.play();   // ✅ guaranteed (user click)

    if (timer) return;

    timer = setInterval(() => {
        time--;
        if (time <= 0) {
            switchMode();
        } else {
            display.innerText = format(time);
        }
    }, 1000);

    info.innerText = "Brain waves active 🧠";
});

// ⏸ PAUSE
document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    audio.pause();
    info.innerText = "Paused ⏸";
});

// 🔁 RESET
document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    audio.pause();
    time = focus;
    mode.innerText = "Study Time 📘";
    display.innerText = format(time);
    info.innerText = "Reset done";
});

function switchMode() {
    clearInterval(timer);
    timer = null;
    audio.pause();

    if (mode.innerText.includes("Study")) {
        time = shortBreak;
        mode.innerText = "Short Break ☕";
        info.innerText = "Break time";
    } else {
        time = focus;
        mode.innerText = "Study Time 📘";
        info.innerText = "Back to focus";
    }

    display.innerText = format(time);
}

function format(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}
