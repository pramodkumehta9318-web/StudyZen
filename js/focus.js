// 🎯 FOCUS MODE - POMODORO TIMER

let studyTime = 25 * 60; // 25 minutes
let breakTime = 5 * 60; // 5 minutes
let timeLeft = studyTime;
let timerInterval = null;
let isStudy = true;

const timerDisplay = document.getElementById("timer");
const modeText = document.getElementById("modeText");
const sessionInfo = document.getElementById("sessionInfo");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Format time
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Update UI
function updateDisplay() {
    timerDisplay.innerText = formatTime(timeLeft);
}

// Start timer
startBtn.addEventListener("click", () => {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            switchMode();
        }
    }, 1000);
});

// Pause timer
pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset timer
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    isStudy = true;
    timeLeft = studyTime;
    modeText.innerText = "Study Time";
    sessionInfo.innerText = "Focus for 25 minutes";
    updateDisplay();
});

// Switch between study & break
function switchMode() {
    if (isStudy) {
        isStudy = false;
        timeLeft = breakTime;
        modeText.innerText = "Break Time ☕";
        sessionInfo.innerText = "Relax for 5 minutes";
        alert("⏰ Study complete! Take a break.");
    } else {
        isStudy = true;
        timeLeft = studyTime;
        modeText.innerText = "Study Time 📘";
        sessionInfo.innerText = "Focus for 25 minutes";
        alert("🔥 Break over! Back to study.");
    }
    updateDisplay();
}

// Initial display
updateDisplay();
