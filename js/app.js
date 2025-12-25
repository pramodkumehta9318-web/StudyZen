/* ===============================
   🌙 THEME TOGGLE
=============================== */

const toggle = document.querySelector(".theme-toggle");
const icon = toggle.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon");
    }
});


/* ===============================
   🎵 MUSIC TOGGLE (MOBILE SAFE)
=============================== */

const musicToggle = document.getElementById("musicToggle");
const musicIcon = musicToggle.querySelector("i");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

/* restore music state */
if (localStorage.getItem("music") === "on") {
    playMusic();
}

/* toggle on click */
musicToggle.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

/* play function */
function playMusic() {
    bgMusic.volume = 0.5; // study friendly
    bgMusic.play().then(() => {
        isPlaying = true;
        localStorage.setItem("music", "on");
        musicIcon.classList.replace("fa-music", "fa-volume-high");
    }).catch(() => {
        // mobile first interaction required
        console.log("Tap again to allow music");
    });
}

/* pause function */
function pauseMusic() {
    bgMusic.pause();
    isPlaying = false;
    localStorage.setItem("music", "off");
    musicIcon.classList.replace("fa-volume-high", "fa-music");
}
