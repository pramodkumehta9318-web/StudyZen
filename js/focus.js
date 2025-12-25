/* ===============================
   🎯 FOCUS MODE + BRAIN WAVES
=============================== */

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const modeText = document.getElementById("modeText");
const sessionInfo = document.getElementById("sessionInfo");
const waveSelect = document.getElementById("waveSelect");
const brainAudio = document.getElementById("brainAudio");

let time = 25 * 60;
let timer = null;
let running = false;

/* 🎧 Brain wave files */
const waveFiles = {
    theta: "../assets/theta.mp3",
    alpha: "../assets/alpha.mp3",
    beta: "../assets/beta.mp3"
};

/* ===============================
   ⏱ TIMER FUNCTIONS
=============================== */

function updateTimer() {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    timerEl.textContent =
        `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (running) return;

    running = true;
    startBrainWave();
    document.body.classList.add("focus-active");

    timer = setInterval(() => {
        time--;
        updateTimer();

        if (time <= 0) {
            clearInterval(timer);
            stopBrainWave();
            sessionInfo.textContent = "✅ Session Complete!";
        }
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    running = false;
    stopBrainWave();
    document.body.classList.remove("focus-active");
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    running = false;
    time = 25 * 60;
    updateTimer();
    stopBrainWave();
    sessionInfo.textContent = "Select wave & start focus 🔥";
    document.body.classList.remove("focus-active");
});

/* ===============================
   🧠 BRAIN WAVE SYSTEM
=============================== */

function startBrainWave() {
    const wave = waveSelect.value;
    brainAudio.src = waveFiles[wave];
    brainAudio.volume = 0.35; // safe & calm
    brainAudio.play().catch(() => {});
    sessionInfo.textContent = `🧠 ${wave.toUpperCase()} wave active`;
}

function stopBrainWave() {
    brainAudio.pause();
    brainAudio.currentTime = 0;
}

/* change wave while running */
waveSelect.addEventListener("change", () => {
    if (running) {
        startBrainWave();
    }
});

/* init */
updateTimer();
