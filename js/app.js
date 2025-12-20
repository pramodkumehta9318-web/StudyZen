// 🌙 DARK MODE TOGGLE

const themeToggle = document.querySelector(".theme-toggle");
const icon = themeToggle.querySelector("i");

// Page load par saved theme check karo
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("studyzen-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});

// Toggle click event
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Icon change
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("studyzen-theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("studyzen-theme", "light");
    }
});
