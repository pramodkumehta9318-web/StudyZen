let progress = 0;

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const bootText = document.getElementById("bootText");
const tip = document.getElementById("tip");

const bootMessages = [
    "Initializing neural engine...",
    "Loading focus core...",
    "Syncing AI modules...",
    "Calibrating brain waves...",
    "Preparing dashboard..."
];

const tips = [
    "Tip: Deep focus beats long hours.",
    "Tip: No phone = double productivity.",
    "Tip: Consistency > Motivation.",
    "Tip: One task. Full power."
];

const loader = setInterval(() => {
    progress += Math.floor(Math.random() * 3) + 1;

    if (progress > 100) progress = 100;

    bar.style.width = progress + "%";
    percent.innerText = progress + "%";

    if (progress % 20 === 0) {
        bootText.innerText = bootMessages[(progress / 20) - 1] || "Almost ready...";
        tip.innerText = tips[Math.floor(Math.random() * tips.length)];
    }

    if (progress === 100) {
        clearInterval(loader);
        bootText.innerText = "SYSTEM ONLINE";
        tip.innerText = "Welcome back, warrior.";

        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 1200);
    }

}, 120);
