let progress = 0;
const progressBar = document.getElementById("progress");
const loadingText = document.getElementById("loading-text");

const messages = [
    "Preparing your mission...",
    "Loading AI modules...",
    "Syncing discipline engine...",
    "Calibrating focus mode...",
    "Almost ready..."
];

let msgIndex = 0;

const loader = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + "%";

    if (progress % 20 < 8 && msgIndex < messages.length) {
        loadingText.textContent = messages[msgIndex];
        msgIndex++;
    }

    if (progress === 100) {
        clearInterval(loader);
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("app").style.display = "block";
        }, 600);
    }
}, 300);
